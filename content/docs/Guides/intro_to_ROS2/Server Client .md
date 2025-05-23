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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3366OB5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGvEB%2FCMtrtm8oJ%2F8CYNl%2BoIYtVZCeocVmYMXBqONYkEAiBgTlg2a6Hzua2kWYgniIXSHFtJAspUji48Ho0dqmxLlSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXwo9FHp9diZEVJQLKtwDd1iAaqQoWZ6Sw%2Bj%2FddzYXX9PuuAFLboUynYPIrUrTWNEq%2Flvg82Y4h47tLkvI1z1fXp0R5ZtymdA3liMkCyR7hs9aowhEq0foZeW4uljT%2BW449g5MiqqNJaxBDQgam95uDKnTyhHQavJpT05fCW7qH4IeqRSZAwu%2BPHk95uh8dfGU2imeWnXQLv0qaa%2F8kNPvuSop8mvyMjIXaPDnUNSLHrrNKPCg9%2BlTjWglbMqkiIp1eAIV2yxZ7Shl%2Bm9eapR5gU1wQaAfQ9tBzWDhPZ83ImSpolX2bZCd62oCk5oV9Tn7LiPGSdF2KvWq%2FOm3trd4FRrxN946Mw9TJdl5xAKCCGbCLfVXz4zpKzWV7%2F0qCcc1Q%2Fcioa6ZwPSc114EGw8F%2F8fKaYpbqOE1geIY0tKPWtB3jDeL%2FgjUq7x19bn3nG9KLE%2BoUfLVvStrHgMCzyHbZHSKhcdMDbY%2F730ontfV3GXiVKNdgwsSWujqjMynEJuPGtvf%2FSbtz1nwatMLitm%2Bv%2BFd88ZDtLWmfFlCnCa7mYh0K0oraSmxnKCThxQfhWxws6S3tFRci78J5LTgfRwoYJhQsO3FgRYrzpKeYt2Ck6sdp0UfEhHHs%2F6Pm6RjS8jWOE6k4tQRMYGywowmNjDwQY6pgH%2B9wS3WXd8TPelD6IWg%2BHshkZWcBRb4aUOUT%2B%2FHdINHobrGuJLPWoQVt4PVgXxDcX7M2aIc%2BnasDveGru5hXkDF4fPgbTieAcSxdaTVsIcQwKZjJeCd6xZrYSnIpRVLuHkm50REuuoCb%2FFTlgSemAhtFdBnTENZLcqsD3ga8Dj7yCvKGiw840V%2FTKhw93CY2%2F0Z0Yb%2BNWVU4YP2R%2F0Ucdt5pTFZ2VP&X-Amz-Signature=a1706f6a3f58ad4d7f459a1f7648ede83f34118dd6e061b60e7fe3ae24d45d41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3366OB5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGvEB%2FCMtrtm8oJ%2F8CYNl%2BoIYtVZCeocVmYMXBqONYkEAiBgTlg2a6Hzua2kWYgniIXSHFtJAspUji48Ho0dqmxLlSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXwo9FHp9diZEVJQLKtwDd1iAaqQoWZ6Sw%2Bj%2FddzYXX9PuuAFLboUynYPIrUrTWNEq%2Flvg82Y4h47tLkvI1z1fXp0R5ZtymdA3liMkCyR7hs9aowhEq0foZeW4uljT%2BW449g5MiqqNJaxBDQgam95uDKnTyhHQavJpT05fCW7qH4IeqRSZAwu%2BPHk95uh8dfGU2imeWnXQLv0qaa%2F8kNPvuSop8mvyMjIXaPDnUNSLHrrNKPCg9%2BlTjWglbMqkiIp1eAIV2yxZ7Shl%2Bm9eapR5gU1wQaAfQ9tBzWDhPZ83ImSpolX2bZCd62oCk5oV9Tn7LiPGSdF2KvWq%2FOm3trd4FRrxN946Mw9TJdl5xAKCCGbCLfVXz4zpKzWV7%2F0qCcc1Q%2Fcioa6ZwPSc114EGw8F%2F8fKaYpbqOE1geIY0tKPWtB3jDeL%2FgjUq7x19bn3nG9KLE%2BoUfLVvStrHgMCzyHbZHSKhcdMDbY%2F730ontfV3GXiVKNdgwsSWujqjMynEJuPGtvf%2FSbtz1nwatMLitm%2Bv%2BFd88ZDtLWmfFlCnCa7mYh0K0oraSmxnKCThxQfhWxws6S3tFRci78J5LTgfRwoYJhQsO3FgRYrzpKeYt2Ck6sdp0UfEhHHs%2F6Pm6RjS8jWOE6k4tQRMYGywowmNjDwQY6pgH%2B9wS3WXd8TPelD6IWg%2BHshkZWcBRb4aUOUT%2B%2FHdINHobrGuJLPWoQVt4PVgXxDcX7M2aIc%2BnasDveGru5hXkDF4fPgbTieAcSxdaTVsIcQwKZjJeCd6xZrYSnIpRVLuHkm50REuuoCb%2FFTlgSemAhtFdBnTENZLcqsD3ga8Dj7yCvKGiw840V%2FTKhw93CY2%2F0Z0Yb%2BNWVU4YP2R%2F0Ucdt5pTFZ2VP&X-Amz-Signature=e4fcc599c16cd1d547c16948d1a2dad8edbc2cb0ac7b5e125ff2b1ec95f5601c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3366OB5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGvEB%2FCMtrtm8oJ%2F8CYNl%2BoIYtVZCeocVmYMXBqONYkEAiBgTlg2a6Hzua2kWYgniIXSHFtJAspUji48Ho0dqmxLlSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXwo9FHp9diZEVJQLKtwDd1iAaqQoWZ6Sw%2Bj%2FddzYXX9PuuAFLboUynYPIrUrTWNEq%2Flvg82Y4h47tLkvI1z1fXp0R5ZtymdA3liMkCyR7hs9aowhEq0foZeW4uljT%2BW449g5MiqqNJaxBDQgam95uDKnTyhHQavJpT05fCW7qH4IeqRSZAwu%2BPHk95uh8dfGU2imeWnXQLv0qaa%2F8kNPvuSop8mvyMjIXaPDnUNSLHrrNKPCg9%2BlTjWglbMqkiIp1eAIV2yxZ7Shl%2Bm9eapR5gU1wQaAfQ9tBzWDhPZ83ImSpolX2bZCd62oCk5oV9Tn7LiPGSdF2KvWq%2FOm3trd4FRrxN946Mw9TJdl5xAKCCGbCLfVXz4zpKzWV7%2F0qCcc1Q%2Fcioa6ZwPSc114EGw8F%2F8fKaYpbqOE1geIY0tKPWtB3jDeL%2FgjUq7x19bn3nG9KLE%2BoUfLVvStrHgMCzyHbZHSKhcdMDbY%2F730ontfV3GXiVKNdgwsSWujqjMynEJuPGtvf%2FSbtz1nwatMLitm%2Bv%2BFd88ZDtLWmfFlCnCa7mYh0K0oraSmxnKCThxQfhWxws6S3tFRci78J5LTgfRwoYJhQsO3FgRYrzpKeYt2Ck6sdp0UfEhHHs%2F6Pm6RjS8jWOE6k4tQRMYGywowmNjDwQY6pgH%2B9wS3WXd8TPelD6IWg%2BHshkZWcBRb4aUOUT%2B%2FHdINHobrGuJLPWoQVt4PVgXxDcX7M2aIc%2BnasDveGru5hXkDF4fPgbTieAcSxdaTVsIcQwKZjJeCd6xZrYSnIpRVLuHkm50REuuoCb%2FFTlgSemAhtFdBnTENZLcqsD3ga8Dj7yCvKGiw840V%2FTKhw93CY2%2F0Z0Yb%2BNWVU4YP2R%2F0Ucdt5pTFZ2VP&X-Amz-Signature=b8c86734c9a1f42fee3e4b287f52f151a0c2c20693d01c777b4bc34c0e13874b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3366OB5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGvEB%2FCMtrtm8oJ%2F8CYNl%2BoIYtVZCeocVmYMXBqONYkEAiBgTlg2a6Hzua2kWYgniIXSHFtJAspUji48Ho0dqmxLlSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXwo9FHp9diZEVJQLKtwDd1iAaqQoWZ6Sw%2Bj%2FddzYXX9PuuAFLboUynYPIrUrTWNEq%2Flvg82Y4h47tLkvI1z1fXp0R5ZtymdA3liMkCyR7hs9aowhEq0foZeW4uljT%2BW449g5MiqqNJaxBDQgam95uDKnTyhHQavJpT05fCW7qH4IeqRSZAwu%2BPHk95uh8dfGU2imeWnXQLv0qaa%2F8kNPvuSop8mvyMjIXaPDnUNSLHrrNKPCg9%2BlTjWglbMqkiIp1eAIV2yxZ7Shl%2Bm9eapR5gU1wQaAfQ9tBzWDhPZ83ImSpolX2bZCd62oCk5oV9Tn7LiPGSdF2KvWq%2FOm3trd4FRrxN946Mw9TJdl5xAKCCGbCLfVXz4zpKzWV7%2F0qCcc1Q%2Fcioa6ZwPSc114EGw8F%2F8fKaYpbqOE1geIY0tKPWtB3jDeL%2FgjUq7x19bn3nG9KLE%2BoUfLVvStrHgMCzyHbZHSKhcdMDbY%2F730ontfV3GXiVKNdgwsSWujqjMynEJuPGtvf%2FSbtz1nwatMLitm%2Bv%2BFd88ZDtLWmfFlCnCa7mYh0K0oraSmxnKCThxQfhWxws6S3tFRci78J5LTgfRwoYJhQsO3FgRYrzpKeYt2Ck6sdp0UfEhHHs%2F6Pm6RjS8jWOE6k4tQRMYGywowmNjDwQY6pgH%2B9wS3WXd8TPelD6IWg%2BHshkZWcBRb4aUOUT%2B%2FHdINHobrGuJLPWoQVt4PVgXxDcX7M2aIc%2BnasDveGru5hXkDF4fPgbTieAcSxdaTVsIcQwKZjJeCd6xZrYSnIpRVLuHkm50REuuoCb%2FFTlgSemAhtFdBnTENZLcqsD3ga8Dj7yCvKGiw840V%2FTKhw93CY2%2F0Z0Yb%2BNWVU4YP2R%2F0Ucdt5pTFZ2VP&X-Amz-Signature=186a4a613db29dfa33a4678d3b1773edbcc9e619e980641bd237e6bd34de38c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3366OB5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGvEB%2FCMtrtm8oJ%2F8CYNl%2BoIYtVZCeocVmYMXBqONYkEAiBgTlg2a6Hzua2kWYgniIXSHFtJAspUji48Ho0dqmxLlSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXwo9FHp9diZEVJQLKtwDd1iAaqQoWZ6Sw%2Bj%2FddzYXX9PuuAFLboUynYPIrUrTWNEq%2Flvg82Y4h47tLkvI1z1fXp0R5ZtymdA3liMkCyR7hs9aowhEq0foZeW4uljT%2BW449g5MiqqNJaxBDQgam95uDKnTyhHQavJpT05fCW7qH4IeqRSZAwu%2BPHk95uh8dfGU2imeWnXQLv0qaa%2F8kNPvuSop8mvyMjIXaPDnUNSLHrrNKPCg9%2BlTjWglbMqkiIp1eAIV2yxZ7Shl%2Bm9eapR5gU1wQaAfQ9tBzWDhPZ83ImSpolX2bZCd62oCk5oV9Tn7LiPGSdF2KvWq%2FOm3trd4FRrxN946Mw9TJdl5xAKCCGbCLfVXz4zpKzWV7%2F0qCcc1Q%2Fcioa6ZwPSc114EGw8F%2F8fKaYpbqOE1geIY0tKPWtB3jDeL%2FgjUq7x19bn3nG9KLE%2BoUfLVvStrHgMCzyHbZHSKhcdMDbY%2F730ontfV3GXiVKNdgwsSWujqjMynEJuPGtvf%2FSbtz1nwatMLitm%2Bv%2BFd88ZDtLWmfFlCnCa7mYh0K0oraSmxnKCThxQfhWxws6S3tFRci78J5LTgfRwoYJhQsO3FgRYrzpKeYt2Ck6sdp0UfEhHHs%2F6Pm6RjS8jWOE6k4tQRMYGywowmNjDwQY6pgH%2B9wS3WXd8TPelD6IWg%2BHshkZWcBRb4aUOUT%2B%2FHdINHobrGuJLPWoQVt4PVgXxDcX7M2aIc%2BnasDveGru5hXkDF4fPgbTieAcSxdaTVsIcQwKZjJeCd6xZrYSnIpRVLuHkm50REuuoCb%2FFTlgSemAhtFdBnTENZLcqsD3ga8Dj7yCvKGiw840V%2FTKhw93CY2%2F0Z0Yb%2BNWVU4YP2R%2F0Ucdt5pTFZ2VP&X-Amz-Signature=0cdb4bd66d375fde5f94a8255224c98637a95c9f61d2967358035c596630ecb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
