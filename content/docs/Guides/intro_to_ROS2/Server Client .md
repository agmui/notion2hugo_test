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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF74ACZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpi%2BsAydRXx2x0zqGtStri%2F%2BmEdLelxqTtUMtVK%2F8moAiBpMRM7M9scV%2Fbeii%2F7qccgNXgCglhLn6epmnkAo3nukir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjkn8bSuabwPDdOieKtwD%2BNHeforBQ3tBcRY7FEx%2FJcws28YvewRghZhdIpEeI8nakTvahQNPyVmMFJD7O3%2F0fksms1rXukfYxKy7T79CGRtlyOu0dU4O3zclzwY4oZWuvlvJylCivbd1DlGy2LF6tgYnib84XZBcTrzuA%2BrdwwP9k0VAYOtcqQ8nBA%2B%2B5FI8Lf45OUg%2BmejNDt7BYzqoY2baT%2BMyHRE70XCL87%2B97iuITCwe6jytv28ZyaGXyw69jPhqp7R0Gc2uuKy72yJ9aOAiF79QuF9At9jI9mXjkhzXvko5L7jmA25GCuKkkT7m%2FTde9AwDAE8KuX4N%2F%2FzLnsAUSRiQL7qALSqhWS3CASwO4AL1MVe2y%2BW1MTmw5RSwDsJmwXiuvkih5SrSg2jOB4rPHp%2FVeNbVND0JtEsMFLyXQObTezo1FPRWHbRFsxYphh%2BeRhKCgedSudegcvJRf1AUknMDIqrRcleR79bo5n7rIhJz9fYRxI1cHCQVyoarZmceWoApLCLGYjx6S4uYu7aptFEB0sln1vzxGcJlFzuXq0GaYjBGY3XkPf3qX3HqAah8eMjihmRgbp0WbpUT1JIbkNlNHiUdW7W7iI4GfgbTdJ0HLD8RFjtA%2FQHKpahlV%2FvhDNrWJPxN%2F24w6qK7wAY6pgENGczOYUyt0%2BpOZF7lRy9nwPqsSMW%2Fde5j3wTLafhxXF2HdLDYDMdvYrDcOOVfI3ebichRR79nhklyormhDnq1bLEz%2BPtnHBqyZ4mtDTPP%2F%2BJy%2FCDMVbYv%2BJQOS8rZeOszbkt%2FYnfNoynyq1Rqd4hV8S%2FHJqeqW5GVoY%2BogIdJdHtBokm7fcgzOy%2BK5EOdNHQWTekdMIZoT4EC7csmNvomTS9TcSJ8&X-Amz-Signature=01238d67de9821a89afb3bd0b54f4e8c33ff6ba1c235e7be4cdf3984f25a4d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF74ACZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpi%2BsAydRXx2x0zqGtStri%2F%2BmEdLelxqTtUMtVK%2F8moAiBpMRM7M9scV%2Fbeii%2F7qccgNXgCglhLn6epmnkAo3nukir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjkn8bSuabwPDdOieKtwD%2BNHeforBQ3tBcRY7FEx%2FJcws28YvewRghZhdIpEeI8nakTvahQNPyVmMFJD7O3%2F0fksms1rXukfYxKy7T79CGRtlyOu0dU4O3zclzwY4oZWuvlvJylCivbd1DlGy2LF6tgYnib84XZBcTrzuA%2BrdwwP9k0VAYOtcqQ8nBA%2B%2B5FI8Lf45OUg%2BmejNDt7BYzqoY2baT%2BMyHRE70XCL87%2B97iuITCwe6jytv28ZyaGXyw69jPhqp7R0Gc2uuKy72yJ9aOAiF79QuF9At9jI9mXjkhzXvko5L7jmA25GCuKkkT7m%2FTde9AwDAE8KuX4N%2F%2FzLnsAUSRiQL7qALSqhWS3CASwO4AL1MVe2y%2BW1MTmw5RSwDsJmwXiuvkih5SrSg2jOB4rPHp%2FVeNbVND0JtEsMFLyXQObTezo1FPRWHbRFsxYphh%2BeRhKCgedSudegcvJRf1AUknMDIqrRcleR79bo5n7rIhJz9fYRxI1cHCQVyoarZmceWoApLCLGYjx6S4uYu7aptFEB0sln1vzxGcJlFzuXq0GaYjBGY3XkPf3qX3HqAah8eMjihmRgbp0WbpUT1JIbkNlNHiUdW7W7iI4GfgbTdJ0HLD8RFjtA%2FQHKpahlV%2FvhDNrWJPxN%2F24w6qK7wAY6pgENGczOYUyt0%2BpOZF7lRy9nwPqsSMW%2Fde5j3wTLafhxXF2HdLDYDMdvYrDcOOVfI3ebichRR79nhklyormhDnq1bLEz%2BPtnHBqyZ4mtDTPP%2F%2BJy%2FCDMVbYv%2BJQOS8rZeOszbkt%2FYnfNoynyq1Rqd4hV8S%2FHJqeqW5GVoY%2BogIdJdHtBokm7fcgzOy%2BK5EOdNHQWTekdMIZoT4EC7csmNvomTS9TcSJ8&X-Amz-Signature=61c1f058a5110ca7b09068bc05ea47124c98b746dff8e49ade5e07b04de2dfd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF74ACZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpi%2BsAydRXx2x0zqGtStri%2F%2BmEdLelxqTtUMtVK%2F8moAiBpMRM7M9scV%2Fbeii%2F7qccgNXgCglhLn6epmnkAo3nukir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjkn8bSuabwPDdOieKtwD%2BNHeforBQ3tBcRY7FEx%2FJcws28YvewRghZhdIpEeI8nakTvahQNPyVmMFJD7O3%2F0fksms1rXukfYxKy7T79CGRtlyOu0dU4O3zclzwY4oZWuvlvJylCivbd1DlGy2LF6tgYnib84XZBcTrzuA%2BrdwwP9k0VAYOtcqQ8nBA%2B%2B5FI8Lf45OUg%2BmejNDt7BYzqoY2baT%2BMyHRE70XCL87%2B97iuITCwe6jytv28ZyaGXyw69jPhqp7R0Gc2uuKy72yJ9aOAiF79QuF9At9jI9mXjkhzXvko5L7jmA25GCuKkkT7m%2FTde9AwDAE8KuX4N%2F%2FzLnsAUSRiQL7qALSqhWS3CASwO4AL1MVe2y%2BW1MTmw5RSwDsJmwXiuvkih5SrSg2jOB4rPHp%2FVeNbVND0JtEsMFLyXQObTezo1FPRWHbRFsxYphh%2BeRhKCgedSudegcvJRf1AUknMDIqrRcleR79bo5n7rIhJz9fYRxI1cHCQVyoarZmceWoApLCLGYjx6S4uYu7aptFEB0sln1vzxGcJlFzuXq0GaYjBGY3XkPf3qX3HqAah8eMjihmRgbp0WbpUT1JIbkNlNHiUdW7W7iI4GfgbTdJ0HLD8RFjtA%2FQHKpahlV%2FvhDNrWJPxN%2F24w6qK7wAY6pgENGczOYUyt0%2BpOZF7lRy9nwPqsSMW%2Fde5j3wTLafhxXF2HdLDYDMdvYrDcOOVfI3ebichRR79nhklyormhDnq1bLEz%2BPtnHBqyZ4mtDTPP%2F%2BJy%2FCDMVbYv%2BJQOS8rZeOszbkt%2FYnfNoynyq1Rqd4hV8S%2FHJqeqW5GVoY%2BogIdJdHtBokm7fcgzOy%2BK5EOdNHQWTekdMIZoT4EC7csmNvomTS9TcSJ8&X-Amz-Signature=63085ae7318914d694f49984467f1f2a58edc9a07732fda4647e08667889a344&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF74ACZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpi%2BsAydRXx2x0zqGtStri%2F%2BmEdLelxqTtUMtVK%2F8moAiBpMRM7M9scV%2Fbeii%2F7qccgNXgCglhLn6epmnkAo3nukir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjkn8bSuabwPDdOieKtwD%2BNHeforBQ3tBcRY7FEx%2FJcws28YvewRghZhdIpEeI8nakTvahQNPyVmMFJD7O3%2F0fksms1rXukfYxKy7T79CGRtlyOu0dU4O3zclzwY4oZWuvlvJylCivbd1DlGy2LF6tgYnib84XZBcTrzuA%2BrdwwP9k0VAYOtcqQ8nBA%2B%2B5FI8Lf45OUg%2BmejNDt7BYzqoY2baT%2BMyHRE70XCL87%2B97iuITCwe6jytv28ZyaGXyw69jPhqp7R0Gc2uuKy72yJ9aOAiF79QuF9At9jI9mXjkhzXvko5L7jmA25GCuKkkT7m%2FTde9AwDAE8KuX4N%2F%2FzLnsAUSRiQL7qALSqhWS3CASwO4AL1MVe2y%2BW1MTmw5RSwDsJmwXiuvkih5SrSg2jOB4rPHp%2FVeNbVND0JtEsMFLyXQObTezo1FPRWHbRFsxYphh%2BeRhKCgedSudegcvJRf1AUknMDIqrRcleR79bo5n7rIhJz9fYRxI1cHCQVyoarZmceWoApLCLGYjx6S4uYu7aptFEB0sln1vzxGcJlFzuXq0GaYjBGY3XkPf3qX3HqAah8eMjihmRgbp0WbpUT1JIbkNlNHiUdW7W7iI4GfgbTdJ0HLD8RFjtA%2FQHKpahlV%2FvhDNrWJPxN%2F24w6qK7wAY6pgENGczOYUyt0%2BpOZF7lRy9nwPqsSMW%2Fde5j3wTLafhxXF2HdLDYDMdvYrDcOOVfI3ebichRR79nhklyormhDnq1bLEz%2BPtnHBqyZ4mtDTPP%2F%2BJy%2FCDMVbYv%2BJQOS8rZeOszbkt%2FYnfNoynyq1Rqd4hV8S%2FHJqeqW5GVoY%2BogIdJdHtBokm7fcgzOy%2BK5EOdNHQWTekdMIZoT4EC7csmNvomTS9TcSJ8&X-Amz-Signature=6b81ef2d34db2d3b15269e2b684ed702acf5ee49312bd38be7b60478ba293fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF74ACZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpi%2BsAydRXx2x0zqGtStri%2F%2BmEdLelxqTtUMtVK%2F8moAiBpMRM7M9scV%2Fbeii%2F7qccgNXgCglhLn6epmnkAo3nukir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjkn8bSuabwPDdOieKtwD%2BNHeforBQ3tBcRY7FEx%2FJcws28YvewRghZhdIpEeI8nakTvahQNPyVmMFJD7O3%2F0fksms1rXukfYxKy7T79CGRtlyOu0dU4O3zclzwY4oZWuvlvJylCivbd1DlGy2LF6tgYnib84XZBcTrzuA%2BrdwwP9k0VAYOtcqQ8nBA%2B%2B5FI8Lf45OUg%2BmejNDt7BYzqoY2baT%2BMyHRE70XCL87%2B97iuITCwe6jytv28ZyaGXyw69jPhqp7R0Gc2uuKy72yJ9aOAiF79QuF9At9jI9mXjkhzXvko5L7jmA25GCuKkkT7m%2FTde9AwDAE8KuX4N%2F%2FzLnsAUSRiQL7qALSqhWS3CASwO4AL1MVe2y%2BW1MTmw5RSwDsJmwXiuvkih5SrSg2jOB4rPHp%2FVeNbVND0JtEsMFLyXQObTezo1FPRWHbRFsxYphh%2BeRhKCgedSudegcvJRf1AUknMDIqrRcleR79bo5n7rIhJz9fYRxI1cHCQVyoarZmceWoApLCLGYjx6S4uYu7aptFEB0sln1vzxGcJlFzuXq0GaYjBGY3XkPf3qX3HqAah8eMjihmRgbp0WbpUT1JIbkNlNHiUdW7W7iI4GfgbTdJ0HLD8RFjtA%2FQHKpahlV%2FvhDNrWJPxN%2F24w6qK7wAY6pgENGczOYUyt0%2BpOZF7lRy9nwPqsSMW%2Fde5j3wTLafhxXF2HdLDYDMdvYrDcOOVfI3ebichRR79nhklyormhDnq1bLEz%2BPtnHBqyZ4mtDTPP%2F%2BJy%2FCDMVbYv%2BJQOS8rZeOszbkt%2FYnfNoynyq1Rqd4hV8S%2FHJqeqW5GVoY%2BogIdJdHtBokm7fcgzOy%2BK5EOdNHQWTekdMIZoT4EC7csmNvomTS9TcSJ8&X-Amz-Signature=f508d3a34285d9c9aec231ddead07ecd21ddada5a69a183da9c41c2f761778e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
