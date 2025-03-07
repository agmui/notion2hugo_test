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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6RI7U4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC10JFzccah1VaVxh34UEmVILTK5zoUa%2B7XUkjV%2FK0eyAIgJ23P4XYEr8yqN8fPiBz%2F97qp1A0ZAqEQOG3FK6BQTpcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI8oAyU9DcAyrkmckyrcA4aOcxpDfMR66TOjXyB8xfj0WNEZ59g3awc8cExgOoYhYDurZSogKbUh9x6i7yxZtf0%2FGoPaHdIrwLRJPO3Jbv2UQxUu40wDmKrhi%2F%2BCXDpbXS8kR1%2BrgpqJ5FLaKxGb%2FpWHW3lfD9VE7MFfNyw%2FYfmEerd9lPeaBbFZ5JU7S8QU3yrrFt2sKVYwzJkTyNt4vE1TGimD23p8islcPfB4%2BRP2lEKjDZoIXBM38L9k2Y4nlD1N1h3K19PIytZjAOM2dNLkVuzc%2BoFZrVOlm%2BneG87IC2edzexh17f%2Fqsi8bA7BTIgnn%2B4eViK98k7%2BgNdGRWI4QbRkkWVlk7j1eYRjXd5iTbXGpeeEWkT1bkfRuqvuBSHsiLAcmsq8IIx%2Fiv9vebzIY6UWo%2BKHVwFad%2Bil0tVCNPgfDd6FUCRKkwIkzbiyZHFUjZ1Q1tmDb%2FL%2FqLiPlunizmIByPjqKBGmzKmVNxdDPPqEwyCtZKFCCogsssxi57L8UOMonwuKzQaddGEEXMV9%2BZyuEs6YuEAonAFC5xUOtWdlo13BmMU1ryp7GVI49ow9t3rDNk8Tevz6%2FLGjoShrMjSkrd19WxAsx%2Fy%2F1WsFS3P%2BCvvSE0GNJuNOtX39ZsAq67myfFTxHZ4ZMNHJqL4GOqUBBxgm%2FD4%2BGh3i%2FTvlM416%2BZXK01jKAFiXB2yTHLNdmnXu4oarU2gwp8cVMgLQbjPAITYC8TD5aXXj3HV9TrkQ3XLurSciGfn1C%2Ba7VkrjgKRMaze0tNyJJDwzXr7kywfxBSr1Ft9CsYI0Xgc7zCDH1tdDzH2ygO%2BnD8rAjYN9jgQsxjBTG3Y%2FNKh3UJvNp9qftbA85924%2BHXk9gDKTjTpEG%2BBLCcr&X-Amz-Signature=e0687f772e567c7ac4fbfccefd55ba18476388f3a87d2cef5629494821e9279d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
