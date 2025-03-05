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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAO4NQS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH%2FI9a39fEB3Z0B%2BXSisDCRWfgWfGdHbTCJkQdu%2BeC2AIhAO8gcqw6UQ6oDKKwDEYZWpLTzwVz7x3FgIcuH%2BKAb9eNKv8DCB8QABoMNjM3NDIzMTgzODA1IgxvDfQ6WO7PlrX%2BEywq3APrTBtI5ez2f9AuQV%2Bp8ONkw9bakteRHEJtodwo7xNcOErZhatuip%2Boudtqr%2FPvABaEAG1FrlPykiQHqFJgT5Oo5Ae2eWD63tkmpUwQBsXSnFIKWFZ%2Fts20KiZliAkzOVWW7B2W8QQhBXMuhdkD2uDVUzkLz9ua8T0LZri0VoNYsFGrSWejhpib46aiq1B%2FiMRkBZnXN8MRMeZ2yZqVolwtRCqn%2FxFYeqkZ2FcQ6jWeJ9527P7L5zUpXpAd3TVteX%2FL%2BMgfwB7t25eTAGGZNjm%2FKi%2F4%2F8%2BFjlNk5o5zgjck%2FdsL4HpnRAKTVTu0MYYuw7pqY8ueYJC9A2oqXLKzmdBiAXpIp8DQiP7gHjCmp2BjMoP%2FkDp7j6q1Vcdpzk29Z33TnR7PQajs1i3EqA%2FGPF8qcTC2DIm7%2F9bJ1MGFGtHZgUqGjGxi0w42mi2HvvroEP0W6muH6Vm2XxWcE4CTU4CNSB%2FpPn9%2FbICj80J3RBqy6JiBCS9iqpL0ajNHPCiD0aNU1Arxvj1g2Wov7Ic0iVbAsDOBC8qKemrWvIxmTAdgwAZUl1kXEs%2FvWSJZxzscyZb2ciWlfRghCEBfTqlFHkXaTt7SnBSGcfVAr1gfbs3Qc%2BVVeuFfuMpyEJQpbDDSgaO%2BBjqkAR%2FxjAYHiF86ELarZieAYpQu5qXjdDDyIHNEfYfuXa8EH7r%2FXb3CQLAX%2Fi5IPGIrSJzj5JoOfe%2F%2BZ5n%2B2PS1I0AGdGCruU2ae9t5qC%2Bo6YYAHBC2zCrAzC7hHUNcd18zp%2F5UFsW1L5ioGU3lcjvJaK%2B%2BNCvz9yFJ9dC4T%2FIXPW1Ntz4sNlYYEfSuZRtdaTyxy%2BPBNrEEGq5lNKH8cGwoZDVRiQdt&X-Amz-Signature=44f937d0b83e3ac83c53236cd212ca13dd81593f12525bcc13ef83918136b1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAO4NQS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH%2FI9a39fEB3Z0B%2BXSisDCRWfgWfGdHbTCJkQdu%2BeC2AIhAO8gcqw6UQ6oDKKwDEYZWpLTzwVz7x3FgIcuH%2BKAb9eNKv8DCB8QABoMNjM3NDIzMTgzODA1IgxvDfQ6WO7PlrX%2BEywq3APrTBtI5ez2f9AuQV%2Bp8ONkw9bakteRHEJtodwo7xNcOErZhatuip%2Boudtqr%2FPvABaEAG1FrlPykiQHqFJgT5Oo5Ae2eWD63tkmpUwQBsXSnFIKWFZ%2Fts20KiZliAkzOVWW7B2W8QQhBXMuhdkD2uDVUzkLz9ua8T0LZri0VoNYsFGrSWejhpib46aiq1B%2FiMRkBZnXN8MRMeZ2yZqVolwtRCqn%2FxFYeqkZ2FcQ6jWeJ9527P7L5zUpXpAd3TVteX%2FL%2BMgfwB7t25eTAGGZNjm%2FKi%2F4%2F8%2BFjlNk5o5zgjck%2FdsL4HpnRAKTVTu0MYYuw7pqY8ueYJC9A2oqXLKzmdBiAXpIp8DQiP7gHjCmp2BjMoP%2FkDp7j6q1Vcdpzk29Z33TnR7PQajs1i3EqA%2FGPF8qcTC2DIm7%2F9bJ1MGFGtHZgUqGjGxi0w42mi2HvvroEP0W6muH6Vm2XxWcE4CTU4CNSB%2FpPn9%2FbICj80J3RBqy6JiBCS9iqpL0ajNHPCiD0aNU1Arxvj1g2Wov7Ic0iVbAsDOBC8qKemrWvIxmTAdgwAZUl1kXEs%2FvWSJZxzscyZb2ciWlfRghCEBfTqlFHkXaTt7SnBSGcfVAr1gfbs3Qc%2BVVeuFfuMpyEJQpbDDSgaO%2BBjqkAR%2FxjAYHiF86ELarZieAYpQu5qXjdDDyIHNEfYfuXa8EH7r%2FXb3CQLAX%2Fi5IPGIrSJzj5JoOfe%2F%2BZ5n%2B2PS1I0AGdGCruU2ae9t5qC%2Bo6YYAHBC2zCrAzC7hHUNcd18zp%2F5UFsW1L5ioGU3lcjvJaK%2B%2BNCvz9yFJ9dC4T%2FIXPW1Ntz4sNlYYEfSuZRtdaTyxy%2BPBNrEEGq5lNKH8cGwoZDVRiQdt&X-Amz-Signature=6d96a6e6ddbeb701e1c97b4cf6647a52b051500d7646232f70b972edf74f5155&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAO4NQS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH%2FI9a39fEB3Z0B%2BXSisDCRWfgWfGdHbTCJkQdu%2BeC2AIhAO8gcqw6UQ6oDKKwDEYZWpLTzwVz7x3FgIcuH%2BKAb9eNKv8DCB8QABoMNjM3NDIzMTgzODA1IgxvDfQ6WO7PlrX%2BEywq3APrTBtI5ez2f9AuQV%2Bp8ONkw9bakteRHEJtodwo7xNcOErZhatuip%2Boudtqr%2FPvABaEAG1FrlPykiQHqFJgT5Oo5Ae2eWD63tkmpUwQBsXSnFIKWFZ%2Fts20KiZliAkzOVWW7B2W8QQhBXMuhdkD2uDVUzkLz9ua8T0LZri0VoNYsFGrSWejhpib46aiq1B%2FiMRkBZnXN8MRMeZ2yZqVolwtRCqn%2FxFYeqkZ2FcQ6jWeJ9527P7L5zUpXpAd3TVteX%2FL%2BMgfwB7t25eTAGGZNjm%2FKi%2F4%2F8%2BFjlNk5o5zgjck%2FdsL4HpnRAKTVTu0MYYuw7pqY8ueYJC9A2oqXLKzmdBiAXpIp8DQiP7gHjCmp2BjMoP%2FkDp7j6q1Vcdpzk29Z33TnR7PQajs1i3EqA%2FGPF8qcTC2DIm7%2F9bJ1MGFGtHZgUqGjGxi0w42mi2HvvroEP0W6muH6Vm2XxWcE4CTU4CNSB%2FpPn9%2FbICj80J3RBqy6JiBCS9iqpL0ajNHPCiD0aNU1Arxvj1g2Wov7Ic0iVbAsDOBC8qKemrWvIxmTAdgwAZUl1kXEs%2FvWSJZxzscyZb2ciWlfRghCEBfTqlFHkXaTt7SnBSGcfVAr1gfbs3Qc%2BVVeuFfuMpyEJQpbDDSgaO%2BBjqkAR%2FxjAYHiF86ELarZieAYpQu5qXjdDDyIHNEfYfuXa8EH7r%2FXb3CQLAX%2Fi5IPGIrSJzj5JoOfe%2F%2BZ5n%2B2PS1I0AGdGCruU2ae9t5qC%2Bo6YYAHBC2zCrAzC7hHUNcd18zp%2F5UFsW1L5ioGU3lcjvJaK%2B%2BNCvz9yFJ9dC4T%2FIXPW1Ntz4sNlYYEfSuZRtdaTyxy%2BPBNrEEGq5lNKH8cGwoZDVRiQdt&X-Amz-Signature=c77610cdd8bafb31adb1f1c743176818bb72127d49514fe5d15d9e16ce652efc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAO4NQS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH%2FI9a39fEB3Z0B%2BXSisDCRWfgWfGdHbTCJkQdu%2BeC2AIhAO8gcqw6UQ6oDKKwDEYZWpLTzwVz7x3FgIcuH%2BKAb9eNKv8DCB8QABoMNjM3NDIzMTgzODA1IgxvDfQ6WO7PlrX%2BEywq3APrTBtI5ez2f9AuQV%2Bp8ONkw9bakteRHEJtodwo7xNcOErZhatuip%2Boudtqr%2FPvABaEAG1FrlPykiQHqFJgT5Oo5Ae2eWD63tkmpUwQBsXSnFIKWFZ%2Fts20KiZliAkzOVWW7B2W8QQhBXMuhdkD2uDVUzkLz9ua8T0LZri0VoNYsFGrSWejhpib46aiq1B%2FiMRkBZnXN8MRMeZ2yZqVolwtRCqn%2FxFYeqkZ2FcQ6jWeJ9527P7L5zUpXpAd3TVteX%2FL%2BMgfwB7t25eTAGGZNjm%2FKi%2F4%2F8%2BFjlNk5o5zgjck%2FdsL4HpnRAKTVTu0MYYuw7pqY8ueYJC9A2oqXLKzmdBiAXpIp8DQiP7gHjCmp2BjMoP%2FkDp7j6q1Vcdpzk29Z33TnR7PQajs1i3EqA%2FGPF8qcTC2DIm7%2F9bJ1MGFGtHZgUqGjGxi0w42mi2HvvroEP0W6muH6Vm2XxWcE4CTU4CNSB%2FpPn9%2FbICj80J3RBqy6JiBCS9iqpL0ajNHPCiD0aNU1Arxvj1g2Wov7Ic0iVbAsDOBC8qKemrWvIxmTAdgwAZUl1kXEs%2FvWSJZxzscyZb2ciWlfRghCEBfTqlFHkXaTt7SnBSGcfVAr1gfbs3Qc%2BVVeuFfuMpyEJQpbDDSgaO%2BBjqkAR%2FxjAYHiF86ELarZieAYpQu5qXjdDDyIHNEfYfuXa8EH7r%2FXb3CQLAX%2Fi5IPGIrSJzj5JoOfe%2F%2BZ5n%2B2PS1I0AGdGCruU2ae9t5qC%2Bo6YYAHBC2zCrAzC7hHUNcd18zp%2F5UFsW1L5ioGU3lcjvJaK%2B%2BNCvz9yFJ9dC4T%2FIXPW1Ntz4sNlYYEfSuZRtdaTyxy%2BPBNrEEGq5lNKH8cGwoZDVRiQdt&X-Amz-Signature=ec6caf99ac24a27247020b69615588da2229d8643f9dd63fc208055f60ed882f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAO4NQS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH%2FI9a39fEB3Z0B%2BXSisDCRWfgWfGdHbTCJkQdu%2BeC2AIhAO8gcqw6UQ6oDKKwDEYZWpLTzwVz7x3FgIcuH%2BKAb9eNKv8DCB8QABoMNjM3NDIzMTgzODA1IgxvDfQ6WO7PlrX%2BEywq3APrTBtI5ez2f9AuQV%2Bp8ONkw9bakteRHEJtodwo7xNcOErZhatuip%2Boudtqr%2FPvABaEAG1FrlPykiQHqFJgT5Oo5Ae2eWD63tkmpUwQBsXSnFIKWFZ%2Fts20KiZliAkzOVWW7B2W8QQhBXMuhdkD2uDVUzkLz9ua8T0LZri0VoNYsFGrSWejhpib46aiq1B%2FiMRkBZnXN8MRMeZ2yZqVolwtRCqn%2FxFYeqkZ2FcQ6jWeJ9527P7L5zUpXpAd3TVteX%2FL%2BMgfwB7t25eTAGGZNjm%2FKi%2F4%2F8%2BFjlNk5o5zgjck%2FdsL4HpnRAKTVTu0MYYuw7pqY8ueYJC9A2oqXLKzmdBiAXpIp8DQiP7gHjCmp2BjMoP%2FkDp7j6q1Vcdpzk29Z33TnR7PQajs1i3EqA%2FGPF8qcTC2DIm7%2F9bJ1MGFGtHZgUqGjGxi0w42mi2HvvroEP0W6muH6Vm2XxWcE4CTU4CNSB%2FpPn9%2FbICj80J3RBqy6JiBCS9iqpL0ajNHPCiD0aNU1Arxvj1g2Wov7Ic0iVbAsDOBC8qKemrWvIxmTAdgwAZUl1kXEs%2FvWSJZxzscyZb2ciWlfRghCEBfTqlFHkXaTt7SnBSGcfVAr1gfbs3Qc%2BVVeuFfuMpyEJQpbDDSgaO%2BBjqkAR%2FxjAYHiF86ELarZieAYpQu5qXjdDDyIHNEfYfuXa8EH7r%2FXb3CQLAX%2Fi5IPGIrSJzj5JoOfe%2F%2BZ5n%2B2PS1I0AGdGCruU2ae9t5qC%2Bo6YYAHBC2zCrAzC7hHUNcd18zp%2F5UFsW1L5ioGU3lcjvJaK%2B%2BNCvz9yFJ9dC4T%2FIXPW1Ntz4sNlYYEfSuZRtdaTyxy%2BPBNrEEGq5lNKH8cGwoZDVRiQdt&X-Amz-Signature=6707a42f3ae6593ebd50bec89ebfb326c6306447874844a0985e5428fabb7c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
