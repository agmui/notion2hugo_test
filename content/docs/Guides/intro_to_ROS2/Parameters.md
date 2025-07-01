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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346RK36P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTKNvYDU7LKkuJqh8rkyNv7HnLTab9vINhdSJpxQlzJwIhAPx6o16icaJevV4ddE7NZ72xcyfWXli1kvFcAXLq8J8ZKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcfwRQEmaQ%2BwV4PM0q3AOvmm9Z%2B8T66G5j3J%2BvCjngvZa1PKFpzh7uB7KIhLK%2FPCV68bLZPe0AG6TlFTpBP0AKw8GVkCYRVMbjKiKml9VYN0FhO4bg9PI3QEJhUWYgTZ8%2FhpGqSSOXl9Gqi9vhnZ740NgSYu%2FmsUey5iAiUEndWwKjul8QogCno2JPX5Itti4YnamzS2EIADerV%2BF83JpjSVvwgm0moYzUlWZeptzt1UUfs3O8OXEJzRaXjOI8rlYg%2BUGq2tmOFgFVxmb%2BG2UH11XkGF9QnAujhpzGb48O2Hu4Xfm2DTFB%2BIo5ehhEUT97OPjVK7pSfxfBpdoDdRnkQWYt61a8jeyi3pycCAZGLJ1%2BbUek7xEGBf2iRcxnNmAllbzglUR867f9qroZkv5NfzyKzsXU7H4SE9eY0A2EsKr05IKJRBOmO%2Fdev8BPbP%2FgyfVTRqcTVHVSIrF%2FhDejNnP3dWrHV967cD%2BL%2FryPt7ua5sFhuAiBn7U864Wn7easQsvYQDOrL6btO2ZO2KCtB9uJZDKGrsyqnHPcTTm%2F3uOQPoKI9S2ftekefLtFdS8B7WtctNSjuyHkr4zeq%2FLUJk3ySl7n18reEr05vyZDA09moSxPYs7oZzx%2BBoEQvxTPeAHA7C01MY5X3zCuyJHDBjqkAVDsdTbNaXSe2dlntFZLJBWUpJjCMG3wwLCah08WRp8eVnOLFHNvCOP6beMv%2BlbcWhXeOgzNQIPJVhpnWrJHWbrDZn%2BlKRr5Kshzm0B%2F%2BLtRgZjO8kjB5rpalXi63zWa%2FgES96%2Fg5FSySITm8ENpOXgNOP%2BPoMGuxV%2FuN8394NPwIvSxXzO7mxRHDwD3V0Hd3QOQnp8eeVPb71TEDqyQUe%2B97f30&X-Amz-Signature=8ee5da76434780b34a6f2615368d335bb505b28bbc3271bb93d01b79aa7622e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
