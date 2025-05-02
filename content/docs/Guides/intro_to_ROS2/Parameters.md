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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEZYOMU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCGJ2XVQsJCBpV9%2Bh8MJiaWTxjB%2FDMwWGnpuen2Ch0u7gIhANIFemXgEAGyZIe9sDz%2BiXGoCnAOO9fTbVIoPTTFP9npKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf%2FwyaPLSvKRq00gq3AMg18VCAfmLAa4TMyJhOkmid%2B%2FxgnFXiXFHU3CtwZt8hpHTgdgGFLUujZGTkTiikIn1XXjtUxw54BpQWGK44YCtAX5RivRZOMe69W2IWnt8YHQCmXgTQ2njdFd6cgXSvKGJNO71gJUIuiPqSLydAEpJ6QsMJCkJb6m%2FEty3tiarIiV9IS2uzHP%2BNGwm0zwWTKILHQGHjAm5W4G4eWZC6zSJnribpITDM9cgppEsijjN0021vhpoJIaxV%2FVCL05gUbn5AvkPdWpsHYdCVKp3it2ncv%2BNXAdwh0A7jIWz9wHLgwaqcxRQweEZxSiR1eVWPMsHJUon1FSZxG%2BfoVH8etdQe9yKFxcYwo3BW40bilq1i2xPnmTU4wRwYSa9lsvk7jsZvF9LJwCX%2BrdE4m7sMl%2FDJoADYjPJPqKO8od6cy2ZUdPpA3utP71PD8TRJGdEED5RIuHFOC97nvpb3NkEZ9BDkne7r%2FqZ%2BpOoWdTwRt5exiG9sHPVx%2F8kO%2FhvTGDAC2voXUzpOHi4yMk6LoArWlcthQJFDopWD8FPnWBX8nmLoSl3xmyubiTC43uUtujLAabmPNwaHDY1x9IxHX9IQaeDd7NjZDOv7Cq8VywbKHJl1bEqDy3SN3C%2FzBfEWzCgmdDABjqkAfcMZ5wcrpF28hFmCEgYvefRpdVh2Vu4UVPo%2FvvFpTd7QobvE22vu5%2Bj%2BF2CtxvQZ4%2FQZIjZRPSL0R%2BpEVOmqh6LvY0etRLFvQiidP%2Bx9%2FXFpuiguZuUVd0Cs4a6j9d0OniG7hoRm%2BkidSZCO8jswwvntCJBK2czzZKHa7dZvKMIBkY7TnchP72l%2BXWSb%2Fy0S6P1Ybo2K9sF%2B8Kkax5WChOcdW%2Fu&X-Amz-Signature=3cd487a95cfb386d64afb002dbb93034766a885c0971b51d5aa9a3734cc91c49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
