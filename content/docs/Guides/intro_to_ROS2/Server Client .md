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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7Q77XM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp%2Bx8Ha9du51iA6X8YZsCTsx%2BfOLVKfPdV3B4FydheAAiEAybXbnXTlwM%2BccflrtdMQCk3DTGIlVnQd0Mrv%2FsQJauMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH7CLoVNcrTrv%2B47cCrcAxpMfvSZxfVK%2F1rD%2F%2FGKRpaWmuCvwSF4J5naWRqIEU35zm1rGhpzGikc4dc4HpTV%2BC7%2F5bQbtgVjfxJvGuJzw8r15RzL8pGpf1%2FYHdSHfJdEFU9nrlMhB%2BslqShXEhxCTw8UcsREfT0mExxRTWSxDDST4CN%2FYRe4p%2Bzd8U35Oe2vx8zigSsmIydp0t9WDV6%2BtHWSx7BRjf2OukOxYLwB2jlgjdX%2FZQG6jY7Jh9OeQfWEpvFExpCN4dJhS4R4PKnITnCk4rQa9bXu19fKg%2BDOryMcB6QSokqyF%2BDaE7xUKSL9qq3aGpqzVfEfoI%2FlXH1%2BEVYZgQubPCJ5RCSZTRmhy%2BRGyK83Nilm00e63lKlcURBajZ9wKLMS%2BaoGoXESMEQ7pv4tc6VzTRaL7KwmdkTc7JV3LEQYph5nSHAb9%2BuACQP35TKnhvRcK3IzX41OvNaYpi%2BQR7ZY5Adz%2B28QI5r3D%2BQp0Ev1evQ1Pj9%2FYFoYhbLzXRkHxOr%2B924JzRxzMaOUZbf4obn%2FcjOZY%2BscjyqSKVnHi8A59r%2B8UyAJdKWhxT6bmZu6LGKJ44brr%2BYCqtB2dndUukqWc14l0BsDDOWzlWn5rMyiXVznTeLqZO5FtITRQk4m0wB3Neyq5rxMMTDxr8GOqUBlR%2FVZV%2F3C6W37xi6Zfx6IU%2FITMSc922jeZk%2FOFQ8lw5XqL6400bcJiobBR26WamFmNl4fSJrBc6kcbd7NjkT5IzRdlQkXyVgxmwYxu07IGP9Yr2qEPTEeteffLQFOy0pYpoi%2BVMutnjHVAEwhWG78feHazPJbblssUvLZZLpCPQmPoTJWfg8jk5ySZiDZS5Hra1xMCMxWZ0aIbRn7jw42pBwUEe1&X-Amz-Signature=a422df73fb43129af364a8e19816b674e960933212aab4365ca34f1ddfaaafb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7Q77XM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp%2Bx8Ha9du51iA6X8YZsCTsx%2BfOLVKfPdV3B4FydheAAiEAybXbnXTlwM%2BccflrtdMQCk3DTGIlVnQd0Mrv%2FsQJauMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH7CLoVNcrTrv%2B47cCrcAxpMfvSZxfVK%2F1rD%2F%2FGKRpaWmuCvwSF4J5naWRqIEU35zm1rGhpzGikc4dc4HpTV%2BC7%2F5bQbtgVjfxJvGuJzw8r15RzL8pGpf1%2FYHdSHfJdEFU9nrlMhB%2BslqShXEhxCTw8UcsREfT0mExxRTWSxDDST4CN%2FYRe4p%2Bzd8U35Oe2vx8zigSsmIydp0t9WDV6%2BtHWSx7BRjf2OukOxYLwB2jlgjdX%2FZQG6jY7Jh9OeQfWEpvFExpCN4dJhS4R4PKnITnCk4rQa9bXu19fKg%2BDOryMcB6QSokqyF%2BDaE7xUKSL9qq3aGpqzVfEfoI%2FlXH1%2BEVYZgQubPCJ5RCSZTRmhy%2BRGyK83Nilm00e63lKlcURBajZ9wKLMS%2BaoGoXESMEQ7pv4tc6VzTRaL7KwmdkTc7JV3LEQYph5nSHAb9%2BuACQP35TKnhvRcK3IzX41OvNaYpi%2BQR7ZY5Adz%2B28QI5r3D%2BQp0Ev1evQ1Pj9%2FYFoYhbLzXRkHxOr%2B924JzRxzMaOUZbf4obn%2FcjOZY%2BscjyqSKVnHi8A59r%2B8UyAJdKWhxT6bmZu6LGKJ44brr%2BYCqtB2dndUukqWc14l0BsDDOWzlWn5rMyiXVznTeLqZO5FtITRQk4m0wB3Neyq5rxMMTDxr8GOqUBlR%2FVZV%2F3C6W37xi6Zfx6IU%2FITMSc922jeZk%2FOFQ8lw5XqL6400bcJiobBR26WamFmNl4fSJrBc6kcbd7NjkT5IzRdlQkXyVgxmwYxu07IGP9Yr2qEPTEeteffLQFOy0pYpoi%2BVMutnjHVAEwhWG78feHazPJbblssUvLZZLpCPQmPoTJWfg8jk5ySZiDZS5Hra1xMCMxWZ0aIbRn7jw42pBwUEe1&X-Amz-Signature=0af83953abfb3376b7f22364fd81c1cc94c136094dd59151f5ff483c1cc96c15&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7Q77XM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp%2Bx8Ha9du51iA6X8YZsCTsx%2BfOLVKfPdV3B4FydheAAiEAybXbnXTlwM%2BccflrtdMQCk3DTGIlVnQd0Mrv%2FsQJauMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH7CLoVNcrTrv%2B47cCrcAxpMfvSZxfVK%2F1rD%2F%2FGKRpaWmuCvwSF4J5naWRqIEU35zm1rGhpzGikc4dc4HpTV%2BC7%2F5bQbtgVjfxJvGuJzw8r15RzL8pGpf1%2FYHdSHfJdEFU9nrlMhB%2BslqShXEhxCTw8UcsREfT0mExxRTWSxDDST4CN%2FYRe4p%2Bzd8U35Oe2vx8zigSsmIydp0t9WDV6%2BtHWSx7BRjf2OukOxYLwB2jlgjdX%2FZQG6jY7Jh9OeQfWEpvFExpCN4dJhS4R4PKnITnCk4rQa9bXu19fKg%2BDOryMcB6QSokqyF%2BDaE7xUKSL9qq3aGpqzVfEfoI%2FlXH1%2BEVYZgQubPCJ5RCSZTRmhy%2BRGyK83Nilm00e63lKlcURBajZ9wKLMS%2BaoGoXESMEQ7pv4tc6VzTRaL7KwmdkTc7JV3LEQYph5nSHAb9%2BuACQP35TKnhvRcK3IzX41OvNaYpi%2BQR7ZY5Adz%2B28QI5r3D%2BQp0Ev1evQ1Pj9%2FYFoYhbLzXRkHxOr%2B924JzRxzMaOUZbf4obn%2FcjOZY%2BscjyqSKVnHi8A59r%2B8UyAJdKWhxT6bmZu6LGKJ44brr%2BYCqtB2dndUukqWc14l0BsDDOWzlWn5rMyiXVznTeLqZO5FtITRQk4m0wB3Neyq5rxMMTDxr8GOqUBlR%2FVZV%2F3C6W37xi6Zfx6IU%2FITMSc922jeZk%2FOFQ8lw5XqL6400bcJiobBR26WamFmNl4fSJrBc6kcbd7NjkT5IzRdlQkXyVgxmwYxu07IGP9Yr2qEPTEeteffLQFOy0pYpoi%2BVMutnjHVAEwhWG78feHazPJbblssUvLZZLpCPQmPoTJWfg8jk5ySZiDZS5Hra1xMCMxWZ0aIbRn7jw42pBwUEe1&X-Amz-Signature=c5206fdc73a4b2c735ccccd0683f4c4d949f8942cf4fa630e92fe87ebf223db8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7Q77XM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp%2Bx8Ha9du51iA6X8YZsCTsx%2BfOLVKfPdV3B4FydheAAiEAybXbnXTlwM%2BccflrtdMQCk3DTGIlVnQd0Mrv%2FsQJauMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH7CLoVNcrTrv%2B47cCrcAxpMfvSZxfVK%2F1rD%2F%2FGKRpaWmuCvwSF4J5naWRqIEU35zm1rGhpzGikc4dc4HpTV%2BC7%2F5bQbtgVjfxJvGuJzw8r15RzL8pGpf1%2FYHdSHfJdEFU9nrlMhB%2BslqShXEhxCTw8UcsREfT0mExxRTWSxDDST4CN%2FYRe4p%2Bzd8U35Oe2vx8zigSsmIydp0t9WDV6%2BtHWSx7BRjf2OukOxYLwB2jlgjdX%2FZQG6jY7Jh9OeQfWEpvFExpCN4dJhS4R4PKnITnCk4rQa9bXu19fKg%2BDOryMcB6QSokqyF%2BDaE7xUKSL9qq3aGpqzVfEfoI%2FlXH1%2BEVYZgQubPCJ5RCSZTRmhy%2BRGyK83Nilm00e63lKlcURBajZ9wKLMS%2BaoGoXESMEQ7pv4tc6VzTRaL7KwmdkTc7JV3LEQYph5nSHAb9%2BuACQP35TKnhvRcK3IzX41OvNaYpi%2BQR7ZY5Adz%2B28QI5r3D%2BQp0Ev1evQ1Pj9%2FYFoYhbLzXRkHxOr%2B924JzRxzMaOUZbf4obn%2FcjOZY%2BscjyqSKVnHi8A59r%2B8UyAJdKWhxT6bmZu6LGKJ44brr%2BYCqtB2dndUukqWc14l0BsDDOWzlWn5rMyiXVznTeLqZO5FtITRQk4m0wB3Neyq5rxMMTDxr8GOqUBlR%2FVZV%2F3C6W37xi6Zfx6IU%2FITMSc922jeZk%2FOFQ8lw5XqL6400bcJiobBR26WamFmNl4fSJrBc6kcbd7NjkT5IzRdlQkXyVgxmwYxu07IGP9Yr2qEPTEeteffLQFOy0pYpoi%2BVMutnjHVAEwhWG78feHazPJbblssUvLZZLpCPQmPoTJWfg8jk5ySZiDZS5Hra1xMCMxWZ0aIbRn7jw42pBwUEe1&X-Amz-Signature=9c2ac79328f7f55157de27d8c0d96b21ac107b84e5c444ae4e1dcc5698a41ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7Q77XM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp%2Bx8Ha9du51iA6X8YZsCTsx%2BfOLVKfPdV3B4FydheAAiEAybXbnXTlwM%2BccflrtdMQCk3DTGIlVnQd0Mrv%2FsQJauMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH7CLoVNcrTrv%2B47cCrcAxpMfvSZxfVK%2F1rD%2F%2FGKRpaWmuCvwSF4J5naWRqIEU35zm1rGhpzGikc4dc4HpTV%2BC7%2F5bQbtgVjfxJvGuJzw8r15RzL8pGpf1%2FYHdSHfJdEFU9nrlMhB%2BslqShXEhxCTw8UcsREfT0mExxRTWSxDDST4CN%2FYRe4p%2Bzd8U35Oe2vx8zigSsmIydp0t9WDV6%2BtHWSx7BRjf2OukOxYLwB2jlgjdX%2FZQG6jY7Jh9OeQfWEpvFExpCN4dJhS4R4PKnITnCk4rQa9bXu19fKg%2BDOryMcB6QSokqyF%2BDaE7xUKSL9qq3aGpqzVfEfoI%2FlXH1%2BEVYZgQubPCJ5RCSZTRmhy%2BRGyK83Nilm00e63lKlcURBajZ9wKLMS%2BaoGoXESMEQ7pv4tc6VzTRaL7KwmdkTc7JV3LEQYph5nSHAb9%2BuACQP35TKnhvRcK3IzX41OvNaYpi%2BQR7ZY5Adz%2B28QI5r3D%2BQp0Ev1evQ1Pj9%2FYFoYhbLzXRkHxOr%2B924JzRxzMaOUZbf4obn%2FcjOZY%2BscjyqSKVnHi8A59r%2B8UyAJdKWhxT6bmZu6LGKJ44brr%2BYCqtB2dndUukqWc14l0BsDDOWzlWn5rMyiXVznTeLqZO5FtITRQk4m0wB3Neyq5rxMMTDxr8GOqUBlR%2FVZV%2F3C6W37xi6Zfx6IU%2FITMSc922jeZk%2FOFQ8lw5XqL6400bcJiobBR26WamFmNl4fSJrBc6kcbd7NjkT5IzRdlQkXyVgxmwYxu07IGP9Yr2qEPTEeteffLQFOy0pYpoi%2BVMutnjHVAEwhWG78feHazPJbblssUvLZZLpCPQmPoTJWfg8jk5ySZiDZS5Hra1xMCMxWZ0aIbRn7jw42pBwUEe1&X-Amz-Signature=9826eba95c4c52a5cd0d86ccc182deda08565a31aaa1614aa52215686bda33d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
