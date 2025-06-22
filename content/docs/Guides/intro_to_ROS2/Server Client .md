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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJPB6XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg64yNaqyuHZyuJa7ri8D9EaEmouKpvcMI923u5Ih8lAIgYSOt%2F1V1GewcaGBW3pjVTPDvuWKiX3MlMnTZ7ftDP2wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf7J0e7Cnssx%2FoLcyrcA32c0NXvzl%2Fpina6jfAzqHPQzFVr0t2W6Kzd1PAMShZ%2F%2F9h4kacu4X7CwQIO3T3%2FXt2Ql2FaQ3nHjRaLXcagwa%2BPANX6F2VqVypes0%2FhHpO%2B1lCdkm%2FjD0AdmdoDy9HhUGagQrH%2B8QpmflJ8ddFv8A5KX697D0M%2FLjUBwS6zgfOXNXjlhRVAU8bE4SktlQGFAedLrjXJJ6M7x6wuL1y5Igp%2BVsk1vHQ0OL6xHJ5l4KIPVSWngLAAj6PovGkaNhLWoGed90oDnsz%2FyVvPB9n6moobXTJLWhEwdB7igfj1MBYYq1OIymWgejWbmJaSS407EwubLHIrAn6ATfF6%2Bqc1GH77KBNnR1WFgETheknianxqk8VLvq2Mp0DAgGXySteBM%2Bsh1p9qsyCPznd5Lti%2B%2B%2F9Er7kHK%2FJ%2F7OcS3gdu%2Fmurx80uJt4G201Y8QQ3GHxp%2F5pOnwwE%2Bgx8xtLHsTSiyz3dl10AxSf2fSAr1csKKYXJDKD2dDcvkO%2B1yEL9SeUgf4HPZQpWjM33r4OOa8PamY2iHtqjfDWIbVy%2BTnmojv6ALd8SupSGudrP0TAKINYMIpv%2BtT%2FdYMwZwyPAk%2F4Cr9TxiaOtIMNOnHw8Ti3MpKSnGRxpBsAVXZUitPXOMIjv4MIGOqUBLe0y39cJHvHtV6EuULww3WuyvSez%2FRIlERZ6GJ62WxL2EBhuiaqdMBge3lv8vmWTthy7fq3O1wYUyxFdpUWNTglFiMawlrPPcrcxPpIkd0SzFsohOEaRhPdmciSDcyD3W15PLkRrDoRMy7Swrq3YjO8BbPClG1SKln5UnvYOc0%2By%2FBOAxazcoH2omTorh9SEC0%2BBKEhoqTCD%2Fo2PyONU%2BbpCQM7R&X-Amz-Signature=599e1dbeb938c6ee9511cbed3bd9808bff22f67f25cb103ec42a182da5a1fdc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJPB6XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg64yNaqyuHZyuJa7ri8D9EaEmouKpvcMI923u5Ih8lAIgYSOt%2F1V1GewcaGBW3pjVTPDvuWKiX3MlMnTZ7ftDP2wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf7J0e7Cnssx%2FoLcyrcA32c0NXvzl%2Fpina6jfAzqHPQzFVr0t2W6Kzd1PAMShZ%2F%2F9h4kacu4X7CwQIO3T3%2FXt2Ql2FaQ3nHjRaLXcagwa%2BPANX6F2VqVypes0%2FhHpO%2B1lCdkm%2FjD0AdmdoDy9HhUGagQrH%2B8QpmflJ8ddFv8A5KX697D0M%2FLjUBwS6zgfOXNXjlhRVAU8bE4SktlQGFAedLrjXJJ6M7x6wuL1y5Igp%2BVsk1vHQ0OL6xHJ5l4KIPVSWngLAAj6PovGkaNhLWoGed90oDnsz%2FyVvPB9n6moobXTJLWhEwdB7igfj1MBYYq1OIymWgejWbmJaSS407EwubLHIrAn6ATfF6%2Bqc1GH77KBNnR1WFgETheknianxqk8VLvq2Mp0DAgGXySteBM%2Bsh1p9qsyCPznd5Lti%2B%2B%2F9Er7kHK%2FJ%2F7OcS3gdu%2Fmurx80uJt4G201Y8QQ3GHxp%2F5pOnwwE%2Bgx8xtLHsTSiyz3dl10AxSf2fSAr1csKKYXJDKD2dDcvkO%2B1yEL9SeUgf4HPZQpWjM33r4OOa8PamY2iHtqjfDWIbVy%2BTnmojv6ALd8SupSGudrP0TAKINYMIpv%2BtT%2FdYMwZwyPAk%2F4Cr9TxiaOtIMNOnHw8Ti3MpKSnGRxpBsAVXZUitPXOMIjv4MIGOqUBLe0y39cJHvHtV6EuULww3WuyvSez%2FRIlERZ6GJ62WxL2EBhuiaqdMBge3lv8vmWTthy7fq3O1wYUyxFdpUWNTglFiMawlrPPcrcxPpIkd0SzFsohOEaRhPdmciSDcyD3W15PLkRrDoRMy7Swrq3YjO8BbPClG1SKln5UnvYOc0%2By%2FBOAxazcoH2omTorh9SEC0%2BBKEhoqTCD%2Fo2PyONU%2BbpCQM7R&X-Amz-Signature=07cfb3485df85e49b2dbbe4f19b94c796ced221c845319e828d35550580feab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJPB6XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg64yNaqyuHZyuJa7ri8D9EaEmouKpvcMI923u5Ih8lAIgYSOt%2F1V1GewcaGBW3pjVTPDvuWKiX3MlMnTZ7ftDP2wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf7J0e7Cnssx%2FoLcyrcA32c0NXvzl%2Fpina6jfAzqHPQzFVr0t2W6Kzd1PAMShZ%2F%2F9h4kacu4X7CwQIO3T3%2FXt2Ql2FaQ3nHjRaLXcagwa%2BPANX6F2VqVypes0%2FhHpO%2B1lCdkm%2FjD0AdmdoDy9HhUGagQrH%2B8QpmflJ8ddFv8A5KX697D0M%2FLjUBwS6zgfOXNXjlhRVAU8bE4SktlQGFAedLrjXJJ6M7x6wuL1y5Igp%2BVsk1vHQ0OL6xHJ5l4KIPVSWngLAAj6PovGkaNhLWoGed90oDnsz%2FyVvPB9n6moobXTJLWhEwdB7igfj1MBYYq1OIymWgejWbmJaSS407EwubLHIrAn6ATfF6%2Bqc1GH77KBNnR1WFgETheknianxqk8VLvq2Mp0DAgGXySteBM%2Bsh1p9qsyCPznd5Lti%2B%2B%2F9Er7kHK%2FJ%2F7OcS3gdu%2Fmurx80uJt4G201Y8QQ3GHxp%2F5pOnwwE%2Bgx8xtLHsTSiyz3dl10AxSf2fSAr1csKKYXJDKD2dDcvkO%2B1yEL9SeUgf4HPZQpWjM33r4OOa8PamY2iHtqjfDWIbVy%2BTnmojv6ALd8SupSGudrP0TAKINYMIpv%2BtT%2FdYMwZwyPAk%2F4Cr9TxiaOtIMNOnHw8Ti3MpKSnGRxpBsAVXZUitPXOMIjv4MIGOqUBLe0y39cJHvHtV6EuULww3WuyvSez%2FRIlERZ6GJ62WxL2EBhuiaqdMBge3lv8vmWTthy7fq3O1wYUyxFdpUWNTglFiMawlrPPcrcxPpIkd0SzFsohOEaRhPdmciSDcyD3W15PLkRrDoRMy7Swrq3YjO8BbPClG1SKln5UnvYOc0%2By%2FBOAxazcoH2omTorh9SEC0%2BBKEhoqTCD%2Fo2PyONU%2BbpCQM7R&X-Amz-Signature=319a1daf4a64f4d3656f1715cb078fb1fa643191d644c90abc81ca69b73eebbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJPB6XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg64yNaqyuHZyuJa7ri8D9EaEmouKpvcMI923u5Ih8lAIgYSOt%2F1V1GewcaGBW3pjVTPDvuWKiX3MlMnTZ7ftDP2wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf7J0e7Cnssx%2FoLcyrcA32c0NXvzl%2Fpina6jfAzqHPQzFVr0t2W6Kzd1PAMShZ%2F%2F9h4kacu4X7CwQIO3T3%2FXt2Ql2FaQ3nHjRaLXcagwa%2BPANX6F2VqVypes0%2FhHpO%2B1lCdkm%2FjD0AdmdoDy9HhUGagQrH%2B8QpmflJ8ddFv8A5KX697D0M%2FLjUBwS6zgfOXNXjlhRVAU8bE4SktlQGFAedLrjXJJ6M7x6wuL1y5Igp%2BVsk1vHQ0OL6xHJ5l4KIPVSWngLAAj6PovGkaNhLWoGed90oDnsz%2FyVvPB9n6moobXTJLWhEwdB7igfj1MBYYq1OIymWgejWbmJaSS407EwubLHIrAn6ATfF6%2Bqc1GH77KBNnR1WFgETheknianxqk8VLvq2Mp0DAgGXySteBM%2Bsh1p9qsyCPznd5Lti%2B%2B%2F9Er7kHK%2FJ%2F7OcS3gdu%2Fmurx80uJt4G201Y8QQ3GHxp%2F5pOnwwE%2Bgx8xtLHsTSiyz3dl10AxSf2fSAr1csKKYXJDKD2dDcvkO%2B1yEL9SeUgf4HPZQpWjM33r4OOa8PamY2iHtqjfDWIbVy%2BTnmojv6ALd8SupSGudrP0TAKINYMIpv%2BtT%2FdYMwZwyPAk%2F4Cr9TxiaOtIMNOnHw8Ti3MpKSnGRxpBsAVXZUitPXOMIjv4MIGOqUBLe0y39cJHvHtV6EuULww3WuyvSez%2FRIlERZ6GJ62WxL2EBhuiaqdMBge3lv8vmWTthy7fq3O1wYUyxFdpUWNTglFiMawlrPPcrcxPpIkd0SzFsohOEaRhPdmciSDcyD3W15PLkRrDoRMy7Swrq3YjO8BbPClG1SKln5UnvYOc0%2By%2FBOAxazcoH2omTorh9SEC0%2BBKEhoqTCD%2Fo2PyONU%2BbpCQM7R&X-Amz-Signature=bcb5768926cae22b17ae438c883d3fa935de1964a8614fc76b4591749949ca01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJPB6XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg64yNaqyuHZyuJa7ri8D9EaEmouKpvcMI923u5Ih8lAIgYSOt%2F1V1GewcaGBW3pjVTPDvuWKiX3MlMnTZ7ftDP2wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf7J0e7Cnssx%2FoLcyrcA32c0NXvzl%2Fpina6jfAzqHPQzFVr0t2W6Kzd1PAMShZ%2F%2F9h4kacu4X7CwQIO3T3%2FXt2Ql2FaQ3nHjRaLXcagwa%2BPANX6F2VqVypes0%2FhHpO%2B1lCdkm%2FjD0AdmdoDy9HhUGagQrH%2B8QpmflJ8ddFv8A5KX697D0M%2FLjUBwS6zgfOXNXjlhRVAU8bE4SktlQGFAedLrjXJJ6M7x6wuL1y5Igp%2BVsk1vHQ0OL6xHJ5l4KIPVSWngLAAj6PovGkaNhLWoGed90oDnsz%2FyVvPB9n6moobXTJLWhEwdB7igfj1MBYYq1OIymWgejWbmJaSS407EwubLHIrAn6ATfF6%2Bqc1GH77KBNnR1WFgETheknianxqk8VLvq2Mp0DAgGXySteBM%2Bsh1p9qsyCPznd5Lti%2B%2B%2F9Er7kHK%2FJ%2F7OcS3gdu%2Fmurx80uJt4G201Y8QQ3GHxp%2F5pOnwwE%2Bgx8xtLHsTSiyz3dl10AxSf2fSAr1csKKYXJDKD2dDcvkO%2B1yEL9SeUgf4HPZQpWjM33r4OOa8PamY2iHtqjfDWIbVy%2BTnmojv6ALd8SupSGudrP0TAKINYMIpv%2BtT%2FdYMwZwyPAk%2F4Cr9TxiaOtIMNOnHw8Ti3MpKSnGRxpBsAVXZUitPXOMIjv4MIGOqUBLe0y39cJHvHtV6EuULww3WuyvSez%2FRIlERZ6GJ62WxL2EBhuiaqdMBge3lv8vmWTthy7fq3O1wYUyxFdpUWNTglFiMawlrPPcrcxPpIkd0SzFsohOEaRhPdmciSDcyD3W15PLkRrDoRMy7Swrq3YjO8BbPClG1SKln5UnvYOc0%2By%2FBOAxazcoH2omTorh9SEC0%2BBKEhoqTCD%2Fo2PyONU%2BbpCQM7R&X-Amz-Signature=25ec619f56717b02a1dc1118c80c440babc330330bbc0ad63dc5fea162b187b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
