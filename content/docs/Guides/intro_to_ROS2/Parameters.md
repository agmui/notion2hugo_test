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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PCCMR6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlneD0bVJtxm1dBvozVciJjlJm372jVcGjoIx0fhxEIAiEAitKZb%2BO7t2sloKmTWenM2%2FUOuxAkcMYGqmt542giZCoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGApX%2Bv06cdIKVeLsyrcAzoizmTlp42DnzjFnAUF0OKNw38SqJ0qY%2BM3nXmKQ%2BYwoV%2BmuHqb0H6raRAl1ZD33DMDhBeasr4WXjqOYVcwmaVXh3%2BbI9UbwMr95cVzFLqAA2SQMJPVF08wKbJ7qXHQZsVvRPeMyCDShcZbWl5kmc%2F9Iq2%2BHFIzrTGYlk0UJH3dkL2j8d5clVlnW57DigLsOe1UmiYxwWKVyYejejmIx2aTX%2FTmi0fwikivsBuvYLAEbLhDmhx85KM8rIqtGTbvW1zCYVC09ur8DnwATQR38X2wObXS1Rk6POGCW7aRbsv%2FIsVnrbSVuKIYDiVAzCg7F2p%2Bn7ci1FCWgByPIwEo9GsPTGE%2FEm2VJWS7y%2F2ItupCHinxOngXD66k2eF6nWb%2FOivxaou3nBYZzEoa7Ps1KyfBmqpM%2Bub6ilJDwfHW7wiFHNKF8ozFqV7hf8TauKdHVM9LqCbkZ6P0iOAtecBipY6Bb4OPhJ9gDpl5DedOHRKcRCSBC%2F8LvhwJfG0CIvvsp4NRH2Y66nss%2Bb8c%2FxfbYxG0zEEujeL49U71RH8dGqktxhlKf5rfiTYlR%2FtO9ZeVGzCJMnfeKl9eFkoBXVl%2FTKWzyqlJTP144oQpAWkmjDSel8RWDRaASm11kEK3MPuehL8GOqUBmJmb7AXp2%2FoKScBBtsGNDdcpo4FtSxJMfrCwrnNZ30xgRvNaG7YvhmjUhABVRPrN4ln2LdGCJBTSGkih2eQhNiKYArW%2B84QHQynpG15qGS3t8W55xN3FyLvubM0xGXPIzS6hM4MhUoMqKnBmiqCUZgpSAJnIljnTyxr6kKQwCe4C0Nnp7kJJP3CVdXXSadCfo5wiuZQZkU0St3ZcWIPrLyiSACvX&X-Amz-Signature=8cee38c3cd26d9e556e8227a9cf7fdc98c4fbce11e39c8032661418a141f1d02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
