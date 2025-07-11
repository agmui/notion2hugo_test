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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JN3HYK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW2MQkl9EkSwY7w7Ib3%2BiQaU5RyQqXsEBLilVzV%2F2vIAiEAvNekK0RHN8xNTweVtYSd64CclpcUAukdYdt5gD6lAWkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKCyHfOIot10%2BWYCrcAwrgs0gl7Zzr5m0uOy0zbGyjaqT9A4BEA1arCbY6TiE54w%2BUNMdf5zGAU5jcxQMJ39msHwvQp8Rms%2Ff0xJHvFCEZmJb1WlTpVz0ACUByi2eqvituu3pdSmWz4X%2FARlpWtamKr4utu3ZRCM3OJaK5USzjQgdLn9hNCfbdyZFWts4l8yojHwNcsrQJm9sW1xFj8v9Q2a2v2SrUEHpsFW%2F32Es4IMpw%2BiGqy1LwMLHF5s2eiFhkDcaHWrVxOM8giI6mJIa0j2CtDmOG7U5hqdbM3k4cfgy8aWdzS21Xxf9NIYsPuXZciutDms7KmSbL2SgPeBNVVvFKRvwWR6Kept%2BwlFhOedqt%2BCQgt8RWi0Vn0%2BR99QBucy%2F00naEkd4G4KTtFoXUYERAx7X6R3EbJHIz%2Bdf%2BMOr6ND5xRMPIuvf%2BHdR1dFtss5HFHQFBYkJxqKJ5OupX1%2BuJPoVmWszh2KqZv2f21eZRwevFFB8Qw7gcx0CpHNnwO92VquDyYfz4GvTkYn92htzd%2F7JtNk50AuJT5LQSOg5Dyx3%2FsdIKQIL7oIlowp1mzErZs3hoAYos%2BfmzYMX0qNmOQj4T%2FE%2FNXGTibve1GPqBhP%2BbE5%2B39DHOKzqyPBXmi%2BVMqGRHHj1oMMf%2Bw8MGOqUBRcaa81CupGABabdjl6hjfomhDJkwtTOeuZRCwdLoFkQA90620kdqgMcTngIBvKjtFSAADnnV0CqfjnpKImxFoguwV8qw71BM6lCAUJ9UuYuah8PoGmQpeFuQo5731xHGWy07FesvH4r0S%2F2JGKluI4IqZrbDZ3m3uV4rGIC%2FVAz5ZFY76hNhi3rw86P3QUByKmd6LXOYT%2Bwi2838tc7CoYZYqgPj&X-Amz-Signature=32b211a5dd6052d944c7294723bfd5d6b9d6554174e3b2cc043ace9f3a449330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JN3HYK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW2MQkl9EkSwY7w7Ib3%2BiQaU5RyQqXsEBLilVzV%2F2vIAiEAvNekK0RHN8xNTweVtYSd64CclpcUAukdYdt5gD6lAWkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKCyHfOIot10%2BWYCrcAwrgs0gl7Zzr5m0uOy0zbGyjaqT9A4BEA1arCbY6TiE54w%2BUNMdf5zGAU5jcxQMJ39msHwvQp8Rms%2Ff0xJHvFCEZmJb1WlTpVz0ACUByi2eqvituu3pdSmWz4X%2FARlpWtamKr4utu3ZRCM3OJaK5USzjQgdLn9hNCfbdyZFWts4l8yojHwNcsrQJm9sW1xFj8v9Q2a2v2SrUEHpsFW%2F32Es4IMpw%2BiGqy1LwMLHF5s2eiFhkDcaHWrVxOM8giI6mJIa0j2CtDmOG7U5hqdbM3k4cfgy8aWdzS21Xxf9NIYsPuXZciutDms7KmSbL2SgPeBNVVvFKRvwWR6Kept%2BwlFhOedqt%2BCQgt8RWi0Vn0%2BR99QBucy%2F00naEkd4G4KTtFoXUYERAx7X6R3EbJHIz%2Bdf%2BMOr6ND5xRMPIuvf%2BHdR1dFtss5HFHQFBYkJxqKJ5OupX1%2BuJPoVmWszh2KqZv2f21eZRwevFFB8Qw7gcx0CpHNnwO92VquDyYfz4GvTkYn92htzd%2F7JtNk50AuJT5LQSOg5Dyx3%2FsdIKQIL7oIlowp1mzErZs3hoAYos%2BfmzYMX0qNmOQj4T%2FE%2FNXGTibve1GPqBhP%2BbE5%2B39DHOKzqyPBXmi%2BVMqGRHHj1oMMf%2Bw8MGOqUBRcaa81CupGABabdjl6hjfomhDJkwtTOeuZRCwdLoFkQA90620kdqgMcTngIBvKjtFSAADnnV0CqfjnpKImxFoguwV8qw71BM6lCAUJ9UuYuah8PoGmQpeFuQo5731xHGWy07FesvH4r0S%2F2JGKluI4IqZrbDZ3m3uV4rGIC%2FVAz5ZFY76hNhi3rw86P3QUByKmd6LXOYT%2Bwi2838tc7CoYZYqgPj&X-Amz-Signature=2a24d46c80fe129f909b0b490816e3e63277b3ac39bc762dfb8184942b1d3ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JN3HYK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW2MQkl9EkSwY7w7Ib3%2BiQaU5RyQqXsEBLilVzV%2F2vIAiEAvNekK0RHN8xNTweVtYSd64CclpcUAukdYdt5gD6lAWkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKCyHfOIot10%2BWYCrcAwrgs0gl7Zzr5m0uOy0zbGyjaqT9A4BEA1arCbY6TiE54w%2BUNMdf5zGAU5jcxQMJ39msHwvQp8Rms%2Ff0xJHvFCEZmJb1WlTpVz0ACUByi2eqvituu3pdSmWz4X%2FARlpWtamKr4utu3ZRCM3OJaK5USzjQgdLn9hNCfbdyZFWts4l8yojHwNcsrQJm9sW1xFj8v9Q2a2v2SrUEHpsFW%2F32Es4IMpw%2BiGqy1LwMLHF5s2eiFhkDcaHWrVxOM8giI6mJIa0j2CtDmOG7U5hqdbM3k4cfgy8aWdzS21Xxf9NIYsPuXZciutDms7KmSbL2SgPeBNVVvFKRvwWR6Kept%2BwlFhOedqt%2BCQgt8RWi0Vn0%2BR99QBucy%2F00naEkd4G4KTtFoXUYERAx7X6R3EbJHIz%2Bdf%2BMOr6ND5xRMPIuvf%2BHdR1dFtss5HFHQFBYkJxqKJ5OupX1%2BuJPoVmWszh2KqZv2f21eZRwevFFB8Qw7gcx0CpHNnwO92VquDyYfz4GvTkYn92htzd%2F7JtNk50AuJT5LQSOg5Dyx3%2FsdIKQIL7oIlowp1mzErZs3hoAYos%2BfmzYMX0qNmOQj4T%2FE%2FNXGTibve1GPqBhP%2BbE5%2B39DHOKzqyPBXmi%2BVMqGRHHj1oMMf%2Bw8MGOqUBRcaa81CupGABabdjl6hjfomhDJkwtTOeuZRCwdLoFkQA90620kdqgMcTngIBvKjtFSAADnnV0CqfjnpKImxFoguwV8qw71BM6lCAUJ9UuYuah8PoGmQpeFuQo5731xHGWy07FesvH4r0S%2F2JGKluI4IqZrbDZ3m3uV4rGIC%2FVAz5ZFY76hNhi3rw86P3QUByKmd6LXOYT%2Bwi2838tc7CoYZYqgPj&X-Amz-Signature=3b04f6f1fa97fcc3af794cc5743eff2c99b5aeb442b6a8713eb1f25eee7a82eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JN3HYK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW2MQkl9EkSwY7w7Ib3%2BiQaU5RyQqXsEBLilVzV%2F2vIAiEAvNekK0RHN8xNTweVtYSd64CclpcUAukdYdt5gD6lAWkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKCyHfOIot10%2BWYCrcAwrgs0gl7Zzr5m0uOy0zbGyjaqT9A4BEA1arCbY6TiE54w%2BUNMdf5zGAU5jcxQMJ39msHwvQp8Rms%2Ff0xJHvFCEZmJb1WlTpVz0ACUByi2eqvituu3pdSmWz4X%2FARlpWtamKr4utu3ZRCM3OJaK5USzjQgdLn9hNCfbdyZFWts4l8yojHwNcsrQJm9sW1xFj8v9Q2a2v2SrUEHpsFW%2F32Es4IMpw%2BiGqy1LwMLHF5s2eiFhkDcaHWrVxOM8giI6mJIa0j2CtDmOG7U5hqdbM3k4cfgy8aWdzS21Xxf9NIYsPuXZciutDms7KmSbL2SgPeBNVVvFKRvwWR6Kept%2BwlFhOedqt%2BCQgt8RWi0Vn0%2BR99QBucy%2F00naEkd4G4KTtFoXUYERAx7X6R3EbJHIz%2Bdf%2BMOr6ND5xRMPIuvf%2BHdR1dFtss5HFHQFBYkJxqKJ5OupX1%2BuJPoVmWszh2KqZv2f21eZRwevFFB8Qw7gcx0CpHNnwO92VquDyYfz4GvTkYn92htzd%2F7JtNk50AuJT5LQSOg5Dyx3%2FsdIKQIL7oIlowp1mzErZs3hoAYos%2BfmzYMX0qNmOQj4T%2FE%2FNXGTibve1GPqBhP%2BbE5%2B39DHOKzqyPBXmi%2BVMqGRHHj1oMMf%2Bw8MGOqUBRcaa81CupGABabdjl6hjfomhDJkwtTOeuZRCwdLoFkQA90620kdqgMcTngIBvKjtFSAADnnV0CqfjnpKImxFoguwV8qw71BM6lCAUJ9UuYuah8PoGmQpeFuQo5731xHGWy07FesvH4r0S%2F2JGKluI4IqZrbDZ3m3uV4rGIC%2FVAz5ZFY76hNhi3rw86P3QUByKmd6LXOYT%2Bwi2838tc7CoYZYqgPj&X-Amz-Signature=4be561ad5d8d16f2f1d983ccec88623b85046f363d9c37283d75073a666ac132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JN3HYK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW2MQkl9EkSwY7w7Ib3%2BiQaU5RyQqXsEBLilVzV%2F2vIAiEAvNekK0RHN8xNTweVtYSd64CclpcUAukdYdt5gD6lAWkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKCyHfOIot10%2BWYCrcAwrgs0gl7Zzr5m0uOy0zbGyjaqT9A4BEA1arCbY6TiE54w%2BUNMdf5zGAU5jcxQMJ39msHwvQp8Rms%2Ff0xJHvFCEZmJb1WlTpVz0ACUByi2eqvituu3pdSmWz4X%2FARlpWtamKr4utu3ZRCM3OJaK5USzjQgdLn9hNCfbdyZFWts4l8yojHwNcsrQJm9sW1xFj8v9Q2a2v2SrUEHpsFW%2F32Es4IMpw%2BiGqy1LwMLHF5s2eiFhkDcaHWrVxOM8giI6mJIa0j2CtDmOG7U5hqdbM3k4cfgy8aWdzS21Xxf9NIYsPuXZciutDms7KmSbL2SgPeBNVVvFKRvwWR6Kept%2BwlFhOedqt%2BCQgt8RWi0Vn0%2BR99QBucy%2F00naEkd4G4KTtFoXUYERAx7X6R3EbJHIz%2Bdf%2BMOr6ND5xRMPIuvf%2BHdR1dFtss5HFHQFBYkJxqKJ5OupX1%2BuJPoVmWszh2KqZv2f21eZRwevFFB8Qw7gcx0CpHNnwO92VquDyYfz4GvTkYn92htzd%2F7JtNk50AuJT5LQSOg5Dyx3%2FsdIKQIL7oIlowp1mzErZs3hoAYos%2BfmzYMX0qNmOQj4T%2FE%2FNXGTibve1GPqBhP%2BbE5%2B39DHOKzqyPBXmi%2BVMqGRHHj1oMMf%2Bw8MGOqUBRcaa81CupGABabdjl6hjfomhDJkwtTOeuZRCwdLoFkQA90620kdqgMcTngIBvKjtFSAADnnV0CqfjnpKImxFoguwV8qw71BM6lCAUJ9UuYuah8PoGmQpeFuQo5731xHGWy07FesvH4r0S%2F2JGKluI4IqZrbDZ3m3uV4rGIC%2FVAz5ZFY76hNhi3rw86P3QUByKmd6LXOYT%2Bwi2838tc7CoYZYqgPj&X-Amz-Signature=eb4af85cc8f7951f8eb07369cce1ee8afef706db3754ea9ca62ee0c6ee931a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
