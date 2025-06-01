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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXUYCVL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCQrD3AY7XyPAREWifdMNR6hnIOk9hchW4%2FNlBcGTY%2BPgIgQW3DpRkUnYqTG2dwVs7cFeVIZSqivcMFrPB7GgrCC7IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAxiL0CjKdeLgnNgyrcA8cN5Ucl3XNjBvTz%2BltBVihkIfkx2FnqxzhpLxVWnJ1y51flDthh0q%2B2NQD6fqFPL1ouEvBwKMEINHTXp4seSfoZl4DkffO7W6ERK5f26Yp4quv1QlI3r25u9fmgPWf6E2sHKi6JTOiMAt7nG9nH1%2BfV80ZvCp4Vy%2FDo0sd0ViEb6woPzjzIpH7uVrcGcYW9kaZxhLYn%2BwFS0IR6ApstWD3MvTZvvYHWQWSIPFFBY6UMw1KeSKNNKM9nrTj7eYcPtjgMjy38l7o%2FmWbMN691GLwfiwreQg5vfplk3BnB7%2FjcyAwZz5hLW%2FFuv8OZ9dUVQAXQ8s7xQv6N3h4W8K2kY%2BSozpM9brY%2FbVhlbe7nUTQ4lY2dV1gLi8nWDpXtjD10wJ7QBSf077tjXNXYuln1hi%2Fmrt2EJPyEO20zZVKgW4jIeZnpAfsF2ZX2mHBbETvcuwDOJjHgVFoP8fhBMUglxyl0NEOcBD1Yp8tyAZLzS2Ptom%2FYK1vAsY5xWmye5Q3QCVRi%2FgCEpIRjY7AKwWDpdUfxH%2FMjQzW0pYbSYu75YefRXkl0zAXESxWw5SbOmQJNQc%2BNuK%2Bxtj0AM0CDrICy9ehqR7stoiGXrp98bGQe9T98dXtKY3u2Srjut3ESMLex8sEGOqUBCWjriZPvfhMXnzcLubBKCD1RwbWLqieEs9bbMqnsrRV7HBDf5l4uaigrvMl2WhbO77c8IXV3552t9LxoEcyeHbJtb1MggIxLRzs4nP4U3yVjFRZCi23Zhv86j1kRwpjU35PF34fcMxa71BdCwPl8asM32b%2B530MCAnHNIG0f%2BIvTKbpRNLoQ6yvMD9gn1xyWuGFh99BpmovQy1fwhJL2AbzMHIZu&X-Amz-Signature=e61f204245e5264c1fe847bbadc7e7e0aebfd4265ad91470e3d324656c5d0a47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXUYCVL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCQrD3AY7XyPAREWifdMNR6hnIOk9hchW4%2FNlBcGTY%2BPgIgQW3DpRkUnYqTG2dwVs7cFeVIZSqivcMFrPB7GgrCC7IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAxiL0CjKdeLgnNgyrcA8cN5Ucl3XNjBvTz%2BltBVihkIfkx2FnqxzhpLxVWnJ1y51flDthh0q%2B2NQD6fqFPL1ouEvBwKMEINHTXp4seSfoZl4DkffO7W6ERK5f26Yp4quv1QlI3r25u9fmgPWf6E2sHKi6JTOiMAt7nG9nH1%2BfV80ZvCp4Vy%2FDo0sd0ViEb6woPzjzIpH7uVrcGcYW9kaZxhLYn%2BwFS0IR6ApstWD3MvTZvvYHWQWSIPFFBY6UMw1KeSKNNKM9nrTj7eYcPtjgMjy38l7o%2FmWbMN691GLwfiwreQg5vfplk3BnB7%2FjcyAwZz5hLW%2FFuv8OZ9dUVQAXQ8s7xQv6N3h4W8K2kY%2BSozpM9brY%2FbVhlbe7nUTQ4lY2dV1gLi8nWDpXtjD10wJ7QBSf077tjXNXYuln1hi%2Fmrt2EJPyEO20zZVKgW4jIeZnpAfsF2ZX2mHBbETvcuwDOJjHgVFoP8fhBMUglxyl0NEOcBD1Yp8tyAZLzS2Ptom%2FYK1vAsY5xWmye5Q3QCVRi%2FgCEpIRjY7AKwWDpdUfxH%2FMjQzW0pYbSYu75YefRXkl0zAXESxWw5SbOmQJNQc%2BNuK%2Bxtj0AM0CDrICy9ehqR7stoiGXrp98bGQe9T98dXtKY3u2Srjut3ESMLex8sEGOqUBCWjriZPvfhMXnzcLubBKCD1RwbWLqieEs9bbMqnsrRV7HBDf5l4uaigrvMl2WhbO77c8IXV3552t9LxoEcyeHbJtb1MggIxLRzs4nP4U3yVjFRZCi23Zhv86j1kRwpjU35PF34fcMxa71BdCwPl8asM32b%2B530MCAnHNIG0f%2BIvTKbpRNLoQ6yvMD9gn1xyWuGFh99BpmovQy1fwhJL2AbzMHIZu&X-Amz-Signature=4d83373b37053194f5de7cd9b0194c4fcc8c0fb04186dc7810c12293ac35a9af&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXUYCVL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCQrD3AY7XyPAREWifdMNR6hnIOk9hchW4%2FNlBcGTY%2BPgIgQW3DpRkUnYqTG2dwVs7cFeVIZSqivcMFrPB7GgrCC7IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAxiL0CjKdeLgnNgyrcA8cN5Ucl3XNjBvTz%2BltBVihkIfkx2FnqxzhpLxVWnJ1y51flDthh0q%2B2NQD6fqFPL1ouEvBwKMEINHTXp4seSfoZl4DkffO7W6ERK5f26Yp4quv1QlI3r25u9fmgPWf6E2sHKi6JTOiMAt7nG9nH1%2BfV80ZvCp4Vy%2FDo0sd0ViEb6woPzjzIpH7uVrcGcYW9kaZxhLYn%2BwFS0IR6ApstWD3MvTZvvYHWQWSIPFFBY6UMw1KeSKNNKM9nrTj7eYcPtjgMjy38l7o%2FmWbMN691GLwfiwreQg5vfplk3BnB7%2FjcyAwZz5hLW%2FFuv8OZ9dUVQAXQ8s7xQv6N3h4W8K2kY%2BSozpM9brY%2FbVhlbe7nUTQ4lY2dV1gLi8nWDpXtjD10wJ7QBSf077tjXNXYuln1hi%2Fmrt2EJPyEO20zZVKgW4jIeZnpAfsF2ZX2mHBbETvcuwDOJjHgVFoP8fhBMUglxyl0NEOcBD1Yp8tyAZLzS2Ptom%2FYK1vAsY5xWmye5Q3QCVRi%2FgCEpIRjY7AKwWDpdUfxH%2FMjQzW0pYbSYu75YefRXkl0zAXESxWw5SbOmQJNQc%2BNuK%2Bxtj0AM0CDrICy9ehqR7stoiGXrp98bGQe9T98dXtKY3u2Srjut3ESMLex8sEGOqUBCWjriZPvfhMXnzcLubBKCD1RwbWLqieEs9bbMqnsrRV7HBDf5l4uaigrvMl2WhbO77c8IXV3552t9LxoEcyeHbJtb1MggIxLRzs4nP4U3yVjFRZCi23Zhv86j1kRwpjU35PF34fcMxa71BdCwPl8asM32b%2B530MCAnHNIG0f%2BIvTKbpRNLoQ6yvMD9gn1xyWuGFh99BpmovQy1fwhJL2AbzMHIZu&X-Amz-Signature=76cc109365dc6703bf0b0d28eb4ca9e9e8b2ac7f522fb880381c8ae8daa2914a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXUYCVL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCQrD3AY7XyPAREWifdMNR6hnIOk9hchW4%2FNlBcGTY%2BPgIgQW3DpRkUnYqTG2dwVs7cFeVIZSqivcMFrPB7GgrCC7IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAxiL0CjKdeLgnNgyrcA8cN5Ucl3XNjBvTz%2BltBVihkIfkx2FnqxzhpLxVWnJ1y51flDthh0q%2B2NQD6fqFPL1ouEvBwKMEINHTXp4seSfoZl4DkffO7W6ERK5f26Yp4quv1QlI3r25u9fmgPWf6E2sHKi6JTOiMAt7nG9nH1%2BfV80ZvCp4Vy%2FDo0sd0ViEb6woPzjzIpH7uVrcGcYW9kaZxhLYn%2BwFS0IR6ApstWD3MvTZvvYHWQWSIPFFBY6UMw1KeSKNNKM9nrTj7eYcPtjgMjy38l7o%2FmWbMN691GLwfiwreQg5vfplk3BnB7%2FjcyAwZz5hLW%2FFuv8OZ9dUVQAXQ8s7xQv6N3h4W8K2kY%2BSozpM9brY%2FbVhlbe7nUTQ4lY2dV1gLi8nWDpXtjD10wJ7QBSf077tjXNXYuln1hi%2Fmrt2EJPyEO20zZVKgW4jIeZnpAfsF2ZX2mHBbETvcuwDOJjHgVFoP8fhBMUglxyl0NEOcBD1Yp8tyAZLzS2Ptom%2FYK1vAsY5xWmye5Q3QCVRi%2FgCEpIRjY7AKwWDpdUfxH%2FMjQzW0pYbSYu75YefRXkl0zAXESxWw5SbOmQJNQc%2BNuK%2Bxtj0AM0CDrICy9ehqR7stoiGXrp98bGQe9T98dXtKY3u2Srjut3ESMLex8sEGOqUBCWjriZPvfhMXnzcLubBKCD1RwbWLqieEs9bbMqnsrRV7HBDf5l4uaigrvMl2WhbO77c8IXV3552t9LxoEcyeHbJtb1MggIxLRzs4nP4U3yVjFRZCi23Zhv86j1kRwpjU35PF34fcMxa71BdCwPl8asM32b%2B530MCAnHNIG0f%2BIvTKbpRNLoQ6yvMD9gn1xyWuGFh99BpmovQy1fwhJL2AbzMHIZu&X-Amz-Signature=a92acd1e1daf8720dea194bf82cbccf87379c97b60f5e53d50806ca413eca967&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXUYCVL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCQrD3AY7XyPAREWifdMNR6hnIOk9hchW4%2FNlBcGTY%2BPgIgQW3DpRkUnYqTG2dwVs7cFeVIZSqivcMFrPB7GgrCC7IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAxiL0CjKdeLgnNgyrcA8cN5Ucl3XNjBvTz%2BltBVihkIfkx2FnqxzhpLxVWnJ1y51flDthh0q%2B2NQD6fqFPL1ouEvBwKMEINHTXp4seSfoZl4DkffO7W6ERK5f26Yp4quv1QlI3r25u9fmgPWf6E2sHKi6JTOiMAt7nG9nH1%2BfV80ZvCp4Vy%2FDo0sd0ViEb6woPzjzIpH7uVrcGcYW9kaZxhLYn%2BwFS0IR6ApstWD3MvTZvvYHWQWSIPFFBY6UMw1KeSKNNKM9nrTj7eYcPtjgMjy38l7o%2FmWbMN691GLwfiwreQg5vfplk3BnB7%2FjcyAwZz5hLW%2FFuv8OZ9dUVQAXQ8s7xQv6N3h4W8K2kY%2BSozpM9brY%2FbVhlbe7nUTQ4lY2dV1gLi8nWDpXtjD10wJ7QBSf077tjXNXYuln1hi%2Fmrt2EJPyEO20zZVKgW4jIeZnpAfsF2ZX2mHBbETvcuwDOJjHgVFoP8fhBMUglxyl0NEOcBD1Yp8tyAZLzS2Ptom%2FYK1vAsY5xWmye5Q3QCVRi%2FgCEpIRjY7AKwWDpdUfxH%2FMjQzW0pYbSYu75YefRXkl0zAXESxWw5SbOmQJNQc%2BNuK%2Bxtj0AM0CDrICy9ehqR7stoiGXrp98bGQe9T98dXtKY3u2Srjut3ESMLex8sEGOqUBCWjriZPvfhMXnzcLubBKCD1RwbWLqieEs9bbMqnsrRV7HBDf5l4uaigrvMl2WhbO77c8IXV3552t9LxoEcyeHbJtb1MggIxLRzs4nP4U3yVjFRZCi23Zhv86j1kRwpjU35PF34fcMxa71BdCwPl8asM32b%2B530MCAnHNIG0f%2BIvTKbpRNLoQ6yvMD9gn1xyWuGFh99BpmovQy1fwhJL2AbzMHIZu&X-Amz-Signature=d15b830fb77a39e02e4f93c9bcf9ca602cb6b2ce1d7d984f26066715991049ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
