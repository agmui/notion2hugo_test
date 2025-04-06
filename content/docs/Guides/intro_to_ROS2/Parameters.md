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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQVBIW6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbvp9hKAgm8w%2FO8UiQsXGctZghQRQuExWBKjqYS%2ByuZAiAFgEr%2BAN3ioU7eYXgz46nPKHmaxoNB%2FwP%2Br%2FEZ48VVDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMfTHCSMiw5yQuN3KxKtwD%2Bt4H2CbBh48ea4lIVcwMCp%2FhunI9qFNAxbyeLkUoOR5Tl06dGmnFsTqmKvxh5OdSg%2BKVXkbmj5t%2ByUa7Shq%2FAI4YJpVpSEbxdNt8kANGpIZyfSvjqdF4ySIxNIz3TQjTOhWd61sGn0VBa3en1WuWL54llqEmjEoj%2BEDXBlhoKMP3NxYwlQmD39OMxDOMnyrt%2FwE7QFFD9r7pgvZcJrzpDPd9ZKJcHkBeMDZIpF7OCegiVZrA4tn8QG1LjYuD8bZrJhavh9%2Fpbdzw6RdeqTIZljW9pTVhxN1mP7p5XReoPiBXR6lxtGOk%2FtU%2FEkOREZ73Kp8Qm27JSl7pEtgmeK%2F0PG2ZAWbUg%2F32kH3ggm7rQ1d5lHP5te49zKI2mADr4anz2GEbqIZZHRnyZuFG%2BCmVp00hNF0gsbrtb4e529NsAVYpmqisFZVgDZ7zRpuM0Uvlh6U78FXkUCUnzCbYfAWYbj7wD2PvSoKZyDJ%2BgqWXmAmLXY6%2FU1SHDKO23NWmdnnKyTFj1EYekxEmJhOrlLjvc59nhCBhjorpN2FKtGpyeNt%2BO%2BPj%2BVeSaHPu6r9m0%2FlsymsczuI7LJCgKEZlpim6FLLJnMGcF%2FRBJY666niJjj1xJkKGJxwPGcQP%2Fjcwj53LvwY6pgEgfgk9kn3%2BqniNp%2F7kuAgmXuU7LwZFKphHFOROIwP0B9yOFSlQ%2B1MRAnhPzw4AYNsJuVQwulI%2BurDR4UK1WIPLzVZnq3xQEUi70YFv5ingvfUb3EzDR%2BpMgISYYGuB5n3Zo97oEhYKcXOVKBtUB3aRUC4RIhcPB6bj88Mzne89vjVYhu50aQe2TNIv%2Bp%2BubADqRwKe7FAVeV4EfdNpGl1%2FDZ7v5VkM&X-Amz-Signature=bc62458a1ba56e48f00f61741c41ac1b30db9f9375ac455b68132ecbb7671076&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
