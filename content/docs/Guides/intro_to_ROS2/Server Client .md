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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK6GTON%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCl%2FiwTcKFjx6sLpugrdrUh2c8YuWeMAZ%2F4iortLXUDDAIgGAALeldaNz%2FmddTTXsrM68u8ESxFT7ug1gxYAdtTVCwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeEMWefevVO81xa7yrcA59zLWk0XbCcAzjCq4oLQDB9RTzKgXS%2BuoBqkqzNIEPamAib6hEJr3lKCdQLRobyGxPPX1lsSXGN8ubyc9w2zrNWIazeSxjCj%2FS6av9BGMWOUi7Ze8b9xowqYFB3S338Xt%2F%2BfI9VgQQ%2FPFJDZ4CtCtTHKwfkeBaA%2BdZ1UE5yOYEze3EYvbK73bykLyaU23y%2FYR4OJxAStNyvCigfFeeXtR35OJq4yAuZ8GaJJ2A4JmUJQFA7xSpYhJibt5e0eBX%2FE8Q84a92oisjImBaeeRFwzxVtQ%2BbZP8df860irw58kvePvsrApz5qh8j0XLekXT%2FE47Xhe1YW1uVhrqABh0jFB5I8p%2FVJeGjSOTt9Jn%2FMoQB0ZLGcKvCEAJPIA64VSgXvzuXVJaa87t3FgiVcjSukzEdh4NUikSLezgrjMNWj0ELEMKGM%2F7Af7lOFYHFy%2FzRArg6y5m7TJsmosZ7xLKmer%2FWx5P3IEwsi8GXinCjQ%2FyPe3%2F579eDLHp1HhkHhCWzHfY%2FtdqGg22oa1ab6Smz4lT9BooQpT7NLhlE5ZiUG6HyKlaHEb4ntZmhgNGcgyXyoOUo3KeI%2BZW0w7pJEwiFsPrH51bNvjh7QsOV5pKdM4%2Fg%2B0ZUwO1Qz1l9N9IgMKSgj8AGOqUBSmID7UH0MagKUvUTku0EDehmUMLOt9KJxmzfQ05pyKOygKhCRUGhmLL9hHiGVoHqOPDpd2fakoQGM9SoEJihJNCiXbgi5hdmnAm%2BEapy3JHJX%2B8a%2FQU%2Bp17rHdjUp8H%2F8yOMp%2F0kqC6SrCHgs0R2qgcs65MDMdQDtkbtxtUwIU0R88hs3CpzMW%2BnQtCzkC443seporQXjRt0%2Fq5JxFcmaD9bp5ca&X-Amz-Signature=bffc401ef87a66b29e451479261ad2b93122e732e24150609e574590c24adc12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK6GTON%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCl%2FiwTcKFjx6sLpugrdrUh2c8YuWeMAZ%2F4iortLXUDDAIgGAALeldaNz%2FmddTTXsrM68u8ESxFT7ug1gxYAdtTVCwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeEMWefevVO81xa7yrcA59zLWk0XbCcAzjCq4oLQDB9RTzKgXS%2BuoBqkqzNIEPamAib6hEJr3lKCdQLRobyGxPPX1lsSXGN8ubyc9w2zrNWIazeSxjCj%2FS6av9BGMWOUi7Ze8b9xowqYFB3S338Xt%2F%2BfI9VgQQ%2FPFJDZ4CtCtTHKwfkeBaA%2BdZ1UE5yOYEze3EYvbK73bykLyaU23y%2FYR4OJxAStNyvCigfFeeXtR35OJq4yAuZ8GaJJ2A4JmUJQFA7xSpYhJibt5e0eBX%2FE8Q84a92oisjImBaeeRFwzxVtQ%2BbZP8df860irw58kvePvsrApz5qh8j0XLekXT%2FE47Xhe1YW1uVhrqABh0jFB5I8p%2FVJeGjSOTt9Jn%2FMoQB0ZLGcKvCEAJPIA64VSgXvzuXVJaa87t3FgiVcjSukzEdh4NUikSLezgrjMNWj0ELEMKGM%2F7Af7lOFYHFy%2FzRArg6y5m7TJsmosZ7xLKmer%2FWx5P3IEwsi8GXinCjQ%2FyPe3%2F579eDLHp1HhkHhCWzHfY%2FtdqGg22oa1ab6Smz4lT9BooQpT7NLhlE5ZiUG6HyKlaHEb4ntZmhgNGcgyXyoOUo3KeI%2BZW0w7pJEwiFsPrH51bNvjh7QsOV5pKdM4%2Fg%2B0ZUwO1Qz1l9N9IgMKSgj8AGOqUBSmID7UH0MagKUvUTku0EDehmUMLOt9KJxmzfQ05pyKOygKhCRUGhmLL9hHiGVoHqOPDpd2fakoQGM9SoEJihJNCiXbgi5hdmnAm%2BEapy3JHJX%2B8a%2FQU%2Bp17rHdjUp8H%2F8yOMp%2F0kqC6SrCHgs0R2qgcs65MDMdQDtkbtxtUwIU0R88hs3CpzMW%2BnQtCzkC443seporQXjRt0%2Fq5JxFcmaD9bp5ca&X-Amz-Signature=797cd752f458f22f96df73a5969813de3723753e81ce53f98adc654ed8523b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK6GTON%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCl%2FiwTcKFjx6sLpugrdrUh2c8YuWeMAZ%2F4iortLXUDDAIgGAALeldaNz%2FmddTTXsrM68u8ESxFT7ug1gxYAdtTVCwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeEMWefevVO81xa7yrcA59zLWk0XbCcAzjCq4oLQDB9RTzKgXS%2BuoBqkqzNIEPamAib6hEJr3lKCdQLRobyGxPPX1lsSXGN8ubyc9w2zrNWIazeSxjCj%2FS6av9BGMWOUi7Ze8b9xowqYFB3S338Xt%2F%2BfI9VgQQ%2FPFJDZ4CtCtTHKwfkeBaA%2BdZ1UE5yOYEze3EYvbK73bykLyaU23y%2FYR4OJxAStNyvCigfFeeXtR35OJq4yAuZ8GaJJ2A4JmUJQFA7xSpYhJibt5e0eBX%2FE8Q84a92oisjImBaeeRFwzxVtQ%2BbZP8df860irw58kvePvsrApz5qh8j0XLekXT%2FE47Xhe1YW1uVhrqABh0jFB5I8p%2FVJeGjSOTt9Jn%2FMoQB0ZLGcKvCEAJPIA64VSgXvzuXVJaa87t3FgiVcjSukzEdh4NUikSLezgrjMNWj0ELEMKGM%2F7Af7lOFYHFy%2FzRArg6y5m7TJsmosZ7xLKmer%2FWx5P3IEwsi8GXinCjQ%2FyPe3%2F579eDLHp1HhkHhCWzHfY%2FtdqGg22oa1ab6Smz4lT9BooQpT7NLhlE5ZiUG6HyKlaHEb4ntZmhgNGcgyXyoOUo3KeI%2BZW0w7pJEwiFsPrH51bNvjh7QsOV5pKdM4%2Fg%2B0ZUwO1Qz1l9N9IgMKSgj8AGOqUBSmID7UH0MagKUvUTku0EDehmUMLOt9KJxmzfQ05pyKOygKhCRUGhmLL9hHiGVoHqOPDpd2fakoQGM9SoEJihJNCiXbgi5hdmnAm%2BEapy3JHJX%2B8a%2FQU%2Bp17rHdjUp8H%2F8yOMp%2F0kqC6SrCHgs0R2qgcs65MDMdQDtkbtxtUwIU0R88hs3CpzMW%2BnQtCzkC443seporQXjRt0%2Fq5JxFcmaD9bp5ca&X-Amz-Signature=23057d966852198cdd7b74b745e910557e00b17445fc3a94d0973ec8a5771062&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK6GTON%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCl%2FiwTcKFjx6sLpugrdrUh2c8YuWeMAZ%2F4iortLXUDDAIgGAALeldaNz%2FmddTTXsrM68u8ESxFT7ug1gxYAdtTVCwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeEMWefevVO81xa7yrcA59zLWk0XbCcAzjCq4oLQDB9RTzKgXS%2BuoBqkqzNIEPamAib6hEJr3lKCdQLRobyGxPPX1lsSXGN8ubyc9w2zrNWIazeSxjCj%2FS6av9BGMWOUi7Ze8b9xowqYFB3S338Xt%2F%2BfI9VgQQ%2FPFJDZ4CtCtTHKwfkeBaA%2BdZ1UE5yOYEze3EYvbK73bykLyaU23y%2FYR4OJxAStNyvCigfFeeXtR35OJq4yAuZ8GaJJ2A4JmUJQFA7xSpYhJibt5e0eBX%2FE8Q84a92oisjImBaeeRFwzxVtQ%2BbZP8df860irw58kvePvsrApz5qh8j0XLekXT%2FE47Xhe1YW1uVhrqABh0jFB5I8p%2FVJeGjSOTt9Jn%2FMoQB0ZLGcKvCEAJPIA64VSgXvzuXVJaa87t3FgiVcjSukzEdh4NUikSLezgrjMNWj0ELEMKGM%2F7Af7lOFYHFy%2FzRArg6y5m7TJsmosZ7xLKmer%2FWx5P3IEwsi8GXinCjQ%2FyPe3%2F579eDLHp1HhkHhCWzHfY%2FtdqGg22oa1ab6Smz4lT9BooQpT7NLhlE5ZiUG6HyKlaHEb4ntZmhgNGcgyXyoOUo3KeI%2BZW0w7pJEwiFsPrH51bNvjh7QsOV5pKdM4%2Fg%2B0ZUwO1Qz1l9N9IgMKSgj8AGOqUBSmID7UH0MagKUvUTku0EDehmUMLOt9KJxmzfQ05pyKOygKhCRUGhmLL9hHiGVoHqOPDpd2fakoQGM9SoEJihJNCiXbgi5hdmnAm%2BEapy3JHJX%2B8a%2FQU%2Bp17rHdjUp8H%2F8yOMp%2F0kqC6SrCHgs0R2qgcs65MDMdQDtkbtxtUwIU0R88hs3CpzMW%2BnQtCzkC443seporQXjRt0%2Fq5JxFcmaD9bp5ca&X-Amz-Signature=37e56e27a0ab4747c2f5029693c2e3cac9eb6fb92a8d00844ce50f95e2936889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RK6GTON%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCl%2FiwTcKFjx6sLpugrdrUh2c8YuWeMAZ%2F4iortLXUDDAIgGAALeldaNz%2FmddTTXsrM68u8ESxFT7ug1gxYAdtTVCwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeEMWefevVO81xa7yrcA59zLWk0XbCcAzjCq4oLQDB9RTzKgXS%2BuoBqkqzNIEPamAib6hEJr3lKCdQLRobyGxPPX1lsSXGN8ubyc9w2zrNWIazeSxjCj%2FS6av9BGMWOUi7Ze8b9xowqYFB3S338Xt%2F%2BfI9VgQQ%2FPFJDZ4CtCtTHKwfkeBaA%2BdZ1UE5yOYEze3EYvbK73bykLyaU23y%2FYR4OJxAStNyvCigfFeeXtR35OJq4yAuZ8GaJJ2A4JmUJQFA7xSpYhJibt5e0eBX%2FE8Q84a92oisjImBaeeRFwzxVtQ%2BbZP8df860irw58kvePvsrApz5qh8j0XLekXT%2FE47Xhe1YW1uVhrqABh0jFB5I8p%2FVJeGjSOTt9Jn%2FMoQB0ZLGcKvCEAJPIA64VSgXvzuXVJaa87t3FgiVcjSukzEdh4NUikSLezgrjMNWj0ELEMKGM%2F7Af7lOFYHFy%2FzRArg6y5m7TJsmosZ7xLKmer%2FWx5P3IEwsi8GXinCjQ%2FyPe3%2F579eDLHp1HhkHhCWzHfY%2FtdqGg22oa1ab6Smz4lT9BooQpT7NLhlE5ZiUG6HyKlaHEb4ntZmhgNGcgyXyoOUo3KeI%2BZW0w7pJEwiFsPrH51bNvjh7QsOV5pKdM4%2Fg%2B0ZUwO1Qz1l9N9IgMKSgj8AGOqUBSmID7UH0MagKUvUTku0EDehmUMLOt9KJxmzfQ05pyKOygKhCRUGhmLL9hHiGVoHqOPDpd2fakoQGM9SoEJihJNCiXbgi5hdmnAm%2BEapy3JHJX%2B8a%2FQU%2Bp17rHdjUp8H%2F8yOMp%2F0kqC6SrCHgs0R2qgcs65MDMdQDtkbtxtUwIU0R88hs3CpzMW%2BnQtCzkC443seporQXjRt0%2Fq5JxFcmaD9bp5ca&X-Amz-Signature=fac0504d8b2eea25a73d193c0084194b9f0faaff98c974a2d963b0c63d990289&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
