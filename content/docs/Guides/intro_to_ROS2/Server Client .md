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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMGN7II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGDbvkinE95ZaFIXxey8aoqX7fgG%2FLhHghdrbIQQR%2B%2F8AiEAmpD%2BoJPvNFpNeIUBujW9xwI%2FR%2F1vMb1NnOF6nV8%2BDVEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNf3okv9N27QzG00gircAwVj%2FdpCXoYrydTOcw3SwgLlidTYrhgZnGS1B9SbwN9rx8tFYuQTpV12WDov0uOq4k7oWXgjBCx%2F4IpRJoaFsb6jBokeMxI87h9D4qv7453KjRcT4T4zAvWmpbAckVBrE2Tp%2FmkRm9DG2P%2FsjZe%2BuMc9XtBUmufGCrM4CyGo0OZTEdUQ%2BmDwaqQxL4UsAlCQ9sSIwTupl9uC09VEj108T5SoMm0YWqTCtoNJs9C8adVBfgb0eSTZ4nL%2Fg4sIIvVeF0NnXLfJB%2BkNr088mnGsIIgiRxGP3pb%2B42Ajfy0PA3SveSUK6f6Ep9icqLwIR%2F4P2QcqWlq94oZhooK4sb1Y5xSN%2FaK9hIgzrnfYFqGVut1eG927BPU3KDw8x6d%2Bh2RSq2rckfG086VbfbrhTY3rM88%2FODsmgbeRYZdwLGs0M8gF0FLU2C%2F34lqzH4WABQJeJA6zCLimGous%2BYxJN481I23o0iwzDdfC%2FTwgKy6c3%2FIaWadRV3mRcbVfEI5eLuwa1HcM6BI5J0nXBLE5zAsd2rsE%2FHOhD7h4SAxlBSmWUKHiTeJDE%2FZfB9FKSYoCEaCxVMxzGkWdsw9OAK0lyKetLH651b1Bzdm4ny3PlBBxVpC7uZMrx52tRgd8vPtGMJv%2Bxb0GOqUBK7zR1a8nZKIbBbYX59z5nkRFwCGCfD6ft%2FYH211bi5OwT1YYv7dfNuwLfue3ly51dVSxLg1Emix6EU7b%2FfgzruuO%2B%2FQ4t68AY0Bw4FsbnzyVL0vml8kxlYSdaiH40q6W9OyLPUxpt4UeNz%2BOPgSTTOthNnfwll6lNlGbYSNqdj6b6B%2BEVxO6s1W715V27eBLRctOyuYvlejOot9jlaVHSeXyFCgE&X-Amz-Signature=3d480b14be970fead16b0ee4b81ead182deb7755de6ec9a02ae87ca3cfe24709&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMGN7II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGDbvkinE95ZaFIXxey8aoqX7fgG%2FLhHghdrbIQQR%2B%2F8AiEAmpD%2BoJPvNFpNeIUBujW9xwI%2FR%2F1vMb1NnOF6nV8%2BDVEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNf3okv9N27QzG00gircAwVj%2FdpCXoYrydTOcw3SwgLlidTYrhgZnGS1B9SbwN9rx8tFYuQTpV12WDov0uOq4k7oWXgjBCx%2F4IpRJoaFsb6jBokeMxI87h9D4qv7453KjRcT4T4zAvWmpbAckVBrE2Tp%2FmkRm9DG2P%2FsjZe%2BuMc9XtBUmufGCrM4CyGo0OZTEdUQ%2BmDwaqQxL4UsAlCQ9sSIwTupl9uC09VEj108T5SoMm0YWqTCtoNJs9C8adVBfgb0eSTZ4nL%2Fg4sIIvVeF0NnXLfJB%2BkNr088mnGsIIgiRxGP3pb%2B42Ajfy0PA3SveSUK6f6Ep9icqLwIR%2F4P2QcqWlq94oZhooK4sb1Y5xSN%2FaK9hIgzrnfYFqGVut1eG927BPU3KDw8x6d%2Bh2RSq2rckfG086VbfbrhTY3rM88%2FODsmgbeRYZdwLGs0M8gF0FLU2C%2F34lqzH4WABQJeJA6zCLimGous%2BYxJN481I23o0iwzDdfC%2FTwgKy6c3%2FIaWadRV3mRcbVfEI5eLuwa1HcM6BI5J0nXBLE5zAsd2rsE%2FHOhD7h4SAxlBSmWUKHiTeJDE%2FZfB9FKSYoCEaCxVMxzGkWdsw9OAK0lyKetLH651b1Bzdm4ny3PlBBxVpC7uZMrx52tRgd8vPtGMJv%2Bxb0GOqUBK7zR1a8nZKIbBbYX59z5nkRFwCGCfD6ft%2FYH211bi5OwT1YYv7dfNuwLfue3ly51dVSxLg1Emix6EU7b%2FfgzruuO%2B%2FQ4t68AY0Bw4FsbnzyVL0vml8kxlYSdaiH40q6W9OyLPUxpt4UeNz%2BOPgSTTOthNnfwll6lNlGbYSNqdj6b6B%2BEVxO6s1W715V27eBLRctOyuYvlejOot9jlaVHSeXyFCgE&X-Amz-Signature=73f30e0747f5c94ed11d4b9bf1cf1e896cba2827e11e7b00ab18a95fc39bfe7e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMGN7II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGDbvkinE95ZaFIXxey8aoqX7fgG%2FLhHghdrbIQQR%2B%2F8AiEAmpD%2BoJPvNFpNeIUBujW9xwI%2FR%2F1vMb1NnOF6nV8%2BDVEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNf3okv9N27QzG00gircAwVj%2FdpCXoYrydTOcw3SwgLlidTYrhgZnGS1B9SbwN9rx8tFYuQTpV12WDov0uOq4k7oWXgjBCx%2F4IpRJoaFsb6jBokeMxI87h9D4qv7453KjRcT4T4zAvWmpbAckVBrE2Tp%2FmkRm9DG2P%2FsjZe%2BuMc9XtBUmufGCrM4CyGo0OZTEdUQ%2BmDwaqQxL4UsAlCQ9sSIwTupl9uC09VEj108T5SoMm0YWqTCtoNJs9C8adVBfgb0eSTZ4nL%2Fg4sIIvVeF0NnXLfJB%2BkNr088mnGsIIgiRxGP3pb%2B42Ajfy0PA3SveSUK6f6Ep9icqLwIR%2F4P2QcqWlq94oZhooK4sb1Y5xSN%2FaK9hIgzrnfYFqGVut1eG927BPU3KDw8x6d%2Bh2RSq2rckfG086VbfbrhTY3rM88%2FODsmgbeRYZdwLGs0M8gF0FLU2C%2F34lqzH4WABQJeJA6zCLimGous%2BYxJN481I23o0iwzDdfC%2FTwgKy6c3%2FIaWadRV3mRcbVfEI5eLuwa1HcM6BI5J0nXBLE5zAsd2rsE%2FHOhD7h4SAxlBSmWUKHiTeJDE%2FZfB9FKSYoCEaCxVMxzGkWdsw9OAK0lyKetLH651b1Bzdm4ny3PlBBxVpC7uZMrx52tRgd8vPtGMJv%2Bxb0GOqUBK7zR1a8nZKIbBbYX59z5nkRFwCGCfD6ft%2FYH211bi5OwT1YYv7dfNuwLfue3ly51dVSxLg1Emix6EU7b%2FfgzruuO%2B%2FQ4t68AY0Bw4FsbnzyVL0vml8kxlYSdaiH40q6W9OyLPUxpt4UeNz%2BOPgSTTOthNnfwll6lNlGbYSNqdj6b6B%2BEVxO6s1W715V27eBLRctOyuYvlejOot9jlaVHSeXyFCgE&X-Amz-Signature=999487814b07238423d0abb00108eb64f9c21d7b3ddace1767b81fda7a5da61e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMGN7II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGDbvkinE95ZaFIXxey8aoqX7fgG%2FLhHghdrbIQQR%2B%2F8AiEAmpD%2BoJPvNFpNeIUBujW9xwI%2FR%2F1vMb1NnOF6nV8%2BDVEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNf3okv9N27QzG00gircAwVj%2FdpCXoYrydTOcw3SwgLlidTYrhgZnGS1B9SbwN9rx8tFYuQTpV12WDov0uOq4k7oWXgjBCx%2F4IpRJoaFsb6jBokeMxI87h9D4qv7453KjRcT4T4zAvWmpbAckVBrE2Tp%2FmkRm9DG2P%2FsjZe%2BuMc9XtBUmufGCrM4CyGo0OZTEdUQ%2BmDwaqQxL4UsAlCQ9sSIwTupl9uC09VEj108T5SoMm0YWqTCtoNJs9C8adVBfgb0eSTZ4nL%2Fg4sIIvVeF0NnXLfJB%2BkNr088mnGsIIgiRxGP3pb%2B42Ajfy0PA3SveSUK6f6Ep9icqLwIR%2F4P2QcqWlq94oZhooK4sb1Y5xSN%2FaK9hIgzrnfYFqGVut1eG927BPU3KDw8x6d%2Bh2RSq2rckfG086VbfbrhTY3rM88%2FODsmgbeRYZdwLGs0M8gF0FLU2C%2F34lqzH4WABQJeJA6zCLimGous%2BYxJN481I23o0iwzDdfC%2FTwgKy6c3%2FIaWadRV3mRcbVfEI5eLuwa1HcM6BI5J0nXBLE5zAsd2rsE%2FHOhD7h4SAxlBSmWUKHiTeJDE%2FZfB9FKSYoCEaCxVMxzGkWdsw9OAK0lyKetLH651b1Bzdm4ny3PlBBxVpC7uZMrx52tRgd8vPtGMJv%2Bxb0GOqUBK7zR1a8nZKIbBbYX59z5nkRFwCGCfD6ft%2FYH211bi5OwT1YYv7dfNuwLfue3ly51dVSxLg1Emix6EU7b%2FfgzruuO%2B%2FQ4t68AY0Bw4FsbnzyVL0vml8kxlYSdaiH40q6W9OyLPUxpt4UeNz%2BOPgSTTOthNnfwll6lNlGbYSNqdj6b6B%2BEVxO6s1W715V27eBLRctOyuYvlejOot9jlaVHSeXyFCgE&X-Amz-Signature=835f69c77837bb9f010bee7230b5600ee8516c7f31bda0b6b20b65cfcd1e7d39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMGN7II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGDbvkinE95ZaFIXxey8aoqX7fgG%2FLhHghdrbIQQR%2B%2F8AiEAmpD%2BoJPvNFpNeIUBujW9xwI%2FR%2F1vMb1NnOF6nV8%2BDVEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNf3okv9N27QzG00gircAwVj%2FdpCXoYrydTOcw3SwgLlidTYrhgZnGS1B9SbwN9rx8tFYuQTpV12WDov0uOq4k7oWXgjBCx%2F4IpRJoaFsb6jBokeMxI87h9D4qv7453KjRcT4T4zAvWmpbAckVBrE2Tp%2FmkRm9DG2P%2FsjZe%2BuMc9XtBUmufGCrM4CyGo0OZTEdUQ%2BmDwaqQxL4UsAlCQ9sSIwTupl9uC09VEj108T5SoMm0YWqTCtoNJs9C8adVBfgb0eSTZ4nL%2Fg4sIIvVeF0NnXLfJB%2BkNr088mnGsIIgiRxGP3pb%2B42Ajfy0PA3SveSUK6f6Ep9icqLwIR%2F4P2QcqWlq94oZhooK4sb1Y5xSN%2FaK9hIgzrnfYFqGVut1eG927BPU3KDw8x6d%2Bh2RSq2rckfG086VbfbrhTY3rM88%2FODsmgbeRYZdwLGs0M8gF0FLU2C%2F34lqzH4WABQJeJA6zCLimGous%2BYxJN481I23o0iwzDdfC%2FTwgKy6c3%2FIaWadRV3mRcbVfEI5eLuwa1HcM6BI5J0nXBLE5zAsd2rsE%2FHOhD7h4SAxlBSmWUKHiTeJDE%2FZfB9FKSYoCEaCxVMxzGkWdsw9OAK0lyKetLH651b1Bzdm4ny3PlBBxVpC7uZMrx52tRgd8vPtGMJv%2Bxb0GOqUBK7zR1a8nZKIbBbYX59z5nkRFwCGCfD6ft%2FYH211bi5OwT1YYv7dfNuwLfue3ly51dVSxLg1Emix6EU7b%2FfgzruuO%2B%2FQ4t68AY0Bw4FsbnzyVL0vml8kxlYSdaiH40q6W9OyLPUxpt4UeNz%2BOPgSTTOthNnfwll6lNlGbYSNqdj6b6B%2BEVxO6s1W715V27eBLRctOyuYvlejOot9jlaVHSeXyFCgE&X-Amz-Signature=1121a32ee2cda46e32309dd80b1048d24efa2c6cfcf0fa0ae9d091582ebec6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
