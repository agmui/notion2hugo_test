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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRS4ODKT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXw9TxObBpGPGBct7AwlQX22u3Brddx%2FFPNBtM7wfKKAIgCIUwKoZSsdkMz%2BuxD3u4fxW6VL3sfNYJ3kOPvoxRPgsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsQvu8LklrPd%2B7hoyrcAzISF4TIHCtVzQRBftT0X4shaPcAUAVrL5cLXOwMM5IJ4SSmyOb5E9z93bUtEFW1sApwqCBMuREBo36LScCk%2BqH9hhqW4ObyKE%2FrJhwQwaj8yVeg10YxFNo7rWiAnpHupZPcfsXtoaftK5yVDdVwZaaIJbEcbSTA7XJFW%2FmELq2CigQkC0Vo3GzjgUr7U6OodIArzY6FoPLCes1%2FVhhw0jVpxD7mB76nKwcIUC65Ll4IZEPT8g%2BuKWrsymnEykgmV5%2FODndxA4vLi3cSKI84BfP%2B1gK7K3%2FlFo6hPHjB9xyQVaDLgklTv%2BmF2HUoD2xv09M9YXkpvZMP53064qBXJU9AXyXEqlywmkbVprVQMbj%2F8wJZr5FlGf1Q1WkUWmemj0q4poK%2F8BSGpkmFXbMuMgAvuUiyCCEpa77WMsMoPmrY7GP4OTXSMVcR0XqsA9F7YXDLTjtJvjVh3Y0mrCvUIVZ%2F2Sdues5xA8u8vVqhdYSpzKJN2An9XZUHWkzizbaM%2FmZDu7v%2FJDOWSODlXEI74LenFZ78tnBbVXDQnYLk1MY4ogBIcNUZ1YKixzr%2FAzBu%2BvihGfP21Zzi2Q3bjkbTbDXFKcrqMu%2BZt%2B6h8IM%2Fime4uK2gg6puLi%2Bx3rBQMPq0xsMGOqUBpkAhvAYF6ScVgDFHrfbxck6Ac3bHEgoOyGg0gJ8tl%2FHaPbqfrnC7eald7Bu%2BQH%2Bjn2YmzHnHP9sk4P7sfJKx0%2F0Jd1yk9Sbf8abT%2F6RTvhRW2xIJSNiPjhkya7h%2BhSecxnBIm4JR5ow%2BEzMtYGClluCtP3qRisOCg60wrVj67aZOOl4Uu1%2BraSHZwtIHtNiyswR%2BnK%2BGjgZSqCYr23MlDwoBAAyU&X-Amz-Signature=3c672d800e91d1c41e607c248114d496ab3e775d43f0c59894fa364ad65f64ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
