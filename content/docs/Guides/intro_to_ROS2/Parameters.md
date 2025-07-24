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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XV6PJC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDIWmfAPhGFxjCuOJbXhIZ0wARvKpwpH6b%2BTnYFHVsshAIgbozBltb7x9eskTp%2FnJgeG0GU0Cf5UoYq1Xp6ou5zw5gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCYTL2brrTCUZ5chQSrcA7sWQ%2FzzhiibnDY0ednN1ZI4CHV7l5LFVho4Q0aaA91i388NOBxAy0cjxAGjjal7cQGp%2BeHIkhPeZC%2FSW6nt%2Bc%2FqCWGwNLJy25PMIkNDLsdclrY7%2BQY%2FIBTBxWQXyriz6uJHaYI6oMhnpPmtGzgUPz6SIEeGRJa9xIhK4Ja1ObnceSe37vz7y00rMb0CnWB5lsxyDPCOTzZEqg5AjKJMx5YACKLai%2Bl1NM5gSgvxk6JWaD4rx70yFcanP2gqUFSQrcUwFT%2Bz2PLYWRUkLd8%2BzxEYli38a2khzZxtGEOZEJFGGh4NxMef2I0xM4SKhVmWA4X4QNCsBdhQCYi7cauddORSt9SpT4ghhvG8u4QfuF8TDIvvuQ7%2BONA0CbW66CRYvy7OzVJRNgmjrcK7I5KajHtEpUX9rWG98Pta0v3Gf%2BoXCKRcTzOY%2F4E%2F5BsJsGD6dblek5MwpPiErJYMT4UtW5i13YgNmXLP5MV5fROApLqhuQ0%2FHGAxZDdmrzl%2F8I3amuwHz7lrH6iMu8e%2BVejE%2FmGMLsa2ddmHlpG%2FSSCY71uVpwOKpowUwWF3j194oiMKC07%2FDc1Yk9nr0mvks9jIqwVSWDgqoGivfEyjCHsLsO2zq7Kik6rU20SNEp5FMN%2BPiMQGOqUBXzx0%2B%2F06pqtik2%2FvRR88OsJCrq1eywquA2mC16YE%2FF5slovIpSYwkzI%2BwHIoOapvc%2FKvht9ED5lHsFnVk8toKY%2FVHFiVDqpm0e3iPeMc5EI6IFlmzoNpF9fBxRc58suHqEsewaGMzlXRShMM5w2F62%2FtTbZH6c8BJMIjfeqKcPP1XvkKgBO62jQielUWVznbFbJeEwsEVHVl8%2FKzBfJsGPXi4eWh&X-Amz-Signature=add7126d35fb19fb4f3c02ebbb7cbf66176aa67db3c658c448c0eb84e35f4ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
