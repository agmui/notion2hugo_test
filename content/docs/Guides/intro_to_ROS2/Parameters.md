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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJPDEDN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCYnfW%2BjicNVruolJ7BD4PZkme0EybUsV67SPd2JTIQQIhAM7oOyqJGlzxNF%2Fy5ba6%2BTXzt6rrqd0fkRHEwvIZLWXoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxT6pMgVpEN6J8lBEq3AME848OdkwzwoPZmjLfw3r783nOgwobgxdVBI4hyIGDb5%2FjcVJ1aTYksXE0IJFkd0MhsykNghuvx88%2B7x0ArAHuS0DkDr%2BRbQ5Jl7QGadN4qX6LRN49GDbKG7oLuGdW4QUdZQPETY%2Bo1EvHWGxB1c7VP4yhrxLAfDlIbpQkJ2K0McHUvbmQOvDy%2FMguO390FJGcT0kX5daErZKRphALGHy%2BHPtlSm7%2FQwZ4h1ABJwNsJ%2FUKwB2in9jfLtnzHCSHmEiFABgHFe%2BcHlkT5FtKrjF%2BmWXJaznlLKCayXR4O1gJNhCah1tHOluRdZevjnMwRB2e9ZNyNnkJGFSFTXm0R3TJ1w22FgZ4dOLcJhb57bf19CagRq%2BLeJL7mgGPQ5Hty2waycDI8kLcWoclwPQfcB4hJu0Zn1Mqtab4tt3lIEWaacEl7WEmu878a0fFty0y9MBFJLm8xQsYJGfAkECqbbQ8y%2BDbbcbVnO7tOIavU2WHevcFJdAw%2FzhW3FGz1Mj9uFjx%2F9dZOr9M9XIDJlzYFCn%2BDzppWc30TbkOl58uxVC4Od1RtyupYoHHAJ3V2mA7CfKi4xRYKUeV96T9%2BNYys5FOgSEHB12sxVmT%2Fu96AWaoJ9CCEg6ngeOIluL0gTCW6Zu%2BBjqkAZKqivbuHwpAy2ixII3uyRFn7bCGpB8j2ah7mIa2ZzUYTaNSGWEyq%2F2bARp71dFmCnyZJUfv4JQ%2BIBqHvugOY1%2FqoZKiznTyAeAU27VUnWYuF8Faw76T9y7M%2BMf4UrGpmU9F0F0Z1kNoIEoyUZjqKU%2Bm2T4iKeQG4rVihDHlgck5RnoLX2TFoFpWI3nG%2Bqxoe0xtMSF8fBpbNPyE04RGTzL208NT&X-Amz-Signature=b562ccb9784efcbcd063836c03e22dd183e02c30687ccc1a3cf0b1643031ae15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
