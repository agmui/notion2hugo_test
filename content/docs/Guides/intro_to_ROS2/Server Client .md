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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQMCTB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZKsLUWBTL7KlV2mpXHgLLgQc5BdwwuZFzNhmnRG6E8AIhAJ%2B1U%2B7ZQvvUzTif62BMwf5f2sLs1fl0OQOmbTp%2FRvZNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR%2FB5G8%2FbjW1Lzj3Qq3APcm0i83tamuUlmaxk80aPlnN6UFCdofUsqJAGALK%2BeG5Fp71867w%2BBspCbPtVEiMV6N4dSvQEOK5SA2ACsS%2Fj%2BGjcIsyCZqy8ZPMVbf151oi75nOBDFFtf374OO0o5aAM5f4VFxD9LW2%2BTdauVK79u%2BxL7Ce%2FdNhOGeStb8pUCyuiJKUC9ZAjlez70sYXd%2B3I5LoMDTJKdEO9tYt%2FM5V1hHTLEqn9cs5eXmdlp6%2BtVbPPn7x9%2FYtzycEuIH5Ng5zU0XCYrey5M1SfjQEkrJ%2FuF%2Bo2AWsdQnOVJuz%2BJWn6DWQlP%2Bji35HNrldblNCtlEySvpKPmD5MVTFqGLrTyN%2BJfggXn3zq4pz8VStCCqUW8fkuF7QAVEOsk5abeu3ro5qSaUONrh0ZmPq92FIrZEacbhX6IGNzT31N0nn426alOZVPonhZdQVIoj%2B6icppJvs6%2BDfT4YcZxKP90h53GO9zdQROucDLYpePjneFC%2B7d9mBWHkmC3M2s71N0xqc2IBC6Ww8GIABi5kSfNl2L18Vztme7tmAPCcevpeuls1uDbNGndwG7SM0HPkG3rfck4%2FtJ3MbcKUn5OevzOgwkJNOR21spl8UUom8u0ag75lgpj6M6cS4IdP1oG%2FuzUBjCL%2F%2BTBBjqkAdEpPDZkZJJaToZFM%2FmqKzifueGdca5qxK7LWbYUd2dDetN6JDOwm6bVLsCqVQJac1IlgQds9mXZanHz%2FYsTf8foEPgvegePLbkVWPHatd4434OLrvAjD8stNTWvfuISdwiK9fAeAyoFXS4uWQIz6JPQKOR07ljlh3uhkbqtG9ZXRHXdY8%2BvO4FyWBKmRMm4rnWFodEUbB4KBcsUaaYF2EbtAnX1&X-Amz-Signature=d93d40aecf9fb95eefb735d2ccf2114a1eb828e5f72554853678e73d52e94be0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQMCTB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZKsLUWBTL7KlV2mpXHgLLgQc5BdwwuZFzNhmnRG6E8AIhAJ%2B1U%2B7ZQvvUzTif62BMwf5f2sLs1fl0OQOmbTp%2FRvZNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR%2FB5G8%2FbjW1Lzj3Qq3APcm0i83tamuUlmaxk80aPlnN6UFCdofUsqJAGALK%2BeG5Fp71867w%2BBspCbPtVEiMV6N4dSvQEOK5SA2ACsS%2Fj%2BGjcIsyCZqy8ZPMVbf151oi75nOBDFFtf374OO0o5aAM5f4VFxD9LW2%2BTdauVK79u%2BxL7Ce%2FdNhOGeStb8pUCyuiJKUC9ZAjlez70sYXd%2B3I5LoMDTJKdEO9tYt%2FM5V1hHTLEqn9cs5eXmdlp6%2BtVbPPn7x9%2FYtzycEuIH5Ng5zU0XCYrey5M1SfjQEkrJ%2FuF%2Bo2AWsdQnOVJuz%2BJWn6DWQlP%2Bji35HNrldblNCtlEySvpKPmD5MVTFqGLrTyN%2BJfggXn3zq4pz8VStCCqUW8fkuF7QAVEOsk5abeu3ro5qSaUONrh0ZmPq92FIrZEacbhX6IGNzT31N0nn426alOZVPonhZdQVIoj%2B6icppJvs6%2BDfT4YcZxKP90h53GO9zdQROucDLYpePjneFC%2B7d9mBWHkmC3M2s71N0xqc2IBC6Ww8GIABi5kSfNl2L18Vztme7tmAPCcevpeuls1uDbNGndwG7SM0HPkG3rfck4%2FtJ3MbcKUn5OevzOgwkJNOR21spl8UUom8u0ag75lgpj6M6cS4IdP1oG%2FuzUBjCL%2F%2BTBBjqkAdEpPDZkZJJaToZFM%2FmqKzifueGdca5qxK7LWbYUd2dDetN6JDOwm6bVLsCqVQJac1IlgQds9mXZanHz%2FYsTf8foEPgvegePLbkVWPHatd4434OLrvAjD8stNTWvfuISdwiK9fAeAyoFXS4uWQIz6JPQKOR07ljlh3uhkbqtG9ZXRHXdY8%2BvO4FyWBKmRMm4rnWFodEUbB4KBcsUaaYF2EbtAnX1&X-Amz-Signature=b018aabf7028751c9a9a31fa9daa951c7f9746e54c01ed1a966b79fb3f46aacb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQMCTB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZKsLUWBTL7KlV2mpXHgLLgQc5BdwwuZFzNhmnRG6E8AIhAJ%2B1U%2B7ZQvvUzTif62BMwf5f2sLs1fl0OQOmbTp%2FRvZNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR%2FB5G8%2FbjW1Lzj3Qq3APcm0i83tamuUlmaxk80aPlnN6UFCdofUsqJAGALK%2BeG5Fp71867w%2BBspCbPtVEiMV6N4dSvQEOK5SA2ACsS%2Fj%2BGjcIsyCZqy8ZPMVbf151oi75nOBDFFtf374OO0o5aAM5f4VFxD9LW2%2BTdauVK79u%2BxL7Ce%2FdNhOGeStb8pUCyuiJKUC9ZAjlez70sYXd%2B3I5LoMDTJKdEO9tYt%2FM5V1hHTLEqn9cs5eXmdlp6%2BtVbPPn7x9%2FYtzycEuIH5Ng5zU0XCYrey5M1SfjQEkrJ%2FuF%2Bo2AWsdQnOVJuz%2BJWn6DWQlP%2Bji35HNrldblNCtlEySvpKPmD5MVTFqGLrTyN%2BJfggXn3zq4pz8VStCCqUW8fkuF7QAVEOsk5abeu3ro5qSaUONrh0ZmPq92FIrZEacbhX6IGNzT31N0nn426alOZVPonhZdQVIoj%2B6icppJvs6%2BDfT4YcZxKP90h53GO9zdQROucDLYpePjneFC%2B7d9mBWHkmC3M2s71N0xqc2IBC6Ww8GIABi5kSfNl2L18Vztme7tmAPCcevpeuls1uDbNGndwG7SM0HPkG3rfck4%2FtJ3MbcKUn5OevzOgwkJNOR21spl8UUom8u0ag75lgpj6M6cS4IdP1oG%2FuzUBjCL%2F%2BTBBjqkAdEpPDZkZJJaToZFM%2FmqKzifueGdca5qxK7LWbYUd2dDetN6JDOwm6bVLsCqVQJac1IlgQds9mXZanHz%2FYsTf8foEPgvegePLbkVWPHatd4434OLrvAjD8stNTWvfuISdwiK9fAeAyoFXS4uWQIz6JPQKOR07ljlh3uhkbqtG9ZXRHXdY8%2BvO4FyWBKmRMm4rnWFodEUbB4KBcsUaaYF2EbtAnX1&X-Amz-Signature=532ba43f3fbb9d767958c60a61984732177c765bb1bffaf63741eb5248483065&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQMCTB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZKsLUWBTL7KlV2mpXHgLLgQc5BdwwuZFzNhmnRG6E8AIhAJ%2B1U%2B7ZQvvUzTif62BMwf5f2sLs1fl0OQOmbTp%2FRvZNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR%2FB5G8%2FbjW1Lzj3Qq3APcm0i83tamuUlmaxk80aPlnN6UFCdofUsqJAGALK%2BeG5Fp71867w%2BBspCbPtVEiMV6N4dSvQEOK5SA2ACsS%2Fj%2BGjcIsyCZqy8ZPMVbf151oi75nOBDFFtf374OO0o5aAM5f4VFxD9LW2%2BTdauVK79u%2BxL7Ce%2FdNhOGeStb8pUCyuiJKUC9ZAjlez70sYXd%2B3I5LoMDTJKdEO9tYt%2FM5V1hHTLEqn9cs5eXmdlp6%2BtVbPPn7x9%2FYtzycEuIH5Ng5zU0XCYrey5M1SfjQEkrJ%2FuF%2Bo2AWsdQnOVJuz%2BJWn6DWQlP%2Bji35HNrldblNCtlEySvpKPmD5MVTFqGLrTyN%2BJfggXn3zq4pz8VStCCqUW8fkuF7QAVEOsk5abeu3ro5qSaUONrh0ZmPq92FIrZEacbhX6IGNzT31N0nn426alOZVPonhZdQVIoj%2B6icppJvs6%2BDfT4YcZxKP90h53GO9zdQROucDLYpePjneFC%2B7d9mBWHkmC3M2s71N0xqc2IBC6Ww8GIABi5kSfNl2L18Vztme7tmAPCcevpeuls1uDbNGndwG7SM0HPkG3rfck4%2FtJ3MbcKUn5OevzOgwkJNOR21spl8UUom8u0ag75lgpj6M6cS4IdP1oG%2FuzUBjCL%2F%2BTBBjqkAdEpPDZkZJJaToZFM%2FmqKzifueGdca5qxK7LWbYUd2dDetN6JDOwm6bVLsCqVQJac1IlgQds9mXZanHz%2FYsTf8foEPgvegePLbkVWPHatd4434OLrvAjD8stNTWvfuISdwiK9fAeAyoFXS4uWQIz6JPQKOR07ljlh3uhkbqtG9ZXRHXdY8%2BvO4FyWBKmRMm4rnWFodEUbB4KBcsUaaYF2EbtAnX1&X-Amz-Signature=c0b06c13c5437e67d6c2d0f501ab3b992c1ef6655b43ea34605d848654def68c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQMCTB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZKsLUWBTL7KlV2mpXHgLLgQc5BdwwuZFzNhmnRG6E8AIhAJ%2B1U%2B7ZQvvUzTif62BMwf5f2sLs1fl0OQOmbTp%2FRvZNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR%2FB5G8%2FbjW1Lzj3Qq3APcm0i83tamuUlmaxk80aPlnN6UFCdofUsqJAGALK%2BeG5Fp71867w%2BBspCbPtVEiMV6N4dSvQEOK5SA2ACsS%2Fj%2BGjcIsyCZqy8ZPMVbf151oi75nOBDFFtf374OO0o5aAM5f4VFxD9LW2%2BTdauVK79u%2BxL7Ce%2FdNhOGeStb8pUCyuiJKUC9ZAjlez70sYXd%2B3I5LoMDTJKdEO9tYt%2FM5V1hHTLEqn9cs5eXmdlp6%2BtVbPPn7x9%2FYtzycEuIH5Ng5zU0XCYrey5M1SfjQEkrJ%2FuF%2Bo2AWsdQnOVJuz%2BJWn6DWQlP%2Bji35HNrldblNCtlEySvpKPmD5MVTFqGLrTyN%2BJfggXn3zq4pz8VStCCqUW8fkuF7QAVEOsk5abeu3ro5qSaUONrh0ZmPq92FIrZEacbhX6IGNzT31N0nn426alOZVPonhZdQVIoj%2B6icppJvs6%2BDfT4YcZxKP90h53GO9zdQROucDLYpePjneFC%2B7d9mBWHkmC3M2s71N0xqc2IBC6Ww8GIABi5kSfNl2L18Vztme7tmAPCcevpeuls1uDbNGndwG7SM0HPkG3rfck4%2FtJ3MbcKUn5OevzOgwkJNOR21spl8UUom8u0ag75lgpj6M6cS4IdP1oG%2FuzUBjCL%2F%2BTBBjqkAdEpPDZkZJJaToZFM%2FmqKzifueGdca5qxK7LWbYUd2dDetN6JDOwm6bVLsCqVQJac1IlgQds9mXZanHz%2FYsTf8foEPgvegePLbkVWPHatd4434OLrvAjD8stNTWvfuISdwiK9fAeAyoFXS4uWQIz6JPQKOR07ljlh3uhkbqtG9ZXRHXdY8%2BvO4FyWBKmRMm4rnWFodEUbB4KBcsUaaYF2EbtAnX1&X-Amz-Signature=4ebfa23cdb56d83257734e67def10a63fff2ce9ad889a0bee06fa2e3b462f4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
