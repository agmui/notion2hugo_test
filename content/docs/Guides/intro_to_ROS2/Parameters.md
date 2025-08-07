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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZPULIE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEX8kh0iGKcGOrR%2FReHJluhDHLr5KhVH1lWtn7orWa%2F7AiAtDUIHSjx1VD7VsWXAJLYdY8a4VD7OONdkuaCrrsyAWCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1me%2B0xUe7mkWpR7PKtwD0vXLMyzqDoBzmeXJM44UYpivNvMZdfGdZcBrgzWF0i7TVcpaIpvg34pe43bazg3lBJFaFh9wN%2B2BouGucCDGMtIPSxRnLFia9YMN3kxH78cxunsQfqr3hSYoSYfRvPKr0zRY8GJA%2BDu1FbE5AT0IRj5fBcHJsM2cqnyJkCgeThKGABvdO0DmupBjMquP4gRgdvv8uxG0ZVSrBIdgVF0T%2FsFJphQ%2BAdBT4PYdgQMmESD2nZet25lOBUARaeX15WAG6gylyaqiS%2F61FZo9YUEuOMFupZMB98kHUa7HUGrK2F62qFqw%2BjuUgRSyUW%2BMs7mJZm462ytiihbQSGvsZsMQDFzfgNdCCKAidFCyinC%2F4No%2FDALe5Wfw9BFt2a4Pr6HDigcXX82GTInR0RL9scn8%2F1IlMSuXTX5mQq8xaBbsRLzN1UKFnQmQahlCP4N302KU34bCPj48QxidAkRfCmwIwineE5YKqbBlky8Y%2BXA9OgnJ%2Bbe0H8toW7shMrCiM4QyB%2F%2F6pHtbiYF53jq4MMLMPaTSeeS54Px677AtRM96Hz3m2rHSqGFpKypDwibwNEiiuemLRdxN2A8TFCR1unGeNmHlFrRqXCwwf2%2F8gSbnmKHoTCKmEECitY2MGq0w3OPRxAY6pgGCvPvDCW0wDtstBlo9SIy%2FWSMhQBfqwRGXAHTLMidAx9YukcCBi4bIzzInbAkVakDgEvrIn5tJng3jlwBuBgXAKIjLuw34TQe0cEni807piNqsuqH8ZCcoASvKGj0rnP55NJAznBZkPhkuW5WOQOYL%2FkWtOLMsL0y5mHDTQKcOflVztq61aBCrtkvx0NJ54gYRAD5mHBJJ33xjTtEv9G8yXO5nTFAP&X-Amz-Signature=3f4506e8585f1871cc58aaf98e30df9914020835bfd7b95c4843e59348579dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
