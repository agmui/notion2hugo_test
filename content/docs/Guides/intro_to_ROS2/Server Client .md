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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B2HXIZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGd43MSYF%2B4cjwwzTkmEVEmqMYZ9K3AO80DC7qOzaojgIgJAfRDmsnWBMu%2F2Imweg5kmwSqHU4HY7Z4XuZ7AcIOFsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEgTumzUjwr6J0jqmyrcA%2BzJat4kP3qTxWixngu4Yy%2B%2By%2FMP4FNdxOz5L5Z47jgZXKqKAsJHf3sR9VY5oCR865cw5xz599lSpTJ4CTNLVVv2ledYDK8WIio74WqBKuzGAuYsAxvfd%2BzzOTjcYzPB3GF6kzBpPEo47bJH5fDoms6hNRpwdeFMWlLirE36vlrDYBzwFlwCiuTyAM6M1AlSGbMdnS2%2F0KJ1rr5daZI6ou0b9YzZZiiA2HlgzyHq8d1VhoZB84YQkdjISG44CoYFYdPWFsoUkKLgwbPzmgYPZo0WHISlcm%2B7nxPAp4Jzl%2BIIhaJEfo4dH3Wu%2BS0SVZpMz%2FqxSV0rPcd1ASyCyjurqa2rC2VBrvholFGrnuX8PaqAR7b2cDyWeXfuNX3828J9QiHcJi1wR69MtJnpkeKremRXU2Soi0eiZz5mDGirXJbylkvlBoV2mPFL3whMsFYFrGT2%2BicSd1FK%2FFXWTNDIBHVPk8S84gsHakmK10xhhVvVcZZySu%2F8JDCXCx3wTwEpp7NtQidm07oz1l0zeOnMBPwIF26iQai6OxuH0%2FACkUjlt1qt%2Bk2cUvXV1Q4jOWg2UEI%2Fv906K2l3E58JW2GN9GX6n7NHD2QzJRdL1ouJ9bFn8eCpQMJVTxiddaRqMJX5icAGOqUBBmUEpfgvs7qVRr43WzbBxbNihP919a1ikpcSljqfZcu7Dun%2Bn00Q9as5hBNpVP6JMdTseroobG4RgPl1FMFmHYYJ5lYq6kN9Pv8m0uup%2B1WXsYMdV7JxCZzqOKDrDf4H08VcNVjbaaHbiyHyOn61neMJExQe9cX1wYv1ddGLRHkDBPiO%2FJ0m2YCPqmfP0w24irov7Y4OvLGWabpCjgBE%2BpI6ik0T&X-Amz-Signature=db90b1b930c3460123ef6c5ae9b3ac1df0179e40d534e5ec22c34005b37fae04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B2HXIZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGd43MSYF%2B4cjwwzTkmEVEmqMYZ9K3AO80DC7qOzaojgIgJAfRDmsnWBMu%2F2Imweg5kmwSqHU4HY7Z4XuZ7AcIOFsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEgTumzUjwr6J0jqmyrcA%2BzJat4kP3qTxWixngu4Yy%2B%2By%2FMP4FNdxOz5L5Z47jgZXKqKAsJHf3sR9VY5oCR865cw5xz599lSpTJ4CTNLVVv2ledYDK8WIio74WqBKuzGAuYsAxvfd%2BzzOTjcYzPB3GF6kzBpPEo47bJH5fDoms6hNRpwdeFMWlLirE36vlrDYBzwFlwCiuTyAM6M1AlSGbMdnS2%2F0KJ1rr5daZI6ou0b9YzZZiiA2HlgzyHq8d1VhoZB84YQkdjISG44CoYFYdPWFsoUkKLgwbPzmgYPZo0WHISlcm%2B7nxPAp4Jzl%2BIIhaJEfo4dH3Wu%2BS0SVZpMz%2FqxSV0rPcd1ASyCyjurqa2rC2VBrvholFGrnuX8PaqAR7b2cDyWeXfuNX3828J9QiHcJi1wR69MtJnpkeKremRXU2Soi0eiZz5mDGirXJbylkvlBoV2mPFL3whMsFYFrGT2%2BicSd1FK%2FFXWTNDIBHVPk8S84gsHakmK10xhhVvVcZZySu%2F8JDCXCx3wTwEpp7NtQidm07oz1l0zeOnMBPwIF26iQai6OxuH0%2FACkUjlt1qt%2Bk2cUvXV1Q4jOWg2UEI%2Fv906K2l3E58JW2GN9GX6n7NHD2QzJRdL1ouJ9bFn8eCpQMJVTxiddaRqMJX5icAGOqUBBmUEpfgvs7qVRr43WzbBxbNihP919a1ikpcSljqfZcu7Dun%2Bn00Q9as5hBNpVP6JMdTseroobG4RgPl1FMFmHYYJ5lYq6kN9Pv8m0uup%2B1WXsYMdV7JxCZzqOKDrDf4H08VcNVjbaaHbiyHyOn61neMJExQe9cX1wYv1ddGLRHkDBPiO%2FJ0m2YCPqmfP0w24irov7Y4OvLGWabpCjgBE%2BpI6ik0T&X-Amz-Signature=64b17e1c973f6a0b6651f879cedf569e79562684404fd8949aa1e441d00e292c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B2HXIZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGd43MSYF%2B4cjwwzTkmEVEmqMYZ9K3AO80DC7qOzaojgIgJAfRDmsnWBMu%2F2Imweg5kmwSqHU4HY7Z4XuZ7AcIOFsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEgTumzUjwr6J0jqmyrcA%2BzJat4kP3qTxWixngu4Yy%2B%2By%2FMP4FNdxOz5L5Z47jgZXKqKAsJHf3sR9VY5oCR865cw5xz599lSpTJ4CTNLVVv2ledYDK8WIio74WqBKuzGAuYsAxvfd%2BzzOTjcYzPB3GF6kzBpPEo47bJH5fDoms6hNRpwdeFMWlLirE36vlrDYBzwFlwCiuTyAM6M1AlSGbMdnS2%2F0KJ1rr5daZI6ou0b9YzZZiiA2HlgzyHq8d1VhoZB84YQkdjISG44CoYFYdPWFsoUkKLgwbPzmgYPZo0WHISlcm%2B7nxPAp4Jzl%2BIIhaJEfo4dH3Wu%2BS0SVZpMz%2FqxSV0rPcd1ASyCyjurqa2rC2VBrvholFGrnuX8PaqAR7b2cDyWeXfuNX3828J9QiHcJi1wR69MtJnpkeKremRXU2Soi0eiZz5mDGirXJbylkvlBoV2mPFL3whMsFYFrGT2%2BicSd1FK%2FFXWTNDIBHVPk8S84gsHakmK10xhhVvVcZZySu%2F8JDCXCx3wTwEpp7NtQidm07oz1l0zeOnMBPwIF26iQai6OxuH0%2FACkUjlt1qt%2Bk2cUvXV1Q4jOWg2UEI%2Fv906K2l3E58JW2GN9GX6n7NHD2QzJRdL1ouJ9bFn8eCpQMJVTxiddaRqMJX5icAGOqUBBmUEpfgvs7qVRr43WzbBxbNihP919a1ikpcSljqfZcu7Dun%2Bn00Q9as5hBNpVP6JMdTseroobG4RgPl1FMFmHYYJ5lYq6kN9Pv8m0uup%2B1WXsYMdV7JxCZzqOKDrDf4H08VcNVjbaaHbiyHyOn61neMJExQe9cX1wYv1ddGLRHkDBPiO%2FJ0m2YCPqmfP0w24irov7Y4OvLGWabpCjgBE%2BpI6ik0T&X-Amz-Signature=7bd837c8f131e7dc072eda30d4e5f2341379b9319ee7f4090352f58e0c36bd32&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B2HXIZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGd43MSYF%2B4cjwwzTkmEVEmqMYZ9K3AO80DC7qOzaojgIgJAfRDmsnWBMu%2F2Imweg5kmwSqHU4HY7Z4XuZ7AcIOFsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEgTumzUjwr6J0jqmyrcA%2BzJat4kP3qTxWixngu4Yy%2B%2By%2FMP4FNdxOz5L5Z47jgZXKqKAsJHf3sR9VY5oCR865cw5xz599lSpTJ4CTNLVVv2ledYDK8WIio74WqBKuzGAuYsAxvfd%2BzzOTjcYzPB3GF6kzBpPEo47bJH5fDoms6hNRpwdeFMWlLirE36vlrDYBzwFlwCiuTyAM6M1AlSGbMdnS2%2F0KJ1rr5daZI6ou0b9YzZZiiA2HlgzyHq8d1VhoZB84YQkdjISG44CoYFYdPWFsoUkKLgwbPzmgYPZo0WHISlcm%2B7nxPAp4Jzl%2BIIhaJEfo4dH3Wu%2BS0SVZpMz%2FqxSV0rPcd1ASyCyjurqa2rC2VBrvholFGrnuX8PaqAR7b2cDyWeXfuNX3828J9QiHcJi1wR69MtJnpkeKremRXU2Soi0eiZz5mDGirXJbylkvlBoV2mPFL3whMsFYFrGT2%2BicSd1FK%2FFXWTNDIBHVPk8S84gsHakmK10xhhVvVcZZySu%2F8JDCXCx3wTwEpp7NtQidm07oz1l0zeOnMBPwIF26iQai6OxuH0%2FACkUjlt1qt%2Bk2cUvXV1Q4jOWg2UEI%2Fv906K2l3E58JW2GN9GX6n7NHD2QzJRdL1ouJ9bFn8eCpQMJVTxiddaRqMJX5icAGOqUBBmUEpfgvs7qVRr43WzbBxbNihP919a1ikpcSljqfZcu7Dun%2Bn00Q9as5hBNpVP6JMdTseroobG4RgPl1FMFmHYYJ5lYq6kN9Pv8m0uup%2B1WXsYMdV7JxCZzqOKDrDf4H08VcNVjbaaHbiyHyOn61neMJExQe9cX1wYv1ddGLRHkDBPiO%2FJ0m2YCPqmfP0w24irov7Y4OvLGWabpCjgBE%2BpI6ik0T&X-Amz-Signature=33a62ef15a5744167384a3a2812c3923181314ae69d62468716473b1633c8cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B2HXIZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGd43MSYF%2B4cjwwzTkmEVEmqMYZ9K3AO80DC7qOzaojgIgJAfRDmsnWBMu%2F2Imweg5kmwSqHU4HY7Z4XuZ7AcIOFsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEgTumzUjwr6J0jqmyrcA%2BzJat4kP3qTxWixngu4Yy%2B%2By%2FMP4FNdxOz5L5Z47jgZXKqKAsJHf3sR9VY5oCR865cw5xz599lSpTJ4CTNLVVv2ledYDK8WIio74WqBKuzGAuYsAxvfd%2BzzOTjcYzPB3GF6kzBpPEo47bJH5fDoms6hNRpwdeFMWlLirE36vlrDYBzwFlwCiuTyAM6M1AlSGbMdnS2%2F0KJ1rr5daZI6ou0b9YzZZiiA2HlgzyHq8d1VhoZB84YQkdjISG44CoYFYdPWFsoUkKLgwbPzmgYPZo0WHISlcm%2B7nxPAp4Jzl%2BIIhaJEfo4dH3Wu%2BS0SVZpMz%2FqxSV0rPcd1ASyCyjurqa2rC2VBrvholFGrnuX8PaqAR7b2cDyWeXfuNX3828J9QiHcJi1wR69MtJnpkeKremRXU2Soi0eiZz5mDGirXJbylkvlBoV2mPFL3whMsFYFrGT2%2BicSd1FK%2FFXWTNDIBHVPk8S84gsHakmK10xhhVvVcZZySu%2F8JDCXCx3wTwEpp7NtQidm07oz1l0zeOnMBPwIF26iQai6OxuH0%2FACkUjlt1qt%2Bk2cUvXV1Q4jOWg2UEI%2Fv906K2l3E58JW2GN9GX6n7NHD2QzJRdL1ouJ9bFn8eCpQMJVTxiddaRqMJX5icAGOqUBBmUEpfgvs7qVRr43WzbBxbNihP919a1ikpcSljqfZcu7Dun%2Bn00Q9as5hBNpVP6JMdTseroobG4RgPl1FMFmHYYJ5lYq6kN9Pv8m0uup%2B1WXsYMdV7JxCZzqOKDrDf4H08VcNVjbaaHbiyHyOn61neMJExQe9cX1wYv1ddGLRHkDBPiO%2FJ0m2YCPqmfP0w24irov7Y4OvLGWabpCjgBE%2BpI6ik0T&X-Amz-Signature=a2bb1abaa9265933e853e13d2d78155461fd26fe72b189d51b58e5450db37707&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
