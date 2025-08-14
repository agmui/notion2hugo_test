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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THIWZB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGLkJlp%2B1%2FzRU9v6vx22Gy%2BCulfYuWrKLwcYQLHrSUu%2FAiEA5e11%2F0gUOrLpjFSOoCEn5PTh4etvsQvJ1kh2stekKz0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCkE0%2BQ9M%2B02eEnmhircAyqqzxiXMKWZzEcagj85Gro5v4Nr3TJMPYjhU1ultk8RwjA2JM6XJokNEK6iTdVYkyHleakjsgRLwSHyouU%2FMH4MR%2FDn%2B%2FWd%2FY8y5x%2BkSkboxOfe3c6SKsnS1WlDe2hus%2FmnqbG8owfVKOeffRyauA73X4ZsEi7xAI8TyNIGQ7nIOOohElGybj4Nfq14jfHbjT7pffdX8fzI1cPrdB7Nq%2BBjZVL8lqnabzkXIBNZyOUuupojewz7F1oFN4bWc9YfI4YxPCIYldv294h9WK2gPSQIeEv%2B4UcWgpgEC9TVdXJKJutIDCOGQHYTrL70wTg2Es6bragRweuwMjqttLPZpKRFxlyqRK7%2FeELX%2F3SPXMdLhnKUoC2BhmykaJQfbfkFu%2BePbdKZgUZsA7wapGtNOIR%2BTvTdf6a0XKspXguWeOt1UHpF2tM5%2B6CanxoI5PrScahqJd7oYDBcbsQcQAcIKGuKcNOFQzG1MSbY%2Bi9W%2FAdd%2BSh9gDWRIBVs7lhLmIPW%2Bu2jNOrfUw5fJcD6%2Ft6CjtLDM7rPtxKRZakzizj9Xq1O%2F9I6VKF4zlS36yp%2FctQKz0QiP2UtV63XXKYhPc9NGOx7Kk6VpY44dPNf2DsUzNgHPy9ElZxzpdYGZk2rMI%2BN%2BcQGOqUB7AyhT2aEHWPCT2ScqGUiXtMoj1jljQx2BMNqxnO0ynK5Lfjru0yAMc9g4rKP6MaVwd4gX0BMaGjizouI7ohJ1ZH2PnW5tVbgBxSYAp0ZcwTn38Dp7etCgKiLeq0cmouhI4GZcxL4arZvrcDvqdyEmUSn55992Zktu8DWltbG4KBtOTAqZfYSqs2e2ABfj6ztyHhi%2FXTq830Qk8bu%2BerTGQlWRiFI&X-Amz-Signature=cb006a8c81e80e4ea8db6cb675c9b8ebf654ce48356b41bef751f33dd251dba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THIWZB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGLkJlp%2B1%2FzRU9v6vx22Gy%2BCulfYuWrKLwcYQLHrSUu%2FAiEA5e11%2F0gUOrLpjFSOoCEn5PTh4etvsQvJ1kh2stekKz0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCkE0%2BQ9M%2B02eEnmhircAyqqzxiXMKWZzEcagj85Gro5v4Nr3TJMPYjhU1ultk8RwjA2JM6XJokNEK6iTdVYkyHleakjsgRLwSHyouU%2FMH4MR%2FDn%2B%2FWd%2FY8y5x%2BkSkboxOfe3c6SKsnS1WlDe2hus%2FmnqbG8owfVKOeffRyauA73X4ZsEi7xAI8TyNIGQ7nIOOohElGybj4Nfq14jfHbjT7pffdX8fzI1cPrdB7Nq%2BBjZVL8lqnabzkXIBNZyOUuupojewz7F1oFN4bWc9YfI4YxPCIYldv294h9WK2gPSQIeEv%2B4UcWgpgEC9TVdXJKJutIDCOGQHYTrL70wTg2Es6bragRweuwMjqttLPZpKRFxlyqRK7%2FeELX%2F3SPXMdLhnKUoC2BhmykaJQfbfkFu%2BePbdKZgUZsA7wapGtNOIR%2BTvTdf6a0XKspXguWeOt1UHpF2tM5%2B6CanxoI5PrScahqJd7oYDBcbsQcQAcIKGuKcNOFQzG1MSbY%2Bi9W%2FAdd%2BSh9gDWRIBVs7lhLmIPW%2Bu2jNOrfUw5fJcD6%2Ft6CjtLDM7rPtxKRZakzizj9Xq1O%2F9I6VKF4zlS36yp%2FctQKz0QiP2UtV63XXKYhPc9NGOx7Kk6VpY44dPNf2DsUzNgHPy9ElZxzpdYGZk2rMI%2BN%2BcQGOqUB7AyhT2aEHWPCT2ScqGUiXtMoj1jljQx2BMNqxnO0ynK5Lfjru0yAMc9g4rKP6MaVwd4gX0BMaGjizouI7ohJ1ZH2PnW5tVbgBxSYAp0ZcwTn38Dp7etCgKiLeq0cmouhI4GZcxL4arZvrcDvqdyEmUSn55992Zktu8DWltbG4KBtOTAqZfYSqs2e2ABfj6ztyHhi%2FXTq830Qk8bu%2BerTGQlWRiFI&X-Amz-Signature=c62c0d7ea038c384132a0bdc4e8175e207afc851a3324997672f82f2577a29f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THIWZB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGLkJlp%2B1%2FzRU9v6vx22Gy%2BCulfYuWrKLwcYQLHrSUu%2FAiEA5e11%2F0gUOrLpjFSOoCEn5PTh4etvsQvJ1kh2stekKz0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCkE0%2BQ9M%2B02eEnmhircAyqqzxiXMKWZzEcagj85Gro5v4Nr3TJMPYjhU1ultk8RwjA2JM6XJokNEK6iTdVYkyHleakjsgRLwSHyouU%2FMH4MR%2FDn%2B%2FWd%2FY8y5x%2BkSkboxOfe3c6SKsnS1WlDe2hus%2FmnqbG8owfVKOeffRyauA73X4ZsEi7xAI8TyNIGQ7nIOOohElGybj4Nfq14jfHbjT7pffdX8fzI1cPrdB7Nq%2BBjZVL8lqnabzkXIBNZyOUuupojewz7F1oFN4bWc9YfI4YxPCIYldv294h9WK2gPSQIeEv%2B4UcWgpgEC9TVdXJKJutIDCOGQHYTrL70wTg2Es6bragRweuwMjqttLPZpKRFxlyqRK7%2FeELX%2F3SPXMdLhnKUoC2BhmykaJQfbfkFu%2BePbdKZgUZsA7wapGtNOIR%2BTvTdf6a0XKspXguWeOt1UHpF2tM5%2B6CanxoI5PrScahqJd7oYDBcbsQcQAcIKGuKcNOFQzG1MSbY%2Bi9W%2FAdd%2BSh9gDWRIBVs7lhLmIPW%2Bu2jNOrfUw5fJcD6%2Ft6CjtLDM7rPtxKRZakzizj9Xq1O%2F9I6VKF4zlS36yp%2FctQKz0QiP2UtV63XXKYhPc9NGOx7Kk6VpY44dPNf2DsUzNgHPy9ElZxzpdYGZk2rMI%2BN%2BcQGOqUB7AyhT2aEHWPCT2ScqGUiXtMoj1jljQx2BMNqxnO0ynK5Lfjru0yAMc9g4rKP6MaVwd4gX0BMaGjizouI7ohJ1ZH2PnW5tVbgBxSYAp0ZcwTn38Dp7etCgKiLeq0cmouhI4GZcxL4arZvrcDvqdyEmUSn55992Zktu8DWltbG4KBtOTAqZfYSqs2e2ABfj6ztyHhi%2FXTq830Qk8bu%2BerTGQlWRiFI&X-Amz-Signature=eec36c78fe462ee3ee66b7f1073e11db90682d03baf25f4f3ff172b670d700b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THIWZB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGLkJlp%2B1%2FzRU9v6vx22Gy%2BCulfYuWrKLwcYQLHrSUu%2FAiEA5e11%2F0gUOrLpjFSOoCEn5PTh4etvsQvJ1kh2stekKz0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCkE0%2BQ9M%2B02eEnmhircAyqqzxiXMKWZzEcagj85Gro5v4Nr3TJMPYjhU1ultk8RwjA2JM6XJokNEK6iTdVYkyHleakjsgRLwSHyouU%2FMH4MR%2FDn%2B%2FWd%2FY8y5x%2BkSkboxOfe3c6SKsnS1WlDe2hus%2FmnqbG8owfVKOeffRyauA73X4ZsEi7xAI8TyNIGQ7nIOOohElGybj4Nfq14jfHbjT7pffdX8fzI1cPrdB7Nq%2BBjZVL8lqnabzkXIBNZyOUuupojewz7F1oFN4bWc9YfI4YxPCIYldv294h9WK2gPSQIeEv%2B4UcWgpgEC9TVdXJKJutIDCOGQHYTrL70wTg2Es6bragRweuwMjqttLPZpKRFxlyqRK7%2FeELX%2F3SPXMdLhnKUoC2BhmykaJQfbfkFu%2BePbdKZgUZsA7wapGtNOIR%2BTvTdf6a0XKspXguWeOt1UHpF2tM5%2B6CanxoI5PrScahqJd7oYDBcbsQcQAcIKGuKcNOFQzG1MSbY%2Bi9W%2FAdd%2BSh9gDWRIBVs7lhLmIPW%2Bu2jNOrfUw5fJcD6%2Ft6CjtLDM7rPtxKRZakzizj9Xq1O%2F9I6VKF4zlS36yp%2FctQKz0QiP2UtV63XXKYhPc9NGOx7Kk6VpY44dPNf2DsUzNgHPy9ElZxzpdYGZk2rMI%2BN%2BcQGOqUB7AyhT2aEHWPCT2ScqGUiXtMoj1jljQx2BMNqxnO0ynK5Lfjru0yAMc9g4rKP6MaVwd4gX0BMaGjizouI7ohJ1ZH2PnW5tVbgBxSYAp0ZcwTn38Dp7etCgKiLeq0cmouhI4GZcxL4arZvrcDvqdyEmUSn55992Zktu8DWltbG4KBtOTAqZfYSqs2e2ABfj6ztyHhi%2FXTq830Qk8bu%2BerTGQlWRiFI&X-Amz-Signature=09515528cfe2514c2546ad59dd4d655a34e9f151586e620d850bc9e7250000f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THIWZB2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGLkJlp%2B1%2FzRU9v6vx22Gy%2BCulfYuWrKLwcYQLHrSUu%2FAiEA5e11%2F0gUOrLpjFSOoCEn5PTh4etvsQvJ1kh2stekKz0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCkE0%2BQ9M%2B02eEnmhircAyqqzxiXMKWZzEcagj85Gro5v4Nr3TJMPYjhU1ultk8RwjA2JM6XJokNEK6iTdVYkyHleakjsgRLwSHyouU%2FMH4MR%2FDn%2B%2FWd%2FY8y5x%2BkSkboxOfe3c6SKsnS1WlDe2hus%2FmnqbG8owfVKOeffRyauA73X4ZsEi7xAI8TyNIGQ7nIOOohElGybj4Nfq14jfHbjT7pffdX8fzI1cPrdB7Nq%2BBjZVL8lqnabzkXIBNZyOUuupojewz7F1oFN4bWc9YfI4YxPCIYldv294h9WK2gPSQIeEv%2B4UcWgpgEC9TVdXJKJutIDCOGQHYTrL70wTg2Es6bragRweuwMjqttLPZpKRFxlyqRK7%2FeELX%2F3SPXMdLhnKUoC2BhmykaJQfbfkFu%2BePbdKZgUZsA7wapGtNOIR%2BTvTdf6a0XKspXguWeOt1UHpF2tM5%2B6CanxoI5PrScahqJd7oYDBcbsQcQAcIKGuKcNOFQzG1MSbY%2Bi9W%2FAdd%2BSh9gDWRIBVs7lhLmIPW%2Bu2jNOrfUw5fJcD6%2Ft6CjtLDM7rPtxKRZakzizj9Xq1O%2F9I6VKF4zlS36yp%2FctQKz0QiP2UtV63XXKYhPc9NGOx7Kk6VpY44dPNf2DsUzNgHPy9ElZxzpdYGZk2rMI%2BN%2BcQGOqUB7AyhT2aEHWPCT2ScqGUiXtMoj1jljQx2BMNqxnO0ynK5Lfjru0yAMc9g4rKP6MaVwd4gX0BMaGjizouI7ohJ1ZH2PnW5tVbgBxSYAp0ZcwTn38Dp7etCgKiLeq0cmouhI4GZcxL4arZvrcDvqdyEmUSn55992Zktu8DWltbG4KBtOTAqZfYSqs2e2ABfj6ztyHhi%2FXTq830Qk8bu%2BerTGQlWRiFI&X-Amz-Signature=65651419d6e7d6d768183b4ed7c5aa77e05187114de5b4739cd0a66f6d4dae2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
