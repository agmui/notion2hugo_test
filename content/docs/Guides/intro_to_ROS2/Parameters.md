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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3VROKF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaXKbNqcLgECoXLRfYytKVZW9c0wYj7E5y1eTdlmNbngIhAMDW7MpZw3yX%2BPolZqTEKWVR2zr79IMakEbIeFWO6B4uKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvF1xotj5VB5%2FFyd0q3AOE6Ud4d3Zu34w6pwO5squSKFWV7Kr628029VpL2B3aPPn7QK2RPOWv5A9bNZde1tO2lcNps7hL6eZyQaOxB4axvJQVBlls1iytYwxnfBRvDd62QpZyG7kjvCN06ADtM9b5kQ1tUwjURW8c7%2F64NI3p7RE5tvzHejVHZExlpDjlOAnJQP0ZCJZ3Dpr8dK13dri%2FapQfg2JlW3BYk%2FuhkUAcusTMIGYZPUHdsgPVIo9q9C9Efing1vFpDCv9kBtoE5%2BAVygzjEPd0jvlLXVRazwicDxRhYCdA9IkkVh6PBFwwkvdxuChIYp1zdwiLw2YdO%2Bc2d2raVaU%2BerZzirXGfZ3Oi97GIEYnyMAH9F5pxlOI8NJjL8h9nO%2FdtUYd1%2FBhmp5o7qAt9WCY1l1cpBkT2qJGIbRcCpRKXnR7UfjJ0On%2BannF2gnZYA3tEyH2fgPGa0xev14c0KZvu3J%2FDVc%2BO72DFwpVvtjD8aFCeEbEfgM%2B7zBy0CFv9ldSU9xs3%2Bvicg02BIg4xUGig9fTnUs4YRBbCV4S2JkUsL7gELq%2F87PW21BDOb2TsZgn9777rQkwhYM7P8zBsC8No28BdUXuG0fGcMgcqCYlPSatfWoVJHRSaNYimDUepTirWfWhTDn%2FOi9BjqkAYDiNsxoaACQRkz6Yp4PyN%2FeEMa1JVGKuuK2l5oB2D%2FsrMf2dA9dW3zq%2FSzPK9CXNoyg7zbA9zKB60ofbZSzARXcLnSIyNcdW9HR2hacb5n%2BB1yWx9fujkvC9TzR5DuLdKQxAO0ZgoW7r59tdcMzH%2Fkf78YQMsRHVu9aQssosmodmCFL7eXTXcgO6Ufo0XsNfGqYUQgWtqbS8BTICo8EhCzkqllj&X-Amz-Signature=8b7eb0711f2687a948fb70582e88f076c7ba357e194a320b1baf0320bfadb42b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
