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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJVO4O2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClwOl1mFeydAwCqbaN3QxI%2BHV4Ihn91vmvgt570zl39QIgNM%2Bb9wfDqY5VM3AXRAUQ%2FvcNZVHh0HhSWysc9JCzA60qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd0%2F4RCDHJdnJsBoCrcAzvNmNQrDf5pbFCrkuZmVwL0Ay%2Fen4UQHWYXidmpYbCuAbVfwheD2zAkJfHIgiEZY%2F6nrRN%2Bk8KTDM%2Fanh5KM1wChYRXy0ifvMR9t75ctISuc3lDZwcf8KRpa%2Faij2RKVPR29BiFM%2FqfvNXYiCRqrjlmdJ5YSN98yeVvBd6l6b6zG%2FJtapHaniXC1VNkvkdQvJwJSk8Ol1Sy%2FQkgxMwZ33KziZk%2Fxvgt3cl8QqRcjp%2BkhZfb4J8D9giSVHWXXL48VVacj1Jhk%2FzVy60AovVFQb82jNcg5hkv5GgvSPntvIP4d5wwLqF9lotrCXbzcdJ3FLSk3z1iuw7SDFy7Pz07D90W7AmNaU%2BBUMDa06ItsU6mdGGZAvyCuJEbIh7LBMgxktnhKVnAFxXpn%2FsJ5cbB6FcS0B5YJWOb0mSNDxt4j4WsgDWgY5JLblm0nIF7HLLpu5OjsFGdMK0g6UfeoIKICNJDxDx0DvBslUypbl6pM%2BsbQbHQLbIrb1IGp8KHvMwWMUvAWhDmzXgSBiGugJeU8zXYE3764BEhDZcKwtSxEOtIEmH2p%2B1uPu2R5lgo1o0rtM0fMm9KxN0JN9ltSBXA1DsmPHS3IjaVG39mW24Qdgyo31ni4ENfrNlQC4l5MI2mtMMGOqUBKXqYArE4WCJyZPJs85SfpUL6MfVZILnP63REUjMZLBHZTLwO1ldTejM5B1GQqth8KAvihrBASyhfiJ1G%2FPWlsL5msTw4H%2FT0l7842Jwb9XNO2jT5UV470w2LN6cJOPXPo4Cp0mxob3%2FmIFwNuHobCmJOwQa7z4B5YwzlS6lpw6xmrZUu2HhoVjCL%2BNL226orGJfX1U0LGZD2pY6iVrYIJ6gqeFZ8&X-Amz-Signature=8446df240b335fa36548059e363c5a2e785302680778b3a6c9bb692c7dac1c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
