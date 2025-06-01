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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3QIZ3K%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG3DmhJD1hZWvgf9GRAS7ozBCRATszivRNK3qFJ8NAynAiEApycleSw9KkitrllAGgYUNlhKD1VqRCGq1RfnVOoE77wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuv5CnbCOHwNJo68CrcA7O1Kx35Z3hiIJWEERoi4rEiur7FBnToZW20Wx41X8Pe4Xu0E%2BYwQwRdS9Ip4G6gwppuFvbMZ%2Fbq8tDuDQq3G0FnuAqHSiK8HsccgZJ53fx9AiBofIb%2Bl6mb8aIYYuKj9cVAbub%2FGFTPqKsi3dJPCmTs%2FlT%2FtlY82PL3DAD9RDUMZKLIjL96%2B%2BDs%2BLzG6HF8XXGKeIkfegiyXB9IHFQ2i0g9M0CqY2yNznLTJC2s%2BlL%2B0ginzvt3qNrf5cgUJpHrMREPB9c5zXG9uT03%2FtcvLqkX04sXgM0o3xZRr82ruXmbulqjNX6O1Zi6qGoVYSYDqtSh5xsRrDZ0%2FtAu%2Fe59a1YKtzCg9NHVTMzRlzTmNLiW%2FM8meRT7YAIRD3yTrp4xs%2BmzMTMKRu%2FodVhVhJzHV8vApHqC6OQwQKvLiizU2LQOf0wSSHSU5ZQkY%2BWDH6P3OJka1shh%2BSUHcBT3gYRSNOagshnxRzvf4II40vwZVAVG8Q84MxIKXCVUWqcRuEX%2FikoVF342fOWDjGE6UA8Qvplwbh6EFz6n8sW3MbY9uqEctM20SFLKwNRZiQNs9xMKhvJtPhNPWWg2x56xzHK8rSKiZUrgqrq4IjvLy7FD93t%2F7pFqxDvOnOAoHGfMMJCx78EGOqUB%2FT2n9HEEu%2BSPO%2FBC7bppfyKsavw0WrCgRoZDQAehg2Cw5JiRA%2FWaaT%2BghEpbBzJtfRO1mrJr%2BifOojSUxIx7CkuPTm%2BsbuK9eHwJU%2B6ytPbyVSrH6MvKjzWWaZoDuasBNwSprNUzad1efRgIhC0qxnWzmekWRuTc0YrveTk0PP0GL6MxkCUqw3WffnTpFH%2BwYVJfgPyquwUMwC2v91BnwgSnnwgm&X-Amz-Signature=7692d6a052b5159097777c04e96c9fc1ec4733289b29932091976d5b49731bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
