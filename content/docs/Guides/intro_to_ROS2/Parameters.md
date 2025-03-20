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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPC2S6D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCdOikfbAoeV8YXlKNoiPTux%2Fzj9M2Lil2yKgVwEkBSawIgNWNSqB1EwbJ0D83ZLvvWabYjoIMhn6DWREu7HUiZ1P0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FCtFksMkVdCG3KaircA0x7uN8VKDg6CRr8vAkZafQQp4pxcO%2Fa%2F42JL%2FJa9w5e%2FvOCAJkO71b3wSxzvnW%2BWyG9B9Wm4eQlduLDLbm45XjRWwV90nefb2g2mij02OlU3K8YIhdWI91GesdBfd3x0I2pgDUXweCgsxhhiWDcPgBilpyAlSc%2FtLZ5G0f7qzZfu1AqKP%2FhUUpLWiwwB%2F2g9lFgR7gTxObJnxUO9%2BWJHsGyp%2B4gWpnRcQG1AJVIU%2F2lJ6CIuvkU7c77C4RvmCcGfXY6bBbqm0RNzWniA6iRPXaxW8EY9Q10fF4TdothMf14cJgXojKZO2o6%2FLTDKH2J7%2BmyP4kTHoDx5je%2FeOLnTh94rlaCm7zGBC4PuBjSPps0sN6lj%2Btz1EXnt5OD9bOOUAbeGjSe22ZrrzgHdkZJnWdpjxW3vmOOUhOn7xtAyB%2Bc9dxVjghdJ041TZLPHodySwTHzMZQP3C62M62pfMm60G2cbPgvQhKQ9rfldHkZiP3Y6sRJLAx%2Fc16gYug9Ia5XZVbm7yWnpRnSFsFNFiaRK1Y1fFbKSseRk0fEPhDIELP9gBS88Ifzdwj6BHIhHxkwcJC4kbZP7hlhGSPWrpyMfXrHts4tIZ4cVmriWJD1AZOrnPnZo8T0Y2TaEXyMNbp7b4GOqUBGDS8mWCbflmWq7qZJEua9T0d5fP8FPE5W8GjJ%2BJrBgXGkUUu52FET7J8Lot8nlqe%2F5p2pNmQks%2BEL0Ih%2BCgcMZCSCWQDH6XtQTgSkwSDpU73Gh4eOG0VZsrTVC9MU1S8DTxh5uTJhbcfFnSHdozBQS2gM1QwvxLk4MGj8CwQB8%2B%2BsJcOB4DRku9lMfjxynt1Nl6gcpagZDq6D4Zfxjl03Cexyy1u&X-Amz-Signature=2fac192e2f8fdfa230a49d51e5121ba5c2f221796fca18d47ea39826a049e318&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
