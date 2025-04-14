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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN4MVSA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6yJmG2a479g%2BqscpWb0MH8fPW3Q0PfqNu6yuCeT8yrAiEArFLmjzP3MpDF8KL64JT6KmNpFrwcC1TsyC4tdynm1vIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEc%2BJTrJn5Cs8sP3%2FyrcA5bh1Ieo1V%2FMBixLtMALZD1fE2Rtvm%2B0TMEaB8U0h%2B6FEC1d97lK7g%2F6vyWjpPJKt8mrjkku7m4ooEi2St1OeRnhWMDHQvaYMLmak3QvV9ub5YFohnMac4G1d95n8%2B%2B55%2FTtdkXtcotSRDozcFsSaHAPRJc9%2B1yUbWefX%2FJCyPZhf8CqqhaSu5nMe7Yqpwl5AAIKLc9rVGp7TaOGmtijEFjWbXuhlfQTMhXMAQt1g1GxlxhVFTxyV%2BkFHk%2BHi5uxj7eUMZXQaYfvtUr2YLoRYxyfW6oNs7OZybBYKEdqb%2B%2FNIpbWjHca158v4cP96EUrhqRqGgquscPFcWGE6Mo9f0Nq6iPzpgXs9Pb1%2FZvEo%2BC7Wffa0gsV%2Fg7rA5Fqtgma9lDZDqYVcnsxIAX%2BeeZ3EMGz8givI2h%2FwmCPa2VNON3F1RQJI%2Fc70Sdf0ErcDLQhVf0fulRlHuP6LWgGB9urDoxz5BeQP85X6cld2JhJ1lj9srjFIFXMbe77mOUSu3lT052BCr%2BbBQMiJ1%2Byw%2BZlRjmKSt7PahztuaOXYjWXOAXyt%2F76hL1KXTAAJhUZsg33JXbLvGuRq5LD35zRaK2KrwgpBS76C9xBp30Uyykk3U1TvZmUkcmCYciPwo9FMMWo9L8GOqUBDkVyI6MIBzUKacpDC1WItjDe5enl2abqfQ8E4HxALiRiWlycxzPYWXhSoEGQNttPO0YEkvBPBdPjIokPDHsLUnBjTBuGLwQE4mAiz1y2uanRZlWU%2BP0f4gX7eOkiC4Okd3XAKwK8KxG2gfgdoEFcineSWbF0Cii5PO6mI2SZ8AFFut6wC0hnkv2DuUSBjL5K1Du9lMtY40ngqkT%2F1J7F4%2FWEqks4&X-Amz-Signature=213452c038d4603735e64c78fc48fecd8eafac88d94f7fe4f318df837a25d106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
