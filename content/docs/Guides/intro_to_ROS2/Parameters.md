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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFKAGNA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCID7PWjxGSmTrrsxm%2Fvwr1v%2FPlkIUEGC9f9%2F4TVw5CCK4AiEA4wQosN2BA2wrWpVqrx3JeWsRKILTC7gjUtIvLMnP9TUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBrx%2Fk0rpi8SmYZb%2BSrcA2oU7vxgxu775kS3z3%2BErmCE7cF6wB%2FhcQJfuQuNFX0Tr0wvc9RpTLU7zQwTjHv6z9SQqPr8nJ3zlk1y53tTHRfJ8Shvldmu%2BXfLVmHT36hGtEsKhRCgZwTKXCc%2BMItGCclHNrPQuys94pqRY5op8ywrRf2%2BqEz4tAgolE2WAZJbKJEx2Xwh8lEtebJ2fAH4b38wJBfINpl4mchN8mODwOK8yv6PSLO6wCug0CLBpef%2BpQFhlBEOdPkNkAUOV4tROiW98n2B2woSEO5zOy8%2BAMlXKyn%2FEtGBXTz1fjkJIr1d%2B20cwlxyUyqmmgB1vkp1LGtSiNZ0eZhC6et85vIy4MSOPewk2%2FRh7%2BHde8JqlUX5ajDejp6lfEoYzhpqZe7LDbs%2B7v7Jys1kN%2Bp%2B8HLWPzt5eivIyLdRmc%2FDW5AaXavThwfAFR3rkdZI4eTxqt9J%2B6lI7gGjQ7UCbPYHZxBHSTNrdKRdgQrh6ugc%2Bh7VG4LpqoSowNh42onq9wR1%2FLZDmFjlYlmk1vv2cp%2BKmMyzya23xUEFjDX6FbzuNCQ1GwzHWi1JEOJWdS95vxVnKNDwY8SFLNUAesypL0hMp7jAu2jQ%2B0bFdgEzzDW%2FnqpF7R4oGgXXQW6B0dHPtDAoMI%2FRgMIGOqUBsd%2BGgrbR%2BvH6iwC5owaFmHf3482WICFgzPAOod6D5fw9amgkvW70vlQjFfBLZDgBlmfQCU2BpFKi3ufxXtiIuNtw020xS%2B1J%2FIJLD4%2BgUF%2Btf8Y%2BIhMAsPm4B3JUDGrPywXSMJ2yJ647gI%2B%2BK%2FJHL2PXUKerEOhscjERvjyj7zx1Z1J8rWcKnVFuYWxnlerYzqZXuiWDDEYsyAVc2jXnZV%2BR6%2FsT&X-Amz-Signature=1c380fa906bd1176aee53beb50f25cdf555d58c2c21a5b50cc17f785a69e6d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
