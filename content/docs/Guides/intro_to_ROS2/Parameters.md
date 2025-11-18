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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGZBMEP%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSDi7IbQ0xgCwq5yAaj9aaRkddDxecX9tvZ13bcmQYQIhAIgStAu39pzaoZvt%2BpdUoca8T1iSMKRczqS4g9wQ2jZxKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM14BSz70iMIhruZsq3AN6dJnimdct%2FsHLMXzAIouLmp9W2uLuf5uR3eDZ75xWEPcGPd5uI95wUf5TFTLmRputiLbn3MR0UYI683V9iH8vCatz84AEyVmIAH90XcxtlAsx9JLQT8tLVd8FcGJ%2FKSe7uJ6G7RX2zORyXkGpd47riaBJHqnwiyemxGOTmb1OtPvZdiWLfaRvY7%2FFZYwyvP4skw2RONOAez%2BAYWVw%2FgX35v%2FBdMQcpYIzlO3cWidjempORaRQEz1GwofK6A5Y82uhEYkZ%2Fmgt2ufOa%2F238ggqXgu5LHJIepX74TcdxA3lsJYPXG1nkXqCU85cvCU86HvbX3o41bF8%2FZbaGgCLCqTrJ%2FZn%2BCjyhAJOoSB1WtW0B9ttAvv7Iupho%2Bn9SM9Xhsy0OUaXae6DtzaZTBOMN2pn%2FFpNt4wPUn86GjP3Ky2CjwXyiGZjPJhWaVTTDNBID%2Fd1MEeCeR7uRIgz5EkQYLgiM7YhDajg9bhGq7WSWmX4NHOHT%2BvgMsSbrx2I7dhiok5qwMxiZy7KtDt5iofyCNB3Z7%2BU6FxHlPNXtKMGVEZmtraOF2aXYhcbJ8pb6o3SFG56wKkgfx3NdYaiHd6wa%2FPEJqP5nrFDf0d9OKeEItnFeqk%2BubeGM1rNgu0%2FzTC8mO%2FIBjqkAa%2FoC1tvJHbEkukt4LZWnwZ702pP83emNAS%2FsbwK%2B41J3cYZrlE2B6jIC%2FbRu37%2FdQqo%2F%2FRxlijgpQplDhfg6c2O0qPgbr3%2FzAayXy7mX0XhpfW4DDX1j%2F727dAtS2xQhBhrFhNTShtoRhYq60OYTXpcpkEnHKF1eoNTsF2Kc26Ugl8ejrbhtm5M%2BvR0jptEn4yp6fIckzg5Mrz%2B9eYNJsHicZoW&X-Amz-Signature=098cf3c4f1858ec6babc53a4c869f4dd1f8e9423a3df847fd7939bc746bc290f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
