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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SCNSH5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIChOAm36h5AhsbG1t30BWxjh1S6BfYJtptEVFdqy32PqAiEA7hNElZ%2BXgRN2ZI7lH0zqZsEuSRVAP9InvdRSXfRuWzgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJo%2BdFhEEudbIae6yrcA%2BVMpQEivUN%2BUswLeV78nGifUyVGzUULLg6XgsEizl%2FJIP1RNHBJ22WorKmlJBx0CfEu8GqY3xIkYwAyWdfLAIy2tsfy8K1kokyR0xAEwwrgqIhaohukF0m3DexjQ75nokQdYrkaM%2FYeOgnrXsSw61PFtgHVZsmuaRBP39NLAxI9JEUMW7pIwopnfr5PfZxil73IKDClVIieussBaPp2fB9PjqH1SyWTB1QR1MXkrdEu7EBR3pwW%2FX5ZfrETMykvXqlmQVRQWGzqSd5eqfmS3MojNCQSFn7qp9ea45By8baU9qDYrke84O4Tn21EC7dfVotvAR77dEW0DtcyoATOUQLUoc24g6VHXQckhCS3yV9kwOQYyEcSlzdpat7t5jt1RnqjRKHIXWnID%2BA66S%2FIPww2kAvmMGMqyAF%2BjtddT5smc%2BNSBJHTxORep1pp8C5b0hN6xBIJwdO%2BwdK9acvACqggBdDMRigcZpmYm8SdGTNO4Sc6W5bESgBjtzxBfjQg0kICPWCqkIx7RotJMOVd7mIyghBcwSI5cMuPtgjPnO1E6RWU5dnam2dDsyIEeK7CB7FyULxQW3i8mlbxEg7tWB0NnjxDBHHfk2e%2FIjNJG7XpNVSkUWXQY0yc8W9ZMNOH0cAGOqUBkARKFP38Od2N8iWZrOA67wWEmg0paz%2FljSB2QkU8SWczPZ3uvagsUAm2i6ukgY4B6J0uNpchtfyi9QRr2X6MQmXHI9eRMhxFU8vymqNEQXe%2Bx%2FNwRCnOoIrV%2BIQYuLzjlcP095%2FJMHO9pzKWD6WgaR87Tp8MWpFkBEI%2FtE8UFmWhONVs%2FFIJGV9Sv7%2BRRnwvsdGfczoA784D949%2Bknd3f76WUX4D&X-Amz-Signature=f334e2a6ef7aa1531fcb9298eb79207a60a00df4e8bbe527377a997af92bd693&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
