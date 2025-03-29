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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDQLR7J%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGopztKypMhC9ll58ybuPQfv%2F4g%2B25UpgQ9038ZAAgVnAiEAmIXY5Z%2FOeQ6VFxw9xhHpgnAlbR%2Brb8BYXuQxoGZhxWwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGAj7DbPT%2Boxc9UTcSrcA8ZB2sdYipSTmYd%2FoBFS6hXn8e46y8VfIPHmAqcYi0Vs%2FkAYZ9bvH35Ag0pi%2FY624vnLDl9WZKxkZKQy2f%2FN9gOJ6jOp%2Fkf7HhE2lofJgM3ojAe%2FxZxKVdpl%2Ftqmcbs1C7JcRIrz9nvA7oFo1a3E5r77OthZJXVX9B%2BxD2NyIFSGfbgLlK17R8OM8VQ4b2ZU%2Bth%2FBF6kKBB9CmZJTGdWUPSfm85iAxQRFtXX%2BmrDck2F7GsNUwpV0as3Yg8q03OpXh%2BcfH01tjwgcUYYHs8goIHtNqyCyZk7bSHX0hq6VEbHHYBx6AKtAVvVdO2%2BEgwkXrFMs8EALbiIyESMxfcq%2BE7ZE%2FkFXT53XhvCohMW%2F6yGvr0vhVrQwnM8qrIEieKftY0PM1trj26nY1jGfDDJ6jJAxRtx7awVLSol2aTXlsP9OTk%2BM113mCoK9IZ7%2FVheivOSBxmNzLCBXaxNiJp%2FR8BcX62uuKKuiV9sBbTo83SpOrU2clf1UTz3ObamBxuQpvqHKzRB1w29mwedkv9KRXEyH9790OoaB2NUQTlaOCAQv3DppLX6JUDCKkjn4yl4%2FHrmOguL83U2MfBfiec%2FQho%2F01ogjOSbFa7Yi%2FCQttDPRGWlNbL4qz9MvtZUMOHfnL8GOqUBpHpPoe%2B8iiKoB%2F0XtBnuWz9US1BdBylfc5DGHfWYZzeCnsquSiuK8jVBPungIl5%2Faj5Lotk0RthvfdTUACnflktsisLINcUr6TnBerQ7MMSWhLHiwwH5WgvxN6qBLppERIB1fyOCcGGFNlJYpu%2FU%2FQfb%2FFf79KQ1%2Bj5gsPse1srQBlgoxIZJcC0RfkDGlXGSX8DMMI9hjXHqC1nLv%2BLuHRoXhevp&X-Amz-Signature=d9232f5f0d77303d67cc5b687396f662159e2083eb32fc0a770faa6963b2215f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
