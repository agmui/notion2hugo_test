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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAZPLDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYK9NId7u6HAZ94LiTh7Fjz1uqMTxJQwIrqhS%2FYQVl6AIhAKqUOyz9jGP%2FdJme1K8%2F4IY00HC59jYy75BcNWfhJJ6qKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr5t%2BUD%2FI9W7mp8vIq3APhiPkFXHGQpybyYnKD7PRAetYLtYriQqjFiGIdGDTwi8vUYAP3dtiFuFLQCV1SAKQzcgo%2BbM5nuE%2BMa%2BbEKUcX7M32EP5bpsVWwLoTBXvgeGAYwE3xcDan0%2BGiV4qBNePfBJgRM%2BpQgFRlQhPjK6xUvSB8kRpPICPLUOz1ui4g6fCfbY66Rj7JDFtvu9u13HDFjKhvPp9266DYwiWLV5fWpT4zCmcyu1GYqnPyeL%2BXC9sbp6nSfh0srVpSRaTFO9bmBWw2Rqrr0K83vDDTwsh4c1auV6%2FPrCflX8qW7u%2FkQEnN5FCcA4CN6TGXwNi6cZ1LhVBhkjkdMALI60lArq76Juf4XHTjDIzTgXhjVrZ8Y%2FEJIe3w60N85mmm5yeo28pk305TlF6SCYHJKMmRKUX0C0Xv%2Fc1heMjbuTZVrM610calHudEewGkW4Ovd%2BtIoLlm48Qn6mXyKu5AeGYFLaww6CBcth1HYDnHdHBQTwSwOcAt33U%2BwtcVByK7DAnTUmNQ3ZOFsNYbZEHcI6AuwWhEBQeUfLBhTGOp1%2FFAaEMgTbkKX1Vyh7DMxdBg8GVS%2F56%2FItxqeihb3THfa2mWC1kVmWtWGWMjDTtB9QfrUXpXqr6XWCaTjI9YXwZ%2BJjCkidDCBjqkAaV1I9a8uBw%2B74dL9bdY5d7aTTT31kfWVB6MNJCOaIOM7xFvyYmsAJU3QjX7KvFhKJlURdqP654ezHVUpeXicj8tKgM47eMZwZXa3b63XmbsP%2FTOystKszsvtoeN9CDOVXGINXrsv5%2F6VPHXowpmGqqdqWI2U11qpGZD%2FL84LoAhYZtDhkhkejp61%2BLGLwOAKRj9iDJIg17n4bhrHWVCuS21yYPj&X-Amz-Signature=6b7bdd01434b701a803df389c9ac89946b070cc703e7dd884ce8ebea3afd5b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAZPLDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYK9NId7u6HAZ94LiTh7Fjz1uqMTxJQwIrqhS%2FYQVl6AIhAKqUOyz9jGP%2FdJme1K8%2F4IY00HC59jYy75BcNWfhJJ6qKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr5t%2BUD%2FI9W7mp8vIq3APhiPkFXHGQpybyYnKD7PRAetYLtYriQqjFiGIdGDTwi8vUYAP3dtiFuFLQCV1SAKQzcgo%2BbM5nuE%2BMa%2BbEKUcX7M32EP5bpsVWwLoTBXvgeGAYwE3xcDan0%2BGiV4qBNePfBJgRM%2BpQgFRlQhPjK6xUvSB8kRpPICPLUOz1ui4g6fCfbY66Rj7JDFtvu9u13HDFjKhvPp9266DYwiWLV5fWpT4zCmcyu1GYqnPyeL%2BXC9sbp6nSfh0srVpSRaTFO9bmBWw2Rqrr0K83vDDTwsh4c1auV6%2FPrCflX8qW7u%2FkQEnN5FCcA4CN6TGXwNi6cZ1LhVBhkjkdMALI60lArq76Juf4XHTjDIzTgXhjVrZ8Y%2FEJIe3w60N85mmm5yeo28pk305TlF6SCYHJKMmRKUX0C0Xv%2Fc1heMjbuTZVrM610calHudEewGkW4Ovd%2BtIoLlm48Qn6mXyKu5AeGYFLaww6CBcth1HYDnHdHBQTwSwOcAt33U%2BwtcVByK7DAnTUmNQ3ZOFsNYbZEHcI6AuwWhEBQeUfLBhTGOp1%2FFAaEMgTbkKX1Vyh7DMxdBg8GVS%2F56%2FItxqeihb3THfa2mWC1kVmWtWGWMjDTtB9QfrUXpXqr6XWCaTjI9YXwZ%2BJjCkidDCBjqkAaV1I9a8uBw%2B74dL9bdY5d7aTTT31kfWVB6MNJCOaIOM7xFvyYmsAJU3QjX7KvFhKJlURdqP654ezHVUpeXicj8tKgM47eMZwZXa3b63XmbsP%2FTOystKszsvtoeN9CDOVXGINXrsv5%2F6VPHXowpmGqqdqWI2U11qpGZD%2FL84LoAhYZtDhkhkejp61%2BLGLwOAKRj9iDJIg17n4bhrHWVCuS21yYPj&X-Amz-Signature=0a2b1fb80537c8ba03e8f114fbe3b2f9e9bd5f6ba2e0b31d510b05cc2892db1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAZPLDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYK9NId7u6HAZ94LiTh7Fjz1uqMTxJQwIrqhS%2FYQVl6AIhAKqUOyz9jGP%2FdJme1K8%2F4IY00HC59jYy75BcNWfhJJ6qKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr5t%2BUD%2FI9W7mp8vIq3APhiPkFXHGQpybyYnKD7PRAetYLtYriQqjFiGIdGDTwi8vUYAP3dtiFuFLQCV1SAKQzcgo%2BbM5nuE%2BMa%2BbEKUcX7M32EP5bpsVWwLoTBXvgeGAYwE3xcDan0%2BGiV4qBNePfBJgRM%2BpQgFRlQhPjK6xUvSB8kRpPICPLUOz1ui4g6fCfbY66Rj7JDFtvu9u13HDFjKhvPp9266DYwiWLV5fWpT4zCmcyu1GYqnPyeL%2BXC9sbp6nSfh0srVpSRaTFO9bmBWw2Rqrr0K83vDDTwsh4c1auV6%2FPrCflX8qW7u%2FkQEnN5FCcA4CN6TGXwNi6cZ1LhVBhkjkdMALI60lArq76Juf4XHTjDIzTgXhjVrZ8Y%2FEJIe3w60N85mmm5yeo28pk305TlF6SCYHJKMmRKUX0C0Xv%2Fc1heMjbuTZVrM610calHudEewGkW4Ovd%2BtIoLlm48Qn6mXyKu5AeGYFLaww6CBcth1HYDnHdHBQTwSwOcAt33U%2BwtcVByK7DAnTUmNQ3ZOFsNYbZEHcI6AuwWhEBQeUfLBhTGOp1%2FFAaEMgTbkKX1Vyh7DMxdBg8GVS%2F56%2FItxqeihb3THfa2mWC1kVmWtWGWMjDTtB9QfrUXpXqr6XWCaTjI9YXwZ%2BJjCkidDCBjqkAaV1I9a8uBw%2B74dL9bdY5d7aTTT31kfWVB6MNJCOaIOM7xFvyYmsAJU3QjX7KvFhKJlURdqP654ezHVUpeXicj8tKgM47eMZwZXa3b63XmbsP%2FTOystKszsvtoeN9CDOVXGINXrsv5%2F6VPHXowpmGqqdqWI2U11qpGZD%2FL84LoAhYZtDhkhkejp61%2BLGLwOAKRj9iDJIg17n4bhrHWVCuS21yYPj&X-Amz-Signature=9e86643596545fefbab9b608f95f896bb4b2eceb364f476e25f76bfb8bb88576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAZPLDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYK9NId7u6HAZ94LiTh7Fjz1uqMTxJQwIrqhS%2FYQVl6AIhAKqUOyz9jGP%2FdJme1K8%2F4IY00HC59jYy75BcNWfhJJ6qKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr5t%2BUD%2FI9W7mp8vIq3APhiPkFXHGQpybyYnKD7PRAetYLtYriQqjFiGIdGDTwi8vUYAP3dtiFuFLQCV1SAKQzcgo%2BbM5nuE%2BMa%2BbEKUcX7M32EP5bpsVWwLoTBXvgeGAYwE3xcDan0%2BGiV4qBNePfBJgRM%2BpQgFRlQhPjK6xUvSB8kRpPICPLUOz1ui4g6fCfbY66Rj7JDFtvu9u13HDFjKhvPp9266DYwiWLV5fWpT4zCmcyu1GYqnPyeL%2BXC9sbp6nSfh0srVpSRaTFO9bmBWw2Rqrr0K83vDDTwsh4c1auV6%2FPrCflX8qW7u%2FkQEnN5FCcA4CN6TGXwNi6cZ1LhVBhkjkdMALI60lArq76Juf4XHTjDIzTgXhjVrZ8Y%2FEJIe3w60N85mmm5yeo28pk305TlF6SCYHJKMmRKUX0C0Xv%2Fc1heMjbuTZVrM610calHudEewGkW4Ovd%2BtIoLlm48Qn6mXyKu5AeGYFLaww6CBcth1HYDnHdHBQTwSwOcAt33U%2BwtcVByK7DAnTUmNQ3ZOFsNYbZEHcI6AuwWhEBQeUfLBhTGOp1%2FFAaEMgTbkKX1Vyh7DMxdBg8GVS%2F56%2FItxqeihb3THfa2mWC1kVmWtWGWMjDTtB9QfrUXpXqr6XWCaTjI9YXwZ%2BJjCkidDCBjqkAaV1I9a8uBw%2B74dL9bdY5d7aTTT31kfWVB6MNJCOaIOM7xFvyYmsAJU3QjX7KvFhKJlURdqP654ezHVUpeXicj8tKgM47eMZwZXa3b63XmbsP%2FTOystKszsvtoeN9CDOVXGINXrsv5%2F6VPHXowpmGqqdqWI2U11qpGZD%2FL84LoAhYZtDhkhkejp61%2BLGLwOAKRj9iDJIg17n4bhrHWVCuS21yYPj&X-Amz-Signature=7805d0811d6a7caae69a5f7da5fdf24e393fed25a2db55ac6f59ccd5f4d065c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAZPLDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYK9NId7u6HAZ94LiTh7Fjz1uqMTxJQwIrqhS%2FYQVl6AIhAKqUOyz9jGP%2FdJme1K8%2F4IY00HC59jYy75BcNWfhJJ6qKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr5t%2BUD%2FI9W7mp8vIq3APhiPkFXHGQpybyYnKD7PRAetYLtYriQqjFiGIdGDTwi8vUYAP3dtiFuFLQCV1SAKQzcgo%2BbM5nuE%2BMa%2BbEKUcX7M32EP5bpsVWwLoTBXvgeGAYwE3xcDan0%2BGiV4qBNePfBJgRM%2BpQgFRlQhPjK6xUvSB8kRpPICPLUOz1ui4g6fCfbY66Rj7JDFtvu9u13HDFjKhvPp9266DYwiWLV5fWpT4zCmcyu1GYqnPyeL%2BXC9sbp6nSfh0srVpSRaTFO9bmBWw2Rqrr0K83vDDTwsh4c1auV6%2FPrCflX8qW7u%2FkQEnN5FCcA4CN6TGXwNi6cZ1LhVBhkjkdMALI60lArq76Juf4XHTjDIzTgXhjVrZ8Y%2FEJIe3w60N85mmm5yeo28pk305TlF6SCYHJKMmRKUX0C0Xv%2Fc1heMjbuTZVrM610calHudEewGkW4Ovd%2BtIoLlm48Qn6mXyKu5AeGYFLaww6CBcth1HYDnHdHBQTwSwOcAt33U%2BwtcVByK7DAnTUmNQ3ZOFsNYbZEHcI6AuwWhEBQeUfLBhTGOp1%2FFAaEMgTbkKX1Vyh7DMxdBg8GVS%2F56%2FItxqeihb3THfa2mWC1kVmWtWGWMjDTtB9QfrUXpXqr6XWCaTjI9YXwZ%2BJjCkidDCBjqkAaV1I9a8uBw%2B74dL9bdY5d7aTTT31kfWVB6MNJCOaIOM7xFvyYmsAJU3QjX7KvFhKJlURdqP654ezHVUpeXicj8tKgM47eMZwZXa3b63XmbsP%2FTOystKszsvtoeN9CDOVXGINXrsv5%2F6VPHXowpmGqqdqWI2U11qpGZD%2FL84LoAhYZtDhkhkejp61%2BLGLwOAKRj9iDJIg17n4bhrHWVCuS21yYPj&X-Amz-Signature=7ef54c4562de7e97e28a41d6d835d922cb2ab02e81237e68ccff4720f439956f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
