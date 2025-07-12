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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRCM6OB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKaZNFLx4pI0cb%2FgGKazb6EB7XDQCm9%2FwCEy3YdqdjQAiEA9%2FO45s7zfRbWFITjfwuhITiRgBO09LtjxowAdz41E4gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4dwik%2FwanqOfyGjCrcA9KEMdPBfDPV5wpyNCVlOjqrRXZGD95HdQysa9XKBcc0ppM3GYPnPQTV%2FqqTz2Lcng852eTok%2BlXpkU56VFqwYx2U%2Bkscc62lX2eC01HtK2fzSwmDABVv1IUW6xOR6Bp16RaZdXaMkR6JTMUKWV8VJhZt5C0ueOh%2Fr%2FrfDMC9uxPOnJ4gzSGnDXKXYx2mRW70cbTwPtXWWRp2P3EygZk2WLwMhVryIpeLrU5D3%2BvSvLigBEPRX7JG%2FQ%2FrOW941DS0pjlkPcaVHz1KnNNMYzCfWRRyP707sitOa%2FlPKvr9oXo5EC1I8RtnBg7ja2TYNq9k0xy25b2s7UGwFxiUFYSvni6pTF%2FMPeDOrt7NNdwezm0ABTvyqyq%2FjjasCLFtAlRBQwW3%2BqI6Xsnt7bhdwvQFaEv9FpkgZRfDEzpTskRqpCPUnBIlZaHdAP23Pai%2B%2F%2FNn%2FZTyynCqew9s7x6VScmXr1fLmbdzUTxIz7BBU3bzwMhrMvFZa2JDiini84cxh5jqaDTPkLXJbKXgdvW%2FgAJ6wLdyHG9iHRR%2FUlveX6dT05cjlB9%2BjKFE5coz4FPFe4Ua5zoV0Hkk27P%2BclVAa2%2FYTSjFteMY5fWVvRco6Pti77Z2xGGnPSCDthEDyFCMKCFy8MGOqUBmIRxMWOOUlv092enV8JB%2BMx%2FgvDGIxrAhQ6yN3Nj1sveA8nofQopvcnj%2BgnxCJ5CCau3uquEm0ujiaCdVS0pn%2FMDZP6K38dcr7l%2F2CiopFl5eUUUuL7BjXY2DWutVsV0EkwfdD9PNy3%2B9dkoXtbE2JoL1gUcGEb0VerIYBGzsndKWcSvhCIHaP8fbCbSMjkSZwoq1o9VFlNVviTAIdANQNIsPYnb&X-Amz-Signature=8ecf0f5e167a80827d3c036425c0ea0592cb4709e7d707e1aeead48f08ee018a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
