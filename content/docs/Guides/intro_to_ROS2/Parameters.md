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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBB7JXFD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe1h8Oa8%2B59uWQhHoqiGUcASF1MYFyf7enybGn9x4%2F%2BAIhAMy00rbf3isVuHNAP%2F%2BVB1ZBKuGDgo265L3jFepgYVfBKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9FIy3RFSOheGjggQq3ANaR2rZYjyyx5K5byNlQDLn79bIL4ovzF345XoHEUI4BmSQa9Fgk7T2ZWhKEVdz2VuhlYMPl4jRfaloGlnVOmpewSo3H92EDsi3TnaaKLqfOXO5X5qSAr9wlkZLFxuyyt%2Baesed47IgfdIFOXiAhE6ftyN0qaseXkGvOasgNYClVK9x87QvhgqDPTOL6XGw2f%2BCnVRWxSWiuQlTDT1np5pYLaEFepsNBUfN39JRJ%2FjjqB5wb2VL1%2ByII3ZvcqhF8fap0Spk9BR0ZtRhR50L9sQ4qXlkfxjyZFj%2FTbchUxGUgD0MDVDj9rQZBCwDPYk1iRL23MP3nUVeXG3I7GCxhfxysZdBS%2F0zJndT9TNAy1SYtNZ8vA16a9Tocn%2FE1pMnCZuXfM%2FY1w85Zqq%2F14Jal9rJv4kucQlXZyq5TI2v9M2QxeAmTvlDlFz%2Fde0zdzBDvfeFIcl%2FskQJEFW01NgGv3f117TAI%2BOiX%2BiUFa4mUXuBzJeDt8qUsFuAsyT1hBF51qlZR6hxRJoT4exKlFKbtJI3TJdKHbVGYrwJgYtzeB0o2%2FI7Nk3mrRd8a7nuJ0PlU%2BC86hDaLW6u8m5B9Q18Q9rAw0EaLnTgALHspjUEEFBn6dbv8q7pkfX7sg6qhTDQq%2FnABjqkAV8MNIMTOaRbvtJy8rUmUvTCCSODG9asTyoFuExsqVWGOy%2BWeLDn4F3U0UFMAjmlkcG%2Fnd1FE4IKpTQd107hXRfpVs0Oc%2BHnRbf%2F%2B4Rsk88BVj%2Ft%2BitauqttZBX%2Fwjaqo3Q8alWxulD5SAyhCMmaEiENFKtkjEc2DHF%2BVYfEX4qNh3WgMczaS1WvcPg8Egub%2BOBPdPBxJgGm5OHpt%2FR8c1ah%2B5Ry&X-Amz-Signature=c1d893b7fb571bf2204fed69168195036a9127c102d07da81fea4c3131ebb329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
