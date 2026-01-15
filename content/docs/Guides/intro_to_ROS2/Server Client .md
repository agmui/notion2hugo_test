---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUIGIFQ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHIs3SaKWOgfV%2F2BjKZ0ilVuRIEgp11bFd5FhcWBFuOmAiEA8NIUB9i5wrT2y0aPfhBsW0APQ63O114UeEwq%2F5R7VW0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOsv9zA9KRGn%2FxOGiSrcA70WgC7nJ8Xu%2F1X4uDnLsEzhyFwTvat0uMza1vD4Ht0%2B5%2BDPNbdTDgS2N9NKUhi%2B9QeGAfZwzxJLml8YUFg46FBXqium969fm%2FxfkgsQ2B0EwghqM2sUYLmS99j02v4dTIT9Q5P9Yy%2FoLma9z5eTOfraQWggAK419IINWpEfYKTOlMfaLmEg5Z8XhxOhlQQzfli2moJhGh%2FNwnieZm0D0KDbdbLgsLVC9ROKsWXWK44lz4IA%2Ba8F%2B4DG9swZpDVIZtWJMns29rbKRSWn3zHiA3U1rhBz40T21BaqDuhWggRlxBUYPYUgfC0h62O3424MJBEjDhOUrhDnrKC58GSISq%2BHDKRgalSAus3vKs5ArgVo84nsCk446V%2B0Jt8FcozeW%2F1oPFPx987m2h83FgFv6s7eJU%2BvXiD2ujWYhxCEOV%2FmPu0xGRltGBfXxXRlMUHhiotCPllcWwVdo9d1nkHKGRdwFmNwevdf7YSD5NgEDra3sMRsF3c33d2yG43RNeY2YmsXn8lUeIEkwWokHlx0QTlfpy%2FOjgjvxqxJPUUsmC%2B0q9U7SnKPeN2%2BBp9EJ7g1%2BXrfrk2PLm9yUwDyy7y7txl7D90JBhWVeT3dJSvgofgIlQsAVRk1z94Mtf0KMPL%2BoMsGOqUBTinvGxIGnm76q5ekry4M07nW8HH3ENeONKqtEiULv4pLeg0vRkNTGMYpkFoWBL1S7H2dFR5g5gZY7dPe%2FCkORMboS7QfgO92KlC4coN8%2FXTkibbqgdTuZG2RS15pW8%2B8rGQzH%2BafRgu6W0UQYCO0uXC9HKowZxIgkQHy6fknLAcXXgYGY31obG9zYY8NZtG5Mrtjw2iv0IZNxVgyYQIzm0yY7uiR&X-Amz-Signature=d09739f90bfc0257ca500d10557850eba88eb0a04af0310a7881d97bdf5b82a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUIGIFQ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHIs3SaKWOgfV%2F2BjKZ0ilVuRIEgp11bFd5FhcWBFuOmAiEA8NIUB9i5wrT2y0aPfhBsW0APQ63O114UeEwq%2F5R7VW0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOsv9zA9KRGn%2FxOGiSrcA70WgC7nJ8Xu%2F1X4uDnLsEzhyFwTvat0uMza1vD4Ht0%2B5%2BDPNbdTDgS2N9NKUhi%2B9QeGAfZwzxJLml8YUFg46FBXqium969fm%2FxfkgsQ2B0EwghqM2sUYLmS99j02v4dTIT9Q5P9Yy%2FoLma9z5eTOfraQWggAK419IINWpEfYKTOlMfaLmEg5Z8XhxOhlQQzfli2moJhGh%2FNwnieZm0D0KDbdbLgsLVC9ROKsWXWK44lz4IA%2Ba8F%2B4DG9swZpDVIZtWJMns29rbKRSWn3zHiA3U1rhBz40T21BaqDuhWggRlxBUYPYUgfC0h62O3424MJBEjDhOUrhDnrKC58GSISq%2BHDKRgalSAus3vKs5ArgVo84nsCk446V%2B0Jt8FcozeW%2F1oPFPx987m2h83FgFv6s7eJU%2BvXiD2ujWYhxCEOV%2FmPu0xGRltGBfXxXRlMUHhiotCPllcWwVdo9d1nkHKGRdwFmNwevdf7YSD5NgEDra3sMRsF3c33d2yG43RNeY2YmsXn8lUeIEkwWokHlx0QTlfpy%2FOjgjvxqxJPUUsmC%2B0q9U7SnKPeN2%2BBp9EJ7g1%2BXrfrk2PLm9yUwDyy7y7txl7D90JBhWVeT3dJSvgofgIlQsAVRk1z94Mtf0KMPL%2BoMsGOqUBTinvGxIGnm76q5ekry4M07nW8HH3ENeONKqtEiULv4pLeg0vRkNTGMYpkFoWBL1S7H2dFR5g5gZY7dPe%2FCkORMboS7QfgO92KlC4coN8%2FXTkibbqgdTuZG2RS15pW8%2B8rGQzH%2BafRgu6W0UQYCO0uXC9HKowZxIgkQHy6fknLAcXXgYGY31obG9zYY8NZtG5Mrtjw2iv0IZNxVgyYQIzm0yY7uiR&X-Amz-Signature=b98d1130b4a74296cba89200ee3424374cdfdd728b982508af5fb5af8f8a6004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUIGIFQ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHIs3SaKWOgfV%2F2BjKZ0ilVuRIEgp11bFd5FhcWBFuOmAiEA8NIUB9i5wrT2y0aPfhBsW0APQ63O114UeEwq%2F5R7VW0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOsv9zA9KRGn%2FxOGiSrcA70WgC7nJ8Xu%2F1X4uDnLsEzhyFwTvat0uMza1vD4Ht0%2B5%2BDPNbdTDgS2N9NKUhi%2B9QeGAfZwzxJLml8YUFg46FBXqium969fm%2FxfkgsQ2B0EwghqM2sUYLmS99j02v4dTIT9Q5P9Yy%2FoLma9z5eTOfraQWggAK419IINWpEfYKTOlMfaLmEg5Z8XhxOhlQQzfli2moJhGh%2FNwnieZm0D0KDbdbLgsLVC9ROKsWXWK44lz4IA%2Ba8F%2B4DG9swZpDVIZtWJMns29rbKRSWn3zHiA3U1rhBz40T21BaqDuhWggRlxBUYPYUgfC0h62O3424MJBEjDhOUrhDnrKC58GSISq%2BHDKRgalSAus3vKs5ArgVo84nsCk446V%2B0Jt8FcozeW%2F1oPFPx987m2h83FgFv6s7eJU%2BvXiD2ujWYhxCEOV%2FmPu0xGRltGBfXxXRlMUHhiotCPllcWwVdo9d1nkHKGRdwFmNwevdf7YSD5NgEDra3sMRsF3c33d2yG43RNeY2YmsXn8lUeIEkwWokHlx0QTlfpy%2FOjgjvxqxJPUUsmC%2B0q9U7SnKPeN2%2BBp9EJ7g1%2BXrfrk2PLm9yUwDyy7y7txl7D90JBhWVeT3dJSvgofgIlQsAVRk1z94Mtf0KMPL%2BoMsGOqUBTinvGxIGnm76q5ekry4M07nW8HH3ENeONKqtEiULv4pLeg0vRkNTGMYpkFoWBL1S7H2dFR5g5gZY7dPe%2FCkORMboS7QfgO92KlC4coN8%2FXTkibbqgdTuZG2RS15pW8%2B8rGQzH%2BafRgu6W0UQYCO0uXC9HKowZxIgkQHy6fknLAcXXgYGY31obG9zYY8NZtG5Mrtjw2iv0IZNxVgyYQIzm0yY7uiR&X-Amz-Signature=4f29e83d19ca1df3696f5991fc1db3d71c062eabb43cc1736b6fbc6e3f7b1a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUIGIFQ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHIs3SaKWOgfV%2F2BjKZ0ilVuRIEgp11bFd5FhcWBFuOmAiEA8NIUB9i5wrT2y0aPfhBsW0APQ63O114UeEwq%2F5R7VW0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOsv9zA9KRGn%2FxOGiSrcA70WgC7nJ8Xu%2F1X4uDnLsEzhyFwTvat0uMza1vD4Ht0%2B5%2BDPNbdTDgS2N9NKUhi%2B9QeGAfZwzxJLml8YUFg46FBXqium969fm%2FxfkgsQ2B0EwghqM2sUYLmS99j02v4dTIT9Q5P9Yy%2FoLma9z5eTOfraQWggAK419IINWpEfYKTOlMfaLmEg5Z8XhxOhlQQzfli2moJhGh%2FNwnieZm0D0KDbdbLgsLVC9ROKsWXWK44lz4IA%2Ba8F%2B4DG9swZpDVIZtWJMns29rbKRSWn3zHiA3U1rhBz40T21BaqDuhWggRlxBUYPYUgfC0h62O3424MJBEjDhOUrhDnrKC58GSISq%2BHDKRgalSAus3vKs5ArgVo84nsCk446V%2B0Jt8FcozeW%2F1oPFPx987m2h83FgFv6s7eJU%2BvXiD2ujWYhxCEOV%2FmPu0xGRltGBfXxXRlMUHhiotCPllcWwVdo9d1nkHKGRdwFmNwevdf7YSD5NgEDra3sMRsF3c33d2yG43RNeY2YmsXn8lUeIEkwWokHlx0QTlfpy%2FOjgjvxqxJPUUsmC%2B0q9U7SnKPeN2%2BBp9EJ7g1%2BXrfrk2PLm9yUwDyy7y7txl7D90JBhWVeT3dJSvgofgIlQsAVRk1z94Mtf0KMPL%2BoMsGOqUBTinvGxIGnm76q5ekry4M07nW8HH3ENeONKqtEiULv4pLeg0vRkNTGMYpkFoWBL1S7H2dFR5g5gZY7dPe%2FCkORMboS7QfgO92KlC4coN8%2FXTkibbqgdTuZG2RS15pW8%2B8rGQzH%2BafRgu6W0UQYCO0uXC9HKowZxIgkQHy6fknLAcXXgYGY31obG9zYY8NZtG5Mrtjw2iv0IZNxVgyYQIzm0yY7uiR&X-Amz-Signature=9b7c7ef97b4a4f20ab08d7ac46f01318f59a9bafb9e34c9febeff53ba4a75175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUIGIFQ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHIs3SaKWOgfV%2F2BjKZ0ilVuRIEgp11bFd5FhcWBFuOmAiEA8NIUB9i5wrT2y0aPfhBsW0APQ63O114UeEwq%2F5R7VW0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOsv9zA9KRGn%2FxOGiSrcA70WgC7nJ8Xu%2F1X4uDnLsEzhyFwTvat0uMza1vD4Ht0%2B5%2BDPNbdTDgS2N9NKUhi%2B9QeGAfZwzxJLml8YUFg46FBXqium969fm%2FxfkgsQ2B0EwghqM2sUYLmS99j02v4dTIT9Q5P9Yy%2FoLma9z5eTOfraQWggAK419IINWpEfYKTOlMfaLmEg5Z8XhxOhlQQzfli2moJhGh%2FNwnieZm0D0KDbdbLgsLVC9ROKsWXWK44lz4IA%2Ba8F%2B4DG9swZpDVIZtWJMns29rbKRSWn3zHiA3U1rhBz40T21BaqDuhWggRlxBUYPYUgfC0h62O3424MJBEjDhOUrhDnrKC58GSISq%2BHDKRgalSAus3vKs5ArgVo84nsCk446V%2B0Jt8FcozeW%2F1oPFPx987m2h83FgFv6s7eJU%2BvXiD2ujWYhxCEOV%2FmPu0xGRltGBfXxXRlMUHhiotCPllcWwVdo9d1nkHKGRdwFmNwevdf7YSD5NgEDra3sMRsF3c33d2yG43RNeY2YmsXn8lUeIEkwWokHlx0QTlfpy%2FOjgjvxqxJPUUsmC%2B0q9U7SnKPeN2%2BBp9EJ7g1%2BXrfrk2PLm9yUwDyy7y7txl7D90JBhWVeT3dJSvgofgIlQsAVRk1z94Mtf0KMPL%2BoMsGOqUBTinvGxIGnm76q5ekry4M07nW8HH3ENeONKqtEiULv4pLeg0vRkNTGMYpkFoWBL1S7H2dFR5g5gZY7dPe%2FCkORMboS7QfgO92KlC4coN8%2FXTkibbqgdTuZG2RS15pW8%2B8rGQzH%2BafRgu6W0UQYCO0uXC9HKowZxIgkQHy6fknLAcXXgYGY31obG9zYY8NZtG5Mrtjw2iv0IZNxVgyYQIzm0yY7uiR&X-Amz-Signature=cd69ba446aa49ca08bd84c3c05bb5ee65d4ab979ed9de9aa6369ee3a75be1948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
