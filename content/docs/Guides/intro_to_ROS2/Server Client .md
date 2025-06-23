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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RPZT6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCt4IhnFapSLMWdWakxtoLShLArAo6r3Xa7oy44Ct%2FzVQIhAOvZIicxi4Qi6oQ6AUnCGr7B15BTd%2B0tB%2F2QFwwdK9uiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvCYMBWC9EzCexi54q3AM%2FDi1WkMsZ648mIYW6uuebyr%2FkSQuzht3i5mpLH2sh7CAL3uH%2F9GXfpjq4BV07wzCc0HOFlwsZVa59mZQshJJdZjzg9mVHpoQpkw5dYAdZ%2FDIV8ylpSj8veL1r9WCF%2B6RDYWAYGzM8JNVW9egzwBZPpMzORF2WgtYybJwtIIXmHsIfX2kvbtbsMcjJeOzyGf3DPK%2FSUh0OU68aSONVwfJ5U9F%2BnLEFg8tWBToxluZ1a9IT%2BCmJ4lhGsQ3Ohc0mjSpfrfBijn1ik7Cay258t9VOqH7vP%2BoOfX4vqha62UFLL%2FNEM%2Bm9sUMMO2rrP8W5fXAA2NiEs%2FNvcjZhZpGEKf3XqT1k1R8%2FG9X9S2Nc9ZPUeN7pmBctS1eQpBK8O7Gr%2FuO%2FLaEkgSZa8DW9cy1Yjcge%2Bq5o6o52BIYlVBLvau84vUTWbVqqmHP71%2B5R3A9xLzKKY%2FEOcVXfPwoH7W%2BFYyleSfzAhnbAXT1Ysidmm%2FRpXDUvmHHK%2BUZSFlnt%2B9nVFi%2B1C1ocMytI7xtL9uLKLWKk0x2V%2FHC8ke0fAqrbheNMcJfieiVmhdPfbQPF6L98AF4u7tnFPfk628W66QrjaY698fVsh15y3MUMuTwQRbi70F94VmvgVnWl6IF5czCDr%2BPCBjqkAWUFaFPoO02rTZN90uAFSkGLDLng5IZKiGA%2FYoVzBKTHDWsJVlFnmvvWRk6NJ5W%2BQWpu4uk5VeRH6%2BHycCccGdeXH2xwm2Ew7KjEbyLEz2L0lII%2BgC%2BtKVQcaUwiyCRig4LPJ8H59MGdJXHFoQAaE%2BFVhRja1icJwGd0XV474Sr2I2CbRf0sD6xCZvCT9LoPEzQGG5UB7iEls0M%2BxRELQwiCMhOy&X-Amz-Signature=769eec3f516cf9db5bcd58c7b2a0010eafe936e24e87b507664df4697a078b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RPZT6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCt4IhnFapSLMWdWakxtoLShLArAo6r3Xa7oy44Ct%2FzVQIhAOvZIicxi4Qi6oQ6AUnCGr7B15BTd%2B0tB%2F2QFwwdK9uiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvCYMBWC9EzCexi54q3AM%2FDi1WkMsZ648mIYW6uuebyr%2FkSQuzht3i5mpLH2sh7CAL3uH%2F9GXfpjq4BV07wzCc0HOFlwsZVa59mZQshJJdZjzg9mVHpoQpkw5dYAdZ%2FDIV8ylpSj8veL1r9WCF%2B6RDYWAYGzM8JNVW9egzwBZPpMzORF2WgtYybJwtIIXmHsIfX2kvbtbsMcjJeOzyGf3DPK%2FSUh0OU68aSONVwfJ5U9F%2BnLEFg8tWBToxluZ1a9IT%2BCmJ4lhGsQ3Ohc0mjSpfrfBijn1ik7Cay258t9VOqH7vP%2BoOfX4vqha62UFLL%2FNEM%2Bm9sUMMO2rrP8W5fXAA2NiEs%2FNvcjZhZpGEKf3XqT1k1R8%2FG9X9S2Nc9ZPUeN7pmBctS1eQpBK8O7Gr%2FuO%2FLaEkgSZa8DW9cy1Yjcge%2Bq5o6o52BIYlVBLvau84vUTWbVqqmHP71%2B5R3A9xLzKKY%2FEOcVXfPwoH7W%2BFYyleSfzAhnbAXT1Ysidmm%2FRpXDUvmHHK%2BUZSFlnt%2B9nVFi%2B1C1ocMytI7xtL9uLKLWKk0x2V%2FHC8ke0fAqrbheNMcJfieiVmhdPfbQPF6L98AF4u7tnFPfk628W66QrjaY698fVsh15y3MUMuTwQRbi70F94VmvgVnWl6IF5czCDr%2BPCBjqkAWUFaFPoO02rTZN90uAFSkGLDLng5IZKiGA%2FYoVzBKTHDWsJVlFnmvvWRk6NJ5W%2BQWpu4uk5VeRH6%2BHycCccGdeXH2xwm2Ew7KjEbyLEz2L0lII%2BgC%2BtKVQcaUwiyCRig4LPJ8H59MGdJXHFoQAaE%2BFVhRja1icJwGd0XV474Sr2I2CbRf0sD6xCZvCT9LoPEzQGG5UB7iEls0M%2BxRELQwiCMhOy&X-Amz-Signature=a97e712271e4ad46ae68120272f80a74ab58055e79b5091d15adad3fb8835d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RPZT6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCt4IhnFapSLMWdWakxtoLShLArAo6r3Xa7oy44Ct%2FzVQIhAOvZIicxi4Qi6oQ6AUnCGr7B15BTd%2B0tB%2F2QFwwdK9uiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvCYMBWC9EzCexi54q3AM%2FDi1WkMsZ648mIYW6uuebyr%2FkSQuzht3i5mpLH2sh7CAL3uH%2F9GXfpjq4BV07wzCc0HOFlwsZVa59mZQshJJdZjzg9mVHpoQpkw5dYAdZ%2FDIV8ylpSj8veL1r9WCF%2B6RDYWAYGzM8JNVW9egzwBZPpMzORF2WgtYybJwtIIXmHsIfX2kvbtbsMcjJeOzyGf3DPK%2FSUh0OU68aSONVwfJ5U9F%2BnLEFg8tWBToxluZ1a9IT%2BCmJ4lhGsQ3Ohc0mjSpfrfBijn1ik7Cay258t9VOqH7vP%2BoOfX4vqha62UFLL%2FNEM%2Bm9sUMMO2rrP8W5fXAA2NiEs%2FNvcjZhZpGEKf3XqT1k1R8%2FG9X9S2Nc9ZPUeN7pmBctS1eQpBK8O7Gr%2FuO%2FLaEkgSZa8DW9cy1Yjcge%2Bq5o6o52BIYlVBLvau84vUTWbVqqmHP71%2B5R3A9xLzKKY%2FEOcVXfPwoH7W%2BFYyleSfzAhnbAXT1Ysidmm%2FRpXDUvmHHK%2BUZSFlnt%2B9nVFi%2B1C1ocMytI7xtL9uLKLWKk0x2V%2FHC8ke0fAqrbheNMcJfieiVmhdPfbQPF6L98AF4u7tnFPfk628W66QrjaY698fVsh15y3MUMuTwQRbi70F94VmvgVnWl6IF5czCDr%2BPCBjqkAWUFaFPoO02rTZN90uAFSkGLDLng5IZKiGA%2FYoVzBKTHDWsJVlFnmvvWRk6NJ5W%2BQWpu4uk5VeRH6%2BHycCccGdeXH2xwm2Ew7KjEbyLEz2L0lII%2BgC%2BtKVQcaUwiyCRig4LPJ8H59MGdJXHFoQAaE%2BFVhRja1icJwGd0XV474Sr2I2CbRf0sD6xCZvCT9LoPEzQGG5UB7iEls0M%2BxRELQwiCMhOy&X-Amz-Signature=4e965e926f2ecba829cbbdc33c176b2769348037a78ee99ddef3020a4ff0d864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RPZT6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCt4IhnFapSLMWdWakxtoLShLArAo6r3Xa7oy44Ct%2FzVQIhAOvZIicxi4Qi6oQ6AUnCGr7B15BTd%2B0tB%2F2QFwwdK9uiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvCYMBWC9EzCexi54q3AM%2FDi1WkMsZ648mIYW6uuebyr%2FkSQuzht3i5mpLH2sh7CAL3uH%2F9GXfpjq4BV07wzCc0HOFlwsZVa59mZQshJJdZjzg9mVHpoQpkw5dYAdZ%2FDIV8ylpSj8veL1r9WCF%2B6RDYWAYGzM8JNVW9egzwBZPpMzORF2WgtYybJwtIIXmHsIfX2kvbtbsMcjJeOzyGf3DPK%2FSUh0OU68aSONVwfJ5U9F%2BnLEFg8tWBToxluZ1a9IT%2BCmJ4lhGsQ3Ohc0mjSpfrfBijn1ik7Cay258t9VOqH7vP%2BoOfX4vqha62UFLL%2FNEM%2Bm9sUMMO2rrP8W5fXAA2NiEs%2FNvcjZhZpGEKf3XqT1k1R8%2FG9X9S2Nc9ZPUeN7pmBctS1eQpBK8O7Gr%2FuO%2FLaEkgSZa8DW9cy1Yjcge%2Bq5o6o52BIYlVBLvau84vUTWbVqqmHP71%2B5R3A9xLzKKY%2FEOcVXfPwoH7W%2BFYyleSfzAhnbAXT1Ysidmm%2FRpXDUvmHHK%2BUZSFlnt%2B9nVFi%2B1C1ocMytI7xtL9uLKLWKk0x2V%2FHC8ke0fAqrbheNMcJfieiVmhdPfbQPF6L98AF4u7tnFPfk628W66QrjaY698fVsh15y3MUMuTwQRbi70F94VmvgVnWl6IF5czCDr%2BPCBjqkAWUFaFPoO02rTZN90uAFSkGLDLng5IZKiGA%2FYoVzBKTHDWsJVlFnmvvWRk6NJ5W%2BQWpu4uk5VeRH6%2BHycCccGdeXH2xwm2Ew7KjEbyLEz2L0lII%2BgC%2BtKVQcaUwiyCRig4LPJ8H59MGdJXHFoQAaE%2BFVhRja1icJwGd0XV474Sr2I2CbRf0sD6xCZvCT9LoPEzQGG5UB7iEls0M%2BxRELQwiCMhOy&X-Amz-Signature=9b5e323293dea5792cfbaea88c8876cbdb38748bc461508377b0bf025445f287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RPZT6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCt4IhnFapSLMWdWakxtoLShLArAo6r3Xa7oy44Ct%2FzVQIhAOvZIicxi4Qi6oQ6AUnCGr7B15BTd%2B0tB%2F2QFwwdK9uiKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvCYMBWC9EzCexi54q3AM%2FDi1WkMsZ648mIYW6uuebyr%2FkSQuzht3i5mpLH2sh7CAL3uH%2F9GXfpjq4BV07wzCc0HOFlwsZVa59mZQshJJdZjzg9mVHpoQpkw5dYAdZ%2FDIV8ylpSj8veL1r9WCF%2B6RDYWAYGzM8JNVW9egzwBZPpMzORF2WgtYybJwtIIXmHsIfX2kvbtbsMcjJeOzyGf3DPK%2FSUh0OU68aSONVwfJ5U9F%2BnLEFg8tWBToxluZ1a9IT%2BCmJ4lhGsQ3Ohc0mjSpfrfBijn1ik7Cay258t9VOqH7vP%2BoOfX4vqha62UFLL%2FNEM%2Bm9sUMMO2rrP8W5fXAA2NiEs%2FNvcjZhZpGEKf3XqT1k1R8%2FG9X9S2Nc9ZPUeN7pmBctS1eQpBK8O7Gr%2FuO%2FLaEkgSZa8DW9cy1Yjcge%2Bq5o6o52BIYlVBLvau84vUTWbVqqmHP71%2B5R3A9xLzKKY%2FEOcVXfPwoH7W%2BFYyleSfzAhnbAXT1Ysidmm%2FRpXDUvmHHK%2BUZSFlnt%2B9nVFi%2B1C1ocMytI7xtL9uLKLWKk0x2V%2FHC8ke0fAqrbheNMcJfieiVmhdPfbQPF6L98AF4u7tnFPfk628W66QrjaY698fVsh15y3MUMuTwQRbi70F94VmvgVnWl6IF5czCDr%2BPCBjqkAWUFaFPoO02rTZN90uAFSkGLDLng5IZKiGA%2FYoVzBKTHDWsJVlFnmvvWRk6NJ5W%2BQWpu4uk5VeRH6%2BHycCccGdeXH2xwm2Ew7KjEbyLEz2L0lII%2BgC%2BtKVQcaUwiyCRig4LPJ8H59MGdJXHFoQAaE%2BFVhRja1icJwGd0XV474Sr2I2CbRf0sD6xCZvCT9LoPEzQGG5UB7iEls0M%2BxRELQwiCMhOy&X-Amz-Signature=25147299ec8bdfd417f9d5ce1dd1fe414a80b2009d5ccd96427f16f4a30ce93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
