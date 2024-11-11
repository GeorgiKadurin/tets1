// Jenkinsfile
pipeline {
    agent any

    stages {
        stage('Сборка Docker Image') {
            steps {
                script {
                   sh 'docker build -t "gkadurin/jenapp" .'
                }
            }
        }
        stage('Запуск тестов') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Загрузка в Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry-1.docker.io/', 'docker-hub-credentials-id') {
                        docker.image('gkadurin/jenapp').push('latest')
                    }
                }
            }
        }
    }
}
