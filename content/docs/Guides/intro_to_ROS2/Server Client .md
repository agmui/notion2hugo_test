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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEZS76H%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLaxUtq9yD8rKf0uTnZ06JPkQbEA%2Fn4Mn112c0UrWV9AiEA%2F%2BCeXOYriwWfXp5jG2UL9qn4H01QLhfwnEyKNiqCT7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpcTKjUZwSBQB98RircAxjhziK7tugty0iZ4%2BAKLRFb%2FSNa8jTERB%2FT0TgyRp7uVzOuI86cEjy%2B65xbH%2ByXY%2Bf3DNiYcIHVbIzsB3XA2vwH7TZfYK8yeJS2Kddh0emRBciIAt2RCckYVargl8g%2FyCQQYPA5aFAzwU7ebd5n4oZN9AoTfkXg3oa8GymDcE3D9V4NH5khnUFs%2B4qKLLB0R0imzFe%2F4wzDB8d7GQHp9gqfDs0Wcnw68oDH88uCVHPvWVQyc0cF1Qm4gXp0QSimOHZKDw%2B1Y3LugAattFo013tePKhoGRd%2BS2FpWBHjnb285w7TIfpyyGf3mtmvfkUzKKOT0k7Zeb8Oe2%2BJXqwCovBsGuNeVH8iq1P0W2f%2Fgmax0Iiy0oRb4E%2BKSybvovUqRd7PNMa137O7oXp2s5y2qvoLWmNVkn71uXdFAKem5FIcDnu%2FtS9UkE9YpnDGuUA8T6yN3r%2BXTwWpJkskx0fbf%2F9BYWhAgNFj2WaAkW7QadjxWQHIAzUjoy6bTRLAO%2BtsG3ULgCZt0nwBTZVj71Jf7F%2FBvzmsTLKf7vBuZ1BzD1yHUMTFUiXrWngqTcloqjpICCjNc2sCt1Uprc2CoE1cLJ618Ar%2Fp3HZsyehLjsm44bZjLdjba%2BvhYeVKmGMMLbV2cIGOqUBhT9mMqU2BES83rUMbgD2NOUyIhfd9QJSC8%2Fo6dqJhxPVBc3ZW8EyjURo4c0dGucwsPrHDn%2FpzKx1FXkHuJFp91djQ7P7FLtQ2%2FO0iu7ZaIGMNi9tjosx3Uk9SAuNTkWE8gThavSdx4VX8QRqF6A4KyGkxze1lRF0qBJxxog0%2BKZPWT2edSquQwLXuyLKvW2uXzZpDSrS3yzuvP4d5DjTWXLuIhpM&X-Amz-Signature=3da2a52c7f124f0d602cc9d537981b0905553a6667bcb3675cb3c70782832fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEZS76H%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLaxUtq9yD8rKf0uTnZ06JPkQbEA%2Fn4Mn112c0UrWV9AiEA%2F%2BCeXOYriwWfXp5jG2UL9qn4H01QLhfwnEyKNiqCT7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpcTKjUZwSBQB98RircAxjhziK7tugty0iZ4%2BAKLRFb%2FSNa8jTERB%2FT0TgyRp7uVzOuI86cEjy%2B65xbH%2ByXY%2Bf3DNiYcIHVbIzsB3XA2vwH7TZfYK8yeJS2Kddh0emRBciIAt2RCckYVargl8g%2FyCQQYPA5aFAzwU7ebd5n4oZN9AoTfkXg3oa8GymDcE3D9V4NH5khnUFs%2B4qKLLB0R0imzFe%2F4wzDB8d7GQHp9gqfDs0Wcnw68oDH88uCVHPvWVQyc0cF1Qm4gXp0QSimOHZKDw%2B1Y3LugAattFo013tePKhoGRd%2BS2FpWBHjnb285w7TIfpyyGf3mtmvfkUzKKOT0k7Zeb8Oe2%2BJXqwCovBsGuNeVH8iq1P0W2f%2Fgmax0Iiy0oRb4E%2BKSybvovUqRd7PNMa137O7oXp2s5y2qvoLWmNVkn71uXdFAKem5FIcDnu%2FtS9UkE9YpnDGuUA8T6yN3r%2BXTwWpJkskx0fbf%2F9BYWhAgNFj2WaAkW7QadjxWQHIAzUjoy6bTRLAO%2BtsG3ULgCZt0nwBTZVj71Jf7F%2FBvzmsTLKf7vBuZ1BzD1yHUMTFUiXrWngqTcloqjpICCjNc2sCt1Uprc2CoE1cLJ618Ar%2Fp3HZsyehLjsm44bZjLdjba%2BvhYeVKmGMMLbV2cIGOqUBhT9mMqU2BES83rUMbgD2NOUyIhfd9QJSC8%2Fo6dqJhxPVBc3ZW8EyjURo4c0dGucwsPrHDn%2FpzKx1FXkHuJFp91djQ7P7FLtQ2%2FO0iu7ZaIGMNi9tjosx3Uk9SAuNTkWE8gThavSdx4VX8QRqF6A4KyGkxze1lRF0qBJxxog0%2BKZPWT2edSquQwLXuyLKvW2uXzZpDSrS3yzuvP4d5DjTWXLuIhpM&X-Amz-Signature=8eee62e188715da8c119aa1725085cdfaf144269814329b9ee7ffdc339469c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEZS76H%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLaxUtq9yD8rKf0uTnZ06JPkQbEA%2Fn4Mn112c0UrWV9AiEA%2F%2BCeXOYriwWfXp5jG2UL9qn4H01QLhfwnEyKNiqCT7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpcTKjUZwSBQB98RircAxjhziK7tugty0iZ4%2BAKLRFb%2FSNa8jTERB%2FT0TgyRp7uVzOuI86cEjy%2B65xbH%2ByXY%2Bf3DNiYcIHVbIzsB3XA2vwH7TZfYK8yeJS2Kddh0emRBciIAt2RCckYVargl8g%2FyCQQYPA5aFAzwU7ebd5n4oZN9AoTfkXg3oa8GymDcE3D9V4NH5khnUFs%2B4qKLLB0R0imzFe%2F4wzDB8d7GQHp9gqfDs0Wcnw68oDH88uCVHPvWVQyc0cF1Qm4gXp0QSimOHZKDw%2B1Y3LugAattFo013tePKhoGRd%2BS2FpWBHjnb285w7TIfpyyGf3mtmvfkUzKKOT0k7Zeb8Oe2%2BJXqwCovBsGuNeVH8iq1P0W2f%2Fgmax0Iiy0oRb4E%2BKSybvovUqRd7PNMa137O7oXp2s5y2qvoLWmNVkn71uXdFAKem5FIcDnu%2FtS9UkE9YpnDGuUA8T6yN3r%2BXTwWpJkskx0fbf%2F9BYWhAgNFj2WaAkW7QadjxWQHIAzUjoy6bTRLAO%2BtsG3ULgCZt0nwBTZVj71Jf7F%2FBvzmsTLKf7vBuZ1BzD1yHUMTFUiXrWngqTcloqjpICCjNc2sCt1Uprc2CoE1cLJ618Ar%2Fp3HZsyehLjsm44bZjLdjba%2BvhYeVKmGMMLbV2cIGOqUBhT9mMqU2BES83rUMbgD2NOUyIhfd9QJSC8%2Fo6dqJhxPVBc3ZW8EyjURo4c0dGucwsPrHDn%2FpzKx1FXkHuJFp91djQ7P7FLtQ2%2FO0iu7ZaIGMNi9tjosx3Uk9SAuNTkWE8gThavSdx4VX8QRqF6A4KyGkxze1lRF0qBJxxog0%2BKZPWT2edSquQwLXuyLKvW2uXzZpDSrS3yzuvP4d5DjTWXLuIhpM&X-Amz-Signature=58ed395f51cb7cdc6bfbb3904a7c11251e843c5fda261af9aa3d1980a347a4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEZS76H%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLaxUtq9yD8rKf0uTnZ06JPkQbEA%2Fn4Mn112c0UrWV9AiEA%2F%2BCeXOYriwWfXp5jG2UL9qn4H01QLhfwnEyKNiqCT7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpcTKjUZwSBQB98RircAxjhziK7tugty0iZ4%2BAKLRFb%2FSNa8jTERB%2FT0TgyRp7uVzOuI86cEjy%2B65xbH%2ByXY%2Bf3DNiYcIHVbIzsB3XA2vwH7TZfYK8yeJS2Kddh0emRBciIAt2RCckYVargl8g%2FyCQQYPA5aFAzwU7ebd5n4oZN9AoTfkXg3oa8GymDcE3D9V4NH5khnUFs%2B4qKLLB0R0imzFe%2F4wzDB8d7GQHp9gqfDs0Wcnw68oDH88uCVHPvWVQyc0cF1Qm4gXp0QSimOHZKDw%2B1Y3LugAattFo013tePKhoGRd%2BS2FpWBHjnb285w7TIfpyyGf3mtmvfkUzKKOT0k7Zeb8Oe2%2BJXqwCovBsGuNeVH8iq1P0W2f%2Fgmax0Iiy0oRb4E%2BKSybvovUqRd7PNMa137O7oXp2s5y2qvoLWmNVkn71uXdFAKem5FIcDnu%2FtS9UkE9YpnDGuUA8T6yN3r%2BXTwWpJkskx0fbf%2F9BYWhAgNFj2WaAkW7QadjxWQHIAzUjoy6bTRLAO%2BtsG3ULgCZt0nwBTZVj71Jf7F%2FBvzmsTLKf7vBuZ1BzD1yHUMTFUiXrWngqTcloqjpICCjNc2sCt1Uprc2CoE1cLJ618Ar%2Fp3HZsyehLjsm44bZjLdjba%2BvhYeVKmGMMLbV2cIGOqUBhT9mMqU2BES83rUMbgD2NOUyIhfd9QJSC8%2Fo6dqJhxPVBc3ZW8EyjURo4c0dGucwsPrHDn%2FpzKx1FXkHuJFp91djQ7P7FLtQ2%2FO0iu7ZaIGMNi9tjosx3Uk9SAuNTkWE8gThavSdx4VX8QRqF6A4KyGkxze1lRF0qBJxxog0%2BKZPWT2edSquQwLXuyLKvW2uXzZpDSrS3yzuvP4d5DjTWXLuIhpM&X-Amz-Signature=5533fa843293869f07caccde8216221472e8b9ad6911172ec00a6477c0bc9327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEZS76H%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLaxUtq9yD8rKf0uTnZ06JPkQbEA%2Fn4Mn112c0UrWV9AiEA%2F%2BCeXOYriwWfXp5jG2UL9qn4H01QLhfwnEyKNiqCT7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpcTKjUZwSBQB98RircAxjhziK7tugty0iZ4%2BAKLRFb%2FSNa8jTERB%2FT0TgyRp7uVzOuI86cEjy%2B65xbH%2ByXY%2Bf3DNiYcIHVbIzsB3XA2vwH7TZfYK8yeJS2Kddh0emRBciIAt2RCckYVargl8g%2FyCQQYPA5aFAzwU7ebd5n4oZN9AoTfkXg3oa8GymDcE3D9V4NH5khnUFs%2B4qKLLB0R0imzFe%2F4wzDB8d7GQHp9gqfDs0Wcnw68oDH88uCVHPvWVQyc0cF1Qm4gXp0QSimOHZKDw%2B1Y3LugAattFo013tePKhoGRd%2BS2FpWBHjnb285w7TIfpyyGf3mtmvfkUzKKOT0k7Zeb8Oe2%2BJXqwCovBsGuNeVH8iq1P0W2f%2Fgmax0Iiy0oRb4E%2BKSybvovUqRd7PNMa137O7oXp2s5y2qvoLWmNVkn71uXdFAKem5FIcDnu%2FtS9UkE9YpnDGuUA8T6yN3r%2BXTwWpJkskx0fbf%2F9BYWhAgNFj2WaAkW7QadjxWQHIAzUjoy6bTRLAO%2BtsG3ULgCZt0nwBTZVj71Jf7F%2FBvzmsTLKf7vBuZ1BzD1yHUMTFUiXrWngqTcloqjpICCjNc2sCt1Uprc2CoE1cLJ618Ar%2Fp3HZsyehLjsm44bZjLdjba%2BvhYeVKmGMMLbV2cIGOqUBhT9mMqU2BES83rUMbgD2NOUyIhfd9QJSC8%2Fo6dqJhxPVBc3ZW8EyjURo4c0dGucwsPrHDn%2FpzKx1FXkHuJFp91djQ7P7FLtQ2%2FO0iu7ZaIGMNi9tjosx3Uk9SAuNTkWE8gThavSdx4VX8QRqF6A4KyGkxze1lRF0qBJxxog0%2BKZPWT2edSquQwLXuyLKvW2uXzZpDSrS3yzuvP4d5DjTWXLuIhpM&X-Amz-Signature=0c60120e0fdadf1db22b82332387e02f8f13997d9a86e860ff93e2dfa8213f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
