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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGDHRXD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6GAqUVm2l2kdIbRVmsBP1ol2ED0jtblIN6dHjFfDZrQIgB5ZAItWtQ6VlMOXZ8MN7qw3Pi%2BzJlvIqh0EM6WD4Odkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDuSxfHSKMH56t%2B6EircA75rMFqH2aTOfNDjlHroPaHKHWufEfqhgTLN1GnUc7D5SO5mzMr0dWn3oanFk8PdiNhaiWOciCG8pVigBDUgnS4Lo8PalDHBewZbN8m%2FT%2BGmKNdc2r3So%2B5X3Q6LOOkOHTM18XJEYhg3Jq9DcdztE%2BRRT0%2BhFtXv%2F464SeR3rFsEl8EnSiwz25FhLbriCH7SsxAvuUVS4hznUdHzUKt%2FpRtWSq%2Fi%2F%2F%2FVtBC4mSvGXYFPso9hjURL5M8aibtNsypl12M%2FJTJVDuo2nQn3bf2oV5qV8Icevm04j2bD6m9%2FIN1tcl8dlb%2Fu%2Bmz2cElqsm%2BJw932aOLmZYZYych%2FiPvsxdBeuZx64heVENUsK2rLFm9W%2F13fzPhCxceu%2BqnEkHuyumhVAdLoGba2iHDBGXE7hFYD%2BgcKGS7eJInPhh7FR0u%2B2y%2FhWO3NnGCk1W0DbL4s8dpIjrULmViWs6r%2BwsAa%2BJsORnHkDcGtRhQbvf2VMIIH6mgEfP9pG6%2FQfEuyEHDEhOk%2BtFfK03T46zqwClga4SAhhEo55W3eepjfAyUPXRLOJ83qrz5Wp7jMTv6Ryf4K5lEhCkeSBPivqzn%2BL%2BCbA%2B2rJKqASdLgIQs2s8xs13WoK5u%2BalIxAPCfb3nPMKCL9cQGOqUBWgNeQdwlFILoQ7jFXrHsz4ejslNMzr9JJTwnCwLoAKcoMVZQeNA%2F%2BqjvIXoCW58MamCMoTkKtR3qx9ojRFiL4rAlKRgad6IbBf%2FkIzUsQkzXVDBSc902ubGxrB9aOhlUxGlNGVDj%2F3Foc5apL6d6XABBqzwp2DFR51riJjJjohAIn%2BAc1KvMTSzT6FzOfY%2BwCiVXHNhsQyDKSt261MPQ5nRwn9Hv&X-Amz-Signature=2fb6f95dde39c9deb87e8424d693be50d9e74de4301af4df08b562de798f015f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGDHRXD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6GAqUVm2l2kdIbRVmsBP1ol2ED0jtblIN6dHjFfDZrQIgB5ZAItWtQ6VlMOXZ8MN7qw3Pi%2BzJlvIqh0EM6WD4Odkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDuSxfHSKMH56t%2B6EircA75rMFqH2aTOfNDjlHroPaHKHWufEfqhgTLN1GnUc7D5SO5mzMr0dWn3oanFk8PdiNhaiWOciCG8pVigBDUgnS4Lo8PalDHBewZbN8m%2FT%2BGmKNdc2r3So%2B5X3Q6LOOkOHTM18XJEYhg3Jq9DcdztE%2BRRT0%2BhFtXv%2F464SeR3rFsEl8EnSiwz25FhLbriCH7SsxAvuUVS4hznUdHzUKt%2FpRtWSq%2Fi%2F%2F%2FVtBC4mSvGXYFPso9hjURL5M8aibtNsypl12M%2FJTJVDuo2nQn3bf2oV5qV8Icevm04j2bD6m9%2FIN1tcl8dlb%2Fu%2Bmz2cElqsm%2BJw932aOLmZYZYych%2FiPvsxdBeuZx64heVENUsK2rLFm9W%2F13fzPhCxceu%2BqnEkHuyumhVAdLoGba2iHDBGXE7hFYD%2BgcKGS7eJInPhh7FR0u%2B2y%2FhWO3NnGCk1W0DbL4s8dpIjrULmViWs6r%2BwsAa%2BJsORnHkDcGtRhQbvf2VMIIH6mgEfP9pG6%2FQfEuyEHDEhOk%2BtFfK03T46zqwClga4SAhhEo55W3eepjfAyUPXRLOJ83qrz5Wp7jMTv6Ryf4K5lEhCkeSBPivqzn%2BL%2BCbA%2B2rJKqASdLgIQs2s8xs13WoK5u%2BalIxAPCfb3nPMKCL9cQGOqUBWgNeQdwlFILoQ7jFXrHsz4ejslNMzr9JJTwnCwLoAKcoMVZQeNA%2F%2BqjvIXoCW58MamCMoTkKtR3qx9ojRFiL4rAlKRgad6IbBf%2FkIzUsQkzXVDBSc902ubGxrB9aOhlUxGlNGVDj%2F3Foc5apL6d6XABBqzwp2DFR51riJjJjohAIn%2BAc1KvMTSzT6FzOfY%2BwCiVXHNhsQyDKSt261MPQ5nRwn9Hv&X-Amz-Signature=68966d71557266ae71c5c402737f974fa9a53b68d44d8f7fa3d88f5610c49196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGDHRXD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6GAqUVm2l2kdIbRVmsBP1ol2ED0jtblIN6dHjFfDZrQIgB5ZAItWtQ6VlMOXZ8MN7qw3Pi%2BzJlvIqh0EM6WD4Odkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDuSxfHSKMH56t%2B6EircA75rMFqH2aTOfNDjlHroPaHKHWufEfqhgTLN1GnUc7D5SO5mzMr0dWn3oanFk8PdiNhaiWOciCG8pVigBDUgnS4Lo8PalDHBewZbN8m%2FT%2BGmKNdc2r3So%2B5X3Q6LOOkOHTM18XJEYhg3Jq9DcdztE%2BRRT0%2BhFtXv%2F464SeR3rFsEl8EnSiwz25FhLbriCH7SsxAvuUVS4hznUdHzUKt%2FpRtWSq%2Fi%2F%2F%2FVtBC4mSvGXYFPso9hjURL5M8aibtNsypl12M%2FJTJVDuo2nQn3bf2oV5qV8Icevm04j2bD6m9%2FIN1tcl8dlb%2Fu%2Bmz2cElqsm%2BJw932aOLmZYZYych%2FiPvsxdBeuZx64heVENUsK2rLFm9W%2F13fzPhCxceu%2BqnEkHuyumhVAdLoGba2iHDBGXE7hFYD%2BgcKGS7eJInPhh7FR0u%2B2y%2FhWO3NnGCk1W0DbL4s8dpIjrULmViWs6r%2BwsAa%2BJsORnHkDcGtRhQbvf2VMIIH6mgEfP9pG6%2FQfEuyEHDEhOk%2BtFfK03T46zqwClga4SAhhEo55W3eepjfAyUPXRLOJ83qrz5Wp7jMTv6Ryf4K5lEhCkeSBPivqzn%2BL%2BCbA%2B2rJKqASdLgIQs2s8xs13WoK5u%2BalIxAPCfb3nPMKCL9cQGOqUBWgNeQdwlFILoQ7jFXrHsz4ejslNMzr9JJTwnCwLoAKcoMVZQeNA%2F%2BqjvIXoCW58MamCMoTkKtR3qx9ojRFiL4rAlKRgad6IbBf%2FkIzUsQkzXVDBSc902ubGxrB9aOhlUxGlNGVDj%2F3Foc5apL6d6XABBqzwp2DFR51riJjJjohAIn%2BAc1KvMTSzT6FzOfY%2BwCiVXHNhsQyDKSt261MPQ5nRwn9Hv&X-Amz-Signature=ca656de83556e421d9cdbfbf45d5d28b9d5fe8e512508a15f4bfef4ee329dec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGDHRXD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6GAqUVm2l2kdIbRVmsBP1ol2ED0jtblIN6dHjFfDZrQIgB5ZAItWtQ6VlMOXZ8MN7qw3Pi%2BzJlvIqh0EM6WD4Odkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDuSxfHSKMH56t%2B6EircA75rMFqH2aTOfNDjlHroPaHKHWufEfqhgTLN1GnUc7D5SO5mzMr0dWn3oanFk8PdiNhaiWOciCG8pVigBDUgnS4Lo8PalDHBewZbN8m%2FT%2BGmKNdc2r3So%2B5X3Q6LOOkOHTM18XJEYhg3Jq9DcdztE%2BRRT0%2BhFtXv%2F464SeR3rFsEl8EnSiwz25FhLbriCH7SsxAvuUVS4hznUdHzUKt%2FpRtWSq%2Fi%2F%2F%2FVtBC4mSvGXYFPso9hjURL5M8aibtNsypl12M%2FJTJVDuo2nQn3bf2oV5qV8Icevm04j2bD6m9%2FIN1tcl8dlb%2Fu%2Bmz2cElqsm%2BJw932aOLmZYZYych%2FiPvsxdBeuZx64heVENUsK2rLFm9W%2F13fzPhCxceu%2BqnEkHuyumhVAdLoGba2iHDBGXE7hFYD%2BgcKGS7eJInPhh7FR0u%2B2y%2FhWO3NnGCk1W0DbL4s8dpIjrULmViWs6r%2BwsAa%2BJsORnHkDcGtRhQbvf2VMIIH6mgEfP9pG6%2FQfEuyEHDEhOk%2BtFfK03T46zqwClga4SAhhEo55W3eepjfAyUPXRLOJ83qrz5Wp7jMTv6Ryf4K5lEhCkeSBPivqzn%2BL%2BCbA%2B2rJKqASdLgIQs2s8xs13WoK5u%2BalIxAPCfb3nPMKCL9cQGOqUBWgNeQdwlFILoQ7jFXrHsz4ejslNMzr9JJTwnCwLoAKcoMVZQeNA%2F%2BqjvIXoCW58MamCMoTkKtR3qx9ojRFiL4rAlKRgad6IbBf%2FkIzUsQkzXVDBSc902ubGxrB9aOhlUxGlNGVDj%2F3Foc5apL6d6XABBqzwp2DFR51riJjJjohAIn%2BAc1KvMTSzT6FzOfY%2BwCiVXHNhsQyDKSt261MPQ5nRwn9Hv&X-Amz-Signature=59df8e13a6a80dc093e0ef840445dfd305349db4d4672aeb4059d747e741af29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGDHRXD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6GAqUVm2l2kdIbRVmsBP1ol2ED0jtblIN6dHjFfDZrQIgB5ZAItWtQ6VlMOXZ8MN7qw3Pi%2BzJlvIqh0EM6WD4Odkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDuSxfHSKMH56t%2B6EircA75rMFqH2aTOfNDjlHroPaHKHWufEfqhgTLN1GnUc7D5SO5mzMr0dWn3oanFk8PdiNhaiWOciCG8pVigBDUgnS4Lo8PalDHBewZbN8m%2FT%2BGmKNdc2r3So%2B5X3Q6LOOkOHTM18XJEYhg3Jq9DcdztE%2BRRT0%2BhFtXv%2F464SeR3rFsEl8EnSiwz25FhLbriCH7SsxAvuUVS4hznUdHzUKt%2FpRtWSq%2Fi%2F%2F%2FVtBC4mSvGXYFPso9hjURL5M8aibtNsypl12M%2FJTJVDuo2nQn3bf2oV5qV8Icevm04j2bD6m9%2FIN1tcl8dlb%2Fu%2Bmz2cElqsm%2BJw932aOLmZYZYych%2FiPvsxdBeuZx64heVENUsK2rLFm9W%2F13fzPhCxceu%2BqnEkHuyumhVAdLoGba2iHDBGXE7hFYD%2BgcKGS7eJInPhh7FR0u%2B2y%2FhWO3NnGCk1W0DbL4s8dpIjrULmViWs6r%2BwsAa%2BJsORnHkDcGtRhQbvf2VMIIH6mgEfP9pG6%2FQfEuyEHDEhOk%2BtFfK03T46zqwClga4SAhhEo55W3eepjfAyUPXRLOJ83qrz5Wp7jMTv6Ryf4K5lEhCkeSBPivqzn%2BL%2BCbA%2B2rJKqASdLgIQs2s8xs13WoK5u%2BalIxAPCfb3nPMKCL9cQGOqUBWgNeQdwlFILoQ7jFXrHsz4ejslNMzr9JJTwnCwLoAKcoMVZQeNA%2F%2BqjvIXoCW58MamCMoTkKtR3qx9ojRFiL4rAlKRgad6IbBf%2FkIzUsQkzXVDBSc902ubGxrB9aOhlUxGlNGVDj%2F3Foc5apL6d6XABBqzwp2DFR51riJjJjohAIn%2BAc1KvMTSzT6FzOfY%2BwCiVXHNhsQyDKSt261MPQ5nRwn9Hv&X-Amz-Signature=22ca1d0086dc41842154461ea34b7f1a15d33755bb2b6e30c70976a57881c7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
