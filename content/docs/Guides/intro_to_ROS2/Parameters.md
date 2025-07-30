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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIXXTV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIQJxZ948DYa4ZEoQybN5RyTU70YqhGaLH98igim6KxQIgRveLOtDN%2Fz4kb4gqTPrHKonOlefePRGVHZsHBpqXaoYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGevF6gQGxIkxV6yICrcA2kAZzPpZehLrhFaTOekoO1nHjd%2BWJfvqu0T7ac6VVw6u9RuGWP9wrBYpRWNx0oqaagDWx%2FiNvO4e7UBQDVIHg75cy0cj9BaCU48g1bo3XaL8wPM7ayNgzTLPyM%2Bcq1rEHNCD%2BOGUILZGE9DTn3bf68nZIYL%2B3x99SI8T55KQ0fPlP4eh9VXkIUjZy75TQdM1bGSg7CUT8emzK7CtC6XAiyFT%2B0aAWwEb8rQRkVkZ%2FddVzOvoFgxHYBp3EF80afrDcqMIbSE58ORT44Lg0xKmZNonUQmjaBmDAhbo5m3AH1F2glbFMUrRJvIFfb6uOl7yVGeq%2Frs2enEnce1UuDnWR1Y336TxLU%2Fa2TtcgwO%2FkZGvuWMFQSewNdVwa5j3wk9kisxSjjXNynGwmc%2BI%2Fsozqt9ePIFwzKzAzdbGG%2F9Ga3QUY8Cu0MbwOgdyLDfDklg0Iflp5yaBUgfHpPiN0y9cof64Nr6MEgg4B4aBRrIRCuGpQ%2BoE28eMRaeUTVEqafjFBuu7i3HXHmz%2BM4X4IHinfYcSqF76svqi3Xl6qW6rgHNMpXwTy%2FOsSBM3v9xV0s8jXLs2Km44WLV2y2SVpDQALeoDiuD%2BFpQSQp0DfHQPpKh1M0Ouv9Z2hzccmwrMPyapsQGOqUBK3aTSQ5aIQcHaEMoxPEj93%2Bdgn0DokBV32HeoE29ObUM7xsXgPk6co%2BwS1D5APt17QNQuDmSDcMAR5offgAD6a%2FXPOWiSG6peBtFtQkYbEH7i86n1pvXc44pvsfbQHcUmHophBa0Orc%2FP0EPRepavCwip9JyInXAFti6lDdaw1IqIT%2FfbKBn4PJKKyu68WmK5Zvzyot%2B4Okhv2soly7mHk6r7w4O&X-Amz-Signature=a7fb2aefc29971cfa512f86f6a8d66d43683aaf3f9f4c809f2a95bb66a9ac71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
