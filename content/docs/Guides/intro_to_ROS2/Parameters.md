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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFSY25H%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHnj0rALucECz3%2BrkPvLaACAAtnc3ng7MWQLAoPBz1KGAiAjwvMvsJf7TPY%2FptLHiWRKMSut%2B3Of2ontEYVN8bGXoyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqwYghbmLoZ66Sz3MKtwD%2FBFLoP0o57Svfs1Sl1KzsWfTCBa0YYW6KVLHm3c6brYN6dgO0DB6Q3IuM%2B44GYOdJC%2Fm5%2FgvuVZ2E889a%2F1bIprRW%2FMGW9PXlhUrwRRfhO8W4vgVAqcal0NV%2B%2BjG9wpf89e1%2BiOWziMW5X%2Bsk3g1JyZCEkqC8xyJMRJ3KikmQP73TUmIH%2Bc6A6fKAfDGZuNPZ6UNruWwVRZLHf2vSmxJ0YgYBrXo6n2QBo2EEvMgiAVKrIkEYAfqDmDB%2BS2%2B2MSKO%2Bogky5HdwuKXDdhstla4sCtF3XD6NL0IqaIlVECC9kwrSTBmID11ifyErVNvMb%2FMFMZetb9bNtcXI56QHfQr4BOWdQHwoJc6CW6py3NBS8VoMPbCs5irOYV5i0KOpd9jMFqwlEPZ8Box%2FgetJ%2FSypCg20bIxUDTTdcFnN8gXkGSgqUixzMtHuqW%2BGTcU4mJx0sxoAQYvw1FVNHDw26rNc%2FMGuPs0mMbxXHQ5WP1NsnRutq1mjDL0xwsiDdbyEXCNs%2Bw4Wi7ItAdctG4t9%2BEJviNEsKAyMtiR6BGRfmhT53TkBrOXA%2FkkYIXos4amkKsZGkL5vML4ovzodgx6Gv9f8U%2FRvvTCRMihOrkkDa3%2BEwj74lPUWdb4Pz5h7ow9531wgY6pgFAQJJ34q%2FiiidCh0CLJD8Yfw3YINN6EhnLwIpkcXV5xclTj%2FODGZg1I4kphi9cHZWmXhCF3jJBxY4x7q5wHyUc0w0%2BnL%2FpWTPLtsox0JIANs5AGGcrYAS0p070ntWogbDuujGh0p1EU2RHeqjzwXNTdGI7iuKy9a8QdtEaTQB7Cb6mbHrqsXqRSKW9DLyrBO%2Bv34CmKosSju669B43oSMvOl7RWNzi&X-Amz-Signature=4d45bbbe4fe31290b332f74a50df46f9a0c08ad557b2d4b50bbdfe7d78266650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
