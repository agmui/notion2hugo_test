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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JC4ZO7U%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCuqtmXXNiCzl%2BWALkx29j4MkHUpvtt%2FTSAVwOLe42I9AIgAyM7QoQYCw3WDQMJFHtPPLxQnK6jB5jvmfWiJ6txg0Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDlEEsMeXhHuv4CuLyrcA49J2OYT1CVPWdoCfT9mwxmk1qOlv1H6Y6FWxiQ%2Btu6LK19uvjDxW9Ph2EHsVP1wAuPbFj2kOUbBH%2FlqJiP%2FmxfAFAYos0wSuHjhs9unJejY83gIXqmxeExE%2FLXUV8cHfZqzL3AlS1ZQwjlWdsgXx8i3l2K9y%2B60iZ76eQZP3CSfHECR7Gt93PI3QljKdkiOcIbr6mrlKbeIwU9j1wx8KCrhsF3vyEcASKsotwfOdVTi7FolYMGFAT9mz8NIeWele%2FEW3RHRW%2FY6gJtTWv%2FTux60Mt2KX8%2Bzr9qBp3UwPbY8cBD1DpSvZEH4Xbcj0sm7DOLxTj6qAqvxKn8wImaW5uehbQgttbso8dm0ULeIRjsnHdy6V1tmSLvMO3ZiJXP1DDmKY62I8VhsWk4EecE7CKPN%2Bm%2BRa%2FvBpTAcsjbmRKCdf2m4nTT5J2F9GdQGARvlPk%2BpHEJq5Lpf1BF%2FamszH8oMf1Pp046SgXnT3ta0e7kd1YigIcKpEFLY7Rf5zHGfE8GW%2FbOwbt%2FDPMN7b54nQOkKo8eZNg9I4cmeLOVXtxu175kaYoD%2FbTgKNho0l0tQdo5SB00dzYD9u7tEDS%2BU9e30FlvzOwyvQzgfbM03npm0sNa22a9c2fSUG2n2MJHBpMMGOqUBUlhMbR8bYYNkyKeumXIPYdnnbnRZk0jJX50L5rjxNGKIMhzqbinbi1V5VqG1BBWGpXVf%2FCWIYhxN0CBUFoZPA%2FoKSHaM29E4t9JKc7tgicdUvX%2BZtJl%2B3D4sw8a%2FcjPtLdDU%2FGIxbsMgVBHRglYHUahrxki80T5mDiZUSne0l%2BUNpPkq8CMp1Us2cA9Mz%2FjbC%2BQpjGW1nq4ZWurmZFP37RDEqN3p&X-Amz-Signature=a4a7dcc745019fcb20259443781265226e471d08c7ce0f3d543467afc9b48782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JC4ZO7U%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCuqtmXXNiCzl%2BWALkx29j4MkHUpvtt%2FTSAVwOLe42I9AIgAyM7QoQYCw3WDQMJFHtPPLxQnK6jB5jvmfWiJ6txg0Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDlEEsMeXhHuv4CuLyrcA49J2OYT1CVPWdoCfT9mwxmk1qOlv1H6Y6FWxiQ%2Btu6LK19uvjDxW9Ph2EHsVP1wAuPbFj2kOUbBH%2FlqJiP%2FmxfAFAYos0wSuHjhs9unJejY83gIXqmxeExE%2FLXUV8cHfZqzL3AlS1ZQwjlWdsgXx8i3l2K9y%2B60iZ76eQZP3CSfHECR7Gt93PI3QljKdkiOcIbr6mrlKbeIwU9j1wx8KCrhsF3vyEcASKsotwfOdVTi7FolYMGFAT9mz8NIeWele%2FEW3RHRW%2FY6gJtTWv%2FTux60Mt2KX8%2Bzr9qBp3UwPbY8cBD1DpSvZEH4Xbcj0sm7DOLxTj6qAqvxKn8wImaW5uehbQgttbso8dm0ULeIRjsnHdy6V1tmSLvMO3ZiJXP1DDmKY62I8VhsWk4EecE7CKPN%2Bm%2BRa%2FvBpTAcsjbmRKCdf2m4nTT5J2F9GdQGARvlPk%2BpHEJq5Lpf1BF%2FamszH8oMf1Pp046SgXnT3ta0e7kd1YigIcKpEFLY7Rf5zHGfE8GW%2FbOwbt%2FDPMN7b54nQOkKo8eZNg9I4cmeLOVXtxu175kaYoD%2FbTgKNho0l0tQdo5SB00dzYD9u7tEDS%2BU9e30FlvzOwyvQzgfbM03npm0sNa22a9c2fSUG2n2MJHBpMMGOqUBUlhMbR8bYYNkyKeumXIPYdnnbnRZk0jJX50L5rjxNGKIMhzqbinbi1V5VqG1BBWGpXVf%2FCWIYhxN0CBUFoZPA%2FoKSHaM29E4t9JKc7tgicdUvX%2BZtJl%2B3D4sw8a%2FcjPtLdDU%2FGIxbsMgVBHRglYHUahrxki80T5mDiZUSne0l%2BUNpPkq8CMp1Us2cA9Mz%2FjbC%2BQpjGW1nq4ZWurmZFP37RDEqN3p&X-Amz-Signature=1c8fa670de45bce7436357264018dc5769718a0e5f35ae340d2ce86544856f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JC4ZO7U%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCuqtmXXNiCzl%2BWALkx29j4MkHUpvtt%2FTSAVwOLe42I9AIgAyM7QoQYCw3WDQMJFHtPPLxQnK6jB5jvmfWiJ6txg0Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDlEEsMeXhHuv4CuLyrcA49J2OYT1CVPWdoCfT9mwxmk1qOlv1H6Y6FWxiQ%2Btu6LK19uvjDxW9Ph2EHsVP1wAuPbFj2kOUbBH%2FlqJiP%2FmxfAFAYos0wSuHjhs9unJejY83gIXqmxeExE%2FLXUV8cHfZqzL3AlS1ZQwjlWdsgXx8i3l2K9y%2B60iZ76eQZP3CSfHECR7Gt93PI3QljKdkiOcIbr6mrlKbeIwU9j1wx8KCrhsF3vyEcASKsotwfOdVTi7FolYMGFAT9mz8NIeWele%2FEW3RHRW%2FY6gJtTWv%2FTux60Mt2KX8%2Bzr9qBp3UwPbY8cBD1DpSvZEH4Xbcj0sm7DOLxTj6qAqvxKn8wImaW5uehbQgttbso8dm0ULeIRjsnHdy6V1tmSLvMO3ZiJXP1DDmKY62I8VhsWk4EecE7CKPN%2Bm%2BRa%2FvBpTAcsjbmRKCdf2m4nTT5J2F9GdQGARvlPk%2BpHEJq5Lpf1BF%2FamszH8oMf1Pp046SgXnT3ta0e7kd1YigIcKpEFLY7Rf5zHGfE8GW%2FbOwbt%2FDPMN7b54nQOkKo8eZNg9I4cmeLOVXtxu175kaYoD%2FbTgKNho0l0tQdo5SB00dzYD9u7tEDS%2BU9e30FlvzOwyvQzgfbM03npm0sNa22a9c2fSUG2n2MJHBpMMGOqUBUlhMbR8bYYNkyKeumXIPYdnnbnRZk0jJX50L5rjxNGKIMhzqbinbi1V5VqG1BBWGpXVf%2FCWIYhxN0CBUFoZPA%2FoKSHaM29E4t9JKc7tgicdUvX%2BZtJl%2B3D4sw8a%2FcjPtLdDU%2FGIxbsMgVBHRglYHUahrxki80T5mDiZUSne0l%2BUNpPkq8CMp1Us2cA9Mz%2FjbC%2BQpjGW1nq4ZWurmZFP37RDEqN3p&X-Amz-Signature=844f5d594860c93514ab33e134ac8b2714facfae9c51ef4a4ccf7df67dcf03fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JC4ZO7U%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCuqtmXXNiCzl%2BWALkx29j4MkHUpvtt%2FTSAVwOLe42I9AIgAyM7QoQYCw3WDQMJFHtPPLxQnK6jB5jvmfWiJ6txg0Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDlEEsMeXhHuv4CuLyrcA49J2OYT1CVPWdoCfT9mwxmk1qOlv1H6Y6FWxiQ%2Btu6LK19uvjDxW9Ph2EHsVP1wAuPbFj2kOUbBH%2FlqJiP%2FmxfAFAYos0wSuHjhs9unJejY83gIXqmxeExE%2FLXUV8cHfZqzL3AlS1ZQwjlWdsgXx8i3l2K9y%2B60iZ76eQZP3CSfHECR7Gt93PI3QljKdkiOcIbr6mrlKbeIwU9j1wx8KCrhsF3vyEcASKsotwfOdVTi7FolYMGFAT9mz8NIeWele%2FEW3RHRW%2FY6gJtTWv%2FTux60Mt2KX8%2Bzr9qBp3UwPbY8cBD1DpSvZEH4Xbcj0sm7DOLxTj6qAqvxKn8wImaW5uehbQgttbso8dm0ULeIRjsnHdy6V1tmSLvMO3ZiJXP1DDmKY62I8VhsWk4EecE7CKPN%2Bm%2BRa%2FvBpTAcsjbmRKCdf2m4nTT5J2F9GdQGARvlPk%2BpHEJq5Lpf1BF%2FamszH8oMf1Pp046SgXnT3ta0e7kd1YigIcKpEFLY7Rf5zHGfE8GW%2FbOwbt%2FDPMN7b54nQOkKo8eZNg9I4cmeLOVXtxu175kaYoD%2FbTgKNho0l0tQdo5SB00dzYD9u7tEDS%2BU9e30FlvzOwyvQzgfbM03npm0sNa22a9c2fSUG2n2MJHBpMMGOqUBUlhMbR8bYYNkyKeumXIPYdnnbnRZk0jJX50L5rjxNGKIMhzqbinbi1V5VqG1BBWGpXVf%2FCWIYhxN0CBUFoZPA%2FoKSHaM29E4t9JKc7tgicdUvX%2BZtJl%2B3D4sw8a%2FcjPtLdDU%2FGIxbsMgVBHRglYHUahrxki80T5mDiZUSne0l%2BUNpPkq8CMp1Us2cA9Mz%2FjbC%2BQpjGW1nq4ZWurmZFP37RDEqN3p&X-Amz-Signature=755a971ff08d41a5f9e2fa3b29d545066c4c439890b69c130ae91e0a0c836d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JC4ZO7U%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCuqtmXXNiCzl%2BWALkx29j4MkHUpvtt%2FTSAVwOLe42I9AIgAyM7QoQYCw3WDQMJFHtPPLxQnK6jB5jvmfWiJ6txg0Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDlEEsMeXhHuv4CuLyrcA49J2OYT1CVPWdoCfT9mwxmk1qOlv1H6Y6FWxiQ%2Btu6LK19uvjDxW9Ph2EHsVP1wAuPbFj2kOUbBH%2FlqJiP%2FmxfAFAYos0wSuHjhs9unJejY83gIXqmxeExE%2FLXUV8cHfZqzL3AlS1ZQwjlWdsgXx8i3l2K9y%2B60iZ76eQZP3CSfHECR7Gt93PI3QljKdkiOcIbr6mrlKbeIwU9j1wx8KCrhsF3vyEcASKsotwfOdVTi7FolYMGFAT9mz8NIeWele%2FEW3RHRW%2FY6gJtTWv%2FTux60Mt2KX8%2Bzr9qBp3UwPbY8cBD1DpSvZEH4Xbcj0sm7DOLxTj6qAqvxKn8wImaW5uehbQgttbso8dm0ULeIRjsnHdy6V1tmSLvMO3ZiJXP1DDmKY62I8VhsWk4EecE7CKPN%2Bm%2BRa%2FvBpTAcsjbmRKCdf2m4nTT5J2F9GdQGARvlPk%2BpHEJq5Lpf1BF%2FamszH8oMf1Pp046SgXnT3ta0e7kd1YigIcKpEFLY7Rf5zHGfE8GW%2FbOwbt%2FDPMN7b54nQOkKo8eZNg9I4cmeLOVXtxu175kaYoD%2FbTgKNho0l0tQdo5SB00dzYD9u7tEDS%2BU9e30FlvzOwyvQzgfbM03npm0sNa22a9c2fSUG2n2MJHBpMMGOqUBUlhMbR8bYYNkyKeumXIPYdnnbnRZk0jJX50L5rjxNGKIMhzqbinbi1V5VqG1BBWGpXVf%2FCWIYhxN0CBUFoZPA%2FoKSHaM29E4t9JKc7tgicdUvX%2BZtJl%2B3D4sw8a%2FcjPtLdDU%2FGIxbsMgVBHRglYHUahrxki80T5mDiZUSne0l%2BUNpPkq8CMp1Us2cA9Mz%2FjbC%2BQpjGW1nq4ZWurmZFP37RDEqN3p&X-Amz-Signature=64292880bc39827cb5a1d1c19866fd212e0416a5eefb569415ab0bddc5a02e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
