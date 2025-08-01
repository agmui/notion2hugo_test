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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQ4XJNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGyOtQeTAK3Grd6%2F84x9nx5nVGBFw2RH%2FXkFoOrWCjMAiBeFnmkd3U4iMrrgfZMcZ5xXsmgvPeijzpY9rr%2B9S92wyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMotTSbrnrWvpJAnhSKtwD1X1T5%2FHao8y1JewOFIcS59adnWxs3seRjiHK%2F7vUO0yExDKqqxOvwJoH1CtOtA%2FAMyZCRPAOLHq4eJRSexZuZGVauMFa%2FBuc5YvUGVV1hXCDu74RqGXbpr6XL9t8%2B1JgV2o34ZmWMzWKDar1jJ2nM4y%2BjFPUrHFTlD96sJ5uawmQ8LEPV5ZqRzY0bdxuP9T3cBdSI5wQ9zihpl3ft8zzGDfDC0PN8AUaoOboE1RAac5Sepaslld8A7gp1JGU3BvTfijZqsPoPd930r9H%2FWV3ROoVzOcNY%2Fwl3X3bVcpiSRzwfEEY2K7ocgaPGCDE3lJlfnwVN4m4Q60v4LzTWz4sR9FR17%2BgyNeOByd8Pd4%2FNOBXSB6bCTnQxgeVToeulLdw1pVl7z8ILZMEvvRDl7qW4Il9oDE4y%2BzYJ5ogmFSxTWZrWFNbI8n2yRzPpTUyIsmZeHPdOagazUXySlGuaqUz%2F%2BglamAF6h2frt%2BgiCG6GxglPoh9795a3ZLUEdWykV4tCYcOnILMiv1WkU5ZhbTyjvxg22J5o%2BMF8wOW9LCBq5oEewywe1YeywhfA130tRglJ8xSy2ud9ueYBnqCB75CPq2HBN%2BxSOqN86Xhv0%2BMbY8ZshFcyrKFHfBCMKYw%2F6C0xAY6pgGfuhV6hhZl0CWfRLQAts%2FnFEos8o%2BVqqaKMiu1N9x8dmcwdtOOmP1flyqSDPivvD%2BEvCReQuJRkCqKAR5664mkIQVXsnSMLrAe2oLYy1LRVLJXwfAHLpnNq3YnLjBizihlU3eogLmLwiZisinJPc6xOGfITY1gZpjej5KY4o6aNtQNG%2FxF35tjE4fTfjC6j9t34pAc1zN734Dy%2FmnN8%2FbEjyEZtpmS&X-Amz-Signature=49694c82e85f4422551d853e5150f10ffbf5e5ebb3ba1ac21c7e5f8229b2250c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
