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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ND5VQO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyCWHp6jLMfJckooaq5hr1QROzWyZVncrtrN6%2BoeMASAiEAniEIjrjv4QRpa0zuNxo00cSJJyweRhXu8woAHnhYOcUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAh7VyuGGjuPa8%2ByuyrcA1paiApvMMUW%2ByGm%2FfCxzKSXy%2FPodzck71n1CO5AZmCk4vl5P%2FItibv7bfT6tHUS122Lhy7hNs9fYVFb0IAW8krhYBJ8Kb1pZRths4v%2F%2BT6Rp3vM6cGbGLkCMVNDt4jACzlC89FPLQNyTX1hHfLTHlv4VA6ef7X0bjAg2%2BRWCsVEUTSsL0oI33zxWKbU0lcQLq7IPRt4FKE7I1fm7F3d11oueM08b3l5AfFvP5EzQZTtK7e%2FgnCa4AzlK4znr2WyFVx8Dzew%2BQ5n6eplEGiA1xWmO1Cw2XbrLO%2BwdhwIm71%2BEQdiQyW7VpjQtYsqFV%2BU5Sn3%2FB3lXSah5oeDixMGbSbkVc4MGb%2FlEPymcqMDU3Dv%2F96fZ5fO7KKEzZ7JRkWYTOsKHZ4wpBboP1MoPkczLcJhUjKvPKU%2BrdMZA0ChThZy4a72X%2BFZg41Wl8NekLAN9H5SFeAZ8AzLK2odbprq%2B7mRK9mRnkvADGqf5GGIlIQdQsLcM9vyZQhwB%2BAofJlJ2rTLEF8wXSxKZ02VCSTdPc2jei2rgXvNr6DgdHOIvQ%2FyUTu4HU67tiCfkSsK3fNp%2FGQwrrsZBjO8uU%2BpUzyMiSViJAd2UiUUqRlJ3HgnWf09P43fLCqLwinot%2B05MOze274GOqUBVFTLZTCCEiQgW7KPo7BW6IL9whFFnsn68pyLMhnpjvXhzvZjIahRw0Ti39SyI9xlzO4AOBe7HWw0ozddXKfHsLEJKsz%2BYJbDbFl%2BOMilNoeYHQ7aY%2F3i47TzOBeIa4BrAz5RiQUPRbJGZmxpEi6bABoyZDO32pJ4o0BQfWHgJTIsW%2FJFWK2mYmOG%2FMP0k3aVbSJKZrnq4gqXUWgNO3yrdTpop4wa&X-Amz-Signature=1e46c023dbc82bccec9242697d6751adc8668d4065762a60a852155fe96e51bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
