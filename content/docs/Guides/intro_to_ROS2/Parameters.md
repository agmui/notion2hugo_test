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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXGMDC6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGg%2BK4jimOamz13IqyJZEHLI%2FzX6XTr2rdNK9wf7JDApAiEA%2FkD0t4xd1DiQNb7G5cjD41UB2DiBL9EMen%2B3ReFPyagqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcVvy01cJhjfsMZUyrcAzwBIbxGD4%2FGn1dg4fxIATr6zsh0n7Bt3%2BlgOaPSBS5ZOPH4nC9TMDij24Gn%2Bx%2BKyL%2BVXKYU%2BM4WLZZYZh4VhFt2OmF2rNuUiyvT9xIFFkRz6xPHLeyM%2FUfnr%2BHI04eUljPAQ%2FmqyD9GTCT24pcT4wnVObOItLdkSiqtX0iIlvob6LukrYQgj4gFtgHNtI8v38DsRMW9XtlNHNVMKAk7cgxd7QFVFZpmBS824Q2B%2BNNMxMqqUcQ8jzjE8130bkX%2BrqPFD0DSThW3%2B8bLG0Gehl0gkmO4c1OQsqYaCPBbm%2BHM13BKAqV4DJoAoR4lMWlQFZ%2F190muPQMVFmmI9Tpgx0X7xl990RtZ13d%2F4MXuB%2FOiHvoy2s%2BIx5izN9KH54GPunR231Xcu60danawyMLIDfH%2BYvHBZTUa5OKpltk80gpt4GGVB8uS3fwFXyQ2p0beIeqzBAxi8PfbK%2BCfqdNP%2B85Bqgaw2rEUEMS%2FMyysvq61xmOyDtj3yLCORn%2FowQgsH%2F962Y%2BDzI%2Fsx0g8gwyuD%2FDPI3d4PbaqylJjdLRcGzzgZQiekOvk3W5i4wl6WxYpK5rqBluZYpgHzj8ZQRaKEle0o%2BI34Nl%2Bv340HL1%2FD5r%2Bwv4AslQaQCcCIaJ9MKvjub8GOqUBXGbX31lGcI%2FNPVLkx8ilTkA%2B6zKmWLhP%2BRrR%2BlD7qPy7i2iPJfXmzbKXbORKqOnUJ9R%2FMaxQ5fse89XuQi4dveLOiNSaJGGNVyZla0mXdkYNU1WTyO3LjxM7t3fjTeWZnaK2e54rOKacKsYA6kOmwKbb765KwCwvJ7wdiXDfobsgtGP38erU4s9XsDMAm8eYGeBRyUo7BOT7Xr0P9I8hVFqstepJ&X-Amz-Signature=f7892367dab5d4823860151720af14aea4bf3e3fa5392f1b8928882f3a9797af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
