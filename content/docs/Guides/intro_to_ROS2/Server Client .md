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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RV3PNI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD47Y1Kqwm3rm7gKk0MA3%2BOz%2B8oh0J9kbCJ6sEYcAy1wIgXN1yiMiHcEevtvId60vayccpZwRZ8CclE99MjfmyMbMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBmlM3ErJXlCfyAnVircAyXXqZVfNUwPdEfjELUwtg1Lodz0zy7BhNowpyop3vkLjJxp4RrcnCG3uXTsjgW%2BpBxKcUwBHRG802bzNrcBjIqEnn%2FxT6wraaQjayY0ylD48Q3w87HODZbLixX0eXIMv09JhEKPX2Wa%2BpPx2qKX3CvxPvpG4KlJZoudgNpd7Z0fGxoWDnf7JSDTRANDHivf6OMrSkAcjEwyJOK8GA2JGmmpPQ3XPqHmx3fMvTnKNkj8ceGUWzUbkeG7cj9CL2uFzRk7VGJhUAhBnxMZSGPOFKbEEmHoLv3zY78jcJeGjHcSWKxY%2BZ%2F3nworEB9%2BVETdWFWjHznmr3T6ShGG%2BDA1IuSeYOHXG%2BDJ3fk3UEnkMfcXk9oJrJIBhds5sKae2QBgH3eRL8mDPbXoenxhTOb4G7jZXJGXPRH6hFjRZLHQcXW4%2B3RRBjNeOAWyHahMZEWefbBjfZRxhesNatijJtcsi4z0VHJRB8%2FX8w6F0y6PtUEpz4foyYFJp8RFToV4YL2hKKWWoOOBOwhaQo9DXioz2cNWVv4D8PiHbOOagVXGqgWp%2BLgyqi4BxeiiLypMgWN6yjiKKogAdV6yuZYeZPrgLqFp0U4XI7egdAbGw1Y7mgUP1MBmNrseLhoTOiwzMPbJqL4GOqUBjH13cmRNCEQw%2F0bZY5bfURQhyzd5nfRZAYyqyVTSsNrSbNEWdZkCm7qv3j5ErgabVtfyVYwxbra08NRR9rAyBMLfFxJY6%2BKVcSqNnmisjn5XBnm%2FBmQEZOqGzGN1%2BZ4Sz%2BAj%2FaMJQ65KtJk%2FIcDlRGi4KMVOJO%2B9uZ2B8bLSO5%2FcnzrCi%2F9w0WQG%2BZkWvyUsCLo%2Bi1eN%2Fve3nNv%2FuF0nn7ieImEm&X-Amz-Signature=80737fa633f0b63c61f37c49c909cee72f3ee3d3067aac4aff56787d7491e26e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RV3PNI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD47Y1Kqwm3rm7gKk0MA3%2BOz%2B8oh0J9kbCJ6sEYcAy1wIgXN1yiMiHcEevtvId60vayccpZwRZ8CclE99MjfmyMbMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBmlM3ErJXlCfyAnVircAyXXqZVfNUwPdEfjELUwtg1Lodz0zy7BhNowpyop3vkLjJxp4RrcnCG3uXTsjgW%2BpBxKcUwBHRG802bzNrcBjIqEnn%2FxT6wraaQjayY0ylD48Q3w87HODZbLixX0eXIMv09JhEKPX2Wa%2BpPx2qKX3CvxPvpG4KlJZoudgNpd7Z0fGxoWDnf7JSDTRANDHivf6OMrSkAcjEwyJOK8GA2JGmmpPQ3XPqHmx3fMvTnKNkj8ceGUWzUbkeG7cj9CL2uFzRk7VGJhUAhBnxMZSGPOFKbEEmHoLv3zY78jcJeGjHcSWKxY%2BZ%2F3nworEB9%2BVETdWFWjHznmr3T6ShGG%2BDA1IuSeYOHXG%2BDJ3fk3UEnkMfcXk9oJrJIBhds5sKae2QBgH3eRL8mDPbXoenxhTOb4G7jZXJGXPRH6hFjRZLHQcXW4%2B3RRBjNeOAWyHahMZEWefbBjfZRxhesNatijJtcsi4z0VHJRB8%2FX8w6F0y6PtUEpz4foyYFJp8RFToV4YL2hKKWWoOOBOwhaQo9DXioz2cNWVv4D8PiHbOOagVXGqgWp%2BLgyqi4BxeiiLypMgWN6yjiKKogAdV6yuZYeZPrgLqFp0U4XI7egdAbGw1Y7mgUP1MBmNrseLhoTOiwzMPbJqL4GOqUBjH13cmRNCEQw%2F0bZY5bfURQhyzd5nfRZAYyqyVTSsNrSbNEWdZkCm7qv3j5ErgabVtfyVYwxbra08NRR9rAyBMLfFxJY6%2BKVcSqNnmisjn5XBnm%2FBmQEZOqGzGN1%2BZ4Sz%2BAj%2FaMJQ65KtJk%2FIcDlRGi4KMVOJO%2B9uZ2B8bLSO5%2FcnzrCi%2F9w0WQG%2BZkWvyUsCLo%2Bi1eN%2Fve3nNv%2FuF0nn7ieImEm&X-Amz-Signature=bd6bdffa09cc4ad6e4e8235e974135decfa3346f3d7d259a9211b56cbdad56fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RV3PNI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD47Y1Kqwm3rm7gKk0MA3%2BOz%2B8oh0J9kbCJ6sEYcAy1wIgXN1yiMiHcEevtvId60vayccpZwRZ8CclE99MjfmyMbMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBmlM3ErJXlCfyAnVircAyXXqZVfNUwPdEfjELUwtg1Lodz0zy7BhNowpyop3vkLjJxp4RrcnCG3uXTsjgW%2BpBxKcUwBHRG802bzNrcBjIqEnn%2FxT6wraaQjayY0ylD48Q3w87HODZbLixX0eXIMv09JhEKPX2Wa%2BpPx2qKX3CvxPvpG4KlJZoudgNpd7Z0fGxoWDnf7JSDTRANDHivf6OMrSkAcjEwyJOK8GA2JGmmpPQ3XPqHmx3fMvTnKNkj8ceGUWzUbkeG7cj9CL2uFzRk7VGJhUAhBnxMZSGPOFKbEEmHoLv3zY78jcJeGjHcSWKxY%2BZ%2F3nworEB9%2BVETdWFWjHznmr3T6ShGG%2BDA1IuSeYOHXG%2BDJ3fk3UEnkMfcXk9oJrJIBhds5sKae2QBgH3eRL8mDPbXoenxhTOb4G7jZXJGXPRH6hFjRZLHQcXW4%2B3RRBjNeOAWyHahMZEWefbBjfZRxhesNatijJtcsi4z0VHJRB8%2FX8w6F0y6PtUEpz4foyYFJp8RFToV4YL2hKKWWoOOBOwhaQo9DXioz2cNWVv4D8PiHbOOagVXGqgWp%2BLgyqi4BxeiiLypMgWN6yjiKKogAdV6yuZYeZPrgLqFp0U4XI7egdAbGw1Y7mgUP1MBmNrseLhoTOiwzMPbJqL4GOqUBjH13cmRNCEQw%2F0bZY5bfURQhyzd5nfRZAYyqyVTSsNrSbNEWdZkCm7qv3j5ErgabVtfyVYwxbra08NRR9rAyBMLfFxJY6%2BKVcSqNnmisjn5XBnm%2FBmQEZOqGzGN1%2BZ4Sz%2BAj%2FaMJQ65KtJk%2FIcDlRGi4KMVOJO%2B9uZ2B8bLSO5%2FcnzrCi%2F9w0WQG%2BZkWvyUsCLo%2Bi1eN%2Fve3nNv%2FuF0nn7ieImEm&X-Amz-Signature=af244dcd3b0334199c2043b3b51121a73b68d4cec17853d0a5d84be076a3cd84&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RV3PNI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD47Y1Kqwm3rm7gKk0MA3%2BOz%2B8oh0J9kbCJ6sEYcAy1wIgXN1yiMiHcEevtvId60vayccpZwRZ8CclE99MjfmyMbMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBmlM3ErJXlCfyAnVircAyXXqZVfNUwPdEfjELUwtg1Lodz0zy7BhNowpyop3vkLjJxp4RrcnCG3uXTsjgW%2BpBxKcUwBHRG802bzNrcBjIqEnn%2FxT6wraaQjayY0ylD48Q3w87HODZbLixX0eXIMv09JhEKPX2Wa%2BpPx2qKX3CvxPvpG4KlJZoudgNpd7Z0fGxoWDnf7JSDTRANDHivf6OMrSkAcjEwyJOK8GA2JGmmpPQ3XPqHmx3fMvTnKNkj8ceGUWzUbkeG7cj9CL2uFzRk7VGJhUAhBnxMZSGPOFKbEEmHoLv3zY78jcJeGjHcSWKxY%2BZ%2F3nworEB9%2BVETdWFWjHznmr3T6ShGG%2BDA1IuSeYOHXG%2BDJ3fk3UEnkMfcXk9oJrJIBhds5sKae2QBgH3eRL8mDPbXoenxhTOb4G7jZXJGXPRH6hFjRZLHQcXW4%2B3RRBjNeOAWyHahMZEWefbBjfZRxhesNatijJtcsi4z0VHJRB8%2FX8w6F0y6PtUEpz4foyYFJp8RFToV4YL2hKKWWoOOBOwhaQo9DXioz2cNWVv4D8PiHbOOagVXGqgWp%2BLgyqi4BxeiiLypMgWN6yjiKKogAdV6yuZYeZPrgLqFp0U4XI7egdAbGw1Y7mgUP1MBmNrseLhoTOiwzMPbJqL4GOqUBjH13cmRNCEQw%2F0bZY5bfURQhyzd5nfRZAYyqyVTSsNrSbNEWdZkCm7qv3j5ErgabVtfyVYwxbra08NRR9rAyBMLfFxJY6%2BKVcSqNnmisjn5XBnm%2FBmQEZOqGzGN1%2BZ4Sz%2BAj%2FaMJQ65KtJk%2FIcDlRGi4KMVOJO%2B9uZ2B8bLSO5%2FcnzrCi%2F9w0WQG%2BZkWvyUsCLo%2Bi1eN%2Fve3nNv%2FuF0nn7ieImEm&X-Amz-Signature=85e87f726c38b6cc5b0e861979be1c9201b25fe0311e5230c3adb8e611480c58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RV3PNI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD47Y1Kqwm3rm7gKk0MA3%2BOz%2B8oh0J9kbCJ6sEYcAy1wIgXN1yiMiHcEevtvId60vayccpZwRZ8CclE99MjfmyMbMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBmlM3ErJXlCfyAnVircAyXXqZVfNUwPdEfjELUwtg1Lodz0zy7BhNowpyop3vkLjJxp4RrcnCG3uXTsjgW%2BpBxKcUwBHRG802bzNrcBjIqEnn%2FxT6wraaQjayY0ylD48Q3w87HODZbLixX0eXIMv09JhEKPX2Wa%2BpPx2qKX3CvxPvpG4KlJZoudgNpd7Z0fGxoWDnf7JSDTRANDHivf6OMrSkAcjEwyJOK8GA2JGmmpPQ3XPqHmx3fMvTnKNkj8ceGUWzUbkeG7cj9CL2uFzRk7VGJhUAhBnxMZSGPOFKbEEmHoLv3zY78jcJeGjHcSWKxY%2BZ%2F3nworEB9%2BVETdWFWjHznmr3T6ShGG%2BDA1IuSeYOHXG%2BDJ3fk3UEnkMfcXk9oJrJIBhds5sKae2QBgH3eRL8mDPbXoenxhTOb4G7jZXJGXPRH6hFjRZLHQcXW4%2B3RRBjNeOAWyHahMZEWefbBjfZRxhesNatijJtcsi4z0VHJRB8%2FX8w6F0y6PtUEpz4foyYFJp8RFToV4YL2hKKWWoOOBOwhaQo9DXioz2cNWVv4D8PiHbOOagVXGqgWp%2BLgyqi4BxeiiLypMgWN6yjiKKogAdV6yuZYeZPrgLqFp0U4XI7egdAbGw1Y7mgUP1MBmNrseLhoTOiwzMPbJqL4GOqUBjH13cmRNCEQw%2F0bZY5bfURQhyzd5nfRZAYyqyVTSsNrSbNEWdZkCm7qv3j5ErgabVtfyVYwxbra08NRR9rAyBMLfFxJY6%2BKVcSqNnmisjn5XBnm%2FBmQEZOqGzGN1%2BZ4Sz%2BAj%2FaMJQ65KtJk%2FIcDlRGi4KMVOJO%2B9uZ2B8bLSO5%2FcnzrCi%2F9w0WQG%2BZkWvyUsCLo%2Bi1eN%2Fve3nNv%2FuF0nn7ieImEm&X-Amz-Signature=879fbd0ac0f886e8aebb821ce6d859dc41a8844683b5fe4939863b28fb5c667c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
