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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOHQETE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCf%2F2Vkt8EY1hA2SxXyTDUQkPtFZRsrMChjQIUsLGL%2FQIhAJXaC5k1Qv0tj4Wn9fgGmt%2BPnJqBkGX2P%2F5JNNn6oiMaKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl%2BvKYkIZsMLgN%2BUAq3AMQ%2BKhlI43%2FJ2u1p16P3wAS4A7bT654zDd4QlHSNC4bHLWNSURUJkOk3aIjyzl40d3jOjYpMT87u7OzLoFC6mFuH1tmEmJOPJ9pTkgGXYsKRaw6EIyuLHe6Y90QMrgRV0SukaHgqIJ3ouFKxq3PdSehgv0BoVn8JdHrxNZl2KMdFF%2BRMsKXraGbsVfbRVv8WMcGkwu8DUfALMDKjs6I8xE0fgKY%2BqCSu0yziyLH%2Fl7s9JHJ4Vz0tsGTcrknMaKpk0OB%2BfbhHOAGtZF90iEsbdtEsjbfBQy0VvNWhg6LYAenWgsbh7s4T%2BH4S3fQAlFvieYue1tBWnJf9qbZcVCJ8%2B9VizX8tCtjdhykSUsS2Xxyv%2BujvYg%2Bu4t2jzGtrrmax3FnFfB9qUDzU5Z7%2By1OCC6iEBjgLpLzdOmGKjidR78yaoFcGbzjcie0jKHgYwXTRjOXcZmI9SJRURgt8jG2te1%2BZ6ZlZ%2FBzVcgj563a7jbFzTmb4oxF8UYJv4cuhSBXiUlEBSUdMLr%2BSXAA6iQsEALNYcSagyoSS%2B9z5OMYRYe4nbxjNIjYFqLjus7Be2qf2NC6YwQ1qR%2BxgvJIEjFIVf84e7Z%2Ftw3J%2BwOzym3VEydQMTuQXs1A0ii%2F5oN3BjDXnK3EBjqkAUx3k9WgF1z0GRutM5%2BL82adWXyrVK5z1%2FqyrwEo%2FztXTaO4gQOXRjLFq7sVKJ%2FiKjLePjWdTSKoEMmig3EUDghPzOfdm9Z0ldX4%2F8%2BR9gQurAONBeJxxPcKYNRqyqFiEIyCjDoIGwhczdn3%2BcDzQTagTv9%2B1wJt0mGxAy1JDMMhJDuSNZ045LyduYtjWJn48%2FR4z9oAFItvFqA5dmPdO%2FWHbLov&X-Amz-Signature=862d74532412ba3975406de45953a5310ce5df527cb129af98d361f7b3e689ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
