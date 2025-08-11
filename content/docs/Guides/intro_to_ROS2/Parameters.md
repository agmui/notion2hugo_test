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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAONVHQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc87Tdj0oWgL5Xv3cMVxppeLHXvh%2F3Ustp4kLyFuTGHAiEA%2F1aSC1iuxPHOsS1MQrtWA7lW9ouuzB0mjsW%2FdAhHWWQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC31v%2BRwhdcux%2BgaMyrcAzYcdysqUzEw%2BNfpKMqO4vfdJNztiOJuNGv41tyQMG6h8ON7JCDyOMCkcOHEXaGPfmeVpn7Qv0OHUiu77eolREOOMIDEeiUGmU3Hzz1WpFThA3WjHI%2BVzbp605dH8wF4GWELSskjJwTktm24n8X7DMn5sT21wpSefTTPszsqXkO66XjUZY%2BP98i0CulOWLOee53egLgYIQqn3BXSuH4h4p0AdwOzWEMaUZ89J03Cbu9hM2HMcBiRNM%2F7RGwvmBNvZIKfyxcvTMcfj1n5mSti4G%2F2ipaRYB2gDZDULN4hIM3e%2BV4R0XnpIENN7ZpwcAUQTTpefXxU8xkmhdDslcSg3UhCtwRzJaDLTDUA9MoL8N8mY%2FJXLW8n3CtZHJFfyGZD414yJcVx8ht8L1lzv6%2FywMkKqvgHLx026ybhlrInSreNoirJk%2BIGc%2BF%2FkZfn5RbBy%2BVzhm%2BgqC3Mt4B83vLKS6KuphiNIuRYL0fnTW5cfbLbmtx%2F6xBGTFD%2FuvcHnt01kCPxuXz7iOC%2FuXmNkjbdWVbrMBpN6aXF1AhY6VH6xr6NbIgFnixVEuyftS7C%2B0y%2FK%2B109Zp6OO1tbc7X88qvSdIVI1GBUcpPBjh8Q81BtRVd6LWxbGfYT9t4AcU4MIGe5cQGOqUB4rrpVBKNCRDm1SGLIyoPq62JXnvnCwlEdmhEKWpwaj5RNyg8d7mJP6agjUSjyB16mFWOxKLHCCk50YGuN18aHYSZyVwP%2FnNQuNOorYoIa7AYeWBEaVp8ySDZt5EY0UECMp%2Bef9HR29FRmmbyOd7U2PhZpJKvNqbB5IGXwn77nH34vBri58zfqbSgVPzMgKjH2PgC%2BleM66g9rjmQjPMt1%2FlraJtZ&X-Amz-Signature=979089009749ef5e23a85f74cfc9aaf0d73bb3adb790d374230fe1d315829d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
