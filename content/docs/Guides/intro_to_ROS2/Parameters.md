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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3O7H5B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMS060Vil%2FcwpsZVkcuvVvUk8Pb%2FPADeicsJmjNFBVsAiB9Edn5%2FElRUgwzNBMWpldliNCLUrGigo%2B7x5wMs7v%2BpCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY9Pk0ZWPKdG6XCi8KtwD5rapJV8BsiR2c0hg1eVRuBbGzqDElT%2BjEjCvMqRX68HjtnTfigWA6eomQ29hZ7LiBbJZELbSAVvcGHA9oJvq9a3UvyWkJAEka5vXYm5Jz9uduVEZbL5PnEvfZE0mcXVg5l%2BPktmHL2hXjnu6R9S%2BDLt5ou1VwuSsXwFsAxTA0HqZK4hvhkLX7wdwp%2FeBzIDPAI%2F%2BUc7e1Zbo5RYDbvoiaQAQEwU%2F345%2BfS4J2ysUPaDo7XH8NH811Q8MFocVyum8czxHDgVGzpbM4cPi8jESgOZ2wmOxgmaQdbTfNOoucaRCsIFI4EkwJ57rVT%2BDH68AFllejedAWKWXyaT45PiJwxvoPRBPAedzKRSuA8SPlFPqlZTpmAyGCVuBmLv6yfKgKbwA4o0aKyiRdq7NaKAsxLuw%2Bw9VL5HwkYgO%2Fv%2FnVB78NqDRT1IUcOlVO5CnXMrDyXFBngFmtiox8oRb0qaCGIBIKiJuGJGW9oq6Inl9vP5ry1ETLZKnAtecpcljp9J%2FNyzIL91Nj87mT5r1P7%2Figa4hGUai%2F1rbuAijgYIkWOQpktVaM7xJAeNCblDDIA1NzPeFkDqECjXq1Bx8ybtKAxTj%2B6XEwv%2ByYen7%2BToVFz4feZwQl7HIzD2Ro10wi9LwvAY6pgHSjWlPx%2FHZ7%2BTyoQPFxnMkYA8I%2FWBz43tvil8A5PMUyVob5MRBJ0EHz39DhG%2B%2FnmcFI42ZgcL1j2sTEaTxmEWd89R2gofPL117SSOloAv0mztxxK%2BYzAKTmBEmmT2wTiKCq%2FJEv7mgoefEkEEXkJD%2BelEtCnIEczKHP1tRTifwzqxQxu%2Bn6QWEJRP70TDYM0%2B4qz%2BTOQ2kEVGO7o50BTuKbS4FpYds&X-Amz-Signature=92d096b5df8eaecbf07e82b230d3446d0f92929fbccc61f32fdab996ccf52079&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
