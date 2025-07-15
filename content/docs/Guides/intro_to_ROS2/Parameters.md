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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEKPHGC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIDZGhaODI40M%2FUE%2BzwOiC0rDm3dDoN8Sgx0HDr%2BzZJkLAiEA0HuBXGwVRN%2Bb4WWIyrzG%2BU2%2BLJdcqVp3GuiPiKphmwkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFpK2fgQex0ES9tE%2BircAyZzQaTyPPz1%2BfvvYlJ0OpsBvPUloNWkR65nJ8mqJnRh0ro%2BG69OxRDF%2FjaEpaB2gTGPvzH0cnfdsAA%2FfSC5UrjRw%2FvROXpizsg4AVLv6Vw%2FER0QAj%2FhvRp%2B6MgwpNlu8VHi%2FxLAMV1gB041q%2BGforNKicD9mf0PsanggZky0MQofihSbOtNIshJSMolQkLkFOW7NemBBW%2Bmq8eNgMlAXZmM4AkyLMoBnHQO%2B8H9rKEADfqYK2xUbQEOB%2FpWNT1PkwkxyIS8M%2BuRXKEz6rPoXnExyVq0afIeKTf7eHe04iOmbdJWQtZhFt0RyvvCoonwIpBCgQjS%2B816yeXpBuNog5wMyHpzFUpWylqAvOHNCA2VR7Hj5YgoJpbZ2aNEy2m0jPIgzlEuGkrKEy%2BpzKe1WNtO08nOkwT5w1hqRNGyQG0BEn8MBTSb%2FPZuH1W6AOkr6sYGXpQchAZmmZlEYC0pYyT9P%2Bze2nPwRUBa3LS26tZQw%2BWHi%2BSwpN%2BRhPce0zbCz%2FRgIrcJk9gvF0iph2L7RR8tU2Txzb5FR%2BDTfdG4TFwt5R4%2BwOuVr0%2Fu6d8JU2ibXaLprP8YJHVGIomrWHUAVPC7fVLdhuOoQO12sGjfZXSi1rWzrJ85ssdnO3%2FpMJjV18MGOqUBKKMvprsKNmHpoFqvToznJ8ZmHdVkqSLIGwB%2BMihewtE3NtQ0LMJs8%2Fp0X5OFgMqLCgQCQg%2BUpKu0HqxviicZpaFamkcO419t6ITFMisFtlcKjPuVuCt1SIuACmcsHIkzsUFDFnYVZYXU1L6Od3z8Af4Y84IJ%2BiACrXvu3QBkWn%2B0xEJlG%2FOa0jDG%2BXGfGAbjAHSgPYTcpN5uaUoc4gli3chx2Tju&X-Amz-Signature=539ea5afab771744a11a064cbe4ceb293f5c9d91f08244d33cd3d8a43e96d307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
