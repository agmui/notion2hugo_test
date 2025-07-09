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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCR7BKO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx6h3enAm5qVMvWHgihmZjvg9pc3ZMoKkYPCCc0nPfQIgCXHXFJBBKnCFIcC48R7I%2FY8dabN%2FBcI0im0O9Hb%2BitAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoyhDW4souIqcP1rCrcA95G7K7lgEEt%2F1F3Ew%2F0IEcBr2mFPJWi3z5uVvpMbCXvvG836Qf03%2BoEPfzKmAxjRol52cOXIisWnJtNjB7WkFqWfVf8Cd4MQSNcjZidGv%2F0nGtnjl54mjQqVRDqBqH9CoGfseh7TU9mIDCfm9FBSW4xZtkZeG8Yt33wvGEMOqoBUcRuxqWPGcWjTMi7vsOoBocqDpgVsx0iWRxscPNPOUmsZjX1iQa4CNsBYPG6S%2F22u3crCU0uqHV8nMnW5d016ciwdH4xb0pQ%2BpnJqDd13Umt7x2K%2FqyNtVp5OMU3qRnnQl0O%2B1yA8u%2FIEx4l5B2ijjD0A5tz4s5r%2B3E3mWZGQcQgQvNbVVTZcC9RD2rAW2fZJjsJ6se%2FJdXma%2BqNSV2ZnEz5rX%2FN9OTO5wDA2anhlgyrpsZfkmXD%2Fl883h%2BwqjBjhAh8qlZWTWF7qKvFzGDo8upPUzYssnbzAJln6ZE9B2%2Beep%2F3nJnfevwEV1hqr9DNPoOL29w6aAAX0sxZwy6Yl7oOdQQprcozrGGmG9yLlVWIlGUwe8IfwAjljBK9EKhYst4%2B4X9z53oUBDsMhbxyXKeDJH9%2FOQRiC68RF5q7bvcvlHBbcJwy%2BKTOVPKdf%2FA21P%2Bc6eEZ72IU8PKGMJfvusMGOqUB6bRkKMlQ6dhikVr6rb6fFp5N10uAK6%2ByaiDB3St5xqjHMEmGpwBxmlAqlmv0j9KYgAl3uI7%2B1TBPEuFWXcUKY0lIuJ2bud6LComZ0CWQgr61YZNMrA67K%2Fk6ykBQxYTnaPMRfNKIxXewz6%2BqffL3mAVhk3P4Dos2unwCMXwAQRn3u8OVP1a5DWD%2B9fNBeCgfNFDy1r%2F8LGCHra9vPQlPjREKP2s9&X-Amz-Signature=2ea8d48cef79c3a2e42208c662dfa7e606b06531bc11e10c29d39014f24b1ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
