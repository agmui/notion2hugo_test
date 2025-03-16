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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLKPXXY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM8%2FzIk9ZQTdItqvmWnyvrhzOYVh%2Fixwajrm90kr79nwIhAP%2Bmnv7GzMAlitczgH529BRbLbmhCDILm7AnzB%2BF2sMoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwO01pf5%2BnAqtIzgYQq3APXMtdmj7CaaaXNhRQdCf26Gkuq4o%2FxZmYnjFqH3mMAeCjw0NoMRXFynXfUHdse3oGfFuWDezXbAwfZ2u4jdvG9UPkzPe0xFF6wi69Py85bNX4V404TJRL6cgiV%2BwjMyyQ9gq9c%2F%2FwWxKrq6anctKMJR6o6S0b1%2Bg3fwuFGttK4Sw7%2FTUEy99sD0OP6FxF59kgXbiUFLBCE8btfNEads5B5y3UWBXtCI0trgHpYCpNw82xxXHnNVbwyZhFJ5pEv1WUDlmfCaHFD2eyGf8Vbm10Zf3c5uF8CXfM7iKV3nOmlO9mCZ25CI83Gnk%2F74zwGXI1iMJthlay228etle9F5LgYdv9I0yVJqZVL5PRWg5vc3wssHXkqhGlukc%2F%2Bmkv2Pk8FX6JTnWZUabrL3Ohe8vEyeVq91OAciZJv4NCFrNsMhw0SEkjX0BBl3zxDtgFpdLyODTGeFeXq7er5HyuDVpxR%2BfzIh7JTbEeFU2evRezOx1a3i5bDQLsNNCZB0A63BjiK9Q4t%2BuITA8A7bLFFQ%2BXsEPMFCrPmh9TMzdbEpyXcJ1cJ0Xzb0gTrb2cPkz3YpjpiFngUFzxg8x%2B%2FGjSblG66jHsr8zCqaIXx2dAdSLa0ks54b2EToKXo%2FNzxZzDQvdu%2BBjqkAbP0uqK126%2F%2BWmExtvprJns%2Bl%2BgdKjFCOcuMdgwLWl3OOQiDYqc8g164FCJwh1vIIyCPd7OKLa%2B4mwGaDEGUz0oWebL7KyGJknfzPXMmS17l4%2F1lK4aTBeZfK2b%2BQrIU8Rj6rMKnOzxa44egat4caGydtuuJnBBzYVFDhETyBXYdtzzzXPLNBZizWMahvaSs%2ByaGEFZbZvITc6v96uruW8sMxjEv&X-Amz-Signature=4bcd982c48e5bfacbec58ec8136b9c638c266fc38684119efb5910a4119f6ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
