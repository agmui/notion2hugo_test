---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TDAYBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICAECEnn8oWzVONUz4dXKsRtg6noqCbBCaA3AFSIZ6R7AiBnmjKg6gUJMqkC0TM%2BHsEqLCNuHIs2Kufg6fBtFRD%2BYSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMWiLEhirhXl9xjwG0KtwD9y2S03HePP3qkS9SvXKeO%2BGcOlvL5pTMI9rDuZJSGtao2QPJ17rdPmZz8nYl6Vd1ue7oySrlR0mlNuZAAdSGbw5m4jxGn9dNXy5BMml5hyw8PPRGiuaePnQqlpULv%2BcM8lFq%2FqYvU7utHgH3WnM24W2tc3BjJCcpWuLqp3JL%2BMuiGwBwzHXEaObiJ9cuBQRPfQcCLiTfhEVvURZGztkItxaIu%2F1q5SDyUiZ8aHyNki%2FhsYULFvcJInNAnt6l7WScgOm2%2FGIMSjo6LfXYWqwp4gORXcRs856R6j7W4gSJEig6ndkVH57MF7uqrt9smZ6in5j6iZVgykDgwIv%2FEHlr%2FbhoVi6C%2F0hza6jxvaI8%2Fi2YlTyCuyNADNuX8HuZt%2FsLCtit7QvDSyFrDpYEkUmZcFDObhg0sNLiSeXA8tviOSbpbKuRXu5Dajnpipq85kpo3ELX52gDX0khVlVM1fFkPjtD%2BDkefqzdQOCME9WFXTfoqKs9WjfyFxNPoZ0CUzYOr%2F80tZdneh8kAqr%2F7xAKNYWF1G3qFM0v6DokGQdO%2BHebU8KxJhVCC1HUy9EELBpgwulrk0liwd1bS%2Frwgxdp8QXPmjHBDwAJh8OgP1BayROCqYfjdrffRiY%2BNwEwpJa%2ByQY6pgGmP15NMPB0FpGQFxbLvakH%2B1B2NczE8B5DhOYOwbllIoZUC%2FW2brl%2FFX0gQ8n%2BZulU48pmL7s9OdTv%2FQKDIozc4dCG%2F1EAYoXl2hjZVZTUpedLrR9NXld3oGIBTQh7v4Zq%2F2VuqBIUQE0znnjXTowLX5Er6LcCh9CS%2B%2BFoAoarbVnp1bTT21PkP5Q35bPCGF6owYfK6O4JVrmCzfS9Y1nltWZrQEFt&X-Amz-Signature=54b9e764fd2dede5b595da9dc7ac529545aeaeaa756efaca3b50bebdcb24814d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TDAYBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICAECEnn8oWzVONUz4dXKsRtg6noqCbBCaA3AFSIZ6R7AiBnmjKg6gUJMqkC0TM%2BHsEqLCNuHIs2Kufg6fBtFRD%2BYSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMWiLEhirhXl9xjwG0KtwD9y2S03HePP3qkS9SvXKeO%2BGcOlvL5pTMI9rDuZJSGtao2QPJ17rdPmZz8nYl6Vd1ue7oySrlR0mlNuZAAdSGbw5m4jxGn9dNXy5BMml5hyw8PPRGiuaePnQqlpULv%2BcM8lFq%2FqYvU7utHgH3WnM24W2tc3BjJCcpWuLqp3JL%2BMuiGwBwzHXEaObiJ9cuBQRPfQcCLiTfhEVvURZGztkItxaIu%2F1q5SDyUiZ8aHyNki%2FhsYULFvcJInNAnt6l7WScgOm2%2FGIMSjo6LfXYWqwp4gORXcRs856R6j7W4gSJEig6ndkVH57MF7uqrt9smZ6in5j6iZVgykDgwIv%2FEHlr%2FbhoVi6C%2F0hza6jxvaI8%2Fi2YlTyCuyNADNuX8HuZt%2FsLCtit7QvDSyFrDpYEkUmZcFDObhg0sNLiSeXA8tviOSbpbKuRXu5Dajnpipq85kpo3ELX52gDX0khVlVM1fFkPjtD%2BDkefqzdQOCME9WFXTfoqKs9WjfyFxNPoZ0CUzYOr%2F80tZdneh8kAqr%2F7xAKNYWF1G3qFM0v6DokGQdO%2BHebU8KxJhVCC1HUy9EELBpgwulrk0liwd1bS%2Frwgxdp8QXPmjHBDwAJh8OgP1BayROCqYfjdrffRiY%2BNwEwpJa%2ByQY6pgGmP15NMPB0FpGQFxbLvakH%2B1B2NczE8B5DhOYOwbllIoZUC%2FW2brl%2FFX0gQ8n%2BZulU48pmL7s9OdTv%2FQKDIozc4dCG%2F1EAYoXl2hjZVZTUpedLrR9NXld3oGIBTQh7v4Zq%2F2VuqBIUQE0znnjXTowLX5Er6LcCh9CS%2B%2BFoAoarbVnp1bTT21PkP5Q35bPCGF6owYfK6O4JVrmCzfS9Y1nltWZrQEFt&X-Amz-Signature=17c4dcaf4bc8866c7e5eb02f715e04e31763fa4571ba750305c6a0bdb7641b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TDAYBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICAECEnn8oWzVONUz4dXKsRtg6noqCbBCaA3AFSIZ6R7AiBnmjKg6gUJMqkC0TM%2BHsEqLCNuHIs2Kufg6fBtFRD%2BYSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMWiLEhirhXl9xjwG0KtwD9y2S03HePP3qkS9SvXKeO%2BGcOlvL5pTMI9rDuZJSGtao2QPJ17rdPmZz8nYl6Vd1ue7oySrlR0mlNuZAAdSGbw5m4jxGn9dNXy5BMml5hyw8PPRGiuaePnQqlpULv%2BcM8lFq%2FqYvU7utHgH3WnM24W2tc3BjJCcpWuLqp3JL%2BMuiGwBwzHXEaObiJ9cuBQRPfQcCLiTfhEVvURZGztkItxaIu%2F1q5SDyUiZ8aHyNki%2FhsYULFvcJInNAnt6l7WScgOm2%2FGIMSjo6LfXYWqwp4gORXcRs856R6j7W4gSJEig6ndkVH57MF7uqrt9smZ6in5j6iZVgykDgwIv%2FEHlr%2FbhoVi6C%2F0hza6jxvaI8%2Fi2YlTyCuyNADNuX8HuZt%2FsLCtit7QvDSyFrDpYEkUmZcFDObhg0sNLiSeXA8tviOSbpbKuRXu5Dajnpipq85kpo3ELX52gDX0khVlVM1fFkPjtD%2BDkefqzdQOCME9WFXTfoqKs9WjfyFxNPoZ0CUzYOr%2F80tZdneh8kAqr%2F7xAKNYWF1G3qFM0v6DokGQdO%2BHebU8KxJhVCC1HUy9EELBpgwulrk0liwd1bS%2Frwgxdp8QXPmjHBDwAJh8OgP1BayROCqYfjdrffRiY%2BNwEwpJa%2ByQY6pgGmP15NMPB0FpGQFxbLvakH%2B1B2NczE8B5DhOYOwbllIoZUC%2FW2brl%2FFX0gQ8n%2BZulU48pmL7s9OdTv%2FQKDIozc4dCG%2F1EAYoXl2hjZVZTUpedLrR9NXld3oGIBTQh7v4Zq%2F2VuqBIUQE0znnjXTowLX5Er6LcCh9CS%2B%2BFoAoarbVnp1bTT21PkP5Q35bPCGF6owYfK6O4JVrmCzfS9Y1nltWZrQEFt&X-Amz-Signature=c39bd148810837636b56e7b650ca294b4ffa4900fe7770f4ee49279f7c545ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TDAYBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICAECEnn8oWzVONUz4dXKsRtg6noqCbBCaA3AFSIZ6R7AiBnmjKg6gUJMqkC0TM%2BHsEqLCNuHIs2Kufg6fBtFRD%2BYSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMWiLEhirhXl9xjwG0KtwD9y2S03HePP3qkS9SvXKeO%2BGcOlvL5pTMI9rDuZJSGtao2QPJ17rdPmZz8nYl6Vd1ue7oySrlR0mlNuZAAdSGbw5m4jxGn9dNXy5BMml5hyw8PPRGiuaePnQqlpULv%2BcM8lFq%2FqYvU7utHgH3WnM24W2tc3BjJCcpWuLqp3JL%2BMuiGwBwzHXEaObiJ9cuBQRPfQcCLiTfhEVvURZGztkItxaIu%2F1q5SDyUiZ8aHyNki%2FhsYULFvcJInNAnt6l7WScgOm2%2FGIMSjo6LfXYWqwp4gORXcRs856R6j7W4gSJEig6ndkVH57MF7uqrt9smZ6in5j6iZVgykDgwIv%2FEHlr%2FbhoVi6C%2F0hza6jxvaI8%2Fi2YlTyCuyNADNuX8HuZt%2FsLCtit7QvDSyFrDpYEkUmZcFDObhg0sNLiSeXA8tviOSbpbKuRXu5Dajnpipq85kpo3ELX52gDX0khVlVM1fFkPjtD%2BDkefqzdQOCME9WFXTfoqKs9WjfyFxNPoZ0CUzYOr%2F80tZdneh8kAqr%2F7xAKNYWF1G3qFM0v6DokGQdO%2BHebU8KxJhVCC1HUy9EELBpgwulrk0liwd1bS%2Frwgxdp8QXPmjHBDwAJh8OgP1BayROCqYfjdrffRiY%2BNwEwpJa%2ByQY6pgGmP15NMPB0FpGQFxbLvakH%2B1B2NczE8B5DhOYOwbllIoZUC%2FW2brl%2FFX0gQ8n%2BZulU48pmL7s9OdTv%2FQKDIozc4dCG%2F1EAYoXl2hjZVZTUpedLrR9NXld3oGIBTQh7v4Zq%2F2VuqBIUQE0znnjXTowLX5Er6LcCh9CS%2B%2BFoAoarbVnp1bTT21PkP5Q35bPCGF6owYfK6O4JVrmCzfS9Y1nltWZrQEFt&X-Amz-Signature=e9fd489c69fdd09cde9cf79ff0debe73c44ef2aaae5643ad05bc1609c48f1b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TDAYBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICAECEnn8oWzVONUz4dXKsRtg6noqCbBCaA3AFSIZ6R7AiBnmjKg6gUJMqkC0TM%2BHsEqLCNuHIs2Kufg6fBtFRD%2BYSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMWiLEhirhXl9xjwG0KtwD9y2S03HePP3qkS9SvXKeO%2BGcOlvL5pTMI9rDuZJSGtao2QPJ17rdPmZz8nYl6Vd1ue7oySrlR0mlNuZAAdSGbw5m4jxGn9dNXy5BMml5hyw8PPRGiuaePnQqlpULv%2BcM8lFq%2FqYvU7utHgH3WnM24W2tc3BjJCcpWuLqp3JL%2BMuiGwBwzHXEaObiJ9cuBQRPfQcCLiTfhEVvURZGztkItxaIu%2F1q5SDyUiZ8aHyNki%2FhsYULFvcJInNAnt6l7WScgOm2%2FGIMSjo6LfXYWqwp4gORXcRs856R6j7W4gSJEig6ndkVH57MF7uqrt9smZ6in5j6iZVgykDgwIv%2FEHlr%2FbhoVi6C%2F0hza6jxvaI8%2Fi2YlTyCuyNADNuX8HuZt%2FsLCtit7QvDSyFrDpYEkUmZcFDObhg0sNLiSeXA8tviOSbpbKuRXu5Dajnpipq85kpo3ELX52gDX0khVlVM1fFkPjtD%2BDkefqzdQOCME9WFXTfoqKs9WjfyFxNPoZ0CUzYOr%2F80tZdneh8kAqr%2F7xAKNYWF1G3qFM0v6DokGQdO%2BHebU8KxJhVCC1HUy9EELBpgwulrk0liwd1bS%2Frwgxdp8QXPmjHBDwAJh8OgP1BayROCqYfjdrffRiY%2BNwEwpJa%2ByQY6pgGmP15NMPB0FpGQFxbLvakH%2B1B2NczE8B5DhOYOwbllIoZUC%2FW2brl%2FFX0gQ8n%2BZulU48pmL7s9OdTv%2FQKDIozc4dCG%2F1EAYoXl2hjZVZTUpedLrR9NXld3oGIBTQh7v4Zq%2F2VuqBIUQE0znnjXTowLX5Er6LcCh9CS%2B%2BFoAoarbVnp1bTT21PkP5Q35bPCGF6owYfK6O4JVrmCzfS9Y1nltWZrQEFt&X-Amz-Signature=ca8295b30f302185db4387f2396d140e209b6236a5cda712efc78b730040daa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
