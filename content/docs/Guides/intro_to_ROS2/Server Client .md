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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLTR4HM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFzMpN4PWPgzqwhgX63TdAIuKBSuhLPKuHfg2%2FDFc9G2AiBiugSa%2FfhpLBgt0%2BWFiR5MhUh7eRfvFN7A0I3DMmbNoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiv3Mdf6Z85TkyKX2KtwDdbwFFbpVk27iUmhutlFTAwtrgT9X%2BgcWWeA3%2F7zS7XUqovL%2FzUqrDBUzQ2%2Bm%2BYrsMgl47WMVGbHWD1k2FG3ZimLF%2B6feV513QU4XerRC0XSgS%2Fz63PU4oFLyPOHHRukTigAdIUERB%2FU%2Bu8m3u7j3D4n3wUXdXvkUhvvGz2ZpmttqWbNe3o4PachDNN7IMBlNpW%2FIe%2B7nrSrjPCRNjkTOXh50fuAxuOHZbd6nQGKtXimVnJTGVg75sfiRbEAtgfLxUBsSlIcr6PJjoESytzQ2PqL29UIQrVv5e1CM7cFM%2B774vmgfTznS5E%2FsF94yy9BdXIvozy6yvXxiCgrdU0CD%2FFUkerxJBUMv3V34Y9dwNBNuLaudFZAzul6jDuoQis18ZWiLhq%2B14fa6cwSg4EyJD3IXNUxGqM2s5MfG2Mq47nAma0apnRx4YD1EO%2FVnehZYrNWftgLmEdnGrr%2FyTY7yRJKwpKvvkFluwBGIKaRnGsegY8HPYNO1kATIkVQ1NPL9yqMFrdkG0WZbJy%2FGeFT4QdQxiQd6c8UOdUPFQTl7%2Fmo2IH6i90g2XHpUIuMTnaVc5wNrR9MVtaelrtxhyAh8tpjnNilrBoXDrAI7rG612cV4ZFXH8XIPguUa9SMw397ovgY6pgGj2QWiMPaiLlMv4byLTizqAqGFiteaL0T126%2BY0teqYpkWk2CA%2FAfIDRcCPeE4kabfhgULzE4UfqHlka8E01ytIGVCoG8yZ3U2uv6N7J7SM50dxdEBysLmk3KGBKn4A1kia3%2Fmx9ft9RPnfluFd6sdZK2Ovv6FsV%2BKcfDf1Mnvsp%2Fc9mu5Vq6JBowI5l0tWa4JAm388uXuQ%2FTdYnJhiGwOp4nef0%2Fp&X-Amz-Signature=f0ed325948c368df8b7fc4470ebe37eb9213a3a31f4f80fb056980b337cdde48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLTR4HM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFzMpN4PWPgzqwhgX63TdAIuKBSuhLPKuHfg2%2FDFc9G2AiBiugSa%2FfhpLBgt0%2BWFiR5MhUh7eRfvFN7A0I3DMmbNoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiv3Mdf6Z85TkyKX2KtwDdbwFFbpVk27iUmhutlFTAwtrgT9X%2BgcWWeA3%2F7zS7XUqovL%2FzUqrDBUzQ2%2Bm%2BYrsMgl47WMVGbHWD1k2FG3ZimLF%2B6feV513QU4XerRC0XSgS%2Fz63PU4oFLyPOHHRukTigAdIUERB%2FU%2Bu8m3u7j3D4n3wUXdXvkUhvvGz2ZpmttqWbNe3o4PachDNN7IMBlNpW%2FIe%2B7nrSrjPCRNjkTOXh50fuAxuOHZbd6nQGKtXimVnJTGVg75sfiRbEAtgfLxUBsSlIcr6PJjoESytzQ2PqL29UIQrVv5e1CM7cFM%2B774vmgfTznS5E%2FsF94yy9BdXIvozy6yvXxiCgrdU0CD%2FFUkerxJBUMv3V34Y9dwNBNuLaudFZAzul6jDuoQis18ZWiLhq%2B14fa6cwSg4EyJD3IXNUxGqM2s5MfG2Mq47nAma0apnRx4YD1EO%2FVnehZYrNWftgLmEdnGrr%2FyTY7yRJKwpKvvkFluwBGIKaRnGsegY8HPYNO1kATIkVQ1NPL9yqMFrdkG0WZbJy%2FGeFT4QdQxiQd6c8UOdUPFQTl7%2Fmo2IH6i90g2XHpUIuMTnaVc5wNrR9MVtaelrtxhyAh8tpjnNilrBoXDrAI7rG612cV4ZFXH8XIPguUa9SMw397ovgY6pgGj2QWiMPaiLlMv4byLTizqAqGFiteaL0T126%2BY0teqYpkWk2CA%2FAfIDRcCPeE4kabfhgULzE4UfqHlka8E01ytIGVCoG8yZ3U2uv6N7J7SM50dxdEBysLmk3KGBKn4A1kia3%2Fmx9ft9RPnfluFd6sdZK2Ovv6FsV%2BKcfDf1Mnvsp%2Fc9mu5Vq6JBowI5l0tWa4JAm388uXuQ%2FTdYnJhiGwOp4nef0%2Fp&X-Amz-Signature=60aa110588ca37d3be4a6290c009d24b4b1e1c8d150bcc28cc32ea7194ee08de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLTR4HM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFzMpN4PWPgzqwhgX63TdAIuKBSuhLPKuHfg2%2FDFc9G2AiBiugSa%2FfhpLBgt0%2BWFiR5MhUh7eRfvFN7A0I3DMmbNoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiv3Mdf6Z85TkyKX2KtwDdbwFFbpVk27iUmhutlFTAwtrgT9X%2BgcWWeA3%2F7zS7XUqovL%2FzUqrDBUzQ2%2Bm%2BYrsMgl47WMVGbHWD1k2FG3ZimLF%2B6feV513QU4XerRC0XSgS%2Fz63PU4oFLyPOHHRukTigAdIUERB%2FU%2Bu8m3u7j3D4n3wUXdXvkUhvvGz2ZpmttqWbNe3o4PachDNN7IMBlNpW%2FIe%2B7nrSrjPCRNjkTOXh50fuAxuOHZbd6nQGKtXimVnJTGVg75sfiRbEAtgfLxUBsSlIcr6PJjoESytzQ2PqL29UIQrVv5e1CM7cFM%2B774vmgfTznS5E%2FsF94yy9BdXIvozy6yvXxiCgrdU0CD%2FFUkerxJBUMv3V34Y9dwNBNuLaudFZAzul6jDuoQis18ZWiLhq%2B14fa6cwSg4EyJD3IXNUxGqM2s5MfG2Mq47nAma0apnRx4YD1EO%2FVnehZYrNWftgLmEdnGrr%2FyTY7yRJKwpKvvkFluwBGIKaRnGsegY8HPYNO1kATIkVQ1NPL9yqMFrdkG0WZbJy%2FGeFT4QdQxiQd6c8UOdUPFQTl7%2Fmo2IH6i90g2XHpUIuMTnaVc5wNrR9MVtaelrtxhyAh8tpjnNilrBoXDrAI7rG612cV4ZFXH8XIPguUa9SMw397ovgY6pgGj2QWiMPaiLlMv4byLTizqAqGFiteaL0T126%2BY0teqYpkWk2CA%2FAfIDRcCPeE4kabfhgULzE4UfqHlka8E01ytIGVCoG8yZ3U2uv6N7J7SM50dxdEBysLmk3KGBKn4A1kia3%2Fmx9ft9RPnfluFd6sdZK2Ovv6FsV%2BKcfDf1Mnvsp%2Fc9mu5Vq6JBowI5l0tWa4JAm388uXuQ%2FTdYnJhiGwOp4nef0%2Fp&X-Amz-Signature=ee26e79805db7957483da899e68b0764b937bc04f4e65e9253d3fd668d37b670&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLTR4HM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFzMpN4PWPgzqwhgX63TdAIuKBSuhLPKuHfg2%2FDFc9G2AiBiugSa%2FfhpLBgt0%2BWFiR5MhUh7eRfvFN7A0I3DMmbNoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiv3Mdf6Z85TkyKX2KtwDdbwFFbpVk27iUmhutlFTAwtrgT9X%2BgcWWeA3%2F7zS7XUqovL%2FzUqrDBUzQ2%2Bm%2BYrsMgl47WMVGbHWD1k2FG3ZimLF%2B6feV513QU4XerRC0XSgS%2Fz63PU4oFLyPOHHRukTigAdIUERB%2FU%2Bu8m3u7j3D4n3wUXdXvkUhvvGz2ZpmttqWbNe3o4PachDNN7IMBlNpW%2FIe%2B7nrSrjPCRNjkTOXh50fuAxuOHZbd6nQGKtXimVnJTGVg75sfiRbEAtgfLxUBsSlIcr6PJjoESytzQ2PqL29UIQrVv5e1CM7cFM%2B774vmgfTznS5E%2FsF94yy9BdXIvozy6yvXxiCgrdU0CD%2FFUkerxJBUMv3V34Y9dwNBNuLaudFZAzul6jDuoQis18ZWiLhq%2B14fa6cwSg4EyJD3IXNUxGqM2s5MfG2Mq47nAma0apnRx4YD1EO%2FVnehZYrNWftgLmEdnGrr%2FyTY7yRJKwpKvvkFluwBGIKaRnGsegY8HPYNO1kATIkVQ1NPL9yqMFrdkG0WZbJy%2FGeFT4QdQxiQd6c8UOdUPFQTl7%2Fmo2IH6i90g2XHpUIuMTnaVc5wNrR9MVtaelrtxhyAh8tpjnNilrBoXDrAI7rG612cV4ZFXH8XIPguUa9SMw397ovgY6pgGj2QWiMPaiLlMv4byLTizqAqGFiteaL0T126%2BY0teqYpkWk2CA%2FAfIDRcCPeE4kabfhgULzE4UfqHlka8E01ytIGVCoG8yZ3U2uv6N7J7SM50dxdEBysLmk3KGBKn4A1kia3%2Fmx9ft9RPnfluFd6sdZK2Ovv6FsV%2BKcfDf1Mnvsp%2Fc9mu5Vq6JBowI5l0tWa4JAm388uXuQ%2FTdYnJhiGwOp4nef0%2Fp&X-Amz-Signature=62947c3378580e00a233d3cc3fae376e9d85754476c3ad8eeb7663a0978a4800&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLTR4HM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFzMpN4PWPgzqwhgX63TdAIuKBSuhLPKuHfg2%2FDFc9G2AiBiugSa%2FfhpLBgt0%2BWFiR5MhUh7eRfvFN7A0I3DMmbNoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiv3Mdf6Z85TkyKX2KtwDdbwFFbpVk27iUmhutlFTAwtrgT9X%2BgcWWeA3%2F7zS7XUqovL%2FzUqrDBUzQ2%2Bm%2BYrsMgl47WMVGbHWD1k2FG3ZimLF%2B6feV513QU4XerRC0XSgS%2Fz63PU4oFLyPOHHRukTigAdIUERB%2FU%2Bu8m3u7j3D4n3wUXdXvkUhvvGz2ZpmttqWbNe3o4PachDNN7IMBlNpW%2FIe%2B7nrSrjPCRNjkTOXh50fuAxuOHZbd6nQGKtXimVnJTGVg75sfiRbEAtgfLxUBsSlIcr6PJjoESytzQ2PqL29UIQrVv5e1CM7cFM%2B774vmgfTznS5E%2FsF94yy9BdXIvozy6yvXxiCgrdU0CD%2FFUkerxJBUMv3V34Y9dwNBNuLaudFZAzul6jDuoQis18ZWiLhq%2B14fa6cwSg4EyJD3IXNUxGqM2s5MfG2Mq47nAma0apnRx4YD1EO%2FVnehZYrNWftgLmEdnGrr%2FyTY7yRJKwpKvvkFluwBGIKaRnGsegY8HPYNO1kATIkVQ1NPL9yqMFrdkG0WZbJy%2FGeFT4QdQxiQd6c8UOdUPFQTl7%2Fmo2IH6i90g2XHpUIuMTnaVc5wNrR9MVtaelrtxhyAh8tpjnNilrBoXDrAI7rG612cV4ZFXH8XIPguUa9SMw397ovgY6pgGj2QWiMPaiLlMv4byLTizqAqGFiteaL0T126%2BY0teqYpkWk2CA%2FAfIDRcCPeE4kabfhgULzE4UfqHlka8E01ytIGVCoG8yZ3U2uv6N7J7SM50dxdEBysLmk3KGBKn4A1kia3%2Fmx9ft9RPnfluFd6sdZK2Ovv6FsV%2BKcfDf1Mnvsp%2Fc9mu5Vq6JBowI5l0tWa4JAm388uXuQ%2FTdYnJhiGwOp4nef0%2Fp&X-Amz-Signature=60cb54ba800d5fbdef4f56567949d4a375d96a1f942b7ed28885126fd18bbeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
