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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LHAB4LP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnZIQzYcJPXuv24XR804DJVwgbUuo7tvI0ElZLuqGF1AIhAPvr6WpOuDwH3ArjTkFj0dhtpebcehAfT3ql2N893C1HKv8DCE0QABoMNjM3NDIzMTgzODA1IgzCJ6K3WBGo83IVYhgq3AM5M2A5xPt6r%2BGl0%2F7PG8HQ8SO%2BGL5oxVK0Q79UnDkIPbS5bZGjvnlAG8P3wbych7qu9jfEAhMQofGCfXNksQ84hwGYbnkusIVy%2BkO72SIX4%2BEYTDwtZj14Q%2FW69R00xoWeJz%2BL3uWb9Jenc%2BGhhKdhge6RVvIyAIibghgxrTRUcV4D410v9QqVbknIQPejP49cvNxzYlQZj93yv2j1MD%2Fj66IAHUqr98QNM0%2FpdnIKQvhK6WOuKEnafxUCUi11Mk1hu7wvL8KZxjB8d%2FOJkUTYKLk90CtXgD27sseWRlcfC09MvPR8AKnaAxO9O1s1ATAlLcC3rrcgzWJECJZ4RdjfQ%2Bjb9xtBNWnPg4WkTlknTIosJxWqf6T8Nk3HP6f%2Ff85bSu2Ox0fKYT2vPqWTCWeq1ee3CUmde%2BVCMzL6kkn5qBnBdymOdWs3qMHZhJ5MT02%2FvDGK15tAgZnXXxbJ439xu5vA2FOksU2oPDD0P3e%2FIKxFLf11vKYyiZCO58qRBpeQaVBnJEQd8vIzsGjk53eMuW4Q6ZTR8MKv3x8PKif9YpTwywhsYs4GcCtsKfJQ5K7u2Roo3a3ymUFJK%2FRXPpE1fjGnY4xptyT%2FLbUE9bEqYkEdiJ%2BkRyV66l3ClDDE3Ja%2FBjqkAV7ioWRhuzsPmpLPZdxqnLLLaN4C8RhYLFLb9Ahqc22OiB1wpdBiVjnrjZb3UjeWPROwc87gFl4CZq%2Fbzb3ebdyeVNBb%2Bk3R0awVRXohUEMAjQDfEo2zP%2BHciUmSe2yqOkR%2FLqCkZZ0uMyUl9QAU66KZRX4IPMXnP6921AwPHG0kD%2FFIPYv5ENcpHW1yEvZJ0%2FFz3pwUPv9dzncjX5LFaVuUM5Ue&X-Amz-Signature=b02e41f598b3922596e06a0e7cd83dc88092ae7ce4b9a6911e4925857c5315e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
