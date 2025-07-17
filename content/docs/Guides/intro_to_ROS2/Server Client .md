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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLT6AM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFMU4Y6gEQ%2BGwEGaH4KNSMyW2qLS1W8X9vsUHZQ73kBSAiEA51wEix6HtGSg6eizVodP9WNlIBw5y2ywPusWHoJoXfgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDCilWf%2Btc9zyl9z%2FyrcA9BefcmXY49sRGpfUhBeCDNY085BnNKtYEFYMyjmNlTD0qxm0kczmVL2qcMmxQolHEn%2FF3yQeCfMrHcsDcJemx6nZOOtJHgzGayHDAgFWMDwDUcOQqnCnOUrCrdYk5mN5QHL%2BJ3s17BZ2eu6PnfNHb1bBNa0gxjrXE5spf7K6lgtrp0yf9bMymuD1lWL9ttQ9EJqwb1uTJe%2Fy9A2SASJ4uev1v8yNILmzYl9LAhhPS6XUy0J7PBIHkhEaSTm6SDHXqGzqFzM%2FwkFXGv1mfBc0zwDOAqE6g1kZ5Wn8w6le%2B2xhqBvubNGQINS1nl3eCXFwGe3a0QifUfBj8sxNxLjiQL9VRxhFx%2FRQUR7UGas1oPkUnDH3c8HNA4VWDsaGKkn4OwC1R4mK5QotWAviwRmF68dO0XdQ%2FPGMHYXo7MF%2FfFhI7mIWYwwljn5tUwhR%2FH%2F7J7jZvmuInE34%2FDXg2LZjRSAPXVvtkqVta2UnPSG8p9GuyhL1o4jeR1%2F2vlHesr%2B5%2BBIvbVUKmlBXq%2BmfvmeAJPId9WCDlUky2sntOH7Tj%2FDz3J7yzku0lqXwMFQSyAYoG147BZ4jSPhqwlpQYc7cNeRedToDatQlwzogASLbFx3a2iL16NeXojbBVRIMLju4cMGOqUBFn3tWl2msWTaCWwhSvDcvc%2Fn1qO4mqok9pxcobMivqM6abA2GN0Bo5f25%2BDuMew1No%2B%2Bu3aJrSYYam9dkZl7JtMSJDV5ZI3gAuKZW09UrpprdrzOnu2QZAlz0n977Xwe1qpLioSWL6mp9mmerl9NkHF9AqbDIDPTmm7flFuxddGUcqPZ4zMbU%2BMIoOVRYbQ%2Bf5wUUU2V0f7AuZbJovctYkBpCbNb&X-Amz-Signature=55c37f298e1e66a1e0a8e8fabc79d90fc7310a276f53c66271e541a35ed5c76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLT6AM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFMU4Y6gEQ%2BGwEGaH4KNSMyW2qLS1W8X9vsUHZQ73kBSAiEA51wEix6HtGSg6eizVodP9WNlIBw5y2ywPusWHoJoXfgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDCilWf%2Btc9zyl9z%2FyrcA9BefcmXY49sRGpfUhBeCDNY085BnNKtYEFYMyjmNlTD0qxm0kczmVL2qcMmxQolHEn%2FF3yQeCfMrHcsDcJemx6nZOOtJHgzGayHDAgFWMDwDUcOQqnCnOUrCrdYk5mN5QHL%2BJ3s17BZ2eu6PnfNHb1bBNa0gxjrXE5spf7K6lgtrp0yf9bMymuD1lWL9ttQ9EJqwb1uTJe%2Fy9A2SASJ4uev1v8yNILmzYl9LAhhPS6XUy0J7PBIHkhEaSTm6SDHXqGzqFzM%2FwkFXGv1mfBc0zwDOAqE6g1kZ5Wn8w6le%2B2xhqBvubNGQINS1nl3eCXFwGe3a0QifUfBj8sxNxLjiQL9VRxhFx%2FRQUR7UGas1oPkUnDH3c8HNA4VWDsaGKkn4OwC1R4mK5QotWAviwRmF68dO0XdQ%2FPGMHYXo7MF%2FfFhI7mIWYwwljn5tUwhR%2FH%2F7J7jZvmuInE34%2FDXg2LZjRSAPXVvtkqVta2UnPSG8p9GuyhL1o4jeR1%2F2vlHesr%2B5%2BBIvbVUKmlBXq%2BmfvmeAJPId9WCDlUky2sntOH7Tj%2FDz3J7yzku0lqXwMFQSyAYoG147BZ4jSPhqwlpQYc7cNeRedToDatQlwzogASLbFx3a2iL16NeXojbBVRIMLju4cMGOqUBFn3tWl2msWTaCWwhSvDcvc%2Fn1qO4mqok9pxcobMivqM6abA2GN0Bo5f25%2BDuMew1No%2B%2Bu3aJrSYYam9dkZl7JtMSJDV5ZI3gAuKZW09UrpprdrzOnu2QZAlz0n977Xwe1qpLioSWL6mp9mmerl9NkHF9AqbDIDPTmm7flFuxddGUcqPZ4zMbU%2BMIoOVRYbQ%2Bf5wUUU2V0f7AuZbJovctYkBpCbNb&X-Amz-Signature=2b43635f73f5c5d333b3fa64fdb1bd6d80cad77417ddc89b086d4b36b7e229c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLT6AM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFMU4Y6gEQ%2BGwEGaH4KNSMyW2qLS1W8X9vsUHZQ73kBSAiEA51wEix6HtGSg6eizVodP9WNlIBw5y2ywPusWHoJoXfgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDCilWf%2Btc9zyl9z%2FyrcA9BefcmXY49sRGpfUhBeCDNY085BnNKtYEFYMyjmNlTD0qxm0kczmVL2qcMmxQolHEn%2FF3yQeCfMrHcsDcJemx6nZOOtJHgzGayHDAgFWMDwDUcOQqnCnOUrCrdYk5mN5QHL%2BJ3s17BZ2eu6PnfNHb1bBNa0gxjrXE5spf7K6lgtrp0yf9bMymuD1lWL9ttQ9EJqwb1uTJe%2Fy9A2SASJ4uev1v8yNILmzYl9LAhhPS6XUy0J7PBIHkhEaSTm6SDHXqGzqFzM%2FwkFXGv1mfBc0zwDOAqE6g1kZ5Wn8w6le%2B2xhqBvubNGQINS1nl3eCXFwGe3a0QifUfBj8sxNxLjiQL9VRxhFx%2FRQUR7UGas1oPkUnDH3c8HNA4VWDsaGKkn4OwC1R4mK5QotWAviwRmF68dO0XdQ%2FPGMHYXo7MF%2FfFhI7mIWYwwljn5tUwhR%2FH%2F7J7jZvmuInE34%2FDXg2LZjRSAPXVvtkqVta2UnPSG8p9GuyhL1o4jeR1%2F2vlHesr%2B5%2BBIvbVUKmlBXq%2BmfvmeAJPId9WCDlUky2sntOH7Tj%2FDz3J7yzku0lqXwMFQSyAYoG147BZ4jSPhqwlpQYc7cNeRedToDatQlwzogASLbFx3a2iL16NeXojbBVRIMLju4cMGOqUBFn3tWl2msWTaCWwhSvDcvc%2Fn1qO4mqok9pxcobMivqM6abA2GN0Bo5f25%2BDuMew1No%2B%2Bu3aJrSYYam9dkZl7JtMSJDV5ZI3gAuKZW09UrpprdrzOnu2QZAlz0n977Xwe1qpLioSWL6mp9mmerl9NkHF9AqbDIDPTmm7flFuxddGUcqPZ4zMbU%2BMIoOVRYbQ%2Bf5wUUU2V0f7AuZbJovctYkBpCbNb&X-Amz-Signature=e1795c214e7688106e1eee8acdfc154cd2ce1c456d51d7e0c93c07db8b275b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLT6AM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFMU4Y6gEQ%2BGwEGaH4KNSMyW2qLS1W8X9vsUHZQ73kBSAiEA51wEix6HtGSg6eizVodP9WNlIBw5y2ywPusWHoJoXfgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDCilWf%2Btc9zyl9z%2FyrcA9BefcmXY49sRGpfUhBeCDNY085BnNKtYEFYMyjmNlTD0qxm0kczmVL2qcMmxQolHEn%2FF3yQeCfMrHcsDcJemx6nZOOtJHgzGayHDAgFWMDwDUcOQqnCnOUrCrdYk5mN5QHL%2BJ3s17BZ2eu6PnfNHb1bBNa0gxjrXE5spf7K6lgtrp0yf9bMymuD1lWL9ttQ9EJqwb1uTJe%2Fy9A2SASJ4uev1v8yNILmzYl9LAhhPS6XUy0J7PBIHkhEaSTm6SDHXqGzqFzM%2FwkFXGv1mfBc0zwDOAqE6g1kZ5Wn8w6le%2B2xhqBvubNGQINS1nl3eCXFwGe3a0QifUfBj8sxNxLjiQL9VRxhFx%2FRQUR7UGas1oPkUnDH3c8HNA4VWDsaGKkn4OwC1R4mK5QotWAviwRmF68dO0XdQ%2FPGMHYXo7MF%2FfFhI7mIWYwwljn5tUwhR%2FH%2F7J7jZvmuInE34%2FDXg2LZjRSAPXVvtkqVta2UnPSG8p9GuyhL1o4jeR1%2F2vlHesr%2B5%2BBIvbVUKmlBXq%2BmfvmeAJPId9WCDlUky2sntOH7Tj%2FDz3J7yzku0lqXwMFQSyAYoG147BZ4jSPhqwlpQYc7cNeRedToDatQlwzogASLbFx3a2iL16NeXojbBVRIMLju4cMGOqUBFn3tWl2msWTaCWwhSvDcvc%2Fn1qO4mqok9pxcobMivqM6abA2GN0Bo5f25%2BDuMew1No%2B%2Bu3aJrSYYam9dkZl7JtMSJDV5ZI3gAuKZW09UrpprdrzOnu2QZAlz0n977Xwe1qpLioSWL6mp9mmerl9NkHF9AqbDIDPTmm7flFuxddGUcqPZ4zMbU%2BMIoOVRYbQ%2Bf5wUUU2V0f7AuZbJovctYkBpCbNb&X-Amz-Signature=8e365e136d00a1d9156b5f9d9f13f4e26f2761849a6efe74bdc70da156264005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLT6AM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFMU4Y6gEQ%2BGwEGaH4KNSMyW2qLS1W8X9vsUHZQ73kBSAiEA51wEix6HtGSg6eizVodP9WNlIBw5y2ywPusWHoJoXfgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDCilWf%2Btc9zyl9z%2FyrcA9BefcmXY49sRGpfUhBeCDNY085BnNKtYEFYMyjmNlTD0qxm0kczmVL2qcMmxQolHEn%2FF3yQeCfMrHcsDcJemx6nZOOtJHgzGayHDAgFWMDwDUcOQqnCnOUrCrdYk5mN5QHL%2BJ3s17BZ2eu6PnfNHb1bBNa0gxjrXE5spf7K6lgtrp0yf9bMymuD1lWL9ttQ9EJqwb1uTJe%2Fy9A2SASJ4uev1v8yNILmzYl9LAhhPS6XUy0J7PBIHkhEaSTm6SDHXqGzqFzM%2FwkFXGv1mfBc0zwDOAqE6g1kZ5Wn8w6le%2B2xhqBvubNGQINS1nl3eCXFwGe3a0QifUfBj8sxNxLjiQL9VRxhFx%2FRQUR7UGas1oPkUnDH3c8HNA4VWDsaGKkn4OwC1R4mK5QotWAviwRmF68dO0XdQ%2FPGMHYXo7MF%2FfFhI7mIWYwwljn5tUwhR%2FH%2F7J7jZvmuInE34%2FDXg2LZjRSAPXVvtkqVta2UnPSG8p9GuyhL1o4jeR1%2F2vlHesr%2B5%2BBIvbVUKmlBXq%2BmfvmeAJPId9WCDlUky2sntOH7Tj%2FDz3J7yzku0lqXwMFQSyAYoG147BZ4jSPhqwlpQYc7cNeRedToDatQlwzogASLbFx3a2iL16NeXojbBVRIMLju4cMGOqUBFn3tWl2msWTaCWwhSvDcvc%2Fn1qO4mqok9pxcobMivqM6abA2GN0Bo5f25%2BDuMew1No%2B%2Bu3aJrSYYam9dkZl7JtMSJDV5ZI3gAuKZW09UrpprdrzOnu2QZAlz0n977Xwe1qpLioSWL6mp9mmerl9NkHF9AqbDIDPTmm7flFuxddGUcqPZ4zMbU%2BMIoOVRYbQ%2Bf5wUUU2V0f7AuZbJovctYkBpCbNb&X-Amz-Signature=206dd65a152ed4deb7ac7cb9bd33c8f219e9c4e0f89b97c176af9a7f75b7726b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
