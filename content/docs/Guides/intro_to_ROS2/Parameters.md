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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTXLC76%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVWkARsJrFuWCYtT7SHixqNasK5S1jn2%2FzGpB9nbg3ZAiEAvipZea4bk9C7zyXiviUCoJIL0BJyYo14SfYyTIPK5DMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf%2BtJmBkMkuWqodHircAwfGF0Y%2F25hUgkdfbvR9lBMiAh5eBuODCDShiOeI5S767Qrkcxh6%2BBIiL0Z2pV0JFMOFkp3Jy%2FG27wNoa92Z1BAszOLSp4YiKSBxBhvZVbXKAV%2BWJBOoeMigkRIuNilywuN1E9roHaqOB6H%2FeaMT2Ujb1nGH%2FRf88CbcP6y%2BN5%2BQjukIJh%2BrT917UonBckTW1DWqMa3LvTF8XH%2Fa%2Ft6d5XgD%2BlBqmww6JgofFp7OfnszomZpm%2BC2UmiZu8YsUBLKLhzNu2vEMAY%2FaCNwj21q9FUbGgcDb5duYQL59mZVQCGG9WtZoOLp9ghygZ%2FytsBWd4Xn19iB5UFEQ0b3Iq2SO4gIRYRiU7miE8o2tvypviGtgk8oUK5%2BdJ%2BIyidOCHfQ97KmorToYvmnzDDXkO%2F3I6K%2FPVdHROrpskmDIt0fXxE5a%2FKhAtehl0epZvZ2Xpgu68tm34bLBxF5PtY%2Fx8kdHHP0WDLngV28s%2BHaNL4sxf0M9RcJWyGgXIAWTmZixbLQuNGwndgr52Scc0HoKgb2mAJ4UjoJX6C3qJ3xMlMc2prkEOVJsuYBDyKV1Xed2KKW2I3fe5lUiXqJnD7EsqHiPbhCopdLUmir2TMjuOCyvzGhntpFeTd%2F49gzy%2FZZMP7RwcAGOqUB34oxpdlNGB3RlIb8PrwJ86weNQouoja4UdKn6%2F0iI57c3KoI8MiJc5kkSoN6t87OUHmqPFv3Rlx3XBWipOH%2BNvLmWWgCd11jqXm9wGGtdMBJtbaPsE1G%2B60Gkdb9uFLxHY%2FS94bD8KtKbA7zrTF22iznZRWtmwSRPCpAUffUIxBO0P9htJRp%2BTI0%2FLo%2BOPFmdAetv8xRNRLiajUgvsy0yvBtj1lo&X-Amz-Signature=df42ab334d39fae1c935f9d057b449899003de3324c6d71359a61d236000b829&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
