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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6AFM5L%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjkFevFpVVbtaqhoEsccxtlhFwJxzVkkibB9jnoR%2BTwwIhAONZSi3bjzBM6m4ERc8Dxh1QxxxxmSjP%2FqRKcyxZUfL7Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwLre95w9zqD1X9nCYq3AMcF%2BYFDX9rXIR1znBxYXugQtrb3Lcue2KLy0oY4X4Sr27u7%2B%2ByQ8dKX1DPhjefkAhHCViQuNHeD7NT6HhUCIboCOw9xS4h%2BLzX6mlvrOAPTJHqka92EbCu%2BTSPb1qjHIayNXqzxDq2N3bTY7n%2FQ4d%2FOMDcznGtns1%2Fn%2BVa5CZGfBSHsqI2C%2F8ICKvhyNeOXHS3njAR9Nu5eWW5Xw58EdEB0yXqymUYJCGqZJmk0cTixqL9WwxNePG%2BogQxrjikr4yliwmBO4NmO%2Bfk%2FQf5NyDJhmEUOHEvxEl1pcJ4bSaYdJzgMZ8UBQPeF286f1ndsORI90xFPBeNody3mG07w8OiqdDWHe74GjDda%2F16vi7uZJzqrCOb3z2O0J60WxyBvKW%2FCjtWM6y%2BtJDx4vYI4gui5H39GU9TYOE6yKZu7PdhPsA35Pg9Yd03YxHkMeb0o3hflNy%2BAHfQDzbpyE%2FnLmjZ8%2BPbOof3%2B6D4z39%2BSc%2BPSRYw8rpMRLw9iIh09L2VJILK2hQkB07fhf74Bt7mAQmasF13SNGuBsOPvUyyp9Mj%2B5DlCIUl9Sj3hxnCEx2zQ5hZjwj66xueUWI45UIy6e5MHHfa5PquLmIyqeDs%2BQoXVtw3eX02XvKyBdlS2DCTwre9BjqkAZjvu2yVKN3zZF22OeYUt4VKRXvkPEn7GqqdgGMvnOhuMolJpV%2F21%2BZkBWG6DHQUrl9RX0V6dHzCf0rF4AQpD2Bf%2BKHvW3eKXoojIXM9X1ZVeFNHrhTM5WioIp8rRwmBOsQCf9ucyM0dYD5P513Ck22J3y5Yug0FjiiYA1fNsvMGtuBA9GBOfeafA2%2FzDD3ajLumgdvIYdZ8%2BHq4EVNwH7SiXIH0&X-Amz-Signature=f5c1dbb42cde665d91b8bb4ab78f256f1b7fab192fc12ac0ebfbf2dbcb86a36c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
