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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBYWXKW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6qomfS52lyL1ZiZcFianXnIoGqpBJ%2BQB%2B48wyKmv57QIgUbzP5FY19qp7kG6kPfMpg79uzYfxnHK1QFZr491t0C8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDSgZYefvIYprKVgfCrcA%2Bxav1ccI%2FK27TYyhNdc7%2FkClx6os6DGSGK5J2ZpRYBU5HDEMM5meBS2ZcawLJMn%2BdIhjFSs5t0J4ItWSoPD7f3KVvjK6dw3g%2FrzPJtmNLoljQ%2BhoOGHDMZCx%2FbaerIm%2FIiy6y5ZEGXCaEITYqfFoNGfscZclcrI9Dc7r5ZVoPKmlraS8EeSzcRR3%2BWwcGiBEVlZwzz7xn%2BNSWX9dVh8Vk0cdJUL7HqIs7n10HW9LBLJ86z%2FcL31i038rJGoUh9Dnl4Ec%2BRu4LiShzz9ZAGQylFxHpLOfCsySRORqlSFDDh%2FVu3OJGrevrcCnhDWD0mq0z0hmppLqEwRBUtlavzcoIzVGl%2B2ASHp%2B8HGXbtbEHrl%2F75coTLwSdRuGw3TLaP2%2F44bXo0zjR5J4aRPqq%2Fpi6ivUAG3o14MMUl2vwY2aHO%2Fj6SuuZ42YVfzsvWcXMPnrbG4Hblvg2w8Zia%2BZbydbfgFanHvnHyqPB3DSqdMDkKNO4n2rtP5%2BukOfJWizAEFl%2BBXZd%2BYYIAjssid8WoSHArmLu0q4Mg37bhzoFrJh%2BRy6K8F9LFUVbMs9fGE4VOLblrfiT3eYmktVJugB6OmBxKTUxKvGcXaL8YN7CsjFJgPZKVUMu5V9T1sPPdVMK7gq8AGOqUB2vFUkd0e%2Fj7M62dnD8XC4hSYdA5E2ayEq9dh%2FP3%2FWHjYDwuNM9G3qq2qvXjfi1YR0C6ATczgB80%2Fvs9LTd5c3HPLdqjm9RGZBGBAsRRsVQXGjEaxUtVJWWEwth7QbQwTTFcm6Kbm2d9OIGPTtHS3n7UQZWlgGrcQ8tMekK4Q3qaRjZd4rUocs9E14OaMXeDLUZrsnQqMR7Ef3VS2RFkkrMqp4qcD&X-Amz-Signature=b1175c69ad4dd197764cd01568573729b7236118734e0f2971368c40bb153de8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
