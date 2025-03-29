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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6CKRG5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCurLkcn%2Fcar1mFYOdRBrkRbKQlaeN7UF%2B4XUx%2F0HuHNAIhAJ6eYvjuJP6DEnvBeSIRC95Ej4gg1EJhf679b1k6yku4Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyPKgPHJAZOZ41TOyIq3APEkkhSOxDpGeEX7Qm9GRIJyn6q6NlE42LYmUsYgQLyMPITC56u2%2BtbTLJj50IHHISI2T8ght2yo6rWM0ANrXYlWkqZHe5yo3mOSnzqayabtg42btyKWvF5amtWrfClnk0VbU3P7LiDjaqYfxgccQLTTzYzrPs%2B51xc56bzuf%2BHwLtehITre5y%2F6Sv0bHkJshQR1gVi8sCrL2iv3lrtTc5HjipzEIVJ%2BkLmjcXBzdtjMFC4BwEetgdpEeuaNZJE3hoQoG2ycW6Q7igZrhEG7j2IiFqOr6tRpZA55A0j7qHG1Mb33wlkm5WNcnEQmpKI0n9jon3TTYPp1mkbmk9ZVhxlCmEA20rjjNOHkwU6g6KgwaOHCbI8L5cqpbDXeh1r%2Bf265BqCHLs8RuwaAzm6pwhak86fBZfvrCu6V1lZixCwYfMtUopIKCFJ%2BYJh4%2Br2EKNsmlKm1kLZtjZgvQMOn6Tlqj43%2BVhPb4sdef5OmUfeT0FxZ0OlfOrO5meSc24sQ%2BgUaZKEDEsgJWLkhNk2OcERO6Ldb5cypJDUvI5DUjvzp1d5TvhoIhRVrVol0wYHYA7Z0ZM306hJ%2BanPNdtQjU6yGderXWfl7Sp0MqZfvJqmBJuMBpdC%2Bfq2HVNSrjDO35y%2FBjqkAQHZWvsFhBuA6sE%2BXkehabD66b%2BE2ouYbXGEZe2GKFC1NP8txQ%2BFuFU0u%2BuNo7vGdcQzS2K2lETaR%2FNAvBSPmVOj%2FRxOlVuZQH4%2F8It9laD2bNbSt4AR3Pz%2FQ0ttQ0FY45QAb1XjG0c8PS1n%2FKnNlH4kfUph5D7v4ofjX8TJORMNJc9WjW3c%2BT%2BOsWsZ8i0fNq4JfYofuUAYKL9Spjlf%2BxxBrm23&X-Amz-Signature=afe3df9c5720d5b166610ff8054e68327f39e7eba8f180fbdce79d35d853832c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6CKRG5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCurLkcn%2Fcar1mFYOdRBrkRbKQlaeN7UF%2B4XUx%2F0HuHNAIhAJ6eYvjuJP6DEnvBeSIRC95Ej4gg1EJhf679b1k6yku4Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyPKgPHJAZOZ41TOyIq3APEkkhSOxDpGeEX7Qm9GRIJyn6q6NlE42LYmUsYgQLyMPITC56u2%2BtbTLJj50IHHISI2T8ght2yo6rWM0ANrXYlWkqZHe5yo3mOSnzqayabtg42btyKWvF5amtWrfClnk0VbU3P7LiDjaqYfxgccQLTTzYzrPs%2B51xc56bzuf%2BHwLtehITre5y%2F6Sv0bHkJshQR1gVi8sCrL2iv3lrtTc5HjipzEIVJ%2BkLmjcXBzdtjMFC4BwEetgdpEeuaNZJE3hoQoG2ycW6Q7igZrhEG7j2IiFqOr6tRpZA55A0j7qHG1Mb33wlkm5WNcnEQmpKI0n9jon3TTYPp1mkbmk9ZVhxlCmEA20rjjNOHkwU6g6KgwaOHCbI8L5cqpbDXeh1r%2Bf265BqCHLs8RuwaAzm6pwhak86fBZfvrCu6V1lZixCwYfMtUopIKCFJ%2BYJh4%2Br2EKNsmlKm1kLZtjZgvQMOn6Tlqj43%2BVhPb4sdef5OmUfeT0FxZ0OlfOrO5meSc24sQ%2BgUaZKEDEsgJWLkhNk2OcERO6Ldb5cypJDUvI5DUjvzp1d5TvhoIhRVrVol0wYHYA7Z0ZM306hJ%2BanPNdtQjU6yGderXWfl7Sp0MqZfvJqmBJuMBpdC%2Bfq2HVNSrjDO35y%2FBjqkAQHZWvsFhBuA6sE%2BXkehabD66b%2BE2ouYbXGEZe2GKFC1NP8txQ%2BFuFU0u%2BuNo7vGdcQzS2K2lETaR%2FNAvBSPmVOj%2FRxOlVuZQH4%2F8It9laD2bNbSt4AR3Pz%2FQ0ttQ0FY45QAb1XjG0c8PS1n%2FKnNlH4kfUph5D7v4ofjX8TJORMNJc9WjW3c%2BT%2BOsWsZ8i0fNq4JfYofuUAYKL9Spjlf%2BxxBrm23&X-Amz-Signature=0ee00b34d157434c772b820b17254914fe00474bd3a66393331ec7d4d99b4f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6CKRG5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCurLkcn%2Fcar1mFYOdRBrkRbKQlaeN7UF%2B4XUx%2F0HuHNAIhAJ6eYvjuJP6DEnvBeSIRC95Ej4gg1EJhf679b1k6yku4Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyPKgPHJAZOZ41TOyIq3APEkkhSOxDpGeEX7Qm9GRIJyn6q6NlE42LYmUsYgQLyMPITC56u2%2BtbTLJj50IHHISI2T8ght2yo6rWM0ANrXYlWkqZHe5yo3mOSnzqayabtg42btyKWvF5amtWrfClnk0VbU3P7LiDjaqYfxgccQLTTzYzrPs%2B51xc56bzuf%2BHwLtehITre5y%2F6Sv0bHkJshQR1gVi8sCrL2iv3lrtTc5HjipzEIVJ%2BkLmjcXBzdtjMFC4BwEetgdpEeuaNZJE3hoQoG2ycW6Q7igZrhEG7j2IiFqOr6tRpZA55A0j7qHG1Mb33wlkm5WNcnEQmpKI0n9jon3TTYPp1mkbmk9ZVhxlCmEA20rjjNOHkwU6g6KgwaOHCbI8L5cqpbDXeh1r%2Bf265BqCHLs8RuwaAzm6pwhak86fBZfvrCu6V1lZixCwYfMtUopIKCFJ%2BYJh4%2Br2EKNsmlKm1kLZtjZgvQMOn6Tlqj43%2BVhPb4sdef5OmUfeT0FxZ0OlfOrO5meSc24sQ%2BgUaZKEDEsgJWLkhNk2OcERO6Ldb5cypJDUvI5DUjvzp1d5TvhoIhRVrVol0wYHYA7Z0ZM306hJ%2BanPNdtQjU6yGderXWfl7Sp0MqZfvJqmBJuMBpdC%2Bfq2HVNSrjDO35y%2FBjqkAQHZWvsFhBuA6sE%2BXkehabD66b%2BE2ouYbXGEZe2GKFC1NP8txQ%2BFuFU0u%2BuNo7vGdcQzS2K2lETaR%2FNAvBSPmVOj%2FRxOlVuZQH4%2F8It9laD2bNbSt4AR3Pz%2FQ0ttQ0FY45QAb1XjG0c8PS1n%2FKnNlH4kfUph5D7v4ofjX8TJORMNJc9WjW3c%2BT%2BOsWsZ8i0fNq4JfYofuUAYKL9Spjlf%2BxxBrm23&X-Amz-Signature=80e55f86d02a3f681a139382d87fef16dbb00d4de89b705b4fbefeb4bff4e477&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6CKRG5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCurLkcn%2Fcar1mFYOdRBrkRbKQlaeN7UF%2B4XUx%2F0HuHNAIhAJ6eYvjuJP6DEnvBeSIRC95Ej4gg1EJhf679b1k6yku4Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyPKgPHJAZOZ41TOyIq3APEkkhSOxDpGeEX7Qm9GRIJyn6q6NlE42LYmUsYgQLyMPITC56u2%2BtbTLJj50IHHISI2T8ght2yo6rWM0ANrXYlWkqZHe5yo3mOSnzqayabtg42btyKWvF5amtWrfClnk0VbU3P7LiDjaqYfxgccQLTTzYzrPs%2B51xc56bzuf%2BHwLtehITre5y%2F6Sv0bHkJshQR1gVi8sCrL2iv3lrtTc5HjipzEIVJ%2BkLmjcXBzdtjMFC4BwEetgdpEeuaNZJE3hoQoG2ycW6Q7igZrhEG7j2IiFqOr6tRpZA55A0j7qHG1Mb33wlkm5WNcnEQmpKI0n9jon3TTYPp1mkbmk9ZVhxlCmEA20rjjNOHkwU6g6KgwaOHCbI8L5cqpbDXeh1r%2Bf265BqCHLs8RuwaAzm6pwhak86fBZfvrCu6V1lZixCwYfMtUopIKCFJ%2BYJh4%2Br2EKNsmlKm1kLZtjZgvQMOn6Tlqj43%2BVhPb4sdef5OmUfeT0FxZ0OlfOrO5meSc24sQ%2BgUaZKEDEsgJWLkhNk2OcERO6Ldb5cypJDUvI5DUjvzp1d5TvhoIhRVrVol0wYHYA7Z0ZM306hJ%2BanPNdtQjU6yGderXWfl7Sp0MqZfvJqmBJuMBpdC%2Bfq2HVNSrjDO35y%2FBjqkAQHZWvsFhBuA6sE%2BXkehabD66b%2BE2ouYbXGEZe2GKFC1NP8txQ%2BFuFU0u%2BuNo7vGdcQzS2K2lETaR%2FNAvBSPmVOj%2FRxOlVuZQH4%2F8It9laD2bNbSt4AR3Pz%2FQ0ttQ0FY45QAb1XjG0c8PS1n%2FKnNlH4kfUph5D7v4ofjX8TJORMNJc9WjW3c%2BT%2BOsWsZ8i0fNq4JfYofuUAYKL9Spjlf%2BxxBrm23&X-Amz-Signature=4a4b51ef9d9258c72bcb918ae70b79ecdde637678dcac1e2294cd9dfc512f414&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6CKRG5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCurLkcn%2Fcar1mFYOdRBrkRbKQlaeN7UF%2B4XUx%2F0HuHNAIhAJ6eYvjuJP6DEnvBeSIRC95Ej4gg1EJhf679b1k6yku4Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyPKgPHJAZOZ41TOyIq3APEkkhSOxDpGeEX7Qm9GRIJyn6q6NlE42LYmUsYgQLyMPITC56u2%2BtbTLJj50IHHISI2T8ght2yo6rWM0ANrXYlWkqZHe5yo3mOSnzqayabtg42btyKWvF5amtWrfClnk0VbU3P7LiDjaqYfxgccQLTTzYzrPs%2B51xc56bzuf%2BHwLtehITre5y%2F6Sv0bHkJshQR1gVi8sCrL2iv3lrtTc5HjipzEIVJ%2BkLmjcXBzdtjMFC4BwEetgdpEeuaNZJE3hoQoG2ycW6Q7igZrhEG7j2IiFqOr6tRpZA55A0j7qHG1Mb33wlkm5WNcnEQmpKI0n9jon3TTYPp1mkbmk9ZVhxlCmEA20rjjNOHkwU6g6KgwaOHCbI8L5cqpbDXeh1r%2Bf265BqCHLs8RuwaAzm6pwhak86fBZfvrCu6V1lZixCwYfMtUopIKCFJ%2BYJh4%2Br2EKNsmlKm1kLZtjZgvQMOn6Tlqj43%2BVhPb4sdef5OmUfeT0FxZ0OlfOrO5meSc24sQ%2BgUaZKEDEsgJWLkhNk2OcERO6Ldb5cypJDUvI5DUjvzp1d5TvhoIhRVrVol0wYHYA7Z0ZM306hJ%2BanPNdtQjU6yGderXWfl7Sp0MqZfvJqmBJuMBpdC%2Bfq2HVNSrjDO35y%2FBjqkAQHZWvsFhBuA6sE%2BXkehabD66b%2BE2ouYbXGEZe2GKFC1NP8txQ%2BFuFU0u%2BuNo7vGdcQzS2K2lETaR%2FNAvBSPmVOj%2FRxOlVuZQH4%2F8It9laD2bNbSt4AR3Pz%2FQ0ttQ0FY45QAb1XjG0c8PS1n%2FKnNlH4kfUph5D7v4ofjX8TJORMNJc9WjW3c%2BT%2BOsWsZ8i0fNq4JfYofuUAYKL9Spjlf%2BxxBrm23&X-Amz-Signature=b3a851165e871d3630bdea0f1ac1e889ac3363493c6de1d0ee2e61c905d006c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
