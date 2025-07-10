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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63PVQWQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXVADrSFJ4LHYUHI%2BjhRvCtopQ4kcfbYal5e%2Bs8A9lQIgdwMXsnUAAOvNwmQkjr177ZB%2BNVeoXKxSbYzr3OfS0vUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbnHC1xSHUQyXaVQCrcA1ldbDsHMvFfpl3TFHznMZv8qORhuxwr2vXV%2Ff9GNa3SdFZHvSW2r5%2Fc3f755Tv9ZRH06hASJ2yIU3k%2FeP%2Bn20Lc6XrXWHuGUSB6NIdRuG2ovQ7D5U7bQtGGcv%2Bwic5hpZKJYm7JyZHkVka9DWJxUJHitTw50%2BFPh6m875LlUNL47OeBlaSgi%2BiKUhJ02MRgses%2F%2BnotiShzyx5q%2BSJsM9JR%2F2mRpt3If8UIxT0JdEMkgImicEssSMA1mdEKmPWivQZjCOZPIZ7IOoWabrvap1P%2Ff8mkJRi9gVo29J04t8oxBgSosqM5bIVTyGL%2FGh3vRLmW4Dp8Lm98r7iU0lU6NXzh00XR2k93TeqVdf2TNFHJealfIlmxAmyI5ZDV21aR%2F5jXM5R0RC2H9m6n5NELZeW%2F9JwPPsnKY0uAhWesYIcwF3k25gVlErYaAl900QcJGuMUyKLQ2nr5IhJj8VJjSltTrKL%2BcG0P58s5GPFSVNCTJIArlaeshnI7yJQ6MQtxMp5yj50qAWRL2h1DIK%2FVnywwLQwCEV3Vv10NZ3Ra55Mn%2BfueZfGOy0Fvu0rB78oL7Oyf%2BoRTVGSSrJYf%2BX5aJwtHgn2VgCluamQ2FCD%2FlIGYosSs0q2eimnVhsujMKuov8MGOqUBrq6yBZ0WgjK5mhf3tTNIq0cgCNIveaxMF3Mqc47IclspRYIQ1%2F5KngjwTiUlqMIKtF5zEi%2B9%2BmNoXmaE6oozmpLvHKwQ89sVrgWR6z3hsCGN0PuXYtYubk4sPof3MO1Fci8ywuJgh675d96%2Fdfj3RM1ZLdxdd06q%2FrYLlpReYzMQEHIVP71%2B0tZ8ZhISScpqMc0NFhwpRWR3bI9WQzmStS0%2BZRaX&X-Amz-Signature=9ced7b94d88a75d10685f339289c15d6647304db30dc38e47d59138be8ed9fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63PVQWQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXVADrSFJ4LHYUHI%2BjhRvCtopQ4kcfbYal5e%2Bs8A9lQIgdwMXsnUAAOvNwmQkjr177ZB%2BNVeoXKxSbYzr3OfS0vUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbnHC1xSHUQyXaVQCrcA1ldbDsHMvFfpl3TFHznMZv8qORhuxwr2vXV%2Ff9GNa3SdFZHvSW2r5%2Fc3f755Tv9ZRH06hASJ2yIU3k%2FeP%2Bn20Lc6XrXWHuGUSB6NIdRuG2ovQ7D5U7bQtGGcv%2Bwic5hpZKJYm7JyZHkVka9DWJxUJHitTw50%2BFPh6m875LlUNL47OeBlaSgi%2BiKUhJ02MRgses%2F%2BnotiShzyx5q%2BSJsM9JR%2F2mRpt3If8UIxT0JdEMkgImicEssSMA1mdEKmPWivQZjCOZPIZ7IOoWabrvap1P%2Ff8mkJRi9gVo29J04t8oxBgSosqM5bIVTyGL%2FGh3vRLmW4Dp8Lm98r7iU0lU6NXzh00XR2k93TeqVdf2TNFHJealfIlmxAmyI5ZDV21aR%2F5jXM5R0RC2H9m6n5NELZeW%2F9JwPPsnKY0uAhWesYIcwF3k25gVlErYaAl900QcJGuMUyKLQ2nr5IhJj8VJjSltTrKL%2BcG0P58s5GPFSVNCTJIArlaeshnI7yJQ6MQtxMp5yj50qAWRL2h1DIK%2FVnywwLQwCEV3Vv10NZ3Ra55Mn%2BfueZfGOy0Fvu0rB78oL7Oyf%2BoRTVGSSrJYf%2BX5aJwtHgn2VgCluamQ2FCD%2FlIGYosSs0q2eimnVhsujMKuov8MGOqUBrq6yBZ0WgjK5mhf3tTNIq0cgCNIveaxMF3Mqc47IclspRYIQ1%2F5KngjwTiUlqMIKtF5zEi%2B9%2BmNoXmaE6oozmpLvHKwQ89sVrgWR6z3hsCGN0PuXYtYubk4sPof3MO1Fci8ywuJgh675d96%2Fdfj3RM1ZLdxdd06q%2FrYLlpReYzMQEHIVP71%2B0tZ8ZhISScpqMc0NFhwpRWR3bI9WQzmStS0%2BZRaX&X-Amz-Signature=66ea22d37139350c42be3cca139b3089c1ac16bf3bafa13c5936792b67eb8d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63PVQWQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXVADrSFJ4LHYUHI%2BjhRvCtopQ4kcfbYal5e%2Bs8A9lQIgdwMXsnUAAOvNwmQkjr177ZB%2BNVeoXKxSbYzr3OfS0vUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbnHC1xSHUQyXaVQCrcA1ldbDsHMvFfpl3TFHznMZv8qORhuxwr2vXV%2Ff9GNa3SdFZHvSW2r5%2Fc3f755Tv9ZRH06hASJ2yIU3k%2FeP%2Bn20Lc6XrXWHuGUSB6NIdRuG2ovQ7D5U7bQtGGcv%2Bwic5hpZKJYm7JyZHkVka9DWJxUJHitTw50%2BFPh6m875LlUNL47OeBlaSgi%2BiKUhJ02MRgses%2F%2BnotiShzyx5q%2BSJsM9JR%2F2mRpt3If8UIxT0JdEMkgImicEssSMA1mdEKmPWivQZjCOZPIZ7IOoWabrvap1P%2Ff8mkJRi9gVo29J04t8oxBgSosqM5bIVTyGL%2FGh3vRLmW4Dp8Lm98r7iU0lU6NXzh00XR2k93TeqVdf2TNFHJealfIlmxAmyI5ZDV21aR%2F5jXM5R0RC2H9m6n5NELZeW%2F9JwPPsnKY0uAhWesYIcwF3k25gVlErYaAl900QcJGuMUyKLQ2nr5IhJj8VJjSltTrKL%2BcG0P58s5GPFSVNCTJIArlaeshnI7yJQ6MQtxMp5yj50qAWRL2h1DIK%2FVnywwLQwCEV3Vv10NZ3Ra55Mn%2BfueZfGOy0Fvu0rB78oL7Oyf%2BoRTVGSSrJYf%2BX5aJwtHgn2VgCluamQ2FCD%2FlIGYosSs0q2eimnVhsujMKuov8MGOqUBrq6yBZ0WgjK5mhf3tTNIq0cgCNIveaxMF3Mqc47IclspRYIQ1%2F5KngjwTiUlqMIKtF5zEi%2B9%2BmNoXmaE6oozmpLvHKwQ89sVrgWR6z3hsCGN0PuXYtYubk4sPof3MO1Fci8ywuJgh675d96%2Fdfj3RM1ZLdxdd06q%2FrYLlpReYzMQEHIVP71%2B0tZ8ZhISScpqMc0NFhwpRWR3bI9WQzmStS0%2BZRaX&X-Amz-Signature=b848f10138477774be7ea987befc469af31827fa4e533d1ea11dc92f7abe2fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63PVQWQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXVADrSFJ4LHYUHI%2BjhRvCtopQ4kcfbYal5e%2Bs8A9lQIgdwMXsnUAAOvNwmQkjr177ZB%2BNVeoXKxSbYzr3OfS0vUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbnHC1xSHUQyXaVQCrcA1ldbDsHMvFfpl3TFHznMZv8qORhuxwr2vXV%2Ff9GNa3SdFZHvSW2r5%2Fc3f755Tv9ZRH06hASJ2yIU3k%2FeP%2Bn20Lc6XrXWHuGUSB6NIdRuG2ovQ7D5U7bQtGGcv%2Bwic5hpZKJYm7JyZHkVka9DWJxUJHitTw50%2BFPh6m875LlUNL47OeBlaSgi%2BiKUhJ02MRgses%2F%2BnotiShzyx5q%2BSJsM9JR%2F2mRpt3If8UIxT0JdEMkgImicEssSMA1mdEKmPWivQZjCOZPIZ7IOoWabrvap1P%2Ff8mkJRi9gVo29J04t8oxBgSosqM5bIVTyGL%2FGh3vRLmW4Dp8Lm98r7iU0lU6NXzh00XR2k93TeqVdf2TNFHJealfIlmxAmyI5ZDV21aR%2F5jXM5R0RC2H9m6n5NELZeW%2F9JwPPsnKY0uAhWesYIcwF3k25gVlErYaAl900QcJGuMUyKLQ2nr5IhJj8VJjSltTrKL%2BcG0P58s5GPFSVNCTJIArlaeshnI7yJQ6MQtxMp5yj50qAWRL2h1DIK%2FVnywwLQwCEV3Vv10NZ3Ra55Mn%2BfueZfGOy0Fvu0rB78oL7Oyf%2BoRTVGSSrJYf%2BX5aJwtHgn2VgCluamQ2FCD%2FlIGYosSs0q2eimnVhsujMKuov8MGOqUBrq6yBZ0WgjK5mhf3tTNIq0cgCNIveaxMF3Mqc47IclspRYIQ1%2F5KngjwTiUlqMIKtF5zEi%2B9%2BmNoXmaE6oozmpLvHKwQ89sVrgWR6z3hsCGN0PuXYtYubk4sPof3MO1Fci8ywuJgh675d96%2Fdfj3RM1ZLdxdd06q%2FrYLlpReYzMQEHIVP71%2B0tZ8ZhISScpqMc0NFhwpRWR3bI9WQzmStS0%2BZRaX&X-Amz-Signature=80ca93b8f8aeb255320aa65286ae260a61181cca4602e0bf405f295dd2c57cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63PVQWQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXVADrSFJ4LHYUHI%2BjhRvCtopQ4kcfbYal5e%2Bs8A9lQIgdwMXsnUAAOvNwmQkjr177ZB%2BNVeoXKxSbYzr3OfS0vUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbnHC1xSHUQyXaVQCrcA1ldbDsHMvFfpl3TFHznMZv8qORhuxwr2vXV%2Ff9GNa3SdFZHvSW2r5%2Fc3f755Tv9ZRH06hASJ2yIU3k%2FeP%2Bn20Lc6XrXWHuGUSB6NIdRuG2ovQ7D5U7bQtGGcv%2Bwic5hpZKJYm7JyZHkVka9DWJxUJHitTw50%2BFPh6m875LlUNL47OeBlaSgi%2BiKUhJ02MRgses%2F%2BnotiShzyx5q%2BSJsM9JR%2F2mRpt3If8UIxT0JdEMkgImicEssSMA1mdEKmPWivQZjCOZPIZ7IOoWabrvap1P%2Ff8mkJRi9gVo29J04t8oxBgSosqM5bIVTyGL%2FGh3vRLmW4Dp8Lm98r7iU0lU6NXzh00XR2k93TeqVdf2TNFHJealfIlmxAmyI5ZDV21aR%2F5jXM5R0RC2H9m6n5NELZeW%2F9JwPPsnKY0uAhWesYIcwF3k25gVlErYaAl900QcJGuMUyKLQ2nr5IhJj8VJjSltTrKL%2BcG0P58s5GPFSVNCTJIArlaeshnI7yJQ6MQtxMp5yj50qAWRL2h1DIK%2FVnywwLQwCEV3Vv10NZ3Ra55Mn%2BfueZfGOy0Fvu0rB78oL7Oyf%2BoRTVGSSrJYf%2BX5aJwtHgn2VgCluamQ2FCD%2FlIGYosSs0q2eimnVhsujMKuov8MGOqUBrq6yBZ0WgjK5mhf3tTNIq0cgCNIveaxMF3Mqc47IclspRYIQ1%2F5KngjwTiUlqMIKtF5zEi%2B9%2BmNoXmaE6oozmpLvHKwQ89sVrgWR6z3hsCGN0PuXYtYubk4sPof3MO1Fci8ywuJgh675d96%2Fdfj3RM1ZLdxdd06q%2FrYLlpReYzMQEHIVP71%2B0tZ8ZhISScpqMc0NFhwpRWR3bI9WQzmStS0%2BZRaX&X-Amz-Signature=0a747fdbe31da878a0565470d69b5967731cf4de959be73c759721588e797776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
