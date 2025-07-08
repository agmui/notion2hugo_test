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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5D7BVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDmmfb4E0KiYFoJq3wGhCrTsdGSDPPaFDWsclT8KMBeaQIgf8BCU2sRKAOy3OF2gYstCJPm4NhQ%2F4AXD9Vr3cX4ADwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuDfWkvEtCBqSzILircA1nOBydDE2gvW%2BFD0PzL%2BA4cRmXrSj3lp9lsbHqrFrYB%2FJME1HQJoAM%2FEUIXEnQztme%2FHPoypkI5rPmY%2FXW5qDDT2daKUr4qO6ylIabR%2FmELGd2g%2BwvNHyA21VIuMW4UzkGlMtoJb5bu3hyXIPAdKm%2BoF32pzMqxRH9sMbPn3buu6JOH2haJbUj%2B8cXoeC5J8Y7pJjKT9pqC4%2FswMO8SJsy6pt96gkXoqtCJ4DlQqsl1ZpRIFIO0lPKLGfa69KxiTj58pOj7Kz2wLveRx2SPatELnzbfforGg%2BIv75VsMOL3G1bwwYwEjmtwu8d6xVMT%2FIJg6Sc1D5%2FXkE0ctiuny%2BSfOs7mjyZFXPcrp1T%2F5NtnbrS%2Fhp0hinHKUiPMZzFDZWlOTlWuhiexQwZKnm9uvrJ34djnih5Oxx3KaDjnn1uL%2FBesAFImJehVNLaokBw9F4aKq4oJ9u0SD7r2udCnyWXi8Zw08z4BYiJAu%2FyG0AMwZ6HpZv3YkXFqrp39PZFAvOEpGS2MbY65QCrEQhkqvVUQf2Ewa6bxMzZEuPJdzA4aH7iFotQlDLDYQ17AsvJpNEXrPZ5b0q7RU21YHXolFwX98Xr0Ib3xTXC%2BBQVIuBNXv4oPeofauO9zkWWRMMaDssMGOqUBxzudKa7inLwiEd40WHpSUxBQQ6C%2BO25j50Enzmx0HgnXMVGb9LUtIm9to%2FxOhDTflATOEodfiMidff9rpX5VtSMMX3LY4RYK8iw3AxBrkYufqZTfKRzRs7er%2BuSVBQeORZnYQXEr%2F1dqMxkEcFgyJ9b3K7DBITisAiLb%2BOEQ4G8dq8oEDFywOGyfP1frTYREb1YVgDCKQPb6Je8Mw9O64zAEkJqY&X-Amz-Signature=4de14127fb5b5c52e5ae2b9a690dd70ca3fd2ff2e913659a1993d13eaff42a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
