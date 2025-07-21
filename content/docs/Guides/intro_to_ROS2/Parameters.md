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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFE7AHPU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx7FTLKIi%2F2AeJAASVk9FghFxHKvbqoGQpMA2hP07UGgIgfLXPsQ7PbGboJy4jFN%2BbNoDQ7rYvS3jFhtmuVLSnEbEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM17nxahrOqFpw6SeSrcA0uRgsfnI0S7zTjX20tb6igk1FPxi5PtY1gsNMWPDGX0F1ngxBUYKV%2BUCev7yHqOpwWLrJX4GlLJ550EEsML3kL%2BdWFyoCJrsP44cvHRi2ShMs6OpbAqj%2BD5%2F2ZLSWrA%2FSm5xH4xVt0ZF%2BgG0O2ZcZk%2F3c%2Ff7UueQDU1dsWFFG2xf2yXg3Dsg7%2FynkNmCgrC3JWoOwwpqEQO6dWxMi41TLurr0AXadprjCaLDo0bTL0FuiainWlSgmneEbe6%2FbyWtrnMvlkc6P7eoHp3byBQsddPC3eHS3ZaaGUow6UH1BfzMg4avY6cZAcCWdRTpndiBS8rd4Sv7lhc2ZIl7lIiXYXHrAhNNRh0AJZiF7C6oU1ZZ%2BVF0%2BGLTvwiF8Eoqg74FljQuffbRycVHTD4uFBvn6%2FYBuWV7QDPBMjoR7wywsOE35XHRCIO4Y1K%2FOvPjAMrM214EfN%2F0W1dpqhD2yPaThcq5YaCROK1kpM2zLM4%2BzO4xUP1d7BenwLNzf%2F63eytATlM5bllr%2Fw3tIufYZXDYR3Nz9UQOzJgZjl9F%2B5QC88qDcEwT0MPJ7pdEDjA4at7obfqjkvv94ADyNnHXiv5vamdz%2BgbOGATW4Ui%2FxVknkY3DJeCFfyXIBt85zJAMJey%2BsMGOqUBEBaFq0TqWPWOs3%2BfAI7Lx478gFztzHuOYb48Nqot30Wt%2BQwdmFSTfQRXMfUanFAxcN8tmXBI2l4fWFcMAc29bqmtg5L7DT8lPrbo3TG%2F%2F5kdv9CDt8%2BNuqXOSzY%2FHqYBshhL9I2nYPec2C8rVTb1cdOPfvA603rQJUxBAgNrlha%2FJAyN%2BQiqyOH1M9WGzJMf8anLgAV2b96%2BOI%2FUnN26gKpNmRTE&X-Amz-Signature=86bf5a6b73e7bda3ef80b3f66c0686a0e5ad5f2733bae481e4a44d7d02859866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
