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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRT2TYCU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1a%2FdbYHvSowPBLXDe8Akn2ut0StpKjMAEVm%2BFiNih6wIhAJ5wyFWoUUS%2F%2F883K1V%2B1ZVX3px60CaI%2BjES1hAVZ3%2F%2FKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIRgkZoVD2ZrFjV%2Fkq3AOouHsWE10Ds%2B3I9JHgte9cYtXrZ%2BjWNS8wLqW1NdY1HR47c2xKFc9y3QpXc9mOnDRgIeGN1EW0mP6rD9Btabyw2SeiTOeIUWdvylg34fFSeOFliCvtuicERDdu6FtyafzNRLOadpWjl4aKMEhTQUOq%2FY43XoGYArgpUgusr86GmMH0ZtpxPKSoLbVOJNb8VCCq3n2MhOVJKEFuyBOunQI3tsV9ihiUODbjSLgEowwEyv7BgqEkl1HuYD9Z8LLI0B7myMgjdjH8LpXiqvzG%2F2YRtcO%2FmqqssAjpLsHOmVIfCRSl5C53u5UuSnkTwci6qOhjocIGhPSVhnRrh%2FSgYK8FmrSR%2FhMwvzhf2xrDF%2BXZerssIB8Zd0PTmNeqLRr84oNdgteEDUsTi1IyMp7ErFqNZWfzUTkum8XbeoMFsCRT3EvFgzK3kmmJv05veFAZMHafNZGLmZtO1nIfV479zl1Rc7Kd4PUiwW3WOzN4Sd82KUTu1g4PRuopE5PHwzdZqiJNQrfeiVaDU%2F9ooSSxc5d9ibnz2OG5K5iH73SrFeONBgV6DA8Hhoqu2nuD0I55AMQltFW7YCbAeYp9L5%2BEdsr5rPW2yfCwDSZU1wD1Zh2HZmCmXrvlCUHxFY0KrjD4nK%2FABjqkAcH4OpEM5Xffb8NukYg0YPuynUMDnp%2B1pVNfg7iGYYr7xONdYfIbbJDcLqcLDOvI%2BvBxzoQqDlEjXRpbWbxNpisRChwH2n5mfb3FZfU6pS14MbqiaF2Wh%2B9R4ozYqV%2BZz3ytW0ca%2BQIUdETkG%2BQAYaiShAjaAfuHXcHnuVDk8cOr%2BlqGRWRzz3V6FAGJlk%2B%2F4e1RYE%2BuO7Ntd5DgAdRdBUJ7j%2FoV&X-Amz-Signature=5bed09b63a98096566a4787b9692e35cf9a6f3e9716a11ae87c51bf64a02574b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
