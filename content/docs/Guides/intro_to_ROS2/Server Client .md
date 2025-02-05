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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCNAPZ5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIENkZFeHBS7Gj6L3gECM3yACOxWn0OvdL6Tatz2FupTcAiEAk5gzvqMnjUPBWOMMVZEIXEcP7L5DiIhyGqMOChtVAdQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMbipn6rV4cXn5qmEircA7ZwGLPbvF%2BxpETMYTk9T3QhvshSjH09VE6aOsdxDS6aj5BDaiB%2F7toRJn7Efoknpcouz%2BYMIH%2FBKyEO0i7cJ1FvJK1Zyw9bkL4gsJmmPa%2FCEWAm1y%2FovYh9GnjEVRJOGEC%2FNxctA2KSrYeSM%2FIvGfZ8teRolNhjtNaXwyNcr3D0oOim80R74VKnN71IgPYpn2ogJ74TCE%2FF6KXSbeaOgZypneUqIBKmKCilyqs%2FyTxIcXm75DSm69yIjRkDudZs6mcIz6A8JqwrqT6xjvZTprVSOxAsKIzebCQv%2FUi5H0GeUi1ZFJ4%2B0sRhjvWVupW6QcNpoTm14MFkSFQBpbjc8w%2Bx%2BRsGdru%2F%2F9H30JoFORUJvrDF0C36Ljb43R5OLlSfY0qlPOyRxUj%2Fg6MbpojreXIsBjcuvSYY8LaUCYniHLZeV1qVr3fWBZKvmWnoMPbXZ8arjHwODfD0dqA7G8O8FG56ftXZgII4%2F4DL%2FrHx8%2FzQaFE0khF2A9RM2sQqViobCSt%2BDFqM3cJEChaF%2FqSA91FPdWjy%2B1WnDHXKmvCxHq9LEkSNDPkEsiuyPvn4FeYw9KyvUILnKxgpvlL2vpbedHyn8RmH9t0AQhsWJvKA18wssOkZqEKDa5qXyxssMOLljb0GOqUB17oacuDepCO1mh%2FZ8Oj7%2FlSf%2FIps5J3uyGrzdILnXrMoz4pvgR4yWBdUFFqNKGRmANptb7IYGCyLCth0xWnep%2BNnQ8FbQWhf4grdFKyIPa4vQly2slqa32egkYkV7Kj26uigOaeL5CXdOIJ2r%2FWjR6%2F0LSRhO26jYzUL9II3B6TkMcaBXLAn9DNfKofiCV83xxXuWcjkbUFC8BWNudACgUrVdlxi&X-Amz-Signature=6cbca4acf758fb02cebc3128fc9919a2f44798eb42e40abb03ef4c5b6086857a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCNAPZ5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIENkZFeHBS7Gj6L3gECM3yACOxWn0OvdL6Tatz2FupTcAiEAk5gzvqMnjUPBWOMMVZEIXEcP7L5DiIhyGqMOChtVAdQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMbipn6rV4cXn5qmEircA7ZwGLPbvF%2BxpETMYTk9T3QhvshSjH09VE6aOsdxDS6aj5BDaiB%2F7toRJn7Efoknpcouz%2BYMIH%2FBKyEO0i7cJ1FvJK1Zyw9bkL4gsJmmPa%2FCEWAm1y%2FovYh9GnjEVRJOGEC%2FNxctA2KSrYeSM%2FIvGfZ8teRolNhjtNaXwyNcr3D0oOim80R74VKnN71IgPYpn2ogJ74TCE%2FF6KXSbeaOgZypneUqIBKmKCilyqs%2FyTxIcXm75DSm69yIjRkDudZs6mcIz6A8JqwrqT6xjvZTprVSOxAsKIzebCQv%2FUi5H0GeUi1ZFJ4%2B0sRhjvWVupW6QcNpoTm14MFkSFQBpbjc8w%2Bx%2BRsGdru%2F%2F9H30JoFORUJvrDF0C36Ljb43R5OLlSfY0qlPOyRxUj%2Fg6MbpojreXIsBjcuvSYY8LaUCYniHLZeV1qVr3fWBZKvmWnoMPbXZ8arjHwODfD0dqA7G8O8FG56ftXZgII4%2F4DL%2FrHx8%2FzQaFE0khF2A9RM2sQqViobCSt%2BDFqM3cJEChaF%2FqSA91FPdWjy%2B1WnDHXKmvCxHq9LEkSNDPkEsiuyPvn4FeYw9KyvUILnKxgpvlL2vpbedHyn8RmH9t0AQhsWJvKA18wssOkZqEKDa5qXyxssMOLljb0GOqUB17oacuDepCO1mh%2FZ8Oj7%2FlSf%2FIps5J3uyGrzdILnXrMoz4pvgR4yWBdUFFqNKGRmANptb7IYGCyLCth0xWnep%2BNnQ8FbQWhf4grdFKyIPa4vQly2slqa32egkYkV7Kj26uigOaeL5CXdOIJ2r%2FWjR6%2F0LSRhO26jYzUL9II3B6TkMcaBXLAn9DNfKofiCV83xxXuWcjkbUFC8BWNudACgUrVdlxi&X-Amz-Signature=3d5b6b4526c504f0a31bb14453f0a720183e3e0c5fe658fb822e65cacc9755e9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCNAPZ5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIENkZFeHBS7Gj6L3gECM3yACOxWn0OvdL6Tatz2FupTcAiEAk5gzvqMnjUPBWOMMVZEIXEcP7L5DiIhyGqMOChtVAdQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMbipn6rV4cXn5qmEircA7ZwGLPbvF%2BxpETMYTk9T3QhvshSjH09VE6aOsdxDS6aj5BDaiB%2F7toRJn7Efoknpcouz%2BYMIH%2FBKyEO0i7cJ1FvJK1Zyw9bkL4gsJmmPa%2FCEWAm1y%2FovYh9GnjEVRJOGEC%2FNxctA2KSrYeSM%2FIvGfZ8teRolNhjtNaXwyNcr3D0oOim80R74VKnN71IgPYpn2ogJ74TCE%2FF6KXSbeaOgZypneUqIBKmKCilyqs%2FyTxIcXm75DSm69yIjRkDudZs6mcIz6A8JqwrqT6xjvZTprVSOxAsKIzebCQv%2FUi5H0GeUi1ZFJ4%2B0sRhjvWVupW6QcNpoTm14MFkSFQBpbjc8w%2Bx%2BRsGdru%2F%2F9H30JoFORUJvrDF0C36Ljb43R5OLlSfY0qlPOyRxUj%2Fg6MbpojreXIsBjcuvSYY8LaUCYniHLZeV1qVr3fWBZKvmWnoMPbXZ8arjHwODfD0dqA7G8O8FG56ftXZgII4%2F4DL%2FrHx8%2FzQaFE0khF2A9RM2sQqViobCSt%2BDFqM3cJEChaF%2FqSA91FPdWjy%2B1WnDHXKmvCxHq9LEkSNDPkEsiuyPvn4FeYw9KyvUILnKxgpvlL2vpbedHyn8RmH9t0AQhsWJvKA18wssOkZqEKDa5qXyxssMOLljb0GOqUB17oacuDepCO1mh%2FZ8Oj7%2FlSf%2FIps5J3uyGrzdILnXrMoz4pvgR4yWBdUFFqNKGRmANptb7IYGCyLCth0xWnep%2BNnQ8FbQWhf4grdFKyIPa4vQly2slqa32egkYkV7Kj26uigOaeL5CXdOIJ2r%2FWjR6%2F0LSRhO26jYzUL9II3B6TkMcaBXLAn9DNfKofiCV83xxXuWcjkbUFC8BWNudACgUrVdlxi&X-Amz-Signature=a39b270cc06cc7b626df8f1ec332beaedaaa7319472d92a8002af8991d2c8ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCNAPZ5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIENkZFeHBS7Gj6L3gECM3yACOxWn0OvdL6Tatz2FupTcAiEAk5gzvqMnjUPBWOMMVZEIXEcP7L5DiIhyGqMOChtVAdQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMbipn6rV4cXn5qmEircA7ZwGLPbvF%2BxpETMYTk9T3QhvshSjH09VE6aOsdxDS6aj5BDaiB%2F7toRJn7Efoknpcouz%2BYMIH%2FBKyEO0i7cJ1FvJK1Zyw9bkL4gsJmmPa%2FCEWAm1y%2FovYh9GnjEVRJOGEC%2FNxctA2KSrYeSM%2FIvGfZ8teRolNhjtNaXwyNcr3D0oOim80R74VKnN71IgPYpn2ogJ74TCE%2FF6KXSbeaOgZypneUqIBKmKCilyqs%2FyTxIcXm75DSm69yIjRkDudZs6mcIz6A8JqwrqT6xjvZTprVSOxAsKIzebCQv%2FUi5H0GeUi1ZFJ4%2B0sRhjvWVupW6QcNpoTm14MFkSFQBpbjc8w%2Bx%2BRsGdru%2F%2F9H30JoFORUJvrDF0C36Ljb43R5OLlSfY0qlPOyRxUj%2Fg6MbpojreXIsBjcuvSYY8LaUCYniHLZeV1qVr3fWBZKvmWnoMPbXZ8arjHwODfD0dqA7G8O8FG56ftXZgII4%2F4DL%2FrHx8%2FzQaFE0khF2A9RM2sQqViobCSt%2BDFqM3cJEChaF%2FqSA91FPdWjy%2B1WnDHXKmvCxHq9LEkSNDPkEsiuyPvn4FeYw9KyvUILnKxgpvlL2vpbedHyn8RmH9t0AQhsWJvKA18wssOkZqEKDa5qXyxssMOLljb0GOqUB17oacuDepCO1mh%2FZ8Oj7%2FlSf%2FIps5J3uyGrzdILnXrMoz4pvgR4yWBdUFFqNKGRmANptb7IYGCyLCth0xWnep%2BNnQ8FbQWhf4grdFKyIPa4vQly2slqa32egkYkV7Kj26uigOaeL5CXdOIJ2r%2FWjR6%2F0LSRhO26jYzUL9II3B6TkMcaBXLAn9DNfKofiCV83xxXuWcjkbUFC8BWNudACgUrVdlxi&X-Amz-Signature=a8b5db344743bb31f51ad0dbb55f944e614b2c10593e05520eadda74f2adb8db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCNAPZ5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIENkZFeHBS7Gj6L3gECM3yACOxWn0OvdL6Tatz2FupTcAiEAk5gzvqMnjUPBWOMMVZEIXEcP7L5DiIhyGqMOChtVAdQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMbipn6rV4cXn5qmEircA7ZwGLPbvF%2BxpETMYTk9T3QhvshSjH09VE6aOsdxDS6aj5BDaiB%2F7toRJn7Efoknpcouz%2BYMIH%2FBKyEO0i7cJ1FvJK1Zyw9bkL4gsJmmPa%2FCEWAm1y%2FovYh9GnjEVRJOGEC%2FNxctA2KSrYeSM%2FIvGfZ8teRolNhjtNaXwyNcr3D0oOim80R74VKnN71IgPYpn2ogJ74TCE%2FF6KXSbeaOgZypneUqIBKmKCilyqs%2FyTxIcXm75DSm69yIjRkDudZs6mcIz6A8JqwrqT6xjvZTprVSOxAsKIzebCQv%2FUi5H0GeUi1ZFJ4%2B0sRhjvWVupW6QcNpoTm14MFkSFQBpbjc8w%2Bx%2BRsGdru%2F%2F9H30JoFORUJvrDF0C36Ljb43R5OLlSfY0qlPOyRxUj%2Fg6MbpojreXIsBjcuvSYY8LaUCYniHLZeV1qVr3fWBZKvmWnoMPbXZ8arjHwODfD0dqA7G8O8FG56ftXZgII4%2F4DL%2FrHx8%2FzQaFE0khF2A9RM2sQqViobCSt%2BDFqM3cJEChaF%2FqSA91FPdWjy%2B1WnDHXKmvCxHq9LEkSNDPkEsiuyPvn4FeYw9KyvUILnKxgpvlL2vpbedHyn8RmH9t0AQhsWJvKA18wssOkZqEKDa5qXyxssMOLljb0GOqUB17oacuDepCO1mh%2FZ8Oj7%2FlSf%2FIps5J3uyGrzdILnXrMoz4pvgR4yWBdUFFqNKGRmANptb7IYGCyLCth0xWnep%2BNnQ8FbQWhf4grdFKyIPa4vQly2slqa32egkYkV7Kj26uigOaeL5CXdOIJ2r%2FWjR6%2F0LSRhO26jYzUL9II3B6TkMcaBXLAn9DNfKofiCV83xxXuWcjkbUFC8BWNudACgUrVdlxi&X-Amz-Signature=428d5ef138512daf4fb5b78a2f9175c89ea2624462ddb0956fc0873217244aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
