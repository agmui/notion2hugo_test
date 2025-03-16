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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RN6BZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIw51NENLjqXzxDJokOW4uvqShf3J0tej3WA1bTCK8ZQIgMi5l4Fptrbqetdt%2FBjPpxkzPD%2FLhrE%2BZVT1AKTBKe0Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDM6yBEJ%2BMtqhdmlecCrcA2mOdwwXyUjMPxdhtPx01HED40oO5nYqJ7WhZ7PzsVCJqczGrQ546x1l2lk1e4r76CnVvi4WFAjhUUxYamAi%2F5OHEeRBedKyZylG%2FVWqBAGbSfHjO6gVblekQm%2FQ0fcgMZZ06RwrzXDNa5BDgx03bHij1Zs%2Fnp6mQ1KgpOm9jfCk%2FAI7xymgSGViZ9u43JfOGefUVnEQNm5WkM%2FTDQZ34cGlbbFywF6J4LO7i27xJoxv%2FZS8KF0reevdbrLhA4KE5C3w9U6L5tA4lMxhLldmxJoTadeozj%2F10F7tD3Inwq2YE2Strg1MeE4VMA2ZFBfXguo4MaJ8LO%2BqwrMd1iDxgnd7LvFfalQmHx7LdJ5Z6v5ZnzAFCJOu7Y7JorjCSBQXK6xOdPTZzdno%2FHVpRETfg43ZICJjEtFuo5Y1YY19wBEp6p8MTTIPjEAPGERSEktuuwHUv4Lmr9vjXYJBLOpA2ykZ7uDmIkxwIJRm7E%2BQMOTkQPhkfekvr9B5hvMeokU04FxyajoBg1gkMfydRgVucHNdgdzjkrac0JS6%2BtBvIyUXb%2FLiYja23VEGhtNkU8jH7NPYtFXOFR6TXIsZbOS%2FBuIWxiZA1mhYDVL7auMcPbEjuIiNMwkibaRNuWAlMMfe274GOqUBvbs3EfuO70PXr0VRMEKf3ba6dzX7gh2EQ%2BKi8Nrp1j2EQYjDuKReqiYDg3HDvd1%2ByNlYDOpIzKmZyUHkarshYUDQyb3e0gilTjlvdk547qH0qFlvAJ8PlvrtXan7MZeectHFbJhMKOflsm7l0CYEW7RDFQ5Q%2FX%2FNF3sNHtHXHDUzcaeslHWTSe227R6wGLcJPaVAhmWw5ShHHkqVuWPDB%2FIeeX4P&X-Amz-Signature=68a2b1a5d5aaf7f6bd93c3382d70a8103e6dec4d7ef4bbcd129be25c1432a6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
