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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG4NIUKA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHyZWUwK1H5Zbjdpx5JDHkp1rYpBTpYTXGwzTcHExMY%2FAiB%2FgKKIecmsO5Gv%2BBoRwQBRNSKHouXEGe1fR2EFWDhVQSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpQayDWNdZ%2Fkv4nPuKtwDggLT9OEXGQvrM6dLwsN3Rx3Q%2FKOE6HlL1g6VYfkaHOSOBSGmDdRz4ty7S08uyei3evSM71%2BBisY%2BxAtiCAQpS0E64%2Bz1iqaq%2BnUKpAKtAqHxYXeG2Y4NZdcAtrllUk9pVDqvCd7h0WZGOUrA%2BN8OUl12p8ooLj2voYF4UXL3dYGddjwEftPey26074FK%2Bs4r4KFYmX1gLPgos7px3TrDjk1QunfvRyBcR1MfQC7ZbnVvUKUBrDdGp4afhAIVVC3nL4Cz%2FSV1cPkYwIGtSRRNpUkSZFr%2FNQoJ%2BRNJqa%2BOJmd0cE586zp66nbXxgTbUNNzaAnjlLE4n%2F51O6avPwzTzlPumTBQwgmfkTy%2BCuCZW38U4%2FWeZ5jYWazFVUN1%2FXZMeu1Du4ksgcdN256w46hwKdxRv1d2y84g%2FEWfk8%2BL1Z4ho9NQAnIWVDibNuZR054my6LAfOaY3XF2z2edrJax2Ngwoc47NlVjo0yUxJWgVvQ%2BLwMhSBhRnE2fx2gNlWfEtIfITPeV3CgekLqrPp19sLGwZ9eX5Wj%2Bv9IB%2B%2BSEx0L9dyEUo7QufixkHD5b3vm766Th4bgKRzf6%2FuWaNQzHGOsZlq847B83IjJ%2BH9RvWyIvcwhRsJmX%2FavfP%2FwwrO7fvwY6pgE60j6Y0Hw8p6epEghMWNcB6ORJmnYEyqqdmYQTLufYvT6y%2Fyo8ZA8RbRZAq%2Fu1hQIU17I3O3eHIlbf6cpyc1JDVOvnehaFA9DdFIAXZiu8tXTJbvPoi4HwW0ZY4iGX9SCFD8Vz0wocpIefxKi3I1IFAXw%2F7cmwsonJZazdCaTnC7gxoU3vU50PpQZMEbdOgnc6bN88qAAmmHkuLSLEGi4SK%2FYD64%2BI&X-Amz-Signature=f81684fabcfe0d99397459177fe9a06f487617972b69c8173e2e09f3a2c2edbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
