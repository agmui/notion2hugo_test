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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJ7R23P%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICl%2BpihtOVJKcpQppLFDe9WBFoJfa7nPsDv%2BgzqDcxgzAiEAz2w07woTlOzKHUBLYaD7Dmb55tjlP7YIutRiu7cBFdwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqq3d7bocNv3NEF%2FyrcAwkztcOTZYf7PlZGmWI0oS5pTCR89VaiuD%2F5KRSat7191KTRjN%2FPCRZwQz8BF4uZVai7ST3YR636PAwwwHoSj%2FMqOzSZywP193ydvXUCZeW4%2BETk04RpeEehYzh3DjxbhsEmL6tiFqUL8PURPU4TcxqpE%2FvDJWpUZ79K4QOagceuzSfvwkzp2kYudjccTfCi7CakqkGNKQ8ZcvVE8ncPXNTn7FJOzLtoZFe4ITjK2o7e5gd7Ma0iISnef6Ym4EOyNdfcUK6MP5W%2BWyLFxbtiCCmZ7d8Ai0ISjsQAhkCFdjL7zXI4HYShqq%2BPv0UaeB780Bx96Nurrg3SIqzQpfR%2FVF7yFQbNvOq81zm1aTOPNPeXjDKhusMxKmoMHkaTXQWHulE5SqWjp0f6gFz1dVdPr5LRc6B03n%2Fca12wvROJs0HPuzF15pPj3MzBeil%2F4nrGmsYGZwm8qZtocWLKWaHTPoY%2FD4SYuHs5peCmwvGUTAmAmD9%2BxsyqpGk2v4pqtLXftXIkWjgletJcq5J%2FLlb%2Fbg09AY7F3aFG0kAMpKAmIy7099kWZfGzKdDBN3lF%2B4i3E8SBFxzR%2FFcMmDotRTPI1p7H8TCIh6PrgcJMIL4pvBqZGNjANNPj8cWg1BlUMLL1mcAGOqUBYLSzPFksRUPKMjkDwGKWVFgN%2F65zPMuoojzrIcaFUaf3CBKV4sXlJkSUd4cVqHfUNEyWRvqKxmlBpj%2B37Dz9jHZ484HIcATaoYnh1qqMhqR8%2BLOjmJnarwqBBpB2TMWWJgVKFszRrNVigW15UYqB%2Brw%2BJnVf%2FblOeAeH5Zw%2FZ7bojSSBd0Zps0EMq40O9Iru085MaLPzalyO%2FZKacTa%2FVjlHjLd5&X-Amz-Signature=a5c47a3c0f99af3513616653e5e9e1ee91636e19e63ccee0234d4aad4f3ceac9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
