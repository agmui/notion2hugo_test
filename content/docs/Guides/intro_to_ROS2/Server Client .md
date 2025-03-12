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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=67f2c79c3713a1db44be746080bbac01fbd2215cf3d61af0671383f6957186c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=0acbc2b6b4913445ece24f1728f4f4dda72b8cab4c6de23a0f88b718ca0e4f47&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=c964e473b409a7288844bd7eae14c24db569b19e0b13feac6d178257ef84286c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=da519eb64fc883215aa01a102dbfe6ec08cef1c06584a22a769a3dccf19cddea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=462df89040cbb89403a127bb985b61c567a6d136dea953548387ec1770e0dc05&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
