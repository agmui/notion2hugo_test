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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIUITQC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQv2g2y2nZxQU9t%2BHynecaxZbyu5PVpt4gcLEmWsUfhAiEA6YQIICTGraTPROMLurKrafrmqwQF%2FzYCV7hmKwq49ucqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FQLARJt1TBZlErjyrcAzxe4DJCZrOEnXKjrjAAgYFFw7xjFpPh1a1FxOtKiTMBc74HeSLDEgnFpn7aI9RtxeTb7U%2FIBlcQLq0tX9RFfPig9v%2F3GGiehg4IANJB6EZcreK0I1Tys2B32wMg64BooWotJmQ5Wz4A2rs%2BxG40DXIG2JpYsfjNMuRdMX9UjhlSoHV2b2l4IHjTocGEdk80yqcrjguPOk1lBT6vIIIfCuWO1bwHw%2BpATTRbd2A2oVVjAbrLn%2FHdd3otpvoW4ym9XGnmOcUuOb2IVzpRdRo6ZDPu2%2FAyzUGIL6I4UZZypbZVoQ9xILYT1%2FPVljSDLCoTOOwHx8X2J8TKyGH2iNG1%2B8L%2F0cHKLE9wEUjMjaQuGKUhXcY%2FmXaPy3b%2Fv0BwmviVNx9vEKZMWSxJ8%2FTOKW8jYeJsWwj1d4hU%2Bvoqb8IJE6%2FqOM7o%2FF8txfDQI01ea99PFLp6KLq6ElIfmoM%2FlBCTAwxhruVIi6F5L%2BZKzQ1%2BOtinoIV4ts%2F%2FoSDXkTVmZVfe0OWuY0xlZ3962kXTYCDveStxM46AjchonmA9lx6wms1rFxXs3k8KFPo%2BnUoquPb3cy%2Fa7ueuKfB6YAIf62EwpFohS5607u8bwwlVPwTcq%2FH6215KtFnWCe2qrXIyMNSGo70GOqUB7cHBFjRdwJkVZ6sKI%2BM2RK%2FZeUaW8NwqM5E7IxPx4QowRb%2FHgcCDIQ2KkyzxjCibX5f5trS0VwtoQXlBo7GhekiBqoLn2D5emNszzskq4YHcehR7Gjz%2BFSfifWQxGb%2Bzf9lS1x4%2BfTJrYl9k%2B0A%2FRJZfiMJkCal%2BkKvmaDHRPhKyhlbL8jiyT%2F5TZ6561QT2WdRG8%2BQuYLTORtsT2veA%2BjYsfaRy&X-Amz-Signature=83c3939693cb429fe71763e4e371c5491d1c447e5d64630a3741f25e5c09a3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIUITQC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQv2g2y2nZxQU9t%2BHynecaxZbyu5PVpt4gcLEmWsUfhAiEA6YQIICTGraTPROMLurKrafrmqwQF%2FzYCV7hmKwq49ucqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FQLARJt1TBZlErjyrcAzxe4DJCZrOEnXKjrjAAgYFFw7xjFpPh1a1FxOtKiTMBc74HeSLDEgnFpn7aI9RtxeTb7U%2FIBlcQLq0tX9RFfPig9v%2F3GGiehg4IANJB6EZcreK0I1Tys2B32wMg64BooWotJmQ5Wz4A2rs%2BxG40DXIG2JpYsfjNMuRdMX9UjhlSoHV2b2l4IHjTocGEdk80yqcrjguPOk1lBT6vIIIfCuWO1bwHw%2BpATTRbd2A2oVVjAbrLn%2FHdd3otpvoW4ym9XGnmOcUuOb2IVzpRdRo6ZDPu2%2FAyzUGIL6I4UZZypbZVoQ9xILYT1%2FPVljSDLCoTOOwHx8X2J8TKyGH2iNG1%2B8L%2F0cHKLE9wEUjMjaQuGKUhXcY%2FmXaPy3b%2Fv0BwmviVNx9vEKZMWSxJ8%2FTOKW8jYeJsWwj1d4hU%2Bvoqb8IJE6%2FqOM7o%2FF8txfDQI01ea99PFLp6KLq6ElIfmoM%2FlBCTAwxhruVIi6F5L%2BZKzQ1%2BOtinoIV4ts%2F%2FoSDXkTVmZVfe0OWuY0xlZ3962kXTYCDveStxM46AjchonmA9lx6wms1rFxXs3k8KFPo%2BnUoquPb3cy%2Fa7ueuKfB6YAIf62EwpFohS5607u8bwwlVPwTcq%2FH6215KtFnWCe2qrXIyMNSGo70GOqUB7cHBFjRdwJkVZ6sKI%2BM2RK%2FZeUaW8NwqM5E7IxPx4QowRb%2FHgcCDIQ2KkyzxjCibX5f5trS0VwtoQXlBo7GhekiBqoLn2D5emNszzskq4YHcehR7Gjz%2BFSfifWQxGb%2Bzf9lS1x4%2BfTJrYl9k%2B0A%2FRJZfiMJkCal%2BkKvmaDHRPhKyhlbL8jiyT%2F5TZ6561QT2WdRG8%2BQuYLTORtsT2veA%2BjYsfaRy&X-Amz-Signature=a4e343b7da33156cbe1a136a893ca1ba3ac343da3ef3e27f69dc160cce95c18b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIUITQC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQv2g2y2nZxQU9t%2BHynecaxZbyu5PVpt4gcLEmWsUfhAiEA6YQIICTGraTPROMLurKrafrmqwQF%2FzYCV7hmKwq49ucqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FQLARJt1TBZlErjyrcAzxe4DJCZrOEnXKjrjAAgYFFw7xjFpPh1a1FxOtKiTMBc74HeSLDEgnFpn7aI9RtxeTb7U%2FIBlcQLq0tX9RFfPig9v%2F3GGiehg4IANJB6EZcreK0I1Tys2B32wMg64BooWotJmQ5Wz4A2rs%2BxG40DXIG2JpYsfjNMuRdMX9UjhlSoHV2b2l4IHjTocGEdk80yqcrjguPOk1lBT6vIIIfCuWO1bwHw%2BpATTRbd2A2oVVjAbrLn%2FHdd3otpvoW4ym9XGnmOcUuOb2IVzpRdRo6ZDPu2%2FAyzUGIL6I4UZZypbZVoQ9xILYT1%2FPVljSDLCoTOOwHx8X2J8TKyGH2iNG1%2B8L%2F0cHKLE9wEUjMjaQuGKUhXcY%2FmXaPy3b%2Fv0BwmviVNx9vEKZMWSxJ8%2FTOKW8jYeJsWwj1d4hU%2Bvoqb8IJE6%2FqOM7o%2FF8txfDQI01ea99PFLp6KLq6ElIfmoM%2FlBCTAwxhruVIi6F5L%2BZKzQ1%2BOtinoIV4ts%2F%2FoSDXkTVmZVfe0OWuY0xlZ3962kXTYCDveStxM46AjchonmA9lx6wms1rFxXs3k8KFPo%2BnUoquPb3cy%2Fa7ueuKfB6YAIf62EwpFohS5607u8bwwlVPwTcq%2FH6215KtFnWCe2qrXIyMNSGo70GOqUB7cHBFjRdwJkVZ6sKI%2BM2RK%2FZeUaW8NwqM5E7IxPx4QowRb%2FHgcCDIQ2KkyzxjCibX5f5trS0VwtoQXlBo7GhekiBqoLn2D5emNszzskq4YHcehR7Gjz%2BFSfifWQxGb%2Bzf9lS1x4%2BfTJrYl9k%2B0A%2FRJZfiMJkCal%2BkKvmaDHRPhKyhlbL8jiyT%2F5TZ6561QT2WdRG8%2BQuYLTORtsT2veA%2BjYsfaRy&X-Amz-Signature=29512cb2fd990168020cc354fd5ae2c8f7716a57e84707de9716cd0d161bec71&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIUITQC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQv2g2y2nZxQU9t%2BHynecaxZbyu5PVpt4gcLEmWsUfhAiEA6YQIICTGraTPROMLurKrafrmqwQF%2FzYCV7hmKwq49ucqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FQLARJt1TBZlErjyrcAzxe4DJCZrOEnXKjrjAAgYFFw7xjFpPh1a1FxOtKiTMBc74HeSLDEgnFpn7aI9RtxeTb7U%2FIBlcQLq0tX9RFfPig9v%2F3GGiehg4IANJB6EZcreK0I1Tys2B32wMg64BooWotJmQ5Wz4A2rs%2BxG40DXIG2JpYsfjNMuRdMX9UjhlSoHV2b2l4IHjTocGEdk80yqcrjguPOk1lBT6vIIIfCuWO1bwHw%2BpATTRbd2A2oVVjAbrLn%2FHdd3otpvoW4ym9XGnmOcUuOb2IVzpRdRo6ZDPu2%2FAyzUGIL6I4UZZypbZVoQ9xILYT1%2FPVljSDLCoTOOwHx8X2J8TKyGH2iNG1%2B8L%2F0cHKLE9wEUjMjaQuGKUhXcY%2FmXaPy3b%2Fv0BwmviVNx9vEKZMWSxJ8%2FTOKW8jYeJsWwj1d4hU%2Bvoqb8IJE6%2FqOM7o%2FF8txfDQI01ea99PFLp6KLq6ElIfmoM%2FlBCTAwxhruVIi6F5L%2BZKzQ1%2BOtinoIV4ts%2F%2FoSDXkTVmZVfe0OWuY0xlZ3962kXTYCDveStxM46AjchonmA9lx6wms1rFxXs3k8KFPo%2BnUoquPb3cy%2Fa7ueuKfB6YAIf62EwpFohS5607u8bwwlVPwTcq%2FH6215KtFnWCe2qrXIyMNSGo70GOqUB7cHBFjRdwJkVZ6sKI%2BM2RK%2FZeUaW8NwqM5E7IxPx4QowRb%2FHgcCDIQ2KkyzxjCibX5f5trS0VwtoQXlBo7GhekiBqoLn2D5emNszzskq4YHcehR7Gjz%2BFSfifWQxGb%2Bzf9lS1x4%2BfTJrYl9k%2B0A%2FRJZfiMJkCal%2BkKvmaDHRPhKyhlbL8jiyT%2F5TZ6561QT2WdRG8%2BQuYLTORtsT2veA%2BjYsfaRy&X-Amz-Signature=14ad0b8a1a455b2b8aea42ffeed4ece0b47a370e14130d1b4498050e0e9c2bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIUITQC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQv2g2y2nZxQU9t%2BHynecaxZbyu5PVpt4gcLEmWsUfhAiEA6YQIICTGraTPROMLurKrafrmqwQF%2FzYCV7hmKwq49ucqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FQLARJt1TBZlErjyrcAzxe4DJCZrOEnXKjrjAAgYFFw7xjFpPh1a1FxOtKiTMBc74HeSLDEgnFpn7aI9RtxeTb7U%2FIBlcQLq0tX9RFfPig9v%2F3GGiehg4IANJB6EZcreK0I1Tys2B32wMg64BooWotJmQ5Wz4A2rs%2BxG40DXIG2JpYsfjNMuRdMX9UjhlSoHV2b2l4IHjTocGEdk80yqcrjguPOk1lBT6vIIIfCuWO1bwHw%2BpATTRbd2A2oVVjAbrLn%2FHdd3otpvoW4ym9XGnmOcUuOb2IVzpRdRo6ZDPu2%2FAyzUGIL6I4UZZypbZVoQ9xILYT1%2FPVljSDLCoTOOwHx8X2J8TKyGH2iNG1%2B8L%2F0cHKLE9wEUjMjaQuGKUhXcY%2FmXaPy3b%2Fv0BwmviVNx9vEKZMWSxJ8%2FTOKW8jYeJsWwj1d4hU%2Bvoqb8IJE6%2FqOM7o%2FF8txfDQI01ea99PFLp6KLq6ElIfmoM%2FlBCTAwxhruVIi6F5L%2BZKzQ1%2BOtinoIV4ts%2F%2FoSDXkTVmZVfe0OWuY0xlZ3962kXTYCDveStxM46AjchonmA9lx6wms1rFxXs3k8KFPo%2BnUoquPb3cy%2Fa7ueuKfB6YAIf62EwpFohS5607u8bwwlVPwTcq%2FH6215KtFnWCe2qrXIyMNSGo70GOqUB7cHBFjRdwJkVZ6sKI%2BM2RK%2FZeUaW8NwqM5E7IxPx4QowRb%2FHgcCDIQ2KkyzxjCibX5f5trS0VwtoQXlBo7GhekiBqoLn2D5emNszzskq4YHcehR7Gjz%2BFSfifWQxGb%2Bzf9lS1x4%2BfTJrYl9k%2B0A%2FRJZfiMJkCal%2BkKvmaDHRPhKyhlbL8jiyT%2F5TZ6561QT2WdRG8%2BQuYLTORtsT2veA%2BjYsfaRy&X-Amz-Signature=89cb2cbf7ac71972f93e553051aee0b2d482620f0ff8481db5e50d398a71d874&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
