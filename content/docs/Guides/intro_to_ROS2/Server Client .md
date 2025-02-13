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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDL3PX6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhzq3pJAv%2BEKVpF0flfNj1D5P16IkufbAvYJ7MlrdmsAiBoSort%2BLr8w1lR81WNQhxKXSLle87nMxC3EFM8atDmCSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPMOTiLSg6Zda8wnKtwDtlmqAj4oTcHo3%2FRlnsP9QCz0hEvqU%2FoJHZ3AhXX4fVzesAzI977yL4Vx35JbIf9Kidx%2BpxdS9ffK%2BCwlT52DOpbeVKyLlOim4LcHCQ%2BU%2BGA9QHIJ6FSIQeBLOLI2Tk2ximNFPU9Mtj%2FUb2cpIsUZ0wl97UnlVFeKpjG2l6A%2B3lgQxlGyFcenOOZGDKq%2FUO1eJX9GjMq6XQkylBt03gTG7q9h7iPgLOWY2a8p%2F1s1wefUs7wlGEqbQdwxQHWEQmfzBjrTDszp%2Fx7WglFn%2FKG1tRIxA2d7gUYHMPCWSkm1fK9Oc1fQEdFUQUPCzjg4MNzsSlwa0tHqtp21FWhAF0SGCuqi8MDv%2FnQOuD4fkn%2FPx1qyzBgJwaB%2BtGbO6Fa8kI9o8oOE5RYBzf3L4M4T4jAgo3gq6ffDalLFZlqQ%2Fqsj8ujN4%2B6SnzezI0YZemn8jZRbJyDaJ1mhA%2BRe9e6ZWeWWokuEoc%2B7yox3obXT8nJZgThCw0%2BYW9UI%2BE7brqiUKZa1Tt%2BH10dj8B%2BUeSlv8HH3cFWq1QO2aMp8plrp0oW08qLx7QZed3%2BYC9b0mrKyoGkJGk8g3SdJZTnRD%2F09JVBYYwNhmS7DTt4B0iHrYS%2Bjsd1JY1Ub2a%2F0%2FAQpOX8w35i1vQY6pgEmCPeZRm2u65N1gBkzEwscOmY54TQD41bmOIo%2BJ7zKS6akKND2szbGTbv4CDzG0HM4fV4twmJkmWDpLBSYaPilIywqQxlPYBqrDMt%2B%2BqztccpNwL1UNLbSNX9s6nOWPTWdjJCvPPuqB5OOfdiNNaLgMZk81%2BA5ik5nqrlclevcl3rMrwbIaEEpsJC8KNZeukEKbv8HkH82jIyJyDIfTNnncRy%2BLo%2B%2B&X-Amz-Signature=dae68153ac77329980b88ace7d924299c625541544ff53b3cdf626ac6a37b8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDL3PX6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhzq3pJAv%2BEKVpF0flfNj1D5P16IkufbAvYJ7MlrdmsAiBoSort%2BLr8w1lR81WNQhxKXSLle87nMxC3EFM8atDmCSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPMOTiLSg6Zda8wnKtwDtlmqAj4oTcHo3%2FRlnsP9QCz0hEvqU%2FoJHZ3AhXX4fVzesAzI977yL4Vx35JbIf9Kidx%2BpxdS9ffK%2BCwlT52DOpbeVKyLlOim4LcHCQ%2BU%2BGA9QHIJ6FSIQeBLOLI2Tk2ximNFPU9Mtj%2FUb2cpIsUZ0wl97UnlVFeKpjG2l6A%2B3lgQxlGyFcenOOZGDKq%2FUO1eJX9GjMq6XQkylBt03gTG7q9h7iPgLOWY2a8p%2F1s1wefUs7wlGEqbQdwxQHWEQmfzBjrTDszp%2Fx7WglFn%2FKG1tRIxA2d7gUYHMPCWSkm1fK9Oc1fQEdFUQUPCzjg4MNzsSlwa0tHqtp21FWhAF0SGCuqi8MDv%2FnQOuD4fkn%2FPx1qyzBgJwaB%2BtGbO6Fa8kI9o8oOE5RYBzf3L4M4T4jAgo3gq6ffDalLFZlqQ%2Fqsj8ujN4%2B6SnzezI0YZemn8jZRbJyDaJ1mhA%2BRe9e6ZWeWWokuEoc%2B7yox3obXT8nJZgThCw0%2BYW9UI%2BE7brqiUKZa1Tt%2BH10dj8B%2BUeSlv8HH3cFWq1QO2aMp8plrp0oW08qLx7QZed3%2BYC9b0mrKyoGkJGk8g3SdJZTnRD%2F09JVBYYwNhmS7DTt4B0iHrYS%2Bjsd1JY1Ub2a%2F0%2FAQpOX8w35i1vQY6pgEmCPeZRm2u65N1gBkzEwscOmY54TQD41bmOIo%2BJ7zKS6akKND2szbGTbv4CDzG0HM4fV4twmJkmWDpLBSYaPilIywqQxlPYBqrDMt%2B%2BqztccpNwL1UNLbSNX9s6nOWPTWdjJCvPPuqB5OOfdiNNaLgMZk81%2BA5ik5nqrlclevcl3rMrwbIaEEpsJC8KNZeukEKbv8HkH82jIyJyDIfTNnncRy%2BLo%2B%2B&X-Amz-Signature=6ffa417bd4a2a3237e02a07811ea38220fed4a7127a061c7919341f47a7ded21&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDL3PX6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhzq3pJAv%2BEKVpF0flfNj1D5P16IkufbAvYJ7MlrdmsAiBoSort%2BLr8w1lR81WNQhxKXSLle87nMxC3EFM8atDmCSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPMOTiLSg6Zda8wnKtwDtlmqAj4oTcHo3%2FRlnsP9QCz0hEvqU%2FoJHZ3AhXX4fVzesAzI977yL4Vx35JbIf9Kidx%2BpxdS9ffK%2BCwlT52DOpbeVKyLlOim4LcHCQ%2BU%2BGA9QHIJ6FSIQeBLOLI2Tk2ximNFPU9Mtj%2FUb2cpIsUZ0wl97UnlVFeKpjG2l6A%2B3lgQxlGyFcenOOZGDKq%2FUO1eJX9GjMq6XQkylBt03gTG7q9h7iPgLOWY2a8p%2F1s1wefUs7wlGEqbQdwxQHWEQmfzBjrTDszp%2Fx7WglFn%2FKG1tRIxA2d7gUYHMPCWSkm1fK9Oc1fQEdFUQUPCzjg4MNzsSlwa0tHqtp21FWhAF0SGCuqi8MDv%2FnQOuD4fkn%2FPx1qyzBgJwaB%2BtGbO6Fa8kI9o8oOE5RYBzf3L4M4T4jAgo3gq6ffDalLFZlqQ%2Fqsj8ujN4%2B6SnzezI0YZemn8jZRbJyDaJ1mhA%2BRe9e6ZWeWWokuEoc%2B7yox3obXT8nJZgThCw0%2BYW9UI%2BE7brqiUKZa1Tt%2BH10dj8B%2BUeSlv8HH3cFWq1QO2aMp8plrp0oW08qLx7QZed3%2BYC9b0mrKyoGkJGk8g3SdJZTnRD%2F09JVBYYwNhmS7DTt4B0iHrYS%2Bjsd1JY1Ub2a%2F0%2FAQpOX8w35i1vQY6pgEmCPeZRm2u65N1gBkzEwscOmY54TQD41bmOIo%2BJ7zKS6akKND2szbGTbv4CDzG0HM4fV4twmJkmWDpLBSYaPilIywqQxlPYBqrDMt%2B%2BqztccpNwL1UNLbSNX9s6nOWPTWdjJCvPPuqB5OOfdiNNaLgMZk81%2BA5ik5nqrlclevcl3rMrwbIaEEpsJC8KNZeukEKbv8HkH82jIyJyDIfTNnncRy%2BLo%2B%2B&X-Amz-Signature=e4bc3aeb755d1b34311359cd69149e4cf259483dde907fe72f6fbb0b2020dd18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDL3PX6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhzq3pJAv%2BEKVpF0flfNj1D5P16IkufbAvYJ7MlrdmsAiBoSort%2BLr8w1lR81WNQhxKXSLle87nMxC3EFM8atDmCSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPMOTiLSg6Zda8wnKtwDtlmqAj4oTcHo3%2FRlnsP9QCz0hEvqU%2FoJHZ3AhXX4fVzesAzI977yL4Vx35JbIf9Kidx%2BpxdS9ffK%2BCwlT52DOpbeVKyLlOim4LcHCQ%2BU%2BGA9QHIJ6FSIQeBLOLI2Tk2ximNFPU9Mtj%2FUb2cpIsUZ0wl97UnlVFeKpjG2l6A%2B3lgQxlGyFcenOOZGDKq%2FUO1eJX9GjMq6XQkylBt03gTG7q9h7iPgLOWY2a8p%2F1s1wefUs7wlGEqbQdwxQHWEQmfzBjrTDszp%2Fx7WglFn%2FKG1tRIxA2d7gUYHMPCWSkm1fK9Oc1fQEdFUQUPCzjg4MNzsSlwa0tHqtp21FWhAF0SGCuqi8MDv%2FnQOuD4fkn%2FPx1qyzBgJwaB%2BtGbO6Fa8kI9o8oOE5RYBzf3L4M4T4jAgo3gq6ffDalLFZlqQ%2Fqsj8ujN4%2B6SnzezI0YZemn8jZRbJyDaJ1mhA%2BRe9e6ZWeWWokuEoc%2B7yox3obXT8nJZgThCw0%2BYW9UI%2BE7brqiUKZa1Tt%2BH10dj8B%2BUeSlv8HH3cFWq1QO2aMp8plrp0oW08qLx7QZed3%2BYC9b0mrKyoGkJGk8g3SdJZTnRD%2F09JVBYYwNhmS7DTt4B0iHrYS%2Bjsd1JY1Ub2a%2F0%2FAQpOX8w35i1vQY6pgEmCPeZRm2u65N1gBkzEwscOmY54TQD41bmOIo%2BJ7zKS6akKND2szbGTbv4CDzG0HM4fV4twmJkmWDpLBSYaPilIywqQxlPYBqrDMt%2B%2BqztccpNwL1UNLbSNX9s6nOWPTWdjJCvPPuqB5OOfdiNNaLgMZk81%2BA5ik5nqrlclevcl3rMrwbIaEEpsJC8KNZeukEKbv8HkH82jIyJyDIfTNnncRy%2BLo%2B%2B&X-Amz-Signature=2aca81bae1adace6e0c7ccdae44abf6d24583af4beb4b64409a53e3df5b353f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDL3PX6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhzq3pJAv%2BEKVpF0flfNj1D5P16IkufbAvYJ7MlrdmsAiBoSort%2BLr8w1lR81WNQhxKXSLle87nMxC3EFM8atDmCSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPMOTiLSg6Zda8wnKtwDtlmqAj4oTcHo3%2FRlnsP9QCz0hEvqU%2FoJHZ3AhXX4fVzesAzI977yL4Vx35JbIf9Kidx%2BpxdS9ffK%2BCwlT52DOpbeVKyLlOim4LcHCQ%2BU%2BGA9QHIJ6FSIQeBLOLI2Tk2ximNFPU9Mtj%2FUb2cpIsUZ0wl97UnlVFeKpjG2l6A%2B3lgQxlGyFcenOOZGDKq%2FUO1eJX9GjMq6XQkylBt03gTG7q9h7iPgLOWY2a8p%2F1s1wefUs7wlGEqbQdwxQHWEQmfzBjrTDszp%2Fx7WglFn%2FKG1tRIxA2d7gUYHMPCWSkm1fK9Oc1fQEdFUQUPCzjg4MNzsSlwa0tHqtp21FWhAF0SGCuqi8MDv%2FnQOuD4fkn%2FPx1qyzBgJwaB%2BtGbO6Fa8kI9o8oOE5RYBzf3L4M4T4jAgo3gq6ffDalLFZlqQ%2Fqsj8ujN4%2B6SnzezI0YZemn8jZRbJyDaJ1mhA%2BRe9e6ZWeWWokuEoc%2B7yox3obXT8nJZgThCw0%2BYW9UI%2BE7brqiUKZa1Tt%2BH10dj8B%2BUeSlv8HH3cFWq1QO2aMp8plrp0oW08qLx7QZed3%2BYC9b0mrKyoGkJGk8g3SdJZTnRD%2F09JVBYYwNhmS7DTt4B0iHrYS%2Bjsd1JY1Ub2a%2F0%2FAQpOX8w35i1vQY6pgEmCPeZRm2u65N1gBkzEwscOmY54TQD41bmOIo%2BJ7zKS6akKND2szbGTbv4CDzG0HM4fV4twmJkmWDpLBSYaPilIywqQxlPYBqrDMt%2B%2BqztccpNwL1UNLbSNX9s6nOWPTWdjJCvPPuqB5OOfdiNNaLgMZk81%2BA5ik5nqrlclevcl3rMrwbIaEEpsJC8KNZeukEKbv8HkH82jIyJyDIfTNnncRy%2BLo%2B%2B&X-Amz-Signature=9bce90d34a9e9b4561682bef83a8a2ffd94e80fdf2e77629c6772c4671657165&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
