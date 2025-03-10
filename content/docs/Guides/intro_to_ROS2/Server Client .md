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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA62PFNS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEToQl3qfpPDL1VXFQ8zTh%2BYDBmkAVlwi5yhLIDqsGGRAiEAzL2xUNVyh%2FwsEVBRyoHalKRKmLtTEBoG80RlK0d4MwwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFhLQAT9BgdKh1%2BRyrcA%2Fn4UHMh89tWIaNh3NHtS4L3zRctIicx6Tk4B6NM3fh%2Fuav1jST2AkcJZNdET4M%2FVTrHhjpnMmF8GI9x2TSAsNWNNMUtL20cfOJNIVaDh%2B5RNjGUaWs%2BDQj1%2FBfmXLQm1Xue1%2FIztDUSqWsURsMoz2AA0O%2Bvp5fkK0lMPyWsUvCPvMY5NTAYbJ1fEsY1XmN8d7dyTf9VvJMWS9yTBH4pMdwmX9KZz2WBYon6vKGGfemcnwrQWIMC2OzeN2Hi%2Fd%2FY%2BI5Wn%2Bhsoi%2BAObeCcFI9nFeglPtSKSrJXmuf8XdBM6XtrVKUaljpc8CT3DJeDRynwZoMXYZkq48kmhabTiore%2BqEYEl0bCDF6JkKu%2B3ARCa9HRk3pNHqJXXEPdXw7dq%2F1m2rZHti342C2W9VYHRVxZDTvoMaiI2P0skenkRwoL7AR%2FdmQaBkRSM9o1OZrV0XEqahH%2BBHw%2F0Vexlgi901gqowI0ysfqAS4iWz0edc0T9uajP2COqbD68xL%2FavAnOm7qiokbOS6ZM%2B2yuFAzd8y%2FmDq%2FVeXq4RlRPfNurvB%2BQkUJy3rRQF22XrEerdHmOGkJWsOeVTA%2BFqCWA9dDDtuxfj%2B0ZU5iNqv4r1sTss8bdpa1K%2BxLgWUEHl%2B6akMLrqub4GOqUB5d5l8ruD46h2EgH72sq3k3S8swevulLX1VWqCSjiuqPibLBozgGdA69p4ZkqOWwZnSAG%2B4Y7MDU4FhLfRNEk6UHDisNsy64DE9jCzdcdmqJVgbfP3%2FiQ4mwNxlhKN0pkNAdelFUISsHX%2F68QRkEplT2TwyTDemrhOg%2BvhGIoDN%2BexNJNPClKx5b7p3qExp3aprfUzuUM9jJHCNXiIPQt%2Bgg69A9B&X-Amz-Signature=ac13bd1db7e21c161ddead34dc23d0e7220a7ffb98125b5ae6e6cc4b75205356&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA62PFNS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEToQl3qfpPDL1VXFQ8zTh%2BYDBmkAVlwi5yhLIDqsGGRAiEAzL2xUNVyh%2FwsEVBRyoHalKRKmLtTEBoG80RlK0d4MwwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFhLQAT9BgdKh1%2BRyrcA%2Fn4UHMh89tWIaNh3NHtS4L3zRctIicx6Tk4B6NM3fh%2Fuav1jST2AkcJZNdET4M%2FVTrHhjpnMmF8GI9x2TSAsNWNNMUtL20cfOJNIVaDh%2B5RNjGUaWs%2BDQj1%2FBfmXLQm1Xue1%2FIztDUSqWsURsMoz2AA0O%2Bvp5fkK0lMPyWsUvCPvMY5NTAYbJ1fEsY1XmN8d7dyTf9VvJMWS9yTBH4pMdwmX9KZz2WBYon6vKGGfemcnwrQWIMC2OzeN2Hi%2Fd%2FY%2BI5Wn%2Bhsoi%2BAObeCcFI9nFeglPtSKSrJXmuf8XdBM6XtrVKUaljpc8CT3DJeDRynwZoMXYZkq48kmhabTiore%2BqEYEl0bCDF6JkKu%2B3ARCa9HRk3pNHqJXXEPdXw7dq%2F1m2rZHti342C2W9VYHRVxZDTvoMaiI2P0skenkRwoL7AR%2FdmQaBkRSM9o1OZrV0XEqahH%2BBHw%2F0Vexlgi901gqowI0ysfqAS4iWz0edc0T9uajP2COqbD68xL%2FavAnOm7qiokbOS6ZM%2B2yuFAzd8y%2FmDq%2FVeXq4RlRPfNurvB%2BQkUJy3rRQF22XrEerdHmOGkJWsOeVTA%2BFqCWA9dDDtuxfj%2B0ZU5iNqv4r1sTss8bdpa1K%2BxLgWUEHl%2B6akMLrqub4GOqUB5d5l8ruD46h2EgH72sq3k3S8swevulLX1VWqCSjiuqPibLBozgGdA69p4ZkqOWwZnSAG%2B4Y7MDU4FhLfRNEk6UHDisNsy64DE9jCzdcdmqJVgbfP3%2FiQ4mwNxlhKN0pkNAdelFUISsHX%2F68QRkEplT2TwyTDemrhOg%2BvhGIoDN%2BexNJNPClKx5b7p3qExp3aprfUzuUM9jJHCNXiIPQt%2Bgg69A9B&X-Amz-Signature=00ea4fc6f3da09f6a2a8caf01a4b3e24bb45e091840d9c35e6b17c367de973ba&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA62PFNS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEToQl3qfpPDL1VXFQ8zTh%2BYDBmkAVlwi5yhLIDqsGGRAiEAzL2xUNVyh%2FwsEVBRyoHalKRKmLtTEBoG80RlK0d4MwwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFhLQAT9BgdKh1%2BRyrcA%2Fn4UHMh89tWIaNh3NHtS4L3zRctIicx6Tk4B6NM3fh%2Fuav1jST2AkcJZNdET4M%2FVTrHhjpnMmF8GI9x2TSAsNWNNMUtL20cfOJNIVaDh%2B5RNjGUaWs%2BDQj1%2FBfmXLQm1Xue1%2FIztDUSqWsURsMoz2AA0O%2Bvp5fkK0lMPyWsUvCPvMY5NTAYbJ1fEsY1XmN8d7dyTf9VvJMWS9yTBH4pMdwmX9KZz2WBYon6vKGGfemcnwrQWIMC2OzeN2Hi%2Fd%2FY%2BI5Wn%2Bhsoi%2BAObeCcFI9nFeglPtSKSrJXmuf8XdBM6XtrVKUaljpc8CT3DJeDRynwZoMXYZkq48kmhabTiore%2BqEYEl0bCDF6JkKu%2B3ARCa9HRk3pNHqJXXEPdXw7dq%2F1m2rZHti342C2W9VYHRVxZDTvoMaiI2P0skenkRwoL7AR%2FdmQaBkRSM9o1OZrV0XEqahH%2BBHw%2F0Vexlgi901gqowI0ysfqAS4iWz0edc0T9uajP2COqbD68xL%2FavAnOm7qiokbOS6ZM%2B2yuFAzd8y%2FmDq%2FVeXq4RlRPfNurvB%2BQkUJy3rRQF22XrEerdHmOGkJWsOeVTA%2BFqCWA9dDDtuxfj%2B0ZU5iNqv4r1sTss8bdpa1K%2BxLgWUEHl%2B6akMLrqub4GOqUB5d5l8ruD46h2EgH72sq3k3S8swevulLX1VWqCSjiuqPibLBozgGdA69p4ZkqOWwZnSAG%2B4Y7MDU4FhLfRNEk6UHDisNsy64DE9jCzdcdmqJVgbfP3%2FiQ4mwNxlhKN0pkNAdelFUISsHX%2F68QRkEplT2TwyTDemrhOg%2BvhGIoDN%2BexNJNPClKx5b7p3qExp3aprfUzuUM9jJHCNXiIPQt%2Bgg69A9B&X-Amz-Signature=34f70aa3445793d092873bac9cfb6028152974e90d63606783e756d4977bc166&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA62PFNS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEToQl3qfpPDL1VXFQ8zTh%2BYDBmkAVlwi5yhLIDqsGGRAiEAzL2xUNVyh%2FwsEVBRyoHalKRKmLtTEBoG80RlK0d4MwwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFhLQAT9BgdKh1%2BRyrcA%2Fn4UHMh89tWIaNh3NHtS4L3zRctIicx6Tk4B6NM3fh%2Fuav1jST2AkcJZNdET4M%2FVTrHhjpnMmF8GI9x2TSAsNWNNMUtL20cfOJNIVaDh%2B5RNjGUaWs%2BDQj1%2FBfmXLQm1Xue1%2FIztDUSqWsURsMoz2AA0O%2Bvp5fkK0lMPyWsUvCPvMY5NTAYbJ1fEsY1XmN8d7dyTf9VvJMWS9yTBH4pMdwmX9KZz2WBYon6vKGGfemcnwrQWIMC2OzeN2Hi%2Fd%2FY%2BI5Wn%2Bhsoi%2BAObeCcFI9nFeglPtSKSrJXmuf8XdBM6XtrVKUaljpc8CT3DJeDRynwZoMXYZkq48kmhabTiore%2BqEYEl0bCDF6JkKu%2B3ARCa9HRk3pNHqJXXEPdXw7dq%2F1m2rZHti342C2W9VYHRVxZDTvoMaiI2P0skenkRwoL7AR%2FdmQaBkRSM9o1OZrV0XEqahH%2BBHw%2F0Vexlgi901gqowI0ysfqAS4iWz0edc0T9uajP2COqbD68xL%2FavAnOm7qiokbOS6ZM%2B2yuFAzd8y%2FmDq%2FVeXq4RlRPfNurvB%2BQkUJy3rRQF22XrEerdHmOGkJWsOeVTA%2BFqCWA9dDDtuxfj%2B0ZU5iNqv4r1sTss8bdpa1K%2BxLgWUEHl%2B6akMLrqub4GOqUB5d5l8ruD46h2EgH72sq3k3S8swevulLX1VWqCSjiuqPibLBozgGdA69p4ZkqOWwZnSAG%2B4Y7MDU4FhLfRNEk6UHDisNsy64DE9jCzdcdmqJVgbfP3%2FiQ4mwNxlhKN0pkNAdelFUISsHX%2F68QRkEplT2TwyTDemrhOg%2BvhGIoDN%2BexNJNPClKx5b7p3qExp3aprfUzuUM9jJHCNXiIPQt%2Bgg69A9B&X-Amz-Signature=162c4830e0f61cf9f3c7de3d2ea146a96dd98a4f88e028564785be5c9eef6d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA62PFNS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEToQl3qfpPDL1VXFQ8zTh%2BYDBmkAVlwi5yhLIDqsGGRAiEAzL2xUNVyh%2FwsEVBRyoHalKRKmLtTEBoG80RlK0d4MwwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFhLQAT9BgdKh1%2BRyrcA%2Fn4UHMh89tWIaNh3NHtS4L3zRctIicx6Tk4B6NM3fh%2Fuav1jST2AkcJZNdET4M%2FVTrHhjpnMmF8GI9x2TSAsNWNNMUtL20cfOJNIVaDh%2B5RNjGUaWs%2BDQj1%2FBfmXLQm1Xue1%2FIztDUSqWsURsMoz2AA0O%2Bvp5fkK0lMPyWsUvCPvMY5NTAYbJ1fEsY1XmN8d7dyTf9VvJMWS9yTBH4pMdwmX9KZz2WBYon6vKGGfemcnwrQWIMC2OzeN2Hi%2Fd%2FY%2BI5Wn%2Bhsoi%2BAObeCcFI9nFeglPtSKSrJXmuf8XdBM6XtrVKUaljpc8CT3DJeDRynwZoMXYZkq48kmhabTiore%2BqEYEl0bCDF6JkKu%2B3ARCa9HRk3pNHqJXXEPdXw7dq%2F1m2rZHti342C2W9VYHRVxZDTvoMaiI2P0skenkRwoL7AR%2FdmQaBkRSM9o1OZrV0XEqahH%2BBHw%2F0Vexlgi901gqowI0ysfqAS4iWz0edc0T9uajP2COqbD68xL%2FavAnOm7qiokbOS6ZM%2B2yuFAzd8y%2FmDq%2FVeXq4RlRPfNurvB%2BQkUJy3rRQF22XrEerdHmOGkJWsOeVTA%2BFqCWA9dDDtuxfj%2B0ZU5iNqv4r1sTss8bdpa1K%2BxLgWUEHl%2B6akMLrqub4GOqUB5d5l8ruD46h2EgH72sq3k3S8swevulLX1VWqCSjiuqPibLBozgGdA69p4ZkqOWwZnSAG%2B4Y7MDU4FhLfRNEk6UHDisNsy64DE9jCzdcdmqJVgbfP3%2FiQ4mwNxlhKN0pkNAdelFUISsHX%2F68QRkEplT2TwyTDemrhOg%2BvhGIoDN%2BexNJNPClKx5b7p3qExp3aprfUzuUM9jJHCNXiIPQt%2Bgg69A9B&X-Amz-Signature=a7023b01b16c1985b9f8417578225fe8b01341a2a152aece4e7d185e64f767a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
