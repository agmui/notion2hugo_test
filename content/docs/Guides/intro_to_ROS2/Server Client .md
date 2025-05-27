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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WK7XBH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhdyvvdWPZl3CF%2F2JlWWNr5nVTK%2BLbqz7wcnDB4hXeAIgKSSviUaavWwfuTXh6Ztlojy6ik9jJ2f002iQlqdRnS4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD7UpQN44hk2hwngzyrcA4a%2FORTDtlC2jLyVbhs1mshmX5%2FDgGFBDgcligm%2BTPtj6H5tC1XhoTLFYjnYTrd8Q5097705QpO6UynrbdgwOrfrK%2Fsucs9BuZI%2BRFZrk%2FuXGTO9DJGqHBpuzfAJfGENxZAnMpb974G77EmLf%2Fu3FfCHcq%2BzaeFDMH1RFWxO6souWSKbETbfqqNo%2ByrpvH%2FLIEwHA7SZYPzz%2FS55itpgcnPwNScZOYiIJwDExZmrElmHXQTh%2BZataN0xyhcTakq4igPG7AewSWnARzguvZCDIlIvdiQpXI%2FVGdAXFTmJ%2F7EJ%2BKS8KmiLgV1BfJsH9VP8l53qIg5IZMziiW30iyuANgY%2BRIZ752yuKzJYhIfyDiMOuBx35SCFMzzJtZ7avWBtMtiikNe6N%2BbblXScrgmgDiBuZooc3gPuRJfcvjeixIig5jITrvK3eXlKukjIj7kmsJpAxQ6NsYUnI6P1YEnvk%2FvaP29HV1r113%2B5w0BQOD7QPJh4EF5p19uF%2BQbytRAR%2BRfneD9X5ajEbgefyxIRTSpXlBJQoh3g%2FV8hnU6UW7%2BImWqQlI2Umw%2Bx37d8G23mSeoy%2BVd17BfBalNfOWSDGRQddL6TnN5A9MjmQeO5M1KeStD%2Fl6K9%2FrwOOXW5MOaW2MEGOqUBSdeSunDOwiS69NGk%2Fv0TU0nUJghcqB%2FifyBF1werfuotoFhPZvfmPg3SPPcqyAJ7enJxdyCZqRlRAwFsE1G2Rq%2BbCQMtJa0Bfqx77UWEbc9HSbluRuqdWLsgApxTzUn0QWKO7xGrXx9H76VmFW9X6C9tfoUtkPX03rJOsxbyIPAWV06dLjptA8ARBDsqkUA3U01UZ%2FF6C4YZ0tukqNXkJDaPbQvL&X-Amz-Signature=ef049d1849dbc64154a27d3a01a17948cc26dca28758d65ccaca299e334f1fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WK7XBH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhdyvvdWPZl3CF%2F2JlWWNr5nVTK%2BLbqz7wcnDB4hXeAIgKSSviUaavWwfuTXh6Ztlojy6ik9jJ2f002iQlqdRnS4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD7UpQN44hk2hwngzyrcA4a%2FORTDtlC2jLyVbhs1mshmX5%2FDgGFBDgcligm%2BTPtj6H5tC1XhoTLFYjnYTrd8Q5097705QpO6UynrbdgwOrfrK%2Fsucs9BuZI%2BRFZrk%2FuXGTO9DJGqHBpuzfAJfGENxZAnMpb974G77EmLf%2Fu3FfCHcq%2BzaeFDMH1RFWxO6souWSKbETbfqqNo%2ByrpvH%2FLIEwHA7SZYPzz%2FS55itpgcnPwNScZOYiIJwDExZmrElmHXQTh%2BZataN0xyhcTakq4igPG7AewSWnARzguvZCDIlIvdiQpXI%2FVGdAXFTmJ%2F7EJ%2BKS8KmiLgV1BfJsH9VP8l53qIg5IZMziiW30iyuANgY%2BRIZ752yuKzJYhIfyDiMOuBx35SCFMzzJtZ7avWBtMtiikNe6N%2BbblXScrgmgDiBuZooc3gPuRJfcvjeixIig5jITrvK3eXlKukjIj7kmsJpAxQ6NsYUnI6P1YEnvk%2FvaP29HV1r113%2B5w0BQOD7QPJh4EF5p19uF%2BQbytRAR%2BRfneD9X5ajEbgefyxIRTSpXlBJQoh3g%2FV8hnU6UW7%2BImWqQlI2Umw%2Bx37d8G23mSeoy%2BVd17BfBalNfOWSDGRQddL6TnN5A9MjmQeO5M1KeStD%2Fl6K9%2FrwOOXW5MOaW2MEGOqUBSdeSunDOwiS69NGk%2Fv0TU0nUJghcqB%2FifyBF1werfuotoFhPZvfmPg3SPPcqyAJ7enJxdyCZqRlRAwFsE1G2Rq%2BbCQMtJa0Bfqx77UWEbc9HSbluRuqdWLsgApxTzUn0QWKO7xGrXx9H76VmFW9X6C9tfoUtkPX03rJOsxbyIPAWV06dLjptA8ARBDsqkUA3U01UZ%2FF6C4YZ0tukqNXkJDaPbQvL&X-Amz-Signature=e9ed4f72468935aa601c94b6260e14dc9c32e5ce0b85e506e4d6c543790de0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WK7XBH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhdyvvdWPZl3CF%2F2JlWWNr5nVTK%2BLbqz7wcnDB4hXeAIgKSSviUaavWwfuTXh6Ztlojy6ik9jJ2f002iQlqdRnS4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD7UpQN44hk2hwngzyrcA4a%2FORTDtlC2jLyVbhs1mshmX5%2FDgGFBDgcligm%2BTPtj6H5tC1XhoTLFYjnYTrd8Q5097705QpO6UynrbdgwOrfrK%2Fsucs9BuZI%2BRFZrk%2FuXGTO9DJGqHBpuzfAJfGENxZAnMpb974G77EmLf%2Fu3FfCHcq%2BzaeFDMH1RFWxO6souWSKbETbfqqNo%2ByrpvH%2FLIEwHA7SZYPzz%2FS55itpgcnPwNScZOYiIJwDExZmrElmHXQTh%2BZataN0xyhcTakq4igPG7AewSWnARzguvZCDIlIvdiQpXI%2FVGdAXFTmJ%2F7EJ%2BKS8KmiLgV1BfJsH9VP8l53qIg5IZMziiW30iyuANgY%2BRIZ752yuKzJYhIfyDiMOuBx35SCFMzzJtZ7avWBtMtiikNe6N%2BbblXScrgmgDiBuZooc3gPuRJfcvjeixIig5jITrvK3eXlKukjIj7kmsJpAxQ6NsYUnI6P1YEnvk%2FvaP29HV1r113%2B5w0BQOD7QPJh4EF5p19uF%2BQbytRAR%2BRfneD9X5ajEbgefyxIRTSpXlBJQoh3g%2FV8hnU6UW7%2BImWqQlI2Umw%2Bx37d8G23mSeoy%2BVd17BfBalNfOWSDGRQddL6TnN5A9MjmQeO5M1KeStD%2Fl6K9%2FrwOOXW5MOaW2MEGOqUBSdeSunDOwiS69NGk%2Fv0TU0nUJghcqB%2FifyBF1werfuotoFhPZvfmPg3SPPcqyAJ7enJxdyCZqRlRAwFsE1G2Rq%2BbCQMtJa0Bfqx77UWEbc9HSbluRuqdWLsgApxTzUn0QWKO7xGrXx9H76VmFW9X6C9tfoUtkPX03rJOsxbyIPAWV06dLjptA8ARBDsqkUA3U01UZ%2FF6C4YZ0tukqNXkJDaPbQvL&X-Amz-Signature=019e97c3d4192c2aaeafcd32d69239bc60e937e474d643a9488771060e601f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WK7XBH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhdyvvdWPZl3CF%2F2JlWWNr5nVTK%2BLbqz7wcnDB4hXeAIgKSSviUaavWwfuTXh6Ztlojy6ik9jJ2f002iQlqdRnS4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD7UpQN44hk2hwngzyrcA4a%2FORTDtlC2jLyVbhs1mshmX5%2FDgGFBDgcligm%2BTPtj6H5tC1XhoTLFYjnYTrd8Q5097705QpO6UynrbdgwOrfrK%2Fsucs9BuZI%2BRFZrk%2FuXGTO9DJGqHBpuzfAJfGENxZAnMpb974G77EmLf%2Fu3FfCHcq%2BzaeFDMH1RFWxO6souWSKbETbfqqNo%2ByrpvH%2FLIEwHA7SZYPzz%2FS55itpgcnPwNScZOYiIJwDExZmrElmHXQTh%2BZataN0xyhcTakq4igPG7AewSWnARzguvZCDIlIvdiQpXI%2FVGdAXFTmJ%2F7EJ%2BKS8KmiLgV1BfJsH9VP8l53qIg5IZMziiW30iyuANgY%2BRIZ752yuKzJYhIfyDiMOuBx35SCFMzzJtZ7avWBtMtiikNe6N%2BbblXScrgmgDiBuZooc3gPuRJfcvjeixIig5jITrvK3eXlKukjIj7kmsJpAxQ6NsYUnI6P1YEnvk%2FvaP29HV1r113%2B5w0BQOD7QPJh4EF5p19uF%2BQbytRAR%2BRfneD9X5ajEbgefyxIRTSpXlBJQoh3g%2FV8hnU6UW7%2BImWqQlI2Umw%2Bx37d8G23mSeoy%2BVd17BfBalNfOWSDGRQddL6TnN5A9MjmQeO5M1KeStD%2Fl6K9%2FrwOOXW5MOaW2MEGOqUBSdeSunDOwiS69NGk%2Fv0TU0nUJghcqB%2FifyBF1werfuotoFhPZvfmPg3SPPcqyAJ7enJxdyCZqRlRAwFsE1G2Rq%2BbCQMtJa0Bfqx77UWEbc9HSbluRuqdWLsgApxTzUn0QWKO7xGrXx9H76VmFW9X6C9tfoUtkPX03rJOsxbyIPAWV06dLjptA8ARBDsqkUA3U01UZ%2FF6C4YZ0tukqNXkJDaPbQvL&X-Amz-Signature=bce966718d397d5b0948ef17a8b776eefaa05e9765e6afb0f6d88d5d014c4106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WK7XBH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhdyvvdWPZl3CF%2F2JlWWNr5nVTK%2BLbqz7wcnDB4hXeAIgKSSviUaavWwfuTXh6Ztlojy6ik9jJ2f002iQlqdRnS4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD7UpQN44hk2hwngzyrcA4a%2FORTDtlC2jLyVbhs1mshmX5%2FDgGFBDgcligm%2BTPtj6H5tC1XhoTLFYjnYTrd8Q5097705QpO6UynrbdgwOrfrK%2Fsucs9BuZI%2BRFZrk%2FuXGTO9DJGqHBpuzfAJfGENxZAnMpb974G77EmLf%2Fu3FfCHcq%2BzaeFDMH1RFWxO6souWSKbETbfqqNo%2ByrpvH%2FLIEwHA7SZYPzz%2FS55itpgcnPwNScZOYiIJwDExZmrElmHXQTh%2BZataN0xyhcTakq4igPG7AewSWnARzguvZCDIlIvdiQpXI%2FVGdAXFTmJ%2F7EJ%2BKS8KmiLgV1BfJsH9VP8l53qIg5IZMziiW30iyuANgY%2BRIZ752yuKzJYhIfyDiMOuBx35SCFMzzJtZ7avWBtMtiikNe6N%2BbblXScrgmgDiBuZooc3gPuRJfcvjeixIig5jITrvK3eXlKukjIj7kmsJpAxQ6NsYUnI6P1YEnvk%2FvaP29HV1r113%2B5w0BQOD7QPJh4EF5p19uF%2BQbytRAR%2BRfneD9X5ajEbgefyxIRTSpXlBJQoh3g%2FV8hnU6UW7%2BImWqQlI2Umw%2Bx37d8G23mSeoy%2BVd17BfBalNfOWSDGRQddL6TnN5A9MjmQeO5M1KeStD%2Fl6K9%2FrwOOXW5MOaW2MEGOqUBSdeSunDOwiS69NGk%2Fv0TU0nUJghcqB%2FifyBF1werfuotoFhPZvfmPg3SPPcqyAJ7enJxdyCZqRlRAwFsE1G2Rq%2BbCQMtJa0Bfqx77UWEbc9HSbluRuqdWLsgApxTzUn0QWKO7xGrXx9H76VmFW9X6C9tfoUtkPX03rJOsxbyIPAWV06dLjptA8ARBDsqkUA3U01UZ%2FF6C4YZ0tukqNXkJDaPbQvL&X-Amz-Signature=c6acf9ee85cacb60e65ff28b9a9655a45c1711bbe0e014133bf865bbbfe349a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
