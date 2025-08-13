---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCUFWJP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUtxbuTGG5GF6rKBPaDIPpakI5fKjsm35X6BJEBWTEvAiEA6JQQBINomUravjkJepHlBAYCXk0dL4vheemwrRmtqtIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOZWi9BUF6NGvbF6KCrcAwaN9pwjWqz2g%2BTHJaBTISRVn5Z90G%2FFG6tsOIkKvn4BAUbDvHkXnq%2BQXLqeIJCf0BtXkqQkjrzn%2FK2ZKxmEpR17hG6mBLhgYpRzoYvc5bpyHg6GaKp27fQUYRM3ibvGEKgU%2B432NzELXarY0GM%2F2Hsibb00dOtFq8Bbuu9du%2F4niF%2FtUC2%2FqdA%2FjDoQ%2BupU%2B8iwkJCDXolNqWUYgfEL2CJSCP1Df1A7SMkje5YwPTxapXCdDqVkkncVI5xxt5et39Rsh4xsicdaYcScot8KKKL5Pwkx7%2BWAvZ5YSE34aGXAWQh3Xak5dgP2hiAhVx72ZbpLFelN1C6Pg%2BOOH251XuB7WOeRXK5oVmizxJopEjNXXXYlqgY5hK3wAAq87nOf%2FniYyA%2FX9ZOlQWDq9cp5Hut6U1dd%2BvLsHQCB%2ByolXwSoLpvA4%2Fd5asAmM%2F%2BXbFS5e9mLBjVJycRmI%2BKcMv1MFl7m35hMabQQevIE%2F9rdcuHLJYXZdm%2F6H9zkjWltqv35ne%2BPhqEO2lsxqPMPZs7NW2DriztxmDz9U2Of7Mgm5UXXW4G6pxpm7rzCfNpn3ITy0ST6UrufnMLV5CZu53OjHYwfFe99qpKesSn%2Bt5TOFSSZtt5eFZSy%2FoWgpKW4MOuq8MQGOqUBRklbSqlysW9JFXCQUsTrQeQD7VJT3HLy%2BPd29lInzhfzoNbpRY0vmwHsvwBJvwMIsimaf3arqcOeFPkWZu1V5%2BsseviPwq0rxEz3uBpGGTNDAo5HdA%2F8y1QzxIQTH8bbjRN6F00qivx%2BAgQN47hQEB2nJEBu9FT7djj%2FilN8SHC1pnvpBVus430Z0IYo0LhKEIIMSmeMdcleu38R23s0SwYGe8xi&X-Amz-Signature=79f123bb4b5730911e596eb6c282e5efc8e383aee0d2ac0aa8a8f6d95086ad51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCUFWJP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUtxbuTGG5GF6rKBPaDIPpakI5fKjsm35X6BJEBWTEvAiEA6JQQBINomUravjkJepHlBAYCXk0dL4vheemwrRmtqtIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOZWi9BUF6NGvbF6KCrcAwaN9pwjWqz2g%2BTHJaBTISRVn5Z90G%2FFG6tsOIkKvn4BAUbDvHkXnq%2BQXLqeIJCf0BtXkqQkjrzn%2FK2ZKxmEpR17hG6mBLhgYpRzoYvc5bpyHg6GaKp27fQUYRM3ibvGEKgU%2B432NzELXarY0GM%2F2Hsibb00dOtFq8Bbuu9du%2F4niF%2FtUC2%2FqdA%2FjDoQ%2BupU%2B8iwkJCDXolNqWUYgfEL2CJSCP1Df1A7SMkje5YwPTxapXCdDqVkkncVI5xxt5et39Rsh4xsicdaYcScot8KKKL5Pwkx7%2BWAvZ5YSE34aGXAWQh3Xak5dgP2hiAhVx72ZbpLFelN1C6Pg%2BOOH251XuB7WOeRXK5oVmizxJopEjNXXXYlqgY5hK3wAAq87nOf%2FniYyA%2FX9ZOlQWDq9cp5Hut6U1dd%2BvLsHQCB%2ByolXwSoLpvA4%2Fd5asAmM%2F%2BXbFS5e9mLBjVJycRmI%2BKcMv1MFl7m35hMabQQevIE%2F9rdcuHLJYXZdm%2F6H9zkjWltqv35ne%2BPhqEO2lsxqPMPZs7NW2DriztxmDz9U2Of7Mgm5UXXW4G6pxpm7rzCfNpn3ITy0ST6UrufnMLV5CZu53OjHYwfFe99qpKesSn%2Bt5TOFSSZtt5eFZSy%2FoWgpKW4MOuq8MQGOqUBRklbSqlysW9JFXCQUsTrQeQD7VJT3HLy%2BPd29lInzhfzoNbpRY0vmwHsvwBJvwMIsimaf3arqcOeFPkWZu1V5%2BsseviPwq0rxEz3uBpGGTNDAo5HdA%2F8y1QzxIQTH8bbjRN6F00qivx%2BAgQN47hQEB2nJEBu9FT7djj%2FilN8SHC1pnvpBVus430Z0IYo0LhKEIIMSmeMdcleu38R23s0SwYGe8xi&X-Amz-Signature=59c9837a4cda304a748d4a0caa5416c1af06db706204530817746a49929a341c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCUFWJP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUtxbuTGG5GF6rKBPaDIPpakI5fKjsm35X6BJEBWTEvAiEA6JQQBINomUravjkJepHlBAYCXk0dL4vheemwrRmtqtIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOZWi9BUF6NGvbF6KCrcAwaN9pwjWqz2g%2BTHJaBTISRVn5Z90G%2FFG6tsOIkKvn4BAUbDvHkXnq%2BQXLqeIJCf0BtXkqQkjrzn%2FK2ZKxmEpR17hG6mBLhgYpRzoYvc5bpyHg6GaKp27fQUYRM3ibvGEKgU%2B432NzELXarY0GM%2F2Hsibb00dOtFq8Bbuu9du%2F4niF%2FtUC2%2FqdA%2FjDoQ%2BupU%2B8iwkJCDXolNqWUYgfEL2CJSCP1Df1A7SMkje5YwPTxapXCdDqVkkncVI5xxt5et39Rsh4xsicdaYcScot8KKKL5Pwkx7%2BWAvZ5YSE34aGXAWQh3Xak5dgP2hiAhVx72ZbpLFelN1C6Pg%2BOOH251XuB7WOeRXK5oVmizxJopEjNXXXYlqgY5hK3wAAq87nOf%2FniYyA%2FX9ZOlQWDq9cp5Hut6U1dd%2BvLsHQCB%2ByolXwSoLpvA4%2Fd5asAmM%2F%2BXbFS5e9mLBjVJycRmI%2BKcMv1MFl7m35hMabQQevIE%2F9rdcuHLJYXZdm%2F6H9zkjWltqv35ne%2BPhqEO2lsxqPMPZs7NW2DriztxmDz9U2Of7Mgm5UXXW4G6pxpm7rzCfNpn3ITy0ST6UrufnMLV5CZu53OjHYwfFe99qpKesSn%2Bt5TOFSSZtt5eFZSy%2FoWgpKW4MOuq8MQGOqUBRklbSqlysW9JFXCQUsTrQeQD7VJT3HLy%2BPd29lInzhfzoNbpRY0vmwHsvwBJvwMIsimaf3arqcOeFPkWZu1V5%2BsseviPwq0rxEz3uBpGGTNDAo5HdA%2F8y1QzxIQTH8bbjRN6F00qivx%2BAgQN47hQEB2nJEBu9FT7djj%2FilN8SHC1pnvpBVus430Z0IYo0LhKEIIMSmeMdcleu38R23s0SwYGe8xi&X-Amz-Signature=a3aadd1f09259286fd5037dce388d719a9e78f2fb3642044d27bbe58579de473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCUFWJP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUtxbuTGG5GF6rKBPaDIPpakI5fKjsm35X6BJEBWTEvAiEA6JQQBINomUravjkJepHlBAYCXk0dL4vheemwrRmtqtIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOZWi9BUF6NGvbF6KCrcAwaN9pwjWqz2g%2BTHJaBTISRVn5Z90G%2FFG6tsOIkKvn4BAUbDvHkXnq%2BQXLqeIJCf0BtXkqQkjrzn%2FK2ZKxmEpR17hG6mBLhgYpRzoYvc5bpyHg6GaKp27fQUYRM3ibvGEKgU%2B432NzELXarY0GM%2F2Hsibb00dOtFq8Bbuu9du%2F4niF%2FtUC2%2FqdA%2FjDoQ%2BupU%2B8iwkJCDXolNqWUYgfEL2CJSCP1Df1A7SMkje5YwPTxapXCdDqVkkncVI5xxt5et39Rsh4xsicdaYcScot8KKKL5Pwkx7%2BWAvZ5YSE34aGXAWQh3Xak5dgP2hiAhVx72ZbpLFelN1C6Pg%2BOOH251XuB7WOeRXK5oVmizxJopEjNXXXYlqgY5hK3wAAq87nOf%2FniYyA%2FX9ZOlQWDq9cp5Hut6U1dd%2BvLsHQCB%2ByolXwSoLpvA4%2Fd5asAmM%2F%2BXbFS5e9mLBjVJycRmI%2BKcMv1MFl7m35hMabQQevIE%2F9rdcuHLJYXZdm%2F6H9zkjWltqv35ne%2BPhqEO2lsxqPMPZs7NW2DriztxmDz9U2Of7Mgm5UXXW4G6pxpm7rzCfNpn3ITy0ST6UrufnMLV5CZu53OjHYwfFe99qpKesSn%2Bt5TOFSSZtt5eFZSy%2FoWgpKW4MOuq8MQGOqUBRklbSqlysW9JFXCQUsTrQeQD7VJT3HLy%2BPd29lInzhfzoNbpRY0vmwHsvwBJvwMIsimaf3arqcOeFPkWZu1V5%2BsseviPwq0rxEz3uBpGGTNDAo5HdA%2F8y1QzxIQTH8bbjRN6F00qivx%2BAgQN47hQEB2nJEBu9FT7djj%2FilN8SHC1pnvpBVus430Z0IYo0LhKEIIMSmeMdcleu38R23s0SwYGe8xi&X-Amz-Signature=f5c769dbdb97463e6a9bad139f614f3e289a4fba814bbcab9169e98a71665d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCUFWJP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUtxbuTGG5GF6rKBPaDIPpakI5fKjsm35X6BJEBWTEvAiEA6JQQBINomUravjkJepHlBAYCXk0dL4vheemwrRmtqtIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOZWi9BUF6NGvbF6KCrcAwaN9pwjWqz2g%2BTHJaBTISRVn5Z90G%2FFG6tsOIkKvn4BAUbDvHkXnq%2BQXLqeIJCf0BtXkqQkjrzn%2FK2ZKxmEpR17hG6mBLhgYpRzoYvc5bpyHg6GaKp27fQUYRM3ibvGEKgU%2B432NzELXarY0GM%2F2Hsibb00dOtFq8Bbuu9du%2F4niF%2FtUC2%2FqdA%2FjDoQ%2BupU%2B8iwkJCDXolNqWUYgfEL2CJSCP1Df1A7SMkje5YwPTxapXCdDqVkkncVI5xxt5et39Rsh4xsicdaYcScot8KKKL5Pwkx7%2BWAvZ5YSE34aGXAWQh3Xak5dgP2hiAhVx72ZbpLFelN1C6Pg%2BOOH251XuB7WOeRXK5oVmizxJopEjNXXXYlqgY5hK3wAAq87nOf%2FniYyA%2FX9ZOlQWDq9cp5Hut6U1dd%2BvLsHQCB%2ByolXwSoLpvA4%2Fd5asAmM%2F%2BXbFS5e9mLBjVJycRmI%2BKcMv1MFl7m35hMabQQevIE%2F9rdcuHLJYXZdm%2F6H9zkjWltqv35ne%2BPhqEO2lsxqPMPZs7NW2DriztxmDz9U2Of7Mgm5UXXW4G6pxpm7rzCfNpn3ITy0ST6UrufnMLV5CZu53OjHYwfFe99qpKesSn%2Bt5TOFSSZtt5eFZSy%2FoWgpKW4MOuq8MQGOqUBRklbSqlysW9JFXCQUsTrQeQD7VJT3HLy%2BPd29lInzhfzoNbpRY0vmwHsvwBJvwMIsimaf3arqcOeFPkWZu1V5%2BsseviPwq0rxEz3uBpGGTNDAo5HdA%2F8y1QzxIQTH8bbjRN6F00qivx%2BAgQN47hQEB2nJEBu9FT7djj%2FilN8SHC1pnvpBVus430Z0IYo0LhKEIIMSmeMdcleu38R23s0SwYGe8xi&X-Amz-Signature=93b882b899ed0ba85ac4bebfdd79726be610f9a2a9b69096767bcc1a87597f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
