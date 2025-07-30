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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQCF7JA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqlnXzwU635WxRR%2FAdbMLPAYfr2LGokGbV5NrfChJ0LAIgJnm8eNWHkrjlKqz%2F46KmC7kmIAH0OqY1yotVbu2hp8cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPoIPAgt2QPp7D0nCrcA1IjtUUs1lJnqjI20qi2tiuVxt03K77ULq93Pm80anfuwnHsKKPoF17MyYfmR9YDQUUbfWUOMm9pq16f11NFlnQlzwrJ20h75z7zBPYa%2FNCmWe0fW9DNzBkSgeRxEXk4%2BKVwYwl7vbgrp9bioZy9DKDG8rjDpuOxWQsUYwUQU7u2qhleFIH%2B4nx7Fke%2FDmOPtLR95INJt75Px9%2FOV93hSvfVsYeGMu51Jx9k0ssWQZCSvg6m3nUR6ab3AI6%2B1D2KWV7pXRxHV7IdbuPSYPf49tcQKGuyI60ssJTCoQNO3BUqLWdc7REuYj1r7t0y7ncVeAabg7v1715kInnwdFicK0m8JxuxpYLy00SbpTGN1YBSh28cL%2Fqg6kC1HjO6QzBl27%2Fp5n1LDi2VgxNCvY0I1hoXOjBcR9bgg4%2Fy89zd6vxaaaxqoGA7ZeDecmZ7RFZdr6cvPZ4CFZELUnSiS%2BgK40XDBA0nzHcQ68uNhkp0o3g5Qgqe8FqNHgbMhKEvrQ1uVpxa3WpQy4P6vPDFcJz7ExMjCT8nNv1z%2BNrSijA%2FRa%2FE3Q0mzmQKEvZoj9H1mMYSlv7VDBnc%2B4LtHFxMyRcNY4Drtyngcc%2Fo0g2RRxjbKo4BB%2FXnZ31OHOPZc%2FGIMJLAp8QGOqUBi6dn8CvCwk37w%2BWwQpsJp9cAh2JWP5z8QUwCpKc84TED26S%2FepZM%2Bv1p92NqPbjrTsGGGRcdfXC7kH1s%2BNYqmmJUt6%2FALIZAJbddYT46viNUD25WFSn%2F4NWiQ7luJyPO%2Bkpwd1Yu%2B06RWuGgI5fIl2hREQpFVkhdAJlWuvC4WX4snd8bET9gZdVtyVlls7BRLDOV%2FcsIIEjP2K55GAhV7nBRZq1r&X-Amz-Signature=52c2c3914746a806cc53b3a2600671da7b8a0a7d01d96a5433f34440fd0e9c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQCF7JA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqlnXzwU635WxRR%2FAdbMLPAYfr2LGokGbV5NrfChJ0LAIgJnm8eNWHkrjlKqz%2F46KmC7kmIAH0OqY1yotVbu2hp8cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPoIPAgt2QPp7D0nCrcA1IjtUUs1lJnqjI20qi2tiuVxt03K77ULq93Pm80anfuwnHsKKPoF17MyYfmR9YDQUUbfWUOMm9pq16f11NFlnQlzwrJ20h75z7zBPYa%2FNCmWe0fW9DNzBkSgeRxEXk4%2BKVwYwl7vbgrp9bioZy9DKDG8rjDpuOxWQsUYwUQU7u2qhleFIH%2B4nx7Fke%2FDmOPtLR95INJt75Px9%2FOV93hSvfVsYeGMu51Jx9k0ssWQZCSvg6m3nUR6ab3AI6%2B1D2KWV7pXRxHV7IdbuPSYPf49tcQKGuyI60ssJTCoQNO3BUqLWdc7REuYj1r7t0y7ncVeAabg7v1715kInnwdFicK0m8JxuxpYLy00SbpTGN1YBSh28cL%2Fqg6kC1HjO6QzBl27%2Fp5n1LDi2VgxNCvY0I1hoXOjBcR9bgg4%2Fy89zd6vxaaaxqoGA7ZeDecmZ7RFZdr6cvPZ4CFZELUnSiS%2BgK40XDBA0nzHcQ68uNhkp0o3g5Qgqe8FqNHgbMhKEvrQ1uVpxa3WpQy4P6vPDFcJz7ExMjCT8nNv1z%2BNrSijA%2FRa%2FE3Q0mzmQKEvZoj9H1mMYSlv7VDBnc%2B4LtHFxMyRcNY4Drtyngcc%2Fo0g2RRxjbKo4BB%2FXnZ31OHOPZc%2FGIMJLAp8QGOqUBi6dn8CvCwk37w%2BWwQpsJp9cAh2JWP5z8QUwCpKc84TED26S%2FepZM%2Bv1p92NqPbjrTsGGGRcdfXC7kH1s%2BNYqmmJUt6%2FALIZAJbddYT46viNUD25WFSn%2F4NWiQ7luJyPO%2Bkpwd1Yu%2B06RWuGgI5fIl2hREQpFVkhdAJlWuvC4WX4snd8bET9gZdVtyVlls7BRLDOV%2FcsIIEjP2K55GAhV7nBRZq1r&X-Amz-Signature=33ef277a013a2de7937988820c04a23a2b0aff498777525c3031fd037c1c1f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQCF7JA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqlnXzwU635WxRR%2FAdbMLPAYfr2LGokGbV5NrfChJ0LAIgJnm8eNWHkrjlKqz%2F46KmC7kmIAH0OqY1yotVbu2hp8cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPoIPAgt2QPp7D0nCrcA1IjtUUs1lJnqjI20qi2tiuVxt03K77ULq93Pm80anfuwnHsKKPoF17MyYfmR9YDQUUbfWUOMm9pq16f11NFlnQlzwrJ20h75z7zBPYa%2FNCmWe0fW9DNzBkSgeRxEXk4%2BKVwYwl7vbgrp9bioZy9DKDG8rjDpuOxWQsUYwUQU7u2qhleFIH%2B4nx7Fke%2FDmOPtLR95INJt75Px9%2FOV93hSvfVsYeGMu51Jx9k0ssWQZCSvg6m3nUR6ab3AI6%2B1D2KWV7pXRxHV7IdbuPSYPf49tcQKGuyI60ssJTCoQNO3BUqLWdc7REuYj1r7t0y7ncVeAabg7v1715kInnwdFicK0m8JxuxpYLy00SbpTGN1YBSh28cL%2Fqg6kC1HjO6QzBl27%2Fp5n1LDi2VgxNCvY0I1hoXOjBcR9bgg4%2Fy89zd6vxaaaxqoGA7ZeDecmZ7RFZdr6cvPZ4CFZELUnSiS%2BgK40XDBA0nzHcQ68uNhkp0o3g5Qgqe8FqNHgbMhKEvrQ1uVpxa3WpQy4P6vPDFcJz7ExMjCT8nNv1z%2BNrSijA%2FRa%2FE3Q0mzmQKEvZoj9H1mMYSlv7VDBnc%2B4LtHFxMyRcNY4Drtyngcc%2Fo0g2RRxjbKo4BB%2FXnZ31OHOPZc%2FGIMJLAp8QGOqUBi6dn8CvCwk37w%2BWwQpsJp9cAh2JWP5z8QUwCpKc84TED26S%2FepZM%2Bv1p92NqPbjrTsGGGRcdfXC7kH1s%2BNYqmmJUt6%2FALIZAJbddYT46viNUD25WFSn%2F4NWiQ7luJyPO%2Bkpwd1Yu%2B06RWuGgI5fIl2hREQpFVkhdAJlWuvC4WX4snd8bET9gZdVtyVlls7BRLDOV%2FcsIIEjP2K55GAhV7nBRZq1r&X-Amz-Signature=cae6fd90044081db80be8b6b185bd9eac0dd38f70573cfdbfcb57207b0968813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQCF7JA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqlnXzwU635WxRR%2FAdbMLPAYfr2LGokGbV5NrfChJ0LAIgJnm8eNWHkrjlKqz%2F46KmC7kmIAH0OqY1yotVbu2hp8cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPoIPAgt2QPp7D0nCrcA1IjtUUs1lJnqjI20qi2tiuVxt03K77ULq93Pm80anfuwnHsKKPoF17MyYfmR9YDQUUbfWUOMm9pq16f11NFlnQlzwrJ20h75z7zBPYa%2FNCmWe0fW9DNzBkSgeRxEXk4%2BKVwYwl7vbgrp9bioZy9DKDG8rjDpuOxWQsUYwUQU7u2qhleFIH%2B4nx7Fke%2FDmOPtLR95INJt75Px9%2FOV93hSvfVsYeGMu51Jx9k0ssWQZCSvg6m3nUR6ab3AI6%2B1D2KWV7pXRxHV7IdbuPSYPf49tcQKGuyI60ssJTCoQNO3BUqLWdc7REuYj1r7t0y7ncVeAabg7v1715kInnwdFicK0m8JxuxpYLy00SbpTGN1YBSh28cL%2Fqg6kC1HjO6QzBl27%2Fp5n1LDi2VgxNCvY0I1hoXOjBcR9bgg4%2Fy89zd6vxaaaxqoGA7ZeDecmZ7RFZdr6cvPZ4CFZELUnSiS%2BgK40XDBA0nzHcQ68uNhkp0o3g5Qgqe8FqNHgbMhKEvrQ1uVpxa3WpQy4P6vPDFcJz7ExMjCT8nNv1z%2BNrSijA%2FRa%2FE3Q0mzmQKEvZoj9H1mMYSlv7VDBnc%2B4LtHFxMyRcNY4Drtyngcc%2Fo0g2RRxjbKo4BB%2FXnZ31OHOPZc%2FGIMJLAp8QGOqUBi6dn8CvCwk37w%2BWwQpsJp9cAh2JWP5z8QUwCpKc84TED26S%2FepZM%2Bv1p92NqPbjrTsGGGRcdfXC7kH1s%2BNYqmmJUt6%2FALIZAJbddYT46viNUD25WFSn%2F4NWiQ7luJyPO%2Bkpwd1Yu%2B06RWuGgI5fIl2hREQpFVkhdAJlWuvC4WX4snd8bET9gZdVtyVlls7BRLDOV%2FcsIIEjP2K55GAhV7nBRZq1r&X-Amz-Signature=85f9eb35672c82af38ec97cb974bb4c684135f7450736573eba2b8889d256268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQCF7JA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqlnXzwU635WxRR%2FAdbMLPAYfr2LGokGbV5NrfChJ0LAIgJnm8eNWHkrjlKqz%2F46KmC7kmIAH0OqY1yotVbu2hp8cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPoIPAgt2QPp7D0nCrcA1IjtUUs1lJnqjI20qi2tiuVxt03K77ULq93Pm80anfuwnHsKKPoF17MyYfmR9YDQUUbfWUOMm9pq16f11NFlnQlzwrJ20h75z7zBPYa%2FNCmWe0fW9DNzBkSgeRxEXk4%2BKVwYwl7vbgrp9bioZy9DKDG8rjDpuOxWQsUYwUQU7u2qhleFIH%2B4nx7Fke%2FDmOPtLR95INJt75Px9%2FOV93hSvfVsYeGMu51Jx9k0ssWQZCSvg6m3nUR6ab3AI6%2B1D2KWV7pXRxHV7IdbuPSYPf49tcQKGuyI60ssJTCoQNO3BUqLWdc7REuYj1r7t0y7ncVeAabg7v1715kInnwdFicK0m8JxuxpYLy00SbpTGN1YBSh28cL%2Fqg6kC1HjO6QzBl27%2Fp5n1LDi2VgxNCvY0I1hoXOjBcR9bgg4%2Fy89zd6vxaaaxqoGA7ZeDecmZ7RFZdr6cvPZ4CFZELUnSiS%2BgK40XDBA0nzHcQ68uNhkp0o3g5Qgqe8FqNHgbMhKEvrQ1uVpxa3WpQy4P6vPDFcJz7ExMjCT8nNv1z%2BNrSijA%2FRa%2FE3Q0mzmQKEvZoj9H1mMYSlv7VDBnc%2B4LtHFxMyRcNY4Drtyngcc%2Fo0g2RRxjbKo4BB%2FXnZ31OHOPZc%2FGIMJLAp8QGOqUBi6dn8CvCwk37w%2BWwQpsJp9cAh2JWP5z8QUwCpKc84TED26S%2FepZM%2Bv1p92NqPbjrTsGGGRcdfXC7kH1s%2BNYqmmJUt6%2FALIZAJbddYT46viNUD25WFSn%2F4NWiQ7luJyPO%2Bkpwd1Yu%2B06RWuGgI5fIl2hREQpFVkhdAJlWuvC4WX4snd8bET9gZdVtyVlls7BRLDOV%2FcsIIEjP2K55GAhV7nBRZq1r&X-Amz-Signature=53ee9602d7bcbbaf35e6a530e35fc0fe58241a5fc41ab6d3e1bb6a2f91e0474c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
