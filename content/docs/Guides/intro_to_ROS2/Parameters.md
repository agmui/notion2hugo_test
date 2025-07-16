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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YH53GO3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIEDB9MB0JzmNLfPXLeaMcA%2FirfAgdoXtSRzxO8l5norgAiEAmjsDZkgIlNGGXLXcI2iYI2wpFFHsBXfXcA%2BttwAisjAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK2XNvjKRMKG33XJzSrcA28uWPAqhJEwYUM7E57j2rnQXKU3FOMGxpDRPQJLwQC0RLtCQG%2FRJmYmWabIEj66TzcEh2Ebi%2BDnz327gIB6zo3B0riwuFaW0%2FoP7qdRsErL4sDem8HW0CyxUs0UpQeFt6Wz3D8FbztSKiptcdoq0JzOrS%2BevFHx34Hi56tjRJaE4KtNBRDj2YUP8XKSbRFnA1SuTBT%2BF%2B8%2FOidweontjx%2FL77Fewus0JsIE3y1uCQqupdMPj6hbHk%2Bd4t5Sz5dH3gaefvaKu3Kzy1tsdUsDWRomSRyYhIKnYAm2UMMgXkRUexUtrdwo%2FDwpPbDuYvDnF4d3j1PVNnK1ROkGj6lMC44gfr%2BfH5WrZtEPesVO9xqn3lAx3617LA%2F7c7IHF2%2BsSyQRMCNK2SnWsLW2aZ17kQMGFLT499u6R%2BU%2F9Tf8qONgyJw3L0xoNvEmhS%2Bskpm%2FO80u78uqZeQtHRU3wgcmfO6wUyZhsIG4vcTl%2B3bwR%2FxT4Cq2E5houWIzat0d5kGgHX0sbutniHgESFeiFGnLbjeSy%2B4DqzF74Ro6y9GScdUqy9BPwUXIavu%2B1o8srLi%2Bv0is%2FE8U1GFsT2PBiboDUinlUI8IzZhtEnqokdrISvIFELT0Q0q%2F8W%2BHEhdZMN2X4MMGOqUBUQjel5rPfaBlur%2F8TITxMNMI%2BomMr10wrpga6IKq9MMo6Gt4ZZMrdGpChn%2BKbQbTrp8qFCTtC7047%2BhLCk3O0DCWtHSBheHCZx8U5%2FWztzvK6C%2BNSGZM606FMjiYc5BG0qzO4qi5YJ00Y31%2Bw30c%2FNNQ74E9yCuP8cv%2BYGu44D9dsvIDUsJuSPdhiY7b4CwJO4VIItURUOspCFkp9WNY%2FBQq%2FXDO&X-Amz-Signature=8f329a617a23922265b51ea72c385ff415398bd605babf9f42f5591e675e17a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
