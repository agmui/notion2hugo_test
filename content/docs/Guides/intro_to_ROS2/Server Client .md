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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLPIL37%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF8Ex7YhxfFnMutXJ%2F6wKIiK%2BTsJ3RpDNkQBXAVXgtoOAiAWS%2F7mqxHGB%2FuvR6eeG3%2BXvdiM4vrP0mQp%2F6Wdi%2FhJcSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0V23mphT6HXKSv5lKtwDJk6SNKshIn6P8c8Qh7N1aNIKEYtLx4pHUWBWheTwD23z%2FLhS7%2B8z3DqWXenx0tXE2zGRfINrpaXtwCfEg7TdSww8IAqNz9EERpuRJi4aPmjnMxuBgcC1eTt38pPrOFSk01tjy92f%2BT2nmiwXmzMki9TRMWuDhrnwUkItny%2FktD9gZLUp5j2LWhc8BkS2GaOs0gVlj%2BhdOd6dBXbyfcKbtT5qb2%2B9tUYW9bnIGhOfzxm0Ru7a69dfFqJuEeGaP%2BnPu1e0O4hWBQQoZv9sNiAVktCE2SyKEtvXPEqZV28dBd6ssLuo4%2BFoPWGy1504BCsLQqL1eAHBGb507m%2BZZwCIF9Ea%2F0Jy44Vj9yB%2B%2BN1MSWaKXLmVisg%2Fn2gVjxTGTO1qL4lhIB6y3vF%2FpyZFGHkWrc0YOxBJZTOlvzVBrNOetXxdK2uSbSHZHziHZeVyHV%2BBWkaV25gvp4ygDTWcZlGOUMttbHfZuu2Y0XCSlw38d%2BO8xQAIapYwMWJDpiYgtF9j6631hY4qPBxd7sRAdT2e8cx3dNq%2BQZdB8AoCud7FKTcB2VRbTYML7jbwGwh3BmG9dKDHLlCalezbG3V%2FbpAR%2FrHar2jvANNEHtolnmOP9Dj%2F%2BoZhU6ZjIY%2BR6V8w%2FP%2B3xgY6pgEL6CsAAtEOZvIRJ0zHKdaprQJlCWb5r6JSFgyAM5Lj8TZP7nhKMzUmL888HVijdVNVgWq9x6z6%2BMbuw1hs9T0%2BfobxRbQyZNsJ2QogcwyjUVIdBpZljIEDQQgnOTMdpnnTS8aVhBrDV1BV7Rlq%2FGg46%2B45BcwakyA72NHsEAYdpQ3h%2Fhv4xNLG%2F%2BL7wzJca13xQuQWlPKzQk0jf9a0xbY2qR1kxGqi&X-Amz-Signature=e0cabaf03c9ec8ad3ad7750bb6c19b062bef229efa0b5e4fd25f1eb63ba6500c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLPIL37%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF8Ex7YhxfFnMutXJ%2F6wKIiK%2BTsJ3RpDNkQBXAVXgtoOAiAWS%2F7mqxHGB%2FuvR6eeG3%2BXvdiM4vrP0mQp%2F6Wdi%2FhJcSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0V23mphT6HXKSv5lKtwDJk6SNKshIn6P8c8Qh7N1aNIKEYtLx4pHUWBWheTwD23z%2FLhS7%2B8z3DqWXenx0tXE2zGRfINrpaXtwCfEg7TdSww8IAqNz9EERpuRJi4aPmjnMxuBgcC1eTt38pPrOFSk01tjy92f%2BT2nmiwXmzMki9TRMWuDhrnwUkItny%2FktD9gZLUp5j2LWhc8BkS2GaOs0gVlj%2BhdOd6dBXbyfcKbtT5qb2%2B9tUYW9bnIGhOfzxm0Ru7a69dfFqJuEeGaP%2BnPu1e0O4hWBQQoZv9sNiAVktCE2SyKEtvXPEqZV28dBd6ssLuo4%2BFoPWGy1504BCsLQqL1eAHBGb507m%2BZZwCIF9Ea%2F0Jy44Vj9yB%2B%2BN1MSWaKXLmVisg%2Fn2gVjxTGTO1qL4lhIB6y3vF%2FpyZFGHkWrc0YOxBJZTOlvzVBrNOetXxdK2uSbSHZHziHZeVyHV%2BBWkaV25gvp4ygDTWcZlGOUMttbHfZuu2Y0XCSlw38d%2BO8xQAIapYwMWJDpiYgtF9j6631hY4qPBxd7sRAdT2e8cx3dNq%2BQZdB8AoCud7FKTcB2VRbTYML7jbwGwh3BmG9dKDHLlCalezbG3V%2FbpAR%2FrHar2jvANNEHtolnmOP9Dj%2F%2BoZhU6ZjIY%2BR6V8w%2FP%2B3xgY6pgEL6CsAAtEOZvIRJ0zHKdaprQJlCWb5r6JSFgyAM5Lj8TZP7nhKMzUmL888HVijdVNVgWq9x6z6%2BMbuw1hs9T0%2BfobxRbQyZNsJ2QogcwyjUVIdBpZljIEDQQgnOTMdpnnTS8aVhBrDV1BV7Rlq%2FGg46%2B45BcwakyA72NHsEAYdpQ3h%2Fhv4xNLG%2F%2BL7wzJca13xQuQWlPKzQk0jf9a0xbY2qR1kxGqi&X-Amz-Signature=7fa8a268186f1df5f99489c4449ff1996342a3968f73049b1a26018e20511072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLPIL37%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF8Ex7YhxfFnMutXJ%2F6wKIiK%2BTsJ3RpDNkQBXAVXgtoOAiAWS%2F7mqxHGB%2FuvR6eeG3%2BXvdiM4vrP0mQp%2F6Wdi%2FhJcSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0V23mphT6HXKSv5lKtwDJk6SNKshIn6P8c8Qh7N1aNIKEYtLx4pHUWBWheTwD23z%2FLhS7%2B8z3DqWXenx0tXE2zGRfINrpaXtwCfEg7TdSww8IAqNz9EERpuRJi4aPmjnMxuBgcC1eTt38pPrOFSk01tjy92f%2BT2nmiwXmzMki9TRMWuDhrnwUkItny%2FktD9gZLUp5j2LWhc8BkS2GaOs0gVlj%2BhdOd6dBXbyfcKbtT5qb2%2B9tUYW9bnIGhOfzxm0Ru7a69dfFqJuEeGaP%2BnPu1e0O4hWBQQoZv9sNiAVktCE2SyKEtvXPEqZV28dBd6ssLuo4%2BFoPWGy1504BCsLQqL1eAHBGb507m%2BZZwCIF9Ea%2F0Jy44Vj9yB%2B%2BN1MSWaKXLmVisg%2Fn2gVjxTGTO1qL4lhIB6y3vF%2FpyZFGHkWrc0YOxBJZTOlvzVBrNOetXxdK2uSbSHZHziHZeVyHV%2BBWkaV25gvp4ygDTWcZlGOUMttbHfZuu2Y0XCSlw38d%2BO8xQAIapYwMWJDpiYgtF9j6631hY4qPBxd7sRAdT2e8cx3dNq%2BQZdB8AoCud7FKTcB2VRbTYML7jbwGwh3BmG9dKDHLlCalezbG3V%2FbpAR%2FrHar2jvANNEHtolnmOP9Dj%2F%2BoZhU6ZjIY%2BR6V8w%2FP%2B3xgY6pgEL6CsAAtEOZvIRJ0zHKdaprQJlCWb5r6JSFgyAM5Lj8TZP7nhKMzUmL888HVijdVNVgWq9x6z6%2BMbuw1hs9T0%2BfobxRbQyZNsJ2QogcwyjUVIdBpZljIEDQQgnOTMdpnnTS8aVhBrDV1BV7Rlq%2FGg46%2B45BcwakyA72NHsEAYdpQ3h%2Fhv4xNLG%2F%2BL7wzJca13xQuQWlPKzQk0jf9a0xbY2qR1kxGqi&X-Amz-Signature=59abea24455f390e0bae18ab80af354714d1fb83e809f1ed01726733dbb7a6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLPIL37%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF8Ex7YhxfFnMutXJ%2F6wKIiK%2BTsJ3RpDNkQBXAVXgtoOAiAWS%2F7mqxHGB%2FuvR6eeG3%2BXvdiM4vrP0mQp%2F6Wdi%2FhJcSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0V23mphT6HXKSv5lKtwDJk6SNKshIn6P8c8Qh7N1aNIKEYtLx4pHUWBWheTwD23z%2FLhS7%2B8z3DqWXenx0tXE2zGRfINrpaXtwCfEg7TdSww8IAqNz9EERpuRJi4aPmjnMxuBgcC1eTt38pPrOFSk01tjy92f%2BT2nmiwXmzMki9TRMWuDhrnwUkItny%2FktD9gZLUp5j2LWhc8BkS2GaOs0gVlj%2BhdOd6dBXbyfcKbtT5qb2%2B9tUYW9bnIGhOfzxm0Ru7a69dfFqJuEeGaP%2BnPu1e0O4hWBQQoZv9sNiAVktCE2SyKEtvXPEqZV28dBd6ssLuo4%2BFoPWGy1504BCsLQqL1eAHBGb507m%2BZZwCIF9Ea%2F0Jy44Vj9yB%2B%2BN1MSWaKXLmVisg%2Fn2gVjxTGTO1qL4lhIB6y3vF%2FpyZFGHkWrc0YOxBJZTOlvzVBrNOetXxdK2uSbSHZHziHZeVyHV%2BBWkaV25gvp4ygDTWcZlGOUMttbHfZuu2Y0XCSlw38d%2BO8xQAIapYwMWJDpiYgtF9j6631hY4qPBxd7sRAdT2e8cx3dNq%2BQZdB8AoCud7FKTcB2VRbTYML7jbwGwh3BmG9dKDHLlCalezbG3V%2FbpAR%2FrHar2jvANNEHtolnmOP9Dj%2F%2BoZhU6ZjIY%2BR6V8w%2FP%2B3xgY6pgEL6CsAAtEOZvIRJ0zHKdaprQJlCWb5r6JSFgyAM5Lj8TZP7nhKMzUmL888HVijdVNVgWq9x6z6%2BMbuw1hs9T0%2BfobxRbQyZNsJ2QogcwyjUVIdBpZljIEDQQgnOTMdpnnTS8aVhBrDV1BV7Rlq%2FGg46%2B45BcwakyA72NHsEAYdpQ3h%2Fhv4xNLG%2F%2BL7wzJca13xQuQWlPKzQk0jf9a0xbY2qR1kxGqi&X-Amz-Signature=d50c4104aacb57e72368ba52852bfde517168c164f9779b67044c481d177d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLPIL37%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF8Ex7YhxfFnMutXJ%2F6wKIiK%2BTsJ3RpDNkQBXAVXgtoOAiAWS%2F7mqxHGB%2FuvR6eeG3%2BXvdiM4vrP0mQp%2F6Wdi%2FhJcSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0V23mphT6HXKSv5lKtwDJk6SNKshIn6P8c8Qh7N1aNIKEYtLx4pHUWBWheTwD23z%2FLhS7%2B8z3DqWXenx0tXE2zGRfINrpaXtwCfEg7TdSww8IAqNz9EERpuRJi4aPmjnMxuBgcC1eTt38pPrOFSk01tjy92f%2BT2nmiwXmzMki9TRMWuDhrnwUkItny%2FktD9gZLUp5j2LWhc8BkS2GaOs0gVlj%2BhdOd6dBXbyfcKbtT5qb2%2B9tUYW9bnIGhOfzxm0Ru7a69dfFqJuEeGaP%2BnPu1e0O4hWBQQoZv9sNiAVktCE2SyKEtvXPEqZV28dBd6ssLuo4%2BFoPWGy1504BCsLQqL1eAHBGb507m%2BZZwCIF9Ea%2F0Jy44Vj9yB%2B%2BN1MSWaKXLmVisg%2Fn2gVjxTGTO1qL4lhIB6y3vF%2FpyZFGHkWrc0YOxBJZTOlvzVBrNOetXxdK2uSbSHZHziHZeVyHV%2BBWkaV25gvp4ygDTWcZlGOUMttbHfZuu2Y0XCSlw38d%2BO8xQAIapYwMWJDpiYgtF9j6631hY4qPBxd7sRAdT2e8cx3dNq%2BQZdB8AoCud7FKTcB2VRbTYML7jbwGwh3BmG9dKDHLlCalezbG3V%2FbpAR%2FrHar2jvANNEHtolnmOP9Dj%2F%2BoZhU6ZjIY%2BR6V8w%2FP%2B3xgY6pgEL6CsAAtEOZvIRJ0zHKdaprQJlCWb5r6JSFgyAM5Lj8TZP7nhKMzUmL888HVijdVNVgWq9x6z6%2BMbuw1hs9T0%2BfobxRbQyZNsJ2QogcwyjUVIdBpZljIEDQQgnOTMdpnnTS8aVhBrDV1BV7Rlq%2FGg46%2B45BcwakyA72NHsEAYdpQ3h%2Fhv4xNLG%2F%2BL7wzJca13xQuQWlPKzQk0jf9a0xbY2qR1kxGqi&X-Amz-Signature=fd4e141e0b64b692d92da3b6f4411ae30c629c7707efb944b76230cd2af0b565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
