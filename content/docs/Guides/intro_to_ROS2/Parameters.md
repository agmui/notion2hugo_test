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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTR3GMQW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuuHso8swqHDYE81yq2BUAnR0EU4yiSphoJ7hAotFZQIhAO3nZARRlKTQIT%2BZMdXblvyBu0mFX0Z6E8hOsTirqw83KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEjfRUYojvazDmL58q3ANV8wTUY0OJx0CMPhXcxx0QBq6HkcTLcTPvtLxh%2BB%2FXylN7knzABuLMBsSLNQBcSqprTVWwIyDeZ5AdPJetzWsLjdzzG%2BXnvHmnLeohQbgd8DtPsx14unUl%2FBDZO5%2BKyHrecCstHSr21p2cbzSaIS6oAmd3gcFunyt89mbRLUmroBEgZC9EtrVjMBV0RwNmiLebP7RFUAy44VUoYKue338LM263FvZu7IhVIoQBF3lzIS9mTji2meDir8y59lWXFE%2BN3olASTQjk2QAejGM%2FGNszF53E1mOxL95syxFy1%2BnOUdxIF1FwIDby6qTh7xXTlcsWlj4iz0OGvxfh3o02DIC3RDc8q1wmLpcHlP6M99Ih0%2BBag3gKyDPc5K22ZsIHaIn2GSKgp19t9XlF1k1Kk9RFmSzqgfs%2F60Nyt2%2FzrOjGgpEdT0Pu4xRvfmrPAg9SiaR%2FywR2osy74LvJKuLzWUaK62%2BDYxFf%2F0cmG0EzT2puw52HxZvj6%2FXtHNqO2BvI3fgiKf%2FrFbJRrCM5fuGamzuXn%2B%2Fg3rqlQF0FK71qLSzqIChMrd8v61sg3zED5%2FHwnzl0ECOsziSYSetoLRorc%2FNvrIFtRCKhR%2F4VwlMCInQQyBgviLMINOb0ORwvzD%2BzIDDBjqkAVDz9ivv8ssXdWvzPzx%2BVFmJJ6ud46vOviuhDVfHHF6s%2FdsfoOeSZrZ6kfOayRhkhaY%2Fjj5Z7dYOb5f%2BPQ97%2FuaGOwx7v9x2N2qwAB8SQ%2F93dw2zxXxx6LbgTfcEIK78iiYkjUojQdYOmfN3w%2F43Yl384cyBUVfwiRYgndAICCDOd3X9njEGk81PoxFhMiEdaMH%2BX64wvPPwrexjNIUthh%2Fw%2F3Gl&X-Amz-Signature=7417a0bcd33882906921558dcc1929672b5a7d7a0e85ecefadfe36c68714b989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
