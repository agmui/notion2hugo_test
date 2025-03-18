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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVOR3HZ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHWJp4v2XjJ60%2B58TKjVgftEZcIuB3hSH01wxKZdWekLAiBRNmJRKIA%2FxcjFiAbejj8KdopZIWR3%2BYiZ3N3WokknGir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMa6TZGd2RhjgmXKBPKtwD76UEbxqM9el5OH%2Fco5FeZxyrx08jy5mZPy2%2B9mGTWZuI%2FTh8IrrWxNnHlYSlWzW34dBJWo7fb%2FABuK9JDWO1kjSQY550nEWhCZDSoXxfhlR1%2FgqZS4ZlJjJMnIz7k3rwAEfe4qC%2F0eXMa%2FNk7AQV9rXTHtH%2FVcssoO4yp%2FBycIegEeThDTPr4x1rVb00HFzpOa0x5Ave6cEj8zPGTu64v9G3YtyWnxcYthP%2FKxYEScvoxXCch%2FTjgXIXwplciVLgcQqmdvbkNvY5uaTb23NkiDgEi7jKLySXRvlD%2FJnmjJOiD85hJb2BfpttcYcAi4TAVWTMUv%2FY%2BMBfPrcC%2Behjfm0YgTpthqBFKlVd9uv02XOU%2Fcpb6pwI63WXl5mWHzKYM5IeFzsmyZrk6CbgvLe5uS63UDgKYLU3VLpa%2FDrNNkK%2FZDPkrBtJyNV7WgqzdoLp1lIhtlebW7WwiAN3lO53kgAEBeoYPDlze%2FRdCtpFYuymRiprG89C8zzrItxn6ohrRg%2Bb57TaWZwRy%2BeZMFSh18pBrAHVjbj2gQH70zy5RVWud4oDU7gzU%2FnlsxuqfW1sjYAcK4pa14Lu6RCCnSOkeasxkD%2FlLrZPVX4yDkS25s64Db58Kkv77HV8y1wwk7LnvgY6pgGXFCxENJElS4IEEqZ8L10GT9Xh5i8m2BjbGa%2BGt4kJRvMxFj039LCbpiKTPT%2BdZFD0x4aaaKmy0V3%2BgXJO9%2BEUV8ICSZuTBDkxhaWmwBkEYcZPT8EsJPUza5K0kLl4Sn9huKaUY2z7f%2Fd4Zxubmfd2C%2F2MJa%2B2mwyAk0hWVxh0qPjdS%2BKpqptInYoIU0ui6rOY54IGx2P%2Bk8IJkiENNLgkCTaCAOR8&X-Amz-Signature=469816c4cf7e70e7d5047a1c0f89f28dc5e46274aa88ce467061e02ba89f5bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
