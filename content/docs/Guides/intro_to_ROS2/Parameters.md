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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JU2PJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEeClc8usmbSTx4ceXP2srlrAIJa5Wrqwe1K8RzX8YtUAiEAtK6%2F9rPyunE1oi6zMjLuZt1AYdp3uiUWIyqtCth1iUwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrPGR9cL%2FgQWf2Y7CrcA3Vq8EJnmGEISb8Hj%2BOXzbg%2FRB0D0WiaSKMynUXP4RtzQcsWw9IXigpOFB0qJ3VFQNue2oH5UvGAWp8zy5hS6qXHvrP9xfnPhIBLRT%2FIdB6mWqEdN3giEJ%2FNwjL5E022r61QQzJ8fBkF%2BHhW6xhr32vSOkf4H2ZeCgAFV71NmnLRN6HpDMzRMbf3d5NVgEXpPIkWH0crJJLl%2Ba7%2BA%2BuUXXIL8xcyVmArifr%2Bibt3I%2BuDRNmtcjz70SC8MP9tVFQt38%2Fg1cySPuL7CXAEamVvUL%2FAdLtpvaphdwPZN4LUDWBfdeBmpsbVkFiA5IQ4TFzDzuBAICDf%2Bcq6mg8rIXbyG1hUIp225E2ggmCpfo34VcYj45BwHAEBbX%2B%2BK1S2zTm5Af2ACa81kvMHWx4b%2BmNx6JSsj7HwqhLYqkWxbi%2BqNArRuO%2Be8AW0SXId32mqrU4oCg632cSONj5%2F4gHmEH2tLpnpLJYpTtYmsbXFjzHTU%2BC00nLLGIvidr5nOZuqzFpjXVPFaDi6uRgHuXKVkhVToDEaezIrYloRCcGU%2BdWR1zAeSE97sHe7tmpLsyJM3dmVS1dZqJT4evqLQ2udINvJF5yfyumkD784PoxTk3dZ80YDp315N8UPrhsXu7dDMI2Pv74GOqUB8eSDLQr3UxRyGKllzEGPw8zj4vc0NOBrPbkZpfNnNhEljn0TTtnY0BlN2zf4t%2BOVdwBoPPi7PuEdwj9oZ7NHr3aSYQyvE6iyPNbRpxOS%2FEF%2FH6Hvp5T6h8IpuBk1Ctn50vCNmNsXaRFm4rdY5qUKJTbB%2By8mVIUZGmFgCtX8oofgCFS8%2FN%2FOsvqvyU0fXvrl188LwFYdbLpmyybArlK85aCygTNE&X-Amz-Signature=f4aa1da2a0999c17dedf87f40c051ad566464c81d893bbfa0ff5dc78b58dfc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
