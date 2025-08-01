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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CXA3PW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMGtypHY7drUNYsZlaQLPrydBwAhDswSw4vLr4LXleAiEAujUFi%2FLLYk8n9W3KFj3BBBPM4oVoAVLEHx1qsLxcMkAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3sp90BiGqMdMewZSrcA0cFI3wJJjymlcpRPtNIuqb%2BSli1f9RHj20XUUGS0Z9RbMcHH5AHgTcGhlabJnwtNN4otpWzyoZNAvTcZpao3sAlNIWkhiJWaCcAx5tWkr7Hnku4dDzqibjEctqFLcfzrKgzQxYEkPgOIbhUX8EBEGt03a516JCuygOpn8sAX%2Br8WQCG%2Bi7%2FffckCubjLCZV5c9VMHDI1GNWzsr1uhfhkM65jBH9%2FnynnUDiM7IL6%2Brd65yWh4putRcUQLaOshC6fiWvOYyvnp3GuzRyu3Awqw4sQxJZXGGP9ljTKEx7H1gas8VMiIFhSGT%2BbGa8Q5YXo0z6gExoyCpAHyIUgxx8W2m19P1X7B%2F0Hm6GQZCS8zt0PQTdvmW13%2FIspPAccfVcjHWTuWgtB8mLbpu9ACvdABwWTcpf1lAMjbrGtO8t1xpNyi0lQLZ%2Fjda0eQQ8%2FwTDWNeqyqHTuTgW%2FbtTFJrXHjb34gDnJiEe2IYjLy8ereEUIzpatfomkcqPF6v2J1jDy3BE%2BEBQbq%2BkZ4B%2B4p567RNsRX50WPjCBsGIEJeeyMfi0ITkHqc1JqIj86IOvawjOjM4uScwW8Z0UhTHmlSufTQJLamHJgHOSl6hbG9sJ6SFwT%2FrWWHMPYnvP%2FESMPjjssQGOqUBY2ZEdg8GVMwNecyqU222JlASlrvKf6QLPd%2B5MRLsD9Mgb3JwX33snGhGE1a97q1upS4s5vUBcfX6qDIItWCA9b65uRL7TfeuiUv%2BNAaq6Dj7jPUCbZm3HRDZnXSfznEb5ZGAP1jsCK7C3uTOF0bDgbXGDfGOWEHcktrav4xAxjix6MD0zuuTRWQ1FFF%2FG9%2FQcYe9Zmlf6Sz62pgvlrwjqJTkooRw&X-Amz-Signature=c4e31d20affe9389688cafbd0bfafb94cae221ff9b7f559721f02b9c600a24d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
