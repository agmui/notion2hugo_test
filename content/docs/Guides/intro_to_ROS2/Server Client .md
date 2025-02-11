---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCEJPFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx%2BuDDH3pd6xOwlA4PI4%2BRJfRGmx%2FRDv1JLOseaZ1FbAiBRZ7GwsoD%2BxpEFEyaIb%2BpC6%2F%2BZfZ93DzrvjlMv48qjgSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BxO9Y1lRwbz%2F32DOKtwDcJxpEqSMr2hIwGezxUZVA84pWKSy9ouQc29T9KO09of7dBmBPi1h36lp7MRym5a35BAkYg8jbw2JoTts9jQ%2FDtqjtzKWsh0c06zmvek3MJXr%2B0hUBgxtC3OQS5qlmESMlrM4FPovEVdidk6knWgPhwRtansYVCon0YAC11D3JGVfBRajAAlg3ibT5yFV1dURTcA60TF9snHUy7PAM56jw1nkzyN2iLguVvEYx73kG9%2FXyUjCzw8uIgN4yNf9D4lqbyQlB4QTPwdeaQuYEUPUZV1ot4vWhhwo%2Fjib%2B33j6mRuQ9D9uXr4LMUp17pfUVhqQt%2FbTUUpseeo1pd57xTjuyOgvqk0CUAHRZToATBD8zIOPvbCGpAHE97PAuSFGTOuDt6psSJhHyJPrmFdfJGVXJCMfqtyyIbbK7Jx0OBm8%2BckHb%2Fwq5CZlF%2FPokM%2Fw87yDdt1WGXcYC6rphDXkqMLhVkibAzAfhNDnpYhjZhZNHQsgMjkp3xORd8hFlawobCBLnKoZHAtz8RAakVGQ1xoIry4S%2Fp0EjvgFUlIGuEVWt9hihvNA4OftV1lR4Pc9WTpBnJs2U066Ic%2Bn6MoxBEsmAbv58h9Vut72HSIhagR8GOwFGGruiuVGsBqqzAw6ZKuvQY6pgGFWyOOP3qBBPW9hiU8LjShT0otmRKGvtKn%2Bg5qeh%2BWyyX0D8K3QHzxPfXFgauT0Q%2FGFes5rLWKP6hhstLkqihWyLFE1wfuCJvKvB8wQ8L4qRv2Hnq6kIAyahCIj03geCDYHl7KgZjeV2Tj9EGv3G0%2FKqRrQBj5ffy617cy9Pqgot4COmlg3E2nDR0chez2icOFjoy56%2BeFW9ePvHWcaz8n5Py2hSoy&X-Amz-Signature=caf2b1856d61eab3f2448b8468a4b7d7c8d0a4096579b7251b614a6ebab70166&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCEJPFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx%2BuDDH3pd6xOwlA4PI4%2BRJfRGmx%2FRDv1JLOseaZ1FbAiBRZ7GwsoD%2BxpEFEyaIb%2BpC6%2F%2BZfZ93DzrvjlMv48qjgSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BxO9Y1lRwbz%2F32DOKtwDcJxpEqSMr2hIwGezxUZVA84pWKSy9ouQc29T9KO09of7dBmBPi1h36lp7MRym5a35BAkYg8jbw2JoTts9jQ%2FDtqjtzKWsh0c06zmvek3MJXr%2B0hUBgxtC3OQS5qlmESMlrM4FPovEVdidk6knWgPhwRtansYVCon0YAC11D3JGVfBRajAAlg3ibT5yFV1dURTcA60TF9snHUy7PAM56jw1nkzyN2iLguVvEYx73kG9%2FXyUjCzw8uIgN4yNf9D4lqbyQlB4QTPwdeaQuYEUPUZV1ot4vWhhwo%2Fjib%2B33j6mRuQ9D9uXr4LMUp17pfUVhqQt%2FbTUUpseeo1pd57xTjuyOgvqk0CUAHRZToATBD8zIOPvbCGpAHE97PAuSFGTOuDt6psSJhHyJPrmFdfJGVXJCMfqtyyIbbK7Jx0OBm8%2BckHb%2Fwq5CZlF%2FPokM%2Fw87yDdt1WGXcYC6rphDXkqMLhVkibAzAfhNDnpYhjZhZNHQsgMjkp3xORd8hFlawobCBLnKoZHAtz8RAakVGQ1xoIry4S%2Fp0EjvgFUlIGuEVWt9hihvNA4OftV1lR4Pc9WTpBnJs2U066Ic%2Bn6MoxBEsmAbv58h9Vut72HSIhagR8GOwFGGruiuVGsBqqzAw6ZKuvQY6pgGFWyOOP3qBBPW9hiU8LjShT0otmRKGvtKn%2Bg5qeh%2BWyyX0D8K3QHzxPfXFgauT0Q%2FGFes5rLWKP6hhstLkqihWyLFE1wfuCJvKvB8wQ8L4qRv2Hnq6kIAyahCIj03geCDYHl7KgZjeV2Tj9EGv3G0%2FKqRrQBj5ffy617cy9Pqgot4COmlg3E2nDR0chez2icOFjoy56%2BeFW9ePvHWcaz8n5Py2hSoy&X-Amz-Signature=bead3a5635fd3f97f270ff54f541d5aea52dde7c0d84fbb0491750fe8406b441&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCEJPFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx%2BuDDH3pd6xOwlA4PI4%2BRJfRGmx%2FRDv1JLOseaZ1FbAiBRZ7GwsoD%2BxpEFEyaIb%2BpC6%2F%2BZfZ93DzrvjlMv48qjgSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BxO9Y1lRwbz%2F32DOKtwDcJxpEqSMr2hIwGezxUZVA84pWKSy9ouQc29T9KO09of7dBmBPi1h36lp7MRym5a35BAkYg8jbw2JoTts9jQ%2FDtqjtzKWsh0c06zmvek3MJXr%2B0hUBgxtC3OQS5qlmESMlrM4FPovEVdidk6knWgPhwRtansYVCon0YAC11D3JGVfBRajAAlg3ibT5yFV1dURTcA60TF9snHUy7PAM56jw1nkzyN2iLguVvEYx73kG9%2FXyUjCzw8uIgN4yNf9D4lqbyQlB4QTPwdeaQuYEUPUZV1ot4vWhhwo%2Fjib%2B33j6mRuQ9D9uXr4LMUp17pfUVhqQt%2FbTUUpseeo1pd57xTjuyOgvqk0CUAHRZToATBD8zIOPvbCGpAHE97PAuSFGTOuDt6psSJhHyJPrmFdfJGVXJCMfqtyyIbbK7Jx0OBm8%2BckHb%2Fwq5CZlF%2FPokM%2Fw87yDdt1WGXcYC6rphDXkqMLhVkibAzAfhNDnpYhjZhZNHQsgMjkp3xORd8hFlawobCBLnKoZHAtz8RAakVGQ1xoIry4S%2Fp0EjvgFUlIGuEVWt9hihvNA4OftV1lR4Pc9WTpBnJs2U066Ic%2Bn6MoxBEsmAbv58h9Vut72HSIhagR8GOwFGGruiuVGsBqqzAw6ZKuvQY6pgGFWyOOP3qBBPW9hiU8LjShT0otmRKGvtKn%2Bg5qeh%2BWyyX0D8K3QHzxPfXFgauT0Q%2FGFes5rLWKP6hhstLkqihWyLFE1wfuCJvKvB8wQ8L4qRv2Hnq6kIAyahCIj03geCDYHl7KgZjeV2Tj9EGv3G0%2FKqRrQBj5ffy617cy9Pqgot4COmlg3E2nDR0chez2icOFjoy56%2BeFW9ePvHWcaz8n5Py2hSoy&X-Amz-Signature=661e685a3f5bdbb1c92b09ee2fe679c5fb73089c4122a13a1b3d2542598919f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCEJPFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx%2BuDDH3pd6xOwlA4PI4%2BRJfRGmx%2FRDv1JLOseaZ1FbAiBRZ7GwsoD%2BxpEFEyaIb%2BpC6%2F%2BZfZ93DzrvjlMv48qjgSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BxO9Y1lRwbz%2F32DOKtwDcJxpEqSMr2hIwGezxUZVA84pWKSy9ouQc29T9KO09of7dBmBPi1h36lp7MRym5a35BAkYg8jbw2JoTts9jQ%2FDtqjtzKWsh0c06zmvek3MJXr%2B0hUBgxtC3OQS5qlmESMlrM4FPovEVdidk6knWgPhwRtansYVCon0YAC11D3JGVfBRajAAlg3ibT5yFV1dURTcA60TF9snHUy7PAM56jw1nkzyN2iLguVvEYx73kG9%2FXyUjCzw8uIgN4yNf9D4lqbyQlB4QTPwdeaQuYEUPUZV1ot4vWhhwo%2Fjib%2B33j6mRuQ9D9uXr4LMUp17pfUVhqQt%2FbTUUpseeo1pd57xTjuyOgvqk0CUAHRZToATBD8zIOPvbCGpAHE97PAuSFGTOuDt6psSJhHyJPrmFdfJGVXJCMfqtyyIbbK7Jx0OBm8%2BckHb%2Fwq5CZlF%2FPokM%2Fw87yDdt1WGXcYC6rphDXkqMLhVkibAzAfhNDnpYhjZhZNHQsgMjkp3xORd8hFlawobCBLnKoZHAtz8RAakVGQ1xoIry4S%2Fp0EjvgFUlIGuEVWt9hihvNA4OftV1lR4Pc9WTpBnJs2U066Ic%2Bn6MoxBEsmAbv58h9Vut72HSIhagR8GOwFGGruiuVGsBqqzAw6ZKuvQY6pgGFWyOOP3qBBPW9hiU8LjShT0otmRKGvtKn%2Bg5qeh%2BWyyX0D8K3QHzxPfXFgauT0Q%2FGFes5rLWKP6hhstLkqihWyLFE1wfuCJvKvB8wQ8L4qRv2Hnq6kIAyahCIj03geCDYHl7KgZjeV2Tj9EGv3G0%2FKqRrQBj5ffy617cy9Pqgot4COmlg3E2nDR0chez2icOFjoy56%2BeFW9ePvHWcaz8n5Py2hSoy&X-Amz-Signature=b3215487dde004ed939949a735591be00db2542b7600dec103af29e83669855e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCEJPFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBx%2BuDDH3pd6xOwlA4PI4%2BRJfRGmx%2FRDv1JLOseaZ1FbAiBRZ7GwsoD%2BxpEFEyaIb%2BpC6%2F%2BZfZ93DzrvjlMv48qjgSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BxO9Y1lRwbz%2F32DOKtwDcJxpEqSMr2hIwGezxUZVA84pWKSy9ouQc29T9KO09of7dBmBPi1h36lp7MRym5a35BAkYg8jbw2JoTts9jQ%2FDtqjtzKWsh0c06zmvek3MJXr%2B0hUBgxtC3OQS5qlmESMlrM4FPovEVdidk6knWgPhwRtansYVCon0YAC11D3JGVfBRajAAlg3ibT5yFV1dURTcA60TF9snHUy7PAM56jw1nkzyN2iLguVvEYx73kG9%2FXyUjCzw8uIgN4yNf9D4lqbyQlB4QTPwdeaQuYEUPUZV1ot4vWhhwo%2Fjib%2B33j6mRuQ9D9uXr4LMUp17pfUVhqQt%2FbTUUpseeo1pd57xTjuyOgvqk0CUAHRZToATBD8zIOPvbCGpAHE97PAuSFGTOuDt6psSJhHyJPrmFdfJGVXJCMfqtyyIbbK7Jx0OBm8%2BckHb%2Fwq5CZlF%2FPokM%2Fw87yDdt1WGXcYC6rphDXkqMLhVkibAzAfhNDnpYhjZhZNHQsgMjkp3xORd8hFlawobCBLnKoZHAtz8RAakVGQ1xoIry4S%2Fp0EjvgFUlIGuEVWt9hihvNA4OftV1lR4Pc9WTpBnJs2U066Ic%2Bn6MoxBEsmAbv58h9Vut72HSIhagR8GOwFGGruiuVGsBqqzAw6ZKuvQY6pgGFWyOOP3qBBPW9hiU8LjShT0otmRKGvtKn%2Bg5qeh%2BWyyX0D8K3QHzxPfXFgauT0Q%2FGFes5rLWKP6hhstLkqihWyLFE1wfuCJvKvB8wQ8L4qRv2Hnq6kIAyahCIj03geCDYHl7KgZjeV2Tj9EGv3G0%2FKqRrQBj5ffy617cy9Pqgot4COmlg3E2nDR0chez2icOFjoy56%2BeFW9ePvHWcaz8n5Py2hSoy&X-Amz-Signature=d6611561e52ef804750f58cb29d1067b78468adf455f989be9507dd5e612878e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
