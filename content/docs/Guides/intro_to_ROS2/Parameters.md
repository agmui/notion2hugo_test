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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6F4ZUO3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDqU4xNr1lMLtUhBEH6T96NSrSGzIeWQV425b%2FSbyr2%2FAIhAJi1lDRDNXb8ip6GhaC%2FbVOSGi5wT0Ygdk1OXDEszZaEKv8DCGYQABoMNjM3NDIzMTgzODA1IgxRhDMxKdgblc6NUKQq3AM0pARLJCTIBkAmPoCqb3XJTPkT5Cw5G2ezXkF0rLp8lBMdR2uEY%2Fz5%2BCH%2B%2BUANScqWqBfbWPW%2Bzfyv5yLtDVlfr9BOi7flj8zLgfk3ahb3HRzHMFAFEWusU7mJvdkZsWL4N5DHFrzhsPf3QU1FfJW8yksSziCwRlUbpnuRFcgXfoA%2BDacTidSsoni2DsuxXxH8iAcnSLFN7q%2FFeq6fSWah6exSUlT2zEvwRw62%2FWWwGZag1ZU8sgMH9%2Fu6W7DMkZlG2%2B1C3Pz%2FJh5U5V2EpY4Pjbx2Cz%2Fada1SS%2Bdwr2xw0mQ2C6U4%2FM13Mp54I%2BuZ2DpukzN%2BzDkdPc9zE%2BgMjCS3km%2BzkivwIxrw4s8%2FV1%2FjAdKLW4kI3f79dh852EshSIwrLOvzQZpxw8X0DKzqhCIQKosXaAfTBmdwnOvV32No7rgm8D6IsCXzeaHPWHXPxThUHSsSo1ALOwLlrwpGEFVyfCkvdA%2Bdb5fjndEgxoC2y8OYMmIyCBLDBR4gmc%2BPKOj9%2Bdgk67%2FdZGfQETIPJcy6hwe%2Bj7%2F5UqQZpI%2Bhk8CPBZlLtdasQO%2F6rT5e2q8ubzvOxGTUj46VGY%2BXWByWTS%2BG9g4PZPOhmFTN5FdSIY0mIAiQeoGwF0P00HI4iTCXuZS9BjqkAQDhpg34Cqa8B0eG2uiOqCNxJ7SJS5SgfU2qS20tJKKsLaKr%2Bdl2KXpgBcEnKWGJ1%2FljiF9gKszaJnnofOH2JnCWcduyIDzRu2Gc%2FJ6X%2F8i%2BBGNhKmN7yROWw38C7U2Nplud5QMQ75ik4QIX17nuWJ3B0tQjoaHVEA1RQrb09aKuGj2SvEWqWm5y%2FKbebOVosrroAF2RBfQhA%2BycUddwVfnbtRuK&X-Amz-Signature=748798796baec902c291e07a3832b8535c4396ad13dd815cf75c4fb59459e7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
