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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUS2SWM4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFsjmNiw2313xe3NDv9%2Fe0cPzIhhR1rwYaA8ATPhjyqAiEAjDfn33eci%2FgNd4%2BbUSdagV6Ge3bHL19fvCI9koRlR1Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJvVRubt9agRNOes1ircA0q2JISmeovxtT%2BA6qLUd9ZXM5JNSupyueCCzk5WjDi1Gk1INITIf0Dx99oDe9gIR8a%2BGP1%2FjrFpB4ktVQN9HgLGI%2FCQELNGokVABWJq2vncMZv5gPdqyaoBcz82%2Bko9YCss7DaDWdh1fDCU7K1GVKCzoz9TZgGzGtNL9aFmMYdRCAqP4ZhL04W41Ej97022X9cN3Q7Jy9O8hjxwd0zBXZfn3PmzyMxnv6hPqHXQ833IOA7zCBZeJOhxW%2Fs8hLLdXn8txWzlP5E6afL381XA4FAxYzu88nhUUKrG%2BjBgU%2B%2BYBwsylyFxVtmVPWY6QrKjDUcZGNSOoCvYU93mhHsHJBzuto71%2FgpITwgQrO6dX9aQc8XO0rpS2egkuafha%2B4NUNiAsoyRz5L1WtRZnqOO3U%2F0OLv7uKlqAbz2Tk1u8DSi7MIzeCxFNBnW3MGV5D%2FwlnO5j4AvSevHo7Xa%2FWd66Z%2F4q%2FXNcJKCbTao4Sm8871UpougRYbXNRsm7x8VhRu%2FvT4ZVgtiZkbpdDezLURnDMJJUOGpEB5E5WT9itg%2B0RIuAAKmhdVKhYH27zNxNMHdQGyVm8SBh%2FBnHP7avy6D2cqL8pcmZESqCdCvCH2zHdqBDmeGDhTaBvsr9GHHMMio9L8GOqUBLLH%2F%2FR4QFrVZRAeSqIs3iBY%2F3SAQYlRqBJJGUWS6J5nWa83aR2muPiv0suewc4PucT%2Bt6%2FMDz15dud8jjD3%2Fyt%2Br9D5iU81RYZqihesjPDJ83FOpux5cQGPb5%2Bl4clXoEmiIbsfsPGsZXi4sF3CWAmWxUZ%2FtjjyAvoCNpEyGMyKXm56CJzXfa8ESnbQi8vp8WGZ7DbZb0FwTLvq46ehjAQsh67yk&X-Amz-Signature=aa04cdf901b4495215feec56d849e89542c3b92b08bd5a2efc3f7be05bf5a11e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
