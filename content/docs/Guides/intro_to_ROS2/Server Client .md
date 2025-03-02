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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHT7XV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDC%2BxLzDa6u9%2Bs3n1XrBi9f9rvpLoDPrGy%2FeR9THZeD5AiEAwUyBn1Wm%2BdXCfhxmWRGaWVIx4XJam3iktNRsKw3BLjUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5R5OTh%2FMfeUcd67yrcA8jW59GBtOHLEsTj4doIPCtBYtUglT4fU8lCD7AHQOZWLDSALtBk%2B0m4N445t%2BC%2BJ1YaioveARgFOamkbK7nQ%2BZfYRTrMTe37V7wt6cv9Zy2%2BCnCudK5Jw3oAwBYjSX56V%2F1yuG%2ByXnmHSPLBc76osMhIT2Dp4VaOgyXDAMKtArRxiOmSRXodopMFIFZ68yYrA0EmqO1uHLTFYtzqETC4kHBy5BMinyVAzfYgQIjAYvPT9ddNkrEQTPDBPt7LiZjsydfCXGLB0NtqNeJxbbtliseyObyGqzhXIKCen9bsrDGN%2BQzupV9GVt2nJHCYXM80hHPx%2BVhxPS9eW5XcVdzOGGuFl0fpUCRH7dTjRZLMek51VjSYoTWC8qQQt9IUwQ2SmKWYW3wYy1gvnTtStd2oKPPfDxhvHQvJE9vGWy6xAYomnzm%2FKQ0B4mBGJ0pGuGFM7IowM62KC9MWSw%2FYpLQfJi4dd%2FQcan0dHoV9AJA3vwikCcwD97BOLc97l2k3h5DnVmVaoTLfEStTRi62x0zV%2FDz6eHZXPlgZBURYV9pY698saWiTypGgTJCH%2F5HfKxRRl4z5gI2veLdx%2BtgAsX8wvRQ23qT53Qr4%2Fg5xSWbNggiGzpTAk%2B1KXd49ArTMN%2FXj74GOqUBPA4KaP0%2BgnFUI%2F03kUpFbDqH2TWfK9L6BoAN4wmwMPINJJ1J7Cw1L8Hlzw%2FBmcBMxLi0OJa9qR9nla31tP5%2Bt3vrO%2FWfYehOzWS3zA1nl9O4G5aU%2Fckd2nDLl%2B%2Bn8C%2FKzKruLjJD4co0Hwhf5CMkxSymDv4xtS44oaBtv5OpRrGGDJmMs38fI4BDC0VW6Uf5hutQb4ymVVbh9uRavcPQNu1EHclr&X-Amz-Signature=6da4c2e3dd34997809080cd001e83c3ff544d56bb42059f98afb3588503b4d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHT7XV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDC%2BxLzDa6u9%2Bs3n1XrBi9f9rvpLoDPrGy%2FeR9THZeD5AiEAwUyBn1Wm%2BdXCfhxmWRGaWVIx4XJam3iktNRsKw3BLjUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5R5OTh%2FMfeUcd67yrcA8jW59GBtOHLEsTj4doIPCtBYtUglT4fU8lCD7AHQOZWLDSALtBk%2B0m4N445t%2BC%2BJ1YaioveARgFOamkbK7nQ%2BZfYRTrMTe37V7wt6cv9Zy2%2BCnCudK5Jw3oAwBYjSX56V%2F1yuG%2ByXnmHSPLBc76osMhIT2Dp4VaOgyXDAMKtArRxiOmSRXodopMFIFZ68yYrA0EmqO1uHLTFYtzqETC4kHBy5BMinyVAzfYgQIjAYvPT9ddNkrEQTPDBPt7LiZjsydfCXGLB0NtqNeJxbbtliseyObyGqzhXIKCen9bsrDGN%2BQzupV9GVt2nJHCYXM80hHPx%2BVhxPS9eW5XcVdzOGGuFl0fpUCRH7dTjRZLMek51VjSYoTWC8qQQt9IUwQ2SmKWYW3wYy1gvnTtStd2oKPPfDxhvHQvJE9vGWy6xAYomnzm%2FKQ0B4mBGJ0pGuGFM7IowM62KC9MWSw%2FYpLQfJi4dd%2FQcan0dHoV9AJA3vwikCcwD97BOLc97l2k3h5DnVmVaoTLfEStTRi62x0zV%2FDz6eHZXPlgZBURYV9pY698saWiTypGgTJCH%2F5HfKxRRl4z5gI2veLdx%2BtgAsX8wvRQ23qT53Qr4%2Fg5xSWbNggiGzpTAk%2B1KXd49ArTMN%2FXj74GOqUBPA4KaP0%2BgnFUI%2F03kUpFbDqH2TWfK9L6BoAN4wmwMPINJJ1J7Cw1L8Hlzw%2FBmcBMxLi0OJa9qR9nla31tP5%2Bt3vrO%2FWfYehOzWS3zA1nl9O4G5aU%2Fckd2nDLl%2B%2Bn8C%2FKzKruLjJD4co0Hwhf5CMkxSymDv4xtS44oaBtv5OpRrGGDJmMs38fI4BDC0VW6Uf5hutQb4ymVVbh9uRavcPQNu1EHclr&X-Amz-Signature=e327d6df3a8bb085fde4c244eba6d85edc68a7a757a2e8e1615e11eea20cb362&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHT7XV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDC%2BxLzDa6u9%2Bs3n1XrBi9f9rvpLoDPrGy%2FeR9THZeD5AiEAwUyBn1Wm%2BdXCfhxmWRGaWVIx4XJam3iktNRsKw3BLjUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5R5OTh%2FMfeUcd67yrcA8jW59GBtOHLEsTj4doIPCtBYtUglT4fU8lCD7AHQOZWLDSALtBk%2B0m4N445t%2BC%2BJ1YaioveARgFOamkbK7nQ%2BZfYRTrMTe37V7wt6cv9Zy2%2BCnCudK5Jw3oAwBYjSX56V%2F1yuG%2ByXnmHSPLBc76osMhIT2Dp4VaOgyXDAMKtArRxiOmSRXodopMFIFZ68yYrA0EmqO1uHLTFYtzqETC4kHBy5BMinyVAzfYgQIjAYvPT9ddNkrEQTPDBPt7LiZjsydfCXGLB0NtqNeJxbbtliseyObyGqzhXIKCen9bsrDGN%2BQzupV9GVt2nJHCYXM80hHPx%2BVhxPS9eW5XcVdzOGGuFl0fpUCRH7dTjRZLMek51VjSYoTWC8qQQt9IUwQ2SmKWYW3wYy1gvnTtStd2oKPPfDxhvHQvJE9vGWy6xAYomnzm%2FKQ0B4mBGJ0pGuGFM7IowM62KC9MWSw%2FYpLQfJi4dd%2FQcan0dHoV9AJA3vwikCcwD97BOLc97l2k3h5DnVmVaoTLfEStTRi62x0zV%2FDz6eHZXPlgZBURYV9pY698saWiTypGgTJCH%2F5HfKxRRl4z5gI2veLdx%2BtgAsX8wvRQ23qT53Qr4%2Fg5xSWbNggiGzpTAk%2B1KXd49ArTMN%2FXj74GOqUBPA4KaP0%2BgnFUI%2F03kUpFbDqH2TWfK9L6BoAN4wmwMPINJJ1J7Cw1L8Hlzw%2FBmcBMxLi0OJa9qR9nla31tP5%2Bt3vrO%2FWfYehOzWS3zA1nl9O4G5aU%2Fckd2nDLl%2B%2Bn8C%2FKzKruLjJD4co0Hwhf5CMkxSymDv4xtS44oaBtv5OpRrGGDJmMs38fI4BDC0VW6Uf5hutQb4ymVVbh9uRavcPQNu1EHclr&X-Amz-Signature=8e1acd8238ad61ebff96a7eccfc4f2e9dd256822cb889eda742e6d27951f5e41&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHT7XV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDC%2BxLzDa6u9%2Bs3n1XrBi9f9rvpLoDPrGy%2FeR9THZeD5AiEAwUyBn1Wm%2BdXCfhxmWRGaWVIx4XJam3iktNRsKw3BLjUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5R5OTh%2FMfeUcd67yrcA8jW59GBtOHLEsTj4doIPCtBYtUglT4fU8lCD7AHQOZWLDSALtBk%2B0m4N445t%2BC%2BJ1YaioveARgFOamkbK7nQ%2BZfYRTrMTe37V7wt6cv9Zy2%2BCnCudK5Jw3oAwBYjSX56V%2F1yuG%2ByXnmHSPLBc76osMhIT2Dp4VaOgyXDAMKtArRxiOmSRXodopMFIFZ68yYrA0EmqO1uHLTFYtzqETC4kHBy5BMinyVAzfYgQIjAYvPT9ddNkrEQTPDBPt7LiZjsydfCXGLB0NtqNeJxbbtliseyObyGqzhXIKCen9bsrDGN%2BQzupV9GVt2nJHCYXM80hHPx%2BVhxPS9eW5XcVdzOGGuFl0fpUCRH7dTjRZLMek51VjSYoTWC8qQQt9IUwQ2SmKWYW3wYy1gvnTtStd2oKPPfDxhvHQvJE9vGWy6xAYomnzm%2FKQ0B4mBGJ0pGuGFM7IowM62KC9MWSw%2FYpLQfJi4dd%2FQcan0dHoV9AJA3vwikCcwD97BOLc97l2k3h5DnVmVaoTLfEStTRi62x0zV%2FDz6eHZXPlgZBURYV9pY698saWiTypGgTJCH%2F5HfKxRRl4z5gI2veLdx%2BtgAsX8wvRQ23qT53Qr4%2Fg5xSWbNggiGzpTAk%2B1KXd49ArTMN%2FXj74GOqUBPA4KaP0%2BgnFUI%2F03kUpFbDqH2TWfK9L6BoAN4wmwMPINJJ1J7Cw1L8Hlzw%2FBmcBMxLi0OJa9qR9nla31tP5%2Bt3vrO%2FWfYehOzWS3zA1nl9O4G5aU%2Fckd2nDLl%2B%2Bn8C%2FKzKruLjJD4co0Hwhf5CMkxSymDv4xtS44oaBtv5OpRrGGDJmMs38fI4BDC0VW6Uf5hutQb4ymVVbh9uRavcPQNu1EHclr&X-Amz-Signature=53441e3784bc6e642df1f40818f677f845d8c1514c3cb192f9f6f70e378e2862&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHT7XV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDC%2BxLzDa6u9%2Bs3n1XrBi9f9rvpLoDPrGy%2FeR9THZeD5AiEAwUyBn1Wm%2BdXCfhxmWRGaWVIx4XJam3iktNRsKw3BLjUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5R5OTh%2FMfeUcd67yrcA8jW59GBtOHLEsTj4doIPCtBYtUglT4fU8lCD7AHQOZWLDSALtBk%2B0m4N445t%2BC%2BJ1YaioveARgFOamkbK7nQ%2BZfYRTrMTe37V7wt6cv9Zy2%2BCnCudK5Jw3oAwBYjSX56V%2F1yuG%2ByXnmHSPLBc76osMhIT2Dp4VaOgyXDAMKtArRxiOmSRXodopMFIFZ68yYrA0EmqO1uHLTFYtzqETC4kHBy5BMinyVAzfYgQIjAYvPT9ddNkrEQTPDBPt7LiZjsydfCXGLB0NtqNeJxbbtliseyObyGqzhXIKCen9bsrDGN%2BQzupV9GVt2nJHCYXM80hHPx%2BVhxPS9eW5XcVdzOGGuFl0fpUCRH7dTjRZLMek51VjSYoTWC8qQQt9IUwQ2SmKWYW3wYy1gvnTtStd2oKPPfDxhvHQvJE9vGWy6xAYomnzm%2FKQ0B4mBGJ0pGuGFM7IowM62KC9MWSw%2FYpLQfJi4dd%2FQcan0dHoV9AJA3vwikCcwD97BOLc97l2k3h5DnVmVaoTLfEStTRi62x0zV%2FDz6eHZXPlgZBURYV9pY698saWiTypGgTJCH%2F5HfKxRRl4z5gI2veLdx%2BtgAsX8wvRQ23qT53Qr4%2Fg5xSWbNggiGzpTAk%2B1KXd49ArTMN%2FXj74GOqUBPA4KaP0%2BgnFUI%2F03kUpFbDqH2TWfK9L6BoAN4wmwMPINJJ1J7Cw1L8Hlzw%2FBmcBMxLi0OJa9qR9nla31tP5%2Bt3vrO%2FWfYehOzWS3zA1nl9O4G5aU%2Fckd2nDLl%2B%2Bn8C%2FKzKruLjJD4co0Hwhf5CMkxSymDv4xtS44oaBtv5OpRrGGDJmMs38fI4BDC0VW6Uf5hutQb4ymVVbh9uRavcPQNu1EHclr&X-Amz-Signature=3cf44db8a75d6fb4fffe9c8d004b204dfd19923287df683d22063b80bc4c4758&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
