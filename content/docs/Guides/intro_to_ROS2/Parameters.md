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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TRG5NKF%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9jkeU2v1oNnFRi3LoMq7MZ2JF9QPtrL%2FkNHiii9keBAiEAhu1adVzdVUHXG3V5Q705lU%2FIh9EaHU0ppU0qyw9W7G8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMkiHxP1BfjcF1yxRircA7HEpl1GYD3neOqbcfaaJmYOKq3viExTB%2FI1Gr0dYlwle9lELb9ppbUiiC5vYecWDn0x%2BMyVgikqqWVQGd4strimK1EO5cNQnw0zAPGdyEYaWdkOgOs6wIjalBMyd7DZxou3ArGoKY8WiONfkVN1DQWS3flpODKqx19q1%2BDPbB5LeX2eBwSe0fYv9Y6yTAR1dQUxX3apfNavmbv3sEXRqQ9pt6CN7hrIZk%2FcHvFd2dAYTovP6%2FUCpx%2F0s%2FA8f3JKTRN8MgrfzXEvo3lNkLG%2FkmiDpxsBTasaZN89hPipqo914w7dBlOowyV4c9vL1fSbj4Tii2a6x2TBOTIDyrBREqgmrqXhRquYiUFLN7SJ1OSRUcDVaNupfiKRuXtf6XEvoX0Cwiw00cA%2F2xqa7LCEPNXvA%2F7TH9yBGomBQzHFNiumaJcM%2FkY2d%2FTXQZqjJiGzkYBq0UWUBLwwKiyYgbszhuwRGroUv%2BhgwpBKYGtV3K%2F1goAbg%2BcQC0GHGyL20wFiDQFPLInoqaiTxagsLLzRyKweKGfsKrHhvGWtCFPs67ash2T06ZIkG4CwPqqLAYIlJcuIqj6vTSgQPhGfeVCnukl21g50Zx8EmsvapdW7S%2FG1McREOZ%2B%2Fb6y3XIX4MOTdqcgGOqUB92GrhxxZbt0XF%2B02nVHiiXT1EfyBsp%2FA2J%2FUe8arnzhN%2BPTOLyJc%2FuK7A0lDXUAJnm667xY2PS36IKP0dwxsaYVtdUqTUZx30r8gAp31k204R661pkSJ%2FUunWpg4SOpRVUQAK9xgJec0Fq9LUzmX964mWtj0Xtr3PFktS1apud%2B6YOonCvWYh2jdjdGaoKJHHRcRfg6M74j1RrJdjJXQS9ya2dU1&X-Amz-Signature=0128389c3755ef01c53c8b8736d60db57210a602eb3c417e9068d6ac78d86d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
