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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJLUMDE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCUeteiVJmqeBLSauOIb7FZSQZmO7bdWFn3jintr6tMwIhAIJac5oMXp3tBrISvIG6zs%2BkhMS%2F%2F%2BRaG6kQ85bG81TWKv8DCFUQABoMNjM3NDIzMTgzODA1IgxyWja9C3f5UaiQ2w4q3ANYYmnHct%2BW60C77uKbwVOThyty5nohrG0x4x7%2FXnCdz012lXDDaR0qvA4FvZMdCuNLDddXFYb6LEoNjUwymbUktdv0YjmvBeDbmDJYpqRq%2BBmeveLC%2BiFziXdO%2FOpymYdfOWo4FYkhfQfFFSB0VLBb5JJIgtO7HPOdEe2OJlwPAPEVm%2B5xiyR1qK%2Bu9g5XmKHqHX9GTquuFRxbui4qgifjxihadG6GewNS2pfbX67jkOVX40PsUSObIpII88auIYK2Tit5W9dAYRtSHZsmHuSip%2BhjOw%2BgVH%2Byg7T1UW9CRkgRL9w0nJiw2UtK6zd2aAUDe0xBmjWmFqnhk72nQGOhfZ3e7ec0hq4XFPNA6y4Sdi1cIweQVfrZ94cV5rVMO4bHnk3Oc%2BAIQJo%2FXxv3cgynpIJW5Fno%2BQHty8eAXV6l%2FaZqbBowj4rlbLdWSQhnkr7rejnnYvx7m%2FPXXEk7blgdGePU9Ou6Sf7fTtiobIrzE9D93HVIXvYD4NVBJJYLx9sMXKGMqH1NHKrDgggi1XOlEdIvxoA%2Bmpxtdk%2FmikaHB6G%2BsAGJunCY2opUXdR%2FqKfX%2BpByn8iiOzXGHLHNGqLX7D5EkQv9zwfjjA062iy4y5wRjIR%2F0cgOSuTxfTCm07bABjqkAQyuQcKFXXqYOaVaXkPbi90QVth1NMICRGWUxM1K%2F8t5ANCQbbKusyr7BNSGaJ6UmADHRyHDu7MvyV8kH5n4zuk2osIggoLMzuoeBoY%2B4oZHQoZ%2FNtAYHqMaOA6M3wzSV27Mr5TjgMywr1WWzQ6boTp7G5QZu1biRFA6Y8ItP%2F0nIQ9xXikH3FAXwJAcMBuL92Bc4Zvfsiex%2BLzMNLYYxNQOAm%2B2&X-Amz-Signature=6cdbd18a3a0f8da81264472dc1da076a8f65e5080ba6600f619131ce952c3bea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
