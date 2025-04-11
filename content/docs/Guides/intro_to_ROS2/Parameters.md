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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ7KO5K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCMsYPmR4L3n8wLW%2FyWe3XV%2By4IW78zwt3NLPFvcWhsBAIgHqnNUBFcMXcrtJLhCMMIneeziagU%2BqnOWEV%2BwmoJgZsqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnXWb1uH3tkgGmudCrcA0UEPYTkODIPRWhUhfzloKFQgka5fp3xRW8YVa8ZlINAkGlAlOO7DabHjRRlEYRHJLml84FRSA%2BDJD%2FP2owO1Ru2P%2FTgMCWir3mxf7ZVPMxPynRUmfg2aWecm3u0cfNd5TS%2Bvy6sXMMI19%2F3IhngNm3kB510VSQuggwsb7FqdAOIMiHml4TxTSIiXMcdjQ9ZkmI75vDkQQz6t9sJ286%2FIwZaR%2BdF3g4b7Wiqv2J9Zx88ncF%2BNO%2FATW3zkeaXU9zkJ31mc2jKo1TrUiHFx14kBCPU9fWMJynUUVV9hkx7Wilbd32Rzk3ZtHQ2VIRx%2F0m0FXfrz3j4S3lcJBH0sboc%2BTUPyUaWlkdajwTeg8DcUVho5wIeKr8PZYy7TF5T35dFFzjMjTamP3hjbv1Et7ucjijt7ytl4Ryzwbh0vpwesoZx54FAEGlMl0UsK13q9HPygne9w%2BrrGE3mcuJyZZSznUicpEjyPFPGWbGn7yb9Zji0eWIChxYpbcPge%2FK3Hf0AIj4FdtSMkTutW%2FAs40NCtZITfuQiSNkJyQZRc4EzaJVoGkzpKbiBtpW8xSSJY%2BsVeep4yYlSKHFA8FTkfE6sbaZpbVucyddUzLXNOnJd2nKpbJKJx3LhZmEHuAQqMOb24r8GOqUBAAJSmMKqm5kJNCfQeYRyIOItaQrkntLrSMliig6iZ1U0JBnuxtFVFJ2MKqHiIj3yJPT9%2FdRA%2B9NVEC7R2YKMPXOL0x%2BITftO5IVLAA6N3pJx0lHWrQNwk66bis2XA94oLtWg0eKdW%2B%2BYWdW0mksUBDJjb7b5sS2NwMbAVqO9t6zCVBPW0lsdqhU8N9Yez0bVPOPLPSWPQ29gry7TkF%2FgtK3w5Cqk&X-Amz-Signature=332106d562280863db2456b480af3bede50a7078a9b8fbcdc7d9994a1ad781a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
