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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSFPZE6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrqXWZpDkUq616a%2Bx%2FoTqQXU94bYOeu67e%2FjyhPpjPAIhALpRbgZ%2B6ebsiHRRBH4qBd%2FQNt1PPveBdQHVTA%2FLhdzkKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKe8euk1beFuOHBR0q3ANI697UA6qoZHC6WZtatYnv4loal9le4UIaw6AiLc%2BwqeacvZALReAaOUUAeE4oknAyV1XI%2BLN9SPqE1mk0CvOLLthy4Z%2FrO4diL8JNG0aAusFS33T1MDK1U%2FnsoqDDxdRx4nkyVQBlbJsQaU%2F1JUnt8IQzDZoDTG9fxicmETHLvmhGUr%2B3liuquk3v1G3l%2FtmRShXCvDbh71l5v9KcIFpvXQWpIB3ojxHcEMGQuYmvvSr1KzHoe7C4K08qDqcP5ircLsSS%2FXmyQVL1vZqDOmvcFhSRbycZIkRygs%2FbM0rQzZ8UPsvGMsPCBTIfEIswGWfw%2BRPdTwOaWwiXL7qtlmY3gSS%2FWj2OOWoyDMkCWFZUvJ3b12Q9DuNSkhdApbo46WLjHlnDE2VyJVNh6xeDvKO7ayz7lfFSSWt58SIGilmJI2L4umuuI8ebn9z0traJoo3nPrf92wE5LNdZilwo%2Bu0wgLRXk0djk5w53svK1yTfBBiU234zRlxFltnY3vfMt5eeBClRkvtsM3cwg7DLZANP82YNo0%2BuYapBfI9uUmlzqwrO6o2MQ6mos3Z3r10k5wLa%2BunNxunXRcaHcXJFKXdmK4PzMlAoYyVkE2fM30%2BNBp0vXA5wvFGjpsKYejCR3uPBBjqkAb2hbC9EA0AJVoQWuGJ61oX3i8pSjNF1ry27b74R%2FFVaeWR9aC2AOAtA9GhkIBov5oUkWtBm66LO3iQsG7%2B2tVTmpE%2FMXVYIJ6LQ0e%2BMMeRufUT2aT1mNu1nnoH1xGWwvapfEyvThKhq7%2BLO%2BncB3NJoctPTex1RcOv5puMa6AzFD5sGzpx1ahwrwQUxnBD%2BXcZD10AWesRdMLmQgP9MGYTEQaKo&X-Amz-Signature=287fb17f1b0d7b6b5bd6aabd4fa87f44367112d4ad2b436c6b65242511cd34d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
