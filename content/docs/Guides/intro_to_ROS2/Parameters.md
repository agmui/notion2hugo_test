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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRGNZ6D%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHh4736D5iCYp0RN%2B7SAT5i7S%2BEOa38MLQD36rRajV%2BwAiAx%2Fmw3JDCVKAQ8OGCz%2Fdbnvkw1idLFKbNCWM1E33gvFSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfg3Qw9iu1Kd5lXrqKtwDG092OIY2uLGtPn43V06wJT99MqvfGUjbdZUjAbUZ53V9Zph%2FBsMZ4tBMczNLj091dXYdPCVNJIACSDwwuHZRbyIFmyrYHX%2B0X4pbgbYRUlzjNTtbdMSGhaBFLyQ7qizS6ryQ2e11EEXbDuZZvctajVBnJ2uRcKDyqtDfmRfg93CPYwXBSrFbQIvN39gPk6VYaTqkIpuZZCdddm1%2Bx0IFKVx6t3%2Bv0YtTD9tVYnqWOtZL31lB%2FLwyYp0S0nBQ9L8lbpkA3BAXo2wPcwBz186EotaX9c7su43zYHepxIxbmHbBIWJ%2F36elcKu2vxqJU8CU%2BtRn6P0Ep0cByVvNQAp6pueqr3a%2FMhcizsmllPFxYF9z12ordK1NWtYWr9%2BvHZpo42a7NuFQArRnyI7la05DlMvAQm2juOe4otYdDOOc481PcbzfuW9nubHamFcq4rdPtDuBcOPxvl2QTfHZ5MNFEKzTD14PZAcd9aMj9eeir0LCgEuTazMXvubXGKMCEfdF2erB%2BIUtwJld1QwakvGOWxsStWOzeoJ2w2CPFGmhSnMb6tG9xNbSpYqkIfLjBRqaDZDefVIubUp88tf%2FhM0x7Kj9UzifdR%2FbGvNt4vH6sP%2BadslfVX2VUmAxnP8w1JunwgY6pgE6LuV2AE%2B4y9LpWrXk31Q8MGcQfg2lf9R2KaGkL8QPxGoXMjHkLAcpntkGhrYg0ILlllQsp3S8QlOFMiJBJVeEUG4i7OZHXbrYzxZHZuYJLjn76ZSPClt9C3hZnMVoGBD%2BhIl4H7ZSh2p3Xj%2BwLrpuRzeC7QgK5NdehlCtjHNjHdAfpDJIOzLhMlUpK%2FZrA3WMHSNlnsyhOVu9thKhZNK2DkE60sxs&X-Amz-Signature=9a0fe5268d1ff0484023796a91ae0f8b0b603a2efe08df82e78b7e06c387f6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
