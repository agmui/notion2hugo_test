---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAYENLD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8TSR9rmy%2BJ3Z6kh5xacRkg1kFA2iuyb5zuyWhnaIfywIgQjy6oqmFgyqeRsw6jL0VcTP9lEbjAb0wq13vOHJDURsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFrud90R5eDxADd53ircA1GL7SEZjD0ni2ctDpRtbwm5UtOUYRJtTcJlMxQwxkXgS1lz3%2BYfRr3EBmZFSDpF%2FJK0ibM6akO%2B%2FMXSokprg2Mr8UiIKENt4hzpSprOmiMqFLjEH78jTQS7oDCIQZjdn%2BQ3i1xzHm4sf2SwlkNjmd8MMR3FUMUg0CHB9nGxwDogZK4OlX2%2FaONYHLF8tdV6ATVPf%2BovvvCTlVRhjR68WSOM2A1uc6Z8qA3T1sl9%2BuBTmbMuBVQ82XO9gbtwDXnpdyTg8yf7cre5iDISFqA%2Ft3%2FCg00IEV2NO42RHMDNQ1bZ6mUpUmyUOk%2B9HTuaHFPolfuk7dSPJ16dUoezFyAInaGpo8euMOixzFpzok9iKBiVUAJdwK1CzYEaY1adkyds5zBapXYvpQchlWTJHDPIcOvl3t56f9tPNrFcoBfifSZ5%2BHvzHM19ZmSwmRUeZeH4PBQ8OxwJNGaVXJ9WjGtMzSVX3rK88sFwfentdKtYV4zrLhBSEvqso9%2Fix%2Bv1xOggCZO7ilK5Ennj8K88rOjlL1IDsijeYFCO5peFJGj6THxf3UZpUGPoAyiQqjG1BjRDDIPRHz%2FFIE2idcjPJbjV%2BWT5oaF5GUM6Dh8cT2FbriIzn8wAAVqZzS4D3KODMJH3h8AGOqUBpo2adipG7qBPFXu7lMxUL4KTgGO7ZWqQbWbgAvU3ExzDPwU2OMt7iHy4jmiDaZAB5VbSwUq%2FKZ8yDlbiDftV3W8ck7OeTUKlgazELPAw5s%2FT%2FNDEv7jKyL%2FVLE5CQQJWz4SDTzHqhFO9T2x0arisB0fn9vltelrJwM9o5lKsLdQ47VgK6pahJvGt9Ep3hbp3Vr%2FEZpCrw3yWEiYWs8s4L%2BT3cnQL&X-Amz-Signature=7ab128e2dfb8199e3f7f3e30a85669524628fe7b74d82960e930d3e45a284764&X-Amz-SignedHeaders=host&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAYENLD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8TSR9rmy%2BJ3Z6kh5xacRkg1kFA2iuyb5zuyWhnaIfywIgQjy6oqmFgyqeRsw6jL0VcTP9lEbjAb0wq13vOHJDURsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFrud90R5eDxADd53ircA1GL7SEZjD0ni2ctDpRtbwm5UtOUYRJtTcJlMxQwxkXgS1lz3%2BYfRr3EBmZFSDpF%2FJK0ibM6akO%2B%2FMXSokprg2Mr8UiIKENt4hzpSprOmiMqFLjEH78jTQS7oDCIQZjdn%2BQ3i1xzHm4sf2SwlkNjmd8MMR3FUMUg0CHB9nGxwDogZK4OlX2%2FaONYHLF8tdV6ATVPf%2BovvvCTlVRhjR68WSOM2A1uc6Z8qA3T1sl9%2BuBTmbMuBVQ82XO9gbtwDXnpdyTg8yf7cre5iDISFqA%2Ft3%2FCg00IEV2NO42RHMDNQ1bZ6mUpUmyUOk%2B9HTuaHFPolfuk7dSPJ16dUoezFyAInaGpo8euMOixzFpzok9iKBiVUAJdwK1CzYEaY1adkyds5zBapXYvpQchlWTJHDPIcOvl3t56f9tPNrFcoBfifSZ5%2BHvzHM19ZmSwmRUeZeH4PBQ8OxwJNGaVXJ9WjGtMzSVX3rK88sFwfentdKtYV4zrLhBSEvqso9%2Fix%2Bv1xOggCZO7ilK5Ennj8K88rOjlL1IDsijeYFCO5peFJGj6THxf3UZpUGPoAyiQqjG1BjRDDIPRHz%2FFIE2idcjPJbjV%2BWT5oaF5GUM6Dh8cT2FbriIzn8wAAVqZzS4D3KODMJH3h8AGOqUBpo2adipG7qBPFXu7lMxUL4KTgGO7ZWqQbWbgAvU3ExzDPwU2OMt7iHy4jmiDaZAB5VbSwUq%2FKZ8yDlbiDftV3W8ck7OeTUKlgazELPAw5s%2FT%2FNDEv7jKyL%2FVLE5CQQJWz4SDTzHqhFO9T2x0arisB0fn9vltelrJwM9o5lKsLdQ47VgK6pahJvGt9Ep3hbp3Vr%2FEZpCrw3yWEiYWs8s4L%2BT3cnQL&X-Amz-Signature=b95f7f7f8346830c4aed8b0f8aa25ccc9031d9d7505b09f1ba774c4ef4a995ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAYENLD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8TSR9rmy%2BJ3Z6kh5xacRkg1kFA2iuyb5zuyWhnaIfywIgQjy6oqmFgyqeRsw6jL0VcTP9lEbjAb0wq13vOHJDURsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFrud90R5eDxADd53ircA1GL7SEZjD0ni2ctDpRtbwm5UtOUYRJtTcJlMxQwxkXgS1lz3%2BYfRr3EBmZFSDpF%2FJK0ibM6akO%2B%2FMXSokprg2Mr8UiIKENt4hzpSprOmiMqFLjEH78jTQS7oDCIQZjdn%2BQ3i1xzHm4sf2SwlkNjmd8MMR3FUMUg0CHB9nGxwDogZK4OlX2%2FaONYHLF8tdV6ATVPf%2BovvvCTlVRhjR68WSOM2A1uc6Z8qA3T1sl9%2BuBTmbMuBVQ82XO9gbtwDXnpdyTg8yf7cre5iDISFqA%2Ft3%2FCg00IEV2NO42RHMDNQ1bZ6mUpUmyUOk%2B9HTuaHFPolfuk7dSPJ16dUoezFyAInaGpo8euMOixzFpzok9iKBiVUAJdwK1CzYEaY1adkyds5zBapXYvpQchlWTJHDPIcOvl3t56f9tPNrFcoBfifSZ5%2BHvzHM19ZmSwmRUeZeH4PBQ8OxwJNGaVXJ9WjGtMzSVX3rK88sFwfentdKtYV4zrLhBSEvqso9%2Fix%2Bv1xOggCZO7ilK5Ennj8K88rOjlL1IDsijeYFCO5peFJGj6THxf3UZpUGPoAyiQqjG1BjRDDIPRHz%2FFIE2idcjPJbjV%2BWT5oaF5GUM6Dh8cT2FbriIzn8wAAVqZzS4D3KODMJH3h8AGOqUBpo2adipG7qBPFXu7lMxUL4KTgGO7ZWqQbWbgAvU3ExzDPwU2OMt7iHy4jmiDaZAB5VbSwUq%2FKZ8yDlbiDftV3W8ck7OeTUKlgazELPAw5s%2FT%2FNDEv7jKyL%2FVLE5CQQJWz4SDTzHqhFO9T2x0arisB0fn9vltelrJwM9o5lKsLdQ47VgK6pahJvGt9Ep3hbp3Vr%2FEZpCrw3yWEiYWs8s4L%2BT3cnQL&X-Amz-Signature=52191d414eaa92438bda3fdafa33d5cffe351ad7be25208b0eacf0118273b889&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAYENLD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8TSR9rmy%2BJ3Z6kh5xacRkg1kFA2iuyb5zuyWhnaIfywIgQjy6oqmFgyqeRsw6jL0VcTP9lEbjAb0wq13vOHJDURsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFrud90R5eDxADd53ircA1GL7SEZjD0ni2ctDpRtbwm5UtOUYRJtTcJlMxQwxkXgS1lz3%2BYfRr3EBmZFSDpF%2FJK0ibM6akO%2B%2FMXSokprg2Mr8UiIKENt4hzpSprOmiMqFLjEH78jTQS7oDCIQZjdn%2BQ3i1xzHm4sf2SwlkNjmd8MMR3FUMUg0CHB9nGxwDogZK4OlX2%2FaONYHLF8tdV6ATVPf%2BovvvCTlVRhjR68WSOM2A1uc6Z8qA3T1sl9%2BuBTmbMuBVQ82XO9gbtwDXnpdyTg8yf7cre5iDISFqA%2Ft3%2FCg00IEV2NO42RHMDNQ1bZ6mUpUmyUOk%2B9HTuaHFPolfuk7dSPJ16dUoezFyAInaGpo8euMOixzFpzok9iKBiVUAJdwK1CzYEaY1adkyds5zBapXYvpQchlWTJHDPIcOvl3t56f9tPNrFcoBfifSZ5%2BHvzHM19ZmSwmRUeZeH4PBQ8OxwJNGaVXJ9WjGtMzSVX3rK88sFwfentdKtYV4zrLhBSEvqso9%2Fix%2Bv1xOggCZO7ilK5Ennj8K88rOjlL1IDsijeYFCO5peFJGj6THxf3UZpUGPoAyiQqjG1BjRDDIPRHz%2FFIE2idcjPJbjV%2BWT5oaF5GUM6Dh8cT2FbriIzn8wAAVqZzS4D3KODMJH3h8AGOqUBpo2adipG7qBPFXu7lMxUL4KTgGO7ZWqQbWbgAvU3ExzDPwU2OMt7iHy4jmiDaZAB5VbSwUq%2FKZ8yDlbiDftV3W8ck7OeTUKlgazELPAw5s%2FT%2FNDEv7jKyL%2FVLE5CQQJWz4SDTzHqhFO9T2x0arisB0fn9vltelrJwM9o5lKsLdQ47VgK6pahJvGt9Ep3hbp3Vr%2FEZpCrw3yWEiYWs8s4L%2BT3cnQL&X-Amz-Signature=1d5c4f47736a9bd91fa288f8a2f792c00cb0a6c8eb140853947c18e9fd245e26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAYENLD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8TSR9rmy%2BJ3Z6kh5xacRkg1kFA2iuyb5zuyWhnaIfywIgQjy6oqmFgyqeRsw6jL0VcTP9lEbjAb0wq13vOHJDURsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFrud90R5eDxADd53ircA1GL7SEZjD0ni2ctDpRtbwm5UtOUYRJtTcJlMxQwxkXgS1lz3%2BYfRr3EBmZFSDpF%2FJK0ibM6akO%2B%2FMXSokprg2Mr8UiIKENt4hzpSprOmiMqFLjEH78jTQS7oDCIQZjdn%2BQ3i1xzHm4sf2SwlkNjmd8MMR3FUMUg0CHB9nGxwDogZK4OlX2%2FaONYHLF8tdV6ATVPf%2BovvvCTlVRhjR68WSOM2A1uc6Z8qA3T1sl9%2BuBTmbMuBVQ82XO9gbtwDXnpdyTg8yf7cre5iDISFqA%2Ft3%2FCg00IEV2NO42RHMDNQ1bZ6mUpUmyUOk%2B9HTuaHFPolfuk7dSPJ16dUoezFyAInaGpo8euMOixzFpzok9iKBiVUAJdwK1CzYEaY1adkyds5zBapXYvpQchlWTJHDPIcOvl3t56f9tPNrFcoBfifSZ5%2BHvzHM19ZmSwmRUeZeH4PBQ8OxwJNGaVXJ9WjGtMzSVX3rK88sFwfentdKtYV4zrLhBSEvqso9%2Fix%2Bv1xOggCZO7ilK5Ennj8K88rOjlL1IDsijeYFCO5peFJGj6THxf3UZpUGPoAyiQqjG1BjRDDIPRHz%2FFIE2idcjPJbjV%2BWT5oaF5GUM6Dh8cT2FbriIzn8wAAVqZzS4D3KODMJH3h8AGOqUBpo2adipG7qBPFXu7lMxUL4KTgGO7ZWqQbWbgAvU3ExzDPwU2OMt7iHy4jmiDaZAB5VbSwUq%2FKZ8yDlbiDftV3W8ck7OeTUKlgazELPAw5s%2FT%2FNDEv7jKyL%2FVLE5CQQJWz4SDTzHqhFO9T2x0arisB0fn9vltelrJwM9o5lKsLdQ47VgK6pahJvGt9Ep3hbp3Vr%2FEZpCrw3yWEiYWs8s4L%2BT3cnQL&X-Amz-Signature=a6bac083bedf2cb73eb79a386f4f1a712a3d47f7f7551ceec2e44c3ac1e77660&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
