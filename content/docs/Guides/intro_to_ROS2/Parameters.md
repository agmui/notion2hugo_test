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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVG4O4P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCMydI%2B5d%2Fjg0vQTIUpay2f%2FH1QSqyXVM2C3O4mY0twlwIhAPhvxl3UJkSTyZHdfjcYnk7ZvngWMgLWBWdcJgObazalKv8DCCUQABoMNjM3NDIzMTgzODA1IgzmTavNawMRBVJ2Ao0q3APazC4WGlLHOa0GYP9UAhfu9F0nxWmehVCGzHOZgfxvzJw0ReWOB0FFBwlcJJ%2Bdevrj4nCfGGWHKW%2Fqrw1Gkw1e%2BIp108n2O4S0SIvpVemJQ3FNMR6KtSrDrVepOjGoKTTWZeNM%2FFvOOZpcbH81l3huTqOBf5mrtWjkLMQwW6CFUd%2FLkxNXSfNSsZxDLwx4rVcaSgzZzlz%2Fiy%2BRBj0UjbQxxb0Wo3zP74Niyt%2BWRP7i6erIYuFxE6bS8nptTVKWMpkQQ4W3WgIN2R0LA0brIpNMLifg1HAEZnikaXmKcZpqgVUwVc15D%2F%2F1oWyiYLirf8o7N1qSH2owigjq7ZjyCZCetf%2FDwS53PM2BJOXW2uB7jDHmBVBu8xX6MEZWJwQxISDrU8xpAo4EHMnru9H5JPN31HfH55kBn1hlG0xTw6nod1HyaRTz3a4GhC5XHcl7fxqm8%2B2DX3SvXQOQJmMscSdnCwrZTYNOIDi7vKfYc%2FVPkvVScvI%2BUTbht1%2B1Jv8o3zy56A9ELixs%2BQ4cNActlsQBNo3aBKeMPGJ9MfZf1FBB7qQSIiFlArPzhzNBOI3nTWVY%2F3MXpPFCSSkRZU2oNhYx8G7J%2F0l976LMr2V4NP%2BpSe6Hjp5aBLJDuu6HvzDNooa9BjqkAQbHQ5f8BPXmIFa0HBogch8JmMSu9%2BMlCu1SU1EQq%2FKtvgN%2BTKcu%2Fzyj6kv1erkiVvPJ%2F9jFmRctEVEfkGaRHgTYBTRJ7xnGlCce1qWLxTbc2a9XAvc39dO0dijQ6VXerbAPHOk3Vg4OsRr%2Fm4GDG57K3Q9MGu7QFkJoCiUeafSiHcIO%2F80bydksaPRrExYyxnUDjBVqthYH4SJ6R2B1bvalwlEK&X-Amz-Signature=39cc2c3869f18041394fb1c7cba44feabe28bb875c037b91ec7c9a1aef43c76e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
