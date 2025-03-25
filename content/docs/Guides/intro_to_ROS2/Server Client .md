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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXJFAQX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhK5GU%2F1T8F%2BkfSul9nvy5ilxxwt8jwmg8sN9nfURYUwIgcbRF4QrnCR6c57T2rsUBfwvD%2BCJhCFcFpUrOlCfry44qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhNDCUwoNUKtEDEhyrcA7Cb4dFO%2BiOg4lCaMi3hR3bbvDTqSXFVzhj5c%2BsiCSE89%2BRg7vqm1Sg%2Bc%2FwTXvJagEhmKZqLJTL%2Bs4uinW64qXnP0AYuaQHFHXIK2LGddywAQQPv69z9bcPvmJHeAuA3Rs7F44bAdYjjoKIbMzy%2FqUB86kM7I5o0Li9RnB0v%2BfO3LB0qTvit%2BvWCRkw3vM4RmmA03gkJpRySjLb6kqg23zm%2Feq51L2m4iMTSOLQB7OeTghKtF7ZXmHo9hy%2BtYJ4dQETzJVcBrH84OoemOiHp%2Fiy6%2FWUJ4CXwDxALfOUvHw%2FylgjulOWXtyNgXc6nzT02kMzYTp5P3mudt8MYvn4Q4fSG8G4FuAzyblL5VkLWtRclMtEVMTZrCMme9w0knU5KC74ACrOMGDeAgm2PWHfPt90lbLBhXOyt3zPFEu8tjkb3KIj6gKv3XIxzl%2BmdQ9yu4IaZat0Esglnr0I7TQvdpwryP9y4JT5qhRKU3GG0pXCC2VdFDvyidxUFM4%2BWqskqcL3sfNHW3j6rVQlf%2BV6GTaaW52MSXuYLi8qxBdLI9VgP7ppugDrBT0GvpUE18%2BEIj%2BjBXs8XQMKzXKiWI1Dk%2BFkTHFgEbkL941qlfxp3i3lLvlhUKtS0E9FuHi1YMPCNib8GOqUBo2TPPFh0j13z6MgP%2FRWR4raG3POesjGxeT%2FS2UVCF5t0RVvy1NnhMtjIcjAH%2BHzyCTkKV60n%2BeGijMIm8696q2syui1ZDwAW6xafSzWQRHt42I5EbiBb1Tc5r0Ff4Obz8kZTCNaATtGZNSe77qJyonqM3IzQXVizvRncDn8m%2B7thSDK8j1IaYok6bizLD7nKKqMiytwwSqRjYpNm5BfyD5O%2FcdXY&X-Amz-Signature=04c3baf66af45e21a3a0144fbe89a86f867c6938512742e4dff276b2ee0efc30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXJFAQX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhK5GU%2F1T8F%2BkfSul9nvy5ilxxwt8jwmg8sN9nfURYUwIgcbRF4QrnCR6c57T2rsUBfwvD%2BCJhCFcFpUrOlCfry44qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhNDCUwoNUKtEDEhyrcA7Cb4dFO%2BiOg4lCaMi3hR3bbvDTqSXFVzhj5c%2BsiCSE89%2BRg7vqm1Sg%2Bc%2FwTXvJagEhmKZqLJTL%2Bs4uinW64qXnP0AYuaQHFHXIK2LGddywAQQPv69z9bcPvmJHeAuA3Rs7F44bAdYjjoKIbMzy%2FqUB86kM7I5o0Li9RnB0v%2BfO3LB0qTvit%2BvWCRkw3vM4RmmA03gkJpRySjLb6kqg23zm%2Feq51L2m4iMTSOLQB7OeTghKtF7ZXmHo9hy%2BtYJ4dQETzJVcBrH84OoemOiHp%2Fiy6%2FWUJ4CXwDxALfOUvHw%2FylgjulOWXtyNgXc6nzT02kMzYTp5P3mudt8MYvn4Q4fSG8G4FuAzyblL5VkLWtRclMtEVMTZrCMme9w0knU5KC74ACrOMGDeAgm2PWHfPt90lbLBhXOyt3zPFEu8tjkb3KIj6gKv3XIxzl%2BmdQ9yu4IaZat0Esglnr0I7TQvdpwryP9y4JT5qhRKU3GG0pXCC2VdFDvyidxUFM4%2BWqskqcL3sfNHW3j6rVQlf%2BV6GTaaW52MSXuYLi8qxBdLI9VgP7ppugDrBT0GvpUE18%2BEIj%2BjBXs8XQMKzXKiWI1Dk%2BFkTHFgEbkL941qlfxp3i3lLvlhUKtS0E9FuHi1YMPCNib8GOqUBo2TPPFh0j13z6MgP%2FRWR4raG3POesjGxeT%2FS2UVCF5t0RVvy1NnhMtjIcjAH%2BHzyCTkKV60n%2BeGijMIm8696q2syui1ZDwAW6xafSzWQRHt42I5EbiBb1Tc5r0Ff4Obz8kZTCNaATtGZNSe77qJyonqM3IzQXVizvRncDn8m%2B7thSDK8j1IaYok6bizLD7nKKqMiytwwSqRjYpNm5BfyD5O%2FcdXY&X-Amz-Signature=4abc0405ee09d6f78e069e8e6ed492a932fe25f1ce5a1edea5dac1cb1af20602&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXJFAQX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhK5GU%2F1T8F%2BkfSul9nvy5ilxxwt8jwmg8sN9nfURYUwIgcbRF4QrnCR6c57T2rsUBfwvD%2BCJhCFcFpUrOlCfry44qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhNDCUwoNUKtEDEhyrcA7Cb4dFO%2BiOg4lCaMi3hR3bbvDTqSXFVzhj5c%2BsiCSE89%2BRg7vqm1Sg%2Bc%2FwTXvJagEhmKZqLJTL%2Bs4uinW64qXnP0AYuaQHFHXIK2LGddywAQQPv69z9bcPvmJHeAuA3Rs7F44bAdYjjoKIbMzy%2FqUB86kM7I5o0Li9RnB0v%2BfO3LB0qTvit%2BvWCRkw3vM4RmmA03gkJpRySjLb6kqg23zm%2Feq51L2m4iMTSOLQB7OeTghKtF7ZXmHo9hy%2BtYJ4dQETzJVcBrH84OoemOiHp%2Fiy6%2FWUJ4CXwDxALfOUvHw%2FylgjulOWXtyNgXc6nzT02kMzYTp5P3mudt8MYvn4Q4fSG8G4FuAzyblL5VkLWtRclMtEVMTZrCMme9w0knU5KC74ACrOMGDeAgm2PWHfPt90lbLBhXOyt3zPFEu8tjkb3KIj6gKv3XIxzl%2BmdQ9yu4IaZat0Esglnr0I7TQvdpwryP9y4JT5qhRKU3GG0pXCC2VdFDvyidxUFM4%2BWqskqcL3sfNHW3j6rVQlf%2BV6GTaaW52MSXuYLi8qxBdLI9VgP7ppugDrBT0GvpUE18%2BEIj%2BjBXs8XQMKzXKiWI1Dk%2BFkTHFgEbkL941qlfxp3i3lLvlhUKtS0E9FuHi1YMPCNib8GOqUBo2TPPFh0j13z6MgP%2FRWR4raG3POesjGxeT%2FS2UVCF5t0RVvy1NnhMtjIcjAH%2BHzyCTkKV60n%2BeGijMIm8696q2syui1ZDwAW6xafSzWQRHt42I5EbiBb1Tc5r0Ff4Obz8kZTCNaATtGZNSe77qJyonqM3IzQXVizvRncDn8m%2B7thSDK8j1IaYok6bizLD7nKKqMiytwwSqRjYpNm5BfyD5O%2FcdXY&X-Amz-Signature=d441ab0856f51d91968dbb5e0cdb993ba3f0105c6c97e603635f0f4dd03ec66c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXJFAQX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhK5GU%2F1T8F%2BkfSul9nvy5ilxxwt8jwmg8sN9nfURYUwIgcbRF4QrnCR6c57T2rsUBfwvD%2BCJhCFcFpUrOlCfry44qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhNDCUwoNUKtEDEhyrcA7Cb4dFO%2BiOg4lCaMi3hR3bbvDTqSXFVzhj5c%2BsiCSE89%2BRg7vqm1Sg%2Bc%2FwTXvJagEhmKZqLJTL%2Bs4uinW64qXnP0AYuaQHFHXIK2LGddywAQQPv69z9bcPvmJHeAuA3Rs7F44bAdYjjoKIbMzy%2FqUB86kM7I5o0Li9RnB0v%2BfO3LB0qTvit%2BvWCRkw3vM4RmmA03gkJpRySjLb6kqg23zm%2Feq51L2m4iMTSOLQB7OeTghKtF7ZXmHo9hy%2BtYJ4dQETzJVcBrH84OoemOiHp%2Fiy6%2FWUJ4CXwDxALfOUvHw%2FylgjulOWXtyNgXc6nzT02kMzYTp5P3mudt8MYvn4Q4fSG8G4FuAzyblL5VkLWtRclMtEVMTZrCMme9w0knU5KC74ACrOMGDeAgm2PWHfPt90lbLBhXOyt3zPFEu8tjkb3KIj6gKv3XIxzl%2BmdQ9yu4IaZat0Esglnr0I7TQvdpwryP9y4JT5qhRKU3GG0pXCC2VdFDvyidxUFM4%2BWqskqcL3sfNHW3j6rVQlf%2BV6GTaaW52MSXuYLi8qxBdLI9VgP7ppugDrBT0GvpUE18%2BEIj%2BjBXs8XQMKzXKiWI1Dk%2BFkTHFgEbkL941qlfxp3i3lLvlhUKtS0E9FuHi1YMPCNib8GOqUBo2TPPFh0j13z6MgP%2FRWR4raG3POesjGxeT%2FS2UVCF5t0RVvy1NnhMtjIcjAH%2BHzyCTkKV60n%2BeGijMIm8696q2syui1ZDwAW6xafSzWQRHt42I5EbiBb1Tc5r0Ff4Obz8kZTCNaATtGZNSe77qJyonqM3IzQXVizvRncDn8m%2B7thSDK8j1IaYok6bizLD7nKKqMiytwwSqRjYpNm5BfyD5O%2FcdXY&X-Amz-Signature=dc7bf32566426dc3511fee9962869bee23e88ee42fe36828d63edda66a796777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXJFAQX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhK5GU%2F1T8F%2BkfSul9nvy5ilxxwt8jwmg8sN9nfURYUwIgcbRF4QrnCR6c57T2rsUBfwvD%2BCJhCFcFpUrOlCfry44qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhNDCUwoNUKtEDEhyrcA7Cb4dFO%2BiOg4lCaMi3hR3bbvDTqSXFVzhj5c%2BsiCSE89%2BRg7vqm1Sg%2Bc%2FwTXvJagEhmKZqLJTL%2Bs4uinW64qXnP0AYuaQHFHXIK2LGddywAQQPv69z9bcPvmJHeAuA3Rs7F44bAdYjjoKIbMzy%2FqUB86kM7I5o0Li9RnB0v%2BfO3LB0qTvit%2BvWCRkw3vM4RmmA03gkJpRySjLb6kqg23zm%2Feq51L2m4iMTSOLQB7OeTghKtF7ZXmHo9hy%2BtYJ4dQETzJVcBrH84OoemOiHp%2Fiy6%2FWUJ4CXwDxALfOUvHw%2FylgjulOWXtyNgXc6nzT02kMzYTp5P3mudt8MYvn4Q4fSG8G4FuAzyblL5VkLWtRclMtEVMTZrCMme9w0knU5KC74ACrOMGDeAgm2PWHfPt90lbLBhXOyt3zPFEu8tjkb3KIj6gKv3XIxzl%2BmdQ9yu4IaZat0Esglnr0I7TQvdpwryP9y4JT5qhRKU3GG0pXCC2VdFDvyidxUFM4%2BWqskqcL3sfNHW3j6rVQlf%2BV6GTaaW52MSXuYLi8qxBdLI9VgP7ppugDrBT0GvpUE18%2BEIj%2BjBXs8XQMKzXKiWI1Dk%2BFkTHFgEbkL941qlfxp3i3lLvlhUKtS0E9FuHi1YMPCNib8GOqUBo2TPPFh0j13z6MgP%2FRWR4raG3POesjGxeT%2FS2UVCF5t0RVvy1NnhMtjIcjAH%2BHzyCTkKV60n%2BeGijMIm8696q2syui1ZDwAW6xafSzWQRHt42I5EbiBb1Tc5r0Ff4Obz8kZTCNaATtGZNSe77qJyonqM3IzQXVizvRncDn8m%2B7thSDK8j1IaYok6bizLD7nKKqMiytwwSqRjYpNm5BfyD5O%2FcdXY&X-Amz-Signature=5c0b9081b0f5f79a50fbd7b84c6e8658c5f75b6b9bc9a249f075432147baaee6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
