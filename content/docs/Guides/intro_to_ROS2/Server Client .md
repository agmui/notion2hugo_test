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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MMA4UE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpsrqwNGgV5Mrwv5QaMV9ivKqbL8QUJIfPoOMOVGpXhAiEAjcxE80OgEXvDNlABkQXNjzimobeYsUSAgEvM7DG7QoAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAvtiRAt%2FUkM5g2tCrcAw6f78YVr9XqfVoZoJqxB69fyhCarMN1EDO2C2XQ9fzOQzv0k1H7cjKDr880d0PCcjjrVqH9i3Xmy7cXFR8ucBsA8Tk0wNys1A1%2B5tpogrc1InKdvXdsbSgZ%2FoueDCqFxfnDI6xs%2B%2B7Ft9TSAmcpIXAUbu27AeyNRkOVrET8C9jnKYDqE3TYTkpIIqrVF82Y3GFWGHbd6IjJrvWLaXC%2B%2BbZAj%2BZQQ0X3VXMAHEU9xcb16s9wrf921LOiQNaG3snTG5MeKzHmWl4sD1OMb35S6HxrduIS702O0F7epuyz8FH%2B75fxuL%2B3LlGJQj5ZW7LHyTFKTur4DD74Zht7dbN8lgARRKdhgpB6UELtsxGMLXmGKq%2B7RzvxAlHHANsa%2FdLmyU0rzSz6erVL5nxRclUofWeKmpXS7oaf835eHBIMxMEu4WgMTI%2B4UQf3TNcYk%2Bi7rjkLB4cF2H%2FKKnBhv2w4FuUzlhluo25HJGuszRwDMBPWV0hafblhTwbDqZt8MmJweupeCh8PwZLupZf4ETDqQimgIVAoTL5BYJClmK4p1hSeLpOz3t4%2BipZh%2FmZc5crpo8GEBv%2B%2Bu546SmWGbVU4KQwT7LHbO7luvgdwYYU6SB0YqFajg8l3jqGdBoP4MMHn%2BcMGOqUBc86SrLZVmmBsGATEEx7z0LN5dPhCH1zqx0ZZ%2BgRteIL9fVf6LDjoRG3k3pYuWibFdNWCUPscQgxw0zbnZFk4vaqpFbYt3Akr2ssiLRGwK5gmJMYkX%2BZJzZXLalJrozUBwExf%2FkK2RtXAu9yL6noWQxF%2Fo1wn4RC7fvpRuTRslptwwfbxvGJnCDU1ckGkZzyAM%2FelskTSNPZg%2FfJ7Z1RJgkNKlmvq&X-Amz-Signature=8cc022c9bdfe01fc39dc42f8c6f72c9ceda37afe825190558004a8e39e988b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MMA4UE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpsrqwNGgV5Mrwv5QaMV9ivKqbL8QUJIfPoOMOVGpXhAiEAjcxE80OgEXvDNlABkQXNjzimobeYsUSAgEvM7DG7QoAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAvtiRAt%2FUkM5g2tCrcAw6f78YVr9XqfVoZoJqxB69fyhCarMN1EDO2C2XQ9fzOQzv0k1H7cjKDr880d0PCcjjrVqH9i3Xmy7cXFR8ucBsA8Tk0wNys1A1%2B5tpogrc1InKdvXdsbSgZ%2FoueDCqFxfnDI6xs%2B%2B7Ft9TSAmcpIXAUbu27AeyNRkOVrET8C9jnKYDqE3TYTkpIIqrVF82Y3GFWGHbd6IjJrvWLaXC%2B%2BbZAj%2BZQQ0X3VXMAHEU9xcb16s9wrf921LOiQNaG3snTG5MeKzHmWl4sD1OMb35S6HxrduIS702O0F7epuyz8FH%2B75fxuL%2B3LlGJQj5ZW7LHyTFKTur4DD74Zht7dbN8lgARRKdhgpB6UELtsxGMLXmGKq%2B7RzvxAlHHANsa%2FdLmyU0rzSz6erVL5nxRclUofWeKmpXS7oaf835eHBIMxMEu4WgMTI%2B4UQf3TNcYk%2Bi7rjkLB4cF2H%2FKKnBhv2w4FuUzlhluo25HJGuszRwDMBPWV0hafblhTwbDqZt8MmJweupeCh8PwZLupZf4ETDqQimgIVAoTL5BYJClmK4p1hSeLpOz3t4%2BipZh%2FmZc5crpo8GEBv%2B%2Bu546SmWGbVU4KQwT7LHbO7luvgdwYYU6SB0YqFajg8l3jqGdBoP4MMHn%2BcMGOqUBc86SrLZVmmBsGATEEx7z0LN5dPhCH1zqx0ZZ%2BgRteIL9fVf6LDjoRG3k3pYuWibFdNWCUPscQgxw0zbnZFk4vaqpFbYt3Akr2ssiLRGwK5gmJMYkX%2BZJzZXLalJrozUBwExf%2FkK2RtXAu9yL6noWQxF%2Fo1wn4RC7fvpRuTRslptwwfbxvGJnCDU1ckGkZzyAM%2FelskTSNPZg%2FfJ7Z1RJgkNKlmvq&X-Amz-Signature=dd8ad7f848b79cbb3b97faee522692dcf8dc0fda34cc0d39eef6171d8555ab22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MMA4UE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpsrqwNGgV5Mrwv5QaMV9ivKqbL8QUJIfPoOMOVGpXhAiEAjcxE80OgEXvDNlABkQXNjzimobeYsUSAgEvM7DG7QoAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAvtiRAt%2FUkM5g2tCrcAw6f78YVr9XqfVoZoJqxB69fyhCarMN1EDO2C2XQ9fzOQzv0k1H7cjKDr880d0PCcjjrVqH9i3Xmy7cXFR8ucBsA8Tk0wNys1A1%2B5tpogrc1InKdvXdsbSgZ%2FoueDCqFxfnDI6xs%2B%2B7Ft9TSAmcpIXAUbu27AeyNRkOVrET8C9jnKYDqE3TYTkpIIqrVF82Y3GFWGHbd6IjJrvWLaXC%2B%2BbZAj%2BZQQ0X3VXMAHEU9xcb16s9wrf921LOiQNaG3snTG5MeKzHmWl4sD1OMb35S6HxrduIS702O0F7epuyz8FH%2B75fxuL%2B3LlGJQj5ZW7LHyTFKTur4DD74Zht7dbN8lgARRKdhgpB6UELtsxGMLXmGKq%2B7RzvxAlHHANsa%2FdLmyU0rzSz6erVL5nxRclUofWeKmpXS7oaf835eHBIMxMEu4WgMTI%2B4UQf3TNcYk%2Bi7rjkLB4cF2H%2FKKnBhv2w4FuUzlhluo25HJGuszRwDMBPWV0hafblhTwbDqZt8MmJweupeCh8PwZLupZf4ETDqQimgIVAoTL5BYJClmK4p1hSeLpOz3t4%2BipZh%2FmZc5crpo8GEBv%2B%2Bu546SmWGbVU4KQwT7LHbO7luvgdwYYU6SB0YqFajg8l3jqGdBoP4MMHn%2BcMGOqUBc86SrLZVmmBsGATEEx7z0LN5dPhCH1zqx0ZZ%2BgRteIL9fVf6LDjoRG3k3pYuWibFdNWCUPscQgxw0zbnZFk4vaqpFbYt3Akr2ssiLRGwK5gmJMYkX%2BZJzZXLalJrozUBwExf%2FkK2RtXAu9yL6noWQxF%2Fo1wn4RC7fvpRuTRslptwwfbxvGJnCDU1ckGkZzyAM%2FelskTSNPZg%2FfJ7Z1RJgkNKlmvq&X-Amz-Signature=3acb7be18a65e45ee14c4580b8b82589e1f09eb9f33d15a3f55c2f763bc0a5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MMA4UE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpsrqwNGgV5Mrwv5QaMV9ivKqbL8QUJIfPoOMOVGpXhAiEAjcxE80OgEXvDNlABkQXNjzimobeYsUSAgEvM7DG7QoAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAvtiRAt%2FUkM5g2tCrcAw6f78YVr9XqfVoZoJqxB69fyhCarMN1EDO2C2XQ9fzOQzv0k1H7cjKDr880d0PCcjjrVqH9i3Xmy7cXFR8ucBsA8Tk0wNys1A1%2B5tpogrc1InKdvXdsbSgZ%2FoueDCqFxfnDI6xs%2B%2B7Ft9TSAmcpIXAUbu27AeyNRkOVrET8C9jnKYDqE3TYTkpIIqrVF82Y3GFWGHbd6IjJrvWLaXC%2B%2BbZAj%2BZQQ0X3VXMAHEU9xcb16s9wrf921LOiQNaG3snTG5MeKzHmWl4sD1OMb35S6HxrduIS702O0F7epuyz8FH%2B75fxuL%2B3LlGJQj5ZW7LHyTFKTur4DD74Zht7dbN8lgARRKdhgpB6UELtsxGMLXmGKq%2B7RzvxAlHHANsa%2FdLmyU0rzSz6erVL5nxRclUofWeKmpXS7oaf835eHBIMxMEu4WgMTI%2B4UQf3TNcYk%2Bi7rjkLB4cF2H%2FKKnBhv2w4FuUzlhluo25HJGuszRwDMBPWV0hafblhTwbDqZt8MmJweupeCh8PwZLupZf4ETDqQimgIVAoTL5BYJClmK4p1hSeLpOz3t4%2BipZh%2FmZc5crpo8GEBv%2B%2Bu546SmWGbVU4KQwT7LHbO7luvgdwYYU6SB0YqFajg8l3jqGdBoP4MMHn%2BcMGOqUBc86SrLZVmmBsGATEEx7z0LN5dPhCH1zqx0ZZ%2BgRteIL9fVf6LDjoRG3k3pYuWibFdNWCUPscQgxw0zbnZFk4vaqpFbYt3Akr2ssiLRGwK5gmJMYkX%2BZJzZXLalJrozUBwExf%2FkK2RtXAu9yL6noWQxF%2Fo1wn4RC7fvpRuTRslptwwfbxvGJnCDU1ckGkZzyAM%2FelskTSNPZg%2FfJ7Z1RJgkNKlmvq&X-Amz-Signature=f4519843dccc264af99016c5b81bab86423f35af020c74f210245ce6fbbe8a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MMA4UE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpsrqwNGgV5Mrwv5QaMV9ivKqbL8QUJIfPoOMOVGpXhAiEAjcxE80OgEXvDNlABkQXNjzimobeYsUSAgEvM7DG7QoAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAvtiRAt%2FUkM5g2tCrcAw6f78YVr9XqfVoZoJqxB69fyhCarMN1EDO2C2XQ9fzOQzv0k1H7cjKDr880d0PCcjjrVqH9i3Xmy7cXFR8ucBsA8Tk0wNys1A1%2B5tpogrc1InKdvXdsbSgZ%2FoueDCqFxfnDI6xs%2B%2B7Ft9TSAmcpIXAUbu27AeyNRkOVrET8C9jnKYDqE3TYTkpIIqrVF82Y3GFWGHbd6IjJrvWLaXC%2B%2BbZAj%2BZQQ0X3VXMAHEU9xcb16s9wrf921LOiQNaG3snTG5MeKzHmWl4sD1OMb35S6HxrduIS702O0F7epuyz8FH%2B75fxuL%2B3LlGJQj5ZW7LHyTFKTur4DD74Zht7dbN8lgARRKdhgpB6UELtsxGMLXmGKq%2B7RzvxAlHHANsa%2FdLmyU0rzSz6erVL5nxRclUofWeKmpXS7oaf835eHBIMxMEu4WgMTI%2B4UQf3TNcYk%2Bi7rjkLB4cF2H%2FKKnBhv2w4FuUzlhluo25HJGuszRwDMBPWV0hafblhTwbDqZt8MmJweupeCh8PwZLupZf4ETDqQimgIVAoTL5BYJClmK4p1hSeLpOz3t4%2BipZh%2FmZc5crpo8GEBv%2B%2Bu546SmWGbVU4KQwT7LHbO7luvgdwYYU6SB0YqFajg8l3jqGdBoP4MMHn%2BcMGOqUBc86SrLZVmmBsGATEEx7z0LN5dPhCH1zqx0ZZ%2BgRteIL9fVf6LDjoRG3k3pYuWibFdNWCUPscQgxw0zbnZFk4vaqpFbYt3Akr2ssiLRGwK5gmJMYkX%2BZJzZXLalJrozUBwExf%2FkK2RtXAu9yL6noWQxF%2Fo1wn4RC7fvpRuTRslptwwfbxvGJnCDU1ckGkZzyAM%2FelskTSNPZg%2FfJ7Z1RJgkNKlmvq&X-Amz-Signature=b0d4bb58bcae4c9c0447feb4dd65d1982e60ed070c22f5aa73ba842e82146618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
