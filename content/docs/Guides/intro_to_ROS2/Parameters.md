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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NGB22OS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCRfqq4l5foG66qn9YJxx5g10N1aGS4Gwn%2FuOj%2Bg9GQmQIhANr%2BvIg7%2BRpIeGlYz3ueOkpSp06REVb42HtsTP3HHJBSKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx0gOt6Ncv85eMQZAq3AMtbWxz8p2iqZ0ca7h75vzLp8OJMKxjSeqHI90pvMoF%2FN7pSbGY8ljgdOeHVTI407P%2BCMZ4s6J68SDjkCKt7QVDCtGLQn4XuDHH2qMOyj84QTz61usiq6pd6B961ve5cDzoMrDQ5EXle2hAk1sY5UcP3XBRrbnuElle%2BMDHuZ4whdr6tJLwcGVN%2F480ye6pcedL0yqasYsWsbeuDWfOYyCZXDQ19s%2B4%2F5XkyoqjG%2BE5W5Wcly%2FqbY%2FDtNmMMZWLlrbjUDerwkU1zi7dqnJ6oBJG1DIGNgNOHZtZZcgzgR4aYOggEEYs%2BDPL48ejWMmfExw6%2FDyta%2BMFcOJUO25f6cwimz7OCV07ZFtetRlzyKhtG5TSKlDDvA7yIvKT8f9xHzTuvLoBASe9Er1vawqOGk2aPKOsaj4BDZkdHeCytOrTNPXH8YWVCsBU6CkpvDvNnyTNfmgujtTubQZw9DR%2BcFr8C8Ek%2B6UoP4p9uP9p%2Br6kOXK%2BQfQ2d%2Fr9NDYxAWg5VpeFfilFH92yc%2Foo4n8G484AeoDgKC7%2FiX10vMGXyZHCvbRnlYkOu4sp8qDJE%2BdwL5vc6SyFGO84jo7Rb7WnUV2FboMiEx8sZ%2FoHCU12mRGioXM%2B%2B447Dnn%2B5Y685TDl8JvABjqkAfqjQjFBdSvPzYe58M3uFINdoL72y44RUON9lEtPOFT5opKyV59XL3okj7tpqFQ4SihiPWJWINY0z%2BdWjbU2GtewVk%2BDVu9vCKgqAjAchfw9I7sTDzriEr4SL7QXTBaCUrfP3CSSTMicnmpM%2FJFJHSJjXiTyjqOAXRjOCReqztIRx86EEgJoVrdBnx02Sg4MpIm89rpvgWJCItpLD2Z8qitzyy6U&X-Amz-Signature=e3c4d5233fe1d378e97a3410a369751f287b9a03497f48cc6d877149b9b1a76b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
