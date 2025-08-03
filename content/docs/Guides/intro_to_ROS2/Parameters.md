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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY45ZJC5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FTWjILImzuzubPLQz6XhACSN895UL726hC37dRgVqeAiEA5KcVj%2Fmfx7abwqRAZSlv4ke3Xp6Xb%2FalEqTmleMml2sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJ3aK547Y77Ke4kHGSrcA9bEhhg5A0s2%2BdJxwqNI9km7CmXmkK3dUbxgAFFkNDSzrczH%2BCD%2FqoWB8WqW5239E43EV%2FdNT0UTVZiKW00%2BZbOEt8cYUy9hTXKtrIQR0m2QMO5SPQw2GKcp5iFzMSfoF%2BM5p9tFYYzZsMUkP%2Bsy40aVeWObkDblCn66cdBoo6BjKxBHYcORsq4%2BkdS1V6n6pjEzC9UtsWknRZEZczCKdgZMhU8Rc4zXOzJanHL%2BHHBgTO8F7P4ExvTL8uCB1GbkS8%2BLnIhme1zHPrIjc%2Fy1VC0dcwZ5dmX1cvEJtJawIKEkiIkSeWE%2BIIvBotau%2BHQAMSdMLmNKFM4RTxt5%2BaoJhtUZP15kCWS7N65lFx3sf03%2F1riGISkbL6ijzBUP6zekYUxQ6IbEkcoXA%2BJvW8qts5HPgJJW3m1jfCLwBSrTMW0rZ62msdRw08XpFjw7fDqniqX46cCl%2FiQ1ApKKv7xia79EHBIkPwFu1GCavmMFISd71tp%2F%2FF%2FtiIE94%2BlbywBI4F8MWrxaJ%2BboZMwh%2FgavVI%2FS0IYDJC1gVhewfLkmWcaPiU6FCC5MFI0yA8Y7RX553MXgwVkkOSqhj98UeNNCCQXiR4%2BEBaNYWH3cuZec%2BfHKo4rgPCUKseQnA%2FhzMIPTvcQGOqUBDUHLdLE7WCUKKMKexPEmnQKTS%2Btsos64k7TtUg31h0RMijf%2BfJxsLovmOmZQTUQbboAz45d6lpshN3wwmtWIi8uu630mH8xKv9qYL3PxriHzgFNeKU%2BqFcx0tazx6C0D4UPHw3AEyZa%2BtVBDTr4cyk%2F8h7sxOZI2RqHXGyilVRFWVBhjb0JgDi8OauNfwwab2XBQL6Xvz%2Bsd07059gIE%2BbDAvPqw&X-Amz-Signature=ce4da2fd89cb4804c90d6642d8aa2b2c9088efea2ca163a9478cf55c11dea0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
