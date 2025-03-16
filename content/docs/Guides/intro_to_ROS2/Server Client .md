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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2N4DV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEDhFuIG7gX3AxNDY0zKEOBIrt0C6K5BRoBIi7g71fAiBY%2Bja8hO9PH4TYVvaV3yJSWFFOT0B9ZGhTonvlSjqX6Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcvCHobIww%2Fssln6mKtwDmwtfpIJ2ewjjfaD6NpoLl1eEHTIqts%2B2d1nV5mM1muuCG783v6I%2Bkc%2BcQJUxxL4zPWYYkOdYhvpu6f1xeUAuK%2BUGgRvtx26ihziBT%2FE0WeBV0%2BA5y4L0w4t1Bny7Xq71xAXne2EUCNgTWUcIKZA%2BeYgSHGcfsNNlpoeFz7Aip1i0iAacfZWULmtrnpuV4Js9ev0RQbInvJvmGswhL7EgqGaHWDZKWEof57%2BqjBrlIIrKpcyIRkfMTN9eA0XD4xII1iGRsTtDFVAwtOmpC9dajp0bChQs27LGOO92o3mxGkpebR4Mw0A%2BO6U%2BVgOW%2BvUD%2BzH7lBsc0%2FIajc69rPaFUTAVHsIrmRz%2FNW9L3lxRZpFSBZX3UiVFc9eQl10%2F5Tpv96yfgWO9Ywv9%2FC7iofrDVxdZI3V0B9aCrTG6WdBtjOtludtagVk9IITGoJfO1alTwJwBAk0smmS5hqbdTXb3QrSZ%2BJICHfZcLptfjTL%2BS%2FF12iHBlwH%2BpaiMkaRiTa0j7ea%2F%2BHqZ31RoDgkEE4DwaQfJzmv%2Fyu3yAYtVruFiz2LWXD%2B2h32dU0Iw1FaI54uYgh%2FQqHQGjKgpq%2B4e72zGttw1XokuL1KnmtqFFlbyz023Y%2FLeil9mvaT1YU0wrZ3dvgY6pgFk1qgUByILOU7AxqLUFRH3kFf6aJ0%2BtvAN%2B%2FY7bEnf0C7%2FoccFLU5Riy9g5v44IFXF5p6%2BOr5IVyzGGANJdsypyeMMis7cWaTgKRw5gGePZPqr1GghsMSzWKMfJmTWp3BL5SuyXzc0x1T3DSYCMpITckcceY2tqTYgJZ8a1pq%2B%2B%2FzTdhI0ZJI3frDNBkYTFaq6cchhwNPWS%2B1bN3RS6epzDLN99OYE&X-Amz-Signature=a1316e9e5370368a9a797f7e0657b442a13993ace8e8ab43facf0cf49d02e9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2N4DV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEDhFuIG7gX3AxNDY0zKEOBIrt0C6K5BRoBIi7g71fAiBY%2Bja8hO9PH4TYVvaV3yJSWFFOT0B9ZGhTonvlSjqX6Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcvCHobIww%2Fssln6mKtwDmwtfpIJ2ewjjfaD6NpoLl1eEHTIqts%2B2d1nV5mM1muuCG783v6I%2Bkc%2BcQJUxxL4zPWYYkOdYhvpu6f1xeUAuK%2BUGgRvtx26ihziBT%2FE0WeBV0%2BA5y4L0w4t1Bny7Xq71xAXne2EUCNgTWUcIKZA%2BeYgSHGcfsNNlpoeFz7Aip1i0iAacfZWULmtrnpuV4Js9ev0RQbInvJvmGswhL7EgqGaHWDZKWEof57%2BqjBrlIIrKpcyIRkfMTN9eA0XD4xII1iGRsTtDFVAwtOmpC9dajp0bChQs27LGOO92o3mxGkpebR4Mw0A%2BO6U%2BVgOW%2BvUD%2BzH7lBsc0%2FIajc69rPaFUTAVHsIrmRz%2FNW9L3lxRZpFSBZX3UiVFc9eQl10%2F5Tpv96yfgWO9Ywv9%2FC7iofrDVxdZI3V0B9aCrTG6WdBtjOtludtagVk9IITGoJfO1alTwJwBAk0smmS5hqbdTXb3QrSZ%2BJICHfZcLptfjTL%2BS%2FF12iHBlwH%2BpaiMkaRiTa0j7ea%2F%2BHqZ31RoDgkEE4DwaQfJzmv%2Fyu3yAYtVruFiz2LWXD%2B2h32dU0Iw1FaI54uYgh%2FQqHQGjKgpq%2B4e72zGttw1XokuL1KnmtqFFlbyz023Y%2FLeil9mvaT1YU0wrZ3dvgY6pgFk1qgUByILOU7AxqLUFRH3kFf6aJ0%2BtvAN%2B%2FY7bEnf0C7%2FoccFLU5Riy9g5v44IFXF5p6%2BOr5IVyzGGANJdsypyeMMis7cWaTgKRw5gGePZPqr1GghsMSzWKMfJmTWp3BL5SuyXzc0x1T3DSYCMpITckcceY2tqTYgJZ8a1pq%2B%2B%2FzTdhI0ZJI3frDNBkYTFaq6cchhwNPWS%2B1bN3RS6epzDLN99OYE&X-Amz-Signature=038ce9227d7a69a2d0798960a780c8c34a9b7b6938f2c9d0ec3e5c6f199ccafd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2N4DV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEDhFuIG7gX3AxNDY0zKEOBIrt0C6K5BRoBIi7g71fAiBY%2Bja8hO9PH4TYVvaV3yJSWFFOT0B9ZGhTonvlSjqX6Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcvCHobIww%2Fssln6mKtwDmwtfpIJ2ewjjfaD6NpoLl1eEHTIqts%2B2d1nV5mM1muuCG783v6I%2Bkc%2BcQJUxxL4zPWYYkOdYhvpu6f1xeUAuK%2BUGgRvtx26ihziBT%2FE0WeBV0%2BA5y4L0w4t1Bny7Xq71xAXne2EUCNgTWUcIKZA%2BeYgSHGcfsNNlpoeFz7Aip1i0iAacfZWULmtrnpuV4Js9ev0RQbInvJvmGswhL7EgqGaHWDZKWEof57%2BqjBrlIIrKpcyIRkfMTN9eA0XD4xII1iGRsTtDFVAwtOmpC9dajp0bChQs27LGOO92o3mxGkpebR4Mw0A%2BO6U%2BVgOW%2BvUD%2BzH7lBsc0%2FIajc69rPaFUTAVHsIrmRz%2FNW9L3lxRZpFSBZX3UiVFc9eQl10%2F5Tpv96yfgWO9Ywv9%2FC7iofrDVxdZI3V0B9aCrTG6WdBtjOtludtagVk9IITGoJfO1alTwJwBAk0smmS5hqbdTXb3QrSZ%2BJICHfZcLptfjTL%2BS%2FF12iHBlwH%2BpaiMkaRiTa0j7ea%2F%2BHqZ31RoDgkEE4DwaQfJzmv%2Fyu3yAYtVruFiz2LWXD%2B2h32dU0Iw1FaI54uYgh%2FQqHQGjKgpq%2B4e72zGttw1XokuL1KnmtqFFlbyz023Y%2FLeil9mvaT1YU0wrZ3dvgY6pgFk1qgUByILOU7AxqLUFRH3kFf6aJ0%2BtvAN%2B%2FY7bEnf0C7%2FoccFLU5Riy9g5v44IFXF5p6%2BOr5IVyzGGANJdsypyeMMis7cWaTgKRw5gGePZPqr1GghsMSzWKMfJmTWp3BL5SuyXzc0x1T3DSYCMpITckcceY2tqTYgJZ8a1pq%2B%2B%2FzTdhI0ZJI3frDNBkYTFaq6cchhwNPWS%2B1bN3RS6epzDLN99OYE&X-Amz-Signature=2279dcfd2a69ec96b65408bc36cb6423340877906291d736dcc5fbd11d38e63c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2N4DV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEDhFuIG7gX3AxNDY0zKEOBIrt0C6K5BRoBIi7g71fAiBY%2Bja8hO9PH4TYVvaV3yJSWFFOT0B9ZGhTonvlSjqX6Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcvCHobIww%2Fssln6mKtwDmwtfpIJ2ewjjfaD6NpoLl1eEHTIqts%2B2d1nV5mM1muuCG783v6I%2Bkc%2BcQJUxxL4zPWYYkOdYhvpu6f1xeUAuK%2BUGgRvtx26ihziBT%2FE0WeBV0%2BA5y4L0w4t1Bny7Xq71xAXne2EUCNgTWUcIKZA%2BeYgSHGcfsNNlpoeFz7Aip1i0iAacfZWULmtrnpuV4Js9ev0RQbInvJvmGswhL7EgqGaHWDZKWEof57%2BqjBrlIIrKpcyIRkfMTN9eA0XD4xII1iGRsTtDFVAwtOmpC9dajp0bChQs27LGOO92o3mxGkpebR4Mw0A%2BO6U%2BVgOW%2BvUD%2BzH7lBsc0%2FIajc69rPaFUTAVHsIrmRz%2FNW9L3lxRZpFSBZX3UiVFc9eQl10%2F5Tpv96yfgWO9Ywv9%2FC7iofrDVxdZI3V0B9aCrTG6WdBtjOtludtagVk9IITGoJfO1alTwJwBAk0smmS5hqbdTXb3QrSZ%2BJICHfZcLptfjTL%2BS%2FF12iHBlwH%2BpaiMkaRiTa0j7ea%2F%2BHqZ31RoDgkEE4DwaQfJzmv%2Fyu3yAYtVruFiz2LWXD%2B2h32dU0Iw1FaI54uYgh%2FQqHQGjKgpq%2B4e72zGttw1XokuL1KnmtqFFlbyz023Y%2FLeil9mvaT1YU0wrZ3dvgY6pgFk1qgUByILOU7AxqLUFRH3kFf6aJ0%2BtvAN%2B%2FY7bEnf0C7%2FoccFLU5Riy9g5v44IFXF5p6%2BOr5IVyzGGANJdsypyeMMis7cWaTgKRw5gGePZPqr1GghsMSzWKMfJmTWp3BL5SuyXzc0x1T3DSYCMpITckcceY2tqTYgJZ8a1pq%2B%2B%2FzTdhI0ZJI3frDNBkYTFaq6cchhwNPWS%2B1bN3RS6epzDLN99OYE&X-Amz-Signature=d532b47b6f2586712bb46f0bc99bea7e4baf659fc17942869f991afb314afe1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2N4DV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEDhFuIG7gX3AxNDY0zKEOBIrt0C6K5BRoBIi7g71fAiBY%2Bja8hO9PH4TYVvaV3yJSWFFOT0B9ZGhTonvlSjqX6Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcvCHobIww%2Fssln6mKtwDmwtfpIJ2ewjjfaD6NpoLl1eEHTIqts%2B2d1nV5mM1muuCG783v6I%2Bkc%2BcQJUxxL4zPWYYkOdYhvpu6f1xeUAuK%2BUGgRvtx26ihziBT%2FE0WeBV0%2BA5y4L0w4t1Bny7Xq71xAXne2EUCNgTWUcIKZA%2BeYgSHGcfsNNlpoeFz7Aip1i0iAacfZWULmtrnpuV4Js9ev0RQbInvJvmGswhL7EgqGaHWDZKWEof57%2BqjBrlIIrKpcyIRkfMTN9eA0XD4xII1iGRsTtDFVAwtOmpC9dajp0bChQs27LGOO92o3mxGkpebR4Mw0A%2BO6U%2BVgOW%2BvUD%2BzH7lBsc0%2FIajc69rPaFUTAVHsIrmRz%2FNW9L3lxRZpFSBZX3UiVFc9eQl10%2F5Tpv96yfgWO9Ywv9%2FC7iofrDVxdZI3V0B9aCrTG6WdBtjOtludtagVk9IITGoJfO1alTwJwBAk0smmS5hqbdTXb3QrSZ%2BJICHfZcLptfjTL%2BS%2FF12iHBlwH%2BpaiMkaRiTa0j7ea%2F%2BHqZ31RoDgkEE4DwaQfJzmv%2Fyu3yAYtVruFiz2LWXD%2B2h32dU0Iw1FaI54uYgh%2FQqHQGjKgpq%2B4e72zGttw1XokuL1KnmtqFFlbyz023Y%2FLeil9mvaT1YU0wrZ3dvgY6pgFk1qgUByILOU7AxqLUFRH3kFf6aJ0%2BtvAN%2B%2FY7bEnf0C7%2FoccFLU5Riy9g5v44IFXF5p6%2BOr5IVyzGGANJdsypyeMMis7cWaTgKRw5gGePZPqr1GghsMSzWKMfJmTWp3BL5SuyXzc0x1T3DSYCMpITckcceY2tqTYgJZ8a1pq%2B%2B%2FzTdhI0ZJI3frDNBkYTFaq6cchhwNPWS%2B1bN3RS6epzDLN99OYE&X-Amz-Signature=c409d867bc8146095843eeffa7a8a7ba199f883b0c88e76b69363d6d5bd4fd73&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
