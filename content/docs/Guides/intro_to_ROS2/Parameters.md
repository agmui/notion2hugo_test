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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626AFKDU3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDEL%2FPHWzAlofKx%2FwiCKfr%2BiU%2BYww9k8rGeBaC2GF%2FCrQIgMnipSeVJ2aoebh%2FCVIZNMQ4fRz0hKQIBATTMgPInTQYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAU4dykz8LJcP19pircA0GiYx5PkdpoEv5pSDbo8YkcwF1fhxq9vN%2F2IQsDhHyfqz0LR4VlKAV78xJRPtgdH6pTN8g%2FwSJHyS4CpfkASM9F%2BARQqvsC0mcD9th6nyrmRfOSBL%2FJ%2BkQyhgq4PZvFsoISN9ZKTDcNmM6Xbj7qt6qTDdFjXEcbWMh3c3%2BsCEeCdZPamtQs021OvglGgahlPYI4PBtBzMQyuPBES4MdVhqWfJ%2FaMhx5YhzumKJF5oDw7wDio56w4DtfOP0ebk0dlvQ7XoKR1UK60U6if9PFPEPQ8MHhSDTlJN3V9gpXr9LMo9sqNiKj8HqzqsPiHQBWOx5tx79jqFwvNLHWq5VtXQ%2BQ7juWHlYR8mnvCnqi3SoeiYGTzr%2Btfoe4%2F8YO5MfrLpI1Fm6aduRxaab9L0eERmpiNVDQHGk2YtdcTnqYydTRHiy8ufUK761gb407c5Df7wKuHRKkL1bMy2D0DfQuTyykhNI86%2F4SbnQPAhBYGeEyJ6qmyh0PElrQ2a%2FC78ejLcRDkzbscTa0t0%2Bed2PdKq3OqdJ3fdWe8MgrNKUXyzNaQOTAGg4rpPuzVkBDhk43Is2ASaUd0U3aXHAX7f1YsEr0Ob4KOiPf%2FYMQCH095UtWHSJSmu5zuXbcPTQ3MNn9lsAGOqUBEk7MQ5IMiNFrnQe4pDJhfnQzVcYnFncYMbA%2F8NugmcYp2K6c9P4NzMIUqwMtUi7WJssZkAxP8dajXxPrmwmUQbeChgi81XBrFQXjfGi%2Bsk4J9VKs%2BYYIoUvwBk5n5M886bceaCEwhnm%2FZeRViB2fZ3wMoGhCdJudXA9UIGQicl2yNUn%2BXj6Z3ewEefEMcNgLdcExObROqXpZNojb6jXueNpZ3kGe&X-Amz-Signature=b38556acd5e430c0f866d9cd1e57dcd836a9f675b59f00398398e186f9397866&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
