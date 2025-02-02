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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNLZAY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqBfvACQdOIWCf0kbgUgatVmdMf9ULIxDWpIuwwhbHiAiBOJKmili4uOGcuG2NtQ7YyuL8sZOVo8hv55bv9gBRKXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8AAn8U0JlCS8rBvKtwDjMqax0oh3s4LUF0fyMP3y7HjIlh4yJB5aPNV%2FatM%2BaTjlT%2BT%2B3JYVWFXNi4Mw0x9aPKSRZNg7pSIIurymh5Tf9MPx7DnA3ZrPotp6wOg7wRGY9PXS318%2Fh4S%2B2fohw%2FJP9VqKJTuIPtfUNwpWaaT6B2CXBp%2BlJXjKBr%2FnR4cgv0ZZJ2VJW%2Bfj5y4MK4F8ft%2F%2BM0vmRW%2FP0LxvFKwAdNazaLGfJC2MM7JFhNw06uVRtY3arAIoxxmdsUcAyYnXJwUt54xjr7voMtjTIq804P5SLxUP08rn5%2BALLw8%2BBV1LBpwZ0QFqiwt9GC2Rgfj0XsqfUqlRnR28VBcolXOyQ1hTmR9JUNGRkPTVzzeNwroaHbz1Qn4m26VNGJzOPH%2BrhSgN5dg6Ne7dgCDiCTiyy71f%2BzcQjIM4gAkROUjOZL6KhIQjM8TUY4E0MjlLgut94DgpSdZir%2FYkxI4qkYTuXIitOR4kmnAX4%2F92xzzbnKMSH47DMs9KXIyaat3BSxkhlIWSF%2BnENGSsBrkAm57Nbp61GN2VJbnF22IUJSakrPAp6HFXsRthUNzzTkAX5FvuI9QlIYduZIduoBJTIOG%2BOEtGRwMdNEG5rbEh9S55JadXa%2Bzgm9JGHin8xsozQowkdz%2BvAY6pgHlkd7Iz%2FHMdHW%2FqQx0KAWK1KAIA1S2lR4kiZ7ADWbvUBCO7SMp0TUsuPw1TH6nV522c%2BnoUix8Hq5dFMcbXdSaP1lqSP7De7RYiOfIi%2B91XleCe%2Be5jopbHIrxFR%2FmoFTsfoKlQ4iMl5AqiwAvtn1sc6Sv7Si1kPJAW0qwSqa7LXhON6qj3PkX5BetJUdfokePj69LeI22Zvz2E8x2MLgKHKJcIwYi&X-Amz-Signature=f72dbc4a759d493ecf81e1801416063e06dda52647765ff27bb6d4793ec8edd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNLZAY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqBfvACQdOIWCf0kbgUgatVmdMf9ULIxDWpIuwwhbHiAiBOJKmili4uOGcuG2NtQ7YyuL8sZOVo8hv55bv9gBRKXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8AAn8U0JlCS8rBvKtwDjMqax0oh3s4LUF0fyMP3y7HjIlh4yJB5aPNV%2FatM%2BaTjlT%2BT%2B3JYVWFXNi4Mw0x9aPKSRZNg7pSIIurymh5Tf9MPx7DnA3ZrPotp6wOg7wRGY9PXS318%2Fh4S%2B2fohw%2FJP9VqKJTuIPtfUNwpWaaT6B2CXBp%2BlJXjKBr%2FnR4cgv0ZZJ2VJW%2Bfj5y4MK4F8ft%2F%2BM0vmRW%2FP0LxvFKwAdNazaLGfJC2MM7JFhNw06uVRtY3arAIoxxmdsUcAyYnXJwUt54xjr7voMtjTIq804P5SLxUP08rn5%2BALLw8%2BBV1LBpwZ0QFqiwt9GC2Rgfj0XsqfUqlRnR28VBcolXOyQ1hTmR9JUNGRkPTVzzeNwroaHbz1Qn4m26VNGJzOPH%2BrhSgN5dg6Ne7dgCDiCTiyy71f%2BzcQjIM4gAkROUjOZL6KhIQjM8TUY4E0MjlLgut94DgpSdZir%2FYkxI4qkYTuXIitOR4kmnAX4%2F92xzzbnKMSH47DMs9KXIyaat3BSxkhlIWSF%2BnENGSsBrkAm57Nbp61GN2VJbnF22IUJSakrPAp6HFXsRthUNzzTkAX5FvuI9QlIYduZIduoBJTIOG%2BOEtGRwMdNEG5rbEh9S55JadXa%2Bzgm9JGHin8xsozQowkdz%2BvAY6pgHlkd7Iz%2FHMdHW%2FqQx0KAWK1KAIA1S2lR4kiZ7ADWbvUBCO7SMp0TUsuPw1TH6nV522c%2BnoUix8Hq5dFMcbXdSaP1lqSP7De7RYiOfIi%2B91XleCe%2Be5jopbHIrxFR%2FmoFTsfoKlQ4iMl5AqiwAvtn1sc6Sv7Si1kPJAW0qwSqa7LXhON6qj3PkX5BetJUdfokePj69LeI22Zvz2E8x2MLgKHKJcIwYi&X-Amz-Signature=70d1ace9a88417b6e2ed41124a96e7492277981af2e2bde33620e28d7e1d024c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNLZAY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqBfvACQdOIWCf0kbgUgatVmdMf9ULIxDWpIuwwhbHiAiBOJKmili4uOGcuG2NtQ7YyuL8sZOVo8hv55bv9gBRKXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8AAn8U0JlCS8rBvKtwDjMqax0oh3s4LUF0fyMP3y7HjIlh4yJB5aPNV%2FatM%2BaTjlT%2BT%2B3JYVWFXNi4Mw0x9aPKSRZNg7pSIIurymh5Tf9MPx7DnA3ZrPotp6wOg7wRGY9PXS318%2Fh4S%2B2fohw%2FJP9VqKJTuIPtfUNwpWaaT6B2CXBp%2BlJXjKBr%2FnR4cgv0ZZJ2VJW%2Bfj5y4MK4F8ft%2F%2BM0vmRW%2FP0LxvFKwAdNazaLGfJC2MM7JFhNw06uVRtY3arAIoxxmdsUcAyYnXJwUt54xjr7voMtjTIq804P5SLxUP08rn5%2BALLw8%2BBV1LBpwZ0QFqiwt9GC2Rgfj0XsqfUqlRnR28VBcolXOyQ1hTmR9JUNGRkPTVzzeNwroaHbz1Qn4m26VNGJzOPH%2BrhSgN5dg6Ne7dgCDiCTiyy71f%2BzcQjIM4gAkROUjOZL6KhIQjM8TUY4E0MjlLgut94DgpSdZir%2FYkxI4qkYTuXIitOR4kmnAX4%2F92xzzbnKMSH47DMs9KXIyaat3BSxkhlIWSF%2BnENGSsBrkAm57Nbp61GN2VJbnF22IUJSakrPAp6HFXsRthUNzzTkAX5FvuI9QlIYduZIduoBJTIOG%2BOEtGRwMdNEG5rbEh9S55JadXa%2Bzgm9JGHin8xsozQowkdz%2BvAY6pgHlkd7Iz%2FHMdHW%2FqQx0KAWK1KAIA1S2lR4kiZ7ADWbvUBCO7SMp0TUsuPw1TH6nV522c%2BnoUix8Hq5dFMcbXdSaP1lqSP7De7RYiOfIi%2B91XleCe%2Be5jopbHIrxFR%2FmoFTsfoKlQ4iMl5AqiwAvtn1sc6Sv7Si1kPJAW0qwSqa7LXhON6qj3PkX5BetJUdfokePj69LeI22Zvz2E8x2MLgKHKJcIwYi&X-Amz-Signature=b24568d8bd778b05088cdfdf5e837e493807076a597980f69515f19e0f3c2fef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNLZAY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqBfvACQdOIWCf0kbgUgatVmdMf9ULIxDWpIuwwhbHiAiBOJKmili4uOGcuG2NtQ7YyuL8sZOVo8hv55bv9gBRKXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8AAn8U0JlCS8rBvKtwDjMqax0oh3s4LUF0fyMP3y7HjIlh4yJB5aPNV%2FatM%2BaTjlT%2BT%2B3JYVWFXNi4Mw0x9aPKSRZNg7pSIIurymh5Tf9MPx7DnA3ZrPotp6wOg7wRGY9PXS318%2Fh4S%2B2fohw%2FJP9VqKJTuIPtfUNwpWaaT6B2CXBp%2BlJXjKBr%2FnR4cgv0ZZJ2VJW%2Bfj5y4MK4F8ft%2F%2BM0vmRW%2FP0LxvFKwAdNazaLGfJC2MM7JFhNw06uVRtY3arAIoxxmdsUcAyYnXJwUt54xjr7voMtjTIq804P5SLxUP08rn5%2BALLw8%2BBV1LBpwZ0QFqiwt9GC2Rgfj0XsqfUqlRnR28VBcolXOyQ1hTmR9JUNGRkPTVzzeNwroaHbz1Qn4m26VNGJzOPH%2BrhSgN5dg6Ne7dgCDiCTiyy71f%2BzcQjIM4gAkROUjOZL6KhIQjM8TUY4E0MjlLgut94DgpSdZir%2FYkxI4qkYTuXIitOR4kmnAX4%2F92xzzbnKMSH47DMs9KXIyaat3BSxkhlIWSF%2BnENGSsBrkAm57Nbp61GN2VJbnF22IUJSakrPAp6HFXsRthUNzzTkAX5FvuI9QlIYduZIduoBJTIOG%2BOEtGRwMdNEG5rbEh9S55JadXa%2Bzgm9JGHin8xsozQowkdz%2BvAY6pgHlkd7Iz%2FHMdHW%2FqQx0KAWK1KAIA1S2lR4kiZ7ADWbvUBCO7SMp0TUsuPw1TH6nV522c%2BnoUix8Hq5dFMcbXdSaP1lqSP7De7RYiOfIi%2B91XleCe%2Be5jopbHIrxFR%2FmoFTsfoKlQ4iMl5AqiwAvtn1sc6Sv7Si1kPJAW0qwSqa7LXhON6qj3PkX5BetJUdfokePj69LeI22Zvz2E8x2MLgKHKJcIwYi&X-Amz-Signature=d4f5032fb5338a68e074c0a7f8643d14dfd2b71eaf6ba5cb3927d4e6428dfc38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNLZAY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqBfvACQdOIWCf0kbgUgatVmdMf9ULIxDWpIuwwhbHiAiBOJKmili4uOGcuG2NtQ7YyuL8sZOVo8hv55bv9gBRKXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8AAn8U0JlCS8rBvKtwDjMqax0oh3s4LUF0fyMP3y7HjIlh4yJB5aPNV%2FatM%2BaTjlT%2BT%2B3JYVWFXNi4Mw0x9aPKSRZNg7pSIIurymh5Tf9MPx7DnA3ZrPotp6wOg7wRGY9PXS318%2Fh4S%2B2fohw%2FJP9VqKJTuIPtfUNwpWaaT6B2CXBp%2BlJXjKBr%2FnR4cgv0ZZJ2VJW%2Bfj5y4MK4F8ft%2F%2BM0vmRW%2FP0LxvFKwAdNazaLGfJC2MM7JFhNw06uVRtY3arAIoxxmdsUcAyYnXJwUt54xjr7voMtjTIq804P5SLxUP08rn5%2BALLw8%2BBV1LBpwZ0QFqiwt9GC2Rgfj0XsqfUqlRnR28VBcolXOyQ1hTmR9JUNGRkPTVzzeNwroaHbz1Qn4m26VNGJzOPH%2BrhSgN5dg6Ne7dgCDiCTiyy71f%2BzcQjIM4gAkROUjOZL6KhIQjM8TUY4E0MjlLgut94DgpSdZir%2FYkxI4qkYTuXIitOR4kmnAX4%2F92xzzbnKMSH47DMs9KXIyaat3BSxkhlIWSF%2BnENGSsBrkAm57Nbp61GN2VJbnF22IUJSakrPAp6HFXsRthUNzzTkAX5FvuI9QlIYduZIduoBJTIOG%2BOEtGRwMdNEG5rbEh9S55JadXa%2Bzgm9JGHin8xsozQowkdz%2BvAY6pgHlkd7Iz%2FHMdHW%2FqQx0KAWK1KAIA1S2lR4kiZ7ADWbvUBCO7SMp0TUsuPw1TH6nV522c%2BnoUix8Hq5dFMcbXdSaP1lqSP7De7RYiOfIi%2B91XleCe%2Be5jopbHIrxFR%2FmoFTsfoKlQ4iMl5AqiwAvtn1sc6Sv7Si1kPJAW0qwSqa7LXhON6qj3PkX5BetJUdfokePj69LeI22Zvz2E8x2MLgKHKJcIwYi&X-Amz-Signature=f8ff98fddc88e8b40dbafde381682fe10f0671b13ff235f6b6a86c7b60698b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
