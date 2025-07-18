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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6AKK32%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCaH5QzQGuX6and1Mukc6Vu3v0EtcLQYqgNcnOabX7FuQIhAO64Vlce%2FuHxaf4Yjq5HwUyCH9xtZktqtZpwML%2FPn8QpKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGmLvJuquptqe9yTQq3ANz5pwOCoppzSMm%2FtrSwQm2JLjQ9Mct64lpU9Sb1nexn3%2FYfzsAeQ45KmjbtwDVP6FHSY430p5pJCgHsx1LXGFzymfsKHdFevidHPr7fThMhYtqQDJ47CAhZ%2B9eut8X9PzgdDu9VJRugmTctys9XUt003sMVs0zFS3NPEGUf3BerkJc5lRv%2FdsxEfuNEb1e36wEhPTtQGpEt6HegTiAsNUdGvlXv9Eo%2FaDexTZcM2BzRsGsBjX8U2FCqnMeRU5shMGzfF%2FASMQFzus7BIPdyk85E6pFAWGFHwR7ipOJWlf5HwAWnvw%2BpQO4jD31fZR6jnqegKLxlfkFsCQdg%2BxVTzfaRUVCDgj1xjgBcHgLxfdg7GBVbMNrd0REjvPmXdcjq7fwcVNJu%2FQHs9BHDiByaxSIut522ZDIT54e8JbMuHfiCpOGTNryAhIlgJpkPyEW12xrBT5ep8PW%2BYXwFA6rEXbmH1oZS%2FZL5RZnn4YoXgv0IWlB7NgCOMtmKrIS2EQsGhzNEF%2F6Idpg1ytxnL%2BftEOr44xNfNeB1X44rKjZaZ%2BkpvWYhpxkb%2FsCkH1eAjUW9%2B22vIweVQVX5DoYmHh3qhMaBftJgGnteFoQu%2FUA%2FW9uSvFMkygouMlX8xAL7DCCo%2BjDBjqkAUUTH3Lb6OYaN4fEICo71pDdZwCLPot%2BZ9fPWcrM%2FTYSKBgGmdSf%2F%2B9GY%2F9J3t4lI4QWxaBRjd80U959JgtDpf1X%2F9yxQeJL62iYWoGVy0R7kwPrENdSvMobOcZzBIceehR0Iu%2BDErgd1HhJbdejtCLCcv8gTL6Lyrw0%2F8P%2BpZ96%2BtU%2BqRy4iQ1kiZSQ1Qb8CLLe6cZs4x7UvgOhB%2BLPi87hET33&X-Amz-Signature=43478a25c8708b947a04cef902f70edf2d5537a43ad54311a5e2bb0ea716421f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
