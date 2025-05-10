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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHUXVAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrTCRs3Hc7w8M4rqDwWPMkE1El3yNytqdkzunGX3NN9QIgba4iPeahFQaamc1xMzrYrXXnmX13LBWqBEs46edpquAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHlkRncgQS2aCKzwircA5xudqrSePvmfnGXV4Yy0XCOt3wxnXSbYGu%2FRqvF9kBwUPpRZ34D1tXpcq9Zat9VPZLENSKxnPpx4JvfZJAZTaXiDLttVSjESRpiIiLMN5Seoamiby%2F9FvkibJD%2FCc7GG%2BQoJgkG3CbZhTKV6l7FVzHEt1qSd8uRmBbSsOHsRDSRKPhwLD3PKkN6W7D4co%2F4vgyKGMy6XPAP7od%2F4ImNxRTqZX5kKqAL8mN%2B7brDXC3XauqlOGp3gLlyTt1yCN0SaNAzUajcKp7eV%2B%2BegupGffwrq3CPu5U9O7uUsEuEdtRI8FlRAsJR3D2NfA4q7lGWnqiGDp2SHxtgsz8rwFNRUSjJ7b6c5fx771FB2zhPMR%2BTrAf1lyquX4UJMwXkD2ck8M5YzFyrYd29NIKEPWSwyzColME04bpH7rTTIJfm8HLnbeTfjCzW0PTKLvIflXsPudEG%2BTRhwXCDoU4m4DE%2F4L2mZNQUwDctJXoIJKMfwxdBhAtPhHpBKOILqIfM2iA0t8FI8y26TONRyHjGOTMQkzn7vHbNwcb9eDQddw2%2FwFOlc9AANaYJbC2LuTgx7YvSkcaEObHyjvMyJ%2FZ5mBGBH0vIlBf5g8gqk%2BD2qsUUekyo1zfonRHODPCik0hDMNyP%2FMAGOqUBG2hDyYbxhPCzkN7yiYzjR7RnjPKatlAzOC6wpAWLErvcVIDQmc9T6IHK%2FiygqPKMviT3oqlTTbVEYPA6dHFGOCmYgpvdDa6E2gRFMMigR9OAgKXDwS99lEkBAMlTNscpuK4dZHpn48Uo0L3IKHCCY2JiCmyiKp2wGey8EpQNRg3oRmRi8zLHfxBZ3xL60Xkc%2BCuyvUFNqFDYwdGVlWX9UMHSPBPX&X-Amz-Signature=883ecf03bf17664b973779fe959c92753e89ee9d7e5a9d3e20494ace29853ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
