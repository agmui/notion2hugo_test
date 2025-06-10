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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNL2E4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXLdCn9YUYlqbxNeCl7PWTjg%2FAcYfI1tQq8DwaSudOxAiAWvNA6r2eJT6l6AXQeizgkXAllbUe1ynO3tgTg%2BeMjDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wOJws0KsnHWsdsIKtwDZ7egdON7yRVzce3hSORCWA4ybExLDbCbEd3T5bx0677veJWT1CW5ZftNCcVr0ZY%2Bg5v2EvkR5bh2ZXXm5iTXsqU8W0a0eCIAC%2FRqYIW1k7Fa7zjQMIcHKQxVFLtgONcjkeJ1qa4%2BNX9E1ysgJ7YV%2BCMGflX9uAhahfPQ%2BgYluJhyrAsXXAmQyyT3%2F7VyyqxJ6k9N7adTB20uOnOIxPJA34%2FIU7WloywtZM0rEewCvjEhyEGKSrYHyqe6FKhPsG9NOhRxoSvQkymHQB9aYGT9UNw2vQmBJZUINSWcDe0EioYe1nXTsT%2FT%2Fq%2FNNekMem3iHIiLxcIq6cbYRQXAt4BYH%2FJ%2FfL28OiZUAXYNTYKebEJTcOulf4tZrWYcAdr89DcRTvGO7vezxYepG8pECnXX6YDkqAKb%2FIPrZynMLSY78EJPSItMpIMr94bgToX9AJxB6eZb7OoC%2BL1IbXj0N2D%2BCmPZ0BXfZP1j%2FkJLE0TtCTI2LFRPIs3nYrZSrlIPcuqqLzleaVU3pf3rA5fPZFblQAGpjDFYHditRIwZeOHE7di8cxVZIuGkXF%2Fee%2FY5OAiTjFcx4327QMcZzHUOVNHyljQeWoGzM9Z2X1%2BIe0LvBgxJjqQO%2ByUpTCkI7cIwgMuhwgY6pgFqgKPQw6MI5%2Bzo%2BL5xoAaLpvUw%2B6%2FOIHsKL9IQVWF%2FH1oTC3%2FPtXjyKr5kfmQ3cDhpiEsgLimnRetwoN892kx2hF5FiR8QF99T29vr7Mu2bCQbDA8FaBn52Ez5E8rmQ%2FXey6zGsXHr2MxugkPVK7u%2BzxAFsgOdQRdP0NUvOqN18T6Nch9EJMjkObvzKCKBeYE57QYBPYjpQyrPeV2rB%2BEpR8WRAEG1&X-Amz-Signature=16417ca4741fa7d2c9031de596366f6c43440bf035e2a39fc40ab4b199793953&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNL2E4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXLdCn9YUYlqbxNeCl7PWTjg%2FAcYfI1tQq8DwaSudOxAiAWvNA6r2eJT6l6AXQeizgkXAllbUe1ynO3tgTg%2BeMjDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wOJws0KsnHWsdsIKtwDZ7egdON7yRVzce3hSORCWA4ybExLDbCbEd3T5bx0677veJWT1CW5ZftNCcVr0ZY%2Bg5v2EvkR5bh2ZXXm5iTXsqU8W0a0eCIAC%2FRqYIW1k7Fa7zjQMIcHKQxVFLtgONcjkeJ1qa4%2BNX9E1ysgJ7YV%2BCMGflX9uAhahfPQ%2BgYluJhyrAsXXAmQyyT3%2F7VyyqxJ6k9N7adTB20uOnOIxPJA34%2FIU7WloywtZM0rEewCvjEhyEGKSrYHyqe6FKhPsG9NOhRxoSvQkymHQB9aYGT9UNw2vQmBJZUINSWcDe0EioYe1nXTsT%2FT%2Fq%2FNNekMem3iHIiLxcIq6cbYRQXAt4BYH%2FJ%2FfL28OiZUAXYNTYKebEJTcOulf4tZrWYcAdr89DcRTvGO7vezxYepG8pECnXX6YDkqAKb%2FIPrZynMLSY78EJPSItMpIMr94bgToX9AJxB6eZb7OoC%2BL1IbXj0N2D%2BCmPZ0BXfZP1j%2FkJLE0TtCTI2LFRPIs3nYrZSrlIPcuqqLzleaVU3pf3rA5fPZFblQAGpjDFYHditRIwZeOHE7di8cxVZIuGkXF%2Fee%2FY5OAiTjFcx4327QMcZzHUOVNHyljQeWoGzM9Z2X1%2BIe0LvBgxJjqQO%2ByUpTCkI7cIwgMuhwgY6pgFqgKPQw6MI5%2Bzo%2BL5xoAaLpvUw%2B6%2FOIHsKL9IQVWF%2FH1oTC3%2FPtXjyKr5kfmQ3cDhpiEsgLimnRetwoN892kx2hF5FiR8QF99T29vr7Mu2bCQbDA8FaBn52Ez5E8rmQ%2FXey6zGsXHr2MxugkPVK7u%2BzxAFsgOdQRdP0NUvOqN18T6Nch9EJMjkObvzKCKBeYE57QYBPYjpQyrPeV2rB%2BEpR8WRAEG1&X-Amz-Signature=90eb2c714518c46bf47fb92ac65b0ce0ca71e528a89df54e367083bb4aa9e7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNL2E4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXLdCn9YUYlqbxNeCl7PWTjg%2FAcYfI1tQq8DwaSudOxAiAWvNA6r2eJT6l6AXQeizgkXAllbUe1ynO3tgTg%2BeMjDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wOJws0KsnHWsdsIKtwDZ7egdON7yRVzce3hSORCWA4ybExLDbCbEd3T5bx0677veJWT1CW5ZftNCcVr0ZY%2Bg5v2EvkR5bh2ZXXm5iTXsqU8W0a0eCIAC%2FRqYIW1k7Fa7zjQMIcHKQxVFLtgONcjkeJ1qa4%2BNX9E1ysgJ7YV%2BCMGflX9uAhahfPQ%2BgYluJhyrAsXXAmQyyT3%2F7VyyqxJ6k9N7adTB20uOnOIxPJA34%2FIU7WloywtZM0rEewCvjEhyEGKSrYHyqe6FKhPsG9NOhRxoSvQkymHQB9aYGT9UNw2vQmBJZUINSWcDe0EioYe1nXTsT%2FT%2Fq%2FNNekMem3iHIiLxcIq6cbYRQXAt4BYH%2FJ%2FfL28OiZUAXYNTYKebEJTcOulf4tZrWYcAdr89DcRTvGO7vezxYepG8pECnXX6YDkqAKb%2FIPrZynMLSY78EJPSItMpIMr94bgToX9AJxB6eZb7OoC%2BL1IbXj0N2D%2BCmPZ0BXfZP1j%2FkJLE0TtCTI2LFRPIs3nYrZSrlIPcuqqLzleaVU3pf3rA5fPZFblQAGpjDFYHditRIwZeOHE7di8cxVZIuGkXF%2Fee%2FY5OAiTjFcx4327QMcZzHUOVNHyljQeWoGzM9Z2X1%2BIe0LvBgxJjqQO%2ByUpTCkI7cIwgMuhwgY6pgFqgKPQw6MI5%2Bzo%2BL5xoAaLpvUw%2B6%2FOIHsKL9IQVWF%2FH1oTC3%2FPtXjyKr5kfmQ3cDhpiEsgLimnRetwoN892kx2hF5FiR8QF99T29vr7Mu2bCQbDA8FaBn52Ez5E8rmQ%2FXey6zGsXHr2MxugkPVK7u%2BzxAFsgOdQRdP0NUvOqN18T6Nch9EJMjkObvzKCKBeYE57QYBPYjpQyrPeV2rB%2BEpR8WRAEG1&X-Amz-Signature=b477bc272413b4e20c8e74980a1bb1f529e6e0632f054f713599f99519efa270&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNL2E4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXLdCn9YUYlqbxNeCl7PWTjg%2FAcYfI1tQq8DwaSudOxAiAWvNA6r2eJT6l6AXQeizgkXAllbUe1ynO3tgTg%2BeMjDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wOJws0KsnHWsdsIKtwDZ7egdON7yRVzce3hSORCWA4ybExLDbCbEd3T5bx0677veJWT1CW5ZftNCcVr0ZY%2Bg5v2EvkR5bh2ZXXm5iTXsqU8W0a0eCIAC%2FRqYIW1k7Fa7zjQMIcHKQxVFLtgONcjkeJ1qa4%2BNX9E1ysgJ7YV%2BCMGflX9uAhahfPQ%2BgYluJhyrAsXXAmQyyT3%2F7VyyqxJ6k9N7adTB20uOnOIxPJA34%2FIU7WloywtZM0rEewCvjEhyEGKSrYHyqe6FKhPsG9NOhRxoSvQkymHQB9aYGT9UNw2vQmBJZUINSWcDe0EioYe1nXTsT%2FT%2Fq%2FNNekMem3iHIiLxcIq6cbYRQXAt4BYH%2FJ%2FfL28OiZUAXYNTYKebEJTcOulf4tZrWYcAdr89DcRTvGO7vezxYepG8pECnXX6YDkqAKb%2FIPrZynMLSY78EJPSItMpIMr94bgToX9AJxB6eZb7OoC%2BL1IbXj0N2D%2BCmPZ0BXfZP1j%2FkJLE0TtCTI2LFRPIs3nYrZSrlIPcuqqLzleaVU3pf3rA5fPZFblQAGpjDFYHditRIwZeOHE7di8cxVZIuGkXF%2Fee%2FY5OAiTjFcx4327QMcZzHUOVNHyljQeWoGzM9Z2X1%2BIe0LvBgxJjqQO%2ByUpTCkI7cIwgMuhwgY6pgFqgKPQw6MI5%2Bzo%2BL5xoAaLpvUw%2B6%2FOIHsKL9IQVWF%2FH1oTC3%2FPtXjyKr5kfmQ3cDhpiEsgLimnRetwoN892kx2hF5FiR8QF99T29vr7Mu2bCQbDA8FaBn52Ez5E8rmQ%2FXey6zGsXHr2MxugkPVK7u%2BzxAFsgOdQRdP0NUvOqN18T6Nch9EJMjkObvzKCKBeYE57QYBPYjpQyrPeV2rB%2BEpR8WRAEG1&X-Amz-Signature=3c2ceb0d404fa5091d05951caacd2ff0bed17fb0e875ffaf796c5dd95cc2a818&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNL2E4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXLdCn9YUYlqbxNeCl7PWTjg%2FAcYfI1tQq8DwaSudOxAiAWvNA6r2eJT6l6AXQeizgkXAllbUe1ynO3tgTg%2BeMjDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wOJws0KsnHWsdsIKtwDZ7egdON7yRVzce3hSORCWA4ybExLDbCbEd3T5bx0677veJWT1CW5ZftNCcVr0ZY%2Bg5v2EvkR5bh2ZXXm5iTXsqU8W0a0eCIAC%2FRqYIW1k7Fa7zjQMIcHKQxVFLtgONcjkeJ1qa4%2BNX9E1ysgJ7YV%2BCMGflX9uAhahfPQ%2BgYluJhyrAsXXAmQyyT3%2F7VyyqxJ6k9N7adTB20uOnOIxPJA34%2FIU7WloywtZM0rEewCvjEhyEGKSrYHyqe6FKhPsG9NOhRxoSvQkymHQB9aYGT9UNw2vQmBJZUINSWcDe0EioYe1nXTsT%2FT%2Fq%2FNNekMem3iHIiLxcIq6cbYRQXAt4BYH%2FJ%2FfL28OiZUAXYNTYKebEJTcOulf4tZrWYcAdr89DcRTvGO7vezxYepG8pECnXX6YDkqAKb%2FIPrZynMLSY78EJPSItMpIMr94bgToX9AJxB6eZb7OoC%2BL1IbXj0N2D%2BCmPZ0BXfZP1j%2FkJLE0TtCTI2LFRPIs3nYrZSrlIPcuqqLzleaVU3pf3rA5fPZFblQAGpjDFYHditRIwZeOHE7di8cxVZIuGkXF%2Fee%2FY5OAiTjFcx4327QMcZzHUOVNHyljQeWoGzM9Z2X1%2BIe0LvBgxJjqQO%2ByUpTCkI7cIwgMuhwgY6pgFqgKPQw6MI5%2Bzo%2BL5xoAaLpvUw%2B6%2FOIHsKL9IQVWF%2FH1oTC3%2FPtXjyKr5kfmQ3cDhpiEsgLimnRetwoN892kx2hF5FiR8QF99T29vr7Mu2bCQbDA8FaBn52Ez5E8rmQ%2FXey6zGsXHr2MxugkPVK7u%2BzxAFsgOdQRdP0NUvOqN18T6Nch9EJMjkObvzKCKBeYE57QYBPYjpQyrPeV2rB%2BEpR8WRAEG1&X-Amz-Signature=c7bf5f0d41bf3e1964c6534de87a5aa3b074d13b1b8ec66a2401685e076d643d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
