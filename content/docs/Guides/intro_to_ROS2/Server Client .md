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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YTOEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCnvgYvy%2FQt%2BGr9rLyusbtrUKphvWQ%2Fe93Qvl5iD%2FyGAiEAgUqa4XMQhRhp6fNgN1BBa5vqaBm0yvAQmfzkqiSGFPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG3SGvyb3BdcmZiKircAw%2FtzF%2Foz8SFsoeWUwSw5F5WXrFeYxAjF6Wdiz6L7iZGzdzGeQLAgpdfCS4GF4hMw1QLWhwoBIZNHB7egMJDGzvuY04KzmPcjwpFnChwe4JsY2p34%2Bs%2BxT1HWftVo76Oa2w4BXdPw5xnNFILRDYx4OQTBLZ%2BrHKrJCmp3w5wenCLkEf%2FOIqhidzYjaQu%2FJLK5M7uBiEZkN%2BmUHZfVugcY4qvxcuGL82mVYsLbIIG9umUFdKmTZH%2BRf2MSSx2gcViBogpiA%2BtLHJMw8bRKC0lFBPn8UKa26KZo6Qh3ASsLWsHWX6PEWa3rcBuRjwIlJ25pA6ided4ADeJmXRwzp1OZjXfmYdQPLQsyvZbiNdNa%2FJ0DoD%2FOOeeoPK%2BuO8GhXhg%2ByXJTlMb%2F6zkurbgE79bsBZnmcxL7tWox2xQAqRHTqKdMFU6R1TpTHaaPUsNrd3VAbkUHLPteW4eRLcn4huoxzoAm%2B9Ok%2FcW3zg8TlzFa6WD1gYfK9DUr%2Bg3tbEb8ZGT0arLqEJcr5S34Mb5Wa8KM9HmyToRM7a4uCGejwR1jyeE5Nd5UwQCtX1cLbDMHFv8Jni75ZNzVsN5aGNaqCLmY0GvNATt%2F%2BaSXw47pT2X2cLUN6RDerI%2Fwgb7YI04MOO1ssQGOqUBlT2XQU84hmS%2BK7peV54Hk0Q5L%2FYRMBljKyfWLL22ATy7wdS6%2F%2FqRAwoiyXboTUdspjlg7ZsIOuYzJ09%2B0nKPC4CYDUDqzwxh4AZ2k9kFPWJAJqnK%2B2K9VisqA1DpEYVdiSwGRITWRgIFGn3J1GBmmrxbreZMICixD6tVOKpTVtk8farrCZejT2DZVgQzO%2FmJu8QxR%2BPHjXAG%2FawviASWuUArqZi%2B&X-Amz-Signature=eb87ec9ead6d7218a881b910b24ae48c1abb25dfc4e9a1596e53c78756302fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YTOEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCnvgYvy%2FQt%2BGr9rLyusbtrUKphvWQ%2Fe93Qvl5iD%2FyGAiEAgUqa4XMQhRhp6fNgN1BBa5vqaBm0yvAQmfzkqiSGFPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG3SGvyb3BdcmZiKircAw%2FtzF%2Foz8SFsoeWUwSw5F5WXrFeYxAjF6Wdiz6L7iZGzdzGeQLAgpdfCS4GF4hMw1QLWhwoBIZNHB7egMJDGzvuY04KzmPcjwpFnChwe4JsY2p34%2Bs%2BxT1HWftVo76Oa2w4BXdPw5xnNFILRDYx4OQTBLZ%2BrHKrJCmp3w5wenCLkEf%2FOIqhidzYjaQu%2FJLK5M7uBiEZkN%2BmUHZfVugcY4qvxcuGL82mVYsLbIIG9umUFdKmTZH%2BRf2MSSx2gcViBogpiA%2BtLHJMw8bRKC0lFBPn8UKa26KZo6Qh3ASsLWsHWX6PEWa3rcBuRjwIlJ25pA6ided4ADeJmXRwzp1OZjXfmYdQPLQsyvZbiNdNa%2FJ0DoD%2FOOeeoPK%2BuO8GhXhg%2ByXJTlMb%2F6zkurbgE79bsBZnmcxL7tWox2xQAqRHTqKdMFU6R1TpTHaaPUsNrd3VAbkUHLPteW4eRLcn4huoxzoAm%2B9Ok%2FcW3zg8TlzFa6WD1gYfK9DUr%2Bg3tbEb8ZGT0arLqEJcr5S34Mb5Wa8KM9HmyToRM7a4uCGejwR1jyeE5Nd5UwQCtX1cLbDMHFv8Jni75ZNzVsN5aGNaqCLmY0GvNATt%2F%2BaSXw47pT2X2cLUN6RDerI%2Fwgb7YI04MOO1ssQGOqUBlT2XQU84hmS%2BK7peV54Hk0Q5L%2FYRMBljKyfWLL22ATy7wdS6%2F%2FqRAwoiyXboTUdspjlg7ZsIOuYzJ09%2B0nKPC4CYDUDqzwxh4AZ2k9kFPWJAJqnK%2B2K9VisqA1DpEYVdiSwGRITWRgIFGn3J1GBmmrxbreZMICixD6tVOKpTVtk8farrCZejT2DZVgQzO%2FmJu8QxR%2BPHjXAG%2FawviASWuUArqZi%2B&X-Amz-Signature=ec4e892df7c93856d73b3532120c42ce7a25f0a3290f9bb3d36000b228ce693b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YTOEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCnvgYvy%2FQt%2BGr9rLyusbtrUKphvWQ%2Fe93Qvl5iD%2FyGAiEAgUqa4XMQhRhp6fNgN1BBa5vqaBm0yvAQmfzkqiSGFPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG3SGvyb3BdcmZiKircAw%2FtzF%2Foz8SFsoeWUwSw5F5WXrFeYxAjF6Wdiz6L7iZGzdzGeQLAgpdfCS4GF4hMw1QLWhwoBIZNHB7egMJDGzvuY04KzmPcjwpFnChwe4JsY2p34%2Bs%2BxT1HWftVo76Oa2w4BXdPw5xnNFILRDYx4OQTBLZ%2BrHKrJCmp3w5wenCLkEf%2FOIqhidzYjaQu%2FJLK5M7uBiEZkN%2BmUHZfVugcY4qvxcuGL82mVYsLbIIG9umUFdKmTZH%2BRf2MSSx2gcViBogpiA%2BtLHJMw8bRKC0lFBPn8UKa26KZo6Qh3ASsLWsHWX6PEWa3rcBuRjwIlJ25pA6ided4ADeJmXRwzp1OZjXfmYdQPLQsyvZbiNdNa%2FJ0DoD%2FOOeeoPK%2BuO8GhXhg%2ByXJTlMb%2F6zkurbgE79bsBZnmcxL7tWox2xQAqRHTqKdMFU6R1TpTHaaPUsNrd3VAbkUHLPteW4eRLcn4huoxzoAm%2B9Ok%2FcW3zg8TlzFa6WD1gYfK9DUr%2Bg3tbEb8ZGT0arLqEJcr5S34Mb5Wa8KM9HmyToRM7a4uCGejwR1jyeE5Nd5UwQCtX1cLbDMHFv8Jni75ZNzVsN5aGNaqCLmY0GvNATt%2F%2BaSXw47pT2X2cLUN6RDerI%2Fwgb7YI04MOO1ssQGOqUBlT2XQU84hmS%2BK7peV54Hk0Q5L%2FYRMBljKyfWLL22ATy7wdS6%2F%2FqRAwoiyXboTUdspjlg7ZsIOuYzJ09%2B0nKPC4CYDUDqzwxh4AZ2k9kFPWJAJqnK%2B2K9VisqA1DpEYVdiSwGRITWRgIFGn3J1GBmmrxbreZMICixD6tVOKpTVtk8farrCZejT2DZVgQzO%2FmJu8QxR%2BPHjXAG%2FawviASWuUArqZi%2B&X-Amz-Signature=62101ff2d845c57a7b1e29356d0679a9a26748e0274f7da7dbba21eddf633423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YTOEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCnvgYvy%2FQt%2BGr9rLyusbtrUKphvWQ%2Fe93Qvl5iD%2FyGAiEAgUqa4XMQhRhp6fNgN1BBa5vqaBm0yvAQmfzkqiSGFPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG3SGvyb3BdcmZiKircAw%2FtzF%2Foz8SFsoeWUwSw5F5WXrFeYxAjF6Wdiz6L7iZGzdzGeQLAgpdfCS4GF4hMw1QLWhwoBIZNHB7egMJDGzvuY04KzmPcjwpFnChwe4JsY2p34%2Bs%2BxT1HWftVo76Oa2w4BXdPw5xnNFILRDYx4OQTBLZ%2BrHKrJCmp3w5wenCLkEf%2FOIqhidzYjaQu%2FJLK5M7uBiEZkN%2BmUHZfVugcY4qvxcuGL82mVYsLbIIG9umUFdKmTZH%2BRf2MSSx2gcViBogpiA%2BtLHJMw8bRKC0lFBPn8UKa26KZo6Qh3ASsLWsHWX6PEWa3rcBuRjwIlJ25pA6ided4ADeJmXRwzp1OZjXfmYdQPLQsyvZbiNdNa%2FJ0DoD%2FOOeeoPK%2BuO8GhXhg%2ByXJTlMb%2F6zkurbgE79bsBZnmcxL7tWox2xQAqRHTqKdMFU6R1TpTHaaPUsNrd3VAbkUHLPteW4eRLcn4huoxzoAm%2B9Ok%2FcW3zg8TlzFa6WD1gYfK9DUr%2Bg3tbEb8ZGT0arLqEJcr5S34Mb5Wa8KM9HmyToRM7a4uCGejwR1jyeE5Nd5UwQCtX1cLbDMHFv8Jni75ZNzVsN5aGNaqCLmY0GvNATt%2F%2BaSXw47pT2X2cLUN6RDerI%2Fwgb7YI04MOO1ssQGOqUBlT2XQU84hmS%2BK7peV54Hk0Q5L%2FYRMBljKyfWLL22ATy7wdS6%2F%2FqRAwoiyXboTUdspjlg7ZsIOuYzJ09%2B0nKPC4CYDUDqzwxh4AZ2k9kFPWJAJqnK%2B2K9VisqA1DpEYVdiSwGRITWRgIFGn3J1GBmmrxbreZMICixD6tVOKpTVtk8farrCZejT2DZVgQzO%2FmJu8QxR%2BPHjXAG%2FawviASWuUArqZi%2B&X-Amz-Signature=87d719dac2d149ff096d73822571704feae2bd9998680154b213fd8679d6a683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YTOEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCnvgYvy%2FQt%2BGr9rLyusbtrUKphvWQ%2Fe93Qvl5iD%2FyGAiEAgUqa4XMQhRhp6fNgN1BBa5vqaBm0yvAQmfzkqiSGFPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG3SGvyb3BdcmZiKircAw%2FtzF%2Foz8SFsoeWUwSw5F5WXrFeYxAjF6Wdiz6L7iZGzdzGeQLAgpdfCS4GF4hMw1QLWhwoBIZNHB7egMJDGzvuY04KzmPcjwpFnChwe4JsY2p34%2Bs%2BxT1HWftVo76Oa2w4BXdPw5xnNFILRDYx4OQTBLZ%2BrHKrJCmp3w5wenCLkEf%2FOIqhidzYjaQu%2FJLK5M7uBiEZkN%2BmUHZfVugcY4qvxcuGL82mVYsLbIIG9umUFdKmTZH%2BRf2MSSx2gcViBogpiA%2BtLHJMw8bRKC0lFBPn8UKa26KZo6Qh3ASsLWsHWX6PEWa3rcBuRjwIlJ25pA6ided4ADeJmXRwzp1OZjXfmYdQPLQsyvZbiNdNa%2FJ0DoD%2FOOeeoPK%2BuO8GhXhg%2ByXJTlMb%2F6zkurbgE79bsBZnmcxL7tWox2xQAqRHTqKdMFU6R1TpTHaaPUsNrd3VAbkUHLPteW4eRLcn4huoxzoAm%2B9Ok%2FcW3zg8TlzFa6WD1gYfK9DUr%2Bg3tbEb8ZGT0arLqEJcr5S34Mb5Wa8KM9HmyToRM7a4uCGejwR1jyeE5Nd5UwQCtX1cLbDMHFv8Jni75ZNzVsN5aGNaqCLmY0GvNATt%2F%2BaSXw47pT2X2cLUN6RDerI%2Fwgb7YI04MOO1ssQGOqUBlT2XQU84hmS%2BK7peV54Hk0Q5L%2FYRMBljKyfWLL22ATy7wdS6%2F%2FqRAwoiyXboTUdspjlg7ZsIOuYzJ09%2B0nKPC4CYDUDqzwxh4AZ2k9kFPWJAJqnK%2B2K9VisqA1DpEYVdiSwGRITWRgIFGn3J1GBmmrxbreZMICixD6tVOKpTVtk8farrCZejT2DZVgQzO%2FmJu8QxR%2BPHjXAG%2FawviASWuUArqZi%2B&X-Amz-Signature=06baa89593eeb6b0260c2929a332551507efeefb0f04074ae8a411a650f886ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
