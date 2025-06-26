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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILZ4PBY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGvCFUo%2FUZss%2F%2B74A4ePvh%2FqRIJ2s7azix2%2FTiwzlWnQAiEA2xvl3GD3Gp9ZcKhkAVek0UTPkarD8RNl3SgbCQNLk5Yq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLP8PZ9O%2F8SRH1jU6ircAwuXsbRSjANTyqE%2BMhmHctjItBOpUIwxh5QM2teP1AtS0wLWmUgZKQkrpfYxi7VCol23zuwRNPs7OUFUpnC6x%2FEtfVgEdrbB7PSrz0xFpC3BBmcPdjQMOAlQT%2Fo2B4DrV0fVAM6fBEZRK5%2FMTxRS1049wTAkS%2BtDxornBrqb7W%2BH09U%2BvCCRtgJHuU2OVEuJD%2BingPA%2FtwBKl3ENIr9B6f0qfMkcrCeVDMMTW%2F0jnDd%2FPyF3ADTqn9xGK%2FHN7EP1TFkwnYn9sGImGj5pgypOSIThpG3V0f7D1Rh2M0XOzmvmgRM6fNrOKdW%2FGeLGbK%2Bs8827Srb4hAsw9idGp3OpWxpphPS5MWQGPTgie8ajYgUvZeqy1PVNWngxM5paWAOjvng1IRsYdZzq%2BUM0Vpw9Bf7wFvAHn9TEu6V3Yr2yeI2nALV75QZv0NPslQcoZFXd72LTi0%2FM5Cp5HdbTTSQIuCZrq2byA5NgZ5bbZSugs9kdfcPFyLsEf%2BZNSuBJVl%2BmcUs0IUtrRzLppfkGpvQm4rNGWbketI7cl7XAQde6N8DEX%2BS5pjaiPrbDSUAy9d3TMuNPr7G%2FDGUdel4meu%2F5AglANI1trrm9ZDA8ukRa7zTUGI8nDc1tYhvwqGzkMLmh98IGOqUBjM3pE1ZEpVcQVUM8t%2BSc7JxItKW%2F6ZyCGB66o9o7e33TkbVhIAG4EEPThh0CtZW7b7z4sZiUc0SeqJ3IVSYMIU%2BhEXbEL1hxH3%2BFEGS6xRVlCDtCGX0dhYnJCnGg4rKFC8c3OEjAy862uAxyWvxWeaS64WChWKlTCByux8kHPSLLcIeJZWCTKwTZ%2FKkr7dnMlQB2mGLepLnWhBSq%2Bs%2FUkgDlFYsI&X-Amz-Signature=141a7b01f6e56048d7daad96bdbb6a0874e9b458df0bde5e13a995c1fceba7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
