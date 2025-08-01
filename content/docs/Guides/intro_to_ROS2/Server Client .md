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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVNIXKA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbk14GamcBBjNDj5z1Z4taWrS%2BwlHSugCnj7NC6zgM1AiEA7RUKdKRxG1dybCYv%2BKRbKYh32v6KVkrAr19aVHeA1e8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHilupso8YuyHak3circA3Gj5mGF3H6C%2BG24ffGy2iPpTB3GTHJar9W6mfJvda36SbJK%2BT4vP%2FWdBQ6QlcItaV%2BL8QQ%2Fs2gldHwgd0yZxXgqcoN%2BoI78uidGXPr%2BDEwvSuRg98GCJ5LLHt0%2FRpBJr0oqvZqW360Tg6lqoad9BG4T0Nf4TwgGsCQUrbJ1FTqxCElUEX%2F6tPc614IMkfgyawjMXxoe%2BDcFRFRmjSeBBUmotcyEkvfQEAH7rxK1LDyPryhib5H21%2BXSUKiWfME%2BdEXt72E9HRUs3LgNgy1GxhBEeuX4EWqATcseCQxgWltWRaRc90mLI%2Fk2I7IMymyx5lcg31e1Sy%2F%2Bp37Mkyw6s2AK8xoU9wSF%2BDfX8eS3BU0xf1SpFwnoLwjZ%2Bir2Dop9DCfDn60Aj3L%2FR28ak9oJZcBO7pCS8VQA9kp4JUGKe4C%2F%2Fw9S9nrhSJLCJe%2B%2F897EhpelPm7NAoSFC1HF0VQThX98kpoC6AcTYF9OChxTQ2zqGYx9x7NXYZl8hEw%2FY%2BUrVZLIci6JnygPKnCX8Gk9%2Bekf%2FSkbGbh3nZIwXA7yw%2BpDqWLXKHYcAdaos%2BnUVHoqWpOGqTsYJjNwP8lp9iV3qqAj%2BSjrdcKJICCnnTL6HFTGvbLif76u%2BB3HUL5kMPK1ssQGOqUBvyL20sochCUnJ2JYdD1UU0KK0A%2F2R8NwPjIwwz0mq11obrzvDHIKJnwIUJ33%2BUCZ%2BESKq%2FTuWDXU6NLkZUBzXqGgk90Orz51IqjI1n8hRXQkW4vwLKwbSpdY30%2BoDANO1e8uqfMukEAf%2Bpx2gKcCV%2BHqtQk5Yg3nQ9y7l70wmZC31IaojKkPhlGy2Qrkz5dN8KwwtKdMEBYQniXkq88VUiOBO9kU&X-Amz-Signature=c79a6f275f8cc98963b39adb2fc67a1703e3a3e0f3a289665380d472ade4b6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVNIXKA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbk14GamcBBjNDj5z1Z4taWrS%2BwlHSugCnj7NC6zgM1AiEA7RUKdKRxG1dybCYv%2BKRbKYh32v6KVkrAr19aVHeA1e8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHilupso8YuyHak3circA3Gj5mGF3H6C%2BG24ffGy2iPpTB3GTHJar9W6mfJvda36SbJK%2BT4vP%2FWdBQ6QlcItaV%2BL8QQ%2Fs2gldHwgd0yZxXgqcoN%2BoI78uidGXPr%2BDEwvSuRg98GCJ5LLHt0%2FRpBJr0oqvZqW360Tg6lqoad9BG4T0Nf4TwgGsCQUrbJ1FTqxCElUEX%2F6tPc614IMkfgyawjMXxoe%2BDcFRFRmjSeBBUmotcyEkvfQEAH7rxK1LDyPryhib5H21%2BXSUKiWfME%2BdEXt72E9HRUs3LgNgy1GxhBEeuX4EWqATcseCQxgWltWRaRc90mLI%2Fk2I7IMymyx5lcg31e1Sy%2F%2Bp37Mkyw6s2AK8xoU9wSF%2BDfX8eS3BU0xf1SpFwnoLwjZ%2Bir2Dop9DCfDn60Aj3L%2FR28ak9oJZcBO7pCS8VQA9kp4JUGKe4C%2F%2Fw9S9nrhSJLCJe%2B%2F897EhpelPm7NAoSFC1HF0VQThX98kpoC6AcTYF9OChxTQ2zqGYx9x7NXYZl8hEw%2FY%2BUrVZLIci6JnygPKnCX8Gk9%2Bekf%2FSkbGbh3nZIwXA7yw%2BpDqWLXKHYcAdaos%2BnUVHoqWpOGqTsYJjNwP8lp9iV3qqAj%2BSjrdcKJICCnnTL6HFTGvbLif76u%2BB3HUL5kMPK1ssQGOqUBvyL20sochCUnJ2JYdD1UU0KK0A%2F2R8NwPjIwwz0mq11obrzvDHIKJnwIUJ33%2BUCZ%2BESKq%2FTuWDXU6NLkZUBzXqGgk90Orz51IqjI1n8hRXQkW4vwLKwbSpdY30%2BoDANO1e8uqfMukEAf%2Bpx2gKcCV%2BHqtQk5Yg3nQ9y7l70wmZC31IaojKkPhlGy2Qrkz5dN8KwwtKdMEBYQniXkq88VUiOBO9kU&X-Amz-Signature=2faa6dde5ccab3e6bc5a0eee80b9b5d45494a004c3fed940cad43034e89beb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVNIXKA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbk14GamcBBjNDj5z1Z4taWrS%2BwlHSugCnj7NC6zgM1AiEA7RUKdKRxG1dybCYv%2BKRbKYh32v6KVkrAr19aVHeA1e8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHilupso8YuyHak3circA3Gj5mGF3H6C%2BG24ffGy2iPpTB3GTHJar9W6mfJvda36SbJK%2BT4vP%2FWdBQ6QlcItaV%2BL8QQ%2Fs2gldHwgd0yZxXgqcoN%2BoI78uidGXPr%2BDEwvSuRg98GCJ5LLHt0%2FRpBJr0oqvZqW360Tg6lqoad9BG4T0Nf4TwgGsCQUrbJ1FTqxCElUEX%2F6tPc614IMkfgyawjMXxoe%2BDcFRFRmjSeBBUmotcyEkvfQEAH7rxK1LDyPryhib5H21%2BXSUKiWfME%2BdEXt72E9HRUs3LgNgy1GxhBEeuX4EWqATcseCQxgWltWRaRc90mLI%2Fk2I7IMymyx5lcg31e1Sy%2F%2Bp37Mkyw6s2AK8xoU9wSF%2BDfX8eS3BU0xf1SpFwnoLwjZ%2Bir2Dop9DCfDn60Aj3L%2FR28ak9oJZcBO7pCS8VQA9kp4JUGKe4C%2F%2Fw9S9nrhSJLCJe%2B%2F897EhpelPm7NAoSFC1HF0VQThX98kpoC6AcTYF9OChxTQ2zqGYx9x7NXYZl8hEw%2FY%2BUrVZLIci6JnygPKnCX8Gk9%2Bekf%2FSkbGbh3nZIwXA7yw%2BpDqWLXKHYcAdaos%2BnUVHoqWpOGqTsYJjNwP8lp9iV3qqAj%2BSjrdcKJICCnnTL6HFTGvbLif76u%2BB3HUL5kMPK1ssQGOqUBvyL20sochCUnJ2JYdD1UU0KK0A%2F2R8NwPjIwwz0mq11obrzvDHIKJnwIUJ33%2BUCZ%2BESKq%2FTuWDXU6NLkZUBzXqGgk90Orz51IqjI1n8hRXQkW4vwLKwbSpdY30%2BoDANO1e8uqfMukEAf%2Bpx2gKcCV%2BHqtQk5Yg3nQ9y7l70wmZC31IaojKkPhlGy2Qrkz5dN8KwwtKdMEBYQniXkq88VUiOBO9kU&X-Amz-Signature=eaa1e30693e17b2ca8bcade4727d149d0d05a953dcdbfa0bf83b757c6c099dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVNIXKA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbk14GamcBBjNDj5z1Z4taWrS%2BwlHSugCnj7NC6zgM1AiEA7RUKdKRxG1dybCYv%2BKRbKYh32v6KVkrAr19aVHeA1e8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHilupso8YuyHak3circA3Gj5mGF3H6C%2BG24ffGy2iPpTB3GTHJar9W6mfJvda36SbJK%2BT4vP%2FWdBQ6QlcItaV%2BL8QQ%2Fs2gldHwgd0yZxXgqcoN%2BoI78uidGXPr%2BDEwvSuRg98GCJ5LLHt0%2FRpBJr0oqvZqW360Tg6lqoad9BG4T0Nf4TwgGsCQUrbJ1FTqxCElUEX%2F6tPc614IMkfgyawjMXxoe%2BDcFRFRmjSeBBUmotcyEkvfQEAH7rxK1LDyPryhib5H21%2BXSUKiWfME%2BdEXt72E9HRUs3LgNgy1GxhBEeuX4EWqATcseCQxgWltWRaRc90mLI%2Fk2I7IMymyx5lcg31e1Sy%2F%2Bp37Mkyw6s2AK8xoU9wSF%2BDfX8eS3BU0xf1SpFwnoLwjZ%2Bir2Dop9DCfDn60Aj3L%2FR28ak9oJZcBO7pCS8VQA9kp4JUGKe4C%2F%2Fw9S9nrhSJLCJe%2B%2F897EhpelPm7NAoSFC1HF0VQThX98kpoC6AcTYF9OChxTQ2zqGYx9x7NXYZl8hEw%2FY%2BUrVZLIci6JnygPKnCX8Gk9%2Bekf%2FSkbGbh3nZIwXA7yw%2BpDqWLXKHYcAdaos%2BnUVHoqWpOGqTsYJjNwP8lp9iV3qqAj%2BSjrdcKJICCnnTL6HFTGvbLif76u%2BB3HUL5kMPK1ssQGOqUBvyL20sochCUnJ2JYdD1UU0KK0A%2F2R8NwPjIwwz0mq11obrzvDHIKJnwIUJ33%2BUCZ%2BESKq%2FTuWDXU6NLkZUBzXqGgk90Orz51IqjI1n8hRXQkW4vwLKwbSpdY30%2BoDANO1e8uqfMukEAf%2Bpx2gKcCV%2BHqtQk5Yg3nQ9y7l70wmZC31IaojKkPhlGy2Qrkz5dN8KwwtKdMEBYQniXkq88VUiOBO9kU&X-Amz-Signature=8cd1f8117578de862369c6824d6687cd65599af75576e548bc59d450fe0d9d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVNIXKA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbk14GamcBBjNDj5z1Z4taWrS%2BwlHSugCnj7NC6zgM1AiEA7RUKdKRxG1dybCYv%2BKRbKYh32v6KVkrAr19aVHeA1e8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHilupso8YuyHak3circA3Gj5mGF3H6C%2BG24ffGy2iPpTB3GTHJar9W6mfJvda36SbJK%2BT4vP%2FWdBQ6QlcItaV%2BL8QQ%2Fs2gldHwgd0yZxXgqcoN%2BoI78uidGXPr%2BDEwvSuRg98GCJ5LLHt0%2FRpBJr0oqvZqW360Tg6lqoad9BG4T0Nf4TwgGsCQUrbJ1FTqxCElUEX%2F6tPc614IMkfgyawjMXxoe%2BDcFRFRmjSeBBUmotcyEkvfQEAH7rxK1LDyPryhib5H21%2BXSUKiWfME%2BdEXt72E9HRUs3LgNgy1GxhBEeuX4EWqATcseCQxgWltWRaRc90mLI%2Fk2I7IMymyx5lcg31e1Sy%2F%2Bp37Mkyw6s2AK8xoU9wSF%2BDfX8eS3BU0xf1SpFwnoLwjZ%2Bir2Dop9DCfDn60Aj3L%2FR28ak9oJZcBO7pCS8VQA9kp4JUGKe4C%2F%2Fw9S9nrhSJLCJe%2B%2F897EhpelPm7NAoSFC1HF0VQThX98kpoC6AcTYF9OChxTQ2zqGYx9x7NXYZl8hEw%2FY%2BUrVZLIci6JnygPKnCX8Gk9%2Bekf%2FSkbGbh3nZIwXA7yw%2BpDqWLXKHYcAdaos%2BnUVHoqWpOGqTsYJjNwP8lp9iV3qqAj%2BSjrdcKJICCnnTL6HFTGvbLif76u%2BB3HUL5kMPK1ssQGOqUBvyL20sochCUnJ2JYdD1UU0KK0A%2F2R8NwPjIwwz0mq11obrzvDHIKJnwIUJ33%2BUCZ%2BESKq%2FTuWDXU6NLkZUBzXqGgk90Orz51IqjI1n8hRXQkW4vwLKwbSpdY30%2BoDANO1e8uqfMukEAf%2Bpx2gKcCV%2BHqtQk5Yg3nQ9y7l70wmZC31IaojKkPhlGy2Qrkz5dN8KwwtKdMEBYQniXkq88VUiOBO9kU&X-Amz-Signature=64de6eb3ef7f0cbe22968b6664602d3be26b6e9e1cc3ffb9f3433192db1186d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
