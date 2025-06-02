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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFAMUII%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFW4aH4KOQLy9OPXxwnT1krH%2FtKpQCHPv%2BHuATDPM%2FL6AiEArxAP2ypndgFE%2FmBWo6OR%2FGtg1G8amSFi4yLJV96xXA4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwpuadfbAboJMgIfSrcA1ufoz%2FYgdGZOBKzbIV2DjgHP1hCKtqS%2FlZY3OQiFIvfLVKKIg0mZGmxAF21%2B2gVoAr8JU5nFtNzr%2Bxiwfcr9PKUDIpepU34ndNieRlEEOLGon40StyhOnDNHCXCkezqtY7FupgvXWog3pVtOzrJg%2BoygaWlFhJwohRte%2BOKdnCSJsF%2FV%2FBXjOQqShfc7%2B2q%2FCty8VDpm79tyS1htfK%2BK%2FryIeOyDKP9gEozOV95fJBYJPkwV%2Bqn2aZxf23ESq6BqKVfws29GmSBMDvpB1ZeaUyWSj6Ck2XuUZoNT0c2LFXK4Z2kD52ZeBaILzmPSUDApe9D2shGDba52BEbOhUNzXYi2b1BI5Ti5wA%2BWHClMvqBkpf5oy477XyGy1BGavpqPYRcSybSKU%2BjakLfsmIJreEuLkg0YdKgWvwQAul8O5mXKEVy5FZJjNx8pXw715V9Oe05eqzd5qoNTi3km1%2BkTvvWmIcQkNJ44Stc2FPAJI2F1Q5Lq6xheO2PhgOVTEmTRfLGVA7WtEs506eBOaYjuv%2BFw77CYoqHnuI166TGNCmLBtbO%2Bl6Df3AvU91gG00WETxDwgKGvlpv4jbsJgLmmtDX4xFWQTaK17iq8oDmO88rr5GR2ayx35qPmiKcMLmv9MEGOqUBysxzMs1S73GDJSK933DrNZxwnh9s0nWLyOhIpP%2BqjlkM50UBXxT9gMLFeAXzBKnf%2FeRcPix0Pxm%2FZE4G7zNPgU2mw96uacCdgXk%2FCeQmRpOGqav85iPJqBsxau6BFNuWPZ3hSIXUxLPLfQhIS9ceAbd%2BgwDFsIm7992vCl00cNiFj2Rla8RmV8uGmVQ9oCsXMchqvgmBOhU94DOiJThs7gnDBlMJ&X-Amz-Signature=606ed732d346e3147e97df92d34c56a2ecb856dcf6e2c89c9b3dae7cd9136f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFAMUII%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFW4aH4KOQLy9OPXxwnT1krH%2FtKpQCHPv%2BHuATDPM%2FL6AiEArxAP2ypndgFE%2FmBWo6OR%2FGtg1G8amSFi4yLJV96xXA4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwpuadfbAboJMgIfSrcA1ufoz%2FYgdGZOBKzbIV2DjgHP1hCKtqS%2FlZY3OQiFIvfLVKKIg0mZGmxAF21%2B2gVoAr8JU5nFtNzr%2Bxiwfcr9PKUDIpepU34ndNieRlEEOLGon40StyhOnDNHCXCkezqtY7FupgvXWog3pVtOzrJg%2BoygaWlFhJwohRte%2BOKdnCSJsF%2FV%2FBXjOQqShfc7%2B2q%2FCty8VDpm79tyS1htfK%2BK%2FryIeOyDKP9gEozOV95fJBYJPkwV%2Bqn2aZxf23ESq6BqKVfws29GmSBMDvpB1ZeaUyWSj6Ck2XuUZoNT0c2LFXK4Z2kD52ZeBaILzmPSUDApe9D2shGDba52BEbOhUNzXYi2b1BI5Ti5wA%2BWHClMvqBkpf5oy477XyGy1BGavpqPYRcSybSKU%2BjakLfsmIJreEuLkg0YdKgWvwQAul8O5mXKEVy5FZJjNx8pXw715V9Oe05eqzd5qoNTi3km1%2BkTvvWmIcQkNJ44Stc2FPAJI2F1Q5Lq6xheO2PhgOVTEmTRfLGVA7WtEs506eBOaYjuv%2BFw77CYoqHnuI166TGNCmLBtbO%2Bl6Df3AvU91gG00WETxDwgKGvlpv4jbsJgLmmtDX4xFWQTaK17iq8oDmO88rr5GR2ayx35qPmiKcMLmv9MEGOqUBysxzMs1S73GDJSK933DrNZxwnh9s0nWLyOhIpP%2BqjlkM50UBXxT9gMLFeAXzBKnf%2FeRcPix0Pxm%2FZE4G7zNPgU2mw96uacCdgXk%2FCeQmRpOGqav85iPJqBsxau6BFNuWPZ3hSIXUxLPLfQhIS9ceAbd%2BgwDFsIm7992vCl00cNiFj2Rla8RmV8uGmVQ9oCsXMchqvgmBOhU94DOiJThs7gnDBlMJ&X-Amz-Signature=bc3538052fb6ece6a0836d4120685c0598b42ca5f187f708115d4c99041ff74f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFAMUII%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFW4aH4KOQLy9OPXxwnT1krH%2FtKpQCHPv%2BHuATDPM%2FL6AiEArxAP2ypndgFE%2FmBWo6OR%2FGtg1G8amSFi4yLJV96xXA4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwpuadfbAboJMgIfSrcA1ufoz%2FYgdGZOBKzbIV2DjgHP1hCKtqS%2FlZY3OQiFIvfLVKKIg0mZGmxAF21%2B2gVoAr8JU5nFtNzr%2Bxiwfcr9PKUDIpepU34ndNieRlEEOLGon40StyhOnDNHCXCkezqtY7FupgvXWog3pVtOzrJg%2BoygaWlFhJwohRte%2BOKdnCSJsF%2FV%2FBXjOQqShfc7%2B2q%2FCty8VDpm79tyS1htfK%2BK%2FryIeOyDKP9gEozOV95fJBYJPkwV%2Bqn2aZxf23ESq6BqKVfws29GmSBMDvpB1ZeaUyWSj6Ck2XuUZoNT0c2LFXK4Z2kD52ZeBaILzmPSUDApe9D2shGDba52BEbOhUNzXYi2b1BI5Ti5wA%2BWHClMvqBkpf5oy477XyGy1BGavpqPYRcSybSKU%2BjakLfsmIJreEuLkg0YdKgWvwQAul8O5mXKEVy5FZJjNx8pXw715V9Oe05eqzd5qoNTi3km1%2BkTvvWmIcQkNJ44Stc2FPAJI2F1Q5Lq6xheO2PhgOVTEmTRfLGVA7WtEs506eBOaYjuv%2BFw77CYoqHnuI166TGNCmLBtbO%2Bl6Df3AvU91gG00WETxDwgKGvlpv4jbsJgLmmtDX4xFWQTaK17iq8oDmO88rr5GR2ayx35qPmiKcMLmv9MEGOqUBysxzMs1S73GDJSK933DrNZxwnh9s0nWLyOhIpP%2BqjlkM50UBXxT9gMLFeAXzBKnf%2FeRcPix0Pxm%2FZE4G7zNPgU2mw96uacCdgXk%2FCeQmRpOGqav85iPJqBsxau6BFNuWPZ3hSIXUxLPLfQhIS9ceAbd%2BgwDFsIm7992vCl00cNiFj2Rla8RmV8uGmVQ9oCsXMchqvgmBOhU94DOiJThs7gnDBlMJ&X-Amz-Signature=056619ae5e8062cfaa4aca84fd9ce43bf6bfe58026edf21ec284cb10a9f67126&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFAMUII%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFW4aH4KOQLy9OPXxwnT1krH%2FtKpQCHPv%2BHuATDPM%2FL6AiEArxAP2ypndgFE%2FmBWo6OR%2FGtg1G8amSFi4yLJV96xXA4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwpuadfbAboJMgIfSrcA1ufoz%2FYgdGZOBKzbIV2DjgHP1hCKtqS%2FlZY3OQiFIvfLVKKIg0mZGmxAF21%2B2gVoAr8JU5nFtNzr%2Bxiwfcr9PKUDIpepU34ndNieRlEEOLGon40StyhOnDNHCXCkezqtY7FupgvXWog3pVtOzrJg%2BoygaWlFhJwohRte%2BOKdnCSJsF%2FV%2FBXjOQqShfc7%2B2q%2FCty8VDpm79tyS1htfK%2BK%2FryIeOyDKP9gEozOV95fJBYJPkwV%2Bqn2aZxf23ESq6BqKVfws29GmSBMDvpB1ZeaUyWSj6Ck2XuUZoNT0c2LFXK4Z2kD52ZeBaILzmPSUDApe9D2shGDba52BEbOhUNzXYi2b1BI5Ti5wA%2BWHClMvqBkpf5oy477XyGy1BGavpqPYRcSybSKU%2BjakLfsmIJreEuLkg0YdKgWvwQAul8O5mXKEVy5FZJjNx8pXw715V9Oe05eqzd5qoNTi3km1%2BkTvvWmIcQkNJ44Stc2FPAJI2F1Q5Lq6xheO2PhgOVTEmTRfLGVA7WtEs506eBOaYjuv%2BFw77CYoqHnuI166TGNCmLBtbO%2Bl6Df3AvU91gG00WETxDwgKGvlpv4jbsJgLmmtDX4xFWQTaK17iq8oDmO88rr5GR2ayx35qPmiKcMLmv9MEGOqUBysxzMs1S73GDJSK933DrNZxwnh9s0nWLyOhIpP%2BqjlkM50UBXxT9gMLFeAXzBKnf%2FeRcPix0Pxm%2FZE4G7zNPgU2mw96uacCdgXk%2FCeQmRpOGqav85iPJqBsxau6BFNuWPZ3hSIXUxLPLfQhIS9ceAbd%2BgwDFsIm7992vCl00cNiFj2Rla8RmV8uGmVQ9oCsXMchqvgmBOhU94DOiJThs7gnDBlMJ&X-Amz-Signature=e967cd14358e372e2755cbbfbbf2c4675111cc6c520999b6906219a23fdf3b59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFAMUII%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFW4aH4KOQLy9OPXxwnT1krH%2FtKpQCHPv%2BHuATDPM%2FL6AiEArxAP2ypndgFE%2FmBWo6OR%2FGtg1G8amSFi4yLJV96xXA4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwpuadfbAboJMgIfSrcA1ufoz%2FYgdGZOBKzbIV2DjgHP1hCKtqS%2FlZY3OQiFIvfLVKKIg0mZGmxAF21%2B2gVoAr8JU5nFtNzr%2Bxiwfcr9PKUDIpepU34ndNieRlEEOLGon40StyhOnDNHCXCkezqtY7FupgvXWog3pVtOzrJg%2BoygaWlFhJwohRte%2BOKdnCSJsF%2FV%2FBXjOQqShfc7%2B2q%2FCty8VDpm79tyS1htfK%2BK%2FryIeOyDKP9gEozOV95fJBYJPkwV%2Bqn2aZxf23ESq6BqKVfws29GmSBMDvpB1ZeaUyWSj6Ck2XuUZoNT0c2LFXK4Z2kD52ZeBaILzmPSUDApe9D2shGDba52BEbOhUNzXYi2b1BI5Ti5wA%2BWHClMvqBkpf5oy477XyGy1BGavpqPYRcSybSKU%2BjakLfsmIJreEuLkg0YdKgWvwQAul8O5mXKEVy5FZJjNx8pXw715V9Oe05eqzd5qoNTi3km1%2BkTvvWmIcQkNJ44Stc2FPAJI2F1Q5Lq6xheO2PhgOVTEmTRfLGVA7WtEs506eBOaYjuv%2BFw77CYoqHnuI166TGNCmLBtbO%2Bl6Df3AvU91gG00WETxDwgKGvlpv4jbsJgLmmtDX4xFWQTaK17iq8oDmO88rr5GR2ayx35qPmiKcMLmv9MEGOqUBysxzMs1S73GDJSK933DrNZxwnh9s0nWLyOhIpP%2BqjlkM50UBXxT9gMLFeAXzBKnf%2FeRcPix0Pxm%2FZE4G7zNPgU2mw96uacCdgXk%2FCeQmRpOGqav85iPJqBsxau6BFNuWPZ3hSIXUxLPLfQhIS9ceAbd%2BgwDFsIm7992vCl00cNiFj2Rla8RmV8uGmVQ9oCsXMchqvgmBOhU94DOiJThs7gnDBlMJ&X-Amz-Signature=b3198e6b56992cd634711a2fa80cf79ec39e857727a0f6523ea51206d2c82040&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
