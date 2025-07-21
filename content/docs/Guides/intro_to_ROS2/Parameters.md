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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5GAKQI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7o49z9A%2B61EmZpRrFQK%2FHdyZJSE1Aza5CqwD3yfacywIhAMffeJfddmh2HsWDyXtOxKcrF3ZjczrHkIfOBIfbKjmiKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igymdra5xJeuDomonz0q3ANGdvgfYLf5MVKlblkkQmN8PjHDM5XmO3GK1o06XSltbQR6kbS9KLpf6YgzVIdyJ6NCRnmLHr3JC9SDyoaKFx28tRbuJYXtoRh7WgpKvNjVgjRAIeKS5fQNGB0fAN%2FtprcK5UkMd6wYsoT6HcFfAQec9%2FR3FemG1KrWdChhES2vEE0jw4lGnhjJjVVAXXvrFHsvGOr09HBty7vNbuk6PiNnCTmLpK%2F3C7bgX%2B6rKEDA%2B2w6p6J5HwjPsMYYxqgVLyMJ9Kh%2Fkg4CWmrNTuTZuUnX6%2F%2BrznP4jaTBLBjdCc%2FcIs%2B8PEajdi8KSdGu5FRbk%2F1WY1eA7Xa9sZvZTFrZsNbKru12pqOUlXdKDKquuMW6FT9fnyfcCC3QWmYtyjZgdn%2BDdlW%2FB3x0nH2Ao7le9h0aFKt4JGS2Qd%2FHRUkcBvvT9%2B8qbnDmto1MQl7XYa1o0CaWfRhBiQHbaw5kUttEGcmltcnMwatKPe3U1EnXGJWG9mCNA8Gd33tFboTXuM8TO%2BumAl7AV85wYt6xww8f7Ii8e9HeiRR%2FL%2FYvoBpCrAUzNl01Hn7uwnAHCihwj%2Bn3MIUoZOGZZc5%2FsoJRT7AdLFQ5WH9aCZgsP7iOVwQnAFU%2Fgd2nNyeBW6j%2FEYwExTDe%2BPjDBjqkAV70518n7r9koLhkomKGp0t513YmkQiY1x8Uy%2Fu1LyZ5iCd4mhfQPGQVWGme%2Bf%2FIhClxelHFXA3YtKV4fHryvDEU9p1yAX%2BhzeiwbPg9G4EODMdPa%2BO04px%2BDhw0iflR1TM9qXR1P%2FJLKy8NafhuHQ%2Fpj6HEcjwoWUvH2P33%2B8RdWyciiFA96I9tBq6GVs3P6XiFq7praua1Knoui16VH%2BI4plZf&X-Amz-Signature=bc31ae1eb533f941975329613c96db5203aa8f6b97fd3f9b5372effd2a0ab273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
