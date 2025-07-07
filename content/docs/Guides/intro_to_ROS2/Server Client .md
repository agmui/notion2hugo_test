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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK2HS4U5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIApHTfMUBZLA12B%2FS%2FDH6ss8%2FeeKRRjzHNVv6eMB9aYnAiEAqd65e7sTdUlObccVdtzvjZPWX0h8hzLldz3R2cLDQfkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAyHrOU5NI4DHMbz1ircA%2BEhq9dQxHDo8LLOZi%2BtJGZN3hHzPiJC%2BP2Ot4yVrxzWqJ5zFu6%2FVUI0%2FqjAISxubA2Mr%2BPqW2QVj%2FECbuXLOKbajJz83X5efG8q%2Fb45tV2MrM06mvNTXGDVzPSTieIOwpO6MEd16iXpHU%2FwboKA4SGB9ZFBKYi22F%2FgEX6IB0sYIqPCx2nlghKwXZ%2FGeyH9v08egYn1ZTIf9%2FPdr%2FLOEMkDsbt5phZ%2BX3jg6x8EiEMN9h%2B75NjDRm71oB%2BGV2wDjIMHM0qL7P8VJYl4OcvI9tnWTzFT%2FMvZQydVeVZi5HWkYI9T318becLjBP%2FNNj0PE0y7EvsWDEBpA2k3oa3qWqDoG%2FjnoUZrt1MR4lSWuvo9ycBp%2BZWNqh5IGOcEGFz9vyXz0FnCgYkI93y4%2FVDpeTbGbfgWuUNly0N6N7BUdzglIuurgipzFtcFidBLmdIzAytO2m686vO6bHBoBElkkk0LWgR9wEDQb0g6MEWCAeTM%2FH6kRWtxia1nt%2BPejQQ8R8errII2iglZoCdNbVHa2g2PsPW847d%2Fe98Kc6tijV7qcK%2FLo%2B8%2FmRroCYMW%2Bl%2BWgtMmNAGWb4%2BFyq4QrXbQ4ijPtYZ1jsGRNHE5BiBt2ift%2FhL2BND452OdB%2BpVMOHpsMMGOqUBN3135Yt4BOi%2FEFXDPTrb8%2BoDINdM4MJyb%2FzDkkqkOQsm6pAXt2i%2BVsfpc%2FUFbpo34ZP1ppUr%2FH6lbp%2FPMyr%2BSxxUyvinVCntvnmlaaa02O2e%2BRIRM7lvzZQdmML55sfhZOcXUWrA3YCLXeC%2F2VP5ArQEs%2BxvQ36kdlpM9bUJpPV6OU9c%2B4XjNv99oMH%2Ftz5tylxWLHxxKPPHry61lM3ESBapZJfG&X-Amz-Signature=fb58f72b52512210e355fa2abd9bf01a4ef8577ac5fe95762718ca37bea4dc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK2HS4U5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIApHTfMUBZLA12B%2FS%2FDH6ss8%2FeeKRRjzHNVv6eMB9aYnAiEAqd65e7sTdUlObccVdtzvjZPWX0h8hzLldz3R2cLDQfkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAyHrOU5NI4DHMbz1ircA%2BEhq9dQxHDo8LLOZi%2BtJGZN3hHzPiJC%2BP2Ot4yVrxzWqJ5zFu6%2FVUI0%2FqjAISxubA2Mr%2BPqW2QVj%2FECbuXLOKbajJz83X5efG8q%2Fb45tV2MrM06mvNTXGDVzPSTieIOwpO6MEd16iXpHU%2FwboKA4SGB9ZFBKYi22F%2FgEX6IB0sYIqPCx2nlghKwXZ%2FGeyH9v08egYn1ZTIf9%2FPdr%2FLOEMkDsbt5phZ%2BX3jg6x8EiEMN9h%2B75NjDRm71oB%2BGV2wDjIMHM0qL7P8VJYl4OcvI9tnWTzFT%2FMvZQydVeVZi5HWkYI9T318becLjBP%2FNNj0PE0y7EvsWDEBpA2k3oa3qWqDoG%2FjnoUZrt1MR4lSWuvo9ycBp%2BZWNqh5IGOcEGFz9vyXz0FnCgYkI93y4%2FVDpeTbGbfgWuUNly0N6N7BUdzglIuurgipzFtcFidBLmdIzAytO2m686vO6bHBoBElkkk0LWgR9wEDQb0g6MEWCAeTM%2FH6kRWtxia1nt%2BPejQQ8R8errII2iglZoCdNbVHa2g2PsPW847d%2Fe98Kc6tijV7qcK%2FLo%2B8%2FmRroCYMW%2Bl%2BWgtMmNAGWb4%2BFyq4QrXbQ4ijPtYZ1jsGRNHE5BiBt2ift%2FhL2BND452OdB%2BpVMOHpsMMGOqUBN3135Yt4BOi%2FEFXDPTrb8%2BoDINdM4MJyb%2FzDkkqkOQsm6pAXt2i%2BVsfpc%2FUFbpo34ZP1ppUr%2FH6lbp%2FPMyr%2BSxxUyvinVCntvnmlaaa02O2e%2BRIRM7lvzZQdmML55sfhZOcXUWrA3YCLXeC%2F2VP5ArQEs%2BxvQ36kdlpM9bUJpPV6OU9c%2B4XjNv99oMH%2Ftz5tylxWLHxxKPPHry61lM3ESBapZJfG&X-Amz-Signature=923eed255e7062a72eca8a051b5b966c17ca8aa742cd5967760226044073d777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK2HS4U5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIApHTfMUBZLA12B%2FS%2FDH6ss8%2FeeKRRjzHNVv6eMB9aYnAiEAqd65e7sTdUlObccVdtzvjZPWX0h8hzLldz3R2cLDQfkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAyHrOU5NI4DHMbz1ircA%2BEhq9dQxHDo8LLOZi%2BtJGZN3hHzPiJC%2BP2Ot4yVrxzWqJ5zFu6%2FVUI0%2FqjAISxubA2Mr%2BPqW2QVj%2FECbuXLOKbajJz83X5efG8q%2Fb45tV2MrM06mvNTXGDVzPSTieIOwpO6MEd16iXpHU%2FwboKA4SGB9ZFBKYi22F%2FgEX6IB0sYIqPCx2nlghKwXZ%2FGeyH9v08egYn1ZTIf9%2FPdr%2FLOEMkDsbt5phZ%2BX3jg6x8EiEMN9h%2B75NjDRm71oB%2BGV2wDjIMHM0qL7P8VJYl4OcvI9tnWTzFT%2FMvZQydVeVZi5HWkYI9T318becLjBP%2FNNj0PE0y7EvsWDEBpA2k3oa3qWqDoG%2FjnoUZrt1MR4lSWuvo9ycBp%2BZWNqh5IGOcEGFz9vyXz0FnCgYkI93y4%2FVDpeTbGbfgWuUNly0N6N7BUdzglIuurgipzFtcFidBLmdIzAytO2m686vO6bHBoBElkkk0LWgR9wEDQb0g6MEWCAeTM%2FH6kRWtxia1nt%2BPejQQ8R8errII2iglZoCdNbVHa2g2PsPW847d%2Fe98Kc6tijV7qcK%2FLo%2B8%2FmRroCYMW%2Bl%2BWgtMmNAGWb4%2BFyq4QrXbQ4ijPtYZ1jsGRNHE5BiBt2ift%2FhL2BND452OdB%2BpVMOHpsMMGOqUBN3135Yt4BOi%2FEFXDPTrb8%2BoDINdM4MJyb%2FzDkkqkOQsm6pAXt2i%2BVsfpc%2FUFbpo34ZP1ppUr%2FH6lbp%2FPMyr%2BSxxUyvinVCntvnmlaaa02O2e%2BRIRM7lvzZQdmML55sfhZOcXUWrA3YCLXeC%2F2VP5ArQEs%2BxvQ36kdlpM9bUJpPV6OU9c%2B4XjNv99oMH%2Ftz5tylxWLHxxKPPHry61lM3ESBapZJfG&X-Amz-Signature=c258c55093b016307638f09e17b4cb43bf2baf4d7463b7645137936957cb3c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK2HS4U5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIApHTfMUBZLA12B%2FS%2FDH6ss8%2FeeKRRjzHNVv6eMB9aYnAiEAqd65e7sTdUlObccVdtzvjZPWX0h8hzLldz3R2cLDQfkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAyHrOU5NI4DHMbz1ircA%2BEhq9dQxHDo8LLOZi%2BtJGZN3hHzPiJC%2BP2Ot4yVrxzWqJ5zFu6%2FVUI0%2FqjAISxubA2Mr%2BPqW2QVj%2FECbuXLOKbajJz83X5efG8q%2Fb45tV2MrM06mvNTXGDVzPSTieIOwpO6MEd16iXpHU%2FwboKA4SGB9ZFBKYi22F%2FgEX6IB0sYIqPCx2nlghKwXZ%2FGeyH9v08egYn1ZTIf9%2FPdr%2FLOEMkDsbt5phZ%2BX3jg6x8EiEMN9h%2B75NjDRm71oB%2BGV2wDjIMHM0qL7P8VJYl4OcvI9tnWTzFT%2FMvZQydVeVZi5HWkYI9T318becLjBP%2FNNj0PE0y7EvsWDEBpA2k3oa3qWqDoG%2FjnoUZrt1MR4lSWuvo9ycBp%2BZWNqh5IGOcEGFz9vyXz0FnCgYkI93y4%2FVDpeTbGbfgWuUNly0N6N7BUdzglIuurgipzFtcFidBLmdIzAytO2m686vO6bHBoBElkkk0LWgR9wEDQb0g6MEWCAeTM%2FH6kRWtxia1nt%2BPejQQ8R8errII2iglZoCdNbVHa2g2PsPW847d%2Fe98Kc6tijV7qcK%2FLo%2B8%2FmRroCYMW%2Bl%2BWgtMmNAGWb4%2BFyq4QrXbQ4ijPtYZ1jsGRNHE5BiBt2ift%2FhL2BND452OdB%2BpVMOHpsMMGOqUBN3135Yt4BOi%2FEFXDPTrb8%2BoDINdM4MJyb%2FzDkkqkOQsm6pAXt2i%2BVsfpc%2FUFbpo34ZP1ppUr%2FH6lbp%2FPMyr%2BSxxUyvinVCntvnmlaaa02O2e%2BRIRM7lvzZQdmML55sfhZOcXUWrA3YCLXeC%2F2VP5ArQEs%2BxvQ36kdlpM9bUJpPV6OU9c%2B4XjNv99oMH%2Ftz5tylxWLHxxKPPHry61lM3ESBapZJfG&X-Amz-Signature=b49c45ee8d766095f5617b4c5aad19ba31840d0174b765b3427a7ecd839ed69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK2HS4U5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIApHTfMUBZLA12B%2FS%2FDH6ss8%2FeeKRRjzHNVv6eMB9aYnAiEAqd65e7sTdUlObccVdtzvjZPWX0h8hzLldz3R2cLDQfkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAyHrOU5NI4DHMbz1ircA%2BEhq9dQxHDo8LLOZi%2BtJGZN3hHzPiJC%2BP2Ot4yVrxzWqJ5zFu6%2FVUI0%2FqjAISxubA2Mr%2BPqW2QVj%2FECbuXLOKbajJz83X5efG8q%2Fb45tV2MrM06mvNTXGDVzPSTieIOwpO6MEd16iXpHU%2FwboKA4SGB9ZFBKYi22F%2FgEX6IB0sYIqPCx2nlghKwXZ%2FGeyH9v08egYn1ZTIf9%2FPdr%2FLOEMkDsbt5phZ%2BX3jg6x8EiEMN9h%2B75NjDRm71oB%2BGV2wDjIMHM0qL7P8VJYl4OcvI9tnWTzFT%2FMvZQydVeVZi5HWkYI9T318becLjBP%2FNNj0PE0y7EvsWDEBpA2k3oa3qWqDoG%2FjnoUZrt1MR4lSWuvo9ycBp%2BZWNqh5IGOcEGFz9vyXz0FnCgYkI93y4%2FVDpeTbGbfgWuUNly0N6N7BUdzglIuurgipzFtcFidBLmdIzAytO2m686vO6bHBoBElkkk0LWgR9wEDQb0g6MEWCAeTM%2FH6kRWtxia1nt%2BPejQQ8R8errII2iglZoCdNbVHa2g2PsPW847d%2Fe98Kc6tijV7qcK%2FLo%2B8%2FmRroCYMW%2Bl%2BWgtMmNAGWb4%2BFyq4QrXbQ4ijPtYZ1jsGRNHE5BiBt2ift%2FhL2BND452OdB%2BpVMOHpsMMGOqUBN3135Yt4BOi%2FEFXDPTrb8%2BoDINdM4MJyb%2FzDkkqkOQsm6pAXt2i%2BVsfpc%2FUFbpo34ZP1ppUr%2FH6lbp%2FPMyr%2BSxxUyvinVCntvnmlaaa02O2e%2BRIRM7lvzZQdmML55sfhZOcXUWrA3YCLXeC%2F2VP5ArQEs%2BxvQ36kdlpM9bUJpPV6OU9c%2B4XjNv99oMH%2Ftz5tylxWLHxxKPPHry61lM3ESBapZJfG&X-Amz-Signature=a16e75671dd0416433396a6dd7ea2f20ad5d948a869c2ccee81c703bf05f3f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
