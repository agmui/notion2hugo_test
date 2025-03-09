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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMML67Y2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD1OvGhwMKpMd4vraamb4%2BY2Y6gpAbLgjWI7OQ%2BA%2FIsnAIgJq2dM%2BofrUyLXBIJcd3tm3GyjT206UURhUtUPdMrYzoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJoByyIcrzM5Vi359ircAx2umTgftK%2FKyyhZSqVxQ%2FC1nFDyCl3sO9jaroNn1WFEMzVhMZ%2Bo1gCG1dY%2BEHRAuzgZd5QAJndIFWoR67BUFOVSgv73%2B0ezri1EtKXWha%2FotSQQuwkO6Oz%2B1PUq7UleR1TnchN3og0ZDfcO6arrBZvfy8oveymTYoBUOsa%2FHBbzbq2E2BsmctYPT2pVRV2fBKMbwVs%2BP%2BERLGNSc7BJ0yjJAz3dOKfDsRXgjzstbVPMatiuTD7Dw%2FBGo2pkMmxNZDH7cQ8SoFEdKLMDTUPpg1Pgi%2FVIqwG2bwTkGhSC3c1R7tbPHhCpZvsarEUq12oz2ArjntYGWOsk0vx2%2BF64BSfCoh7iuOEWrIj8vTvIY%2B7WVOIQlD%2FPYRGFoolM9HDBTj90jIl%2BMVUyExf6cyw1G2n3aqaaa0F7sb3PlDKB9sovahgBhNUmlkuuZvZhpv1eMIZVZyq5CtnNyJEA8zl%2BIlgn0rJhxS%2FEU9zoE4vL5PAsoyQmPway77oQab0cFoJl0Fg1gQIp86dBRakmTpE%2FqbY41k18AfhRb3z%2F%2B%2BboVYthyoqtTv5yshr9ek9fNDpezHb4hSoWubo0lha%2BU43dI8T%2BuiM%2FLv%2FJ6THQ8Iks2I6M%2BxV%2FOOgbNKyGFgJAMOvrtL4GOqUBIti1g1m3dBMcgT%2FQUGBbby6aBbRGpoLenvg5GMtX4LN1nwtMclDPOttw%2BwWJULKkmMmysKPVEpPrWC9RMZoS3p2nBzKTIpoOhgAJr6ycpisYq6AM48qu7qseUYCDxBuGNquSc4YaqKpKvBzZyGNuPaxLMpbTQOpgL%2BdvreLuB9ycjByDtM99v78co3YOzsCXaFEf9ISQko%2B4gcAOhL82lldOKgDD&X-Amz-Signature=a2fa538684b16e26c7c768118de10ea873ba411b8195b4a1be94b16f86595508&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
