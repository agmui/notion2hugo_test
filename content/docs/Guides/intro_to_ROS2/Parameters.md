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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQXRIXF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCID9o%2FKOb02hW7JUtZ6GQO2Qq8wD5kJOytgBqu1WcWuXUAiBfHuxoSCguQcNOVRtkDnaKx3FayPAcCgY8tt5KNcVtXCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYdmJfPFpT7zpFcrMKtwDZERF6ZIMegke1XkHhzri0zhAVPvAI8tbkAD7jwsck1oL%2B9fJA6e3phXHN7HLtQ89d3oxwFN2%2Bs51cf%2BUF48UcWk%2B28%2FAv5X5TZvbknmjnVQh8DMn8K4L%2Faz0fYgfuctiFm9CkL1xE7WUsL2s9ZyupsHGX6w0eSZHz2%2BKY2aMwXq8cNLuYFYAT9Y8Q%2BJ8iRUsvFulrDXM%2FjNXNQ7UZTQ6GINACrmKsTbhZJEoGBlJsdrHPvrB0nrhP%2FGr4kqU%2BMgd6gEHjImVnjg%2FklhBRAuBAQ36k2U3QlABBfEz1owL7rZV9jhFr1QXFBCIyzZTAKP07uhrt1sQdc4wVVQimAxbv0Lbrd88ZRFHQQcLVfqT7vYuXZHFa89EOeGALWv0%2FMY1TXP%2FYd7kKRgPhNIcJansGwm%2BKJTWjRZ56i8wADB9PQUv3rWr9NBLRH%2FT4Qk55VcbLUaueaRs%2Bkc1qo6clgDT4v%2BchyyJJc9KdA%2BBpXA21CaYLi5OPnIs8gTEA92Jx7%2FoyAfhbKqVaNs8XOEy4jCSeDYt4LTl5XPb6nI%2Fuwb7fSKAzEn8z6Pz9aYDfQA%2BciwTfCKFm3urrytFCZXuc2PmkLfaL8qIzLvxCmRZ3OD9YjZMmoVH5987nIsh7iYwxZCKvgY6pgFyjgwp60avwDrJO8CkcdXwBAbs0FVBo1Jtc6HqugJEREDSWdO4ljdf2i%2FwY8Em0%2FnJmzUodiy32jfxSaBlwv8W4SNJ3chl4OH4%2F9QVT20ZU%2BvwUF2SEZuMwXWntPkHHORDxPq2NnKiie1dBZGpe3A4mS3X%2FaZZ%2F5NQEONkwbgzpe1RuVfZmiflnoyXoyfD5jyG%2FswdePC3C759StpgHN%2FDAEOxOZVK&X-Amz-Signature=454b16f6923aa39534fe74ededfe12c0d465bcde93910b30d707acb7a139bf4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
