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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225BUIUA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDBMZeBHQ8RWKJH2cvIKLC8WDoLZfU1JJaP7dKhGh7vhgIhAKDWd0zkkDPTZK3DhZdKxSeELK8F0F%2BrGEAb1g4OHyz5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxIKH5umD8cDS7F8R8q3AO0uqEHaOOw%2FAiqmt%2BIb5daKty46znz0lkntZw6Z57Ohz196cR8suD7Lmp3bftuhTpGX82%2BxQdegWciLPKb5%2FDRiAb3z11OzTPBI5u9zat4QEeRnkOM2udpgjHe6QkjDYxf9agURf8TBI6fjuFwHQgqUTxjH9hZ8qLhogvhgXNYqw12nYRtplFR9MA8JoXJ0%2BEWipN5pJZT6UILz4wrA%2BYKkGR4i4fy442aBXv%2FtRvFgKZuZiEnGW7QStJiAeqXhP8t6pUeiG%2FidlcNkWDnWqa%2BsIlG2asjhrFETNTV21hO%2BAMZemwRHk%2F8NiGEwN2daE3JjCLRbJEDEITE82ZQyDYj%2F%2BwFj5URkUZzgyQrYNLsWU544yqKFQ%2FJKlnpEBdIDBt3H9kNw7B%2FUR63E99LsSv4IHOYeiqR8hfvfNCs4oIlEFGJMR%2BvkjjvL7Y95wgZPD2eRQxABuoyf%2Fni%2FHOqmCYXCfgnPX6RdzVZ5FBaZ3w1QrVVH2JAVaLA%2Fw%2FIrjUsacV03%2BbFplMvAGhgI1%2BDYjDt2nfSQ%2FV3yzNUJOset1jJZv%2Fv%2BQEqWDK%2FqLMIfNPTSJwl5HdvoGC92EcuuPeGUkIMGqW1wP%2B%2BkgiVTbQMpm%2BzTSXo6WxOkqkjt283KDC9sYnEBjqkAXTlHJP%2BOjCZP0vSn8zK48MPpxzgZS%2BhjXW3gnDkeXECk%2B89Fx2yjFz35f8Dd%2FW6X%2F47qcEruQOyYbV6n43P5FBjUekUghd4AUH6LTiI42yNIy38wKXS7tVvHZAbtaNHO2C9nQNOcCELmQJbedHmAufjdoAGgk2Ycyyzx9y7KcFc7qP9ZdmVJd92DA%2B0wjtvge0s%2F0oNEDygFNsssWeWktCeNQGM&X-Amz-Signature=eb86c5737cdc82dc5c67bb021c33b7f3491b166013e5bc022a686b8223927d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
