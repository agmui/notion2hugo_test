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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRO4DVG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUXkeMcPYQSvpRgUqKRwR5xRsSTB4xTWfvJlTH6z2hEAiEA3iI6oPoZ2Mq2mIGOfP8ybB2XUjr%2FLMdnK1t5Xp9sEXsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4egBR5G5JFmA9FwCrcAwmWPQGAPxnxvgFBH9BpHq0pKtu6ltxxufCAhEPYaTuDe03sfPbrPdXTaonxr8cAaKn2%2BIQefnAVQN7s3GoR8%2F2Iab6Zn2dZt1SUhTrmCmcs%2FFot4XmOHE91JBGqJcUWFcoDuLZ%2FkQM7axoGi0Krnx29axKDcJpmUawM3DRHA4Kwo%2F3wg7EzGkmBL7nkJ2KUrXSszp9xb3aOfSfU4MId8D%2FTfcbeFnQXcriM2Lr9qw%2BIvjOKxFxtkNRFO0VEtjSt1yPhQp9JcGH3dpLQxNAtobjT1lV0qnXy%2BKuOA3k2E8r6Hqd3ocCwZYKVvtVsyb05OlM7aTf7tJQel8p8LHI6p8PjHoGm8PH%2BnYx4RWV2JqvsUag%2FP15JSFFDBWTCIDhXmG7U5GtGZD74N9xAhY%2FGIXg7ktecTnXukR5J3LcO2gcSCPhpytj8WBkrVjwToDFExveRBpshCEjWiDdpvUiAGx%2BcyPIIo2xmdHd%2BIutpeYolAVmOcjlFWyHVERU8QujJPQ4%2Fm9wmOM5Q58UJ%2Bt%2FEgyrDoF%2F4bFKvLcnFlFbqtVurzjvM5hDGxBWTsmfivUL5tQzyAvbXizwUbL2X3iqKvJ6dAFbsSGLk0EfCoFzWhdMQwrETtcRbG71B0meGMIT958EGOqUBgPMhfAxFqnsgAZezEnaZSjsGhB6yWcqa4qJOLl91W7Brsmlo836T4Jt7YmUhMPBBUxw9htCC6s0%2BxYt8EvWTPoPBcqDvddcxkLZYBjUlpEkzM3sIraKG2b6opnAHfRqZGK7h5anMAmvAoAmdGHqxP5X6rMEgROE8KLr%2B556XCR5E%2Fhx%2Fbq9viyReWnR1Gc%2BfKHywbwARX1cV%2FxDga8RemmTgExx%2B&X-Amz-Signature=a85bcb5dbc8d6a95f915617b41f11482b998253fe86c7c345dc791657ba6eced&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
