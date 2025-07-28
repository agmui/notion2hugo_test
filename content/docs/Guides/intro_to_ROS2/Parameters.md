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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6OXNB6I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBNnl2ehdvEW%2BFVKkCvw9G7fBqdB%2FqjsZshqlllOQtklAiBU4PI%2FPS9rLoKp0xSzgo2ZpGn5srKdFr8S5BPg5qN24SqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkWL2WDyT2kMpfcnsKtwDHA5PNnbusJwYeEwHZT2vJ5vZRLM41Vk7o2umLZV26XglgCGa62OJaKDoOOyvNIftFhbqDiRUwBbCc6jvckb0dJQ4TkTzCFkUclQQeuqt22hVuamOVrrJbXWvmBibNECKoIZMCAi4vuq17Xrl%2F11MetR5ebP%2F1uqZBM2DvJVp7wIOBMaMwnMDZ0lpJMpfbf9kfTKnAIXHH1zXexBbxiKKu1EKvkLiQyc3vdUpJSDA3ZJI5xJyZcwzzDlD9nShCA%2BvHFvDK6AblXegvTZMLl%2FU5we7uI2NRVsEmtcxF5LfLYUBdxVdZTY%2FR6jd%2FFmqlyvj%2BnwNv04mSgvKY9ao94sySXEka2yNLDRJldtPf8KYdqDsHA9IeQcFfI369qdn2cTsWM6lEcLbZNJQq1Y1ocWPEbVOywsSaBhJPxivDl5seusIN6%2BG9v33SffBTiCnqs9qalkzQej7geisX%2Ff%2B8b0qtxTLzxwqG1kJoBYQK1n%2F00cUB0fGBrGNGv6or73g36crnarSewGZrQ7ZsbgWx4sa1sr8rsraJrMmIpM%2Fk2wRtgzaolINFgWD6sfYK7J6vBrq%2FNx7k1wJnEVelcvgwVEHoNnibT5GBbFSyMrMtL%2BzcvzOidd5ucIQdn2YKSYwg%2FudxAY6pgGavhuRZ%2BtyHcyZxEnibX%2FdpQhTVVtdTXAfjT4dHWkdBdreRxAlL8OMRoe1XKkSo0jWFbLz5HpYj3%2FRX%2B7AP8qctGfdKSr5wIhXGoAzLPVXWNEmj8Nlk89eoNT1opGGqJwv%2BtCcDry5cc%2FFgSH%2B%2B2czTLVZ0oj0dfDLloN4ZxzFxsye%2BZrIrRrcN11Xhsb4rwda%2FHRUIJ47o5BwL6heUXdrhCPwQmJL&X-Amz-Signature=4d200c14d29f1a9f9041b9dd2ac10e09cbf10c7fb609b4ed654addb30fac3c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
