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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOA72EBY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAV2Y2YCsv0rDGdp4Muxv0dvfSqeK8ZbWB3ZhhRiyQuhAiEAvigIK0KAWI7lcYDshGNlRuuoNS1saRI%2BEw5qAXssjeIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1pN3GEWwKZt7k9VircA%2FDtO0Ie2NZ2LETbwchfthJyvSP9AiuYCv3cV7%2B%2BfE5d35xWxxKDWDLABLw89w%2B6%2FeTzoGH%2BOwxeOXKqxnC9j4blJIWJ04bms2MbWU8FlHkQjz1otno5RfpEKPRanHtl2HIn2%2FwnRhnVeaANrfk0tbhVHTbxQLq0lY55uvaCA37YHdxQagJ7dnTjiZFhk1rIvz2R7RbRlr%2FNCCmitTGMEdCp3N%2FRoPM%2F%2BqNpaLsFxH0iKSxxvXbA3lvE6VWkUhycLbBn4OMzAN1r29nRkKJb%2BujPyzdHUq2S5u21S1JIuDsbOVF0bwhVJdrAb7SaqgvT4olZQcZ8FUNApbCEvWUWMXbrUZP%2BVFIpZE9c7KxneHL4YOnSLAYqzdYSISwE1HKpPlbVqsh0YknCai%2FD5LkBAYP2D3%2BdX4Tjw7qZQIae1OAyQprHukvbJsI0JyX9LO96GvTXMuTpYXMRdnjro1P0muzGGNJZCuxDY%2FXKZj5XvTai5U1MpDIyBQ6UfLXzN7bZL1PFCGKiDBbawDEWg%2Brhotu4YEhoL1gGJT97ZWaZcnOoTzxQdjVWhB4LgdPM%2Bq0CFBPfqt%2FN3msp4DhXFAIb%2B0FfFPbEUuycwnlLH9%2FZq47kvJPwQyQIN6TomBSGMMWG1sAGOqUBPU0Vb2%2Fqj%2Fgw1KAMrqjlKakQ2V2PCi54oZBedRqo3tQ6HWxi4actertkT%2BRLpTrUrAQeGtUiZcqakYGJOyu1xJu9C7P%2FmrS2rENNJTq0oacgZQElbLNAYkPdhUt0%2FZkYmIkOnacZQFz7%2BL7rTHYldn5mZ%2BbsnueGiEToDup2ntc5POeA%2FhtlqNdQ%2F9ZX1RTHPkzDy08zlmmw8%2B6Ci%2BEzu0VMn0Di&X-Amz-Signature=9aeea779732239f693959bc58d596e0efe7f670ee714db56b616cffb4e2e7289&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
