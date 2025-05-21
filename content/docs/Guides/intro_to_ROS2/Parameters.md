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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRY36WK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFfp7LwBVAwnihsNHYzD45321ApypwejPvkEDy6X9niDAiEA0mLnUsBACAfeBUSTTRnMM%2BjyWDSuxtBbPCUIKg6bfW0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK778mgr2H%2Bg9dLFcCrcA1wmr1a1DKPzWn1K55bbc9jt5GEILP%2B%2F1708VXXnS0mkw72nWskInzI9TNGG0PnzHuQ0GrIggO0dkb0GK4tjgbs7DFcSZQ%2Fwi1x5TbPAO0jyzLzUIX%2BVuQC525j79xwtl0A6Ml%2BU1ks%2F7om5anmlZowFEVXVIXRC9n16angwirbxHubHP6nB%2BrHqYOxuiSNTZglKBCJNnHBBqZmi7rSMRAySEXqRMI%2BC0tdRBuNwFyf5RapSQzcNbFqU8bLRDZnpbSuYEdHWezLzp%2F5t1akiVcqwpo1LbhHMvbdlKHptdVSbOdS4hTtBbDhH5sXXbwOYO%2FAm1C4Eqc1MrdCIEbh6GkRDNWV%2FUTdGg%2BKH%2FwTAJBSojOARV3Br8GqR7O2QQ8mk%2BReftVymJwte44mwSt29BmXJScidF1SdHHf%2BOOXsl227634npp%2B4L4ZInmcGgATOUkBs7TQJttknKbT%2B2cnSKkA8z6zhn%2F5ZFBFQdfRaQ8oanPIn%2FGUO91BitKZKv%2BEQE2nJ3DvYFhGe3AXnStvYnwH1eQ08WRxob7LbvKKNavENhnSu8Khp5deouJBS%2BNS9SuA62qkLek8UntbBar0utipIS9wwHDaqlN7nsvgRx5wOa9OwOKlvn02%2FbIL3MI7zt8EGOqUBJKpwccs916SSn5uN99yKwyaiEeQv%2FjWaEUQP%2FaJkl8lJZhHBAhiQVXSYyjQdLCZbjuJ3r3nwZNZ30iXwI2PvJ5XBMFcgpQtUFhq92b9OI%2BbL5IECGjV22DV9L5UG9CZXfOhn5xj%2BkLXBEmw4E37hkKoINu%2BP52C29ftnNQrVx%2BrYmKbh%2BucuSnQBtNhaFhUGKhDS8%2BOizW7JuiXeRaa959FrqXrm&X-Amz-Signature=834d5e668c96d3cbe02c1f48bcb8401ed8ee3f509fb0d4b7cf102f17d7f6c7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
