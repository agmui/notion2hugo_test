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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMSU4ZE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnYbRuO3w%2BeY5kkbpTkJgr02vLoDk0PWMlxlaL%2B7036AiEAlRGkkXN87j%2BR4Rx2%2B9hsG72fp9dCAl20q1l3xaKKzpYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOowytVK3gWnHHZpgyrcA6%2FQaxN0QGNcLonCXtLU4HzITeHbnjwuQJVaAYylJ3nrchiu4isMPmMu00%2Bxzw5HzmG65yWkAU%2F76OqBrR1FGRhHSHpjVyqaD3yCXYvHuSqmEPEF5iSqcgDEepocxApAXQYIlLft2ROBTrmqpkKsZ%2Be%2BKDgAFE9rO%2FhSWTlFs802yioHARhdvo6wiLF%2B0rIEWhq0CNzrELy0plHcS7KjGC46y1r38owpUJqU9VYC5FZbeFvi5oc6pYEU50wpxiNJPG1v%2B1fGu8GvhXjitAKck%2Fgo9K5DcUi8KLURYYDCawx675s6ChQGce2ar7nWd6EjAO%2BzuPg%2BvtRiTEFQD4y9JOVtIY6ZiAlWjxE2dhu5zhNe0mpFjbmJJEYMeURy%2Flj2IzpEGCMcOP038QQCnWXzGGjGJ9XpY%2BdSuW4h4ineGM64%2Bg7s8ENO4ZzG4riwIkXQiqXuJ6%2Fw0c9RBp58wmUCwJkIC9IgVUeGxemXvUpXAim8avJD16kSKlKJco4k%2BUaHZRpcmrvn9%2F8u2%2FqzNPMTpXyOpYGPnWio4vkVh3wzHXl7LWbo1RhuI5S%2BQQkMOPjFLURAmQXjz4xbBI4OG1Hbf2uM0OoGKaudbQICHUxlDAOV%2B%2FZYgqwX3ZgKB06QML6KusAGOqUBWjf5NpdHSSkn%2Bm%2Ba0ryTOcDzB%2FcKkrXExYRsuMdOsX09hVGXQ1eFa36edYjQ7VU%2BcKMCmr7LopDFcoDpfEby7iLWS5fk5NoPyX3cpD5xkPan0Y1ro1XSI53H1d9I1ogZyTx7w93LogcjbPNZqxyvfxVULvLJsOwA5Tbwll2v8YmXhAwhN%2Fc30IIf%2FQ29KrW3oZKqlO1p8q8a5D7RnN8fVsll3S0X&X-Amz-Signature=a7f286bc4de51b9df14da8f8e84e420bf4d9d8bea81c34a9f589d420b5479d76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMSU4ZE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnYbRuO3w%2BeY5kkbpTkJgr02vLoDk0PWMlxlaL%2B7036AiEAlRGkkXN87j%2BR4Rx2%2B9hsG72fp9dCAl20q1l3xaKKzpYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOowytVK3gWnHHZpgyrcA6%2FQaxN0QGNcLonCXtLU4HzITeHbnjwuQJVaAYylJ3nrchiu4isMPmMu00%2Bxzw5HzmG65yWkAU%2F76OqBrR1FGRhHSHpjVyqaD3yCXYvHuSqmEPEF5iSqcgDEepocxApAXQYIlLft2ROBTrmqpkKsZ%2Be%2BKDgAFE9rO%2FhSWTlFs802yioHARhdvo6wiLF%2B0rIEWhq0CNzrELy0plHcS7KjGC46y1r38owpUJqU9VYC5FZbeFvi5oc6pYEU50wpxiNJPG1v%2B1fGu8GvhXjitAKck%2Fgo9K5DcUi8KLURYYDCawx675s6ChQGce2ar7nWd6EjAO%2BzuPg%2BvtRiTEFQD4y9JOVtIY6ZiAlWjxE2dhu5zhNe0mpFjbmJJEYMeURy%2Flj2IzpEGCMcOP038QQCnWXzGGjGJ9XpY%2BdSuW4h4ineGM64%2Bg7s8ENO4ZzG4riwIkXQiqXuJ6%2Fw0c9RBp58wmUCwJkIC9IgVUeGxemXvUpXAim8avJD16kSKlKJco4k%2BUaHZRpcmrvn9%2F8u2%2FqzNPMTpXyOpYGPnWio4vkVh3wzHXl7LWbo1RhuI5S%2BQQkMOPjFLURAmQXjz4xbBI4OG1Hbf2uM0OoGKaudbQICHUxlDAOV%2B%2FZYgqwX3ZgKB06QML6KusAGOqUBWjf5NpdHSSkn%2Bm%2Ba0ryTOcDzB%2FcKkrXExYRsuMdOsX09hVGXQ1eFa36edYjQ7VU%2BcKMCmr7LopDFcoDpfEby7iLWS5fk5NoPyX3cpD5xkPan0Y1ro1XSI53H1d9I1ogZyTx7w93LogcjbPNZqxyvfxVULvLJsOwA5Tbwll2v8YmXhAwhN%2Fc30IIf%2FQ29KrW3oZKqlO1p8q8a5D7RnN8fVsll3S0X&X-Amz-Signature=39cc2d73b1127a6eace2ad7038ea3e27e4e5205b54c12203cba0b5e5dbedde52&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMSU4ZE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnYbRuO3w%2BeY5kkbpTkJgr02vLoDk0PWMlxlaL%2B7036AiEAlRGkkXN87j%2BR4Rx2%2B9hsG72fp9dCAl20q1l3xaKKzpYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOowytVK3gWnHHZpgyrcA6%2FQaxN0QGNcLonCXtLU4HzITeHbnjwuQJVaAYylJ3nrchiu4isMPmMu00%2Bxzw5HzmG65yWkAU%2F76OqBrR1FGRhHSHpjVyqaD3yCXYvHuSqmEPEF5iSqcgDEepocxApAXQYIlLft2ROBTrmqpkKsZ%2Be%2BKDgAFE9rO%2FhSWTlFs802yioHARhdvo6wiLF%2B0rIEWhq0CNzrELy0plHcS7KjGC46y1r38owpUJqU9VYC5FZbeFvi5oc6pYEU50wpxiNJPG1v%2B1fGu8GvhXjitAKck%2Fgo9K5DcUi8KLURYYDCawx675s6ChQGce2ar7nWd6EjAO%2BzuPg%2BvtRiTEFQD4y9JOVtIY6ZiAlWjxE2dhu5zhNe0mpFjbmJJEYMeURy%2Flj2IzpEGCMcOP038QQCnWXzGGjGJ9XpY%2BdSuW4h4ineGM64%2Bg7s8ENO4ZzG4riwIkXQiqXuJ6%2Fw0c9RBp58wmUCwJkIC9IgVUeGxemXvUpXAim8avJD16kSKlKJco4k%2BUaHZRpcmrvn9%2F8u2%2FqzNPMTpXyOpYGPnWio4vkVh3wzHXl7LWbo1RhuI5S%2BQQkMOPjFLURAmQXjz4xbBI4OG1Hbf2uM0OoGKaudbQICHUxlDAOV%2B%2FZYgqwX3ZgKB06QML6KusAGOqUBWjf5NpdHSSkn%2Bm%2Ba0ryTOcDzB%2FcKkrXExYRsuMdOsX09hVGXQ1eFa36edYjQ7VU%2BcKMCmr7LopDFcoDpfEby7iLWS5fk5NoPyX3cpD5xkPan0Y1ro1XSI53H1d9I1ogZyTx7w93LogcjbPNZqxyvfxVULvLJsOwA5Tbwll2v8YmXhAwhN%2Fc30IIf%2FQ29KrW3oZKqlO1p8q8a5D7RnN8fVsll3S0X&X-Amz-Signature=128f8f5fe6530834c97a614ecc564f3e1aa5358b1410d0c73b952b1cd163abd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMSU4ZE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnYbRuO3w%2BeY5kkbpTkJgr02vLoDk0PWMlxlaL%2B7036AiEAlRGkkXN87j%2BR4Rx2%2B9hsG72fp9dCAl20q1l3xaKKzpYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOowytVK3gWnHHZpgyrcA6%2FQaxN0QGNcLonCXtLU4HzITeHbnjwuQJVaAYylJ3nrchiu4isMPmMu00%2Bxzw5HzmG65yWkAU%2F76OqBrR1FGRhHSHpjVyqaD3yCXYvHuSqmEPEF5iSqcgDEepocxApAXQYIlLft2ROBTrmqpkKsZ%2Be%2BKDgAFE9rO%2FhSWTlFs802yioHARhdvo6wiLF%2B0rIEWhq0CNzrELy0plHcS7KjGC46y1r38owpUJqU9VYC5FZbeFvi5oc6pYEU50wpxiNJPG1v%2B1fGu8GvhXjitAKck%2Fgo9K5DcUi8KLURYYDCawx675s6ChQGce2ar7nWd6EjAO%2BzuPg%2BvtRiTEFQD4y9JOVtIY6ZiAlWjxE2dhu5zhNe0mpFjbmJJEYMeURy%2Flj2IzpEGCMcOP038QQCnWXzGGjGJ9XpY%2BdSuW4h4ineGM64%2Bg7s8ENO4ZzG4riwIkXQiqXuJ6%2Fw0c9RBp58wmUCwJkIC9IgVUeGxemXvUpXAim8avJD16kSKlKJco4k%2BUaHZRpcmrvn9%2F8u2%2FqzNPMTpXyOpYGPnWio4vkVh3wzHXl7LWbo1RhuI5S%2BQQkMOPjFLURAmQXjz4xbBI4OG1Hbf2uM0OoGKaudbQICHUxlDAOV%2B%2FZYgqwX3ZgKB06QML6KusAGOqUBWjf5NpdHSSkn%2Bm%2Ba0ryTOcDzB%2FcKkrXExYRsuMdOsX09hVGXQ1eFa36edYjQ7VU%2BcKMCmr7LopDFcoDpfEby7iLWS5fk5NoPyX3cpD5xkPan0Y1ro1XSI53H1d9I1ogZyTx7w93LogcjbPNZqxyvfxVULvLJsOwA5Tbwll2v8YmXhAwhN%2Fc30IIf%2FQ29KrW3oZKqlO1p8q8a5D7RnN8fVsll3S0X&X-Amz-Signature=02f220c68bf99d664c471bfde9922fd4b8d10a94f69532a69fa6ed64bc9fe3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMSU4ZE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnYbRuO3w%2BeY5kkbpTkJgr02vLoDk0PWMlxlaL%2B7036AiEAlRGkkXN87j%2BR4Rx2%2B9hsG72fp9dCAl20q1l3xaKKzpYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOowytVK3gWnHHZpgyrcA6%2FQaxN0QGNcLonCXtLU4HzITeHbnjwuQJVaAYylJ3nrchiu4isMPmMu00%2Bxzw5HzmG65yWkAU%2F76OqBrR1FGRhHSHpjVyqaD3yCXYvHuSqmEPEF5iSqcgDEepocxApAXQYIlLft2ROBTrmqpkKsZ%2Be%2BKDgAFE9rO%2FhSWTlFs802yioHARhdvo6wiLF%2B0rIEWhq0CNzrELy0plHcS7KjGC46y1r38owpUJqU9VYC5FZbeFvi5oc6pYEU50wpxiNJPG1v%2B1fGu8GvhXjitAKck%2Fgo9K5DcUi8KLURYYDCawx675s6ChQGce2ar7nWd6EjAO%2BzuPg%2BvtRiTEFQD4y9JOVtIY6ZiAlWjxE2dhu5zhNe0mpFjbmJJEYMeURy%2Flj2IzpEGCMcOP038QQCnWXzGGjGJ9XpY%2BdSuW4h4ineGM64%2Bg7s8ENO4ZzG4riwIkXQiqXuJ6%2Fw0c9RBp58wmUCwJkIC9IgVUeGxemXvUpXAim8avJD16kSKlKJco4k%2BUaHZRpcmrvn9%2F8u2%2FqzNPMTpXyOpYGPnWio4vkVh3wzHXl7LWbo1RhuI5S%2BQQkMOPjFLURAmQXjz4xbBI4OG1Hbf2uM0OoGKaudbQICHUxlDAOV%2B%2FZYgqwX3ZgKB06QML6KusAGOqUBWjf5NpdHSSkn%2Bm%2Ba0ryTOcDzB%2FcKkrXExYRsuMdOsX09hVGXQ1eFa36edYjQ7VU%2BcKMCmr7LopDFcoDpfEby7iLWS5fk5NoPyX3cpD5xkPan0Y1ro1XSI53H1d9I1ogZyTx7w93LogcjbPNZqxyvfxVULvLJsOwA5Tbwll2v8YmXhAwhN%2Fc30IIf%2FQ29KrW3oZKqlO1p8q8a5D7RnN8fVsll3S0X&X-Amz-Signature=175f2a32bf75874a42d14722358a06be4d1da6220679dd607633fd1d33746b49&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
