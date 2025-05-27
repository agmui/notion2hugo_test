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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBOONWY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB87T3iziw2bIZ%2B6CuzDbAlCaNr0hVxDx4ji23NWgAi9AiBMpfmQGeW0bfC%2BJ%2FDfhbHZcsbGjjPYTBnRMmtguiR8hyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMek%2Fax2p3SxI8JLY6KtwDusdI181T5vmMUNfd4hmFyvUnesgiWPzeCt28%2Biq7uQHVRplWO%2FrimHm5MRXUaSFKgvsBgLerViswipXFdQtlRUlrqfSIJYIRzBYjpqrI0LfE1j8M%2FmYmy0U9ssDWKgwMPw81vncCq8xo7vSZ3b6hYRENN7B47xllwa%2B1lH5ZZZZR%2BXoMY1kaqQyJ6pTr7hvoPzScxFqB1A69UUnsjgSSurXTcwbdFBgetvSt7iD3PJ2xEKIyygZI1JXFRc0T8xG5mqzL%2F7ywgFGrpcOMWMXcvkXTi6%2BB3daN47fDcmWGRabcJ2a28iJicV1l4H5QJgF8AJmfzxy%2BmhLgQ8TjS1J01vKpcobmCNnV6cF28%2BVdgDKA1fjQn3nN9X7XF3xSbLnJlXb1gppOvnJevkJUYXW5%2FPEVB%2FbbRgBrj1972lW12E11k6r6t0A90VbwGfTMaKv5MUIw6xC%2BasxhHXugwtPhmRTCBajaa7bOJzK1GcAtOFBrJcztPHTynrZolKnTT%2FUwXuKJDBcZyV9JX1mhFUREKIcnPoSoA7LzObED2iw46OSvDfsSbtpButjVRI7j7LazpCwavtP9SaUfCEz8MhxQl5nWI%2FlOv8qdbSMFF3XZe6QtGC9uL9JyW%2FD%2BMo4wztTWwQY6pgG%2BJ0ek4EwMeqjehEfgvHyVUgeH3%2BfQcZJ1etOgIYvfaNuk5j%2Bo5PMfYV9ZzCqLrKFkX1DIgNaqajiUcfHIV2Ql5Ca4rSe0794pEhlZwPKQPGLxvy4D9qAmFArbrYMufKfJabENIahbyKjoJDKxEzlj89FDQ03cL1w04EWbNwtXNOP0lxcBW%2Fd8y%2B22OvHenhvr3%2BYk1UmnBuwuUbWhKbVgExQipSjA&X-Amz-Signature=55ec26feb3abae9c7f0d2eb029d1fd4ec9d974eef080de05e3271e6199a69f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
