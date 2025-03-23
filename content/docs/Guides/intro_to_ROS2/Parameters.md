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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3KSOAB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiAOrOQJUcQnR9EZZErtbQF5NLGeaFGgQiuiEaNK2%2BqAiAL1mz%2FJ2rE9axqAsgIqcx8t6KeiowmH1N4mtDwNQavqSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNi3UrhPftzrz67T8KtwDvFJ%2B9j7ih8eDERNFcLt4ok3%2FK5WqGwykOmKWudqnZPfElKeQxNWVdirShh%2BIeEptimvKOUA%2B6O4Sut0A6KnEHcrLfkr3BX%2FSU%2FGYw6paEo7IOlQSlwGOPxNQn6LbxUzsn8BrfFfCup3iFIinunQu7lTSvISWDydxmuCYp3AgmtB7zjZ5E3mJ%2BXoBpjkNzM8zveBRKx80qlYgoEKnfyyMRgFOhiOin%2B2oC5Rnv8v1GHKGfkAo1%2FkW6aLjizMa42cMwWVuUyqH81w%2B8Te94TLlwcCnFN99dxfo6wCLlEKWI3%2BFVOCHcPmUgNXpVzNMoiFQnwAYxyLNFrIOSHjNjfAH00voAH3zFVnlYUx8BEGvGKykGg9Ic6v4AbXZp3FBJywCqJxXGQm9e2sKCkMSs%2BTdVptRnfuCRrypU5LLX%2Bp%2BwuKBnnwzVdOeDgidGLXVDZ880M%2FQjwovqFYTcLbaSRbNnzMW8QwLqmGbS0HbySQdTVDSoJOgX5FAf11RO1uHoHOH%2Borp0po2FgyAr%2BQki98TBvxTG8eyrCUx9nD%2FZE6ZTImMjSEmO85oJH2NeZCFHKbGOcYPS4JI%2BE4QkNhMU5gizP1vW89tAtgIIQskAEU2LEMmARA%2FXhDl3X5jv1ww28qBvwY6pgGPmBY1zNKg892BOKH5MnAYFga4%2BoW8FwWn0hZFahYdNPXx4jpO1f19134OBQuI15yZuy4DOnmSmqyOx0OWRQgEHtJFM2ZTHgsbwJvnCnVp3IrAA8YFQSy2%2Br%2Fob7ljHX73WDRfqxkghUKBpSaR6H4DbKslVehzufoRevCb3SVmq8JyhqbZ2SUnbj%2FW88NiwJzjR9dsl55pVmnhCSNuKo4jg%2FRZreYa&X-Amz-Signature=1972e99e39d3f31a28adc4831c5fe1591049ab569f5f69012db76b22f8c95c45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
