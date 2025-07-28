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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3OSGZ4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEaYVsAYpXMvxDUAnrmyIijWh5qcNiinko0XDIWpJ2twIgA5slu3%2FDLmEieATbmgebaeka%2FswQV2Hah9YIJxu5lyEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyusDvmcpfYuQfygCrcAwm9kl77Tc9dRxYugB%2BLYiK0Y9iyDB5uJwjF0euVB4kw4f8PMaKKiDXdly4j56QPYSgGs17Gc%2BwtW%2FG%2BonQF69qlVm9SAAKX2EYGt9PAQfHqsskgDThPZA5qlbrs%2B4%2FJjCuc7VxoVL9uHZ83lBTsQ800iomEr8FcnaXtCPcIYpqYFRgMqU9c0%2B%2FFTZEpolt10nX%2BzhuZgMDfa5a8yuYxoQusegsBXkN2W7wInBEnmOXxWoD78Sb3T4iA5CgcTqDQ%2B%2Fttcis29EEeYu%2BDane4G8pFUiIrVWHBK3OxyCkFnuSgrMKLmvdMvfmKVOFRFZsdZYePuJG3YFnOKHy9LTvnK%2BVjxGK2msaZHUVu%2BoubZbaTEylOPScEvBXaCLi59g6YI6pc0qjjrFU3q2F88UI1rpNF5%2BGVDNYVbJvZdnTJ6CkBBKGyYD5KL3KazMPiVkvu7%2FNrItYRHYsL192aRQpwkjJU6i3v5lKiI2bZkSfVRKqyjpMDZx1uRwPrAyvOhBg9vxuY2KCVdxuIYOwZXX5fXpM7Yu0uqc1Mx8H%2Bc8H0XPWSEe5iFWzZBWfuBEyusKgO2TFHQv%2BTFhnAEKO8EsOKSFhn%2FCGl%2FjnG3zETIX4v4wF2G4jKJXSg3QN0UuwLMMi5n8QGOqUB%2FuejO30qAugFC0KsaYINl3k%2FRZAzStyXtH6P1c52mIENqr7%2BDUOPAPcoAHe3uMQM41uwtFYKGT7afSrWIENB%2B1pWZ%2BC0bMwOZhrjvilDN21JelvlxjPaBvAL7rBwY%2FtDxCxCSetqLqVCf6E177M70RrIte5cj2a%2BKISOyGirfuE1fDgnxocV%2BNXGDTYJ1gLGT5bjUD%2BHH0wQWHxjhwIFwN2lM%2Bnz&X-Amz-Signature=7b6288dd19c2a1ab42c18df4af6e5c960555a960b968b82a3102f207b1723a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
