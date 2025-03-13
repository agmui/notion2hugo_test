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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224MSGLC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzBOBaN58bDmlp9y2YJj0bN7%2Fr69A5zC7n7KvC5gmFogIhAI5GMKGa02zqZdKQJYbLjLaxFoHPwnbLKKXoG5qJoTNnKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyKZjnw6TlKQ9ELXEq3AOjz3riXA%2FiePsS6DHp9y888EKW6ycbWbG1NeNt2LpAllJIk0tnXHF8gzU3NnM2URVphatfsytmGSKfmqynvScLHUAvDsfw74G8OW9huGAQ0HwqSc19emMmMeQfTibJSXbbz%2BsLBzdBHUzR8TSlOUQVyX0VsPbiditulTXM4DvZLSjnrq0jbYDLqLIWyCBiCOnMNTmaG0pK32tml1UXD1O9uKPAuTkIT9iMK0sDxV5ZbLH7ecCdmAvliOfMQd0JllrjUvEqSvq2ossj9dYLBppYuiBjUs%2BG4eO%2BFAdvRkOuFo7QnSONcxx5Dumkw2MecHEn58yf5V9d6W4fEclaHhF0T%2BEogLddH%2B9fbibF%2B7rgi%2FK9M49FaT3DurwLTd4sGiiFrqHl2Xf85u94LO1ZXCUIOTWb925YOlaWYjAIg9SQtCH657hKIufwvcu77daNpgw4tROhf7hwjiEp8qxzbpmxfNvCqHiZY%2Fzb2TlrZD7uvN7OagmSnYQ8WPu%2FJ4zcA3sF1hfXvccAaaTNM4r0DHOCWwnYoidYEvhll1J1sx1Exn0gEdcfBwLLpX6Im0ppT26uEx4PIqB9jlgdzcwg4Joj2F3CoNkRa9tE%2BUUo7mhq9m2uUjjdurpafF5RujD%2F1My%2BBjqkASr2c%2B9%2FGSBjHysvVRMWuar%2BUPLnmq%2BOKJG4eayrrr8N5LxxgKOJhiS7tK%2BUKJ5THI%2FFScHXBxlrHpmcHdzUn0xWJjfPfynDL%2FvAvmZM%2Fi8JM56deXWlg7tYsvSHVegYVTbwOZVchAFIgD6AmUgyrRBU83%2FVytqP2JKG05tS1Axt1bC2njiHmLQcd5D7G4klP1vnciCs39GxgbIBYvl1Ct6PPqsx&X-Amz-Signature=908f5c31bb4cad5bb279b0eac46309006d9f1f00f556f58083390613ecac5dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
