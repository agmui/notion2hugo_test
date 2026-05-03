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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EJMAE67%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7%2BaK7pwUXfUIaf4AiU8WZkjK17NVTQXC0P1LJXsyQJwIgAxFr0JiZagtyJiQzik2N5gB5T6id8sr2UJzrF9JFG84q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGeHO4GR92i%2Bgv1QwCrcAyqD%2FaA1SfFI3jMN%2BHgSiGqYaoyapug4eTkjT%2B02T4KYb7QBvyqg4d6U3GpShXTq54YO%2BvkuBVu0lr2S7oFsq9u%2F1QrYQfZO2SzsK4wI0cOpwQZ80ITaJ1Zhju%2B4j5FngYLH%2F2%2Fyg4Vz1jNWem4lrHaFbVbk%2BNCMRmyAiHtYiiXrVZTOHZtPzqQGVBlww%2BjkGZSXnqYHCqZovLmLwHr0R1ADcrMYO%2FEFj5SUddlFWRB3gjrCFfrphWUxG%2BTT98iPEy2fZ%2FlvyHu45VW9PZgd4hXn0FT7JVZlRnDSEUzb0rL5iC1aBSsOdszRjsxekEAb8xeAxu3aj6jfqzl9P2smvgsDgcJ2dMnL4M0%2F4SUA9Ps8DspWHYDIadkbcsc10jLbF9ozUO2ohgLsskhoCb7WAJJ%2BIf6vFkYreCcF0VTrHUjzZmqcZwIk%2FHWVdUlp1Oh3dkfZkGeDCKcBsz6TQXCbdWtaS78cMuBX04Wv0Gna7pLOBpMZpkt3U6BPormVKN44oHaZcRnVK5k7MeTli6PC00ZgKN9j9kekpwSaoouNBFUHJCfKefkwkuuwuGpDeF6Xrn0Gn%2FZYiY%2FfxDC7YZ3pCbKN5tvb8%2Fr%2BYM7OtvYPu10zRbs5HMMbQVlQAu%2B1MILX2s8GOqUB5vQGt80DM0txBbv%2Bz92lQxu3XAQ1sZvHojkr2zz0wiOUsi4mLiCmvsuIjaJMxuUNH6FgO5Wuitd3Lp4ISHdV734z2DhePTp8wgtLGCNS%2Brdj3AQRamJQcs4r2jikyAQZtmeBRtrjAYlXnJSxnJpApHQNhdHLJAWtfls6%2FSoYRcNuBqgOUAbDrdRWx1YxwqD%2BnB5U7YuvPbwEo1gIrOv0ajYqM3Qz&X-Amz-Signature=21e293838423fa810afd49075e2a3608e51799e2ec45cc3d3f933cec1d585b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
