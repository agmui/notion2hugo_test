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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2XDC2X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGYKovUH3MqXU%2FK23Aik78CYsToyi4rr3dSxJDa2OiwaAiEAyGCIh1nQFQvqbCmV0wCwxLU17JvWxNtWOJqEfhdCFDoq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIsxTKi8vZ%2FnlWbbmyrcA81mRJz%2FtfxIxvdQ0cte%2BMHdFBXlToLW9oKrY%2FOMw550F1C1ciEgPB5%2FrSHodD5MBwfk6NEuIxYdqWNRwhBAq2CId9TYXB3grM%2BD%2B%2BJPZbf06UQOEAfoHrfxWYuQRpLMBx%2BM15pbnC81hBxI1EbC0h3Z8nFn4%2FWERY%2FklX73%2Bz05Pmiz4kcQhOMH9RHhyQEQviliRgnpijWkbWLBVdw3asqGb4hkXwJMvQw6zg9Rs2LGvMOo%2BogYWXMw8OEuBO0jj7r8P0BTydHSghZddFl0DKlgSgcUEKNe7E8FlsoWPSAAovbS%2FH5VrRc8uofhD7nwZQnYZvqHucdaJ2teeeIKs5YUxGVdo1ay5cVW7%2BcmdHqwfEzvvPhtevCIM9sTAuzZbnzw6EkK8ws2sFP4occXRQ10E%2BCE%2FvQwFZn1piwLJuTjaM1SjoS8nDZA8wp%2Bq9ZaWuR9R0OwMKYXOzfzgAsQQiAQ1tQoFtdHkBEYUnM1c9ylIHdytbbF16SoH17xCT2tw0dYS3cXddlVUPkGVqnkI9h5UkS6fRcLl7ZYw9BJj1senfE%2Fnf82DoZVtPNcs8ZeTD7oZos2Jk3H4uF6oaapETZgEzv4OGWPmyxtKc2Az4t6rzBOqGjZtUBEzedGMOuGgsIGOqUB5gPaPhKl0Yl8J7yLuXXjJDOyzbjFbzBrNTnu2aI48c2VcqTNx4V%2FTs4s5HNHAr47FJNEl7dEwFCf1d54LwJvql%2FPLo1AfMWZRrCT2d3TNmoR2RmRiNf6B%2FdMNJQsVnf6kcQzLtQlk3T8%2BLCFeKTLQuVAyXA%2FsQ0KBX%2BBNADmsIYxmMLvutPVMTfDvxvTiepVXMs9lWBOamX3oLiSxsJklLbe2pJc&X-Amz-Signature=39bbf2bb2e4ea183803345808a276fe4f99ce6aca286e900714eaf750262cdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
