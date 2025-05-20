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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWKGOPE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2nUEizeFDXX%2FCGwJ6yNCl%2BGYSpuzTe9xyLWWqpGRAIgF3aq9nMks3SFlsy6mm9Qbcckq79Fq7QKOVMpf3%2BO1C8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5tmlXUfZ3cLARfhyrcA15yzdCP%2F%2B2GFDO3mulZnz7%2BDtk%2FMyGfDdBH%2FRywFmEj6cGqhfneFKNAzU5VmgpyooNLY1Dbe8jTIQFSFFYfORreZgkrL9cnrfr2L3QqaLmOC05L%2BpiGXbs61rJhwIpI3qLBVd54hMCyBVq9LWIxvMpjmuzmtXQDgakBlZhFKOYByOmwIM5Te8zaIo1LNq0DHoMQMws34Hj00p9VZr2807jU8KfYAlmePtQSELIH4Gb2PnwdsnQGk8AVkbGtlqBvyBNbIvZ3Szms7XkwDSpmlt5oHfGD9qTUgX9XXHqudZjh1yg2%2FlnKI%2FxyyjaZcBDzR7Nm3lKVpDL2pWL13U5nWmbz%2FYr8L4jUZ8bSkSqI0xIpkQ2%2FqkxEU4PrxHZPkGdC47UsO%2B7OY6cLtTpWLOVlQNOkbt6qjm%2Bx2bd6XRE1zFnrou2SGphmDNy5ZDo5xhXUcSkkX2y1U0GHwMLMU8F1kNiS9qiWbF8YW1lThfKURvFr0zV4hYlwMPlmNhAZWseK%2B0n%2BvwaLioOvrB78xYp0taXcS6KgNF01DugxsR2IzYBSkj%2Fc4yPSFkH%2BB13T96aiqRQW1R0WFzIhNQ9aai6cvbJkGfMnzjkjNvdedChI3Jqt4hFEZh80kam5t%2BCEMLWtscEGOqUBWuXJ%2BUofstARa31O353lJQCWrADxrP%2F0%2BjyBH%2FRHozXJ4uVCNj7Y491ViKyahjkIgCXiMc7gDKaLj%2FbrgFCRnwUHLvYejZarrbMCdVuH%2BdhQTE8ZvCe3iekInQMcpR6bZBl%2FDqXpk0ITeFKfplq2hmNXeNfyK%2BHhTJP9Qz%2FgYKy9H4LoGCv%2FRUGz9wdbCTA%2FubRiDqL8A1OyAG8ztvjafbb%2F02jw&X-Amz-Signature=9a3ac9db4168ab9965eb8d457d4e9f52fb37b1c8b4c2cacc31a742b42e81684f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWKGOPE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2nUEizeFDXX%2FCGwJ6yNCl%2BGYSpuzTe9xyLWWqpGRAIgF3aq9nMks3SFlsy6mm9Qbcckq79Fq7QKOVMpf3%2BO1C8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5tmlXUfZ3cLARfhyrcA15yzdCP%2F%2B2GFDO3mulZnz7%2BDtk%2FMyGfDdBH%2FRywFmEj6cGqhfneFKNAzU5VmgpyooNLY1Dbe8jTIQFSFFYfORreZgkrL9cnrfr2L3QqaLmOC05L%2BpiGXbs61rJhwIpI3qLBVd54hMCyBVq9LWIxvMpjmuzmtXQDgakBlZhFKOYByOmwIM5Te8zaIo1LNq0DHoMQMws34Hj00p9VZr2807jU8KfYAlmePtQSELIH4Gb2PnwdsnQGk8AVkbGtlqBvyBNbIvZ3Szms7XkwDSpmlt5oHfGD9qTUgX9XXHqudZjh1yg2%2FlnKI%2FxyyjaZcBDzR7Nm3lKVpDL2pWL13U5nWmbz%2FYr8L4jUZ8bSkSqI0xIpkQ2%2FqkxEU4PrxHZPkGdC47UsO%2B7OY6cLtTpWLOVlQNOkbt6qjm%2Bx2bd6XRE1zFnrou2SGphmDNy5ZDo5xhXUcSkkX2y1U0GHwMLMU8F1kNiS9qiWbF8YW1lThfKURvFr0zV4hYlwMPlmNhAZWseK%2B0n%2BvwaLioOvrB78xYp0taXcS6KgNF01DugxsR2IzYBSkj%2Fc4yPSFkH%2BB13T96aiqRQW1R0WFzIhNQ9aai6cvbJkGfMnzjkjNvdedChI3Jqt4hFEZh80kam5t%2BCEMLWtscEGOqUBWuXJ%2BUofstARa31O353lJQCWrADxrP%2F0%2BjyBH%2FRHozXJ4uVCNj7Y491ViKyahjkIgCXiMc7gDKaLj%2FbrgFCRnwUHLvYejZarrbMCdVuH%2BdhQTE8ZvCe3iekInQMcpR6bZBl%2FDqXpk0ITeFKfplq2hmNXeNfyK%2BHhTJP9Qz%2FgYKy9H4LoGCv%2FRUGz9wdbCTA%2FubRiDqL8A1OyAG8ztvjafbb%2F02jw&X-Amz-Signature=a5030d70e1623dba9444027df0984cd2c5117044a86a707b3e3bd1f5c725241d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWKGOPE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2nUEizeFDXX%2FCGwJ6yNCl%2BGYSpuzTe9xyLWWqpGRAIgF3aq9nMks3SFlsy6mm9Qbcckq79Fq7QKOVMpf3%2BO1C8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5tmlXUfZ3cLARfhyrcA15yzdCP%2F%2B2GFDO3mulZnz7%2BDtk%2FMyGfDdBH%2FRywFmEj6cGqhfneFKNAzU5VmgpyooNLY1Dbe8jTIQFSFFYfORreZgkrL9cnrfr2L3QqaLmOC05L%2BpiGXbs61rJhwIpI3qLBVd54hMCyBVq9LWIxvMpjmuzmtXQDgakBlZhFKOYByOmwIM5Te8zaIo1LNq0DHoMQMws34Hj00p9VZr2807jU8KfYAlmePtQSELIH4Gb2PnwdsnQGk8AVkbGtlqBvyBNbIvZ3Szms7XkwDSpmlt5oHfGD9qTUgX9XXHqudZjh1yg2%2FlnKI%2FxyyjaZcBDzR7Nm3lKVpDL2pWL13U5nWmbz%2FYr8L4jUZ8bSkSqI0xIpkQ2%2FqkxEU4PrxHZPkGdC47UsO%2B7OY6cLtTpWLOVlQNOkbt6qjm%2Bx2bd6XRE1zFnrou2SGphmDNy5ZDo5xhXUcSkkX2y1U0GHwMLMU8F1kNiS9qiWbF8YW1lThfKURvFr0zV4hYlwMPlmNhAZWseK%2B0n%2BvwaLioOvrB78xYp0taXcS6KgNF01DugxsR2IzYBSkj%2Fc4yPSFkH%2BB13T96aiqRQW1R0WFzIhNQ9aai6cvbJkGfMnzjkjNvdedChI3Jqt4hFEZh80kam5t%2BCEMLWtscEGOqUBWuXJ%2BUofstARa31O353lJQCWrADxrP%2F0%2BjyBH%2FRHozXJ4uVCNj7Y491ViKyahjkIgCXiMc7gDKaLj%2FbrgFCRnwUHLvYejZarrbMCdVuH%2BdhQTE8ZvCe3iekInQMcpR6bZBl%2FDqXpk0ITeFKfplq2hmNXeNfyK%2BHhTJP9Qz%2FgYKy9H4LoGCv%2FRUGz9wdbCTA%2FubRiDqL8A1OyAG8ztvjafbb%2F02jw&X-Amz-Signature=09774dec050d4c0f017fffeb7bc21aa5d63150cebc587e4316305a0f36c56132&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWKGOPE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2nUEizeFDXX%2FCGwJ6yNCl%2BGYSpuzTe9xyLWWqpGRAIgF3aq9nMks3SFlsy6mm9Qbcckq79Fq7QKOVMpf3%2BO1C8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5tmlXUfZ3cLARfhyrcA15yzdCP%2F%2B2GFDO3mulZnz7%2BDtk%2FMyGfDdBH%2FRywFmEj6cGqhfneFKNAzU5VmgpyooNLY1Dbe8jTIQFSFFYfORreZgkrL9cnrfr2L3QqaLmOC05L%2BpiGXbs61rJhwIpI3qLBVd54hMCyBVq9LWIxvMpjmuzmtXQDgakBlZhFKOYByOmwIM5Te8zaIo1LNq0DHoMQMws34Hj00p9VZr2807jU8KfYAlmePtQSELIH4Gb2PnwdsnQGk8AVkbGtlqBvyBNbIvZ3Szms7XkwDSpmlt5oHfGD9qTUgX9XXHqudZjh1yg2%2FlnKI%2FxyyjaZcBDzR7Nm3lKVpDL2pWL13U5nWmbz%2FYr8L4jUZ8bSkSqI0xIpkQ2%2FqkxEU4PrxHZPkGdC47UsO%2B7OY6cLtTpWLOVlQNOkbt6qjm%2Bx2bd6XRE1zFnrou2SGphmDNy5ZDo5xhXUcSkkX2y1U0GHwMLMU8F1kNiS9qiWbF8YW1lThfKURvFr0zV4hYlwMPlmNhAZWseK%2B0n%2BvwaLioOvrB78xYp0taXcS6KgNF01DugxsR2IzYBSkj%2Fc4yPSFkH%2BB13T96aiqRQW1R0WFzIhNQ9aai6cvbJkGfMnzjkjNvdedChI3Jqt4hFEZh80kam5t%2BCEMLWtscEGOqUBWuXJ%2BUofstARa31O353lJQCWrADxrP%2F0%2BjyBH%2FRHozXJ4uVCNj7Y491ViKyahjkIgCXiMc7gDKaLj%2FbrgFCRnwUHLvYejZarrbMCdVuH%2BdhQTE8ZvCe3iekInQMcpR6bZBl%2FDqXpk0ITeFKfplq2hmNXeNfyK%2BHhTJP9Qz%2FgYKy9H4LoGCv%2FRUGz9wdbCTA%2FubRiDqL8A1OyAG8ztvjafbb%2F02jw&X-Amz-Signature=cea500d996358aa5cfb85c94cf1ca1de5ac2eb0a3f7315d20759f6843a7b2702&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWKGOPE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2nUEizeFDXX%2FCGwJ6yNCl%2BGYSpuzTe9xyLWWqpGRAIgF3aq9nMks3SFlsy6mm9Qbcckq79Fq7QKOVMpf3%2BO1C8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5tmlXUfZ3cLARfhyrcA15yzdCP%2F%2B2GFDO3mulZnz7%2BDtk%2FMyGfDdBH%2FRywFmEj6cGqhfneFKNAzU5VmgpyooNLY1Dbe8jTIQFSFFYfORreZgkrL9cnrfr2L3QqaLmOC05L%2BpiGXbs61rJhwIpI3qLBVd54hMCyBVq9LWIxvMpjmuzmtXQDgakBlZhFKOYByOmwIM5Te8zaIo1LNq0DHoMQMws34Hj00p9VZr2807jU8KfYAlmePtQSELIH4Gb2PnwdsnQGk8AVkbGtlqBvyBNbIvZ3Szms7XkwDSpmlt5oHfGD9qTUgX9XXHqudZjh1yg2%2FlnKI%2FxyyjaZcBDzR7Nm3lKVpDL2pWL13U5nWmbz%2FYr8L4jUZ8bSkSqI0xIpkQ2%2FqkxEU4PrxHZPkGdC47UsO%2B7OY6cLtTpWLOVlQNOkbt6qjm%2Bx2bd6XRE1zFnrou2SGphmDNy5ZDo5xhXUcSkkX2y1U0GHwMLMU8F1kNiS9qiWbF8YW1lThfKURvFr0zV4hYlwMPlmNhAZWseK%2B0n%2BvwaLioOvrB78xYp0taXcS6KgNF01DugxsR2IzYBSkj%2Fc4yPSFkH%2BB13T96aiqRQW1R0WFzIhNQ9aai6cvbJkGfMnzjkjNvdedChI3Jqt4hFEZh80kam5t%2BCEMLWtscEGOqUBWuXJ%2BUofstARa31O353lJQCWrADxrP%2F0%2BjyBH%2FRHozXJ4uVCNj7Y491ViKyahjkIgCXiMc7gDKaLj%2FbrgFCRnwUHLvYejZarrbMCdVuH%2BdhQTE8ZvCe3iekInQMcpR6bZBl%2FDqXpk0ITeFKfplq2hmNXeNfyK%2BHhTJP9Qz%2FgYKy9H4LoGCv%2FRUGz9wdbCTA%2FubRiDqL8A1OyAG8ztvjafbb%2F02jw&X-Amz-Signature=50f73e3c3f8d676e7aec47d2909ac33e5c5df6f5d5a3d7ac307c9a638cce6147&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
