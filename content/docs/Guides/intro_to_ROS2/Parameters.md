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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J73MW2B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFE4AemhAl87IfDIRxMfeE3gYo8rNU7dBg5VfsAVGIBvAiEA3KOK9gdGjliOOMz5HMMD5O3xkOWKJwCwzi51Zik2AwwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu1CPyhgKmz9KuWZyrcA5IHOOAJIr3%2FyIaqsmw0E7X0aHoVJVGmfWPsq%2FIXSl2%2FG%2BvY2Ld0ytkBJm4hV%2FtOPUIueGIdPz81B9e8DWR8F9rFKG%2BM4P0dNnPV48WcJRChVdFfOVk5ekZgbnZfOqwpJXF9yaDWRkmHbGVINNrnw2CqnimVVa3uhrE6dtQVjQi2l6FPZtRzJJYSmneqHPEfEU1KZZMTT21LgYJo8WDCpKN%2F%2BNjP9bZtnsT%2FztChOYvgmADAg7%2FOO24mbvxvY0CrUhv66DPs71hLrmIia5n%2FDYF9AiH2FKwvzAzRL3wodkv6Z532upPNn1WPJL4RhYzmUfTSPyazNG315vPBeJsun02me3NoryzGSoNmmdSgTcsA%2B1v3ryTWterQiJrxsue3CC27lIAoAUOWib8Buo3dGJFFCH2HwDpioEgpgQheREMMJUGkabVHSrAd8uxrWbH8vbwFKDHT5nAtOAyTEuFSnG59j4wVmWfAcWPSX3Uu8CtslIOCTCxEQeDg9lfjOp6NgROvFOEbztzVDtnLujSwww8PPN3AmqueCJsWd4cKOwOgCh90UtZxQJ06Q8yruate7KGywIj47ehP2IgO1jQ90MANIguwSwvich6zHSqR213AY%2BDnFsos%2F7lm7gOmMNHM%2F74GOqUBesvJM4k6UKUL5aJ4KlAPjbuV%2FQRO0zMMdv0i9fZbRaDfIxnJ8kVvapaN%2BS6Xuv16EBonB9MYl0gHiGPRGTzecqhxwwpjEvdY8A%2B2zOKn9HAmBeAZhejwC%2Fit6hHQaQgVwG5FrDg6RCwnRRMkqYAzE35xWBkbCD2epgv4qn6ZAx%2FXt6nWDIVR4PT9tdGse7MJs4TaIoytVngOU07pnPH3HROzEAPK&X-Amz-Signature=9ebf563a7723913cdf0bcbd753959abd8a90285b6a6a1c22a423125135e5827f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
