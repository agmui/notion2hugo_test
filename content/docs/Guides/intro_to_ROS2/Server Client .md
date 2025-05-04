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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSJ2RLI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCtI7%2FZHbfC7ej%2FjMN2fmq6uAcG4Jc3Ly1CHkxzu4LukwIgYWwUtCmKsBk6f3S5scyAx1VFO9MdkmAc0lADKrXRjxAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJA7v32eu1E07wcKtCrcA9uQfyYIqcJCC%2BSX%2Bppy2RDFQj9OzXvevY8Sg0Wl2o0EGpCIpH%2Bko10LUoYVceiqKo39l2y%2B2wV6D0HB5TghxrgDCyreDUFj0EvcmgNRK6Qci6FhqLY1i%2BfwqpGSihOHpZXz%2B%2FsNUETVyRbTVoKq3sh3qf2hK9iphLHttfu2dc0FgTzR4K8eSUo95yZ3Ct7HCmiafePJ%2BIDhiUciMptLmoVTrcVQUW5vUpJPL5F66gMJUE8OIZI%2Bu6GJ6GFYW6y8aPxs6aP%2B1EUQUZxdPLU%2FlGXm0SY%2BRj0FX9o6jpfVvokokulr2cgZn7%2B8J9GuWzEslTq8HUVxnTqu9iZ%2FX2WBjpur%2FSzPiwzgFrWTikdV7fp%2BANHfUCRGQy3CBjEFbSueQ37jxhvGZiWAtIxqx1%2FW5mmJEmLCO15zo9lW4hkYqCidDGDzZP888R%2B2PsJSRDbVW2rrPCfMgOdyN3jInPAUxxP7KiLk%2FqE2foaW73hekJzwn5Qqus1vEZKT30RXR1beKUpRlN%2B0z5e7divgOP8j6MIEn%2B1jVDZ24mTSqmtZDcr0Vi3g1pa%2FYIvKf2y%2FFD2X%2Bf3K2s%2BEgdeLg1nOnGbcmiEvI2VGrOLz1HKPBoN1IjJGU0jyddUE5PyGVBWzMI273sAGOqUBM%2BdZWMfmEk9%2Fh2oBmduxzNu%2FDPpA0z0dzFh7DqZBr%2Fiua%2FAeF5QqbAOynww%2B68xQ7cVBQC2mdcLtL7cyCdvuLeXxhxCmnzDAx5%2ByVxyY52tzdxkapwMd1JBsyv8RTpAm%2BBW1o8Oo5Lg3vMJXlbRZS4m26dhU%2BPjQMRyc0IFVb8V2sG6acFI7eWaHENmgMm7B%2B5rGGGfCzvjGjKdtLpdt6Nechtka&X-Amz-Signature=0c817e5eb2b1f5a2f1eae14b697d891266906b5cbdb879ab0fdac387f39506f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSJ2RLI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCtI7%2FZHbfC7ej%2FjMN2fmq6uAcG4Jc3Ly1CHkxzu4LukwIgYWwUtCmKsBk6f3S5scyAx1VFO9MdkmAc0lADKrXRjxAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJA7v32eu1E07wcKtCrcA9uQfyYIqcJCC%2BSX%2Bppy2RDFQj9OzXvevY8Sg0Wl2o0EGpCIpH%2Bko10LUoYVceiqKo39l2y%2B2wV6D0HB5TghxrgDCyreDUFj0EvcmgNRK6Qci6FhqLY1i%2BfwqpGSihOHpZXz%2B%2FsNUETVyRbTVoKq3sh3qf2hK9iphLHttfu2dc0FgTzR4K8eSUo95yZ3Ct7HCmiafePJ%2BIDhiUciMptLmoVTrcVQUW5vUpJPL5F66gMJUE8OIZI%2Bu6GJ6GFYW6y8aPxs6aP%2B1EUQUZxdPLU%2FlGXm0SY%2BRj0FX9o6jpfVvokokulr2cgZn7%2B8J9GuWzEslTq8HUVxnTqu9iZ%2FX2WBjpur%2FSzPiwzgFrWTikdV7fp%2BANHfUCRGQy3CBjEFbSueQ37jxhvGZiWAtIxqx1%2FW5mmJEmLCO15zo9lW4hkYqCidDGDzZP888R%2B2PsJSRDbVW2rrPCfMgOdyN3jInPAUxxP7KiLk%2FqE2foaW73hekJzwn5Qqus1vEZKT30RXR1beKUpRlN%2B0z5e7divgOP8j6MIEn%2B1jVDZ24mTSqmtZDcr0Vi3g1pa%2FYIvKf2y%2FFD2X%2Bf3K2s%2BEgdeLg1nOnGbcmiEvI2VGrOLz1HKPBoN1IjJGU0jyddUE5PyGVBWzMI273sAGOqUBM%2BdZWMfmEk9%2Fh2oBmduxzNu%2FDPpA0z0dzFh7DqZBr%2Fiua%2FAeF5QqbAOynww%2B68xQ7cVBQC2mdcLtL7cyCdvuLeXxhxCmnzDAx5%2ByVxyY52tzdxkapwMd1JBsyv8RTpAm%2BBW1o8Oo5Lg3vMJXlbRZS4m26dhU%2BPjQMRyc0IFVb8V2sG6acFI7eWaHENmgMm7B%2B5rGGGfCzvjGjKdtLpdt6Nechtka&X-Amz-Signature=c3663669fc2a1022911e82f3ae107a31ecb316bb456aad8eb62c2d48716fdc67&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSJ2RLI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCtI7%2FZHbfC7ej%2FjMN2fmq6uAcG4Jc3Ly1CHkxzu4LukwIgYWwUtCmKsBk6f3S5scyAx1VFO9MdkmAc0lADKrXRjxAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJA7v32eu1E07wcKtCrcA9uQfyYIqcJCC%2BSX%2Bppy2RDFQj9OzXvevY8Sg0Wl2o0EGpCIpH%2Bko10LUoYVceiqKo39l2y%2B2wV6D0HB5TghxrgDCyreDUFj0EvcmgNRK6Qci6FhqLY1i%2BfwqpGSihOHpZXz%2B%2FsNUETVyRbTVoKq3sh3qf2hK9iphLHttfu2dc0FgTzR4K8eSUo95yZ3Ct7HCmiafePJ%2BIDhiUciMptLmoVTrcVQUW5vUpJPL5F66gMJUE8OIZI%2Bu6GJ6GFYW6y8aPxs6aP%2B1EUQUZxdPLU%2FlGXm0SY%2BRj0FX9o6jpfVvokokulr2cgZn7%2B8J9GuWzEslTq8HUVxnTqu9iZ%2FX2WBjpur%2FSzPiwzgFrWTikdV7fp%2BANHfUCRGQy3CBjEFbSueQ37jxhvGZiWAtIxqx1%2FW5mmJEmLCO15zo9lW4hkYqCidDGDzZP888R%2B2PsJSRDbVW2rrPCfMgOdyN3jInPAUxxP7KiLk%2FqE2foaW73hekJzwn5Qqus1vEZKT30RXR1beKUpRlN%2B0z5e7divgOP8j6MIEn%2B1jVDZ24mTSqmtZDcr0Vi3g1pa%2FYIvKf2y%2FFD2X%2Bf3K2s%2BEgdeLg1nOnGbcmiEvI2VGrOLz1HKPBoN1IjJGU0jyddUE5PyGVBWzMI273sAGOqUBM%2BdZWMfmEk9%2Fh2oBmduxzNu%2FDPpA0z0dzFh7DqZBr%2Fiua%2FAeF5QqbAOynww%2B68xQ7cVBQC2mdcLtL7cyCdvuLeXxhxCmnzDAx5%2ByVxyY52tzdxkapwMd1JBsyv8RTpAm%2BBW1o8Oo5Lg3vMJXlbRZS4m26dhU%2BPjQMRyc0IFVb8V2sG6acFI7eWaHENmgMm7B%2B5rGGGfCzvjGjKdtLpdt6Nechtka&X-Amz-Signature=81fb94ffb28d37269a6b419abca2756b1d350de74963b00a7fac397a264b4490&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSJ2RLI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCtI7%2FZHbfC7ej%2FjMN2fmq6uAcG4Jc3Ly1CHkxzu4LukwIgYWwUtCmKsBk6f3S5scyAx1VFO9MdkmAc0lADKrXRjxAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJA7v32eu1E07wcKtCrcA9uQfyYIqcJCC%2BSX%2Bppy2RDFQj9OzXvevY8Sg0Wl2o0EGpCIpH%2Bko10LUoYVceiqKo39l2y%2B2wV6D0HB5TghxrgDCyreDUFj0EvcmgNRK6Qci6FhqLY1i%2BfwqpGSihOHpZXz%2B%2FsNUETVyRbTVoKq3sh3qf2hK9iphLHttfu2dc0FgTzR4K8eSUo95yZ3Ct7HCmiafePJ%2BIDhiUciMptLmoVTrcVQUW5vUpJPL5F66gMJUE8OIZI%2Bu6GJ6GFYW6y8aPxs6aP%2B1EUQUZxdPLU%2FlGXm0SY%2BRj0FX9o6jpfVvokokulr2cgZn7%2B8J9GuWzEslTq8HUVxnTqu9iZ%2FX2WBjpur%2FSzPiwzgFrWTikdV7fp%2BANHfUCRGQy3CBjEFbSueQ37jxhvGZiWAtIxqx1%2FW5mmJEmLCO15zo9lW4hkYqCidDGDzZP888R%2B2PsJSRDbVW2rrPCfMgOdyN3jInPAUxxP7KiLk%2FqE2foaW73hekJzwn5Qqus1vEZKT30RXR1beKUpRlN%2B0z5e7divgOP8j6MIEn%2B1jVDZ24mTSqmtZDcr0Vi3g1pa%2FYIvKf2y%2FFD2X%2Bf3K2s%2BEgdeLg1nOnGbcmiEvI2VGrOLz1HKPBoN1IjJGU0jyddUE5PyGVBWzMI273sAGOqUBM%2BdZWMfmEk9%2Fh2oBmduxzNu%2FDPpA0z0dzFh7DqZBr%2Fiua%2FAeF5QqbAOynww%2B68xQ7cVBQC2mdcLtL7cyCdvuLeXxhxCmnzDAx5%2ByVxyY52tzdxkapwMd1JBsyv8RTpAm%2BBW1o8Oo5Lg3vMJXlbRZS4m26dhU%2BPjQMRyc0IFVb8V2sG6acFI7eWaHENmgMm7B%2B5rGGGfCzvjGjKdtLpdt6Nechtka&X-Amz-Signature=b2b44b340a6b5b2951fa7a0a53fe55f6a999eca67f7b86ff5da24fd1df0e5b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSJ2RLI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCtI7%2FZHbfC7ej%2FjMN2fmq6uAcG4Jc3Ly1CHkxzu4LukwIgYWwUtCmKsBk6f3S5scyAx1VFO9MdkmAc0lADKrXRjxAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJA7v32eu1E07wcKtCrcA9uQfyYIqcJCC%2BSX%2Bppy2RDFQj9OzXvevY8Sg0Wl2o0EGpCIpH%2Bko10LUoYVceiqKo39l2y%2B2wV6D0HB5TghxrgDCyreDUFj0EvcmgNRK6Qci6FhqLY1i%2BfwqpGSihOHpZXz%2B%2FsNUETVyRbTVoKq3sh3qf2hK9iphLHttfu2dc0FgTzR4K8eSUo95yZ3Ct7HCmiafePJ%2BIDhiUciMptLmoVTrcVQUW5vUpJPL5F66gMJUE8OIZI%2Bu6GJ6GFYW6y8aPxs6aP%2B1EUQUZxdPLU%2FlGXm0SY%2BRj0FX9o6jpfVvokokulr2cgZn7%2B8J9GuWzEslTq8HUVxnTqu9iZ%2FX2WBjpur%2FSzPiwzgFrWTikdV7fp%2BANHfUCRGQy3CBjEFbSueQ37jxhvGZiWAtIxqx1%2FW5mmJEmLCO15zo9lW4hkYqCidDGDzZP888R%2B2PsJSRDbVW2rrPCfMgOdyN3jInPAUxxP7KiLk%2FqE2foaW73hekJzwn5Qqus1vEZKT30RXR1beKUpRlN%2B0z5e7divgOP8j6MIEn%2B1jVDZ24mTSqmtZDcr0Vi3g1pa%2FYIvKf2y%2FFD2X%2Bf3K2s%2BEgdeLg1nOnGbcmiEvI2VGrOLz1HKPBoN1IjJGU0jyddUE5PyGVBWzMI273sAGOqUBM%2BdZWMfmEk9%2Fh2oBmduxzNu%2FDPpA0z0dzFh7DqZBr%2Fiua%2FAeF5QqbAOynww%2B68xQ7cVBQC2mdcLtL7cyCdvuLeXxhxCmnzDAx5%2ByVxyY52tzdxkapwMd1JBsyv8RTpAm%2BBW1o8Oo5Lg3vMJXlbRZS4m26dhU%2BPjQMRyc0IFVb8V2sG6acFI7eWaHENmgMm7B%2B5rGGGfCzvjGjKdtLpdt6Nechtka&X-Amz-Signature=796de829a4eddc88b64952dc3b4b78f97e63c64f16f8a0a3fe2cd12e40f5b58c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
