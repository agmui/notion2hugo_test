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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3EU6YG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDqD0Ky%2FVuG%2BXYctGgR%2BxZ9zObWy3%2FSbD7%2B4srn77NEkgIgBN0At1QsxzOEWZmFv4aoePC8ps9ZYrk%2BGV5oReWNfcIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOQsX7kFLRLUVz2HfircA6gSlnWpBOGcWmfUPQqmFFAX5OWg53xvYXfTEXErO34hxdJBPkHdbFtZ4orOZNs702I5Oi5Tf%2BDiK7J1TjDjtoH30KRQGPueY0Xnf1aYggnX4PE729vEp3BqBwXn51V8Paq3vJuJh9AQWMvfft7p3YQI9TV5koJhMQ1vl%2BHmtZHocTprlMRoR4pEbUM9OfginHV8gJVauG45DO74obU0STYQ%2FnTQrPxGYvC6c%2FRoW%2FdgFjuko4a2vkgs8KmYBLQpylleyXpd0q%2Bksh4Y2mj7VDlCnAknlZYgKPuJCuzOuzk15sHUX%2B3%2Fy2ZL9V76ZX45sr6hKWQV8IsdixoE3mKEOR45y4QXoXGkKDXFI%2FUg4dF0tqluDSIa80sqJZZHcgx4j%2B%2FFRR8pNvD9GFcAgJqOfHKCwcton0YFkPJmHYH8bHtTVOV2CbbePfB%2B4CnggfcfMLBML%2FoQyPv7hZnlktAL3dsq0Qao7wisWeTet5Zig7%2F5OSNmKHPP2kZLVezyppnctI9knAVYPpaEJUJJYwZnwuFGiYmMFQ31Wd7124jVD3qj8SaPWYC6ctOFHCtBd4SGHZlc6mWS7tjgCpl5SAm%2FITg%2Fhmcp27hxb0tkNmZBqm5AXdELttthBO0i4SrWMPKXmsMGOqUBqtDEH2PavQ9EdwUjHPTiWW9K5o437seVoS6EevL0k8nZCyFSVQwQhgo1YjVJoAVrduzV21nwhIyBJSW9Dw1zEaOlk1i0GueSfM487FThv2GR8vERtjrn%2FtqeaDDZki4dXRcD3sVsz6ub1vBn75jKGqDgowKkMISuug1l5zG9rDU%2F6R3KDDUOEh%2Bk1w1HfZ%2B%2FEZA6DVEEiVPeb%2F5pAzMhPt%2Bzc%2Fjt&X-Amz-Signature=cfe53e563e2c1ee4be2ba9b2106a7fc300bb36dfb46fe0435f4f9d2a0206a60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3EU6YG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDqD0Ky%2FVuG%2BXYctGgR%2BxZ9zObWy3%2FSbD7%2B4srn77NEkgIgBN0At1QsxzOEWZmFv4aoePC8ps9ZYrk%2BGV5oReWNfcIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOQsX7kFLRLUVz2HfircA6gSlnWpBOGcWmfUPQqmFFAX5OWg53xvYXfTEXErO34hxdJBPkHdbFtZ4orOZNs702I5Oi5Tf%2BDiK7J1TjDjtoH30KRQGPueY0Xnf1aYggnX4PE729vEp3BqBwXn51V8Paq3vJuJh9AQWMvfft7p3YQI9TV5koJhMQ1vl%2BHmtZHocTprlMRoR4pEbUM9OfginHV8gJVauG45DO74obU0STYQ%2FnTQrPxGYvC6c%2FRoW%2FdgFjuko4a2vkgs8KmYBLQpylleyXpd0q%2Bksh4Y2mj7VDlCnAknlZYgKPuJCuzOuzk15sHUX%2B3%2Fy2ZL9V76ZX45sr6hKWQV8IsdixoE3mKEOR45y4QXoXGkKDXFI%2FUg4dF0tqluDSIa80sqJZZHcgx4j%2B%2FFRR8pNvD9GFcAgJqOfHKCwcton0YFkPJmHYH8bHtTVOV2CbbePfB%2B4CnggfcfMLBML%2FoQyPv7hZnlktAL3dsq0Qao7wisWeTet5Zig7%2F5OSNmKHPP2kZLVezyppnctI9knAVYPpaEJUJJYwZnwuFGiYmMFQ31Wd7124jVD3qj8SaPWYC6ctOFHCtBd4SGHZlc6mWS7tjgCpl5SAm%2FITg%2Fhmcp27hxb0tkNmZBqm5AXdELttthBO0i4SrWMPKXmsMGOqUBqtDEH2PavQ9EdwUjHPTiWW9K5o437seVoS6EevL0k8nZCyFSVQwQhgo1YjVJoAVrduzV21nwhIyBJSW9Dw1zEaOlk1i0GueSfM487FThv2GR8vERtjrn%2FtqeaDDZki4dXRcD3sVsz6ub1vBn75jKGqDgowKkMISuug1l5zG9rDU%2F6R3KDDUOEh%2Bk1w1HfZ%2B%2FEZA6DVEEiVPeb%2F5pAzMhPt%2Bzc%2Fjt&X-Amz-Signature=f4e5ce06315b711e99f1cc38b8fe32b93276e0759fac2f2693bc4a4e774c3132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3EU6YG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDqD0Ky%2FVuG%2BXYctGgR%2BxZ9zObWy3%2FSbD7%2B4srn77NEkgIgBN0At1QsxzOEWZmFv4aoePC8ps9ZYrk%2BGV5oReWNfcIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOQsX7kFLRLUVz2HfircA6gSlnWpBOGcWmfUPQqmFFAX5OWg53xvYXfTEXErO34hxdJBPkHdbFtZ4orOZNs702I5Oi5Tf%2BDiK7J1TjDjtoH30KRQGPueY0Xnf1aYggnX4PE729vEp3BqBwXn51V8Paq3vJuJh9AQWMvfft7p3YQI9TV5koJhMQ1vl%2BHmtZHocTprlMRoR4pEbUM9OfginHV8gJVauG45DO74obU0STYQ%2FnTQrPxGYvC6c%2FRoW%2FdgFjuko4a2vkgs8KmYBLQpylleyXpd0q%2Bksh4Y2mj7VDlCnAknlZYgKPuJCuzOuzk15sHUX%2B3%2Fy2ZL9V76ZX45sr6hKWQV8IsdixoE3mKEOR45y4QXoXGkKDXFI%2FUg4dF0tqluDSIa80sqJZZHcgx4j%2B%2FFRR8pNvD9GFcAgJqOfHKCwcton0YFkPJmHYH8bHtTVOV2CbbePfB%2B4CnggfcfMLBML%2FoQyPv7hZnlktAL3dsq0Qao7wisWeTet5Zig7%2F5OSNmKHPP2kZLVezyppnctI9knAVYPpaEJUJJYwZnwuFGiYmMFQ31Wd7124jVD3qj8SaPWYC6ctOFHCtBd4SGHZlc6mWS7tjgCpl5SAm%2FITg%2Fhmcp27hxb0tkNmZBqm5AXdELttthBO0i4SrWMPKXmsMGOqUBqtDEH2PavQ9EdwUjHPTiWW9K5o437seVoS6EevL0k8nZCyFSVQwQhgo1YjVJoAVrduzV21nwhIyBJSW9Dw1zEaOlk1i0GueSfM487FThv2GR8vERtjrn%2FtqeaDDZki4dXRcD3sVsz6ub1vBn75jKGqDgowKkMISuug1l5zG9rDU%2F6R3KDDUOEh%2Bk1w1HfZ%2B%2FEZA6DVEEiVPeb%2F5pAzMhPt%2Bzc%2Fjt&X-Amz-Signature=0e344ed2dc1c1193249aae16c5958112e9599336986c0b60b487d10e815bef6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3EU6YG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDqD0Ky%2FVuG%2BXYctGgR%2BxZ9zObWy3%2FSbD7%2B4srn77NEkgIgBN0At1QsxzOEWZmFv4aoePC8ps9ZYrk%2BGV5oReWNfcIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOQsX7kFLRLUVz2HfircA6gSlnWpBOGcWmfUPQqmFFAX5OWg53xvYXfTEXErO34hxdJBPkHdbFtZ4orOZNs702I5Oi5Tf%2BDiK7J1TjDjtoH30KRQGPueY0Xnf1aYggnX4PE729vEp3BqBwXn51V8Paq3vJuJh9AQWMvfft7p3YQI9TV5koJhMQ1vl%2BHmtZHocTprlMRoR4pEbUM9OfginHV8gJVauG45DO74obU0STYQ%2FnTQrPxGYvC6c%2FRoW%2FdgFjuko4a2vkgs8KmYBLQpylleyXpd0q%2Bksh4Y2mj7VDlCnAknlZYgKPuJCuzOuzk15sHUX%2B3%2Fy2ZL9V76ZX45sr6hKWQV8IsdixoE3mKEOR45y4QXoXGkKDXFI%2FUg4dF0tqluDSIa80sqJZZHcgx4j%2B%2FFRR8pNvD9GFcAgJqOfHKCwcton0YFkPJmHYH8bHtTVOV2CbbePfB%2B4CnggfcfMLBML%2FoQyPv7hZnlktAL3dsq0Qao7wisWeTet5Zig7%2F5OSNmKHPP2kZLVezyppnctI9knAVYPpaEJUJJYwZnwuFGiYmMFQ31Wd7124jVD3qj8SaPWYC6ctOFHCtBd4SGHZlc6mWS7tjgCpl5SAm%2FITg%2Fhmcp27hxb0tkNmZBqm5AXdELttthBO0i4SrWMPKXmsMGOqUBqtDEH2PavQ9EdwUjHPTiWW9K5o437seVoS6EevL0k8nZCyFSVQwQhgo1YjVJoAVrduzV21nwhIyBJSW9Dw1zEaOlk1i0GueSfM487FThv2GR8vERtjrn%2FtqeaDDZki4dXRcD3sVsz6ub1vBn75jKGqDgowKkMISuug1l5zG9rDU%2F6R3KDDUOEh%2Bk1w1HfZ%2B%2FEZA6DVEEiVPeb%2F5pAzMhPt%2Bzc%2Fjt&X-Amz-Signature=503e33e17cefc75924d4124cb73d9ad7214ad3de0ae33ca5cad703ab4fba5a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3EU6YG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDqD0Ky%2FVuG%2BXYctGgR%2BxZ9zObWy3%2FSbD7%2B4srn77NEkgIgBN0At1QsxzOEWZmFv4aoePC8ps9ZYrk%2BGV5oReWNfcIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOQsX7kFLRLUVz2HfircA6gSlnWpBOGcWmfUPQqmFFAX5OWg53xvYXfTEXErO34hxdJBPkHdbFtZ4orOZNs702I5Oi5Tf%2BDiK7J1TjDjtoH30KRQGPueY0Xnf1aYggnX4PE729vEp3BqBwXn51V8Paq3vJuJh9AQWMvfft7p3YQI9TV5koJhMQ1vl%2BHmtZHocTprlMRoR4pEbUM9OfginHV8gJVauG45DO74obU0STYQ%2FnTQrPxGYvC6c%2FRoW%2FdgFjuko4a2vkgs8KmYBLQpylleyXpd0q%2Bksh4Y2mj7VDlCnAknlZYgKPuJCuzOuzk15sHUX%2B3%2Fy2ZL9V76ZX45sr6hKWQV8IsdixoE3mKEOR45y4QXoXGkKDXFI%2FUg4dF0tqluDSIa80sqJZZHcgx4j%2B%2FFRR8pNvD9GFcAgJqOfHKCwcton0YFkPJmHYH8bHtTVOV2CbbePfB%2B4CnggfcfMLBML%2FoQyPv7hZnlktAL3dsq0Qao7wisWeTet5Zig7%2F5OSNmKHPP2kZLVezyppnctI9knAVYPpaEJUJJYwZnwuFGiYmMFQ31Wd7124jVD3qj8SaPWYC6ctOFHCtBd4SGHZlc6mWS7tjgCpl5SAm%2FITg%2Fhmcp27hxb0tkNmZBqm5AXdELttthBO0i4SrWMPKXmsMGOqUBqtDEH2PavQ9EdwUjHPTiWW9K5o437seVoS6EevL0k8nZCyFSVQwQhgo1YjVJoAVrduzV21nwhIyBJSW9Dw1zEaOlk1i0GueSfM487FThv2GR8vERtjrn%2FtqeaDDZki4dXRcD3sVsz6ub1vBn75jKGqDgowKkMISuug1l5zG9rDU%2F6R3KDDUOEh%2Bk1w1HfZ%2B%2FEZA6DVEEiVPeb%2F5pAzMhPt%2Bzc%2Fjt&X-Amz-Signature=d7d0a5e56e40ae364dd795841b50c5cb521ff50a96b7bc1f91ee4bebfa499801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
