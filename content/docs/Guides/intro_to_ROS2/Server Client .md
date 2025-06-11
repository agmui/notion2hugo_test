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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZFRVWM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFY4dWpvtfKyYz4vQp3vqqIrp%2FQl2i2GBrxfUR8%2BT3BMAiEAoKxR1bBNdspRJeDoS5Plounnt4sXRl8m2%2FUAoK6W6ucqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58GPMnCb6%2B8UuQmyrcA8bzkKiVpmJ6bljBfidYQ%2BiiRFi3bzO9G9Fr0xSQ8zfxy87LLBYh6j6kgosIZNMEwxUPEIiwNe4M%2F4fHN%2B2ijN5u9YubSYURJP4aKKrH7F308PdnVnmDzkTZf93z%2FVOmLQ%2F4PmvpSh5%2Fmui3BakhqIt%2Bcgaluk%2BR3x9dbqNrX4bwH1yOoclbxl00yG%2Fvl4L7riFrBZ4AYXACx0sfNjbEJSh%2BzIFDGee7AV3VYDAaxqBpMskscL2H4jYOaogsgJu3t4kBXqtIiOqv48jkJ9jAE93xRf12BHwdJ9RKaJsqclly5ULHpvVcaaBxEBOJzxLDt5ML9eO%2BwpbPSpH7YF15MN2%2BhYansY%2Bx%2B8DKSApK9WrEFC9akXa%2BcNkGRDu6tEFm0VJOF4DHFlMknf2WQ3p4z45biEWFqR6pDXYJC9Qms0CcfQIYpKx%2BeW0rC8twpZOE2u2fPXn9KaLZmSe%2BzJAgvr2if856YmSObeaXTuXKDT9AsFu%2Fgc5HYtXgr%2F5qnmbtmqjV99%2FCbxgh7Mt6XJcXAxNqjPNvGI%2BnZFOnGFvZy3bG9gVZc9%2BplMz7274t%2F0HN%2FgDpv92mO1Qxlk4FHeCNJHAgNAqsWsCtHiNQ13HEyUEHauJCmqvpQi3NEdfwML%2BGqMIGOqUB5lKESmXUSiN%2Bce90iyeKlVxJhRQGg2kdvIxs7J43Ivm2JpTAYNm%2BqgJBgXlZR7MI%2FoDcwS1hsZD9%2BufkNsOhMxyKf1SbnfYM2q%2BJHzDzi3nFvtUXR8m1%2BKeP%2BwQqJ3Q5FB8Oc7af7x9sZ1A8dvaKhOKbSKpDLlgjU0gzl8VDhpgahfaRJ%2FmdvHkrsDwxI%2FuCqyil7JYvLOITfp3BP2i0BRhk8OGQ&X-Amz-Signature=851de11ad0d583f6ef979a94df33fb1a548423fee243e9d3ada9c04d65906453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZFRVWM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFY4dWpvtfKyYz4vQp3vqqIrp%2FQl2i2GBrxfUR8%2BT3BMAiEAoKxR1bBNdspRJeDoS5Plounnt4sXRl8m2%2FUAoK6W6ucqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58GPMnCb6%2B8UuQmyrcA8bzkKiVpmJ6bljBfidYQ%2BiiRFi3bzO9G9Fr0xSQ8zfxy87LLBYh6j6kgosIZNMEwxUPEIiwNe4M%2F4fHN%2B2ijN5u9YubSYURJP4aKKrH7F308PdnVnmDzkTZf93z%2FVOmLQ%2F4PmvpSh5%2Fmui3BakhqIt%2Bcgaluk%2BR3x9dbqNrX4bwH1yOoclbxl00yG%2Fvl4L7riFrBZ4AYXACx0sfNjbEJSh%2BzIFDGee7AV3VYDAaxqBpMskscL2H4jYOaogsgJu3t4kBXqtIiOqv48jkJ9jAE93xRf12BHwdJ9RKaJsqclly5ULHpvVcaaBxEBOJzxLDt5ML9eO%2BwpbPSpH7YF15MN2%2BhYansY%2Bx%2B8DKSApK9WrEFC9akXa%2BcNkGRDu6tEFm0VJOF4DHFlMknf2WQ3p4z45biEWFqR6pDXYJC9Qms0CcfQIYpKx%2BeW0rC8twpZOE2u2fPXn9KaLZmSe%2BzJAgvr2if856YmSObeaXTuXKDT9AsFu%2Fgc5HYtXgr%2F5qnmbtmqjV99%2FCbxgh7Mt6XJcXAxNqjPNvGI%2BnZFOnGFvZy3bG9gVZc9%2BplMz7274t%2F0HN%2FgDpv92mO1Qxlk4FHeCNJHAgNAqsWsCtHiNQ13HEyUEHauJCmqvpQi3NEdfwML%2BGqMIGOqUB5lKESmXUSiN%2Bce90iyeKlVxJhRQGg2kdvIxs7J43Ivm2JpTAYNm%2BqgJBgXlZR7MI%2FoDcwS1hsZD9%2BufkNsOhMxyKf1SbnfYM2q%2BJHzDzi3nFvtUXR8m1%2BKeP%2BwQqJ3Q5FB8Oc7af7x9sZ1A8dvaKhOKbSKpDLlgjU0gzl8VDhpgahfaRJ%2FmdvHkrsDwxI%2FuCqyil7JYvLOITfp3BP2i0BRhk8OGQ&X-Amz-Signature=62b1ac834b4143bc94b52d5e8c5925841a9aa2aed0ad89bf5502d745205a2396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZFRVWM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFY4dWpvtfKyYz4vQp3vqqIrp%2FQl2i2GBrxfUR8%2BT3BMAiEAoKxR1bBNdspRJeDoS5Plounnt4sXRl8m2%2FUAoK6W6ucqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58GPMnCb6%2B8UuQmyrcA8bzkKiVpmJ6bljBfidYQ%2BiiRFi3bzO9G9Fr0xSQ8zfxy87LLBYh6j6kgosIZNMEwxUPEIiwNe4M%2F4fHN%2B2ijN5u9YubSYURJP4aKKrH7F308PdnVnmDzkTZf93z%2FVOmLQ%2F4PmvpSh5%2Fmui3BakhqIt%2Bcgaluk%2BR3x9dbqNrX4bwH1yOoclbxl00yG%2Fvl4L7riFrBZ4AYXACx0sfNjbEJSh%2BzIFDGee7AV3VYDAaxqBpMskscL2H4jYOaogsgJu3t4kBXqtIiOqv48jkJ9jAE93xRf12BHwdJ9RKaJsqclly5ULHpvVcaaBxEBOJzxLDt5ML9eO%2BwpbPSpH7YF15MN2%2BhYansY%2Bx%2B8DKSApK9WrEFC9akXa%2BcNkGRDu6tEFm0VJOF4DHFlMknf2WQ3p4z45biEWFqR6pDXYJC9Qms0CcfQIYpKx%2BeW0rC8twpZOE2u2fPXn9KaLZmSe%2BzJAgvr2if856YmSObeaXTuXKDT9AsFu%2Fgc5HYtXgr%2F5qnmbtmqjV99%2FCbxgh7Mt6XJcXAxNqjPNvGI%2BnZFOnGFvZy3bG9gVZc9%2BplMz7274t%2F0HN%2FgDpv92mO1Qxlk4FHeCNJHAgNAqsWsCtHiNQ13HEyUEHauJCmqvpQi3NEdfwML%2BGqMIGOqUB5lKESmXUSiN%2Bce90iyeKlVxJhRQGg2kdvIxs7J43Ivm2JpTAYNm%2BqgJBgXlZR7MI%2FoDcwS1hsZD9%2BufkNsOhMxyKf1SbnfYM2q%2BJHzDzi3nFvtUXR8m1%2BKeP%2BwQqJ3Q5FB8Oc7af7x9sZ1A8dvaKhOKbSKpDLlgjU0gzl8VDhpgahfaRJ%2FmdvHkrsDwxI%2FuCqyil7JYvLOITfp3BP2i0BRhk8OGQ&X-Amz-Signature=2ebaccc71af40fe2ece5735ea597d8f0430979a157cefa916ec8d72c60480fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZFRVWM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFY4dWpvtfKyYz4vQp3vqqIrp%2FQl2i2GBrxfUR8%2BT3BMAiEAoKxR1bBNdspRJeDoS5Plounnt4sXRl8m2%2FUAoK6W6ucqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58GPMnCb6%2B8UuQmyrcA8bzkKiVpmJ6bljBfidYQ%2BiiRFi3bzO9G9Fr0xSQ8zfxy87LLBYh6j6kgosIZNMEwxUPEIiwNe4M%2F4fHN%2B2ijN5u9YubSYURJP4aKKrH7F308PdnVnmDzkTZf93z%2FVOmLQ%2F4PmvpSh5%2Fmui3BakhqIt%2Bcgaluk%2BR3x9dbqNrX4bwH1yOoclbxl00yG%2Fvl4L7riFrBZ4AYXACx0sfNjbEJSh%2BzIFDGee7AV3VYDAaxqBpMskscL2H4jYOaogsgJu3t4kBXqtIiOqv48jkJ9jAE93xRf12BHwdJ9RKaJsqclly5ULHpvVcaaBxEBOJzxLDt5ML9eO%2BwpbPSpH7YF15MN2%2BhYansY%2Bx%2B8DKSApK9WrEFC9akXa%2BcNkGRDu6tEFm0VJOF4DHFlMknf2WQ3p4z45biEWFqR6pDXYJC9Qms0CcfQIYpKx%2BeW0rC8twpZOE2u2fPXn9KaLZmSe%2BzJAgvr2if856YmSObeaXTuXKDT9AsFu%2Fgc5HYtXgr%2F5qnmbtmqjV99%2FCbxgh7Mt6XJcXAxNqjPNvGI%2BnZFOnGFvZy3bG9gVZc9%2BplMz7274t%2F0HN%2FgDpv92mO1Qxlk4FHeCNJHAgNAqsWsCtHiNQ13HEyUEHauJCmqvpQi3NEdfwML%2BGqMIGOqUB5lKESmXUSiN%2Bce90iyeKlVxJhRQGg2kdvIxs7J43Ivm2JpTAYNm%2BqgJBgXlZR7MI%2FoDcwS1hsZD9%2BufkNsOhMxyKf1SbnfYM2q%2BJHzDzi3nFvtUXR8m1%2BKeP%2BwQqJ3Q5FB8Oc7af7x9sZ1A8dvaKhOKbSKpDLlgjU0gzl8VDhpgahfaRJ%2FmdvHkrsDwxI%2FuCqyil7JYvLOITfp3BP2i0BRhk8OGQ&X-Amz-Signature=bb9d639347078ce7b19429382e5f9746921e14f8a74c7d81d07eb0394b50956e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZFRVWM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFY4dWpvtfKyYz4vQp3vqqIrp%2FQl2i2GBrxfUR8%2BT3BMAiEAoKxR1bBNdspRJeDoS5Plounnt4sXRl8m2%2FUAoK6W6ucqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58GPMnCb6%2B8UuQmyrcA8bzkKiVpmJ6bljBfidYQ%2BiiRFi3bzO9G9Fr0xSQ8zfxy87LLBYh6j6kgosIZNMEwxUPEIiwNe4M%2F4fHN%2B2ijN5u9YubSYURJP4aKKrH7F308PdnVnmDzkTZf93z%2FVOmLQ%2F4PmvpSh5%2Fmui3BakhqIt%2Bcgaluk%2BR3x9dbqNrX4bwH1yOoclbxl00yG%2Fvl4L7riFrBZ4AYXACx0sfNjbEJSh%2BzIFDGee7AV3VYDAaxqBpMskscL2H4jYOaogsgJu3t4kBXqtIiOqv48jkJ9jAE93xRf12BHwdJ9RKaJsqclly5ULHpvVcaaBxEBOJzxLDt5ML9eO%2BwpbPSpH7YF15MN2%2BhYansY%2Bx%2B8DKSApK9WrEFC9akXa%2BcNkGRDu6tEFm0VJOF4DHFlMknf2WQ3p4z45biEWFqR6pDXYJC9Qms0CcfQIYpKx%2BeW0rC8twpZOE2u2fPXn9KaLZmSe%2BzJAgvr2if856YmSObeaXTuXKDT9AsFu%2Fgc5HYtXgr%2F5qnmbtmqjV99%2FCbxgh7Mt6XJcXAxNqjPNvGI%2BnZFOnGFvZy3bG9gVZc9%2BplMz7274t%2F0HN%2FgDpv92mO1Qxlk4FHeCNJHAgNAqsWsCtHiNQ13HEyUEHauJCmqvpQi3NEdfwML%2BGqMIGOqUB5lKESmXUSiN%2Bce90iyeKlVxJhRQGg2kdvIxs7J43Ivm2JpTAYNm%2BqgJBgXlZR7MI%2FoDcwS1hsZD9%2BufkNsOhMxyKf1SbnfYM2q%2BJHzDzi3nFvtUXR8m1%2BKeP%2BwQqJ3Q5FB8Oc7af7x9sZ1A8dvaKhOKbSKpDLlgjU0gzl8VDhpgahfaRJ%2FmdvHkrsDwxI%2FuCqyil7JYvLOITfp3BP2i0BRhk8OGQ&X-Amz-Signature=d4f1ceb21d46955dbcad8af27ee1a20e6b741be8606a15cca2d4356a6621a4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
