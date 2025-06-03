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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMRIUHJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF6MMkCUXyydNFjC7vP990SYY2fXgqiCx9ajsBfFaMwOAiBQ%2B1axB5YuZgrDJ0QF7hE%2BUTWkR%2FcqVOIfr%2FVAZGE6KSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMiJrK7IIdEZUq%2Fi6KKtwDfoQPhQzuIFKG%2BRsUYXkGaH2PooZ5DdxZr9c7hD%2Fe2iBBDIoBOLXMe%2F4QuRz4c5YB3Al%2FFvmt9qdg4Rdmv%2FSsd8HpHXDEw%2BqdD4kurJZUHHj8fmMNzkFCUp6BeKhlgm82mzduKVtfDYkBT%2BtAIIdCd%2Fsb5uyVQTCB9YTn03Ct7ZLbvlljBqBXCFyd5jVZs%2BQ9alWT21HhQ6pSfYXakLI1rGOIeYOJCy68O%2FpxerNWFOZy7%2BLD%2FIbCXEPttuOVFV8SBc3gBAXWgZyYdTQuEsIhCg1Ki0Diqa9eZFauAzYRvBLcVFJugKqTBIdhBeA5NhgxVrwNb0mMNU68w0hFd5iTlXIvP2CDtvuLnuB6n5kItP4b6gric4imts%2FiLu0QbE4hg0GhO2%2FxI8cN45e%2F5Metjq%2FbpktyxUiTK1Uf6u62YWHpxLD5FMHfv2%2BpPiYUO1D8biBZVI1Py3IkobtjrzYLCIh3PsR%2FX0yXQTARHLV%2BbLFSPIWD3WX7gnnEZheYfYhC5W6u09cqUktJk1cgNhKEPFsGGlrJmPUSuarvgz5BnLNwJPB5Jv88NGAkpQideBhbbc6CnwgdbRFuKtFp%2FfNaOBPCqtZGu8nLfzmwLIY0tt5%2FfbMaiCwpV%2BqYrQ8wseD8wQY6pgFW6%2FlQXZnrHGgA2Xt37L%2FLzbsbjfxTjxcZkckwmi7%2BTQ%2BVIMGQKIt6PV%2B04CEHUazZaCibwXHyrddr2PC1HZdReCEmoX62%2Fyv%2BYzrbNVT8WBdrvzpYFm81GCfByhbU%2FRSBeeGTU21WIp1rDQMzWrH%2FGZA5RvmMVX%2BpCUh6TKrmp7KTCTe1Cf3GZ5Nf1YbtfUiWM9VX9QdEkEPHfDGvfgPDPAv3DYkh&X-Amz-Signature=c179952b18f15ff3f00ac6cefabb22918d16a61fce115a28e63252ff3e8f1537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMRIUHJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF6MMkCUXyydNFjC7vP990SYY2fXgqiCx9ajsBfFaMwOAiBQ%2B1axB5YuZgrDJ0QF7hE%2BUTWkR%2FcqVOIfr%2FVAZGE6KSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMiJrK7IIdEZUq%2Fi6KKtwDfoQPhQzuIFKG%2BRsUYXkGaH2PooZ5DdxZr9c7hD%2Fe2iBBDIoBOLXMe%2F4QuRz4c5YB3Al%2FFvmt9qdg4Rdmv%2FSsd8HpHXDEw%2BqdD4kurJZUHHj8fmMNzkFCUp6BeKhlgm82mzduKVtfDYkBT%2BtAIIdCd%2Fsb5uyVQTCB9YTn03Ct7ZLbvlljBqBXCFyd5jVZs%2BQ9alWT21HhQ6pSfYXakLI1rGOIeYOJCy68O%2FpxerNWFOZy7%2BLD%2FIbCXEPttuOVFV8SBc3gBAXWgZyYdTQuEsIhCg1Ki0Diqa9eZFauAzYRvBLcVFJugKqTBIdhBeA5NhgxVrwNb0mMNU68w0hFd5iTlXIvP2CDtvuLnuB6n5kItP4b6gric4imts%2FiLu0QbE4hg0GhO2%2FxI8cN45e%2F5Metjq%2FbpktyxUiTK1Uf6u62YWHpxLD5FMHfv2%2BpPiYUO1D8biBZVI1Py3IkobtjrzYLCIh3PsR%2FX0yXQTARHLV%2BbLFSPIWD3WX7gnnEZheYfYhC5W6u09cqUktJk1cgNhKEPFsGGlrJmPUSuarvgz5BnLNwJPB5Jv88NGAkpQideBhbbc6CnwgdbRFuKtFp%2FfNaOBPCqtZGu8nLfzmwLIY0tt5%2FfbMaiCwpV%2BqYrQ8wseD8wQY6pgFW6%2FlQXZnrHGgA2Xt37L%2FLzbsbjfxTjxcZkckwmi7%2BTQ%2BVIMGQKIt6PV%2B04CEHUazZaCibwXHyrddr2PC1HZdReCEmoX62%2Fyv%2BYzrbNVT8WBdrvzpYFm81GCfByhbU%2FRSBeeGTU21WIp1rDQMzWrH%2FGZA5RvmMVX%2BpCUh6TKrmp7KTCTe1Cf3GZ5Nf1YbtfUiWM9VX9QdEkEPHfDGvfgPDPAv3DYkh&X-Amz-Signature=195282ede8b96aa50717e3fb3f861c6b892ec7a90cd3cf4b46c8b0120ed7b245&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMRIUHJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF6MMkCUXyydNFjC7vP990SYY2fXgqiCx9ajsBfFaMwOAiBQ%2B1axB5YuZgrDJ0QF7hE%2BUTWkR%2FcqVOIfr%2FVAZGE6KSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMiJrK7IIdEZUq%2Fi6KKtwDfoQPhQzuIFKG%2BRsUYXkGaH2PooZ5DdxZr9c7hD%2Fe2iBBDIoBOLXMe%2F4QuRz4c5YB3Al%2FFvmt9qdg4Rdmv%2FSsd8HpHXDEw%2BqdD4kurJZUHHj8fmMNzkFCUp6BeKhlgm82mzduKVtfDYkBT%2BtAIIdCd%2Fsb5uyVQTCB9YTn03Ct7ZLbvlljBqBXCFyd5jVZs%2BQ9alWT21HhQ6pSfYXakLI1rGOIeYOJCy68O%2FpxerNWFOZy7%2BLD%2FIbCXEPttuOVFV8SBc3gBAXWgZyYdTQuEsIhCg1Ki0Diqa9eZFauAzYRvBLcVFJugKqTBIdhBeA5NhgxVrwNb0mMNU68w0hFd5iTlXIvP2CDtvuLnuB6n5kItP4b6gric4imts%2FiLu0QbE4hg0GhO2%2FxI8cN45e%2F5Metjq%2FbpktyxUiTK1Uf6u62YWHpxLD5FMHfv2%2BpPiYUO1D8biBZVI1Py3IkobtjrzYLCIh3PsR%2FX0yXQTARHLV%2BbLFSPIWD3WX7gnnEZheYfYhC5W6u09cqUktJk1cgNhKEPFsGGlrJmPUSuarvgz5BnLNwJPB5Jv88NGAkpQideBhbbc6CnwgdbRFuKtFp%2FfNaOBPCqtZGu8nLfzmwLIY0tt5%2FfbMaiCwpV%2BqYrQ8wseD8wQY6pgFW6%2FlQXZnrHGgA2Xt37L%2FLzbsbjfxTjxcZkckwmi7%2BTQ%2BVIMGQKIt6PV%2B04CEHUazZaCibwXHyrddr2PC1HZdReCEmoX62%2Fyv%2BYzrbNVT8WBdrvzpYFm81GCfByhbU%2FRSBeeGTU21WIp1rDQMzWrH%2FGZA5RvmMVX%2BpCUh6TKrmp7KTCTe1Cf3GZ5Nf1YbtfUiWM9VX9QdEkEPHfDGvfgPDPAv3DYkh&X-Amz-Signature=8b6bb772bd9df0dde4077b7ea7394747014f01a2d5e561ba5d2dae8bd003c2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMRIUHJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF6MMkCUXyydNFjC7vP990SYY2fXgqiCx9ajsBfFaMwOAiBQ%2B1axB5YuZgrDJ0QF7hE%2BUTWkR%2FcqVOIfr%2FVAZGE6KSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMiJrK7IIdEZUq%2Fi6KKtwDfoQPhQzuIFKG%2BRsUYXkGaH2PooZ5DdxZr9c7hD%2Fe2iBBDIoBOLXMe%2F4QuRz4c5YB3Al%2FFvmt9qdg4Rdmv%2FSsd8HpHXDEw%2BqdD4kurJZUHHj8fmMNzkFCUp6BeKhlgm82mzduKVtfDYkBT%2BtAIIdCd%2Fsb5uyVQTCB9YTn03Ct7ZLbvlljBqBXCFyd5jVZs%2BQ9alWT21HhQ6pSfYXakLI1rGOIeYOJCy68O%2FpxerNWFOZy7%2BLD%2FIbCXEPttuOVFV8SBc3gBAXWgZyYdTQuEsIhCg1Ki0Diqa9eZFauAzYRvBLcVFJugKqTBIdhBeA5NhgxVrwNb0mMNU68w0hFd5iTlXIvP2CDtvuLnuB6n5kItP4b6gric4imts%2FiLu0QbE4hg0GhO2%2FxI8cN45e%2F5Metjq%2FbpktyxUiTK1Uf6u62YWHpxLD5FMHfv2%2BpPiYUO1D8biBZVI1Py3IkobtjrzYLCIh3PsR%2FX0yXQTARHLV%2BbLFSPIWD3WX7gnnEZheYfYhC5W6u09cqUktJk1cgNhKEPFsGGlrJmPUSuarvgz5BnLNwJPB5Jv88NGAkpQideBhbbc6CnwgdbRFuKtFp%2FfNaOBPCqtZGu8nLfzmwLIY0tt5%2FfbMaiCwpV%2BqYrQ8wseD8wQY6pgFW6%2FlQXZnrHGgA2Xt37L%2FLzbsbjfxTjxcZkckwmi7%2BTQ%2BVIMGQKIt6PV%2B04CEHUazZaCibwXHyrddr2PC1HZdReCEmoX62%2Fyv%2BYzrbNVT8WBdrvzpYFm81GCfByhbU%2FRSBeeGTU21WIp1rDQMzWrH%2FGZA5RvmMVX%2BpCUh6TKrmp7KTCTe1Cf3GZ5Nf1YbtfUiWM9VX9QdEkEPHfDGvfgPDPAv3DYkh&X-Amz-Signature=e807c7cb41f42925cebbfeb2b29f06dfaa20217860f61669f65deeef2172bce7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMRIUHJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF6MMkCUXyydNFjC7vP990SYY2fXgqiCx9ajsBfFaMwOAiBQ%2B1axB5YuZgrDJ0QF7hE%2BUTWkR%2FcqVOIfr%2FVAZGE6KSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMiJrK7IIdEZUq%2Fi6KKtwDfoQPhQzuIFKG%2BRsUYXkGaH2PooZ5DdxZr9c7hD%2Fe2iBBDIoBOLXMe%2F4QuRz4c5YB3Al%2FFvmt9qdg4Rdmv%2FSsd8HpHXDEw%2BqdD4kurJZUHHj8fmMNzkFCUp6BeKhlgm82mzduKVtfDYkBT%2BtAIIdCd%2Fsb5uyVQTCB9YTn03Ct7ZLbvlljBqBXCFyd5jVZs%2BQ9alWT21HhQ6pSfYXakLI1rGOIeYOJCy68O%2FpxerNWFOZy7%2BLD%2FIbCXEPttuOVFV8SBc3gBAXWgZyYdTQuEsIhCg1Ki0Diqa9eZFauAzYRvBLcVFJugKqTBIdhBeA5NhgxVrwNb0mMNU68w0hFd5iTlXIvP2CDtvuLnuB6n5kItP4b6gric4imts%2FiLu0QbE4hg0GhO2%2FxI8cN45e%2F5Metjq%2FbpktyxUiTK1Uf6u62YWHpxLD5FMHfv2%2BpPiYUO1D8biBZVI1Py3IkobtjrzYLCIh3PsR%2FX0yXQTARHLV%2BbLFSPIWD3WX7gnnEZheYfYhC5W6u09cqUktJk1cgNhKEPFsGGlrJmPUSuarvgz5BnLNwJPB5Jv88NGAkpQideBhbbc6CnwgdbRFuKtFp%2FfNaOBPCqtZGu8nLfzmwLIY0tt5%2FfbMaiCwpV%2BqYrQ8wseD8wQY6pgFW6%2FlQXZnrHGgA2Xt37L%2FLzbsbjfxTjxcZkckwmi7%2BTQ%2BVIMGQKIt6PV%2B04CEHUazZaCibwXHyrddr2PC1HZdReCEmoX62%2Fyv%2BYzrbNVT8WBdrvzpYFm81GCfByhbU%2FRSBeeGTU21WIp1rDQMzWrH%2FGZA5RvmMVX%2BpCUh6TKrmp7KTCTe1Cf3GZ5Nf1YbtfUiWM9VX9QdEkEPHfDGvfgPDPAv3DYkh&X-Amz-Signature=39f73df42d9b39cdfe66e0d805685381574f6e2cc463e1c50d1e4ad2e396a5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
