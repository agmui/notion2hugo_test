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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POSW753%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD%2FsaihdT4rPpjMbbPLcsr2brK1PVrdEgcJkW9nQ1FuAAIhANQUhTc5yazusqdPCpOrljJGYQPwdVk962ogju%2F8VBjqKv8DCG4QABoMNjM3NDIzMTgzODA1IgzvXyHXPorIuRA9BkUq3ANkfhw5F6IosWTd2QPVHkzCqQmXvckMDFYByBNNcioBnRbY84YCEDW%2BdV0XyCUH80nNm0EdTiMr%2FCchiHLX1B2x9WXo1YDWa9HYNDFkrYbJTaS0SDSkcvJ28p7U%2BbHyIdeZDH3FUFi%2B1mKnvAhtpcW75CRsQQJ1gSl2P%2BjKjK3a26MSYbQJ4oNWSAyXl9d8tTUBUNAM0nB4GZBUi73R9qh39IoyvksrmXj3L4mdQ8o7LoybAfBD7llzQ3iWv%2Fsil%2B7Hzwe3fApFcawq2EPf3GyX0qAyu%2F5aUOu3xjribo4VWeEgiuuiszcqCGbi4IjxukG%2BfDPzR2oRvn05idQSrX5UHuRfHYD2Vpg1z%2BGxKghIALIs5Qnp9i3YFcnqJSCR9%2BpdiIV49qpuA8DZwzf%2BNbtgtXMdBTbpDMiytw0EDfNFBTwpM2ArW%2BbdJVodyjmEsj%2B1a4%2FaaocoYsRIaeGmOjPAFv9zW%2Bqm%2BcKW33%2BgqjlHE31%2FVVgmsm5PfWxHrMPJ1Itb0MzJx9kOAu2DwDRJBZ%2B65H%2BPwAhbO7DHDG2SP%2FIjRHnm0gK3Tf5YKZPx7DKz657AqSmV%2B31U7hokkfKd48vdV8FdXILipwddAugmuoLXlcd4bKZAhpf2JRrOJzDAopa9BjqkAba5%2BFEDOGJnz6fialZAWc5%2FszDSyYMya%2F4qm8b70LcQkavWSRlxSzzr1wP9I4aRPG5d6OEnv8RbaGBSG64CFNjPCILhgL%2Bo%2FJrufMJDjWLcD%2FVl9qYvGltx7Uu4xgpfbB1z2oPJRBZb2VX7Wai9I3SA5iJBF7tilNXc0%2BWPFnY4r%2F1dFUkUuz638cVNHYVSiP9ZVvpWtigvt1zHObmGlPls6sBe&X-Amz-Signature=31c2fecf1424084cf0100618c15da5cc733f23e7097407e67754c8238c43b465&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POSW753%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD%2FsaihdT4rPpjMbbPLcsr2brK1PVrdEgcJkW9nQ1FuAAIhANQUhTc5yazusqdPCpOrljJGYQPwdVk962ogju%2F8VBjqKv8DCG4QABoMNjM3NDIzMTgzODA1IgzvXyHXPorIuRA9BkUq3ANkfhw5F6IosWTd2QPVHkzCqQmXvckMDFYByBNNcioBnRbY84YCEDW%2BdV0XyCUH80nNm0EdTiMr%2FCchiHLX1B2x9WXo1YDWa9HYNDFkrYbJTaS0SDSkcvJ28p7U%2BbHyIdeZDH3FUFi%2B1mKnvAhtpcW75CRsQQJ1gSl2P%2BjKjK3a26MSYbQJ4oNWSAyXl9d8tTUBUNAM0nB4GZBUi73R9qh39IoyvksrmXj3L4mdQ8o7LoybAfBD7llzQ3iWv%2Fsil%2B7Hzwe3fApFcawq2EPf3GyX0qAyu%2F5aUOu3xjribo4VWeEgiuuiszcqCGbi4IjxukG%2BfDPzR2oRvn05idQSrX5UHuRfHYD2Vpg1z%2BGxKghIALIs5Qnp9i3YFcnqJSCR9%2BpdiIV49qpuA8DZwzf%2BNbtgtXMdBTbpDMiytw0EDfNFBTwpM2ArW%2BbdJVodyjmEsj%2B1a4%2FaaocoYsRIaeGmOjPAFv9zW%2Bqm%2BcKW33%2BgqjlHE31%2FVVgmsm5PfWxHrMPJ1Itb0MzJx9kOAu2DwDRJBZ%2B65H%2BPwAhbO7DHDG2SP%2FIjRHnm0gK3Tf5YKZPx7DKz657AqSmV%2B31U7hokkfKd48vdV8FdXILipwddAugmuoLXlcd4bKZAhpf2JRrOJzDAopa9BjqkAba5%2BFEDOGJnz6fialZAWc5%2FszDSyYMya%2F4qm8b70LcQkavWSRlxSzzr1wP9I4aRPG5d6OEnv8RbaGBSG64CFNjPCILhgL%2Bo%2FJrufMJDjWLcD%2FVl9qYvGltx7Uu4xgpfbB1z2oPJRBZb2VX7Wai9I3SA5iJBF7tilNXc0%2BWPFnY4r%2F1dFUkUuz638cVNHYVSiP9ZVvpWtigvt1zHObmGlPls6sBe&X-Amz-Signature=439262c3367bab8dd40df5d209ab06b14915fdfcdcc90614642f73fad52f01a4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POSW753%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD%2FsaihdT4rPpjMbbPLcsr2brK1PVrdEgcJkW9nQ1FuAAIhANQUhTc5yazusqdPCpOrljJGYQPwdVk962ogju%2F8VBjqKv8DCG4QABoMNjM3NDIzMTgzODA1IgzvXyHXPorIuRA9BkUq3ANkfhw5F6IosWTd2QPVHkzCqQmXvckMDFYByBNNcioBnRbY84YCEDW%2BdV0XyCUH80nNm0EdTiMr%2FCchiHLX1B2x9WXo1YDWa9HYNDFkrYbJTaS0SDSkcvJ28p7U%2BbHyIdeZDH3FUFi%2B1mKnvAhtpcW75CRsQQJ1gSl2P%2BjKjK3a26MSYbQJ4oNWSAyXl9d8tTUBUNAM0nB4GZBUi73R9qh39IoyvksrmXj3L4mdQ8o7LoybAfBD7llzQ3iWv%2Fsil%2B7Hzwe3fApFcawq2EPf3GyX0qAyu%2F5aUOu3xjribo4VWeEgiuuiszcqCGbi4IjxukG%2BfDPzR2oRvn05idQSrX5UHuRfHYD2Vpg1z%2BGxKghIALIs5Qnp9i3YFcnqJSCR9%2BpdiIV49qpuA8DZwzf%2BNbtgtXMdBTbpDMiytw0EDfNFBTwpM2ArW%2BbdJVodyjmEsj%2B1a4%2FaaocoYsRIaeGmOjPAFv9zW%2Bqm%2BcKW33%2BgqjlHE31%2FVVgmsm5PfWxHrMPJ1Itb0MzJx9kOAu2DwDRJBZ%2B65H%2BPwAhbO7DHDG2SP%2FIjRHnm0gK3Tf5YKZPx7DKz657AqSmV%2B31U7hokkfKd48vdV8FdXILipwddAugmuoLXlcd4bKZAhpf2JRrOJzDAopa9BjqkAba5%2BFEDOGJnz6fialZAWc5%2FszDSyYMya%2F4qm8b70LcQkavWSRlxSzzr1wP9I4aRPG5d6OEnv8RbaGBSG64CFNjPCILhgL%2Bo%2FJrufMJDjWLcD%2FVl9qYvGltx7Uu4xgpfbB1z2oPJRBZb2VX7Wai9I3SA5iJBF7tilNXc0%2BWPFnY4r%2F1dFUkUuz638cVNHYVSiP9ZVvpWtigvt1zHObmGlPls6sBe&X-Amz-Signature=2dd597b4a36e97e0e0844cf7c68bbf7cf1e1131fb479bfd188b60e93e41937e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POSW753%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD%2FsaihdT4rPpjMbbPLcsr2brK1PVrdEgcJkW9nQ1FuAAIhANQUhTc5yazusqdPCpOrljJGYQPwdVk962ogju%2F8VBjqKv8DCG4QABoMNjM3NDIzMTgzODA1IgzvXyHXPorIuRA9BkUq3ANkfhw5F6IosWTd2QPVHkzCqQmXvckMDFYByBNNcioBnRbY84YCEDW%2BdV0XyCUH80nNm0EdTiMr%2FCchiHLX1B2x9WXo1YDWa9HYNDFkrYbJTaS0SDSkcvJ28p7U%2BbHyIdeZDH3FUFi%2B1mKnvAhtpcW75CRsQQJ1gSl2P%2BjKjK3a26MSYbQJ4oNWSAyXl9d8tTUBUNAM0nB4GZBUi73R9qh39IoyvksrmXj3L4mdQ8o7LoybAfBD7llzQ3iWv%2Fsil%2B7Hzwe3fApFcawq2EPf3GyX0qAyu%2F5aUOu3xjribo4VWeEgiuuiszcqCGbi4IjxukG%2BfDPzR2oRvn05idQSrX5UHuRfHYD2Vpg1z%2BGxKghIALIs5Qnp9i3YFcnqJSCR9%2BpdiIV49qpuA8DZwzf%2BNbtgtXMdBTbpDMiytw0EDfNFBTwpM2ArW%2BbdJVodyjmEsj%2B1a4%2FaaocoYsRIaeGmOjPAFv9zW%2Bqm%2BcKW33%2BgqjlHE31%2FVVgmsm5PfWxHrMPJ1Itb0MzJx9kOAu2DwDRJBZ%2B65H%2BPwAhbO7DHDG2SP%2FIjRHnm0gK3Tf5YKZPx7DKz657AqSmV%2B31U7hokkfKd48vdV8FdXILipwddAugmuoLXlcd4bKZAhpf2JRrOJzDAopa9BjqkAba5%2BFEDOGJnz6fialZAWc5%2FszDSyYMya%2F4qm8b70LcQkavWSRlxSzzr1wP9I4aRPG5d6OEnv8RbaGBSG64CFNjPCILhgL%2Bo%2FJrufMJDjWLcD%2FVl9qYvGltx7Uu4xgpfbB1z2oPJRBZb2VX7Wai9I3SA5iJBF7tilNXc0%2BWPFnY4r%2F1dFUkUuz638cVNHYVSiP9ZVvpWtigvt1zHObmGlPls6sBe&X-Amz-Signature=4ae750dcf1102cc44aca7fde3b472682fc619112382b829206799f0a2d9e16f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POSW753%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD%2FsaihdT4rPpjMbbPLcsr2brK1PVrdEgcJkW9nQ1FuAAIhANQUhTc5yazusqdPCpOrljJGYQPwdVk962ogju%2F8VBjqKv8DCG4QABoMNjM3NDIzMTgzODA1IgzvXyHXPorIuRA9BkUq3ANkfhw5F6IosWTd2QPVHkzCqQmXvckMDFYByBNNcioBnRbY84YCEDW%2BdV0XyCUH80nNm0EdTiMr%2FCchiHLX1B2x9WXo1YDWa9HYNDFkrYbJTaS0SDSkcvJ28p7U%2BbHyIdeZDH3FUFi%2B1mKnvAhtpcW75CRsQQJ1gSl2P%2BjKjK3a26MSYbQJ4oNWSAyXl9d8tTUBUNAM0nB4GZBUi73R9qh39IoyvksrmXj3L4mdQ8o7LoybAfBD7llzQ3iWv%2Fsil%2B7Hzwe3fApFcawq2EPf3GyX0qAyu%2F5aUOu3xjribo4VWeEgiuuiszcqCGbi4IjxukG%2BfDPzR2oRvn05idQSrX5UHuRfHYD2Vpg1z%2BGxKghIALIs5Qnp9i3YFcnqJSCR9%2BpdiIV49qpuA8DZwzf%2BNbtgtXMdBTbpDMiytw0EDfNFBTwpM2ArW%2BbdJVodyjmEsj%2B1a4%2FaaocoYsRIaeGmOjPAFv9zW%2Bqm%2BcKW33%2BgqjlHE31%2FVVgmsm5PfWxHrMPJ1Itb0MzJx9kOAu2DwDRJBZ%2B65H%2BPwAhbO7DHDG2SP%2FIjRHnm0gK3Tf5YKZPx7DKz657AqSmV%2B31U7hokkfKd48vdV8FdXILipwddAugmuoLXlcd4bKZAhpf2JRrOJzDAopa9BjqkAba5%2BFEDOGJnz6fialZAWc5%2FszDSyYMya%2F4qm8b70LcQkavWSRlxSzzr1wP9I4aRPG5d6OEnv8RbaGBSG64CFNjPCILhgL%2Bo%2FJrufMJDjWLcD%2FVl9qYvGltx7Uu4xgpfbB1z2oPJRBZb2VX7Wai9I3SA5iJBF7tilNXc0%2BWPFnY4r%2F1dFUkUuz638cVNHYVSiP9ZVvpWtigvt1zHObmGlPls6sBe&X-Amz-Signature=d70fb88a614463310494a3c48f2a5c8497c3c182b6e3113b4bdc2c9f21bc2ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
