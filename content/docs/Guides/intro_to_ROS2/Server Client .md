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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ66I22P%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS02brOtBDxA%2Bx5bF1NquwE9sK0I8OcIVnpFzo9NiErAiEAomRqU2LZcKidAdrh85OkzilUzPTz5OEIxOFoAbCqvwMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7YHTQ3NK4pzBYr1SrcAxUJo%2B9kbb9D%2FiuKYcINgCMnyrMMl4b2wpa33%2B4qY8STeURD9RVsTpsz%2BYdOVD%2FzEJ145YoDdNYc47uq%2FQ4ypVPGuH0257A0aXNfWsPn6GCBjoKps0R8bduGCsLjxLiJ%2B39UFZi8m8UuGZNx0s8x7ufRB2SnSHjCL2eFdcfhdN5KrcQ6OUPnKxq3X9Kq3kEJoikBALNy4EibZy46KEnEXroJ4ZWZFdC%2Bse%2F4scdb1cxplF3VbVKTdmkqMZE%2BAHtaWuBsbrwTqy%2B6R7T7GKmuHQKWlQZ2ZGaMcLfpoUGutHMFoVyilqlk4QHIy21kjTdKgv8o2SRhhQTFpQXYQ73NLSE0NflRszFRJIR%2BolOFGS57Q7psqW6mX6rYj43xP9YEimd%2FZV3kT4Rl2W5Wcg9HljQ3DOjK7R%2BOTDDpOkE1LkaG86bTv%2BmgMxQvtvs32FicfZhFWrDdXQFCmTv%2BgYJ6Yb0XGNoXlXUimH5jDn2f27eu75lgfQW50fajwME5pIpGjRWjJc%2Fr332KE7q%2FoARR6vy%2FfJE8U49vF0SWfZkvRQIZP%2BLXoNTBoXBYtPoKgrHmc7Z4livAMQ9zdB3rCFzvJa%2F7VGxDyo3TQRRTEef%2B9wDhalyHSzbGx5HCgkteMMPm5r0GOqUBykztEy5ko2Ln9TfQkYGj09vkOl8zl2Kayo3Zjr9u3l0Hf1wrriDGCoYV3m1r3EhQq3l4u%2Bo5PYKYCIHVG8dSADI4hkej%2FjxVcW6hUUm9Z9Eqa7HH1TakI1qjrRYnZzx0%2F%2BkmcLglChbuwao7MSLup3uzksErj7TGS%2BX2yTQ39pE65hS0D4MJvIVnXW37m6SyDT6Ck43HO4rFpxNXz4pP4XoHvbss&X-Amz-Signature=e74d406a908c056ef00f6067cf62373525c1db208bfca1dac8cc22c5668542a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ66I22P%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS02brOtBDxA%2Bx5bF1NquwE9sK0I8OcIVnpFzo9NiErAiEAomRqU2LZcKidAdrh85OkzilUzPTz5OEIxOFoAbCqvwMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7YHTQ3NK4pzBYr1SrcAxUJo%2B9kbb9D%2FiuKYcINgCMnyrMMl4b2wpa33%2B4qY8STeURD9RVsTpsz%2BYdOVD%2FzEJ145YoDdNYc47uq%2FQ4ypVPGuH0257A0aXNfWsPn6GCBjoKps0R8bduGCsLjxLiJ%2B39UFZi8m8UuGZNx0s8x7ufRB2SnSHjCL2eFdcfhdN5KrcQ6OUPnKxq3X9Kq3kEJoikBALNy4EibZy46KEnEXroJ4ZWZFdC%2Bse%2F4scdb1cxplF3VbVKTdmkqMZE%2BAHtaWuBsbrwTqy%2B6R7T7GKmuHQKWlQZ2ZGaMcLfpoUGutHMFoVyilqlk4QHIy21kjTdKgv8o2SRhhQTFpQXYQ73NLSE0NflRszFRJIR%2BolOFGS57Q7psqW6mX6rYj43xP9YEimd%2FZV3kT4Rl2W5Wcg9HljQ3DOjK7R%2BOTDDpOkE1LkaG86bTv%2BmgMxQvtvs32FicfZhFWrDdXQFCmTv%2BgYJ6Yb0XGNoXlXUimH5jDn2f27eu75lgfQW50fajwME5pIpGjRWjJc%2Fr332KE7q%2FoARR6vy%2FfJE8U49vF0SWfZkvRQIZP%2BLXoNTBoXBYtPoKgrHmc7Z4livAMQ9zdB3rCFzvJa%2F7VGxDyo3TQRRTEef%2B9wDhalyHSzbGx5HCgkteMMPm5r0GOqUBykztEy5ko2Ln9TfQkYGj09vkOl8zl2Kayo3Zjr9u3l0Hf1wrriDGCoYV3m1r3EhQq3l4u%2Bo5PYKYCIHVG8dSADI4hkej%2FjxVcW6hUUm9Z9Eqa7HH1TakI1qjrRYnZzx0%2F%2BkmcLglChbuwao7MSLup3uzksErj7TGS%2BX2yTQ39pE65hS0D4MJvIVnXW37m6SyDT6Ck43HO4rFpxNXz4pP4XoHvbss&X-Amz-Signature=dbabbdc2ba538a91626b8c8a68c2f99f649742260eab318ea4759be683dafc01&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ66I22P%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS02brOtBDxA%2Bx5bF1NquwE9sK0I8OcIVnpFzo9NiErAiEAomRqU2LZcKidAdrh85OkzilUzPTz5OEIxOFoAbCqvwMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7YHTQ3NK4pzBYr1SrcAxUJo%2B9kbb9D%2FiuKYcINgCMnyrMMl4b2wpa33%2B4qY8STeURD9RVsTpsz%2BYdOVD%2FzEJ145YoDdNYc47uq%2FQ4ypVPGuH0257A0aXNfWsPn6GCBjoKps0R8bduGCsLjxLiJ%2B39UFZi8m8UuGZNx0s8x7ufRB2SnSHjCL2eFdcfhdN5KrcQ6OUPnKxq3X9Kq3kEJoikBALNy4EibZy46KEnEXroJ4ZWZFdC%2Bse%2F4scdb1cxplF3VbVKTdmkqMZE%2BAHtaWuBsbrwTqy%2B6R7T7GKmuHQKWlQZ2ZGaMcLfpoUGutHMFoVyilqlk4QHIy21kjTdKgv8o2SRhhQTFpQXYQ73NLSE0NflRszFRJIR%2BolOFGS57Q7psqW6mX6rYj43xP9YEimd%2FZV3kT4Rl2W5Wcg9HljQ3DOjK7R%2BOTDDpOkE1LkaG86bTv%2BmgMxQvtvs32FicfZhFWrDdXQFCmTv%2BgYJ6Yb0XGNoXlXUimH5jDn2f27eu75lgfQW50fajwME5pIpGjRWjJc%2Fr332KE7q%2FoARR6vy%2FfJE8U49vF0SWfZkvRQIZP%2BLXoNTBoXBYtPoKgrHmc7Z4livAMQ9zdB3rCFzvJa%2F7VGxDyo3TQRRTEef%2B9wDhalyHSzbGx5HCgkteMMPm5r0GOqUBykztEy5ko2Ln9TfQkYGj09vkOl8zl2Kayo3Zjr9u3l0Hf1wrriDGCoYV3m1r3EhQq3l4u%2Bo5PYKYCIHVG8dSADI4hkej%2FjxVcW6hUUm9Z9Eqa7HH1TakI1qjrRYnZzx0%2F%2BkmcLglChbuwao7MSLup3uzksErj7TGS%2BX2yTQ39pE65hS0D4MJvIVnXW37m6SyDT6Ck43HO4rFpxNXz4pP4XoHvbss&X-Amz-Signature=1e7ed8eab68f97693eb2c7564dbe7071cb0b65662c3fa56d64af9f01b17a24ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ66I22P%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS02brOtBDxA%2Bx5bF1NquwE9sK0I8OcIVnpFzo9NiErAiEAomRqU2LZcKidAdrh85OkzilUzPTz5OEIxOFoAbCqvwMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7YHTQ3NK4pzBYr1SrcAxUJo%2B9kbb9D%2FiuKYcINgCMnyrMMl4b2wpa33%2B4qY8STeURD9RVsTpsz%2BYdOVD%2FzEJ145YoDdNYc47uq%2FQ4ypVPGuH0257A0aXNfWsPn6GCBjoKps0R8bduGCsLjxLiJ%2B39UFZi8m8UuGZNx0s8x7ufRB2SnSHjCL2eFdcfhdN5KrcQ6OUPnKxq3X9Kq3kEJoikBALNy4EibZy46KEnEXroJ4ZWZFdC%2Bse%2F4scdb1cxplF3VbVKTdmkqMZE%2BAHtaWuBsbrwTqy%2B6R7T7GKmuHQKWlQZ2ZGaMcLfpoUGutHMFoVyilqlk4QHIy21kjTdKgv8o2SRhhQTFpQXYQ73NLSE0NflRszFRJIR%2BolOFGS57Q7psqW6mX6rYj43xP9YEimd%2FZV3kT4Rl2W5Wcg9HljQ3DOjK7R%2BOTDDpOkE1LkaG86bTv%2BmgMxQvtvs32FicfZhFWrDdXQFCmTv%2BgYJ6Yb0XGNoXlXUimH5jDn2f27eu75lgfQW50fajwME5pIpGjRWjJc%2Fr332KE7q%2FoARR6vy%2FfJE8U49vF0SWfZkvRQIZP%2BLXoNTBoXBYtPoKgrHmc7Z4livAMQ9zdB3rCFzvJa%2F7VGxDyo3TQRRTEef%2B9wDhalyHSzbGx5HCgkteMMPm5r0GOqUBykztEy5ko2Ln9TfQkYGj09vkOl8zl2Kayo3Zjr9u3l0Hf1wrriDGCoYV3m1r3EhQq3l4u%2Bo5PYKYCIHVG8dSADI4hkej%2FjxVcW6hUUm9Z9Eqa7HH1TakI1qjrRYnZzx0%2F%2BkmcLglChbuwao7MSLup3uzksErj7TGS%2BX2yTQ39pE65hS0D4MJvIVnXW37m6SyDT6Ck43HO4rFpxNXz4pP4XoHvbss&X-Amz-Signature=677cfcda54d6661edb4fd4556294c64a9de5ab8e8dc305d77f54a5ae35d05e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ66I22P%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS02brOtBDxA%2Bx5bF1NquwE9sK0I8OcIVnpFzo9NiErAiEAomRqU2LZcKidAdrh85OkzilUzPTz5OEIxOFoAbCqvwMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7YHTQ3NK4pzBYr1SrcAxUJo%2B9kbb9D%2FiuKYcINgCMnyrMMl4b2wpa33%2B4qY8STeURD9RVsTpsz%2BYdOVD%2FzEJ145YoDdNYc47uq%2FQ4ypVPGuH0257A0aXNfWsPn6GCBjoKps0R8bduGCsLjxLiJ%2B39UFZi8m8UuGZNx0s8x7ufRB2SnSHjCL2eFdcfhdN5KrcQ6OUPnKxq3X9Kq3kEJoikBALNy4EibZy46KEnEXroJ4ZWZFdC%2Bse%2F4scdb1cxplF3VbVKTdmkqMZE%2BAHtaWuBsbrwTqy%2B6R7T7GKmuHQKWlQZ2ZGaMcLfpoUGutHMFoVyilqlk4QHIy21kjTdKgv8o2SRhhQTFpQXYQ73NLSE0NflRszFRJIR%2BolOFGS57Q7psqW6mX6rYj43xP9YEimd%2FZV3kT4Rl2W5Wcg9HljQ3DOjK7R%2BOTDDpOkE1LkaG86bTv%2BmgMxQvtvs32FicfZhFWrDdXQFCmTv%2BgYJ6Yb0XGNoXlXUimH5jDn2f27eu75lgfQW50fajwME5pIpGjRWjJc%2Fr332KE7q%2FoARR6vy%2FfJE8U49vF0SWfZkvRQIZP%2BLXoNTBoXBYtPoKgrHmc7Z4livAMQ9zdB3rCFzvJa%2F7VGxDyo3TQRRTEef%2B9wDhalyHSzbGx5HCgkteMMPm5r0GOqUBykztEy5ko2Ln9TfQkYGj09vkOl8zl2Kayo3Zjr9u3l0Hf1wrriDGCoYV3m1r3EhQq3l4u%2Bo5PYKYCIHVG8dSADI4hkej%2FjxVcW6hUUm9Z9Eqa7HH1TakI1qjrRYnZzx0%2F%2BkmcLglChbuwao7MSLup3uzksErj7TGS%2BX2yTQ39pE65hS0D4MJvIVnXW37m6SyDT6Ck43HO4rFpxNXz4pP4XoHvbss&X-Amz-Signature=1876b994e6a35654fb3e16015d862816b998ec60d286ca7f7ba6614fed1ec166&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
