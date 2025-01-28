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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTJKJ5T%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQChS4xRz57KDfPXFH0Okw3sz93gg0IwUcEFvSN8gjD08gIgefus23sNcE36iil8KVqLwv%2B7RwG77YMrq%2Btv5xwtR4kq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAvAf1a3H4me6xsjjSrcA0owiXNgeSD0348KXSiM5w9dEYLNeSuq4%2FF81qyRToq3mhagbmxnZ%2BF4dB0GjnfgtmjjycfU9Ra%2BHe994Vducwqod2PAbn0Jv%2B3EwWBRThEF6Iv9vYjxeaSyZHb1X1Gy6T67JRXMNNatmSPZfleeP9MSCSkB9zcts%2BUawdiVCOLzfuu5Yh0zKOsxonxFfvqa26zXG2UC6AVFwIChcRcQfNagNG3qsNUMoHshZIM3xyNN%2BWnTfANd35C%2FE5GvQJtfxH8CeVKAFwTd1c%2B8p4uN1jmNSYC4XNOT28WOVMCEkrLkDMPceTZgUlssHJgSDnPTV09aheZ5ILHIh4S2x5ta0LHN16Cx6x8hfKXfDXU2d6f1NSC4%2BUWUa2U%2Bj48nsuuxmBgIZ6Rb02m71mqoxMq9B9iMB%2FY%2FY%2BU6T1h2R9GlqTMV%2BPB7V1rwutIg0EpQxeGa1J0l6lZSo99d1FEKaUKyj3IrOXGT%2FN8vyRc%2FnMVjzoBTK8ns7fHOJHcXNPMOoISQ7BtLWcNYSjTazeraSA%2B94xLau%2B65uF6Q78EeSLckUYj4GXij7FaN55ycTz0YkjRDdW2D1pBMOL4601aA921TVo2g8zXYOtY2CplI5t4jLT5bWz%2BglteAYxNfNtvlMKiW5bwGOqUBfL0JHK4ssMky%2FtRzYt%2BO7gMmsNrWjXBTCZ37bOOmvHFmPJAXDaAr1jap8jasEdEGglNrI%2FFcmW7ou%2BUb3JK0Dmg47qBdsy1T9ybcTYv%2BjI4kI7%2Bl4SLeL0J2CyRwMjNSirdjUsC%2Bwn8wX0yjtuJ01cwoEVEKHmGk79bgERfMIYdGsIEmaWAfkHi1T76Dr3cs9Suqc1yak5fGaB5cGEkANKiRrplw&X-Amz-Signature=d95eacfb0e63fef5a0870c73448a43b728b7bf0b753f476370343fb9402658d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
