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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVBQDR2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGxEhDN4IwUBMpQF5QlKjpEiclK1eQhhsRQc%2F7NMZnKAIgSyf9maG80Uh%2Bg7DBTOeDwdlX6MU2F17NWInw6P1RT0sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACD9G%2FUO%2F6Mmh%2BHXyrcA0LN5Nb9ftntz%2FC72j940swhlCZ3eEguDT4xxdQdb7Sh4VnskXH6iI4ccY%2FHVoufDj1rf%2F%2BGclZL2YHzH5jGG81yYk8MAgKNMM3KH4L5HMjXZzNHUNIs%2BZPjS%2F5kY6F2522RcvbiwpTe2rxsI2zoi3Ur0KIcTq9E21U7xp591XCDxHK51xDvNAsgPe3tC1LYcGsoAsP%2BuuAG%2BRjeEa5XPfRTgBgq265gaNqQBesCt6Xb9Yyk8N7rB%2Fy%2BRP1nofFWAntmC9TyXt1gHgIYMPuVzLF3OmeddngU4%2FkjJfTJzVOA3ywSgT%2B5CVLwhK%2BDYKzhh7tYQ1Bo0lOObhFl9iQBrwb4PEn25ufYvlTp3i%2B4dTxSqgCPs56J5e7dEDwuLqU50hDdi1GkCW8rRdUhXpnjV1%2BcBL7UUi8bdcpHS2UkVmw81UhbBlLGHOZhPFM4C7KnBut1gg0Qs2FTRA%2BZLq42bpZ6YqAy0JSLASnFHy%2BhzF9uAtgHvFSlg%2Bt2E5JaVEYy0DvNC2NblLV%2FhDIkWbi%2Bklbe4LLZA5pPzj57ywPMFd%2FQ1z4VGNXVbNNr0D23HbpdA67ILyxapfq007K8iYzkQoRZO2ko%2Bzzqy%2FJQqhPCSjKnn6lgALnnL5Pbq%2F7NMKynjMMGOqUBco2YE2vLoC5vJqxqdFyLKenKjuyJ9EzZECeGfOfmKUX8Y%2FExY%2BopP0VXGLV0IdcCaRApSsM8qW5IH3b14bUyz%2BcC%2ByZaX41gjJ6j0WSKre%2FiPtO9qgZWYjVeGBxqcvfaNr%2FWW5tkGQiCg3xKWda60CnSZgIbUednYleq9Yzytu4%2BM22YL1C8ijOfxU%2FDr4rfFGYacNuRUT6cLl5jViF%2FJ5fLmtd1&X-Amz-Signature=a3c40199fcc1dcd5433197b02f12e080b075a13825a5ed4653f0cecf25bcee94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
