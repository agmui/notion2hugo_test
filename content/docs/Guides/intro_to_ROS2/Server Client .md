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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4RGE73%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAIdYrH2qmmdxgRkJuEQLcYSYmV8GvcwWn3se3%2Bvyz3mAiAq83D2k4Fja1YQj%2FLzV5ECKp%2FjaUJWW0HbKC6xrNd99iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWWPEwbZehJ%2BYIYtKtwDrQ3QAETzWJjWgaZOe%2BS9v9opkzpH%2B94zg6xtTG2XZBW%2FupORmu4Fpj7bJLwSb0QK0oOf1pD%2BlXXlI6wf3xEfLjdTLmIZpSgMaMTBmqpG%2FFMv76JQ5Gt9Zkg4eK83ckpCdi3NhnKtXVpUysGSat5H0XDpFeX9YvmN5kP0r4Z4PqAtnsC71ZYxIplTnE3R1a3eVPrjTu2cgSlZy0mGdcL4mQ%2FtLNb0nJzBOqQLqGSlQk5RcYDRMqFgcCHFnKWqrlKg24emJuniQfu6WhwLiJ868ppBcjZkin7rCpF6b31XffIv8UdjMELkzs8n08%2BcZGObULo7XpPsyDTBG9iJkXIgxQ3SghqvvdUP4hSapOEdcgRy9hSTY1079REh%2BUSE9uCprV3NyS1h4%2BWhB%2B%2FcjtN2FhznlS50QM%2Ff5viOblNN3ij7cO9sYm0LZofh91%2F%2FYM7tn3fSNoUugls70wUlUUFTtoGAmaJlGrbX5NijcGD48kLf1f0VlZ0zBz03pB4pxVbF35s%2FgHmHxNLjOV6IBFsf8aPxqE3lRpTqH3dOVcq8Ga6iNb7TSE5vSUO%2FBlfELFV7TDEc8Zx1cPS%2FgE5DoS%2BC7doRESXrl%2FluLklHFYID%2FrIlD7kZW9n8DWTFlKswo%2BqivwY6pgGVxBrxYj9VrJEwn0r0LWtqNhDOmtHUVFPsDWQIngFJuxMGYImTUNQFiEeGMAg8nKtTgzFw0aM9jHoLDw5Ahm%2B1gzHuZIoHw03lZRK%2FHtMgo1DqbDQFr904iBSaHa%2BAhJr3Yhg9M%2BWBhPUXz2H%2FZxlreoZheNURDO5%2FPSv6TS%2B5aCNtiKGJxPcB8whj2bpT0ZtpblDzK9Ou2yn7sqynAUaZXgN1Q3zr&X-Amz-Signature=3e94e9158d76086968cdcc366b6e591f3647327c5ba5529a73e6d2b2b5143d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4RGE73%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAIdYrH2qmmdxgRkJuEQLcYSYmV8GvcwWn3se3%2Bvyz3mAiAq83D2k4Fja1YQj%2FLzV5ECKp%2FjaUJWW0HbKC6xrNd99iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWWPEwbZehJ%2BYIYtKtwDrQ3QAETzWJjWgaZOe%2BS9v9opkzpH%2B94zg6xtTG2XZBW%2FupORmu4Fpj7bJLwSb0QK0oOf1pD%2BlXXlI6wf3xEfLjdTLmIZpSgMaMTBmqpG%2FFMv76JQ5Gt9Zkg4eK83ckpCdi3NhnKtXVpUysGSat5H0XDpFeX9YvmN5kP0r4Z4PqAtnsC71ZYxIplTnE3R1a3eVPrjTu2cgSlZy0mGdcL4mQ%2FtLNb0nJzBOqQLqGSlQk5RcYDRMqFgcCHFnKWqrlKg24emJuniQfu6WhwLiJ868ppBcjZkin7rCpF6b31XffIv8UdjMELkzs8n08%2BcZGObULo7XpPsyDTBG9iJkXIgxQ3SghqvvdUP4hSapOEdcgRy9hSTY1079REh%2BUSE9uCprV3NyS1h4%2BWhB%2B%2FcjtN2FhznlS50QM%2Ff5viOblNN3ij7cO9sYm0LZofh91%2F%2FYM7tn3fSNoUugls70wUlUUFTtoGAmaJlGrbX5NijcGD48kLf1f0VlZ0zBz03pB4pxVbF35s%2FgHmHxNLjOV6IBFsf8aPxqE3lRpTqH3dOVcq8Ga6iNb7TSE5vSUO%2FBlfELFV7TDEc8Zx1cPS%2FgE5DoS%2BC7doRESXrl%2FluLklHFYID%2FrIlD7kZW9n8DWTFlKswo%2BqivwY6pgGVxBrxYj9VrJEwn0r0LWtqNhDOmtHUVFPsDWQIngFJuxMGYImTUNQFiEeGMAg8nKtTgzFw0aM9jHoLDw5Ahm%2B1gzHuZIoHw03lZRK%2FHtMgo1DqbDQFr904iBSaHa%2BAhJr3Yhg9M%2BWBhPUXz2H%2FZxlreoZheNURDO5%2FPSv6TS%2B5aCNtiKGJxPcB8whj2bpT0ZtpblDzK9Ou2yn7sqynAUaZXgN1Q3zr&X-Amz-Signature=c33c3bfdc75c9500b97f90932388e354d9cc08aa957da4e23711feb07666daf0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4RGE73%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAIdYrH2qmmdxgRkJuEQLcYSYmV8GvcwWn3se3%2Bvyz3mAiAq83D2k4Fja1YQj%2FLzV5ECKp%2FjaUJWW0HbKC6xrNd99iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWWPEwbZehJ%2BYIYtKtwDrQ3QAETzWJjWgaZOe%2BS9v9opkzpH%2B94zg6xtTG2XZBW%2FupORmu4Fpj7bJLwSb0QK0oOf1pD%2BlXXlI6wf3xEfLjdTLmIZpSgMaMTBmqpG%2FFMv76JQ5Gt9Zkg4eK83ckpCdi3NhnKtXVpUysGSat5H0XDpFeX9YvmN5kP0r4Z4PqAtnsC71ZYxIplTnE3R1a3eVPrjTu2cgSlZy0mGdcL4mQ%2FtLNb0nJzBOqQLqGSlQk5RcYDRMqFgcCHFnKWqrlKg24emJuniQfu6WhwLiJ868ppBcjZkin7rCpF6b31XffIv8UdjMELkzs8n08%2BcZGObULo7XpPsyDTBG9iJkXIgxQ3SghqvvdUP4hSapOEdcgRy9hSTY1079REh%2BUSE9uCprV3NyS1h4%2BWhB%2B%2FcjtN2FhznlS50QM%2Ff5viOblNN3ij7cO9sYm0LZofh91%2F%2FYM7tn3fSNoUugls70wUlUUFTtoGAmaJlGrbX5NijcGD48kLf1f0VlZ0zBz03pB4pxVbF35s%2FgHmHxNLjOV6IBFsf8aPxqE3lRpTqH3dOVcq8Ga6iNb7TSE5vSUO%2FBlfELFV7TDEc8Zx1cPS%2FgE5DoS%2BC7doRESXrl%2FluLklHFYID%2FrIlD7kZW9n8DWTFlKswo%2BqivwY6pgGVxBrxYj9VrJEwn0r0LWtqNhDOmtHUVFPsDWQIngFJuxMGYImTUNQFiEeGMAg8nKtTgzFw0aM9jHoLDw5Ahm%2B1gzHuZIoHw03lZRK%2FHtMgo1DqbDQFr904iBSaHa%2BAhJr3Yhg9M%2BWBhPUXz2H%2FZxlreoZheNURDO5%2FPSv6TS%2B5aCNtiKGJxPcB8whj2bpT0ZtpblDzK9Ou2yn7sqynAUaZXgN1Q3zr&X-Amz-Signature=790ac4e8a30dc9c1dbd00462dd39d3100cf6101f9f0f8e0101ac57c10906dfea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4RGE73%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAIdYrH2qmmdxgRkJuEQLcYSYmV8GvcwWn3se3%2Bvyz3mAiAq83D2k4Fja1YQj%2FLzV5ECKp%2FjaUJWW0HbKC6xrNd99iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWWPEwbZehJ%2BYIYtKtwDrQ3QAETzWJjWgaZOe%2BS9v9opkzpH%2B94zg6xtTG2XZBW%2FupORmu4Fpj7bJLwSb0QK0oOf1pD%2BlXXlI6wf3xEfLjdTLmIZpSgMaMTBmqpG%2FFMv76JQ5Gt9Zkg4eK83ckpCdi3NhnKtXVpUysGSat5H0XDpFeX9YvmN5kP0r4Z4PqAtnsC71ZYxIplTnE3R1a3eVPrjTu2cgSlZy0mGdcL4mQ%2FtLNb0nJzBOqQLqGSlQk5RcYDRMqFgcCHFnKWqrlKg24emJuniQfu6WhwLiJ868ppBcjZkin7rCpF6b31XffIv8UdjMELkzs8n08%2BcZGObULo7XpPsyDTBG9iJkXIgxQ3SghqvvdUP4hSapOEdcgRy9hSTY1079REh%2BUSE9uCprV3NyS1h4%2BWhB%2B%2FcjtN2FhznlS50QM%2Ff5viOblNN3ij7cO9sYm0LZofh91%2F%2FYM7tn3fSNoUugls70wUlUUFTtoGAmaJlGrbX5NijcGD48kLf1f0VlZ0zBz03pB4pxVbF35s%2FgHmHxNLjOV6IBFsf8aPxqE3lRpTqH3dOVcq8Ga6iNb7TSE5vSUO%2FBlfELFV7TDEc8Zx1cPS%2FgE5DoS%2BC7doRESXrl%2FluLklHFYID%2FrIlD7kZW9n8DWTFlKswo%2BqivwY6pgGVxBrxYj9VrJEwn0r0LWtqNhDOmtHUVFPsDWQIngFJuxMGYImTUNQFiEeGMAg8nKtTgzFw0aM9jHoLDw5Ahm%2B1gzHuZIoHw03lZRK%2FHtMgo1DqbDQFr904iBSaHa%2BAhJr3Yhg9M%2BWBhPUXz2H%2FZxlreoZheNURDO5%2FPSv6TS%2B5aCNtiKGJxPcB8whj2bpT0ZtpblDzK9Ou2yn7sqynAUaZXgN1Q3zr&X-Amz-Signature=2ed222d2dc006b858d147e2db54a4be41c2c42e54f78c86889e04416654d3a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4RGE73%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAIdYrH2qmmdxgRkJuEQLcYSYmV8GvcwWn3se3%2Bvyz3mAiAq83D2k4Fja1YQj%2FLzV5ECKp%2FjaUJWW0HbKC6xrNd99iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWWPEwbZehJ%2BYIYtKtwDrQ3QAETzWJjWgaZOe%2BS9v9opkzpH%2B94zg6xtTG2XZBW%2FupORmu4Fpj7bJLwSb0QK0oOf1pD%2BlXXlI6wf3xEfLjdTLmIZpSgMaMTBmqpG%2FFMv76JQ5Gt9Zkg4eK83ckpCdi3NhnKtXVpUysGSat5H0XDpFeX9YvmN5kP0r4Z4PqAtnsC71ZYxIplTnE3R1a3eVPrjTu2cgSlZy0mGdcL4mQ%2FtLNb0nJzBOqQLqGSlQk5RcYDRMqFgcCHFnKWqrlKg24emJuniQfu6WhwLiJ868ppBcjZkin7rCpF6b31XffIv8UdjMELkzs8n08%2BcZGObULo7XpPsyDTBG9iJkXIgxQ3SghqvvdUP4hSapOEdcgRy9hSTY1079REh%2BUSE9uCprV3NyS1h4%2BWhB%2B%2FcjtN2FhznlS50QM%2Ff5viOblNN3ij7cO9sYm0LZofh91%2F%2FYM7tn3fSNoUugls70wUlUUFTtoGAmaJlGrbX5NijcGD48kLf1f0VlZ0zBz03pB4pxVbF35s%2FgHmHxNLjOV6IBFsf8aPxqE3lRpTqH3dOVcq8Ga6iNb7TSE5vSUO%2FBlfELFV7TDEc8Zx1cPS%2FgE5DoS%2BC7doRESXrl%2FluLklHFYID%2FrIlD7kZW9n8DWTFlKswo%2BqivwY6pgGVxBrxYj9VrJEwn0r0LWtqNhDOmtHUVFPsDWQIngFJuxMGYImTUNQFiEeGMAg8nKtTgzFw0aM9jHoLDw5Ahm%2B1gzHuZIoHw03lZRK%2FHtMgo1DqbDQFr904iBSaHa%2BAhJr3Yhg9M%2BWBhPUXz2H%2FZxlreoZheNURDO5%2FPSv6TS%2B5aCNtiKGJxPcB8whj2bpT0ZtpblDzK9Ou2yn7sqynAUaZXgN1Q3zr&X-Amz-Signature=54fd46902705eb9a69d725fe911b5dc119bfc56ce21f13324f1e69a7228d2d36&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
