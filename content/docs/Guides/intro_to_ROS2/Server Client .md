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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3VLLCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHlgSkT027JEwyiHKOGtHh5t1G1CULnH3kdoI%2F68JpUyAiEA5roRYf1GkWrxISCnVZAkQgv17AJ291%2B0Lz0dnhNm5IAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDNWkmxNike457WjGSrcA5%2FsKtPXodq7kTePVTTJJ6CPBtezGdMpmz53jz7pi0JR8yovLQsc7gy%2BF%2FKKqHwlf6IVc9Ae4MNbaUNqBqOc31fW49SJ2s1z0gKjZ5gu%2FaBAaU9WphfgrSta4hcSYC6P32mApAiMrA3kg6sNatbAfWgw0RZQlUcOPYTd4zmM02el1Jhq%2B%2FYiKZeO%2FMEbd9cLdO7Pi%2BgcQrQddbxWsyoenGgoDBxq7pyf5nI5N%2FC2TxyFfNqtmTdN3b1ZdY6DUYL2TDy%2Fr%2FNyTulFPUHOkFqMft8H9A4Px85FaOR1m6c09TB%2B8y4c1WuiOHs3RkzT%2BZ1joz%2BPKUGVZnpDfC1Fp7svHdGGCCDK8pUdSRsAZ8vq5rzfkCRfaIxY1RrQeDJQkLagdm6MRUvxxy%2FqDR4Q4kbUNhDSNsy5ptiPG3IqgYp702Rq6OC2JZZ8cjLv0bX3WwCJcHhCOW8k8S3%2Bthf1omzKKHoHNJBXoDGE2l6tUJ08VxFoJfTA3RpFkgzgG%2FB91d%2BnFanVS2WPHRnEdSonxf70%2F5mWYPHm4DEdeTZTLbOashjDrqyiLaZIgSbq8loL0x8LkA6b2lq9d0WLMMrb9lsIZ9Lin2qJMucSS4EVQgcJdEqldp8m9QmbxfaXRK%2BeMMGEvMIGOqUBQMWxHMlV%2FU9mmMz8lMSsPV9lRTgPwfZ%2Fy8F7l9H7vfYUlCoy3qLrQdEIJ0CXSxWB6CDGnIdEhp%2FieGoSdPMBFDftImr9LsgpLIRvo8x7SbELXBFfCFBiiyAwSO7PbV2PUAHkY2Vrc5KZ4pNHFAO6LKxbNU4Z3E0unLE5mqJV14in0uYOtsMvfR1K%2Bgf5%2FqznSqMM1eirut63z%2BGFIlvCglVTJJdx&X-Amz-Signature=5828d4c1b6bed9d53cd12ee889b495c64c13cee12ff10f4172712a3ae741f08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3VLLCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHlgSkT027JEwyiHKOGtHh5t1G1CULnH3kdoI%2F68JpUyAiEA5roRYf1GkWrxISCnVZAkQgv17AJ291%2B0Lz0dnhNm5IAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDNWkmxNike457WjGSrcA5%2FsKtPXodq7kTePVTTJJ6CPBtezGdMpmz53jz7pi0JR8yovLQsc7gy%2BF%2FKKqHwlf6IVc9Ae4MNbaUNqBqOc31fW49SJ2s1z0gKjZ5gu%2FaBAaU9WphfgrSta4hcSYC6P32mApAiMrA3kg6sNatbAfWgw0RZQlUcOPYTd4zmM02el1Jhq%2B%2FYiKZeO%2FMEbd9cLdO7Pi%2BgcQrQddbxWsyoenGgoDBxq7pyf5nI5N%2FC2TxyFfNqtmTdN3b1ZdY6DUYL2TDy%2Fr%2FNyTulFPUHOkFqMft8H9A4Px85FaOR1m6c09TB%2B8y4c1WuiOHs3RkzT%2BZ1joz%2BPKUGVZnpDfC1Fp7svHdGGCCDK8pUdSRsAZ8vq5rzfkCRfaIxY1RrQeDJQkLagdm6MRUvxxy%2FqDR4Q4kbUNhDSNsy5ptiPG3IqgYp702Rq6OC2JZZ8cjLv0bX3WwCJcHhCOW8k8S3%2Bthf1omzKKHoHNJBXoDGE2l6tUJ08VxFoJfTA3RpFkgzgG%2FB91d%2BnFanVS2WPHRnEdSonxf70%2F5mWYPHm4DEdeTZTLbOashjDrqyiLaZIgSbq8loL0x8LkA6b2lq9d0WLMMrb9lsIZ9Lin2qJMucSS4EVQgcJdEqldp8m9QmbxfaXRK%2BeMMGEvMIGOqUBQMWxHMlV%2FU9mmMz8lMSsPV9lRTgPwfZ%2Fy8F7l9H7vfYUlCoy3qLrQdEIJ0CXSxWB6CDGnIdEhp%2FieGoSdPMBFDftImr9LsgpLIRvo8x7SbELXBFfCFBiiyAwSO7PbV2PUAHkY2Vrc5KZ4pNHFAO6LKxbNU4Z3E0unLE5mqJV14in0uYOtsMvfR1K%2Bgf5%2FqznSqMM1eirut63z%2BGFIlvCglVTJJdx&X-Amz-Signature=ff01b090c5fbbe70e9818b6fd1f8f4c81b99c5027ad67d7aff16ca430b2bf516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3VLLCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHlgSkT027JEwyiHKOGtHh5t1G1CULnH3kdoI%2F68JpUyAiEA5roRYf1GkWrxISCnVZAkQgv17AJ291%2B0Lz0dnhNm5IAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDNWkmxNike457WjGSrcA5%2FsKtPXodq7kTePVTTJJ6CPBtezGdMpmz53jz7pi0JR8yovLQsc7gy%2BF%2FKKqHwlf6IVc9Ae4MNbaUNqBqOc31fW49SJ2s1z0gKjZ5gu%2FaBAaU9WphfgrSta4hcSYC6P32mApAiMrA3kg6sNatbAfWgw0RZQlUcOPYTd4zmM02el1Jhq%2B%2FYiKZeO%2FMEbd9cLdO7Pi%2BgcQrQddbxWsyoenGgoDBxq7pyf5nI5N%2FC2TxyFfNqtmTdN3b1ZdY6DUYL2TDy%2Fr%2FNyTulFPUHOkFqMft8H9A4Px85FaOR1m6c09TB%2B8y4c1WuiOHs3RkzT%2BZ1joz%2BPKUGVZnpDfC1Fp7svHdGGCCDK8pUdSRsAZ8vq5rzfkCRfaIxY1RrQeDJQkLagdm6MRUvxxy%2FqDR4Q4kbUNhDSNsy5ptiPG3IqgYp702Rq6OC2JZZ8cjLv0bX3WwCJcHhCOW8k8S3%2Bthf1omzKKHoHNJBXoDGE2l6tUJ08VxFoJfTA3RpFkgzgG%2FB91d%2BnFanVS2WPHRnEdSonxf70%2F5mWYPHm4DEdeTZTLbOashjDrqyiLaZIgSbq8loL0x8LkA6b2lq9d0WLMMrb9lsIZ9Lin2qJMucSS4EVQgcJdEqldp8m9QmbxfaXRK%2BeMMGEvMIGOqUBQMWxHMlV%2FU9mmMz8lMSsPV9lRTgPwfZ%2Fy8F7l9H7vfYUlCoy3qLrQdEIJ0CXSxWB6CDGnIdEhp%2FieGoSdPMBFDftImr9LsgpLIRvo8x7SbELXBFfCFBiiyAwSO7PbV2PUAHkY2Vrc5KZ4pNHFAO6LKxbNU4Z3E0unLE5mqJV14in0uYOtsMvfR1K%2Bgf5%2FqznSqMM1eirut63z%2BGFIlvCglVTJJdx&X-Amz-Signature=1e0cf16c9e715fc56ef25b87c55243da4d7541bcb794aa9c5d63c81298db5bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3VLLCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHlgSkT027JEwyiHKOGtHh5t1G1CULnH3kdoI%2F68JpUyAiEA5roRYf1GkWrxISCnVZAkQgv17AJ291%2B0Lz0dnhNm5IAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDNWkmxNike457WjGSrcA5%2FsKtPXodq7kTePVTTJJ6CPBtezGdMpmz53jz7pi0JR8yovLQsc7gy%2BF%2FKKqHwlf6IVc9Ae4MNbaUNqBqOc31fW49SJ2s1z0gKjZ5gu%2FaBAaU9WphfgrSta4hcSYC6P32mApAiMrA3kg6sNatbAfWgw0RZQlUcOPYTd4zmM02el1Jhq%2B%2FYiKZeO%2FMEbd9cLdO7Pi%2BgcQrQddbxWsyoenGgoDBxq7pyf5nI5N%2FC2TxyFfNqtmTdN3b1ZdY6DUYL2TDy%2Fr%2FNyTulFPUHOkFqMft8H9A4Px85FaOR1m6c09TB%2B8y4c1WuiOHs3RkzT%2BZ1joz%2BPKUGVZnpDfC1Fp7svHdGGCCDK8pUdSRsAZ8vq5rzfkCRfaIxY1RrQeDJQkLagdm6MRUvxxy%2FqDR4Q4kbUNhDSNsy5ptiPG3IqgYp702Rq6OC2JZZ8cjLv0bX3WwCJcHhCOW8k8S3%2Bthf1omzKKHoHNJBXoDGE2l6tUJ08VxFoJfTA3RpFkgzgG%2FB91d%2BnFanVS2WPHRnEdSonxf70%2F5mWYPHm4DEdeTZTLbOashjDrqyiLaZIgSbq8loL0x8LkA6b2lq9d0WLMMrb9lsIZ9Lin2qJMucSS4EVQgcJdEqldp8m9QmbxfaXRK%2BeMMGEvMIGOqUBQMWxHMlV%2FU9mmMz8lMSsPV9lRTgPwfZ%2Fy8F7l9H7vfYUlCoy3qLrQdEIJ0CXSxWB6CDGnIdEhp%2FieGoSdPMBFDftImr9LsgpLIRvo8x7SbELXBFfCFBiiyAwSO7PbV2PUAHkY2Vrc5KZ4pNHFAO6LKxbNU4Z3E0unLE5mqJV14in0uYOtsMvfR1K%2Bgf5%2FqznSqMM1eirut63z%2BGFIlvCglVTJJdx&X-Amz-Signature=3454eca9faf08c83ff1d2103884d3d7f9e292ef3bded1551a2cce3c40fe6a4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3VLLCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHlgSkT027JEwyiHKOGtHh5t1G1CULnH3kdoI%2F68JpUyAiEA5roRYf1GkWrxISCnVZAkQgv17AJ291%2B0Lz0dnhNm5IAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDNWkmxNike457WjGSrcA5%2FsKtPXodq7kTePVTTJJ6CPBtezGdMpmz53jz7pi0JR8yovLQsc7gy%2BF%2FKKqHwlf6IVc9Ae4MNbaUNqBqOc31fW49SJ2s1z0gKjZ5gu%2FaBAaU9WphfgrSta4hcSYC6P32mApAiMrA3kg6sNatbAfWgw0RZQlUcOPYTd4zmM02el1Jhq%2B%2FYiKZeO%2FMEbd9cLdO7Pi%2BgcQrQddbxWsyoenGgoDBxq7pyf5nI5N%2FC2TxyFfNqtmTdN3b1ZdY6DUYL2TDy%2Fr%2FNyTulFPUHOkFqMft8H9A4Px85FaOR1m6c09TB%2B8y4c1WuiOHs3RkzT%2BZ1joz%2BPKUGVZnpDfC1Fp7svHdGGCCDK8pUdSRsAZ8vq5rzfkCRfaIxY1RrQeDJQkLagdm6MRUvxxy%2FqDR4Q4kbUNhDSNsy5ptiPG3IqgYp702Rq6OC2JZZ8cjLv0bX3WwCJcHhCOW8k8S3%2Bthf1omzKKHoHNJBXoDGE2l6tUJ08VxFoJfTA3RpFkgzgG%2FB91d%2BnFanVS2WPHRnEdSonxf70%2F5mWYPHm4DEdeTZTLbOashjDrqyiLaZIgSbq8loL0x8LkA6b2lq9d0WLMMrb9lsIZ9Lin2qJMucSS4EVQgcJdEqldp8m9QmbxfaXRK%2BeMMGEvMIGOqUBQMWxHMlV%2FU9mmMz8lMSsPV9lRTgPwfZ%2Fy8F7l9H7vfYUlCoy3qLrQdEIJ0CXSxWB6CDGnIdEhp%2FieGoSdPMBFDftImr9LsgpLIRvo8x7SbELXBFfCFBiiyAwSO7PbV2PUAHkY2Vrc5KZ4pNHFAO6LKxbNU4Z3E0unLE5mqJV14in0uYOtsMvfR1K%2Bgf5%2FqznSqMM1eirut63z%2BGFIlvCglVTJJdx&X-Amz-Signature=ecb457c5503c1dfa8872f6a1c11eeecd5a792812ff256ea05943fb0301b7fa20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
