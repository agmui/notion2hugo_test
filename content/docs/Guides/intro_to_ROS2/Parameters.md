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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULZWM24%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ2SClNm9uFATovKCa9Ox5TWMqEx1WZjKmhH9HHVGXUQIgHInHV3NgvUrVAgYjuVeHUBRgR32XiPI6qPhvuqkeQuMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDW4HhhqlcrbblJWmircAxNMWu4LI5Vvc437k1sMojpXbhgldqXRFPLcyxpuBv9XvW%2FDsSFQ41RSSxpapkCpXQseYwD3ZfsQpjPWbCegGEvCNuxS1JvsYYPVOSK3ijmkOvn7h2LVfrqr0XhrLUdMQwMPO%2F%2BVbFq1HvtHRR5ovZUsCLHbBgLXuPMLcorzN%2BuBKwJ7rlqHKLZUddn9IEdXNP01nwNdDEzEWlkpPfH0df%2FV7GK3bl42Y0hugjsXsUAJRFu7jnOlVJvISwZoesOajXYW5Q7r90rd9WpgeETxHcyBLADY%2F5Su4OIC1452Rt6r2uG0velvmsCYhwZMAb0byvMSbf%2F7Rbye7pRNZW6CBPIkB5wn%2BfLqlDLCoEEwbGXHGz6jSgPXM7N%2FXg4QlvtyhJoD7883S0phU%2BG4cEpleKXk9nZ0%2Br%2FcGrBX4AUGbaQiUoPkm9gWQFSxY5VUap06Hsz832vEdzNdZdeDRHOmDyg3hjhP%2FNr6Ob6Li8nP%2BHqYZu9u9qQLDCp24tzX6ql0yj7UCYVtAVqw08lb8BwMDYXCOiPMe%2FNnI%2BkZVLbvuYA6WBxk7p8AGX85kEIaS6Uc%2FJR2fhlBcPFZGwemhfagX8nO9XbHU5ceWduE28EDfhtGyKusPxB3479OgTc1MLGW6sAGOqUBcEENf9HGoO6Q9YW8mqFIG%2FexkQafMQ2PbKA7LAVwOQtUUs6u%2BDbY%2BOxkwxxO0NTRd6noIywfxmi6DwKbdEQOnqkecLEgMcgNb9klk8LWt3JHIV9PdDy6d1jih1ETdj7ds%2FlWHp1I4Tes8Q4uakkywFjzaK5ir3XFPfc%2BTowp9bm0Kyx5VqsHf%2FpIh%2F9MQtWoWyvDVTfYY7VmOsgXMuQX2qt3A4GK&X-Amz-Signature=e9653fa17e5b4b0a7a2ce0d97b56ac646b5ff99c740f5e1565ad53cca7a07012&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
