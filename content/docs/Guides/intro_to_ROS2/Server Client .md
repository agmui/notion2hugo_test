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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYNLEWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3AWezzqy%2FM4qw1lHraVERObyl1lKBIyf2W0kBFg%2BCvAiAlFQl%2BcXixq1kNjw2pGCI0%2FcIKOYDYMganE2uCMKVU4Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMxUwlaBM%2FEQCAj9NuKtwDzvVoBzgoMlIvp3HThDI14ngImGzX8D4yKMva55fcuQIjSVSli79mMyk5IPmzEKPVX1l0t4KYKQBecU%2FQFUmQwK8HBN7MNCg9%2FUfnHqVj8Ov0I2nrVAb8c5RmEg5dfoJvpqDJwcs2Xrz1AlBXoIYmkPt4ieCq9Bq%2BugQLomYazqTu7F27%2FEcBBYyiQg09cM5jRfDqug1QVgXiE4IkHsVlt6wCxnal3cL%2FjBAF4KkPYOrjcLyZhq6lQ5Q7CU29M8fv796%2FCdhSAuhfrkvkYkRUbNkalM5DMVyRZtjHXMOh8Mze9P%2FylmMASAQ9V%2BvPnINLODUVKrbcwscToEGhve1N7fkJVMO8kcvv8oZCLA4t4qomWttdqLkPzFseRICzY%2F4CwJ5Yg2pGVE2b0HgnGMfSsbk1Seb3C7UbioADxrQhxkhG9I4vVFJPR%2FKT7qO7joJmgxDVLnYbUd2IEeHTcEVVL3gWKqsAKcOzGNpoqQiXORsS%2BVTeY0%2FwaUoPLX6KrbWlyHt7M2p63sTGYWTxMOWKwwWoEb0Cg3e8O2bGYuhdKTKOSDDGHBrSCF0ZP621NFotQJLtoeQSLjbozqqVrnF6GPpNEMB%2BXjgbHFZzKbfE5p5NX8Ql%2BwqvdPuGbhcwid%2F%2FvwY6pgHhNZhKqBiycSqZRvDVvCtsxP1Gdi9zBfCMAbyfEEgo5l8K%2BKn0m4SZFmx6kCreQj3XBb68TkTtmPylHsvfhy76dkezo52BRgue1l5JP26oEiWfaua4K42PUUBLNs8CsYtsQsNz8TpxmI4hxSbOxkhXD3RH5tYiaavYvJn42FWTDNPJ6ub7fIMJo%2F%2B0BQWf64AYBW30%2BqXKR%2FLD4Qu8LDxwtTmjEgfv&X-Amz-Signature=bd404b4e627a486c5040a571cdac652569be18d0385c36e28498ba8a7fca40e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYNLEWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3AWezzqy%2FM4qw1lHraVERObyl1lKBIyf2W0kBFg%2BCvAiAlFQl%2BcXixq1kNjw2pGCI0%2FcIKOYDYMganE2uCMKVU4Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMxUwlaBM%2FEQCAj9NuKtwDzvVoBzgoMlIvp3HThDI14ngImGzX8D4yKMva55fcuQIjSVSli79mMyk5IPmzEKPVX1l0t4KYKQBecU%2FQFUmQwK8HBN7MNCg9%2FUfnHqVj8Ov0I2nrVAb8c5RmEg5dfoJvpqDJwcs2Xrz1AlBXoIYmkPt4ieCq9Bq%2BugQLomYazqTu7F27%2FEcBBYyiQg09cM5jRfDqug1QVgXiE4IkHsVlt6wCxnal3cL%2FjBAF4KkPYOrjcLyZhq6lQ5Q7CU29M8fv796%2FCdhSAuhfrkvkYkRUbNkalM5DMVyRZtjHXMOh8Mze9P%2FylmMASAQ9V%2BvPnINLODUVKrbcwscToEGhve1N7fkJVMO8kcvv8oZCLA4t4qomWttdqLkPzFseRICzY%2F4CwJ5Yg2pGVE2b0HgnGMfSsbk1Seb3C7UbioADxrQhxkhG9I4vVFJPR%2FKT7qO7joJmgxDVLnYbUd2IEeHTcEVVL3gWKqsAKcOzGNpoqQiXORsS%2BVTeY0%2FwaUoPLX6KrbWlyHt7M2p63sTGYWTxMOWKwwWoEb0Cg3e8O2bGYuhdKTKOSDDGHBrSCF0ZP621NFotQJLtoeQSLjbozqqVrnF6GPpNEMB%2BXjgbHFZzKbfE5p5NX8Ql%2BwqvdPuGbhcwid%2F%2FvwY6pgHhNZhKqBiycSqZRvDVvCtsxP1Gdi9zBfCMAbyfEEgo5l8K%2BKn0m4SZFmx6kCreQj3XBb68TkTtmPylHsvfhy76dkezo52BRgue1l5JP26oEiWfaua4K42PUUBLNs8CsYtsQsNz8TpxmI4hxSbOxkhXD3RH5tYiaavYvJn42FWTDNPJ6ub7fIMJo%2F%2B0BQWf64AYBW30%2BqXKR%2FLD4Qu8LDxwtTmjEgfv&X-Amz-Signature=a26ad720c043b05416ca77f3fb7be9596ea131d97885fbb9b5c2adc3c2dbc02f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYNLEWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3AWezzqy%2FM4qw1lHraVERObyl1lKBIyf2W0kBFg%2BCvAiAlFQl%2BcXixq1kNjw2pGCI0%2FcIKOYDYMganE2uCMKVU4Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMxUwlaBM%2FEQCAj9NuKtwDzvVoBzgoMlIvp3HThDI14ngImGzX8D4yKMva55fcuQIjSVSli79mMyk5IPmzEKPVX1l0t4KYKQBecU%2FQFUmQwK8HBN7MNCg9%2FUfnHqVj8Ov0I2nrVAb8c5RmEg5dfoJvpqDJwcs2Xrz1AlBXoIYmkPt4ieCq9Bq%2BugQLomYazqTu7F27%2FEcBBYyiQg09cM5jRfDqug1QVgXiE4IkHsVlt6wCxnal3cL%2FjBAF4KkPYOrjcLyZhq6lQ5Q7CU29M8fv796%2FCdhSAuhfrkvkYkRUbNkalM5DMVyRZtjHXMOh8Mze9P%2FylmMASAQ9V%2BvPnINLODUVKrbcwscToEGhve1N7fkJVMO8kcvv8oZCLA4t4qomWttdqLkPzFseRICzY%2F4CwJ5Yg2pGVE2b0HgnGMfSsbk1Seb3C7UbioADxrQhxkhG9I4vVFJPR%2FKT7qO7joJmgxDVLnYbUd2IEeHTcEVVL3gWKqsAKcOzGNpoqQiXORsS%2BVTeY0%2FwaUoPLX6KrbWlyHt7M2p63sTGYWTxMOWKwwWoEb0Cg3e8O2bGYuhdKTKOSDDGHBrSCF0ZP621NFotQJLtoeQSLjbozqqVrnF6GPpNEMB%2BXjgbHFZzKbfE5p5NX8Ql%2BwqvdPuGbhcwid%2F%2FvwY6pgHhNZhKqBiycSqZRvDVvCtsxP1Gdi9zBfCMAbyfEEgo5l8K%2BKn0m4SZFmx6kCreQj3XBb68TkTtmPylHsvfhy76dkezo52BRgue1l5JP26oEiWfaua4K42PUUBLNs8CsYtsQsNz8TpxmI4hxSbOxkhXD3RH5tYiaavYvJn42FWTDNPJ6ub7fIMJo%2F%2B0BQWf64AYBW30%2BqXKR%2FLD4Qu8LDxwtTmjEgfv&X-Amz-Signature=a6c83f42c9e73129413a23cfda5bef04a144399c7c61edd250f7f0b605c2b7b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYNLEWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3AWezzqy%2FM4qw1lHraVERObyl1lKBIyf2W0kBFg%2BCvAiAlFQl%2BcXixq1kNjw2pGCI0%2FcIKOYDYMganE2uCMKVU4Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMxUwlaBM%2FEQCAj9NuKtwDzvVoBzgoMlIvp3HThDI14ngImGzX8D4yKMva55fcuQIjSVSli79mMyk5IPmzEKPVX1l0t4KYKQBecU%2FQFUmQwK8HBN7MNCg9%2FUfnHqVj8Ov0I2nrVAb8c5RmEg5dfoJvpqDJwcs2Xrz1AlBXoIYmkPt4ieCq9Bq%2BugQLomYazqTu7F27%2FEcBBYyiQg09cM5jRfDqug1QVgXiE4IkHsVlt6wCxnal3cL%2FjBAF4KkPYOrjcLyZhq6lQ5Q7CU29M8fv796%2FCdhSAuhfrkvkYkRUbNkalM5DMVyRZtjHXMOh8Mze9P%2FylmMASAQ9V%2BvPnINLODUVKrbcwscToEGhve1N7fkJVMO8kcvv8oZCLA4t4qomWttdqLkPzFseRICzY%2F4CwJ5Yg2pGVE2b0HgnGMfSsbk1Seb3C7UbioADxrQhxkhG9I4vVFJPR%2FKT7qO7joJmgxDVLnYbUd2IEeHTcEVVL3gWKqsAKcOzGNpoqQiXORsS%2BVTeY0%2FwaUoPLX6KrbWlyHt7M2p63sTGYWTxMOWKwwWoEb0Cg3e8O2bGYuhdKTKOSDDGHBrSCF0ZP621NFotQJLtoeQSLjbozqqVrnF6GPpNEMB%2BXjgbHFZzKbfE5p5NX8Ql%2BwqvdPuGbhcwid%2F%2FvwY6pgHhNZhKqBiycSqZRvDVvCtsxP1Gdi9zBfCMAbyfEEgo5l8K%2BKn0m4SZFmx6kCreQj3XBb68TkTtmPylHsvfhy76dkezo52BRgue1l5JP26oEiWfaua4K42PUUBLNs8CsYtsQsNz8TpxmI4hxSbOxkhXD3RH5tYiaavYvJn42FWTDNPJ6ub7fIMJo%2F%2B0BQWf64AYBW30%2BqXKR%2FLD4Qu8LDxwtTmjEgfv&X-Amz-Signature=4cfcd08f9bc3fc6d5b8eeb0a8575047523ee4d4b627e2e3c4f1160149ca5e3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYNLEWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3AWezzqy%2FM4qw1lHraVERObyl1lKBIyf2W0kBFg%2BCvAiAlFQl%2BcXixq1kNjw2pGCI0%2FcIKOYDYMganE2uCMKVU4Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMxUwlaBM%2FEQCAj9NuKtwDzvVoBzgoMlIvp3HThDI14ngImGzX8D4yKMva55fcuQIjSVSli79mMyk5IPmzEKPVX1l0t4KYKQBecU%2FQFUmQwK8HBN7MNCg9%2FUfnHqVj8Ov0I2nrVAb8c5RmEg5dfoJvpqDJwcs2Xrz1AlBXoIYmkPt4ieCq9Bq%2BugQLomYazqTu7F27%2FEcBBYyiQg09cM5jRfDqug1QVgXiE4IkHsVlt6wCxnal3cL%2FjBAF4KkPYOrjcLyZhq6lQ5Q7CU29M8fv796%2FCdhSAuhfrkvkYkRUbNkalM5DMVyRZtjHXMOh8Mze9P%2FylmMASAQ9V%2BvPnINLODUVKrbcwscToEGhve1N7fkJVMO8kcvv8oZCLA4t4qomWttdqLkPzFseRICzY%2F4CwJ5Yg2pGVE2b0HgnGMfSsbk1Seb3C7UbioADxrQhxkhG9I4vVFJPR%2FKT7qO7joJmgxDVLnYbUd2IEeHTcEVVL3gWKqsAKcOzGNpoqQiXORsS%2BVTeY0%2FwaUoPLX6KrbWlyHt7M2p63sTGYWTxMOWKwwWoEb0Cg3e8O2bGYuhdKTKOSDDGHBrSCF0ZP621NFotQJLtoeQSLjbozqqVrnF6GPpNEMB%2BXjgbHFZzKbfE5p5NX8Ql%2BwqvdPuGbhcwid%2F%2FvwY6pgHhNZhKqBiycSqZRvDVvCtsxP1Gdi9zBfCMAbyfEEgo5l8K%2BKn0m4SZFmx6kCreQj3XBb68TkTtmPylHsvfhy76dkezo52BRgue1l5JP26oEiWfaua4K42PUUBLNs8CsYtsQsNz8TpxmI4hxSbOxkhXD3RH5tYiaavYvJn42FWTDNPJ6ub7fIMJo%2F%2B0BQWf64AYBW30%2BqXKR%2FLD4Qu8LDxwtTmjEgfv&X-Amz-Signature=208e8af9f09d87e70f18bba5b16d8e876f8a4bebc343536ea5cdb3609f5ddda3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
