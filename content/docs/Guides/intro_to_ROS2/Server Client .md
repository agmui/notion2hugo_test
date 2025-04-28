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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LVSMRD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsBTC%2BWpKBgTdlf6o5vRQs4zA21GLNZrr7deNCTjLNFAiEA2cRsT0o7mLPPhiRFXeH%2FljDYixda%2B8hg59L0w%2FgTar4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKm7lGnGnN6nM5ajESrcA81IhzPx9SEYj0%2FocknR7bhZb7uwR1YEpOR8SppN7GY%2BZX%2BJM2sbp4egM%2BEe6IaXDosxqBgNf4%2FNDNMBtbaCWYeZyloyy7fiLemNwQRZiMR%2BNuev8kPVE6HUootb4CUM6cWWAWKaMi0GVAkLnv7%2B%2FWAsaj6YuWUIy4p2TQhz4wFwccKTJYFFmCdhOp8VM2BG9PC%2BYoC0HnTKk5apTPrgnBJ4OCI9jbh5L1d36iN3Ps16sVUQAWepjf%2Fo3Vw0VRNFGMwLOTTcNnAkwRMvnO%2FPGVuaNj5w%2BqEC4B1RR%2BWjoUUglockiR0%2Fw20Z6%2FiNrOpCbr9uA5vSVr0EeV75skHOIG8ddoQaFIqfQrbuxwQ2X5aZ9KLvqvfbexsq8UxHY8oh7pwbgtWqRqZmS4v00Xe%2FMxoiwgJoszl7XDrpK8pHd%2FJIQ6a4BQP5%2F32Sr%2BFJ%2BBQK8pCu9h0g4lMYxxVVw8R249NjUlhZ3AeH1BLE60zsYVFhx0E2nBhGreWCeNWjoTiILTniJ9mLjtXUY5O3E2ZEJnprvuokavjhLds3lFl0ujQQpXeXzyvC12hHOS8RfR%2B%2BdnAE7u9E8d62SGL74ZPP4uBnVP%2FghVBT9iaLqMbNv3DPh9QjG3CYPbiEysHDMOS7vMAGOqUBkNGKznRKRPZoP7%2BG3f27Ev3qNE5mVfHmZqgAvKR%2FgUOjJe%2BPvZTNBCCWTRY6FcQUelCmqYwXHqR3jAcFMIWi3AxnePfjcpSZdQYT9dVt2k17aSgN58St1t9K1IISVaiim3w%2BT5sHomf7JLjKa1zItVriqHFvTUSdi0%2FeESnp6MHeSR1UwjnAQvrhvCR65oLFTRGqDVk0sCndVqVPXdYKmm%2BJmdAo&X-Amz-Signature=fcc634e5b4ffecbc87ca5806b6ed9bf6c2aba90e81c14fb59c6cac95ec1e3959&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LVSMRD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsBTC%2BWpKBgTdlf6o5vRQs4zA21GLNZrr7deNCTjLNFAiEA2cRsT0o7mLPPhiRFXeH%2FljDYixda%2B8hg59L0w%2FgTar4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKm7lGnGnN6nM5ajESrcA81IhzPx9SEYj0%2FocknR7bhZb7uwR1YEpOR8SppN7GY%2BZX%2BJM2sbp4egM%2BEe6IaXDosxqBgNf4%2FNDNMBtbaCWYeZyloyy7fiLemNwQRZiMR%2BNuev8kPVE6HUootb4CUM6cWWAWKaMi0GVAkLnv7%2B%2FWAsaj6YuWUIy4p2TQhz4wFwccKTJYFFmCdhOp8VM2BG9PC%2BYoC0HnTKk5apTPrgnBJ4OCI9jbh5L1d36iN3Ps16sVUQAWepjf%2Fo3Vw0VRNFGMwLOTTcNnAkwRMvnO%2FPGVuaNj5w%2BqEC4B1RR%2BWjoUUglockiR0%2Fw20Z6%2FiNrOpCbr9uA5vSVr0EeV75skHOIG8ddoQaFIqfQrbuxwQ2X5aZ9KLvqvfbexsq8UxHY8oh7pwbgtWqRqZmS4v00Xe%2FMxoiwgJoszl7XDrpK8pHd%2FJIQ6a4BQP5%2F32Sr%2BFJ%2BBQK8pCu9h0g4lMYxxVVw8R249NjUlhZ3AeH1BLE60zsYVFhx0E2nBhGreWCeNWjoTiILTniJ9mLjtXUY5O3E2ZEJnprvuokavjhLds3lFl0ujQQpXeXzyvC12hHOS8RfR%2B%2BdnAE7u9E8d62SGL74ZPP4uBnVP%2FghVBT9iaLqMbNv3DPh9QjG3CYPbiEysHDMOS7vMAGOqUBkNGKznRKRPZoP7%2BG3f27Ev3qNE5mVfHmZqgAvKR%2FgUOjJe%2BPvZTNBCCWTRY6FcQUelCmqYwXHqR3jAcFMIWi3AxnePfjcpSZdQYT9dVt2k17aSgN58St1t9K1IISVaiim3w%2BT5sHomf7JLjKa1zItVriqHFvTUSdi0%2FeESnp6MHeSR1UwjnAQvrhvCR65oLFTRGqDVk0sCndVqVPXdYKmm%2BJmdAo&X-Amz-Signature=833a552a5a9b85537f8dddf505fdc3a064a4ec1042acae6bdbd4238206721a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LVSMRD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsBTC%2BWpKBgTdlf6o5vRQs4zA21GLNZrr7deNCTjLNFAiEA2cRsT0o7mLPPhiRFXeH%2FljDYixda%2B8hg59L0w%2FgTar4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKm7lGnGnN6nM5ajESrcA81IhzPx9SEYj0%2FocknR7bhZb7uwR1YEpOR8SppN7GY%2BZX%2BJM2sbp4egM%2BEe6IaXDosxqBgNf4%2FNDNMBtbaCWYeZyloyy7fiLemNwQRZiMR%2BNuev8kPVE6HUootb4CUM6cWWAWKaMi0GVAkLnv7%2B%2FWAsaj6YuWUIy4p2TQhz4wFwccKTJYFFmCdhOp8VM2BG9PC%2BYoC0HnTKk5apTPrgnBJ4OCI9jbh5L1d36iN3Ps16sVUQAWepjf%2Fo3Vw0VRNFGMwLOTTcNnAkwRMvnO%2FPGVuaNj5w%2BqEC4B1RR%2BWjoUUglockiR0%2Fw20Z6%2FiNrOpCbr9uA5vSVr0EeV75skHOIG8ddoQaFIqfQrbuxwQ2X5aZ9KLvqvfbexsq8UxHY8oh7pwbgtWqRqZmS4v00Xe%2FMxoiwgJoszl7XDrpK8pHd%2FJIQ6a4BQP5%2F32Sr%2BFJ%2BBQK8pCu9h0g4lMYxxVVw8R249NjUlhZ3AeH1BLE60zsYVFhx0E2nBhGreWCeNWjoTiILTniJ9mLjtXUY5O3E2ZEJnprvuokavjhLds3lFl0ujQQpXeXzyvC12hHOS8RfR%2B%2BdnAE7u9E8d62SGL74ZPP4uBnVP%2FghVBT9iaLqMbNv3DPh9QjG3CYPbiEysHDMOS7vMAGOqUBkNGKznRKRPZoP7%2BG3f27Ev3qNE5mVfHmZqgAvKR%2FgUOjJe%2BPvZTNBCCWTRY6FcQUelCmqYwXHqR3jAcFMIWi3AxnePfjcpSZdQYT9dVt2k17aSgN58St1t9K1IISVaiim3w%2BT5sHomf7JLjKa1zItVriqHFvTUSdi0%2FeESnp6MHeSR1UwjnAQvrhvCR65oLFTRGqDVk0sCndVqVPXdYKmm%2BJmdAo&X-Amz-Signature=1f10fd356abc64b369cf9b60bd87730d131e112aa256ff41095e32b4aa2f65d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LVSMRD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsBTC%2BWpKBgTdlf6o5vRQs4zA21GLNZrr7deNCTjLNFAiEA2cRsT0o7mLPPhiRFXeH%2FljDYixda%2B8hg59L0w%2FgTar4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKm7lGnGnN6nM5ajESrcA81IhzPx9SEYj0%2FocknR7bhZb7uwR1YEpOR8SppN7GY%2BZX%2BJM2sbp4egM%2BEe6IaXDosxqBgNf4%2FNDNMBtbaCWYeZyloyy7fiLemNwQRZiMR%2BNuev8kPVE6HUootb4CUM6cWWAWKaMi0GVAkLnv7%2B%2FWAsaj6YuWUIy4p2TQhz4wFwccKTJYFFmCdhOp8VM2BG9PC%2BYoC0HnTKk5apTPrgnBJ4OCI9jbh5L1d36iN3Ps16sVUQAWepjf%2Fo3Vw0VRNFGMwLOTTcNnAkwRMvnO%2FPGVuaNj5w%2BqEC4B1RR%2BWjoUUglockiR0%2Fw20Z6%2FiNrOpCbr9uA5vSVr0EeV75skHOIG8ddoQaFIqfQrbuxwQ2X5aZ9KLvqvfbexsq8UxHY8oh7pwbgtWqRqZmS4v00Xe%2FMxoiwgJoszl7XDrpK8pHd%2FJIQ6a4BQP5%2F32Sr%2BFJ%2BBQK8pCu9h0g4lMYxxVVw8R249NjUlhZ3AeH1BLE60zsYVFhx0E2nBhGreWCeNWjoTiILTniJ9mLjtXUY5O3E2ZEJnprvuokavjhLds3lFl0ujQQpXeXzyvC12hHOS8RfR%2B%2BdnAE7u9E8d62SGL74ZPP4uBnVP%2FghVBT9iaLqMbNv3DPh9QjG3CYPbiEysHDMOS7vMAGOqUBkNGKznRKRPZoP7%2BG3f27Ev3qNE5mVfHmZqgAvKR%2FgUOjJe%2BPvZTNBCCWTRY6FcQUelCmqYwXHqR3jAcFMIWi3AxnePfjcpSZdQYT9dVt2k17aSgN58St1t9K1IISVaiim3w%2BT5sHomf7JLjKa1zItVriqHFvTUSdi0%2FeESnp6MHeSR1UwjnAQvrhvCR65oLFTRGqDVk0sCndVqVPXdYKmm%2BJmdAo&X-Amz-Signature=23b5747180ab3587f2b4a5724fd2ba07cbaac0e02e5372c47eed5eb48fd6f0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LVSMRD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsBTC%2BWpKBgTdlf6o5vRQs4zA21GLNZrr7deNCTjLNFAiEA2cRsT0o7mLPPhiRFXeH%2FljDYixda%2B8hg59L0w%2FgTar4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKm7lGnGnN6nM5ajESrcA81IhzPx9SEYj0%2FocknR7bhZb7uwR1YEpOR8SppN7GY%2BZX%2BJM2sbp4egM%2BEe6IaXDosxqBgNf4%2FNDNMBtbaCWYeZyloyy7fiLemNwQRZiMR%2BNuev8kPVE6HUootb4CUM6cWWAWKaMi0GVAkLnv7%2B%2FWAsaj6YuWUIy4p2TQhz4wFwccKTJYFFmCdhOp8VM2BG9PC%2BYoC0HnTKk5apTPrgnBJ4OCI9jbh5L1d36iN3Ps16sVUQAWepjf%2Fo3Vw0VRNFGMwLOTTcNnAkwRMvnO%2FPGVuaNj5w%2BqEC4B1RR%2BWjoUUglockiR0%2Fw20Z6%2FiNrOpCbr9uA5vSVr0EeV75skHOIG8ddoQaFIqfQrbuxwQ2X5aZ9KLvqvfbexsq8UxHY8oh7pwbgtWqRqZmS4v00Xe%2FMxoiwgJoszl7XDrpK8pHd%2FJIQ6a4BQP5%2F32Sr%2BFJ%2BBQK8pCu9h0g4lMYxxVVw8R249NjUlhZ3AeH1BLE60zsYVFhx0E2nBhGreWCeNWjoTiILTniJ9mLjtXUY5O3E2ZEJnprvuokavjhLds3lFl0ujQQpXeXzyvC12hHOS8RfR%2B%2BdnAE7u9E8d62SGL74ZPP4uBnVP%2FghVBT9iaLqMbNv3DPh9QjG3CYPbiEysHDMOS7vMAGOqUBkNGKznRKRPZoP7%2BG3f27Ev3qNE5mVfHmZqgAvKR%2FgUOjJe%2BPvZTNBCCWTRY6FcQUelCmqYwXHqR3jAcFMIWi3AxnePfjcpSZdQYT9dVt2k17aSgN58St1t9K1IISVaiim3w%2BT5sHomf7JLjKa1zItVriqHFvTUSdi0%2FeESnp6MHeSR1UwjnAQvrhvCR65oLFTRGqDVk0sCndVqVPXdYKmm%2BJmdAo&X-Amz-Signature=1686ad91ff4f9f93c414ab1261f77a31f80e12cc084d62d1fc3eb0573647cb26&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
