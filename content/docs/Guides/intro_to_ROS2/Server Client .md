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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJLQ3B5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh4rLhrWf0m3HZEgr9jf4l8vHPxd5xPZecpaJVu4w0ZAiAN7sPajhJNQh51u96JtCtIT4SXe1w6vPfLd0nxAvXiwCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqXdfScXuToL8kwFKtwDKd4tSVSLCHPPye2sTtdQWatJfI0fj3LSSBnTnKEs6ePj9nZmGGnp9Zv5vUpGtY0H0H7jXmH30Vy3j%2FDGyOYC%2FcwFGyO7wUzhTbWoOEPZEKEAHBswLM81YhdnABIJcFUVLfAIV8NfhKZWeMLhqdru6PeVwFHjWAWtoAwR17c9tWLHV8XMUCWTA7gQ0y3bYkIf1%2BaCuvt0AKnWJiH6ygGg9QpSSKh0VM4jZeAVaiGXGCCyNdI7hDvek6FbBltdA1jk5t0MlCvJc3zbKDNRQ9YaIHML%2F3JpCyx7VQavQUUhS%2FEgJXs6hGZ5SkGdyXnXPac5JZw6BnD8Bytp%2BfYMYy4GKjrlniGJ7lbzL2TofMc4D4u%2FKRHxN%2FACXJZEKOwuSqkJVB2g2UwnwB9KEyO8mjB1tUfBTUpyRBDFrgj0UFd5LcYY2YE23uaNUJ0SfpOSxyGIPrnlBPE5rcIoLWOtgMF8OHgDlgCgTCWDUfTEnHGiT34t7HmhY3nLmxWSM8jBu6taeCoGS%2FbJrzf9mKX3RYAE7LzItw43gYjHJQYBL%2BYoRSa2POVynLvWvucsKb%2FQhprMl176RSSqh8pybP%2Bw6D6aFvX6mtTk%2FxKlTY5TClBvjTIfcV3OuGcvUJnI4H8wvojfwQY6pgFBRoAdwt%2F%2F8ZZYVpkNBs6CABclmnMJMZH1Ow4mtSOtECGC3pE%2FTqoNhfZsWpUSPw9lZN%2BTZpYTSgnHhe20oeYwOkS78U%2B96SZBpegNMrZPQEOL0RynAOhK3rxPaxcqXIyis224Hd%2ByZdAgb4kQrHB7ORECoyM5PIs6Jo3y1q1R2xDNKIE245AK6K0B0p%2B2zmQ8OlwdmStKWlJ7TFi5eKgqdZnMvaNc&X-Amz-Signature=09e0150ad9014e594056e2cc5885d5e476536704acfe6b3b06a247bd80e026d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJLQ3B5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh4rLhrWf0m3HZEgr9jf4l8vHPxd5xPZecpaJVu4w0ZAiAN7sPajhJNQh51u96JtCtIT4SXe1w6vPfLd0nxAvXiwCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqXdfScXuToL8kwFKtwDKd4tSVSLCHPPye2sTtdQWatJfI0fj3LSSBnTnKEs6ePj9nZmGGnp9Zv5vUpGtY0H0H7jXmH30Vy3j%2FDGyOYC%2FcwFGyO7wUzhTbWoOEPZEKEAHBswLM81YhdnABIJcFUVLfAIV8NfhKZWeMLhqdru6PeVwFHjWAWtoAwR17c9tWLHV8XMUCWTA7gQ0y3bYkIf1%2BaCuvt0AKnWJiH6ygGg9QpSSKh0VM4jZeAVaiGXGCCyNdI7hDvek6FbBltdA1jk5t0MlCvJc3zbKDNRQ9YaIHML%2F3JpCyx7VQavQUUhS%2FEgJXs6hGZ5SkGdyXnXPac5JZw6BnD8Bytp%2BfYMYy4GKjrlniGJ7lbzL2TofMc4D4u%2FKRHxN%2FACXJZEKOwuSqkJVB2g2UwnwB9KEyO8mjB1tUfBTUpyRBDFrgj0UFd5LcYY2YE23uaNUJ0SfpOSxyGIPrnlBPE5rcIoLWOtgMF8OHgDlgCgTCWDUfTEnHGiT34t7HmhY3nLmxWSM8jBu6taeCoGS%2FbJrzf9mKX3RYAE7LzItw43gYjHJQYBL%2BYoRSa2POVynLvWvucsKb%2FQhprMl176RSSqh8pybP%2Bw6D6aFvX6mtTk%2FxKlTY5TClBvjTIfcV3OuGcvUJnI4H8wvojfwQY6pgFBRoAdwt%2F%2F8ZZYVpkNBs6CABclmnMJMZH1Ow4mtSOtECGC3pE%2FTqoNhfZsWpUSPw9lZN%2BTZpYTSgnHhe20oeYwOkS78U%2B96SZBpegNMrZPQEOL0RynAOhK3rxPaxcqXIyis224Hd%2ByZdAgb4kQrHB7ORECoyM5PIs6Jo3y1q1R2xDNKIE245AK6K0B0p%2B2zmQ8OlwdmStKWlJ7TFi5eKgqdZnMvaNc&X-Amz-Signature=1a17fb42b391fc646de4c05b917d05ee285c40344895d21dbb29b6aa6e5239e8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJLQ3B5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh4rLhrWf0m3HZEgr9jf4l8vHPxd5xPZecpaJVu4w0ZAiAN7sPajhJNQh51u96JtCtIT4SXe1w6vPfLd0nxAvXiwCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqXdfScXuToL8kwFKtwDKd4tSVSLCHPPye2sTtdQWatJfI0fj3LSSBnTnKEs6ePj9nZmGGnp9Zv5vUpGtY0H0H7jXmH30Vy3j%2FDGyOYC%2FcwFGyO7wUzhTbWoOEPZEKEAHBswLM81YhdnABIJcFUVLfAIV8NfhKZWeMLhqdru6PeVwFHjWAWtoAwR17c9tWLHV8XMUCWTA7gQ0y3bYkIf1%2BaCuvt0AKnWJiH6ygGg9QpSSKh0VM4jZeAVaiGXGCCyNdI7hDvek6FbBltdA1jk5t0MlCvJc3zbKDNRQ9YaIHML%2F3JpCyx7VQavQUUhS%2FEgJXs6hGZ5SkGdyXnXPac5JZw6BnD8Bytp%2BfYMYy4GKjrlniGJ7lbzL2TofMc4D4u%2FKRHxN%2FACXJZEKOwuSqkJVB2g2UwnwB9KEyO8mjB1tUfBTUpyRBDFrgj0UFd5LcYY2YE23uaNUJ0SfpOSxyGIPrnlBPE5rcIoLWOtgMF8OHgDlgCgTCWDUfTEnHGiT34t7HmhY3nLmxWSM8jBu6taeCoGS%2FbJrzf9mKX3RYAE7LzItw43gYjHJQYBL%2BYoRSa2POVynLvWvucsKb%2FQhprMl176RSSqh8pybP%2Bw6D6aFvX6mtTk%2FxKlTY5TClBvjTIfcV3OuGcvUJnI4H8wvojfwQY6pgFBRoAdwt%2F%2F8ZZYVpkNBs6CABclmnMJMZH1Ow4mtSOtECGC3pE%2FTqoNhfZsWpUSPw9lZN%2BTZpYTSgnHhe20oeYwOkS78U%2B96SZBpegNMrZPQEOL0RynAOhK3rxPaxcqXIyis224Hd%2ByZdAgb4kQrHB7ORECoyM5PIs6Jo3y1q1R2xDNKIE245AK6K0B0p%2B2zmQ8OlwdmStKWlJ7TFi5eKgqdZnMvaNc&X-Amz-Signature=ba5fee6d8d5b4070cc7f0e22cfbb37205ac5777216a6fa72986b52ea5a06beaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJLQ3B5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh4rLhrWf0m3HZEgr9jf4l8vHPxd5xPZecpaJVu4w0ZAiAN7sPajhJNQh51u96JtCtIT4SXe1w6vPfLd0nxAvXiwCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqXdfScXuToL8kwFKtwDKd4tSVSLCHPPye2sTtdQWatJfI0fj3LSSBnTnKEs6ePj9nZmGGnp9Zv5vUpGtY0H0H7jXmH30Vy3j%2FDGyOYC%2FcwFGyO7wUzhTbWoOEPZEKEAHBswLM81YhdnABIJcFUVLfAIV8NfhKZWeMLhqdru6PeVwFHjWAWtoAwR17c9tWLHV8XMUCWTA7gQ0y3bYkIf1%2BaCuvt0AKnWJiH6ygGg9QpSSKh0VM4jZeAVaiGXGCCyNdI7hDvek6FbBltdA1jk5t0MlCvJc3zbKDNRQ9YaIHML%2F3JpCyx7VQavQUUhS%2FEgJXs6hGZ5SkGdyXnXPac5JZw6BnD8Bytp%2BfYMYy4GKjrlniGJ7lbzL2TofMc4D4u%2FKRHxN%2FACXJZEKOwuSqkJVB2g2UwnwB9KEyO8mjB1tUfBTUpyRBDFrgj0UFd5LcYY2YE23uaNUJ0SfpOSxyGIPrnlBPE5rcIoLWOtgMF8OHgDlgCgTCWDUfTEnHGiT34t7HmhY3nLmxWSM8jBu6taeCoGS%2FbJrzf9mKX3RYAE7LzItw43gYjHJQYBL%2BYoRSa2POVynLvWvucsKb%2FQhprMl176RSSqh8pybP%2Bw6D6aFvX6mtTk%2FxKlTY5TClBvjTIfcV3OuGcvUJnI4H8wvojfwQY6pgFBRoAdwt%2F%2F8ZZYVpkNBs6CABclmnMJMZH1Ow4mtSOtECGC3pE%2FTqoNhfZsWpUSPw9lZN%2BTZpYTSgnHhe20oeYwOkS78U%2B96SZBpegNMrZPQEOL0RynAOhK3rxPaxcqXIyis224Hd%2ByZdAgb4kQrHB7ORECoyM5PIs6Jo3y1q1R2xDNKIE245AK6K0B0p%2B2zmQ8OlwdmStKWlJ7TFi5eKgqdZnMvaNc&X-Amz-Signature=9eb22641ece10ea9bfad4f7ebf80cebce9229a9ae9a79efcfc0801061a50fbb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJLQ3B5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh4rLhrWf0m3HZEgr9jf4l8vHPxd5xPZecpaJVu4w0ZAiAN7sPajhJNQh51u96JtCtIT4SXe1w6vPfLd0nxAvXiwCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqXdfScXuToL8kwFKtwDKd4tSVSLCHPPye2sTtdQWatJfI0fj3LSSBnTnKEs6ePj9nZmGGnp9Zv5vUpGtY0H0H7jXmH30Vy3j%2FDGyOYC%2FcwFGyO7wUzhTbWoOEPZEKEAHBswLM81YhdnABIJcFUVLfAIV8NfhKZWeMLhqdru6PeVwFHjWAWtoAwR17c9tWLHV8XMUCWTA7gQ0y3bYkIf1%2BaCuvt0AKnWJiH6ygGg9QpSSKh0VM4jZeAVaiGXGCCyNdI7hDvek6FbBltdA1jk5t0MlCvJc3zbKDNRQ9YaIHML%2F3JpCyx7VQavQUUhS%2FEgJXs6hGZ5SkGdyXnXPac5JZw6BnD8Bytp%2BfYMYy4GKjrlniGJ7lbzL2TofMc4D4u%2FKRHxN%2FACXJZEKOwuSqkJVB2g2UwnwB9KEyO8mjB1tUfBTUpyRBDFrgj0UFd5LcYY2YE23uaNUJ0SfpOSxyGIPrnlBPE5rcIoLWOtgMF8OHgDlgCgTCWDUfTEnHGiT34t7HmhY3nLmxWSM8jBu6taeCoGS%2FbJrzf9mKX3RYAE7LzItw43gYjHJQYBL%2BYoRSa2POVynLvWvucsKb%2FQhprMl176RSSqh8pybP%2Bw6D6aFvX6mtTk%2FxKlTY5TClBvjTIfcV3OuGcvUJnI4H8wvojfwQY6pgFBRoAdwt%2F%2F8ZZYVpkNBs6CABclmnMJMZH1Ow4mtSOtECGC3pE%2FTqoNhfZsWpUSPw9lZN%2BTZpYTSgnHhe20oeYwOkS78U%2B96SZBpegNMrZPQEOL0RynAOhK3rxPaxcqXIyis224Hd%2ByZdAgb4kQrHB7ORECoyM5PIs6Jo3y1q1R2xDNKIE245AK6K0B0p%2B2zmQ8OlwdmStKWlJ7TFi5eKgqdZnMvaNc&X-Amz-Signature=0f7955e7cdcc6354656a5989e29687b323734f94ec31a707931809d54ceeacd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
