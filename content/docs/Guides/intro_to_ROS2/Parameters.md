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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZCECZO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0l9KeKg1JI0P4WZ6zYMRZISWy2A62u%2Fr1d6nfiCrBCAiEAyHnAk3Nuvsio4WZaaZfOCViNiu5VShaDw5Jp2DYox5wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyqOP%2BQpBATlyZWOircA%2FwKwJCbnwRGWRmZbuw5FZW90%2BGP14%2F0ciI7JcJgu54Aya%2F%2BWhuL6q1JkJOl42N1%2FQprFuhQ1Sw2cAZ%2Bu325tnQzbwvMvRiE8O7%2BAHEUtpuB%2B9eG%2BzEdAlAJO3AVzIbwlGEZaKBleZBEZkzZt9JZc4Q8P55EOG05%2F0qaJbBRobwZXIrSzQ8gpJ5goiZfC%2BrQ9mRR%2FOIEg%2FDDkOd5yWpwLwh7%2BnzomfiRdA9uxoTKMrGXyuBT0WfpYD9ZSbryrtMajTzYtziq7nabgN2ybVAdflKOmHZH06ZsaAba6z%2BUkOG5Kj4SHrDemAsPBfEf5rZSpn8sYwkjwwvxd6gZXfbOXwmZbZ36yQXaOoIfgsCD1i8K9KBOi%2BRMEIAI1zzpKKxHDN5u4Tj8wcLtU6km7g4Gjy4jg8tILEDQrI8bP0zpOY8SgL57Fe0E7w1bT98qOjlM%2BOQsrTKxCexBqctsZ%2FcLORve0kHndLlKc8xbPpXL66ohNuuQAoGalwAN3FnBGhqahNzVJ0ajbjbqe%2F5lWVyK4fly4GZrcewpjWyRmrP49KKKMIdXtZybnxIE00%2BXI%2FtkIOE%2FDHjjRQ2HL1YnnzyZYaZJ%2FnOeo4Nu7VAgG%2BYsSfwsU2Qf1aj%2FVrIfjEjOMMPg270GOqUBYuCpTsvGEI2V4dK2RGizAuqm0hjEFNIbPuXONv46XQJYrnm0up6WZ7il9NHrbjqGantIRrHFKvKSuxyoLro6EDK6Jzn4X3Un%2BXIsUKeDDxIdz2T1utHp86KrHjduwnfJuXTVtGNvVGDTAKML6NUZ0BNMpd4Qrcnk60Cw9bs4RYiaQH0JI8CViW4dvJf1Xqj%2BxQdes52ej8ojcR7FwaN%2BkTs6XArd&X-Amz-Signature=3a3594322570591b37389da48046f9049ddd63d7d2c7257f2103f78e5d400816&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
