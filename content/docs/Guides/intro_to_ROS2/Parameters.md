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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3FP4EJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO5dy4y1n9Z6ACDJYSTSI1MBmHSetKN15fCzha%2B%2F9pPgIhAMCMdjhtGuoMjx3Z4LKSpMWUyat5daOoQyPIpJ9qOZ31Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwWTOSr84dyjU4uH9gq3AN7W0zpmWcsf%2FxG%2BAgpELZbj8pyke%2Fma4nKUwh1%2BUyg649oLwrmGkZNH%2F29ff3jxII2de5Y6oQSm5XaCDgrMDMhqu%2F%2FxXKX%2Fm5YquoaUFtbp8xhGFKnme6EkSa6R6reOGRms7ke6cw9Z7fVS2xHID8ZTKZh6qhTkhzuXCsLBYp3piLLrQ2Vyz0swtdOz%2B4tl6%2Ffafr%2FQSDuOg%2Fk4T%2B6%2BhCunrZyXxq8gPlinNXUYQ1im8sP64rvEpJ%2BSKC4kfxUbTifCUNj3Q3eZJPGNb%2BgRMinOzLTJ1cAUkmacgmUcjOzrdEMdm%2FENfGHDbXcstc56KSAk34fsc09Q8Va3Znqmq7N%2FsBApD%2BqBZMmQDRXmOB%2FdxV8C3NtqdO5O7SZoPApHvAOv7SY4YxYnzHjZBUe9f%2BcujrQVzzG4vtepWPdzPgF1pjJVa0aYwgaGv1l78J1KdUbv5g6OhbGw5m4%2B4jBU9vVR1p0QccKX6Nkob24aiCRbLOzJCd%2FGFKKz%2BDMosp7zbIK45YeYUy80vD8JbOAKQsbBO9c%2B9zykkYftQXJLk%2BEEFPrtb68IUfUg8TdtIEyFC0%2BAYFqOkgZQoLWGNVj%2B5%2FjD3CxY2z%2BsRuMDWFrnI%2Bs2SiaJCePhaPi9tVygDDM4e%2B9BjqkAcgbyQMtbPRZqR1NqDx3Q3Cc2xfAF5tWl04xAWQ%2Fo5XMtLmsMQRRwB6X2sp4%2BvZQezwznnVUtNTiiQmiwrcsGO8XV8x00bnFBDGKvcnVWzWcNZleIdcQokNiPrQI9yLAvzpk1Oite1RfkiR%2BXSjP40dDNU0tECfFbvRvRV95o6anEoV6p7BJIeGH2CYXRq8pavz6YP8Mp531Va%2FkO%2FK7QGpDoiPK&X-Amz-Signature=a9ea1844b369e32bc6e9985b6c84d76a8e408849cd6d5f402f8eeb85732fcfd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
