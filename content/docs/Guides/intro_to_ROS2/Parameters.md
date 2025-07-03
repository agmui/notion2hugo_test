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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TGZR57%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAd8quruQN5hZbVNl6pcDLxJ1Y3iFEELWXsJYdhbA%2Fs4AiAMpqroEnFQP5ipCCTm1h1fCGZC03u3zvGZBLx9im6zcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMMjCcs%2B5rw6gmzkgdKtwDMB%2FIajJVgMjF1j%2FuGTbl6gJTYTs8ICiM%2FwqKE%2BywYsfnlVo9dnCZhNTENcbUCP3mjphpP606pyQdRuGMWMFY9sUm9xg0KwVFX%2BG%2F85FCSAL5hCI6RhSckAki12bMaPHv0jm%2Futi6slkNc%2F%2FQF8f3r8eDUXuroNhUjMc%2FZO7RiQkkEr9P8vARuwjpt885ajD5DRapV9QOaPLUJcRe2%2FE9feNaqEViaSKL%2F2ntE4SGpi2VA9k9ZqpUUSWtjP9V1CFdva6NQjuc45gKDFabvF45ypjyzXq6RyVWDmFBWwb%2Bmoik55pRo0HT1VdN1wUw5vMoCeF35fvuFoi8nNScNfdsAqXzMlC5lvMZwOPVIs5nV95WBq9Khuq0r%2Fxryf3gebBJtYptiEO3toz6ymGmXuUSAY5mNoU%2FFPhZKQqsT%2BjadTcc5gszHXYAdi6%2FYZHp%2BHe0EhoiMjnR%2Bv9Bv%2B%2FDEaAbwxoCRjI0v1dYM8gAfOB4AmGUOQN9CG99p%2BGAmbm9CbpXdbPllp%2FlE3hEWlknZpPsUeWbkR4sD%2FplBtpI1UrvnWsy05365ymo4MbJisLpBCeRtSimLR5BS%2BRqEXpHAmUDW%2BYIMs7TY95ZWONMidWkP3%2FcfEe7VNoNXwEugkcwububwwY6pgESGPWb6earKJKn4k8en%2F8m0F9q%2B1WFJF6keQrAY%2FiEKKfD7lR49J%2B%2FvvevO%2FKKetuZlBeMWjV41WxZLaBHoD6aAw711Etyr9yAYP1dI8MYydE2VxrvrxjkaHwpZy7kd1IIcWvFqjDqqc8vcMg4WBFuKy1nM%2FXef5MBaQai8zljzrM5yX%2F9uApVUjlmA4G9bSfEcT61%2B0K8I2AVfL9ygRLlUIMtFSYx&X-Amz-Signature=0ef161e65151caa31b40621153f11915e05eac79546a345ffcc63a0712bce544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
