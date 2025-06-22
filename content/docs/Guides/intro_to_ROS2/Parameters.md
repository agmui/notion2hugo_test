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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2XQZOJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCR7iSuH%2B8qI5nLzCSLh2Juw4mmpdYGi1FdPNFMR%2B1N3gIgD1GPCNG8t1NpR06zpbgpXUReHxIqHI1Faeq0U3gseQkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM28w%2BPWsBsZyoc4ACrcA7M5bPq05N4Lmpy6iLuVAkaYzdvB%2B35Uz9cdKby1udqAG2wx%2FF0Ft0MGqZpa5qq9l0lKTUANvET8bXglwhPR%2Bi4b1ary39PcZDR05jTa1r965UmPnkNreuAn%2F7yTSNGJdNjczUFxBQxbHwUZzGT0z70QkA%2FDg1XBMh3ft2SdDppZzC8u1VFeAHJMJ2V%2BbIffQp5oWVLz0y%2BZwMY7r83gT61CY1rrGs%2Bj13jQYFlTw2FiUDGB0pYkKCq9mrqm7IKlticE6tKtBJzDmwuwa22ETjIqsnrIemlj95pLrN6pB90GW1w%2FxF8uTzwh4T0geWzH9bZZxuUwLCt4qnDONDnH9EGE1ztrPaV5FYiEsF%2BVEocAsIGim958PYyMRSZQBI8cSXsnLotDodFnqcE35oarK0n7oN%2FNyd6BL%2BzZF1EdcFDLlvODkIuUNzzVkXhIXYbcIq6lxNPko%2FB2JvWRW8Tym8a0cvhKXr3l5AoEN2unp2uRyUBDl8Az%2Bg8a8sdyQ3eOKJMs7QNQ9KCvcnX2kPUFbrTCZvJ2WcC6DLkpzNgydsTJLa4vr6f1PYS%2FxSaUszlopZEbpOgtjkB%2BzyvJJbeDfrYma7Sf2JKuTG1KcKTnS%2FXLVylnA%2FaGN%2BWm%2B8YOMPbH4cIGOqUBJpQ3%2BnhLC%2F1ny960fMW3HpdKqlIuF4T281%2F0cUvSIiaXgjTe%2FcdZHklr7O1zViyf5tBMi91%2FgCgyoM4AD4WCQOW8c6GzEaUFDc%2BzSb85ZDKawUbdGMvxJpyUdgYKqfEDGEd89fzfvVSUyWzyD4Bcm0eNZf%2BOWA3pNAKe%2B%2FldP1eg%2Fr%2B%2BaKygHW1NU1p0muwI36cmf6fXLYxQZFUl1zRJ9rlwyR6v&X-Amz-Signature=c6dc5b7ef26c378d9756902eff4188a47cb4a2dfd0ac1ff1f7c52d498ad3c46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
