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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBX5EHY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJF7UpjIHj9ggYmgIX%2FjBlpslnUEdGCSR%2Bt1ZpkWVkSAIgIdjQzwNGFTOD08JS7gAsv68jSzJi%2FBLzoeZ1mwykCiMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm74OqPZ%2BkgeG6OvircA6sjuGl6zHECpI4%2FyKH8rOu3Bji1sWbHiSkoXdIkK3u9OG%2Byx0oG%2BVe9LPd3Uu2hGB0Q8e5hpOw8E%2FnNxSxk1fxQ8hh76lgcHxzKulTA7UlhZD5768zIxfcq3tNnLVDdxuKk1MLUBgG71Mp8M%2BDXtVHgG0IHRUgGaCRRtaOoIdU%2F8L6VZFg%2FdRMegCvJ3M9%2B8VQD1sn0Wn5woRibndpTdB%2B5A%2FPddzk4cEplyTjEoP8CznnVyaoEsO9qsaeKgnUhusX1xl7sfWb09ys0GkRWwB%2FVcVNj7s7rs4vRIlYWqm4LaYWB7tzlAzZiGfSUaIIuus57me0Sge6Vh4eCPeTVGnOTTtV2zG72iWNEKLYtOm6JR3%2BfbkcYqx7ck2k6DOw3GK7aIN2W1YiTLr30abupIfhiMKfDHXFVpdvyLOVUbtQULPyaHMPOf%2B%2F13ANb4D%2FYDbZXPuqMeFyLBnoFDMEYDUZBJMuN1LvnccsO40ctiKhOXG9Ip%2F%2BFAKh8t0O4myrjwdAI1CGLYbUIlgKGthh3aQxe3VVHYGKcBMoUmUe%2B53Rsvx9kv2H7b6LCidhzFHeBbs96mGzbIYW7f8RbhvMhAbfqCVFs3wN5TnaTinmN3rqceWntt6gnADVdK7Y3MM7R88MGOqUBXXAN%2Bzj7FlwWUvJ0xHR%2BA%2F716KAGQnsilTz8BbdAjnzONsCzMFYAq1W1bY9TwLz6MogA5V8wlgrzQYMNdlfVMQpcjk5Hz3s4FXBaaZbwp0LfXXyG6j929wUDkUDXDgIiWTHW4%2BBNlHXTpE81fYPJmXSc3mYJfap5QYdzHX3zGEJn4iP7ariyBMR1w3ILGeCcLLs8butlOuBPzxgO%2B552%2FPQYhGav&X-Amz-Signature=53daafe6a8fb6ca13dfe131ee9d5cb23e263e5e35a461db97b965e4c854205c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
