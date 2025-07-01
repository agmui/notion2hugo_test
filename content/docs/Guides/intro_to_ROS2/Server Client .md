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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45PRC5W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRHf8%2BR7JmvgiJh5RXwGKIIcnOXYDwCA5fo9z8kkYCJQIhAP7LEVmTrvt3YCTMgPAzcwl15%2F1BU50MDj6vuprA9OsxKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEYR5iq%2BRgEkLMN%2Bcq3ANm2HIV2fTr8iwzRvwNyaPfzZdeDyNeE2nII4OL4ogDvgpPEbDokqJ5%2FEsGadim7Dkx%2FUUE6rljBmKOiRIaJNAeSUX9n4SllX1evUcJbf9GA%2FdyXcyemeU5umUp%2B9EYTKnLOHHGoenHHlm1hb3L87r4jXpSwxeOmzIjs4cp2ZEzIBfwq%2FkkeWOs%2F0z%2Fj1zT8M1U8K6RqFALMvx9PRARJARns46Acf4Gv5f8%2FHlOTQP4gTz1Yg0rLEzmhdeoFVgDP302VLDY0sfIRZioCxX2V%2F0UkwNgCPnD8Pa%2BtAcWNNhZmI5qWf5Snb8A9wD3pKson6Blw9fTHpPP8fLfmpiDJuO6WRxTondty26frppKcnS0cnemAOeZHBjL6pK%2Ffp7JgdMEHl2jagIdIcicnfg91MYuocaCs6cvxtximPmVPCsTMVrwU8eravsiLd1LfhWkPxSnja3EXOJWl526r12yP6HKMvP%2BCstvBGb0V%2BavrFgAHOxXxIFbyoiIc4x3ooE3Rh1%2FDTSGtT6A2pXDW2liC%2FZSioO2bJVv2uvMgOvklF32BpcKGGnO9QXmEfHTOq4mZokTdIoOeq54LjjyzOun6i2gBKVNIV9kzVR%2FAHu9I%2FRsajDDLQ90B5S2P2IVoTCkxJDDBjqkAXV1JX4XVYLxhC1Ww5IbGd2%2FgErmFgVSdZN%2FlYjSSNV0X3sUQCn7Si9xAXNA9iX5l5aJIxkKDIwn675Dm9A4NjajC%2BwIgSfxStTucvOMYMxCkmBHdFiz0wJEs%2BgJTckvZbFLay%2FUg7yWo3Ifg1ho9m1BVc%2FI%2BdmDLX9PGZ%2Bks51p5MFnfo9ZH%2Fos98s8FmfOEyhSJpCOVyY6Xqu%2FnLrVtC9Gx7jt&X-Amz-Signature=699be4bde4db0996da0ec3e4be79fda5f74acf982df12f65e79d3d0186f27da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45PRC5W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRHf8%2BR7JmvgiJh5RXwGKIIcnOXYDwCA5fo9z8kkYCJQIhAP7LEVmTrvt3YCTMgPAzcwl15%2F1BU50MDj6vuprA9OsxKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEYR5iq%2BRgEkLMN%2Bcq3ANm2HIV2fTr8iwzRvwNyaPfzZdeDyNeE2nII4OL4ogDvgpPEbDokqJ5%2FEsGadim7Dkx%2FUUE6rljBmKOiRIaJNAeSUX9n4SllX1evUcJbf9GA%2FdyXcyemeU5umUp%2B9EYTKnLOHHGoenHHlm1hb3L87r4jXpSwxeOmzIjs4cp2ZEzIBfwq%2FkkeWOs%2F0z%2Fj1zT8M1U8K6RqFALMvx9PRARJARns46Acf4Gv5f8%2FHlOTQP4gTz1Yg0rLEzmhdeoFVgDP302VLDY0sfIRZioCxX2V%2F0UkwNgCPnD8Pa%2BtAcWNNhZmI5qWf5Snb8A9wD3pKson6Blw9fTHpPP8fLfmpiDJuO6WRxTondty26frppKcnS0cnemAOeZHBjL6pK%2Ffp7JgdMEHl2jagIdIcicnfg91MYuocaCs6cvxtximPmVPCsTMVrwU8eravsiLd1LfhWkPxSnja3EXOJWl526r12yP6HKMvP%2BCstvBGb0V%2BavrFgAHOxXxIFbyoiIc4x3ooE3Rh1%2FDTSGtT6A2pXDW2liC%2FZSioO2bJVv2uvMgOvklF32BpcKGGnO9QXmEfHTOq4mZokTdIoOeq54LjjyzOun6i2gBKVNIV9kzVR%2FAHu9I%2FRsajDDLQ90B5S2P2IVoTCkxJDDBjqkAXV1JX4XVYLxhC1Ww5IbGd2%2FgErmFgVSdZN%2FlYjSSNV0X3sUQCn7Si9xAXNA9iX5l5aJIxkKDIwn675Dm9A4NjajC%2BwIgSfxStTucvOMYMxCkmBHdFiz0wJEs%2BgJTckvZbFLay%2FUg7yWo3Ifg1ho9m1BVc%2FI%2BdmDLX9PGZ%2Bks51p5MFnfo9ZH%2Fos98s8FmfOEyhSJpCOVyY6Xqu%2FnLrVtC9Gx7jt&X-Amz-Signature=f65255179e0819e05c75c3b01201d4651084277bea4549c390d4b780f066e6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45PRC5W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRHf8%2BR7JmvgiJh5RXwGKIIcnOXYDwCA5fo9z8kkYCJQIhAP7LEVmTrvt3YCTMgPAzcwl15%2F1BU50MDj6vuprA9OsxKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEYR5iq%2BRgEkLMN%2Bcq3ANm2HIV2fTr8iwzRvwNyaPfzZdeDyNeE2nII4OL4ogDvgpPEbDokqJ5%2FEsGadim7Dkx%2FUUE6rljBmKOiRIaJNAeSUX9n4SllX1evUcJbf9GA%2FdyXcyemeU5umUp%2B9EYTKnLOHHGoenHHlm1hb3L87r4jXpSwxeOmzIjs4cp2ZEzIBfwq%2FkkeWOs%2F0z%2Fj1zT8M1U8K6RqFALMvx9PRARJARns46Acf4Gv5f8%2FHlOTQP4gTz1Yg0rLEzmhdeoFVgDP302VLDY0sfIRZioCxX2V%2F0UkwNgCPnD8Pa%2BtAcWNNhZmI5qWf5Snb8A9wD3pKson6Blw9fTHpPP8fLfmpiDJuO6WRxTondty26frppKcnS0cnemAOeZHBjL6pK%2Ffp7JgdMEHl2jagIdIcicnfg91MYuocaCs6cvxtximPmVPCsTMVrwU8eravsiLd1LfhWkPxSnja3EXOJWl526r12yP6HKMvP%2BCstvBGb0V%2BavrFgAHOxXxIFbyoiIc4x3ooE3Rh1%2FDTSGtT6A2pXDW2liC%2FZSioO2bJVv2uvMgOvklF32BpcKGGnO9QXmEfHTOq4mZokTdIoOeq54LjjyzOun6i2gBKVNIV9kzVR%2FAHu9I%2FRsajDDLQ90B5S2P2IVoTCkxJDDBjqkAXV1JX4XVYLxhC1Ww5IbGd2%2FgErmFgVSdZN%2FlYjSSNV0X3sUQCn7Si9xAXNA9iX5l5aJIxkKDIwn675Dm9A4NjajC%2BwIgSfxStTucvOMYMxCkmBHdFiz0wJEs%2BgJTckvZbFLay%2FUg7yWo3Ifg1ho9m1BVc%2FI%2BdmDLX9PGZ%2Bks51p5MFnfo9ZH%2Fos98s8FmfOEyhSJpCOVyY6Xqu%2FnLrVtC9Gx7jt&X-Amz-Signature=30ed7238a443797252c7b34e970003f2313a017e47b79121fe5f5ffc16be5b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45PRC5W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRHf8%2BR7JmvgiJh5RXwGKIIcnOXYDwCA5fo9z8kkYCJQIhAP7LEVmTrvt3YCTMgPAzcwl15%2F1BU50MDj6vuprA9OsxKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEYR5iq%2BRgEkLMN%2Bcq3ANm2HIV2fTr8iwzRvwNyaPfzZdeDyNeE2nII4OL4ogDvgpPEbDokqJ5%2FEsGadim7Dkx%2FUUE6rljBmKOiRIaJNAeSUX9n4SllX1evUcJbf9GA%2FdyXcyemeU5umUp%2B9EYTKnLOHHGoenHHlm1hb3L87r4jXpSwxeOmzIjs4cp2ZEzIBfwq%2FkkeWOs%2F0z%2Fj1zT8M1U8K6RqFALMvx9PRARJARns46Acf4Gv5f8%2FHlOTQP4gTz1Yg0rLEzmhdeoFVgDP302VLDY0sfIRZioCxX2V%2F0UkwNgCPnD8Pa%2BtAcWNNhZmI5qWf5Snb8A9wD3pKson6Blw9fTHpPP8fLfmpiDJuO6WRxTondty26frppKcnS0cnemAOeZHBjL6pK%2Ffp7JgdMEHl2jagIdIcicnfg91MYuocaCs6cvxtximPmVPCsTMVrwU8eravsiLd1LfhWkPxSnja3EXOJWl526r12yP6HKMvP%2BCstvBGb0V%2BavrFgAHOxXxIFbyoiIc4x3ooE3Rh1%2FDTSGtT6A2pXDW2liC%2FZSioO2bJVv2uvMgOvklF32BpcKGGnO9QXmEfHTOq4mZokTdIoOeq54LjjyzOun6i2gBKVNIV9kzVR%2FAHu9I%2FRsajDDLQ90B5S2P2IVoTCkxJDDBjqkAXV1JX4XVYLxhC1Ww5IbGd2%2FgErmFgVSdZN%2FlYjSSNV0X3sUQCn7Si9xAXNA9iX5l5aJIxkKDIwn675Dm9A4NjajC%2BwIgSfxStTucvOMYMxCkmBHdFiz0wJEs%2BgJTckvZbFLay%2FUg7yWo3Ifg1ho9m1BVc%2FI%2BdmDLX9PGZ%2Bks51p5MFnfo9ZH%2Fos98s8FmfOEyhSJpCOVyY6Xqu%2FnLrVtC9Gx7jt&X-Amz-Signature=217ae5119d4b80ada39a4a650ea85e3c99dbcfc20f10f7a360b6142e1bfe4575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45PRC5W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRHf8%2BR7JmvgiJh5RXwGKIIcnOXYDwCA5fo9z8kkYCJQIhAP7LEVmTrvt3YCTMgPAzcwl15%2F1BU50MDj6vuprA9OsxKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEYR5iq%2BRgEkLMN%2Bcq3ANm2HIV2fTr8iwzRvwNyaPfzZdeDyNeE2nII4OL4ogDvgpPEbDokqJ5%2FEsGadim7Dkx%2FUUE6rljBmKOiRIaJNAeSUX9n4SllX1evUcJbf9GA%2FdyXcyemeU5umUp%2B9EYTKnLOHHGoenHHlm1hb3L87r4jXpSwxeOmzIjs4cp2ZEzIBfwq%2FkkeWOs%2F0z%2Fj1zT8M1U8K6RqFALMvx9PRARJARns46Acf4Gv5f8%2FHlOTQP4gTz1Yg0rLEzmhdeoFVgDP302VLDY0sfIRZioCxX2V%2F0UkwNgCPnD8Pa%2BtAcWNNhZmI5qWf5Snb8A9wD3pKson6Blw9fTHpPP8fLfmpiDJuO6WRxTondty26frppKcnS0cnemAOeZHBjL6pK%2Ffp7JgdMEHl2jagIdIcicnfg91MYuocaCs6cvxtximPmVPCsTMVrwU8eravsiLd1LfhWkPxSnja3EXOJWl526r12yP6HKMvP%2BCstvBGb0V%2BavrFgAHOxXxIFbyoiIc4x3ooE3Rh1%2FDTSGtT6A2pXDW2liC%2FZSioO2bJVv2uvMgOvklF32BpcKGGnO9QXmEfHTOq4mZokTdIoOeq54LjjyzOun6i2gBKVNIV9kzVR%2FAHu9I%2FRsajDDLQ90B5S2P2IVoTCkxJDDBjqkAXV1JX4XVYLxhC1Ww5IbGd2%2FgErmFgVSdZN%2FlYjSSNV0X3sUQCn7Si9xAXNA9iX5l5aJIxkKDIwn675Dm9A4NjajC%2BwIgSfxStTucvOMYMxCkmBHdFiz0wJEs%2BgJTckvZbFLay%2FUg7yWo3Ifg1ho9m1BVc%2FI%2BdmDLX9PGZ%2Bks51p5MFnfo9ZH%2Fos98s8FmfOEyhSJpCOVyY6Xqu%2FnLrVtC9Gx7jt&X-Amz-Signature=4aacb104d58be6d85e1beeb96ae8f24084f646e9b42342d804a923dcc022d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
