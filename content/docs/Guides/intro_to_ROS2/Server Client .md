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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX6YKKT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDjjF2XHJlXQtFXvinpgROFiZB1D3QEatbfl6iFPBVKgIgB9SaY9F58skVn1tkW%2BNVmhxcxuVGuhzwQd2cvn5jklwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHRNLhzyORQp8QO%2BSrcA6KcAoOov0YR4Mj8l6chBaSzAN05ODnv7oO0mX%2Fe%2FHYi9gD5GeSboHK8aVKsPHaLC2oAraNRy84iflJmX2YzitgL%2ByTRQR79R3e8R6ZDWAjDv%2FCkkZh3RAj1lk0MPO2H0H2sygYHNOaPWnhK%2FlRiybvGGmqndk5LNgMM1qtDmJ%2FCaZlmxsluQfda5SCWzWlU3nweywHQ%2B3kdOUlpYm73TSIo6XaNymRPKoFYLF7CIN9HS0njT6ftphIEsmUbH01X0nLDGdMx11IynimlFFfxv71eh0P%2F2OZofvnedgzbIUl7Px1%2BhqqD26qDXUwBTrznzkR0irq4CzH6DJ7%2FCzzddF5p6PLOyVNEdLZzqh0EteLm6yBZG%2FlhPy0ixwoKy6WAZ%2FMqp06JmeH8THL91QopNucQQMmTjVVigEkSArrlhulTc9OwMPZAPtF64eR2QyUUIsyGarBJ5T5SeuRkEA1l1H4owyQY%2BM4mzgekt%2FCQqcnHHhWwjHV9hoLlqc4SrvLFYfHgZZ9slg1xkq8OjB2aI6KDjkjSz4isBTmqPjS7YX0B6TyjOWvzqJdIf6cG4BSMb6kM67OpPRbiX31Bbv%2B6OfZyd8zf%2BFUTaGpNzp64NG5nd0H4kUoX13uWDHeFMLjRtcEGOqUB46p4qRzv0zrDMkaHbi5aLa%2Bs4aPyLyzadsZEN9XA8zeXP2Ktc1hkrOMFO45KQ7nQBLc6watUpLZBkap5srrFmY280qpsO3cAXBu0sTh1TeBhmir3jBC25PWconqGxp4HoDCMk%2FBz4fFy4G4q9AeLKkZMwg2lA26LOiU5KBcwIVcOlsVeVGq1d7VoK%2BwswVQoEIRSRd8I6SiH2jUc8AYVbOqCJYFR&X-Amz-Signature=089628d7d9603ca7a50fcd213662892439fa7de1f64f50f890054e44079bf2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX6YKKT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDjjF2XHJlXQtFXvinpgROFiZB1D3QEatbfl6iFPBVKgIgB9SaY9F58skVn1tkW%2BNVmhxcxuVGuhzwQd2cvn5jklwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHRNLhzyORQp8QO%2BSrcA6KcAoOov0YR4Mj8l6chBaSzAN05ODnv7oO0mX%2Fe%2FHYi9gD5GeSboHK8aVKsPHaLC2oAraNRy84iflJmX2YzitgL%2ByTRQR79R3e8R6ZDWAjDv%2FCkkZh3RAj1lk0MPO2H0H2sygYHNOaPWnhK%2FlRiybvGGmqndk5LNgMM1qtDmJ%2FCaZlmxsluQfda5SCWzWlU3nweywHQ%2B3kdOUlpYm73TSIo6XaNymRPKoFYLF7CIN9HS0njT6ftphIEsmUbH01X0nLDGdMx11IynimlFFfxv71eh0P%2F2OZofvnedgzbIUl7Px1%2BhqqD26qDXUwBTrznzkR0irq4CzH6DJ7%2FCzzddF5p6PLOyVNEdLZzqh0EteLm6yBZG%2FlhPy0ixwoKy6WAZ%2FMqp06JmeH8THL91QopNucQQMmTjVVigEkSArrlhulTc9OwMPZAPtF64eR2QyUUIsyGarBJ5T5SeuRkEA1l1H4owyQY%2BM4mzgekt%2FCQqcnHHhWwjHV9hoLlqc4SrvLFYfHgZZ9slg1xkq8OjB2aI6KDjkjSz4isBTmqPjS7YX0B6TyjOWvzqJdIf6cG4BSMb6kM67OpPRbiX31Bbv%2B6OfZyd8zf%2BFUTaGpNzp64NG5nd0H4kUoX13uWDHeFMLjRtcEGOqUB46p4qRzv0zrDMkaHbi5aLa%2Bs4aPyLyzadsZEN9XA8zeXP2Ktc1hkrOMFO45KQ7nQBLc6watUpLZBkap5srrFmY280qpsO3cAXBu0sTh1TeBhmir3jBC25PWconqGxp4HoDCMk%2FBz4fFy4G4q9AeLKkZMwg2lA26LOiU5KBcwIVcOlsVeVGq1d7VoK%2BwswVQoEIRSRd8I6SiH2jUc8AYVbOqCJYFR&X-Amz-Signature=c58bf0d6c2142a123b15793c7e2bd3996996d493c8219f83776c4363fdf422fa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX6YKKT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDjjF2XHJlXQtFXvinpgROFiZB1D3QEatbfl6iFPBVKgIgB9SaY9F58skVn1tkW%2BNVmhxcxuVGuhzwQd2cvn5jklwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHRNLhzyORQp8QO%2BSrcA6KcAoOov0YR4Mj8l6chBaSzAN05ODnv7oO0mX%2Fe%2FHYi9gD5GeSboHK8aVKsPHaLC2oAraNRy84iflJmX2YzitgL%2ByTRQR79R3e8R6ZDWAjDv%2FCkkZh3RAj1lk0MPO2H0H2sygYHNOaPWnhK%2FlRiybvGGmqndk5LNgMM1qtDmJ%2FCaZlmxsluQfda5SCWzWlU3nweywHQ%2B3kdOUlpYm73TSIo6XaNymRPKoFYLF7CIN9HS0njT6ftphIEsmUbH01X0nLDGdMx11IynimlFFfxv71eh0P%2F2OZofvnedgzbIUl7Px1%2BhqqD26qDXUwBTrznzkR0irq4CzH6DJ7%2FCzzddF5p6PLOyVNEdLZzqh0EteLm6yBZG%2FlhPy0ixwoKy6WAZ%2FMqp06JmeH8THL91QopNucQQMmTjVVigEkSArrlhulTc9OwMPZAPtF64eR2QyUUIsyGarBJ5T5SeuRkEA1l1H4owyQY%2BM4mzgekt%2FCQqcnHHhWwjHV9hoLlqc4SrvLFYfHgZZ9slg1xkq8OjB2aI6KDjkjSz4isBTmqPjS7YX0B6TyjOWvzqJdIf6cG4BSMb6kM67OpPRbiX31Bbv%2B6OfZyd8zf%2BFUTaGpNzp64NG5nd0H4kUoX13uWDHeFMLjRtcEGOqUB46p4qRzv0zrDMkaHbi5aLa%2Bs4aPyLyzadsZEN9XA8zeXP2Ktc1hkrOMFO45KQ7nQBLc6watUpLZBkap5srrFmY280qpsO3cAXBu0sTh1TeBhmir3jBC25PWconqGxp4HoDCMk%2FBz4fFy4G4q9AeLKkZMwg2lA26LOiU5KBcwIVcOlsVeVGq1d7VoK%2BwswVQoEIRSRd8I6SiH2jUc8AYVbOqCJYFR&X-Amz-Signature=c6d3771544fbf7dafda1be6a0a7861aa45e5f58beb1980dd7aa83d233097c8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX6YKKT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDjjF2XHJlXQtFXvinpgROFiZB1D3QEatbfl6iFPBVKgIgB9SaY9F58skVn1tkW%2BNVmhxcxuVGuhzwQd2cvn5jklwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHRNLhzyORQp8QO%2BSrcA6KcAoOov0YR4Mj8l6chBaSzAN05ODnv7oO0mX%2Fe%2FHYi9gD5GeSboHK8aVKsPHaLC2oAraNRy84iflJmX2YzitgL%2ByTRQR79R3e8R6ZDWAjDv%2FCkkZh3RAj1lk0MPO2H0H2sygYHNOaPWnhK%2FlRiybvGGmqndk5LNgMM1qtDmJ%2FCaZlmxsluQfda5SCWzWlU3nweywHQ%2B3kdOUlpYm73TSIo6XaNymRPKoFYLF7CIN9HS0njT6ftphIEsmUbH01X0nLDGdMx11IynimlFFfxv71eh0P%2F2OZofvnedgzbIUl7Px1%2BhqqD26qDXUwBTrznzkR0irq4CzH6DJ7%2FCzzddF5p6PLOyVNEdLZzqh0EteLm6yBZG%2FlhPy0ixwoKy6WAZ%2FMqp06JmeH8THL91QopNucQQMmTjVVigEkSArrlhulTc9OwMPZAPtF64eR2QyUUIsyGarBJ5T5SeuRkEA1l1H4owyQY%2BM4mzgekt%2FCQqcnHHhWwjHV9hoLlqc4SrvLFYfHgZZ9slg1xkq8OjB2aI6KDjkjSz4isBTmqPjS7YX0B6TyjOWvzqJdIf6cG4BSMb6kM67OpPRbiX31Bbv%2B6OfZyd8zf%2BFUTaGpNzp64NG5nd0H4kUoX13uWDHeFMLjRtcEGOqUB46p4qRzv0zrDMkaHbi5aLa%2Bs4aPyLyzadsZEN9XA8zeXP2Ktc1hkrOMFO45KQ7nQBLc6watUpLZBkap5srrFmY280qpsO3cAXBu0sTh1TeBhmir3jBC25PWconqGxp4HoDCMk%2FBz4fFy4G4q9AeLKkZMwg2lA26LOiU5KBcwIVcOlsVeVGq1d7VoK%2BwswVQoEIRSRd8I6SiH2jUc8AYVbOqCJYFR&X-Amz-Signature=7ac3d4b2dbc4c65b24c3ba55749c765d5082b98ec46cc4fc119ac30936ea6270&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX6YKKT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDjjF2XHJlXQtFXvinpgROFiZB1D3QEatbfl6iFPBVKgIgB9SaY9F58skVn1tkW%2BNVmhxcxuVGuhzwQd2cvn5jklwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHRNLhzyORQp8QO%2BSrcA6KcAoOov0YR4Mj8l6chBaSzAN05ODnv7oO0mX%2Fe%2FHYi9gD5GeSboHK8aVKsPHaLC2oAraNRy84iflJmX2YzitgL%2ByTRQR79R3e8R6ZDWAjDv%2FCkkZh3RAj1lk0MPO2H0H2sygYHNOaPWnhK%2FlRiybvGGmqndk5LNgMM1qtDmJ%2FCaZlmxsluQfda5SCWzWlU3nweywHQ%2B3kdOUlpYm73TSIo6XaNymRPKoFYLF7CIN9HS0njT6ftphIEsmUbH01X0nLDGdMx11IynimlFFfxv71eh0P%2F2OZofvnedgzbIUl7Px1%2BhqqD26qDXUwBTrznzkR0irq4CzH6DJ7%2FCzzddF5p6PLOyVNEdLZzqh0EteLm6yBZG%2FlhPy0ixwoKy6WAZ%2FMqp06JmeH8THL91QopNucQQMmTjVVigEkSArrlhulTc9OwMPZAPtF64eR2QyUUIsyGarBJ5T5SeuRkEA1l1H4owyQY%2BM4mzgekt%2FCQqcnHHhWwjHV9hoLlqc4SrvLFYfHgZZ9slg1xkq8OjB2aI6KDjkjSz4isBTmqPjS7YX0B6TyjOWvzqJdIf6cG4BSMb6kM67OpPRbiX31Bbv%2B6OfZyd8zf%2BFUTaGpNzp64NG5nd0H4kUoX13uWDHeFMLjRtcEGOqUB46p4qRzv0zrDMkaHbi5aLa%2Bs4aPyLyzadsZEN9XA8zeXP2Ktc1hkrOMFO45KQ7nQBLc6watUpLZBkap5srrFmY280qpsO3cAXBu0sTh1TeBhmir3jBC25PWconqGxp4HoDCMk%2FBz4fFy4G4q9AeLKkZMwg2lA26LOiU5KBcwIVcOlsVeVGq1d7VoK%2BwswVQoEIRSRd8I6SiH2jUc8AYVbOqCJYFR&X-Amz-Signature=acf35d05f50bfe60f1ceadb46e64971bc4cf840440008394c9722a4c953a23cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
