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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXHP3WW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChLb%2FSOpMaaEXWZPt%2Bk1RDmX6sebBimFDnEJMgiSpDSAiEA%2FURri71U0%2Bs4dQUuhbLrFMN6F05oYFd8j%2Bgpi3CdN9kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH57Y57JNM4En%2BdffCrcA1qDRvxekI3ITjuyJvwfG8JKIYWAmZqQ8zsMjDxpfYt70g3Oeo4BRcE4cb31%2FXFnZU%2FLHPt4%2FhZvjQT1z1wPYD8Y0TVFgjSz2XCjo%2BQJTyUP0QZeh0srM79HRGmmwcK%2By2VQcBJrLzWhd%2FcAla1gJuV4kkzcighOuCmSukWk8PayqkY%2B43fWR9CpzFBxKkuRJ%2BJPQyu7X3sfuaNDm52z1VJ7l7OMAtVMs7IA4O0DQEWcr%2B0fyP5uFV1%2FuDnM%2Bm%2BnzP9WEEtPIgS9B1WgzMRFGvLekMwQc0xqG0XD25OEZGsQYIM1fPqzolOPRtuteTcfu6BmiYplrtwdLQ6OwjwOEPHMv86zxG1q5%2BsTCRR6NYqPT7mKEdlLs%2FyQX4BhPCKsW%2B34W3ijwo909tu0k%2FojgiWS6hzPYkpy9Kog%2BWJbA2fm8FjtYaKOc9Ia9Fwk5qNeKkPKa0ZrCdAeW5fp2%2FcRmURZugsnKg7k7hWRsh3yCB3xTIMei8kxpsMnc8Tcjqbp14RFU%2FXvnG3IRUifmMLlATc6z3TZTajlNUD1nksp3VlR3olo%2FiogODVo8f4IdTgxmo0th4fep5BcTwOt0pXH7Fd%2BQVZKplUxxMF22%2FXZfRY3vR419DqGq0djuBTDMNu1osEGOqUBNGcJMWxLgbnLUq58ovAb5tp6qjQgu8NygRuY%2BQygCHYLJccskbaeYO7LYkrTAS%2Fa6f%2BHtRYjjrwIr9MNb3u3bpXXt5aY5g3JJFND9rt7s9SDIQRfbJbgs5oO3iMFVSVM61V2I8EvRR47FihGy04no3McTCHVb%2Fag1byC1vGpIg59Dw%2BaEGZRBuiZjHY9XwZT2%2BIlAug860Rx%2BEg9%2BaKaNyeKAaud&X-Amz-Signature=de55785c8dd55cd3a6c093ce3b8ee95c016d772b0d2b0536bd0937ed81ad1041&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXHP3WW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChLb%2FSOpMaaEXWZPt%2Bk1RDmX6sebBimFDnEJMgiSpDSAiEA%2FURri71U0%2Bs4dQUuhbLrFMN6F05oYFd8j%2Bgpi3CdN9kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH57Y57JNM4En%2BdffCrcA1qDRvxekI3ITjuyJvwfG8JKIYWAmZqQ8zsMjDxpfYt70g3Oeo4BRcE4cb31%2FXFnZU%2FLHPt4%2FhZvjQT1z1wPYD8Y0TVFgjSz2XCjo%2BQJTyUP0QZeh0srM79HRGmmwcK%2By2VQcBJrLzWhd%2FcAla1gJuV4kkzcighOuCmSukWk8PayqkY%2B43fWR9CpzFBxKkuRJ%2BJPQyu7X3sfuaNDm52z1VJ7l7OMAtVMs7IA4O0DQEWcr%2B0fyP5uFV1%2FuDnM%2Bm%2BnzP9WEEtPIgS9B1WgzMRFGvLekMwQc0xqG0XD25OEZGsQYIM1fPqzolOPRtuteTcfu6BmiYplrtwdLQ6OwjwOEPHMv86zxG1q5%2BsTCRR6NYqPT7mKEdlLs%2FyQX4BhPCKsW%2B34W3ijwo909tu0k%2FojgiWS6hzPYkpy9Kog%2BWJbA2fm8FjtYaKOc9Ia9Fwk5qNeKkPKa0ZrCdAeW5fp2%2FcRmURZugsnKg7k7hWRsh3yCB3xTIMei8kxpsMnc8Tcjqbp14RFU%2FXvnG3IRUifmMLlATc6z3TZTajlNUD1nksp3VlR3olo%2FiogODVo8f4IdTgxmo0th4fep5BcTwOt0pXH7Fd%2BQVZKplUxxMF22%2FXZfRY3vR419DqGq0djuBTDMNu1osEGOqUBNGcJMWxLgbnLUq58ovAb5tp6qjQgu8NygRuY%2BQygCHYLJccskbaeYO7LYkrTAS%2Fa6f%2BHtRYjjrwIr9MNb3u3bpXXt5aY5g3JJFND9rt7s9SDIQRfbJbgs5oO3iMFVSVM61V2I8EvRR47FihGy04no3McTCHVb%2Fag1byC1vGpIg59Dw%2BaEGZRBuiZjHY9XwZT2%2BIlAug860Rx%2BEg9%2BaKaNyeKAaud&X-Amz-Signature=25278c257b9632bf63f1aa442c252d8a81244abd04f8421ce07966ac10c77114&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXHP3WW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChLb%2FSOpMaaEXWZPt%2Bk1RDmX6sebBimFDnEJMgiSpDSAiEA%2FURri71U0%2Bs4dQUuhbLrFMN6F05oYFd8j%2Bgpi3CdN9kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH57Y57JNM4En%2BdffCrcA1qDRvxekI3ITjuyJvwfG8JKIYWAmZqQ8zsMjDxpfYt70g3Oeo4BRcE4cb31%2FXFnZU%2FLHPt4%2FhZvjQT1z1wPYD8Y0TVFgjSz2XCjo%2BQJTyUP0QZeh0srM79HRGmmwcK%2By2VQcBJrLzWhd%2FcAla1gJuV4kkzcighOuCmSukWk8PayqkY%2B43fWR9CpzFBxKkuRJ%2BJPQyu7X3sfuaNDm52z1VJ7l7OMAtVMs7IA4O0DQEWcr%2B0fyP5uFV1%2FuDnM%2Bm%2BnzP9WEEtPIgS9B1WgzMRFGvLekMwQc0xqG0XD25OEZGsQYIM1fPqzolOPRtuteTcfu6BmiYplrtwdLQ6OwjwOEPHMv86zxG1q5%2BsTCRR6NYqPT7mKEdlLs%2FyQX4BhPCKsW%2B34W3ijwo909tu0k%2FojgiWS6hzPYkpy9Kog%2BWJbA2fm8FjtYaKOc9Ia9Fwk5qNeKkPKa0ZrCdAeW5fp2%2FcRmURZugsnKg7k7hWRsh3yCB3xTIMei8kxpsMnc8Tcjqbp14RFU%2FXvnG3IRUifmMLlATc6z3TZTajlNUD1nksp3VlR3olo%2FiogODVo8f4IdTgxmo0th4fep5BcTwOt0pXH7Fd%2BQVZKplUxxMF22%2FXZfRY3vR419DqGq0djuBTDMNu1osEGOqUBNGcJMWxLgbnLUq58ovAb5tp6qjQgu8NygRuY%2BQygCHYLJccskbaeYO7LYkrTAS%2Fa6f%2BHtRYjjrwIr9MNb3u3bpXXt5aY5g3JJFND9rt7s9SDIQRfbJbgs5oO3iMFVSVM61V2I8EvRR47FihGy04no3McTCHVb%2Fag1byC1vGpIg59Dw%2BaEGZRBuiZjHY9XwZT2%2BIlAug860Rx%2BEg9%2BaKaNyeKAaud&X-Amz-Signature=37cf0cad3a1495bf86fe6588bd4ad1621114430fee55c4e9cc162ab4c681963c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXHP3WW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChLb%2FSOpMaaEXWZPt%2Bk1RDmX6sebBimFDnEJMgiSpDSAiEA%2FURri71U0%2Bs4dQUuhbLrFMN6F05oYFd8j%2Bgpi3CdN9kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH57Y57JNM4En%2BdffCrcA1qDRvxekI3ITjuyJvwfG8JKIYWAmZqQ8zsMjDxpfYt70g3Oeo4BRcE4cb31%2FXFnZU%2FLHPt4%2FhZvjQT1z1wPYD8Y0TVFgjSz2XCjo%2BQJTyUP0QZeh0srM79HRGmmwcK%2By2VQcBJrLzWhd%2FcAla1gJuV4kkzcighOuCmSukWk8PayqkY%2B43fWR9CpzFBxKkuRJ%2BJPQyu7X3sfuaNDm52z1VJ7l7OMAtVMs7IA4O0DQEWcr%2B0fyP5uFV1%2FuDnM%2Bm%2BnzP9WEEtPIgS9B1WgzMRFGvLekMwQc0xqG0XD25OEZGsQYIM1fPqzolOPRtuteTcfu6BmiYplrtwdLQ6OwjwOEPHMv86zxG1q5%2BsTCRR6NYqPT7mKEdlLs%2FyQX4BhPCKsW%2B34W3ijwo909tu0k%2FojgiWS6hzPYkpy9Kog%2BWJbA2fm8FjtYaKOc9Ia9Fwk5qNeKkPKa0ZrCdAeW5fp2%2FcRmURZugsnKg7k7hWRsh3yCB3xTIMei8kxpsMnc8Tcjqbp14RFU%2FXvnG3IRUifmMLlATc6z3TZTajlNUD1nksp3VlR3olo%2FiogODVo8f4IdTgxmo0th4fep5BcTwOt0pXH7Fd%2BQVZKplUxxMF22%2FXZfRY3vR419DqGq0djuBTDMNu1osEGOqUBNGcJMWxLgbnLUq58ovAb5tp6qjQgu8NygRuY%2BQygCHYLJccskbaeYO7LYkrTAS%2Fa6f%2BHtRYjjrwIr9MNb3u3bpXXt5aY5g3JJFND9rt7s9SDIQRfbJbgs5oO3iMFVSVM61V2I8EvRR47FihGy04no3McTCHVb%2Fag1byC1vGpIg59Dw%2BaEGZRBuiZjHY9XwZT2%2BIlAug860Rx%2BEg9%2BaKaNyeKAaud&X-Amz-Signature=248b17aca5a01ee50545f401deb89187b9a64948702789a108b64cad3ecebac9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXHP3WW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChLb%2FSOpMaaEXWZPt%2Bk1RDmX6sebBimFDnEJMgiSpDSAiEA%2FURri71U0%2Bs4dQUuhbLrFMN6F05oYFd8j%2Bgpi3CdN9kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH57Y57JNM4En%2BdffCrcA1qDRvxekI3ITjuyJvwfG8JKIYWAmZqQ8zsMjDxpfYt70g3Oeo4BRcE4cb31%2FXFnZU%2FLHPt4%2FhZvjQT1z1wPYD8Y0TVFgjSz2XCjo%2BQJTyUP0QZeh0srM79HRGmmwcK%2By2VQcBJrLzWhd%2FcAla1gJuV4kkzcighOuCmSukWk8PayqkY%2B43fWR9CpzFBxKkuRJ%2BJPQyu7X3sfuaNDm52z1VJ7l7OMAtVMs7IA4O0DQEWcr%2B0fyP5uFV1%2FuDnM%2Bm%2BnzP9WEEtPIgS9B1WgzMRFGvLekMwQc0xqG0XD25OEZGsQYIM1fPqzolOPRtuteTcfu6BmiYplrtwdLQ6OwjwOEPHMv86zxG1q5%2BsTCRR6NYqPT7mKEdlLs%2FyQX4BhPCKsW%2B34W3ijwo909tu0k%2FojgiWS6hzPYkpy9Kog%2BWJbA2fm8FjtYaKOc9Ia9Fwk5qNeKkPKa0ZrCdAeW5fp2%2FcRmURZugsnKg7k7hWRsh3yCB3xTIMei8kxpsMnc8Tcjqbp14RFU%2FXvnG3IRUifmMLlATc6z3TZTajlNUD1nksp3VlR3olo%2FiogODVo8f4IdTgxmo0th4fep5BcTwOt0pXH7Fd%2BQVZKplUxxMF22%2FXZfRY3vR419DqGq0djuBTDMNu1osEGOqUBNGcJMWxLgbnLUq58ovAb5tp6qjQgu8NygRuY%2BQygCHYLJccskbaeYO7LYkrTAS%2Fa6f%2BHtRYjjrwIr9MNb3u3bpXXt5aY5g3JJFND9rt7s9SDIQRfbJbgs5oO3iMFVSVM61V2I8EvRR47FihGy04no3McTCHVb%2Fag1byC1vGpIg59Dw%2BaEGZRBuiZjHY9XwZT2%2BIlAug860Rx%2BEg9%2BaKaNyeKAaud&X-Amz-Signature=ecc4022d64848d0446d112c2f08d5837cecdab081975a3b21d701000643de109&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
