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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGZBKUF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBBsMUWNI3wN1j5r3QgMnqHr7jjUFtwZSFqb7F9rdaPqAiEA%2B1jFtzx151%2FEGAOdqxZsBjn5xfA1tyDDTFcdkFC7PLsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBXZY0s6OPXJygTAircA59RRfoR7fznbDDo08FON0ixTWEFzCGfRIHHriS%2FawuLsh7qnp7NUej0xglnWP0SkEeVu7kYWECWg1UMzoy%2BNwX1JHr06YjB8TePeVJ19l4WLoPz2GBm9OKzS8CefT%2BzHTBWW9uKkfnoXpkIlsCRkhaCA7mwBkV6LV9sVybjj1MzTheACxitvRuHEf%2Brk%2FOcXw1RM960kyyzv%2BGiONlmve9Jdjc3JmookBjjrzU8AWaZERqYFkdqfX3L2BAByEk8bPYc5ESdYkm%2B66yMV9NT5xxhxzb%2F%2FjcXVhxQ%2FjYirEubT2Xo8DdNiqTGF%2FygTdzFGxfw%2B0qQ0MVUWLu1wNTHaRdRKosT2Y4IDqBkPRj9ZFKoJEX6q%2FuOhKQHGhPPUPqvygi9XfF6PyfYRU76GPZVIkE45EgawHrspM%2FhOU%2FaWzcNvlTA%2Br2lXj3g7TIq%2FkjlYnt7Oyy2h21tZc6PAYXqioq172Hky%2B06JlaisUgyhCgLOf0CkxeAuxIo78M1xNK5TJ0cnVUl%2BdFmn1U4U4py9WvIxAOog7ERgf0as%2Fo2tq7qZhO%2BkCGyyFGzTaFYdL6jkvrAriMOuKpadDCrlwS7s8Y8eNQOnlnOPdTyoHZgHkcHmrUqOoRIfVYsJwJxMMHe18AGOqUB%2Bd0SvOeEUlY20R21QrPWNQEvqNlC0rVnfEiJYlyZHQBF25N%2Fo0LVtB6yay%2F52vFcgIlVlrkzDv5nyLS%2FrW91xPBthG1lEC%2FBjGtDBKkvu08668oK6pBPaTfg9WATM%2FHtn4tDFaeUgWiosPkmAHvDogF6p2GjExDIkKCzgaZqvfR9YeJZuV3hKNb6l3UOYjDfGOJ3kZ%2B7h%2BsDtCBHFtanUJ%2BgbZaR&X-Amz-Signature=1608f80ce96b6cde1c3c5f7a77aae2860843176cd533d6ad7068250842f9d1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
