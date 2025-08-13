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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JR6D5WO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkhREFTBuM9Lg5uReIuL8BpD4mR5BoSDJgkvC1T5klwAiANyiTL91S4CvXFisw%2FUvR5W2%2BttZhV%2BxtI8ivanT2ZBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMM6peDwAI4cwfUhViKtwDHCIyYHgLBlob6ibTGKfk3NBEG4vDiND1ipdOSdhCyk2Jqn8a9FatIX9a0CaJbq3nqSaSSjvW5B%2FSQDJgYzlFjCqNgTBvyZZaTtU2C%2BoLjfdrzyb8TcXAC0dyPp9kkp0VXG%2Bm706%2BGY96DZ1CsBnNPNJdBLwvBltiERL4Y9BsEK0qO%2FLvihAhTgWolrQw7zaUaTmAecF%2FJ3hO%2BSvIRNvkVUPn%2FtAcpkhUQ3ZKFuy2g4CXsjwq3QM8F6BQ2UCzfUFwRn%2FgJKBABp7feU%2BPG%2FWhBkWbBG9WJuYVhPmmf%2BxuRen%2F26sFBJ0R%2B8akIThL%2BQjEHYety4otLMKD%2BqVQGdTptbj29cULiw7WoWr2uwjTGWaDSPlr1zbHDDMzQivWXfZIUYAMH3tzJ%2BXFsh6psp9nE5T5MdOKM18FgCr9X8GlQ%2Fx60Gy6K1vdKFYnDQ0717ZuZ9yVzfYZtwip605L43%2Fwk6R9U8VoKtKWi1TDr3OkK4UerYw%2BGTstmiG12jOQs2LIxzyfADulXfu21IgOgJ3WD1z0hiZPc3Dy1Dzm%2F%2FuUleW75%2Fk5G%2B%2FNhOO59fT9IjgM86jIaGIzhu2YaQh0IC%2BhoqbxjE4%2BsVw2tMt4sU9Na6AZF5FTuEy8UJr86z8w%2FJ%2FzxAY6pgHPO8C23iPUBxQfIbvHdtlk5JXq8dZ46r1qpawgArxCO%2FTe0FmdQPGkSZWNuQkmJlOZgHDmjd7kN5QcRZ0uXxoLWQSkYD9oGEHd4ldAMndNJA7iqZotM5thI%2FTKMxoQod%2BJQZx9Cqkjs1RdtLE6pIe%2Fi4uL8XKPIekuccR9vIDWMelpCIwgfN7tcy6GSEALWHgFL9OxChtZ3wP%2FU7tm5ienKp3mjZ9J&X-Amz-Signature=092a61532762ceb864fa94a240e6889e6d9f77a1f5f691beaca4116509eb7ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
