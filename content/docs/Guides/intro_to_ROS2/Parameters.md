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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMS77233%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDA6pQ5sWzjhCSxO88GfuusCdTu8wZH6KPjaISmI3SFNAiBQgwP705F8yDAMOJXRe%2FP6ovq1hleU6qWOpQUf93NaCSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDdIn5xhprZAMJK4KtwD8KlmYyMV2Ig4zUlrFWNRhmf93eTZz7QV0%2BfbwlMNUEoqmtSzsLgVq1XaeTQjHt5IFLF3ZtQpvcNgLUOZqdJtSl5Evlxg0R1DCWCm7WBFju36N782%2FZZI6SDUi8bO3vvyTfcUHZc9u9T1gn5Hx%2BzGnEazZPTdt7e6R%2B49D4nKqtbzGFBIt5Kj4Uy6tdug%2FUUnh8TpxAMTQUs7rG5wzCKXW28VF6dS%2F1FNvKsf5x9un5PrlTf%2BPapzYzBdKQ%2F%2FPWW5L2TdCRSWb%2BGdDJljAFApRjdYB1xIUHVwDpJu%2B%2FbKgdbpLMlvXW3spXPv7HydDQvYdpw5Y0Y6X4sR0HI%2FXumZBXwzsoMpjv3wo5ZW3%2FjVu5cFjs6fHt4%2BC8YjmTcB1KIZi8fqwb%2Fa2W8VHSeVMo1f1f8%2F5B3RgH%2BE1p1WrnxF7EtcpWIXPoE5Ii2MPbh0Utj7bMh6jO8O3xk6WAlr%2FJYQFr3YRdb6KF%2FPHBM3dSkWSEtc2BGH7G6QFDfusEUlFhOi0YBYY3NCp7iwHnCYtVYDaRuZqBrhosM5meIbxRTjD%2B6oVo9rS2z7FQRQiUudPAAyewpUS23eMb2yoGYlIm83TQp%2FWUBCASSIMVxqHg0yjdm7tbV8xnLzv7gOI%2FgwoLfRxAY6pgGgfS8iC5iY%2FYjyPyJF%2F8jeUbulMRmsybsZHgDKV5LLGBydlCXwEYYq4IL8gcybXB8xrvxDQ%2BSpzJ1WVYj%2FI2vjaIf4zfQn6wXspiXj%2FKyTCxzzEt2z88QKc9DHDxFaA9ApH2owyYzCUk57KbVipvMPrgycMqCykc%2BS8ZuzMVDLYOWSKTfTuH0oL1bKBF3rvGDZdwVYt8HB1rxWJDUSO%2FMNDtE2I%2F2y&X-Amz-Signature=26c9072064c00a4fdb6c1ee62e376aa0103f383fbd43df7795277c48878fc5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
