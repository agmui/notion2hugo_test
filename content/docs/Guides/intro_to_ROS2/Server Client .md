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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNI2QHB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4gdOdp4em2QDR1p68Fqx8%2FJVIxRGeoYChcFY0LAOrXAiEA206AZ%2FsX42Y9HsPD6oxRt0xROHk7Hybv%2BMyaFZze1%2BgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B%2F%2Ba4BERjfdZaEpSrcA1WxNWEuiYHGc77LWkbUp%2FoZYYBRms33Kc21vmKJQSQ4yJZaP%2BdC8OKE3YvRH3qFRV%2Bibj7%2BijsoeNx0YxFZl2JMyPum1PryYAOqwdC%2BkJxtPK0K60CHC4R5sYb2iFqoJt06UtRSAXXuU7kWHxEyGwUbdh%2FB%2FFLJy29fe3Zpmz1kU3RmpdxxXM3Yok3haphINFEwhhJDoWHAYCFyXGaBTRoSZyjCpcJ8kkSZK4hiuOhh9A0y6odGamHcgDCBRmopfIFH8ppwGviU4gSiwlnhd1mIUsqY6s57pDkFZiYklDGoMhqqghubwzQAerNTLpSbv2e%2FBLBIZ43gBLHvOxP4WAcjlxFEcyGzCk2O6ODDz7doY36oP6SuEBVxWVscREDealM8X%2FPZhU%2B4OuMVQGp6W5VTrVqI0%2F9%2FFM9Ps5QtbTSP5m6evqmQ%2BWjsME523CLRefyopwF3n1fR%2FSard2oowy9qaUSBEpIlJPROkvy2s8uqDpa%2B3ny02gvQafyCgO0SbpaEVu3FJ2TkBAMxfYmce4YBG4QNfLn8P%2BMIyCx%2Bdx4ppQCvvyRlVuGwMfwLn0Ucu5NnkKfE2j7JupMQiAF%2B7gaxntE2pNW3dtuOIcVgTG2qHrkzXw0tbXwJYgg0MJC47sMGOqUBlZU0EqtY6mXDB3gyH5ZCN4rHny4Fxpn4KCLRoa2fpuFyryPwM7yBViqKLgBkICTfJol2CmX47FaEHZU%2F8al632MD5EnOuUnB2MnCQwX3TsfiwqsCgXML1Dq6foD3S918MaxrHzsZ5tO699%2FE%2Fj%2B%2BP%2BIjijHB6g9w34uAUiIB7wDf7p3W0%2FE9MVWhqXEtbDzWoYLdDa8jbv5kn9ozHT%2F%2BAP7FhEHo&X-Amz-Signature=040882cc77f0fe19803e42d1aae2c0b0b6328b8c25375be45c09ebf2c3e200b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNI2QHB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4gdOdp4em2QDR1p68Fqx8%2FJVIxRGeoYChcFY0LAOrXAiEA206AZ%2FsX42Y9HsPD6oxRt0xROHk7Hybv%2BMyaFZze1%2BgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B%2F%2Ba4BERjfdZaEpSrcA1WxNWEuiYHGc77LWkbUp%2FoZYYBRms33Kc21vmKJQSQ4yJZaP%2BdC8OKE3YvRH3qFRV%2Bibj7%2BijsoeNx0YxFZl2JMyPum1PryYAOqwdC%2BkJxtPK0K60CHC4R5sYb2iFqoJt06UtRSAXXuU7kWHxEyGwUbdh%2FB%2FFLJy29fe3Zpmz1kU3RmpdxxXM3Yok3haphINFEwhhJDoWHAYCFyXGaBTRoSZyjCpcJ8kkSZK4hiuOhh9A0y6odGamHcgDCBRmopfIFH8ppwGviU4gSiwlnhd1mIUsqY6s57pDkFZiYklDGoMhqqghubwzQAerNTLpSbv2e%2FBLBIZ43gBLHvOxP4WAcjlxFEcyGzCk2O6ODDz7doY36oP6SuEBVxWVscREDealM8X%2FPZhU%2B4OuMVQGp6W5VTrVqI0%2F9%2FFM9Ps5QtbTSP5m6evqmQ%2BWjsME523CLRefyopwF3n1fR%2FSard2oowy9qaUSBEpIlJPROkvy2s8uqDpa%2B3ny02gvQafyCgO0SbpaEVu3FJ2TkBAMxfYmce4YBG4QNfLn8P%2BMIyCx%2Bdx4ppQCvvyRlVuGwMfwLn0Ucu5NnkKfE2j7JupMQiAF%2B7gaxntE2pNW3dtuOIcVgTG2qHrkzXw0tbXwJYgg0MJC47sMGOqUBlZU0EqtY6mXDB3gyH5ZCN4rHny4Fxpn4KCLRoa2fpuFyryPwM7yBViqKLgBkICTfJol2CmX47FaEHZU%2F8al632MD5EnOuUnB2MnCQwX3TsfiwqsCgXML1Dq6foD3S918MaxrHzsZ5tO699%2FE%2Fj%2B%2BP%2BIjijHB6g9w34uAUiIB7wDf7p3W0%2FE9MVWhqXEtbDzWoYLdDa8jbv5kn9ozHT%2F%2BAP7FhEHo&X-Amz-Signature=40b5c74a6e27e8b7eb11869c9f15ed2a4c611457f5661b6ad6e57323b81a76a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNI2QHB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4gdOdp4em2QDR1p68Fqx8%2FJVIxRGeoYChcFY0LAOrXAiEA206AZ%2FsX42Y9HsPD6oxRt0xROHk7Hybv%2BMyaFZze1%2BgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B%2F%2Ba4BERjfdZaEpSrcA1WxNWEuiYHGc77LWkbUp%2FoZYYBRms33Kc21vmKJQSQ4yJZaP%2BdC8OKE3YvRH3qFRV%2Bibj7%2BijsoeNx0YxFZl2JMyPum1PryYAOqwdC%2BkJxtPK0K60CHC4R5sYb2iFqoJt06UtRSAXXuU7kWHxEyGwUbdh%2FB%2FFLJy29fe3Zpmz1kU3RmpdxxXM3Yok3haphINFEwhhJDoWHAYCFyXGaBTRoSZyjCpcJ8kkSZK4hiuOhh9A0y6odGamHcgDCBRmopfIFH8ppwGviU4gSiwlnhd1mIUsqY6s57pDkFZiYklDGoMhqqghubwzQAerNTLpSbv2e%2FBLBIZ43gBLHvOxP4WAcjlxFEcyGzCk2O6ODDz7doY36oP6SuEBVxWVscREDealM8X%2FPZhU%2B4OuMVQGp6W5VTrVqI0%2F9%2FFM9Ps5QtbTSP5m6evqmQ%2BWjsME523CLRefyopwF3n1fR%2FSard2oowy9qaUSBEpIlJPROkvy2s8uqDpa%2B3ny02gvQafyCgO0SbpaEVu3FJ2TkBAMxfYmce4YBG4QNfLn8P%2BMIyCx%2Bdx4ppQCvvyRlVuGwMfwLn0Ucu5NnkKfE2j7JupMQiAF%2B7gaxntE2pNW3dtuOIcVgTG2qHrkzXw0tbXwJYgg0MJC47sMGOqUBlZU0EqtY6mXDB3gyH5ZCN4rHny4Fxpn4KCLRoa2fpuFyryPwM7yBViqKLgBkICTfJol2CmX47FaEHZU%2F8al632MD5EnOuUnB2MnCQwX3TsfiwqsCgXML1Dq6foD3S918MaxrHzsZ5tO699%2FE%2Fj%2B%2BP%2BIjijHB6g9w34uAUiIB7wDf7p3W0%2FE9MVWhqXEtbDzWoYLdDa8jbv5kn9ozHT%2F%2BAP7FhEHo&X-Amz-Signature=83383a540d02af2fd869b76f271c14649c9fcfcd1738c7242752b0633bb73c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNI2QHB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4gdOdp4em2QDR1p68Fqx8%2FJVIxRGeoYChcFY0LAOrXAiEA206AZ%2FsX42Y9HsPD6oxRt0xROHk7Hybv%2BMyaFZze1%2BgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B%2F%2Ba4BERjfdZaEpSrcA1WxNWEuiYHGc77LWkbUp%2FoZYYBRms33Kc21vmKJQSQ4yJZaP%2BdC8OKE3YvRH3qFRV%2Bibj7%2BijsoeNx0YxFZl2JMyPum1PryYAOqwdC%2BkJxtPK0K60CHC4R5sYb2iFqoJt06UtRSAXXuU7kWHxEyGwUbdh%2FB%2FFLJy29fe3Zpmz1kU3RmpdxxXM3Yok3haphINFEwhhJDoWHAYCFyXGaBTRoSZyjCpcJ8kkSZK4hiuOhh9A0y6odGamHcgDCBRmopfIFH8ppwGviU4gSiwlnhd1mIUsqY6s57pDkFZiYklDGoMhqqghubwzQAerNTLpSbv2e%2FBLBIZ43gBLHvOxP4WAcjlxFEcyGzCk2O6ODDz7doY36oP6SuEBVxWVscREDealM8X%2FPZhU%2B4OuMVQGp6W5VTrVqI0%2F9%2FFM9Ps5QtbTSP5m6evqmQ%2BWjsME523CLRefyopwF3n1fR%2FSard2oowy9qaUSBEpIlJPROkvy2s8uqDpa%2B3ny02gvQafyCgO0SbpaEVu3FJ2TkBAMxfYmce4YBG4QNfLn8P%2BMIyCx%2Bdx4ppQCvvyRlVuGwMfwLn0Ucu5NnkKfE2j7JupMQiAF%2B7gaxntE2pNW3dtuOIcVgTG2qHrkzXw0tbXwJYgg0MJC47sMGOqUBlZU0EqtY6mXDB3gyH5ZCN4rHny4Fxpn4KCLRoa2fpuFyryPwM7yBViqKLgBkICTfJol2CmX47FaEHZU%2F8al632MD5EnOuUnB2MnCQwX3TsfiwqsCgXML1Dq6foD3S918MaxrHzsZ5tO699%2FE%2Fj%2B%2BP%2BIjijHB6g9w34uAUiIB7wDf7p3W0%2FE9MVWhqXEtbDzWoYLdDa8jbv5kn9ozHT%2F%2BAP7FhEHo&X-Amz-Signature=8a34a1acf400c61b53c8c19057c0e5fd17104e8e107fa1fee68bc65401b38aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNI2QHB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4gdOdp4em2QDR1p68Fqx8%2FJVIxRGeoYChcFY0LAOrXAiEA206AZ%2FsX42Y9HsPD6oxRt0xROHk7Hybv%2BMyaFZze1%2BgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B%2F%2Ba4BERjfdZaEpSrcA1WxNWEuiYHGc77LWkbUp%2FoZYYBRms33Kc21vmKJQSQ4yJZaP%2BdC8OKE3YvRH3qFRV%2Bibj7%2BijsoeNx0YxFZl2JMyPum1PryYAOqwdC%2BkJxtPK0K60CHC4R5sYb2iFqoJt06UtRSAXXuU7kWHxEyGwUbdh%2FB%2FFLJy29fe3Zpmz1kU3RmpdxxXM3Yok3haphINFEwhhJDoWHAYCFyXGaBTRoSZyjCpcJ8kkSZK4hiuOhh9A0y6odGamHcgDCBRmopfIFH8ppwGviU4gSiwlnhd1mIUsqY6s57pDkFZiYklDGoMhqqghubwzQAerNTLpSbv2e%2FBLBIZ43gBLHvOxP4WAcjlxFEcyGzCk2O6ODDz7doY36oP6SuEBVxWVscREDealM8X%2FPZhU%2B4OuMVQGp6W5VTrVqI0%2F9%2FFM9Ps5QtbTSP5m6evqmQ%2BWjsME523CLRefyopwF3n1fR%2FSard2oowy9qaUSBEpIlJPROkvy2s8uqDpa%2B3ny02gvQafyCgO0SbpaEVu3FJ2TkBAMxfYmce4YBG4QNfLn8P%2BMIyCx%2Bdx4ppQCvvyRlVuGwMfwLn0Ucu5NnkKfE2j7JupMQiAF%2B7gaxntE2pNW3dtuOIcVgTG2qHrkzXw0tbXwJYgg0MJC47sMGOqUBlZU0EqtY6mXDB3gyH5ZCN4rHny4Fxpn4KCLRoa2fpuFyryPwM7yBViqKLgBkICTfJol2CmX47FaEHZU%2F8al632MD5EnOuUnB2MnCQwX3TsfiwqsCgXML1Dq6foD3S918MaxrHzsZ5tO699%2FE%2Fj%2B%2BP%2BIjijHB6g9w34uAUiIB7wDf7p3W0%2FE9MVWhqXEtbDzWoYLdDa8jbv5kn9ozHT%2F%2BAP7FhEHo&X-Amz-Signature=f6ace0b96213f3eb5601d634c021c03e854fa7aef1de5a62f8c79a89c22e1db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
