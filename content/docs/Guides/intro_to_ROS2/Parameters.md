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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ESXVQCP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQ9eZsdFPUMGKpsKM9pEoxXvISM53wjUiuNicjvptRbgIhAJhXv5u0ci3aiq3y1f2M1qbhbG3JB7IgmX4P89VNZb1FKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAr7FCS1YN55BZOpYq3ANI7PgyNWm7j9FmKlCdC3eam6n5PL%2BRxbtm8RV2PIfdeMtSBw7F7%2BhpR1pGaWKFx7vMm%2FXdpUBJDphzaM%2B0TgXurctrsYD%2BzM%2BwQfr8ccrv0KYw1TdNhrx86jYn9LjCxucLg%2FqhR2PCTGG4T0V45ioaolU5LLoyNk2iFai2SJVFbhZ7V0isJrBhnR0cLQgw3NrJjYlQXcXQ2HJRwia2vLMvqN1FJ6uy2tTt5fVwUV2VFkYAVj8F3VABOl2JIAXuEXcGY9I2Vf%2F59E6PUTMknqWqCWDZjY1JDjgUaHZIQ8gE5WZqsuMLRMDGluwkus9XNFYU5lY9TgT1%2F8YvEf1s2z2bmgwEsKHJOcsK8QwboUC%2FWlvtkd7rTIHk4BL6tfwyVGNqVkZ7dxDG0PRopOXaxwFeUOrzJQpiksdUP6Yo9nr7vvwkpp023RJXyLui%2FRWXgeoJzRjyUmYRIoPo%2F%2FEk3xjwTDO9mWXTDdksybTN9bQ0%2Bd5BSVmytN8uir8qZSLCaNM%2BrDs7dcCcQme9orZOlzx41zD2M1qLcKjqKuAqIZGSb8wEocN1A001Rd79tQisOk7PL6oXt1FgrtQL2wWguIE4OgpqceiP3ZP3cooWolMHFXY%2Fx9Ps5oVH880DjzDtvcW%2BBjqkAdVmKIduzf0fgoHJeCVa48VA0jtYR9ZdcnhB7TSHTHkXkZ92Fi8gblOy8WPWcesqBrkwg91HyqHj%2BZziteoSIe1PYGwoY4yDNDI3zyYmh1J9C2q8H7adY6NYnETKQnFpMRpsMRDPCTVMTKCrvd%2BfbS2gbgJdPk8Cpib2tB4Qq8TGVu3n4aCSdP%2BtwtEOp3ADtMUtPCktDFKmkrALLtc9qx4%2Beqk4&X-Amz-Signature=5012977d7a3fedef6a5e021cc784b7058e9968f8630b6a8163d4ece7b835e131&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
