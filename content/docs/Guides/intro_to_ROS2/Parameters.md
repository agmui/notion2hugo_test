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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S3DAP5Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDHE%2BDnnP5UV7hpCF7ixvedHWSaS2bFikhH5BgIe9OwtwIgYRtQo0%2BB11ckE%2BjEPWD9ZRirh3DQuFxUQvuBUz9%2FzkMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd6ZcQ47qIHW50HyircA3Kauwa%2BM3Oa3VUBt12x4xZ%2BvPYEcBKMkjRqvnu0dcBxk5PO%2Fr9LZlEbsUFAhmLzTcEdLyTzmiycWgo9xSrymyGjnr5P4FCg73KsXq%2B5biw1sTdVTDQtAt0Mzsd8lfdpaIVXqO4shSoJu%2B%2Bna7KLFegvGvlBeajZ2BWkC1ZxqF1OX%2Fu5BOInt%2F8khgK0jJDD3iy982XGayO3jy29zANA7NQSiwLj7EUrTIkmDEnt4Ii85uDPo%2F8sjJBurgnca23YCfj1xYErPC6fRAQ2WlGlDpNOR4JrvwFQ2nstRWmBgrzj1pnIJHUSAfLozVZvyVtPrt9Qp9pAhRG1siF0mFwGeZxDNfGSq4hv3X59bkKlfKs%2Bna1IwImFOsxh0SxKtwNJLJPrTXhZe96bPfNob11hf0xhlaIpsC3ZtXWgQiZPHAnXgdyeWpqGMc7sxWx2ECw6GWkSVaxov6Vvhhv%2F4BDq%2FEGN6QUcvl7v8ePArXLrpAjnw68d0ghCiIC6r3a4XNmD3QuvAzXoZkwoHMGDV6cxTXI4w7pjCCgsdzlVet%2BA4IAOwBKolAKsXMHXmCDI3WAo8%2FwAZ6j0e%2FSuIg9fHQEQ2p%2BB4PoMd2g%2BQclAvZ8LvEW7UzDwt%2BiAba2WUAGpMJab9r4GOqUB8ozte3CnlUad5VIXVBgECMn%2FcD5JuhuGEg0kxXi206uA41Lp7CwZY6h2IkB7C%2FfFSe0V6Ly6g2XfO7QpvB46SCZ4HFz5iFVZQqPYMDPN7lZ6Je%2FSTcWGJsVcxl1sORlOdj5oYDxGc7QJ1e1eVDlv9a4PLtt4kQ6n8Z%2Blf1AkaLzMpmh9xechPzfGgKGIK1zUr0tHP%2BkGPCUNBPUaPP0YarC9Nvhj&X-Amz-Signature=2c8763755a14e80e3d071a66d7978f60bc4cdc5166af66ee3e452e2fbcdc36b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
