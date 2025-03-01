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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXLFGYGB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICzIk%2FKK6HkUbteEdv629ojKhwS0IOg76NzledxiDP0UAiEAv1tlzI1DkLR7EVIZDhvdpCsxVLwoAGwqaCMGK1akl%2BUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQA0E%2BXpStKCS9sDSrcA%2FW27TF7545UkV34mulIhgK2ubeFZ98HUHF0itjDQ4OKa3P0nndanoD1nu8znhCikQt1PxJ9gBRsuwU5fO%2Fsm06Yoz82IsaXWrWcFE2OLuJk4dVMD52XwpOZxKaecTA4MXNVTljfSYqgcTyllKY8qgcsiWORtJkR9gx9%2B77HGRyFe13o86WjHjvOG7lt8McQl1KPwosW3KX6V25NPrv4XRr75YTycxx2ITYsVJKDavaGlKJyDV8tx0VOEiVW2cEfcI1HRRfIrIx202lM%2FLzh7GpY5SxeBSTy%2BfjCGApTC%2F2dnzbIKYg1CuGBdJVDWwc1R%2F%2FvHZByZiFljCoxvFap%2BPjMpOQKFmh2o3B%2ByogKs38kC3qJtAqmVGnlQlVq6aQsHuq%2FJTmeELV%2FPtWWudGzqqF0THrrViSWVxoQHV8ZYYHbY1yPnxDakrX%2FKSPuSOlgENMMcUgcODkPjmRCnNJtjajky49QvlELa8bBkqo5ngZ81BHBiQmFbNiEopBORWCK823vaBID9c38r3Bis%2FIbl2%2FB3QmG3vTndBXS3Lp0%2Fi2qOA7v%2BzQ73pN8ejb3unotp6if9UBB5WID%2FxQhVB2hdvvh6DveUEKyboUHvbx12bvsbSFW9rIi5h33F3XIMK3yib4GOqUBXl6p8xzqobM8G8h4p%2Fhpo%2FWlFfCk20oy76IrSnbbVLzafB32YsSpd9Ixn1jK8I8TlqE0yD1L7pqylet1WZAnhPRk7as8Koww660gqsSENMWeuibu7pJC%2FVf0q4VTPvJQQ7gshgigO2MNDQ2JMOlyVSzY%2BGOD3t0Jv6h%2BoGMsiuDx0mtLADwwGGPnzAxFpxXYF%2BdgRE%2FIARM24KjxokiUBt7aBCSE&X-Amz-Signature=3f7a225a02f3794b9599bb906c7f22ed3038b73727427b314af4dc50737afb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
