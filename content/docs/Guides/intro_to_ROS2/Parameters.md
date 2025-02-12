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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDI6GJZD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2MI16uRPbyCPV92rVxSYWI13XikmCmKnzerwLloDOLAiBV5hLdXQd8o5IqnviAfYbSLDQFAqMtVGhjN%2BKzoqBTgCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRsh3K2qLacwY%2F4VKtwDv2D2zqz4Bt8w7H9gdb5vqBs1EIZO9Byjz6Et13vFGLXRHa85Ti0w7BdiVJAQ6Td%2BDTwBBVXpVLcCCdUv7eIainVvZOu5NqwXewqmTEN9TIu0dMSKMw5nywoFcds1475g4y1CSAn5yCYO1klnw%2FQ%2BWy2MBpcfdp0HJ33TSD%2BzHpSTwJAqKbxAWfdOWgzNm0jNaYu0%2B0UCd9BPU2ID71xtbTn1MsTxNwUoLfjrGn3%2B1HDgzGsIpCB3XW8u4GH9cZ3Q%2BqkVwwDIs%2B%2F%2B%2FxvX1pmZMAoAY7U7uNgZQSa%2BgaNx8Rht5YIXa6qMOWDJ%2FemxrQOJdmLLouppsR0riG1Suk2yoO1hSWGxU%2B5OL4X8vQs1xAH9HvHv0FnnnJTEEuykuzRV8HVNO32iBjxQPH3EdSVQ1TPlPpzgp%2BDZ8ZWvDLRrTVt2NpalxH1A96db58R2zE4PITtqauKyYG5ToryBq67vfnUcf64mM13DnBT7CUaY3ZyYZ94plHqLXRs%2F3Xy84S0lbjNIBKecB9z3uW6SOq7LfsWQlhtg3sTkQGjTtWMxJBp2ifIYrviJivjjUNPtv3%2F0bxcfam61xp1C7AhfWKa%2BXCvFppfhgB0PJvuIJrxUOgSglmUqfBcx0l%2FjJOswi%2B2vvQY6pgGWgRZtk5Jnp6JaYIuGw%2FpGE2nwQj5drOsdvBw4MjKe8T2iwZM%2BYrwbHzDkyPmW0QCJfIsuVbhZ7jFrDqm8dH0qOQxgIubsiizQxLBSaURBgJNvRuxsa8pe%2FPO7RjkO8h5dPdzKlLPhTJ6ei4EEWM5OLAKh5Naxqaicu8Q2zG5GILJ9hxJA546kh7xQOI0R5xHc1XmzNs8jNO3sWDOGn3se%2B5VxsJYt&X-Amz-Signature=0482094d40420d099454cfa2b42d1eb51e0cd2ac8122b709eecc32384e9b2ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
