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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW6Z2Y5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIuxEPH2LE1sIKTu9YxFFRzxAJ4mvsDtcwYnUnphPrwIhAOPeqpq0OSWWpMOVNticgo0kSaw6YbjtpxsjwqrFinAKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5p3BC1ODKB37cNMwq3AN8Eln1EhClcFm%2FR%2BWYIqPMHvGPtoW5f6w%2B7bNsLN8ea3nBPEcbu1gDAsM%2FiMi0T8kB9JMKBCjk4qiDk0%2FJXJQsqJ0WPacQDHGaQ0G9P%2FmsZPB717S2KeXeIf7l69pIbUjrZICKyDGwhPLukGc6f82vMDuzBMd%2BWZ6%2BiYfdjzZrBVgaBi1gQZNuQgz0bBc1NGAfSwgqmZVnZET7C4XFJ3OdKg92rjSPUgjJjqmYy5UZu0svKUaXXRKW4vLjh3efG4hx%2BDUYStIyPrcDqutpt%2FsLiu6fdbfw39TI1vd0t0%2F%2B0OZEglCPw%2Fx%2FJunitoHvZksyuU5RG22T7oz9FsDKoNq5mjdHMDd3aUROkYQycMGfoBUwdgPrBF710nxOEz9ZB9x5k6UOfJybTFbEYq%2BdW35Qu6SE5MBrFuCs832sD6sR6TvCPrIQcGOXylZoNUcIgG2eK8TkToTfSVFdQM8PsVpAJECpPR7ktmDBSGHBJ7IB4l7uhJ8%2B6X1029xbBvIGyQFcgDODkXQLmWo9HfYEMlMYOC1k4PLoDZQCL%2Fm0khsAgZU1trflBiNFgTDZenUuyIg7wRzhpLBJ0fOyQQ71L38RpvxL2%2FlyIt%2BD%2BUI6qIuqt0tN8BYu9%2BkW3UHibTCs387CBjqkAdvNlOqMgVnkMPWMXt30ElL90%2BroHD1vcvZXcKXpOlwCJJ4r7tPeD080JCoSt8hybHUHg4g5Va0gSv3JGI9PqtGgfx258MU60V2ui30BKIBfFyFAwHzyC6p5s1qIL4y5TmPaXowPZDTIGW6hVBFJ1QzBMUycZJjafY76P1%2FpZpIVE971cO5PUNhQiVzeSONRKtSwV8ZG5I2JEysA0SY9ZuiLYo%2FS&X-Amz-Signature=1a51ad88dadc951baf73fc329c3a84c5637a8b41b846536f3ebcd7a827c3ca79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW6Z2Y5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIuxEPH2LE1sIKTu9YxFFRzxAJ4mvsDtcwYnUnphPrwIhAOPeqpq0OSWWpMOVNticgo0kSaw6YbjtpxsjwqrFinAKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5p3BC1ODKB37cNMwq3AN8Eln1EhClcFm%2FR%2BWYIqPMHvGPtoW5f6w%2B7bNsLN8ea3nBPEcbu1gDAsM%2FiMi0T8kB9JMKBCjk4qiDk0%2FJXJQsqJ0WPacQDHGaQ0G9P%2FmsZPB717S2KeXeIf7l69pIbUjrZICKyDGwhPLukGc6f82vMDuzBMd%2BWZ6%2BiYfdjzZrBVgaBi1gQZNuQgz0bBc1NGAfSwgqmZVnZET7C4XFJ3OdKg92rjSPUgjJjqmYy5UZu0svKUaXXRKW4vLjh3efG4hx%2BDUYStIyPrcDqutpt%2FsLiu6fdbfw39TI1vd0t0%2F%2B0OZEglCPw%2Fx%2FJunitoHvZksyuU5RG22T7oz9FsDKoNq5mjdHMDd3aUROkYQycMGfoBUwdgPrBF710nxOEz9ZB9x5k6UOfJybTFbEYq%2BdW35Qu6SE5MBrFuCs832sD6sR6TvCPrIQcGOXylZoNUcIgG2eK8TkToTfSVFdQM8PsVpAJECpPR7ktmDBSGHBJ7IB4l7uhJ8%2B6X1029xbBvIGyQFcgDODkXQLmWo9HfYEMlMYOC1k4PLoDZQCL%2Fm0khsAgZU1trflBiNFgTDZenUuyIg7wRzhpLBJ0fOyQQ71L38RpvxL2%2FlyIt%2BD%2BUI6qIuqt0tN8BYu9%2BkW3UHibTCs387CBjqkAdvNlOqMgVnkMPWMXt30ElL90%2BroHD1vcvZXcKXpOlwCJJ4r7tPeD080JCoSt8hybHUHg4g5Va0gSv3JGI9PqtGgfx258MU60V2ui30BKIBfFyFAwHzyC6p5s1qIL4y5TmPaXowPZDTIGW6hVBFJ1QzBMUycZJjafY76P1%2FpZpIVE971cO5PUNhQiVzeSONRKtSwV8ZG5I2JEysA0SY9ZuiLYo%2FS&X-Amz-Signature=e142c2e148533de0ba237748fb5270a31d62b0cc3ac42eb6c0e4a4a1c769a05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW6Z2Y5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIuxEPH2LE1sIKTu9YxFFRzxAJ4mvsDtcwYnUnphPrwIhAOPeqpq0OSWWpMOVNticgo0kSaw6YbjtpxsjwqrFinAKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5p3BC1ODKB37cNMwq3AN8Eln1EhClcFm%2FR%2BWYIqPMHvGPtoW5f6w%2B7bNsLN8ea3nBPEcbu1gDAsM%2FiMi0T8kB9JMKBCjk4qiDk0%2FJXJQsqJ0WPacQDHGaQ0G9P%2FmsZPB717S2KeXeIf7l69pIbUjrZICKyDGwhPLukGc6f82vMDuzBMd%2BWZ6%2BiYfdjzZrBVgaBi1gQZNuQgz0bBc1NGAfSwgqmZVnZET7C4XFJ3OdKg92rjSPUgjJjqmYy5UZu0svKUaXXRKW4vLjh3efG4hx%2BDUYStIyPrcDqutpt%2FsLiu6fdbfw39TI1vd0t0%2F%2B0OZEglCPw%2Fx%2FJunitoHvZksyuU5RG22T7oz9FsDKoNq5mjdHMDd3aUROkYQycMGfoBUwdgPrBF710nxOEz9ZB9x5k6UOfJybTFbEYq%2BdW35Qu6SE5MBrFuCs832sD6sR6TvCPrIQcGOXylZoNUcIgG2eK8TkToTfSVFdQM8PsVpAJECpPR7ktmDBSGHBJ7IB4l7uhJ8%2B6X1029xbBvIGyQFcgDODkXQLmWo9HfYEMlMYOC1k4PLoDZQCL%2Fm0khsAgZU1trflBiNFgTDZenUuyIg7wRzhpLBJ0fOyQQ71L38RpvxL2%2FlyIt%2BD%2BUI6qIuqt0tN8BYu9%2BkW3UHibTCs387CBjqkAdvNlOqMgVnkMPWMXt30ElL90%2BroHD1vcvZXcKXpOlwCJJ4r7tPeD080JCoSt8hybHUHg4g5Va0gSv3JGI9PqtGgfx258MU60V2ui30BKIBfFyFAwHzyC6p5s1qIL4y5TmPaXowPZDTIGW6hVBFJ1QzBMUycZJjafY76P1%2FpZpIVE971cO5PUNhQiVzeSONRKtSwV8ZG5I2JEysA0SY9ZuiLYo%2FS&X-Amz-Signature=047e21d3a3aae29fce5abe5820db740b42c699c83ddf739d008005a1dd7279ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW6Z2Y5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIuxEPH2LE1sIKTu9YxFFRzxAJ4mvsDtcwYnUnphPrwIhAOPeqpq0OSWWpMOVNticgo0kSaw6YbjtpxsjwqrFinAKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5p3BC1ODKB37cNMwq3AN8Eln1EhClcFm%2FR%2BWYIqPMHvGPtoW5f6w%2B7bNsLN8ea3nBPEcbu1gDAsM%2FiMi0T8kB9JMKBCjk4qiDk0%2FJXJQsqJ0WPacQDHGaQ0G9P%2FmsZPB717S2KeXeIf7l69pIbUjrZICKyDGwhPLukGc6f82vMDuzBMd%2BWZ6%2BiYfdjzZrBVgaBi1gQZNuQgz0bBc1NGAfSwgqmZVnZET7C4XFJ3OdKg92rjSPUgjJjqmYy5UZu0svKUaXXRKW4vLjh3efG4hx%2BDUYStIyPrcDqutpt%2FsLiu6fdbfw39TI1vd0t0%2F%2B0OZEglCPw%2Fx%2FJunitoHvZksyuU5RG22T7oz9FsDKoNq5mjdHMDd3aUROkYQycMGfoBUwdgPrBF710nxOEz9ZB9x5k6UOfJybTFbEYq%2BdW35Qu6SE5MBrFuCs832sD6sR6TvCPrIQcGOXylZoNUcIgG2eK8TkToTfSVFdQM8PsVpAJECpPR7ktmDBSGHBJ7IB4l7uhJ8%2B6X1029xbBvIGyQFcgDODkXQLmWo9HfYEMlMYOC1k4PLoDZQCL%2Fm0khsAgZU1trflBiNFgTDZenUuyIg7wRzhpLBJ0fOyQQ71L38RpvxL2%2FlyIt%2BD%2BUI6qIuqt0tN8BYu9%2BkW3UHibTCs387CBjqkAdvNlOqMgVnkMPWMXt30ElL90%2BroHD1vcvZXcKXpOlwCJJ4r7tPeD080JCoSt8hybHUHg4g5Va0gSv3JGI9PqtGgfx258MU60V2ui30BKIBfFyFAwHzyC6p5s1qIL4y5TmPaXowPZDTIGW6hVBFJ1QzBMUycZJjafY76P1%2FpZpIVE971cO5PUNhQiVzeSONRKtSwV8ZG5I2JEysA0SY9ZuiLYo%2FS&X-Amz-Signature=58f235b9003ee41a18bccd5d298e88c0706cc1f1feea07364fae1255fa5f446f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHW6Z2Y5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIuxEPH2LE1sIKTu9YxFFRzxAJ4mvsDtcwYnUnphPrwIhAOPeqpq0OSWWpMOVNticgo0kSaw6YbjtpxsjwqrFinAKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5p3BC1ODKB37cNMwq3AN8Eln1EhClcFm%2FR%2BWYIqPMHvGPtoW5f6w%2B7bNsLN8ea3nBPEcbu1gDAsM%2FiMi0T8kB9JMKBCjk4qiDk0%2FJXJQsqJ0WPacQDHGaQ0G9P%2FmsZPB717S2KeXeIf7l69pIbUjrZICKyDGwhPLukGc6f82vMDuzBMd%2BWZ6%2BiYfdjzZrBVgaBi1gQZNuQgz0bBc1NGAfSwgqmZVnZET7C4XFJ3OdKg92rjSPUgjJjqmYy5UZu0svKUaXXRKW4vLjh3efG4hx%2BDUYStIyPrcDqutpt%2FsLiu6fdbfw39TI1vd0t0%2F%2B0OZEglCPw%2Fx%2FJunitoHvZksyuU5RG22T7oz9FsDKoNq5mjdHMDd3aUROkYQycMGfoBUwdgPrBF710nxOEz9ZB9x5k6UOfJybTFbEYq%2BdW35Qu6SE5MBrFuCs832sD6sR6TvCPrIQcGOXylZoNUcIgG2eK8TkToTfSVFdQM8PsVpAJECpPR7ktmDBSGHBJ7IB4l7uhJ8%2B6X1029xbBvIGyQFcgDODkXQLmWo9HfYEMlMYOC1k4PLoDZQCL%2Fm0khsAgZU1trflBiNFgTDZenUuyIg7wRzhpLBJ0fOyQQ71L38RpvxL2%2FlyIt%2BD%2BUI6qIuqt0tN8BYu9%2BkW3UHibTCs387CBjqkAdvNlOqMgVnkMPWMXt30ElL90%2BroHD1vcvZXcKXpOlwCJJ4r7tPeD080JCoSt8hybHUHg4g5Va0gSv3JGI9PqtGgfx258MU60V2ui30BKIBfFyFAwHzyC6p5s1qIL4y5TmPaXowPZDTIGW6hVBFJ1QzBMUycZJjafY76P1%2FpZpIVE971cO5PUNhQiVzeSONRKtSwV8ZG5I2JEysA0SY9ZuiLYo%2FS&X-Amz-Signature=7b4a4c029468e016d3bb361bba818b012e78bc61afcc719491601df38b359929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
