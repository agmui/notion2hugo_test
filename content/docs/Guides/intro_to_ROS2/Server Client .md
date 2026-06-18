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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HBD7ZV%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxESaT%2FYjFTr5MPatO3Ck0sOcTPpp%2BBlp1G7uiGdfC0AiEAxCgTIUwY0xIAEnX735zqRWYWpGAsRX20HQYfTXLbzVsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6UfuOVYuDJ7tX8ircA9bN3pGem%2BhhwwZyvzaCQe7OLWI3R4meL60%2BlmhuYjB2PkluyLTqRzJITLvMDOgNpCJcy8g%2FmOzIcMSaLWe3SA6x5ZqsL0HImxzDh0c%2F6LsGks4c%2FgbqwqRttaR7raqW171IZrjgJdiyz%2FQhweWPRKbSy%2BcrUZuxqF8P%2FLYo57wBXkx2JN5JvpAAhJIzhVvuTOAsyIcF25Rad74erR9%2BO0yWol8CjqRBB4u%2BPM%2BC7TZ3xGMNKTki5XsuYFFZfVvoa%2BNJiRuBhG07Gmq0%2F6bMEeh%2FdbDf68gNcrHNTXIwy6ZGa4FHi%2BGejEhAexNOEGbCiG4LBWTuuePl0ss8c6uC6GYX3%2FlCqBZcyI7n%2Fy82qu1LQ94UR0Uy8X9LUDECXtU9p%2BOL2ePuGiGWrtXAPk%2FLC6rp9XkGFxdMXFL57aoV%2BPN3jhvYPH5E8VEYEE7udaiaM9d%2BhdmuyjxhTD05bTZYPNXU0CadLbN5%2Bf4GsFtqpvsoSByO5gTCMW9Xy9cgAYAy6PA2%2BSqEZginxshzn9YAxzK8vJWscBe15%2BwQhzJjksjK93O9ks5%2F90FMZsVopgNWHay%2B6ute6VSKgGlMHM3LVAvQwRolWwHPfLuRc0vKOGf5b1MASp%2Fmtasq6NBwMMWxzdEGOqUBbqdaCgA00rJbTMFik7PL1hkm9v8gTpVfElhPIF1VuINTG%2Fqpvz0Xx1mzLZN4m91ahC3RjgdqHGk%2Ff7NwDLYoD%2BrQ1qmAv%2B4XV1hAt3OOn6FMmFWfKNd9eCRDcZxWpKdsPOq8Rr5%2FmxxIPcFeQFP5MK65ZzDN7bKOc95ldaFwy%2F%2B%2BkaaLE0mNvOvPdHFWdsBp6ZBUzu1f9n6SmBSUbOwHkeKhxkpc&X-Amz-Signature=a2702b94ef69a2473ccfbab1c78dec489328cea982505d217085b6ceafee7002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HBD7ZV%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxESaT%2FYjFTr5MPatO3Ck0sOcTPpp%2BBlp1G7uiGdfC0AiEAxCgTIUwY0xIAEnX735zqRWYWpGAsRX20HQYfTXLbzVsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6UfuOVYuDJ7tX8ircA9bN3pGem%2BhhwwZyvzaCQe7OLWI3R4meL60%2BlmhuYjB2PkluyLTqRzJITLvMDOgNpCJcy8g%2FmOzIcMSaLWe3SA6x5ZqsL0HImxzDh0c%2F6LsGks4c%2FgbqwqRttaR7raqW171IZrjgJdiyz%2FQhweWPRKbSy%2BcrUZuxqF8P%2FLYo57wBXkx2JN5JvpAAhJIzhVvuTOAsyIcF25Rad74erR9%2BO0yWol8CjqRBB4u%2BPM%2BC7TZ3xGMNKTki5XsuYFFZfVvoa%2BNJiRuBhG07Gmq0%2F6bMEeh%2FdbDf68gNcrHNTXIwy6ZGa4FHi%2BGejEhAexNOEGbCiG4LBWTuuePl0ss8c6uC6GYX3%2FlCqBZcyI7n%2Fy82qu1LQ94UR0Uy8X9LUDECXtU9p%2BOL2ePuGiGWrtXAPk%2FLC6rp9XkGFxdMXFL57aoV%2BPN3jhvYPH5E8VEYEE7udaiaM9d%2BhdmuyjxhTD05bTZYPNXU0CadLbN5%2Bf4GsFtqpvsoSByO5gTCMW9Xy9cgAYAy6PA2%2BSqEZginxshzn9YAxzK8vJWscBe15%2BwQhzJjksjK93O9ks5%2F90FMZsVopgNWHay%2B6ute6VSKgGlMHM3LVAvQwRolWwHPfLuRc0vKOGf5b1MASp%2Fmtasq6NBwMMWxzdEGOqUBbqdaCgA00rJbTMFik7PL1hkm9v8gTpVfElhPIF1VuINTG%2Fqpvz0Xx1mzLZN4m91ahC3RjgdqHGk%2Ff7NwDLYoD%2BrQ1qmAv%2B4XV1hAt3OOn6FMmFWfKNd9eCRDcZxWpKdsPOq8Rr5%2FmxxIPcFeQFP5MK65ZzDN7bKOc95ldaFwy%2F%2B%2BkaaLE0mNvOvPdHFWdsBp6ZBUzu1f9n6SmBSUbOwHkeKhxkpc&X-Amz-Signature=bd0ebd6466f545bb8f28bd3ece09853274c385d7668917a033836b335f2bdeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HBD7ZV%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxESaT%2FYjFTr5MPatO3Ck0sOcTPpp%2BBlp1G7uiGdfC0AiEAxCgTIUwY0xIAEnX735zqRWYWpGAsRX20HQYfTXLbzVsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6UfuOVYuDJ7tX8ircA9bN3pGem%2BhhwwZyvzaCQe7OLWI3R4meL60%2BlmhuYjB2PkluyLTqRzJITLvMDOgNpCJcy8g%2FmOzIcMSaLWe3SA6x5ZqsL0HImxzDh0c%2F6LsGks4c%2FgbqwqRttaR7raqW171IZrjgJdiyz%2FQhweWPRKbSy%2BcrUZuxqF8P%2FLYo57wBXkx2JN5JvpAAhJIzhVvuTOAsyIcF25Rad74erR9%2BO0yWol8CjqRBB4u%2BPM%2BC7TZ3xGMNKTki5XsuYFFZfVvoa%2BNJiRuBhG07Gmq0%2F6bMEeh%2FdbDf68gNcrHNTXIwy6ZGa4FHi%2BGejEhAexNOEGbCiG4LBWTuuePl0ss8c6uC6GYX3%2FlCqBZcyI7n%2Fy82qu1LQ94UR0Uy8X9LUDECXtU9p%2BOL2ePuGiGWrtXAPk%2FLC6rp9XkGFxdMXFL57aoV%2BPN3jhvYPH5E8VEYEE7udaiaM9d%2BhdmuyjxhTD05bTZYPNXU0CadLbN5%2Bf4GsFtqpvsoSByO5gTCMW9Xy9cgAYAy6PA2%2BSqEZginxshzn9YAxzK8vJWscBe15%2BwQhzJjksjK93O9ks5%2F90FMZsVopgNWHay%2B6ute6VSKgGlMHM3LVAvQwRolWwHPfLuRc0vKOGf5b1MASp%2Fmtasq6NBwMMWxzdEGOqUBbqdaCgA00rJbTMFik7PL1hkm9v8gTpVfElhPIF1VuINTG%2Fqpvz0Xx1mzLZN4m91ahC3RjgdqHGk%2Ff7NwDLYoD%2BrQ1qmAv%2B4XV1hAt3OOn6FMmFWfKNd9eCRDcZxWpKdsPOq8Rr5%2FmxxIPcFeQFP5MK65ZzDN7bKOc95ldaFwy%2F%2B%2BkaaLE0mNvOvPdHFWdsBp6ZBUzu1f9n6SmBSUbOwHkeKhxkpc&X-Amz-Signature=b9597615b60d78db389a0d5be75dfd48f5ece3c5e3519c926ce73a78f9b6c51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HBD7ZV%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxESaT%2FYjFTr5MPatO3Ck0sOcTPpp%2BBlp1G7uiGdfC0AiEAxCgTIUwY0xIAEnX735zqRWYWpGAsRX20HQYfTXLbzVsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6UfuOVYuDJ7tX8ircA9bN3pGem%2BhhwwZyvzaCQe7OLWI3R4meL60%2BlmhuYjB2PkluyLTqRzJITLvMDOgNpCJcy8g%2FmOzIcMSaLWe3SA6x5ZqsL0HImxzDh0c%2F6LsGks4c%2FgbqwqRttaR7raqW171IZrjgJdiyz%2FQhweWPRKbSy%2BcrUZuxqF8P%2FLYo57wBXkx2JN5JvpAAhJIzhVvuTOAsyIcF25Rad74erR9%2BO0yWol8CjqRBB4u%2BPM%2BC7TZ3xGMNKTki5XsuYFFZfVvoa%2BNJiRuBhG07Gmq0%2F6bMEeh%2FdbDf68gNcrHNTXIwy6ZGa4FHi%2BGejEhAexNOEGbCiG4LBWTuuePl0ss8c6uC6GYX3%2FlCqBZcyI7n%2Fy82qu1LQ94UR0Uy8X9LUDECXtU9p%2BOL2ePuGiGWrtXAPk%2FLC6rp9XkGFxdMXFL57aoV%2BPN3jhvYPH5E8VEYEE7udaiaM9d%2BhdmuyjxhTD05bTZYPNXU0CadLbN5%2Bf4GsFtqpvsoSByO5gTCMW9Xy9cgAYAy6PA2%2BSqEZginxshzn9YAxzK8vJWscBe15%2BwQhzJjksjK93O9ks5%2F90FMZsVopgNWHay%2B6ute6VSKgGlMHM3LVAvQwRolWwHPfLuRc0vKOGf5b1MASp%2Fmtasq6NBwMMWxzdEGOqUBbqdaCgA00rJbTMFik7PL1hkm9v8gTpVfElhPIF1VuINTG%2Fqpvz0Xx1mzLZN4m91ahC3RjgdqHGk%2Ff7NwDLYoD%2BrQ1qmAv%2B4XV1hAt3OOn6FMmFWfKNd9eCRDcZxWpKdsPOq8Rr5%2FmxxIPcFeQFP5MK65ZzDN7bKOc95ldaFwy%2F%2B%2BkaaLE0mNvOvPdHFWdsBp6ZBUzu1f9n6SmBSUbOwHkeKhxkpc&X-Amz-Signature=a8437f547f53fc5e69f6e3717cffedaa39cbfe8034604588a289f898f2b00ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HBD7ZV%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxESaT%2FYjFTr5MPatO3Ck0sOcTPpp%2BBlp1G7uiGdfC0AiEAxCgTIUwY0xIAEnX735zqRWYWpGAsRX20HQYfTXLbzVsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6UfuOVYuDJ7tX8ircA9bN3pGem%2BhhwwZyvzaCQe7OLWI3R4meL60%2BlmhuYjB2PkluyLTqRzJITLvMDOgNpCJcy8g%2FmOzIcMSaLWe3SA6x5ZqsL0HImxzDh0c%2F6LsGks4c%2FgbqwqRttaR7raqW171IZrjgJdiyz%2FQhweWPRKbSy%2BcrUZuxqF8P%2FLYo57wBXkx2JN5JvpAAhJIzhVvuTOAsyIcF25Rad74erR9%2BO0yWol8CjqRBB4u%2BPM%2BC7TZ3xGMNKTki5XsuYFFZfVvoa%2BNJiRuBhG07Gmq0%2F6bMEeh%2FdbDf68gNcrHNTXIwy6ZGa4FHi%2BGejEhAexNOEGbCiG4LBWTuuePl0ss8c6uC6GYX3%2FlCqBZcyI7n%2Fy82qu1LQ94UR0Uy8X9LUDECXtU9p%2BOL2ePuGiGWrtXAPk%2FLC6rp9XkGFxdMXFL57aoV%2BPN3jhvYPH5E8VEYEE7udaiaM9d%2BhdmuyjxhTD05bTZYPNXU0CadLbN5%2Bf4GsFtqpvsoSByO5gTCMW9Xy9cgAYAy6PA2%2BSqEZginxshzn9YAxzK8vJWscBe15%2BwQhzJjksjK93O9ks5%2F90FMZsVopgNWHay%2B6ute6VSKgGlMHM3LVAvQwRolWwHPfLuRc0vKOGf5b1MASp%2Fmtasq6NBwMMWxzdEGOqUBbqdaCgA00rJbTMFik7PL1hkm9v8gTpVfElhPIF1VuINTG%2Fqpvz0Xx1mzLZN4m91ahC3RjgdqHGk%2Ff7NwDLYoD%2BrQ1qmAv%2B4XV1hAt3OOn6FMmFWfKNd9eCRDcZxWpKdsPOq8Rr5%2FmxxIPcFeQFP5MK65ZzDN7bKOc95ldaFwy%2F%2B%2BkaaLE0mNvOvPdHFWdsBp6ZBUzu1f9n6SmBSUbOwHkeKhxkpc&X-Amz-Signature=ae5acee2db9cb993cda938e259c2f03d9b08f39af9acf2b3623a4e5e46f812d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
