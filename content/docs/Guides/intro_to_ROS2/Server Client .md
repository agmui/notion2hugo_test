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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVOKUUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFWJ7lX2I4MD9xEINChat6d97cgoMZmqv%2F2uHDGMbFNAiEAmMn%2Fz0%2FOwrXgrUlMTNsDWWxJcvxa5EuhHgISS5mbO9wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbn1u9ZJyI4neRvhyrcA9O3j1VL3QlqnsY88e69jz%2Bpu01mF3BSig%2FLSibiFdiNWx91kOuMYnS0wwKUORzGDuhurQ0oFzXM89bkV9gy1zxPvY33GY0LSeQKtl2wkVVGq3MC1VPF4TLwNzwfwUwoEPSsh6To1%2FAmqs5I%2BhvwLcwESk1hS8DYVO8Wa3uu2F7KMKE9O1uDGkP2L11STpXwHKVEtpxBD%2FRHZfebvQv0KOiuwO%2FQTK85pYqpTRbgLLyaEANmvlDG6XVg%2FQa7Mq8Y%2BI9eJK2i6%2FP7SLPwP3u6ANMzOyWKTXZdy5lQRni271M824CEd2JFP%2F%2BUG7FqfG9qPMJ1wMBSLKQjjV4FGslGCCUMfre9L3ePnG5mkFODWmWj6RA%2F2b8mJk0Xp1t6c98YvobfDQMoBAIemlY5rP7%2FjQ1MMzGced%2BmbbtQe40I4eG5Ku2Sm6PtiTEDWg%2F7Xfch6JNhedzbryPksoSvfVIHPVKTt8b913nnr5thmO%2BSBl4EF1%2FC%2FYu8kW1Z5n31O11gEysR%2F%2B8ddGGXH%2BXoH0sY3E5K8p86qsj1gAfmQf%2F81%2FrbanBkhA6U%2BvjGAENITqb7IwM%2F7Amuk71%2F5Oe1uIcs3poeZAdsXQHCjtTL7PPEasube%2FAtLwb6RTfIcHU6MPfaw8AGOqUBV9n8hdeNqBwtf8d06hHWcvCPH%2BMQlwKCl%2BN%2BqoKSshnAzGk6CNh37%2Bh9UzELiA46%2FMaD7czSiqyVZznxnD4KvI%2FnMFU0L1RHOEpB5BEVp8hxHaCh7Eoecl2fox4nC3K92XhVvKGxe3DiUBSIlRfMZpiPv2OwjZXiDF5s4xxqE6E89Q8Dw7H60dfiMKqLGjuSpEL75ABpUUXsaTCcni2KKgXHxisG&X-Amz-Signature=5136b9ebf96349a1e9e40bc2ddc2695dbd5e31ca69fe60abf9eae82d4e5fdbda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVOKUUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFWJ7lX2I4MD9xEINChat6d97cgoMZmqv%2F2uHDGMbFNAiEAmMn%2Fz0%2FOwrXgrUlMTNsDWWxJcvxa5EuhHgISS5mbO9wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbn1u9ZJyI4neRvhyrcA9O3j1VL3QlqnsY88e69jz%2Bpu01mF3BSig%2FLSibiFdiNWx91kOuMYnS0wwKUORzGDuhurQ0oFzXM89bkV9gy1zxPvY33GY0LSeQKtl2wkVVGq3MC1VPF4TLwNzwfwUwoEPSsh6To1%2FAmqs5I%2BhvwLcwESk1hS8DYVO8Wa3uu2F7KMKE9O1uDGkP2L11STpXwHKVEtpxBD%2FRHZfebvQv0KOiuwO%2FQTK85pYqpTRbgLLyaEANmvlDG6XVg%2FQa7Mq8Y%2BI9eJK2i6%2FP7SLPwP3u6ANMzOyWKTXZdy5lQRni271M824CEd2JFP%2F%2BUG7FqfG9qPMJ1wMBSLKQjjV4FGslGCCUMfre9L3ePnG5mkFODWmWj6RA%2F2b8mJk0Xp1t6c98YvobfDQMoBAIemlY5rP7%2FjQ1MMzGced%2BmbbtQe40I4eG5Ku2Sm6PtiTEDWg%2F7Xfch6JNhedzbryPksoSvfVIHPVKTt8b913nnr5thmO%2BSBl4EF1%2FC%2FYu8kW1Z5n31O11gEysR%2F%2B8ddGGXH%2BXoH0sY3E5K8p86qsj1gAfmQf%2F81%2FrbanBkhA6U%2BvjGAENITqb7IwM%2F7Amuk71%2F5Oe1uIcs3poeZAdsXQHCjtTL7PPEasube%2FAtLwb6RTfIcHU6MPfaw8AGOqUBV9n8hdeNqBwtf8d06hHWcvCPH%2BMQlwKCl%2BN%2BqoKSshnAzGk6CNh37%2Bh9UzELiA46%2FMaD7czSiqyVZznxnD4KvI%2FnMFU0L1RHOEpB5BEVp8hxHaCh7Eoecl2fox4nC3K92XhVvKGxe3DiUBSIlRfMZpiPv2OwjZXiDF5s4xxqE6E89Q8Dw7H60dfiMKqLGjuSpEL75ABpUUXsaTCcni2KKgXHxisG&X-Amz-Signature=456aa9d57f41a27849bc2f5825ef5535cd6482bf5b948f0053d0355b47ccbefc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVOKUUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFWJ7lX2I4MD9xEINChat6d97cgoMZmqv%2F2uHDGMbFNAiEAmMn%2Fz0%2FOwrXgrUlMTNsDWWxJcvxa5EuhHgISS5mbO9wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbn1u9ZJyI4neRvhyrcA9O3j1VL3QlqnsY88e69jz%2Bpu01mF3BSig%2FLSibiFdiNWx91kOuMYnS0wwKUORzGDuhurQ0oFzXM89bkV9gy1zxPvY33GY0LSeQKtl2wkVVGq3MC1VPF4TLwNzwfwUwoEPSsh6To1%2FAmqs5I%2BhvwLcwESk1hS8DYVO8Wa3uu2F7KMKE9O1uDGkP2L11STpXwHKVEtpxBD%2FRHZfebvQv0KOiuwO%2FQTK85pYqpTRbgLLyaEANmvlDG6XVg%2FQa7Mq8Y%2BI9eJK2i6%2FP7SLPwP3u6ANMzOyWKTXZdy5lQRni271M824CEd2JFP%2F%2BUG7FqfG9qPMJ1wMBSLKQjjV4FGslGCCUMfre9L3ePnG5mkFODWmWj6RA%2F2b8mJk0Xp1t6c98YvobfDQMoBAIemlY5rP7%2FjQ1MMzGced%2BmbbtQe40I4eG5Ku2Sm6PtiTEDWg%2F7Xfch6JNhedzbryPksoSvfVIHPVKTt8b913nnr5thmO%2BSBl4EF1%2FC%2FYu8kW1Z5n31O11gEysR%2F%2B8ddGGXH%2BXoH0sY3E5K8p86qsj1gAfmQf%2F81%2FrbanBkhA6U%2BvjGAENITqb7IwM%2F7Amuk71%2F5Oe1uIcs3poeZAdsXQHCjtTL7PPEasube%2FAtLwb6RTfIcHU6MPfaw8AGOqUBV9n8hdeNqBwtf8d06hHWcvCPH%2BMQlwKCl%2BN%2BqoKSshnAzGk6CNh37%2Bh9UzELiA46%2FMaD7czSiqyVZznxnD4KvI%2FnMFU0L1RHOEpB5BEVp8hxHaCh7Eoecl2fox4nC3K92XhVvKGxe3DiUBSIlRfMZpiPv2OwjZXiDF5s4xxqE6E89Q8Dw7H60dfiMKqLGjuSpEL75ABpUUXsaTCcni2KKgXHxisG&X-Amz-Signature=986c795b2af47884bee7da5a47e56e2df44acf9482ee378adba378368ac94655&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVOKUUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFWJ7lX2I4MD9xEINChat6d97cgoMZmqv%2F2uHDGMbFNAiEAmMn%2Fz0%2FOwrXgrUlMTNsDWWxJcvxa5EuhHgISS5mbO9wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbn1u9ZJyI4neRvhyrcA9O3j1VL3QlqnsY88e69jz%2Bpu01mF3BSig%2FLSibiFdiNWx91kOuMYnS0wwKUORzGDuhurQ0oFzXM89bkV9gy1zxPvY33GY0LSeQKtl2wkVVGq3MC1VPF4TLwNzwfwUwoEPSsh6To1%2FAmqs5I%2BhvwLcwESk1hS8DYVO8Wa3uu2F7KMKE9O1uDGkP2L11STpXwHKVEtpxBD%2FRHZfebvQv0KOiuwO%2FQTK85pYqpTRbgLLyaEANmvlDG6XVg%2FQa7Mq8Y%2BI9eJK2i6%2FP7SLPwP3u6ANMzOyWKTXZdy5lQRni271M824CEd2JFP%2F%2BUG7FqfG9qPMJ1wMBSLKQjjV4FGslGCCUMfre9L3ePnG5mkFODWmWj6RA%2F2b8mJk0Xp1t6c98YvobfDQMoBAIemlY5rP7%2FjQ1MMzGced%2BmbbtQe40I4eG5Ku2Sm6PtiTEDWg%2F7Xfch6JNhedzbryPksoSvfVIHPVKTt8b913nnr5thmO%2BSBl4EF1%2FC%2FYu8kW1Z5n31O11gEysR%2F%2B8ddGGXH%2BXoH0sY3E5K8p86qsj1gAfmQf%2F81%2FrbanBkhA6U%2BvjGAENITqb7IwM%2F7Amuk71%2F5Oe1uIcs3poeZAdsXQHCjtTL7PPEasube%2FAtLwb6RTfIcHU6MPfaw8AGOqUBV9n8hdeNqBwtf8d06hHWcvCPH%2BMQlwKCl%2BN%2BqoKSshnAzGk6CNh37%2Bh9UzELiA46%2FMaD7czSiqyVZznxnD4KvI%2FnMFU0L1RHOEpB5BEVp8hxHaCh7Eoecl2fox4nC3K92XhVvKGxe3DiUBSIlRfMZpiPv2OwjZXiDF5s4xxqE6E89Q8Dw7H60dfiMKqLGjuSpEL75ABpUUXsaTCcni2KKgXHxisG&X-Amz-Signature=7b84fb833a7c4936854205847a6cafa529335ac766fccaba912ae6eb83df531c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVOKUUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFWJ7lX2I4MD9xEINChat6d97cgoMZmqv%2F2uHDGMbFNAiEAmMn%2Fz0%2FOwrXgrUlMTNsDWWxJcvxa5EuhHgISS5mbO9wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbn1u9ZJyI4neRvhyrcA9O3j1VL3QlqnsY88e69jz%2Bpu01mF3BSig%2FLSibiFdiNWx91kOuMYnS0wwKUORzGDuhurQ0oFzXM89bkV9gy1zxPvY33GY0LSeQKtl2wkVVGq3MC1VPF4TLwNzwfwUwoEPSsh6To1%2FAmqs5I%2BhvwLcwESk1hS8DYVO8Wa3uu2F7KMKE9O1uDGkP2L11STpXwHKVEtpxBD%2FRHZfebvQv0KOiuwO%2FQTK85pYqpTRbgLLyaEANmvlDG6XVg%2FQa7Mq8Y%2BI9eJK2i6%2FP7SLPwP3u6ANMzOyWKTXZdy5lQRni271M824CEd2JFP%2F%2BUG7FqfG9qPMJ1wMBSLKQjjV4FGslGCCUMfre9L3ePnG5mkFODWmWj6RA%2F2b8mJk0Xp1t6c98YvobfDQMoBAIemlY5rP7%2FjQ1MMzGced%2BmbbtQe40I4eG5Ku2Sm6PtiTEDWg%2F7Xfch6JNhedzbryPksoSvfVIHPVKTt8b913nnr5thmO%2BSBl4EF1%2FC%2FYu8kW1Z5n31O11gEysR%2F%2B8ddGGXH%2BXoH0sY3E5K8p86qsj1gAfmQf%2F81%2FrbanBkhA6U%2BvjGAENITqb7IwM%2F7Amuk71%2F5Oe1uIcs3poeZAdsXQHCjtTL7PPEasube%2FAtLwb6RTfIcHU6MPfaw8AGOqUBV9n8hdeNqBwtf8d06hHWcvCPH%2BMQlwKCl%2BN%2BqoKSshnAzGk6CNh37%2Bh9UzELiA46%2FMaD7czSiqyVZznxnD4KvI%2FnMFU0L1RHOEpB5BEVp8hxHaCh7Eoecl2fox4nC3K92XhVvKGxe3DiUBSIlRfMZpiPv2OwjZXiDF5s4xxqE6E89Q8Dw7H60dfiMKqLGjuSpEL75ABpUUXsaTCcni2KKgXHxisG&X-Amz-Signature=d5f55b5acac99f74caf17a3274ff8b463fea33f1dd8cd8f0776d6c09a94dedf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
