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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHKY6F7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAdDy6ScfDE%2BFoAvaNQTvas6hrTq6Ubpv%2BYa8syf2F6mAiEA2%2FzR1CelraEynthuRVCfxdKvX0Vfy9xfJZXKB5izxdsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIglUilFnfC39xkCzircA503if0b%2BZGO1wUGizJO9OW7jSFaEcKt5jmGOaFgI2L6XyFy1Lzr32hIExCMbntVyS4GvgUA5k9msPRMfRQB7N9lyi8w126eYDXYOmXtKTR5bVGMUyl%2FvxPXi%2FFeUrJN6DbWLZWn2ZJqqY%2FGr%2BMk%2FHq9EUzAV8BvqxGCMcT9FtyfIo9Pm2pN2UbBiC4ZgTEmNZjkvHREbY8T3eXexCnAFHgfcjlXPMmmdbBfSWZiNYn6at0uNTydmJTzyRJQUN9NrRd%2BkmYLGSD8XYiLcfhwDX1hj8yoqkP1uM%2FKyPF%2B90iTY1aoQfYKEFxhb3gb1kxFil6uZ6sxAcx8T0eZ7OTxy2iE2Ty89ef2x61ZlOapuXiq95EmWpQCLgcUlxP0pHVOb58YDlbFUayKFXOiJi2behV%2FJE4pGxCB9DxhjYTA8zE%2BWVYBIIcNcd%2B8VL3MfWPjQtq%2B%2FN7ztpUzZjz2R7yJr5FmGkeevbAMeboBTLyQ%2B%2FmSVOuOdguscCZyS%2F1PzXcMUxOr47qtTnXTcpE3ruowE5gUpO6I0IoT5y54MmJtEJWzVS2V4W4ZET7%2BGx5BzAgUq8%2B5YGqtH2c9vqoQmng%2Fy9sE6KD5jtzmCahmnAKmdlldp7kWADJQ0mDUXgaZMKXr28AGOqUB2WNWKg3%2FptfnCaappzEmpTPTs66yecUmwrWYb5%2FDnbiD%2BU1hZigAwPblAZ%2FvJrPTYGPjV6dGQTBUExaQwN5rUJhLrcQsX0xaOnK%2BD7UuwbLFUTCfWBZHvM2CGW%2FDlN7SE8sY%2FlCz7VYGttoWWEBpiRhmNdbSYnShjE8K%2BliqMW9YQKTiSF58FD0P7FwmgBn6SCEO2CIVPgb0uvUMmHI%2BLiHeS2sM&X-Amz-Signature=bcb5b362acf08606f8bd7ccd1fa604e41b3c786492102c1bf60ac3ab2e3316e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHKY6F7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAdDy6ScfDE%2BFoAvaNQTvas6hrTq6Ubpv%2BYa8syf2F6mAiEA2%2FzR1CelraEynthuRVCfxdKvX0Vfy9xfJZXKB5izxdsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIglUilFnfC39xkCzircA503if0b%2BZGO1wUGizJO9OW7jSFaEcKt5jmGOaFgI2L6XyFy1Lzr32hIExCMbntVyS4GvgUA5k9msPRMfRQB7N9lyi8w126eYDXYOmXtKTR5bVGMUyl%2FvxPXi%2FFeUrJN6DbWLZWn2ZJqqY%2FGr%2BMk%2FHq9EUzAV8BvqxGCMcT9FtyfIo9Pm2pN2UbBiC4ZgTEmNZjkvHREbY8T3eXexCnAFHgfcjlXPMmmdbBfSWZiNYn6at0uNTydmJTzyRJQUN9NrRd%2BkmYLGSD8XYiLcfhwDX1hj8yoqkP1uM%2FKyPF%2B90iTY1aoQfYKEFxhb3gb1kxFil6uZ6sxAcx8T0eZ7OTxy2iE2Ty89ef2x61ZlOapuXiq95EmWpQCLgcUlxP0pHVOb58YDlbFUayKFXOiJi2behV%2FJE4pGxCB9DxhjYTA8zE%2BWVYBIIcNcd%2B8VL3MfWPjQtq%2B%2FN7ztpUzZjz2R7yJr5FmGkeevbAMeboBTLyQ%2B%2FmSVOuOdguscCZyS%2F1PzXcMUxOr47qtTnXTcpE3ruowE5gUpO6I0IoT5y54MmJtEJWzVS2V4W4ZET7%2BGx5BzAgUq8%2B5YGqtH2c9vqoQmng%2Fy9sE6KD5jtzmCahmnAKmdlldp7kWADJQ0mDUXgaZMKXr28AGOqUB2WNWKg3%2FptfnCaappzEmpTPTs66yecUmwrWYb5%2FDnbiD%2BU1hZigAwPblAZ%2FvJrPTYGPjV6dGQTBUExaQwN5rUJhLrcQsX0xaOnK%2BD7UuwbLFUTCfWBZHvM2CGW%2FDlN7SE8sY%2FlCz7VYGttoWWEBpiRhmNdbSYnShjE8K%2BliqMW9YQKTiSF58FD0P7FwmgBn6SCEO2CIVPgb0uvUMmHI%2BLiHeS2sM&X-Amz-Signature=4fecfb979c9b7fec9a83575fee8d29b6afb3804672163c075491f0307e717549&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHKY6F7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAdDy6ScfDE%2BFoAvaNQTvas6hrTq6Ubpv%2BYa8syf2F6mAiEA2%2FzR1CelraEynthuRVCfxdKvX0Vfy9xfJZXKB5izxdsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIglUilFnfC39xkCzircA503if0b%2BZGO1wUGizJO9OW7jSFaEcKt5jmGOaFgI2L6XyFy1Lzr32hIExCMbntVyS4GvgUA5k9msPRMfRQB7N9lyi8w126eYDXYOmXtKTR5bVGMUyl%2FvxPXi%2FFeUrJN6DbWLZWn2ZJqqY%2FGr%2BMk%2FHq9EUzAV8BvqxGCMcT9FtyfIo9Pm2pN2UbBiC4ZgTEmNZjkvHREbY8T3eXexCnAFHgfcjlXPMmmdbBfSWZiNYn6at0uNTydmJTzyRJQUN9NrRd%2BkmYLGSD8XYiLcfhwDX1hj8yoqkP1uM%2FKyPF%2B90iTY1aoQfYKEFxhb3gb1kxFil6uZ6sxAcx8T0eZ7OTxy2iE2Ty89ef2x61ZlOapuXiq95EmWpQCLgcUlxP0pHVOb58YDlbFUayKFXOiJi2behV%2FJE4pGxCB9DxhjYTA8zE%2BWVYBIIcNcd%2B8VL3MfWPjQtq%2B%2FN7ztpUzZjz2R7yJr5FmGkeevbAMeboBTLyQ%2B%2FmSVOuOdguscCZyS%2F1PzXcMUxOr47qtTnXTcpE3ruowE5gUpO6I0IoT5y54MmJtEJWzVS2V4W4ZET7%2BGx5BzAgUq8%2B5YGqtH2c9vqoQmng%2Fy9sE6KD5jtzmCahmnAKmdlldp7kWADJQ0mDUXgaZMKXr28AGOqUB2WNWKg3%2FptfnCaappzEmpTPTs66yecUmwrWYb5%2FDnbiD%2BU1hZigAwPblAZ%2FvJrPTYGPjV6dGQTBUExaQwN5rUJhLrcQsX0xaOnK%2BD7UuwbLFUTCfWBZHvM2CGW%2FDlN7SE8sY%2FlCz7VYGttoWWEBpiRhmNdbSYnShjE8K%2BliqMW9YQKTiSF58FD0P7FwmgBn6SCEO2CIVPgb0uvUMmHI%2BLiHeS2sM&X-Amz-Signature=ce310943b32163cdf023617691a0faeaf703fefaeab6daa4245ccf1566396c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHKY6F7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAdDy6ScfDE%2BFoAvaNQTvas6hrTq6Ubpv%2BYa8syf2F6mAiEA2%2FzR1CelraEynthuRVCfxdKvX0Vfy9xfJZXKB5izxdsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIglUilFnfC39xkCzircA503if0b%2BZGO1wUGizJO9OW7jSFaEcKt5jmGOaFgI2L6XyFy1Lzr32hIExCMbntVyS4GvgUA5k9msPRMfRQB7N9lyi8w126eYDXYOmXtKTR5bVGMUyl%2FvxPXi%2FFeUrJN6DbWLZWn2ZJqqY%2FGr%2BMk%2FHq9EUzAV8BvqxGCMcT9FtyfIo9Pm2pN2UbBiC4ZgTEmNZjkvHREbY8T3eXexCnAFHgfcjlXPMmmdbBfSWZiNYn6at0uNTydmJTzyRJQUN9NrRd%2BkmYLGSD8XYiLcfhwDX1hj8yoqkP1uM%2FKyPF%2B90iTY1aoQfYKEFxhb3gb1kxFil6uZ6sxAcx8T0eZ7OTxy2iE2Ty89ef2x61ZlOapuXiq95EmWpQCLgcUlxP0pHVOb58YDlbFUayKFXOiJi2behV%2FJE4pGxCB9DxhjYTA8zE%2BWVYBIIcNcd%2B8VL3MfWPjQtq%2B%2FN7ztpUzZjz2R7yJr5FmGkeevbAMeboBTLyQ%2B%2FmSVOuOdguscCZyS%2F1PzXcMUxOr47qtTnXTcpE3ruowE5gUpO6I0IoT5y54MmJtEJWzVS2V4W4ZET7%2BGx5BzAgUq8%2B5YGqtH2c9vqoQmng%2Fy9sE6KD5jtzmCahmnAKmdlldp7kWADJQ0mDUXgaZMKXr28AGOqUB2WNWKg3%2FptfnCaappzEmpTPTs66yecUmwrWYb5%2FDnbiD%2BU1hZigAwPblAZ%2FvJrPTYGPjV6dGQTBUExaQwN5rUJhLrcQsX0xaOnK%2BD7UuwbLFUTCfWBZHvM2CGW%2FDlN7SE8sY%2FlCz7VYGttoWWEBpiRhmNdbSYnShjE8K%2BliqMW9YQKTiSF58FD0P7FwmgBn6SCEO2CIVPgb0uvUMmHI%2BLiHeS2sM&X-Amz-Signature=85bbf02068dad37775cf90e9085b413929e09bf133bc2e011426da412db9c66f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHKY6F7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAdDy6ScfDE%2BFoAvaNQTvas6hrTq6Ubpv%2BYa8syf2F6mAiEA2%2FzR1CelraEynthuRVCfxdKvX0Vfy9xfJZXKB5izxdsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIglUilFnfC39xkCzircA503if0b%2BZGO1wUGizJO9OW7jSFaEcKt5jmGOaFgI2L6XyFy1Lzr32hIExCMbntVyS4GvgUA5k9msPRMfRQB7N9lyi8w126eYDXYOmXtKTR5bVGMUyl%2FvxPXi%2FFeUrJN6DbWLZWn2ZJqqY%2FGr%2BMk%2FHq9EUzAV8BvqxGCMcT9FtyfIo9Pm2pN2UbBiC4ZgTEmNZjkvHREbY8T3eXexCnAFHgfcjlXPMmmdbBfSWZiNYn6at0uNTydmJTzyRJQUN9NrRd%2BkmYLGSD8XYiLcfhwDX1hj8yoqkP1uM%2FKyPF%2B90iTY1aoQfYKEFxhb3gb1kxFil6uZ6sxAcx8T0eZ7OTxy2iE2Ty89ef2x61ZlOapuXiq95EmWpQCLgcUlxP0pHVOb58YDlbFUayKFXOiJi2behV%2FJE4pGxCB9DxhjYTA8zE%2BWVYBIIcNcd%2B8VL3MfWPjQtq%2B%2FN7ztpUzZjz2R7yJr5FmGkeevbAMeboBTLyQ%2B%2FmSVOuOdguscCZyS%2F1PzXcMUxOr47qtTnXTcpE3ruowE5gUpO6I0IoT5y54MmJtEJWzVS2V4W4ZET7%2BGx5BzAgUq8%2B5YGqtH2c9vqoQmng%2Fy9sE6KD5jtzmCahmnAKmdlldp7kWADJQ0mDUXgaZMKXr28AGOqUB2WNWKg3%2FptfnCaappzEmpTPTs66yecUmwrWYb5%2FDnbiD%2BU1hZigAwPblAZ%2FvJrPTYGPjV6dGQTBUExaQwN5rUJhLrcQsX0xaOnK%2BD7UuwbLFUTCfWBZHvM2CGW%2FDlN7SE8sY%2FlCz7VYGttoWWEBpiRhmNdbSYnShjE8K%2BliqMW9YQKTiSF58FD0P7FwmgBn6SCEO2CIVPgb0uvUMmHI%2BLiHeS2sM&X-Amz-Signature=43423e40aa689d2c75a4a6815526f50fa05dcc4669e71963beee9b9c81a9dbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
