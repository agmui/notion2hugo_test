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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKP4APAU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDG19ESn4XBN9GkMSUr4xkWwEOJ5c0xrhLsdCBxQWbk2gIhAOo6xEK3VX82cJ%2B%2Bihi1k%2B2PvTWsMjEylV4sD97W%2FG5OKv8DCH0QABoMNjM3NDIzMTgzODA1IgyvxpW%2BceTQVhytnHoq3AMyCcj6vx7E9OSg4I2vcbbU2EkTUMKKEy1n50s5RKap32eh82LsKAu98EQkaSH5m55nGEe%2FUIWFYCVJKqGIvnQ%2B%2B%2FR2C3XZHu9w%2FdSq%2BpVeQCCOaMrS5I%2F3jaJs2AypxxONuEmkOxDJfsc9OvtDwER0ErXVF1as1hTUS7iugY6aMBZJxNAx5RlJJWmv1%2BY0ho1TARu8DE98zyh8Oa0lHUqlap7Vk4ZD6yAjns7e0Simzja1EFpsJOFuLkMEpGTZ%2FSr79AclhnBWtUOH8ZnoNwDyK6P0F45E899NAZeDEvkSx7KL4lDkqOeVaQwC1X0f2SR2IgW2DzUU9PreqHfgK6EU0XvIX%2BHwKeIXTIwX47%2F9ZzUGc20emV99xHNajTKrtmNIJtTIIPNwElYypo0PgzDD9bwCpgzlobU6wcRf1ie7Lo52uwuDHeYqWVBIxGpzDio%2F%2FpRlaeVPuR0ewXsDgdoBZooceuMh0X6NitF0zZHH%2Fxek17YeG6Er46VN0uHdYE5dKuSsb0brPfCKWioQwzj1XKAXlErTmiu83%2FV6rbirZ6vHmSEX%2FoS1ADWj5IJGJ9b36G7oKpTzFErquA2D5HqlQ%2FMC77Qn6U8YdDYAUESPWbOV8L6RS2txKTHPLTDo4Le%2BBjqkAYsCH23iD4n0UKAnKSpotur%2Fmli%2FVK42cCHVKa4m05y1lxdUgulORzODfW9TRJTsdueif4KBlxW6F%2F%2Bkz60QOtlrhzuDTgw9yXoN7a2YmggrLz0FglNe6zP9qmegVwOG5C3vc0iX7tWVHIlU5Rkhb7j2k99KqS3g5lYrlIyK6lrewGJDWJCk0rQNJZ8IimKJ0eMARYSPzg%2BvsoSyNAhhdliRCltN&X-Amz-Signature=411d4a6ff5968a2350a0f407e6fd119fa5e1000bb98f50da110e862ebc02f302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKP4APAU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDG19ESn4XBN9GkMSUr4xkWwEOJ5c0xrhLsdCBxQWbk2gIhAOo6xEK3VX82cJ%2B%2Bihi1k%2B2PvTWsMjEylV4sD97W%2FG5OKv8DCH0QABoMNjM3NDIzMTgzODA1IgyvxpW%2BceTQVhytnHoq3AMyCcj6vx7E9OSg4I2vcbbU2EkTUMKKEy1n50s5RKap32eh82LsKAu98EQkaSH5m55nGEe%2FUIWFYCVJKqGIvnQ%2B%2B%2FR2C3XZHu9w%2FdSq%2BpVeQCCOaMrS5I%2F3jaJs2AypxxONuEmkOxDJfsc9OvtDwER0ErXVF1as1hTUS7iugY6aMBZJxNAx5RlJJWmv1%2BY0ho1TARu8DE98zyh8Oa0lHUqlap7Vk4ZD6yAjns7e0Simzja1EFpsJOFuLkMEpGTZ%2FSr79AclhnBWtUOH8ZnoNwDyK6P0F45E899NAZeDEvkSx7KL4lDkqOeVaQwC1X0f2SR2IgW2DzUU9PreqHfgK6EU0XvIX%2BHwKeIXTIwX47%2F9ZzUGc20emV99xHNajTKrtmNIJtTIIPNwElYypo0PgzDD9bwCpgzlobU6wcRf1ie7Lo52uwuDHeYqWVBIxGpzDio%2F%2FpRlaeVPuR0ewXsDgdoBZooceuMh0X6NitF0zZHH%2Fxek17YeG6Er46VN0uHdYE5dKuSsb0brPfCKWioQwzj1XKAXlErTmiu83%2FV6rbirZ6vHmSEX%2FoS1ADWj5IJGJ9b36G7oKpTzFErquA2D5HqlQ%2FMC77Qn6U8YdDYAUESPWbOV8L6RS2txKTHPLTDo4Le%2BBjqkAYsCH23iD4n0UKAnKSpotur%2Fmli%2FVK42cCHVKa4m05y1lxdUgulORzODfW9TRJTsdueif4KBlxW6F%2F%2Bkz60QOtlrhzuDTgw9yXoN7a2YmggrLz0FglNe6zP9qmegVwOG5C3vc0iX7tWVHIlU5Rkhb7j2k99KqS3g5lYrlIyK6lrewGJDWJCk0rQNJZ8IimKJ0eMARYSPzg%2BvsoSyNAhhdliRCltN&X-Amz-Signature=e05662ccc07b870069901f99cada83ed18b88f893f36812fdfe46dd78d2f28fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKP4APAU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDG19ESn4XBN9GkMSUr4xkWwEOJ5c0xrhLsdCBxQWbk2gIhAOo6xEK3VX82cJ%2B%2Bihi1k%2B2PvTWsMjEylV4sD97W%2FG5OKv8DCH0QABoMNjM3NDIzMTgzODA1IgyvxpW%2BceTQVhytnHoq3AMyCcj6vx7E9OSg4I2vcbbU2EkTUMKKEy1n50s5RKap32eh82LsKAu98EQkaSH5m55nGEe%2FUIWFYCVJKqGIvnQ%2B%2B%2FR2C3XZHu9w%2FdSq%2BpVeQCCOaMrS5I%2F3jaJs2AypxxONuEmkOxDJfsc9OvtDwER0ErXVF1as1hTUS7iugY6aMBZJxNAx5RlJJWmv1%2BY0ho1TARu8DE98zyh8Oa0lHUqlap7Vk4ZD6yAjns7e0Simzja1EFpsJOFuLkMEpGTZ%2FSr79AclhnBWtUOH8ZnoNwDyK6P0F45E899NAZeDEvkSx7KL4lDkqOeVaQwC1X0f2SR2IgW2DzUU9PreqHfgK6EU0XvIX%2BHwKeIXTIwX47%2F9ZzUGc20emV99xHNajTKrtmNIJtTIIPNwElYypo0PgzDD9bwCpgzlobU6wcRf1ie7Lo52uwuDHeYqWVBIxGpzDio%2F%2FpRlaeVPuR0ewXsDgdoBZooceuMh0X6NitF0zZHH%2Fxek17YeG6Er46VN0uHdYE5dKuSsb0brPfCKWioQwzj1XKAXlErTmiu83%2FV6rbirZ6vHmSEX%2FoS1ADWj5IJGJ9b36G7oKpTzFErquA2D5HqlQ%2FMC77Qn6U8YdDYAUESPWbOV8L6RS2txKTHPLTDo4Le%2BBjqkAYsCH23iD4n0UKAnKSpotur%2Fmli%2FVK42cCHVKa4m05y1lxdUgulORzODfW9TRJTsdueif4KBlxW6F%2F%2Bkz60QOtlrhzuDTgw9yXoN7a2YmggrLz0FglNe6zP9qmegVwOG5C3vc0iX7tWVHIlU5Rkhb7j2k99KqS3g5lYrlIyK6lrewGJDWJCk0rQNJZ8IimKJ0eMARYSPzg%2BvsoSyNAhhdliRCltN&X-Amz-Signature=488a426c83a34f87d29a8be481d5108979f384bddc24ad488193bf62d7e4427e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKP4APAU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDG19ESn4XBN9GkMSUr4xkWwEOJ5c0xrhLsdCBxQWbk2gIhAOo6xEK3VX82cJ%2B%2Bihi1k%2B2PvTWsMjEylV4sD97W%2FG5OKv8DCH0QABoMNjM3NDIzMTgzODA1IgyvxpW%2BceTQVhytnHoq3AMyCcj6vx7E9OSg4I2vcbbU2EkTUMKKEy1n50s5RKap32eh82LsKAu98EQkaSH5m55nGEe%2FUIWFYCVJKqGIvnQ%2B%2B%2FR2C3XZHu9w%2FdSq%2BpVeQCCOaMrS5I%2F3jaJs2AypxxONuEmkOxDJfsc9OvtDwER0ErXVF1as1hTUS7iugY6aMBZJxNAx5RlJJWmv1%2BY0ho1TARu8DE98zyh8Oa0lHUqlap7Vk4ZD6yAjns7e0Simzja1EFpsJOFuLkMEpGTZ%2FSr79AclhnBWtUOH8ZnoNwDyK6P0F45E899NAZeDEvkSx7KL4lDkqOeVaQwC1X0f2SR2IgW2DzUU9PreqHfgK6EU0XvIX%2BHwKeIXTIwX47%2F9ZzUGc20emV99xHNajTKrtmNIJtTIIPNwElYypo0PgzDD9bwCpgzlobU6wcRf1ie7Lo52uwuDHeYqWVBIxGpzDio%2F%2FpRlaeVPuR0ewXsDgdoBZooceuMh0X6NitF0zZHH%2Fxek17YeG6Er46VN0uHdYE5dKuSsb0brPfCKWioQwzj1XKAXlErTmiu83%2FV6rbirZ6vHmSEX%2FoS1ADWj5IJGJ9b36G7oKpTzFErquA2D5HqlQ%2FMC77Qn6U8YdDYAUESPWbOV8L6RS2txKTHPLTDo4Le%2BBjqkAYsCH23iD4n0UKAnKSpotur%2Fmli%2FVK42cCHVKa4m05y1lxdUgulORzODfW9TRJTsdueif4KBlxW6F%2F%2Bkz60QOtlrhzuDTgw9yXoN7a2YmggrLz0FglNe6zP9qmegVwOG5C3vc0iX7tWVHIlU5Rkhb7j2k99KqS3g5lYrlIyK6lrewGJDWJCk0rQNJZ8IimKJ0eMARYSPzg%2BvsoSyNAhhdliRCltN&X-Amz-Signature=49469a88231ba33d9e19230dbba30dd0c77469457440b2bfbb6d646c6662bc87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKP4APAU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDG19ESn4XBN9GkMSUr4xkWwEOJ5c0xrhLsdCBxQWbk2gIhAOo6xEK3VX82cJ%2B%2Bihi1k%2B2PvTWsMjEylV4sD97W%2FG5OKv8DCH0QABoMNjM3NDIzMTgzODA1IgyvxpW%2BceTQVhytnHoq3AMyCcj6vx7E9OSg4I2vcbbU2EkTUMKKEy1n50s5RKap32eh82LsKAu98EQkaSH5m55nGEe%2FUIWFYCVJKqGIvnQ%2B%2B%2FR2C3XZHu9w%2FdSq%2BpVeQCCOaMrS5I%2F3jaJs2AypxxONuEmkOxDJfsc9OvtDwER0ErXVF1as1hTUS7iugY6aMBZJxNAx5RlJJWmv1%2BY0ho1TARu8DE98zyh8Oa0lHUqlap7Vk4ZD6yAjns7e0Simzja1EFpsJOFuLkMEpGTZ%2FSr79AclhnBWtUOH8ZnoNwDyK6P0F45E899NAZeDEvkSx7KL4lDkqOeVaQwC1X0f2SR2IgW2DzUU9PreqHfgK6EU0XvIX%2BHwKeIXTIwX47%2F9ZzUGc20emV99xHNajTKrtmNIJtTIIPNwElYypo0PgzDD9bwCpgzlobU6wcRf1ie7Lo52uwuDHeYqWVBIxGpzDio%2F%2FpRlaeVPuR0ewXsDgdoBZooceuMh0X6NitF0zZHH%2Fxek17YeG6Er46VN0uHdYE5dKuSsb0brPfCKWioQwzj1XKAXlErTmiu83%2FV6rbirZ6vHmSEX%2FoS1ADWj5IJGJ9b36G7oKpTzFErquA2D5HqlQ%2FMC77Qn6U8YdDYAUESPWbOV8L6RS2txKTHPLTDo4Le%2BBjqkAYsCH23iD4n0UKAnKSpotur%2Fmli%2FVK42cCHVKa4m05y1lxdUgulORzODfW9TRJTsdueif4KBlxW6F%2F%2Bkz60QOtlrhzuDTgw9yXoN7a2YmggrLz0FglNe6zP9qmegVwOG5C3vc0iX7tWVHIlU5Rkhb7j2k99KqS3g5lYrlIyK6lrewGJDWJCk0rQNJZ8IimKJ0eMARYSPzg%2BvsoSyNAhhdliRCltN&X-Amz-Signature=0cc7a700e89963d910ef89e6fff6f350a9b843ccc4bca680133bf43542da6815&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
