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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PHWP6XP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAZjnJfF9P9USliyJdvCebA8oP5bgBaM5KnUzg%2FzvgIhAOmZ0sMW6o0v60XWPKc8tdSENKoCwZUXzx2B%2BLi%2FbAmaKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx67oFxnCFuP6GXRowq3APegDaQY8tFjASoeuZfvu%2BQ73FTs5n9c9Xh39v%2F45dh3LglpEec7LlxK2iiK26bXMisihYLCoyCqxpJKXENHOT2AnHEFGEQjwjpReMTBh2ZF%2BagcsbiEiOKShFtD9qbRi6yzojAQCzulPz%2FX8ty5zUEvWAyJ4pI6iDQTt%2FtlIA68lLH%2BvGboZ7vL1i6quse%2BZVfBv6wEbPILvHnySw1uxD9CEMHZ3EGJObLMVH2vMUZTQhnJD7aM9AzUXdX%2FBN8UA1EQ4%2Fq%2F9SUmhSGmt8SIx4zg%2BzpA%2BKjJBhcl6CPUBcabpHduGDAifN4NK5hkUagVBcY8WUf3DyRUxZGujCx8vUwjTz6hgxZltIZf0aN96TtLxnvFkXXPxU6NTjd5oJyBR0qdZZ8EG6xzZUgsIuZBv%2BtyDmWQg2n63L5dinhWKQPZOxBlRDnJur%2FTiVGDsYPtuN2uU1fqw%2FgzBLxxkwLTE62cWmWxWFNGF2Mzb2jZuR3rOGmFcKua6Byi5y%2FyMk4p0t%2BMD6XpQuOwHwbICXVu8wo667Cs2j2jQfdpn3cOsYF3TFLXAgPmBt3U%2Fl%2F8ofsnJ8vBtvREbI39v2rM5nQc%2BBRSR50fyB3QcHG27S3eQiGDz%2F4bjNzXFzYc0zhZTDUs4vABjqkASggRa73NJTRRKB9fH5LrfLEPndtLCLUkZNs3DA%2Fc9jhZpg6HqA56JpbUDGfo4TNgzwYmmbcd46ZG8FCUySpTCU2ysJn0ugrac9UcDAVbG4V3E419Sb4f4AKqMfwU7hmj39vZ0YyJZ4j53mhCI3oPwrae5x6KsBcnLQhZTxWkT0%2FvFiH7YGeIjPQlqCWGHU%2BqpYu2rn7xY4eII12J1qje387bD10&X-Amz-Signature=a2a575790fcb0fdd204c0e8e893a937d4e263a5ffcac41cfd57cc527f3715d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PHWP6XP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAZjnJfF9P9USliyJdvCebA8oP5bgBaM5KnUzg%2FzvgIhAOmZ0sMW6o0v60XWPKc8tdSENKoCwZUXzx2B%2BLi%2FbAmaKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx67oFxnCFuP6GXRowq3APegDaQY8tFjASoeuZfvu%2BQ73FTs5n9c9Xh39v%2F45dh3LglpEec7LlxK2iiK26bXMisihYLCoyCqxpJKXENHOT2AnHEFGEQjwjpReMTBh2ZF%2BagcsbiEiOKShFtD9qbRi6yzojAQCzulPz%2FX8ty5zUEvWAyJ4pI6iDQTt%2FtlIA68lLH%2BvGboZ7vL1i6quse%2BZVfBv6wEbPILvHnySw1uxD9CEMHZ3EGJObLMVH2vMUZTQhnJD7aM9AzUXdX%2FBN8UA1EQ4%2Fq%2F9SUmhSGmt8SIx4zg%2BzpA%2BKjJBhcl6CPUBcabpHduGDAifN4NK5hkUagVBcY8WUf3DyRUxZGujCx8vUwjTz6hgxZltIZf0aN96TtLxnvFkXXPxU6NTjd5oJyBR0qdZZ8EG6xzZUgsIuZBv%2BtyDmWQg2n63L5dinhWKQPZOxBlRDnJur%2FTiVGDsYPtuN2uU1fqw%2FgzBLxxkwLTE62cWmWxWFNGF2Mzb2jZuR3rOGmFcKua6Byi5y%2FyMk4p0t%2BMD6XpQuOwHwbICXVu8wo667Cs2j2jQfdpn3cOsYF3TFLXAgPmBt3U%2Fl%2F8ofsnJ8vBtvREbI39v2rM5nQc%2BBRSR50fyB3QcHG27S3eQiGDz%2F4bjNzXFzYc0zhZTDUs4vABjqkASggRa73NJTRRKB9fH5LrfLEPndtLCLUkZNs3DA%2Fc9jhZpg6HqA56JpbUDGfo4TNgzwYmmbcd46ZG8FCUySpTCU2ysJn0ugrac9UcDAVbG4V3E419Sb4f4AKqMfwU7hmj39vZ0YyJZ4j53mhCI3oPwrae5x6KsBcnLQhZTxWkT0%2FvFiH7YGeIjPQlqCWGHU%2BqpYu2rn7xY4eII12J1qje387bD10&X-Amz-Signature=48bbdb3950f2864d0c2956f8044a247a5fc74ec152ed5c4ebb7905b0b2dbf7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PHWP6XP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAZjnJfF9P9USliyJdvCebA8oP5bgBaM5KnUzg%2FzvgIhAOmZ0sMW6o0v60XWPKc8tdSENKoCwZUXzx2B%2BLi%2FbAmaKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx67oFxnCFuP6GXRowq3APegDaQY8tFjASoeuZfvu%2BQ73FTs5n9c9Xh39v%2F45dh3LglpEec7LlxK2iiK26bXMisihYLCoyCqxpJKXENHOT2AnHEFGEQjwjpReMTBh2ZF%2BagcsbiEiOKShFtD9qbRi6yzojAQCzulPz%2FX8ty5zUEvWAyJ4pI6iDQTt%2FtlIA68lLH%2BvGboZ7vL1i6quse%2BZVfBv6wEbPILvHnySw1uxD9CEMHZ3EGJObLMVH2vMUZTQhnJD7aM9AzUXdX%2FBN8UA1EQ4%2Fq%2F9SUmhSGmt8SIx4zg%2BzpA%2BKjJBhcl6CPUBcabpHduGDAifN4NK5hkUagVBcY8WUf3DyRUxZGujCx8vUwjTz6hgxZltIZf0aN96TtLxnvFkXXPxU6NTjd5oJyBR0qdZZ8EG6xzZUgsIuZBv%2BtyDmWQg2n63L5dinhWKQPZOxBlRDnJur%2FTiVGDsYPtuN2uU1fqw%2FgzBLxxkwLTE62cWmWxWFNGF2Mzb2jZuR3rOGmFcKua6Byi5y%2FyMk4p0t%2BMD6XpQuOwHwbICXVu8wo667Cs2j2jQfdpn3cOsYF3TFLXAgPmBt3U%2Fl%2F8ofsnJ8vBtvREbI39v2rM5nQc%2BBRSR50fyB3QcHG27S3eQiGDz%2F4bjNzXFzYc0zhZTDUs4vABjqkASggRa73NJTRRKB9fH5LrfLEPndtLCLUkZNs3DA%2Fc9jhZpg6HqA56JpbUDGfo4TNgzwYmmbcd46ZG8FCUySpTCU2ysJn0ugrac9UcDAVbG4V3E419Sb4f4AKqMfwU7hmj39vZ0YyJZ4j53mhCI3oPwrae5x6KsBcnLQhZTxWkT0%2FvFiH7YGeIjPQlqCWGHU%2BqpYu2rn7xY4eII12J1qje387bD10&X-Amz-Signature=7dc7a2ada12b47024de1b9919bf60ca94189b6e0d5ae54b063c51ebf15ba7018&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PHWP6XP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAZjnJfF9P9USliyJdvCebA8oP5bgBaM5KnUzg%2FzvgIhAOmZ0sMW6o0v60XWPKc8tdSENKoCwZUXzx2B%2BLi%2FbAmaKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx67oFxnCFuP6GXRowq3APegDaQY8tFjASoeuZfvu%2BQ73FTs5n9c9Xh39v%2F45dh3LglpEec7LlxK2iiK26bXMisihYLCoyCqxpJKXENHOT2AnHEFGEQjwjpReMTBh2ZF%2BagcsbiEiOKShFtD9qbRi6yzojAQCzulPz%2FX8ty5zUEvWAyJ4pI6iDQTt%2FtlIA68lLH%2BvGboZ7vL1i6quse%2BZVfBv6wEbPILvHnySw1uxD9CEMHZ3EGJObLMVH2vMUZTQhnJD7aM9AzUXdX%2FBN8UA1EQ4%2Fq%2F9SUmhSGmt8SIx4zg%2BzpA%2BKjJBhcl6CPUBcabpHduGDAifN4NK5hkUagVBcY8WUf3DyRUxZGujCx8vUwjTz6hgxZltIZf0aN96TtLxnvFkXXPxU6NTjd5oJyBR0qdZZ8EG6xzZUgsIuZBv%2BtyDmWQg2n63L5dinhWKQPZOxBlRDnJur%2FTiVGDsYPtuN2uU1fqw%2FgzBLxxkwLTE62cWmWxWFNGF2Mzb2jZuR3rOGmFcKua6Byi5y%2FyMk4p0t%2BMD6XpQuOwHwbICXVu8wo667Cs2j2jQfdpn3cOsYF3TFLXAgPmBt3U%2Fl%2F8ofsnJ8vBtvREbI39v2rM5nQc%2BBRSR50fyB3QcHG27S3eQiGDz%2F4bjNzXFzYc0zhZTDUs4vABjqkASggRa73NJTRRKB9fH5LrfLEPndtLCLUkZNs3DA%2Fc9jhZpg6HqA56JpbUDGfo4TNgzwYmmbcd46ZG8FCUySpTCU2ysJn0ugrac9UcDAVbG4V3E419Sb4f4AKqMfwU7hmj39vZ0YyJZ4j53mhCI3oPwrae5x6KsBcnLQhZTxWkT0%2FvFiH7YGeIjPQlqCWGHU%2BqpYu2rn7xY4eII12J1qje387bD10&X-Amz-Signature=1e73e5573eee209b336c48fc90e131f6fdeb6c36bb6c2b7be0d35a52263c4b19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PHWP6XP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAZjnJfF9P9USliyJdvCebA8oP5bgBaM5KnUzg%2FzvgIhAOmZ0sMW6o0v60XWPKc8tdSENKoCwZUXzx2B%2BLi%2FbAmaKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx67oFxnCFuP6GXRowq3APegDaQY8tFjASoeuZfvu%2BQ73FTs5n9c9Xh39v%2F45dh3LglpEec7LlxK2iiK26bXMisihYLCoyCqxpJKXENHOT2AnHEFGEQjwjpReMTBh2ZF%2BagcsbiEiOKShFtD9qbRi6yzojAQCzulPz%2FX8ty5zUEvWAyJ4pI6iDQTt%2FtlIA68lLH%2BvGboZ7vL1i6quse%2BZVfBv6wEbPILvHnySw1uxD9CEMHZ3EGJObLMVH2vMUZTQhnJD7aM9AzUXdX%2FBN8UA1EQ4%2Fq%2F9SUmhSGmt8SIx4zg%2BzpA%2BKjJBhcl6CPUBcabpHduGDAifN4NK5hkUagVBcY8WUf3DyRUxZGujCx8vUwjTz6hgxZltIZf0aN96TtLxnvFkXXPxU6NTjd5oJyBR0qdZZ8EG6xzZUgsIuZBv%2BtyDmWQg2n63L5dinhWKQPZOxBlRDnJur%2FTiVGDsYPtuN2uU1fqw%2FgzBLxxkwLTE62cWmWxWFNGF2Mzb2jZuR3rOGmFcKua6Byi5y%2FyMk4p0t%2BMD6XpQuOwHwbICXVu8wo667Cs2j2jQfdpn3cOsYF3TFLXAgPmBt3U%2Fl%2F8ofsnJ8vBtvREbI39v2rM5nQc%2BBRSR50fyB3QcHG27S3eQiGDz%2F4bjNzXFzYc0zhZTDUs4vABjqkASggRa73NJTRRKB9fH5LrfLEPndtLCLUkZNs3DA%2Fc9jhZpg6HqA56JpbUDGfo4TNgzwYmmbcd46ZG8FCUySpTCU2ysJn0ugrac9UcDAVbG4V3E419Sb4f4AKqMfwU7hmj39vZ0YyJZ4j53mhCI3oPwrae5x6KsBcnLQhZTxWkT0%2FvFiH7YGeIjPQlqCWGHU%2BqpYu2rn7xY4eII12J1qje387bD10&X-Amz-Signature=281fa0c32130bc970947a1e120a060a8e4598b579b3939c85ffd4f9f95a8f830&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
