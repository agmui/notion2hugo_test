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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUWMIFK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoZ%2BZ%2FPpeTiFezpTjVWJAtuXt217LljrCOZ8%2FKHwNO8AiEAud8hQ%2BXbKBMuMpFm6hsEcUon%2FQl%2BUg4ZFVv3wfGIC5kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZkZibAhitzn3wMFSrcA8ptvzdUw1cLt%2FeENd8EcVtHR%2Bev9zKy8aAPoeiNPVdzO8tqJyoSbmFlJqX5KsRE5wAgMGx0UuWQJtw%2FroXqxla1n8hTS%2FIUnlZ0qMLyz0CgNIvCr51nSaIwQ7UxuB8RtCi%2FiGTeTXnYUny7E0KLyCXsBRqVmxpo88tG%2FZU5qsV5L8XKDP9lBuulqMZrLlGRzG4TZmj9%2BAaUqroZxNVrY1HtEpAvNSosqroPOeW12HWutl1OVWpV%2BW5ix2PhKwxFM4ZCuxdlNZRYWs%2Fam4kuWWpU4VlhFsNXe3USLIGGe%2BEGdSQ1kiKm8Yf3hJz6kmZ3Yrtq7u%2BtUvSrJVtiY9Yn%2F6wHCjCRaZqsfXdCl19OjTkoVmx0%2F%2BuOepCo1v8NXi35cQHUshwgGSLXGspHUaZFGW4rsDfUn%2BPewD7Bb7vjgqd6%2FVawOYnVxiL%2Bm2z92eALm2AjUnfif1pdi49IW2axq2S%2B%2BcJmfndaIj2TYV1BhwaNHqQt9F4RJgehQbcqlsozM2TjGxLgb%2BJdvsKMGTBxQnTbiLlYGKpEQBSPk7CBpEwAI42Lz%2FsuxNruX9O6%2Fo97hoHYEpMAq%2BD7A9oBqKo72%2BVKFpxHgr4xXH3j8RtbA0Wu0%2FkAthhwIlO6DIhbMI3278MGOqUBojZnWkSYKuDpjnnl%2BclhtCg0%2B1mTZ47QVSBH9CNKyHHM6VCeqhRZtu9EqYxDRzeS4x%2BWKF2vtKDnYDFUblkbE8cRgstVRgXxBtp8tWLez6I63Ej13HBiCI8ABsnX4rRiGlbAhOnPZ2A9QAZTL0PsmyWCedg9%2BJ7qtrhVGNJElwmhEeSIwhpTihTlRa2Xz9K6g2%2BMKNLpVm4ySvudbGflz0cSHQnC&X-Amz-Signature=061f3fc44e308bf9b885ad0ed45b42e3497a7878b7f3097cf416df56dc634c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
