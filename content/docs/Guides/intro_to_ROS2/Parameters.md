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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46KPEFL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6NK6uiVyXfGj%2BHekTx5%2F4Zd1jVTvLPrEIVfBghnG0ZgIgRaHR2JWbB9%2FebwDnS1SJYSJU2PFUNB2xCt3lEKjx3rUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtWOhrONzLW50vKlircA88brlyEw5%2B%2F3eEWO55WveFkNDCqVdnSFXkQqM1g0Np5rawBL9hhxIDaIeFef9tvo3fxI%2FXf3lkJDizxuRTLKPN41RVYgRESYmIw0iXakGz84g7kQqzH2foepv3crpy%2F3uhW1hOvTUVwlS20z7d%2BZM6Uqcvj2GVCVWnBUuY3RlictOHmW%2FAleMh%2BjhXp9v2oQFTWJACvgTH37xEqFwSkNEDEwy5C8sX5c92V%2Bf%2FNP8b0VF9mkiZ3BZINnAVcdr8Q4iGE8PEci5W7sDA1BHdoLzxnq4Kzw4HjvYcuVNEaAeuKpCaNp4APmET4xA%2BtFRbb%2BcLXUMxnO9KxT0lU5TPP52AlXGXuYo3bwFHpEmCbELeDl8LUTrbMZn2nOO4fFKWwCOiTCwNXn9%2Bq7Mknit3e2xUo%2FzG1u%2FoCImAQMIkDH8pdn4E8ATSPpnx8sVI%2BJ7yrODJadewVgjXbB7Gjyb4PqSaRYx3eD0zR%2FzRQ7sdrrZpkKogLDUOLAxHYwe7RDSkUcA8LfNkzjv8x24Hnvw3PZMOd5TAL5SmgyxrHMYIcwmKKAQbLVPA5nDtgrlNCn4ADuqt9d3cV2oewsFQpkQEFNk775iejc3TSir62977b9SZAFH6aY%2B46wj%2BTQkLwMLWnw8MGOqUB4Pep6JNDOidDKDNQstcEc8NO%2FPejwIf%2Ba1xxLILHpXqpCD4YbcAcXMW5%2Frwh1BGmEGOLSlhLIHssBejUOfXgHkTop%2BhkyS31YrZzVrxvAZqJG8VUfzvOXfOg1RinqnSGO%2F29msbzlFcRwF3I55AHbOaAzg0NV0uUIcu0uPBCA%2BUN0D7qAa9o9enSi9BxPL0Iftf81BEKmtLZn6ocyT1hkA5Qd5zE&X-Amz-Signature=2055801d72da195ef22c3757fce8aff9c894dbf6c06b67ea1b8cf2b26b1a2268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
