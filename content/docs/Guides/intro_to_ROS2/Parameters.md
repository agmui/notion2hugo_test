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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKTSDGH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDhVN8OpHLszG8kyWNqtkGOprPyY2HveRn1UGYRl9cWbgIhAMPv1aUP%2FHUN2yYAeVE0QT1li93agyCk334BzDTlwoqpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4ozOELzgjJ8NYTNsq3APca7J8AHdFbDCfxO01Nqy4tZuF%2B38UNKQ1r8tzCbYa1CWXcbMXlKKhb30yGJCJdrtCMuZod8KouQapgax4gbA00IzHx8OdJrD3otn5yYK9rK66Cz7aZvt4eB8xyQ2ZyUH4OozfwBS%2FIn%2F8yW%2FTbGTwIeMkwIRVWeVTJaqWTCJmWi%2Bc8kkEJy0Zo2IWm9PIzEyy2OBnu0iASY5iikxJMFymRo4joPpZKRQc15V6CAmLZnEQ0cLmdSpojeKLBWd3wgo0NcitzDHR36vVIItqsmNk%2FVH%2FG83hZzm6R7MGgpXlTEZ1slAFkblvDta7isS6bDU7UpQp%2FPjQ%2B6VrGBlpmgSQQvAbzVi39%2Fgzl%2Fs5j6Rk99QrWeGOg%2BKHtT2jivEpGQTbP4uNP13feQ14q902Uw%2BRnpYz2g2vYHXReauq6UNvj403UFf1ykVavNgPbBevJarFVeXRL6Im8mAUF77n2cUhA6xcJDP8oNS44HoHTHELs%2FQZJ7N9%2F3QyTPk7KxYQhtX206qVoSN9T%2BqrbNn7UikAbDUb6rSNliH0MM0RbZtNye9bdSDdy41TecLn%2Fg4P79eHor2IoPTpTrZ8Jn74%2BWfaeBfLIyh8iuIN06IpkYH2R0ZiQtI761RDZgf2wjCJ8Lu%2BBjqkAfapYpas%2BZXULqqiKcZSwdpVILDm5F6OLVIgAD4t5FeggaVYuE%2BUOOSb0JugrDdPEB94QN12wZsEjH%2BbaDjpLO20x9NAsO5eibRTUM3cVCCCvJ9reVI%2F7SxPyGVOy5Su4GRfkeL7G%2BQtQKxrfZTOKP1rByLXvGiOhuPczZJTBUBJcqyZvdYr8Eq7WL93c%2BTqgHPehIwwmgIV%2BZrnpNUMGXBk1%2B3D&X-Amz-Signature=4800930bd4c5f82d26ea4965bf43e941cf79755e83fc5285cad0e220b0c534c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
