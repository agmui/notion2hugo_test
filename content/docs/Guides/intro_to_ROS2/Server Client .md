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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GI2KX6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG92tvRHHtn39Sp%2FAY2CS13sNNT5ohrxRkxh5tRlcKS4AiEAzPCNLXuemEXqVmHsUlji5lxC7rKWG2DLgnPbCDxiNeQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDnav3stvGFm46OpfircA5dzjwLC1gDAzvjLN7ekt6uHhJZz5zYNY3J8rq20S48%2BmuZniMutftcP8ovaTZIFo93IbUoX%2BqT90TSTiQ7lbzGUO3fs9TJNZ8i8DoJQstHOXoOCtsxTRN1akc1HcPadSLELAycDtBWBBeDTNmdIU%2FHv4Jo8tD8Wh0GzidLj6J6EgytSZl%2FjtKMhFT6dDe%2BHNQjEYFovHV3XVNnhHzpVCw4oRaO7uDVf0k7kuCgR3mg0Sj6xxRAeQDrrwV5RRCi%2BZxur3%2FS3CDpGYziABYh%2Bx%2Bnjq9VjxYMwxIJ%2BrQcE2%2BbFWsOY4tRskU%2Fp8ExPzntTej6IB2ANi8pc9gC86ghPx6CiI38sy0jlRixyFBRkElJ4wlijXqKpdDYhgMY9EeaU%2F1ZdygB2zM8pLnoNMzBI6GCnfAxYl766azxzftaTam7TcCpXkEpW6DLKmKd1dq2MDLbYTAW7f5A7wjaevIT3XYaCx8vPy9MKTO9dFsD3XAeUW5IPye7stnzC6EO9uTjsTrOsz0yIUqagDatTX79aKpqCWOoJuRRyjaBlQTwBKMBkg89hGEtjKnAob6X%2Bvgi91ZNRYg9qzF19sozuxrAz0f6RwtHHIXryWuuG%2FD1R%2BZ27EWCRmUJ1Os9nVs90MNigl8EGOqUBKg2NCz27BBqlp8Bd7TkOtZtue5JmJCissP8HNjNwClbqmd99Jr1d3cvzxF17%2BOAFEtZLlscqiO7%2FXbroHRCekYgWK8XTYFqOrnzJY5vAD3sls8GBzjsufoSwpVsx5q40t7QpZvYiMNLyqRP4XzovzzGvUKuRvatRReDFWg0IBawN8tfJh7%2Bj4Mjx96b9M9JeL1jK6BsslFPiVs4zswnMrSI9zmjN&X-Amz-Signature=27473136bf2bd81d17acbf9d926ef1e5ee2298cd7e1c862355786d8a26e8ca0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GI2KX6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG92tvRHHtn39Sp%2FAY2CS13sNNT5ohrxRkxh5tRlcKS4AiEAzPCNLXuemEXqVmHsUlji5lxC7rKWG2DLgnPbCDxiNeQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDnav3stvGFm46OpfircA5dzjwLC1gDAzvjLN7ekt6uHhJZz5zYNY3J8rq20S48%2BmuZniMutftcP8ovaTZIFo93IbUoX%2BqT90TSTiQ7lbzGUO3fs9TJNZ8i8DoJQstHOXoOCtsxTRN1akc1HcPadSLELAycDtBWBBeDTNmdIU%2FHv4Jo8tD8Wh0GzidLj6J6EgytSZl%2FjtKMhFT6dDe%2BHNQjEYFovHV3XVNnhHzpVCw4oRaO7uDVf0k7kuCgR3mg0Sj6xxRAeQDrrwV5RRCi%2BZxur3%2FS3CDpGYziABYh%2Bx%2Bnjq9VjxYMwxIJ%2BrQcE2%2BbFWsOY4tRskU%2Fp8ExPzntTej6IB2ANi8pc9gC86ghPx6CiI38sy0jlRixyFBRkElJ4wlijXqKpdDYhgMY9EeaU%2F1ZdygB2zM8pLnoNMzBI6GCnfAxYl766azxzftaTam7TcCpXkEpW6DLKmKd1dq2MDLbYTAW7f5A7wjaevIT3XYaCx8vPy9MKTO9dFsD3XAeUW5IPye7stnzC6EO9uTjsTrOsz0yIUqagDatTX79aKpqCWOoJuRRyjaBlQTwBKMBkg89hGEtjKnAob6X%2Bvgi91ZNRYg9qzF19sozuxrAz0f6RwtHHIXryWuuG%2FD1R%2BZ27EWCRmUJ1Os9nVs90MNigl8EGOqUBKg2NCz27BBqlp8Bd7TkOtZtue5JmJCissP8HNjNwClbqmd99Jr1d3cvzxF17%2BOAFEtZLlscqiO7%2FXbroHRCekYgWK8XTYFqOrnzJY5vAD3sls8GBzjsufoSwpVsx5q40t7QpZvYiMNLyqRP4XzovzzGvUKuRvatRReDFWg0IBawN8tfJh7%2Bj4Mjx96b9M9JeL1jK6BsslFPiVs4zswnMrSI9zmjN&X-Amz-Signature=8e6dc7a0f282e890caf3912fae2e4cc209e194288a45a10839ca02a8db56254a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GI2KX6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG92tvRHHtn39Sp%2FAY2CS13sNNT5ohrxRkxh5tRlcKS4AiEAzPCNLXuemEXqVmHsUlji5lxC7rKWG2DLgnPbCDxiNeQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDnav3stvGFm46OpfircA5dzjwLC1gDAzvjLN7ekt6uHhJZz5zYNY3J8rq20S48%2BmuZniMutftcP8ovaTZIFo93IbUoX%2BqT90TSTiQ7lbzGUO3fs9TJNZ8i8DoJQstHOXoOCtsxTRN1akc1HcPadSLELAycDtBWBBeDTNmdIU%2FHv4Jo8tD8Wh0GzidLj6J6EgytSZl%2FjtKMhFT6dDe%2BHNQjEYFovHV3XVNnhHzpVCw4oRaO7uDVf0k7kuCgR3mg0Sj6xxRAeQDrrwV5RRCi%2BZxur3%2FS3CDpGYziABYh%2Bx%2Bnjq9VjxYMwxIJ%2BrQcE2%2BbFWsOY4tRskU%2Fp8ExPzntTej6IB2ANi8pc9gC86ghPx6CiI38sy0jlRixyFBRkElJ4wlijXqKpdDYhgMY9EeaU%2F1ZdygB2zM8pLnoNMzBI6GCnfAxYl766azxzftaTam7TcCpXkEpW6DLKmKd1dq2MDLbYTAW7f5A7wjaevIT3XYaCx8vPy9MKTO9dFsD3XAeUW5IPye7stnzC6EO9uTjsTrOsz0yIUqagDatTX79aKpqCWOoJuRRyjaBlQTwBKMBkg89hGEtjKnAob6X%2Bvgi91ZNRYg9qzF19sozuxrAz0f6RwtHHIXryWuuG%2FD1R%2BZ27EWCRmUJ1Os9nVs90MNigl8EGOqUBKg2NCz27BBqlp8Bd7TkOtZtue5JmJCissP8HNjNwClbqmd99Jr1d3cvzxF17%2BOAFEtZLlscqiO7%2FXbroHRCekYgWK8XTYFqOrnzJY5vAD3sls8GBzjsufoSwpVsx5q40t7QpZvYiMNLyqRP4XzovzzGvUKuRvatRReDFWg0IBawN8tfJh7%2Bj4Mjx96b9M9JeL1jK6BsslFPiVs4zswnMrSI9zmjN&X-Amz-Signature=883112938bf50886ea3110adf854b5f11b581c6e3919a0aac9ce187ee3f4f835&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GI2KX6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG92tvRHHtn39Sp%2FAY2CS13sNNT5ohrxRkxh5tRlcKS4AiEAzPCNLXuemEXqVmHsUlji5lxC7rKWG2DLgnPbCDxiNeQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDnav3stvGFm46OpfircA5dzjwLC1gDAzvjLN7ekt6uHhJZz5zYNY3J8rq20S48%2BmuZniMutftcP8ovaTZIFo93IbUoX%2BqT90TSTiQ7lbzGUO3fs9TJNZ8i8DoJQstHOXoOCtsxTRN1akc1HcPadSLELAycDtBWBBeDTNmdIU%2FHv4Jo8tD8Wh0GzidLj6J6EgytSZl%2FjtKMhFT6dDe%2BHNQjEYFovHV3XVNnhHzpVCw4oRaO7uDVf0k7kuCgR3mg0Sj6xxRAeQDrrwV5RRCi%2BZxur3%2FS3CDpGYziABYh%2Bx%2Bnjq9VjxYMwxIJ%2BrQcE2%2BbFWsOY4tRskU%2Fp8ExPzntTej6IB2ANi8pc9gC86ghPx6CiI38sy0jlRixyFBRkElJ4wlijXqKpdDYhgMY9EeaU%2F1ZdygB2zM8pLnoNMzBI6GCnfAxYl766azxzftaTam7TcCpXkEpW6DLKmKd1dq2MDLbYTAW7f5A7wjaevIT3XYaCx8vPy9MKTO9dFsD3XAeUW5IPye7stnzC6EO9uTjsTrOsz0yIUqagDatTX79aKpqCWOoJuRRyjaBlQTwBKMBkg89hGEtjKnAob6X%2Bvgi91ZNRYg9qzF19sozuxrAz0f6RwtHHIXryWuuG%2FD1R%2BZ27EWCRmUJ1Os9nVs90MNigl8EGOqUBKg2NCz27BBqlp8Bd7TkOtZtue5JmJCissP8HNjNwClbqmd99Jr1d3cvzxF17%2BOAFEtZLlscqiO7%2FXbroHRCekYgWK8XTYFqOrnzJY5vAD3sls8GBzjsufoSwpVsx5q40t7QpZvYiMNLyqRP4XzovzzGvUKuRvatRReDFWg0IBawN8tfJh7%2Bj4Mjx96b9M9JeL1jK6BsslFPiVs4zswnMrSI9zmjN&X-Amz-Signature=1dd22d61adf397ef4701ff1a2067ce6e7c01e08945049510aee87bd785291e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GI2KX6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIG92tvRHHtn39Sp%2FAY2CS13sNNT5ohrxRkxh5tRlcKS4AiEAzPCNLXuemEXqVmHsUlji5lxC7rKWG2DLgnPbCDxiNeQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDnav3stvGFm46OpfircA5dzjwLC1gDAzvjLN7ekt6uHhJZz5zYNY3J8rq20S48%2BmuZniMutftcP8ovaTZIFo93IbUoX%2BqT90TSTiQ7lbzGUO3fs9TJNZ8i8DoJQstHOXoOCtsxTRN1akc1HcPadSLELAycDtBWBBeDTNmdIU%2FHv4Jo8tD8Wh0GzidLj6J6EgytSZl%2FjtKMhFT6dDe%2BHNQjEYFovHV3XVNnhHzpVCw4oRaO7uDVf0k7kuCgR3mg0Sj6xxRAeQDrrwV5RRCi%2BZxur3%2FS3CDpGYziABYh%2Bx%2Bnjq9VjxYMwxIJ%2BrQcE2%2BbFWsOY4tRskU%2Fp8ExPzntTej6IB2ANi8pc9gC86ghPx6CiI38sy0jlRixyFBRkElJ4wlijXqKpdDYhgMY9EeaU%2F1ZdygB2zM8pLnoNMzBI6GCnfAxYl766azxzftaTam7TcCpXkEpW6DLKmKd1dq2MDLbYTAW7f5A7wjaevIT3XYaCx8vPy9MKTO9dFsD3XAeUW5IPye7stnzC6EO9uTjsTrOsz0yIUqagDatTX79aKpqCWOoJuRRyjaBlQTwBKMBkg89hGEtjKnAob6X%2Bvgi91ZNRYg9qzF19sozuxrAz0f6RwtHHIXryWuuG%2FD1R%2BZ27EWCRmUJ1Os9nVs90MNigl8EGOqUBKg2NCz27BBqlp8Bd7TkOtZtue5JmJCissP8HNjNwClbqmd99Jr1d3cvzxF17%2BOAFEtZLlscqiO7%2FXbroHRCekYgWK8XTYFqOrnzJY5vAD3sls8GBzjsufoSwpVsx5q40t7QpZvYiMNLyqRP4XzovzzGvUKuRvatRReDFWg0IBawN8tfJh7%2Bj4Mjx96b9M9JeL1jK6BsslFPiVs4zswnMrSI9zmjN&X-Amz-Signature=d75797eb0d0b385c95f6b49d18ce3abf40d595d3f7f5208883d29aabb32e30c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
