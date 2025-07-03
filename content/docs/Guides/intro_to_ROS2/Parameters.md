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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPXOLMK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCRRw1KYVzeHb4jQhzxNDa8jyHACGGO6JreVUMUW%2Fn6DwIgZclps9Gz1Gur25jZAulriJy%2FBMLZoWf8W8%2B1l%2Bn7PZwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOMRJXJUBrpCeaIjCyrcA%2FT0vn6JCmmXCMfJd4FKl%2FANau1oq3A9MIyBmiHPcXk04TjTIXmeXHfIQxyOEpYWPXprmKoOnFmg6fyHxMX34RFXKymQe3nJtivX8Zer8Mfv0tDfFBrhLGOM17EkWs2olE8b7iDkHWpOdRiZb8or4pL%2F8IASJPdzFAmv2cmYml8XxtZ9VrbV2wWjW9kDq9P17zc4MZPNAxLsPzpCTubj34X58FJrLUyrx73AMAOb68MXEdvbOgAM9IZE%2FXZUd5d9iVV9us0Qu78e1Kxg5jw%2FsbRyS1UNwtBK26CTAWuROhnq%2BxDsqkLOMhlEY%2F3jcuHeYq2Qwtg%2FhsPnNBzQ7FkQ1EpOQH66dFxAPUioiHWH5ayko70WGP3dzur0quspbKdmC9XnihxPDlfsI7viL68ltxxUKuxJL0RBKBDjkS2vB4I6GGFNnyl%2B3NvUm1GtZApK6XwKKbD5bb7axqdYd%2By0Q43iPI3E1YoqSKssmDkSmCpI8JYLsK7b24hx5ufikmCPI9sNdE%2FPv9xZJpl%2BVrcsGuDV4lK8%2F91zB9MJjI3E72FyAP673pHeNHKvcXzdiORxQe89AXkBJdC4AkbBZ2YqDPgrJbTOlqbITZjRzps7pwgeLakyBdHZ9%2FYt7eDeMIyOnMMGOqUBcc4961oIswG1G%2BM%2BEwGmiv2077NPTrB0Nai9pfgld4wB6qaKTGajnBbYKvu8NnHclj8qdfvXC7CfNN2knhcmAAITV9lki2XWQWNQ1%2FJxkYRPHgCqYwx4xY8YRlfoIvhPtdR3%2BCu%2B%2BskxIWbbnBfJ3EqMXKvi38rsKuV8OmacxKr1SX7eMsoLRoAOUojWoWrumU73GSAlGy9S%2B%2FvqoYBYxO1bmduS&X-Amz-Signature=06cb22270b045e97bd2a717d114f051e9f0c50d9bfd0bc9b084ab98c907dfe86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
