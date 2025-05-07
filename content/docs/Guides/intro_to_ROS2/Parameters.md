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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EI6MU7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGQZjYlaPywIrc8nLhMo9rftx7nWDwjyJw%2BkPYlHXIuAiAQJ%2Birdlvtw3VlWyz1QI%2BJXD5EEyZhs08f2hq50LqHcyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMJ67DlPsOygpKo7SsKtwDIV5K9Pjfbs746iO8i8nlQF%2Bqu51RK4IygRPHXChrnDXyIyIjmRc5VQqF3w9MU2O4wLxosmXEUpANE6vCuo6X0o9XmVW5G2GLDATt7Uh%2BFr8GCTviUYZcdeonIdMuPJN%2B%2FY%2Fj0Ibt8bSwy77TmxMAljS%2BHMOLS1RvuT%2F7k0XIYxoJV2sx7%2FgFP1j1HpHJZ5QDRAWqarXor3dDUICVNtoPFfu4AjPE%2FS7mze5iyqkQ7kjB25o867OZUF2lyhTJZiMtiuepwfJDI6k2ayYz365zexTOzwzqmTZRrI3bPxwAJhLgpGyhQ452irGiW%2BuXZVmCSg3Aj6kGVxTWEaVLFasI9%2F8pEsbK94HuHPurGL6UsAUjdk3RC%2BN%2BgDZCXmTOCzvoG0n%2B9BrEwW3n1cPLSweick6p%2B2D7Gnrd8UBH0cO1SbTZ3VfyX3I%2BrveGkszBuOFjqiXVqqtk6ElOclVaIzzDwK5%2BMtSpXed2kdakcUx8E2RR6TolCzAhQsI%2BpkmKsTCISlcaaScn5taZn59sRSxAzdnKk2i%2BTVl9EExZGlgvWLRO9NB646q%2B1%2BDym3XR3hUcTBt9yZr5J8wEPZ%2BHh43zToQkvaCCLXZAFmOSQJqWYY4aoNrgG%2F3kL8gQRY0wz7HswAY6pgEDvYc81zVhXKkC%2Fq7hBXHWcwtK7uq%2BWL%2FO7USNq6tuVunGCZj47yJMVspovdx1gN8ND2nJmcqzvGvhusVLKPquynxvlbk0tBv4q9%2BgkDK0oQPO4vSzURIMIjpQ9YFHHY5vy9f3dkxjyPD6KalGqMoWBfCRhT67oc2yHQzFT8cT%2BtGkEIMLNKNPqrAnijpdVIphBysbygHrCOXgdSSoDNMUy2MhYynW&X-Amz-Signature=315a2c3041beca30f4970e989d23718ddcfa44968f7cdf775628e8663268d011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
