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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFYLM3X%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDbHcl7xfpfm%2B%2FwhH7E1hQEvGjuAYkx7%2FM39wjPuJIiPgIhAO%2BMLR7uwILUWxUC12p4GYvhSQa%2BQSmfC5Te%2BvkfA7w7Kv8DCE8QABoMNjM3NDIzMTgzODA1IgxAE3p21vE0JAzKStkq3APgawWhnBAuvkE6yuaRjy6HmbGc2xGCgOF0YgUkbn2FVPeAYx8FMm7Ezoxzb7DzfJJltjtCE%2BnNoADxlkO%2Bn7Ru1Me2iy91SpZiJAIhWnRPRTTlUP8aLY%2F9Zjcqcg7Emu2CaPGFEWazGelG%2BHbR%2BhS%2FnoFu4SKWScBMDZQxmu3BCdPewbmNnK%2B7kZQ6C8gMMA2fqoXMmbQZ7eVeQEeFkRfbLbSawr4e9E9BaRQqYoNH6kJnb66IWHMiAbeXHckTp7qCrw0KFyxLorAv1%2FYYwB2OhOirXmnoM5PpYNIG7vuC4imBx5EtT2F08WPcu2QGy0sOqK68EHR1JyzQIWw3SMwMQKXBPlEV2f3iOfOe9BfvRAQdi7QxoKetngJwXzwCOkWvyomkoDB%2BNPWcPVYVaEvZNqY9oL2%2Fzeqp8HuG6FH8KA5SHnFTperP%2BFX20uXKlj1BN5D7GUdxWfoiaFlf%2Fm6QjGb2W2xpeoEBnYiC%2Fx81qyS8Nx3C5JPZOYiEo23t5oFtsV44oWxeEAgbnPgtgKZBY6rx1c16B2movA2NlWsKRvFT8X3cEdpAvKsIC25ByhZyuPKSbGr3SAeJbJtqlFev33g4O06jTwpbaoo8Zt%2BXy1xouFufMvgJ44oWajD2gfm9BjqkAVQ7J5TsxIoNlpYXbveCeNwH2m0bz63LcipMb31em7vhm4vGeI2umAb5IB3%2FYvlJn2Qh0Kh4Q0ZjBRdRJUnIPMegf5696FNLlhRmXby6BVdYluld1uFCoOOAdy%2BcAGNtXF94GHcnj1F0BEoEepdAbkBTW3FqNCN%2BcOSmsTvITrmT7Yv0U2argw%2FseIGBQnSw4tlPfTQ1SGcM9OGc6cLZ8pcTnchy&X-Amz-Signature=045d04cb4cc06e3a8dad1ce525af94b0ba41b74bb6695e33aad028fd3a7beafe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
