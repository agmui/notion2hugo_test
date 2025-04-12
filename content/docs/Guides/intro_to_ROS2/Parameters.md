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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKZFU7DN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICJ4C0XQYa%2FCMRWQ2W8B4PWiaFbX%2FsuJLyXIL5ykMLFiAiBgvD%2FIu83XST6I9gSXEP4ANXpfIZ4BmtiTY%2BjHk%2BxMDyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqglLotVjxLEAkHA6KtwDtpuzVEZUdPNFV8iAIf8K516CvJB7L2h1FsCD1LKg1F%2Fk%2BGlqq5QHEf4F9uHMtSMFDc379EYeMkdDHyNNicC3zEbw2IUeMBXJoXYJhfMDHAp6cO%2FRsIjbyW9EGjFIVE8emHkBOH4R21rmFNSQWzBlNBLRLrQYS3hmIbb9hOZ22nhTCIexUlebtXCghBShXD45MRDankOCIWCv7mTshMvzOnOItiu5rl18E92o1xICxODPucI0mH%2BNVRHb%2BY3aKsB0gYcxehkQBU1hlNAVTH5Q1lqSB36%2F0c0sXpDyxRdi55Vm8wTzRaRlFQS8I%2BbJlFhR6Tog%2B00zUjCng%2BTXlD29JilwQBFYedduvmM9riZzSGj5h6BjLo5BuX%2BUK3XtGJieHfLEofBeA4AR0lFUvowzgjLf7ilMAm9NLPgPlMEiTLAojp%2FxO5KMhd%2F8U8x%2B2mhSqTX77KtBnApGQx3y6%2FZ18qFjcM4ozZlJBcCwhjdQp4MVflCPSHOkB3GpTf%2FmDCKFqfddaU8%2Bjh7fL0TiU2njBSAARdQzLhMF0nbDumU6J5%2Furpao9ulDTbTx0lowXIS%2BjnArgMlOguoXp8wlZafwhZev0T8TbDYziOYUDB7Pe3RgHBQv1P6IE1QuoucwjbHrvwY6pgFi%2BmtjDDXRwIUXgcbpxEpevx1LbND4Q1BH4ViZzRHCrvWPKhAokPRVaIo1MVeen1Wbna0yqN%2BmIvbh8u%2FLr5ZNM%2FYetiXQeSl7CEYtst%2FiKSwpBL1b72GwrWsNfFaKNHsrAo6CJFBn%2BKeqjt9zUdS90QEoyyefiDlac%2BBbvWlNJRpI5abHJ42ePosBx4HPNH1D0sh5WHZYo4cTcS%2F%2F20bizcfrKO0%2F&X-Amz-Signature=c1bda5092c5cd03df5fa62d1b290f48b5bd5aa822b7b0b370c04cd4a7e650673&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
