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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674S23OMC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf%2FAYvESxu%2Fg0O0dmozJVUY1fe%2Bi4p1UDNI62CMrLMZAiEAnMaUQuUAZKeNYZEn8WS1agFS0uquutEsG6G8RbR2x88qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByYhU5xTAPcIVrJxyrcA5EZH9WTvm0KVYixUQFsfslueSCLNTlL4x3ZAyPyrpATe4Tg2F%2Buvaup90YH3u7p%2FQ3l8oMFNPsDS4wULympAyL5jxprNwwWwjE2oqub1uSkbeDlvQfKTB55jriLhVRjAQjfKxNi68ACTs9Bm2NNrdz0Y%2BXkk97RTBeniux0HGXMQ7fQtWt%2BOG%2FX2aB6UHdgvXaHmRrW3VFRNPEzm5WPSLbQHOiSuwq2jfXIBTysiuHeDOwIyizGwxEUMWCsy%2FkOcQnf4DCthDEKcQnyhOnAgghLgmRs59jStpKLYrStfGV%2Bl1I9R%2BvxWFu1ww8ftmaW3Uzq1McKxvkloSwTZNe6wApJ5SnDVYxpbkCc%2BSMOhPooBmGwn1hsDqkrktqJLMkt5nZRpiJ8%2FRBoge1NY3ehoBm6vXuSJ0hk%2Fy0ah7792SlSKyLmNJoJGyhI55mlwi2x10eiNtBsK%2FPOwkQlivQWcCaKa19U1BYST2Ac1QZdAD0yIwSYSSKcOrBtADiXA5qWDfyZUOiSdLpUGXzAKOVCfNNlbDJWOHXA8GggIkVNLpz6KhMEXN1bsM8TxYZ%2FOAqwwgD3T7EeaObHMTwNHNjAfe9iFzLg2YrIZzApEQQThEhFKLF3XuYuD%2BVVdrLhMKS1k8MGOqUBmhlC4hDUdEm32ziUXcp9q%2F%2FxjsP38kWzLmM4cQaDKPPqYIgayJMbtpwILxJrB%2BlQ3PwmPzh3Qwxv9jwQFioYOBRJ3Zvi1vgW5bDE4AZ0glG0xuoapO04UI%2BjablTEvF%2FFzTS7U1a5SYzesMccsp7vPug2S0b7yxsMFpHX1%2F9E4aCkgGUcwB%2FlzGKp7e8HayljvCv7sYS8LRS0qV%2B0%2BUFh71NLIaG&X-Amz-Signature=9cf5f123dfdf10af7468bdc32c63217f918516252435b6d73c85a5f0e662da6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
