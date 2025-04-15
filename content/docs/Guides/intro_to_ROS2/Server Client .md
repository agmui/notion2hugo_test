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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PAN76X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXtm%2B2WrZ%2BmxZacsOvpiPyJJb%2BHcn%2BPuNBpwi8iFdj6AiB91X7rEwQAFUehg0yMEEkB5ddisVZb6uwfw3b8K6llUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpd9O1ugcECMbKRTIKtwDT5z0lwIRvZS6uN5R5JTOEab1e4Mok4ME8orqvNFIt5jnGRi4CRmDU%2FNYrr2e%2FTKgSNJnpbDfxlRSPOQi78UlHRPdo2ChdrbTaf7lYaAMaAPHMAzUsN%2F6xOrNIef9%2BNFf9wsdAIJfr8ocB6VFpWuAVCtERd4Cog77zPYtUPzwK9rwK%2BjmEZ5Rg2avApglskdpTahCoNTaA8QChZ2JHK%2By0KnxD5qYxKmshb024DZd2bMDG5f3CjYNutf3w9sFLJuzFHUNxJMhu%2FezOmg63aw%2BXe0uhaxK5gM4ti7MHjOL2ed3%2Fg9WFV98u%2FNK%2FSWMWk93OqKnzvYyviYn%2F4aOzV2hr3Yo8l0WeYDErGtwHbXseP8I3YwC9LB1eJIUtVJ1WkfQqrbQ8wE4oI0LG3cY6IrQVe%2BE%2B1%2BUdkUoSwlwWPx3vIQNG1VBujNAb3j6qpjSy9rVApomhQYxs1n9U61ez225Y2uBwRwo34VRrQ311hLmieCoZTJ4yVb5FrUQrGRC56Pz1coW8480JbXLQLCRm4Z4lTgnWmrzgqh2ZtCfLwUeAa1aJL3ZO4TVlb0lKjXLF9nSvFq%2F%2BcgI8mpCdj4a6meOl5ClKqvZT2ppgv55Y2W%2B2P0NirbSphs9exR%2FTckw0ov5vwY6pgFpdjrjEef536xWjc1S1EGfJgQi%2FNdvX6ALAx5LO%2FBUc0sEPMSJ8xmOtIJ%2Fus8gXsZ41VTgf7rR2czYohSTpbkr1Kb6amtj9Jq8aOfH5fi7JTeItoBQ28x8%2FaFPTQyqDSsoLajGA%2BG1xmrMxOWoIZJh%2By5tXYIetXJKkFrFs8XTUKDnhYu0wuS58n5pimrUJPk3nYjIjRJSjaahJ6w3JvLYPcfB%2BgKa&X-Amz-Signature=a20541db5029e816bbcbe8e47fa3d67e5c4f51bece509f8c524a17f433de67bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PAN76X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXtm%2B2WrZ%2BmxZacsOvpiPyJJb%2BHcn%2BPuNBpwi8iFdj6AiB91X7rEwQAFUehg0yMEEkB5ddisVZb6uwfw3b8K6llUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpd9O1ugcECMbKRTIKtwDT5z0lwIRvZS6uN5R5JTOEab1e4Mok4ME8orqvNFIt5jnGRi4CRmDU%2FNYrr2e%2FTKgSNJnpbDfxlRSPOQi78UlHRPdo2ChdrbTaf7lYaAMaAPHMAzUsN%2F6xOrNIef9%2BNFf9wsdAIJfr8ocB6VFpWuAVCtERd4Cog77zPYtUPzwK9rwK%2BjmEZ5Rg2avApglskdpTahCoNTaA8QChZ2JHK%2By0KnxD5qYxKmshb024DZd2bMDG5f3CjYNutf3w9sFLJuzFHUNxJMhu%2FezOmg63aw%2BXe0uhaxK5gM4ti7MHjOL2ed3%2Fg9WFV98u%2FNK%2FSWMWk93OqKnzvYyviYn%2F4aOzV2hr3Yo8l0WeYDErGtwHbXseP8I3YwC9LB1eJIUtVJ1WkfQqrbQ8wE4oI0LG3cY6IrQVe%2BE%2B1%2BUdkUoSwlwWPx3vIQNG1VBujNAb3j6qpjSy9rVApomhQYxs1n9U61ez225Y2uBwRwo34VRrQ311hLmieCoZTJ4yVb5FrUQrGRC56Pz1coW8480JbXLQLCRm4Z4lTgnWmrzgqh2ZtCfLwUeAa1aJL3ZO4TVlb0lKjXLF9nSvFq%2F%2BcgI8mpCdj4a6meOl5ClKqvZT2ppgv55Y2W%2B2P0NirbSphs9exR%2FTckw0ov5vwY6pgFpdjrjEef536xWjc1S1EGfJgQi%2FNdvX6ALAx5LO%2FBUc0sEPMSJ8xmOtIJ%2Fus8gXsZ41VTgf7rR2czYohSTpbkr1Kb6amtj9Jq8aOfH5fi7JTeItoBQ28x8%2FaFPTQyqDSsoLajGA%2BG1xmrMxOWoIZJh%2By5tXYIetXJKkFrFs8XTUKDnhYu0wuS58n5pimrUJPk3nYjIjRJSjaahJ6w3JvLYPcfB%2BgKa&X-Amz-Signature=9ed7df5554256c4a17aa4f78f48fb2e3679b095f592253df9a56395f804cf46c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PAN76X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXtm%2B2WrZ%2BmxZacsOvpiPyJJb%2BHcn%2BPuNBpwi8iFdj6AiB91X7rEwQAFUehg0yMEEkB5ddisVZb6uwfw3b8K6llUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpd9O1ugcECMbKRTIKtwDT5z0lwIRvZS6uN5R5JTOEab1e4Mok4ME8orqvNFIt5jnGRi4CRmDU%2FNYrr2e%2FTKgSNJnpbDfxlRSPOQi78UlHRPdo2ChdrbTaf7lYaAMaAPHMAzUsN%2F6xOrNIef9%2BNFf9wsdAIJfr8ocB6VFpWuAVCtERd4Cog77zPYtUPzwK9rwK%2BjmEZ5Rg2avApglskdpTahCoNTaA8QChZ2JHK%2By0KnxD5qYxKmshb024DZd2bMDG5f3CjYNutf3w9sFLJuzFHUNxJMhu%2FezOmg63aw%2BXe0uhaxK5gM4ti7MHjOL2ed3%2Fg9WFV98u%2FNK%2FSWMWk93OqKnzvYyviYn%2F4aOzV2hr3Yo8l0WeYDErGtwHbXseP8I3YwC9LB1eJIUtVJ1WkfQqrbQ8wE4oI0LG3cY6IrQVe%2BE%2B1%2BUdkUoSwlwWPx3vIQNG1VBujNAb3j6qpjSy9rVApomhQYxs1n9U61ez225Y2uBwRwo34VRrQ311hLmieCoZTJ4yVb5FrUQrGRC56Pz1coW8480JbXLQLCRm4Z4lTgnWmrzgqh2ZtCfLwUeAa1aJL3ZO4TVlb0lKjXLF9nSvFq%2F%2BcgI8mpCdj4a6meOl5ClKqvZT2ppgv55Y2W%2B2P0NirbSphs9exR%2FTckw0ov5vwY6pgFpdjrjEef536xWjc1S1EGfJgQi%2FNdvX6ALAx5LO%2FBUc0sEPMSJ8xmOtIJ%2Fus8gXsZ41VTgf7rR2czYohSTpbkr1Kb6amtj9Jq8aOfH5fi7JTeItoBQ28x8%2FaFPTQyqDSsoLajGA%2BG1xmrMxOWoIZJh%2By5tXYIetXJKkFrFs8XTUKDnhYu0wuS58n5pimrUJPk3nYjIjRJSjaahJ6w3JvLYPcfB%2BgKa&X-Amz-Signature=bf12994113f78a13d2026118b74041f4d2330aa0ade0c96e7cafc346965bc0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PAN76X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXtm%2B2WrZ%2BmxZacsOvpiPyJJb%2BHcn%2BPuNBpwi8iFdj6AiB91X7rEwQAFUehg0yMEEkB5ddisVZb6uwfw3b8K6llUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpd9O1ugcECMbKRTIKtwDT5z0lwIRvZS6uN5R5JTOEab1e4Mok4ME8orqvNFIt5jnGRi4CRmDU%2FNYrr2e%2FTKgSNJnpbDfxlRSPOQi78UlHRPdo2ChdrbTaf7lYaAMaAPHMAzUsN%2F6xOrNIef9%2BNFf9wsdAIJfr8ocB6VFpWuAVCtERd4Cog77zPYtUPzwK9rwK%2BjmEZ5Rg2avApglskdpTahCoNTaA8QChZ2JHK%2By0KnxD5qYxKmshb024DZd2bMDG5f3CjYNutf3w9sFLJuzFHUNxJMhu%2FezOmg63aw%2BXe0uhaxK5gM4ti7MHjOL2ed3%2Fg9WFV98u%2FNK%2FSWMWk93OqKnzvYyviYn%2F4aOzV2hr3Yo8l0WeYDErGtwHbXseP8I3YwC9LB1eJIUtVJ1WkfQqrbQ8wE4oI0LG3cY6IrQVe%2BE%2B1%2BUdkUoSwlwWPx3vIQNG1VBujNAb3j6qpjSy9rVApomhQYxs1n9U61ez225Y2uBwRwo34VRrQ311hLmieCoZTJ4yVb5FrUQrGRC56Pz1coW8480JbXLQLCRm4Z4lTgnWmrzgqh2ZtCfLwUeAa1aJL3ZO4TVlb0lKjXLF9nSvFq%2F%2BcgI8mpCdj4a6meOl5ClKqvZT2ppgv55Y2W%2B2P0NirbSphs9exR%2FTckw0ov5vwY6pgFpdjrjEef536xWjc1S1EGfJgQi%2FNdvX6ALAx5LO%2FBUc0sEPMSJ8xmOtIJ%2Fus8gXsZ41VTgf7rR2czYohSTpbkr1Kb6amtj9Jq8aOfH5fi7JTeItoBQ28x8%2FaFPTQyqDSsoLajGA%2BG1xmrMxOWoIZJh%2By5tXYIetXJKkFrFs8XTUKDnhYu0wuS58n5pimrUJPk3nYjIjRJSjaahJ6w3JvLYPcfB%2BgKa&X-Amz-Signature=561966b513993b392d7ed34d0d3bc4c76212743dd81c6ecaecaf18ce06071009&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PAN76X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXtm%2B2WrZ%2BmxZacsOvpiPyJJb%2BHcn%2BPuNBpwi8iFdj6AiB91X7rEwQAFUehg0yMEEkB5ddisVZb6uwfw3b8K6llUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpd9O1ugcECMbKRTIKtwDT5z0lwIRvZS6uN5R5JTOEab1e4Mok4ME8orqvNFIt5jnGRi4CRmDU%2FNYrr2e%2FTKgSNJnpbDfxlRSPOQi78UlHRPdo2ChdrbTaf7lYaAMaAPHMAzUsN%2F6xOrNIef9%2BNFf9wsdAIJfr8ocB6VFpWuAVCtERd4Cog77zPYtUPzwK9rwK%2BjmEZ5Rg2avApglskdpTahCoNTaA8QChZ2JHK%2By0KnxD5qYxKmshb024DZd2bMDG5f3CjYNutf3w9sFLJuzFHUNxJMhu%2FezOmg63aw%2BXe0uhaxK5gM4ti7MHjOL2ed3%2Fg9WFV98u%2FNK%2FSWMWk93OqKnzvYyviYn%2F4aOzV2hr3Yo8l0WeYDErGtwHbXseP8I3YwC9LB1eJIUtVJ1WkfQqrbQ8wE4oI0LG3cY6IrQVe%2BE%2B1%2BUdkUoSwlwWPx3vIQNG1VBujNAb3j6qpjSy9rVApomhQYxs1n9U61ez225Y2uBwRwo34VRrQ311hLmieCoZTJ4yVb5FrUQrGRC56Pz1coW8480JbXLQLCRm4Z4lTgnWmrzgqh2ZtCfLwUeAa1aJL3ZO4TVlb0lKjXLF9nSvFq%2F%2BcgI8mpCdj4a6meOl5ClKqvZT2ppgv55Y2W%2B2P0NirbSphs9exR%2FTckw0ov5vwY6pgFpdjrjEef536xWjc1S1EGfJgQi%2FNdvX6ALAx5LO%2FBUc0sEPMSJ8xmOtIJ%2Fus8gXsZ41VTgf7rR2czYohSTpbkr1Kb6amtj9Jq8aOfH5fi7JTeItoBQ28x8%2FaFPTQyqDSsoLajGA%2BG1xmrMxOWoIZJh%2By5tXYIetXJKkFrFs8XTUKDnhYu0wuS58n5pimrUJPk3nYjIjRJSjaahJ6w3JvLYPcfB%2BgKa&X-Amz-Signature=7431b54e83715adb796d8089e83617b898803db30e455a368155ffd8eb7110ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
