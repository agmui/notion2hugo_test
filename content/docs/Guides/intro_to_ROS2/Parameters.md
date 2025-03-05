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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LZQWRL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHzWHY1BlM5NXzHZ1heLGOBUsnwgCVfRkKXOSLEerJHgIgIt%2FrhsixDgsrKXRe8hxUY9cZdpmTvaThJH6pMRr8aEUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDD%2Be%2BxFeuONqyM1uFSrcAz1xDjzWa%2B3KxK7GCpvfjmZTDIUHw1hQmq7QrTa%2FrE3KDLf7x5oe94J9LrRn3JnkBs82%2FIkiZvL9giSSppjHv8J4yaLOHjnG0HOMs9DRv%2FsQSovKpRdmyitwxIzbHiDJ04PZSQBnsulUgJ7mnV2Cvvevcg36d%2FW94xVcZGD9w8iI0RyXzuJIl0XZcPEnC2cT7%2BVunerQHK7n%2Bg%2BoQfGuaH%2FIGyftMeF1HnKcPgeP5dEPp54R2yDrRiFfRUEA4x%2FbbmFZpFuBDc%2FFdfBLMDRYuCAEJBLkh4j5MTcxBb2yW0cMxZrRcBHzQe0tQNsPZmBQzS7rKzOQokcsPdEF5ljEBXSMyS7FFlQh0nkxcJeh%2FDjVlN4m1Pa3XEfNvC4xZZ%2FhRQS70xzGXtTejV9tUpaTTxL29WO6hfA5SBjA6%2Fzir7ZY02%2BzhcPnV9fol8YZmQQglj3o5bLQZPr24f0ScA5ExLIHtIepN%2BqAKjnCrlIO5WJ7BQUQsFQlmmCyTpsGdP1qwbd3ZuGN2CPJSkaE9ML0%2FZYzrE0w8Zqk1Ne%2FTuoGG5rzCxOBKt7W5WmLighRTXp5P3NQZsCZCQleITcj4Ps8TlYB7Z2ZlqkwKtp9e4E75Ezw1zxgdhruO60n12fpMNj0oL4GOqUByV5zBiwxcCJYXKc3ViiyLgVtaSE%2B2qxCc6CyROZc1HKsiixiqhvpB8KGzuVzfHaM3jC8z%2BlUKhCQHpmmMB5m11nantf3dazAzslsKjERv8sgXlWFGi5dJcYAAIATsXncofpC95Jas92DP7gGi2UZnoE6mjU0mLXmGOodCOGowLQk2KOat1toAQ%2BrisHA39ecYLifUrkCMU8NDji0ElU3aehgD04T&X-Amz-Signature=313268f308178f21d674764db6442b7b075d769b3395579cd7dd46e72b374cba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
