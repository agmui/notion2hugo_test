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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCK5FJIJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQC%2F1Xl3il8FsX7ivSGUO09S%2BJKoNasbo9L14kGcF27QrwIgLmHRDCo2sFXHIdJufQW6moMm36%2FjZkjF86lTL%2B9L3X8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLopaC%2BxARTjvcFfJSrcA1p6hQ9QaMq5cgcESB4cckrjFCbZzUtpqdE7VX5rV3ylLGMW9oKgoL%2FUyCn9%2B%2Bl9IO%2FFUrvsl88oHVgS9VeT5YG3LFmFsp%2BaPoGkMrtfQSebcoMY9cDPCew2L%2BW5nXH7OFZM4Jrgiaw1SfvWhEURwKTaZihO3vxWRrmAwN5Vi3huuWmveQRNN6EmCsu6%2BF0USw72zOZLgLl6bk6R3MQG63Rg5UWM1iHF%2Fgpgd77x84tC2ytfplAjhedBNHVSfBld1RLNX6s9iLSaaXTgkVKmA%2BPVE3UyOXRshtu7SsigYGDwqbQTMjK6AJagwNq71f2Mw8FcnOMD39S9SGK8MfbifkuhVI0q3d4XI2J%2FDRX0mFts3Z9txR1Hy0xQWhYarUJs7VRUPyZd9Gg%2FMturoc%2FRyurKQVk3QrT5EN4ggyZM%2FIOazaclusnc%2BpzjgUmlQIoZ5HiMSFoCpcbhuXFL7fMiNWq2ZAMoMaVgLoFBWoRRt0oIjGuMgmIH5CvwOl2kWraGhE5iQC97UJoEPfEmfDGc5QyoGDyuIhU3DGv194Qh0KfH2M%2FF7zZfuN%2FaOTRVVFEp0qzG51UwFbw4lt%2Fo1ZGM6EF3qWEMITAZERs2c2h1js3PCYG4plF8yUXptCrzMLLC9cEGOqUBwOrauZzKcwPzgIAl3CGNTYjRxFGd2d%2Fl%2FEs%2BlHoz8xRslEsnPd69ZiO5VaHROTRQ%2FGZDt%2FdlXUYHWvZRT%2FJKFYWvEf3eF%2FBv4CpmMuF9soZLOBW61Y1uwFi7eXzFRjqAunygZOp9sWDJ4ZPwxXcthPuG%2Br0SC0venMFS5NEdhg27FjXcPFqibP0k5z7rEPasJKPMFA6h32G2P3Lm9u%2Bgd6KAmiG5&X-Amz-Signature=393b41381d3f5143d6c33461317eefc50ccc4caf11c196712e05918296a65c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
