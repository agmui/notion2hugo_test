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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F5DCYT%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsSll%2FW3Y69EmnqeERwaDz65eikTEaRysXuSd1uLRCqgIhAOlkW6Y2OmcGtshkad%2Fo2XlVsFyX6kNlYsbLAYkTCrocKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvBoH%2Fk8E8SiBEbTQq3AOKQbomQsQGgoT5HqboxixqbQh1TMDu8sy%2Bqmxb7lTrOvsqLw9i11i4MDYNy1AsK2w5RXvPRd3qot%2FUon6NkfDkVjYE9m5%2BWWVpaY3Bi8IdrfQMLeM4P94UpceXbjdhunp6jOwTWZjkl5r5BIXIgPCiIRa9rZVcULXf0i2reeAegUMKDG8OPv1%2Bil6DqkvGgnftJpQtarXzTL9JwACDsZodidFkY3WrTuzCKc5SWORFfK5jeruGUQttM5GnHu7PWWOW4X5%2BOc2H2z3dTfiulcMobZUJ3Qzc18Jp4AcAOHNZxnZLi75hjfxPzMX04oOut6Zu6AjjXCjjDFSpKWuQ%2FCF%2BtlcIuWUxqyn%2BaA%2BSNZzAgLMc6JuxgYRP0LUWU2ysB8Pcnz%2B%2BdORqNudpOtTM%2FtBV47qPSlfdWtzllsNJJHarE5nZETjpXKxMwiu%2FlFJoIKQ4mBcK%2BgaD74DC4v7q2Wh%2FchRCLLmwroYnJTC7p8s8gf1xNTld4tDL%2BRhcmMjiHOBFs4csq7TPZS%2BIpBWpiQWxdIGNtslbDzHe3RozfyNHLLu7COTgYCfXv0hHc5gKOZW9tXJfz%2FIl%2Ba%2FOdSgJI2GDPG7vBcn2MDnTWg5TKLJiZtVKlABSc2n6zh4kVTDX%2BJXFBjqkAaxds1IRfJkZ4jRMSI68WM8FvpexnBntlflcbHWTp8OKbdIrtf3qZQcu%2BxHtBjfKGsYeGUg4%2FIY3KRr3i%2F0Ovb6Wm8FcH0NJv2N7Fg7zbaa6nNXHZsHNMV%2B3YkYt5AS5Sfzoz8Mclq7FREdPRDIstc8H3hUVNgr3762ddIqiE9c0POC6pNdpF81XjvA%2F7EHANqVUwlNBDiOAx410VDceTfzYZvZ0&X-Amz-Signature=67cae6b9a3f7e36454043e572ed6c00eb3de966fe5dcdd16944021b1e56cc27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
