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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266WNWZW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnzIkj9duZfzPeXPX1vgaw8aR6Rgz6fsiHRDJza18iHwIgZYqCY61Blr4g5pHXa4UTlOYQO42Bbm4o54I2BLUsOAAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKra1Jir%2FPCmSEQAeCrcA9aKwHoVpwQJ4Pjx203gik0dHekHub4Pmi2xpQdSXMnNLecWc5NkIXe4ReHzpTmi7eJU7Z7qE%2B8ZvQUQYdyLDTopdOAC%2FCMCTtCoNeQmliNbH2ISaz5FxGd4a9UxWxbYEv7VPhl4RxPjQuGbPdpenuXPmulZVfeGR705Q9nTSJa2EOVrrIvqx6PD3Zv5R%2Fy7SrdQdHcQylWe2KBJvL5WrTarZc%2BJmT0HAkNlYBlzbsAbFFBRL%2BGs%2FIdKfZJoNXhKtnutJib2O%2BoUUFvher%2Be5RwKIR9qXYncYWKAKDoDLIu%2FCkCQZP9CQ8R4TQ0PjrdvLYQ04nhwJPX1DCeL33cXyzQzUd2POV%2FC8t%2F1gnTCAX263304xLjJpLQR%2BDsjwE0hr1uYaDXQwKZHIeBaZqwplwoCXPGlgRqIx1KxL35lDT9xQTMe0O8B%2BLo3%2BibD6LdBWXH3y7tSRKntrle1Hm97mOoHmV4Rpxe1ABU0M%2FD%2F%2BLmiIsJ17ETFPC99MSFP5xnhL7%2F2H%2F1ZBtz0q0QlxKMUdE9KNaVfD%2FKOHASgkrFh0dkjsLTgXCKieG0Do8GsvltJ64dXSlRsDE6ntmDt%2F%2Br5x6Y0peMYHpX2ArsiTkJRDMc6e%2BqrS28g%2FI1PBVO3MMnK3L0GOqUB6ryUK4sxbKsS0kyWTRp4oAevvbKqt64OpcQizrKFyIz0tSwR3qCY98YYj9tAaJEqTfPkdy%2FMixB1InKND9vloBrMqbA01N2lCP69THKpFAIZ1%2Bm1OkRyBVeWEHq21RmAs47bQnkL3Q4867jOlwT0CDFjeNKGZYS%2FHVPjZpfFLNcqRoiwl5Ztw6F%2BPmV%2B%2FQtQ5IWN%2BHPSyV%2Fd%2BGQrSsaCzcXNNt7U&X-Amz-Signature=ff8e964305985eb46efcc496b9ca8f33d8e585bb08a2cf1956593df45fb025b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266WNWZW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnzIkj9duZfzPeXPX1vgaw8aR6Rgz6fsiHRDJza18iHwIgZYqCY61Blr4g5pHXa4UTlOYQO42Bbm4o54I2BLUsOAAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKra1Jir%2FPCmSEQAeCrcA9aKwHoVpwQJ4Pjx203gik0dHekHub4Pmi2xpQdSXMnNLecWc5NkIXe4ReHzpTmi7eJU7Z7qE%2B8ZvQUQYdyLDTopdOAC%2FCMCTtCoNeQmliNbH2ISaz5FxGd4a9UxWxbYEv7VPhl4RxPjQuGbPdpenuXPmulZVfeGR705Q9nTSJa2EOVrrIvqx6PD3Zv5R%2Fy7SrdQdHcQylWe2KBJvL5WrTarZc%2BJmT0HAkNlYBlzbsAbFFBRL%2BGs%2FIdKfZJoNXhKtnutJib2O%2BoUUFvher%2Be5RwKIR9qXYncYWKAKDoDLIu%2FCkCQZP9CQ8R4TQ0PjrdvLYQ04nhwJPX1DCeL33cXyzQzUd2POV%2FC8t%2F1gnTCAX263304xLjJpLQR%2BDsjwE0hr1uYaDXQwKZHIeBaZqwplwoCXPGlgRqIx1KxL35lDT9xQTMe0O8B%2BLo3%2BibD6LdBWXH3y7tSRKntrle1Hm97mOoHmV4Rpxe1ABU0M%2FD%2F%2BLmiIsJ17ETFPC99MSFP5xnhL7%2F2H%2F1ZBtz0q0QlxKMUdE9KNaVfD%2FKOHASgkrFh0dkjsLTgXCKieG0Do8GsvltJ64dXSlRsDE6ntmDt%2F%2Br5x6Y0peMYHpX2ArsiTkJRDMc6e%2BqrS28g%2FI1PBVO3MMnK3L0GOqUB6ryUK4sxbKsS0kyWTRp4oAevvbKqt64OpcQizrKFyIz0tSwR3qCY98YYj9tAaJEqTfPkdy%2FMixB1InKND9vloBrMqbA01N2lCP69THKpFAIZ1%2Bm1OkRyBVeWEHq21RmAs47bQnkL3Q4867jOlwT0CDFjeNKGZYS%2FHVPjZpfFLNcqRoiwl5Ztw6F%2BPmV%2B%2FQtQ5IWN%2BHPSyV%2Fd%2BGQrSsaCzcXNNt7U&X-Amz-Signature=cfaa75194a39405801ec973cab14fff614f8d66b14d449fc6f0c11543a2f288c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266WNWZW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnzIkj9duZfzPeXPX1vgaw8aR6Rgz6fsiHRDJza18iHwIgZYqCY61Blr4g5pHXa4UTlOYQO42Bbm4o54I2BLUsOAAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKra1Jir%2FPCmSEQAeCrcA9aKwHoVpwQJ4Pjx203gik0dHekHub4Pmi2xpQdSXMnNLecWc5NkIXe4ReHzpTmi7eJU7Z7qE%2B8ZvQUQYdyLDTopdOAC%2FCMCTtCoNeQmliNbH2ISaz5FxGd4a9UxWxbYEv7VPhl4RxPjQuGbPdpenuXPmulZVfeGR705Q9nTSJa2EOVrrIvqx6PD3Zv5R%2Fy7SrdQdHcQylWe2KBJvL5WrTarZc%2BJmT0HAkNlYBlzbsAbFFBRL%2BGs%2FIdKfZJoNXhKtnutJib2O%2BoUUFvher%2Be5RwKIR9qXYncYWKAKDoDLIu%2FCkCQZP9CQ8R4TQ0PjrdvLYQ04nhwJPX1DCeL33cXyzQzUd2POV%2FC8t%2F1gnTCAX263304xLjJpLQR%2BDsjwE0hr1uYaDXQwKZHIeBaZqwplwoCXPGlgRqIx1KxL35lDT9xQTMe0O8B%2BLo3%2BibD6LdBWXH3y7tSRKntrle1Hm97mOoHmV4Rpxe1ABU0M%2FD%2F%2BLmiIsJ17ETFPC99MSFP5xnhL7%2F2H%2F1ZBtz0q0QlxKMUdE9KNaVfD%2FKOHASgkrFh0dkjsLTgXCKieG0Do8GsvltJ64dXSlRsDE6ntmDt%2F%2Br5x6Y0peMYHpX2ArsiTkJRDMc6e%2BqrS28g%2FI1PBVO3MMnK3L0GOqUB6ryUK4sxbKsS0kyWTRp4oAevvbKqt64OpcQizrKFyIz0tSwR3qCY98YYj9tAaJEqTfPkdy%2FMixB1InKND9vloBrMqbA01N2lCP69THKpFAIZ1%2Bm1OkRyBVeWEHq21RmAs47bQnkL3Q4867jOlwT0CDFjeNKGZYS%2FHVPjZpfFLNcqRoiwl5Ztw6F%2BPmV%2B%2FQtQ5IWN%2BHPSyV%2Fd%2BGQrSsaCzcXNNt7U&X-Amz-Signature=5a091ef5b69cb95c393cb82462f37abbca106b39004a92e8e542ab39ffb8d4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266WNWZW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnzIkj9duZfzPeXPX1vgaw8aR6Rgz6fsiHRDJza18iHwIgZYqCY61Blr4g5pHXa4UTlOYQO42Bbm4o54I2BLUsOAAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKra1Jir%2FPCmSEQAeCrcA9aKwHoVpwQJ4Pjx203gik0dHekHub4Pmi2xpQdSXMnNLecWc5NkIXe4ReHzpTmi7eJU7Z7qE%2B8ZvQUQYdyLDTopdOAC%2FCMCTtCoNeQmliNbH2ISaz5FxGd4a9UxWxbYEv7VPhl4RxPjQuGbPdpenuXPmulZVfeGR705Q9nTSJa2EOVrrIvqx6PD3Zv5R%2Fy7SrdQdHcQylWe2KBJvL5WrTarZc%2BJmT0HAkNlYBlzbsAbFFBRL%2BGs%2FIdKfZJoNXhKtnutJib2O%2BoUUFvher%2Be5RwKIR9qXYncYWKAKDoDLIu%2FCkCQZP9CQ8R4TQ0PjrdvLYQ04nhwJPX1DCeL33cXyzQzUd2POV%2FC8t%2F1gnTCAX263304xLjJpLQR%2BDsjwE0hr1uYaDXQwKZHIeBaZqwplwoCXPGlgRqIx1KxL35lDT9xQTMe0O8B%2BLo3%2BibD6LdBWXH3y7tSRKntrle1Hm97mOoHmV4Rpxe1ABU0M%2FD%2F%2BLmiIsJ17ETFPC99MSFP5xnhL7%2F2H%2F1ZBtz0q0QlxKMUdE9KNaVfD%2FKOHASgkrFh0dkjsLTgXCKieG0Do8GsvltJ64dXSlRsDE6ntmDt%2F%2Br5x6Y0peMYHpX2ArsiTkJRDMc6e%2BqrS28g%2FI1PBVO3MMnK3L0GOqUB6ryUK4sxbKsS0kyWTRp4oAevvbKqt64OpcQizrKFyIz0tSwR3qCY98YYj9tAaJEqTfPkdy%2FMixB1InKND9vloBrMqbA01N2lCP69THKpFAIZ1%2Bm1OkRyBVeWEHq21RmAs47bQnkL3Q4867jOlwT0CDFjeNKGZYS%2FHVPjZpfFLNcqRoiwl5Ztw6F%2BPmV%2B%2FQtQ5IWN%2BHPSyV%2Fd%2BGQrSsaCzcXNNt7U&X-Amz-Signature=44987bb4f43c22936346122c5f8dc7835d010335868893c1e6ffafbbaefbdc82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266WNWZW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnzIkj9duZfzPeXPX1vgaw8aR6Rgz6fsiHRDJza18iHwIgZYqCY61Blr4g5pHXa4UTlOYQO42Bbm4o54I2BLUsOAAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKra1Jir%2FPCmSEQAeCrcA9aKwHoVpwQJ4Pjx203gik0dHekHub4Pmi2xpQdSXMnNLecWc5NkIXe4ReHzpTmi7eJU7Z7qE%2B8ZvQUQYdyLDTopdOAC%2FCMCTtCoNeQmliNbH2ISaz5FxGd4a9UxWxbYEv7VPhl4RxPjQuGbPdpenuXPmulZVfeGR705Q9nTSJa2EOVrrIvqx6PD3Zv5R%2Fy7SrdQdHcQylWe2KBJvL5WrTarZc%2BJmT0HAkNlYBlzbsAbFFBRL%2BGs%2FIdKfZJoNXhKtnutJib2O%2BoUUFvher%2Be5RwKIR9qXYncYWKAKDoDLIu%2FCkCQZP9CQ8R4TQ0PjrdvLYQ04nhwJPX1DCeL33cXyzQzUd2POV%2FC8t%2F1gnTCAX263304xLjJpLQR%2BDsjwE0hr1uYaDXQwKZHIeBaZqwplwoCXPGlgRqIx1KxL35lDT9xQTMe0O8B%2BLo3%2BibD6LdBWXH3y7tSRKntrle1Hm97mOoHmV4Rpxe1ABU0M%2FD%2F%2BLmiIsJ17ETFPC99MSFP5xnhL7%2F2H%2F1ZBtz0q0QlxKMUdE9KNaVfD%2FKOHASgkrFh0dkjsLTgXCKieG0Do8GsvltJ64dXSlRsDE6ntmDt%2F%2Br5x6Y0peMYHpX2ArsiTkJRDMc6e%2BqrS28g%2FI1PBVO3MMnK3L0GOqUB6ryUK4sxbKsS0kyWTRp4oAevvbKqt64OpcQizrKFyIz0tSwR3qCY98YYj9tAaJEqTfPkdy%2FMixB1InKND9vloBrMqbA01N2lCP69THKpFAIZ1%2Bm1OkRyBVeWEHq21RmAs47bQnkL3Q4867jOlwT0CDFjeNKGZYS%2FHVPjZpfFLNcqRoiwl5Ztw6F%2BPmV%2B%2FQtQ5IWN%2BHPSyV%2Fd%2BGQrSsaCzcXNNt7U&X-Amz-Signature=684cca7f687c299c1ef18fc2ef19be8af69b15af635e918f0c4d8be226fb803c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
