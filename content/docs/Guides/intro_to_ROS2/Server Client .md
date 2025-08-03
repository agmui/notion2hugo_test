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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646DMZCRO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4iN7Q%2BbMqoFLhckdi2jcJemCUW5vDgXzfKdAYn6SYgIgPAsweW1NTOMVPJ0UlCDlTpHOUxFCNrSE0Mazl3KJGb4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIyR0irbBvYbHd1NESrcA8yn0N9blYk4PNlQmVjn%2BLWewIu7V11HL6YCzQkrqATfUAc1Q4cHrrzsVbKh7S3%2Bq2S58YZr2W%2FhHJCmU3O%2B3Gnj5IRJqHwOxSSz0GykWG9MTRJU51LXoZIqVdV0asAuj3S1%2Ffj8fFps3h76TDmTb1yrlUeUhTvyn1rVm85TEMPR2Ahbjhs08YPAlFPtXf7sw3LKnkN4v2iIdRv%2BYp8Ufre%2B%2BLa8Oou8mKcNCDQTp1125vOQvAg7M%2FpDSMmGL%2BTCk41MqGC9OaRk9ZfTvxQkJeBCmNaUvIJS0x5MIa3EvJNMa%2BNQEMH%2BlqI8u9uVVwX5QbEuCAqlomsFBycytHce5awt3MJDLt1GGN3I6Vartnb%2BpP6PdB32UWTsb1yUumvrRYNJsGnXo5ZClUMHWIyaLhrU%2BqMHW2y9dgSFdhoQhp2hFt1Nn1uW%2FCnjuI8si2y5XXPLJyvO7gePqDfkcZ0r32rENeoxKQZ%2FYbH8P7beJFamGEwkfOcq8aDxZrrVN%2F4oBU5k4501mp8nsqQuMZjOn9e%2B4zBGBbR696ClWCMCB7KkvnZZU1wclFBSDZLnguKinIb%2BRJcOTzKV%2BNvXJtAY9%2Bvr0x%2BI1bn7KeeNFadhlDJXS8IRfFrO6fGrcE2QMMirvsQGOqUBNOHBLLAFOUo4GW5tQB2fZMNTPGYh9I6IgB2DCGxMLqEkh3ZiVqVf%2BtlQnjRXi5VBh0ClOyA9KiJ6vQYGOK3chBL4p7QpeZWUnHc29XBDLQJPBz16MvqfadvazWf%2Bl2bOmJeJeb0bmiNO5pxVnn0LiW2oYTDp5R%2FworfY5TBSrq1tgx81cxzoexY%2F%2FzzrzzFSNnBMg7x6r3wc23m99iAubJON1pLj&X-Amz-Signature=e65c7c03542d285940363857d0cdbb01668bd907a14bc2aa6fef9c47796993b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646DMZCRO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4iN7Q%2BbMqoFLhckdi2jcJemCUW5vDgXzfKdAYn6SYgIgPAsweW1NTOMVPJ0UlCDlTpHOUxFCNrSE0Mazl3KJGb4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIyR0irbBvYbHd1NESrcA8yn0N9blYk4PNlQmVjn%2BLWewIu7V11HL6YCzQkrqATfUAc1Q4cHrrzsVbKh7S3%2Bq2S58YZr2W%2FhHJCmU3O%2B3Gnj5IRJqHwOxSSz0GykWG9MTRJU51LXoZIqVdV0asAuj3S1%2Ffj8fFps3h76TDmTb1yrlUeUhTvyn1rVm85TEMPR2Ahbjhs08YPAlFPtXf7sw3LKnkN4v2iIdRv%2BYp8Ufre%2B%2BLa8Oou8mKcNCDQTp1125vOQvAg7M%2FpDSMmGL%2BTCk41MqGC9OaRk9ZfTvxQkJeBCmNaUvIJS0x5MIa3EvJNMa%2BNQEMH%2BlqI8u9uVVwX5QbEuCAqlomsFBycytHce5awt3MJDLt1GGN3I6Vartnb%2BpP6PdB32UWTsb1yUumvrRYNJsGnXo5ZClUMHWIyaLhrU%2BqMHW2y9dgSFdhoQhp2hFt1Nn1uW%2FCnjuI8si2y5XXPLJyvO7gePqDfkcZ0r32rENeoxKQZ%2FYbH8P7beJFamGEwkfOcq8aDxZrrVN%2F4oBU5k4501mp8nsqQuMZjOn9e%2B4zBGBbR696ClWCMCB7KkvnZZU1wclFBSDZLnguKinIb%2BRJcOTzKV%2BNvXJtAY9%2Bvr0x%2BI1bn7KeeNFadhlDJXS8IRfFrO6fGrcE2QMMirvsQGOqUBNOHBLLAFOUo4GW5tQB2fZMNTPGYh9I6IgB2DCGxMLqEkh3ZiVqVf%2BtlQnjRXi5VBh0ClOyA9KiJ6vQYGOK3chBL4p7QpeZWUnHc29XBDLQJPBz16MvqfadvazWf%2Bl2bOmJeJeb0bmiNO5pxVnn0LiW2oYTDp5R%2FworfY5TBSrq1tgx81cxzoexY%2F%2FzzrzzFSNnBMg7x6r3wc23m99iAubJON1pLj&X-Amz-Signature=d97d79bdf44454787b84c51ae12fc646bd24f0bfd0699e2c3142893446381f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646DMZCRO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4iN7Q%2BbMqoFLhckdi2jcJemCUW5vDgXzfKdAYn6SYgIgPAsweW1NTOMVPJ0UlCDlTpHOUxFCNrSE0Mazl3KJGb4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIyR0irbBvYbHd1NESrcA8yn0N9blYk4PNlQmVjn%2BLWewIu7V11HL6YCzQkrqATfUAc1Q4cHrrzsVbKh7S3%2Bq2S58YZr2W%2FhHJCmU3O%2B3Gnj5IRJqHwOxSSz0GykWG9MTRJU51LXoZIqVdV0asAuj3S1%2Ffj8fFps3h76TDmTb1yrlUeUhTvyn1rVm85TEMPR2Ahbjhs08YPAlFPtXf7sw3LKnkN4v2iIdRv%2BYp8Ufre%2B%2BLa8Oou8mKcNCDQTp1125vOQvAg7M%2FpDSMmGL%2BTCk41MqGC9OaRk9ZfTvxQkJeBCmNaUvIJS0x5MIa3EvJNMa%2BNQEMH%2BlqI8u9uVVwX5QbEuCAqlomsFBycytHce5awt3MJDLt1GGN3I6Vartnb%2BpP6PdB32UWTsb1yUumvrRYNJsGnXo5ZClUMHWIyaLhrU%2BqMHW2y9dgSFdhoQhp2hFt1Nn1uW%2FCnjuI8si2y5XXPLJyvO7gePqDfkcZ0r32rENeoxKQZ%2FYbH8P7beJFamGEwkfOcq8aDxZrrVN%2F4oBU5k4501mp8nsqQuMZjOn9e%2B4zBGBbR696ClWCMCB7KkvnZZU1wclFBSDZLnguKinIb%2BRJcOTzKV%2BNvXJtAY9%2Bvr0x%2BI1bn7KeeNFadhlDJXS8IRfFrO6fGrcE2QMMirvsQGOqUBNOHBLLAFOUo4GW5tQB2fZMNTPGYh9I6IgB2DCGxMLqEkh3ZiVqVf%2BtlQnjRXi5VBh0ClOyA9KiJ6vQYGOK3chBL4p7QpeZWUnHc29XBDLQJPBz16MvqfadvazWf%2Bl2bOmJeJeb0bmiNO5pxVnn0LiW2oYTDp5R%2FworfY5TBSrq1tgx81cxzoexY%2F%2FzzrzzFSNnBMg7x6r3wc23m99iAubJON1pLj&X-Amz-Signature=5def49261f4b96144d9b86a9e2f22badd6e57bde8b7417ef4a8d9bb21345f9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646DMZCRO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4iN7Q%2BbMqoFLhckdi2jcJemCUW5vDgXzfKdAYn6SYgIgPAsweW1NTOMVPJ0UlCDlTpHOUxFCNrSE0Mazl3KJGb4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIyR0irbBvYbHd1NESrcA8yn0N9blYk4PNlQmVjn%2BLWewIu7V11HL6YCzQkrqATfUAc1Q4cHrrzsVbKh7S3%2Bq2S58YZr2W%2FhHJCmU3O%2B3Gnj5IRJqHwOxSSz0GykWG9MTRJU51LXoZIqVdV0asAuj3S1%2Ffj8fFps3h76TDmTb1yrlUeUhTvyn1rVm85TEMPR2Ahbjhs08YPAlFPtXf7sw3LKnkN4v2iIdRv%2BYp8Ufre%2B%2BLa8Oou8mKcNCDQTp1125vOQvAg7M%2FpDSMmGL%2BTCk41MqGC9OaRk9ZfTvxQkJeBCmNaUvIJS0x5MIa3EvJNMa%2BNQEMH%2BlqI8u9uVVwX5QbEuCAqlomsFBycytHce5awt3MJDLt1GGN3I6Vartnb%2BpP6PdB32UWTsb1yUumvrRYNJsGnXo5ZClUMHWIyaLhrU%2BqMHW2y9dgSFdhoQhp2hFt1Nn1uW%2FCnjuI8si2y5XXPLJyvO7gePqDfkcZ0r32rENeoxKQZ%2FYbH8P7beJFamGEwkfOcq8aDxZrrVN%2F4oBU5k4501mp8nsqQuMZjOn9e%2B4zBGBbR696ClWCMCB7KkvnZZU1wclFBSDZLnguKinIb%2BRJcOTzKV%2BNvXJtAY9%2Bvr0x%2BI1bn7KeeNFadhlDJXS8IRfFrO6fGrcE2QMMirvsQGOqUBNOHBLLAFOUo4GW5tQB2fZMNTPGYh9I6IgB2DCGxMLqEkh3ZiVqVf%2BtlQnjRXi5VBh0ClOyA9KiJ6vQYGOK3chBL4p7QpeZWUnHc29XBDLQJPBz16MvqfadvazWf%2Bl2bOmJeJeb0bmiNO5pxVnn0LiW2oYTDp5R%2FworfY5TBSrq1tgx81cxzoexY%2F%2FzzrzzFSNnBMg7x6r3wc23m99iAubJON1pLj&X-Amz-Signature=b120b9347f015c4feaca70b4c903855045de6e9714c1e0e2347037bedffa984d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646DMZCRO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4iN7Q%2BbMqoFLhckdi2jcJemCUW5vDgXzfKdAYn6SYgIgPAsweW1NTOMVPJ0UlCDlTpHOUxFCNrSE0Mazl3KJGb4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIyR0irbBvYbHd1NESrcA8yn0N9blYk4PNlQmVjn%2BLWewIu7V11HL6YCzQkrqATfUAc1Q4cHrrzsVbKh7S3%2Bq2S58YZr2W%2FhHJCmU3O%2B3Gnj5IRJqHwOxSSz0GykWG9MTRJU51LXoZIqVdV0asAuj3S1%2Ffj8fFps3h76TDmTb1yrlUeUhTvyn1rVm85TEMPR2Ahbjhs08YPAlFPtXf7sw3LKnkN4v2iIdRv%2BYp8Ufre%2B%2BLa8Oou8mKcNCDQTp1125vOQvAg7M%2FpDSMmGL%2BTCk41MqGC9OaRk9ZfTvxQkJeBCmNaUvIJS0x5MIa3EvJNMa%2BNQEMH%2BlqI8u9uVVwX5QbEuCAqlomsFBycytHce5awt3MJDLt1GGN3I6Vartnb%2BpP6PdB32UWTsb1yUumvrRYNJsGnXo5ZClUMHWIyaLhrU%2BqMHW2y9dgSFdhoQhp2hFt1Nn1uW%2FCnjuI8si2y5XXPLJyvO7gePqDfkcZ0r32rENeoxKQZ%2FYbH8P7beJFamGEwkfOcq8aDxZrrVN%2F4oBU5k4501mp8nsqQuMZjOn9e%2B4zBGBbR696ClWCMCB7KkvnZZU1wclFBSDZLnguKinIb%2BRJcOTzKV%2BNvXJtAY9%2Bvr0x%2BI1bn7KeeNFadhlDJXS8IRfFrO6fGrcE2QMMirvsQGOqUBNOHBLLAFOUo4GW5tQB2fZMNTPGYh9I6IgB2DCGxMLqEkh3ZiVqVf%2BtlQnjRXi5VBh0ClOyA9KiJ6vQYGOK3chBL4p7QpeZWUnHc29XBDLQJPBz16MvqfadvazWf%2Bl2bOmJeJeb0bmiNO5pxVnn0LiW2oYTDp5R%2FworfY5TBSrq1tgx81cxzoexY%2F%2FzzrzzFSNnBMg7x6r3wc23m99iAubJON1pLj&X-Amz-Signature=2465f22b1ebf3fc1ce0021851cd05960e476e2515342567fe864e933ec2a24d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
