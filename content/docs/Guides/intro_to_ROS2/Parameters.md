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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HR5A6VC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCNItJWUTDIF1kbrKZ2IoqggOJTdyBT4CpAMZDSatF55gIhANrPw%2B8nxpcSuJ5FrOB2O3IePuXpkSY%2FehdH3%2BCZM9DWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9jG7FOy7x3FJ2x4Qq3AOwt4XUMWjGAyaQ95emIruf4%2Bd2sniLJu6HVEV9P4CJZSzSwcnsuFA70s7gmMcoiSF1mjIVvm4gMawveLqYdZyxSoSxqFuKQYWRI%2FKGwA2YejpHzDVRTad1iCwOceQ7FjSHVhsRvo8W6GUtzcLlAfZ%2BJIFdoaM1VTo511Hq6Mn3b0wzejOJ7xcKNgNfPfgFxziYSmJaG0tGKgTkr0CawCk8Bi97mlIDx1761voQVouIGcZqEKqC8OemLTM8leYw1zhLpjFwvp43kZKFPRAuh76%2BoaC5PR%2FTpHoiY%2FdjCx2aX%2FmdMMpPrNIvyysuS7xuiOfU%2FOiM0CZQFEb5t2rEfQh3UceKjYLvCsRumfNy3YQFRm3gRPWs78NNuqyFr99xvoED3ehN3nRbSFRY3caZBUMvvDIvB1SOFErW8vHZlccupy1CRi7Ph5vgQ7iHi1UmAyDX%2F20Bu6broUbw8ovBYCgZc88ILLqGggXPdcttxp%2FhH87IKOe62yymBMSrwiCPWRYYhGDO0CjtatdVYlDAZ0EYwD2ydzVxyX4vxbe3Od7bWcXM2bPvwUOlaJ0se48x90967B0cnRa2YNToNYpgs0xQaop0%2BWpU3TYGEYZybUE5h9eL4%2BEq2%2F2gVrHJlzCL2PTBBjqkAVFkjDtNeFma6oO2yP8olurU%2FoNKE3EZ35q6m1hoT8RsPJnnRt6MbvNTwcC%2F55w6%2BQs74H2pHjT%2BHPCqZYcit79Zbqc%2FG5c8U56DqpF6mtsj%2F99%2FIdbzk9UIZYor5scirGlPP0b5e4i9j50c%2F40vLcdKfBJIicGqIuc1ZyQyBJV7onkTRTZTOynC26BAsItAUrnEU7aVb0Vb67e9bD0ePEvedY3t&X-Amz-Signature=21e4df5b49368aa1e4bf66673199deec8d05c3624574d5e722b65424503b41e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
