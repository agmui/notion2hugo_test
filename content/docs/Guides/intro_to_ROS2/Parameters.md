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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KJ2V2U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaq%2F%2Bk%2BS6qifZmUPg%2Fa%2FWgEu3w7akyId7UuNv5QlmJ%2FAIhAPsn7Te%2BMSLruGoAQHpR6djodem1m87G%2FY%2Bbh%2Fb8pSK7Kv8DCDgQABoMNjM3NDIzMTgzODA1Igzj8iLaLjE1xgOzIKMq3AP0FZegn9LNb6etbvA6H3sRUv1et5bY95fm5caXM0%2BHctNKqzvpZWSPUqgZ1TUuEH%2F2koHg0j45VViR7nCX2XdcT08%2FS%2FR5GPCFKKJpGyCKqid2LYyIRPDip2jqzYRIA8Hp7qKOcZEJlDMARxTshzY%2BYAnme9%2FGfLzE53%2BeqJNKd7Q4ECoP5o0RkNfeXhDyLd4fNGISL3I8AxPMHTs6Wx3N8Y454Tfm0p8hJ4yWsLDtvWZdwQpCoSV%2B6P5qZMtnRMZRFssxC1AOFw1PCG45RInqSqKdBRnIYjf2y18SRa1piBMTS2ChBUC%2FIEL%2FpX7flFAsYrhbcjAfLmX9n1OI8RA4oUDpx3L2KWSUcaE8PAIzo7GIZr9Z9kRGUu25T7l%2BGnW2cG1Z%2BtZpj%2F4tQ8DQi6KPv7kiYJEgAMN9WsDKcrwqwBLdXnPWd53%2FEZQVE8QEUaH1pqiVS7hrE3OPT2tKhPJopvLhwZSWlYXh4QH5%2Fe5gJvzb61T5D3NhtIymL3uWuQHAN167VU91pet4znaH%2FCdzA6LxxqSiM0rHE04MjwRIoeMy%2F4x2s86NdyoQNEAjTqEIyXiWrF3xiJnADeEPZ1Aoqk0qwZ17q0bwM0di0u0sLP9A74LvgLckFzgLYjCVjZK%2FBjqkAWiM2gj1dlf1uBDMF%2FHklrmGw1mmTEEKjzpNm7UCMonMQjioljIO2DgcgpHSvVeX35WC0hD1qlKncNCpVc%2Bkcfq9sJg%2F4SaUk2fsWrN8mn42aYvEWsFQiweqTtjKZkbx4w%2FhcdMtI3%2FnyEJV5vhHWCCbRlWnQkbbOBaGek6wVhfN02KfsLxDiVSp%2BuN%2BxCzsi5NBFK15W2%2BGDTBGWGwINvSRVaLe&X-Amz-Signature=a6e8ed6aacc20592b4db629855f1bb7351bc4f84613880035a1252909779ec19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
