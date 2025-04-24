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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMER46V%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCELhEzW2mnNxT2Mum%2BFPWEGFtggJB7p53hfwDKAQSQUgIhAPkuBbunGxINbiuJOBeiOLX3O1x%2BP9rt3FasIqkTxK%2B%2FKv8DCBsQABoMNjM3NDIzMTgzODA1IgxlTEhglNVdqwNkQIsq3AOLeWGwDSWAmiNXnoKL58d%2B%2BbpMgk9Ywn98EcTG9isQMS80Vsh2sht6xN1JLRwhQIuXMCmI1Jt%2FW%2FNEZHNy2RNb4IdYvGjhL4BMKfPn8076AWTmIeGJdWchYPMkflPsqp8PchZ06jkJ3PBcf0raxBrxs7NyaGTWwOPofBvoHf63FkYOcYAF3w%2B%2FjLxRp1k9eoGqnvCFo53NUSEnvgWNWkpSOPCHCsPWlT6GvB4VJPBtrIFZYNbekyZ%2FBkuD1BrnV6Lk4ZCQ4FN%2FUbgSJEA9ieB%2B7TndGuVZAb%2BPPrdrsKC%2Brza06%2F88vifAgwdIawrQwOZSyp3MNZBXUJqui%2BqB7aLIS2L1dSUL%2BeLmkMLRwcvN54KSw%2BVBHlg0Kih8m7qqgkDeS8%2FdyfHUNbMZN8Wrsp4D2rmh97pJZWSsix6Xbx91ratUvZqPV1ZaWoZwSRfter14i1dXFKAELUe7TzNP1p8F73PEQtuDdOSp8WkfcVeePmvPfPlCzkmgu7j3yBBK3P5PeJLkOxDFSjrje3XT2zGxTD%2Fhcjl8VqgQwYjnGL8Qc6s321gl2isNaBgb497hBBr78OVoA1G%2Bc1YoO1EFc4fONaShabMHF%2BY1ZI5y6Wls6IZURgsSBdTB0KNuDTD38KnABjqkAUM2X4sk5sNdv3Sn8vSPgN8kOHh7A5chRcZUODdHywhAFa9IjFDdw1HbHBXlW%2BlTuInwQgW4Nd5HCciTFpP9nhuTsrMUtl9vWp6liPkLPdhVsf2uy3duNKGZfcI2D7wtXSG23RYKJChHskXmz6UPc6KMpLlnycPdpkbkH0oWWCVmksr2qSg5L9LQHJsHvXn5N8c2j28yrDHz7VmHI1Q41nuxmroW&X-Amz-Signature=5be7b6b3ce1aed92a861a42274d84996c55ef72d6f44bc4f2580f8029dbefd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
