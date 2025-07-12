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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LXFA4GS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0OFAi3HXL2MA%2BfIt0QsiC4FjEnE1VlMwaQ3rJCcWjgIgSeBtCu5TvFHALKaGtG148hvjmQLNPnpCeUJWKdAJ8eQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUrsGJlkyJdA9hcTyrcA7Otav2QNZsl9fxtH%2BhQnmcTDvy5LgF6W%2BV6hDI%2B%2BFIto68Qwjxdo6ewd2r1wzdlvUjPWotPsZAZeKLFn8EqSrUBWi5gRkw0Dn1swZrVrkcN1fOSK70dLJZJE4j5spV2gV0mYTwovexorIfnD%2BUkkZVI4vLcj53IHOT71dHwuaf61zo6hJpSNMTfZp0vfwgsANeae%2BLfQZIAQ%2FxeJeMG0WOQGFp5L2CWu5eLbtVr5smVstnKZTcUmsO%2FZVroILyYEEGNuSPWpqyo7Ln4bM0vBt65FK3zxG2aLE%2B3fzEv8Mu6Cg%2BKLrmQdkUyyim1IfYQVAG8FyHmj712A3kApr%2B7x2Xjt4iv9rs1POYpEAleWfDWRQIbKaCoxQ7U%2B%2BJPy%2FjmMN7BJI4fpEtRPooZ5oLeji7U5t6BcP0%2FobTtJKXIiDqTvJiWM1GFeahbX7iGs3OqVehjCgha48nLIsM4O8MmfPyPdWYgBoCxIMh4aec1PfG%2FjMF5SppgWt7IeApKNXBI8oc42B%2Bjmr28JJdwv5RMdcS%2F7gMgx2NgQink4BjB3llANZWSmpXfGvRuRiw5lVLeZHVfHbABiBE0H6ziXHuVOT%2FsxURGqKtMpaX%2BOVIkbr9ZJtQiU1TRk3oeXwiNMJvQx8MGOqUBTDrhZsLI1VvHUD%2FL5SBluAdSO1evdEQkQKlLvUwNWnCzTWKpq8BWXoylixsyt9xkSUoZ3gLS5%2BXI3Fj1EBmeEc9NRrI4iSn9JQas1n%2FB32fOsmnXcifPbxyFsx9TbwtrhlXxrs8jxSUftlw5IehTmp0r0pkq6Fj3vAs0CmSlg5LTMqn06mWTNQYrDmTrjO%2BP9pQMi5mCHc1Q4DNOpDx%2FlzWLW15w&X-Amz-Signature=73182798bd92367f40250d04dce26f86a15698d073eb5a135232b34f2df9562b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
