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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XB7YLQF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd2iKzU6aSgiG9p5ZqhNhVio10dOH3nLLfeOqeVOB%2B%2FAiEA%2Fy6aWaTyleOUoWqjJO7Uf2qBKf2AOQ1OzFWqiCTQ%2FB8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOX94ybodMa8Th82YyrcA33tMVZwJesRlOhshBejtiSuYcUNM6d5sTWUzJ2TPWJBKN%2FGSPYK62zwkPK7JaP2nRuiwqwZYEpO9nZnlJyVDfrSs%2BJMWR%2FRcHjv4qLy38p0FQpr13WX4a7RUAukTzy7bmaZFc%2BvjC8xxsedkVQKMr7HXRu%2FdT1NYRnP1Drcc2qp81nec4Hb9FKselEHUnPEUKBoJNEBE38M0yT5uGzTAAb6dK1gGRAIfXHqmprDjjCXmVUYkQ2b5ngu6vRmvpSv2YIKlllWXTegCv5KKorxG43xBfLCNf6LAQ%2BaOOJeVFYkHHfCJw8NYz0rK306KVhXifaVKGG5ZUUtCCODQ%2FAaTFeDhNLi5I5mEUpR%2BoOROZUebyyDKdf4Aq34mtr5qhXtk49io1D04G3qzceNVbsUwhyldejP1eK7munLvpNMHFoxCC6XeBZkPHIDrjkJvIzwelsvsQ0CN7hkKZCxtElMQKZVv448RTAGV%2Fv4DedNPMXSemwoWlK9nIQQKWL5pr9jOHszE85g2t1ID5wY%2FfWdOFL4cMqrgT35lQonWWmiip5BRoNYC6DLmPtCnL36f6RiItT8lhzhnLDXjcBNrFefbz8vwxH5oHTmRSZUI2l%2Bd96UpAW%2FwJV9b%2Bk%2F6WStMOCX2sEGOqUBaAYqpR9Bhf3KGrk4NYJ1qB9PMM3eHJOVgReYXlX5aSy2c%2BblDU%2F4RmWoeupi%2FDWgBRpIG%2BPrRoIgb1kWvsmqhdtk%2B9Uw2W7cqo6p1GLuou6HlDl6tEbkNECLAh%2FN38FGVICwwwsMvwSOshsxP4PbG77op9xqMfaZzcoTpsZHZK9SDVPF7MElWOapw9EjuE%2BsyTWwdWQ46u37O5vR2c3Uxxief2st&X-Amz-Signature=3600e8997fae858007a09c51a102f25eeb198ea7712707aeaeb33a097296dbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
