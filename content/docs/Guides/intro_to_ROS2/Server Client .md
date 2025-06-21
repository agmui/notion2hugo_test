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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXHZ742%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqelAHcsCY4jR8HPGWM4PrBSAWYQrOcGADRVwy1duwQgIgZfCT7NrSMWqa%2BGoDMLNzBOsr%2BUlbi9LYF%2BKIzRIZ8E8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnSnLgDDuRBT7CgircA5U8Vr1ahIPtftldUY3rBBXPE75C38UCilln%2FBvR2Lmh3kEd6533QwJ57oBr4bAmw5S5cvnVeJJlOPWlDfrtIPSDg2X1SYu8X1w4pppdWeWvP80hYczD0l5gZDXM91yfrtrM4E2WhsHAM44Cb%2F%2FMvHmdzmOEa%2BnQNv0ypUihaSayNWCJpn%2F2OlveleDaiagZaP8%2BlxS0nsBXEP1ltOojfdR4lXDXvXSBtCecKweYBiF6x5fS3x6YM3n3VPVrbwo%2FTk5g5RTqg55GCoZYGJPTIVC%2FX3%2BfGgapvvIhkLtBEDHHPrLd%2BOVWSHs%2Bv8%2FvhV6pjTSKYCF6qn6N7RVgIPUT7R1e3vuCSskZL8m8xYpl9yW2EsJ%2F9IRTC5jO4bgfVGpFBTCVMxENytxR0NnS%2BH5X88ATV4%2Bqj3H9VjTZf44h%2BzKxKl9TrMsCc6vL0XzYrBiDZbzT7r0lAA8OIBYWelnKRt6vBMXlFSduroHosoNJhFu%2Bp2M5FBFV9b%2BilVch1NPxFzDcFryQISGa4XyfWjpxXBLhOnrhU%2FqU3EmnZW3x1qL2WtgeNI0wvXJ%2FfVTs64agd5v%2FsZQdo%2Bsd%2BMsfqV99KSzXXbqv9guRUERZ0eDZNz5rHHT%2BqF5mOT4qHHqHMNev2MIGOqUBeiLUzskDfgbYWlxxviZatwul608wXJKRGfjTEILeHWaTk%2FO%2FGjhLyKpr%2FMKVCW%2Baxz%2B86OACmmda1Yj2utTVMBFPElMEGdaVNRmAZuqydN5S7yar7dI%2FXfW50Js9ZmBNZDC9txumKQ4c21Y75qdgC9%2FSpMJNQnVlSTItTVCCyidiadn1%2BD4IQ1Refv9NEZIUnMv3i2q6OfaTx%2BRucZYfgeaLCoX3&X-Amz-Signature=39ae2fb941cf401b3ec32b94ae08d9a67c7c2268d19b9091adc86e9d072472aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXHZ742%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqelAHcsCY4jR8HPGWM4PrBSAWYQrOcGADRVwy1duwQgIgZfCT7NrSMWqa%2BGoDMLNzBOsr%2BUlbi9LYF%2BKIzRIZ8E8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnSnLgDDuRBT7CgircA5U8Vr1ahIPtftldUY3rBBXPE75C38UCilln%2FBvR2Lmh3kEd6533QwJ57oBr4bAmw5S5cvnVeJJlOPWlDfrtIPSDg2X1SYu8X1w4pppdWeWvP80hYczD0l5gZDXM91yfrtrM4E2WhsHAM44Cb%2F%2FMvHmdzmOEa%2BnQNv0ypUihaSayNWCJpn%2F2OlveleDaiagZaP8%2BlxS0nsBXEP1ltOojfdR4lXDXvXSBtCecKweYBiF6x5fS3x6YM3n3VPVrbwo%2FTk5g5RTqg55GCoZYGJPTIVC%2FX3%2BfGgapvvIhkLtBEDHHPrLd%2BOVWSHs%2Bv8%2FvhV6pjTSKYCF6qn6N7RVgIPUT7R1e3vuCSskZL8m8xYpl9yW2EsJ%2F9IRTC5jO4bgfVGpFBTCVMxENytxR0NnS%2BH5X88ATV4%2Bqj3H9VjTZf44h%2BzKxKl9TrMsCc6vL0XzYrBiDZbzT7r0lAA8OIBYWelnKRt6vBMXlFSduroHosoNJhFu%2Bp2M5FBFV9b%2BilVch1NPxFzDcFryQISGa4XyfWjpxXBLhOnrhU%2FqU3EmnZW3x1qL2WtgeNI0wvXJ%2FfVTs64agd5v%2FsZQdo%2Bsd%2BMsfqV99KSzXXbqv9guRUERZ0eDZNz5rHHT%2BqF5mOT4qHHqHMNev2MIGOqUBeiLUzskDfgbYWlxxviZatwul608wXJKRGfjTEILeHWaTk%2FO%2FGjhLyKpr%2FMKVCW%2Baxz%2B86OACmmda1Yj2utTVMBFPElMEGdaVNRmAZuqydN5S7yar7dI%2FXfW50Js9ZmBNZDC9txumKQ4c21Y75qdgC9%2FSpMJNQnVlSTItTVCCyidiadn1%2BD4IQ1Refv9NEZIUnMv3i2q6OfaTx%2BRucZYfgeaLCoX3&X-Amz-Signature=defa87a7a5e79385d07278f2b60c40626cc6d8cf7c552acaf7448b4a7718a9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXHZ742%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqelAHcsCY4jR8HPGWM4PrBSAWYQrOcGADRVwy1duwQgIgZfCT7NrSMWqa%2BGoDMLNzBOsr%2BUlbi9LYF%2BKIzRIZ8E8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnSnLgDDuRBT7CgircA5U8Vr1ahIPtftldUY3rBBXPE75C38UCilln%2FBvR2Lmh3kEd6533QwJ57oBr4bAmw5S5cvnVeJJlOPWlDfrtIPSDg2X1SYu8X1w4pppdWeWvP80hYczD0l5gZDXM91yfrtrM4E2WhsHAM44Cb%2F%2FMvHmdzmOEa%2BnQNv0ypUihaSayNWCJpn%2F2OlveleDaiagZaP8%2BlxS0nsBXEP1ltOojfdR4lXDXvXSBtCecKweYBiF6x5fS3x6YM3n3VPVrbwo%2FTk5g5RTqg55GCoZYGJPTIVC%2FX3%2BfGgapvvIhkLtBEDHHPrLd%2BOVWSHs%2Bv8%2FvhV6pjTSKYCF6qn6N7RVgIPUT7R1e3vuCSskZL8m8xYpl9yW2EsJ%2F9IRTC5jO4bgfVGpFBTCVMxENytxR0NnS%2BH5X88ATV4%2Bqj3H9VjTZf44h%2BzKxKl9TrMsCc6vL0XzYrBiDZbzT7r0lAA8OIBYWelnKRt6vBMXlFSduroHosoNJhFu%2Bp2M5FBFV9b%2BilVch1NPxFzDcFryQISGa4XyfWjpxXBLhOnrhU%2FqU3EmnZW3x1qL2WtgeNI0wvXJ%2FfVTs64agd5v%2FsZQdo%2Bsd%2BMsfqV99KSzXXbqv9guRUERZ0eDZNz5rHHT%2BqF5mOT4qHHqHMNev2MIGOqUBeiLUzskDfgbYWlxxviZatwul608wXJKRGfjTEILeHWaTk%2FO%2FGjhLyKpr%2FMKVCW%2Baxz%2B86OACmmda1Yj2utTVMBFPElMEGdaVNRmAZuqydN5S7yar7dI%2FXfW50Js9ZmBNZDC9txumKQ4c21Y75qdgC9%2FSpMJNQnVlSTItTVCCyidiadn1%2BD4IQ1Refv9NEZIUnMv3i2q6OfaTx%2BRucZYfgeaLCoX3&X-Amz-Signature=70ec0093d174c670a6e8a487da30972a6ad97431cdef604671f12cb9464eaf13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXHZ742%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqelAHcsCY4jR8HPGWM4PrBSAWYQrOcGADRVwy1duwQgIgZfCT7NrSMWqa%2BGoDMLNzBOsr%2BUlbi9LYF%2BKIzRIZ8E8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnSnLgDDuRBT7CgircA5U8Vr1ahIPtftldUY3rBBXPE75C38UCilln%2FBvR2Lmh3kEd6533QwJ57oBr4bAmw5S5cvnVeJJlOPWlDfrtIPSDg2X1SYu8X1w4pppdWeWvP80hYczD0l5gZDXM91yfrtrM4E2WhsHAM44Cb%2F%2FMvHmdzmOEa%2BnQNv0ypUihaSayNWCJpn%2F2OlveleDaiagZaP8%2BlxS0nsBXEP1ltOojfdR4lXDXvXSBtCecKweYBiF6x5fS3x6YM3n3VPVrbwo%2FTk5g5RTqg55GCoZYGJPTIVC%2FX3%2BfGgapvvIhkLtBEDHHPrLd%2BOVWSHs%2Bv8%2FvhV6pjTSKYCF6qn6N7RVgIPUT7R1e3vuCSskZL8m8xYpl9yW2EsJ%2F9IRTC5jO4bgfVGpFBTCVMxENytxR0NnS%2BH5X88ATV4%2Bqj3H9VjTZf44h%2BzKxKl9TrMsCc6vL0XzYrBiDZbzT7r0lAA8OIBYWelnKRt6vBMXlFSduroHosoNJhFu%2Bp2M5FBFV9b%2BilVch1NPxFzDcFryQISGa4XyfWjpxXBLhOnrhU%2FqU3EmnZW3x1qL2WtgeNI0wvXJ%2FfVTs64agd5v%2FsZQdo%2Bsd%2BMsfqV99KSzXXbqv9guRUERZ0eDZNz5rHHT%2BqF5mOT4qHHqHMNev2MIGOqUBeiLUzskDfgbYWlxxviZatwul608wXJKRGfjTEILeHWaTk%2FO%2FGjhLyKpr%2FMKVCW%2Baxz%2B86OACmmda1Yj2utTVMBFPElMEGdaVNRmAZuqydN5S7yar7dI%2FXfW50Js9ZmBNZDC9txumKQ4c21Y75qdgC9%2FSpMJNQnVlSTItTVCCyidiadn1%2BD4IQ1Refv9NEZIUnMv3i2q6OfaTx%2BRucZYfgeaLCoX3&X-Amz-Signature=533701e3c5ec8e0096594e264bcd0eb0dd5fe35f39d495fbf7a3e1cbea8ccaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXHZ742%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqelAHcsCY4jR8HPGWM4PrBSAWYQrOcGADRVwy1duwQgIgZfCT7NrSMWqa%2BGoDMLNzBOsr%2BUlbi9LYF%2BKIzRIZ8E8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnSnLgDDuRBT7CgircA5U8Vr1ahIPtftldUY3rBBXPE75C38UCilln%2FBvR2Lmh3kEd6533QwJ57oBr4bAmw5S5cvnVeJJlOPWlDfrtIPSDg2X1SYu8X1w4pppdWeWvP80hYczD0l5gZDXM91yfrtrM4E2WhsHAM44Cb%2F%2FMvHmdzmOEa%2BnQNv0ypUihaSayNWCJpn%2F2OlveleDaiagZaP8%2BlxS0nsBXEP1ltOojfdR4lXDXvXSBtCecKweYBiF6x5fS3x6YM3n3VPVrbwo%2FTk5g5RTqg55GCoZYGJPTIVC%2FX3%2BfGgapvvIhkLtBEDHHPrLd%2BOVWSHs%2Bv8%2FvhV6pjTSKYCF6qn6N7RVgIPUT7R1e3vuCSskZL8m8xYpl9yW2EsJ%2F9IRTC5jO4bgfVGpFBTCVMxENytxR0NnS%2BH5X88ATV4%2Bqj3H9VjTZf44h%2BzKxKl9TrMsCc6vL0XzYrBiDZbzT7r0lAA8OIBYWelnKRt6vBMXlFSduroHosoNJhFu%2Bp2M5FBFV9b%2BilVch1NPxFzDcFryQISGa4XyfWjpxXBLhOnrhU%2FqU3EmnZW3x1qL2WtgeNI0wvXJ%2FfVTs64agd5v%2FsZQdo%2Bsd%2BMsfqV99KSzXXbqv9guRUERZ0eDZNz5rHHT%2BqF5mOT4qHHqHMNev2MIGOqUBeiLUzskDfgbYWlxxviZatwul608wXJKRGfjTEILeHWaTk%2FO%2FGjhLyKpr%2FMKVCW%2Baxz%2B86OACmmda1Yj2utTVMBFPElMEGdaVNRmAZuqydN5S7yar7dI%2FXfW50Js9ZmBNZDC9txumKQ4c21Y75qdgC9%2FSpMJNQnVlSTItTVCCyidiadn1%2BD4IQ1Refv9NEZIUnMv3i2q6OfaTx%2BRucZYfgeaLCoX3&X-Amz-Signature=abeb4e404d5e701c4dd786472d50e886160fd81132963d2558e370439eb49642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
