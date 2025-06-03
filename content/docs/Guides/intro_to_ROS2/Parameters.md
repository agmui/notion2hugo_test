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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAOF6JY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCzGckfaTshGiX%2F95Sd81jK4LHBd%2BnaXygNhmalMPCGxwIhAOmg6E8aHsEWqrd4Zo1wjSJGJoRVu0ju6CNwX%2BnnbcryKv8DCBQQABoMNjM3NDIzMTgzODA1Igyp1ma7s6irsCoVykEq3ANSKvxjh5JUzdEI%2BrWAXsQ1MzMEzPWKBt6%2BNx9JeDGLvQrL8K%2FCp2hqFmCTOwnBL5C5ZoGpq7YuO%2FBr9m1LNGW8p00TTc2kY3HBNexaIsvAA6LdVkvy%2B4h6zYJPTZiFMjpSRv7AhxiwmxUw%2BnzGkpaGpLIqGLvRSNjim5ys50irq9pMzToKp7PFhaMkXlfA9HdYi%2FquPd%2Bq%2BN7Pw8YSet8%2F6Bf0L9zrgwVDiZR5gWMMGp0DNkZfQ0u2BIXNWVj5hZxOzN3J8Oy8pyvMisS2eKcvaq373N6B5DXKpWWrmrmNdPIvqQE0aDRKql5jn3yxuAsDtaFB%2B2OsZMPUGNu0DbSSXlElYPla%2FwsyfIqnzgUMZphVIVqyfxxpyHbEb1TiA72JN3ILO%2FOyg6bZCMurZrNPhyZYzZH7H6P%2FbmK4GroRfVQNMpMgQLfwLd9Qg1dYH7lf66cVPxTUIHHExiXV87o1xJk03UJoHnG85zZHrBejI1dyIiY9EyMvT4kn98Sv5KuYCkKY8citqm%2FBAghqmVPj0TvtJffdlj6ek6jjPS%2FKz66ve3ys2IarCPQHXlOkE4ZUxjV36nIZXDi0iEvaWrdt7J3sxizcf4VVPm%2BlPbi61GYhVVP%2F0NVwBdfoxjDtrPvBBjqkAUQaTUg4eU3ERYqknUN3yDhnISJHhO6SLvXHTg9EwDdSwrXHnLytjfymDEBlf4kexAFFZfEkR8nbLS%2FiultQW5%2Bu1QMijX6apETuN6oPWX5cpzB6Uae9y6wTMr3iAHi8FSfV6eQncwmX8XIM83%2FFu7CSahmBo28xQjwuBRhbytoh7P1axT4rpfn8lB%2FNpe3sm%2FYGNC14ZaUEUs1%2FixOhhecGlVil&X-Amz-Signature=25f3b610fa7baf2348dbec65bb87018fc83f9b5ccefb8c1aec2af05744c25bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
