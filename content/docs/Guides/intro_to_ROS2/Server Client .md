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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKHVW4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGmy8y3sOV8ofN3ZsFzHQ9XZQs3u0t7RiFs%2F4Q68PDYwAiEAxmdzVSNd%2B97HlQz7ZZbVexN9rWWx0kJFEMlY%2FAMnJoAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPux8FXiJltDlGB4LircA8C3Ridqzc%2BRD65kMXilGvP4u5iOHyok%2FASm0DnmAC0r9pmkU6EIZPNvDJN%2B7OFmNpP1Y2n92yw6tbSH0w6TqjzWddTATPJNspuUkdHR%2FWa2QrvhYawSVNJcUSG7frjTa7eCkWwa%2B%2B9fkVNiKQaUtL33HNb9iUEhHgmZpipdnS1L0idsqvPbrmiZn6PoUSiVhPM5GgSz9yNDp5ADlqmQvOy4k%2BmnIJmwYuS2y67X2zBWr%2FOJ8Yb4B3JvIa6noBeH4E5otUSBQKumbP3PCe%2FEjAgf88FjgR9i8Z4BhzOZCThHfH%2FkKcYuFxNMwPeZSR4JATKkr1ZIu5cqS5OCH62WaVWkbBaWwB9GdXfEXppT%2BKqQBhS5Ld0xM5T6PSdnrSa8KyseaL3Po08CJq2Z9GYqKREhxsg4uqZ5Nw3iPMX3wGv3hz17I%2By%2BHE8luMwrWbyjzt7v7jzCmkYgxGKoRCnbK4rbnE7ewajVXxH%2BXQOR0LfbUJjsuhXe3ED7XRpfG3jJ2lybszz74I6plBnQJEYvqX1RuaN8BiPrbJTiWUuXubsO3sVnZRUxPE8RcgwbfLOe3EXKyU1WEKR%2FNGqbERTHCI6IE7YlcVfNoBKw9%2F%2Bs60yvp6NwYA9OU1qg%2BxsOMI%2Bep8MGOqUBf2iNZDFM9W0E7hmqoHL4WyyC5sezrthH%2BEst5NgWZJpuurDELgIUaNPetgZPuMIgrTzXeM7SkOdoR8p2p%2FbtJYTK3UNV0fhhL59ZuujAGziVR4BtEl2S1bGzPlbnFs08WkqlL92hc9HaZDIxLEQj%2B0B3psx4xEHxAvZKc5ywVN%2FK4EHEzDtKCbPwIjLPzbYPUTRUYjRrOtAq%2BtQ7%2BlKm8IZvFskt&X-Amz-Signature=864e23a6d1e17e2b70770ae60f7b74952a14c2867c6c5df58c581b10b8a43bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKHVW4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGmy8y3sOV8ofN3ZsFzHQ9XZQs3u0t7RiFs%2F4Q68PDYwAiEAxmdzVSNd%2B97HlQz7ZZbVexN9rWWx0kJFEMlY%2FAMnJoAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPux8FXiJltDlGB4LircA8C3Ridqzc%2BRD65kMXilGvP4u5iOHyok%2FASm0DnmAC0r9pmkU6EIZPNvDJN%2B7OFmNpP1Y2n92yw6tbSH0w6TqjzWddTATPJNspuUkdHR%2FWa2QrvhYawSVNJcUSG7frjTa7eCkWwa%2B%2B9fkVNiKQaUtL33HNb9iUEhHgmZpipdnS1L0idsqvPbrmiZn6PoUSiVhPM5GgSz9yNDp5ADlqmQvOy4k%2BmnIJmwYuS2y67X2zBWr%2FOJ8Yb4B3JvIa6noBeH4E5otUSBQKumbP3PCe%2FEjAgf88FjgR9i8Z4BhzOZCThHfH%2FkKcYuFxNMwPeZSR4JATKkr1ZIu5cqS5OCH62WaVWkbBaWwB9GdXfEXppT%2BKqQBhS5Ld0xM5T6PSdnrSa8KyseaL3Po08CJq2Z9GYqKREhxsg4uqZ5Nw3iPMX3wGv3hz17I%2By%2BHE8luMwrWbyjzt7v7jzCmkYgxGKoRCnbK4rbnE7ewajVXxH%2BXQOR0LfbUJjsuhXe3ED7XRpfG3jJ2lybszz74I6plBnQJEYvqX1RuaN8BiPrbJTiWUuXubsO3sVnZRUxPE8RcgwbfLOe3EXKyU1WEKR%2FNGqbERTHCI6IE7YlcVfNoBKw9%2F%2Bs60yvp6NwYA9OU1qg%2BxsOMI%2Bep8MGOqUBf2iNZDFM9W0E7hmqoHL4WyyC5sezrthH%2BEst5NgWZJpuurDELgIUaNPetgZPuMIgrTzXeM7SkOdoR8p2p%2FbtJYTK3UNV0fhhL59ZuujAGziVR4BtEl2S1bGzPlbnFs08WkqlL92hc9HaZDIxLEQj%2B0B3psx4xEHxAvZKc5ywVN%2FK4EHEzDtKCbPwIjLPzbYPUTRUYjRrOtAq%2BtQ7%2BlKm8IZvFskt&X-Amz-Signature=9772d0f646c52c0ed9fe9d80eef905316eb585249097844fba4a1869f5e183bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKHVW4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGmy8y3sOV8ofN3ZsFzHQ9XZQs3u0t7RiFs%2F4Q68PDYwAiEAxmdzVSNd%2B97HlQz7ZZbVexN9rWWx0kJFEMlY%2FAMnJoAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPux8FXiJltDlGB4LircA8C3Ridqzc%2BRD65kMXilGvP4u5iOHyok%2FASm0DnmAC0r9pmkU6EIZPNvDJN%2B7OFmNpP1Y2n92yw6tbSH0w6TqjzWddTATPJNspuUkdHR%2FWa2QrvhYawSVNJcUSG7frjTa7eCkWwa%2B%2B9fkVNiKQaUtL33HNb9iUEhHgmZpipdnS1L0idsqvPbrmiZn6PoUSiVhPM5GgSz9yNDp5ADlqmQvOy4k%2BmnIJmwYuS2y67X2zBWr%2FOJ8Yb4B3JvIa6noBeH4E5otUSBQKumbP3PCe%2FEjAgf88FjgR9i8Z4BhzOZCThHfH%2FkKcYuFxNMwPeZSR4JATKkr1ZIu5cqS5OCH62WaVWkbBaWwB9GdXfEXppT%2BKqQBhS5Ld0xM5T6PSdnrSa8KyseaL3Po08CJq2Z9GYqKREhxsg4uqZ5Nw3iPMX3wGv3hz17I%2By%2BHE8luMwrWbyjzt7v7jzCmkYgxGKoRCnbK4rbnE7ewajVXxH%2BXQOR0LfbUJjsuhXe3ED7XRpfG3jJ2lybszz74I6plBnQJEYvqX1RuaN8BiPrbJTiWUuXubsO3sVnZRUxPE8RcgwbfLOe3EXKyU1WEKR%2FNGqbERTHCI6IE7YlcVfNoBKw9%2F%2Bs60yvp6NwYA9OU1qg%2BxsOMI%2Bep8MGOqUBf2iNZDFM9W0E7hmqoHL4WyyC5sezrthH%2BEst5NgWZJpuurDELgIUaNPetgZPuMIgrTzXeM7SkOdoR8p2p%2FbtJYTK3UNV0fhhL59ZuujAGziVR4BtEl2S1bGzPlbnFs08WkqlL92hc9HaZDIxLEQj%2B0B3psx4xEHxAvZKc5ywVN%2FK4EHEzDtKCbPwIjLPzbYPUTRUYjRrOtAq%2BtQ7%2BlKm8IZvFskt&X-Amz-Signature=40f392e220e34eb02eea3bed8b35cf009a9372a3b13ac06bf8735a86b127e4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKHVW4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGmy8y3sOV8ofN3ZsFzHQ9XZQs3u0t7RiFs%2F4Q68PDYwAiEAxmdzVSNd%2B97HlQz7ZZbVexN9rWWx0kJFEMlY%2FAMnJoAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPux8FXiJltDlGB4LircA8C3Ridqzc%2BRD65kMXilGvP4u5iOHyok%2FASm0DnmAC0r9pmkU6EIZPNvDJN%2B7OFmNpP1Y2n92yw6tbSH0w6TqjzWddTATPJNspuUkdHR%2FWa2QrvhYawSVNJcUSG7frjTa7eCkWwa%2B%2B9fkVNiKQaUtL33HNb9iUEhHgmZpipdnS1L0idsqvPbrmiZn6PoUSiVhPM5GgSz9yNDp5ADlqmQvOy4k%2BmnIJmwYuS2y67X2zBWr%2FOJ8Yb4B3JvIa6noBeH4E5otUSBQKumbP3PCe%2FEjAgf88FjgR9i8Z4BhzOZCThHfH%2FkKcYuFxNMwPeZSR4JATKkr1ZIu5cqS5OCH62WaVWkbBaWwB9GdXfEXppT%2BKqQBhS5Ld0xM5T6PSdnrSa8KyseaL3Po08CJq2Z9GYqKREhxsg4uqZ5Nw3iPMX3wGv3hz17I%2By%2BHE8luMwrWbyjzt7v7jzCmkYgxGKoRCnbK4rbnE7ewajVXxH%2BXQOR0LfbUJjsuhXe3ED7XRpfG3jJ2lybszz74I6plBnQJEYvqX1RuaN8BiPrbJTiWUuXubsO3sVnZRUxPE8RcgwbfLOe3EXKyU1WEKR%2FNGqbERTHCI6IE7YlcVfNoBKw9%2F%2Bs60yvp6NwYA9OU1qg%2BxsOMI%2Bep8MGOqUBf2iNZDFM9W0E7hmqoHL4WyyC5sezrthH%2BEst5NgWZJpuurDELgIUaNPetgZPuMIgrTzXeM7SkOdoR8p2p%2FbtJYTK3UNV0fhhL59ZuujAGziVR4BtEl2S1bGzPlbnFs08WkqlL92hc9HaZDIxLEQj%2B0B3psx4xEHxAvZKc5ywVN%2FK4EHEzDtKCbPwIjLPzbYPUTRUYjRrOtAq%2BtQ7%2BlKm8IZvFskt&X-Amz-Signature=b988de9f2c638a3e0a818802f8cf80d76ca1cd68fe54f2a3dd80a0b814519cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKHVW4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGmy8y3sOV8ofN3ZsFzHQ9XZQs3u0t7RiFs%2F4Q68PDYwAiEAxmdzVSNd%2B97HlQz7ZZbVexN9rWWx0kJFEMlY%2FAMnJoAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPux8FXiJltDlGB4LircA8C3Ridqzc%2BRD65kMXilGvP4u5iOHyok%2FASm0DnmAC0r9pmkU6EIZPNvDJN%2B7OFmNpP1Y2n92yw6tbSH0w6TqjzWddTATPJNspuUkdHR%2FWa2QrvhYawSVNJcUSG7frjTa7eCkWwa%2B%2B9fkVNiKQaUtL33HNb9iUEhHgmZpipdnS1L0idsqvPbrmiZn6PoUSiVhPM5GgSz9yNDp5ADlqmQvOy4k%2BmnIJmwYuS2y67X2zBWr%2FOJ8Yb4B3JvIa6noBeH4E5otUSBQKumbP3PCe%2FEjAgf88FjgR9i8Z4BhzOZCThHfH%2FkKcYuFxNMwPeZSR4JATKkr1ZIu5cqS5OCH62WaVWkbBaWwB9GdXfEXppT%2BKqQBhS5Ld0xM5T6PSdnrSa8KyseaL3Po08CJq2Z9GYqKREhxsg4uqZ5Nw3iPMX3wGv3hz17I%2By%2BHE8luMwrWbyjzt7v7jzCmkYgxGKoRCnbK4rbnE7ewajVXxH%2BXQOR0LfbUJjsuhXe3ED7XRpfG3jJ2lybszz74I6plBnQJEYvqX1RuaN8BiPrbJTiWUuXubsO3sVnZRUxPE8RcgwbfLOe3EXKyU1WEKR%2FNGqbERTHCI6IE7YlcVfNoBKw9%2F%2Bs60yvp6NwYA9OU1qg%2BxsOMI%2Bep8MGOqUBf2iNZDFM9W0E7hmqoHL4WyyC5sezrthH%2BEst5NgWZJpuurDELgIUaNPetgZPuMIgrTzXeM7SkOdoR8p2p%2FbtJYTK3UNV0fhhL59ZuujAGziVR4BtEl2S1bGzPlbnFs08WkqlL92hc9HaZDIxLEQj%2B0B3psx4xEHxAvZKc5ywVN%2FK4EHEzDtKCbPwIjLPzbYPUTRUYjRrOtAq%2BtQ7%2BlKm8IZvFskt&X-Amz-Signature=4d96696bd01e086f6667cf1329c48bd52a17d8a05195664ff196535713c12155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
