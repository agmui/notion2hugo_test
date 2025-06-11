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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2PAGXX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRww2OwJMMOctUCG7inj5hy6cDibSQ%2FwT8fYbjjpM0kwIgGvs3FbIIYyEjka%2BTwK8jX%2BqOVkCPFdVIS%2FXAij3rVQwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICzMYcmvWzkrQwdXSrcA99FAaORk8rxIt0noSjShngNrbC6qSGndiO9JPqVl41mArVHfKqwSsDD3CitRXmKvrEdOOD%2FaAdoAG7%2BH1jIiqXS%2BQnIIG9rz5497e5ZU9SCR8BFGPAryO3RDHYttXTE%2F0L0UiFh6BvV%2B%2BImiQfwbXSQZZQnuHNeBupAg2dM9GhWBCOH%2BBmOy9%2BH16HADYX7m%2BUeqGSD1oFlgod8%2Fvy3%2BaknEK1Wl2apRuvEn3au9txoxYZ5kWMu7VeZ0gcviqDLtnFzMQigveNvbn1J%2F51p77BZVajhchTen3po477g1bTSbi8ojOiK61UP2d48rVcj78hwX4KIRgOrkZfxcnCOXqeAXsTY93gf5oiUUg03LuRrIYO4T0GlhCDHRY%2FpJchp5NLwhmgsaW5Nhrwnf%2FjGkmeA2vVA55u50Rs6AprSq4D1vxobwTIHUn4A7kVuE4sXESrmXl%2Fc2ReFQl28DdXANNnpmPi99tTNLm1HVIRgLTScd5QuF5dsPYS8mtkcp%2BeNwpbIiVNN42cA4MsxLawIHkPLKT4AfAhytwlZQ%2B2%2BzSCqbtTh6AgOXjUi6vfn7E4i1tqc6F9Hj48%2B0zfXq6nRkmPb3N%2Fmt5xHC00KNp8REbD3hxkvjS%2BU71kVHZo%2FMO3mpcIGOqUBgWm3Ei7cZP3ooaEbwjqBsnOCtPudUWZZW52OfHqe8vgAErOTAqvn9K2sOUa9ATuUWsLw0CY%2FDYZi%2BCYmQF76CQ3vDeBJn6Z9Hzrwlr8D8%2Bo5FONkmvg1dMJjug2iXfp0mFxBSZypk%2FenwM8W6wBoQkFYcosRBqAFHqpOVZuLbvL18p1VZhvC2bp6qQhynt7XRqxcVPPVlocn3g392vkVbFoIVWXx&X-Amz-Signature=0a6af3c1330f6f5fae24003603741117d4e0a1e851dfbe823274e2b80301ddda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2PAGXX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRww2OwJMMOctUCG7inj5hy6cDibSQ%2FwT8fYbjjpM0kwIgGvs3FbIIYyEjka%2BTwK8jX%2BqOVkCPFdVIS%2FXAij3rVQwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICzMYcmvWzkrQwdXSrcA99FAaORk8rxIt0noSjShngNrbC6qSGndiO9JPqVl41mArVHfKqwSsDD3CitRXmKvrEdOOD%2FaAdoAG7%2BH1jIiqXS%2BQnIIG9rz5497e5ZU9SCR8BFGPAryO3RDHYttXTE%2F0L0UiFh6BvV%2B%2BImiQfwbXSQZZQnuHNeBupAg2dM9GhWBCOH%2BBmOy9%2BH16HADYX7m%2BUeqGSD1oFlgod8%2Fvy3%2BaknEK1Wl2apRuvEn3au9txoxYZ5kWMu7VeZ0gcviqDLtnFzMQigveNvbn1J%2F51p77BZVajhchTen3po477g1bTSbi8ojOiK61UP2d48rVcj78hwX4KIRgOrkZfxcnCOXqeAXsTY93gf5oiUUg03LuRrIYO4T0GlhCDHRY%2FpJchp5NLwhmgsaW5Nhrwnf%2FjGkmeA2vVA55u50Rs6AprSq4D1vxobwTIHUn4A7kVuE4sXESrmXl%2Fc2ReFQl28DdXANNnpmPi99tTNLm1HVIRgLTScd5QuF5dsPYS8mtkcp%2BeNwpbIiVNN42cA4MsxLawIHkPLKT4AfAhytwlZQ%2B2%2BzSCqbtTh6AgOXjUi6vfn7E4i1tqc6F9Hj48%2B0zfXq6nRkmPb3N%2Fmt5xHC00KNp8REbD3hxkvjS%2BU71kVHZo%2FMO3mpcIGOqUBgWm3Ei7cZP3ooaEbwjqBsnOCtPudUWZZW52OfHqe8vgAErOTAqvn9K2sOUa9ATuUWsLw0CY%2FDYZi%2BCYmQF76CQ3vDeBJn6Z9Hzrwlr8D8%2Bo5FONkmvg1dMJjug2iXfp0mFxBSZypk%2FenwM8W6wBoQkFYcosRBqAFHqpOVZuLbvL18p1VZhvC2bp6qQhynt7XRqxcVPPVlocn3g392vkVbFoIVWXx&X-Amz-Signature=6e9623d65230cf53383d4ec3106fb0cd7c75458fdff64c9e5641815cebbf395e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2PAGXX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRww2OwJMMOctUCG7inj5hy6cDibSQ%2FwT8fYbjjpM0kwIgGvs3FbIIYyEjka%2BTwK8jX%2BqOVkCPFdVIS%2FXAij3rVQwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICzMYcmvWzkrQwdXSrcA99FAaORk8rxIt0noSjShngNrbC6qSGndiO9JPqVl41mArVHfKqwSsDD3CitRXmKvrEdOOD%2FaAdoAG7%2BH1jIiqXS%2BQnIIG9rz5497e5ZU9SCR8BFGPAryO3RDHYttXTE%2F0L0UiFh6BvV%2B%2BImiQfwbXSQZZQnuHNeBupAg2dM9GhWBCOH%2BBmOy9%2BH16HADYX7m%2BUeqGSD1oFlgod8%2Fvy3%2BaknEK1Wl2apRuvEn3au9txoxYZ5kWMu7VeZ0gcviqDLtnFzMQigveNvbn1J%2F51p77BZVajhchTen3po477g1bTSbi8ojOiK61UP2d48rVcj78hwX4KIRgOrkZfxcnCOXqeAXsTY93gf5oiUUg03LuRrIYO4T0GlhCDHRY%2FpJchp5NLwhmgsaW5Nhrwnf%2FjGkmeA2vVA55u50Rs6AprSq4D1vxobwTIHUn4A7kVuE4sXESrmXl%2Fc2ReFQl28DdXANNnpmPi99tTNLm1HVIRgLTScd5QuF5dsPYS8mtkcp%2BeNwpbIiVNN42cA4MsxLawIHkPLKT4AfAhytwlZQ%2B2%2BzSCqbtTh6AgOXjUi6vfn7E4i1tqc6F9Hj48%2B0zfXq6nRkmPb3N%2Fmt5xHC00KNp8REbD3hxkvjS%2BU71kVHZo%2FMO3mpcIGOqUBgWm3Ei7cZP3ooaEbwjqBsnOCtPudUWZZW52OfHqe8vgAErOTAqvn9K2sOUa9ATuUWsLw0CY%2FDYZi%2BCYmQF76CQ3vDeBJn6Z9Hzrwlr8D8%2Bo5FONkmvg1dMJjug2iXfp0mFxBSZypk%2FenwM8W6wBoQkFYcosRBqAFHqpOVZuLbvL18p1VZhvC2bp6qQhynt7XRqxcVPPVlocn3g392vkVbFoIVWXx&X-Amz-Signature=3340ca58b582cf71c517f33dbb2f359be5cbce2ce78e617cde7ba8cf5a3fa920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2PAGXX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRww2OwJMMOctUCG7inj5hy6cDibSQ%2FwT8fYbjjpM0kwIgGvs3FbIIYyEjka%2BTwK8jX%2BqOVkCPFdVIS%2FXAij3rVQwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICzMYcmvWzkrQwdXSrcA99FAaORk8rxIt0noSjShngNrbC6qSGndiO9JPqVl41mArVHfKqwSsDD3CitRXmKvrEdOOD%2FaAdoAG7%2BH1jIiqXS%2BQnIIG9rz5497e5ZU9SCR8BFGPAryO3RDHYttXTE%2F0L0UiFh6BvV%2B%2BImiQfwbXSQZZQnuHNeBupAg2dM9GhWBCOH%2BBmOy9%2BH16HADYX7m%2BUeqGSD1oFlgod8%2Fvy3%2BaknEK1Wl2apRuvEn3au9txoxYZ5kWMu7VeZ0gcviqDLtnFzMQigveNvbn1J%2F51p77BZVajhchTen3po477g1bTSbi8ojOiK61UP2d48rVcj78hwX4KIRgOrkZfxcnCOXqeAXsTY93gf5oiUUg03LuRrIYO4T0GlhCDHRY%2FpJchp5NLwhmgsaW5Nhrwnf%2FjGkmeA2vVA55u50Rs6AprSq4D1vxobwTIHUn4A7kVuE4sXESrmXl%2Fc2ReFQl28DdXANNnpmPi99tTNLm1HVIRgLTScd5QuF5dsPYS8mtkcp%2BeNwpbIiVNN42cA4MsxLawIHkPLKT4AfAhytwlZQ%2B2%2BzSCqbtTh6AgOXjUi6vfn7E4i1tqc6F9Hj48%2B0zfXq6nRkmPb3N%2Fmt5xHC00KNp8REbD3hxkvjS%2BU71kVHZo%2FMO3mpcIGOqUBgWm3Ei7cZP3ooaEbwjqBsnOCtPudUWZZW52OfHqe8vgAErOTAqvn9K2sOUa9ATuUWsLw0CY%2FDYZi%2BCYmQF76CQ3vDeBJn6Z9Hzrwlr8D8%2Bo5FONkmvg1dMJjug2iXfp0mFxBSZypk%2FenwM8W6wBoQkFYcosRBqAFHqpOVZuLbvL18p1VZhvC2bp6qQhynt7XRqxcVPPVlocn3g392vkVbFoIVWXx&X-Amz-Signature=8d0506ea727586ae3aadf1aaa633a91884e8efb73f3c79563a1b5cd11ac5331b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2PAGXX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRww2OwJMMOctUCG7inj5hy6cDibSQ%2FwT8fYbjjpM0kwIgGvs3FbIIYyEjka%2BTwK8jX%2BqOVkCPFdVIS%2FXAij3rVQwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICzMYcmvWzkrQwdXSrcA99FAaORk8rxIt0noSjShngNrbC6qSGndiO9JPqVl41mArVHfKqwSsDD3CitRXmKvrEdOOD%2FaAdoAG7%2BH1jIiqXS%2BQnIIG9rz5497e5ZU9SCR8BFGPAryO3RDHYttXTE%2F0L0UiFh6BvV%2B%2BImiQfwbXSQZZQnuHNeBupAg2dM9GhWBCOH%2BBmOy9%2BH16HADYX7m%2BUeqGSD1oFlgod8%2Fvy3%2BaknEK1Wl2apRuvEn3au9txoxYZ5kWMu7VeZ0gcviqDLtnFzMQigveNvbn1J%2F51p77BZVajhchTen3po477g1bTSbi8ojOiK61UP2d48rVcj78hwX4KIRgOrkZfxcnCOXqeAXsTY93gf5oiUUg03LuRrIYO4T0GlhCDHRY%2FpJchp5NLwhmgsaW5Nhrwnf%2FjGkmeA2vVA55u50Rs6AprSq4D1vxobwTIHUn4A7kVuE4sXESrmXl%2Fc2ReFQl28DdXANNnpmPi99tTNLm1HVIRgLTScd5QuF5dsPYS8mtkcp%2BeNwpbIiVNN42cA4MsxLawIHkPLKT4AfAhytwlZQ%2B2%2BzSCqbtTh6AgOXjUi6vfn7E4i1tqc6F9Hj48%2B0zfXq6nRkmPb3N%2Fmt5xHC00KNp8REbD3hxkvjS%2BU71kVHZo%2FMO3mpcIGOqUBgWm3Ei7cZP3ooaEbwjqBsnOCtPudUWZZW52OfHqe8vgAErOTAqvn9K2sOUa9ATuUWsLw0CY%2FDYZi%2BCYmQF76CQ3vDeBJn6Z9Hzrwlr8D8%2Bo5FONkmvg1dMJjug2iXfp0mFxBSZypk%2FenwM8W6wBoQkFYcosRBqAFHqpOVZuLbvL18p1VZhvC2bp6qQhynt7XRqxcVPPVlocn3g392vkVbFoIVWXx&X-Amz-Signature=515c43b5245dc6be24a3fbaffd6c150dfbdc7fae1a83453b57b13c4ba365e402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
