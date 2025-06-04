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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSOA6T5%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGC7vA8sfPzvrUGC3d%2BRNFhYzYLTBZ2nawY6JgdVQl2LAiAzFSJZZi2W8YHDO3pxssHSpHKp%2BBANgka3o9ahy37Jcyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMo3l4ZJe%2FunXt1AjDKtwDFJYZBE1G7h6wuqxN4YEYJNtB0nS1tZ0PXTHruW3xM%2FmtawtLRhM6%2F5TnGwVfwf7C1E8d5PNd4QO2YwJnPWicCBtambskqoVGAUuVA8LDrWzDO5bpTULLfnGcxbPsEp4BgIdNGwSaj3xyOwvKX2d4yN8V%2FTVKtr59lyAniREbqmmjBSymaxto65E6X%2BEXuE673dL6g5JRlXyBLj%2F6ZRVr9GkRaF8ctj8fTGzR5oQ4D8aeITUCIBpkBFm3jgbHFdHQGGRmKRirlwE3N6nC7wdsf5j5HEJlR%2BsthF9czufsmtdBllLT5Ht1RyLmor7RRRgWHNOAXPcyWWR1BIRNiMUq%2FZAW8ZxIkTs5Lq8hRh9bmtlK2FtlSMW2ZbxZhMNq6nqkCZHpf%2FtD8UbfEED1Xbf6gjMhNSfqHHX%2BKXAz2rgobYLdDDYIRAdsYMiZfzajUk0TGQqulH815zOZ0InPn0kBCtATqhIdwtaoMLGKXSXrKZ%2FqegDGMGoR91fbUODvZnnu5hKm4C%2B0X8kQzFBu9Q35M2y68pKQn19qbPDzKJCSnA1ac%2Bj8QM15df2OZ5tqDwNxrbuzf%2F7lYcppGsQI0Dyu2XAJEGM%2F%2B%2FG9Jy6gOZffJFKHwkMDjt9%2B6Ief68Mwu4n%2FwQY6pgEFsPR1nuvHwmyRkXMln8Lm9m6Hy2Bkyken0rHNg0zsUGqpJy%2BhRLIvNobCmWxzheaQHc6ae8icCd7BXDLWYjOqxs32sNE%2FPPkXSycMpXVHjaNdSpp5OrjrkA4mnrQ3lmJJhaBtQ2tsCcXKCqETr2YNCZp%2BOMXSUYP%2B7ByUxUwyBaQjq1RivO77XClBDR1TC4GYZ%2BolZ128Fo4MCZfwTQtyhkjRHfHL&X-Amz-Signature=77c1aa9a274702924e636fc7fe78caad8a6b2302fc51dc03b2fe2bde7a750e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
