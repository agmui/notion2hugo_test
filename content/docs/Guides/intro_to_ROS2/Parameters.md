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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTLDWWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCjfDWOP1aaNaW4jS2UNV7X8OKNZ0yYpcFx7fmN5gi8hAIhALpf6tQdmrKeRT%2FVG9P3XgCwS5R%2Bd98KrmHA1V49FaKuKv8DCEEQABoMNjM3NDIzMTgzODA1IgxpzmeHSVJdPK6rhIUq3AMzf3FNUuAZjiPK0MnwS00SVDxKugDEYGKw6B7tz2EdF0lzSzr1zrB1ltBDaN6KBYZF5DM1K0BtlxQHgD83QDBZbL%2Bm1OD0dsQ25HqBrOKK8OfxChepL0ExxpbbDdviOFHeR40mWLuPpGUEPySdcXWDy5tzTeUu%2B%2BHQL1PVdnAdockNSlC1oheRZh6bpxYNXQH%2FFOg3BOXwIeTnBFSuOZGH4MjuuQ36uTZQw1YCEVFcKyPqAO2%2BOlAyHBNMHM0Q8gDjDe17q5ZfLl%2FS5Q51yXIPQ83mC5n2MHKZzybCU7dHIdOV0JQgeINVk%2FGuoPfOXVhOgrbXr%2Bp9pxesnJEsLs2L0xP1%2Fl%2FOWSdxyJSRXZ8rtP6h8%2FswxwtWLIQDFQ7it7dcDTZJo59qToUzLbJ%2BQkBYkLkHiBko%2FcofBkkyVvMisguNc2utoGMlkm92RADly0%2B9cAAdCQORJpfU4L3o%2F6e%2Frghu4vc02ogFviXpd3kCg46hNl2H2hLDsuDf2R%2FPZoNbCXIvLoKyrp4fRJNaRuR33T9JR1zSIV18OctbrKX34wA9AYsZv1nX4yISMHYLqMc0dChCCVCFdJC6e15iA0GMATjUN%2FH2sBvo%2FGbvomhsT24OBDkVmdoUmRNMszD%2F28HEBjqkAQwLzq7L1Nl2Ax8YHv%2FO2r4V6FnZ1Z2o1e%2B%2BXswn6ncOIYOv9ZuX%2F9yGWogWjMQJ0Av2NUK6ILt4CD0a6pnHUTRzP209Tkw%2FDlcGXxlmujBRhd2b%2Fn%2FDdYgj27GA9hFZHxp5xkuo17%2BRUoHoR0i%2FwoJuZQIFjKxqdNByAXOXZgBGYrqEp5hqBVvJftHGqDE0LG1zwgLSQr8kSlD94h3mKJa4emqJ&X-Amz-Signature=c967547bee6cd2f99d2b0b2b6b2445ce3bc789b56d282ed541587726633672b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
