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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663TJTVCY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDSMLwS67N9uyhfaE8qhrZbFrH%2Bo96t0zC4Mnvbt3fIPAiAyNEIEMqzuyPdo9BeU%2BCTNpE%2BZ2NVhIkIm2buB%2BV6nbSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMO1isRMQeE9cksJrPKtwD4oxJv%2BJ5kkSsG%2FpuN7019i0Bg3V4etbaws40IWMMMI1RHCMqVv7R4VrESNLrXW%2BnP7Z9ikH9UqJxH2WATqpCyRIVu2F%2BQBlbPT%2F1zl9QbmkkJwAx977wXJ97qeUc09HQcASCX4Q8Wq%2FbHOTpVmieR9F72xModfFulTAhNa2zqcRNzGIkPToC3M%2FC327fe%2FZYkBwgSgQptzjG6LtdwjK2gLVIgbDjjvwEovkQ5t12fXtxG9265x5Q5xiff1%2BOXGhwKHtDDpzyjR2TnGjJkqMYzqUtXv4ZdEoCbEQNt56qlqtLZUYbGKBPan9e9ST7anqunrib8A1iXCQ2UXsb%2BCZIIHo7mHyeb2ukpfyddhWLSn1JhavRpz0FzoBciQEzUi6ZMyLKeAiQ4Cb3dn1KsJqmmKvu0J85betyGLbLuLr9TtM3LADyS4TWUxD4BIbe5A6mfxv8GI2LAV3sWkbgrnIP1LUQp%2B0xrq0Rs0d6p7wv0qv%2B9TakMDesQEF3Jm8CH%2Bxmz3lRnL5UAl4rzpZfOy5kRLkEZoDiJiYMCxNKG7eYc62gJ9%2FY8Y%2FSM%2FvcRDo3rOQCCVnaflbwGUtSTFm6Mo7kDrkuixkyOgVt3Ykwclm6bORoWLr20iyXAiDf%2B00wlOKZwwY6pgE8M5i%2BDpH1ZzItCs8F%2B0kh91Ze3OBnbqtNrPmma5ATq7xSd%2BhMN%2B5uwpQMsD4p9R21N9GB9jg7L%2BjpyIppHcvoZoCe%2B%2FHgt3UQEMgfK0Yg8rpCTnfEKIeGpDOIx1HaltVtxrCPieFPPBBHDUIeE%2B%2FoAsYjDTk%2BK904FUEKGAcbTcfS1tzVhjr88LSA2eYr03pVOPL5Kgh1Xcs%2FXpST%2Fd9M8dI5vkFr&X-Amz-Signature=6d869d31a04aeb64a7660775e74c2eda9e1143581385c6bde2e5b22a61a46be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
