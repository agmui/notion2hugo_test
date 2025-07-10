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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UNHH45%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYPdZyj8pu3xY5tPpokbujF5Nn0lCCP7ZQ8XBCrmJzygIgRi%2FPTMli4JtxH%2B5T21ShjRxqyk8uxKC7dIVYTd82BkkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtb7wdYYk6hcVXDCrcAw%2BVu5btIN4rzCsZwiCJWTKpT4sEWPE%2BT6agAYJtJQyd1013sVw%2FXWD2uKiv9otP99el5TfUO4NV1cBdWglDcv%2FADlgyQjF8zbhA48QtSpbM593Bv2wNVPKHSwOAxM%2FcXoHUHdk61EaxT0PKKhaO8j1UAls6rpn%2FzrOdPFBjgJjLdrU3sJEmLIA1kT8cInIsWDFyLD81Fu%2BwR7RJ1YuZNixViJSvLm0SfdDYSiWTgfbMQBLyCtOPy21DZ6RYTPqecSG1V3yzAHKZWLSUATvU3WYHFWTncsK5mw%2Bnyf3d32HQyYgrBONCIO%2BYZTo7EpzOSG7L5lWrWy%2F%2ByDVIP9c6F2TNl7XiQaTd28fQ%2FZrzKWxgqtY2HAJw65%2FKkBFnBqrAMfzvXqHND%2FB8zfEXhLKdbmIFhLfv9uyp3%2BNf7I%2FhtkOvzpPmFJAd8vEIVDMgzFp8RSFgbwO3bhvm29T0B%2F80gl7KWsvRuFf3QAu9kEsckiWK1dY%2FtB0T2BsAsgDrVqYItJRrKdJ%2FmxuBsH%2FiwDYHhqwp7fAhZfWagr1plT7REn3sMNqB5qDzQwz0t0xCGw2Cz6jmAKdJYyMIl8UhApLn7nMDBzjwCX3dKx%2BTKwcYELB94Z0r0uxCVp1YHtniMKP%2BvsMGOqUBtlJk2U1bzEenUab9YfNgXB%2FzcoglrWawt4eWdUo2Tsja8LJ8aA1aXxpnrgEojsnI%2BMq2QuUTvHa1Tslu3GggK1oaiLXiimsIU8lfKJ%2BlW7gBViN8LjEUDKIYlQuQmyq9J4Y7SStbBXLXT743QLvYCY2sE%2BMTf7MwE0jUckuHZQkMMXvHhtMW8R%2FneK%2BUqp8%2BeiEEiEwo2Na0yykCvsE5LDk1Cj0G&X-Amz-Signature=da12197435b1585f3f6b3b6d5339d66099a706fc8ee6ddaaea17f77fde3875b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UNHH45%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYPdZyj8pu3xY5tPpokbujF5Nn0lCCP7ZQ8XBCrmJzygIgRi%2FPTMli4JtxH%2B5T21ShjRxqyk8uxKC7dIVYTd82BkkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtb7wdYYk6hcVXDCrcAw%2BVu5btIN4rzCsZwiCJWTKpT4sEWPE%2BT6agAYJtJQyd1013sVw%2FXWD2uKiv9otP99el5TfUO4NV1cBdWglDcv%2FADlgyQjF8zbhA48QtSpbM593Bv2wNVPKHSwOAxM%2FcXoHUHdk61EaxT0PKKhaO8j1UAls6rpn%2FzrOdPFBjgJjLdrU3sJEmLIA1kT8cInIsWDFyLD81Fu%2BwR7RJ1YuZNixViJSvLm0SfdDYSiWTgfbMQBLyCtOPy21DZ6RYTPqecSG1V3yzAHKZWLSUATvU3WYHFWTncsK5mw%2Bnyf3d32HQyYgrBONCIO%2BYZTo7EpzOSG7L5lWrWy%2F%2ByDVIP9c6F2TNl7XiQaTd28fQ%2FZrzKWxgqtY2HAJw65%2FKkBFnBqrAMfzvXqHND%2FB8zfEXhLKdbmIFhLfv9uyp3%2BNf7I%2FhtkOvzpPmFJAd8vEIVDMgzFp8RSFgbwO3bhvm29T0B%2F80gl7KWsvRuFf3QAu9kEsckiWK1dY%2FtB0T2BsAsgDrVqYItJRrKdJ%2FmxuBsH%2FiwDYHhqwp7fAhZfWagr1plT7REn3sMNqB5qDzQwz0t0xCGw2Cz6jmAKdJYyMIl8UhApLn7nMDBzjwCX3dKx%2BTKwcYELB94Z0r0uxCVp1YHtniMKP%2BvsMGOqUBtlJk2U1bzEenUab9YfNgXB%2FzcoglrWawt4eWdUo2Tsja8LJ8aA1aXxpnrgEojsnI%2BMq2QuUTvHa1Tslu3GggK1oaiLXiimsIU8lfKJ%2BlW7gBViN8LjEUDKIYlQuQmyq9J4Y7SStbBXLXT743QLvYCY2sE%2BMTf7MwE0jUckuHZQkMMXvHhtMW8R%2FneK%2BUqp8%2BeiEEiEwo2Na0yykCvsE5LDk1Cj0G&X-Amz-Signature=b44a4297730408847a4e3e9bcbbf68410e99519f3cc652661968743c7e06140e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UNHH45%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYPdZyj8pu3xY5tPpokbujF5Nn0lCCP7ZQ8XBCrmJzygIgRi%2FPTMli4JtxH%2B5T21ShjRxqyk8uxKC7dIVYTd82BkkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtb7wdYYk6hcVXDCrcAw%2BVu5btIN4rzCsZwiCJWTKpT4sEWPE%2BT6agAYJtJQyd1013sVw%2FXWD2uKiv9otP99el5TfUO4NV1cBdWglDcv%2FADlgyQjF8zbhA48QtSpbM593Bv2wNVPKHSwOAxM%2FcXoHUHdk61EaxT0PKKhaO8j1UAls6rpn%2FzrOdPFBjgJjLdrU3sJEmLIA1kT8cInIsWDFyLD81Fu%2BwR7RJ1YuZNixViJSvLm0SfdDYSiWTgfbMQBLyCtOPy21DZ6RYTPqecSG1V3yzAHKZWLSUATvU3WYHFWTncsK5mw%2Bnyf3d32HQyYgrBONCIO%2BYZTo7EpzOSG7L5lWrWy%2F%2ByDVIP9c6F2TNl7XiQaTd28fQ%2FZrzKWxgqtY2HAJw65%2FKkBFnBqrAMfzvXqHND%2FB8zfEXhLKdbmIFhLfv9uyp3%2BNf7I%2FhtkOvzpPmFJAd8vEIVDMgzFp8RSFgbwO3bhvm29T0B%2F80gl7KWsvRuFf3QAu9kEsckiWK1dY%2FtB0T2BsAsgDrVqYItJRrKdJ%2FmxuBsH%2FiwDYHhqwp7fAhZfWagr1plT7REn3sMNqB5qDzQwz0t0xCGw2Cz6jmAKdJYyMIl8UhApLn7nMDBzjwCX3dKx%2BTKwcYELB94Z0r0uxCVp1YHtniMKP%2BvsMGOqUBtlJk2U1bzEenUab9YfNgXB%2FzcoglrWawt4eWdUo2Tsja8LJ8aA1aXxpnrgEojsnI%2BMq2QuUTvHa1Tslu3GggK1oaiLXiimsIU8lfKJ%2BlW7gBViN8LjEUDKIYlQuQmyq9J4Y7SStbBXLXT743QLvYCY2sE%2BMTf7MwE0jUckuHZQkMMXvHhtMW8R%2FneK%2BUqp8%2BeiEEiEwo2Na0yykCvsE5LDk1Cj0G&X-Amz-Signature=e35803ae2ac0a2a04724f1d92da96e49ef331ab1992490cbab9f7227efc4cb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UNHH45%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYPdZyj8pu3xY5tPpokbujF5Nn0lCCP7ZQ8XBCrmJzygIgRi%2FPTMli4JtxH%2B5T21ShjRxqyk8uxKC7dIVYTd82BkkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtb7wdYYk6hcVXDCrcAw%2BVu5btIN4rzCsZwiCJWTKpT4sEWPE%2BT6agAYJtJQyd1013sVw%2FXWD2uKiv9otP99el5TfUO4NV1cBdWglDcv%2FADlgyQjF8zbhA48QtSpbM593Bv2wNVPKHSwOAxM%2FcXoHUHdk61EaxT0PKKhaO8j1UAls6rpn%2FzrOdPFBjgJjLdrU3sJEmLIA1kT8cInIsWDFyLD81Fu%2BwR7RJ1YuZNixViJSvLm0SfdDYSiWTgfbMQBLyCtOPy21DZ6RYTPqecSG1V3yzAHKZWLSUATvU3WYHFWTncsK5mw%2Bnyf3d32HQyYgrBONCIO%2BYZTo7EpzOSG7L5lWrWy%2F%2ByDVIP9c6F2TNl7XiQaTd28fQ%2FZrzKWxgqtY2HAJw65%2FKkBFnBqrAMfzvXqHND%2FB8zfEXhLKdbmIFhLfv9uyp3%2BNf7I%2FhtkOvzpPmFJAd8vEIVDMgzFp8RSFgbwO3bhvm29T0B%2F80gl7KWsvRuFf3QAu9kEsckiWK1dY%2FtB0T2BsAsgDrVqYItJRrKdJ%2FmxuBsH%2FiwDYHhqwp7fAhZfWagr1plT7REn3sMNqB5qDzQwz0t0xCGw2Cz6jmAKdJYyMIl8UhApLn7nMDBzjwCX3dKx%2BTKwcYELB94Z0r0uxCVp1YHtniMKP%2BvsMGOqUBtlJk2U1bzEenUab9YfNgXB%2FzcoglrWawt4eWdUo2Tsja8LJ8aA1aXxpnrgEojsnI%2BMq2QuUTvHa1Tslu3GggK1oaiLXiimsIU8lfKJ%2BlW7gBViN8LjEUDKIYlQuQmyq9J4Y7SStbBXLXT743QLvYCY2sE%2BMTf7MwE0jUckuHZQkMMXvHhtMW8R%2FneK%2BUqp8%2BeiEEiEwo2Na0yykCvsE5LDk1Cj0G&X-Amz-Signature=3e5f4a0dfdedf7f78f6abdaa6b697e0042223ea5d2ebec4d773c4bb86009f7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UNHH45%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYPdZyj8pu3xY5tPpokbujF5Nn0lCCP7ZQ8XBCrmJzygIgRi%2FPTMli4JtxH%2B5T21ShjRxqyk8uxKC7dIVYTd82BkkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmtb7wdYYk6hcVXDCrcAw%2BVu5btIN4rzCsZwiCJWTKpT4sEWPE%2BT6agAYJtJQyd1013sVw%2FXWD2uKiv9otP99el5TfUO4NV1cBdWglDcv%2FADlgyQjF8zbhA48QtSpbM593Bv2wNVPKHSwOAxM%2FcXoHUHdk61EaxT0PKKhaO8j1UAls6rpn%2FzrOdPFBjgJjLdrU3sJEmLIA1kT8cInIsWDFyLD81Fu%2BwR7RJ1YuZNixViJSvLm0SfdDYSiWTgfbMQBLyCtOPy21DZ6RYTPqecSG1V3yzAHKZWLSUATvU3WYHFWTncsK5mw%2Bnyf3d32HQyYgrBONCIO%2BYZTo7EpzOSG7L5lWrWy%2F%2ByDVIP9c6F2TNl7XiQaTd28fQ%2FZrzKWxgqtY2HAJw65%2FKkBFnBqrAMfzvXqHND%2FB8zfEXhLKdbmIFhLfv9uyp3%2BNf7I%2FhtkOvzpPmFJAd8vEIVDMgzFp8RSFgbwO3bhvm29T0B%2F80gl7KWsvRuFf3QAu9kEsckiWK1dY%2FtB0T2BsAsgDrVqYItJRrKdJ%2FmxuBsH%2FiwDYHhqwp7fAhZfWagr1plT7REn3sMNqB5qDzQwz0t0xCGw2Cz6jmAKdJYyMIl8UhApLn7nMDBzjwCX3dKx%2BTKwcYELB94Z0r0uxCVp1YHtniMKP%2BvsMGOqUBtlJk2U1bzEenUab9YfNgXB%2FzcoglrWawt4eWdUo2Tsja8LJ8aA1aXxpnrgEojsnI%2BMq2QuUTvHa1Tslu3GggK1oaiLXiimsIU8lfKJ%2BlW7gBViN8LjEUDKIYlQuQmyq9J4Y7SStbBXLXT743QLvYCY2sE%2BMTf7MwE0jUckuHZQkMMXvHhtMW8R%2FneK%2BUqp8%2BeiEEiEwo2Na0yykCvsE5LDk1Cj0G&X-Amz-Signature=5649eb30d73c65009321c2088c09474cced0294e3878697513efe8fb31587e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
