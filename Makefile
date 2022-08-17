init: docker-down-clear \
	  frontend-clear \
	  docker-pull docker-build docker-up \
	  frontend-init

up: docker-up
down: docker-down
restart: down up

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

frontend-clear:
	docker run --rm -v ${PWD}:/app -w /app alpine sh -c 'rm -rf .ready'

frontend-init: frontend-yarn-install frontend-ready

frontend-yarn-install:
	docker-compose run --rm frontend-node-cli yarn install

frontend-ready:
	docker run --rm -v ${PWD}:/app -w /app alpine touch .ready

frontend-lint:
	docker-compose run --rm frontend-node-cli yarn lint