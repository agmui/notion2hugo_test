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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYY2XCEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF51baNZSrb%2B%2BSgdQnEpbURu0P2iaDf4YHFg0uIOKrg2AiEApSqqNdcF2Xu%2BkkpkDZ0BSPE0GlJ1tq9ThQ%2F9%2FPxCKiwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJMOKs7jM2oTfYl9yrcA%2BHqEsdteaPH8%2FSkWN5PuHhVHkoBpUUI7BTVLDK1yg2dtxOJpXDQNwsLGiImUUQYgKezmfvivvI5gJjdSB1vugYCX3UJR9rCHT1xtngIfu%2BJQilx231d1QNKh9kKttqxfBANV3dokDnDB0yAGy4lmM%2BWe2D4ts5wQww6hV3AtEEe2baYX0mX6UWy0iH862K1NEBLU8VVHYrZ9TWgr58mQFCaseww8qnui3rXugSn2IPvRvhkAC4QB6t2nsFfpm8tlXFu17upCVKjwCayngu8rGo7fix0lxZ6%2Bi3RtARsTl22Fi7Bl7E6A7jxcypxUCks3yW5GVKVhVz1jSnHZArfH1LHSkJaOIO1ql2qbWzrDNJl7eKT0V5DfF8U%2BkailkhkZyo4%2BU%2BzSV1QpCs1T3haPPSIHs3911hpsIzscvmvtPny8rlV%2BqTj9%2BwKj1rBjj%2BGpxnPLmenzEfr8Ca2upcZMgGSRFQTKxCJ%2BtLgcg4Qe1AWSa%2FOzh48bksDHBEQdwZGQVB5VBtoI%2F1p72bjKik9omdl9C1L%2Bj2EIK4zxF9q%2F9M8hyKPYJH19YlYKRz%2ByQ%2F29yTGC0BSjT0%2F01hSnKVQzmFqpYtxGsf4S7JhtikcTpbPDqcXXhRL8AuCdn8NMObIt78GOqUBPzmtYZOyNBxOQXR2Vgk%2FmS13pXtnY8%2FbyEU%2FD%2FZ0skHOylKF2hxroZfAVYTInl54FX2fnE89GB4460ACs3Ey%2BtUMZ0RYuRuEQ5dkroIEpoxAY4yi25PZLIq%2F%2BX75DUljFrpkR1%2B1ivP9D7o5viwqn0v8poA3A%2F%2FfVhc8iuV4qHx246eyJNbI%2BSmyRnL3V4Rumjq1J6%2BUHTTv%2FALYYFAOP9ax2F38&X-Amz-Signature=be79b07bea476bb0953df60b0e755d6307cc8e9b5201030b2f8720b1d4af57fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
