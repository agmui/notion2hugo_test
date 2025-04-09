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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHETYE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEkC0CF7rIDMp5m7%2B4kXn0k7lHfY%2BdPdfk4xpSVZTLgtAiEAsZqdeV7YWtp2SlBwzjQ8m%2FYrGBhF3k273josMK2Mdu4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwhjuLwCG898etEHircA489BCwAAOdn4IboH8Cgg%2BLTumw2y37hawQMYdpINj5kO9gT%2BZUy61XR%2Fu7u9MymFLyI9D3%2B5%2FyeKbA7wEL4TTjr%2BH7xalIsKEF%2BjnIY%2Fuah3nuauhdl6j38zKtnz8jbfejK7yLMVYJEnkNwlvlAsvQzika63N4tahQQsbceFsS7RNmwsqTN5c0lcCC5gKA1pIFxi0eNElt5tpZtSDRhf6pGG5CfrIs8jV67nECCjlQ2nIa%2BtJmJTWbiqweuzKWCgysLRPY8TGdn1dChX%2BZ4cyJ%2BigpOk5e3xfYHgjUM8AU26WKvZUx1PuKOCHH5pwUbRptRfpaSx8Cfswn%2FzYErWA5MJyLTTvEkRNjioqmJkWSf0CuenTRJvs99eH6Ov%2F%2FR6h%2FdaQ2NcqBa8A4H0GRgSOM4klqDLGqYAePm%2FjjXf3d3J%2ByXrTRF1TjhqXucuDmJF%2Ft3c%2BtFqIN30%2Feet4gRgCppZlKom3Mu68tEpAYxfRafhT1AVy1WX6aJLhni%2F840SW0lIZwfOkTkgocf0vRXaark87JmG6zWMRI3S7yJEWFrXiG0Vtc%2BycyCuO%2FlsHsd%2FGVM65n8VtvYRyzaYRoA3OryV5pXdVwZmKUsA6RRCaBHIXdlzjWEHuTDmN2pML%2Bz2L8GOqUBOVKbFnXnd1tdf%2FHCgpMzMSSYK6MDiJGuvXjgUDhg941KXEUwM5buwdJQbMOEw%2B%2BHUxHis4DZxeS4CdV4rDTOoCMLbDVIGtzKCzli9t3wGqVt1v9y71BgyVwv7sNokAPYXg552yahkC8lcSJAebXnZJWfm3wCp5YpM%2BMgkVM6vqYjl7V%2Bc1Mo4V3x8XVsebLY0rog5rzORPZKJdxvjXQEGYgKWDgv&X-Amz-Signature=fbe09b5679e800e3137b44da98e5695edd6d581b4a4e153a8843fb981a8c4bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHETYE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEkC0CF7rIDMp5m7%2B4kXn0k7lHfY%2BdPdfk4xpSVZTLgtAiEAsZqdeV7YWtp2SlBwzjQ8m%2FYrGBhF3k273josMK2Mdu4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwhjuLwCG898etEHircA489BCwAAOdn4IboH8Cgg%2BLTumw2y37hawQMYdpINj5kO9gT%2BZUy61XR%2Fu7u9MymFLyI9D3%2B5%2FyeKbA7wEL4TTjr%2BH7xalIsKEF%2BjnIY%2Fuah3nuauhdl6j38zKtnz8jbfejK7yLMVYJEnkNwlvlAsvQzika63N4tahQQsbceFsS7RNmwsqTN5c0lcCC5gKA1pIFxi0eNElt5tpZtSDRhf6pGG5CfrIs8jV67nECCjlQ2nIa%2BtJmJTWbiqweuzKWCgysLRPY8TGdn1dChX%2BZ4cyJ%2BigpOk5e3xfYHgjUM8AU26WKvZUx1PuKOCHH5pwUbRptRfpaSx8Cfswn%2FzYErWA5MJyLTTvEkRNjioqmJkWSf0CuenTRJvs99eH6Ov%2F%2FR6h%2FdaQ2NcqBa8A4H0GRgSOM4klqDLGqYAePm%2FjjXf3d3J%2ByXrTRF1TjhqXucuDmJF%2Ft3c%2BtFqIN30%2Feet4gRgCppZlKom3Mu68tEpAYxfRafhT1AVy1WX6aJLhni%2F840SW0lIZwfOkTkgocf0vRXaark87JmG6zWMRI3S7yJEWFrXiG0Vtc%2BycyCuO%2FlsHsd%2FGVM65n8VtvYRyzaYRoA3OryV5pXdVwZmKUsA6RRCaBHIXdlzjWEHuTDmN2pML%2Bz2L8GOqUBOVKbFnXnd1tdf%2FHCgpMzMSSYK6MDiJGuvXjgUDhg941KXEUwM5buwdJQbMOEw%2B%2BHUxHis4DZxeS4CdV4rDTOoCMLbDVIGtzKCzli9t3wGqVt1v9y71BgyVwv7sNokAPYXg552yahkC8lcSJAebXnZJWfm3wCp5YpM%2BMgkVM6vqYjl7V%2Bc1Mo4V3x8XVsebLY0rog5rzORPZKJdxvjXQEGYgKWDgv&X-Amz-Signature=08065b6363de8fbdf020538bcd53da84687d4365220de82e586714f4af9aa2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHETYE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEkC0CF7rIDMp5m7%2B4kXn0k7lHfY%2BdPdfk4xpSVZTLgtAiEAsZqdeV7YWtp2SlBwzjQ8m%2FYrGBhF3k273josMK2Mdu4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwhjuLwCG898etEHircA489BCwAAOdn4IboH8Cgg%2BLTumw2y37hawQMYdpINj5kO9gT%2BZUy61XR%2Fu7u9MymFLyI9D3%2B5%2FyeKbA7wEL4TTjr%2BH7xalIsKEF%2BjnIY%2Fuah3nuauhdl6j38zKtnz8jbfejK7yLMVYJEnkNwlvlAsvQzika63N4tahQQsbceFsS7RNmwsqTN5c0lcCC5gKA1pIFxi0eNElt5tpZtSDRhf6pGG5CfrIs8jV67nECCjlQ2nIa%2BtJmJTWbiqweuzKWCgysLRPY8TGdn1dChX%2BZ4cyJ%2BigpOk5e3xfYHgjUM8AU26WKvZUx1PuKOCHH5pwUbRptRfpaSx8Cfswn%2FzYErWA5MJyLTTvEkRNjioqmJkWSf0CuenTRJvs99eH6Ov%2F%2FR6h%2FdaQ2NcqBa8A4H0GRgSOM4klqDLGqYAePm%2FjjXf3d3J%2ByXrTRF1TjhqXucuDmJF%2Ft3c%2BtFqIN30%2Feet4gRgCppZlKom3Mu68tEpAYxfRafhT1AVy1WX6aJLhni%2F840SW0lIZwfOkTkgocf0vRXaark87JmG6zWMRI3S7yJEWFrXiG0Vtc%2BycyCuO%2FlsHsd%2FGVM65n8VtvYRyzaYRoA3OryV5pXdVwZmKUsA6RRCaBHIXdlzjWEHuTDmN2pML%2Bz2L8GOqUBOVKbFnXnd1tdf%2FHCgpMzMSSYK6MDiJGuvXjgUDhg941KXEUwM5buwdJQbMOEw%2B%2BHUxHis4DZxeS4CdV4rDTOoCMLbDVIGtzKCzli9t3wGqVt1v9y71BgyVwv7sNokAPYXg552yahkC8lcSJAebXnZJWfm3wCp5YpM%2BMgkVM6vqYjl7V%2Bc1Mo4V3x8XVsebLY0rog5rzORPZKJdxvjXQEGYgKWDgv&X-Amz-Signature=fb280bcd42f7ba915b5a29ddeed9311657d057564b4e6f36dbcc25204fcd62df&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHETYE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEkC0CF7rIDMp5m7%2B4kXn0k7lHfY%2BdPdfk4xpSVZTLgtAiEAsZqdeV7YWtp2SlBwzjQ8m%2FYrGBhF3k273josMK2Mdu4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwhjuLwCG898etEHircA489BCwAAOdn4IboH8Cgg%2BLTumw2y37hawQMYdpINj5kO9gT%2BZUy61XR%2Fu7u9MymFLyI9D3%2B5%2FyeKbA7wEL4TTjr%2BH7xalIsKEF%2BjnIY%2Fuah3nuauhdl6j38zKtnz8jbfejK7yLMVYJEnkNwlvlAsvQzika63N4tahQQsbceFsS7RNmwsqTN5c0lcCC5gKA1pIFxi0eNElt5tpZtSDRhf6pGG5CfrIs8jV67nECCjlQ2nIa%2BtJmJTWbiqweuzKWCgysLRPY8TGdn1dChX%2BZ4cyJ%2BigpOk5e3xfYHgjUM8AU26WKvZUx1PuKOCHH5pwUbRptRfpaSx8Cfswn%2FzYErWA5MJyLTTvEkRNjioqmJkWSf0CuenTRJvs99eH6Ov%2F%2FR6h%2FdaQ2NcqBa8A4H0GRgSOM4klqDLGqYAePm%2FjjXf3d3J%2ByXrTRF1TjhqXucuDmJF%2Ft3c%2BtFqIN30%2Feet4gRgCppZlKom3Mu68tEpAYxfRafhT1AVy1WX6aJLhni%2F840SW0lIZwfOkTkgocf0vRXaark87JmG6zWMRI3S7yJEWFrXiG0Vtc%2BycyCuO%2FlsHsd%2FGVM65n8VtvYRyzaYRoA3OryV5pXdVwZmKUsA6RRCaBHIXdlzjWEHuTDmN2pML%2Bz2L8GOqUBOVKbFnXnd1tdf%2FHCgpMzMSSYK6MDiJGuvXjgUDhg941KXEUwM5buwdJQbMOEw%2B%2BHUxHis4DZxeS4CdV4rDTOoCMLbDVIGtzKCzli9t3wGqVt1v9y71BgyVwv7sNokAPYXg552yahkC8lcSJAebXnZJWfm3wCp5YpM%2BMgkVM6vqYjl7V%2Bc1Mo4V3x8XVsebLY0rog5rzORPZKJdxvjXQEGYgKWDgv&X-Amz-Signature=36de827acd137d6f1cc1b17cb9b81876d7aec5fbcf69e1858422e6850296b3df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MHETYE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEkC0CF7rIDMp5m7%2B4kXn0k7lHfY%2BdPdfk4xpSVZTLgtAiEAsZqdeV7YWtp2SlBwzjQ8m%2FYrGBhF3k273josMK2Mdu4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwhjuLwCG898etEHircA489BCwAAOdn4IboH8Cgg%2BLTumw2y37hawQMYdpINj5kO9gT%2BZUy61XR%2Fu7u9MymFLyI9D3%2B5%2FyeKbA7wEL4TTjr%2BH7xalIsKEF%2BjnIY%2Fuah3nuauhdl6j38zKtnz8jbfejK7yLMVYJEnkNwlvlAsvQzika63N4tahQQsbceFsS7RNmwsqTN5c0lcCC5gKA1pIFxi0eNElt5tpZtSDRhf6pGG5CfrIs8jV67nECCjlQ2nIa%2BtJmJTWbiqweuzKWCgysLRPY8TGdn1dChX%2BZ4cyJ%2BigpOk5e3xfYHgjUM8AU26WKvZUx1PuKOCHH5pwUbRptRfpaSx8Cfswn%2FzYErWA5MJyLTTvEkRNjioqmJkWSf0CuenTRJvs99eH6Ov%2F%2FR6h%2FdaQ2NcqBa8A4H0GRgSOM4klqDLGqYAePm%2FjjXf3d3J%2ByXrTRF1TjhqXucuDmJF%2Ft3c%2BtFqIN30%2Feet4gRgCppZlKom3Mu68tEpAYxfRafhT1AVy1WX6aJLhni%2F840SW0lIZwfOkTkgocf0vRXaark87JmG6zWMRI3S7yJEWFrXiG0Vtc%2BycyCuO%2FlsHsd%2FGVM65n8VtvYRyzaYRoA3OryV5pXdVwZmKUsA6RRCaBHIXdlzjWEHuTDmN2pML%2Bz2L8GOqUBOVKbFnXnd1tdf%2FHCgpMzMSSYK6MDiJGuvXjgUDhg941KXEUwM5buwdJQbMOEw%2B%2BHUxHis4DZxeS4CdV4rDTOoCMLbDVIGtzKCzli9t3wGqVt1v9y71BgyVwv7sNokAPYXg552yahkC8lcSJAebXnZJWfm3wCp5YpM%2BMgkVM6vqYjl7V%2Bc1Mo4V3x8XVsebLY0rog5rzORPZKJdxvjXQEGYgKWDgv&X-Amz-Signature=c6a53d2ed97c3e378f3dcc4472b243c19bf657e43a0b0e4b03e928b40b8ffc39&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
