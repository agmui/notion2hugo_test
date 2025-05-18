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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT6FPXD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPT5BrIUyN3OAG%2BDaIh3mowKzBJ4TOn3LN596vSGgSxgIgcPwURlzubFnyqq56AfGz6tcPIV%2Fc7HXXMLZKJpQOmXEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFbdlml6fxIbrcfzCrcAxFgmZKtNdtZpycIpr3og4utqkZ9MoPXVR2yGID9wcVVlRA1lJlaGg4YQvtZeL%2BUeKabkkzYqs3Iotxv7QMXVsk0qfRKqPhEfCcu43teNA%2FYVuTJXLcc4Bsub65YOOipGSbJsJRwXXSsejxKadOMcqv05Nx%2FOjTBbuDEJnKykbEcaW7Vfv55Zsg72bPp692gQp7iCMQoiZtXracLk7ZiTgYFuo%2FGRI1T6eTGZpF6GQoefiPsLdKs2tLit9LIzXWGxYdxj2T%2FU3ddYwKLm9qrgiabNvylM0xaIwb9QjdiGxycYT7oa%2B9Msq27Q1ofA8p3p%2BMaUnZXDLIqulRARRpug%2F8P76oznYPPzvpuAP1fyOvpkWIqqeuec4iRsvTfBF%2FI51f1MMTARG8SXf6vrx3Gjx9qmVwInEzKJVIRTPgoBm9dqKosPfecF9T5s5BsDiSM5eRp0LynQHAL5zPSPskGlp%2BcwUK6ywmvzVlN%2FxhUeBaapGUaSpCZPZ0Y2JP8yp5RdHd%2FvEA6vtR9%2BXZ246%2BnqW0H7nat6Ry6%2FAeyFaEiuh7KLHc%2Fyp5XVKxrQQ6KVgCCbLJNVYd6bTUPrXUr80TVmklksKettw%2BaMGFF0CK1QEIbyHO%2Bb78qNzPjfeM2MN6Np8EGOqUBkYz0IC0lEMeeoHwwyjuXQmyuPfNqDk%2Bg%2ByERXZfgFeZi1z8FxJxIBgTIf8al6D1ahWoR7CqzSKp2Fw6ebczQpsyhTuj39AxPxXCe7zqB0Gz4qrB0eW0Is74PT385YfFNY99tDPQi1nWO6YdMA0Ag1nySAlbQONzaTbH519ChQKi6mlmBa3efAPJV5KPAgdDkGETt5LHGqjuFx72RKIX%2FFoUQTJnM&X-Amz-Signature=5d7c3f8878d2abc6aee2940316c043d4163d57c665d2f5ef36dbe7b42baec4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
