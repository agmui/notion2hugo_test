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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAGWTB2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhibNfN8F0DGAry7CNj3okkK6OwwWhc7gOUS00pHPjAAiBtC%2BqB%2BYMRXtwPEpm1J0%2FwHtCd8PllnPXdLMkNS731OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwLwEqpMHpH4S3ZmKtwDiCoYR%2FSNrG9NBvwYN%2BZK2VSZx2snhGOx75SvbAoJDY6wyG3NdMfGey6qVezQkJK1xFMjrmETS5atiDDD%2FSy2GQeYGMjJ5bKb%2BAEfc7DT2oK4QXcRMozgJ52htfet%2B85mURjXoHFd937yTLL1S49NmEvJlI7fhrCJ%2BWZi%2FGLOHsM1a8BAgJRP7XsOU91GcKfHEZC8XhAcmIYh0xycTLpsuDKeD5nfVoGQG4T79f%2BO4Nv%2B%2BeDrjVWLyLB99EL3dJg4IGW78%2FzCIdDQFzeOU9S%2ByQJVpE1sku2xjvcpfmsAabTz4Bpww1ukEeX4HxvA07oU0MFdsNA6NNi6kgxCCrhQizNtrmmr%2BMJJ1X23RfCA%2BklHXW%2FwWI63zuwxnMqq3aNR6lGrAu7PC0Son%2FJjYiRyxXr%2FDlUA%2BWi%2B1%2BBm5GbrZP93530BYnvUFMXSqqdxgHgsp6HWAjq7HNGso2cFcbynXUYtrqzQ1NuCgfrNsxmV%2FSEB14zV7SmuZixbVSrbZ%2FpxNm%2Bu9Y6pu8LVYUwRc1OoizrWjeeWwg%2FQQAeJ%2F%2B3Z1%2FRk8T5TFBU3ZD%2FxqWzIy%2BiPYUdskj7jEFO%2Bs9s%2FfTTGFd5b6EDJ8gw4yFDJqhGYjNQSHkgjEhAVFI3%2Bc94wpcGAvQY6pgFPcbbGbjkw0BmOscMP24SXon5%2FIAnEJGyOIF5dyLwvMIC1WysXv5sgUF5V27839IyFRwYGiJ0v%2BbLGbjNHtuEzEHjvw5EmhIKtKw4mELAD88qooAs0G96Bvys%2BGTcoszNYcaxMXWqL1Du%2B%2FsVxclXA01NiYCgrtVYI6JoQAYeATDwagKvM2jMuI5ve%2BtfigAUqV65JC4w2FSvOFQFITuLbrGxn1tcs&X-Amz-Signature=597e5efbc93575f74b9b129f7aa161c49ed764b8f69347d31e6095c171a9d074&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAGWTB2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhibNfN8F0DGAry7CNj3okkK6OwwWhc7gOUS00pHPjAAiBtC%2BqB%2BYMRXtwPEpm1J0%2FwHtCd8PllnPXdLMkNS731OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwLwEqpMHpH4S3ZmKtwDiCoYR%2FSNrG9NBvwYN%2BZK2VSZx2snhGOx75SvbAoJDY6wyG3NdMfGey6qVezQkJK1xFMjrmETS5atiDDD%2FSy2GQeYGMjJ5bKb%2BAEfc7DT2oK4QXcRMozgJ52htfet%2B85mURjXoHFd937yTLL1S49NmEvJlI7fhrCJ%2BWZi%2FGLOHsM1a8BAgJRP7XsOU91GcKfHEZC8XhAcmIYh0xycTLpsuDKeD5nfVoGQG4T79f%2BO4Nv%2B%2BeDrjVWLyLB99EL3dJg4IGW78%2FzCIdDQFzeOU9S%2ByQJVpE1sku2xjvcpfmsAabTz4Bpww1ukEeX4HxvA07oU0MFdsNA6NNi6kgxCCrhQizNtrmmr%2BMJJ1X23RfCA%2BklHXW%2FwWI63zuwxnMqq3aNR6lGrAu7PC0Son%2FJjYiRyxXr%2FDlUA%2BWi%2B1%2BBm5GbrZP93530BYnvUFMXSqqdxgHgsp6HWAjq7HNGso2cFcbynXUYtrqzQ1NuCgfrNsxmV%2FSEB14zV7SmuZixbVSrbZ%2FpxNm%2Bu9Y6pu8LVYUwRc1OoizrWjeeWwg%2FQQAeJ%2F%2B3Z1%2FRk8T5TFBU3ZD%2FxqWzIy%2BiPYUdskj7jEFO%2Bs9s%2FfTTGFd5b6EDJ8gw4yFDJqhGYjNQSHkgjEhAVFI3%2Bc94wpcGAvQY6pgFPcbbGbjkw0BmOscMP24SXon5%2FIAnEJGyOIF5dyLwvMIC1WysXv5sgUF5V27839IyFRwYGiJ0v%2BbLGbjNHtuEzEHjvw5EmhIKtKw4mELAD88qooAs0G96Bvys%2BGTcoszNYcaxMXWqL1Du%2B%2FsVxclXA01NiYCgrtVYI6JoQAYeATDwagKvM2jMuI5ve%2BtfigAUqV65JC4w2FSvOFQFITuLbrGxn1tcs&X-Amz-Signature=f4590df8481b89965786beee412730e485806f04895ec8391b38e87760d315fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAGWTB2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhibNfN8F0DGAry7CNj3okkK6OwwWhc7gOUS00pHPjAAiBtC%2BqB%2BYMRXtwPEpm1J0%2FwHtCd8PllnPXdLMkNS731OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwLwEqpMHpH4S3ZmKtwDiCoYR%2FSNrG9NBvwYN%2BZK2VSZx2snhGOx75SvbAoJDY6wyG3NdMfGey6qVezQkJK1xFMjrmETS5atiDDD%2FSy2GQeYGMjJ5bKb%2BAEfc7DT2oK4QXcRMozgJ52htfet%2B85mURjXoHFd937yTLL1S49NmEvJlI7fhrCJ%2BWZi%2FGLOHsM1a8BAgJRP7XsOU91GcKfHEZC8XhAcmIYh0xycTLpsuDKeD5nfVoGQG4T79f%2BO4Nv%2B%2BeDrjVWLyLB99EL3dJg4IGW78%2FzCIdDQFzeOU9S%2ByQJVpE1sku2xjvcpfmsAabTz4Bpww1ukEeX4HxvA07oU0MFdsNA6NNi6kgxCCrhQizNtrmmr%2BMJJ1X23RfCA%2BklHXW%2FwWI63zuwxnMqq3aNR6lGrAu7PC0Son%2FJjYiRyxXr%2FDlUA%2BWi%2B1%2BBm5GbrZP93530BYnvUFMXSqqdxgHgsp6HWAjq7HNGso2cFcbynXUYtrqzQ1NuCgfrNsxmV%2FSEB14zV7SmuZixbVSrbZ%2FpxNm%2Bu9Y6pu8LVYUwRc1OoizrWjeeWwg%2FQQAeJ%2F%2B3Z1%2FRk8T5TFBU3ZD%2FxqWzIy%2BiPYUdskj7jEFO%2Bs9s%2FfTTGFd5b6EDJ8gw4yFDJqhGYjNQSHkgjEhAVFI3%2Bc94wpcGAvQY6pgFPcbbGbjkw0BmOscMP24SXon5%2FIAnEJGyOIF5dyLwvMIC1WysXv5sgUF5V27839IyFRwYGiJ0v%2BbLGbjNHtuEzEHjvw5EmhIKtKw4mELAD88qooAs0G96Bvys%2BGTcoszNYcaxMXWqL1Du%2B%2FsVxclXA01NiYCgrtVYI6JoQAYeATDwagKvM2jMuI5ve%2BtfigAUqV65JC4w2FSvOFQFITuLbrGxn1tcs&X-Amz-Signature=65f56b503c03816182aa73e05e3cdf310dbfb0fa25ffb1efcc58227d9a47a2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAGWTB2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhibNfN8F0DGAry7CNj3okkK6OwwWhc7gOUS00pHPjAAiBtC%2BqB%2BYMRXtwPEpm1J0%2FwHtCd8PllnPXdLMkNS731OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwLwEqpMHpH4S3ZmKtwDiCoYR%2FSNrG9NBvwYN%2BZK2VSZx2snhGOx75SvbAoJDY6wyG3NdMfGey6qVezQkJK1xFMjrmETS5atiDDD%2FSy2GQeYGMjJ5bKb%2BAEfc7DT2oK4QXcRMozgJ52htfet%2B85mURjXoHFd937yTLL1S49NmEvJlI7fhrCJ%2BWZi%2FGLOHsM1a8BAgJRP7XsOU91GcKfHEZC8XhAcmIYh0xycTLpsuDKeD5nfVoGQG4T79f%2BO4Nv%2B%2BeDrjVWLyLB99EL3dJg4IGW78%2FzCIdDQFzeOU9S%2ByQJVpE1sku2xjvcpfmsAabTz4Bpww1ukEeX4HxvA07oU0MFdsNA6NNi6kgxCCrhQizNtrmmr%2BMJJ1X23RfCA%2BklHXW%2FwWI63zuwxnMqq3aNR6lGrAu7PC0Son%2FJjYiRyxXr%2FDlUA%2BWi%2B1%2BBm5GbrZP93530BYnvUFMXSqqdxgHgsp6HWAjq7HNGso2cFcbynXUYtrqzQ1NuCgfrNsxmV%2FSEB14zV7SmuZixbVSrbZ%2FpxNm%2Bu9Y6pu8LVYUwRc1OoizrWjeeWwg%2FQQAeJ%2F%2B3Z1%2FRk8T5TFBU3ZD%2FxqWzIy%2BiPYUdskj7jEFO%2Bs9s%2FfTTGFd5b6EDJ8gw4yFDJqhGYjNQSHkgjEhAVFI3%2Bc94wpcGAvQY6pgFPcbbGbjkw0BmOscMP24SXon5%2FIAnEJGyOIF5dyLwvMIC1WysXv5sgUF5V27839IyFRwYGiJ0v%2BbLGbjNHtuEzEHjvw5EmhIKtKw4mELAD88qooAs0G96Bvys%2BGTcoszNYcaxMXWqL1Du%2B%2FsVxclXA01NiYCgrtVYI6JoQAYeATDwagKvM2jMuI5ve%2BtfigAUqV65JC4w2FSvOFQFITuLbrGxn1tcs&X-Amz-Signature=5cc5dda60d24e0a4ed64a22b2c69c247396dfd573ee605056de9ab4d8ed0cb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAGWTB2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhibNfN8F0DGAry7CNj3okkK6OwwWhc7gOUS00pHPjAAiBtC%2BqB%2BYMRXtwPEpm1J0%2FwHtCd8PllnPXdLMkNS731OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwLwEqpMHpH4S3ZmKtwDiCoYR%2FSNrG9NBvwYN%2BZK2VSZx2snhGOx75SvbAoJDY6wyG3NdMfGey6qVezQkJK1xFMjrmETS5atiDDD%2FSy2GQeYGMjJ5bKb%2BAEfc7DT2oK4QXcRMozgJ52htfet%2B85mURjXoHFd937yTLL1S49NmEvJlI7fhrCJ%2BWZi%2FGLOHsM1a8BAgJRP7XsOU91GcKfHEZC8XhAcmIYh0xycTLpsuDKeD5nfVoGQG4T79f%2BO4Nv%2B%2BeDrjVWLyLB99EL3dJg4IGW78%2FzCIdDQFzeOU9S%2ByQJVpE1sku2xjvcpfmsAabTz4Bpww1ukEeX4HxvA07oU0MFdsNA6NNi6kgxCCrhQizNtrmmr%2BMJJ1X23RfCA%2BklHXW%2FwWI63zuwxnMqq3aNR6lGrAu7PC0Son%2FJjYiRyxXr%2FDlUA%2BWi%2B1%2BBm5GbrZP93530BYnvUFMXSqqdxgHgsp6HWAjq7HNGso2cFcbynXUYtrqzQ1NuCgfrNsxmV%2FSEB14zV7SmuZixbVSrbZ%2FpxNm%2Bu9Y6pu8LVYUwRc1OoizrWjeeWwg%2FQQAeJ%2F%2B3Z1%2FRk8T5TFBU3ZD%2FxqWzIy%2BiPYUdskj7jEFO%2Bs9s%2FfTTGFd5b6EDJ8gw4yFDJqhGYjNQSHkgjEhAVFI3%2Bc94wpcGAvQY6pgFPcbbGbjkw0BmOscMP24SXon5%2FIAnEJGyOIF5dyLwvMIC1WysXv5sgUF5V27839IyFRwYGiJ0v%2BbLGbjNHtuEzEHjvw5EmhIKtKw4mELAD88qooAs0G96Bvys%2BGTcoszNYcaxMXWqL1Du%2B%2FsVxclXA01NiYCgrtVYI6JoQAYeATDwagKvM2jMuI5ve%2BtfigAUqV65JC4w2FSvOFQFITuLbrGxn1tcs&X-Amz-Signature=eba21f571a528b4e7465afc115ad13a8c0c784e4dd4723788c56494e77ada9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
