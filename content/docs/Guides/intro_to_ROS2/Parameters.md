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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREGDHLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4dFZ3BWIjUqkR%2FcZVZQgNkLs96rWfib4X9DxTYnmB9AIgRVNWbmt3Oiu6WdZxdb1ZF2a6OOyOYUtMvXo%2B6B8l1wYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGY0xwlxQQl7zkTfyrcA%2B4m4FWYWEkrD6nmBlcjfSD2oc1EIq3hbn%2Bj0Ca7vfSaHBU49WxRryzdK5prMSFYw6YarnULLMqQFDRjOhQsS7wKUIEkhuOX4UY7DtUjiB2rDLu5qv%2BtiKMqIUvuTyiJJMS6Iw4dAvwQL9gjCb3U3r6%2F9q8fpj40ed1kKf%2BC3OlRKAAB0GUZ8es2lRCUIDJalN%2F4ZKdNwSC5PpVCNhHXDRiZDb5elX3J5FQsWwY9SVshStnJDnPG5AD73lgGBsjv%2FcRIkNcL9zy%2FFd6WjjOKZZtBg9qayT8ytkc0g1T8AOcxcagPMkDlN03NJZccSx6ssZ7Ci1zkwJqyIuXg8j%2FTXmc3eRK42bNLWy8ysx2D3KXxbUOn0QX4o5FgyPXVpLT6pAiDafh%2BtZ24P0Dcttv%2BINTZWexyvFLCMbKG%2Bqu9ASd7e%2Fhvco%2BnqIJTXrzbEiZmVR1Jjlx%2Bg6r9NQbK2dcGoUrlq1%2Fd8lDS6SYBtbCdDte5Csw78cXIM%2BotddNue2YgL7paGrQe8JggAcY2RZuEXp42ld2dPzepIY5WiZynugg4UNIBBImJ5W1cFSz8L30aeZQkNggrDPSeity0wIoWCKs8BmlbbXF1bshKdyZxQI2Thaf5bgkQS3qjT92WMMe%2FoL0GOqUBwUONWE8bXo4ytpID0G8gBKpu71B%2FON6%2BLFcP%2FcfNlG5BRCJAcUf2gg2YZF269Go%2F7ApFyGJ7p8lNCKq333itTaMunrq9TpDOYTy797fhvrl%2BB2%2FVMNtjCRpjCWSJwDekJnaAwGdTUfcBcDF3FrOHYFSGlSTRGxCB5A0j%2FVnWnmqL3kV5VoZPTuwjw9GljPtWFpfPUCiUDiLjwFxvfhBYDcqruOzy&X-Amz-Signature=066c3cb1fc6fed87a893986d828dfddbc14b4f36c75b1944c338ace49741d84c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
