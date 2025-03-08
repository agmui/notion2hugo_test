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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUXIHFO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFuTx1OK5ge0WDhXqLTA2FH4PsSI03HARtZccQG5466oAiA7yiFuZTPVK1L2uyfdh0Bze%2FKG6JB2rPFH1sBiigYwwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMyzfQj7kdSg9%2BiP36KtwDkjetdcolWjzNuNeT08gzc7GYzug3jXa%2FQN4KS9DVJPGAPYl3vXwRY0pdJEIFDo2b8kyztzBYwEHSQpPzKAW9degfT2IbaFr4EOc2YDvjxwsEItpAHF6MVIvorMx%2BlrWlDpK98n6hfjuLlwKA%2Fdt9EimZV0y0JDovY0bFf3MdO7v3tRYy01b67WtWxjhxsMR1dkWR87nNlLwRxkYklyqswE4DhvtU8xwwKyaIL82VncxCN3ylDBmZKhazbQHNCu2XaOR1ZW%2Br7QvJpBbuLNf9w7vGc7SetJDT2wz5H%2BgJFNYlESe4SwD8QQYQUvNAu1Z7QZ9JvlqNMKi7DRqO93awZiZzRp0I7FT1paCXZ%2BdrbP%2BLtBHK2a%2F900jQJNqCU1kb%2BNmUcETBECnXPGJU0eRDJmq7usVU6JvlqMiZVNQghwR%2BbCLRuRYIxbY74N60Tnc7%2FogcqnRtr9GPDSvWOKlk7ln%2FIV%2FRF7G73z5AHExY316FuI1v57CwMfni2hn0a4cH69j26XdfcSHdTuCLtYOnj%2BI3%2FhPXtsaNvNlyiyNx25cwrV9nQUb2ZzMc3xBfyp1CyZ2hbrqqmJQiZaX%2F%2FiIubWnutjvRuZyUPcLKZuvaS8nD4BXVdYY0DSQLpNQwloOyvgY6pgEbzeEzbOJdYC7dHRzHgpLXk%2Fevri3YxOIl%2BzKNwuymBfdT1%2FM8UYnSvjyMVo5YNHZMqgWUW4UaIZTUz%2BKePHoR5LlZ3IMMAH7Pp9rUBr207ZXb1z6LW9J%2Bw%2FcAcotJtXvnDRfcK2BD27fans9%2BxOQBHOUk4PYbEFy4UNUv%2Bs91AELe6exnGR9YSjJx%2B4hwNFtbfJvaBReWmE7DF3lmTNE%2FoazZ3GHe&X-Amz-Signature=d25a8674d98ef5de6a30ec3177d23d85f01678e0ec356febfe3980c936baa815&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
