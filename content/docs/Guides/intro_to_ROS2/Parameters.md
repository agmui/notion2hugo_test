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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MKAZMP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC9vCjKw34jsc6E2o01zWqwZPvl49LyfRGCZBm%2Fn52eLAIgYWdi7Qy3j4jrmLWrWpICn3RP1LmWMHqxAmeQWxm7i6QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuwZ7%2BRRKMldWwCUircA5fHclhcDz%2FCJ4Cgpsz0n3zk9l8RXZqOjQFLNkRr9r9FbvZ55gHSDWs%2BXb504pJQMgvOar9KuPpnV5%2FiVF%2BUjfYI61nBrSf0Nj2klZnDi3d1%2Bu%2FoROTaQdoovseZPHd72iW8wr%2Bqxd0mAdJHgwAYMlSdoejjAuviOD7uBCmWp8ZqL48BmBuZ7MrDtI9zaEaU8QgYZZF%2FFkaYriYb9t%2BGzpShkOSBTr8TGLZOWcCVXmZtLyPhXNpzzinegU3Kqo58%2F0JYNciaMyJZXjfBIWka%2F2CD3%2BT4WwQ4vfKL1VE4hdmuCKGUlHSuuisPi43y10F6e8rqgTRtfg6BmWutJ1XEB8tFZTeBgq08Oq3Ke4zoN43j7k8oONA6koaqgU3b5b%2Fwa3VS8Z5sFHDt3hlnZw0mztIGMXi%2BOZ%2BKqqKghTEMsYeYM7b9RexnhcyvK7Wa6AdbEB5TPju6s5j6C%2BvVcJck0nM4IAeBRd7vNbyebdAm3M2zNoFVN8d1%2F%2B1AOMHnCI3%2FM4JQCYS2BSw61cNjqJmRO2Ozn9%2BEtS0GuTOJLBvA7HR4JCvJem0zjZAvhWMx0VOohdYzdTb0t07v7H%2BXgFUNI7KG9Mxk22ECIFYSL%2BP6CCLOD1V1aCWJx%2FROgozJMITf18AGOqUBRm6xqKfUAR3n25criuZIOEFoBg8Xj1%2FrSKTgQoO%2BMJgOOWJTgnjVcKAtkv%2Ffjf0kEf5X2Jr%2FLPoaInthRb3ORzG%2F4hAZLHRKGvznfoP7Kud2UYOtu1JLt8NebeYMnqgcmpHyOfdYSoC9ZVMACmR%2Bbsnk86ciGobqCo%2Br%2F0iVoNN799%2FEQMPgXu80mCcXMF2cKbTEqBKpWBvFeTUuzhmWyULNkd8T&X-Amz-Signature=4b9ffb8efa67995ed557779ef1d4e866b41b209140686e57849196ac76b71fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
