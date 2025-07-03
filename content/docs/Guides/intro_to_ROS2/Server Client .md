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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLUTHBA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEvK2eJZNHR8DGgOBdUNPM%2FDsVfFc%2FqGyeSrJzlONCSkAiEA8ylpwZq2hBIMtMNpWQpRDdTF2IVxnWRD5%2BOEsDx2e68q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiRku3oMc67fvisZSrcA6ehcu9ZPuPOzdxaexEmEKohjecvqgRNy3ocGuQcO4m9Sof7P6s0BC7ogqlhIpqKsvDRbEByqPYrsy%2BfmC1ha19gkHM%2BS75Jdxk1N55XrDiFbkQBH8mfTOTp7U6hNBFBD%2BfYljvrhqhv3fDFK5M2nMzjNHv0mmLNnrZuDAoXMbpaccYyYWMTTywXGh4BQ6PxZWuGUxrPcFo6FYHbh9uyTVvAyh1VU54ubE3g7X%2BUKwHX3%2BDLOMO5f%2BFD9wXrFr3ZskHRlB1t2DZrrul3Fpx9rrvT1mbDfClkVSv85h0ncIZPnPKeaHA3z84b2uL3ICqS3KMMVW%2FkGNbubgf6F9DetyYAaqclJCfg49q64O3et77Yi%2FuuYQH6w52ybVi9Gt%2BJFKaY7mXNP4eGvzV%2BE4%2FlCDvEALaLLx1Z%2BDoDl6%2FhIzyhjF%2FaLrE74QWBN0DoXpaUEu%2FhNNTZ9SVexBnNtOquuCOIJiZWktiMbfVS9oD8aoxIbdZzpZUEeCB1HW9sXyofoFsGJDMqVJw6nTprONWQiSrPsPZYZcXj0m4cV6Y78ZuNUqOYbTZKVSUF8gJGPCcH1gQWwxGS%2BG%2BZoVIJLwvJ1RS8TB5SYbARFr0zbLMXbiIv7bkZYg8c2lm5Wm6HMLaImcMGOqUBzcCo29UuQio8UNXbYL%2B1y3mFfBc6TItA%2B3LaQBWv1dFjT98LQL6ziU1dwx6WAjo34ztd3zDmEiIvt4fV7NNdysVE4MQctEESypJtPIpm1Rt%2BXgGQ%2FYP6LiG2GXP8PnBt2qkYJ5STY8Fusq0vvKf0t9BV%2FFB4%2FANuTFWeVBntrYl%2FjWPEvsgm6NmZFvPSZ58kv6CpbJWCMqBblw5WolvtKjb8AZ9J&X-Amz-Signature=e33d2fce723c977791c09154584763f03bd53cae3ab7fa536b193acc57ef6834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLUTHBA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEvK2eJZNHR8DGgOBdUNPM%2FDsVfFc%2FqGyeSrJzlONCSkAiEA8ylpwZq2hBIMtMNpWQpRDdTF2IVxnWRD5%2BOEsDx2e68q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiRku3oMc67fvisZSrcA6ehcu9ZPuPOzdxaexEmEKohjecvqgRNy3ocGuQcO4m9Sof7P6s0BC7ogqlhIpqKsvDRbEByqPYrsy%2BfmC1ha19gkHM%2BS75Jdxk1N55XrDiFbkQBH8mfTOTp7U6hNBFBD%2BfYljvrhqhv3fDFK5M2nMzjNHv0mmLNnrZuDAoXMbpaccYyYWMTTywXGh4BQ6PxZWuGUxrPcFo6FYHbh9uyTVvAyh1VU54ubE3g7X%2BUKwHX3%2BDLOMO5f%2BFD9wXrFr3ZskHRlB1t2DZrrul3Fpx9rrvT1mbDfClkVSv85h0ncIZPnPKeaHA3z84b2uL3ICqS3KMMVW%2FkGNbubgf6F9DetyYAaqclJCfg49q64O3et77Yi%2FuuYQH6w52ybVi9Gt%2BJFKaY7mXNP4eGvzV%2BE4%2FlCDvEALaLLx1Z%2BDoDl6%2FhIzyhjF%2FaLrE74QWBN0DoXpaUEu%2FhNNTZ9SVexBnNtOquuCOIJiZWktiMbfVS9oD8aoxIbdZzpZUEeCB1HW9sXyofoFsGJDMqVJw6nTprONWQiSrPsPZYZcXj0m4cV6Y78ZuNUqOYbTZKVSUF8gJGPCcH1gQWwxGS%2BG%2BZoVIJLwvJ1RS8TB5SYbARFr0zbLMXbiIv7bkZYg8c2lm5Wm6HMLaImcMGOqUBzcCo29UuQio8UNXbYL%2B1y3mFfBc6TItA%2B3LaQBWv1dFjT98LQL6ziU1dwx6WAjo34ztd3zDmEiIvt4fV7NNdysVE4MQctEESypJtPIpm1Rt%2BXgGQ%2FYP6LiG2GXP8PnBt2qkYJ5STY8Fusq0vvKf0t9BV%2FFB4%2FANuTFWeVBntrYl%2FjWPEvsgm6NmZFvPSZ58kv6CpbJWCMqBblw5WolvtKjb8AZ9J&X-Amz-Signature=2956f2a9885a18229080276408559effcf08144d1772a0ef39bea07953a679d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLUTHBA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEvK2eJZNHR8DGgOBdUNPM%2FDsVfFc%2FqGyeSrJzlONCSkAiEA8ylpwZq2hBIMtMNpWQpRDdTF2IVxnWRD5%2BOEsDx2e68q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiRku3oMc67fvisZSrcA6ehcu9ZPuPOzdxaexEmEKohjecvqgRNy3ocGuQcO4m9Sof7P6s0BC7ogqlhIpqKsvDRbEByqPYrsy%2BfmC1ha19gkHM%2BS75Jdxk1N55XrDiFbkQBH8mfTOTp7U6hNBFBD%2BfYljvrhqhv3fDFK5M2nMzjNHv0mmLNnrZuDAoXMbpaccYyYWMTTywXGh4BQ6PxZWuGUxrPcFo6FYHbh9uyTVvAyh1VU54ubE3g7X%2BUKwHX3%2BDLOMO5f%2BFD9wXrFr3ZskHRlB1t2DZrrul3Fpx9rrvT1mbDfClkVSv85h0ncIZPnPKeaHA3z84b2uL3ICqS3KMMVW%2FkGNbubgf6F9DetyYAaqclJCfg49q64O3et77Yi%2FuuYQH6w52ybVi9Gt%2BJFKaY7mXNP4eGvzV%2BE4%2FlCDvEALaLLx1Z%2BDoDl6%2FhIzyhjF%2FaLrE74QWBN0DoXpaUEu%2FhNNTZ9SVexBnNtOquuCOIJiZWktiMbfVS9oD8aoxIbdZzpZUEeCB1HW9sXyofoFsGJDMqVJw6nTprONWQiSrPsPZYZcXj0m4cV6Y78ZuNUqOYbTZKVSUF8gJGPCcH1gQWwxGS%2BG%2BZoVIJLwvJ1RS8TB5SYbARFr0zbLMXbiIv7bkZYg8c2lm5Wm6HMLaImcMGOqUBzcCo29UuQio8UNXbYL%2B1y3mFfBc6TItA%2B3LaQBWv1dFjT98LQL6ziU1dwx6WAjo34ztd3zDmEiIvt4fV7NNdysVE4MQctEESypJtPIpm1Rt%2BXgGQ%2FYP6LiG2GXP8PnBt2qkYJ5STY8Fusq0vvKf0t9BV%2FFB4%2FANuTFWeVBntrYl%2FjWPEvsgm6NmZFvPSZ58kv6CpbJWCMqBblw5WolvtKjb8AZ9J&X-Amz-Signature=f9b4dbf15cb6851dc0f75b40493df8999701dd646bc3757f74d9abe0ede2c29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLUTHBA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEvK2eJZNHR8DGgOBdUNPM%2FDsVfFc%2FqGyeSrJzlONCSkAiEA8ylpwZq2hBIMtMNpWQpRDdTF2IVxnWRD5%2BOEsDx2e68q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiRku3oMc67fvisZSrcA6ehcu9ZPuPOzdxaexEmEKohjecvqgRNy3ocGuQcO4m9Sof7P6s0BC7ogqlhIpqKsvDRbEByqPYrsy%2BfmC1ha19gkHM%2BS75Jdxk1N55XrDiFbkQBH8mfTOTp7U6hNBFBD%2BfYljvrhqhv3fDFK5M2nMzjNHv0mmLNnrZuDAoXMbpaccYyYWMTTywXGh4BQ6PxZWuGUxrPcFo6FYHbh9uyTVvAyh1VU54ubE3g7X%2BUKwHX3%2BDLOMO5f%2BFD9wXrFr3ZskHRlB1t2DZrrul3Fpx9rrvT1mbDfClkVSv85h0ncIZPnPKeaHA3z84b2uL3ICqS3KMMVW%2FkGNbubgf6F9DetyYAaqclJCfg49q64O3et77Yi%2FuuYQH6w52ybVi9Gt%2BJFKaY7mXNP4eGvzV%2BE4%2FlCDvEALaLLx1Z%2BDoDl6%2FhIzyhjF%2FaLrE74QWBN0DoXpaUEu%2FhNNTZ9SVexBnNtOquuCOIJiZWktiMbfVS9oD8aoxIbdZzpZUEeCB1HW9sXyofoFsGJDMqVJw6nTprONWQiSrPsPZYZcXj0m4cV6Y78ZuNUqOYbTZKVSUF8gJGPCcH1gQWwxGS%2BG%2BZoVIJLwvJ1RS8TB5SYbARFr0zbLMXbiIv7bkZYg8c2lm5Wm6HMLaImcMGOqUBzcCo29UuQio8UNXbYL%2B1y3mFfBc6TItA%2B3LaQBWv1dFjT98LQL6ziU1dwx6WAjo34ztd3zDmEiIvt4fV7NNdysVE4MQctEESypJtPIpm1Rt%2BXgGQ%2FYP6LiG2GXP8PnBt2qkYJ5STY8Fusq0vvKf0t9BV%2FFB4%2FANuTFWeVBntrYl%2FjWPEvsgm6NmZFvPSZ58kv6CpbJWCMqBblw5WolvtKjb8AZ9J&X-Amz-Signature=b550374ea75a0ecfec800ac7f3241e66adf89678e46a6e417531911fd0ba7e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLUTHBA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEvK2eJZNHR8DGgOBdUNPM%2FDsVfFc%2FqGyeSrJzlONCSkAiEA8ylpwZq2hBIMtMNpWQpRDdTF2IVxnWRD5%2BOEsDx2e68q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiRku3oMc67fvisZSrcA6ehcu9ZPuPOzdxaexEmEKohjecvqgRNy3ocGuQcO4m9Sof7P6s0BC7ogqlhIpqKsvDRbEByqPYrsy%2BfmC1ha19gkHM%2BS75Jdxk1N55XrDiFbkQBH8mfTOTp7U6hNBFBD%2BfYljvrhqhv3fDFK5M2nMzjNHv0mmLNnrZuDAoXMbpaccYyYWMTTywXGh4BQ6PxZWuGUxrPcFo6FYHbh9uyTVvAyh1VU54ubE3g7X%2BUKwHX3%2BDLOMO5f%2BFD9wXrFr3ZskHRlB1t2DZrrul3Fpx9rrvT1mbDfClkVSv85h0ncIZPnPKeaHA3z84b2uL3ICqS3KMMVW%2FkGNbubgf6F9DetyYAaqclJCfg49q64O3et77Yi%2FuuYQH6w52ybVi9Gt%2BJFKaY7mXNP4eGvzV%2BE4%2FlCDvEALaLLx1Z%2BDoDl6%2FhIzyhjF%2FaLrE74QWBN0DoXpaUEu%2FhNNTZ9SVexBnNtOquuCOIJiZWktiMbfVS9oD8aoxIbdZzpZUEeCB1HW9sXyofoFsGJDMqVJw6nTprONWQiSrPsPZYZcXj0m4cV6Y78ZuNUqOYbTZKVSUF8gJGPCcH1gQWwxGS%2BG%2BZoVIJLwvJ1RS8TB5SYbARFr0zbLMXbiIv7bkZYg8c2lm5Wm6HMLaImcMGOqUBzcCo29UuQio8UNXbYL%2B1y3mFfBc6TItA%2B3LaQBWv1dFjT98LQL6ziU1dwx6WAjo34ztd3zDmEiIvt4fV7NNdysVE4MQctEESypJtPIpm1Rt%2BXgGQ%2FYP6LiG2GXP8PnBt2qkYJ5STY8Fusq0vvKf0t9BV%2FFB4%2FANuTFWeVBntrYl%2FjWPEvsgm6NmZFvPSZ58kv6CpbJWCMqBblw5WolvtKjb8AZ9J&X-Amz-Signature=cad32fe73e3f4f70381e27c860862cf82acbd5d0d8c1af3e4b0b068375f24c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
