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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK26GBD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxIKORWUKwcVkeCk1AXnDnajV2GmfQHQOEth6Xcw%2Ft0AiB2Etal8v2umgPPYT1VvVSIYr7GObRaDwiUIG%2BfkcxhzCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJcvXEn%2Bh6EgK0rfKtwD8t5rprjKnjBhYnlFYkrMaHiW3DDC%2BfI2eO%2BNtUoBGe681CPeRkyT7hYImtzo3gNTgtS8H8IJQ9bYwagPHbf6R3mNfB%2BfQdLmyM0j840G1%2Bxi8nwkQ3IHQmFg0SX2jEBVAUbUz3j%2BDreUJRCgU%2BHu8gHZjMquVthyaM8vfvdiIklgz07cFF6BPvLYlCuyFig%2BzsSwhsoJsf%2BPgFPqFuN8iT74DSv7Vn5eJURAGQ%2FqKRLD8SuJqZ4StoXs%2B6cX%2FUXR441cEzuwywS5vqPUSNmavwAKe3%2FBn20aeVFhdErj9DCZrA%2FlljaSy86UOUm84CgLJVRDGztrZ4wBFuTtvKxk3LjM2UNyMN671nM7WMK7kcKP7vKmcDocQ8eh2X6jnNvacsE%2BokG9ep%2FTC8cS1Caq4B4hUdO62opGReZYrjRTvdwTMYqbdJaB1sIhcN05sidEDV8YT64e08IzHlDC0eh1kfFLKilG7cwDcQJkStrKZQaobiboYuILUHUtLdD49gh%2B%2FJtCYbvtSWkL3XrwU2HSS6cxNdKR6u4x32PisMlH7n41N4zXlVk%2FLhUVvxpkVfZFPesCLpYqjKYwSjKECM8BoNlYZHlpHQYgL77WiBXBxFhXZKkOjt%2FVM%2BKcwNQwq8vqvQY6pgGNZl4kI0LRYmjU8e%2Bx8FKUBpHXpYej1ZJJakB80AJlcrf1v5vjD39XrvvAte5QwcjrnGyA6kQV2uKWTCTb4ti%2B9XD3F44dJ%2FEgQirEkf%2FwDqy5Omuq3s8qrH%2B4zXkbNWPeX%2FQINmE2Kz19bk82%2F%2FI17FqG5hfBVxJ7xhvULMeD%2FOYby%2B32H5EAJmaSZxwIzVDF5J0hwe6aQjYdulIVOwOlpJGcxMvm&X-Amz-Signature=4b3e62d702039140f1be19a28be58097bd479ff21b9e3aea5ebd1e37feee449c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK26GBD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxIKORWUKwcVkeCk1AXnDnajV2GmfQHQOEth6Xcw%2Ft0AiB2Etal8v2umgPPYT1VvVSIYr7GObRaDwiUIG%2BfkcxhzCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJcvXEn%2Bh6EgK0rfKtwD8t5rprjKnjBhYnlFYkrMaHiW3DDC%2BfI2eO%2BNtUoBGe681CPeRkyT7hYImtzo3gNTgtS8H8IJQ9bYwagPHbf6R3mNfB%2BfQdLmyM0j840G1%2Bxi8nwkQ3IHQmFg0SX2jEBVAUbUz3j%2BDreUJRCgU%2BHu8gHZjMquVthyaM8vfvdiIklgz07cFF6BPvLYlCuyFig%2BzsSwhsoJsf%2BPgFPqFuN8iT74DSv7Vn5eJURAGQ%2FqKRLD8SuJqZ4StoXs%2B6cX%2FUXR441cEzuwywS5vqPUSNmavwAKe3%2FBn20aeVFhdErj9DCZrA%2FlljaSy86UOUm84CgLJVRDGztrZ4wBFuTtvKxk3LjM2UNyMN671nM7WMK7kcKP7vKmcDocQ8eh2X6jnNvacsE%2BokG9ep%2FTC8cS1Caq4B4hUdO62opGReZYrjRTvdwTMYqbdJaB1sIhcN05sidEDV8YT64e08IzHlDC0eh1kfFLKilG7cwDcQJkStrKZQaobiboYuILUHUtLdD49gh%2B%2FJtCYbvtSWkL3XrwU2HSS6cxNdKR6u4x32PisMlH7n41N4zXlVk%2FLhUVvxpkVfZFPesCLpYqjKYwSjKECM8BoNlYZHlpHQYgL77WiBXBxFhXZKkOjt%2FVM%2BKcwNQwq8vqvQY6pgGNZl4kI0LRYmjU8e%2Bx8FKUBpHXpYej1ZJJakB80AJlcrf1v5vjD39XrvvAte5QwcjrnGyA6kQV2uKWTCTb4ti%2B9XD3F44dJ%2FEgQirEkf%2FwDqy5Omuq3s8qrH%2B4zXkbNWPeX%2FQINmE2Kz19bk82%2F%2FI17FqG5hfBVxJ7xhvULMeD%2FOYby%2B32H5EAJmaSZxwIzVDF5J0hwe6aQjYdulIVOwOlpJGcxMvm&X-Amz-Signature=1f722fb4bcdcf839244a2ef9f8cc92a780bd03bec54c042868360bb2a70aab38&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK26GBD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxIKORWUKwcVkeCk1AXnDnajV2GmfQHQOEth6Xcw%2Ft0AiB2Etal8v2umgPPYT1VvVSIYr7GObRaDwiUIG%2BfkcxhzCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJcvXEn%2Bh6EgK0rfKtwD8t5rprjKnjBhYnlFYkrMaHiW3DDC%2BfI2eO%2BNtUoBGe681CPeRkyT7hYImtzo3gNTgtS8H8IJQ9bYwagPHbf6R3mNfB%2BfQdLmyM0j840G1%2Bxi8nwkQ3IHQmFg0SX2jEBVAUbUz3j%2BDreUJRCgU%2BHu8gHZjMquVthyaM8vfvdiIklgz07cFF6BPvLYlCuyFig%2BzsSwhsoJsf%2BPgFPqFuN8iT74DSv7Vn5eJURAGQ%2FqKRLD8SuJqZ4StoXs%2B6cX%2FUXR441cEzuwywS5vqPUSNmavwAKe3%2FBn20aeVFhdErj9DCZrA%2FlljaSy86UOUm84CgLJVRDGztrZ4wBFuTtvKxk3LjM2UNyMN671nM7WMK7kcKP7vKmcDocQ8eh2X6jnNvacsE%2BokG9ep%2FTC8cS1Caq4B4hUdO62opGReZYrjRTvdwTMYqbdJaB1sIhcN05sidEDV8YT64e08IzHlDC0eh1kfFLKilG7cwDcQJkStrKZQaobiboYuILUHUtLdD49gh%2B%2FJtCYbvtSWkL3XrwU2HSS6cxNdKR6u4x32PisMlH7n41N4zXlVk%2FLhUVvxpkVfZFPesCLpYqjKYwSjKECM8BoNlYZHlpHQYgL77WiBXBxFhXZKkOjt%2FVM%2BKcwNQwq8vqvQY6pgGNZl4kI0LRYmjU8e%2Bx8FKUBpHXpYej1ZJJakB80AJlcrf1v5vjD39XrvvAte5QwcjrnGyA6kQV2uKWTCTb4ti%2B9XD3F44dJ%2FEgQirEkf%2FwDqy5Omuq3s8qrH%2B4zXkbNWPeX%2FQINmE2Kz19bk82%2F%2FI17FqG5hfBVxJ7xhvULMeD%2FOYby%2B32H5EAJmaSZxwIzVDF5J0hwe6aQjYdulIVOwOlpJGcxMvm&X-Amz-Signature=d685a9c65e19cf67e50c3bce645f27e54cb5db6ef89c7590bb74b4c5ea84fbff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK26GBD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxIKORWUKwcVkeCk1AXnDnajV2GmfQHQOEth6Xcw%2Ft0AiB2Etal8v2umgPPYT1VvVSIYr7GObRaDwiUIG%2BfkcxhzCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJcvXEn%2Bh6EgK0rfKtwD8t5rprjKnjBhYnlFYkrMaHiW3DDC%2BfI2eO%2BNtUoBGe681CPeRkyT7hYImtzo3gNTgtS8H8IJQ9bYwagPHbf6R3mNfB%2BfQdLmyM0j840G1%2Bxi8nwkQ3IHQmFg0SX2jEBVAUbUz3j%2BDreUJRCgU%2BHu8gHZjMquVthyaM8vfvdiIklgz07cFF6BPvLYlCuyFig%2BzsSwhsoJsf%2BPgFPqFuN8iT74DSv7Vn5eJURAGQ%2FqKRLD8SuJqZ4StoXs%2B6cX%2FUXR441cEzuwywS5vqPUSNmavwAKe3%2FBn20aeVFhdErj9DCZrA%2FlljaSy86UOUm84CgLJVRDGztrZ4wBFuTtvKxk3LjM2UNyMN671nM7WMK7kcKP7vKmcDocQ8eh2X6jnNvacsE%2BokG9ep%2FTC8cS1Caq4B4hUdO62opGReZYrjRTvdwTMYqbdJaB1sIhcN05sidEDV8YT64e08IzHlDC0eh1kfFLKilG7cwDcQJkStrKZQaobiboYuILUHUtLdD49gh%2B%2FJtCYbvtSWkL3XrwU2HSS6cxNdKR6u4x32PisMlH7n41N4zXlVk%2FLhUVvxpkVfZFPesCLpYqjKYwSjKECM8BoNlYZHlpHQYgL77WiBXBxFhXZKkOjt%2FVM%2BKcwNQwq8vqvQY6pgGNZl4kI0LRYmjU8e%2Bx8FKUBpHXpYej1ZJJakB80AJlcrf1v5vjD39XrvvAte5QwcjrnGyA6kQV2uKWTCTb4ti%2B9XD3F44dJ%2FEgQirEkf%2FwDqy5Omuq3s8qrH%2B4zXkbNWPeX%2FQINmE2Kz19bk82%2F%2FI17FqG5hfBVxJ7xhvULMeD%2FOYby%2B32H5EAJmaSZxwIzVDF5J0hwe6aQjYdulIVOwOlpJGcxMvm&X-Amz-Signature=00e02fc2c2d849dfd5202b6e84e85ed31d55ffd86e9c2475ffc057448869635f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK26GBD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxIKORWUKwcVkeCk1AXnDnajV2GmfQHQOEth6Xcw%2Ft0AiB2Etal8v2umgPPYT1VvVSIYr7GObRaDwiUIG%2BfkcxhzCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJcvXEn%2Bh6EgK0rfKtwD8t5rprjKnjBhYnlFYkrMaHiW3DDC%2BfI2eO%2BNtUoBGe681CPeRkyT7hYImtzo3gNTgtS8H8IJQ9bYwagPHbf6R3mNfB%2BfQdLmyM0j840G1%2Bxi8nwkQ3IHQmFg0SX2jEBVAUbUz3j%2BDreUJRCgU%2BHu8gHZjMquVthyaM8vfvdiIklgz07cFF6BPvLYlCuyFig%2BzsSwhsoJsf%2BPgFPqFuN8iT74DSv7Vn5eJURAGQ%2FqKRLD8SuJqZ4StoXs%2B6cX%2FUXR441cEzuwywS5vqPUSNmavwAKe3%2FBn20aeVFhdErj9DCZrA%2FlljaSy86UOUm84CgLJVRDGztrZ4wBFuTtvKxk3LjM2UNyMN671nM7WMK7kcKP7vKmcDocQ8eh2X6jnNvacsE%2BokG9ep%2FTC8cS1Caq4B4hUdO62opGReZYrjRTvdwTMYqbdJaB1sIhcN05sidEDV8YT64e08IzHlDC0eh1kfFLKilG7cwDcQJkStrKZQaobiboYuILUHUtLdD49gh%2B%2FJtCYbvtSWkL3XrwU2HSS6cxNdKR6u4x32PisMlH7n41N4zXlVk%2FLhUVvxpkVfZFPesCLpYqjKYwSjKECM8BoNlYZHlpHQYgL77WiBXBxFhXZKkOjt%2FVM%2BKcwNQwq8vqvQY6pgGNZl4kI0LRYmjU8e%2Bx8FKUBpHXpYej1ZJJakB80AJlcrf1v5vjD39XrvvAte5QwcjrnGyA6kQV2uKWTCTb4ti%2B9XD3F44dJ%2FEgQirEkf%2FwDqy5Omuq3s8qrH%2B4zXkbNWPeX%2FQINmE2Kz19bk82%2F%2FI17FqG5hfBVxJ7xhvULMeD%2FOYby%2B32H5EAJmaSZxwIzVDF5J0hwe6aQjYdulIVOwOlpJGcxMvm&X-Amz-Signature=f9c0e574ffb2602809d5152b8e7cfa4d711e5c6f9d5cee0d2fa9af153af11346&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
