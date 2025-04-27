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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NR67L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFowWLZ6cNKBXm1KMbk5R%2F7I0cxKvhBM6BnqBpRuaT7IAiBwyDuH1tDxOxoIpEl8CDoHl3u192tYIASdTWsjnAX9eir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbrWZXZPM8Q6YXS6KKtwDI1LCadlKzLziHn1AZAlqx%2FRZ6Zim6yl8frdEfTC7ArmiwhgbUwXbgqxnRrrLZaoOX4TX9J0DrPDw1m8JTch2jpjBRkP%2FoVl4nvuT07Mx7DdrcZBOzZB0B0gHhruaKXIwBxNckyT1MfA6jZYStzVEU8VcfyUBhZRtAg8bzCVX6Bh2s2tkccxKIwweH2je3CU1%2FibMKzOQ%2FX1qnqv1PgZ6%2FzeLudPezl1M90MzrOOGvtEaYGlJ%2BlTIP3OonFMJlLAseUPqw4IYe8KZLNW2KC1x6gnD5NyvGNUALfQNbIjtRNcKoSyELGxNmAGEsoa4RJORvJfkxEUH%2FyCCOVIZDt6IqhwRwH3ZPhszb%2BGpO7MVxSFgyUqrJ3yeQjAeC3SnG1jTrGv8oSx1XGarfLGJnEL529KFvLbopi0ydIffmRKukP%2B%2F2Mm%2FZ4y6wsXQzSHTx8apvc2Eywt0krRhJ0DQ7%2FgX8KDnFb3HIYBi1oFG8vrXRwRiBL66EPlOx0Kp%2B1lvMGnMy81UkEpQy1TsdAbsB2%2FiEjHXjG63Dpz441B1OsZgqJ1luCmb6zJLjKMhhCsraoiaKl%2Bf1USSLk233zXZgfFxtms6GNuzbddZj8Fs5V%2BCbzAKkLpUCMCRVL5hn3Yw%2BYu4wAY6pgGcTQnFVihBBSnaMFfhKKHg0RuRUTWCq1%2FvalVbC34kG0ZRZBtjNmK1%2BGyOuLETVXZZagYpQ7DfytnmiQn5yd0C6GXdvsihqgQ3zbbm%2FgpHVB7f0mXP%2B%2BpSfjmAph01eEUImjSM0wV3PcoGfOQnBIvEjVjDm3J84kZSNYVcbqfWP5f3KjU%2BwVyCzyndnO9tdQDSrLozerBJ0wRCXR3xSX0Xtmv6ftBc&X-Amz-Signature=371cb3a52b0daaa8228fb4427a2f1bb2c90f7e9b4476f94a07f19b2eb59b12b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NR67L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFowWLZ6cNKBXm1KMbk5R%2F7I0cxKvhBM6BnqBpRuaT7IAiBwyDuH1tDxOxoIpEl8CDoHl3u192tYIASdTWsjnAX9eir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbrWZXZPM8Q6YXS6KKtwDI1LCadlKzLziHn1AZAlqx%2FRZ6Zim6yl8frdEfTC7ArmiwhgbUwXbgqxnRrrLZaoOX4TX9J0DrPDw1m8JTch2jpjBRkP%2FoVl4nvuT07Mx7DdrcZBOzZB0B0gHhruaKXIwBxNckyT1MfA6jZYStzVEU8VcfyUBhZRtAg8bzCVX6Bh2s2tkccxKIwweH2je3CU1%2FibMKzOQ%2FX1qnqv1PgZ6%2FzeLudPezl1M90MzrOOGvtEaYGlJ%2BlTIP3OonFMJlLAseUPqw4IYe8KZLNW2KC1x6gnD5NyvGNUALfQNbIjtRNcKoSyELGxNmAGEsoa4RJORvJfkxEUH%2FyCCOVIZDt6IqhwRwH3ZPhszb%2BGpO7MVxSFgyUqrJ3yeQjAeC3SnG1jTrGv8oSx1XGarfLGJnEL529KFvLbopi0ydIffmRKukP%2B%2F2Mm%2FZ4y6wsXQzSHTx8apvc2Eywt0krRhJ0DQ7%2FgX8KDnFb3HIYBi1oFG8vrXRwRiBL66EPlOx0Kp%2B1lvMGnMy81UkEpQy1TsdAbsB2%2FiEjHXjG63Dpz441B1OsZgqJ1luCmb6zJLjKMhhCsraoiaKl%2Bf1USSLk233zXZgfFxtms6GNuzbddZj8Fs5V%2BCbzAKkLpUCMCRVL5hn3Yw%2BYu4wAY6pgGcTQnFVihBBSnaMFfhKKHg0RuRUTWCq1%2FvalVbC34kG0ZRZBtjNmK1%2BGyOuLETVXZZagYpQ7DfytnmiQn5yd0C6GXdvsihqgQ3zbbm%2FgpHVB7f0mXP%2B%2BpSfjmAph01eEUImjSM0wV3PcoGfOQnBIvEjVjDm3J84kZSNYVcbqfWP5f3KjU%2BwVyCzyndnO9tdQDSrLozerBJ0wRCXR3xSX0Xtmv6ftBc&X-Amz-Signature=23d70a258f46bf563f7d1fa6888a0a2fd96edd762ed6a49ed929180b0f3ef170&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NR67L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFowWLZ6cNKBXm1KMbk5R%2F7I0cxKvhBM6BnqBpRuaT7IAiBwyDuH1tDxOxoIpEl8CDoHl3u192tYIASdTWsjnAX9eir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbrWZXZPM8Q6YXS6KKtwDI1LCadlKzLziHn1AZAlqx%2FRZ6Zim6yl8frdEfTC7ArmiwhgbUwXbgqxnRrrLZaoOX4TX9J0DrPDw1m8JTch2jpjBRkP%2FoVl4nvuT07Mx7DdrcZBOzZB0B0gHhruaKXIwBxNckyT1MfA6jZYStzVEU8VcfyUBhZRtAg8bzCVX6Bh2s2tkccxKIwweH2je3CU1%2FibMKzOQ%2FX1qnqv1PgZ6%2FzeLudPezl1M90MzrOOGvtEaYGlJ%2BlTIP3OonFMJlLAseUPqw4IYe8KZLNW2KC1x6gnD5NyvGNUALfQNbIjtRNcKoSyELGxNmAGEsoa4RJORvJfkxEUH%2FyCCOVIZDt6IqhwRwH3ZPhszb%2BGpO7MVxSFgyUqrJ3yeQjAeC3SnG1jTrGv8oSx1XGarfLGJnEL529KFvLbopi0ydIffmRKukP%2B%2F2Mm%2FZ4y6wsXQzSHTx8apvc2Eywt0krRhJ0DQ7%2FgX8KDnFb3HIYBi1oFG8vrXRwRiBL66EPlOx0Kp%2B1lvMGnMy81UkEpQy1TsdAbsB2%2FiEjHXjG63Dpz441B1OsZgqJ1luCmb6zJLjKMhhCsraoiaKl%2Bf1USSLk233zXZgfFxtms6GNuzbddZj8Fs5V%2BCbzAKkLpUCMCRVL5hn3Yw%2BYu4wAY6pgGcTQnFVihBBSnaMFfhKKHg0RuRUTWCq1%2FvalVbC34kG0ZRZBtjNmK1%2BGyOuLETVXZZagYpQ7DfytnmiQn5yd0C6GXdvsihqgQ3zbbm%2FgpHVB7f0mXP%2B%2BpSfjmAph01eEUImjSM0wV3PcoGfOQnBIvEjVjDm3J84kZSNYVcbqfWP5f3KjU%2BwVyCzyndnO9tdQDSrLozerBJ0wRCXR3xSX0Xtmv6ftBc&X-Amz-Signature=2a1a8b90a834e224eb7d67785f2919a8f060b073f47c49bbf20a269df89aca74&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NR67L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFowWLZ6cNKBXm1KMbk5R%2F7I0cxKvhBM6BnqBpRuaT7IAiBwyDuH1tDxOxoIpEl8CDoHl3u192tYIASdTWsjnAX9eir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbrWZXZPM8Q6YXS6KKtwDI1LCadlKzLziHn1AZAlqx%2FRZ6Zim6yl8frdEfTC7ArmiwhgbUwXbgqxnRrrLZaoOX4TX9J0DrPDw1m8JTch2jpjBRkP%2FoVl4nvuT07Mx7DdrcZBOzZB0B0gHhruaKXIwBxNckyT1MfA6jZYStzVEU8VcfyUBhZRtAg8bzCVX6Bh2s2tkccxKIwweH2je3CU1%2FibMKzOQ%2FX1qnqv1PgZ6%2FzeLudPezl1M90MzrOOGvtEaYGlJ%2BlTIP3OonFMJlLAseUPqw4IYe8KZLNW2KC1x6gnD5NyvGNUALfQNbIjtRNcKoSyELGxNmAGEsoa4RJORvJfkxEUH%2FyCCOVIZDt6IqhwRwH3ZPhszb%2BGpO7MVxSFgyUqrJ3yeQjAeC3SnG1jTrGv8oSx1XGarfLGJnEL529KFvLbopi0ydIffmRKukP%2B%2F2Mm%2FZ4y6wsXQzSHTx8apvc2Eywt0krRhJ0DQ7%2FgX8KDnFb3HIYBi1oFG8vrXRwRiBL66EPlOx0Kp%2B1lvMGnMy81UkEpQy1TsdAbsB2%2FiEjHXjG63Dpz441B1OsZgqJ1luCmb6zJLjKMhhCsraoiaKl%2Bf1USSLk233zXZgfFxtms6GNuzbddZj8Fs5V%2BCbzAKkLpUCMCRVL5hn3Yw%2BYu4wAY6pgGcTQnFVihBBSnaMFfhKKHg0RuRUTWCq1%2FvalVbC34kG0ZRZBtjNmK1%2BGyOuLETVXZZagYpQ7DfytnmiQn5yd0C6GXdvsihqgQ3zbbm%2FgpHVB7f0mXP%2B%2BpSfjmAph01eEUImjSM0wV3PcoGfOQnBIvEjVjDm3J84kZSNYVcbqfWP5f3KjU%2BwVyCzyndnO9tdQDSrLozerBJ0wRCXR3xSX0Xtmv6ftBc&X-Amz-Signature=d56fcdf9cc94669eb4bac0f4c864542a9b78bca495c497eac5ef944094bbdbe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NR67L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFowWLZ6cNKBXm1KMbk5R%2F7I0cxKvhBM6BnqBpRuaT7IAiBwyDuH1tDxOxoIpEl8CDoHl3u192tYIASdTWsjnAX9eir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbrWZXZPM8Q6YXS6KKtwDI1LCadlKzLziHn1AZAlqx%2FRZ6Zim6yl8frdEfTC7ArmiwhgbUwXbgqxnRrrLZaoOX4TX9J0DrPDw1m8JTch2jpjBRkP%2FoVl4nvuT07Mx7DdrcZBOzZB0B0gHhruaKXIwBxNckyT1MfA6jZYStzVEU8VcfyUBhZRtAg8bzCVX6Bh2s2tkccxKIwweH2je3CU1%2FibMKzOQ%2FX1qnqv1PgZ6%2FzeLudPezl1M90MzrOOGvtEaYGlJ%2BlTIP3OonFMJlLAseUPqw4IYe8KZLNW2KC1x6gnD5NyvGNUALfQNbIjtRNcKoSyELGxNmAGEsoa4RJORvJfkxEUH%2FyCCOVIZDt6IqhwRwH3ZPhszb%2BGpO7MVxSFgyUqrJ3yeQjAeC3SnG1jTrGv8oSx1XGarfLGJnEL529KFvLbopi0ydIffmRKukP%2B%2F2Mm%2FZ4y6wsXQzSHTx8apvc2Eywt0krRhJ0DQ7%2FgX8KDnFb3HIYBi1oFG8vrXRwRiBL66EPlOx0Kp%2B1lvMGnMy81UkEpQy1TsdAbsB2%2FiEjHXjG63Dpz441B1OsZgqJ1luCmb6zJLjKMhhCsraoiaKl%2Bf1USSLk233zXZgfFxtms6GNuzbddZj8Fs5V%2BCbzAKkLpUCMCRVL5hn3Yw%2BYu4wAY6pgGcTQnFVihBBSnaMFfhKKHg0RuRUTWCq1%2FvalVbC34kG0ZRZBtjNmK1%2BGyOuLETVXZZagYpQ7DfytnmiQn5yd0C6GXdvsihqgQ3zbbm%2FgpHVB7f0mXP%2B%2BpSfjmAph01eEUImjSM0wV3PcoGfOQnBIvEjVjDm3J84kZSNYVcbqfWP5f3KjU%2BwVyCzyndnO9tdQDSrLozerBJ0wRCXR3xSX0Xtmv6ftBc&X-Amz-Signature=7270d8df2f40b1714309a94945667a7ee0dc8ef21ec886b607c5df1a3ee5fc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
