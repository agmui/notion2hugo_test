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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JC5EW5W%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGgodSpHu4AwPSHcUzCcu%2Be1n%2BJoh%2FA6GwoJn%2BLqEO7TAiEAjd2okTTHNhkASbCbF6CZoF6%2Bx%2FgPKKTh6ApNxZwSJgMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIQkPTogZIX05H1egCrcAwfG1ShI8erkToB7fx9NRs%2BdstXVSeaigCIH5RNTmFvXrPwpntzXiOiDUw6%2BrRHI0Ui7b8l6Jf%2BE13VnZLxAO3rxRrd%2FDUupDgpq7dptkK0oUrx1JSdpBoWExz88%2FnDtY8jcnk3oPu7bf4JQOXQ2XXDrt5X%2FGZEoBfW4YCtgIld91ZqvCOuZvZUvBGryJk03Mb8VBOd4RYMYJgj54ev28cEtuDeO7ynir3HN65GAiwUlAJzET2Mj1%2BaiCUZTgfEHg8%2FLPixb3xuRZuCjI69%2Bc%2BC2fmxM5hQakERD%2BIcq%2FfHGsuInChh9oljKMdrLerduNdy7e7taFcEFx6lWHh92WF2Q5hA5OWtt4oVDDiBHYLLKQfiDqqY3P647zOqoGOQ1c4J0xhU4Tls9aDp57NZJsWX4Z%2FBniTNoUnB%2Bbk7cwfRFzZCscCmDsfEySsqG%2B5qsfcC1gBvN2fccDTq68nV5xwvSyFxvHPJBVCtLfhNfC59jVCOAuJT42gGaRVfA8caLuTGuuj%2FFPHCW4x12oXcwyEE2TPp3%2BfFqO%2BjsnegfxmgURMR2bgEV5HPbNJYj22ynzAO%2FSJK%2BPheoEWS%2BE4psGRMQMo6lMTcr1m7DKh%2FsLHgNLi5gm9pyxk3dggU9MLrK9b0GOqUBabJAhHRXl3HY3Vb3d9MAvNrjCbR8raBkUgza%2Ffv%2FMFaMghJ66Sy%2FNRO3NINSZbBlVwcVEiQaRbN%2BKKJOf7odmSD9k9xVhsZiM6n7fCkYWeyzxlU8DjlfKPido2auQphI9Ajb6wUiUnBrYrDVkq2DGrxQQMsm%2BVlNMp%2Fjd3i%2FuA1W60skQAAD8U91dLR3yXYedBreWtK5t2B6YUiEjytxcS%2BicF9d&X-Amz-Signature=be30822237f7c4315d64e117db32b39181cf90acf0d162ac1669d643c7e8a14b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JC5EW5W%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGgodSpHu4AwPSHcUzCcu%2Be1n%2BJoh%2FA6GwoJn%2BLqEO7TAiEAjd2okTTHNhkASbCbF6CZoF6%2Bx%2FgPKKTh6ApNxZwSJgMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIQkPTogZIX05H1egCrcAwfG1ShI8erkToB7fx9NRs%2BdstXVSeaigCIH5RNTmFvXrPwpntzXiOiDUw6%2BrRHI0Ui7b8l6Jf%2BE13VnZLxAO3rxRrd%2FDUupDgpq7dptkK0oUrx1JSdpBoWExz88%2FnDtY8jcnk3oPu7bf4JQOXQ2XXDrt5X%2FGZEoBfW4YCtgIld91ZqvCOuZvZUvBGryJk03Mb8VBOd4RYMYJgj54ev28cEtuDeO7ynir3HN65GAiwUlAJzET2Mj1%2BaiCUZTgfEHg8%2FLPixb3xuRZuCjI69%2Bc%2BC2fmxM5hQakERD%2BIcq%2FfHGsuInChh9oljKMdrLerduNdy7e7taFcEFx6lWHh92WF2Q5hA5OWtt4oVDDiBHYLLKQfiDqqY3P647zOqoGOQ1c4J0xhU4Tls9aDp57NZJsWX4Z%2FBniTNoUnB%2Bbk7cwfRFzZCscCmDsfEySsqG%2B5qsfcC1gBvN2fccDTq68nV5xwvSyFxvHPJBVCtLfhNfC59jVCOAuJT42gGaRVfA8caLuTGuuj%2FFPHCW4x12oXcwyEE2TPp3%2BfFqO%2BjsnegfxmgURMR2bgEV5HPbNJYj22ynzAO%2FSJK%2BPheoEWS%2BE4psGRMQMo6lMTcr1m7DKh%2FsLHgNLi5gm9pyxk3dggU9MLrK9b0GOqUBabJAhHRXl3HY3Vb3d9MAvNrjCbR8raBkUgza%2Ffv%2FMFaMghJ66Sy%2FNRO3NINSZbBlVwcVEiQaRbN%2BKKJOf7odmSD9k9xVhsZiM6n7fCkYWeyzxlU8DjlfKPido2auQphI9Ajb6wUiUnBrYrDVkq2DGrxQQMsm%2BVlNMp%2Fjd3i%2FuA1W60skQAAD8U91dLR3yXYedBreWtK5t2B6YUiEjytxcS%2BicF9d&X-Amz-Signature=b8bb127451e3b5bb31d5f444490e39da077a821a142bfb3912044b03d8fdfb83&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JC5EW5W%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGgodSpHu4AwPSHcUzCcu%2Be1n%2BJoh%2FA6GwoJn%2BLqEO7TAiEAjd2okTTHNhkASbCbF6CZoF6%2Bx%2FgPKKTh6ApNxZwSJgMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIQkPTogZIX05H1egCrcAwfG1ShI8erkToB7fx9NRs%2BdstXVSeaigCIH5RNTmFvXrPwpntzXiOiDUw6%2BrRHI0Ui7b8l6Jf%2BE13VnZLxAO3rxRrd%2FDUupDgpq7dptkK0oUrx1JSdpBoWExz88%2FnDtY8jcnk3oPu7bf4JQOXQ2XXDrt5X%2FGZEoBfW4YCtgIld91ZqvCOuZvZUvBGryJk03Mb8VBOd4RYMYJgj54ev28cEtuDeO7ynir3HN65GAiwUlAJzET2Mj1%2BaiCUZTgfEHg8%2FLPixb3xuRZuCjI69%2Bc%2BC2fmxM5hQakERD%2BIcq%2FfHGsuInChh9oljKMdrLerduNdy7e7taFcEFx6lWHh92WF2Q5hA5OWtt4oVDDiBHYLLKQfiDqqY3P647zOqoGOQ1c4J0xhU4Tls9aDp57NZJsWX4Z%2FBniTNoUnB%2Bbk7cwfRFzZCscCmDsfEySsqG%2B5qsfcC1gBvN2fccDTq68nV5xwvSyFxvHPJBVCtLfhNfC59jVCOAuJT42gGaRVfA8caLuTGuuj%2FFPHCW4x12oXcwyEE2TPp3%2BfFqO%2BjsnegfxmgURMR2bgEV5HPbNJYj22ynzAO%2FSJK%2BPheoEWS%2BE4psGRMQMo6lMTcr1m7DKh%2FsLHgNLi5gm9pyxk3dggU9MLrK9b0GOqUBabJAhHRXl3HY3Vb3d9MAvNrjCbR8raBkUgza%2Ffv%2FMFaMghJ66Sy%2FNRO3NINSZbBlVwcVEiQaRbN%2BKKJOf7odmSD9k9xVhsZiM6n7fCkYWeyzxlU8DjlfKPido2auQphI9Ajb6wUiUnBrYrDVkq2DGrxQQMsm%2BVlNMp%2Fjd3i%2FuA1W60skQAAD8U91dLR3yXYedBreWtK5t2B6YUiEjytxcS%2BicF9d&X-Amz-Signature=8a6f57b7e6b26f45f3cd62da14de094960d498a67e69d86dd62099486b095ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JC5EW5W%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGgodSpHu4AwPSHcUzCcu%2Be1n%2BJoh%2FA6GwoJn%2BLqEO7TAiEAjd2okTTHNhkASbCbF6CZoF6%2Bx%2FgPKKTh6ApNxZwSJgMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIQkPTogZIX05H1egCrcAwfG1ShI8erkToB7fx9NRs%2BdstXVSeaigCIH5RNTmFvXrPwpntzXiOiDUw6%2BrRHI0Ui7b8l6Jf%2BE13VnZLxAO3rxRrd%2FDUupDgpq7dptkK0oUrx1JSdpBoWExz88%2FnDtY8jcnk3oPu7bf4JQOXQ2XXDrt5X%2FGZEoBfW4YCtgIld91ZqvCOuZvZUvBGryJk03Mb8VBOd4RYMYJgj54ev28cEtuDeO7ynir3HN65GAiwUlAJzET2Mj1%2BaiCUZTgfEHg8%2FLPixb3xuRZuCjI69%2Bc%2BC2fmxM5hQakERD%2BIcq%2FfHGsuInChh9oljKMdrLerduNdy7e7taFcEFx6lWHh92WF2Q5hA5OWtt4oVDDiBHYLLKQfiDqqY3P647zOqoGOQ1c4J0xhU4Tls9aDp57NZJsWX4Z%2FBniTNoUnB%2Bbk7cwfRFzZCscCmDsfEySsqG%2B5qsfcC1gBvN2fccDTq68nV5xwvSyFxvHPJBVCtLfhNfC59jVCOAuJT42gGaRVfA8caLuTGuuj%2FFPHCW4x12oXcwyEE2TPp3%2BfFqO%2BjsnegfxmgURMR2bgEV5HPbNJYj22ynzAO%2FSJK%2BPheoEWS%2BE4psGRMQMo6lMTcr1m7DKh%2FsLHgNLi5gm9pyxk3dggU9MLrK9b0GOqUBabJAhHRXl3HY3Vb3d9MAvNrjCbR8raBkUgza%2Ffv%2FMFaMghJ66Sy%2FNRO3NINSZbBlVwcVEiQaRbN%2BKKJOf7odmSD9k9xVhsZiM6n7fCkYWeyzxlU8DjlfKPido2auQphI9Ajb6wUiUnBrYrDVkq2DGrxQQMsm%2BVlNMp%2Fjd3i%2FuA1W60skQAAD8U91dLR3yXYedBreWtK5t2B6YUiEjytxcS%2BicF9d&X-Amz-Signature=adc8251f7a74ccf72c38e37584cae8833a5b81151a0ab6b2a33e756931ff2ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JC5EW5W%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGgodSpHu4AwPSHcUzCcu%2Be1n%2BJoh%2FA6GwoJn%2BLqEO7TAiEAjd2okTTHNhkASbCbF6CZoF6%2Bx%2FgPKKTh6ApNxZwSJgMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIQkPTogZIX05H1egCrcAwfG1ShI8erkToB7fx9NRs%2BdstXVSeaigCIH5RNTmFvXrPwpntzXiOiDUw6%2BrRHI0Ui7b8l6Jf%2BE13VnZLxAO3rxRrd%2FDUupDgpq7dptkK0oUrx1JSdpBoWExz88%2FnDtY8jcnk3oPu7bf4JQOXQ2XXDrt5X%2FGZEoBfW4YCtgIld91ZqvCOuZvZUvBGryJk03Mb8VBOd4RYMYJgj54ev28cEtuDeO7ynir3HN65GAiwUlAJzET2Mj1%2BaiCUZTgfEHg8%2FLPixb3xuRZuCjI69%2Bc%2BC2fmxM5hQakERD%2BIcq%2FfHGsuInChh9oljKMdrLerduNdy7e7taFcEFx6lWHh92WF2Q5hA5OWtt4oVDDiBHYLLKQfiDqqY3P647zOqoGOQ1c4J0xhU4Tls9aDp57NZJsWX4Z%2FBniTNoUnB%2Bbk7cwfRFzZCscCmDsfEySsqG%2B5qsfcC1gBvN2fccDTq68nV5xwvSyFxvHPJBVCtLfhNfC59jVCOAuJT42gGaRVfA8caLuTGuuj%2FFPHCW4x12oXcwyEE2TPp3%2BfFqO%2BjsnegfxmgURMR2bgEV5HPbNJYj22ynzAO%2FSJK%2BPheoEWS%2BE4psGRMQMo6lMTcr1m7DKh%2FsLHgNLi5gm9pyxk3dggU9MLrK9b0GOqUBabJAhHRXl3HY3Vb3d9MAvNrjCbR8raBkUgza%2Ffv%2FMFaMghJ66Sy%2FNRO3NINSZbBlVwcVEiQaRbN%2BKKJOf7odmSD9k9xVhsZiM6n7fCkYWeyzxlU8DjlfKPido2auQphI9Ajb6wUiUnBrYrDVkq2DGrxQQMsm%2BVlNMp%2Fjd3i%2FuA1W60skQAAD8U91dLR3yXYedBreWtK5t2B6YUiEjytxcS%2BicF9d&X-Amz-Signature=53e81a278576851e3eb41cc3a2ff876692b12dbf5250c54f87f9bae57010a457&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
