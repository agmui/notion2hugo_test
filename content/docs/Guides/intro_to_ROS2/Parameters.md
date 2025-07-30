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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARPR6VJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRn7ahMH95tm3u2AIotOVDLVz52hqCGwW30oQp0E%2Fy7AiBhI3t1xTcw2savyRndAuo4FA9eDnI9CZRqvNj%2BdNPSFSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWfD5MeJHzboe%2FMyKtwDv7bDN2SDoqJWSEc919b1XVbTdWpe5C%2F2NA33emykcUP%2FUCmGe0T1JR%2Fpch947Ii3jrJATkjuwClzQS3ogmZOxaEfBpxB7tfIcprZaDPDamt066CVxjG5P0b8MXoZcZqmEtLsdy0khjcgaFnXAVX8g0n7NjxdB99bHTnCswpXkihflRv4nHdYTIwoabKuosH224cI9h0fvcciZik%2BUM64%2BeqPSDSoK99YV57oMzynajdl9mdc0RY1jhicrmE8SyaYwxO5cntkkN6NBfRUFbki%2B6AGCRf3%2Fp8j4wSvzuWtwZgQsacLEwOtgXcB6bCUp1osIAZLKiP3z1uo31QecA10Jm9K%2BCfsHQGBGJp16fRCEhQHi4syVazoZfmZUCFUVAMtTX9skkin3wV14B9oA9GyPFVPKIr0DlQAjZjIdJ0VoLz5pB5nASjvkMzNs2lwOqe89HvCs4UHZ5g6oI9U5VCQhSzu0xLVaOe1cStrxrkBNhMi2VaEW9vilViRLFVnSZshHUYXtBgbYYJsFxuhRzlBL4aQkBUuqyFShYjJAEORf5PqP5PH4kqgUTmZtbK7DmDwVDzF%2Bqd7X5dHtWceciFFamPLxkr4BOICQJVUPqvpTsWVGJkh9eD2eWcb5zAwlfGnxAY6pgE28Rab4FEuy%2Fkatz%2BleEwTsHL15kvUGIPJGjuiXJZAAgOj8ECcxl04CmIsIxc%2FXwP8IAGcw2wmO%2Bzc1eJIoyRWZcuMOx2%2FAyB2g7mVT%2BHTVkw6%2BSgrmOpTy61D0%2Bs2ovmTRez1xMizcTKKGD4ZliOyBQWUWCFTkhttybOfZlJmbO7pVUBExui1TL%2F9u%2FcTlcjDGEVArjVPOQnzaytAChLcT9AozLJT&X-Amz-Signature=c68746dda7e4e1c04c72f2a83151b5e215e97289a2647f84fbb3399b7d4ec7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
