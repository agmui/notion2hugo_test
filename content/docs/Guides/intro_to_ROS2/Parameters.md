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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDU43Q7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDdPN%2B1t6vQyUkqcunBkZg899nq98CV4pCWSvav8LMmkwIhAO3Z3dDBjBI8HAxjm8xW1xAYcsOF5L4cv4Lr2YeKmeqsKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVXXMcFWWcQXYlu%2BUq3AN6nEM7BjZu818buuIrKFMRo5N6DEtwmQ0B%2FFsZGOk8k%2BEXNkjvb%2B9YN1itfjnJVyC%2BQni7mU65uPh3%2FDiSQY39tLXTbkJI4JyB75jUrfjygXAED7c8MlLIa4zhE5DjjNcwd1TS%2BLy0BSpbnbUAv1zbn%2B49e7jpyz%2FeJGCxTpgFcn%2FMZ9i5G1F4rOgX8tzFB4D2PH71n1vWFHGX3gKRNJ6h9Mz8fU2%2BVEYM70JYQhZh0fFM3ZctYinirj0KPA8K5nroLApIriBGhdAg%2B6xyn6GXigL%2BoOS5yu%2FBNcr3Nh10GKAqItL%2BGZ3w7JcGnxM%2FqScnet0%2Ba2kNXvoOL%2FTesl7Yv8LYluoxcsg6FTCP3VPRYA0C7ZUhJMdbotUL6oRXpI1GZGhxFR7dBmrvqUMzKLhK5zlPL92TcU5UHbYou8FVpxc%2FCxbOkgvamnV08QgVfMa1k1tPemdcDuPX5CfoFJkoEPqNcH8mrGIxmEar8czWSmNlk5puXUfFTiTNvnciYV7I0AQbb%2Frpxiyk6kjf5EH%2F63j6KS3piQv3PaSMiudK0kKR59UqyAXkGXaEU01w4iDWOvqHUJIZOmwmequFFgvXOjt55nxmMSQmKYFBxq%2BBX4OAqdZGI6V6n7vBSTDTu7nBBjqkAXlarIf9nc%2FwN%2Bfu7GIdxsAx9OHHTxw3IgHnyAebuAuNhGFfPxbqmRfIGPpJvoyCnxomQ1x50PpgMnM%2FL30ATl5L6QqUVmNvzqe3CcBZXpK9ZpVQX8DTZ3ymV7g2jzTtLw24ehLFteipHHOeKRYSNV3O%2BIPzlirS5cw9y%2BskuxZomhLIgR71xzO0dqWBv7%2BYeB9wE7HQCWy%2BGimPJxMmKoi7Fj0%2B&X-Amz-Signature=fd793efe54a05c7cbbc4ba5fd99ad17ffff0a0743cdc8f48430e522bdf1a9fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
