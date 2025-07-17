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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2Q64N%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEHIlLOiW%2BkQfzQhDa7vjjPaa08RjwThfXy6q36v04hiAiEAx%2BsdvoP9lCQCKSEm1sHA59p%2F7HokXW4fbBRqdZYTyQQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNY8jZFY%2B7RrrOVKbyrcA3qVtN0%2BgHwNzmSnKomejcaa8DCm6ZRPSb%2BsJSZSM0aWu8zrKhZAzj9P0Ky9Uuu28%2BBsgJt4o07ao9JB7bQTHqcd1gwvbyklRUaH0B9qtZialyqZdEUPpBms%2FC3uZ%2FqxkNaJR7Rijy9bjqQ3ccJK2eJ%2F%2BHgD3P8hAmUfbXouvvtdlb%2FAIp9NlNb29qLpitX3A3Fgaw6U93qFHiMMmP9oZBtlXj1yArbWPpoNIBLeFNqp1dOI1WNJ2WM2JcKpQNkO9bVcFN3vlTXBUISMt9yrpaJi36eqE1FiBDS2N4YNA0owTibDzUVYFcfBaFQrX6irJciiEYRarY%2F2E9jSd6fo9C6CMQ91vwv9Tan%2BmQMeN1fvOGGTljpVkMcKCpy4xSdonS%2BfyZdn4qzcQotXupjDZ0HUh9RARGHY5LQrqfRi%2Fdiy4jObbX%2FD1857rYCJVWlyod3mXeJkf0KgHg%2FDmD6AdcCACC0b4nT2vc%2Bgp8X5qF6LJe%2FJ8m8BWiPrTdgvaYwfryia6sWULu4iwDkPn7Ewl9mDZD7PcKqXZz4OV3VuSZPbA0VuSnb%2BbrnnN7CkKShAn1T4zL%2FQVMG4wawZN01VNlMoKldSrooGgFCAdf80sQuOi%2F2j05H6ACJ2f8WiMM%2B%2F4sMGOqUBTmGsD3DgVq4uqkbWjgYDhiyi%2BCbALiSCnjAejh22z0hEDBKf6h80YCvSkSZLJ9EJcpjl%2FAf7zpGrkrNjrqX7jsvRKX4t3yy%2Fw8DfYjN3dRjU1J26ldBGRl7cGuOl7CI5tViIxgMBv6UQu2NsK5D%2BLyiDBUJFxgSq6YUobLVNpT%2FGd6yF%2BGDTY0U0KTktWLUj1fENaRvY7nuK0XGDtV3e0HeGc4ww&X-Amz-Signature=5e6753e879a3dc56b5bba1ac9f15b3db28a50e93e5889e6b044e0453ff385b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2Q64N%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEHIlLOiW%2BkQfzQhDa7vjjPaa08RjwThfXy6q36v04hiAiEAx%2BsdvoP9lCQCKSEm1sHA59p%2F7HokXW4fbBRqdZYTyQQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNY8jZFY%2B7RrrOVKbyrcA3qVtN0%2BgHwNzmSnKomejcaa8DCm6ZRPSb%2BsJSZSM0aWu8zrKhZAzj9P0Ky9Uuu28%2BBsgJt4o07ao9JB7bQTHqcd1gwvbyklRUaH0B9qtZialyqZdEUPpBms%2FC3uZ%2FqxkNaJR7Rijy9bjqQ3ccJK2eJ%2F%2BHgD3P8hAmUfbXouvvtdlb%2FAIp9NlNb29qLpitX3A3Fgaw6U93qFHiMMmP9oZBtlXj1yArbWPpoNIBLeFNqp1dOI1WNJ2WM2JcKpQNkO9bVcFN3vlTXBUISMt9yrpaJi36eqE1FiBDS2N4YNA0owTibDzUVYFcfBaFQrX6irJciiEYRarY%2F2E9jSd6fo9C6CMQ91vwv9Tan%2BmQMeN1fvOGGTljpVkMcKCpy4xSdonS%2BfyZdn4qzcQotXupjDZ0HUh9RARGHY5LQrqfRi%2Fdiy4jObbX%2FD1857rYCJVWlyod3mXeJkf0KgHg%2FDmD6AdcCACC0b4nT2vc%2Bgp8X5qF6LJe%2FJ8m8BWiPrTdgvaYwfryia6sWULu4iwDkPn7Ewl9mDZD7PcKqXZz4OV3VuSZPbA0VuSnb%2BbrnnN7CkKShAn1T4zL%2FQVMG4wawZN01VNlMoKldSrooGgFCAdf80sQuOi%2F2j05H6ACJ2f8WiMM%2B%2F4sMGOqUBTmGsD3DgVq4uqkbWjgYDhiyi%2BCbALiSCnjAejh22z0hEDBKf6h80YCvSkSZLJ9EJcpjl%2FAf7zpGrkrNjrqX7jsvRKX4t3yy%2Fw8DfYjN3dRjU1J26ldBGRl7cGuOl7CI5tViIxgMBv6UQu2NsK5D%2BLyiDBUJFxgSq6YUobLVNpT%2FGd6yF%2BGDTY0U0KTktWLUj1fENaRvY7nuK0XGDtV3e0HeGc4ww&X-Amz-Signature=234979984c504b60b669aff1bedda803807b7b65500a6ce4351fa73c079e2b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2Q64N%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEHIlLOiW%2BkQfzQhDa7vjjPaa08RjwThfXy6q36v04hiAiEAx%2BsdvoP9lCQCKSEm1sHA59p%2F7HokXW4fbBRqdZYTyQQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNY8jZFY%2B7RrrOVKbyrcA3qVtN0%2BgHwNzmSnKomejcaa8DCm6ZRPSb%2BsJSZSM0aWu8zrKhZAzj9P0Ky9Uuu28%2BBsgJt4o07ao9JB7bQTHqcd1gwvbyklRUaH0B9qtZialyqZdEUPpBms%2FC3uZ%2FqxkNaJR7Rijy9bjqQ3ccJK2eJ%2F%2BHgD3P8hAmUfbXouvvtdlb%2FAIp9NlNb29qLpitX3A3Fgaw6U93qFHiMMmP9oZBtlXj1yArbWPpoNIBLeFNqp1dOI1WNJ2WM2JcKpQNkO9bVcFN3vlTXBUISMt9yrpaJi36eqE1FiBDS2N4YNA0owTibDzUVYFcfBaFQrX6irJciiEYRarY%2F2E9jSd6fo9C6CMQ91vwv9Tan%2BmQMeN1fvOGGTljpVkMcKCpy4xSdonS%2BfyZdn4qzcQotXupjDZ0HUh9RARGHY5LQrqfRi%2Fdiy4jObbX%2FD1857rYCJVWlyod3mXeJkf0KgHg%2FDmD6AdcCACC0b4nT2vc%2Bgp8X5qF6LJe%2FJ8m8BWiPrTdgvaYwfryia6sWULu4iwDkPn7Ewl9mDZD7PcKqXZz4OV3VuSZPbA0VuSnb%2BbrnnN7CkKShAn1T4zL%2FQVMG4wawZN01VNlMoKldSrooGgFCAdf80sQuOi%2F2j05H6ACJ2f8WiMM%2B%2F4sMGOqUBTmGsD3DgVq4uqkbWjgYDhiyi%2BCbALiSCnjAejh22z0hEDBKf6h80YCvSkSZLJ9EJcpjl%2FAf7zpGrkrNjrqX7jsvRKX4t3yy%2Fw8DfYjN3dRjU1J26ldBGRl7cGuOl7CI5tViIxgMBv6UQu2NsK5D%2BLyiDBUJFxgSq6YUobLVNpT%2FGd6yF%2BGDTY0U0KTktWLUj1fENaRvY7nuK0XGDtV3e0HeGc4ww&X-Amz-Signature=dbd75cb6206956eb3bfb91c29628f472cdf0391ca313c7e714f0bd9709fe6a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2Q64N%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEHIlLOiW%2BkQfzQhDa7vjjPaa08RjwThfXy6q36v04hiAiEAx%2BsdvoP9lCQCKSEm1sHA59p%2F7HokXW4fbBRqdZYTyQQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNY8jZFY%2B7RrrOVKbyrcA3qVtN0%2BgHwNzmSnKomejcaa8DCm6ZRPSb%2BsJSZSM0aWu8zrKhZAzj9P0Ky9Uuu28%2BBsgJt4o07ao9JB7bQTHqcd1gwvbyklRUaH0B9qtZialyqZdEUPpBms%2FC3uZ%2FqxkNaJR7Rijy9bjqQ3ccJK2eJ%2F%2BHgD3P8hAmUfbXouvvtdlb%2FAIp9NlNb29qLpitX3A3Fgaw6U93qFHiMMmP9oZBtlXj1yArbWPpoNIBLeFNqp1dOI1WNJ2WM2JcKpQNkO9bVcFN3vlTXBUISMt9yrpaJi36eqE1FiBDS2N4YNA0owTibDzUVYFcfBaFQrX6irJciiEYRarY%2F2E9jSd6fo9C6CMQ91vwv9Tan%2BmQMeN1fvOGGTljpVkMcKCpy4xSdonS%2BfyZdn4qzcQotXupjDZ0HUh9RARGHY5LQrqfRi%2Fdiy4jObbX%2FD1857rYCJVWlyod3mXeJkf0KgHg%2FDmD6AdcCACC0b4nT2vc%2Bgp8X5qF6LJe%2FJ8m8BWiPrTdgvaYwfryia6sWULu4iwDkPn7Ewl9mDZD7PcKqXZz4OV3VuSZPbA0VuSnb%2BbrnnN7CkKShAn1T4zL%2FQVMG4wawZN01VNlMoKldSrooGgFCAdf80sQuOi%2F2j05H6ACJ2f8WiMM%2B%2F4sMGOqUBTmGsD3DgVq4uqkbWjgYDhiyi%2BCbALiSCnjAejh22z0hEDBKf6h80YCvSkSZLJ9EJcpjl%2FAf7zpGrkrNjrqX7jsvRKX4t3yy%2Fw8DfYjN3dRjU1J26ldBGRl7cGuOl7CI5tViIxgMBv6UQu2NsK5D%2BLyiDBUJFxgSq6YUobLVNpT%2FGd6yF%2BGDTY0U0KTktWLUj1fENaRvY7nuK0XGDtV3e0HeGc4ww&X-Amz-Signature=f0ff232dafc3bd76f5aa619a4eab8d326998f853696da0e702f4d794e535be2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2Q64N%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEHIlLOiW%2BkQfzQhDa7vjjPaa08RjwThfXy6q36v04hiAiEAx%2BsdvoP9lCQCKSEm1sHA59p%2F7HokXW4fbBRqdZYTyQQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNY8jZFY%2B7RrrOVKbyrcA3qVtN0%2BgHwNzmSnKomejcaa8DCm6ZRPSb%2BsJSZSM0aWu8zrKhZAzj9P0Ky9Uuu28%2BBsgJt4o07ao9JB7bQTHqcd1gwvbyklRUaH0B9qtZialyqZdEUPpBms%2FC3uZ%2FqxkNaJR7Rijy9bjqQ3ccJK2eJ%2F%2BHgD3P8hAmUfbXouvvtdlb%2FAIp9NlNb29qLpitX3A3Fgaw6U93qFHiMMmP9oZBtlXj1yArbWPpoNIBLeFNqp1dOI1WNJ2WM2JcKpQNkO9bVcFN3vlTXBUISMt9yrpaJi36eqE1FiBDS2N4YNA0owTibDzUVYFcfBaFQrX6irJciiEYRarY%2F2E9jSd6fo9C6CMQ91vwv9Tan%2BmQMeN1fvOGGTljpVkMcKCpy4xSdonS%2BfyZdn4qzcQotXupjDZ0HUh9RARGHY5LQrqfRi%2Fdiy4jObbX%2FD1857rYCJVWlyod3mXeJkf0KgHg%2FDmD6AdcCACC0b4nT2vc%2Bgp8X5qF6LJe%2FJ8m8BWiPrTdgvaYwfryia6sWULu4iwDkPn7Ewl9mDZD7PcKqXZz4OV3VuSZPbA0VuSnb%2BbrnnN7CkKShAn1T4zL%2FQVMG4wawZN01VNlMoKldSrooGgFCAdf80sQuOi%2F2j05H6ACJ2f8WiMM%2B%2F4sMGOqUBTmGsD3DgVq4uqkbWjgYDhiyi%2BCbALiSCnjAejh22z0hEDBKf6h80YCvSkSZLJ9EJcpjl%2FAf7zpGrkrNjrqX7jsvRKX4t3yy%2Fw8DfYjN3dRjU1J26ldBGRl7cGuOl7CI5tViIxgMBv6UQu2NsK5D%2BLyiDBUJFxgSq6YUobLVNpT%2FGd6yF%2BGDTY0U0KTktWLUj1fENaRvY7nuK0XGDtV3e0HeGc4ww&X-Amz-Signature=a48e220509f78892ba83c27ab232040bce604943794993db40d2172ba1e87bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
