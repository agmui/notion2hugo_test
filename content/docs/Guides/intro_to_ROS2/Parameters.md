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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLP3LJG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCF15nb1104QrkS0q0a1pbM2gbrjPU3QeNh75mjhNxXHgIhALMo0apkB4Zc1UVg3FgToyhVoed554SNMFcwsBk5CfwTKv8DCE0QABoMNjM3NDIzMTgzODA1Igx0H%2FUmJmBw3sU8K%2B8q3AMSuBwMvTMUnvRVrG29qdieNsPXFsZnKDmlG4rG4U6NiDQvGZPP3WD%2FD6PjedAh%2BV1c7TvjtpBlMimu9NFIQ6gdnYksDxNz5hggL35eIec5jH8pgmAZD12ILgEFX%2Bn4UOf6jCj%2BJfiQk6p693e%2BfxAu9eGdvEA60E2GzzFy55m3aTA9OuJH9HW%2Byqg1iehXCQNb7YooF4apcN5qLoVPKo%2F07egh0ze7D0sOqKUIcuQzcd6eAyuHu84RkGeVzKpjFgkaThbVui4Cl08OFKZWrTmNOMg6f2VVRGxR0hwUHcV9TmUG1raKxTVX4WiSUczXkE1Afu7QdfOg2%2FenbeZu5ncs1i0ouYeUCIm5xOYfOZ2E7mDEMvOZWnBCqygXeh%2FFCs0N17gekxoLZMOrr9uGeGLV%2BugZ4Ek7g%2BvhQLE8qt5K9%2BTub7CllWPgEOQaghZTeuXPguuApQ7%2BfvokYh%2F5T%2FGScSsGaOqJwWTc39ayunjcN1GDtbDmKzpI5K0ZhSfhNlnPhl9wTiaPSJmfsHUW5HKpK0VMRHocyiwkRm6jry1R3fYRc0bDJ0IOmw2DDaEu%2BVn5Pr9cR%2B8VpXZJjyV2dBgvAmCUDghLQnP1rHY89r9chOQYgXWyPtha2w8rETCO%2FaXDBjqkAVdqC%2BPOP2TyMbKWEKvUHaEpmV1M%2FnNKNcoBqGXKiV6ZlHzfc9mJK4YMsw2W8XaUGjn3RL5IsfoQUa2ekmCt7RFZ2Y%2Bnz10qFHJHoYSdimPxSLzUt5133FjKR9YW0%2FQOJ%2BefQVUa2mF8l2VkwQ%2FfsbdRdkLxZljGZgJoP15B%2BZhSPlxtCWeXt%2BvArAYencPU3RCb%2B0c1xX7n6erShBHGciefti%2Fx&X-Amz-Signature=484f1d13db45dac15c29ae40a6eb5c3782bd59e0bf8e88d3f185e603bdc588c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
