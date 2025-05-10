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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQWUIWM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDT1gQyDmEUiDvECAMvw%2F1PTmKnDm6nHm4De9fCu0PRPwIfBYQh2bm3Rgjlqx%2B%2BSKaNC1RmVGH6CaYf1%2F%2FOfnysOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSEHOYW1FEZAPLthaKtwDPu8MWnXjtYKT7m38zGIw2OLOh%2BfsDJc6clZDLDFZlWGgLBLeSVSQb6AfH%2FvW5RLkk8fZcceEp%2BPbtp42Dqa3eqKo1K5qWCiWHBewDiER9SU5A42FITJOv%2BuWa3IUdh2wwzWM7chEt504ZPe6yLRonIaCxhUExpY8Z0Q9ux7CUcH9leh1OOPbGKr1mDzBJn6nsb9UhFpsC5%2BjIsnWur5LtLDUxGn2KzJG83Bho9Fl5X4r%2FoiqluoM9jts%2FAcWYlJpp7pUKM91boF4I3TNacSWKk4nwcqglW%2FzG4zKeBeVTnldpenzDp89Q8BuRs9MOy8ax6FXHu03HauirSHuRcV9pJQj1iAK%2F6YbR%2BCVY1wiWiX2wxE2YZUjnq9S0XB31diK%2BmSQ6qwTOVi7hQ%2BK4LSbucWci3ieMeWaWJK0IM6uK6W8SJwJvh5ScGbBrfL6PbUAcx2QvHfwsSW%2FhUJITHnZHDsVV9Hs7cGukDgfwPA%2BesVlyxPBBmcp1Ej5YgryzjJH8pDQojROWlajJgxzVJZZBbWS9jcqkNiCGLSqAD4d4pxN0YwWmwlgOlJ2YyDQmo0Lb1bXU2tdNuMSabDFFngoXgFKj8Wc6yLQ212QrCUIR9H75BrdevHlatDpyI4w3Y%2F8wAY6pgF3Baa8aLoPYe1UNOjIWuR8SRw3yXhtIIcP%2BhzwEipiI1V47mGI0nYuFo4U1IYmKe2iMt7SGc15ffZ2mrEWJCEyLk%2BukIdc9p%2FACfaTe8aKL4EcrtZgepFi0cxkzIE79nb0GUyF65aZ%2BAt7h2uDEL0FlpS8i9WIYTamSyEcC8C1K10GiuxrUpabVshSrLeNODQEIoQzy27R4xcEx2tQ0peqzWdvX098&X-Amz-Signature=0bbd93d08d66e4998e6f2b7b8278fa9d90637b3f0a0f28bfb18e9e470568715d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQWUIWM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDT1gQyDmEUiDvECAMvw%2F1PTmKnDm6nHm4De9fCu0PRPwIfBYQh2bm3Rgjlqx%2B%2BSKaNC1RmVGH6CaYf1%2F%2FOfnysOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSEHOYW1FEZAPLthaKtwDPu8MWnXjtYKT7m38zGIw2OLOh%2BfsDJc6clZDLDFZlWGgLBLeSVSQb6AfH%2FvW5RLkk8fZcceEp%2BPbtp42Dqa3eqKo1K5qWCiWHBewDiER9SU5A42FITJOv%2BuWa3IUdh2wwzWM7chEt504ZPe6yLRonIaCxhUExpY8Z0Q9ux7CUcH9leh1OOPbGKr1mDzBJn6nsb9UhFpsC5%2BjIsnWur5LtLDUxGn2KzJG83Bho9Fl5X4r%2FoiqluoM9jts%2FAcWYlJpp7pUKM91boF4I3TNacSWKk4nwcqglW%2FzG4zKeBeVTnldpenzDp89Q8BuRs9MOy8ax6FXHu03HauirSHuRcV9pJQj1iAK%2F6YbR%2BCVY1wiWiX2wxE2YZUjnq9S0XB31diK%2BmSQ6qwTOVi7hQ%2BK4LSbucWci3ieMeWaWJK0IM6uK6W8SJwJvh5ScGbBrfL6PbUAcx2QvHfwsSW%2FhUJITHnZHDsVV9Hs7cGukDgfwPA%2BesVlyxPBBmcp1Ej5YgryzjJH8pDQojROWlajJgxzVJZZBbWS9jcqkNiCGLSqAD4d4pxN0YwWmwlgOlJ2YyDQmo0Lb1bXU2tdNuMSabDFFngoXgFKj8Wc6yLQ212QrCUIR9H75BrdevHlatDpyI4w3Y%2F8wAY6pgF3Baa8aLoPYe1UNOjIWuR8SRw3yXhtIIcP%2BhzwEipiI1V47mGI0nYuFo4U1IYmKe2iMt7SGc15ffZ2mrEWJCEyLk%2BukIdc9p%2FACfaTe8aKL4EcrtZgepFi0cxkzIE79nb0GUyF65aZ%2BAt7h2uDEL0FlpS8i9WIYTamSyEcC8C1K10GiuxrUpabVshSrLeNODQEIoQzy27R4xcEx2tQ0peqzWdvX098&X-Amz-Signature=3c637b0cf9f75f9387b73a7064542200e8dc193fecce0a32159f9a20c9e0fcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQWUIWM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDT1gQyDmEUiDvECAMvw%2F1PTmKnDm6nHm4De9fCu0PRPwIfBYQh2bm3Rgjlqx%2B%2BSKaNC1RmVGH6CaYf1%2F%2FOfnysOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSEHOYW1FEZAPLthaKtwDPu8MWnXjtYKT7m38zGIw2OLOh%2BfsDJc6clZDLDFZlWGgLBLeSVSQb6AfH%2FvW5RLkk8fZcceEp%2BPbtp42Dqa3eqKo1K5qWCiWHBewDiER9SU5A42FITJOv%2BuWa3IUdh2wwzWM7chEt504ZPe6yLRonIaCxhUExpY8Z0Q9ux7CUcH9leh1OOPbGKr1mDzBJn6nsb9UhFpsC5%2BjIsnWur5LtLDUxGn2KzJG83Bho9Fl5X4r%2FoiqluoM9jts%2FAcWYlJpp7pUKM91boF4I3TNacSWKk4nwcqglW%2FzG4zKeBeVTnldpenzDp89Q8BuRs9MOy8ax6FXHu03HauirSHuRcV9pJQj1iAK%2F6YbR%2BCVY1wiWiX2wxE2YZUjnq9S0XB31diK%2BmSQ6qwTOVi7hQ%2BK4LSbucWci3ieMeWaWJK0IM6uK6W8SJwJvh5ScGbBrfL6PbUAcx2QvHfwsSW%2FhUJITHnZHDsVV9Hs7cGukDgfwPA%2BesVlyxPBBmcp1Ej5YgryzjJH8pDQojROWlajJgxzVJZZBbWS9jcqkNiCGLSqAD4d4pxN0YwWmwlgOlJ2YyDQmo0Lb1bXU2tdNuMSabDFFngoXgFKj8Wc6yLQ212QrCUIR9H75BrdevHlatDpyI4w3Y%2F8wAY6pgF3Baa8aLoPYe1UNOjIWuR8SRw3yXhtIIcP%2BhzwEipiI1V47mGI0nYuFo4U1IYmKe2iMt7SGc15ffZ2mrEWJCEyLk%2BukIdc9p%2FACfaTe8aKL4EcrtZgepFi0cxkzIE79nb0GUyF65aZ%2BAt7h2uDEL0FlpS8i9WIYTamSyEcC8C1K10GiuxrUpabVshSrLeNODQEIoQzy27R4xcEx2tQ0peqzWdvX098&X-Amz-Signature=767829a73e1549e3b7246818bd8ba7f1ebabcd177a3b6dac46a1dca06b377321&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQWUIWM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDT1gQyDmEUiDvECAMvw%2F1PTmKnDm6nHm4De9fCu0PRPwIfBYQh2bm3Rgjlqx%2B%2BSKaNC1RmVGH6CaYf1%2F%2FOfnysOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSEHOYW1FEZAPLthaKtwDPu8MWnXjtYKT7m38zGIw2OLOh%2BfsDJc6clZDLDFZlWGgLBLeSVSQb6AfH%2FvW5RLkk8fZcceEp%2BPbtp42Dqa3eqKo1K5qWCiWHBewDiER9SU5A42FITJOv%2BuWa3IUdh2wwzWM7chEt504ZPe6yLRonIaCxhUExpY8Z0Q9ux7CUcH9leh1OOPbGKr1mDzBJn6nsb9UhFpsC5%2BjIsnWur5LtLDUxGn2KzJG83Bho9Fl5X4r%2FoiqluoM9jts%2FAcWYlJpp7pUKM91boF4I3TNacSWKk4nwcqglW%2FzG4zKeBeVTnldpenzDp89Q8BuRs9MOy8ax6FXHu03HauirSHuRcV9pJQj1iAK%2F6YbR%2BCVY1wiWiX2wxE2YZUjnq9S0XB31diK%2BmSQ6qwTOVi7hQ%2BK4LSbucWci3ieMeWaWJK0IM6uK6W8SJwJvh5ScGbBrfL6PbUAcx2QvHfwsSW%2FhUJITHnZHDsVV9Hs7cGukDgfwPA%2BesVlyxPBBmcp1Ej5YgryzjJH8pDQojROWlajJgxzVJZZBbWS9jcqkNiCGLSqAD4d4pxN0YwWmwlgOlJ2YyDQmo0Lb1bXU2tdNuMSabDFFngoXgFKj8Wc6yLQ212QrCUIR9H75BrdevHlatDpyI4w3Y%2F8wAY6pgF3Baa8aLoPYe1UNOjIWuR8SRw3yXhtIIcP%2BhzwEipiI1V47mGI0nYuFo4U1IYmKe2iMt7SGc15ffZ2mrEWJCEyLk%2BukIdc9p%2FACfaTe8aKL4EcrtZgepFi0cxkzIE79nb0GUyF65aZ%2BAt7h2uDEL0FlpS8i9WIYTamSyEcC8C1K10GiuxrUpabVshSrLeNODQEIoQzy27R4xcEx2tQ0peqzWdvX098&X-Amz-Signature=3b45556ba9d3b869f5655d8fc9ef5d394c503548a37daa19223e54d19d299bec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQWUIWM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDT1gQyDmEUiDvECAMvw%2F1PTmKnDm6nHm4De9fCu0PRPwIfBYQh2bm3Rgjlqx%2B%2BSKaNC1RmVGH6CaYf1%2F%2FOfnysOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSEHOYW1FEZAPLthaKtwDPu8MWnXjtYKT7m38zGIw2OLOh%2BfsDJc6clZDLDFZlWGgLBLeSVSQb6AfH%2FvW5RLkk8fZcceEp%2BPbtp42Dqa3eqKo1K5qWCiWHBewDiER9SU5A42FITJOv%2BuWa3IUdh2wwzWM7chEt504ZPe6yLRonIaCxhUExpY8Z0Q9ux7CUcH9leh1OOPbGKr1mDzBJn6nsb9UhFpsC5%2BjIsnWur5LtLDUxGn2KzJG83Bho9Fl5X4r%2FoiqluoM9jts%2FAcWYlJpp7pUKM91boF4I3TNacSWKk4nwcqglW%2FzG4zKeBeVTnldpenzDp89Q8BuRs9MOy8ax6FXHu03HauirSHuRcV9pJQj1iAK%2F6YbR%2BCVY1wiWiX2wxE2YZUjnq9S0XB31diK%2BmSQ6qwTOVi7hQ%2BK4LSbucWci3ieMeWaWJK0IM6uK6W8SJwJvh5ScGbBrfL6PbUAcx2QvHfwsSW%2FhUJITHnZHDsVV9Hs7cGukDgfwPA%2BesVlyxPBBmcp1Ej5YgryzjJH8pDQojROWlajJgxzVJZZBbWS9jcqkNiCGLSqAD4d4pxN0YwWmwlgOlJ2YyDQmo0Lb1bXU2tdNuMSabDFFngoXgFKj8Wc6yLQ212QrCUIR9H75BrdevHlatDpyI4w3Y%2F8wAY6pgF3Baa8aLoPYe1UNOjIWuR8SRw3yXhtIIcP%2BhzwEipiI1V47mGI0nYuFo4U1IYmKe2iMt7SGc15ffZ2mrEWJCEyLk%2BukIdc9p%2FACfaTe8aKL4EcrtZgepFi0cxkzIE79nb0GUyF65aZ%2BAt7h2uDEL0FlpS8i9WIYTamSyEcC8C1K10GiuxrUpabVshSrLeNODQEIoQzy27R4xcEx2tQ0peqzWdvX098&X-Amz-Signature=13d1da2bd8257376c572c734ac7bb12d11eb6c336fb06b12279a579a67ffba1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
