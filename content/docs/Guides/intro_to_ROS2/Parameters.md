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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QECWHPT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICQmOeBae1Ap4%2Fl82hVNUb%2FeOuFobkM9qHudJDfzbz9VAiEAmJuyMGW2FlrTrihuDBJbx%2FOK7Z8sYQjv4H1VwEg8ofAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIghdZMO8WnSoKFfyrcA4l%2FdEvwCXp6jFCCbzcm8Se3yg39q6K7qw3GhU2bATAC3Cb713nPoih9zxDPPL8ZzLRfolRELy4WJVAjpqrZ31lFeoN03%2FanH%2Fn6StZ244BovKArP1QoQ3jhSGIYg8eiT%2BaZeVnRsWduPlDaxSa3drpmf7Qykag5tazTifNTmw%2FtRoL3YdJGA8Gv71qGnCYkyFmXRQsjysQVxwyyBKS0y%2BMCGoxfOInCLlwbE8%2FjYozHXuZB1kX59auaSfexL6f4jtXUBjiklvlzCL6oN7OpNKIP%2BGigmk1vQC9%2FZXYs3yE%2FCrFawtAXQbW60fl25LsWaBO7ChvGcofvRyEoVmj%2FRq6niNkl5ULTa3H9RGSMfjW%2BfYmhYkyRiV%2FlR48feLqii9oj%2FsjDpTMoNQeSyiLzqfwYXqwepTQXciq6BaIzRSeP7PoOK9ZptpuUq0gC%2F7McVorwmojGo1DYZXefMsCytcRphiDzYu2kUFCLcq3Bq6KZz3%2FzQiOI5w5cdKEUKb%2FnNbRCWzYTgav%2FZ8oyFYX2Kg5WAfEdfEKhNlEU6CkjbST%2FAf2Q31P%2BOHbuIyVttv88rq5HnQlOrDRS0%2FDMGwZadxXiRzlHO4sGaegIyDs%2BjwnPtPmHBrcpU1FTGNZpMJnF28QGOqUB352Rf726e%2FKaTIfCxB66kfdMoyYtUnsPpnoDbTsbpoPt0lnyl%2BkUqQ4cOSEDaBdo5Zt6PcPAFEuBjl9z%2FVomk8nmoslBMtQnBqHhiYx9MFCk4ktuKm1HoHWu70wRxmMkaCMA9v9DPmI0ZvHMs%2FHv7BlFCnzfyM4weLHwD%2BR0glCi9ip1RiVOuoPp9ZaVjsr33Iy4LrWUYFckx%2BCMqI73IzCITxEn&X-Amz-Signature=ab519ffcb8cb65bf6cfe7d08ea3793c9797dc6bb712c2ad165601a77f1895a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
