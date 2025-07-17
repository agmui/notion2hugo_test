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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHTDLAQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICVbJm2ISs6MTsGOXKoPA2lo%2FjgLOY3pYKFhM8a6YMcvAiAvjTv0kbypLCMJAkNsJ7SNm5gIyW8yKZ6Ei5ytRFeo6Sr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMerTLuU3BP2AbQOmDKtwDq%2FG8cEga8hPmxl1MvNNtyEme3ACSUaDt%2BUxafPudOhHeHbyaogP%2Bg9U%2FYjAyMJBlGhYl2Djz27BCGSuEfn0ymxtuMemebdBr9veFtHqirlBFIdq8BudU6IEiL0MHGLavataNq6vETzJ6mIOm%2FGYmEdleVB2od6MQ1th%2B6OB%2FOo5%2B9v3iO3EHVil02XUJH%2F%2BDevvWoPOtfX6YuE51lKMK0RoEXxRq5teJlYsu9tzMlvL3Fw0RYoXWG7%2Ba%2BgvYSLVOwhsKPa0GwqYrTpfRL02r2URTMtCd8uhHitfSuzML6jTUWbdd%2BY1h5XGNf8qeYMaCo3P5QkTyTOvYPEgkk1Cas1Pz%2FG4pO5Ii%2B%2FHy4NFKxjSCkzoaSnSlE6bmt4BlIf%2F2QonnrbYgchZ5oZPCXHyqXTQ7t%2Bt2iOfObFOjf9Sk%2BB7iRY124ZvYqo20eYqYNmS%2F0DFk7Su398AwpSj8QZJapLnRrdX%2FEiVuCTX7dQZIUaS7NCABrhusB4qejw7ng6zCnyEYH65gV5rGHkvwtiPMFm5WIzj6XMivPz4rPk6VR3HTqlCLSYMpjfbA5MYnUPCoEgLl4HKuWoVGDP44Mm8ZOyuCzss57qHp5W35e%2FCL2pxFTWNFl8VMcTN3LMww9cjhwwY6pgH3pX%2FqTHRHMN0SiYoXKUwEXW0kjepzjzWDD3LxoiYFgxmBOVG%2B0RhGaNM6y4EDl%2FgztTNoeDXwfGRiSUa5Grqa7fBWVeitxznRHsiBQZSfAx8DpTgx10ePOI4XNa2eozkciNxZ2kcNoXFTBklJUv9XMDdcBnthWdnzwz0G2%2Bu6s2okilZfLPVw0ZPXipn%2BCq6stCfnSyrBSqaoW26KTVfg4R2ejye4&X-Amz-Signature=ccb7bc299fba5ab69395b0ad1d3808e063ef8410225d02c7dfcc4a4f54f41c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
