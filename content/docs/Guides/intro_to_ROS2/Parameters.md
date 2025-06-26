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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESEKXDV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDBju7tKboaNwVNhPb8XOOkrldtDKRQMgw8yn4DlPzz7AiAyvdp3H2mNeLp%2F9bZ39W0kUdVDqhOfLZobLe%2BLlcILOCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMEzCyCYLuP648DuGlKtwDo3j1%2BXX5q8gKKHJpG3Dfs2eQG8%2FzGjiOYlgFITEkKcvl%2F1I90XPEv9vTKhxFLIDnz%2FAMG2isD%2FNjQwFPtkPWjsfK%2FDVyEVU9lEd%2FbkHz67xalswF5cgT6AreJYGpdT1xJ5RiY%2FKDV3GQ3NK6G19Usp5Aw49eiOAJCxmloXAKSXNJGVHbjFAXy4eg0B%2F3SIQ8%2BmGhQl1BeKbXzxT4obw%2BCdDSWLqNF9ElfzxSlOo1q%2Bc41dAdEpszxzd4Bv3KTTdw2ZvmrLgUzfLnYu6wKi3UyK%2Bxnt5OaTXXncCDeOjgFyYWeW1RJurjrZFQfN%2FoqnshUuT9TkoMTSc%2ByCIy%2B4MDG5NEjGfQUI9%2Fqpe9stolifg4h3auKHVNOXRvXpPTpq8PvOAJvKLvPSqcBoE%2BXymyZjb4l6SLttMQW%2FpKnV5SdGzkxTm2qS3rr544txHxwVK786zkmbjWsdo30%2Bt6z8N3u3Wkec4EFifyluY3pUvJP%2F9gv71ikn%2B5jVPBjirhPpFqgPBU1YubHmxfois1ltccZFMZVVVCOJNT%2BfhzoSN1DvXyFzmZsMCXmyVGFbOl2i5tEdiAyomcSgyQMN3Zu%2FYnMPgkzRCpgjL7q7g%2F%2FB%2BreYrff4OCxaLPp%2FEjmg0w1MH0wgY6pgHHQNlE%2FedR8C%2FtCVk9XKaYcdvGox4ZB7PR4tgRNfHXqxJRxeWTUPNrajWFxsRqrzjOSZgeaHMO9NzTz54c7ydN43%2FtMAxUMn5h6cRftWiYe12tkflqO%2FYvXEzyVdVnzf142T2WQsfgXg8LMUlH%2FVKvHpClRy714vvWLalhbABtnPbpC6bLAFKGUKJV4SdK7TymfLlH5ip6dlrv%2F0sMIyOcYfWztEB8&X-Amz-Signature=0e552b85dd8346b700b5c236a3d106c95e1ecc10b7a73e240d9c0a8d6e8684df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
