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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644W62HYP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR%2BQDwon2MVhDy%2F7qpnGisWSwAQtLAdhDe1XEKSBzyNAIgd6EiTQN8%2F%2FHTsVnE3XVAEQ3Va34nw3DsqT%2FLnVKbaycq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAy%2B%2F1xKbZG0%2FAquLSrcAwwmExtpytdl0Bm3ZXGBRkWmieOOnOVgqmLWMR74R7642zQAV5l8jiOmaWMC8FvVtwIDjZcFID6ikAWG8yOJSc5z14e6qHWE2CjU45ePDrentMiUe3nMTS1C3nNZqDFcc3uC5AM1hiwl2dJGoN56PxvgMHjhkfVDH4dAIw3ujJ6q1GZP%2BQe4K%2B1KjvpNtsGOr2D%2F7gb6xbbcQ0JDGwTFSYQ66Jcx2BA7hZl1Cui2Y3RCwbbbYKxgtHNM%2BfmfENFR5r%2FO%2BYnsT70coPsx4Pnt3CrTe4SikCq5Yj2tks4fP%2Fv06mUiONvAhfC%2BkQh%2FAthTLH7VWuHIVtBv996rYX9VxfvTu35DHpJlQXhpvqfvVfp4qIftXkNe4%2FkPyboAC4H5jljlxFjcDBxrlf1VMm9KRUBvq9rchzjp635rz5n9JMNs9bs1oyO8fHYf%2FNGzRJ4MdMO02PUtvszQSeaeBOmOQr7MO1SrBIAHt9HkrT0wnaNa5KVF53T8%2FX4H8krewjckLj5c9rWz1yyaPjBf8i9JlE%2B4N3ttB%2BBwZtEEQJg0NnTZYJWsAxUSKyBStPecR6Xd6ppcL7JQTZFwBOG3UT%2BkOHyCsTlubRX4Sn1XTjyPlVhgyjhNSvcKaXRnyO3XMKvEicAGOqUBVt6msi5rffV8yG4zYsiDF%2B2iWE7WAcLjr8C2JPqxwzoqDUXwB4MOWGczsklpIvn2gABN4hdYhWKCytn5MbTvisHKXiL7P8ESsUdgfWZJwMc2mVcPBLtQ3D1YLh%2B8hDI53LLweG9KsNwnlpOkig0tS7RvUSFCippkVyHIGrpRbM4osQ79WxUzAwaaummYxHOdrt6eDjd9pfuP7DE8kTkP%2FN3Rug8n&X-Amz-Signature=765bf0f44c4a677b37c2900c613fe638f8fc3596533a8d0ec1a31d6654dfae12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
