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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UNCIVM%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCIaNpMUL5E%2FZwg4Erjz2BhUt5FZTO0WhGO3B4TpvUQIgIgaCvDIf1TLuEZ%2BvWdJ%2BA0gj4OTAa%2BbrkzMH%2BgZwLLMewq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDOoUq3Nmco9VwyIstCrcA9CTE%2FPPsNKwXjnjq8Vqp4b3wukEG%2B288JdsbcPMP5x7HSvk%2F0ghx%2FNdKWQWl%2ByKP8O2Tmgut37FC55X1%2Fn%2ByFraXaQXz2qlCNLzqLXU3uP8uUXkEh4VM79CsVWbmfLvrkr4AsUmLHCW0LaLYji36rPzb15YvpRbdzLSiWX7YN2HCAGLxdrtlIWhVN2AsGKxOV86GxwUEfJnr0IkaBxRsJZx1e38UlZ1HHR1dH5sNa5bi89jIZZeoxwo8XjQQpmaAqRoRe7%2BGWpc1Er59yvGx4bk554Lx1M0Gl529GBVwuNawLjBNTVs02b6uK9A5s3VFdlbderESknPJ8zV5J3eP3Mf4yLDlAKe42Eb1Xu4XXTpKRHcZKGT6dogarmAtVgboM6AFTfPmf%2BhKKLScIrzBS5T0PCqqyGwIEKFx8wuiv2Gyl4hWDsybU03ELCE9qmr3f%2BqgIHaTjx%2F0IwfGXaMb77oN%2BQcKEUJKugahsiX3X9iXfOes%2B3dsr98%2F6sBdVomcdQjhfVac6WY%2BOsdytqfc5nXRwFYQnKKaURWwXjdJOhVEdabdXSwghFjUgaRUZQBZjqYuvnWS2E0%2BDAsRvqEOKzIeZmZhytXHu02TI4sKqh8SYULcJ1lkTQwQARyMIDh38MGOqUB1x%2BmzEgj2himbFwNhgCPsGO3wV7ALtyOr4xzySC9%2ByhIWYWP0lhAjg510I8g7zfAe1yVV648Sel9waITWg109ZCST84v%2FMXWzKNQunjRpdrhwTVsZA2BuOBBB1EPXSmjszlFacSeBSjV6QetDp34lgmTQzBzUJ7vJZMiVG3usyWYQZlYh%2Fi85zieETjcHZla1PAG%2Fpqdad0kyTq%2BsV4Imym9Pb3c&X-Amz-Signature=157860b0ee71821eeae21ec3d1aefed959bcae5df4e29ff4c71bd76382646a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
