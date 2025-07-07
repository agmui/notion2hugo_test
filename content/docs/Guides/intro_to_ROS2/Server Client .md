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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DS4SPJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGz7ep0u2912ayNPeacfK4dmgH6gMUY%2BQ608%2Be0IymPBAiBnmhzsaLx1ux%2FR%2FmprpBO9L%2BO5KjXlNmrHyfoyXn7bmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMwgFFQcbOGr0is%2FYGKtwDpzKFDO892MpdPzGJm20dLM7LsLCC7aYDFSiWcAMhOO3KWDvotwwwWFRdhnhfLpTL95WrZ3D7w6bVU16WEzvdko1Q5ZELBK3U%2FmI2MmxCLM92P%2BN11zX%2BZ6mmwPEQZuIy545rMirbEiSLRsi530MTo1KNfXUiUSPKN8afzV2zC53YUs7wItljlwI68FbJKsFFbFUcpgRcEiwfWUHtKnMfsMRPCUBDfLgkGwkF1ydFEMZifLCbrzKomxu7vcO3Jc%2FkY5Bt7ah2Cm5rFPtPELIQJU1KjnSE2vsDBQ0y9STvQAL5mPLCDYP19KXW0sxfmBaiEivSMCemyJD00bJg03mShaLimL9MJExzaAdHMf6avFyfs0rODF8DJ0fxl8mnOBbm0rSqhphoUUXH3MsyGGGuEgvRhUidH9qBDYMNmLPJvmrfUIAwrn2nT8tscs0j5pt7iuMmCgF4OtLTtP6GrtdtUNfhJXVz%2BaOGE%2BVjMLYzbIR9zdFHUIlld29q3KkYge9kjBAvoyX5ttbHVUoZVCy8c9Oj48MmvatZYzAQ%2B2fof0gKZewQ3zYHdoWsMiUIDSZIbUSDzIP41XuMYJgRZ7FiaONjslRzcFN8A%2F0xhLAn8MJVzaqu3kNcCYGmLAowmpawwwY6pgGB7IfN8GnePSCpNmjSXEqCnznkXdj3MavtK3Fi0ralgnt1rvmFE0hXAPxLRDgdir0wQMS8DWBvfRe%2FK%2BfzLG7VFDmrvGzlSKiAaQoEAsY%2FFW%2F3EHtKXuv2d%2Fz5VWSLBDD15vhDsdfmsMd5xa6LvqfkUGCfjaxwfiK%2BTU6UbaRoBoCfhOKjbRbtASkfD532WBvTL%2BDri6PFQU605Yy8fAwAGMrX7u4f&X-Amz-Signature=ddbedc1c302b5b930761c0e2da0a21f8a2bad6befb40014e61cd942d3ab3c0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DS4SPJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGz7ep0u2912ayNPeacfK4dmgH6gMUY%2BQ608%2Be0IymPBAiBnmhzsaLx1ux%2FR%2FmprpBO9L%2BO5KjXlNmrHyfoyXn7bmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMwgFFQcbOGr0is%2FYGKtwDpzKFDO892MpdPzGJm20dLM7LsLCC7aYDFSiWcAMhOO3KWDvotwwwWFRdhnhfLpTL95WrZ3D7w6bVU16WEzvdko1Q5ZELBK3U%2FmI2MmxCLM92P%2BN11zX%2BZ6mmwPEQZuIy545rMirbEiSLRsi530MTo1KNfXUiUSPKN8afzV2zC53YUs7wItljlwI68FbJKsFFbFUcpgRcEiwfWUHtKnMfsMRPCUBDfLgkGwkF1ydFEMZifLCbrzKomxu7vcO3Jc%2FkY5Bt7ah2Cm5rFPtPELIQJU1KjnSE2vsDBQ0y9STvQAL5mPLCDYP19KXW0sxfmBaiEivSMCemyJD00bJg03mShaLimL9MJExzaAdHMf6avFyfs0rODF8DJ0fxl8mnOBbm0rSqhphoUUXH3MsyGGGuEgvRhUidH9qBDYMNmLPJvmrfUIAwrn2nT8tscs0j5pt7iuMmCgF4OtLTtP6GrtdtUNfhJXVz%2BaOGE%2BVjMLYzbIR9zdFHUIlld29q3KkYge9kjBAvoyX5ttbHVUoZVCy8c9Oj48MmvatZYzAQ%2B2fof0gKZewQ3zYHdoWsMiUIDSZIbUSDzIP41XuMYJgRZ7FiaONjslRzcFN8A%2F0xhLAn8MJVzaqu3kNcCYGmLAowmpawwwY6pgGB7IfN8GnePSCpNmjSXEqCnznkXdj3MavtK3Fi0ralgnt1rvmFE0hXAPxLRDgdir0wQMS8DWBvfRe%2FK%2BfzLG7VFDmrvGzlSKiAaQoEAsY%2FFW%2F3EHtKXuv2d%2Fz5VWSLBDD15vhDsdfmsMd5xa6LvqfkUGCfjaxwfiK%2BTU6UbaRoBoCfhOKjbRbtASkfD532WBvTL%2BDri6PFQU605Yy8fAwAGMrX7u4f&X-Amz-Signature=cc7073f2c4a16cfc407421067f06f8ddd0dfde31d6cec23f3e9320270ec67ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DS4SPJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGz7ep0u2912ayNPeacfK4dmgH6gMUY%2BQ608%2Be0IymPBAiBnmhzsaLx1ux%2FR%2FmprpBO9L%2BO5KjXlNmrHyfoyXn7bmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMwgFFQcbOGr0is%2FYGKtwDpzKFDO892MpdPzGJm20dLM7LsLCC7aYDFSiWcAMhOO3KWDvotwwwWFRdhnhfLpTL95WrZ3D7w6bVU16WEzvdko1Q5ZELBK3U%2FmI2MmxCLM92P%2BN11zX%2BZ6mmwPEQZuIy545rMirbEiSLRsi530MTo1KNfXUiUSPKN8afzV2zC53YUs7wItljlwI68FbJKsFFbFUcpgRcEiwfWUHtKnMfsMRPCUBDfLgkGwkF1ydFEMZifLCbrzKomxu7vcO3Jc%2FkY5Bt7ah2Cm5rFPtPELIQJU1KjnSE2vsDBQ0y9STvQAL5mPLCDYP19KXW0sxfmBaiEivSMCemyJD00bJg03mShaLimL9MJExzaAdHMf6avFyfs0rODF8DJ0fxl8mnOBbm0rSqhphoUUXH3MsyGGGuEgvRhUidH9qBDYMNmLPJvmrfUIAwrn2nT8tscs0j5pt7iuMmCgF4OtLTtP6GrtdtUNfhJXVz%2BaOGE%2BVjMLYzbIR9zdFHUIlld29q3KkYge9kjBAvoyX5ttbHVUoZVCy8c9Oj48MmvatZYzAQ%2B2fof0gKZewQ3zYHdoWsMiUIDSZIbUSDzIP41XuMYJgRZ7FiaONjslRzcFN8A%2F0xhLAn8MJVzaqu3kNcCYGmLAowmpawwwY6pgGB7IfN8GnePSCpNmjSXEqCnznkXdj3MavtK3Fi0ralgnt1rvmFE0hXAPxLRDgdir0wQMS8DWBvfRe%2FK%2BfzLG7VFDmrvGzlSKiAaQoEAsY%2FFW%2F3EHtKXuv2d%2Fz5VWSLBDD15vhDsdfmsMd5xa6LvqfkUGCfjaxwfiK%2BTU6UbaRoBoCfhOKjbRbtASkfD532WBvTL%2BDri6PFQU605Yy8fAwAGMrX7u4f&X-Amz-Signature=dbb610ca811383b4204258d430e2cfeae93a88d4023e7c46685af724e9e3d529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DS4SPJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGz7ep0u2912ayNPeacfK4dmgH6gMUY%2BQ608%2Be0IymPBAiBnmhzsaLx1ux%2FR%2FmprpBO9L%2BO5KjXlNmrHyfoyXn7bmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMwgFFQcbOGr0is%2FYGKtwDpzKFDO892MpdPzGJm20dLM7LsLCC7aYDFSiWcAMhOO3KWDvotwwwWFRdhnhfLpTL95WrZ3D7w6bVU16WEzvdko1Q5ZELBK3U%2FmI2MmxCLM92P%2BN11zX%2BZ6mmwPEQZuIy545rMirbEiSLRsi530MTo1KNfXUiUSPKN8afzV2zC53YUs7wItljlwI68FbJKsFFbFUcpgRcEiwfWUHtKnMfsMRPCUBDfLgkGwkF1ydFEMZifLCbrzKomxu7vcO3Jc%2FkY5Bt7ah2Cm5rFPtPELIQJU1KjnSE2vsDBQ0y9STvQAL5mPLCDYP19KXW0sxfmBaiEivSMCemyJD00bJg03mShaLimL9MJExzaAdHMf6avFyfs0rODF8DJ0fxl8mnOBbm0rSqhphoUUXH3MsyGGGuEgvRhUidH9qBDYMNmLPJvmrfUIAwrn2nT8tscs0j5pt7iuMmCgF4OtLTtP6GrtdtUNfhJXVz%2BaOGE%2BVjMLYzbIR9zdFHUIlld29q3KkYge9kjBAvoyX5ttbHVUoZVCy8c9Oj48MmvatZYzAQ%2B2fof0gKZewQ3zYHdoWsMiUIDSZIbUSDzIP41XuMYJgRZ7FiaONjslRzcFN8A%2F0xhLAn8MJVzaqu3kNcCYGmLAowmpawwwY6pgGB7IfN8GnePSCpNmjSXEqCnznkXdj3MavtK3Fi0ralgnt1rvmFE0hXAPxLRDgdir0wQMS8DWBvfRe%2FK%2BfzLG7VFDmrvGzlSKiAaQoEAsY%2FFW%2F3EHtKXuv2d%2Fz5VWSLBDD15vhDsdfmsMd5xa6LvqfkUGCfjaxwfiK%2BTU6UbaRoBoCfhOKjbRbtASkfD532WBvTL%2BDri6PFQU605Yy8fAwAGMrX7u4f&X-Amz-Signature=a3db3a834999c151479b1a8c917b9fb61174bedfb90128f7ed539b51fb3e3144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DS4SPJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGz7ep0u2912ayNPeacfK4dmgH6gMUY%2BQ608%2Be0IymPBAiBnmhzsaLx1ux%2FR%2FmprpBO9L%2BO5KjXlNmrHyfoyXn7bmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMwgFFQcbOGr0is%2FYGKtwDpzKFDO892MpdPzGJm20dLM7LsLCC7aYDFSiWcAMhOO3KWDvotwwwWFRdhnhfLpTL95WrZ3D7w6bVU16WEzvdko1Q5ZELBK3U%2FmI2MmxCLM92P%2BN11zX%2BZ6mmwPEQZuIy545rMirbEiSLRsi530MTo1KNfXUiUSPKN8afzV2zC53YUs7wItljlwI68FbJKsFFbFUcpgRcEiwfWUHtKnMfsMRPCUBDfLgkGwkF1ydFEMZifLCbrzKomxu7vcO3Jc%2FkY5Bt7ah2Cm5rFPtPELIQJU1KjnSE2vsDBQ0y9STvQAL5mPLCDYP19KXW0sxfmBaiEivSMCemyJD00bJg03mShaLimL9MJExzaAdHMf6avFyfs0rODF8DJ0fxl8mnOBbm0rSqhphoUUXH3MsyGGGuEgvRhUidH9qBDYMNmLPJvmrfUIAwrn2nT8tscs0j5pt7iuMmCgF4OtLTtP6GrtdtUNfhJXVz%2BaOGE%2BVjMLYzbIR9zdFHUIlld29q3KkYge9kjBAvoyX5ttbHVUoZVCy8c9Oj48MmvatZYzAQ%2B2fof0gKZewQ3zYHdoWsMiUIDSZIbUSDzIP41XuMYJgRZ7FiaONjslRzcFN8A%2F0xhLAn8MJVzaqu3kNcCYGmLAowmpawwwY6pgGB7IfN8GnePSCpNmjSXEqCnznkXdj3MavtK3Fi0ralgnt1rvmFE0hXAPxLRDgdir0wQMS8DWBvfRe%2FK%2BfzLG7VFDmrvGzlSKiAaQoEAsY%2FFW%2F3EHtKXuv2d%2Fz5VWSLBDD15vhDsdfmsMd5xa6LvqfkUGCfjaxwfiK%2BTU6UbaRoBoCfhOKjbRbtASkfD532WBvTL%2BDri6PFQU605Yy8fAwAGMrX7u4f&X-Amz-Signature=6e8767b3873ffeb278f1b404e28d35cc9a2d2e74a70f666187a0b342aa36727b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
