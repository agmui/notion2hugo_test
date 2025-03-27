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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDBTE2Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1P7X6Mm8YAt9eSydKQru1fyh2CaLjA6d%2F74m71u%2BqCwIhAO8XJdRrtFq3TFKZMqVGG2TpZRGgEQHhIAJOxbC4a3GqKv8DCD4QABoMNjM3NDIzMTgzODA1IgxQusHmOsVKhzm0Qq8q3ANpCTWcCi8dwFP8QKPzG3ZRKFUKDWz%2FHikEPXmN9gSpKYlAW4pLM13Vv64wbQyBTvQW4dhA8IVuCMQaHoNCImTufOPHmDSmn3lc%2BTrhQhN1jl1bW5TWSO3EhKUam5C5j2JUEpX6pFctFNDiUmymj%2ByZZIE46LR1k0FShUl120qa9BGWXQpOXP583vOPToy8qMdhPBDtThgCNdKj2a4CdiBmMBRe0OwFIzX2bPSzxYuHGS2w7FR0VtfkypMMezG854DLEh18IUafAq8%2BWxzO5Uw6Ow4ExNYCVnY6rxwuke8CUx34ARSkJRKyniVQJE%2FtKZHlZmuf6tomkIoKkG04GqVwAyvA5pP9aBpzf3GJH9zrrUbm7hig5HjDPZmNBK9UvH1i%2Ff3Yye4jzlqNYo%2FH2nsrM7vA2r3YZT5%2FG%2BSERxhFu8rXdv1oY7%2FrMoLc0jVyKEJdeYBaSnE4MB4YqkFUropDf%2B0lv87x3qgqsT4DT%2FmVr916pvTaaiDqzhzX8AR4Hje6xSSqWVGXfwRsfxt1OK%2BEVup3ybqaWMs6NERASLf8ch6vnb%2FuI4hLeSjPi%2Bb7VVFud%2BPSPSIdJLsxIzxhs0amh4YKd9yycGLKq%2BR%2FaMMgvvG1LMlaG4wDBW5wRTD%2BpJO%2FBjqkAXWE%2Fp%2B%2FKxR1UPic0bXn%2BzAwkFkQU4lv6EY5nXWrFZh3lMTTfOPd%2BBP9U1lUkOa%2Bxz0NsXkNooryli9CTzQkUfNy3KXbF8pWoRZ9SMAGCOg2eSTKLTBaAxzmXodMYUe2PMtzvKpnd%2BIZcuKqXB6hoaJDqmk0Vj3iRkC7F%2BzXmbWmaHOdj%2Fa40nbKxFqfUG9H%2BJHCdZ8guskYvLqLnebFfstU%2BORW&X-Amz-Signature=07c9f547d3705414111cf1cab6d7b1dce06482daa6c95008bb36a951a98617b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDBTE2Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1P7X6Mm8YAt9eSydKQru1fyh2CaLjA6d%2F74m71u%2BqCwIhAO8XJdRrtFq3TFKZMqVGG2TpZRGgEQHhIAJOxbC4a3GqKv8DCD4QABoMNjM3NDIzMTgzODA1IgxQusHmOsVKhzm0Qq8q3ANpCTWcCi8dwFP8QKPzG3ZRKFUKDWz%2FHikEPXmN9gSpKYlAW4pLM13Vv64wbQyBTvQW4dhA8IVuCMQaHoNCImTufOPHmDSmn3lc%2BTrhQhN1jl1bW5TWSO3EhKUam5C5j2JUEpX6pFctFNDiUmymj%2ByZZIE46LR1k0FShUl120qa9BGWXQpOXP583vOPToy8qMdhPBDtThgCNdKj2a4CdiBmMBRe0OwFIzX2bPSzxYuHGS2w7FR0VtfkypMMezG854DLEh18IUafAq8%2BWxzO5Uw6Ow4ExNYCVnY6rxwuke8CUx34ARSkJRKyniVQJE%2FtKZHlZmuf6tomkIoKkG04GqVwAyvA5pP9aBpzf3GJH9zrrUbm7hig5HjDPZmNBK9UvH1i%2Ff3Yye4jzlqNYo%2FH2nsrM7vA2r3YZT5%2FG%2BSERxhFu8rXdv1oY7%2FrMoLc0jVyKEJdeYBaSnE4MB4YqkFUropDf%2B0lv87x3qgqsT4DT%2FmVr916pvTaaiDqzhzX8AR4Hje6xSSqWVGXfwRsfxt1OK%2BEVup3ybqaWMs6NERASLf8ch6vnb%2FuI4hLeSjPi%2Bb7VVFud%2BPSPSIdJLsxIzxhs0amh4YKd9yycGLKq%2BR%2FaMMgvvG1LMlaG4wDBW5wRTD%2BpJO%2FBjqkAXWE%2Fp%2B%2FKxR1UPic0bXn%2BzAwkFkQU4lv6EY5nXWrFZh3lMTTfOPd%2BBP9U1lUkOa%2Bxz0NsXkNooryli9CTzQkUfNy3KXbF8pWoRZ9SMAGCOg2eSTKLTBaAxzmXodMYUe2PMtzvKpnd%2BIZcuKqXB6hoaJDqmk0Vj3iRkC7F%2BzXmbWmaHOdj%2Fa40nbKxFqfUG9H%2BJHCdZ8guskYvLqLnebFfstU%2BORW&X-Amz-Signature=2c6ad3301f6abd4cbaa69640f6e6c558e06e57f898018061a14952e6572efe6d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDBTE2Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1P7X6Mm8YAt9eSydKQru1fyh2CaLjA6d%2F74m71u%2BqCwIhAO8XJdRrtFq3TFKZMqVGG2TpZRGgEQHhIAJOxbC4a3GqKv8DCD4QABoMNjM3NDIzMTgzODA1IgxQusHmOsVKhzm0Qq8q3ANpCTWcCi8dwFP8QKPzG3ZRKFUKDWz%2FHikEPXmN9gSpKYlAW4pLM13Vv64wbQyBTvQW4dhA8IVuCMQaHoNCImTufOPHmDSmn3lc%2BTrhQhN1jl1bW5TWSO3EhKUam5C5j2JUEpX6pFctFNDiUmymj%2ByZZIE46LR1k0FShUl120qa9BGWXQpOXP583vOPToy8qMdhPBDtThgCNdKj2a4CdiBmMBRe0OwFIzX2bPSzxYuHGS2w7FR0VtfkypMMezG854DLEh18IUafAq8%2BWxzO5Uw6Ow4ExNYCVnY6rxwuke8CUx34ARSkJRKyniVQJE%2FtKZHlZmuf6tomkIoKkG04GqVwAyvA5pP9aBpzf3GJH9zrrUbm7hig5HjDPZmNBK9UvH1i%2Ff3Yye4jzlqNYo%2FH2nsrM7vA2r3YZT5%2FG%2BSERxhFu8rXdv1oY7%2FrMoLc0jVyKEJdeYBaSnE4MB4YqkFUropDf%2B0lv87x3qgqsT4DT%2FmVr916pvTaaiDqzhzX8AR4Hje6xSSqWVGXfwRsfxt1OK%2BEVup3ybqaWMs6NERASLf8ch6vnb%2FuI4hLeSjPi%2Bb7VVFud%2BPSPSIdJLsxIzxhs0amh4YKd9yycGLKq%2BR%2FaMMgvvG1LMlaG4wDBW5wRTD%2BpJO%2FBjqkAXWE%2Fp%2B%2FKxR1UPic0bXn%2BzAwkFkQU4lv6EY5nXWrFZh3lMTTfOPd%2BBP9U1lUkOa%2Bxz0NsXkNooryli9CTzQkUfNy3KXbF8pWoRZ9SMAGCOg2eSTKLTBaAxzmXodMYUe2PMtzvKpnd%2BIZcuKqXB6hoaJDqmk0Vj3iRkC7F%2BzXmbWmaHOdj%2Fa40nbKxFqfUG9H%2BJHCdZ8guskYvLqLnebFfstU%2BORW&X-Amz-Signature=2d01d5b86acdc02c5672c845c6882e36c4cf3ab590f5bbe924815078fac6cfed&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDBTE2Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1P7X6Mm8YAt9eSydKQru1fyh2CaLjA6d%2F74m71u%2BqCwIhAO8XJdRrtFq3TFKZMqVGG2TpZRGgEQHhIAJOxbC4a3GqKv8DCD4QABoMNjM3NDIzMTgzODA1IgxQusHmOsVKhzm0Qq8q3ANpCTWcCi8dwFP8QKPzG3ZRKFUKDWz%2FHikEPXmN9gSpKYlAW4pLM13Vv64wbQyBTvQW4dhA8IVuCMQaHoNCImTufOPHmDSmn3lc%2BTrhQhN1jl1bW5TWSO3EhKUam5C5j2JUEpX6pFctFNDiUmymj%2ByZZIE46LR1k0FShUl120qa9BGWXQpOXP583vOPToy8qMdhPBDtThgCNdKj2a4CdiBmMBRe0OwFIzX2bPSzxYuHGS2w7FR0VtfkypMMezG854DLEh18IUafAq8%2BWxzO5Uw6Ow4ExNYCVnY6rxwuke8CUx34ARSkJRKyniVQJE%2FtKZHlZmuf6tomkIoKkG04GqVwAyvA5pP9aBpzf3GJH9zrrUbm7hig5HjDPZmNBK9UvH1i%2Ff3Yye4jzlqNYo%2FH2nsrM7vA2r3YZT5%2FG%2BSERxhFu8rXdv1oY7%2FrMoLc0jVyKEJdeYBaSnE4MB4YqkFUropDf%2B0lv87x3qgqsT4DT%2FmVr916pvTaaiDqzhzX8AR4Hje6xSSqWVGXfwRsfxt1OK%2BEVup3ybqaWMs6NERASLf8ch6vnb%2FuI4hLeSjPi%2Bb7VVFud%2BPSPSIdJLsxIzxhs0amh4YKd9yycGLKq%2BR%2FaMMgvvG1LMlaG4wDBW5wRTD%2BpJO%2FBjqkAXWE%2Fp%2B%2FKxR1UPic0bXn%2BzAwkFkQU4lv6EY5nXWrFZh3lMTTfOPd%2BBP9U1lUkOa%2Bxz0NsXkNooryli9CTzQkUfNy3KXbF8pWoRZ9SMAGCOg2eSTKLTBaAxzmXodMYUe2PMtzvKpnd%2BIZcuKqXB6hoaJDqmk0Vj3iRkC7F%2BzXmbWmaHOdj%2Fa40nbKxFqfUG9H%2BJHCdZ8guskYvLqLnebFfstU%2BORW&X-Amz-Signature=04d797786b431e050418444ccc9e59acc09ce8fd4ab917cc006020c98ecdf13b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDBTE2Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1P7X6Mm8YAt9eSydKQru1fyh2CaLjA6d%2F74m71u%2BqCwIhAO8XJdRrtFq3TFKZMqVGG2TpZRGgEQHhIAJOxbC4a3GqKv8DCD4QABoMNjM3NDIzMTgzODA1IgxQusHmOsVKhzm0Qq8q3ANpCTWcCi8dwFP8QKPzG3ZRKFUKDWz%2FHikEPXmN9gSpKYlAW4pLM13Vv64wbQyBTvQW4dhA8IVuCMQaHoNCImTufOPHmDSmn3lc%2BTrhQhN1jl1bW5TWSO3EhKUam5C5j2JUEpX6pFctFNDiUmymj%2ByZZIE46LR1k0FShUl120qa9BGWXQpOXP583vOPToy8qMdhPBDtThgCNdKj2a4CdiBmMBRe0OwFIzX2bPSzxYuHGS2w7FR0VtfkypMMezG854DLEh18IUafAq8%2BWxzO5Uw6Ow4ExNYCVnY6rxwuke8CUx34ARSkJRKyniVQJE%2FtKZHlZmuf6tomkIoKkG04GqVwAyvA5pP9aBpzf3GJH9zrrUbm7hig5HjDPZmNBK9UvH1i%2Ff3Yye4jzlqNYo%2FH2nsrM7vA2r3YZT5%2FG%2BSERxhFu8rXdv1oY7%2FrMoLc0jVyKEJdeYBaSnE4MB4YqkFUropDf%2B0lv87x3qgqsT4DT%2FmVr916pvTaaiDqzhzX8AR4Hje6xSSqWVGXfwRsfxt1OK%2BEVup3ybqaWMs6NERASLf8ch6vnb%2FuI4hLeSjPi%2Bb7VVFud%2BPSPSIdJLsxIzxhs0amh4YKd9yycGLKq%2BR%2FaMMgvvG1LMlaG4wDBW5wRTD%2BpJO%2FBjqkAXWE%2Fp%2B%2FKxR1UPic0bXn%2BzAwkFkQU4lv6EY5nXWrFZh3lMTTfOPd%2BBP9U1lUkOa%2Bxz0NsXkNooryli9CTzQkUfNy3KXbF8pWoRZ9SMAGCOg2eSTKLTBaAxzmXodMYUe2PMtzvKpnd%2BIZcuKqXB6hoaJDqmk0Vj3iRkC7F%2BzXmbWmaHOdj%2Fa40nbKxFqfUG9H%2BJHCdZ8guskYvLqLnebFfstU%2BORW&X-Amz-Signature=1421acb8590ed1328211ed8143efa90d5ec5732c0c185ca2ed1669547d861d76&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
