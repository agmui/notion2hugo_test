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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PXOD5P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9DqkJOFfrjU9i2mWI4zQ25yJPH3SndilERjL11fh2fwIhAJL%2BdBDHz%2FFDTEBp8Rk0YWZMH%2F68KNwn8k0gELUWF5k0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BJgiiFDLF2egrNGUq3AMINOqLLsEY%2FKYaEQ4BxXlGA%2FPQ3seOg%2FOmYBcCBBuMM6wU8Hlr%2F1zFe54I27%2BaoPEz%2Fn1ndoiKX66i527dm3T%2BhUnA2aMdhLyN8NrQXqYTIknPhuouoltaXIhAlqBI%2F4%2FmRf66RPD%2Fc4PZMKj0%2Bz84GVvaD8Nwter0dvyTaOLXZfBRgeYuc8CwpEHJjSpIk%2Fvdq9zIoB%2BGQ0c1k8YcWkYbHsz8G5Y4ozFdWaSRgP3w04Y8GheSLOEtNPsrpPhAn7kDgtT6VOYy6M0m6pye1caNAEx4TVgib8PypffSo5qCc5YU1U7418GpYODsRyBZjhza4vim9aLWTv94a2yHN%2BJ42Z%2FadwTr4Jr7zTk2rEr83qrj%2FUsTnIWNlPEOIBjZr7vy95xViRwx3Q%2B7nDuH%2FJwu5pMRJjQXuPfElxOBLt0xDQ1xX%2F6VHo%2Fymgd%2BDinzsvuLNQVIWIDqGLEfqHFwrC1OHNlyAJvl3k5OjqlTwT7jzOsAgkiC8qcxPUJ5%2BrOjATvO3vOEEpNe04UjYceMwmnUJoW6OVVRCm6j%2Be5mkSQFsn1F0zphqRHGwfQjQyXDSfqlXMUo1UAtSNWe%2FJswd6cszbQtWyGqHwTrpIFwzjjUEOHWpbPcbB4uewgrOTDx0vPDBjqkAdY2uDHYb3EPJ1k%2Fn96QbKuWnxs1UEPhaIFeWbIUtTT16KoJcu8zLHSmJ%2BxGDplRUugWg7DBWlcE9Xrmy3NVf03YGEvrCJ%2BVuVar1vWIhZ4a8ljEp3raN2KoYyKBAr%2B3my69BfXLamx%2Fim5EN1PgoF8vO7lk6M1r1w4%2BQSlVhFO9XbruihsqcI575gNklEBrTZ9qwspV6ULH%2B2uCrDSWhouIkTVu&X-Amz-Signature=cbd23cd12d9b41bf8de0fa4bdb1d3d006c55454cf3cc88f76861e037b7cbca8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PXOD5P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9DqkJOFfrjU9i2mWI4zQ25yJPH3SndilERjL11fh2fwIhAJL%2BdBDHz%2FFDTEBp8Rk0YWZMH%2F68KNwn8k0gELUWF5k0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BJgiiFDLF2egrNGUq3AMINOqLLsEY%2FKYaEQ4BxXlGA%2FPQ3seOg%2FOmYBcCBBuMM6wU8Hlr%2F1zFe54I27%2BaoPEz%2Fn1ndoiKX66i527dm3T%2BhUnA2aMdhLyN8NrQXqYTIknPhuouoltaXIhAlqBI%2F4%2FmRf66RPD%2Fc4PZMKj0%2Bz84GVvaD8Nwter0dvyTaOLXZfBRgeYuc8CwpEHJjSpIk%2Fvdq9zIoB%2BGQ0c1k8YcWkYbHsz8G5Y4ozFdWaSRgP3w04Y8GheSLOEtNPsrpPhAn7kDgtT6VOYy6M0m6pye1caNAEx4TVgib8PypffSo5qCc5YU1U7418GpYODsRyBZjhza4vim9aLWTv94a2yHN%2BJ42Z%2FadwTr4Jr7zTk2rEr83qrj%2FUsTnIWNlPEOIBjZr7vy95xViRwx3Q%2B7nDuH%2FJwu5pMRJjQXuPfElxOBLt0xDQ1xX%2F6VHo%2Fymgd%2BDinzsvuLNQVIWIDqGLEfqHFwrC1OHNlyAJvl3k5OjqlTwT7jzOsAgkiC8qcxPUJ5%2BrOjATvO3vOEEpNe04UjYceMwmnUJoW6OVVRCm6j%2Be5mkSQFsn1F0zphqRHGwfQjQyXDSfqlXMUo1UAtSNWe%2FJswd6cszbQtWyGqHwTrpIFwzjjUEOHWpbPcbB4uewgrOTDx0vPDBjqkAdY2uDHYb3EPJ1k%2Fn96QbKuWnxs1UEPhaIFeWbIUtTT16KoJcu8zLHSmJ%2BxGDplRUugWg7DBWlcE9Xrmy3NVf03YGEvrCJ%2BVuVar1vWIhZ4a8ljEp3raN2KoYyKBAr%2B3my69BfXLamx%2Fim5EN1PgoF8vO7lk6M1r1w4%2BQSlVhFO9XbruihsqcI575gNklEBrTZ9qwspV6ULH%2B2uCrDSWhouIkTVu&X-Amz-Signature=7f8f3f0820687b4d641fe80002f6bf199fdda73541a51a8a3bdd5328334efb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PXOD5P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9DqkJOFfrjU9i2mWI4zQ25yJPH3SndilERjL11fh2fwIhAJL%2BdBDHz%2FFDTEBp8Rk0YWZMH%2F68KNwn8k0gELUWF5k0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BJgiiFDLF2egrNGUq3AMINOqLLsEY%2FKYaEQ4BxXlGA%2FPQ3seOg%2FOmYBcCBBuMM6wU8Hlr%2F1zFe54I27%2BaoPEz%2Fn1ndoiKX66i527dm3T%2BhUnA2aMdhLyN8NrQXqYTIknPhuouoltaXIhAlqBI%2F4%2FmRf66RPD%2Fc4PZMKj0%2Bz84GVvaD8Nwter0dvyTaOLXZfBRgeYuc8CwpEHJjSpIk%2Fvdq9zIoB%2BGQ0c1k8YcWkYbHsz8G5Y4ozFdWaSRgP3w04Y8GheSLOEtNPsrpPhAn7kDgtT6VOYy6M0m6pye1caNAEx4TVgib8PypffSo5qCc5YU1U7418GpYODsRyBZjhza4vim9aLWTv94a2yHN%2BJ42Z%2FadwTr4Jr7zTk2rEr83qrj%2FUsTnIWNlPEOIBjZr7vy95xViRwx3Q%2B7nDuH%2FJwu5pMRJjQXuPfElxOBLt0xDQ1xX%2F6VHo%2Fymgd%2BDinzsvuLNQVIWIDqGLEfqHFwrC1OHNlyAJvl3k5OjqlTwT7jzOsAgkiC8qcxPUJ5%2BrOjATvO3vOEEpNe04UjYceMwmnUJoW6OVVRCm6j%2Be5mkSQFsn1F0zphqRHGwfQjQyXDSfqlXMUo1UAtSNWe%2FJswd6cszbQtWyGqHwTrpIFwzjjUEOHWpbPcbB4uewgrOTDx0vPDBjqkAdY2uDHYb3EPJ1k%2Fn96QbKuWnxs1UEPhaIFeWbIUtTT16KoJcu8zLHSmJ%2BxGDplRUugWg7DBWlcE9Xrmy3NVf03YGEvrCJ%2BVuVar1vWIhZ4a8ljEp3raN2KoYyKBAr%2B3my69BfXLamx%2Fim5EN1PgoF8vO7lk6M1r1w4%2BQSlVhFO9XbruihsqcI575gNklEBrTZ9qwspV6ULH%2B2uCrDSWhouIkTVu&X-Amz-Signature=459feb8834254a4e7f62affb599ae99318902e63e1a59e2a64aad122fdaf279a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PXOD5P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9DqkJOFfrjU9i2mWI4zQ25yJPH3SndilERjL11fh2fwIhAJL%2BdBDHz%2FFDTEBp8Rk0YWZMH%2F68KNwn8k0gELUWF5k0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BJgiiFDLF2egrNGUq3AMINOqLLsEY%2FKYaEQ4BxXlGA%2FPQ3seOg%2FOmYBcCBBuMM6wU8Hlr%2F1zFe54I27%2BaoPEz%2Fn1ndoiKX66i527dm3T%2BhUnA2aMdhLyN8NrQXqYTIknPhuouoltaXIhAlqBI%2F4%2FmRf66RPD%2Fc4PZMKj0%2Bz84GVvaD8Nwter0dvyTaOLXZfBRgeYuc8CwpEHJjSpIk%2Fvdq9zIoB%2BGQ0c1k8YcWkYbHsz8G5Y4ozFdWaSRgP3w04Y8GheSLOEtNPsrpPhAn7kDgtT6VOYy6M0m6pye1caNAEx4TVgib8PypffSo5qCc5YU1U7418GpYODsRyBZjhza4vim9aLWTv94a2yHN%2BJ42Z%2FadwTr4Jr7zTk2rEr83qrj%2FUsTnIWNlPEOIBjZr7vy95xViRwx3Q%2B7nDuH%2FJwu5pMRJjQXuPfElxOBLt0xDQ1xX%2F6VHo%2Fymgd%2BDinzsvuLNQVIWIDqGLEfqHFwrC1OHNlyAJvl3k5OjqlTwT7jzOsAgkiC8qcxPUJ5%2BrOjATvO3vOEEpNe04UjYceMwmnUJoW6OVVRCm6j%2Be5mkSQFsn1F0zphqRHGwfQjQyXDSfqlXMUo1UAtSNWe%2FJswd6cszbQtWyGqHwTrpIFwzjjUEOHWpbPcbB4uewgrOTDx0vPDBjqkAdY2uDHYb3EPJ1k%2Fn96QbKuWnxs1UEPhaIFeWbIUtTT16KoJcu8zLHSmJ%2BxGDplRUugWg7DBWlcE9Xrmy3NVf03YGEvrCJ%2BVuVar1vWIhZ4a8ljEp3raN2KoYyKBAr%2B3my69BfXLamx%2Fim5EN1PgoF8vO7lk6M1r1w4%2BQSlVhFO9XbruihsqcI575gNklEBrTZ9qwspV6ULH%2B2uCrDSWhouIkTVu&X-Amz-Signature=61d66cb79a890c7156f5ca2d520d9828d014da45b30371fef58fed773ea6baa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PXOD5P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9DqkJOFfrjU9i2mWI4zQ25yJPH3SndilERjL11fh2fwIhAJL%2BdBDHz%2FFDTEBp8Rk0YWZMH%2F68KNwn8k0gELUWF5k0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BJgiiFDLF2egrNGUq3AMINOqLLsEY%2FKYaEQ4BxXlGA%2FPQ3seOg%2FOmYBcCBBuMM6wU8Hlr%2F1zFe54I27%2BaoPEz%2Fn1ndoiKX66i527dm3T%2BhUnA2aMdhLyN8NrQXqYTIknPhuouoltaXIhAlqBI%2F4%2FmRf66RPD%2Fc4PZMKj0%2Bz84GVvaD8Nwter0dvyTaOLXZfBRgeYuc8CwpEHJjSpIk%2Fvdq9zIoB%2BGQ0c1k8YcWkYbHsz8G5Y4ozFdWaSRgP3w04Y8GheSLOEtNPsrpPhAn7kDgtT6VOYy6M0m6pye1caNAEx4TVgib8PypffSo5qCc5YU1U7418GpYODsRyBZjhza4vim9aLWTv94a2yHN%2BJ42Z%2FadwTr4Jr7zTk2rEr83qrj%2FUsTnIWNlPEOIBjZr7vy95xViRwx3Q%2B7nDuH%2FJwu5pMRJjQXuPfElxOBLt0xDQ1xX%2F6VHo%2Fymgd%2BDinzsvuLNQVIWIDqGLEfqHFwrC1OHNlyAJvl3k5OjqlTwT7jzOsAgkiC8qcxPUJ5%2BrOjATvO3vOEEpNe04UjYceMwmnUJoW6OVVRCm6j%2Be5mkSQFsn1F0zphqRHGwfQjQyXDSfqlXMUo1UAtSNWe%2FJswd6cszbQtWyGqHwTrpIFwzjjUEOHWpbPcbB4uewgrOTDx0vPDBjqkAdY2uDHYb3EPJ1k%2Fn96QbKuWnxs1UEPhaIFeWbIUtTT16KoJcu8zLHSmJ%2BxGDplRUugWg7DBWlcE9Xrmy3NVf03YGEvrCJ%2BVuVar1vWIhZ4a8ljEp3raN2KoYyKBAr%2B3my69BfXLamx%2Fim5EN1PgoF8vO7lk6M1r1w4%2BQSlVhFO9XbruihsqcI575gNklEBrTZ9qwspV6ULH%2B2uCrDSWhouIkTVu&X-Amz-Signature=16862a66d152ba8d57ec7ce9e9449d56d3735c3f74bf62f35724d9e34d1cd736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
