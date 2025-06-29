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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5BU3JX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMQ5edtF1%2B4Paoh%2Bu8QxwBbTeyQ1ZI7raBv21injOjFQIhALmB4xuk9NNzvtsB5aAN76y8mktkQ1FKUs5uxE9%2FZuCJKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGyFBIXUuSJNi2xY8q3APFGa8xeRR08ua%2BNEvZsQBHkpD9H0mb7MzHFgRbiO89b2IEtuJxFlRkbCrtvRoj9SB7%2FIsLNySmJ3895Noh6dT3fjDcYfBthwrntcCve0ST2vpIPiwep0PJjq9AUW8m0ensIOGPr6Kft2PuFEwl4dEygvfu%2FDyZPSUjXIV%2B%2BRJG9fYNvbjpBTq3wnTiaD68EocUqyEvJgcQf6t3g8hGmUoWJeAGc1GTs1mcAi8lfVPu2wCRDSH7H801cvxQsOET858UXg3y9tPVdZNJKL0ouATpy6A97AovjUfLPaqaxzRy2y7WnbNou%2FSnmPmbjAUNK5zJkkowHgQr073HUEIV%2BwiST8vB03MGaPFxwvl7D2aVAMzx%2BtYGejq%2BiG%2B%2BGIH6n42a%2BMRxU5JQertQmbDWI8EKu7SJr3tA6x4CN8%2B10wkuhF5HhVoxqO0QSbKiyU%2B142eSY9XX3CrMUwKAQ6t%2BR5AoqQTz0XPr0mK71cU20wy%2FtfDl2CeNc%2B7MSYXKiIr0H6b9n3ybCDfnK6Pfens3qQ2Fz4qBAZr4UpQxPsEqsyXE0rSAckT%2FcC7CALZwF%2FFuT0TjI%2FiQCngGwV1hbkiy7DqRj6%2B7QSarQtQGwNY75coUsa6Jtv6vbkdD1zRy3zCC9YDDBjqkAXhaz46ap3M1X6hMB7xaxKJn%2BwVYqKlvpyOEaKRJQ5Zn70smhrdr3NfvTe09oZZE4pLwewqdm%2FRB8frjlEFlwWU954tI96HAlvk18g5iqQ4KbbOLLITjpbn3YEGRa4jCmJUTrUj%2F%2Ftl65YC4xevychxBBAUf3LzQP3qyvUraGSPT1ML%2FZHmi%2Bhs3rEl9Y4Qrfke%2BW6%2Ft%2BSgnxJofBH819kjPiNVk&X-Amz-Signature=91700ea6e74941e1eeef09a4e1f6f32eba1a5f6c84e03ef4cab70961c8a18233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
