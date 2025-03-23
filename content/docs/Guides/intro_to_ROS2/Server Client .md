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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCIL67T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSDK0464PxgqQqTESrvZtbffpoUL%2BGBoFfgHHtj%2BdpwIhANwmnlhpxEXxLBENrAPxgwLDsOQPwiIeVZqqqnPpF787KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaTAe09OWpmRNSjUq3AOLa9P4i7Ax0nuJ1GZBgRe15wQ%2FYSG6pkWORMhxQhGjCDNSB0%2BHWFWlZCnMyKjS5HyaMMyMs0OEp0MUe6eCS4jT%2BlkoBdaNYCwWqmjFB82KYs77OsiWStDpUDQUK6QnzzMZcn0pHNCZmpqGy2BG9IuGmKKacATE8AmfT%2Fh8nf48i9C7%2FEuLF0GSe1XzYkW3Q9agqVD9Yj3OQ47SUHupivCJOEyzRogynLAD6bQIzC%2Fpvm3D9fBA7sLLc60r51MCLW7afG%2Bpp2FbJN2nmiIIW%2F8JIw82VpgpH2ISSOmQ%2FdtxAhb8JVReOdtXGu8YNgcqL2I00BCInh5apwJJl8ZcVshIs3z447EVy%2FRzOWzlrCb7SXD%2F2b4UN1%2BlZ0uQ%2BeYevRiYW%2FLZdhHYmFr27oHJpqLxYyOZB0%2FgwpFE36dVagwx0UvlWFep2jBiZx3ZNSwr9DWVgqmiaVcbG2QOgrDEz7depNiAH%2Fw24ZOrV5zNUyHeUsFPOMmgE5p5mZBwEE2d3DUnTRTvuu3V%2B6T5%2F7EfRp6vtvWrhSDDP%2FghVrlbMMGF%2FQgG8lKwYKaLNoc6EiZgH9k2vDiMMeT%2BTK%2FmK3qlgXyMSTyVRCdK95WjWEtDwdfgNDDeT9KjZOCiTBz6%2FTCTy4G%2FBjqkAU16t0Vt%2BR5DNFIQM9y%2FiYcn6hvT3ecgOJSJIBjcrdm6OPe2RUhTkuBaQ5JN7UPSm9uCuY21D%2BhtD6JRxsQeGjdEuqpbCAPFsJM8%2B0tPm61mdDvuUwzvKwK8m3SDDsgs0nXn1E2mfqeYqyUZ7fB5%2BG3uqKomJQafsE2ID9M%2BFcrTKLDg4PVl1dzWS3uDBULBZ2IpbQTY6W3x%2FM%2FhqU2FL%2BMra9%2B5&X-Amz-Signature=4f9c2ff02a46678f08fa10b7663c41ba3c80cf222ed48a4904791f86221d77f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCIL67T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSDK0464PxgqQqTESrvZtbffpoUL%2BGBoFfgHHtj%2BdpwIhANwmnlhpxEXxLBENrAPxgwLDsOQPwiIeVZqqqnPpF787KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaTAe09OWpmRNSjUq3AOLa9P4i7Ax0nuJ1GZBgRe15wQ%2FYSG6pkWORMhxQhGjCDNSB0%2BHWFWlZCnMyKjS5HyaMMyMs0OEp0MUe6eCS4jT%2BlkoBdaNYCwWqmjFB82KYs77OsiWStDpUDQUK6QnzzMZcn0pHNCZmpqGy2BG9IuGmKKacATE8AmfT%2Fh8nf48i9C7%2FEuLF0GSe1XzYkW3Q9agqVD9Yj3OQ47SUHupivCJOEyzRogynLAD6bQIzC%2Fpvm3D9fBA7sLLc60r51MCLW7afG%2Bpp2FbJN2nmiIIW%2F8JIw82VpgpH2ISSOmQ%2FdtxAhb8JVReOdtXGu8YNgcqL2I00BCInh5apwJJl8ZcVshIs3z447EVy%2FRzOWzlrCb7SXD%2F2b4UN1%2BlZ0uQ%2BeYevRiYW%2FLZdhHYmFr27oHJpqLxYyOZB0%2FgwpFE36dVagwx0UvlWFep2jBiZx3ZNSwr9DWVgqmiaVcbG2QOgrDEz7depNiAH%2Fw24ZOrV5zNUyHeUsFPOMmgE5p5mZBwEE2d3DUnTRTvuu3V%2B6T5%2F7EfRp6vtvWrhSDDP%2FghVrlbMMGF%2FQgG8lKwYKaLNoc6EiZgH9k2vDiMMeT%2BTK%2FmK3qlgXyMSTyVRCdK95WjWEtDwdfgNDDeT9KjZOCiTBz6%2FTCTy4G%2FBjqkAU16t0Vt%2BR5DNFIQM9y%2FiYcn6hvT3ecgOJSJIBjcrdm6OPe2RUhTkuBaQ5JN7UPSm9uCuY21D%2BhtD6JRxsQeGjdEuqpbCAPFsJM8%2B0tPm61mdDvuUwzvKwK8m3SDDsgs0nXn1E2mfqeYqyUZ7fB5%2BG3uqKomJQafsE2ID9M%2BFcrTKLDg4PVl1dzWS3uDBULBZ2IpbQTY6W3x%2FM%2FhqU2FL%2BMra9%2B5&X-Amz-Signature=8125b1cf632cfd8284a5d108c6285caaf421e0ad54ed0fb32b9ab39d30c9a546&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCIL67T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSDK0464PxgqQqTESrvZtbffpoUL%2BGBoFfgHHtj%2BdpwIhANwmnlhpxEXxLBENrAPxgwLDsOQPwiIeVZqqqnPpF787KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaTAe09OWpmRNSjUq3AOLa9P4i7Ax0nuJ1GZBgRe15wQ%2FYSG6pkWORMhxQhGjCDNSB0%2BHWFWlZCnMyKjS5HyaMMyMs0OEp0MUe6eCS4jT%2BlkoBdaNYCwWqmjFB82KYs77OsiWStDpUDQUK6QnzzMZcn0pHNCZmpqGy2BG9IuGmKKacATE8AmfT%2Fh8nf48i9C7%2FEuLF0GSe1XzYkW3Q9agqVD9Yj3OQ47SUHupivCJOEyzRogynLAD6bQIzC%2Fpvm3D9fBA7sLLc60r51MCLW7afG%2Bpp2FbJN2nmiIIW%2F8JIw82VpgpH2ISSOmQ%2FdtxAhb8JVReOdtXGu8YNgcqL2I00BCInh5apwJJl8ZcVshIs3z447EVy%2FRzOWzlrCb7SXD%2F2b4UN1%2BlZ0uQ%2BeYevRiYW%2FLZdhHYmFr27oHJpqLxYyOZB0%2FgwpFE36dVagwx0UvlWFep2jBiZx3ZNSwr9DWVgqmiaVcbG2QOgrDEz7depNiAH%2Fw24ZOrV5zNUyHeUsFPOMmgE5p5mZBwEE2d3DUnTRTvuu3V%2B6T5%2F7EfRp6vtvWrhSDDP%2FghVrlbMMGF%2FQgG8lKwYKaLNoc6EiZgH9k2vDiMMeT%2BTK%2FmK3qlgXyMSTyVRCdK95WjWEtDwdfgNDDeT9KjZOCiTBz6%2FTCTy4G%2FBjqkAU16t0Vt%2BR5DNFIQM9y%2FiYcn6hvT3ecgOJSJIBjcrdm6OPe2RUhTkuBaQ5JN7UPSm9uCuY21D%2BhtD6JRxsQeGjdEuqpbCAPFsJM8%2B0tPm61mdDvuUwzvKwK8m3SDDsgs0nXn1E2mfqeYqyUZ7fB5%2BG3uqKomJQafsE2ID9M%2BFcrTKLDg4PVl1dzWS3uDBULBZ2IpbQTY6W3x%2FM%2FhqU2FL%2BMra9%2B5&X-Amz-Signature=5fbe427bab751f1e27f903f2bd353cd89137df01249bfeb660b5bb3fe5aa5eee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCIL67T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSDK0464PxgqQqTESrvZtbffpoUL%2BGBoFfgHHtj%2BdpwIhANwmnlhpxEXxLBENrAPxgwLDsOQPwiIeVZqqqnPpF787KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaTAe09OWpmRNSjUq3AOLa9P4i7Ax0nuJ1GZBgRe15wQ%2FYSG6pkWORMhxQhGjCDNSB0%2BHWFWlZCnMyKjS5HyaMMyMs0OEp0MUe6eCS4jT%2BlkoBdaNYCwWqmjFB82KYs77OsiWStDpUDQUK6QnzzMZcn0pHNCZmpqGy2BG9IuGmKKacATE8AmfT%2Fh8nf48i9C7%2FEuLF0GSe1XzYkW3Q9agqVD9Yj3OQ47SUHupivCJOEyzRogynLAD6bQIzC%2Fpvm3D9fBA7sLLc60r51MCLW7afG%2Bpp2FbJN2nmiIIW%2F8JIw82VpgpH2ISSOmQ%2FdtxAhb8JVReOdtXGu8YNgcqL2I00BCInh5apwJJl8ZcVshIs3z447EVy%2FRzOWzlrCb7SXD%2F2b4UN1%2BlZ0uQ%2BeYevRiYW%2FLZdhHYmFr27oHJpqLxYyOZB0%2FgwpFE36dVagwx0UvlWFep2jBiZx3ZNSwr9DWVgqmiaVcbG2QOgrDEz7depNiAH%2Fw24ZOrV5zNUyHeUsFPOMmgE5p5mZBwEE2d3DUnTRTvuu3V%2B6T5%2F7EfRp6vtvWrhSDDP%2FghVrlbMMGF%2FQgG8lKwYKaLNoc6EiZgH9k2vDiMMeT%2BTK%2FmK3qlgXyMSTyVRCdK95WjWEtDwdfgNDDeT9KjZOCiTBz6%2FTCTy4G%2FBjqkAU16t0Vt%2BR5DNFIQM9y%2FiYcn6hvT3ecgOJSJIBjcrdm6OPe2RUhTkuBaQ5JN7UPSm9uCuY21D%2BhtD6JRxsQeGjdEuqpbCAPFsJM8%2B0tPm61mdDvuUwzvKwK8m3SDDsgs0nXn1E2mfqeYqyUZ7fB5%2BG3uqKomJQafsE2ID9M%2BFcrTKLDg4PVl1dzWS3uDBULBZ2IpbQTY6W3x%2FM%2FhqU2FL%2BMra9%2B5&X-Amz-Signature=45701df35b533bd6bcf5091fd980f6d47c3e14c884b468ddf205b8930f7cd29b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCIL67T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSDK0464PxgqQqTESrvZtbffpoUL%2BGBoFfgHHtj%2BdpwIhANwmnlhpxEXxLBENrAPxgwLDsOQPwiIeVZqqqnPpF787KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaTAe09OWpmRNSjUq3AOLa9P4i7Ax0nuJ1GZBgRe15wQ%2FYSG6pkWORMhxQhGjCDNSB0%2BHWFWlZCnMyKjS5HyaMMyMs0OEp0MUe6eCS4jT%2BlkoBdaNYCwWqmjFB82KYs77OsiWStDpUDQUK6QnzzMZcn0pHNCZmpqGy2BG9IuGmKKacATE8AmfT%2Fh8nf48i9C7%2FEuLF0GSe1XzYkW3Q9agqVD9Yj3OQ47SUHupivCJOEyzRogynLAD6bQIzC%2Fpvm3D9fBA7sLLc60r51MCLW7afG%2Bpp2FbJN2nmiIIW%2F8JIw82VpgpH2ISSOmQ%2FdtxAhb8JVReOdtXGu8YNgcqL2I00BCInh5apwJJl8ZcVshIs3z447EVy%2FRzOWzlrCb7SXD%2F2b4UN1%2BlZ0uQ%2BeYevRiYW%2FLZdhHYmFr27oHJpqLxYyOZB0%2FgwpFE36dVagwx0UvlWFep2jBiZx3ZNSwr9DWVgqmiaVcbG2QOgrDEz7depNiAH%2Fw24ZOrV5zNUyHeUsFPOMmgE5p5mZBwEE2d3DUnTRTvuu3V%2B6T5%2F7EfRp6vtvWrhSDDP%2FghVrlbMMGF%2FQgG8lKwYKaLNoc6EiZgH9k2vDiMMeT%2BTK%2FmK3qlgXyMSTyVRCdK95WjWEtDwdfgNDDeT9KjZOCiTBz6%2FTCTy4G%2FBjqkAU16t0Vt%2BR5DNFIQM9y%2FiYcn6hvT3ecgOJSJIBjcrdm6OPe2RUhTkuBaQ5JN7UPSm9uCuY21D%2BhtD6JRxsQeGjdEuqpbCAPFsJM8%2B0tPm61mdDvuUwzvKwK8m3SDDsgs0nXn1E2mfqeYqyUZ7fB5%2BG3uqKomJQafsE2ID9M%2BFcrTKLDg4PVl1dzWS3uDBULBZ2IpbQTY6W3x%2FM%2FhqU2FL%2BMra9%2B5&X-Amz-Signature=7f42c17be80c5c9a7447e0330d367541c81151065dc48e883ff5820d25c7ebf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
