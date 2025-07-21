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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD3VX6UL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa4nK37k67gqZDK69hNBObpjduGiCtoOwxXScQcJjsAwIhAMHfJOp30PGTDmwjYzbmyAvyD1S%2F3Ilbuu2BCKeSBJ13KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwApo4abD%2BADn8kVjgq3AMzeJaxYGBYNt4a7ZYKFpgIZHbsAW54s6jpNsFLeUf7EYIYo%2FGuzPS6FwZtraP5TxrmluYBDoLLVpFyzFZInHjITQsIgRVOckwNoKanReDTM5eh%2FeoSJrSdrg7PE5PXOflqrANhQMeAIQI5dLi3Io0olO3Ac0am6PrAuaO%2FSpf4TFhYonOKmAtJct5GZjjZcU3qywFcqVm8PmNDRY7D9a7ohVNDK2t3bYjM1kHb7eP3l0kZ0S%2BIBAkV2fL7WBBDKFWSkuqZ02Pc814VE4OdjwAyy0fWgD8o3bUnV93Wv25xBFQ8KQDggQPiXUq6p1VpcR%2Bs%2FNdmSfqWo5ajNwJdC1z%2Fich5pcka6Q0RWkbq7KyREN7vByKFbtx5Xi%2BlrophEVjdxY3bgK%2BNOeTfWJP55%2FiQZ2j%2BajbjX6m9G%2BvpWlYP3kzX%2FMJp3e%2FNxIBjyxtp%2BqWvDa48becAYkweDLwS8SIaIu6vLRPiS4vl%2B6M1CLRCOR0Kt%2BgMx99rceUSEb7gI9fsPAIT%2BDQh6Lu3SMbtr0PIX2pbmT5D89gv%2BLVBrntDj%2BiczO%2FMKM6Yz5LNI5b5SVoesgeCaHJPndsMYHxFPFztEJCovtz2LOKWVcoTnzEILy9hNxXYFDbF3i0ObjDYx%2FbDBjqkAUfp9xwvwQlhPj%2FqYtuE7IvHUNcYRxbirWlX4wbFodCrZDSHlS78Yl%2F5hX1t93z51wceumzO36NHk%2Bx1b4Dzq5f9TUq1M9DxdnJj104WER%2B8jjRN%2FvFTlCpTSFWxEc%2BGON6O40AD5FOJ9o%2BzmGmNpLgaoxf%2F8mSiR3ju807AuWh4WMU1RkEhJMGeg5PPyNad2rP2LbxZkMSkkpeDK1j6aZOC97OV&X-Amz-Signature=977011361bf41516fd2c4015c8a4ca6648817666ae2dd1f78a1600e3cf0d9044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
