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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYXLKIS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCQ%2FbH6NNkJ3BvfSWg2B%2Fi%2BRGjvHeBDjUfAh%2Fi2Rf4gIhAPbQenoxUr62tDrBGnC9K8%2BxjhadnGvXA17PMB%2Bdy57GKv8DCDQQABoMNjM3NDIzMTgzODA1Igz2GpweD1zYPd6BekUq3APQo%2FsJn5Slm%2BFjxgv%2B9VZjRSu%2BjD9ka8wpQNPSKm2nojiZ159DG7T2ICLv3HvMmBaV8I9KCCmgXkwGvB%2BblA%2Fv%2Fkvc18x%2BSeZsIgcN1OOsBeyGs6yxff5BHb1LYuIB0vN6Drm%2FhGj5GonKkEFtg%2FcMQINTybD6MoD%2FMiEbw3X412SC0B9Vr%2BTxOFCsc6lzVyPMzuutSQavWJsxuYYSaQflFGgKc5aclWttRsST%2BX4oa7V76rHEU%2BT0FtKXSudXplLaHoO07nIYcGhnqL%2B6FFqWUA8PIsprhnxrA7uSxtwSNvbo0lJAb%2FMWUa4annhfDXcm3noJ3Pw%2Bo9DQDVAKBnG%2BM1%2FS1EbwlELGZ3lWfT9dWwqt6kDXTT%2B77ieu%2Fo93Tud0Az9DPKHjdzkOfHOUmjk7cD1YlDT6ri7CczUh74Llh056NbOkExR4QnglxW7J5z0hTBtryivNxcEzpvQJhII5uJVpNt3pRr0Mdo533uL87DCTitUCaXVcMkxW7jD3QhEjxRSIIgng9qYXrz2rhCNjPg4tbpWKZLltKQCpEp9emcfmu5j9GOU%2FB8mO%2FbeAN98Re%2BeFIghjbuPUZ355gugrI0Kj3j1IU4d%2BYXwETqLULQEV2jmMjSVwdIOXIDDSt6%2FABjqkAUr%2FPDNNDTKWSp0X9eGog9zN6M31FCQrBx8XvSkRXcijxw78pCOqhphKkU0OisQ2%2FJqka%2FFeqonGc2b1Lfh2ghmTwMtjfJrwXzygiR4DmSDGoI14%2FY7ejR1t593hI1%2BJB5PdXjG%2F7qEabZXlZZbprutdXyA19SWs5IijbWdIlFi%2BWZVm%2F0t0Ff8%2BmiftXZwnRWXTxxaE7xE2FT7Os0Scm8KyRmSb&X-Amz-Signature=6c630f879c6a2fdacaa9a6ad452b0b88859b6bb3650337e9556c8c2a1bfceab3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
