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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBTO2ZS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsksoz7hsFFNH8CG7Ov3%2F8kjFbmgyrQ8Bn7baHxZREAIhAPmd4kUvuOAYlA0RoWSe2UEO8xeXmKcbx0MO7g7BWFxCKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FGMB2zBVuuv8p2Soq3APM6YonRbIRUzhIpPJnzURFpkUzvdNR5I77rvlzveqZegclXn3O6AqNUm9LmXORv2a7IgvSx0MoCgCqK%2FUGKIqlBTRjB%2BSxJTSS2oBT3wB%2Fd1tbVqHfC2kiPenjAiIvycJuTjJvbeP3vXYBteRpWjV1gsFGjmipd9zrNuJPFtWthX4LZyQuen3Dc7JcK%2FD7Mc%2F%2FtQLHvj8BD1ZuX0N8HCT0t%2B9XywtPS5fz9l%2BPrhDkU19%2FDRfFqgFCl2kXm8fA95oEDP7OVryCprq00kynQ9G2pW164cF%2FxGP6zP4kRUT%2BQ4lo6m3VmGVTUNyGPVp8zzngpMcD5IASd716wYY%2FIZmlfTDMEofrQZ8XWrRf%2FWpzQy7o74vwpYGIsVMCB2raGElrya5%2F7ACXiVTnP66SvBAK8RIJRjYqNvx%2B1ubeDdR4Lkc4TOUsLxqtlzeBokjHRUkn2bv3yJ%2FX%2F5bF%2BcRicxE2vSWlifVYiXVDMSlPQICbtkihpGZtI4KnnL7zW2sygGVadk9AqmqDeRPhpEXj6LVTPSAmtcvr1%2BxDTqyl%2BdoIv4DzalHUfOtMO844pZhCFWxR133WCe7KdyItlcP3iN7OrKxWsi7FiaEYLocEH2o0DWge1L7F7vhOVcqRdzC3p8PDBjqkAUySwptBktF%2FYragCignS9eo8dIZ64HbIg%2BVxyUdUU9pWiWq4dhLKZT69OZ50exJPkefWJp0ppTSLk5fUJvNC3NBichTVnrkOdN7qSw8eNbiLEy5mcRteyD9kZ4fbbFTqgMDUVjZXxDhVnrui48L1X8Caj%2BPFYeYaO0kXvciK2tLSeilaIdZQS90bVvZ31MnJHO8W0VhZJIfe8xzV6sif7b77SRv&X-Amz-Signature=1df159eca7cf844b3141104e905a3601688858c63d169cd5997e9205fb4c7702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBTO2ZS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsksoz7hsFFNH8CG7Ov3%2F8kjFbmgyrQ8Bn7baHxZREAIhAPmd4kUvuOAYlA0RoWSe2UEO8xeXmKcbx0MO7g7BWFxCKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FGMB2zBVuuv8p2Soq3APM6YonRbIRUzhIpPJnzURFpkUzvdNR5I77rvlzveqZegclXn3O6AqNUm9LmXORv2a7IgvSx0MoCgCqK%2FUGKIqlBTRjB%2BSxJTSS2oBT3wB%2Fd1tbVqHfC2kiPenjAiIvycJuTjJvbeP3vXYBteRpWjV1gsFGjmipd9zrNuJPFtWthX4LZyQuen3Dc7JcK%2FD7Mc%2F%2FtQLHvj8BD1ZuX0N8HCT0t%2B9XywtPS5fz9l%2BPrhDkU19%2FDRfFqgFCl2kXm8fA95oEDP7OVryCprq00kynQ9G2pW164cF%2FxGP6zP4kRUT%2BQ4lo6m3VmGVTUNyGPVp8zzngpMcD5IASd716wYY%2FIZmlfTDMEofrQZ8XWrRf%2FWpzQy7o74vwpYGIsVMCB2raGElrya5%2F7ACXiVTnP66SvBAK8RIJRjYqNvx%2B1ubeDdR4Lkc4TOUsLxqtlzeBokjHRUkn2bv3yJ%2FX%2F5bF%2BcRicxE2vSWlifVYiXVDMSlPQICbtkihpGZtI4KnnL7zW2sygGVadk9AqmqDeRPhpEXj6LVTPSAmtcvr1%2BxDTqyl%2BdoIv4DzalHUfOtMO844pZhCFWxR133WCe7KdyItlcP3iN7OrKxWsi7FiaEYLocEH2o0DWge1L7F7vhOVcqRdzC3p8PDBjqkAUySwptBktF%2FYragCignS9eo8dIZ64HbIg%2BVxyUdUU9pWiWq4dhLKZT69OZ50exJPkefWJp0ppTSLk5fUJvNC3NBichTVnrkOdN7qSw8eNbiLEy5mcRteyD9kZ4fbbFTqgMDUVjZXxDhVnrui48L1X8Caj%2BPFYeYaO0kXvciK2tLSeilaIdZQS90bVvZ31MnJHO8W0VhZJIfe8xzV6sif7b77SRv&X-Amz-Signature=484c4a6ccbde42260b12922d6b0baf1e6959ddf0031fda0809d92d79a463c5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBTO2ZS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsksoz7hsFFNH8CG7Ov3%2F8kjFbmgyrQ8Bn7baHxZREAIhAPmd4kUvuOAYlA0RoWSe2UEO8xeXmKcbx0MO7g7BWFxCKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FGMB2zBVuuv8p2Soq3APM6YonRbIRUzhIpPJnzURFpkUzvdNR5I77rvlzveqZegclXn3O6AqNUm9LmXORv2a7IgvSx0MoCgCqK%2FUGKIqlBTRjB%2BSxJTSS2oBT3wB%2Fd1tbVqHfC2kiPenjAiIvycJuTjJvbeP3vXYBteRpWjV1gsFGjmipd9zrNuJPFtWthX4LZyQuen3Dc7JcK%2FD7Mc%2F%2FtQLHvj8BD1ZuX0N8HCT0t%2B9XywtPS5fz9l%2BPrhDkU19%2FDRfFqgFCl2kXm8fA95oEDP7OVryCprq00kynQ9G2pW164cF%2FxGP6zP4kRUT%2BQ4lo6m3VmGVTUNyGPVp8zzngpMcD5IASd716wYY%2FIZmlfTDMEofrQZ8XWrRf%2FWpzQy7o74vwpYGIsVMCB2raGElrya5%2F7ACXiVTnP66SvBAK8RIJRjYqNvx%2B1ubeDdR4Lkc4TOUsLxqtlzeBokjHRUkn2bv3yJ%2FX%2F5bF%2BcRicxE2vSWlifVYiXVDMSlPQICbtkihpGZtI4KnnL7zW2sygGVadk9AqmqDeRPhpEXj6LVTPSAmtcvr1%2BxDTqyl%2BdoIv4DzalHUfOtMO844pZhCFWxR133WCe7KdyItlcP3iN7OrKxWsi7FiaEYLocEH2o0DWge1L7F7vhOVcqRdzC3p8PDBjqkAUySwptBktF%2FYragCignS9eo8dIZ64HbIg%2BVxyUdUU9pWiWq4dhLKZT69OZ50exJPkefWJp0ppTSLk5fUJvNC3NBichTVnrkOdN7qSw8eNbiLEy5mcRteyD9kZ4fbbFTqgMDUVjZXxDhVnrui48L1X8Caj%2BPFYeYaO0kXvciK2tLSeilaIdZQS90bVvZ31MnJHO8W0VhZJIfe8xzV6sif7b77SRv&X-Amz-Signature=7a747578e887da6c73eb0a0de19fdcddba3c21dab6fdbc353d01f21d0b8c4c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBTO2ZS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsksoz7hsFFNH8CG7Ov3%2F8kjFbmgyrQ8Bn7baHxZREAIhAPmd4kUvuOAYlA0RoWSe2UEO8xeXmKcbx0MO7g7BWFxCKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FGMB2zBVuuv8p2Soq3APM6YonRbIRUzhIpPJnzURFpkUzvdNR5I77rvlzveqZegclXn3O6AqNUm9LmXORv2a7IgvSx0MoCgCqK%2FUGKIqlBTRjB%2BSxJTSS2oBT3wB%2Fd1tbVqHfC2kiPenjAiIvycJuTjJvbeP3vXYBteRpWjV1gsFGjmipd9zrNuJPFtWthX4LZyQuen3Dc7JcK%2FD7Mc%2F%2FtQLHvj8BD1ZuX0N8HCT0t%2B9XywtPS5fz9l%2BPrhDkU19%2FDRfFqgFCl2kXm8fA95oEDP7OVryCprq00kynQ9G2pW164cF%2FxGP6zP4kRUT%2BQ4lo6m3VmGVTUNyGPVp8zzngpMcD5IASd716wYY%2FIZmlfTDMEofrQZ8XWrRf%2FWpzQy7o74vwpYGIsVMCB2raGElrya5%2F7ACXiVTnP66SvBAK8RIJRjYqNvx%2B1ubeDdR4Lkc4TOUsLxqtlzeBokjHRUkn2bv3yJ%2FX%2F5bF%2BcRicxE2vSWlifVYiXVDMSlPQICbtkihpGZtI4KnnL7zW2sygGVadk9AqmqDeRPhpEXj6LVTPSAmtcvr1%2BxDTqyl%2BdoIv4DzalHUfOtMO844pZhCFWxR133WCe7KdyItlcP3iN7OrKxWsi7FiaEYLocEH2o0DWge1L7F7vhOVcqRdzC3p8PDBjqkAUySwptBktF%2FYragCignS9eo8dIZ64HbIg%2BVxyUdUU9pWiWq4dhLKZT69OZ50exJPkefWJp0ppTSLk5fUJvNC3NBichTVnrkOdN7qSw8eNbiLEy5mcRteyD9kZ4fbbFTqgMDUVjZXxDhVnrui48L1X8Caj%2BPFYeYaO0kXvciK2tLSeilaIdZQS90bVvZ31MnJHO8W0VhZJIfe8xzV6sif7b77SRv&X-Amz-Signature=8b4375f7c0d721371a95ed8da4fb1969c01b75d6656c701c52011da45b025dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBTO2ZS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsksoz7hsFFNH8CG7Ov3%2F8kjFbmgyrQ8Bn7baHxZREAIhAPmd4kUvuOAYlA0RoWSe2UEO8xeXmKcbx0MO7g7BWFxCKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FGMB2zBVuuv8p2Soq3APM6YonRbIRUzhIpPJnzURFpkUzvdNR5I77rvlzveqZegclXn3O6AqNUm9LmXORv2a7IgvSx0MoCgCqK%2FUGKIqlBTRjB%2BSxJTSS2oBT3wB%2Fd1tbVqHfC2kiPenjAiIvycJuTjJvbeP3vXYBteRpWjV1gsFGjmipd9zrNuJPFtWthX4LZyQuen3Dc7JcK%2FD7Mc%2F%2FtQLHvj8BD1ZuX0N8HCT0t%2B9XywtPS5fz9l%2BPrhDkU19%2FDRfFqgFCl2kXm8fA95oEDP7OVryCprq00kynQ9G2pW164cF%2FxGP6zP4kRUT%2BQ4lo6m3VmGVTUNyGPVp8zzngpMcD5IASd716wYY%2FIZmlfTDMEofrQZ8XWrRf%2FWpzQy7o74vwpYGIsVMCB2raGElrya5%2F7ACXiVTnP66SvBAK8RIJRjYqNvx%2B1ubeDdR4Lkc4TOUsLxqtlzeBokjHRUkn2bv3yJ%2FX%2F5bF%2BcRicxE2vSWlifVYiXVDMSlPQICbtkihpGZtI4KnnL7zW2sygGVadk9AqmqDeRPhpEXj6LVTPSAmtcvr1%2BxDTqyl%2BdoIv4DzalHUfOtMO844pZhCFWxR133WCe7KdyItlcP3iN7OrKxWsi7FiaEYLocEH2o0DWge1L7F7vhOVcqRdzC3p8PDBjqkAUySwptBktF%2FYragCignS9eo8dIZ64HbIg%2BVxyUdUU9pWiWq4dhLKZT69OZ50exJPkefWJp0ppTSLk5fUJvNC3NBichTVnrkOdN7qSw8eNbiLEy5mcRteyD9kZ4fbbFTqgMDUVjZXxDhVnrui48L1X8Caj%2BPFYeYaO0kXvciK2tLSeilaIdZQS90bVvZ31MnJHO8W0VhZJIfe8xzV6sif7b77SRv&X-Amz-Signature=3002ccabdf9fc205c0fc2a222980058e53c6c81fea88754b75ecc3135f0f1e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
