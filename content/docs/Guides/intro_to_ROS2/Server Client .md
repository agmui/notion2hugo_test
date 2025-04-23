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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFB74GY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAiVH5XVwIBDBk6XnnDmV1yWUDS1c07xfWY8fX83ZRXgAiBE0HeDzHwA80ByNI%2BpmDlcxgid5EV%2BHlGXrBI4dK2dECqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebZx9muSLYsaNUpSKtwDO7NKOz5pro8U9nRNBks3M84H%2FcRnbLxuBULMrVNWfbWDKSZMWSzen7lWLZwSsCcvyDvCjJMQMfE93e0cm%2BmjQN59SNZ36YzYWJG87mThdvMV3xnjRaC1Nvk53cUN%2BaXBOPqoRSZSvapF4TxrN0kn7krEqxjuKDyjwq26mLM0ueKb3%2BgL4EYvCsp2v0Z7xiJ7vaQiQEfYOYE8OGbpF4jYDI%2B%2BEJ9S%2FUFbiIxs%2B778aqwk9olKJPofPB%2Fzlf5%2BKT8hJGQ6vqKhjqCLE5okP7ElnBzVvERNQpO%2BAtMZJEP9%2BK%2FbjUmtpc3xLPiIUA83TZHjAOkgvNH4h9wq%2BYGGTBORcnEYcHxVn7xB6ZBEVqJaOsTrbCqY42jjWbhHLXY1wdRFIvCNY3R%2FdnrfYMTGh%2FzNf5rqxFfVWUelb8FTT8vBjZLDeHtFibv00lKNMYIMYo2nYiqEV0PfRClcceBroKH6oQyo6bo8ZjsE%2Fw6OreOBZ%2FJ8Y0j6muQaZJGnktHmyUOexbgb%2F0uy7Bn3%2Bd1%2BRBFKAyKCCew%2FOkLTb%2F1qsKmhBjQykxRPK4BnFj%2F%2FtzpXsavgS58H4odxJ5SJ17vAyyF3fOzgKONZh9OKej157lTDrulFGOYxA5D93fJMcsEwycaiwAY6pgHvtXu71u65ZVl26Q88ZEQWdEYe3RpkanpYhVegZMOPCavY7sdtA7iDk3ZnWOKmDj43LewUtcxcakhFau2sgfdq%2BH5HROap5GhiPko4D%2FNayKY7PxzObZbfn6xF1XN9C%2BTuo5X%2BLsodxIHGQxvwwd%2B58fT5Nvvm7Y7mBx%2Bwq99%2FEbDhUyjVmmkpq80Gbc2Gx7%2BJEKUIiKpR4MreUl6cFDhuytVovWZq&X-Amz-Signature=bff994164c7c93aeb63de79f9632079515e2b6df23eb9d828404d6af0a6adb30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFB74GY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAiVH5XVwIBDBk6XnnDmV1yWUDS1c07xfWY8fX83ZRXgAiBE0HeDzHwA80ByNI%2BpmDlcxgid5EV%2BHlGXrBI4dK2dECqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebZx9muSLYsaNUpSKtwDO7NKOz5pro8U9nRNBks3M84H%2FcRnbLxuBULMrVNWfbWDKSZMWSzen7lWLZwSsCcvyDvCjJMQMfE93e0cm%2BmjQN59SNZ36YzYWJG87mThdvMV3xnjRaC1Nvk53cUN%2BaXBOPqoRSZSvapF4TxrN0kn7krEqxjuKDyjwq26mLM0ueKb3%2BgL4EYvCsp2v0Z7xiJ7vaQiQEfYOYE8OGbpF4jYDI%2B%2BEJ9S%2FUFbiIxs%2B778aqwk9olKJPofPB%2Fzlf5%2BKT8hJGQ6vqKhjqCLE5okP7ElnBzVvERNQpO%2BAtMZJEP9%2BK%2FbjUmtpc3xLPiIUA83TZHjAOkgvNH4h9wq%2BYGGTBORcnEYcHxVn7xB6ZBEVqJaOsTrbCqY42jjWbhHLXY1wdRFIvCNY3R%2FdnrfYMTGh%2FzNf5rqxFfVWUelb8FTT8vBjZLDeHtFibv00lKNMYIMYo2nYiqEV0PfRClcceBroKH6oQyo6bo8ZjsE%2Fw6OreOBZ%2FJ8Y0j6muQaZJGnktHmyUOexbgb%2F0uy7Bn3%2Bd1%2BRBFKAyKCCew%2FOkLTb%2F1qsKmhBjQykxRPK4BnFj%2F%2FtzpXsavgS58H4odxJ5SJ17vAyyF3fOzgKONZh9OKej157lTDrulFGOYxA5D93fJMcsEwycaiwAY6pgHvtXu71u65ZVl26Q88ZEQWdEYe3RpkanpYhVegZMOPCavY7sdtA7iDk3ZnWOKmDj43LewUtcxcakhFau2sgfdq%2BH5HROap5GhiPko4D%2FNayKY7PxzObZbfn6xF1XN9C%2BTuo5X%2BLsodxIHGQxvwwd%2B58fT5Nvvm7Y7mBx%2Bwq99%2FEbDhUyjVmmkpq80Gbc2Gx7%2BJEKUIiKpR4MreUl6cFDhuytVovWZq&X-Amz-Signature=798c20ac572909964ad5744a0b1eeb503ffc720514152bb43a39e06348233c28&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFB74GY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAiVH5XVwIBDBk6XnnDmV1yWUDS1c07xfWY8fX83ZRXgAiBE0HeDzHwA80ByNI%2BpmDlcxgid5EV%2BHlGXrBI4dK2dECqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebZx9muSLYsaNUpSKtwDO7NKOz5pro8U9nRNBks3M84H%2FcRnbLxuBULMrVNWfbWDKSZMWSzen7lWLZwSsCcvyDvCjJMQMfE93e0cm%2BmjQN59SNZ36YzYWJG87mThdvMV3xnjRaC1Nvk53cUN%2BaXBOPqoRSZSvapF4TxrN0kn7krEqxjuKDyjwq26mLM0ueKb3%2BgL4EYvCsp2v0Z7xiJ7vaQiQEfYOYE8OGbpF4jYDI%2B%2BEJ9S%2FUFbiIxs%2B778aqwk9olKJPofPB%2Fzlf5%2BKT8hJGQ6vqKhjqCLE5okP7ElnBzVvERNQpO%2BAtMZJEP9%2BK%2FbjUmtpc3xLPiIUA83TZHjAOkgvNH4h9wq%2BYGGTBORcnEYcHxVn7xB6ZBEVqJaOsTrbCqY42jjWbhHLXY1wdRFIvCNY3R%2FdnrfYMTGh%2FzNf5rqxFfVWUelb8FTT8vBjZLDeHtFibv00lKNMYIMYo2nYiqEV0PfRClcceBroKH6oQyo6bo8ZjsE%2Fw6OreOBZ%2FJ8Y0j6muQaZJGnktHmyUOexbgb%2F0uy7Bn3%2Bd1%2BRBFKAyKCCew%2FOkLTb%2F1qsKmhBjQykxRPK4BnFj%2F%2FtzpXsavgS58H4odxJ5SJ17vAyyF3fOzgKONZh9OKej157lTDrulFGOYxA5D93fJMcsEwycaiwAY6pgHvtXu71u65ZVl26Q88ZEQWdEYe3RpkanpYhVegZMOPCavY7sdtA7iDk3ZnWOKmDj43LewUtcxcakhFau2sgfdq%2BH5HROap5GhiPko4D%2FNayKY7PxzObZbfn6xF1XN9C%2BTuo5X%2BLsodxIHGQxvwwd%2B58fT5Nvvm7Y7mBx%2Bwq99%2FEbDhUyjVmmkpq80Gbc2Gx7%2BJEKUIiKpR4MreUl6cFDhuytVovWZq&X-Amz-Signature=27b733dbaff71bbe029c212e3b7c62fe8b97ce9aa63cddf5c5a079adbbafe7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFB74GY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAiVH5XVwIBDBk6XnnDmV1yWUDS1c07xfWY8fX83ZRXgAiBE0HeDzHwA80ByNI%2BpmDlcxgid5EV%2BHlGXrBI4dK2dECqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebZx9muSLYsaNUpSKtwDO7NKOz5pro8U9nRNBks3M84H%2FcRnbLxuBULMrVNWfbWDKSZMWSzen7lWLZwSsCcvyDvCjJMQMfE93e0cm%2BmjQN59SNZ36YzYWJG87mThdvMV3xnjRaC1Nvk53cUN%2BaXBOPqoRSZSvapF4TxrN0kn7krEqxjuKDyjwq26mLM0ueKb3%2BgL4EYvCsp2v0Z7xiJ7vaQiQEfYOYE8OGbpF4jYDI%2B%2BEJ9S%2FUFbiIxs%2B778aqwk9olKJPofPB%2Fzlf5%2BKT8hJGQ6vqKhjqCLE5okP7ElnBzVvERNQpO%2BAtMZJEP9%2BK%2FbjUmtpc3xLPiIUA83TZHjAOkgvNH4h9wq%2BYGGTBORcnEYcHxVn7xB6ZBEVqJaOsTrbCqY42jjWbhHLXY1wdRFIvCNY3R%2FdnrfYMTGh%2FzNf5rqxFfVWUelb8FTT8vBjZLDeHtFibv00lKNMYIMYo2nYiqEV0PfRClcceBroKH6oQyo6bo8ZjsE%2Fw6OreOBZ%2FJ8Y0j6muQaZJGnktHmyUOexbgb%2F0uy7Bn3%2Bd1%2BRBFKAyKCCew%2FOkLTb%2F1qsKmhBjQykxRPK4BnFj%2F%2FtzpXsavgS58H4odxJ5SJ17vAyyF3fOzgKONZh9OKej157lTDrulFGOYxA5D93fJMcsEwycaiwAY6pgHvtXu71u65ZVl26Q88ZEQWdEYe3RpkanpYhVegZMOPCavY7sdtA7iDk3ZnWOKmDj43LewUtcxcakhFau2sgfdq%2BH5HROap5GhiPko4D%2FNayKY7PxzObZbfn6xF1XN9C%2BTuo5X%2BLsodxIHGQxvwwd%2B58fT5Nvvm7Y7mBx%2Bwq99%2FEbDhUyjVmmkpq80Gbc2Gx7%2BJEKUIiKpR4MreUl6cFDhuytVovWZq&X-Amz-Signature=1b7b157bdde2387c6b4a316a0849dd0457113b7bb89b2492daa6f134166560c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFB74GY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAiVH5XVwIBDBk6XnnDmV1yWUDS1c07xfWY8fX83ZRXgAiBE0HeDzHwA80ByNI%2BpmDlcxgid5EV%2BHlGXrBI4dK2dECqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebZx9muSLYsaNUpSKtwDO7NKOz5pro8U9nRNBks3M84H%2FcRnbLxuBULMrVNWfbWDKSZMWSzen7lWLZwSsCcvyDvCjJMQMfE93e0cm%2BmjQN59SNZ36YzYWJG87mThdvMV3xnjRaC1Nvk53cUN%2BaXBOPqoRSZSvapF4TxrN0kn7krEqxjuKDyjwq26mLM0ueKb3%2BgL4EYvCsp2v0Z7xiJ7vaQiQEfYOYE8OGbpF4jYDI%2B%2BEJ9S%2FUFbiIxs%2B778aqwk9olKJPofPB%2Fzlf5%2BKT8hJGQ6vqKhjqCLE5okP7ElnBzVvERNQpO%2BAtMZJEP9%2BK%2FbjUmtpc3xLPiIUA83TZHjAOkgvNH4h9wq%2BYGGTBORcnEYcHxVn7xB6ZBEVqJaOsTrbCqY42jjWbhHLXY1wdRFIvCNY3R%2FdnrfYMTGh%2FzNf5rqxFfVWUelb8FTT8vBjZLDeHtFibv00lKNMYIMYo2nYiqEV0PfRClcceBroKH6oQyo6bo8ZjsE%2Fw6OreOBZ%2FJ8Y0j6muQaZJGnktHmyUOexbgb%2F0uy7Bn3%2Bd1%2BRBFKAyKCCew%2FOkLTb%2F1qsKmhBjQykxRPK4BnFj%2F%2FtzpXsavgS58H4odxJ5SJ17vAyyF3fOzgKONZh9OKej157lTDrulFGOYxA5D93fJMcsEwycaiwAY6pgHvtXu71u65ZVl26Q88ZEQWdEYe3RpkanpYhVegZMOPCavY7sdtA7iDk3ZnWOKmDj43LewUtcxcakhFau2sgfdq%2BH5HROap5GhiPko4D%2FNayKY7PxzObZbfn6xF1XN9C%2BTuo5X%2BLsodxIHGQxvwwd%2B58fT5Nvvm7Y7mBx%2Bwq99%2FEbDhUyjVmmkpq80Gbc2Gx7%2BJEKUIiKpR4MreUl6cFDhuytVovWZq&X-Amz-Signature=234eece18eae7c8dd63fcb94cd3e5f4442bea410aa11fd8d3165c8353c38dbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
