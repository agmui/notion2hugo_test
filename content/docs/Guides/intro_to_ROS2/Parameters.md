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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=ce45f2e8fb8907b1962b05207f650951e982e55eee31d16f38d7659f890ea56c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
