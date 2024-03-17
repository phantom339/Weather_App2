pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {                
                checkout scm
            }
        }
        
        stage('package') {
            steps {
                sh 'mvn package'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn install'
            }
        }
        
        stage('Test') {
            steps {
                
                sh 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                
                sh 'mvn deploy'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! Project built and deployed.'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}
