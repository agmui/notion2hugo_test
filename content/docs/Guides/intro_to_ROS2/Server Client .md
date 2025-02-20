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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROIXMJZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v%2FudtIf%2FiWwK0J8j3iN%2BcsKWSgJkcpemhsT57i6i1wIhANZZq0L4QSZw63K8HGKKPRVGtGFdNjVvpwo7%2BlcauamLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BbR384YlCHLFfwWQq3AOqT7CExOyESnGA2uVg2t3zDZBQ%2FLo3ROgLPmuGHOZMpV%2FVmrTZelTQuv80TMooXl1xVuMR3i5dU5UgPn0BVI0JBxvuQRCl%2BRlOnkS%2BAcZULKE8loVTCC0NEYYHD0damv92mYPEuvCE%2FzRoZm5zR0NvSJyxH1HKvoQD9A87%2FDq6xkubBqzbUksMXUX0aVYkaS6Z3WkTRifH%2BfT3ygWnYGxM5KgHSIftVnKzaPJKD2ecR4r%2Bs8gcjlsdq2G8v9MMgwSt1vsfLMOJdaLP9Pr8bdZKke0PoPPYyr1XTA4yWdPS4kuXtZqgYiVMbmFqFqitNohZpP7OHY1pphy5zQnL6dcV1rNlDz8SHerAV89ZPrcCltyoeXHzbzP7eepB55jy5lJSWFZmybvNlUI3nUVMcQPPAO5LrwDnGZ246Aiekm1%2FtCuwMi6NR7TCA5lF4UBv23HIb7RKv0vx1ZKl%2BKRn8q4lNjDzD7G5WybqiDmhrhdpeJ6tZoo4A9SGyCkyOsn2sq51AhmhZmrkc10xPlqb%2F0iGYUI8myL6xvoDs%2B0rPSEeElTtQbn40qevnOdQZgFYEJl0QTr4xOFShEjVAjFKCNYUg04OYAESpRNPr1h2Hx%2BctwZOwhnp6ZsvWGNe0TC559m9BjqkAWWb6sIBg9HxnCV%2FN%2F8j67%2FLXkSrIsV3jzGoK4lM0evTw06YSDFPscGLW94pvEpeu8TcWvhhPbxPURYy%2Fk8mZ5nhguxkEhqDpXEJ6Xoa2wRNo7V9FuwESF36tEZJjQ4hJQwHV3Rb%2B6SRvXLUXsxg4ebtM6p6pE5VGXLYesUzHT2pYdAF2xSfj64VHq%2F89W5qpX77RHMo1Qml4Y8rlPl9QEaMaQ%2Bz&X-Amz-Signature=d3d19d8e41f4c1a2b1f6cb2071e4d68d0bddd27a5f7ccff8159711ff0613b3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROIXMJZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v%2FudtIf%2FiWwK0J8j3iN%2BcsKWSgJkcpemhsT57i6i1wIhANZZq0L4QSZw63K8HGKKPRVGtGFdNjVvpwo7%2BlcauamLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BbR384YlCHLFfwWQq3AOqT7CExOyESnGA2uVg2t3zDZBQ%2FLo3ROgLPmuGHOZMpV%2FVmrTZelTQuv80TMooXl1xVuMR3i5dU5UgPn0BVI0JBxvuQRCl%2BRlOnkS%2BAcZULKE8loVTCC0NEYYHD0damv92mYPEuvCE%2FzRoZm5zR0NvSJyxH1HKvoQD9A87%2FDq6xkubBqzbUksMXUX0aVYkaS6Z3WkTRifH%2BfT3ygWnYGxM5KgHSIftVnKzaPJKD2ecR4r%2Bs8gcjlsdq2G8v9MMgwSt1vsfLMOJdaLP9Pr8bdZKke0PoPPYyr1XTA4yWdPS4kuXtZqgYiVMbmFqFqitNohZpP7OHY1pphy5zQnL6dcV1rNlDz8SHerAV89ZPrcCltyoeXHzbzP7eepB55jy5lJSWFZmybvNlUI3nUVMcQPPAO5LrwDnGZ246Aiekm1%2FtCuwMi6NR7TCA5lF4UBv23HIb7RKv0vx1ZKl%2BKRn8q4lNjDzD7G5WybqiDmhrhdpeJ6tZoo4A9SGyCkyOsn2sq51AhmhZmrkc10xPlqb%2F0iGYUI8myL6xvoDs%2B0rPSEeElTtQbn40qevnOdQZgFYEJl0QTr4xOFShEjVAjFKCNYUg04OYAESpRNPr1h2Hx%2BctwZOwhnp6ZsvWGNe0TC559m9BjqkAWWb6sIBg9HxnCV%2FN%2F8j67%2FLXkSrIsV3jzGoK4lM0evTw06YSDFPscGLW94pvEpeu8TcWvhhPbxPURYy%2Fk8mZ5nhguxkEhqDpXEJ6Xoa2wRNo7V9FuwESF36tEZJjQ4hJQwHV3Rb%2B6SRvXLUXsxg4ebtM6p6pE5VGXLYesUzHT2pYdAF2xSfj64VHq%2F89W5qpX77RHMo1Qml4Y8rlPl9QEaMaQ%2Bz&X-Amz-Signature=79149f69cd9e192bb03a6573d305c547887ff3ee1952d8904a7b88ff7dd411d7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROIXMJZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v%2FudtIf%2FiWwK0J8j3iN%2BcsKWSgJkcpemhsT57i6i1wIhANZZq0L4QSZw63K8HGKKPRVGtGFdNjVvpwo7%2BlcauamLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BbR384YlCHLFfwWQq3AOqT7CExOyESnGA2uVg2t3zDZBQ%2FLo3ROgLPmuGHOZMpV%2FVmrTZelTQuv80TMooXl1xVuMR3i5dU5UgPn0BVI0JBxvuQRCl%2BRlOnkS%2BAcZULKE8loVTCC0NEYYHD0damv92mYPEuvCE%2FzRoZm5zR0NvSJyxH1HKvoQD9A87%2FDq6xkubBqzbUksMXUX0aVYkaS6Z3WkTRifH%2BfT3ygWnYGxM5KgHSIftVnKzaPJKD2ecR4r%2Bs8gcjlsdq2G8v9MMgwSt1vsfLMOJdaLP9Pr8bdZKke0PoPPYyr1XTA4yWdPS4kuXtZqgYiVMbmFqFqitNohZpP7OHY1pphy5zQnL6dcV1rNlDz8SHerAV89ZPrcCltyoeXHzbzP7eepB55jy5lJSWFZmybvNlUI3nUVMcQPPAO5LrwDnGZ246Aiekm1%2FtCuwMi6NR7TCA5lF4UBv23HIb7RKv0vx1ZKl%2BKRn8q4lNjDzD7G5WybqiDmhrhdpeJ6tZoo4A9SGyCkyOsn2sq51AhmhZmrkc10xPlqb%2F0iGYUI8myL6xvoDs%2B0rPSEeElTtQbn40qevnOdQZgFYEJl0QTr4xOFShEjVAjFKCNYUg04OYAESpRNPr1h2Hx%2BctwZOwhnp6ZsvWGNe0TC559m9BjqkAWWb6sIBg9HxnCV%2FN%2F8j67%2FLXkSrIsV3jzGoK4lM0evTw06YSDFPscGLW94pvEpeu8TcWvhhPbxPURYy%2Fk8mZ5nhguxkEhqDpXEJ6Xoa2wRNo7V9FuwESF36tEZJjQ4hJQwHV3Rb%2B6SRvXLUXsxg4ebtM6p6pE5VGXLYesUzHT2pYdAF2xSfj64VHq%2F89W5qpX77RHMo1Qml4Y8rlPl9QEaMaQ%2Bz&X-Amz-Signature=e4d62646cc0b0ce729948348380e8610485143cb5b8585dd90644857f6155d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROIXMJZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v%2FudtIf%2FiWwK0J8j3iN%2BcsKWSgJkcpemhsT57i6i1wIhANZZq0L4QSZw63K8HGKKPRVGtGFdNjVvpwo7%2BlcauamLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BbR384YlCHLFfwWQq3AOqT7CExOyESnGA2uVg2t3zDZBQ%2FLo3ROgLPmuGHOZMpV%2FVmrTZelTQuv80TMooXl1xVuMR3i5dU5UgPn0BVI0JBxvuQRCl%2BRlOnkS%2BAcZULKE8loVTCC0NEYYHD0damv92mYPEuvCE%2FzRoZm5zR0NvSJyxH1HKvoQD9A87%2FDq6xkubBqzbUksMXUX0aVYkaS6Z3WkTRifH%2BfT3ygWnYGxM5KgHSIftVnKzaPJKD2ecR4r%2Bs8gcjlsdq2G8v9MMgwSt1vsfLMOJdaLP9Pr8bdZKke0PoPPYyr1XTA4yWdPS4kuXtZqgYiVMbmFqFqitNohZpP7OHY1pphy5zQnL6dcV1rNlDz8SHerAV89ZPrcCltyoeXHzbzP7eepB55jy5lJSWFZmybvNlUI3nUVMcQPPAO5LrwDnGZ246Aiekm1%2FtCuwMi6NR7TCA5lF4UBv23HIb7RKv0vx1ZKl%2BKRn8q4lNjDzD7G5WybqiDmhrhdpeJ6tZoo4A9SGyCkyOsn2sq51AhmhZmrkc10xPlqb%2F0iGYUI8myL6xvoDs%2B0rPSEeElTtQbn40qevnOdQZgFYEJl0QTr4xOFShEjVAjFKCNYUg04OYAESpRNPr1h2Hx%2BctwZOwhnp6ZsvWGNe0TC559m9BjqkAWWb6sIBg9HxnCV%2FN%2F8j67%2FLXkSrIsV3jzGoK4lM0evTw06YSDFPscGLW94pvEpeu8TcWvhhPbxPURYy%2Fk8mZ5nhguxkEhqDpXEJ6Xoa2wRNo7V9FuwESF36tEZJjQ4hJQwHV3Rb%2B6SRvXLUXsxg4ebtM6p6pE5VGXLYesUzHT2pYdAF2xSfj64VHq%2F89W5qpX77RHMo1Qml4Y8rlPl9QEaMaQ%2Bz&X-Amz-Signature=873b9dafde0da1614119a87cd48ef7044bece929b7d8580891c130fefe89e0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROIXMJZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v%2FudtIf%2FiWwK0J8j3iN%2BcsKWSgJkcpemhsT57i6i1wIhANZZq0L4QSZw63K8HGKKPRVGtGFdNjVvpwo7%2BlcauamLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BbR384YlCHLFfwWQq3AOqT7CExOyESnGA2uVg2t3zDZBQ%2FLo3ROgLPmuGHOZMpV%2FVmrTZelTQuv80TMooXl1xVuMR3i5dU5UgPn0BVI0JBxvuQRCl%2BRlOnkS%2BAcZULKE8loVTCC0NEYYHD0damv92mYPEuvCE%2FzRoZm5zR0NvSJyxH1HKvoQD9A87%2FDq6xkubBqzbUksMXUX0aVYkaS6Z3WkTRifH%2BfT3ygWnYGxM5KgHSIftVnKzaPJKD2ecR4r%2Bs8gcjlsdq2G8v9MMgwSt1vsfLMOJdaLP9Pr8bdZKke0PoPPYyr1XTA4yWdPS4kuXtZqgYiVMbmFqFqitNohZpP7OHY1pphy5zQnL6dcV1rNlDz8SHerAV89ZPrcCltyoeXHzbzP7eepB55jy5lJSWFZmybvNlUI3nUVMcQPPAO5LrwDnGZ246Aiekm1%2FtCuwMi6NR7TCA5lF4UBv23HIb7RKv0vx1ZKl%2BKRn8q4lNjDzD7G5WybqiDmhrhdpeJ6tZoo4A9SGyCkyOsn2sq51AhmhZmrkc10xPlqb%2F0iGYUI8myL6xvoDs%2B0rPSEeElTtQbn40qevnOdQZgFYEJl0QTr4xOFShEjVAjFKCNYUg04OYAESpRNPr1h2Hx%2BctwZOwhnp6ZsvWGNe0TC559m9BjqkAWWb6sIBg9HxnCV%2FN%2F8j67%2FLXkSrIsV3jzGoK4lM0evTw06YSDFPscGLW94pvEpeu8TcWvhhPbxPURYy%2Fk8mZ5nhguxkEhqDpXEJ6Xoa2wRNo7V9FuwESF36tEZJjQ4hJQwHV3Rb%2B6SRvXLUXsxg4ebtM6p6pE5VGXLYesUzHT2pYdAF2xSfj64VHq%2F89W5qpX77RHMo1Qml4Y8rlPl9QEaMaQ%2Bz&X-Amz-Signature=037ce36253dffd571fadf45b413b90be3bc39a0bd93dd40d46d83e2fe059f152&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
