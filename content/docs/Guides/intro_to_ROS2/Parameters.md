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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUAQAVS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDnHmbDkMvExeHwGSPWXvBYKfcSGfJoGnb27Z8IlgdrbgIgIKphUKf%2BWOy77k6zyYYFLBWd5NnbB9qUwSIa%2B70Qp24q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFdX%2FDGdsxvS2t0wjyrcAzAbVjEQiqrr10eYlMLGg0HoYnqTLrhkrOS4P%2BdviAR068H4WvmDOLbWUgSKq1vmJQDtZU0GBA8GaYfPGJIygPLOl%2FDxxeTwKSV%2BSnsiRqA6Z18mHKdv9%2B%2FOhxHcBT%2FbXUM01RC91b7151pqsYd0pTXwJbKedkhOvASPZGEJN2Ut8qPAvjSXFHFF9IPkY7RAOUoK4GHZqe74%2BU%2BEDojWuPhjWcJEUOwbOFG9rJMmzBbWUdNp%2Fl0cMa0crp2IDo24lDthTMntns98CiHeAX9FkHXnOolqbr4EZm48DqdEBeA5UW8lkGqymkDKLpC6aApwLFllrVx%2F06%2FlKEVwKsS0YXOM4uiTxHzgOlWtMJyYogMxkREGC6%2FMypmMQ8r4F2doeDeAEJ43TmQwWeds3tVrqGWAJodRrJRx%2BYZPdtpAJr6Am6cO%2BDZQW%2FFMzqvtIm4z%2FOi5NmLcnzBIkdVRV8K6frfHF4I9XY%2F60%2BroA6Mu2MaIGFg%2FJ6iixSKUOaNkdOC8OMPoitXOdEWho6e7pb3jxs%2BRW8cKJOP99ppKwu5KTgtwPBgll7nYFDlE6Xtm09ZATX%2FFmbGdXO%2Fj6j6M0SyKdb0qM3WkswqmAMdruh6AURedJcsuDyiPKkhA%2BLQ0MMzFzcEGOqUBdH2TBaIGrS0P6XeQ0g6na9pnJdy7mdtKoWkAfwgfp4iQyYywSMR%2BouLFpVLZ6lV%2Ft5%2FCgOPKnDzR9%2BJMR5NZkSL7Ci6whIXLYrSJ7Y0LyzWbyScG2ccG5bkiK7Ym0jrclWvbiCdCqxEwdPPMl8GnlgfmUt9k05Ca13DvQhXIMShIgc82MEyT77R9cLRHI7puT1ralnKCUmxtOBMuNq4ff%2FshO5Tx&X-Amz-Signature=360e5e823333bf04ddc12168fca3d86c12794180c5fa3481793d408fc2b14568&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
