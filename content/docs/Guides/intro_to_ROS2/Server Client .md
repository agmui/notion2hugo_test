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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J32NKGO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx35k5o3n2DUX7zlv%2BfAkRK3nlUyDX%2FOwJlxzrs%2F4yVAIhAOxEkMCWbgGG4tcp%2F6SmmMiUFmELvhohuktzzogzqAyYKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Qs0rKuDr3WFCycIq3AN5ksoN2jinAQqHOa%2FYAlViLMTNfBlet84Vy%2B74m3c7PKBtt%2B8HN8OwEOyGMOOmhroU1ycGgjy2WfMrmQnkly93TP3bWUS2KNQrWSxpSoibd8iMIZ2q5eXdhuB2gYRmPmA%2BALopdvERkFekF8y8%2FmLx1RCH0nxHgTis1RCjrNIHOtRaTuxoOOR1eP3TSQ575xsOHlTiJWv73zAWtEbevYsUl5J64hElTdj6bfibqXkWkFzvo1q5hjUySAHsn5tOsgvZPE2oPnO2pNtox9bi0hlnatsNUv0Bzyn0LO2kC1MbYFrVwF5qhzZL2%2FX2C49CXRzkOMNpGQmFvhUskNr3wM7OH9AK3iAtTnHwbU7FFQQdGFU6iwigIQvpwtkKoJQE4VMlv8FMogxeuYAEy0iBVfGzaygNm8lQiz06Vz2YpGlRm%2FIjKKHmU6hV51usgq30lf7piNGDZFqvdEtzvR%2FIcJRAmTzwAmfopBTpy%2F2ryWvweza7%2BLqSEreBYhLgJKndoOyeyqU0v%2B%2F%2BJXPoIOZPnPF4jNcIwQB0ugTw2bMd2qgPSddtbjx2yZ%2F1%2FfklvhQNpIzEFFEfau6bdDOytXsDPd3Df9yMXhpPfWBST8vqsc9PtPspjcFu7lI3AxhKQjDjh5jDBjqkAZX7CiMQ7FCZwyeSJ6g190SMXOnJQh3ESITveQkPIvZ4sBRe6SXh7KaI7sjwnwrLMuADe0OpfGZBEgJlq6iUkoe12OnWy30If2VIpuBGU%2FgYKFzJkueiBJ6G40wOtA%2BYSZxbmwQzGPSkXJFKE6BVLvktwpiiJmj2ENvMPZxWlnD8TSotiNzDNjV3jD3F0hBR68kc4PJNKB307k98%2BQCa%2BHrsyQfB&X-Amz-Signature=6c6ae0c8f41a3c31845a0c1a055e6c21e67f23d043602b15439bc3c577d98498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J32NKGO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx35k5o3n2DUX7zlv%2BfAkRK3nlUyDX%2FOwJlxzrs%2F4yVAIhAOxEkMCWbgGG4tcp%2F6SmmMiUFmELvhohuktzzogzqAyYKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Qs0rKuDr3WFCycIq3AN5ksoN2jinAQqHOa%2FYAlViLMTNfBlet84Vy%2B74m3c7PKBtt%2B8HN8OwEOyGMOOmhroU1ycGgjy2WfMrmQnkly93TP3bWUS2KNQrWSxpSoibd8iMIZ2q5eXdhuB2gYRmPmA%2BALopdvERkFekF8y8%2FmLx1RCH0nxHgTis1RCjrNIHOtRaTuxoOOR1eP3TSQ575xsOHlTiJWv73zAWtEbevYsUl5J64hElTdj6bfibqXkWkFzvo1q5hjUySAHsn5tOsgvZPE2oPnO2pNtox9bi0hlnatsNUv0Bzyn0LO2kC1MbYFrVwF5qhzZL2%2FX2C49CXRzkOMNpGQmFvhUskNr3wM7OH9AK3iAtTnHwbU7FFQQdGFU6iwigIQvpwtkKoJQE4VMlv8FMogxeuYAEy0iBVfGzaygNm8lQiz06Vz2YpGlRm%2FIjKKHmU6hV51usgq30lf7piNGDZFqvdEtzvR%2FIcJRAmTzwAmfopBTpy%2F2ryWvweza7%2BLqSEreBYhLgJKndoOyeyqU0v%2B%2F%2BJXPoIOZPnPF4jNcIwQB0ugTw2bMd2qgPSddtbjx2yZ%2F1%2FfklvhQNpIzEFFEfau6bdDOytXsDPd3Df9yMXhpPfWBST8vqsc9PtPspjcFu7lI3AxhKQjDjh5jDBjqkAZX7CiMQ7FCZwyeSJ6g190SMXOnJQh3ESITveQkPIvZ4sBRe6SXh7KaI7sjwnwrLMuADe0OpfGZBEgJlq6iUkoe12OnWy30If2VIpuBGU%2FgYKFzJkueiBJ6G40wOtA%2BYSZxbmwQzGPSkXJFKE6BVLvktwpiiJmj2ENvMPZxWlnD8TSotiNzDNjV3jD3F0hBR68kc4PJNKB307k98%2BQCa%2BHrsyQfB&X-Amz-Signature=e07267bff7199110992c42b2a2788e0715923749f4aab6415a18901ff6863ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J32NKGO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx35k5o3n2DUX7zlv%2BfAkRK3nlUyDX%2FOwJlxzrs%2F4yVAIhAOxEkMCWbgGG4tcp%2F6SmmMiUFmELvhohuktzzogzqAyYKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Qs0rKuDr3WFCycIq3AN5ksoN2jinAQqHOa%2FYAlViLMTNfBlet84Vy%2B74m3c7PKBtt%2B8HN8OwEOyGMOOmhroU1ycGgjy2WfMrmQnkly93TP3bWUS2KNQrWSxpSoibd8iMIZ2q5eXdhuB2gYRmPmA%2BALopdvERkFekF8y8%2FmLx1RCH0nxHgTis1RCjrNIHOtRaTuxoOOR1eP3TSQ575xsOHlTiJWv73zAWtEbevYsUl5J64hElTdj6bfibqXkWkFzvo1q5hjUySAHsn5tOsgvZPE2oPnO2pNtox9bi0hlnatsNUv0Bzyn0LO2kC1MbYFrVwF5qhzZL2%2FX2C49CXRzkOMNpGQmFvhUskNr3wM7OH9AK3iAtTnHwbU7FFQQdGFU6iwigIQvpwtkKoJQE4VMlv8FMogxeuYAEy0iBVfGzaygNm8lQiz06Vz2YpGlRm%2FIjKKHmU6hV51usgq30lf7piNGDZFqvdEtzvR%2FIcJRAmTzwAmfopBTpy%2F2ryWvweza7%2BLqSEreBYhLgJKndoOyeyqU0v%2B%2F%2BJXPoIOZPnPF4jNcIwQB0ugTw2bMd2qgPSddtbjx2yZ%2F1%2FfklvhQNpIzEFFEfau6bdDOytXsDPd3Df9yMXhpPfWBST8vqsc9PtPspjcFu7lI3AxhKQjDjh5jDBjqkAZX7CiMQ7FCZwyeSJ6g190SMXOnJQh3ESITveQkPIvZ4sBRe6SXh7KaI7sjwnwrLMuADe0OpfGZBEgJlq6iUkoe12OnWy30If2VIpuBGU%2FgYKFzJkueiBJ6G40wOtA%2BYSZxbmwQzGPSkXJFKE6BVLvktwpiiJmj2ENvMPZxWlnD8TSotiNzDNjV3jD3F0hBR68kc4PJNKB307k98%2BQCa%2BHrsyQfB&X-Amz-Signature=8cce64f793f865220239834ae6c7795f05437d7079e7f0d60f2b36d7128be481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J32NKGO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx35k5o3n2DUX7zlv%2BfAkRK3nlUyDX%2FOwJlxzrs%2F4yVAIhAOxEkMCWbgGG4tcp%2F6SmmMiUFmELvhohuktzzogzqAyYKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Qs0rKuDr3WFCycIq3AN5ksoN2jinAQqHOa%2FYAlViLMTNfBlet84Vy%2B74m3c7PKBtt%2B8HN8OwEOyGMOOmhroU1ycGgjy2WfMrmQnkly93TP3bWUS2KNQrWSxpSoibd8iMIZ2q5eXdhuB2gYRmPmA%2BALopdvERkFekF8y8%2FmLx1RCH0nxHgTis1RCjrNIHOtRaTuxoOOR1eP3TSQ575xsOHlTiJWv73zAWtEbevYsUl5J64hElTdj6bfibqXkWkFzvo1q5hjUySAHsn5tOsgvZPE2oPnO2pNtox9bi0hlnatsNUv0Bzyn0LO2kC1MbYFrVwF5qhzZL2%2FX2C49CXRzkOMNpGQmFvhUskNr3wM7OH9AK3iAtTnHwbU7FFQQdGFU6iwigIQvpwtkKoJQE4VMlv8FMogxeuYAEy0iBVfGzaygNm8lQiz06Vz2YpGlRm%2FIjKKHmU6hV51usgq30lf7piNGDZFqvdEtzvR%2FIcJRAmTzwAmfopBTpy%2F2ryWvweza7%2BLqSEreBYhLgJKndoOyeyqU0v%2B%2F%2BJXPoIOZPnPF4jNcIwQB0ugTw2bMd2qgPSddtbjx2yZ%2F1%2FfklvhQNpIzEFFEfau6bdDOytXsDPd3Df9yMXhpPfWBST8vqsc9PtPspjcFu7lI3AxhKQjDjh5jDBjqkAZX7CiMQ7FCZwyeSJ6g190SMXOnJQh3ESITveQkPIvZ4sBRe6SXh7KaI7sjwnwrLMuADe0OpfGZBEgJlq6iUkoe12OnWy30If2VIpuBGU%2FgYKFzJkueiBJ6G40wOtA%2BYSZxbmwQzGPSkXJFKE6BVLvktwpiiJmj2ENvMPZxWlnD8TSotiNzDNjV3jD3F0hBR68kc4PJNKB307k98%2BQCa%2BHrsyQfB&X-Amz-Signature=174a5a92c3794350c80e2b93a5826b036a3a7ac766415fc1b5d70afea6b2aebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J32NKGO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx35k5o3n2DUX7zlv%2BfAkRK3nlUyDX%2FOwJlxzrs%2F4yVAIhAOxEkMCWbgGG4tcp%2F6SmmMiUFmELvhohuktzzogzqAyYKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Qs0rKuDr3WFCycIq3AN5ksoN2jinAQqHOa%2FYAlViLMTNfBlet84Vy%2B74m3c7PKBtt%2B8HN8OwEOyGMOOmhroU1ycGgjy2WfMrmQnkly93TP3bWUS2KNQrWSxpSoibd8iMIZ2q5eXdhuB2gYRmPmA%2BALopdvERkFekF8y8%2FmLx1RCH0nxHgTis1RCjrNIHOtRaTuxoOOR1eP3TSQ575xsOHlTiJWv73zAWtEbevYsUl5J64hElTdj6bfibqXkWkFzvo1q5hjUySAHsn5tOsgvZPE2oPnO2pNtox9bi0hlnatsNUv0Bzyn0LO2kC1MbYFrVwF5qhzZL2%2FX2C49CXRzkOMNpGQmFvhUskNr3wM7OH9AK3iAtTnHwbU7FFQQdGFU6iwigIQvpwtkKoJQE4VMlv8FMogxeuYAEy0iBVfGzaygNm8lQiz06Vz2YpGlRm%2FIjKKHmU6hV51usgq30lf7piNGDZFqvdEtzvR%2FIcJRAmTzwAmfopBTpy%2F2ryWvweza7%2BLqSEreBYhLgJKndoOyeyqU0v%2B%2F%2BJXPoIOZPnPF4jNcIwQB0ugTw2bMd2qgPSddtbjx2yZ%2F1%2FfklvhQNpIzEFFEfau6bdDOytXsDPd3Df9yMXhpPfWBST8vqsc9PtPspjcFu7lI3AxhKQjDjh5jDBjqkAZX7CiMQ7FCZwyeSJ6g190SMXOnJQh3ESITveQkPIvZ4sBRe6SXh7KaI7sjwnwrLMuADe0OpfGZBEgJlq6iUkoe12OnWy30If2VIpuBGU%2FgYKFzJkueiBJ6G40wOtA%2BYSZxbmwQzGPSkXJFKE6BVLvktwpiiJmj2ENvMPZxWlnD8TSotiNzDNjV3jD3F0hBR68kc4PJNKB307k98%2BQCa%2BHrsyQfB&X-Amz-Signature=dae0f1d7d6fa914d56e56cbd070f899e309490e83205236416d193d5ecd8962b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
