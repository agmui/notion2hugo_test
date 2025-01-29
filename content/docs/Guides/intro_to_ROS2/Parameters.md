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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JHZ3SLK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWN8FKNcpumcWWBOVvD0fer8uLyqxEwJy1Nr6724HSEAiBn%2F7H3BhXJlueM%2FaBd80xa6ysIkbz8cPoM1LjjdQt2syqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuBuo1uVL7u6PbAegKtwD6aApQOFw1esvWJTleWcZGkz9JH0QHScoc%2B1IrOlkY6HN7TSpRItRRXsa9f4qtwqSumtdY3XkW7sBCbB%2FHPOhmbMQZ016verg%2Fuw0JUaIL7%2Bj1kApeQhp%2FoCYhkb%2BsrHgdBl3rkIqSnY4opOg7gt9CMAx46B6yW3oWJUMiQcHRTkXN6OgrI4m4z8gwJRiM684mSzw6%2FEqTcfaUKR54HDIRAXWTHWqbw4uuOeU9npjaGVwd9%2ByUk0cMnQIoEcy23Co0M4GlWULt7R%2BPi%2FaRVhpTkV0tWFxsUTsUUkjzGEAG1a3%2FlRRB8xU7nORFkm3nt%2BAJQ4%2FJ6DCXxeSEORvrmUBQhUewEgqi0kt2TIX8vSYYOieOtP6YINHJd4p1Q9MHRUnkRcmCYyShezdnomYLP8lwG%2FNkQnx1LmxS008tqjNdjMB9O376pnuqg5E6ff3xsEvqdhfXi7f%2BPOuoaV3TibtkeLFBob8LUw71L3tcZTZtPVH5CjOtpaRgd9hiBeuEaqruHLFlNyDq0wSnthccq71tipVmOFIN5Qlok5f2%2BUWRodISymUdpr0telk4i4KjCk7zN82TXewbAfQpqAu44zGdCb25iPs2ne%2FK3CUPbh3zwpVPIwm%2FiGHmn9hI%2FAw6MzovAY6pgH1patZKFNQHn1WXETOLM4SgAxRU5Y88o9MZGaxIHO5DqCJA81WwPVLPqxBkydcB6izLDo7rtOlGsiCdla9D8pYEkLHMrs6TxgCXT1cAFflmKoa2KG0FYyxO%2Bm%2FUCwXLwy7SOSjZldwFcRtykk6yRoMVMVJroOA6GhlWxejW1c0ACC9G5RvffxoJowRYFSj4tBlUxlljm8xnUebQq9VLX9dNMZg5efw&X-Amz-Signature=19a3015dd86c142535b4f682676b91797d65220195c81a5d836eeb656dc9924d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
