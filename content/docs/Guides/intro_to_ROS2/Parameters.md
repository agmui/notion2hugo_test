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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P5XKXZ4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCPXlIJOHmEZ5IvLTzlssju6nlaIhK0vRIu5vNszOoAIhAL4154fZ1J0%2F3rCpV6K%2F4%2BSsvTBUYdxcS9SBSMOkNrtvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZc0tKPmx%2FdbGp5hcq3APi4q%2FqLW6PYw%2F2ipEewXYtEi8kB8Jrod%2FTvl%2B0gSFfxR4f%2F2iCwDPxNwv0Cq9vcnzPCzObYvAzGUr8t3r5iGo%2FZ99Cg7a3W7jQGP5ImxthiPAiiRv94mD960jQ68896iLUURoekrKSTDPh53ST2VPhjGXAmWT3I36auZwr8xKUw%2BqHRvr5%2BflqIFtn%2B5f468uJ2ktc3IVUGsbbYK152QUWRPcGZkDOMK0PjQfdjjFbwTyrwkA6tT%2Flnms9gPPh8PnF1mQnrEeCCE%2BWAOrmXYPlzi4pJQFbv6%2B8qtn7VKknymMAE4Eef22kbCaH2FKfevsO0%2FMC%2Frn1IBGtmgwVcpPvCArw7qqHPxs%2Fv%2BBPZmFv0tDOx1%2Bk4XgryVakxObVFIG0Ls6v6Hfh2PExMBQX4WRCb9BlAz8FNcGs%2B90koDjOKxKe8hMAwaee2vbQa93K0%2BjsiLx%2FZJRqmicmGbM6TII1KAfWqzpT9Tt2L47Vm0Q1LjydJYj1ITi%2FMS7jhgzNkmOxPLNHLhbR5G1ENiYbchIRTNomrI2Kb7PImLfSwccWCHGaxFuurOi84O%2FCQJ26z3M634tZcDT1brV%2FM55MhkAtKl%2BEvNKMHV2QV%2B%2B3ka8eLW69UCDrA0GdrIArkzDQ7ti9BjqkARE82rGRinepgTMCGxqMpgToTd9xvCRS9Orc58Z6He3RL3LAB6DQQuXp89OqpOBG3JkBZBBERrEcT1SoFpAQObYnbZePK66MWbOmY5EQF%2BKw%2F4PrcIWHYyWCcmHlOKoQ73XDRhf5K1c7ZhcY9BFqHvno4CLQIwlN%2BAP1zZPIsPyWPh0PHwiq79woIgky%2F3dfb4qDz6V1M8KwwDpc9zTXiBMK6oVt&X-Amz-Signature=947558139d11e3d822e6048e3c7751d2dde60e7bd69c975f5954dd63b196409b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
