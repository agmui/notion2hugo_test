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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76TV3H7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFOdBS6mXIf%2FOP4VNSx%2F2apkRMvGjuv8rWChdZIBDc1QIhAJ2NfGqh%2BOvVnVLr9H57n5MZRrLUYBb1Jarwq1aN3NH5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUG8JlCK5wQYIxIccq3AMQWIXPYPYVOR3UaUII%2FYyKXOKm%2F3XB5QJno9AIKV9KI2KDy8h3tc0S8JipONmiWqjQ7TWLdOcmpQTyeeY50nJCldDmMpd2cy2NfOG0b6sLUW8fCVlNdawPXe4gTHiJivpi8IZO4EkHCDh3n6YjZgGUcE98iU6GRN%2BQKO59RiIgaNxizcg1vIbBnOBebwc%2BikV12BM9F%2FUQSjpzRG77WTaL6CxWpuUwsUqXpSkT8Ft0cgBDITNBEiYwV0qStW%2BntWAdd1CxzTpJJF80Dg83dwJ1%2B2cZP%2FJnUNqnz5prxa34KrYorAjKcs7gwT1jAHPiL1xU1tIhZCdG0rYtZ6RjO%2F1cjOSqz6lYve3OxMrsT56LceIkZZaDj98jNZRb9FptSUEfCXDrAqYXualg6l8DVWqn6YHqSZAlpCzOBWoYOlygZ51o6gMf4p9Eji2H5q6i5sR8hQOL2IVUB4eawj1yWHYb%2Fb1dDIrvz0kEd9zgbALcvP9MQyVbouRuE8wqqxvfiCwammtGobsxI2zd%2F8iZTuGDLBl4ypIzBV6%2BJUt0TbBM9fgmt1IPyCOKfKSg0i5FUqDwsJbKcLdEdO2kss9VbIF4VrYOJGZOw1G5wWwfUvXEMM9egystsQ3WfaSDTTD0t%2B7DBjqkAZkaiqc%2F7epcXFw8%2BL12ATsZIyhgO2twF2EVDlcifYIy9IxisJCZKYCsX9qMcFrA1hmlfXCQVrBGaBlc%2BQetTcnIA246JPubwkQU6cLFo29H95vaLuleR%2FOFAvasod%2FMjxX7PnO9ksyYEj7H%2FXhES7ciXUofPW6O0oY2O3RUZO%2FWlxI1qZtK7Sd%2FSYmItpG2Vf9%2FgQxMghFI%2BTjZDD6pZkdhYreX&X-Amz-Signature=cf63cf1d1620c2e3eff997002a715b1c36de1060c70ccc8daef52e55886e1930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
