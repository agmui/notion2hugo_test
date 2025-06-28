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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRSY7BT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKs56l1IVOv1e1YwnHO48xAa%2Bf7wmcynh4mujPen25lAiBRtIBd9dOhT6Wb2g0Zu5Enk%2BLBo7EDYPgAqp49qEYZzyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXO3LjPPt6Qc2Wt%2FrKtwDveVBtUDHoWEklukrQSdDa8JF5nfNm56SDa6UXbR4fGOkNjvp5IKg%2FsX1vvkfpCS4cz0OAEqBhjJHxSAmHRra2L5zUYAlr5cG7QiTXkcGasHQ6WjzPPFWOVS%2BHcYBoJOZhKRQNNbxA5rsmYSdQJ9Ip8aofOCriu3TbMdeKwStXddygkTDWrfqb4E6dSdRSQLw3K9mDlZLXHQ4Ewd2GCw%2FuvBrRWyT3%2BpSLUsIiX%2FN6CuOlc5hSTgzt6ljWLAW5YIXpkB%2F8SMUVg6gqf36Ybjay2GwSG3g%2BuJHDVKbNRHIE82XLPiNIPjtoIrHSPnpQN2iYki70zEwju80ysFXT%2Fw4R9VdRBZ9AH2t0DP2YvUVEGq47w5Xc%2BJeu5iMBrb0Ro8Iazu6XNUcDZMPAjRNjjNQ9nwyEfhi2EU0dzr4bW4AnZhSNefdiETFUirNmyTbPRne4xT8Zn7S9D3IVMtrCtxERZJu8z89XmvdmVD%2BtJC%2FMgqfi6V6BhSbGFyiBWm%2FGfBjc9YL8ilKVZ9sTk9vH%2FBEPV%2FNqxlFVV7QK8Y%2FRW0QMNqnFE18yKS04ZHdcRsaq24vdZTiqbiIR8ByohPlqytxeXLxquVcVMul%2FDPRe5PhHfpPKj5n5Gaw8uaCmq4wkf%2F8wgY6pgG33x7JlGqjuFuIzO2ZGchVI8GZv0w%2FuweG4t2U%2FCyd9X3yVdc7qOu9ZlLZVan6OQOQ9hLtNmtQio2b%2Ft6nLS07HdkQqopXrKDTUhrBfUr%2Brf0PwhAXFiRNW3VO2v7ybVavaQbwfiUxsjvoEu9avj1KhKbua6moWy7L%2FpyQnb5geRKqlPJDMjqTpNAuX5o1nDr2eTaajH1FuxkUooYMQRK6GOnn8XrO&X-Amz-Signature=e71525c37defa9bf12eb575fad647c00a07ad7c69abc65af8b491a8d8fc9684d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
