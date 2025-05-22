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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVOECEL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDRQcY9kkLnXYXp6LOsmab3Gp1zaLYfdInO4h48MTqWVgIhAPoxUeZn1rTC8viM7H%2FkRhd99TJPncGY0QSE5Euc7EuXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1G56vprgOMbzjVwEq3ANa3W3qfSMC1hfixLfzZ0bvT6QL8jo989sAamnIFvbtou%2Bw61xhsaEebUx1jg94ARN1wFaLNvCBDAdYuPgcEKAdGAPl0nfRM1Ko7Y77GnYsF6vM0YDgxTc72p9zl1ENXe1%2B154UFyMJLZ1FrH0nTO0qfzfEtgYg7DLOHWgOYRJ4m3b6xQxqg0B38b2Jw%2F78XFP9kgfFlUkyb33%2BCWG0EssjdpFOOqpCNF2mEBv9QGDV2%2FKFUrSzLludNChTC1X%2Bl4FbGMJagutxJkBDZjKkgKXc7OPldt%2FZQ7fT5BIpto9%2BKbBbOSgoLZFxnG5aY4iIDgJbnng%2B1jx4fhMhHlfcUtWMRvpJrk%2FOVigI3%2BFwJCdCxVXlOkF6bu9EFVcRmbF2cpynVlOseMoP7I53gXf9LbI1QizCgENYxZNf4wr5kbnVbfKD9CU7uHfgqBJ%2FVRpXqTEUYaXinoJcI2FkxZUgTCz3reK2ybm0NQKtEf7ZnjAq4pIMpT%2BwA%2F4UFBv8CgYR0G3e6LUZ%2FrcfIJSWSdSYqCPWrkAXQkKG2SlHoHgAS0GYEgiNj%2BO9vzot3Takqux7ul%2BGLj5KYtSiBwbhAoUrMzkCTsAHvNEHxceHPIpVzbrZu1BufoMnOCp7joXj%2BTDBsLvBBjqkAa1SqsWik7EYqUhIrMQTWoWhLKR0aKVDCdQ%2F6JlgXYlZxESHhLxtiQ8nKS2SfWk8iA9WJtDwVcIZ4fFba7aA4IZ0jwew9%2BiSYciE1gGQU1rSFUG%2BPi5vTdMDjuKsWVnGgfk8Q5CxZUyKXMh3IndLzZV1L8JulbmZ07udROECDEwqFktmrIpYtbUlYTwcEY973JRWk6ftoo9Blo6KGc0PT%2F367xI5&X-Amz-Signature=f575db0b6ce0bf609f95fa689d9873ae8ace86181f0d5c1f400e05f11c216529&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVOECEL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDRQcY9kkLnXYXp6LOsmab3Gp1zaLYfdInO4h48MTqWVgIhAPoxUeZn1rTC8viM7H%2FkRhd99TJPncGY0QSE5Euc7EuXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1G56vprgOMbzjVwEq3ANa3W3qfSMC1hfixLfzZ0bvT6QL8jo989sAamnIFvbtou%2Bw61xhsaEebUx1jg94ARN1wFaLNvCBDAdYuPgcEKAdGAPl0nfRM1Ko7Y77GnYsF6vM0YDgxTc72p9zl1ENXe1%2B154UFyMJLZ1FrH0nTO0qfzfEtgYg7DLOHWgOYRJ4m3b6xQxqg0B38b2Jw%2F78XFP9kgfFlUkyb33%2BCWG0EssjdpFOOqpCNF2mEBv9QGDV2%2FKFUrSzLludNChTC1X%2Bl4FbGMJagutxJkBDZjKkgKXc7OPldt%2FZQ7fT5BIpto9%2BKbBbOSgoLZFxnG5aY4iIDgJbnng%2B1jx4fhMhHlfcUtWMRvpJrk%2FOVigI3%2BFwJCdCxVXlOkF6bu9EFVcRmbF2cpynVlOseMoP7I53gXf9LbI1QizCgENYxZNf4wr5kbnVbfKD9CU7uHfgqBJ%2FVRpXqTEUYaXinoJcI2FkxZUgTCz3reK2ybm0NQKtEf7ZnjAq4pIMpT%2BwA%2F4UFBv8CgYR0G3e6LUZ%2FrcfIJSWSdSYqCPWrkAXQkKG2SlHoHgAS0GYEgiNj%2BO9vzot3Takqux7ul%2BGLj5KYtSiBwbhAoUrMzkCTsAHvNEHxceHPIpVzbrZu1BufoMnOCp7joXj%2BTDBsLvBBjqkAa1SqsWik7EYqUhIrMQTWoWhLKR0aKVDCdQ%2F6JlgXYlZxESHhLxtiQ8nKS2SfWk8iA9WJtDwVcIZ4fFba7aA4IZ0jwew9%2BiSYciE1gGQU1rSFUG%2BPi5vTdMDjuKsWVnGgfk8Q5CxZUyKXMh3IndLzZV1L8JulbmZ07udROECDEwqFktmrIpYtbUlYTwcEY973JRWk6ftoo9Blo6KGc0PT%2F367xI5&X-Amz-Signature=4dccf1caf06593632c47065ed0821b39454f54d40ffb2dc7a3eab23cc6b0eae6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVOECEL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDRQcY9kkLnXYXp6LOsmab3Gp1zaLYfdInO4h48MTqWVgIhAPoxUeZn1rTC8viM7H%2FkRhd99TJPncGY0QSE5Euc7EuXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1G56vprgOMbzjVwEq3ANa3W3qfSMC1hfixLfzZ0bvT6QL8jo989sAamnIFvbtou%2Bw61xhsaEebUx1jg94ARN1wFaLNvCBDAdYuPgcEKAdGAPl0nfRM1Ko7Y77GnYsF6vM0YDgxTc72p9zl1ENXe1%2B154UFyMJLZ1FrH0nTO0qfzfEtgYg7DLOHWgOYRJ4m3b6xQxqg0B38b2Jw%2F78XFP9kgfFlUkyb33%2BCWG0EssjdpFOOqpCNF2mEBv9QGDV2%2FKFUrSzLludNChTC1X%2Bl4FbGMJagutxJkBDZjKkgKXc7OPldt%2FZQ7fT5BIpto9%2BKbBbOSgoLZFxnG5aY4iIDgJbnng%2B1jx4fhMhHlfcUtWMRvpJrk%2FOVigI3%2BFwJCdCxVXlOkF6bu9EFVcRmbF2cpynVlOseMoP7I53gXf9LbI1QizCgENYxZNf4wr5kbnVbfKD9CU7uHfgqBJ%2FVRpXqTEUYaXinoJcI2FkxZUgTCz3reK2ybm0NQKtEf7ZnjAq4pIMpT%2BwA%2F4UFBv8CgYR0G3e6LUZ%2FrcfIJSWSdSYqCPWrkAXQkKG2SlHoHgAS0GYEgiNj%2BO9vzot3Takqux7ul%2BGLj5KYtSiBwbhAoUrMzkCTsAHvNEHxceHPIpVzbrZu1BufoMnOCp7joXj%2BTDBsLvBBjqkAa1SqsWik7EYqUhIrMQTWoWhLKR0aKVDCdQ%2F6JlgXYlZxESHhLxtiQ8nKS2SfWk8iA9WJtDwVcIZ4fFba7aA4IZ0jwew9%2BiSYciE1gGQU1rSFUG%2BPi5vTdMDjuKsWVnGgfk8Q5CxZUyKXMh3IndLzZV1L8JulbmZ07udROECDEwqFktmrIpYtbUlYTwcEY973JRWk6ftoo9Blo6KGc0PT%2F367xI5&X-Amz-Signature=72d8f4a05fec3d22265ab9f8830c0267e597cbc066a1d64395730f48370dc46c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVOECEL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDRQcY9kkLnXYXp6LOsmab3Gp1zaLYfdInO4h48MTqWVgIhAPoxUeZn1rTC8viM7H%2FkRhd99TJPncGY0QSE5Euc7EuXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1G56vprgOMbzjVwEq3ANa3W3qfSMC1hfixLfzZ0bvT6QL8jo989sAamnIFvbtou%2Bw61xhsaEebUx1jg94ARN1wFaLNvCBDAdYuPgcEKAdGAPl0nfRM1Ko7Y77GnYsF6vM0YDgxTc72p9zl1ENXe1%2B154UFyMJLZ1FrH0nTO0qfzfEtgYg7DLOHWgOYRJ4m3b6xQxqg0B38b2Jw%2F78XFP9kgfFlUkyb33%2BCWG0EssjdpFOOqpCNF2mEBv9QGDV2%2FKFUrSzLludNChTC1X%2Bl4FbGMJagutxJkBDZjKkgKXc7OPldt%2FZQ7fT5BIpto9%2BKbBbOSgoLZFxnG5aY4iIDgJbnng%2B1jx4fhMhHlfcUtWMRvpJrk%2FOVigI3%2BFwJCdCxVXlOkF6bu9EFVcRmbF2cpynVlOseMoP7I53gXf9LbI1QizCgENYxZNf4wr5kbnVbfKD9CU7uHfgqBJ%2FVRpXqTEUYaXinoJcI2FkxZUgTCz3reK2ybm0NQKtEf7ZnjAq4pIMpT%2BwA%2F4UFBv8CgYR0G3e6LUZ%2FrcfIJSWSdSYqCPWrkAXQkKG2SlHoHgAS0GYEgiNj%2BO9vzot3Takqux7ul%2BGLj5KYtSiBwbhAoUrMzkCTsAHvNEHxceHPIpVzbrZu1BufoMnOCp7joXj%2BTDBsLvBBjqkAa1SqsWik7EYqUhIrMQTWoWhLKR0aKVDCdQ%2F6JlgXYlZxESHhLxtiQ8nKS2SfWk8iA9WJtDwVcIZ4fFba7aA4IZ0jwew9%2BiSYciE1gGQU1rSFUG%2BPi5vTdMDjuKsWVnGgfk8Q5CxZUyKXMh3IndLzZV1L8JulbmZ07udROECDEwqFktmrIpYtbUlYTwcEY973JRWk6ftoo9Blo6KGc0PT%2F367xI5&X-Amz-Signature=6143f922f2227d19c02a929e9185557916ec3cf20e8d7eb4a3cc80d281839922&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVOECEL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDRQcY9kkLnXYXp6LOsmab3Gp1zaLYfdInO4h48MTqWVgIhAPoxUeZn1rTC8viM7H%2FkRhd99TJPncGY0QSE5Euc7EuXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1G56vprgOMbzjVwEq3ANa3W3qfSMC1hfixLfzZ0bvT6QL8jo989sAamnIFvbtou%2Bw61xhsaEebUx1jg94ARN1wFaLNvCBDAdYuPgcEKAdGAPl0nfRM1Ko7Y77GnYsF6vM0YDgxTc72p9zl1ENXe1%2B154UFyMJLZ1FrH0nTO0qfzfEtgYg7DLOHWgOYRJ4m3b6xQxqg0B38b2Jw%2F78XFP9kgfFlUkyb33%2BCWG0EssjdpFOOqpCNF2mEBv9QGDV2%2FKFUrSzLludNChTC1X%2Bl4FbGMJagutxJkBDZjKkgKXc7OPldt%2FZQ7fT5BIpto9%2BKbBbOSgoLZFxnG5aY4iIDgJbnng%2B1jx4fhMhHlfcUtWMRvpJrk%2FOVigI3%2BFwJCdCxVXlOkF6bu9EFVcRmbF2cpynVlOseMoP7I53gXf9LbI1QizCgENYxZNf4wr5kbnVbfKD9CU7uHfgqBJ%2FVRpXqTEUYaXinoJcI2FkxZUgTCz3reK2ybm0NQKtEf7ZnjAq4pIMpT%2BwA%2F4UFBv8CgYR0G3e6LUZ%2FrcfIJSWSdSYqCPWrkAXQkKG2SlHoHgAS0GYEgiNj%2BO9vzot3Takqux7ul%2BGLj5KYtSiBwbhAoUrMzkCTsAHvNEHxceHPIpVzbrZu1BufoMnOCp7joXj%2BTDBsLvBBjqkAa1SqsWik7EYqUhIrMQTWoWhLKR0aKVDCdQ%2F6JlgXYlZxESHhLxtiQ8nKS2SfWk8iA9WJtDwVcIZ4fFba7aA4IZ0jwew9%2BiSYciE1gGQU1rSFUG%2BPi5vTdMDjuKsWVnGgfk8Q5CxZUyKXMh3IndLzZV1L8JulbmZ07udROECDEwqFktmrIpYtbUlYTwcEY973JRWk6ftoo9Blo6KGc0PT%2F367xI5&X-Amz-Signature=72de66cac688d922a2f03277ebb6d1ef1a9f4957713d237f902c47d922530fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
