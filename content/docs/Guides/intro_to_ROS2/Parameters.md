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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZ2LE3Z%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFBzc6Nkw9o798dIhV7OBp7bQYtFWMBlkDE0pFLOdDf7AiEAgx%2Bsl9CKjjNkL2xwoTm7IJLh2mSV4CmveNXMENV5w0UqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSE5RDhbxmejggtSCrcA%2FTBFKTKcMYcCmhKDAh1NejJBDXnHzA5xu8vXOrhOxWu0Ip3oWpu25m5fx6cP1Tv1EKye3ANn%2BZSvn1bUQqnNssIsVJV6KbPg1%2B4A7G5VA1kQ3FvZyUlEFlQJGeIzNpqxobyMXcHDRJbKDDYI5O1oivre0GPTrC1ZI%2BMGwQOFVly6oDajwKcWHAJR5K0RzyQ81dY%2BMb5tOjWweO1TaoKaLu6PX9rCvmBIKF9XTCBqoQo0ADNwCY9JjsFVg8NVw5gzUS5xNIirn7N5LCbI4bplzvyoNYx7RkRQvfpdl36685WBQSf9oEQC6dp%2FLsXgFhiM4t4eJxk4253cIoTcDJH2JyXa%2F%2BzOJ2I%2BF5UZ8bAjpsaK%2Fm9ZjtXv2iGmCgbcRz1i0LZlL1Ui6emzR4HYmdeh7SIZKVFweMMR8%2FLm8XNmo0z6Zo%2BHRDEn5obq0PZwjuiQ4WJCMfFHBuseaM06uQYQMZPiED%2BErDAV1K2rlDnDKGCaOj0WWj3INto75vgjPxDfn5IGEYcmQHwSLzJ3FBStkNkhCy9WJcelpH0B1jJumv8dL8wHWNpobHB0c0IbGk%2FxLXmj2aivHgvVekhI2RVVsd82KlRR1TLQNJ%2BrTMp0xwzyBGHF1yx3X9FDtzjMLzP6MMGOqUBRaNam6%2FXtesmVNnZXR1rTwXMqun6xI5zN8iO1KDxpZdlYYV7WMGWb85lsNSw5ta%2BK9DSFG%2FCNNJVRBsT0qLwsFq0xA5CdIzxbMM5I5AZlTt%2Fhv%2BPIlQboaRB9bxBFfLWs28Clv2s%2F8uvALbi7stbLgIgQ1%2BnxhIVZ0jeSN1UxcFIMMUi0lZ1xr5%2BAUVDpHof6d%2FJrFiqzCGdh1ZfyhaU%2F0q%2FjDJ3&X-Amz-Signature=2664d40b4e6393b02a8ce3796b5d6854811625cc10745d7d8bd3d21cd7d671ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
