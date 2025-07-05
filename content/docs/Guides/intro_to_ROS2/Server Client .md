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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT63C7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA8Dn5GPCnqGNGNf2GKIYkFyjJNQWLcnTJu9KKde%2Bqh1AiEAriEbRGyrCUbI6f0vMhEbCV55dz0OeWDhrWgjD2yMQDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF71PhWk%2BMjT7LPv6ircAwu21K8mKJlsnCwc0XBlhGy8tImUPirl9cGJmpaSoZbWujBF5DSHrY6zRMXdwPZNFFNSLiJg99QrwYVtlj0qdVFbTthlLtCyuA1WMBA7owFqYviUUjHn%2BPQWgVPt6tKeRLS1LmIGNNP1Ems%2FH7Y%2BVle3%2F4cjNBH8tpDO2dyR8FaJCpUndFbwLplkUbGE3v%2Fq2Qs4SLsCAQ58gjNvEXBn1NrU8%2B%2Bdqk3OYm%2FIDdp1x1tOPR3u%2Fr6VKzvoeZnb5z1bk1RRTHz%2FDYxbaJJP9Yb2ESVDGHFexljWOlIrUYopdD4cA1haRraoRCCw6U%2BHnvIfzD80MZYF0EUMlBhH%2B0s6uE7JlYgrOlcmHFzZ4HY8F1w4vaSchI8KIQAnromnPbtInjwrJalXTTpisrWqykwY9nG%2Bg3hUlyuMQByJxPuE%2FwL4NfRieJpztDNh6NQHLhkO1RBVTsU%2BClUhl35sStO3LnIJwCUmvVt%2FYst%2FWBVfpFlUgwfiOBkOR5z0THJypo5IjyKncqqj%2F1sTxx6AV5CWJ1i%2Fi9j1xkqeYN2ITNslmhmLqY%2BuYqquecnPR%2FYGtXXZHShYJLHjBwwy%2B1ny7%2FrdizwOVvlt88%2BfgEIvHKwPm0oh9OpIWc%2BBVk9uyQmIMI6FosMGOqUB8dsTOMJ8p4JLjeV4wSVTf%2BjML7%2Fd5V7NSLL3qjEE0Y4fgVyQG39wHCXOobFT%2BV3LTo1EbhXCJlmuqbeqRTxUP8eoePut6wSLhBj1PQxa88BjI7lPCbtZvejtz3cqbFxiN1lgw427y6wIyjZxzC2dxiHzAwf19%2BEkpqWinVeGUvUQHJOejRCKzRSKX%2By2VEQJSTZDaw3moR%2F3lGZGIfmitTwBUCnx&X-Amz-Signature=b122a27578b24e80391474be9f90f1989681743865cd9983e95d683ff165a2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT63C7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA8Dn5GPCnqGNGNf2GKIYkFyjJNQWLcnTJu9KKde%2Bqh1AiEAriEbRGyrCUbI6f0vMhEbCV55dz0OeWDhrWgjD2yMQDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF71PhWk%2BMjT7LPv6ircAwu21K8mKJlsnCwc0XBlhGy8tImUPirl9cGJmpaSoZbWujBF5DSHrY6zRMXdwPZNFFNSLiJg99QrwYVtlj0qdVFbTthlLtCyuA1WMBA7owFqYviUUjHn%2BPQWgVPt6tKeRLS1LmIGNNP1Ems%2FH7Y%2BVle3%2F4cjNBH8tpDO2dyR8FaJCpUndFbwLplkUbGE3v%2Fq2Qs4SLsCAQ58gjNvEXBn1NrU8%2B%2Bdqk3OYm%2FIDdp1x1tOPR3u%2Fr6VKzvoeZnb5z1bk1RRTHz%2FDYxbaJJP9Yb2ESVDGHFexljWOlIrUYopdD4cA1haRraoRCCw6U%2BHnvIfzD80MZYF0EUMlBhH%2B0s6uE7JlYgrOlcmHFzZ4HY8F1w4vaSchI8KIQAnromnPbtInjwrJalXTTpisrWqykwY9nG%2Bg3hUlyuMQByJxPuE%2FwL4NfRieJpztDNh6NQHLhkO1RBVTsU%2BClUhl35sStO3LnIJwCUmvVt%2FYst%2FWBVfpFlUgwfiOBkOR5z0THJypo5IjyKncqqj%2F1sTxx6AV5CWJ1i%2Fi9j1xkqeYN2ITNslmhmLqY%2BuYqquecnPR%2FYGtXXZHShYJLHjBwwy%2B1ny7%2FrdizwOVvlt88%2BfgEIvHKwPm0oh9OpIWc%2BBVk9uyQmIMI6FosMGOqUB8dsTOMJ8p4JLjeV4wSVTf%2BjML7%2Fd5V7NSLL3qjEE0Y4fgVyQG39wHCXOobFT%2BV3LTo1EbhXCJlmuqbeqRTxUP8eoePut6wSLhBj1PQxa88BjI7lPCbtZvejtz3cqbFxiN1lgw427y6wIyjZxzC2dxiHzAwf19%2BEkpqWinVeGUvUQHJOejRCKzRSKX%2By2VEQJSTZDaw3moR%2F3lGZGIfmitTwBUCnx&X-Amz-Signature=92ec9d59971a40e7c4ef16def5e79efb64adb91efcb182acfda7e5337f248cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT63C7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA8Dn5GPCnqGNGNf2GKIYkFyjJNQWLcnTJu9KKde%2Bqh1AiEAriEbRGyrCUbI6f0vMhEbCV55dz0OeWDhrWgjD2yMQDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF71PhWk%2BMjT7LPv6ircAwu21K8mKJlsnCwc0XBlhGy8tImUPirl9cGJmpaSoZbWujBF5DSHrY6zRMXdwPZNFFNSLiJg99QrwYVtlj0qdVFbTthlLtCyuA1WMBA7owFqYviUUjHn%2BPQWgVPt6tKeRLS1LmIGNNP1Ems%2FH7Y%2BVle3%2F4cjNBH8tpDO2dyR8FaJCpUndFbwLplkUbGE3v%2Fq2Qs4SLsCAQ58gjNvEXBn1NrU8%2B%2Bdqk3OYm%2FIDdp1x1tOPR3u%2Fr6VKzvoeZnb5z1bk1RRTHz%2FDYxbaJJP9Yb2ESVDGHFexljWOlIrUYopdD4cA1haRraoRCCw6U%2BHnvIfzD80MZYF0EUMlBhH%2B0s6uE7JlYgrOlcmHFzZ4HY8F1w4vaSchI8KIQAnromnPbtInjwrJalXTTpisrWqykwY9nG%2Bg3hUlyuMQByJxPuE%2FwL4NfRieJpztDNh6NQHLhkO1RBVTsU%2BClUhl35sStO3LnIJwCUmvVt%2FYst%2FWBVfpFlUgwfiOBkOR5z0THJypo5IjyKncqqj%2F1sTxx6AV5CWJ1i%2Fi9j1xkqeYN2ITNslmhmLqY%2BuYqquecnPR%2FYGtXXZHShYJLHjBwwy%2B1ny7%2FrdizwOVvlt88%2BfgEIvHKwPm0oh9OpIWc%2BBVk9uyQmIMI6FosMGOqUB8dsTOMJ8p4JLjeV4wSVTf%2BjML7%2Fd5V7NSLL3qjEE0Y4fgVyQG39wHCXOobFT%2BV3LTo1EbhXCJlmuqbeqRTxUP8eoePut6wSLhBj1PQxa88BjI7lPCbtZvejtz3cqbFxiN1lgw427y6wIyjZxzC2dxiHzAwf19%2BEkpqWinVeGUvUQHJOejRCKzRSKX%2By2VEQJSTZDaw3moR%2F3lGZGIfmitTwBUCnx&X-Amz-Signature=4cf7394be095285d4a971b7b4dcad298d6b1205cbea6e3b13326e51a2b7535c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT63C7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA8Dn5GPCnqGNGNf2GKIYkFyjJNQWLcnTJu9KKde%2Bqh1AiEAriEbRGyrCUbI6f0vMhEbCV55dz0OeWDhrWgjD2yMQDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF71PhWk%2BMjT7LPv6ircAwu21K8mKJlsnCwc0XBlhGy8tImUPirl9cGJmpaSoZbWujBF5DSHrY6zRMXdwPZNFFNSLiJg99QrwYVtlj0qdVFbTthlLtCyuA1WMBA7owFqYviUUjHn%2BPQWgVPt6tKeRLS1LmIGNNP1Ems%2FH7Y%2BVle3%2F4cjNBH8tpDO2dyR8FaJCpUndFbwLplkUbGE3v%2Fq2Qs4SLsCAQ58gjNvEXBn1NrU8%2B%2Bdqk3OYm%2FIDdp1x1tOPR3u%2Fr6VKzvoeZnb5z1bk1RRTHz%2FDYxbaJJP9Yb2ESVDGHFexljWOlIrUYopdD4cA1haRraoRCCw6U%2BHnvIfzD80MZYF0EUMlBhH%2B0s6uE7JlYgrOlcmHFzZ4HY8F1w4vaSchI8KIQAnromnPbtInjwrJalXTTpisrWqykwY9nG%2Bg3hUlyuMQByJxPuE%2FwL4NfRieJpztDNh6NQHLhkO1RBVTsU%2BClUhl35sStO3LnIJwCUmvVt%2FYst%2FWBVfpFlUgwfiOBkOR5z0THJypo5IjyKncqqj%2F1sTxx6AV5CWJ1i%2Fi9j1xkqeYN2ITNslmhmLqY%2BuYqquecnPR%2FYGtXXZHShYJLHjBwwy%2B1ny7%2FrdizwOVvlt88%2BfgEIvHKwPm0oh9OpIWc%2BBVk9uyQmIMI6FosMGOqUB8dsTOMJ8p4JLjeV4wSVTf%2BjML7%2Fd5V7NSLL3qjEE0Y4fgVyQG39wHCXOobFT%2BV3LTo1EbhXCJlmuqbeqRTxUP8eoePut6wSLhBj1PQxa88BjI7lPCbtZvejtz3cqbFxiN1lgw427y6wIyjZxzC2dxiHzAwf19%2BEkpqWinVeGUvUQHJOejRCKzRSKX%2By2VEQJSTZDaw3moR%2F3lGZGIfmitTwBUCnx&X-Amz-Signature=319398fda27f0f1c50ca145f97aa8ef20aeb89607c25a9567fbefde9e67cd518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT63C7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA8Dn5GPCnqGNGNf2GKIYkFyjJNQWLcnTJu9KKde%2Bqh1AiEAriEbRGyrCUbI6f0vMhEbCV55dz0OeWDhrWgjD2yMQDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF71PhWk%2BMjT7LPv6ircAwu21K8mKJlsnCwc0XBlhGy8tImUPirl9cGJmpaSoZbWujBF5DSHrY6zRMXdwPZNFFNSLiJg99QrwYVtlj0qdVFbTthlLtCyuA1WMBA7owFqYviUUjHn%2BPQWgVPt6tKeRLS1LmIGNNP1Ems%2FH7Y%2BVle3%2F4cjNBH8tpDO2dyR8FaJCpUndFbwLplkUbGE3v%2Fq2Qs4SLsCAQ58gjNvEXBn1NrU8%2B%2Bdqk3OYm%2FIDdp1x1tOPR3u%2Fr6VKzvoeZnb5z1bk1RRTHz%2FDYxbaJJP9Yb2ESVDGHFexljWOlIrUYopdD4cA1haRraoRCCw6U%2BHnvIfzD80MZYF0EUMlBhH%2B0s6uE7JlYgrOlcmHFzZ4HY8F1w4vaSchI8KIQAnromnPbtInjwrJalXTTpisrWqykwY9nG%2Bg3hUlyuMQByJxPuE%2FwL4NfRieJpztDNh6NQHLhkO1RBVTsU%2BClUhl35sStO3LnIJwCUmvVt%2FYst%2FWBVfpFlUgwfiOBkOR5z0THJypo5IjyKncqqj%2F1sTxx6AV5CWJ1i%2Fi9j1xkqeYN2ITNslmhmLqY%2BuYqquecnPR%2FYGtXXZHShYJLHjBwwy%2B1ny7%2FrdizwOVvlt88%2BfgEIvHKwPm0oh9OpIWc%2BBVk9uyQmIMI6FosMGOqUB8dsTOMJ8p4JLjeV4wSVTf%2BjML7%2Fd5V7NSLL3qjEE0Y4fgVyQG39wHCXOobFT%2BV3LTo1EbhXCJlmuqbeqRTxUP8eoePut6wSLhBj1PQxa88BjI7lPCbtZvejtz3cqbFxiN1lgw427y6wIyjZxzC2dxiHzAwf19%2BEkpqWinVeGUvUQHJOejRCKzRSKX%2By2VEQJSTZDaw3moR%2F3lGZGIfmitTwBUCnx&X-Amz-Signature=04283631fc72fdecc42c7905952f90a77cb407d594a527f5ee74c798a7ce10f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
