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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJBG3SK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDuQck0xZNvdu8309cc76KxGkBJcTHlfFx%2BerhdpDKHoAIhAO%2F7eW9WOTqd7rlgBRveiqtnX7TuFlEY3QbX9GA2ZJBeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmWDMlUqkZ8mDM0aQq3AMD6%2FC6RDTNDpuEvLlWQb9RPfA4x%2BIlz6xUVK7LLdUgOXM7Bej4CWhJjTVlumFNQp2bR85ArEvBhTnWuYw57O0fz7xdGe0s7%2Bn8BedDfRPFooD7VoyS7ZE61WGLFDn8%2FuL3WCkgOdZegNrXwYIqsg04acWeP5%2BOawJKqiLfsB7t3pEptg9gv%2BqvvJDTVVrSx3BpJGYdCvKwqxpFwDyaHM%2FCGxJmStKYgsE%2BpNJmBHBPYIM2cJM2z8wGaeD3Pgps1WZ2M1bnb3xFMdSY8cmNQSxngivs0aJngkI02B1FHUlqzRxO8O6bTv1ug0o5Be6o2eOPJRQsyCxcBKRFlpI%2BMoxQJs%2BYbGHbnxRQoiX435uAyu5j7caMKxSaPtKxqaqjw8OQ%2F87ZcO8TPxmQc59h%2F%2BAeqLrkVICJ6JNBUjTzc%2FihKfhww85scZ3VJCyr4%2FLNKCj4SlYCDaEhvEAUzlekfZ4BTSlUFsYxRTWFggXlp7%2B0saDss%2BKXU%2FcWowOE466nj5H1drfuzL4MhLQ9SlnH%2Bf7vSyV0YX2C7H1i5vi0r1h5VlijmUfw6xNZZACJ3m%2FSJTk172lynvXmfogBhldEcucji1YuHCZAAHedDFvHv5Uq3r1IJzLpzIWAAq5t0DDdvd6%2FBjqkAQtdYHLkJeusoi1QOU5xbCuD8wcEFHzDM0yjEo%2BYDt3np9LAnrbkBV3lZ7PeQjBPSgYIBLs1jBV6RafA2Atj%2BKXfnn%2Fl8AYDHiCQQecF%2BYiVkwjV96P1noiL7ts4spFf%2Bxl7OyyIWI7L3ARcBfprhE8joWxS9sBY52nxNHu%2FufQZImH5GH4fu4dAHXHi27XFSRniTlcAV60gPu2zRm8kIGF%2BGTR2&X-Amz-Signature=8701d966ae6ce50a67af30778edcfb3edddd198af8ef2440d697a906f6b35d75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJBG3SK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDuQck0xZNvdu8309cc76KxGkBJcTHlfFx%2BerhdpDKHoAIhAO%2F7eW9WOTqd7rlgBRveiqtnX7TuFlEY3QbX9GA2ZJBeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmWDMlUqkZ8mDM0aQq3AMD6%2FC6RDTNDpuEvLlWQb9RPfA4x%2BIlz6xUVK7LLdUgOXM7Bej4CWhJjTVlumFNQp2bR85ArEvBhTnWuYw57O0fz7xdGe0s7%2Bn8BedDfRPFooD7VoyS7ZE61WGLFDn8%2FuL3WCkgOdZegNrXwYIqsg04acWeP5%2BOawJKqiLfsB7t3pEptg9gv%2BqvvJDTVVrSx3BpJGYdCvKwqxpFwDyaHM%2FCGxJmStKYgsE%2BpNJmBHBPYIM2cJM2z8wGaeD3Pgps1WZ2M1bnb3xFMdSY8cmNQSxngivs0aJngkI02B1FHUlqzRxO8O6bTv1ug0o5Be6o2eOPJRQsyCxcBKRFlpI%2BMoxQJs%2BYbGHbnxRQoiX435uAyu5j7caMKxSaPtKxqaqjw8OQ%2F87ZcO8TPxmQc59h%2F%2BAeqLrkVICJ6JNBUjTzc%2FihKfhww85scZ3VJCyr4%2FLNKCj4SlYCDaEhvEAUzlekfZ4BTSlUFsYxRTWFggXlp7%2B0saDss%2BKXU%2FcWowOE466nj5H1drfuzL4MhLQ9SlnH%2Bf7vSyV0YX2C7H1i5vi0r1h5VlijmUfw6xNZZACJ3m%2FSJTk172lynvXmfogBhldEcucji1YuHCZAAHedDFvHv5Uq3r1IJzLpzIWAAq5t0DDdvd6%2FBjqkAQtdYHLkJeusoi1QOU5xbCuD8wcEFHzDM0yjEo%2BYDt3np9LAnrbkBV3lZ7PeQjBPSgYIBLs1jBV6RafA2Atj%2BKXfnn%2Fl8AYDHiCQQecF%2BYiVkwjV96P1noiL7ts4spFf%2Bxl7OyyIWI7L3ARcBfprhE8joWxS9sBY52nxNHu%2FufQZImH5GH4fu4dAHXHi27XFSRniTlcAV60gPu2zRm8kIGF%2BGTR2&X-Amz-Signature=77df817e256abddfd9f0f5193c92bd79aceec7c27ed6e7174b94a1c229ce7320&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJBG3SK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDuQck0xZNvdu8309cc76KxGkBJcTHlfFx%2BerhdpDKHoAIhAO%2F7eW9WOTqd7rlgBRveiqtnX7TuFlEY3QbX9GA2ZJBeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmWDMlUqkZ8mDM0aQq3AMD6%2FC6RDTNDpuEvLlWQb9RPfA4x%2BIlz6xUVK7LLdUgOXM7Bej4CWhJjTVlumFNQp2bR85ArEvBhTnWuYw57O0fz7xdGe0s7%2Bn8BedDfRPFooD7VoyS7ZE61WGLFDn8%2FuL3WCkgOdZegNrXwYIqsg04acWeP5%2BOawJKqiLfsB7t3pEptg9gv%2BqvvJDTVVrSx3BpJGYdCvKwqxpFwDyaHM%2FCGxJmStKYgsE%2BpNJmBHBPYIM2cJM2z8wGaeD3Pgps1WZ2M1bnb3xFMdSY8cmNQSxngivs0aJngkI02B1FHUlqzRxO8O6bTv1ug0o5Be6o2eOPJRQsyCxcBKRFlpI%2BMoxQJs%2BYbGHbnxRQoiX435uAyu5j7caMKxSaPtKxqaqjw8OQ%2F87ZcO8TPxmQc59h%2F%2BAeqLrkVICJ6JNBUjTzc%2FihKfhww85scZ3VJCyr4%2FLNKCj4SlYCDaEhvEAUzlekfZ4BTSlUFsYxRTWFggXlp7%2B0saDss%2BKXU%2FcWowOE466nj5H1drfuzL4MhLQ9SlnH%2Bf7vSyV0YX2C7H1i5vi0r1h5VlijmUfw6xNZZACJ3m%2FSJTk172lynvXmfogBhldEcucji1YuHCZAAHedDFvHv5Uq3r1IJzLpzIWAAq5t0DDdvd6%2FBjqkAQtdYHLkJeusoi1QOU5xbCuD8wcEFHzDM0yjEo%2BYDt3np9LAnrbkBV3lZ7PeQjBPSgYIBLs1jBV6RafA2Atj%2BKXfnn%2Fl8AYDHiCQQecF%2BYiVkwjV96P1noiL7ts4spFf%2Bxl7OyyIWI7L3ARcBfprhE8joWxS9sBY52nxNHu%2FufQZImH5GH4fu4dAHXHi27XFSRniTlcAV60gPu2zRm8kIGF%2BGTR2&X-Amz-Signature=44ca61277db902ce164632b8a0c1e8cc01baeecd93b2edcb01f3ee4167dd9607&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJBG3SK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDuQck0xZNvdu8309cc76KxGkBJcTHlfFx%2BerhdpDKHoAIhAO%2F7eW9WOTqd7rlgBRveiqtnX7TuFlEY3QbX9GA2ZJBeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmWDMlUqkZ8mDM0aQq3AMD6%2FC6RDTNDpuEvLlWQb9RPfA4x%2BIlz6xUVK7LLdUgOXM7Bej4CWhJjTVlumFNQp2bR85ArEvBhTnWuYw57O0fz7xdGe0s7%2Bn8BedDfRPFooD7VoyS7ZE61WGLFDn8%2FuL3WCkgOdZegNrXwYIqsg04acWeP5%2BOawJKqiLfsB7t3pEptg9gv%2BqvvJDTVVrSx3BpJGYdCvKwqxpFwDyaHM%2FCGxJmStKYgsE%2BpNJmBHBPYIM2cJM2z8wGaeD3Pgps1WZ2M1bnb3xFMdSY8cmNQSxngivs0aJngkI02B1FHUlqzRxO8O6bTv1ug0o5Be6o2eOPJRQsyCxcBKRFlpI%2BMoxQJs%2BYbGHbnxRQoiX435uAyu5j7caMKxSaPtKxqaqjw8OQ%2F87ZcO8TPxmQc59h%2F%2BAeqLrkVICJ6JNBUjTzc%2FihKfhww85scZ3VJCyr4%2FLNKCj4SlYCDaEhvEAUzlekfZ4BTSlUFsYxRTWFggXlp7%2B0saDss%2BKXU%2FcWowOE466nj5H1drfuzL4MhLQ9SlnH%2Bf7vSyV0YX2C7H1i5vi0r1h5VlijmUfw6xNZZACJ3m%2FSJTk172lynvXmfogBhldEcucji1YuHCZAAHedDFvHv5Uq3r1IJzLpzIWAAq5t0DDdvd6%2FBjqkAQtdYHLkJeusoi1QOU5xbCuD8wcEFHzDM0yjEo%2BYDt3np9LAnrbkBV3lZ7PeQjBPSgYIBLs1jBV6RafA2Atj%2BKXfnn%2Fl8AYDHiCQQecF%2BYiVkwjV96P1noiL7ts4spFf%2Bxl7OyyIWI7L3ARcBfprhE8joWxS9sBY52nxNHu%2FufQZImH5GH4fu4dAHXHi27XFSRniTlcAV60gPu2zRm8kIGF%2BGTR2&X-Amz-Signature=4ae9a0e4b8ca9e145ff6e4fdbe1a1e39d097c5b86c320cad8bf92968463f206a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJBG3SK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDuQck0xZNvdu8309cc76KxGkBJcTHlfFx%2BerhdpDKHoAIhAO%2F7eW9WOTqd7rlgBRveiqtnX7TuFlEY3QbX9GA2ZJBeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmWDMlUqkZ8mDM0aQq3AMD6%2FC6RDTNDpuEvLlWQb9RPfA4x%2BIlz6xUVK7LLdUgOXM7Bej4CWhJjTVlumFNQp2bR85ArEvBhTnWuYw57O0fz7xdGe0s7%2Bn8BedDfRPFooD7VoyS7ZE61WGLFDn8%2FuL3WCkgOdZegNrXwYIqsg04acWeP5%2BOawJKqiLfsB7t3pEptg9gv%2BqvvJDTVVrSx3BpJGYdCvKwqxpFwDyaHM%2FCGxJmStKYgsE%2BpNJmBHBPYIM2cJM2z8wGaeD3Pgps1WZ2M1bnb3xFMdSY8cmNQSxngivs0aJngkI02B1FHUlqzRxO8O6bTv1ug0o5Be6o2eOPJRQsyCxcBKRFlpI%2BMoxQJs%2BYbGHbnxRQoiX435uAyu5j7caMKxSaPtKxqaqjw8OQ%2F87ZcO8TPxmQc59h%2F%2BAeqLrkVICJ6JNBUjTzc%2FihKfhww85scZ3VJCyr4%2FLNKCj4SlYCDaEhvEAUzlekfZ4BTSlUFsYxRTWFggXlp7%2B0saDss%2BKXU%2FcWowOE466nj5H1drfuzL4MhLQ9SlnH%2Bf7vSyV0YX2C7H1i5vi0r1h5VlijmUfw6xNZZACJ3m%2FSJTk172lynvXmfogBhldEcucji1YuHCZAAHedDFvHv5Uq3r1IJzLpzIWAAq5t0DDdvd6%2FBjqkAQtdYHLkJeusoi1QOU5xbCuD8wcEFHzDM0yjEo%2BYDt3np9LAnrbkBV3lZ7PeQjBPSgYIBLs1jBV6RafA2Atj%2BKXfnn%2Fl8AYDHiCQQecF%2BYiVkwjV96P1noiL7ts4spFf%2Bxl7OyyIWI7L3ARcBfprhE8joWxS9sBY52nxNHu%2FufQZImH5GH4fu4dAHXHi27XFSRniTlcAV60gPu2zRm8kIGF%2BGTR2&X-Amz-Signature=cd998729df65168180c98f1a4b2ed40c870a14a3c7cdcc0bc2aa69a4eb72b384&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
