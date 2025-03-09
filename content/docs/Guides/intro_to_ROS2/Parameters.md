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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5GOKCUK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIC6ciLvmfd7%2FEbE57ASwd2KiTf1A6uNM1Ig6bl12s7eLAiAky7zMmhizt5PL2j1ymHMTwbWcuGIBEeVINQifTkGhUCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMg7cEGpgDRcvpShVIKtwDFTQH76Cu7AlE3Bc%2F2IMoKXU%2FuH9QS8YG%2FsUZirR5tdWAt2KwhcNP2eLAzOSYU8CLlLFn23HLcTYoj0%2B%2FPdU4AMt6A5sIz9KLn%2FgmAdcNPo5%2FDs2hnDlO8zkhYesSiErjRcYPGgni2LSO93U8RVPf1I67aQX%2FCHbogrmAh%2BS%2FTxK5YClUKpqOQzQCfdEy%2F6jUAOxjJymnmkopRveVljg2XyNMS0xhVJJY9U9E%2Fsyx1nBqdwZPptm89V1kw3lsulgX9nTRrKha%2B1lNR%2BwS8%2FzgyyWVw9qU%2FDagqcFxUD77ehhj4qnkgkPcZj2Jfqwx7Hu2PwLm%2BmV07DTM69hAq71TQ5L4A%2FN5HUOVf1xam7l4Uhb5jNjdd4OQLU0mRq3mdGqL6Pm7VGRcBAMcORxApnmL9b%2BJW8gu1E36%2BWQq81erEwfvN7%2FVyB6u1YHI2T4hDCNyqzmN6mydvl%2FWPNeOL0g1yT5PwlggnT7kEUGfDkz3uHlerCJxK0HOEX9vGPPhiL2DvuUhFPrJU4yweVNO3aqSUjQww5rpk2gi22BPLzr1GYgNe3HmGZrCL%2BoHi3azn0WJMFXf%2Fr08XmVW0UcLCM%2F%2BPwg6V6dzaEW32Lk2dYmBGPoJX0iq3lt2uidXCQww5eC3vgY6pgHE5KYF%2Fx7RqUxNG8x%2FPKwpksMJcokGCz6eneDEldPfB5p7xrXi6Yz5iyaRKn%2B5SQR5whEO9WLtNZP4OHJ7YktW7tDU2JQWpFg9WsIFrKlUnr9E8pZXpyLevBre4kXrKctxBlebwiOJj1JW6oB6EZENZN3sbKrZbBOFw5r%2F9SOWOSwWCnxL792hE5YNxVX%2BZBtKYkErJGhqsf7A%2B6tpnxCl%2Bvl6AROd&X-Amz-Signature=8e4c14e2ec9da8c5809478301584a453ae3dd7be77043cff17746199a3510da8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
