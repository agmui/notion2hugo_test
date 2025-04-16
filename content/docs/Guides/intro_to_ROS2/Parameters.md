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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPK6UXV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbFCZQbdfAicStFAkYCnYTvITzyLABvLkjNRXdmtqVCAIhAMKKIIvdDda2xcqU2RTIJoFMgy67NLbBLfv1UpppGdm7Kv8DCEkQABoMNjM3NDIzMTgzODA1IgxSW91rX3EX8vdf7JQq3AMSBweGa66JVpGH7mh%2B3fk5bZbW04egf9ylvVx7Xq283KuYckew9gDxC%2Br%2FiYYcZdlsCN%2FwxiEHXp1AfZSsim2%2FbZ%2F4OljqB655442wiJgf9uEh%2Fs%2BrNUqu8e%2FUYDbnk1m3sgvPIAz9g9ZmTeW4Icoj5OU%2FywiepGIS1csxiS7yuc2tKQ8Ubo2fOmLPVIGj6moK1N8e4PZE342JOOLLt8xlTpSFCxlCMJ7VCQFpX57J62vhGW%2Fv1%2FZnHtK1Z%2Bl8mYPibKS61hntHCCoOc9PoFHbUU93sGqNgL0%2F4scHXChTpf8YH1rEBEgpeVAh9PevFvif3TdkOOO6c%2FygwxSB37W4CSqwlKBP2aJkjT8s0xiRzyp2RJ27Gk%2Bnfvx1VHL%2BcHNtAUU1hPDXtCF8s14ZfblDexk%2FYoP%2B%2B%2BnVGQeZFlirZGef6XhqBFoBDh9vEmo1aVyB21yhQdfBM2pjYmap5XefMaFrQv4MbTNEqr369QEirF5Rp4vtjJnj8%2BiYI1vslnDH%2BcR0cXGg0gtJip99cYpzN%2BKG93mFE%2FDU0iFvbwz3lyICFsDXVLm57ovHWoPh%2B7eIBh5E1V1hzRNYV52K6YAbhXZ17Oi3LVmZ9Z%2FWFSCeU9j0s9w1f3HZcTT6UTC4q%2F%2B%2FBjqkAV20CO7pYkC1lMsz70T6HqW1B3QsxDkF2d9ayt5mNmA0PZATW4fHmQYBwFuiWA%2F6DwJuc2jX9GU4sP9DmWA5qJqn9iPlRNKMZr3N%2Bs5RGQTDtpdTShO1XM0FhblkABHtTqTm0JelrfW2HmkwFDXIAMOqiFSwUBx88Qp7YB%2Fu86lgpqbFHxxKgCFqgrUEwnx6pBrkjd5YNUIg6DS8cSvV8gSV21BE&X-Amz-Signature=9ad091c9e1a7a659d535bfd1cf9e90d0625c116fc30757349697401f3d75a640&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
