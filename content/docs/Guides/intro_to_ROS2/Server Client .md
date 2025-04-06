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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBI4UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtp9gEnPcF%2FnqmP3DTVOZyDOtFR%2Ft77QQRoEqFer6KfgIhAP5XEJyl%2B6BkE%2Bu%2BUZilfCt9sqmSoKR6g5e%2Bs5XgTs4vKv8DCEAQABoMNjM3NDIzMTgzODA1Igzze76r7%2BwLBrrGVioq3AOb0HAAv3SeiMdkb2v2eodDSBW7x6LZccQZfpGQjp1GV%2BPPCruXcWvmGbAAA6JAHbQS2HeasUHPAH88soRhoxfn%2BaXULGQaKTzsZUgChBscbK%2FpfnDY1mExXrdgHKsFYJPIw7V6Z5Adf1Gy73BfpQS7DdSU0oDKPXuM%2FAHR1TAdFbCZM0vfLR2JuHJ%2FvQqnDFZP40wctOG5s2xlWfOExreNJ7fC8fnUYGUmA0YNxEVuTLtQayBzxKVIGEeM1RkCNT2qR%2F6aFTiqM0hZ1Oe3XnIfKMjvCO9f2B1J%2FwUJCEBohqEYFw09L4bvSdbRsDalg8dMO8hxm9k0uUUjHb2IDNIykCUj5NdJnfMOiiPgXie5z5EYEikP6HISUBwSGktbkc7C4N63xPeOyXoS%2BIkyp2ZzWW6dq%2FpA86pLb58a2sHKjAv190bUIQq2yNdi20BhGu0eNjby41ZdrgQkjBT1NIn5DWaNWxK4Zi27WIRMsFDxOaMhKO36SnPhtRfQNq1PXSJ8YWKmMPge%2BeFo24c7oYCXW0RhLQpO%2BGgsNrvtebJRCOh3XLF4Uon7slobmCxXv13WfU%2FzglhUQLy702qvlXB5KTAiEkuZ27kp5imAVHYXN1P5Jlvgajl%2Fn7GH8DDev8i%2FBjqkATe8%2FCz%2Fyk35qHZWNZP%2Bqhio5Vmgdjk5v7fTKf68FGJBAA3vSdmxQa7UVNUUkZa%2BhOYyK9xV0VZRKT6cZwmicAU1UUX4j%2Fgv8LpUIYdrShbBM2OpWN0lXrRswRB%2FzmDimS1AkyTLitbCYILs0DymuPueJObwohlDctU3WGfkUqmbsykxORlm%2Fd76MY3ESw00cB%2F5T922IBCQ7vwBE9p5wgX4VBH%2B&X-Amz-Signature=39eb47128853da8911c2ad581efed954a702d94acbe208416b12373573409ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBI4UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtp9gEnPcF%2FnqmP3DTVOZyDOtFR%2Ft77QQRoEqFer6KfgIhAP5XEJyl%2B6BkE%2Bu%2BUZilfCt9sqmSoKR6g5e%2Bs5XgTs4vKv8DCEAQABoMNjM3NDIzMTgzODA1Igzze76r7%2BwLBrrGVioq3AOb0HAAv3SeiMdkb2v2eodDSBW7x6LZccQZfpGQjp1GV%2BPPCruXcWvmGbAAA6JAHbQS2HeasUHPAH88soRhoxfn%2BaXULGQaKTzsZUgChBscbK%2FpfnDY1mExXrdgHKsFYJPIw7V6Z5Adf1Gy73BfpQS7DdSU0oDKPXuM%2FAHR1TAdFbCZM0vfLR2JuHJ%2FvQqnDFZP40wctOG5s2xlWfOExreNJ7fC8fnUYGUmA0YNxEVuTLtQayBzxKVIGEeM1RkCNT2qR%2F6aFTiqM0hZ1Oe3XnIfKMjvCO9f2B1J%2FwUJCEBohqEYFw09L4bvSdbRsDalg8dMO8hxm9k0uUUjHb2IDNIykCUj5NdJnfMOiiPgXie5z5EYEikP6HISUBwSGktbkc7C4N63xPeOyXoS%2BIkyp2ZzWW6dq%2FpA86pLb58a2sHKjAv190bUIQq2yNdi20BhGu0eNjby41ZdrgQkjBT1NIn5DWaNWxK4Zi27WIRMsFDxOaMhKO36SnPhtRfQNq1PXSJ8YWKmMPge%2BeFo24c7oYCXW0RhLQpO%2BGgsNrvtebJRCOh3XLF4Uon7slobmCxXv13WfU%2FzglhUQLy702qvlXB5KTAiEkuZ27kp5imAVHYXN1P5Jlvgajl%2Fn7GH8DDev8i%2FBjqkATe8%2FCz%2Fyk35qHZWNZP%2Bqhio5Vmgdjk5v7fTKf68FGJBAA3vSdmxQa7UVNUUkZa%2BhOYyK9xV0VZRKT6cZwmicAU1UUX4j%2Fgv8LpUIYdrShbBM2OpWN0lXrRswRB%2FzmDimS1AkyTLitbCYILs0DymuPueJObwohlDctU3WGfkUqmbsykxORlm%2Fd76MY3ESw00cB%2F5T922IBCQ7vwBE9p5wgX4VBH%2B&X-Amz-Signature=b0ae734fca330e4001fb92c7e59d36e20e3e5ea7cb991973c1483bbbe322ee76&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBI4UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtp9gEnPcF%2FnqmP3DTVOZyDOtFR%2Ft77QQRoEqFer6KfgIhAP5XEJyl%2B6BkE%2Bu%2BUZilfCt9sqmSoKR6g5e%2Bs5XgTs4vKv8DCEAQABoMNjM3NDIzMTgzODA1Igzze76r7%2BwLBrrGVioq3AOb0HAAv3SeiMdkb2v2eodDSBW7x6LZccQZfpGQjp1GV%2BPPCruXcWvmGbAAA6JAHbQS2HeasUHPAH88soRhoxfn%2BaXULGQaKTzsZUgChBscbK%2FpfnDY1mExXrdgHKsFYJPIw7V6Z5Adf1Gy73BfpQS7DdSU0oDKPXuM%2FAHR1TAdFbCZM0vfLR2JuHJ%2FvQqnDFZP40wctOG5s2xlWfOExreNJ7fC8fnUYGUmA0YNxEVuTLtQayBzxKVIGEeM1RkCNT2qR%2F6aFTiqM0hZ1Oe3XnIfKMjvCO9f2B1J%2FwUJCEBohqEYFw09L4bvSdbRsDalg8dMO8hxm9k0uUUjHb2IDNIykCUj5NdJnfMOiiPgXie5z5EYEikP6HISUBwSGktbkc7C4N63xPeOyXoS%2BIkyp2ZzWW6dq%2FpA86pLb58a2sHKjAv190bUIQq2yNdi20BhGu0eNjby41ZdrgQkjBT1NIn5DWaNWxK4Zi27WIRMsFDxOaMhKO36SnPhtRfQNq1PXSJ8YWKmMPge%2BeFo24c7oYCXW0RhLQpO%2BGgsNrvtebJRCOh3XLF4Uon7slobmCxXv13WfU%2FzglhUQLy702qvlXB5KTAiEkuZ27kp5imAVHYXN1P5Jlvgajl%2Fn7GH8DDev8i%2FBjqkATe8%2FCz%2Fyk35qHZWNZP%2Bqhio5Vmgdjk5v7fTKf68FGJBAA3vSdmxQa7UVNUUkZa%2BhOYyK9xV0VZRKT6cZwmicAU1UUX4j%2Fgv8LpUIYdrShbBM2OpWN0lXrRswRB%2FzmDimS1AkyTLitbCYILs0DymuPueJObwohlDctU3WGfkUqmbsykxORlm%2Fd76MY3ESw00cB%2F5T922IBCQ7vwBE9p5wgX4VBH%2B&X-Amz-Signature=73a9d80bc5c8f436a5afc5c122e0f9b972ded0bd465cbda005caeb99250c08c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBI4UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtp9gEnPcF%2FnqmP3DTVOZyDOtFR%2Ft77QQRoEqFer6KfgIhAP5XEJyl%2B6BkE%2Bu%2BUZilfCt9sqmSoKR6g5e%2Bs5XgTs4vKv8DCEAQABoMNjM3NDIzMTgzODA1Igzze76r7%2BwLBrrGVioq3AOb0HAAv3SeiMdkb2v2eodDSBW7x6LZccQZfpGQjp1GV%2BPPCruXcWvmGbAAA6JAHbQS2HeasUHPAH88soRhoxfn%2BaXULGQaKTzsZUgChBscbK%2FpfnDY1mExXrdgHKsFYJPIw7V6Z5Adf1Gy73BfpQS7DdSU0oDKPXuM%2FAHR1TAdFbCZM0vfLR2JuHJ%2FvQqnDFZP40wctOG5s2xlWfOExreNJ7fC8fnUYGUmA0YNxEVuTLtQayBzxKVIGEeM1RkCNT2qR%2F6aFTiqM0hZ1Oe3XnIfKMjvCO9f2B1J%2FwUJCEBohqEYFw09L4bvSdbRsDalg8dMO8hxm9k0uUUjHb2IDNIykCUj5NdJnfMOiiPgXie5z5EYEikP6HISUBwSGktbkc7C4N63xPeOyXoS%2BIkyp2ZzWW6dq%2FpA86pLb58a2sHKjAv190bUIQq2yNdi20BhGu0eNjby41ZdrgQkjBT1NIn5DWaNWxK4Zi27WIRMsFDxOaMhKO36SnPhtRfQNq1PXSJ8YWKmMPge%2BeFo24c7oYCXW0RhLQpO%2BGgsNrvtebJRCOh3XLF4Uon7slobmCxXv13WfU%2FzglhUQLy702qvlXB5KTAiEkuZ27kp5imAVHYXN1P5Jlvgajl%2Fn7GH8DDev8i%2FBjqkATe8%2FCz%2Fyk35qHZWNZP%2Bqhio5Vmgdjk5v7fTKf68FGJBAA3vSdmxQa7UVNUUkZa%2BhOYyK9xV0VZRKT6cZwmicAU1UUX4j%2Fgv8LpUIYdrShbBM2OpWN0lXrRswRB%2FzmDimS1AkyTLitbCYILs0DymuPueJObwohlDctU3WGfkUqmbsykxORlm%2Fd76MY3ESw00cB%2F5T922IBCQ7vwBE9p5wgX4VBH%2B&X-Amz-Signature=6fde542c8cea92c98082d554228c786a671e7bb4a20fb3f7241382ee5754a61d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBI4UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtp9gEnPcF%2FnqmP3DTVOZyDOtFR%2Ft77QQRoEqFer6KfgIhAP5XEJyl%2B6BkE%2Bu%2BUZilfCt9sqmSoKR6g5e%2Bs5XgTs4vKv8DCEAQABoMNjM3NDIzMTgzODA1Igzze76r7%2BwLBrrGVioq3AOb0HAAv3SeiMdkb2v2eodDSBW7x6LZccQZfpGQjp1GV%2BPPCruXcWvmGbAAA6JAHbQS2HeasUHPAH88soRhoxfn%2BaXULGQaKTzsZUgChBscbK%2FpfnDY1mExXrdgHKsFYJPIw7V6Z5Adf1Gy73BfpQS7DdSU0oDKPXuM%2FAHR1TAdFbCZM0vfLR2JuHJ%2FvQqnDFZP40wctOG5s2xlWfOExreNJ7fC8fnUYGUmA0YNxEVuTLtQayBzxKVIGEeM1RkCNT2qR%2F6aFTiqM0hZ1Oe3XnIfKMjvCO9f2B1J%2FwUJCEBohqEYFw09L4bvSdbRsDalg8dMO8hxm9k0uUUjHb2IDNIykCUj5NdJnfMOiiPgXie5z5EYEikP6HISUBwSGktbkc7C4N63xPeOyXoS%2BIkyp2ZzWW6dq%2FpA86pLb58a2sHKjAv190bUIQq2yNdi20BhGu0eNjby41ZdrgQkjBT1NIn5DWaNWxK4Zi27WIRMsFDxOaMhKO36SnPhtRfQNq1PXSJ8YWKmMPge%2BeFo24c7oYCXW0RhLQpO%2BGgsNrvtebJRCOh3XLF4Uon7slobmCxXv13WfU%2FzglhUQLy702qvlXB5KTAiEkuZ27kp5imAVHYXN1P5Jlvgajl%2Fn7GH8DDev8i%2FBjqkATe8%2FCz%2Fyk35qHZWNZP%2Bqhio5Vmgdjk5v7fTKf68FGJBAA3vSdmxQa7UVNUUkZa%2BhOYyK9xV0VZRKT6cZwmicAU1UUX4j%2Fgv8LpUIYdrShbBM2OpWN0lXrRswRB%2FzmDimS1AkyTLitbCYILs0DymuPueJObwohlDctU3WGfkUqmbsykxORlm%2Fd76MY3ESw00cB%2F5T922IBCQ7vwBE9p5wgX4VBH%2B&X-Amz-Signature=435ab99a9c561585dabffc76627954263e04d1a8189fee7d7e3e9736e84be0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
