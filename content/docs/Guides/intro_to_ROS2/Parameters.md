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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOGZGSE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIASrSG4Yp%2BkIb6xpBcQ44YL74Q%2BmYYfbCozVh%2FnQn%2FTwAiEAsUoSvT%2BPwEF9DsK30we%2FLANBqmRo%2BRXnWP0YP9EqxwwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0b7wShDjg9D6dCdircA40r9qloCAStueKKUJyGyX0tR9jXIVFggDbCKEpsgtnM64S8XZzdneaxWuIiUSTH%2B%2BWavbx%2Fnwt5NkMo%2FJs%2FFjgxonjarBnagMeKN7eLX96BJPoQbyIy1WRcZ04fr0x8E%2B%2FGS90xFKvAbkQet7EELZkCi%2Fo3gnx9FUTCe78Erxibepd3LgMw%2BB8695vmx0QwPbnUHnwCSTGs2%2FnO9dWxBCWYs0HgSI4q%2Bm%2BuFH2iWjzZgrS44WF410mc9OG8CdsODzLXldOehi0b6NTqfnN7TAVI9Kag3oleUsi8f96VFVDWDCkH%2FWJqbZRSEh2dw5%2Bzg4Yuu2nJJ3zxGOAvHKqNeBJZkRW4L17bI9oHpxlBT3zagqpX3spo5O5MAlpIi4hmPij8%2B4sHiD2dGmbDNNwb01p4iDBejJh%2Fl2govEmxz400gZgI2QA2eeLJCelmJVKJ2wJr7HQUcEK7uRv5JXD7kLr1nMIRLTh998Ou7QPc2JU91xiffYVmsCME%2FTrukRP3HTdWNO5yfj7Qp%2FZlKg%2FilBqGfsiakQUXUwR%2B6d%2FJZuRqVwd1meXkAgCHuGNqOtbGqTpQyCPVgg6ISZPtHAO5BOJdmMN3DXKmvHIL3KneJfz9SaYLV14NFA%2FDnm8wMKDYj74GOqUB2csKODhVYBe5pTjhowSvY%2F4xL74F6gZHAfJpRdapxGlTIDKNsokl5jsIZnjqvbI4SKckjrg942sHMvhJqlkgsvzY32AJlBM%2BtCzLCIt0WsPC1Jw335sZt236w3W4f33I0x8gtKpoGPDjVsYCqRw81z4z6RN8xtdgky5i%2F2IkN7uk39fF2Np892O3wyiwVVzkX5R1sK1VkaTEDeqO4yEAiPFEmieR&X-Amz-Signature=56d9367c0c0ffbad44625fa78ae75ea9ed31a9427d4f507fabfd10204756df85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
