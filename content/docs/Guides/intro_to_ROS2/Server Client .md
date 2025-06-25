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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GP2642X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDMSq6v2WfnG0u%2BUb9%2F6aYnIxdAlbZZf1Zf05YgPtKInAiAQ4R%2FId1ZlvjU6OfEnLvyllhKW5EcPFqZEZMb1KsBsnCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMinav0rYycr4Q0wIUKtwDj0UN6IAIMUN8wkHjk2yNPLuf65a4%2BlS5Kng6GZJTSCGUkyGdKQsewsDXJ6eR5ZPvLPdlrTGY03ZYtcxOzwe%2BGu1c11dTy9PC4KK%2FYwpOT0%2Fw8qG0vY6iYRk0TPxvovA0%2FUrw6tmVH7j90042eIACHFGhguHG8bJ2aO%2F%2BkjCJiTlyvQUQXRqQF9S9VKTScVWGXS%2Bfi5lOhrrX0rQK5hasg2fsb9ozMteUnOr%2Beootd7mDif%2Fp7aKiSjgJwjXMUTV36egU%2F711bfqOZZBFR9d%2FhrFjzLl3J2TZR2efRGsu5sAC%2FONf5fw7cTjYdxIZEZ0xWYxVzx%2FDycq3rY0bAExETWYLjI2K3Iobx6YFFFmw%2FfpeGKbX1q3BirF0GWTYpF7BQntApoLbGdtSWVeuWsP1652tlekQ16wQo992OKzm1NFf5p6mcJtVOxN03NVOI1N%2BCoawkZ25M5d3DkXpwqkLXRoV5C3DygmfAgFbb4GgRxzUSWoGDubjPdR1gQ9VWKWkuOQGD1F4P1QVQNPciZNoUYWHhSBfHPFOfJpgysOafXn4m%2FDgOPlk%2B0I1UK3a8COKwhH8U6BMw7NOyDxfOw14lwRj2lLAJ3F3HAlPMSvy9DTasAdOjzySTRDImEUw9aXuwgY6pgHkGpls2Phyy9wYdLq0B3FCNfCtEa6GGVLWJxsOmvmu3JZft96Xnu3NV40%2BixpI1KKG4902VuP54OkS2io22YYxLdQJOW0TIL1AUs8ULQ6mHCZRc5ETJkGCr%2FEr%2FGGwAiwze%2B0KNUj7JKsiH8XjXZokzy1wJFYCIQxxk7Dj4pVD7Q4DtXLYhouIWlGNOcBCSYLziR53UGxlp4CpjxegDJOE3R%2BzAZwj&X-Amz-Signature=fd2c7c1466f3e65723900ea191ce3edfc3e98d676a49f4d56115316ee7f302dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GP2642X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDMSq6v2WfnG0u%2BUb9%2F6aYnIxdAlbZZf1Zf05YgPtKInAiAQ4R%2FId1ZlvjU6OfEnLvyllhKW5EcPFqZEZMb1KsBsnCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMinav0rYycr4Q0wIUKtwDj0UN6IAIMUN8wkHjk2yNPLuf65a4%2BlS5Kng6GZJTSCGUkyGdKQsewsDXJ6eR5ZPvLPdlrTGY03ZYtcxOzwe%2BGu1c11dTy9PC4KK%2FYwpOT0%2Fw8qG0vY6iYRk0TPxvovA0%2FUrw6tmVH7j90042eIACHFGhguHG8bJ2aO%2F%2BkjCJiTlyvQUQXRqQF9S9VKTScVWGXS%2Bfi5lOhrrX0rQK5hasg2fsb9ozMteUnOr%2Beootd7mDif%2Fp7aKiSjgJwjXMUTV36egU%2F711bfqOZZBFR9d%2FhrFjzLl3J2TZR2efRGsu5sAC%2FONf5fw7cTjYdxIZEZ0xWYxVzx%2FDycq3rY0bAExETWYLjI2K3Iobx6YFFFmw%2FfpeGKbX1q3BirF0GWTYpF7BQntApoLbGdtSWVeuWsP1652tlekQ16wQo992OKzm1NFf5p6mcJtVOxN03NVOI1N%2BCoawkZ25M5d3DkXpwqkLXRoV5C3DygmfAgFbb4GgRxzUSWoGDubjPdR1gQ9VWKWkuOQGD1F4P1QVQNPciZNoUYWHhSBfHPFOfJpgysOafXn4m%2FDgOPlk%2B0I1UK3a8COKwhH8U6BMw7NOyDxfOw14lwRj2lLAJ3F3HAlPMSvy9DTasAdOjzySTRDImEUw9aXuwgY6pgHkGpls2Phyy9wYdLq0B3FCNfCtEa6GGVLWJxsOmvmu3JZft96Xnu3NV40%2BixpI1KKG4902VuP54OkS2io22YYxLdQJOW0TIL1AUs8ULQ6mHCZRc5ETJkGCr%2FEr%2FGGwAiwze%2B0KNUj7JKsiH8XjXZokzy1wJFYCIQxxk7Dj4pVD7Q4DtXLYhouIWlGNOcBCSYLziR53UGxlp4CpjxegDJOE3R%2BzAZwj&X-Amz-Signature=3bfd27c5a4a5299c5d2b6b0ea05dfbd3a464d1905a3a76db2af4b2fd45466d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GP2642X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDMSq6v2WfnG0u%2BUb9%2F6aYnIxdAlbZZf1Zf05YgPtKInAiAQ4R%2FId1ZlvjU6OfEnLvyllhKW5EcPFqZEZMb1KsBsnCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMinav0rYycr4Q0wIUKtwDj0UN6IAIMUN8wkHjk2yNPLuf65a4%2BlS5Kng6GZJTSCGUkyGdKQsewsDXJ6eR5ZPvLPdlrTGY03ZYtcxOzwe%2BGu1c11dTy9PC4KK%2FYwpOT0%2Fw8qG0vY6iYRk0TPxvovA0%2FUrw6tmVH7j90042eIACHFGhguHG8bJ2aO%2F%2BkjCJiTlyvQUQXRqQF9S9VKTScVWGXS%2Bfi5lOhrrX0rQK5hasg2fsb9ozMteUnOr%2Beootd7mDif%2Fp7aKiSjgJwjXMUTV36egU%2F711bfqOZZBFR9d%2FhrFjzLl3J2TZR2efRGsu5sAC%2FONf5fw7cTjYdxIZEZ0xWYxVzx%2FDycq3rY0bAExETWYLjI2K3Iobx6YFFFmw%2FfpeGKbX1q3BirF0GWTYpF7BQntApoLbGdtSWVeuWsP1652tlekQ16wQo992OKzm1NFf5p6mcJtVOxN03NVOI1N%2BCoawkZ25M5d3DkXpwqkLXRoV5C3DygmfAgFbb4GgRxzUSWoGDubjPdR1gQ9VWKWkuOQGD1F4P1QVQNPciZNoUYWHhSBfHPFOfJpgysOafXn4m%2FDgOPlk%2B0I1UK3a8COKwhH8U6BMw7NOyDxfOw14lwRj2lLAJ3F3HAlPMSvy9DTasAdOjzySTRDImEUw9aXuwgY6pgHkGpls2Phyy9wYdLq0B3FCNfCtEa6GGVLWJxsOmvmu3JZft96Xnu3NV40%2BixpI1KKG4902VuP54OkS2io22YYxLdQJOW0TIL1AUs8ULQ6mHCZRc5ETJkGCr%2FEr%2FGGwAiwze%2B0KNUj7JKsiH8XjXZokzy1wJFYCIQxxk7Dj4pVD7Q4DtXLYhouIWlGNOcBCSYLziR53UGxlp4CpjxegDJOE3R%2BzAZwj&X-Amz-Signature=9d47d6d69606b54d33d8d1b595df78ea7654dc86531b2b3395ac398e6d35e363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GP2642X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDMSq6v2WfnG0u%2BUb9%2F6aYnIxdAlbZZf1Zf05YgPtKInAiAQ4R%2FId1ZlvjU6OfEnLvyllhKW5EcPFqZEZMb1KsBsnCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMinav0rYycr4Q0wIUKtwDj0UN6IAIMUN8wkHjk2yNPLuf65a4%2BlS5Kng6GZJTSCGUkyGdKQsewsDXJ6eR5ZPvLPdlrTGY03ZYtcxOzwe%2BGu1c11dTy9PC4KK%2FYwpOT0%2Fw8qG0vY6iYRk0TPxvovA0%2FUrw6tmVH7j90042eIACHFGhguHG8bJ2aO%2F%2BkjCJiTlyvQUQXRqQF9S9VKTScVWGXS%2Bfi5lOhrrX0rQK5hasg2fsb9ozMteUnOr%2Beootd7mDif%2Fp7aKiSjgJwjXMUTV36egU%2F711bfqOZZBFR9d%2FhrFjzLl3J2TZR2efRGsu5sAC%2FONf5fw7cTjYdxIZEZ0xWYxVzx%2FDycq3rY0bAExETWYLjI2K3Iobx6YFFFmw%2FfpeGKbX1q3BirF0GWTYpF7BQntApoLbGdtSWVeuWsP1652tlekQ16wQo992OKzm1NFf5p6mcJtVOxN03NVOI1N%2BCoawkZ25M5d3DkXpwqkLXRoV5C3DygmfAgFbb4GgRxzUSWoGDubjPdR1gQ9VWKWkuOQGD1F4P1QVQNPciZNoUYWHhSBfHPFOfJpgysOafXn4m%2FDgOPlk%2B0I1UK3a8COKwhH8U6BMw7NOyDxfOw14lwRj2lLAJ3F3HAlPMSvy9DTasAdOjzySTRDImEUw9aXuwgY6pgHkGpls2Phyy9wYdLq0B3FCNfCtEa6GGVLWJxsOmvmu3JZft96Xnu3NV40%2BixpI1KKG4902VuP54OkS2io22YYxLdQJOW0TIL1AUs8ULQ6mHCZRc5ETJkGCr%2FEr%2FGGwAiwze%2B0KNUj7JKsiH8XjXZokzy1wJFYCIQxxk7Dj4pVD7Q4DtXLYhouIWlGNOcBCSYLziR53UGxlp4CpjxegDJOE3R%2BzAZwj&X-Amz-Signature=86ff716a570ede48333c8cac90b586e7beb4f1e6658e4687b242e8c5dd052a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GP2642X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDMSq6v2WfnG0u%2BUb9%2F6aYnIxdAlbZZf1Zf05YgPtKInAiAQ4R%2FId1ZlvjU6OfEnLvyllhKW5EcPFqZEZMb1KsBsnCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMinav0rYycr4Q0wIUKtwDj0UN6IAIMUN8wkHjk2yNPLuf65a4%2BlS5Kng6GZJTSCGUkyGdKQsewsDXJ6eR5ZPvLPdlrTGY03ZYtcxOzwe%2BGu1c11dTy9PC4KK%2FYwpOT0%2Fw8qG0vY6iYRk0TPxvovA0%2FUrw6tmVH7j90042eIACHFGhguHG8bJ2aO%2F%2BkjCJiTlyvQUQXRqQF9S9VKTScVWGXS%2Bfi5lOhrrX0rQK5hasg2fsb9ozMteUnOr%2Beootd7mDif%2Fp7aKiSjgJwjXMUTV36egU%2F711bfqOZZBFR9d%2FhrFjzLl3J2TZR2efRGsu5sAC%2FONf5fw7cTjYdxIZEZ0xWYxVzx%2FDycq3rY0bAExETWYLjI2K3Iobx6YFFFmw%2FfpeGKbX1q3BirF0GWTYpF7BQntApoLbGdtSWVeuWsP1652tlekQ16wQo992OKzm1NFf5p6mcJtVOxN03NVOI1N%2BCoawkZ25M5d3DkXpwqkLXRoV5C3DygmfAgFbb4GgRxzUSWoGDubjPdR1gQ9VWKWkuOQGD1F4P1QVQNPciZNoUYWHhSBfHPFOfJpgysOafXn4m%2FDgOPlk%2B0I1UK3a8COKwhH8U6BMw7NOyDxfOw14lwRj2lLAJ3F3HAlPMSvy9DTasAdOjzySTRDImEUw9aXuwgY6pgHkGpls2Phyy9wYdLq0B3FCNfCtEa6GGVLWJxsOmvmu3JZft96Xnu3NV40%2BixpI1KKG4902VuP54OkS2io22YYxLdQJOW0TIL1AUs8ULQ6mHCZRc5ETJkGCr%2FEr%2FGGwAiwze%2B0KNUj7JKsiH8XjXZokzy1wJFYCIQxxk7Dj4pVD7Q4DtXLYhouIWlGNOcBCSYLziR53UGxlp4CpjxegDJOE3R%2BzAZwj&X-Amz-Signature=b556d1fccc02b3103a92ab2a7cbed6e523238db21098a5f8f3719f26e56dd3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
