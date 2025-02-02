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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SX7QTI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpulqp4qq6YRoo3FoWNlxQ4ihtzSt82TuVl6kEsPLIqAiEA0ZBEBtr48OIwHxYazDRxG8tGipb%2B67qsoSrniIPiprYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BUxJKJAWv9%2BahtMCrcA2MaNVPYKUyQ4LUQV%2Byc19cKTdOZqjqVvOhDIo1fAy%2FxeS%2F08QpwWe6wm2iqD%2F7r%2FAsahyYUGXEgaIJ2ObuJC3OTsHe3RFwKmxu5oGZEyP3mYeKo1JrJDD43JzTccpZc44whzX4NKXk7vMQuM6iaS1QKDRMYk7SoV1SDTyCIGbTHQcuGXkhKSAcx3Lzs9Ot4qMRRSK%2FOzRnPLPWEDz3q9DXjM9gwtzYodTyQYUZxK9Je1pmehz3S76xH3om7OIhx1o8dg5RoTQuR0RTkfb13d6RDygrPI8fZXlLkLpt9gkCV6jv3n2Bm1XV7n%2FZgWD1TX%2BkHFSMdEJ3%2BNw1Vn%2BiSCxgztc2t%2BpNn03PCWNeJ%2FEYxSs7bR52JcJJtJMz%2B5Rojs%2Fy67ghwzYq3kiiPeje6bWLI2oJg8%2BtTiSARe91Q0fxqin5JlPZ4zIHw8hmAfvIM87QkmGyVb8trFaTEjbVbWCv9DKsiWKwIsWXotxnBszPbMY8Sr7iOI5IygtjUiUs0emma6rQWv2CQRyuB7N9uCHPLCTW%2BhNzgpZCHY5FQfThXpKbgP3W8q7w%2BG%2BemwiDSZ6h%2FQ1p%2FiPOw6kYic15M%2BAltPcmwMPj1IqBvMwxEAmuzP0RpAJE54ksuvPHUMKa6%2FbwGOqUBQqtNt%2BIbf2qo5fYPmy4hteJgW1VBuxxD95sFBJ6xzS%2F6%2F4xFtUtR9Eo15tc4M6%2FDaEgAZTdAthV3TkMAshV8TNAi3KVAz%2BgWclgf5b7oWvLgqCFoCNbDg5X0e%2Bs24n2HWAMPzYvnIFTuxSP5KJC0ZJthbH3%2FLgsNsPS9GyCTpmN%2BWzoD4%2BKDe%2FVbUqgtNrINpMFlyLkP6vPc03TnuRT0M0RjtCjr&X-Amz-Signature=39507c6442484bec09d7bff17eef538f0407db0c574b527d79ba983891635ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SX7QTI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpulqp4qq6YRoo3FoWNlxQ4ihtzSt82TuVl6kEsPLIqAiEA0ZBEBtr48OIwHxYazDRxG8tGipb%2B67qsoSrniIPiprYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BUxJKJAWv9%2BahtMCrcA2MaNVPYKUyQ4LUQV%2Byc19cKTdOZqjqVvOhDIo1fAy%2FxeS%2F08QpwWe6wm2iqD%2F7r%2FAsahyYUGXEgaIJ2ObuJC3OTsHe3RFwKmxu5oGZEyP3mYeKo1JrJDD43JzTccpZc44whzX4NKXk7vMQuM6iaS1QKDRMYk7SoV1SDTyCIGbTHQcuGXkhKSAcx3Lzs9Ot4qMRRSK%2FOzRnPLPWEDz3q9DXjM9gwtzYodTyQYUZxK9Je1pmehz3S76xH3om7OIhx1o8dg5RoTQuR0RTkfb13d6RDygrPI8fZXlLkLpt9gkCV6jv3n2Bm1XV7n%2FZgWD1TX%2BkHFSMdEJ3%2BNw1Vn%2BiSCxgztc2t%2BpNn03PCWNeJ%2FEYxSs7bR52JcJJtJMz%2B5Rojs%2Fy67ghwzYq3kiiPeje6bWLI2oJg8%2BtTiSARe91Q0fxqin5JlPZ4zIHw8hmAfvIM87QkmGyVb8trFaTEjbVbWCv9DKsiWKwIsWXotxnBszPbMY8Sr7iOI5IygtjUiUs0emma6rQWv2CQRyuB7N9uCHPLCTW%2BhNzgpZCHY5FQfThXpKbgP3W8q7w%2BG%2BemwiDSZ6h%2FQ1p%2FiPOw6kYic15M%2BAltPcmwMPj1IqBvMwxEAmuzP0RpAJE54ksuvPHUMKa6%2FbwGOqUBQqtNt%2BIbf2qo5fYPmy4hteJgW1VBuxxD95sFBJ6xzS%2F6%2F4xFtUtR9Eo15tc4M6%2FDaEgAZTdAthV3TkMAshV8TNAi3KVAz%2BgWclgf5b7oWvLgqCFoCNbDg5X0e%2Bs24n2HWAMPzYvnIFTuxSP5KJC0ZJthbH3%2FLgsNsPS9GyCTpmN%2BWzoD4%2BKDe%2FVbUqgtNrINpMFlyLkP6vPc03TnuRT0M0RjtCjr&X-Amz-Signature=8b535f803a5d03183528d4a191a1d06500c912d842151638794020fe997f6988&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SX7QTI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpulqp4qq6YRoo3FoWNlxQ4ihtzSt82TuVl6kEsPLIqAiEA0ZBEBtr48OIwHxYazDRxG8tGipb%2B67qsoSrniIPiprYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BUxJKJAWv9%2BahtMCrcA2MaNVPYKUyQ4LUQV%2Byc19cKTdOZqjqVvOhDIo1fAy%2FxeS%2F08QpwWe6wm2iqD%2F7r%2FAsahyYUGXEgaIJ2ObuJC3OTsHe3RFwKmxu5oGZEyP3mYeKo1JrJDD43JzTccpZc44whzX4NKXk7vMQuM6iaS1QKDRMYk7SoV1SDTyCIGbTHQcuGXkhKSAcx3Lzs9Ot4qMRRSK%2FOzRnPLPWEDz3q9DXjM9gwtzYodTyQYUZxK9Je1pmehz3S76xH3om7OIhx1o8dg5RoTQuR0RTkfb13d6RDygrPI8fZXlLkLpt9gkCV6jv3n2Bm1XV7n%2FZgWD1TX%2BkHFSMdEJ3%2BNw1Vn%2BiSCxgztc2t%2BpNn03PCWNeJ%2FEYxSs7bR52JcJJtJMz%2B5Rojs%2Fy67ghwzYq3kiiPeje6bWLI2oJg8%2BtTiSARe91Q0fxqin5JlPZ4zIHw8hmAfvIM87QkmGyVb8trFaTEjbVbWCv9DKsiWKwIsWXotxnBszPbMY8Sr7iOI5IygtjUiUs0emma6rQWv2CQRyuB7N9uCHPLCTW%2BhNzgpZCHY5FQfThXpKbgP3W8q7w%2BG%2BemwiDSZ6h%2FQ1p%2FiPOw6kYic15M%2BAltPcmwMPj1IqBvMwxEAmuzP0RpAJE54ksuvPHUMKa6%2FbwGOqUBQqtNt%2BIbf2qo5fYPmy4hteJgW1VBuxxD95sFBJ6xzS%2F6%2F4xFtUtR9Eo15tc4M6%2FDaEgAZTdAthV3TkMAshV8TNAi3KVAz%2BgWclgf5b7oWvLgqCFoCNbDg5X0e%2Bs24n2HWAMPzYvnIFTuxSP5KJC0ZJthbH3%2FLgsNsPS9GyCTpmN%2BWzoD4%2BKDe%2FVbUqgtNrINpMFlyLkP6vPc03TnuRT0M0RjtCjr&X-Amz-Signature=aa2d74176ec8a347434dd2b1f1b6851e0055d65680f0483031211c4a4e6e8e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SX7QTI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpulqp4qq6YRoo3FoWNlxQ4ihtzSt82TuVl6kEsPLIqAiEA0ZBEBtr48OIwHxYazDRxG8tGipb%2B67qsoSrniIPiprYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BUxJKJAWv9%2BahtMCrcA2MaNVPYKUyQ4LUQV%2Byc19cKTdOZqjqVvOhDIo1fAy%2FxeS%2F08QpwWe6wm2iqD%2F7r%2FAsahyYUGXEgaIJ2ObuJC3OTsHe3RFwKmxu5oGZEyP3mYeKo1JrJDD43JzTccpZc44whzX4NKXk7vMQuM6iaS1QKDRMYk7SoV1SDTyCIGbTHQcuGXkhKSAcx3Lzs9Ot4qMRRSK%2FOzRnPLPWEDz3q9DXjM9gwtzYodTyQYUZxK9Je1pmehz3S76xH3om7OIhx1o8dg5RoTQuR0RTkfb13d6RDygrPI8fZXlLkLpt9gkCV6jv3n2Bm1XV7n%2FZgWD1TX%2BkHFSMdEJ3%2BNw1Vn%2BiSCxgztc2t%2BpNn03PCWNeJ%2FEYxSs7bR52JcJJtJMz%2B5Rojs%2Fy67ghwzYq3kiiPeje6bWLI2oJg8%2BtTiSARe91Q0fxqin5JlPZ4zIHw8hmAfvIM87QkmGyVb8trFaTEjbVbWCv9DKsiWKwIsWXotxnBszPbMY8Sr7iOI5IygtjUiUs0emma6rQWv2CQRyuB7N9uCHPLCTW%2BhNzgpZCHY5FQfThXpKbgP3W8q7w%2BG%2BemwiDSZ6h%2FQ1p%2FiPOw6kYic15M%2BAltPcmwMPj1IqBvMwxEAmuzP0RpAJE54ksuvPHUMKa6%2FbwGOqUBQqtNt%2BIbf2qo5fYPmy4hteJgW1VBuxxD95sFBJ6xzS%2F6%2F4xFtUtR9Eo15tc4M6%2FDaEgAZTdAthV3TkMAshV8TNAi3KVAz%2BgWclgf5b7oWvLgqCFoCNbDg5X0e%2Bs24n2HWAMPzYvnIFTuxSP5KJC0ZJthbH3%2FLgsNsPS9GyCTpmN%2BWzoD4%2BKDe%2FVbUqgtNrINpMFlyLkP6vPc03TnuRT0M0RjtCjr&X-Amz-Signature=c2eb721e935b58f63b0351f45784bbab4a20b190d16f7fc95c42ab5b4042d0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SX7QTI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpulqp4qq6YRoo3FoWNlxQ4ihtzSt82TuVl6kEsPLIqAiEA0ZBEBtr48OIwHxYazDRxG8tGipb%2B67qsoSrniIPiprYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BUxJKJAWv9%2BahtMCrcA2MaNVPYKUyQ4LUQV%2Byc19cKTdOZqjqVvOhDIo1fAy%2FxeS%2F08QpwWe6wm2iqD%2F7r%2FAsahyYUGXEgaIJ2ObuJC3OTsHe3RFwKmxu5oGZEyP3mYeKo1JrJDD43JzTccpZc44whzX4NKXk7vMQuM6iaS1QKDRMYk7SoV1SDTyCIGbTHQcuGXkhKSAcx3Lzs9Ot4qMRRSK%2FOzRnPLPWEDz3q9DXjM9gwtzYodTyQYUZxK9Je1pmehz3S76xH3om7OIhx1o8dg5RoTQuR0RTkfb13d6RDygrPI8fZXlLkLpt9gkCV6jv3n2Bm1XV7n%2FZgWD1TX%2BkHFSMdEJ3%2BNw1Vn%2BiSCxgztc2t%2BpNn03PCWNeJ%2FEYxSs7bR52JcJJtJMz%2B5Rojs%2Fy67ghwzYq3kiiPeje6bWLI2oJg8%2BtTiSARe91Q0fxqin5JlPZ4zIHw8hmAfvIM87QkmGyVb8trFaTEjbVbWCv9DKsiWKwIsWXotxnBszPbMY8Sr7iOI5IygtjUiUs0emma6rQWv2CQRyuB7N9uCHPLCTW%2BhNzgpZCHY5FQfThXpKbgP3W8q7w%2BG%2BemwiDSZ6h%2FQ1p%2FiPOw6kYic15M%2BAltPcmwMPj1IqBvMwxEAmuzP0RpAJE54ksuvPHUMKa6%2FbwGOqUBQqtNt%2BIbf2qo5fYPmy4hteJgW1VBuxxD95sFBJ6xzS%2F6%2F4xFtUtR9Eo15tc4M6%2FDaEgAZTdAthV3TkMAshV8TNAi3KVAz%2BgWclgf5b7oWvLgqCFoCNbDg5X0e%2Bs24n2HWAMPzYvnIFTuxSP5KJC0ZJthbH3%2FLgsNsPS9GyCTpmN%2BWzoD4%2BKDe%2FVbUqgtNrINpMFlyLkP6vPc03TnuRT0M0RjtCjr&X-Amz-Signature=13eb65f2345117df4a77ff73b9d1a026c8e08c26f0bc963919e2b20c60eee930&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
