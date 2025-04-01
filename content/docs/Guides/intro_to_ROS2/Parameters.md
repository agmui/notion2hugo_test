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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGS53E4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDER4O%2F73Uxn39zUM2fXzPqchK%2BUbWg%2FsUw3Iyp6w0E7AiBETk%2F4zZNcM02xnKupIociXphEsYXlPvV2sWf89aqV9CqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7TZDk2s%2BMw31onXnKtwDY1cRSAzPWQ35cQylRrt0fw3MQMxMAy%2FxQ1eV8lRUiFlO2yKzFOpvHoVAakdPYQVMwErH84w0VnG9%2FqaU19jQ87NcfNL9ptNnkx3SrjGc3IVXbQ7XR0gscBVy6%2B7rWNY2FP9Vc7nBUiZYcBDoBZW7vsVrwy%2FwJB3FKxQUwLNFMbilJAc2OYwMrJc6Hyh%2F3W3u6fP06YReV5Cek%2FD%2B6hWbgHMgS48%2BKHAmmGB24Sf2AbEvpLgCNUsg5kcQf3QaEQxEDBjaTnaxff98Sg4slCKzrqXxELlqcFV2gsyrCyXPuwM3QuhkOWy8oNu6Y7sgC3Ew2XZfhqdaEVXgM02pQy%2BVW0lV92u9v9VXxcSvbQopX2o3dxuJDg758o4UtC6%2FzhIwILBzp23zosZN1cIcaeNuDEX3uoYZNTtY0owBr17d%2FVihaanDY4PexrNbCcknZdaPwAnvy9WppQv%2BpsmC3InujPup9BYIWvJHOl%2B1GMQMbUdM54HHsOTd1Mtg2RVdhlaTtftc80%2FMyqbZdcJyAdIB2dr9vBHTPv0f923ITMQYq6c9frMkEBm6eoV7BNX%2FbRGcqC3tcUAQ4k0VpfcOQa4iPr1js6t8n0l2tlwzdJnyAQUFc2gOg49F%2BiOQW%2FEwwIewvwY6pgH6gGKhBjZ9Fos1qkFhsXlz9Hk5rdw7tYYiISrxYeSSJZqIFuFLNsIDE%2BUDvVFy9ehUGeCL8nSAvuugysO7%2Bqu8cew8AImWiCjdFcg3qJvcyJGpldDlVofnsE5CWbfW9RO%2F3jpnaVEHNxbb5E41HWmoHwwxeUV7qyIEfcbmme%2BHS%2FJz6%2FwBZZt5H%2BIHFbDXiL9rFyGrFqeu7%2BgFNxk57C7kYRHefWMH&X-Amz-Signature=eba2ff23d4c48628d3b34080fdf9b5c9e3c32aae2f04bed06f195f80ea6e8490&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
