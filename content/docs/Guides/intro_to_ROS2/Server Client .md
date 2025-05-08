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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEUQAXM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0qKckoc9bTNihMLYr0%2BRCJ63jLGGARlzk8oDJIluYGAiAQpIPTknEIhVgLhPhJIJTqV28qTcSicdn%2Bc%2BxGU%2FW2bSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMktBy%2FcTbcnE2pSEsKtwDdm1ZOqr%2B3Qg7KiHPwRw7w1hKKgU1j%2Fkxfz3AsHdrwULVbjQn9e5FLA6jxa%2BUsHBvry5%2BiBgdqDhBo5GQqL%2BSEu%2BbvgkUcCUrq57G5FZT6U4Jlw77P0a1Q7vgKQdO3XewI3mNhOHKcQAHTelaJoQl7XGfMdV%2B60qptlBntA0OBGwt8gYgxPCcUgtmRUeuZpw8KGa5dNtqkRtC4995nZHRheIsu0EU9jl2QeGVj3kudLSVjT3tR9r4YqV%2FbesF%2B7WWmOu84d1k5BpmNUeXeJW74hxTrHEoRKEupb42bsjZU49lfaMTpEnwfeHRkfiYjGV0tga5bV7M2ZDLmQFWMFb%2Fy2s7d3bdjR%2FLQsEowxJLG8ww6C%2FpTOKJdN0VVvmLm1XJ8ckLJU%2BA%2F%2BHZYyM5Nz9sT9DXkPunwQPZ6Rha5qrauTdk4abm0UggGaVnUigFRJOnYixyVf%2FR73ldrIV%2FUt1lEyIzb2sPlIQQY0berpr886jpOqIO6bWrJ00T06%2BZ3MP0%2FtZe%2BWNjRFqffphD%2FOLpl5YVTe2Cpc6%2Fbyc%2BiL%2FBlrxiJKChwfU%2BAZO2NSNB8A7oWN4oWOnL%2FkgDHRg2iqJkriHXd4f3K1CwgzgGsMNWT3n4NK5SB4NxR4DZf04w78HwwAY6pgHNcOAanQ5vzTPYdSpVcRMBgc9DiHfTTx8Nu%2BdWClEbbrShCVEMwh0pobjhWo%2BrFA%2Ff%2B%2Fci%2FqZ60tvtdpwaJf6ZWC6yEm7rbAKOtgrP3lYhkNLFBtLH2TNVgE89N%2Foe7241pytW1t1%2BnFj3Mkrw8y3URdRJW%2Fh9r0lkQ6Ua8uzdMSatK1Fwanm1%2BZHTRD%2FvKVxZTY0AWKn2DmZ13oCteMiccb%2Ba0GOS&X-Amz-Signature=ce7274f96e0aed8670f0a0efdacd1ca81180afa6f3bdad9d7d36c9869606343d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEUQAXM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0qKckoc9bTNihMLYr0%2BRCJ63jLGGARlzk8oDJIluYGAiAQpIPTknEIhVgLhPhJIJTqV28qTcSicdn%2Bc%2BxGU%2FW2bSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMktBy%2FcTbcnE2pSEsKtwDdm1ZOqr%2B3Qg7KiHPwRw7w1hKKgU1j%2Fkxfz3AsHdrwULVbjQn9e5FLA6jxa%2BUsHBvry5%2BiBgdqDhBo5GQqL%2BSEu%2BbvgkUcCUrq57G5FZT6U4Jlw77P0a1Q7vgKQdO3XewI3mNhOHKcQAHTelaJoQl7XGfMdV%2B60qptlBntA0OBGwt8gYgxPCcUgtmRUeuZpw8KGa5dNtqkRtC4995nZHRheIsu0EU9jl2QeGVj3kudLSVjT3tR9r4YqV%2FbesF%2B7WWmOu84d1k5BpmNUeXeJW74hxTrHEoRKEupb42bsjZU49lfaMTpEnwfeHRkfiYjGV0tga5bV7M2ZDLmQFWMFb%2Fy2s7d3bdjR%2FLQsEowxJLG8ww6C%2FpTOKJdN0VVvmLm1XJ8ckLJU%2BA%2F%2BHZYyM5Nz9sT9DXkPunwQPZ6Rha5qrauTdk4abm0UggGaVnUigFRJOnYixyVf%2FR73ldrIV%2FUt1lEyIzb2sPlIQQY0berpr886jpOqIO6bWrJ00T06%2BZ3MP0%2FtZe%2BWNjRFqffphD%2FOLpl5YVTe2Cpc6%2Fbyc%2BiL%2FBlrxiJKChwfU%2BAZO2NSNB8A7oWN4oWOnL%2FkgDHRg2iqJkriHXd4f3K1CwgzgGsMNWT3n4NK5SB4NxR4DZf04w78HwwAY6pgHNcOAanQ5vzTPYdSpVcRMBgc9DiHfTTx8Nu%2BdWClEbbrShCVEMwh0pobjhWo%2BrFA%2Ff%2B%2Fci%2FqZ60tvtdpwaJf6ZWC6yEm7rbAKOtgrP3lYhkNLFBtLH2TNVgE89N%2Foe7241pytW1t1%2BnFj3Mkrw8y3URdRJW%2Fh9r0lkQ6Ua8uzdMSatK1Fwanm1%2BZHTRD%2FvKVxZTY0AWKn2DmZ13oCteMiccb%2Ba0GOS&X-Amz-Signature=a2e1e11c9b37a0c815bb1f88b9dba190e320d35306860f9a2fb0bdbb987a6e69&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEUQAXM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0qKckoc9bTNihMLYr0%2BRCJ63jLGGARlzk8oDJIluYGAiAQpIPTknEIhVgLhPhJIJTqV28qTcSicdn%2Bc%2BxGU%2FW2bSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMktBy%2FcTbcnE2pSEsKtwDdm1ZOqr%2B3Qg7KiHPwRw7w1hKKgU1j%2Fkxfz3AsHdrwULVbjQn9e5FLA6jxa%2BUsHBvry5%2BiBgdqDhBo5GQqL%2BSEu%2BbvgkUcCUrq57G5FZT6U4Jlw77P0a1Q7vgKQdO3XewI3mNhOHKcQAHTelaJoQl7XGfMdV%2B60qptlBntA0OBGwt8gYgxPCcUgtmRUeuZpw8KGa5dNtqkRtC4995nZHRheIsu0EU9jl2QeGVj3kudLSVjT3tR9r4YqV%2FbesF%2B7WWmOu84d1k5BpmNUeXeJW74hxTrHEoRKEupb42bsjZU49lfaMTpEnwfeHRkfiYjGV0tga5bV7M2ZDLmQFWMFb%2Fy2s7d3bdjR%2FLQsEowxJLG8ww6C%2FpTOKJdN0VVvmLm1XJ8ckLJU%2BA%2F%2BHZYyM5Nz9sT9DXkPunwQPZ6Rha5qrauTdk4abm0UggGaVnUigFRJOnYixyVf%2FR73ldrIV%2FUt1lEyIzb2sPlIQQY0berpr886jpOqIO6bWrJ00T06%2BZ3MP0%2FtZe%2BWNjRFqffphD%2FOLpl5YVTe2Cpc6%2Fbyc%2BiL%2FBlrxiJKChwfU%2BAZO2NSNB8A7oWN4oWOnL%2FkgDHRg2iqJkriHXd4f3K1CwgzgGsMNWT3n4NK5SB4NxR4DZf04w78HwwAY6pgHNcOAanQ5vzTPYdSpVcRMBgc9DiHfTTx8Nu%2BdWClEbbrShCVEMwh0pobjhWo%2BrFA%2Ff%2B%2Fci%2FqZ60tvtdpwaJf6ZWC6yEm7rbAKOtgrP3lYhkNLFBtLH2TNVgE89N%2Foe7241pytW1t1%2BnFj3Mkrw8y3URdRJW%2Fh9r0lkQ6Ua8uzdMSatK1Fwanm1%2BZHTRD%2FvKVxZTY0AWKn2DmZ13oCteMiccb%2Ba0GOS&X-Amz-Signature=3cede44af225107d917dff0e48f8e6180e487ab2801e1e076a5496543c4e0ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEUQAXM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0qKckoc9bTNihMLYr0%2BRCJ63jLGGARlzk8oDJIluYGAiAQpIPTknEIhVgLhPhJIJTqV28qTcSicdn%2Bc%2BxGU%2FW2bSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMktBy%2FcTbcnE2pSEsKtwDdm1ZOqr%2B3Qg7KiHPwRw7w1hKKgU1j%2Fkxfz3AsHdrwULVbjQn9e5FLA6jxa%2BUsHBvry5%2BiBgdqDhBo5GQqL%2BSEu%2BbvgkUcCUrq57G5FZT6U4Jlw77P0a1Q7vgKQdO3XewI3mNhOHKcQAHTelaJoQl7XGfMdV%2B60qptlBntA0OBGwt8gYgxPCcUgtmRUeuZpw8KGa5dNtqkRtC4995nZHRheIsu0EU9jl2QeGVj3kudLSVjT3tR9r4YqV%2FbesF%2B7WWmOu84d1k5BpmNUeXeJW74hxTrHEoRKEupb42bsjZU49lfaMTpEnwfeHRkfiYjGV0tga5bV7M2ZDLmQFWMFb%2Fy2s7d3bdjR%2FLQsEowxJLG8ww6C%2FpTOKJdN0VVvmLm1XJ8ckLJU%2BA%2F%2BHZYyM5Nz9sT9DXkPunwQPZ6Rha5qrauTdk4abm0UggGaVnUigFRJOnYixyVf%2FR73ldrIV%2FUt1lEyIzb2sPlIQQY0berpr886jpOqIO6bWrJ00T06%2BZ3MP0%2FtZe%2BWNjRFqffphD%2FOLpl5YVTe2Cpc6%2Fbyc%2BiL%2FBlrxiJKChwfU%2BAZO2NSNB8A7oWN4oWOnL%2FkgDHRg2iqJkriHXd4f3K1CwgzgGsMNWT3n4NK5SB4NxR4DZf04w78HwwAY6pgHNcOAanQ5vzTPYdSpVcRMBgc9DiHfTTx8Nu%2BdWClEbbrShCVEMwh0pobjhWo%2BrFA%2Ff%2B%2Fci%2FqZ60tvtdpwaJf6ZWC6yEm7rbAKOtgrP3lYhkNLFBtLH2TNVgE89N%2Foe7241pytW1t1%2BnFj3Mkrw8y3URdRJW%2Fh9r0lkQ6Ua8uzdMSatK1Fwanm1%2BZHTRD%2FvKVxZTY0AWKn2DmZ13oCteMiccb%2Ba0GOS&X-Amz-Signature=51e230eb5a0a3c79e981afe01a942dbf111eeec3549b0522bd6cd38c1aed19b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEUQAXM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0qKckoc9bTNihMLYr0%2BRCJ63jLGGARlzk8oDJIluYGAiAQpIPTknEIhVgLhPhJIJTqV28qTcSicdn%2Bc%2BxGU%2FW2bSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMktBy%2FcTbcnE2pSEsKtwDdm1ZOqr%2B3Qg7KiHPwRw7w1hKKgU1j%2Fkxfz3AsHdrwULVbjQn9e5FLA6jxa%2BUsHBvry5%2BiBgdqDhBo5GQqL%2BSEu%2BbvgkUcCUrq57G5FZT6U4Jlw77P0a1Q7vgKQdO3XewI3mNhOHKcQAHTelaJoQl7XGfMdV%2B60qptlBntA0OBGwt8gYgxPCcUgtmRUeuZpw8KGa5dNtqkRtC4995nZHRheIsu0EU9jl2QeGVj3kudLSVjT3tR9r4YqV%2FbesF%2B7WWmOu84d1k5BpmNUeXeJW74hxTrHEoRKEupb42bsjZU49lfaMTpEnwfeHRkfiYjGV0tga5bV7M2ZDLmQFWMFb%2Fy2s7d3bdjR%2FLQsEowxJLG8ww6C%2FpTOKJdN0VVvmLm1XJ8ckLJU%2BA%2F%2BHZYyM5Nz9sT9DXkPunwQPZ6Rha5qrauTdk4abm0UggGaVnUigFRJOnYixyVf%2FR73ldrIV%2FUt1lEyIzb2sPlIQQY0berpr886jpOqIO6bWrJ00T06%2BZ3MP0%2FtZe%2BWNjRFqffphD%2FOLpl5YVTe2Cpc6%2Fbyc%2BiL%2FBlrxiJKChwfU%2BAZO2NSNB8A7oWN4oWOnL%2FkgDHRg2iqJkriHXd4f3K1CwgzgGsMNWT3n4NK5SB4NxR4DZf04w78HwwAY6pgHNcOAanQ5vzTPYdSpVcRMBgc9DiHfTTx8Nu%2BdWClEbbrShCVEMwh0pobjhWo%2BrFA%2Ff%2B%2Fci%2FqZ60tvtdpwaJf6ZWC6yEm7rbAKOtgrP3lYhkNLFBtLH2TNVgE89N%2Foe7241pytW1t1%2BnFj3Mkrw8y3URdRJW%2Fh9r0lkQ6Ua8uzdMSatK1Fwanm1%2BZHTRD%2FvKVxZTY0AWKn2DmZ13oCteMiccb%2Ba0GOS&X-Amz-Signature=36511677a679945cfef43599bbf193bcf008345f7b8b11a3cc5c3d707309a2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
