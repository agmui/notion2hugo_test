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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7KC6X3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTko7BvfsUtpcMPZ2hdy8YtJWWRWZt6u6cFN1LumTlgIgDS%2BUL%2FVB3%2BwtYrfmOkADNVEp6DmjSPmgx%2BpE72QoZeIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFZDJDgUS8xR1JAWZyrcA9GHq%2FzI9su1FWkFSIJ1v7yUU7gySNZG5ONCZCydDMj8%2F9YittFMa1IA8Hfy59X1E1Vqc6lFrbRYLa0iZNlF660J%2FxhFra8jC6E%2FF6rXwn6UpGM6n7L0B%2FaszrqwkqnDqopwu9Z2%2F%2F0xL8hfCpnKdrZ7zl%2FNvH0U54mrklSxKhjH0dHfutX4B86mP%2F4hMpThsDLDVuHjCBVtAznQO%2BM4ZkFQJnW357I%2B8%2FD9izhZmMBt3ToundvQYZ9poMjlIyZUKru71ZyN3PsXAj2l3LkyUEftVp1emF98X%2BKAPgPCMyZoCpdM94laXYu5NMj5dxsY%2BhfqhVTpJroLpJneN1nAJV55g7SHKjIyImb6AshwiFe6bstOK5zTvWwBWlZoubNEEQRQSOjg1S85X7YJ107GEioeIBLz9FninKYW1DpwOlZiKpqKnh7jXxf480sSdWB203qgZcSsFVBJScRpBtvBJDyB%2BllaIRUAmx2hBRHse4o2Po6y1%2FmJ7weet84j1qvm%2Fkz%2BEcDoxGSWTToxae4Ru0U3Xrt1Vr90tPR1OpYNs0oQ9wKAM0NIAmDzGaST%2FYYgfo%2BPdifjFXXesG%2F0hsV%2FL8vcHQA5FV%2FMMcTMlrk6hLkV9ioGcwNzf0YCw933MJWBkcIGOqUBqOKfhadA0t87hpZBLTgSP8Imjkowue3l9B9vtnBYvV0V%2F%2BgVdQpMPcGA3ixRbBltwPdfZbyM3CKYs7UPOqH4HXARp5X9pXgmdx76B2WLiNtykHjlAn6P88cMRm1WFYvq%2BZFTuCDIQlRi%2BXsEGBYryuax42dAVski21oHoBtrSycreGDN0N8YgnNhHCBzW9mZOcY1J4Wl4HWuxikLJY7FIM5GuQu1&X-Amz-Signature=527e95a6ec74ec27a405665f968e0bccd37964ec490388ff809c5ad8d1f3e396&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
