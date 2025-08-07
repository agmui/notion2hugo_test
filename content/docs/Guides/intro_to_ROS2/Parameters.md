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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMLFPG3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDFvzbwKvfqbl7n5X1WzxZK8AD%2FRpFa7szC5OYSsALnPAiEAstkJjeSHvRqmhDJzkj%2BWVwm3DCqJxN8HAqDvr%2Bg5wgcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZsZCAo3i3yepyA%2BSrcA61fWA9IEArmaJo3uIcFxK0PegkwU%2BmcxkWAijwOdoxXO%2Be%2B1%2B9eHTgcA38AaCz%2FNoU7uX101CDy27p8qcS09b0N8Z7dJw8FBSVD96%2BRFU0namSbN%2FhH6qVe5PfcfzbsmKK8ivLyIdfd5zce5Vds%2BvMv%2BJrCkzLJVUrAhUjPfyNwcjZwxCzBWJFox5UHTa7vGBylCf2CHKYTMgK%2FBCINR%2Fc%2BXw28vJ%2FsFyBgtrtMODualL3Vv7mwXC9wruEp%2FGNXavO8WxNZi1ubENPUQuvoU529fIzvKucJt9aWOo%2BulwKZh42U2uiiRHwREGDErNvqX8SBh%2BlA%2BfrM4ObJY0kwdJ2z%2BFjMFxh7xeeXkevNelJIgp7ea%2B6WMJaGbGcBwul442ZUAK3MuXOOocPBPFCsLcwwYsKNz0ybzcqYiHlxwMitAobSC48TwWT%2FuJllGOIbjbZpWopiFgPF8rjalUPRiW5gEYCfkzYCaybI19lqriah2W76NbqV7c2x7LLL0E7OtH7RbGTBvfNEIP1yMxSS89nHX80U4QfNzgv80hl6nZm8856iDxpNVECuWUlcl7rTgr18zE6RPDIsqZX8Pvhde3XYLZBWHqY58Yd6WomsK1hihIzUtgXM8N9%2BaK9gMILu08QGOqUBfwi5i6UJtO7rF0plsUqvlgfdmy05S2bTQiCDwt24PXPX4qi7gAPen4F47T7jp%2F7I74Igg74OHxh2grmCP3kx7Fx49Pr4KEXacKnJ9Czq4r5DQQjDZJ4Aw%2BREwJ1M7bsugBHuIw15bdkehXMzk8QY2YyauM980luYRukA2Nz0LUqE%2B9Mi9okeIoWaVwfLJnncUYbro37z0EgpPmO73EshOppjQF%2FW&X-Amz-Signature=b4aa9f0d81f92f4995e3da6a4e093bce456c6912dc14e9be74eeeabb2d97db88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
