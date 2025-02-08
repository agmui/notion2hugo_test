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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5QAXK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCeyV2zDcBR7np6D%2FaOyhAYjwqlZpS2MsKMEgIFIbPZjgIhAOZ8sZh8mpK9BoCIU%2BtIxrp%2F9N3FGlPmc227WxwsUCYYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDLTNEZxwNp53G1goq3AMUr7CKvjczjpYgxMrLLs5s7dX2Yf3hGTTcTgVof2ol%2BBNxoOkqVxfYPyNpFO%2FtPrSk27OxwNCett5s4s00ztA7kEQPJZH4Dnj1XG%2Fm9EslrLMb%2F1wtGBAbzcAAo2S4rTkkji3Wwm8mtRtMQDchIRLfrfV6ZYqcTLY%2BAMc%2Frbpwx10FGb0qhC1Mkh%2BnrYZuS%2BGC1PNRTxHzIdllLY92C8VzGTqz7BRr5AUorVnN87Rw%2B1FQ%2B7gjfrOU1HNvad%2Bn7xqH3SHBTZ3%2BByVEOvLcFm%2BXZPK0yk%2FzyovBOgxMpZABx93MeWjzUZImnERqYLdL2Z7onbX7e8JaT3L4WUP8zAOgQrfp76vXGh8GWcfPPKSpPP1jqAXAa0v29DV0dlH6le2WWShXNKYnuDVxW9YbLWPIHiFpCAEqiVViTaMYyatgXGcFS7z1In6q3S7RRwpAz7lCzbkqyPo8jJ3z4IIZsoLV6fD7w0sBZGnmaO4rwZ%2B5oECYvDldn%2FK%2FYPrdT8E3pcObAQkY9xxszfZYuTNzRav1c4Dbhuj9z3F99d9AyA%2B9NgjCgUcUCGsihYyL5zHOxB0EHVSk%2Bb032e7jxyF%2FMbo%2FVvbjhXSpuoS18%2BlPVgRerYrp5HE70we7%2FQzmtTCUkJy9BjqkAXinIkMTqm4I4qa3WUB%2BrKU%2B5PqWneKZiXZb4cYtt5MPjGq1ekpahWB4LEeuKuHm3SpEXfBaqCJp2mdicrCSnBjZUnBRZER47EbRtX7qzzTUTKIDZQr5RHSew3y55zrJM4CWrRcft0n%2FZ8CW4jWEJ1Y4NJneodY3uefQBlmKg5q81Ed9ygYyZdxLA1iczz1faRKlib1wmaB2DfY07xtJjNmwtZF0&X-Amz-Signature=1da8695a0716dd153e4000b32cbcf55c661dff97909f95847034c51c513f3b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
