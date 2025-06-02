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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLBUKUI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCmJzGv6qeMpP%2Ft2N4FJEmP%2FQM3zAt4VWnsL7KY5ceUmwIhANI2Ai3fX50vu8mV5E2IXefvUkIoQJXmfW6FbbYtBxTSKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwW75Wefd0CU3jR7kq3APuYmNgME52hXdWlz%2FpRNPcTAlYyNrFmIllj4rWKbboxIpCBsJisgQvIJZYr6WHi63UlTCWCIToepJfNwifzkvF7BgFESTj%2Fo5nrwkpx29yUBcPOnA2i22040Cc0io%2FZTxd4VrQusdU%2BF4QDE8uAF8UErO1uOD8jWFOBbicYGsd5Qz1Ls7AwDXtTpZZ8W%2FYPfZX09r%2ByfRMy%2FMgLsvw1TWXS5LbaxC%2BdfJfShiUPwWB5wBsy7usBPHGHxk6%2B08gFULpfaeduxnIr7YY%2Btv0SZKZgpBtCtZDtyYc2wBPXe%2Bb%2BkfRWy7LFCB6dgotjTv6aQFFE5GL%2FKPxxfNGHdXruk3NBs1OqD1vW26LES6PBO5O7UkGZX7Dtp7zoq8tdSbwHg1ROnq0JSUKQrsiKrB4o3cyw%2F2X7ee3i291tGYiLmwYcYLbdMOXnTbVM31ZTJMw7MGqQgKBVidZmznuUkrTHbFLCDw8QN0Db8DtamPpa%2BKym5Kx6YntnuYhIknJDLOpve0qxkY1JjvTZMK80HD5ZLzu6FRa%2FgCDOBet8pshCAqBxttb%2B53mJ6Zzh6za0jy2%2B81tqhIeUwLjKEWQQRtDRhTJ55vRrbfokOb0Y2cfhuRJrxMMSG0QMQnR4bY4njCMvPbBBjqkAcOxxlGCV6ltRcWHOJQmbqbDx6KlR7T6vPF6%2F3UFj3vzeI2sF5rkBDYO8lcm1jKM3eIx73%2BuB15nRUw78QXS5gc2D%2FhlSHg5cGyrBKbnHCTNHRpE7oU0%2FtMaUEaL%2Bm8E6rjebPQB7UEM%2FghZFrqkXRtJ%2FRrlvv7rsW3PW0%2FIMqEI4qmLa1t8YAJA1BIyWRjaznLh6SYprRKgllqFnJvFyaa8IHQg&X-Amz-Signature=a133690365d2ac2417d5870d668de7dc2300aaf070cc1e678f07073fa3f94cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLBUKUI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCmJzGv6qeMpP%2Ft2N4FJEmP%2FQM3zAt4VWnsL7KY5ceUmwIhANI2Ai3fX50vu8mV5E2IXefvUkIoQJXmfW6FbbYtBxTSKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwW75Wefd0CU3jR7kq3APuYmNgME52hXdWlz%2FpRNPcTAlYyNrFmIllj4rWKbboxIpCBsJisgQvIJZYr6WHi63UlTCWCIToepJfNwifzkvF7BgFESTj%2Fo5nrwkpx29yUBcPOnA2i22040Cc0io%2FZTxd4VrQusdU%2BF4QDE8uAF8UErO1uOD8jWFOBbicYGsd5Qz1Ls7AwDXtTpZZ8W%2FYPfZX09r%2ByfRMy%2FMgLsvw1TWXS5LbaxC%2BdfJfShiUPwWB5wBsy7usBPHGHxk6%2B08gFULpfaeduxnIr7YY%2Btv0SZKZgpBtCtZDtyYc2wBPXe%2Bb%2BkfRWy7LFCB6dgotjTv6aQFFE5GL%2FKPxxfNGHdXruk3NBs1OqD1vW26LES6PBO5O7UkGZX7Dtp7zoq8tdSbwHg1ROnq0JSUKQrsiKrB4o3cyw%2F2X7ee3i291tGYiLmwYcYLbdMOXnTbVM31ZTJMw7MGqQgKBVidZmznuUkrTHbFLCDw8QN0Db8DtamPpa%2BKym5Kx6YntnuYhIknJDLOpve0qxkY1JjvTZMK80HD5ZLzu6FRa%2FgCDOBet8pshCAqBxttb%2B53mJ6Zzh6za0jy2%2B81tqhIeUwLjKEWQQRtDRhTJ55vRrbfokOb0Y2cfhuRJrxMMSG0QMQnR4bY4njCMvPbBBjqkAcOxxlGCV6ltRcWHOJQmbqbDx6KlR7T6vPF6%2F3UFj3vzeI2sF5rkBDYO8lcm1jKM3eIx73%2BuB15nRUw78QXS5gc2D%2FhlSHg5cGyrBKbnHCTNHRpE7oU0%2FtMaUEaL%2Bm8E6rjebPQB7UEM%2FghZFrqkXRtJ%2FRrlvv7rsW3PW0%2FIMqEI4qmLa1t8YAJA1BIyWRjaznLh6SYprRKgllqFnJvFyaa8IHQg&X-Amz-Signature=b33a2394ef1df4dc7e2817a54ce655fa14f54daeb2e257b33f625ad456af5b15&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLBUKUI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCmJzGv6qeMpP%2Ft2N4FJEmP%2FQM3zAt4VWnsL7KY5ceUmwIhANI2Ai3fX50vu8mV5E2IXefvUkIoQJXmfW6FbbYtBxTSKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwW75Wefd0CU3jR7kq3APuYmNgME52hXdWlz%2FpRNPcTAlYyNrFmIllj4rWKbboxIpCBsJisgQvIJZYr6WHi63UlTCWCIToepJfNwifzkvF7BgFESTj%2Fo5nrwkpx29yUBcPOnA2i22040Cc0io%2FZTxd4VrQusdU%2BF4QDE8uAF8UErO1uOD8jWFOBbicYGsd5Qz1Ls7AwDXtTpZZ8W%2FYPfZX09r%2ByfRMy%2FMgLsvw1TWXS5LbaxC%2BdfJfShiUPwWB5wBsy7usBPHGHxk6%2B08gFULpfaeduxnIr7YY%2Btv0SZKZgpBtCtZDtyYc2wBPXe%2Bb%2BkfRWy7LFCB6dgotjTv6aQFFE5GL%2FKPxxfNGHdXruk3NBs1OqD1vW26LES6PBO5O7UkGZX7Dtp7zoq8tdSbwHg1ROnq0JSUKQrsiKrB4o3cyw%2F2X7ee3i291tGYiLmwYcYLbdMOXnTbVM31ZTJMw7MGqQgKBVidZmznuUkrTHbFLCDw8QN0Db8DtamPpa%2BKym5Kx6YntnuYhIknJDLOpve0qxkY1JjvTZMK80HD5ZLzu6FRa%2FgCDOBet8pshCAqBxttb%2B53mJ6Zzh6za0jy2%2B81tqhIeUwLjKEWQQRtDRhTJ55vRrbfokOb0Y2cfhuRJrxMMSG0QMQnR4bY4njCMvPbBBjqkAcOxxlGCV6ltRcWHOJQmbqbDx6KlR7T6vPF6%2F3UFj3vzeI2sF5rkBDYO8lcm1jKM3eIx73%2BuB15nRUw78QXS5gc2D%2FhlSHg5cGyrBKbnHCTNHRpE7oU0%2FtMaUEaL%2Bm8E6rjebPQB7UEM%2FghZFrqkXRtJ%2FRrlvv7rsW3PW0%2FIMqEI4qmLa1t8YAJA1BIyWRjaznLh6SYprRKgllqFnJvFyaa8IHQg&X-Amz-Signature=39afbd07de7a15fd87ca76fca6250d1be495235eb1f924fa6f46665887861a81&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLBUKUI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCmJzGv6qeMpP%2Ft2N4FJEmP%2FQM3zAt4VWnsL7KY5ceUmwIhANI2Ai3fX50vu8mV5E2IXefvUkIoQJXmfW6FbbYtBxTSKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwW75Wefd0CU3jR7kq3APuYmNgME52hXdWlz%2FpRNPcTAlYyNrFmIllj4rWKbboxIpCBsJisgQvIJZYr6WHi63UlTCWCIToepJfNwifzkvF7BgFESTj%2Fo5nrwkpx29yUBcPOnA2i22040Cc0io%2FZTxd4VrQusdU%2BF4QDE8uAF8UErO1uOD8jWFOBbicYGsd5Qz1Ls7AwDXtTpZZ8W%2FYPfZX09r%2ByfRMy%2FMgLsvw1TWXS5LbaxC%2BdfJfShiUPwWB5wBsy7usBPHGHxk6%2B08gFULpfaeduxnIr7YY%2Btv0SZKZgpBtCtZDtyYc2wBPXe%2Bb%2BkfRWy7LFCB6dgotjTv6aQFFE5GL%2FKPxxfNGHdXruk3NBs1OqD1vW26LES6PBO5O7UkGZX7Dtp7zoq8tdSbwHg1ROnq0JSUKQrsiKrB4o3cyw%2F2X7ee3i291tGYiLmwYcYLbdMOXnTbVM31ZTJMw7MGqQgKBVidZmznuUkrTHbFLCDw8QN0Db8DtamPpa%2BKym5Kx6YntnuYhIknJDLOpve0qxkY1JjvTZMK80HD5ZLzu6FRa%2FgCDOBet8pshCAqBxttb%2B53mJ6Zzh6za0jy2%2B81tqhIeUwLjKEWQQRtDRhTJ55vRrbfokOb0Y2cfhuRJrxMMSG0QMQnR4bY4njCMvPbBBjqkAcOxxlGCV6ltRcWHOJQmbqbDx6KlR7T6vPF6%2F3UFj3vzeI2sF5rkBDYO8lcm1jKM3eIx73%2BuB15nRUw78QXS5gc2D%2FhlSHg5cGyrBKbnHCTNHRpE7oU0%2FtMaUEaL%2Bm8E6rjebPQB7UEM%2FghZFrqkXRtJ%2FRrlvv7rsW3PW0%2FIMqEI4qmLa1t8YAJA1BIyWRjaznLh6SYprRKgllqFnJvFyaa8IHQg&X-Amz-Signature=2e9c3ec8c429535bfdaf6e2e1126d099bbff322b864ea707d4d5ac97a5721f55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLBUKUI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCmJzGv6qeMpP%2Ft2N4FJEmP%2FQM3zAt4VWnsL7KY5ceUmwIhANI2Ai3fX50vu8mV5E2IXefvUkIoQJXmfW6FbbYtBxTSKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwW75Wefd0CU3jR7kq3APuYmNgME52hXdWlz%2FpRNPcTAlYyNrFmIllj4rWKbboxIpCBsJisgQvIJZYr6WHi63UlTCWCIToepJfNwifzkvF7BgFESTj%2Fo5nrwkpx29yUBcPOnA2i22040Cc0io%2FZTxd4VrQusdU%2BF4QDE8uAF8UErO1uOD8jWFOBbicYGsd5Qz1Ls7AwDXtTpZZ8W%2FYPfZX09r%2ByfRMy%2FMgLsvw1TWXS5LbaxC%2BdfJfShiUPwWB5wBsy7usBPHGHxk6%2B08gFULpfaeduxnIr7YY%2Btv0SZKZgpBtCtZDtyYc2wBPXe%2Bb%2BkfRWy7LFCB6dgotjTv6aQFFE5GL%2FKPxxfNGHdXruk3NBs1OqD1vW26LES6PBO5O7UkGZX7Dtp7zoq8tdSbwHg1ROnq0JSUKQrsiKrB4o3cyw%2F2X7ee3i291tGYiLmwYcYLbdMOXnTbVM31ZTJMw7MGqQgKBVidZmznuUkrTHbFLCDw8QN0Db8DtamPpa%2BKym5Kx6YntnuYhIknJDLOpve0qxkY1JjvTZMK80HD5ZLzu6FRa%2FgCDOBet8pshCAqBxttb%2B53mJ6Zzh6za0jy2%2B81tqhIeUwLjKEWQQRtDRhTJ55vRrbfokOb0Y2cfhuRJrxMMSG0QMQnR4bY4njCMvPbBBjqkAcOxxlGCV6ltRcWHOJQmbqbDx6KlR7T6vPF6%2F3UFj3vzeI2sF5rkBDYO8lcm1jKM3eIx73%2BuB15nRUw78QXS5gc2D%2FhlSHg5cGyrBKbnHCTNHRpE7oU0%2FtMaUEaL%2Bm8E6rjebPQB7UEM%2FghZFrqkXRtJ%2FRrlvv7rsW3PW0%2FIMqEI4qmLa1t8YAJA1BIyWRjaznLh6SYprRKgllqFnJvFyaa8IHQg&X-Amz-Signature=854864700d92e44b1c451d8339f10b8cb2e5554110c363f8a3fd86a3109b06bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
