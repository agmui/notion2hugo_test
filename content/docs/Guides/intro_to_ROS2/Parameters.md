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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZYNIUL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj8OvJdW3inVQQhT62nxzU3h%2BUNsnXYIjg6MpfKlngXAIgPtyqaQApzcSnoEYptB4NydOC0dhLiMQiBqZ25XZ6Vhkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIa8oewWtxTgsXiPQSrcA%2BH%2FcOdDygbH5npzl0uSxUElOoJi%2BLeJdeZN8E2wptca%2FcosYp4prNTfqWIAyNge%2BmV68R9eySEs1babX53mMYUNAd1ewfZmCNRGdu1t9XntD7c3vgvKQU6ZaPK4YGo%2FA2QKMAQSXpSHOhuCBp2ax7bQ6LytrRneosEfMqKCjMGd4MOO796UMdNcn9t199%2Fa3BkNg8vZuXkCVUjBSjS8%2BLJa%2FaRDQagKJ4f8%2FBZFSj6MBXDooSgOfladTEG%2B6Jhsf0WzX2hSUPgy01ZsL0R6Mb6vp8Dt%2BGNllY5FKjtHlmCY8TWmDFFjjAx2bGkBHc07T0CdrlLQcy7MDjgIkcypT97Vfi3fnt8DFw%2BvOBFphSMuSEzJQ52ZexZwXokfDd6%2FjcT2qi%2FWcxBYHCg%2F8d9R5Rh%2Fy%2B53asZgBEvo12OEaWej6T%2FNgbbK1fc9%2B8%2BIsamr98gcmGnRLL1csxBGdHWuSlfUnHq75%2FFy9AgbAKzvd3Hb6WupH7GU%2F1xya%2BnA%2FIb%2FxuwqmWmOg1AxL0oceJ53MRZUkWPTmkO9TmxWCePxOJ6c%2BX1dDu0N0ecRyo8aN401sOWmIwN8kG5AjZQnYe8Be%2BJdKsWvsTTaC67ZweCxYhr0aLU3F8w2unoVMw%2BhMOii670GOqUBGaQzx4U86UuQbako9DU%2FXRAnyYR7kI9qrlvkGzVGMc%2Ffcynz48rupNSSOb7DadJF8vggtyzcHCDgScjpdQjDiXDXkPClpPvn8Gp5%2FPpQEj3fkFlTu%2BRg0nhF%2FNzAp4c1SNJSLt%2Fq6HCfyA%2FJuWTUzfM%2BW%2FFXioj5Ctk%2FbyL6uSW3rakQi9qQ%2F5utCreiM7VUSzi2J3EqGV4fEPrGtc9E51ySzbwo&X-Amz-Signature=4082171d3beb6967c24499f0dbd189fb06dcc9dca59d0f7032a73e830b5cf81b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
