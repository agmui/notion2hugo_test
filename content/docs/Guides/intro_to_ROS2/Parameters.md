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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBNKHEC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDVi18D%2BmZbqSzCpUXsYTYonL33d8Wek7sqyzhC%2BOHmhQIhANCOKlfeGhiyZMbfN73UZkinoaqx60agc8c%2B4pWjCUE2Kv8DCBsQABoMNjM3NDIzMTgzODA1Igx1PBtVLFZjOkPg5Iwq3AMXIPdMU2sKyPONp5gLeOUQQi1AbI4jahtMVWP8tzbEj7WM2FMTtkA6NM1W9%2FOs%2F3RPCUJuTD0ucYlCh%2F4jQLIY7Sa9qBi8%2FkN%2BxL1EzABKq%2Ffsb5lkPymY%2FBcFfyRxYgE5VPHt1udgZIOCnvkdkiaCZffHGAgbdSrDVsCZx2LUIdna%2BMjR8bKqb7CMt0TAr%2BbHsaC2Lg0hkOrfZL2QnEcJEcITXNhrossyMEaTF1hSi8t9jDofblc%2BoG%2F0l0mgrSgwjPETZDMQ5OhyNF%2BLQ0blbM5CjuidayvSovYwnIUYZRP2bmbw2SwvOAGtKfxP0KqKHiTYeBrVINwbQ%2FSQYQEKuNKcMcNJfA4DREjXomNe8892IiuW8FlU8sXqhfaTYRNCIyt7%2Few%2FucisybBbw1Oyc7DOevTT5MDDTlS2A8aHMBc6bTEc9QHygtBk4ruqYCR1Xwv9XedCmsYocoWB%2FAXOVeEWb0ijbqMDeZ4pDJ6QTbF6eZ%2BUmuYZC3I3YzpPqMFEUoZC7ner4iYEOyrSGoR%2BmSeKKuRTPr8becJ14dDpKtDM58TDmV%2BdqvUtQe7bLA9m2v33kfyYoIECRXGRQfQLAhnzRgfIjnF81YKE%2FRuoFmRH8EQAR5LMl3QoPTDclcjBBjqkAfTiQoVRmgmsS1wYsdbFFJ2tHr42tCli43KX8vyJGUURTjLQ0qgByV3hrxFguOynv9v0oaAh23jjDt7jF9%2BSkiJ12qechejnvvyk3zoyCsaNPaq7tVDJxaUxYqbhLZ%2BAKWgyQaNvzKtEcSL01vRWSWF3OWXUdgjmDc56RYMf68T9onS869aoqFwm9QWnAhZPW9fRnycJdbFdXTLVnAhZi2Xqsc4O&X-Amz-Signature=fbdbac58b8860023a46c6d1fa63960c966bc8dd56ca80e7f9fc042bcda227259&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
