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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FBHVEP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDezsKAAIyeuEeXTUJPB46s7fkNW%2FIKJMJA933bI30KQwIgH8fCW6CpLnEilirIE9vXdPxNIA0wSLNhsADXUTBeucUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWhPioYKniK4t3FrircA5pkEZxBdtqohAzBUBiBXlaTxPBTLgxfrnPYTTDl0whiVgeF15rY33d1CdzFi24apCUL2RlX4NMrUBiqYCo%2FGBvu4E4DLfZQUnqwDEWoeDRHOLHThs9d7O5QynK5d6%2Fl3lhb3Az1MPmaXts%2Ft0v85hobriQSnH4tiUqC80ZP2w%2BlcIPSbbN2kGTJemmttZr5QLMVMNHciAEaz4Dgnj5yo9nKGeU%2B9H2LGq69mi6cAeohHicrzX%2FlgtEO0T%2BbVZUUWsqQ0QuMw3i%2BIXlOTdSR2A5KZWkuuhQB87appV4fC%2Bd70IsQt%2FJufirNoIDxYkxpB0bHPAztVnIg1yMgJXHVVTcH5VhCFgqmI7G%2Bkk9mQ5n4m6TIzhconjciICTwWyy%2FWmkn%2FuPUrAvZLPuM1LgQ8iqRKY%2FcX6kmtHXKNEaueaD50844TfO0YPwlAZ45XXGQ9WB9DxpKYa481Kbp9gAO8otUOl0hJHblpNXdbdHP6Jev4EKS%2BmnhkDRWwcgihx%2FV0%2F9zxZbDqULDLLEP7FDclOg1%2BgYd%2F1E5L17%2BNv0QARGCPsKKPoBglrqaqkQV5PwOePrPU47i3rBkopoahhW9dDtkby7uCB1EtyKOTIQZ2vpNfBVrEi5ZHMNKwSvfMJTk08AGOqUBw3xqoFqQTghS0gCBKRdMpgl%2F1%2FF7MN3zxpnQ48PCJbjfvUDk84FfKTDVVi2Zv1HfAc0Rsq2zmF6zXaIBrJdZnbJoFkocJuUQm62kgofq9Dnanvy7HIuYDvPUv9r7JMZjkpfKrJmzPuI%2B7XJCU9AHr0Pt6If5JIK9GqIxX1dUe4ijn2%2Bv8iEf1bVkaMoedX2zx5CJCZA5ddYOr7MsEmVK%2BQCrYIUp&X-Amz-Signature=d64e499a384a1c0a35e4706145c66e91c85f880a11eb70bf0541fc04017fe2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
