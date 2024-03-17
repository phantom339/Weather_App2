pipeline {
    agent any tools {
        maven 'MAVEN_HOME'
    }
        stage('package') {
            steps {
                bat 'mvn package'
            }
        }

        stage('Build') {
            steps {
                bat 'mvn install'
            }
        }
        
        stage('Test') {
            steps {
                
                bat 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                
                bat 'mvn deploy'
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
