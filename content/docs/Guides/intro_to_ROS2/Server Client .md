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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N3MSN2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8KlfxNHTUd2UuUlR6rR%2BA0sjPvB6caDSLYq9C52DKwAiEA%2FW6MasJhgWsKjAkPBSGTaBIydcD9c9MKOg7uocz2glEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOPon5gaqvk4k0nTvCrcA41kPhxZp3RNg0ev6J%2FoSQCaza8pQHdCy1vvqulSLc0JtWZl5V6i0cH6%2B2b0fgLsK8xyzuOfNykI3930pkpDZnAqAq6yqjE3LalR79iY%2FdG3e3UcaZHNN67ne4LuaRszcUUR9RNKf3mcFlVLkhNyff%2FWKIxgbfAIucl3EYSJpFQNuYU096j5xa7WTTbFaNiGaN8M4CXQINz9rQMhHpbSN%2FhMP8zh%2FPBUhCxddxqGVzcjgMYypn4tHTfkALuej7y3fSZ94BuEng18xOnSbpPONUCodJs5CzGkEp7%2FTVwb5SytKmgxLYz%2FerxfoirZ%2B5Wb2ijYy0mdAnaNnniI%2Fky2%2FQcxedAb00pnodWJL37bNW729lxa0mjELUp0LevYUc6zptbkgNLrCPPmbOwMMz60d34E%2FRsg%2BYTYpdUIZvMAWhGR83YCY4wo4DcAa4yobAJs0x4tz2GZ2Y%2BZZsIFLeNJFIXfgL%2F%2FA3l6trB7OjKZ0m9s8eohAAF0djCXIsnUVGk7c5okHUZ5wqP8DDLvVkKGwpgbFwML4dLefkgckhOQhcmK4tzdy8WUQ%2FyyL8ZUIIFfa702fC%2F57q%2FlFOY6OjZuxjyeuGPozWkBHsdv7uTDu1SAFcOI6kbNTo5gtnq%2FMKfEnsEGOqUBHtwHtXP0bI3VTli%2BvyrGwFqSQDXYNHLHowqjpivWfG2VEBhMggpue7H9S32bkn40ZhxrKx%2Be0NalJKQTDSxf%2BhJekEt2o0vSb8Qqc%2F4vbBj9ITcLmPozvlNQD%2F29Dzbc76%2BANhHRKYHaSgO6yhoL39HoS8jUVfg3tx6ieCn6f1eEV11h58ici3dW1FvqXAFiol8wvCr4Ab9mRLo%2BYvGOAZD%2BP%2BUM&X-Amz-Signature=857ebc8123b32b11b57d4606d232a292cd1cbf3acba273f76a464271b6426189&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N3MSN2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8KlfxNHTUd2UuUlR6rR%2BA0sjPvB6caDSLYq9C52DKwAiEA%2FW6MasJhgWsKjAkPBSGTaBIydcD9c9MKOg7uocz2glEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOPon5gaqvk4k0nTvCrcA41kPhxZp3RNg0ev6J%2FoSQCaza8pQHdCy1vvqulSLc0JtWZl5V6i0cH6%2B2b0fgLsK8xyzuOfNykI3930pkpDZnAqAq6yqjE3LalR79iY%2FdG3e3UcaZHNN67ne4LuaRszcUUR9RNKf3mcFlVLkhNyff%2FWKIxgbfAIucl3EYSJpFQNuYU096j5xa7WTTbFaNiGaN8M4CXQINz9rQMhHpbSN%2FhMP8zh%2FPBUhCxddxqGVzcjgMYypn4tHTfkALuej7y3fSZ94BuEng18xOnSbpPONUCodJs5CzGkEp7%2FTVwb5SytKmgxLYz%2FerxfoirZ%2B5Wb2ijYy0mdAnaNnniI%2Fky2%2FQcxedAb00pnodWJL37bNW729lxa0mjELUp0LevYUc6zptbkgNLrCPPmbOwMMz60d34E%2FRsg%2BYTYpdUIZvMAWhGR83YCY4wo4DcAa4yobAJs0x4tz2GZ2Y%2BZZsIFLeNJFIXfgL%2F%2FA3l6trB7OjKZ0m9s8eohAAF0djCXIsnUVGk7c5okHUZ5wqP8DDLvVkKGwpgbFwML4dLefkgckhOQhcmK4tzdy8WUQ%2FyyL8ZUIIFfa702fC%2F57q%2FlFOY6OjZuxjyeuGPozWkBHsdv7uTDu1SAFcOI6kbNTo5gtnq%2FMKfEnsEGOqUBHtwHtXP0bI3VTli%2BvyrGwFqSQDXYNHLHowqjpivWfG2VEBhMggpue7H9S32bkn40ZhxrKx%2Be0NalJKQTDSxf%2BhJekEt2o0vSb8Qqc%2F4vbBj9ITcLmPozvlNQD%2F29Dzbc76%2BANhHRKYHaSgO6yhoL39HoS8jUVfg3tx6ieCn6f1eEV11h58ici3dW1FvqXAFiol8wvCr4Ab9mRLo%2BYvGOAZD%2BP%2BUM&X-Amz-Signature=76727fe2cc7e381149665b1a53a4a4b0b20ee7135cc21c2461c280899751aa72&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N3MSN2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8KlfxNHTUd2UuUlR6rR%2BA0sjPvB6caDSLYq9C52DKwAiEA%2FW6MasJhgWsKjAkPBSGTaBIydcD9c9MKOg7uocz2glEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOPon5gaqvk4k0nTvCrcA41kPhxZp3RNg0ev6J%2FoSQCaza8pQHdCy1vvqulSLc0JtWZl5V6i0cH6%2B2b0fgLsK8xyzuOfNykI3930pkpDZnAqAq6yqjE3LalR79iY%2FdG3e3UcaZHNN67ne4LuaRszcUUR9RNKf3mcFlVLkhNyff%2FWKIxgbfAIucl3EYSJpFQNuYU096j5xa7WTTbFaNiGaN8M4CXQINz9rQMhHpbSN%2FhMP8zh%2FPBUhCxddxqGVzcjgMYypn4tHTfkALuej7y3fSZ94BuEng18xOnSbpPONUCodJs5CzGkEp7%2FTVwb5SytKmgxLYz%2FerxfoirZ%2B5Wb2ijYy0mdAnaNnniI%2Fky2%2FQcxedAb00pnodWJL37bNW729lxa0mjELUp0LevYUc6zptbkgNLrCPPmbOwMMz60d34E%2FRsg%2BYTYpdUIZvMAWhGR83YCY4wo4DcAa4yobAJs0x4tz2GZ2Y%2BZZsIFLeNJFIXfgL%2F%2FA3l6trB7OjKZ0m9s8eohAAF0djCXIsnUVGk7c5okHUZ5wqP8DDLvVkKGwpgbFwML4dLefkgckhOQhcmK4tzdy8WUQ%2FyyL8ZUIIFfa702fC%2F57q%2FlFOY6OjZuxjyeuGPozWkBHsdv7uTDu1SAFcOI6kbNTo5gtnq%2FMKfEnsEGOqUBHtwHtXP0bI3VTli%2BvyrGwFqSQDXYNHLHowqjpivWfG2VEBhMggpue7H9S32bkn40ZhxrKx%2Be0NalJKQTDSxf%2BhJekEt2o0vSb8Qqc%2F4vbBj9ITcLmPozvlNQD%2F29Dzbc76%2BANhHRKYHaSgO6yhoL39HoS8jUVfg3tx6ieCn6f1eEV11h58ici3dW1FvqXAFiol8wvCr4Ab9mRLo%2BYvGOAZD%2BP%2BUM&X-Amz-Signature=ecc55520c605a989fefa6a7edad03042b15ecb1c15eb76cd9a02b8653332640e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N3MSN2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8KlfxNHTUd2UuUlR6rR%2BA0sjPvB6caDSLYq9C52DKwAiEA%2FW6MasJhgWsKjAkPBSGTaBIydcD9c9MKOg7uocz2glEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOPon5gaqvk4k0nTvCrcA41kPhxZp3RNg0ev6J%2FoSQCaza8pQHdCy1vvqulSLc0JtWZl5V6i0cH6%2B2b0fgLsK8xyzuOfNykI3930pkpDZnAqAq6yqjE3LalR79iY%2FdG3e3UcaZHNN67ne4LuaRszcUUR9RNKf3mcFlVLkhNyff%2FWKIxgbfAIucl3EYSJpFQNuYU096j5xa7WTTbFaNiGaN8M4CXQINz9rQMhHpbSN%2FhMP8zh%2FPBUhCxddxqGVzcjgMYypn4tHTfkALuej7y3fSZ94BuEng18xOnSbpPONUCodJs5CzGkEp7%2FTVwb5SytKmgxLYz%2FerxfoirZ%2B5Wb2ijYy0mdAnaNnniI%2Fky2%2FQcxedAb00pnodWJL37bNW729lxa0mjELUp0LevYUc6zptbkgNLrCPPmbOwMMz60d34E%2FRsg%2BYTYpdUIZvMAWhGR83YCY4wo4DcAa4yobAJs0x4tz2GZ2Y%2BZZsIFLeNJFIXfgL%2F%2FA3l6trB7OjKZ0m9s8eohAAF0djCXIsnUVGk7c5okHUZ5wqP8DDLvVkKGwpgbFwML4dLefkgckhOQhcmK4tzdy8WUQ%2FyyL8ZUIIFfa702fC%2F57q%2FlFOY6OjZuxjyeuGPozWkBHsdv7uTDu1SAFcOI6kbNTo5gtnq%2FMKfEnsEGOqUBHtwHtXP0bI3VTli%2BvyrGwFqSQDXYNHLHowqjpivWfG2VEBhMggpue7H9S32bkn40ZhxrKx%2Be0NalJKQTDSxf%2BhJekEt2o0vSb8Qqc%2F4vbBj9ITcLmPozvlNQD%2F29Dzbc76%2BANhHRKYHaSgO6yhoL39HoS8jUVfg3tx6ieCn6f1eEV11h58ici3dW1FvqXAFiol8wvCr4Ab9mRLo%2BYvGOAZD%2BP%2BUM&X-Amz-Signature=e35e8bc1d929b22c06dba22fa390e77e79be239dd322aec057c2812fde7b6a67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7N3MSN2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8KlfxNHTUd2UuUlR6rR%2BA0sjPvB6caDSLYq9C52DKwAiEA%2FW6MasJhgWsKjAkPBSGTaBIydcD9c9MKOg7uocz2glEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOPon5gaqvk4k0nTvCrcA41kPhxZp3RNg0ev6J%2FoSQCaza8pQHdCy1vvqulSLc0JtWZl5V6i0cH6%2B2b0fgLsK8xyzuOfNykI3930pkpDZnAqAq6yqjE3LalR79iY%2FdG3e3UcaZHNN67ne4LuaRszcUUR9RNKf3mcFlVLkhNyff%2FWKIxgbfAIucl3EYSJpFQNuYU096j5xa7WTTbFaNiGaN8M4CXQINz9rQMhHpbSN%2FhMP8zh%2FPBUhCxddxqGVzcjgMYypn4tHTfkALuej7y3fSZ94BuEng18xOnSbpPONUCodJs5CzGkEp7%2FTVwb5SytKmgxLYz%2FerxfoirZ%2B5Wb2ijYy0mdAnaNnniI%2Fky2%2FQcxedAb00pnodWJL37bNW729lxa0mjELUp0LevYUc6zptbkgNLrCPPmbOwMMz60d34E%2FRsg%2BYTYpdUIZvMAWhGR83YCY4wo4DcAa4yobAJs0x4tz2GZ2Y%2BZZsIFLeNJFIXfgL%2F%2FA3l6trB7OjKZ0m9s8eohAAF0djCXIsnUVGk7c5okHUZ5wqP8DDLvVkKGwpgbFwML4dLefkgckhOQhcmK4tzdy8WUQ%2FyyL8ZUIIFfa702fC%2F57q%2FlFOY6OjZuxjyeuGPozWkBHsdv7uTDu1SAFcOI6kbNTo5gtnq%2FMKfEnsEGOqUBHtwHtXP0bI3VTli%2BvyrGwFqSQDXYNHLHowqjpivWfG2VEBhMggpue7H9S32bkn40ZhxrKx%2Be0NalJKQTDSxf%2BhJekEt2o0vSb8Qqc%2F4vbBj9ITcLmPozvlNQD%2F29Dzbc76%2BANhHRKYHaSgO6yhoL39HoS8jUVfg3tx6ieCn6f1eEV11h58ici3dW1FvqXAFiol8wvCr4Ab9mRLo%2BYvGOAZD%2BP%2BUM&X-Amz-Signature=7c2c89d7a862bf7c48c9187ee297016c3ec001ae0cecb848fba83c471d746c89&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
