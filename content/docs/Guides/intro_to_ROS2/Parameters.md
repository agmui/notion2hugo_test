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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQEMRQD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICgTs%2FYSUbPpH8UZz9YGzC0DrXwzbZmFkDsOQLQHLevxAiBVYLM7p8uPD0yCQzOX1anYPpslNhSJtKThGQSRNw530iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cSTqzLVsKM%2BnHeIKtwD5476Nne73ZSPANX7%2B1VsypnU4TBQjSa2lLidqyLYGjZmjHAxOGHZyaTQiqFok88ZbhoCkOJlF1qhMhDGQ2dCoL7G2IMBoFGbJdEta9evQMQ3qWLX6LOj25u3exa8TDqUEnZ8fOoOzmgfBwMlc7NeUQvab5MmWkIoe8VSZjBqtC0XvRU692XwgUFUr3rn%2Fu1%2BfQflVSERiWUn9GZdz6Bw4JdiBXQ6U8AjHcIXoagEzppzx92i9w2Z5o6laqiV5wiSuh75C%2BqQiYgREk8d79MZCVkaDUI6VRnwD9lZuVH40hlEUFDzYvZpidpQM6GlR3DVy61QB8ifm5qB5eZI%2BlWPNPDO%2BdWLzfP8%2FTmo3FSitQ4xWLoeETwO5cB9BfJCHIdQKAT5RJE7TC5D6o1MGe9LjxSTHzL2xCwzjs%2BmHxuaQJVTBqmuYbCE%2B8Lh4Vg8WhnqiDJ6BLvfRtRce6mgTu9tDiLPjCH2dF1p6RYP6WaYjgIbMh3iaJo4QdvU%2BbOAdhGhPO4OLkuatjJibF9oZeKsL%2BHPZdMvkLPdtNb0dMiykJr1doyycDygNWwzcP72vx1zCfXd3PostIuJkDq4%2F4WAMdDl5PETS5mKoY6MNCqu8tq%2FqcudsrR%2FI9RtLXkwx5CswgY6pgEBXaybHtmidj3Fr5C8BHFH%2BdVVZf7NGq4MkcC%2FD1vMO08wjU%2FTeTxpgTy50dx5wqah7xih5WHRZJAEfXtNM9%2FkdGkUOOKTQDozcMa0XE7F5JCxbhyuMA%2BHWdMuQHR%2BoNfAttDelh75L2ubO23gx4XAMRu%2FhKlPVZT5K3b0hMTDxa0M%2Fj%2BX9tz9AN5qMO3%2FGxXqSWin%2FBImHViNCPauXq1q9yVOo%2B5Y&X-Amz-Signature=6b202dcad9cbeeb52ce88e7ad1a769d9f6fe40bf467f2cd21836a10e91c091a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
