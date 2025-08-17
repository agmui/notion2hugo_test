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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WBYPID%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICR13L7ogra%2BIxSRpNVw2zmer6OVS%2BmB%2F9ZKo6jguTlbAiBw%2BDHjtZ4gbNDuP%2F1LTG43Dc1QAfSwDUx5bZ75rkOBbSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVPYsNcKvYp5uV32KtwDd7JThfRjRPH8jAIWGT77QpDgxnqg66a%2F1U4xxnbZbA4FXHIQmfLJiHUa54UFlOTy4uG2zmAhXGlRWsbK81IZNFG%2BQvsV0tpxGA9NF736tmxOT0CUHdIQllHotO3kmGqiNQjwBTif1nbZkR3kjQgi9Fjh8yLr2EcYsgkQHQCDTXhp4J6%2BE8PEql8osJtoq47E3qq2uSgAEhqd%2FfZOzWOaWAGy7emlP0ytSrJ9rgIb%2FOy2kCuK5h9NV54QKFbiHiWW%2B6X%2Bbjq18yfduGiUTnv1z40XIAtTv%2BXASuMuIaNvgjikT7RF6ZxHLm2LcAZhgS6ABbi2cAjyL9UE0Rlm985PKlUHaMHjcvKEc0LtGMFnCtGf51rAsqvooH%2F8ZfDlmS3adeHCZAk%2FYdZn4neL8T6bEVsvkpfVIyjbu4Ug71s3Enw%2BKHRtmYv3DeDxjHj2tT%2FVc6JFHHnD%2FNvT3dO4%2Bckh1RKgwhB5WwseMcrNMacC%2BFKwP6Pw1klvEPlkjHvitJCmAR4v8jK3jCUpjeJoDbjaTYVdhtTsEOl2o0EU7HeSvHNhoXFio9XfkhK9ZzOBbwAXxp9RyUyO%2F9UNBfO31a2lVSC0S07t5owVi4G9FZs1cAXGpTLNN9YcmTKSENcwiM2ExQY6pgGqystpXI26kcDpsQb73JNfPhRLuhZQj6%2BsmF2rCt551tFr0HFBLBCnutI1CPB6nwnd7XpfsXqp0jXCF24ncKc2xQP2BJ0bb%2FapKxLB5vLBI7gymmuigc8UXqhdz%2Blh1ka08rEQ7p1P%2FUnsTBNvcBceOEdcxbxAnfkJW%2BW6GBqnjiW%2BtxGUG94OgEkhwgUuVTIFFxpRV3%2B98bZDO1bJbNn04Dx3ZVCf&X-Amz-Signature=a82c1d68840084033bef8db170cd7c1b4ba5775bc85d1d04bdc99d7e42feaef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WBYPID%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICR13L7ogra%2BIxSRpNVw2zmer6OVS%2BmB%2F9ZKo6jguTlbAiBw%2BDHjtZ4gbNDuP%2F1LTG43Dc1QAfSwDUx5bZ75rkOBbSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVPYsNcKvYp5uV32KtwDd7JThfRjRPH8jAIWGT77QpDgxnqg66a%2F1U4xxnbZbA4FXHIQmfLJiHUa54UFlOTy4uG2zmAhXGlRWsbK81IZNFG%2BQvsV0tpxGA9NF736tmxOT0CUHdIQllHotO3kmGqiNQjwBTif1nbZkR3kjQgi9Fjh8yLr2EcYsgkQHQCDTXhp4J6%2BE8PEql8osJtoq47E3qq2uSgAEhqd%2FfZOzWOaWAGy7emlP0ytSrJ9rgIb%2FOy2kCuK5h9NV54QKFbiHiWW%2B6X%2Bbjq18yfduGiUTnv1z40XIAtTv%2BXASuMuIaNvgjikT7RF6ZxHLm2LcAZhgS6ABbi2cAjyL9UE0Rlm985PKlUHaMHjcvKEc0LtGMFnCtGf51rAsqvooH%2F8ZfDlmS3adeHCZAk%2FYdZn4neL8T6bEVsvkpfVIyjbu4Ug71s3Enw%2BKHRtmYv3DeDxjHj2tT%2FVc6JFHHnD%2FNvT3dO4%2Bckh1RKgwhB5WwseMcrNMacC%2BFKwP6Pw1klvEPlkjHvitJCmAR4v8jK3jCUpjeJoDbjaTYVdhtTsEOl2o0EU7HeSvHNhoXFio9XfkhK9ZzOBbwAXxp9RyUyO%2F9UNBfO31a2lVSC0S07t5owVi4G9FZs1cAXGpTLNN9YcmTKSENcwiM2ExQY6pgGqystpXI26kcDpsQb73JNfPhRLuhZQj6%2BsmF2rCt551tFr0HFBLBCnutI1CPB6nwnd7XpfsXqp0jXCF24ncKc2xQP2BJ0bb%2FapKxLB5vLBI7gymmuigc8UXqhdz%2Blh1ka08rEQ7p1P%2FUnsTBNvcBceOEdcxbxAnfkJW%2BW6GBqnjiW%2BtxGUG94OgEkhwgUuVTIFFxpRV3%2B98bZDO1bJbNn04Dx3ZVCf&X-Amz-Signature=7e8ceeb59e4ccebdcb576f5cbd8d1cf852392efd0f5b525550d1acfd47fe295c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WBYPID%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICR13L7ogra%2BIxSRpNVw2zmer6OVS%2BmB%2F9ZKo6jguTlbAiBw%2BDHjtZ4gbNDuP%2F1LTG43Dc1QAfSwDUx5bZ75rkOBbSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVPYsNcKvYp5uV32KtwDd7JThfRjRPH8jAIWGT77QpDgxnqg66a%2F1U4xxnbZbA4FXHIQmfLJiHUa54UFlOTy4uG2zmAhXGlRWsbK81IZNFG%2BQvsV0tpxGA9NF736tmxOT0CUHdIQllHotO3kmGqiNQjwBTif1nbZkR3kjQgi9Fjh8yLr2EcYsgkQHQCDTXhp4J6%2BE8PEql8osJtoq47E3qq2uSgAEhqd%2FfZOzWOaWAGy7emlP0ytSrJ9rgIb%2FOy2kCuK5h9NV54QKFbiHiWW%2B6X%2Bbjq18yfduGiUTnv1z40XIAtTv%2BXASuMuIaNvgjikT7RF6ZxHLm2LcAZhgS6ABbi2cAjyL9UE0Rlm985PKlUHaMHjcvKEc0LtGMFnCtGf51rAsqvooH%2F8ZfDlmS3adeHCZAk%2FYdZn4neL8T6bEVsvkpfVIyjbu4Ug71s3Enw%2BKHRtmYv3DeDxjHj2tT%2FVc6JFHHnD%2FNvT3dO4%2Bckh1RKgwhB5WwseMcrNMacC%2BFKwP6Pw1klvEPlkjHvitJCmAR4v8jK3jCUpjeJoDbjaTYVdhtTsEOl2o0EU7HeSvHNhoXFio9XfkhK9ZzOBbwAXxp9RyUyO%2F9UNBfO31a2lVSC0S07t5owVi4G9FZs1cAXGpTLNN9YcmTKSENcwiM2ExQY6pgGqystpXI26kcDpsQb73JNfPhRLuhZQj6%2BsmF2rCt551tFr0HFBLBCnutI1CPB6nwnd7XpfsXqp0jXCF24ncKc2xQP2BJ0bb%2FapKxLB5vLBI7gymmuigc8UXqhdz%2Blh1ka08rEQ7p1P%2FUnsTBNvcBceOEdcxbxAnfkJW%2BW6GBqnjiW%2BtxGUG94OgEkhwgUuVTIFFxpRV3%2B98bZDO1bJbNn04Dx3ZVCf&X-Amz-Signature=2e59449ccbb9aba1f9ab6ab8648470c1e5a6703eb375f5c5dd383c3dd2f7ad77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WBYPID%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICR13L7ogra%2BIxSRpNVw2zmer6OVS%2BmB%2F9ZKo6jguTlbAiBw%2BDHjtZ4gbNDuP%2F1LTG43Dc1QAfSwDUx5bZ75rkOBbSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVPYsNcKvYp5uV32KtwDd7JThfRjRPH8jAIWGT77QpDgxnqg66a%2F1U4xxnbZbA4FXHIQmfLJiHUa54UFlOTy4uG2zmAhXGlRWsbK81IZNFG%2BQvsV0tpxGA9NF736tmxOT0CUHdIQllHotO3kmGqiNQjwBTif1nbZkR3kjQgi9Fjh8yLr2EcYsgkQHQCDTXhp4J6%2BE8PEql8osJtoq47E3qq2uSgAEhqd%2FfZOzWOaWAGy7emlP0ytSrJ9rgIb%2FOy2kCuK5h9NV54QKFbiHiWW%2B6X%2Bbjq18yfduGiUTnv1z40XIAtTv%2BXASuMuIaNvgjikT7RF6ZxHLm2LcAZhgS6ABbi2cAjyL9UE0Rlm985PKlUHaMHjcvKEc0LtGMFnCtGf51rAsqvooH%2F8ZfDlmS3adeHCZAk%2FYdZn4neL8T6bEVsvkpfVIyjbu4Ug71s3Enw%2BKHRtmYv3DeDxjHj2tT%2FVc6JFHHnD%2FNvT3dO4%2Bckh1RKgwhB5WwseMcrNMacC%2BFKwP6Pw1klvEPlkjHvitJCmAR4v8jK3jCUpjeJoDbjaTYVdhtTsEOl2o0EU7HeSvHNhoXFio9XfkhK9ZzOBbwAXxp9RyUyO%2F9UNBfO31a2lVSC0S07t5owVi4G9FZs1cAXGpTLNN9YcmTKSENcwiM2ExQY6pgGqystpXI26kcDpsQb73JNfPhRLuhZQj6%2BsmF2rCt551tFr0HFBLBCnutI1CPB6nwnd7XpfsXqp0jXCF24ncKc2xQP2BJ0bb%2FapKxLB5vLBI7gymmuigc8UXqhdz%2Blh1ka08rEQ7p1P%2FUnsTBNvcBceOEdcxbxAnfkJW%2BW6GBqnjiW%2BtxGUG94OgEkhwgUuVTIFFxpRV3%2B98bZDO1bJbNn04Dx3ZVCf&X-Amz-Signature=756a9d13bf898858816f91e93aea2a658941c5af2f52f4f11fb0616975918dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WBYPID%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICR13L7ogra%2BIxSRpNVw2zmer6OVS%2BmB%2F9ZKo6jguTlbAiBw%2BDHjtZ4gbNDuP%2F1LTG43Dc1QAfSwDUx5bZ75rkOBbSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVPYsNcKvYp5uV32KtwDd7JThfRjRPH8jAIWGT77QpDgxnqg66a%2F1U4xxnbZbA4FXHIQmfLJiHUa54UFlOTy4uG2zmAhXGlRWsbK81IZNFG%2BQvsV0tpxGA9NF736tmxOT0CUHdIQllHotO3kmGqiNQjwBTif1nbZkR3kjQgi9Fjh8yLr2EcYsgkQHQCDTXhp4J6%2BE8PEql8osJtoq47E3qq2uSgAEhqd%2FfZOzWOaWAGy7emlP0ytSrJ9rgIb%2FOy2kCuK5h9NV54QKFbiHiWW%2B6X%2Bbjq18yfduGiUTnv1z40XIAtTv%2BXASuMuIaNvgjikT7RF6ZxHLm2LcAZhgS6ABbi2cAjyL9UE0Rlm985PKlUHaMHjcvKEc0LtGMFnCtGf51rAsqvooH%2F8ZfDlmS3adeHCZAk%2FYdZn4neL8T6bEVsvkpfVIyjbu4Ug71s3Enw%2BKHRtmYv3DeDxjHj2tT%2FVc6JFHHnD%2FNvT3dO4%2Bckh1RKgwhB5WwseMcrNMacC%2BFKwP6Pw1klvEPlkjHvitJCmAR4v8jK3jCUpjeJoDbjaTYVdhtTsEOl2o0EU7HeSvHNhoXFio9XfkhK9ZzOBbwAXxp9RyUyO%2F9UNBfO31a2lVSC0S07t5owVi4G9FZs1cAXGpTLNN9YcmTKSENcwiM2ExQY6pgGqystpXI26kcDpsQb73JNfPhRLuhZQj6%2BsmF2rCt551tFr0HFBLBCnutI1CPB6nwnd7XpfsXqp0jXCF24ncKc2xQP2BJ0bb%2FapKxLB5vLBI7gymmuigc8UXqhdz%2Blh1ka08rEQ7p1P%2FUnsTBNvcBceOEdcxbxAnfkJW%2BW6GBqnjiW%2BtxGUG94OgEkhwgUuVTIFFxpRV3%2B98bZDO1bJbNn04Dx3ZVCf&X-Amz-Signature=4363fb50af2e5b63b1b3877a5fd7f7b2a1b7041badb2fac041930c1967e7df86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
