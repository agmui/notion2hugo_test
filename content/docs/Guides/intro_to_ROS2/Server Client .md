---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YU7XSLK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQgA%2Fqp0bfZuLZEbpideuJTwtMgYfH1yZP3kjhLIqWhQIgQx13XYQpvEJtrvqzLj4smv%2FEdynFApfOn%2BKTpoiX6zkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAm6846U0iUvl4eLVircA4AGLBUBuUAwCDgZwKCqxFxnPd%2FfyziiPtN9XhuQRJu37%2BrVP1tfdglozd9rYwo%2B2KPNxj%2F1ThVr8o22iopjNVYt%2Bmn1BWEUCnCTd2Hzag5I0k8vdhoEhw5loEg3qZzVA0T9OVJHIm0c0m81CAZeWr3uWGFpD5y1ILak5tCKB1zOS76IPos%2FRYhk6MvTGT3eLvKVMQUaSybPTSNiHjvjQlwB1jPg7DKmPXhLmyOXs9AKrqor4gx2s5ZsnGzRjRR4uIU3L2pVdoiOREZ%2FCy7YRy96TYhrhM%2FSY83aJ%2FORRLA78gtVrUkprZPXVxxsP3vW%2B0H%2BfxW%2B7VGRdct0ni8DAWuFsNMmF4pHqtQ5Rkfbp5q41wU19wIxUthDCCqt1mZlIEsOa3jE64XHrHLbcw87%2B4bs1ZenJ8iBqPkCx7y3XUR%2FMAk5rJZH8%2FUVmZCtkHYIRicaffdQ4lM0hWwIOJx6mKcfohfGPcVs%2Fmugr580ePLUzZsFzYLiRXRPlUpdi6zUdNPF6a1rI5uYJDYDm0meH457Q%2FrCIrk%2FfPHWp7OTgywHOuX6o4XdzZnVlXiW3E4z%2FGTY0hl%2FNkx5HewBePsXXzHHiCwUJHj%2BSWrj90qf%2BLigarQhjxPfHsw7i0wGMNuFhL0GOqUB0KkBf2gprNn0o0usI2jtqn7fFpgiN3rctlClsSd0pSVyQyQlckT%2FXnxlTUNVcac%2BDcLs%2FXqL5afdrboxzxN4n2nMnGvmoLnY%2F%2B63%2BeywEzFQYnQqu6FQA4DZNQeOcRk9x6vTaJMJZrekspa45cb4cZAWr07gSduGdY%2BJnRqcvoqQfCiTj7ZDNlfptjD6NPHXGgEBupaEasxLw9Blfhvo6iuQeaQQ&X-Amz-Signature=fd582fa3f7a336b0585189faf0236a4166d8ca6a71e6799ad316003f9cfe6d02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YU7XSLK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQgA%2Fqp0bfZuLZEbpideuJTwtMgYfH1yZP3kjhLIqWhQIgQx13XYQpvEJtrvqzLj4smv%2FEdynFApfOn%2BKTpoiX6zkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAm6846U0iUvl4eLVircA4AGLBUBuUAwCDgZwKCqxFxnPd%2FfyziiPtN9XhuQRJu37%2BrVP1tfdglozd9rYwo%2B2KPNxj%2F1ThVr8o22iopjNVYt%2Bmn1BWEUCnCTd2Hzag5I0k8vdhoEhw5loEg3qZzVA0T9OVJHIm0c0m81CAZeWr3uWGFpD5y1ILak5tCKB1zOS76IPos%2FRYhk6MvTGT3eLvKVMQUaSybPTSNiHjvjQlwB1jPg7DKmPXhLmyOXs9AKrqor4gx2s5ZsnGzRjRR4uIU3L2pVdoiOREZ%2FCy7YRy96TYhrhM%2FSY83aJ%2FORRLA78gtVrUkprZPXVxxsP3vW%2B0H%2BfxW%2B7VGRdct0ni8DAWuFsNMmF4pHqtQ5Rkfbp5q41wU19wIxUthDCCqt1mZlIEsOa3jE64XHrHLbcw87%2B4bs1ZenJ8iBqPkCx7y3XUR%2FMAk5rJZH8%2FUVmZCtkHYIRicaffdQ4lM0hWwIOJx6mKcfohfGPcVs%2Fmugr580ePLUzZsFzYLiRXRPlUpdi6zUdNPF6a1rI5uYJDYDm0meH457Q%2FrCIrk%2FfPHWp7OTgywHOuX6o4XdzZnVlXiW3E4z%2FGTY0hl%2FNkx5HewBePsXXzHHiCwUJHj%2BSWrj90qf%2BLigarQhjxPfHsw7i0wGMNuFhL0GOqUB0KkBf2gprNn0o0usI2jtqn7fFpgiN3rctlClsSd0pSVyQyQlckT%2FXnxlTUNVcac%2BDcLs%2FXqL5afdrboxzxN4n2nMnGvmoLnY%2F%2B63%2BeywEzFQYnQqu6FQA4DZNQeOcRk9x6vTaJMJZrekspa45cb4cZAWr07gSduGdY%2BJnRqcvoqQfCiTj7ZDNlfptjD6NPHXGgEBupaEasxLw9Blfhvo6iuQeaQQ&X-Amz-Signature=53562164cb3f9553def6b38600edcffac50d476c0fb54a8c4003c838f5a755fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YU7XSLK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQgA%2Fqp0bfZuLZEbpideuJTwtMgYfH1yZP3kjhLIqWhQIgQx13XYQpvEJtrvqzLj4smv%2FEdynFApfOn%2BKTpoiX6zkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAm6846U0iUvl4eLVircA4AGLBUBuUAwCDgZwKCqxFxnPd%2FfyziiPtN9XhuQRJu37%2BrVP1tfdglozd9rYwo%2B2KPNxj%2F1ThVr8o22iopjNVYt%2Bmn1BWEUCnCTd2Hzag5I0k8vdhoEhw5loEg3qZzVA0T9OVJHIm0c0m81CAZeWr3uWGFpD5y1ILak5tCKB1zOS76IPos%2FRYhk6MvTGT3eLvKVMQUaSybPTSNiHjvjQlwB1jPg7DKmPXhLmyOXs9AKrqor4gx2s5ZsnGzRjRR4uIU3L2pVdoiOREZ%2FCy7YRy96TYhrhM%2FSY83aJ%2FORRLA78gtVrUkprZPXVxxsP3vW%2B0H%2BfxW%2B7VGRdct0ni8DAWuFsNMmF4pHqtQ5Rkfbp5q41wU19wIxUthDCCqt1mZlIEsOa3jE64XHrHLbcw87%2B4bs1ZenJ8iBqPkCx7y3XUR%2FMAk5rJZH8%2FUVmZCtkHYIRicaffdQ4lM0hWwIOJx6mKcfohfGPcVs%2Fmugr580ePLUzZsFzYLiRXRPlUpdi6zUdNPF6a1rI5uYJDYDm0meH457Q%2FrCIrk%2FfPHWp7OTgywHOuX6o4XdzZnVlXiW3E4z%2FGTY0hl%2FNkx5HewBePsXXzHHiCwUJHj%2BSWrj90qf%2BLigarQhjxPfHsw7i0wGMNuFhL0GOqUB0KkBf2gprNn0o0usI2jtqn7fFpgiN3rctlClsSd0pSVyQyQlckT%2FXnxlTUNVcac%2BDcLs%2FXqL5afdrboxzxN4n2nMnGvmoLnY%2F%2B63%2BeywEzFQYnQqu6FQA4DZNQeOcRk9x6vTaJMJZrekspa45cb4cZAWr07gSduGdY%2BJnRqcvoqQfCiTj7ZDNlfptjD6NPHXGgEBupaEasxLw9Blfhvo6iuQeaQQ&X-Amz-Signature=1b6a796043e5d6b31c0c536acf8ccdece42091b90130ba6f52f960541bc73cad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YU7XSLK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQgA%2Fqp0bfZuLZEbpideuJTwtMgYfH1yZP3kjhLIqWhQIgQx13XYQpvEJtrvqzLj4smv%2FEdynFApfOn%2BKTpoiX6zkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAm6846U0iUvl4eLVircA4AGLBUBuUAwCDgZwKCqxFxnPd%2FfyziiPtN9XhuQRJu37%2BrVP1tfdglozd9rYwo%2B2KPNxj%2F1ThVr8o22iopjNVYt%2Bmn1BWEUCnCTd2Hzag5I0k8vdhoEhw5loEg3qZzVA0T9OVJHIm0c0m81CAZeWr3uWGFpD5y1ILak5tCKB1zOS76IPos%2FRYhk6MvTGT3eLvKVMQUaSybPTSNiHjvjQlwB1jPg7DKmPXhLmyOXs9AKrqor4gx2s5ZsnGzRjRR4uIU3L2pVdoiOREZ%2FCy7YRy96TYhrhM%2FSY83aJ%2FORRLA78gtVrUkprZPXVxxsP3vW%2B0H%2BfxW%2B7VGRdct0ni8DAWuFsNMmF4pHqtQ5Rkfbp5q41wU19wIxUthDCCqt1mZlIEsOa3jE64XHrHLbcw87%2B4bs1ZenJ8iBqPkCx7y3XUR%2FMAk5rJZH8%2FUVmZCtkHYIRicaffdQ4lM0hWwIOJx6mKcfohfGPcVs%2Fmugr580ePLUzZsFzYLiRXRPlUpdi6zUdNPF6a1rI5uYJDYDm0meH457Q%2FrCIrk%2FfPHWp7OTgywHOuX6o4XdzZnVlXiW3E4z%2FGTY0hl%2FNkx5HewBePsXXzHHiCwUJHj%2BSWrj90qf%2BLigarQhjxPfHsw7i0wGMNuFhL0GOqUB0KkBf2gprNn0o0usI2jtqn7fFpgiN3rctlClsSd0pSVyQyQlckT%2FXnxlTUNVcac%2BDcLs%2FXqL5afdrboxzxN4n2nMnGvmoLnY%2F%2B63%2BeywEzFQYnQqu6FQA4DZNQeOcRk9x6vTaJMJZrekspa45cb4cZAWr07gSduGdY%2BJnRqcvoqQfCiTj7ZDNlfptjD6NPHXGgEBupaEasxLw9Blfhvo6iuQeaQQ&X-Amz-Signature=baf0538277ee729fa1296e237857c01a84d8adbc0e21f0971c7956f3c681eeff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YU7XSLK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQgA%2Fqp0bfZuLZEbpideuJTwtMgYfH1yZP3kjhLIqWhQIgQx13XYQpvEJtrvqzLj4smv%2FEdynFApfOn%2BKTpoiX6zkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAm6846U0iUvl4eLVircA4AGLBUBuUAwCDgZwKCqxFxnPd%2FfyziiPtN9XhuQRJu37%2BrVP1tfdglozd9rYwo%2B2KPNxj%2F1ThVr8o22iopjNVYt%2Bmn1BWEUCnCTd2Hzag5I0k8vdhoEhw5loEg3qZzVA0T9OVJHIm0c0m81CAZeWr3uWGFpD5y1ILak5tCKB1zOS76IPos%2FRYhk6MvTGT3eLvKVMQUaSybPTSNiHjvjQlwB1jPg7DKmPXhLmyOXs9AKrqor4gx2s5ZsnGzRjRR4uIU3L2pVdoiOREZ%2FCy7YRy96TYhrhM%2FSY83aJ%2FORRLA78gtVrUkprZPXVxxsP3vW%2B0H%2BfxW%2B7VGRdct0ni8DAWuFsNMmF4pHqtQ5Rkfbp5q41wU19wIxUthDCCqt1mZlIEsOa3jE64XHrHLbcw87%2B4bs1ZenJ8iBqPkCx7y3XUR%2FMAk5rJZH8%2FUVmZCtkHYIRicaffdQ4lM0hWwIOJx6mKcfohfGPcVs%2Fmugr580ePLUzZsFzYLiRXRPlUpdi6zUdNPF6a1rI5uYJDYDm0meH457Q%2FrCIrk%2FfPHWp7OTgywHOuX6o4XdzZnVlXiW3E4z%2FGTY0hl%2FNkx5HewBePsXXzHHiCwUJHj%2BSWrj90qf%2BLigarQhjxPfHsw7i0wGMNuFhL0GOqUB0KkBf2gprNn0o0usI2jtqn7fFpgiN3rctlClsSd0pSVyQyQlckT%2FXnxlTUNVcac%2BDcLs%2FXqL5afdrboxzxN4n2nMnGvmoLnY%2F%2B63%2BeywEzFQYnQqu6FQA4DZNQeOcRk9x6vTaJMJZrekspa45cb4cZAWr07gSduGdY%2BJnRqcvoqQfCiTj7ZDNlfptjD6NPHXGgEBupaEasxLw9Blfhvo6iuQeaQQ&X-Amz-Signature=2f9b249d23a8586fa2d84e645e9bcf3dadf36e949111bc124ce6f4d660402968&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
