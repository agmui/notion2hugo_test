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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRACZ3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUIwRhRLLwf9rQEE2LdyFaBTPvCauSa95tBsubtBH7AIgS3W0J2Q%2BXF5zzWX%2BO7UnwvOb8ONzaWJSEdBAP3KGQbkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOaX4T9Pa2i1YlHIGyrcA6WD4GIhdMVMZ6SP8xeb%2FCU45OaW4c%2BoqrLumk79JMaeswKuSDtVOXpBvLCq9YL0vVP6UxzXUpMAYhUb%2FFnRIMJUORKrpSe3Vpn0rYmJeFN4uGtJYsimmY%2BZaTyiE79SmlE0P4VN90KYpkfJuoLAtQwbYNqMZKUsl9GqoxqPyk8nOUb3u7rPAfBPQGCzBHrHf8VJsSgvcgfuzqIKL%2BWKnUnhU2tDPScdv6lNdFephj2rrxNBwfxywGaalSmvofKpTIr7wrOZ4rOE9b%2BaCW0c9mUsMz17LYaoBdRiBGejj6kjgBXvlekZX746LVGBO26Z7V4swjeySnj2XnxyLg8tWzDwAEmlaN%2BBq9LTuUf%2B4GWThloSSg2l0TeYkXzNB%2FsJrUC85UbW8ufTIHNX0bWeqaiskTiM2CYA6At1fPoAsuzSm4WvbKAEZ9vjfYUwbrN3tIbskdiRpSYg%2BxyEDkOYsaw6Yk4zrcOGyXNbRcBjdNgHfbBl2zOGQ69Ks6gHsSy8Jb%2FiD5Obvafq4Igt4HLa8ucE8h4XKCgRPc7tVmEMsyGXDykiNJ2%2BV%2Bp6mxX4lR8wQdjrYfPpdjxytyJHOPnYBWQQ99Cbo4wCZG4HJf0rZqLyKNtZickEUy6gJcMuMPCV6sAGOqUBcPkKdccJOutzfMK6x3Ma5ZvrVHtvvPEnGQ5AblrJlCSxnre6dyyeMCZBwVyLQvtivLlv4k%2B6eFHm5iVt9t%2BcfKM%2BX56jJIVTTSzXOUSfgodYyXsRtKVMiL%2Fe0dgWLp3%2FwCkgfi%2BKsMv4hCr%2B2v2wdMZSnmDHqrFBjRs8wasB7P1u15aBecHgJRju1q%2FUSyYKZCeWgAMDGIZBq%2BjjaPE7gnlbNlOI&X-Amz-Signature=75ba7a29339e9a1fbebf61a6e955f31ba1d71a92c2cfd0821b2f1ec5b5bf119c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRACZ3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUIwRhRLLwf9rQEE2LdyFaBTPvCauSa95tBsubtBH7AIgS3W0J2Q%2BXF5zzWX%2BO7UnwvOb8ONzaWJSEdBAP3KGQbkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOaX4T9Pa2i1YlHIGyrcA6WD4GIhdMVMZ6SP8xeb%2FCU45OaW4c%2BoqrLumk79JMaeswKuSDtVOXpBvLCq9YL0vVP6UxzXUpMAYhUb%2FFnRIMJUORKrpSe3Vpn0rYmJeFN4uGtJYsimmY%2BZaTyiE79SmlE0P4VN90KYpkfJuoLAtQwbYNqMZKUsl9GqoxqPyk8nOUb3u7rPAfBPQGCzBHrHf8VJsSgvcgfuzqIKL%2BWKnUnhU2tDPScdv6lNdFephj2rrxNBwfxywGaalSmvofKpTIr7wrOZ4rOE9b%2BaCW0c9mUsMz17LYaoBdRiBGejj6kjgBXvlekZX746LVGBO26Z7V4swjeySnj2XnxyLg8tWzDwAEmlaN%2BBq9LTuUf%2B4GWThloSSg2l0TeYkXzNB%2FsJrUC85UbW8ufTIHNX0bWeqaiskTiM2CYA6At1fPoAsuzSm4WvbKAEZ9vjfYUwbrN3tIbskdiRpSYg%2BxyEDkOYsaw6Yk4zrcOGyXNbRcBjdNgHfbBl2zOGQ69Ks6gHsSy8Jb%2FiD5Obvafq4Igt4HLa8ucE8h4XKCgRPc7tVmEMsyGXDykiNJ2%2BV%2Bp6mxX4lR8wQdjrYfPpdjxytyJHOPnYBWQQ99Cbo4wCZG4HJf0rZqLyKNtZickEUy6gJcMuMPCV6sAGOqUBcPkKdccJOutzfMK6x3Ma5ZvrVHtvvPEnGQ5AblrJlCSxnre6dyyeMCZBwVyLQvtivLlv4k%2B6eFHm5iVt9t%2BcfKM%2BX56jJIVTTSzXOUSfgodYyXsRtKVMiL%2Fe0dgWLp3%2FwCkgfi%2BKsMv4hCr%2B2v2wdMZSnmDHqrFBjRs8wasB7P1u15aBecHgJRju1q%2FUSyYKZCeWgAMDGIZBq%2BjjaPE7gnlbNlOI&X-Amz-Signature=33862f47d963d79f3a4f5085eaecc7988fa0806429bd16a633f795c55ccf2ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRACZ3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUIwRhRLLwf9rQEE2LdyFaBTPvCauSa95tBsubtBH7AIgS3W0J2Q%2BXF5zzWX%2BO7UnwvOb8ONzaWJSEdBAP3KGQbkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOaX4T9Pa2i1YlHIGyrcA6WD4GIhdMVMZ6SP8xeb%2FCU45OaW4c%2BoqrLumk79JMaeswKuSDtVOXpBvLCq9YL0vVP6UxzXUpMAYhUb%2FFnRIMJUORKrpSe3Vpn0rYmJeFN4uGtJYsimmY%2BZaTyiE79SmlE0P4VN90KYpkfJuoLAtQwbYNqMZKUsl9GqoxqPyk8nOUb3u7rPAfBPQGCzBHrHf8VJsSgvcgfuzqIKL%2BWKnUnhU2tDPScdv6lNdFephj2rrxNBwfxywGaalSmvofKpTIr7wrOZ4rOE9b%2BaCW0c9mUsMz17LYaoBdRiBGejj6kjgBXvlekZX746LVGBO26Z7V4swjeySnj2XnxyLg8tWzDwAEmlaN%2BBq9LTuUf%2B4GWThloSSg2l0TeYkXzNB%2FsJrUC85UbW8ufTIHNX0bWeqaiskTiM2CYA6At1fPoAsuzSm4WvbKAEZ9vjfYUwbrN3tIbskdiRpSYg%2BxyEDkOYsaw6Yk4zrcOGyXNbRcBjdNgHfbBl2zOGQ69Ks6gHsSy8Jb%2FiD5Obvafq4Igt4HLa8ucE8h4XKCgRPc7tVmEMsyGXDykiNJ2%2BV%2Bp6mxX4lR8wQdjrYfPpdjxytyJHOPnYBWQQ99Cbo4wCZG4HJf0rZqLyKNtZickEUy6gJcMuMPCV6sAGOqUBcPkKdccJOutzfMK6x3Ma5ZvrVHtvvPEnGQ5AblrJlCSxnre6dyyeMCZBwVyLQvtivLlv4k%2B6eFHm5iVt9t%2BcfKM%2BX56jJIVTTSzXOUSfgodYyXsRtKVMiL%2Fe0dgWLp3%2FwCkgfi%2BKsMv4hCr%2B2v2wdMZSnmDHqrFBjRs8wasB7P1u15aBecHgJRju1q%2FUSyYKZCeWgAMDGIZBq%2BjjaPE7gnlbNlOI&X-Amz-Signature=0334d7c9acfbc3e5b14f24858d4f16b861768efac97ae29f42075385d3f6d788&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRACZ3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUIwRhRLLwf9rQEE2LdyFaBTPvCauSa95tBsubtBH7AIgS3W0J2Q%2BXF5zzWX%2BO7UnwvOb8ONzaWJSEdBAP3KGQbkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOaX4T9Pa2i1YlHIGyrcA6WD4GIhdMVMZ6SP8xeb%2FCU45OaW4c%2BoqrLumk79JMaeswKuSDtVOXpBvLCq9YL0vVP6UxzXUpMAYhUb%2FFnRIMJUORKrpSe3Vpn0rYmJeFN4uGtJYsimmY%2BZaTyiE79SmlE0P4VN90KYpkfJuoLAtQwbYNqMZKUsl9GqoxqPyk8nOUb3u7rPAfBPQGCzBHrHf8VJsSgvcgfuzqIKL%2BWKnUnhU2tDPScdv6lNdFephj2rrxNBwfxywGaalSmvofKpTIr7wrOZ4rOE9b%2BaCW0c9mUsMz17LYaoBdRiBGejj6kjgBXvlekZX746LVGBO26Z7V4swjeySnj2XnxyLg8tWzDwAEmlaN%2BBq9LTuUf%2B4GWThloSSg2l0TeYkXzNB%2FsJrUC85UbW8ufTIHNX0bWeqaiskTiM2CYA6At1fPoAsuzSm4WvbKAEZ9vjfYUwbrN3tIbskdiRpSYg%2BxyEDkOYsaw6Yk4zrcOGyXNbRcBjdNgHfbBl2zOGQ69Ks6gHsSy8Jb%2FiD5Obvafq4Igt4HLa8ucE8h4XKCgRPc7tVmEMsyGXDykiNJ2%2BV%2Bp6mxX4lR8wQdjrYfPpdjxytyJHOPnYBWQQ99Cbo4wCZG4HJf0rZqLyKNtZickEUy6gJcMuMPCV6sAGOqUBcPkKdccJOutzfMK6x3Ma5ZvrVHtvvPEnGQ5AblrJlCSxnre6dyyeMCZBwVyLQvtivLlv4k%2B6eFHm5iVt9t%2BcfKM%2BX56jJIVTTSzXOUSfgodYyXsRtKVMiL%2Fe0dgWLp3%2FwCkgfi%2BKsMv4hCr%2B2v2wdMZSnmDHqrFBjRs8wasB7P1u15aBecHgJRju1q%2FUSyYKZCeWgAMDGIZBq%2BjjaPE7gnlbNlOI&X-Amz-Signature=600b4660c1827bca7a9db155311dc5c3915c1469792e3691fad9e6745ba028c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRACZ3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUIwRhRLLwf9rQEE2LdyFaBTPvCauSa95tBsubtBH7AIgS3W0J2Q%2BXF5zzWX%2BO7UnwvOb8ONzaWJSEdBAP3KGQbkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOaX4T9Pa2i1YlHIGyrcA6WD4GIhdMVMZ6SP8xeb%2FCU45OaW4c%2BoqrLumk79JMaeswKuSDtVOXpBvLCq9YL0vVP6UxzXUpMAYhUb%2FFnRIMJUORKrpSe3Vpn0rYmJeFN4uGtJYsimmY%2BZaTyiE79SmlE0P4VN90KYpkfJuoLAtQwbYNqMZKUsl9GqoxqPyk8nOUb3u7rPAfBPQGCzBHrHf8VJsSgvcgfuzqIKL%2BWKnUnhU2tDPScdv6lNdFephj2rrxNBwfxywGaalSmvofKpTIr7wrOZ4rOE9b%2BaCW0c9mUsMz17LYaoBdRiBGejj6kjgBXvlekZX746LVGBO26Z7V4swjeySnj2XnxyLg8tWzDwAEmlaN%2BBq9LTuUf%2B4GWThloSSg2l0TeYkXzNB%2FsJrUC85UbW8ufTIHNX0bWeqaiskTiM2CYA6At1fPoAsuzSm4WvbKAEZ9vjfYUwbrN3tIbskdiRpSYg%2BxyEDkOYsaw6Yk4zrcOGyXNbRcBjdNgHfbBl2zOGQ69Ks6gHsSy8Jb%2FiD5Obvafq4Igt4HLa8ucE8h4XKCgRPc7tVmEMsyGXDykiNJ2%2BV%2Bp6mxX4lR8wQdjrYfPpdjxytyJHOPnYBWQQ99Cbo4wCZG4HJf0rZqLyKNtZickEUy6gJcMuMPCV6sAGOqUBcPkKdccJOutzfMK6x3Ma5ZvrVHtvvPEnGQ5AblrJlCSxnre6dyyeMCZBwVyLQvtivLlv4k%2B6eFHm5iVt9t%2BcfKM%2BX56jJIVTTSzXOUSfgodYyXsRtKVMiL%2Fe0dgWLp3%2FwCkgfi%2BKsMv4hCr%2B2v2wdMZSnmDHqrFBjRs8wasB7P1u15aBecHgJRju1q%2FUSyYKZCeWgAMDGIZBq%2BjjaPE7gnlbNlOI&X-Amz-Signature=1a7024f04535079cec941a85b95d5cd44954a02aacd1cec78604275c280086ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
