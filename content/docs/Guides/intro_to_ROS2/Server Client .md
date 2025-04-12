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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NR6KK4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAP2DCbPPBHnop9%2BqC0Q1wE5ndMKlIUy5XDYXQpAPDXsAiATziT9z1oh7xIG%2FgWe8j8fiCZP%2F%2FDjkME6MTQa96CCFSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs91ZZqK%2BUBviJ7PKtwDmEgHgbs5pjrn8oea9sOFQodksidKEXJLNrOHq3%2FWxWZcKVdypm%2FHU3FcL121ZCyNCP2ofJlxF%2BC53kIJ%2FW1WF5UKO0xiXxWpPH2FamqGiHiFDwFo9ZtTDgh3RtW7HwnWJtrEYapk%2FTeXyXkZOVJSBVqvunE194%2B0pURQSZPCWHTo9x8Ih4tHP8REGWZ0Y%2Bz4h8D4xfEYT6QIXQQyEEpe8inTDGlnC2Pjfp00VhiCx5gKAOUWTxHz9QplJva0i7Yb3XqF%2Bn9v4TRlvdDwyTpRTBi9RpaDS1LXCvAjf85Jz35wDgC4ZFBQEoLi4Iy%2B0fuBTwTmHroKL6X6xp%2Fk7tN%2FXz6AsEey4zm4zE0fMYmMxLM%2FRlqJpvXw0USq1u3DpUwuaGDv%2BdbSR2U1xqv%2BRdMtyMGNXhel8o0MzVIYOxFbbisf2OzkQw3XHqWJ8LHI0cHQjHvJ7DyqrZZyJOWGFT6qITWJ6wlcx7C2Q%2Fk2raxnxTtCM%2BdM7sUt3FN%2FGxop1nbQGf5SAoRMXwPPiQWwM9z5l6cISVVyXtmDtrbw5G6VhD9otCMfQ4Z%2FBGd8H9ag1D8gDAxlLHerStfWATQnknQ5Vl3o5A8IUhIiHV2VTbFkszDO%2Blna4FLIZKUOP8AwjqjovwY6pgFQFoLpHMQ1MA0qi5OWKcztuUVy2DkbGJe419ZwCA0YNt9ytoCyTIws876K%2F0acePM9A4uWiY22zsxH7lxhLVdwt6i6hxLVlYSI7zIofo1AfuVUhM69VUPpJMRRMxV6AeZPzLyrYMnez7%2F5%2Fp3NDYfBHduiOWHNCurXOic1y9aB5I0TlX2EWEnSVa1FVaYkLk8Fy%2FJlUzdXPMoytvI52CmnHlzjUf3F&X-Amz-Signature=e710a512156438b104295ff4ab3583269595f20977b96bf8369bb5398745ca35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NR6KK4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAP2DCbPPBHnop9%2BqC0Q1wE5ndMKlIUy5XDYXQpAPDXsAiATziT9z1oh7xIG%2FgWe8j8fiCZP%2F%2FDjkME6MTQa96CCFSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs91ZZqK%2BUBviJ7PKtwDmEgHgbs5pjrn8oea9sOFQodksidKEXJLNrOHq3%2FWxWZcKVdypm%2FHU3FcL121ZCyNCP2ofJlxF%2BC53kIJ%2FW1WF5UKO0xiXxWpPH2FamqGiHiFDwFo9ZtTDgh3RtW7HwnWJtrEYapk%2FTeXyXkZOVJSBVqvunE194%2B0pURQSZPCWHTo9x8Ih4tHP8REGWZ0Y%2Bz4h8D4xfEYT6QIXQQyEEpe8inTDGlnC2Pjfp00VhiCx5gKAOUWTxHz9QplJva0i7Yb3XqF%2Bn9v4TRlvdDwyTpRTBi9RpaDS1LXCvAjf85Jz35wDgC4ZFBQEoLi4Iy%2B0fuBTwTmHroKL6X6xp%2Fk7tN%2FXz6AsEey4zm4zE0fMYmMxLM%2FRlqJpvXw0USq1u3DpUwuaGDv%2BdbSR2U1xqv%2BRdMtyMGNXhel8o0MzVIYOxFbbisf2OzkQw3XHqWJ8LHI0cHQjHvJ7DyqrZZyJOWGFT6qITWJ6wlcx7C2Q%2Fk2raxnxTtCM%2BdM7sUt3FN%2FGxop1nbQGf5SAoRMXwPPiQWwM9z5l6cISVVyXtmDtrbw5G6VhD9otCMfQ4Z%2FBGd8H9ag1D8gDAxlLHerStfWATQnknQ5Vl3o5A8IUhIiHV2VTbFkszDO%2Blna4FLIZKUOP8AwjqjovwY6pgFQFoLpHMQ1MA0qi5OWKcztuUVy2DkbGJe419ZwCA0YNt9ytoCyTIws876K%2F0acePM9A4uWiY22zsxH7lxhLVdwt6i6hxLVlYSI7zIofo1AfuVUhM69VUPpJMRRMxV6AeZPzLyrYMnez7%2F5%2Fp3NDYfBHduiOWHNCurXOic1y9aB5I0TlX2EWEnSVa1FVaYkLk8Fy%2FJlUzdXPMoytvI52CmnHlzjUf3F&X-Amz-Signature=6d58742819b20c7b23746d86ca74ed5741b0afe7da1ed54f087faa917bef0395&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NR6KK4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAP2DCbPPBHnop9%2BqC0Q1wE5ndMKlIUy5XDYXQpAPDXsAiATziT9z1oh7xIG%2FgWe8j8fiCZP%2F%2FDjkME6MTQa96CCFSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs91ZZqK%2BUBviJ7PKtwDmEgHgbs5pjrn8oea9sOFQodksidKEXJLNrOHq3%2FWxWZcKVdypm%2FHU3FcL121ZCyNCP2ofJlxF%2BC53kIJ%2FW1WF5UKO0xiXxWpPH2FamqGiHiFDwFo9ZtTDgh3RtW7HwnWJtrEYapk%2FTeXyXkZOVJSBVqvunE194%2B0pURQSZPCWHTo9x8Ih4tHP8REGWZ0Y%2Bz4h8D4xfEYT6QIXQQyEEpe8inTDGlnC2Pjfp00VhiCx5gKAOUWTxHz9QplJva0i7Yb3XqF%2Bn9v4TRlvdDwyTpRTBi9RpaDS1LXCvAjf85Jz35wDgC4ZFBQEoLi4Iy%2B0fuBTwTmHroKL6X6xp%2Fk7tN%2FXz6AsEey4zm4zE0fMYmMxLM%2FRlqJpvXw0USq1u3DpUwuaGDv%2BdbSR2U1xqv%2BRdMtyMGNXhel8o0MzVIYOxFbbisf2OzkQw3XHqWJ8LHI0cHQjHvJ7DyqrZZyJOWGFT6qITWJ6wlcx7C2Q%2Fk2raxnxTtCM%2BdM7sUt3FN%2FGxop1nbQGf5SAoRMXwPPiQWwM9z5l6cISVVyXtmDtrbw5G6VhD9otCMfQ4Z%2FBGd8H9ag1D8gDAxlLHerStfWATQnknQ5Vl3o5A8IUhIiHV2VTbFkszDO%2Blna4FLIZKUOP8AwjqjovwY6pgFQFoLpHMQ1MA0qi5OWKcztuUVy2DkbGJe419ZwCA0YNt9ytoCyTIws876K%2F0acePM9A4uWiY22zsxH7lxhLVdwt6i6hxLVlYSI7zIofo1AfuVUhM69VUPpJMRRMxV6AeZPzLyrYMnez7%2F5%2Fp3NDYfBHduiOWHNCurXOic1y9aB5I0TlX2EWEnSVa1FVaYkLk8Fy%2FJlUzdXPMoytvI52CmnHlzjUf3F&X-Amz-Signature=5c1736f719749cdd512b878a38edb4825929e53401cf7615c476bb77bb12648b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NR6KK4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAP2DCbPPBHnop9%2BqC0Q1wE5ndMKlIUy5XDYXQpAPDXsAiATziT9z1oh7xIG%2FgWe8j8fiCZP%2F%2FDjkME6MTQa96CCFSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs91ZZqK%2BUBviJ7PKtwDmEgHgbs5pjrn8oea9sOFQodksidKEXJLNrOHq3%2FWxWZcKVdypm%2FHU3FcL121ZCyNCP2ofJlxF%2BC53kIJ%2FW1WF5UKO0xiXxWpPH2FamqGiHiFDwFo9ZtTDgh3RtW7HwnWJtrEYapk%2FTeXyXkZOVJSBVqvunE194%2B0pURQSZPCWHTo9x8Ih4tHP8REGWZ0Y%2Bz4h8D4xfEYT6QIXQQyEEpe8inTDGlnC2Pjfp00VhiCx5gKAOUWTxHz9QplJva0i7Yb3XqF%2Bn9v4TRlvdDwyTpRTBi9RpaDS1LXCvAjf85Jz35wDgC4ZFBQEoLi4Iy%2B0fuBTwTmHroKL6X6xp%2Fk7tN%2FXz6AsEey4zm4zE0fMYmMxLM%2FRlqJpvXw0USq1u3DpUwuaGDv%2BdbSR2U1xqv%2BRdMtyMGNXhel8o0MzVIYOxFbbisf2OzkQw3XHqWJ8LHI0cHQjHvJ7DyqrZZyJOWGFT6qITWJ6wlcx7C2Q%2Fk2raxnxTtCM%2BdM7sUt3FN%2FGxop1nbQGf5SAoRMXwPPiQWwM9z5l6cISVVyXtmDtrbw5G6VhD9otCMfQ4Z%2FBGd8H9ag1D8gDAxlLHerStfWATQnknQ5Vl3o5A8IUhIiHV2VTbFkszDO%2Blna4FLIZKUOP8AwjqjovwY6pgFQFoLpHMQ1MA0qi5OWKcztuUVy2DkbGJe419ZwCA0YNt9ytoCyTIws876K%2F0acePM9A4uWiY22zsxH7lxhLVdwt6i6hxLVlYSI7zIofo1AfuVUhM69VUPpJMRRMxV6AeZPzLyrYMnez7%2F5%2Fp3NDYfBHduiOWHNCurXOic1y9aB5I0TlX2EWEnSVa1FVaYkLk8Fy%2FJlUzdXPMoytvI52CmnHlzjUf3F&X-Amz-Signature=957f4e545cfb0f4c5804972fbabb367f08afafbfb097c1ffceccf43ab815e1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NR6KK4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAP2DCbPPBHnop9%2BqC0Q1wE5ndMKlIUy5XDYXQpAPDXsAiATziT9z1oh7xIG%2FgWe8j8fiCZP%2F%2FDjkME6MTQa96CCFSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMs91ZZqK%2BUBviJ7PKtwDmEgHgbs5pjrn8oea9sOFQodksidKEXJLNrOHq3%2FWxWZcKVdypm%2FHU3FcL121ZCyNCP2ofJlxF%2BC53kIJ%2FW1WF5UKO0xiXxWpPH2FamqGiHiFDwFo9ZtTDgh3RtW7HwnWJtrEYapk%2FTeXyXkZOVJSBVqvunE194%2B0pURQSZPCWHTo9x8Ih4tHP8REGWZ0Y%2Bz4h8D4xfEYT6QIXQQyEEpe8inTDGlnC2Pjfp00VhiCx5gKAOUWTxHz9QplJva0i7Yb3XqF%2Bn9v4TRlvdDwyTpRTBi9RpaDS1LXCvAjf85Jz35wDgC4ZFBQEoLi4Iy%2B0fuBTwTmHroKL6X6xp%2Fk7tN%2FXz6AsEey4zm4zE0fMYmMxLM%2FRlqJpvXw0USq1u3DpUwuaGDv%2BdbSR2U1xqv%2BRdMtyMGNXhel8o0MzVIYOxFbbisf2OzkQw3XHqWJ8LHI0cHQjHvJ7DyqrZZyJOWGFT6qITWJ6wlcx7C2Q%2Fk2raxnxTtCM%2BdM7sUt3FN%2FGxop1nbQGf5SAoRMXwPPiQWwM9z5l6cISVVyXtmDtrbw5G6VhD9otCMfQ4Z%2FBGd8H9ag1D8gDAxlLHerStfWATQnknQ5Vl3o5A8IUhIiHV2VTbFkszDO%2Blna4FLIZKUOP8AwjqjovwY6pgFQFoLpHMQ1MA0qi5OWKcztuUVy2DkbGJe419ZwCA0YNt9ytoCyTIws876K%2F0acePM9A4uWiY22zsxH7lxhLVdwt6i6hxLVlYSI7zIofo1AfuVUhM69VUPpJMRRMxV6AeZPzLyrYMnez7%2F5%2Fp3NDYfBHduiOWHNCurXOic1y9aB5I0TlX2EWEnSVa1FVaYkLk8Fy%2FJlUzdXPMoytvI52CmnHlzjUf3F&X-Amz-Signature=e6bbf8c22b160d9b3f743c1e96eb1e28924675a282239c17fae37cf2ff927ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
