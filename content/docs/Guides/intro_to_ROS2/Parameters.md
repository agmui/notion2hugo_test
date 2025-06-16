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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2MIP2J%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBGn4Zive76%2F8pC2O%2FBjh1eF1T20qEWNtW9ndL%2BCsAKAAiEAwEcfR0lRq8%2Fbo7PZ%2BmWKRQ2gKHggJpV%2BqmYzhPNFLjYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDL1c%2FExmkwplF8GFKyrcA6mpEkqjrld5uubYoZcu%2BhZ0ZPQEK6Mpz5yI61G0EHZx2xVzq6mDl%2BIBi823VMb5bQSX0XjjdIuUdukYrG8%2Fg657TZZ%2Bwzbj8WJzqUGhqaF9IvkTzOMHChqJPmK9JcKZX%2BtBXsDB2seC46yI6Oy5gOblUKhDyTYde7kIQFuiwsDZ2zegThXL5WZH4PlcaPigoHR6PIbTVBahwdc71zmXaw689HFbYmR67LrXxt596ih2OULPbqbH7f9g7znE0yAxzXsV72LNYLAmUXlf0xjLoB9R32tKQyqokuDKnkzcvIHRh2ShDIU5sdkDHHlqszHvWd9RQqH%2BGXIWorI5czvXwSGUa71ZwLY7KUlO7dLGnVBIXYe4xJ5YrLgNiFMDi%2FJxVJndS1AhklS5KuKv90ADkLV3EW%2FvTutncagW8laBZC99nkxMr9UhYfQ9Xn9glN6CukgNmQxns3SRcM%2B9sk8%2BgIYP5XFKJH09mkpz8suIqx%2B4zsP%2FtJ50CBnxeG8TZF%2BBTRr6e3R%2F289sqItlxLXULAq0K2UP9SrB9pvBUHBwjMZ21FCYeYcEz1F6DRyZI5TQfcI2kcLnz5uu4ocNvEfXH4O71Tm%2FHCEMRy1zNnyXeUi1M8q%2F0G8yJtUHo9xUMJajwMIGOqUBcr1xolR9ci5NeaQHLwVS%2F76fD2cCbD676xc5b%2Bs1fbbm7vfPSXziUD9X7TvMVraJ2s5Ilz9ccPAibKFnxSqlXsjXKBk7Kd9a7S7rYeNsDaPrIfG6GI5cuLzz54CYcnQp%2FpZGn%2Fawf9ScnzPZ9gMv%2BFyWTKramaui%2FVXBmOxmyI8Vf8%2FLJuK2gddQdCG4tx%2BEiJ%2BWSBctfdobhVupR5Aw%2B8jdadPF&X-Amz-Signature=5840f141eb41da162e75b88d6a289bff67565983a2891192707ea6173d53936d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
