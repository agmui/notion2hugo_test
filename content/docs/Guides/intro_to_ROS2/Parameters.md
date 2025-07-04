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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3X63OJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEiKMEdLaCMe2xx8oTTHFLT%2FSgihjGgKAYw1cWRXc28MAiEA%2FRwBdL%2F2UWGakVfvDDIBuTKUPCtz7mdVPiKyE%2BUNH5Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDF1mrxkGajNQloqxRCrcA6f34907cGAj1pcKMXDprufy9FeTUyfjl86mOJWjr8T%2Fgx2%2FatvBIwiEFUhC%2FgKnUqctZXHcnRlQnTxH9MUERFGvRXgS532BekQV11PSmGtoZIX23zgt2UmquxDU74BuNUg%2FggYZEJjFJhKGqws0A7U%2BfXWGtxi1vC8RV1IYC0xgi348ZLsHb8KGWeGWazv9j%2FdtdUg4uMu1y9ufemgpIHvQ1%2FHcdYGGv638FK9jo5KF1ougX0jQ%2BsFYrA3laBUpwdHLpw2s9OeRAOLZJw%2FhC3Hwb8Kqjp5nCuiWNGFY%2FPehNHd%2FoIlYMs3l%2FTAmcXWi7x2PBZxQ3leurfbsB8Nasyhy70G6zVroTEaU127aDskMX%2BZryT0RqgluOrw68eWuJQ8CMOJvojmdrahvJzGj%2BFRQvZA9TvVEuxV9hfKfd1xuCEYn9ejhjVP4c5%2FimNbwhSgendP%2FkTLuG6JjFaqoRu1SCtXSJmZVMnq9PPwCGOv6FOWiDjZlnXqsXCLMGXES%2F9QSaEGZoUggo7f1RD579fWsVAYJfGwTFPwEde5cKwii8uCRTgZ0StaSe%2FaCua44T3VA7O6L7UrfI610HRATlgjx03BBV2aYOn4qsk3URoImBwQGjKrx0oHv%2FvpWMLaNnsMGOqUBtGEHBN%2BT98o1daydwwpGsmuNtqH%2BHyFV71Qm366wxHmKJS%2B5REfJfxlHBuPvmxoTz5bsNc8holXY37gKtu04tiQCCPtHRNi%2BE8iinKUuQ2SXQvWcFSFASuojp1n6eDMchuIkokXWsqF4rNFHgfUXC4AiBi2Oyzj2txtcnBMzb%2FJVsE2fWar6%2BFPQVZE4ULeRbv6fsF8Pcwn3gZhSyT9Ow95PrS%2FW&X-Amz-Signature=78e1e27a78da154d92adee4bdc9a8bb51809795f1bd0957ead27d8f9d51610ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
