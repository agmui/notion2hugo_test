---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547XZRD5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAhDj5V6QTbkV1PUW3XU%2F5EjzrWOOW0W5RN5Opae5P%2BAiAFdMvpZpSU7zNF15uJZr5LbZWrTK6gU0BQCxr5aGwf5Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMOxGG8uRbkHBG1hmdKtwDW0seGBkpl7WlhRjBYEyPY2yyt4uK54OteYELzJfoDwBxrs3vLUVOnbb7AncCXbLeZRNyg52dsgMZIURDxlUKusGy5%2F0%2FFvLq%2B9jPgLpCfK9DXqpGbqkPoYaUH%2Fn3%2BBTdG3wzUU59%2BnHAf6o5vbtTVR37GN9GpTDiWHvLlKx3x7zWpJdUZ0gEBpjA5%2Bj0xkcs8AzPnyJ1qx2XhoIoOJ%2FBaFAtSdnh0a5Jo0IPdjZ5khCdFxIVw5D2HrPZP3t9v2n0RQ8hBxpOmKYos6ikZcacwAh7zz3zX8xqE7DcayJHqzh1XKfuxelh1FZnN9sMCNGgzPn2loHz54bbW1KOXvtOni0ko1HQYGNWzQlQEZqPfe5z6AlrYxBXhYvgD6xUaMEufVXX8EMI%2BbeuC2tkIWSld3RZiF38DhBwoHmOslHGkTRkbWK6wnH%2FQADxxZZSUv2tdsD5C6uPGcoQ8V4OHeQUsASiNVE4ueZJV2eH0hTBoeQclSN1jVhN5kXvsJxhysufDS0RmEwgPxhjensrLAjcHHAiWzg7FtEohboNaJ3W4c%2BjgsmYxg31mAMV18Cu0lSvBVEiWxDYOar34ylUY%2FLrNH6PNyux9VoP8ALi1FL7OrlS71Yk23f9LsRG57Mw4MCqwAY6pgGglHS8990XCQvYOo%2BDm3GnVjoAhvM7q0meX8xnVrPholiJhNp%2FoYrfyn4NC1GFkzdu%2B6GUvNK3EH%2FDi7hOghVDvaypfIZTGQehbPz5zE4vX6n%2FS1wyaDyaRBf%2BBFaeWDeeOmM%2BrBd9MJrWI9Kv3zqpgPIhjVT2iNN%2BtxIMaKPCa6Fjc1TYoCPqXx%2BBxoiawsTjImKQCr2mbyB3wBnLzaLsdKx9L4jh&X-Amz-Signature=1e4ca22f6f1d28758a9689f3ef0aeea92056460529a05fde0f78feac069b37a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
