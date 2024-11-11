// Jenkinsfile
pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials-id'  // Замените на ваш ID учетных данных
        IMAGE_NAME = 'gkadurin/jenapp'  // Название вашего Docker образа
        DOCKERFILE_PATH = '/home/georgi/jenapp'  // Путь к папке с Dockerfile
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image from ${DOCKERFILE_PATH}..."
                    // Используем полный путь к Dockerfile
                    sh "docker build -t ${IMAGE_NAME} ${DOCKERFILE_PATH}"
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo "Running tests on the Docker image..."
                    // Команда для запуска тестов (например, с использованием контейнера)
                    // Убедитесь, что у вас есть тесты для запуска в контейнере
                    sh "docker run --rm ${IMAGE_NAME} test-command"  // Замените на вашу команду для тестов
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    echo "Pushing Docker image to Docker Hub..."
                    withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD}"
                        sh "docker push ${IMAGE_NAME}"
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Очищаем рабочее пространство после выполнения пайплайна
        }
    }
}

