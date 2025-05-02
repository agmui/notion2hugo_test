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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YC7VLSU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3wGiPze91zOeo6VdVzzoUSwZkxM%2BaX7sDjdp5I8udkQIhAODV0jvE2NvqFYuWSLdYEXTTl6Gnx2ZltRPovvGEQO%2F9KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxKXsBR8dFhMYQndUq3ANBQqiwkirFFkAbtSyJ3AdyGQzIFCDScAoLSKJgSdQftkku6NzMU6xnAfbxSfJm4xiS4bsy5FDuqxAuRqzInpTXClbww%2FxSyW1S4cW3pqRHbv26MJV%2FCNxoYy5DbKA9pUSbgyW%2Byg9xmDg5lQggGt2shW0ihe6YkOig58H56WzFT6drbGLa3QIyYF0QuMmsWrVK4hSgaADpIrHh6UgYs3W2%2B74a36jQZLujA7LvCdObg%2BAfvfB1Fd4rebnFPHXuSOrF9yD42Qw%2F%2BbyNz5Z2msJRbT2Rgtl9OOPai0SmVgkSvAkle2ZxUvtImoEpQlEcEjCePUYOl54AR3%2BmJb93GiShCdbs%2BJbyeRzz7g%2BDE2cE%2BLJDBQAz0VoFMORTH3iMYOF%2BJjiOH7FM4EB2I2pvOlWD%2B2RGZ%2BFm4UEWxahMiO7O7NLevn8OdrdQ8iBGtDtX5Z71Ng6oi4wFlqZGjFxcvgvic1C3JPRrJFVQLJq8lzCS8qBZLpDPL5CnhYptkV5lQpe6o75c57maD315gPZdnEuFnIjthKSf8uEfuQ9zM%2FTCvuKXeaooHmCO7IjlOd3%2B%2FvZWZ%2FwE0hki9%2B0wKx8tjtrICzRtjedPfYF29kp2hh0bShQz5IWKE8LD%2F1y%2BPzDY0NDABjqkAZkuNmPEiiAddbd4YyEH62G2%2BOm3BWiYxk6DWKbJ8MMJ3AsK1Tqhqr5j8jb%2BuY1uI1hGdekTORSj%2B7hjHo6%2F%2Bj1KlpotKMyss17HcqjGDrm7CCQPQOChH%2FG98P8EE7f9pCa8xkBcN5w57a6nR5BcXjIkntvqSpx%2FWdZ1mK2OJbhy62Xfi6xvkscEPpl8FDgnnKUsq%2BFGT%2F9g4Nc6X7%2Bg%2BxhYBMwE&X-Amz-Signature=5c8dab124653d71f3ce1baa914728f191cd7f4b56cd046b0a0d1abd58875ad93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
