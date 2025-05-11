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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVIM7AD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2FUVP%2Flun8H3eZkXMihZcLxVg51YJkfsEBVsiFGk8MEwIgB8Rb2OrSLV7HmiuWFyHmVvcQLg2Im%2FpkJJif68vyL2YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvKeUeQ8%2FyOJuxnircA7wX9iwAWMsYejgX8mVqNqVa41msLeNpCFLGFo3GpOlxc466eNFgTpjW7M0F%2FaPjQqWgvaeos6HbluPJKhllMlf%2BKZroxmxeM4rIGz59mXAGSawbsYVIHVPc6jAWAJag5hwF4S%2FivMXWxgaWJfHEeTv6R617u7bM943QIBa7%2B%2FfmMq%2Fv7Bb8yx5ylQQkWJbKDR5v0AxZZRYxcv0kEYV1Q398afy%2B2Zg2mPQEDF12igzqb1gxGhU4d55a9qJ5iu08DNH5wsxzb1d4M%2F4uUYc093hV4bivjVFY0PMdM%2Fsmfnanb03TNKKrGxIna2Cfhf5lTcmzs8%2FuyzRP0rPfobgHqF4earZVs2Q%2BK5nSai%2FD0MLZ7ABVer5SiCOxMUwtLtOJx5AE31w4QIdJx3Z%2BoXR8GkE5CGGwUkkG6wpMuF9D3vlEplgyfVzHB%2B0SYXKI9kKXj4bbpdUBlqOWdOEoT7mjHY3sOx28ipsRyFIO%2FrlH1iBydNgR1T8%2B5Szg%2BcpTguqbrFpKdQ7nKQ3tQ1sXfnzji7xu2iwS0C%2Fyr2rfFwKbrawZMuNIsjYE%2BvS%2F%2BJnQ3cyoVWKhKJt2dkIHcWCbIC8HylHyL%2FbmzRdczH30zjaKeaEDQt%2BN5nKAZG2l5coIMKPVhMEGOqUBUjgto%2B5Hej%2F1rNrFLWrrm%2FEI%2FQ%2FXWR7ygHJIXQqxQbbs8MGJzgjW%2BRVYwlVk5wXU9pcaZhKwsX0tlAYHUGGNUdQkzeuXf67aSS4hCjk0pP6i1ljIZEdgK9al%2FTDTQVzDXuZvU%2Bzfo2gri%2BUSBlk1B7JtG2wWd5103Xbfoakkg9XGpY83x8HiUwSdSfZ%2F4qQJVz0NM%2FTCIaWqFjrSJaehyedZjEkN&X-Amz-Signature=362c7348f0c9082a766832c3a76756b49da085a1af377e89738ba7c1b7044682&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVIM7AD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2FUVP%2Flun8H3eZkXMihZcLxVg51YJkfsEBVsiFGk8MEwIgB8Rb2OrSLV7HmiuWFyHmVvcQLg2Im%2FpkJJif68vyL2YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvKeUeQ8%2FyOJuxnircA7wX9iwAWMsYejgX8mVqNqVa41msLeNpCFLGFo3GpOlxc466eNFgTpjW7M0F%2FaPjQqWgvaeos6HbluPJKhllMlf%2BKZroxmxeM4rIGz59mXAGSawbsYVIHVPc6jAWAJag5hwF4S%2FivMXWxgaWJfHEeTv6R617u7bM943QIBa7%2B%2FfmMq%2Fv7Bb8yx5ylQQkWJbKDR5v0AxZZRYxcv0kEYV1Q398afy%2B2Zg2mPQEDF12igzqb1gxGhU4d55a9qJ5iu08DNH5wsxzb1d4M%2F4uUYc093hV4bivjVFY0PMdM%2Fsmfnanb03TNKKrGxIna2Cfhf5lTcmzs8%2FuyzRP0rPfobgHqF4earZVs2Q%2BK5nSai%2FD0MLZ7ABVer5SiCOxMUwtLtOJx5AE31w4QIdJx3Z%2BoXR8GkE5CGGwUkkG6wpMuF9D3vlEplgyfVzHB%2B0SYXKI9kKXj4bbpdUBlqOWdOEoT7mjHY3sOx28ipsRyFIO%2FrlH1iBydNgR1T8%2B5Szg%2BcpTguqbrFpKdQ7nKQ3tQ1sXfnzji7xu2iwS0C%2Fyr2rfFwKbrawZMuNIsjYE%2BvS%2F%2BJnQ3cyoVWKhKJt2dkIHcWCbIC8HylHyL%2FbmzRdczH30zjaKeaEDQt%2BN5nKAZG2l5coIMKPVhMEGOqUBUjgto%2B5Hej%2F1rNrFLWrrm%2FEI%2FQ%2FXWR7ygHJIXQqxQbbs8MGJzgjW%2BRVYwlVk5wXU9pcaZhKwsX0tlAYHUGGNUdQkzeuXf67aSS4hCjk0pP6i1ljIZEdgK9al%2FTDTQVzDXuZvU%2Bzfo2gri%2BUSBlk1B7JtG2wWd5103Xbfoakkg9XGpY83x8HiUwSdSfZ%2F4qQJVz0NM%2FTCIaWqFjrSJaehyedZjEkN&X-Amz-Signature=6068bbd54721e63050c196546fa5a5464c7593f539fe672ce4dbe9e087a8a645&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVIM7AD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2FUVP%2Flun8H3eZkXMihZcLxVg51YJkfsEBVsiFGk8MEwIgB8Rb2OrSLV7HmiuWFyHmVvcQLg2Im%2FpkJJif68vyL2YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvKeUeQ8%2FyOJuxnircA7wX9iwAWMsYejgX8mVqNqVa41msLeNpCFLGFo3GpOlxc466eNFgTpjW7M0F%2FaPjQqWgvaeos6HbluPJKhllMlf%2BKZroxmxeM4rIGz59mXAGSawbsYVIHVPc6jAWAJag5hwF4S%2FivMXWxgaWJfHEeTv6R617u7bM943QIBa7%2B%2FfmMq%2Fv7Bb8yx5ylQQkWJbKDR5v0AxZZRYxcv0kEYV1Q398afy%2B2Zg2mPQEDF12igzqb1gxGhU4d55a9qJ5iu08DNH5wsxzb1d4M%2F4uUYc093hV4bivjVFY0PMdM%2Fsmfnanb03TNKKrGxIna2Cfhf5lTcmzs8%2FuyzRP0rPfobgHqF4earZVs2Q%2BK5nSai%2FD0MLZ7ABVer5SiCOxMUwtLtOJx5AE31w4QIdJx3Z%2BoXR8GkE5CGGwUkkG6wpMuF9D3vlEplgyfVzHB%2B0SYXKI9kKXj4bbpdUBlqOWdOEoT7mjHY3sOx28ipsRyFIO%2FrlH1iBydNgR1T8%2B5Szg%2BcpTguqbrFpKdQ7nKQ3tQ1sXfnzji7xu2iwS0C%2Fyr2rfFwKbrawZMuNIsjYE%2BvS%2F%2BJnQ3cyoVWKhKJt2dkIHcWCbIC8HylHyL%2FbmzRdczH30zjaKeaEDQt%2BN5nKAZG2l5coIMKPVhMEGOqUBUjgto%2B5Hej%2F1rNrFLWrrm%2FEI%2FQ%2FXWR7ygHJIXQqxQbbs8MGJzgjW%2BRVYwlVk5wXU9pcaZhKwsX0tlAYHUGGNUdQkzeuXf67aSS4hCjk0pP6i1ljIZEdgK9al%2FTDTQVzDXuZvU%2Bzfo2gri%2BUSBlk1B7JtG2wWd5103Xbfoakkg9XGpY83x8HiUwSdSfZ%2F4qQJVz0NM%2FTCIaWqFjrSJaehyedZjEkN&X-Amz-Signature=a3457536e343a6c1133a3781837139f987e586530c23bdb0fd9de645e7554341&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVIM7AD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2FUVP%2Flun8H3eZkXMihZcLxVg51YJkfsEBVsiFGk8MEwIgB8Rb2OrSLV7HmiuWFyHmVvcQLg2Im%2FpkJJif68vyL2YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvKeUeQ8%2FyOJuxnircA7wX9iwAWMsYejgX8mVqNqVa41msLeNpCFLGFo3GpOlxc466eNFgTpjW7M0F%2FaPjQqWgvaeos6HbluPJKhllMlf%2BKZroxmxeM4rIGz59mXAGSawbsYVIHVPc6jAWAJag5hwF4S%2FivMXWxgaWJfHEeTv6R617u7bM943QIBa7%2B%2FfmMq%2Fv7Bb8yx5ylQQkWJbKDR5v0AxZZRYxcv0kEYV1Q398afy%2B2Zg2mPQEDF12igzqb1gxGhU4d55a9qJ5iu08DNH5wsxzb1d4M%2F4uUYc093hV4bivjVFY0PMdM%2Fsmfnanb03TNKKrGxIna2Cfhf5lTcmzs8%2FuyzRP0rPfobgHqF4earZVs2Q%2BK5nSai%2FD0MLZ7ABVer5SiCOxMUwtLtOJx5AE31w4QIdJx3Z%2BoXR8GkE5CGGwUkkG6wpMuF9D3vlEplgyfVzHB%2B0SYXKI9kKXj4bbpdUBlqOWdOEoT7mjHY3sOx28ipsRyFIO%2FrlH1iBydNgR1T8%2B5Szg%2BcpTguqbrFpKdQ7nKQ3tQ1sXfnzji7xu2iwS0C%2Fyr2rfFwKbrawZMuNIsjYE%2BvS%2F%2BJnQ3cyoVWKhKJt2dkIHcWCbIC8HylHyL%2FbmzRdczH30zjaKeaEDQt%2BN5nKAZG2l5coIMKPVhMEGOqUBUjgto%2B5Hej%2F1rNrFLWrrm%2FEI%2FQ%2FXWR7ygHJIXQqxQbbs8MGJzgjW%2BRVYwlVk5wXU9pcaZhKwsX0tlAYHUGGNUdQkzeuXf67aSS4hCjk0pP6i1ljIZEdgK9al%2FTDTQVzDXuZvU%2Bzfo2gri%2BUSBlk1B7JtG2wWd5103Xbfoakkg9XGpY83x8HiUwSdSfZ%2F4qQJVz0NM%2FTCIaWqFjrSJaehyedZjEkN&X-Amz-Signature=0b4d1055990b5593affb4ec4d81dadaad1f1608e76e0a2c0ba741b342dc3e611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVIM7AD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2FUVP%2Flun8H3eZkXMihZcLxVg51YJkfsEBVsiFGk8MEwIgB8Rb2OrSLV7HmiuWFyHmVvcQLg2Im%2FpkJJif68vyL2YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZvKeUeQ8%2FyOJuxnircA7wX9iwAWMsYejgX8mVqNqVa41msLeNpCFLGFo3GpOlxc466eNFgTpjW7M0F%2FaPjQqWgvaeos6HbluPJKhllMlf%2BKZroxmxeM4rIGz59mXAGSawbsYVIHVPc6jAWAJag5hwF4S%2FivMXWxgaWJfHEeTv6R617u7bM943QIBa7%2B%2FfmMq%2Fv7Bb8yx5ylQQkWJbKDR5v0AxZZRYxcv0kEYV1Q398afy%2B2Zg2mPQEDF12igzqb1gxGhU4d55a9qJ5iu08DNH5wsxzb1d4M%2F4uUYc093hV4bivjVFY0PMdM%2Fsmfnanb03TNKKrGxIna2Cfhf5lTcmzs8%2FuyzRP0rPfobgHqF4earZVs2Q%2BK5nSai%2FD0MLZ7ABVer5SiCOxMUwtLtOJx5AE31w4QIdJx3Z%2BoXR8GkE5CGGwUkkG6wpMuF9D3vlEplgyfVzHB%2B0SYXKI9kKXj4bbpdUBlqOWdOEoT7mjHY3sOx28ipsRyFIO%2FrlH1iBydNgR1T8%2B5Szg%2BcpTguqbrFpKdQ7nKQ3tQ1sXfnzji7xu2iwS0C%2Fyr2rfFwKbrawZMuNIsjYE%2BvS%2F%2BJnQ3cyoVWKhKJt2dkIHcWCbIC8HylHyL%2FbmzRdczH30zjaKeaEDQt%2BN5nKAZG2l5coIMKPVhMEGOqUBUjgto%2B5Hej%2F1rNrFLWrrm%2FEI%2FQ%2FXWR7ygHJIXQqxQbbs8MGJzgjW%2BRVYwlVk5wXU9pcaZhKwsX0tlAYHUGGNUdQkzeuXf67aSS4hCjk0pP6i1ljIZEdgK9al%2FTDTQVzDXuZvU%2Bzfo2gri%2BUSBlk1B7JtG2wWd5103Xbfoakkg9XGpY83x8HiUwSdSfZ%2F4qQJVz0NM%2FTCIaWqFjrSJaehyedZjEkN&X-Amz-Signature=9cf1ea7a8736e2c72aa22bcce57c335fa92656150ffcbc1aab1f748e90337284&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
