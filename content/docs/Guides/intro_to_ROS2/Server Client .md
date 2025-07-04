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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FCKIDG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD%2FN0ruvri6Z1ONz7GP8Z3qTq75ZG8Z1n4nP%2BqRP9wWMwIhAKxhYASaTt6q3saYhJxp0Bhi68IL9dfOY%2BbqzW4AsbgTKv8DCCkQABoMNjM3NDIzMTgzODA1Igw72ELzYxVzsFGWqtwq3ANGso28lF5d3tVOFDEipxFmDVi8dRAfgGtdWATQHmN2kjshrdBAHDHqKXUAsmMXkO4eR5zjnel3GmkirdF6ahnE7YpCQUymJc1LSGodjt9r%2BnIVDxm2WPzoQ5q1TvI8rhGVpkjKXM42fJ03NUTTI%2BQZxrmuOEfZbJ1Hq4ivNAXwfP6qBDUrYypbIul6TV%2F%2Fr1fXK6rCr163RuCVi2QIgHsFaGJ7w4zH96tk%2BtThh0e4l5V%2Bf3RrTXhj4v8kiDwPrAt%2FS33xQdRmwJYm%2FpRjIyunBIcaenmM2tBZWzKJWbMx4at%2BLOHstSGFEl8JghNmOoQPwhxvnok58onIOWSNeNl4qnxI4ZYuXNz2yznhJnJWg8h89%2FOI9sAI1fl0DorWvurozErARffgnpOXZN5v6EHyMv%2FfL2LuhiSTofLlmi0sh8FOGZjKDmR8NTLz9SLntP4AkbpjycHvWKL9%2BFKwNd093bQEQrOn5jXgMyyA4N3%2BjIFm6TQc4sppZIf5ovE188fNqgaO%2Ba0spvykPH4eHm1wkadXgL%2B0NemDWQWCpiKo34t1hspIYCdh1ipbM%2BCC7PNqj%2FSfWp2GDIpEQuMKp9Vq0Ve0eu7UE1BiMTKhnYBUHhBkRcQTzU%2FlfWiwpzDwjZ7DBjqkAawaDCnZ1OX61oji2rc%2BQtk0uUVNc1Zbz%2FSIGIlvFhPzK0S7uvy5vNnWQETjh3tZFVHQAqT00bFfXshsHG8Dzm7rNkKtMgdjSR0dZESADtOOf092fEWtgkHBLFFuJmaVAumgzCgS%2Besc401V1q0NJyZyL21YnVrNP2COCkPaytBkjsJiMGO2aATH0HKPUHS9dX6bwiWsRE0tB4HNi4uQcROpozWy&X-Amz-Signature=01044c6a50dee103070cf92e883f673085724f5c5b52e5cd8db9d6aa3f47cb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FCKIDG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD%2FN0ruvri6Z1ONz7GP8Z3qTq75ZG8Z1n4nP%2BqRP9wWMwIhAKxhYASaTt6q3saYhJxp0Bhi68IL9dfOY%2BbqzW4AsbgTKv8DCCkQABoMNjM3NDIzMTgzODA1Igw72ELzYxVzsFGWqtwq3ANGso28lF5d3tVOFDEipxFmDVi8dRAfgGtdWATQHmN2kjshrdBAHDHqKXUAsmMXkO4eR5zjnel3GmkirdF6ahnE7YpCQUymJc1LSGodjt9r%2BnIVDxm2WPzoQ5q1TvI8rhGVpkjKXM42fJ03NUTTI%2BQZxrmuOEfZbJ1Hq4ivNAXwfP6qBDUrYypbIul6TV%2F%2Fr1fXK6rCr163RuCVi2QIgHsFaGJ7w4zH96tk%2BtThh0e4l5V%2Bf3RrTXhj4v8kiDwPrAt%2FS33xQdRmwJYm%2FpRjIyunBIcaenmM2tBZWzKJWbMx4at%2BLOHstSGFEl8JghNmOoQPwhxvnok58onIOWSNeNl4qnxI4ZYuXNz2yznhJnJWg8h89%2FOI9sAI1fl0DorWvurozErARffgnpOXZN5v6EHyMv%2FfL2LuhiSTofLlmi0sh8FOGZjKDmR8NTLz9SLntP4AkbpjycHvWKL9%2BFKwNd093bQEQrOn5jXgMyyA4N3%2BjIFm6TQc4sppZIf5ovE188fNqgaO%2Ba0spvykPH4eHm1wkadXgL%2B0NemDWQWCpiKo34t1hspIYCdh1ipbM%2BCC7PNqj%2FSfWp2GDIpEQuMKp9Vq0Ve0eu7UE1BiMTKhnYBUHhBkRcQTzU%2FlfWiwpzDwjZ7DBjqkAawaDCnZ1OX61oji2rc%2BQtk0uUVNc1Zbz%2FSIGIlvFhPzK0S7uvy5vNnWQETjh3tZFVHQAqT00bFfXshsHG8Dzm7rNkKtMgdjSR0dZESADtOOf092fEWtgkHBLFFuJmaVAumgzCgS%2Besc401V1q0NJyZyL21YnVrNP2COCkPaytBkjsJiMGO2aATH0HKPUHS9dX6bwiWsRE0tB4HNi4uQcROpozWy&X-Amz-Signature=2844a390ade2571d7ec1e5c87147f5a7f5da2f46737f1d94ca662b08b4823f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FCKIDG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD%2FN0ruvri6Z1ONz7GP8Z3qTq75ZG8Z1n4nP%2BqRP9wWMwIhAKxhYASaTt6q3saYhJxp0Bhi68IL9dfOY%2BbqzW4AsbgTKv8DCCkQABoMNjM3NDIzMTgzODA1Igw72ELzYxVzsFGWqtwq3ANGso28lF5d3tVOFDEipxFmDVi8dRAfgGtdWATQHmN2kjshrdBAHDHqKXUAsmMXkO4eR5zjnel3GmkirdF6ahnE7YpCQUymJc1LSGodjt9r%2BnIVDxm2WPzoQ5q1TvI8rhGVpkjKXM42fJ03NUTTI%2BQZxrmuOEfZbJ1Hq4ivNAXwfP6qBDUrYypbIul6TV%2F%2Fr1fXK6rCr163RuCVi2QIgHsFaGJ7w4zH96tk%2BtThh0e4l5V%2Bf3RrTXhj4v8kiDwPrAt%2FS33xQdRmwJYm%2FpRjIyunBIcaenmM2tBZWzKJWbMx4at%2BLOHstSGFEl8JghNmOoQPwhxvnok58onIOWSNeNl4qnxI4ZYuXNz2yznhJnJWg8h89%2FOI9sAI1fl0DorWvurozErARffgnpOXZN5v6EHyMv%2FfL2LuhiSTofLlmi0sh8FOGZjKDmR8NTLz9SLntP4AkbpjycHvWKL9%2BFKwNd093bQEQrOn5jXgMyyA4N3%2BjIFm6TQc4sppZIf5ovE188fNqgaO%2Ba0spvykPH4eHm1wkadXgL%2B0NemDWQWCpiKo34t1hspIYCdh1ipbM%2BCC7PNqj%2FSfWp2GDIpEQuMKp9Vq0Ve0eu7UE1BiMTKhnYBUHhBkRcQTzU%2FlfWiwpzDwjZ7DBjqkAawaDCnZ1OX61oji2rc%2BQtk0uUVNc1Zbz%2FSIGIlvFhPzK0S7uvy5vNnWQETjh3tZFVHQAqT00bFfXshsHG8Dzm7rNkKtMgdjSR0dZESADtOOf092fEWtgkHBLFFuJmaVAumgzCgS%2Besc401V1q0NJyZyL21YnVrNP2COCkPaytBkjsJiMGO2aATH0HKPUHS9dX6bwiWsRE0tB4HNi4uQcROpozWy&X-Amz-Signature=813cd649b7f8a9f95022b0641b73dd5e5da92ca230a6ec508c640b1f1dce6212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FCKIDG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD%2FN0ruvri6Z1ONz7GP8Z3qTq75ZG8Z1n4nP%2BqRP9wWMwIhAKxhYASaTt6q3saYhJxp0Bhi68IL9dfOY%2BbqzW4AsbgTKv8DCCkQABoMNjM3NDIzMTgzODA1Igw72ELzYxVzsFGWqtwq3ANGso28lF5d3tVOFDEipxFmDVi8dRAfgGtdWATQHmN2kjshrdBAHDHqKXUAsmMXkO4eR5zjnel3GmkirdF6ahnE7YpCQUymJc1LSGodjt9r%2BnIVDxm2WPzoQ5q1TvI8rhGVpkjKXM42fJ03NUTTI%2BQZxrmuOEfZbJ1Hq4ivNAXwfP6qBDUrYypbIul6TV%2F%2Fr1fXK6rCr163RuCVi2QIgHsFaGJ7w4zH96tk%2BtThh0e4l5V%2Bf3RrTXhj4v8kiDwPrAt%2FS33xQdRmwJYm%2FpRjIyunBIcaenmM2tBZWzKJWbMx4at%2BLOHstSGFEl8JghNmOoQPwhxvnok58onIOWSNeNl4qnxI4ZYuXNz2yznhJnJWg8h89%2FOI9sAI1fl0DorWvurozErARffgnpOXZN5v6EHyMv%2FfL2LuhiSTofLlmi0sh8FOGZjKDmR8NTLz9SLntP4AkbpjycHvWKL9%2BFKwNd093bQEQrOn5jXgMyyA4N3%2BjIFm6TQc4sppZIf5ovE188fNqgaO%2Ba0spvykPH4eHm1wkadXgL%2B0NemDWQWCpiKo34t1hspIYCdh1ipbM%2BCC7PNqj%2FSfWp2GDIpEQuMKp9Vq0Ve0eu7UE1BiMTKhnYBUHhBkRcQTzU%2FlfWiwpzDwjZ7DBjqkAawaDCnZ1OX61oji2rc%2BQtk0uUVNc1Zbz%2FSIGIlvFhPzK0S7uvy5vNnWQETjh3tZFVHQAqT00bFfXshsHG8Dzm7rNkKtMgdjSR0dZESADtOOf092fEWtgkHBLFFuJmaVAumgzCgS%2Besc401V1q0NJyZyL21YnVrNP2COCkPaytBkjsJiMGO2aATH0HKPUHS9dX6bwiWsRE0tB4HNi4uQcROpozWy&X-Amz-Signature=c54a4ba4b265d0b51341a7e38c81ba3ce14eabf77148eaa6294a12ce12eb97d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FCKIDG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD%2FN0ruvri6Z1ONz7GP8Z3qTq75ZG8Z1n4nP%2BqRP9wWMwIhAKxhYASaTt6q3saYhJxp0Bhi68IL9dfOY%2BbqzW4AsbgTKv8DCCkQABoMNjM3NDIzMTgzODA1Igw72ELzYxVzsFGWqtwq3ANGso28lF5d3tVOFDEipxFmDVi8dRAfgGtdWATQHmN2kjshrdBAHDHqKXUAsmMXkO4eR5zjnel3GmkirdF6ahnE7YpCQUymJc1LSGodjt9r%2BnIVDxm2WPzoQ5q1TvI8rhGVpkjKXM42fJ03NUTTI%2BQZxrmuOEfZbJ1Hq4ivNAXwfP6qBDUrYypbIul6TV%2F%2Fr1fXK6rCr163RuCVi2QIgHsFaGJ7w4zH96tk%2BtThh0e4l5V%2Bf3RrTXhj4v8kiDwPrAt%2FS33xQdRmwJYm%2FpRjIyunBIcaenmM2tBZWzKJWbMx4at%2BLOHstSGFEl8JghNmOoQPwhxvnok58onIOWSNeNl4qnxI4ZYuXNz2yznhJnJWg8h89%2FOI9sAI1fl0DorWvurozErARffgnpOXZN5v6EHyMv%2FfL2LuhiSTofLlmi0sh8FOGZjKDmR8NTLz9SLntP4AkbpjycHvWKL9%2BFKwNd093bQEQrOn5jXgMyyA4N3%2BjIFm6TQc4sppZIf5ovE188fNqgaO%2Ba0spvykPH4eHm1wkadXgL%2B0NemDWQWCpiKo34t1hspIYCdh1ipbM%2BCC7PNqj%2FSfWp2GDIpEQuMKp9Vq0Ve0eu7UE1BiMTKhnYBUHhBkRcQTzU%2FlfWiwpzDwjZ7DBjqkAawaDCnZ1OX61oji2rc%2BQtk0uUVNc1Zbz%2FSIGIlvFhPzK0S7uvy5vNnWQETjh3tZFVHQAqT00bFfXshsHG8Dzm7rNkKtMgdjSR0dZESADtOOf092fEWtgkHBLFFuJmaVAumgzCgS%2Besc401V1q0NJyZyL21YnVrNP2COCkPaytBkjsJiMGO2aATH0HKPUHS9dX6bwiWsRE0tB4HNi4uQcROpozWy&X-Amz-Signature=53e5599494aa6694278ac972114d82041f34ec450ea595f1778f427b87051bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
