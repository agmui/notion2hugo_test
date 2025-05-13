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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AXJ4KEY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIADFuVxiB5cXrncwTGUxAxMjawTSEUZLBAEv1iERAiCeAiAmorCJfLouS2j3SFxKS7SxDXA2vruPV7YF3%2FUy3kZj4yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXbe3GlSlvdeOaL5XKtwDXegOlAAmTkB1q6jWCs%2FLuBjPvVvOrFFdx9xcW5COL3YTmlu9pJ1lGGKMmcwD5XMJ7WTCyiTpLIlr2EdnNkUE0N%2BNiwFz5fusb3VX4pujcpL9Je%2FVZURhaLFcvZiEXpow6sIjuaJzDeIOMvhP22uMki8gaIhDjOMRJcza4FU6qKrFLhtwABaop1i4UiFRIGaLPVhkN8LA9BCjvEKyLO9uaXNZ%2BIDCx86QwbvUyfe0BLNdxL3DtbRDQSb4mTfT7WwAxGPptjZ%2F9QlpbfOWygqneaP4e0BvLSbZwJJFfirNviiHfGqwjJ0gbeWJnG2KCu5AwQt9J85NLk2xWXvp1jMDN6AA4WVNIQLZ4To9%2FkN2qQ922Y5mwBsB3EIA%2B0zCHtcnfBK5KvRLqxRNi0nLb5Bzp8op0FNyTnT657fIEZB57uIYMgjwQ1Ue8Woklc3tZmBNMwY1TWpbEvwg2x9%2FmUf90S5LCZdCYmesJmQUIRyCXgiFR%2FhhyxuWEb5uk5jbMIBTzcUCYdyTFROwOSgS0ceQnLqV1MA9rw3dAtc%2FcdiQ5FCTVOMYqUR5WKvnuotvSHkgUAR9vTzUse1liyaIt5A5%2Fwu6W4F1UDKksh0ANKsTXN2iS%2BuzLDytpF3tTakwzveKwQY6pgEH6Dn9M2so2bkoW6UvvaXNAmvV%2F1pR1Ito%2BQOonaSYXEP2JV20kziY90SfHG4Wm%2FRlTxaqbbtlSuKm7DUwNi6Iwk1OoMwsaBZcwN3N2F39fJuwFx3CDwx89P%2F02wOIKyVKr73CmG1yiPY0r1dijYjYqLiuCw1kx1uBBjjCcVHYs%2FRd8HAMub5ecHpbUjkOMVFyNA9av8uFVPK2xyHXFpVfUtV0ZrQP&X-Amz-Signature=49c998fba3b3e370e9bd64b595f09239ecf10a7981257a972a7b613cf7eb5c90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
