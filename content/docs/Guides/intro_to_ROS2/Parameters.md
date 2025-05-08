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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AE6JCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwy7h5gIK8sJCi5Raj9DGdpr5Qzb7K5z5fid3ABGAgyQIhAJwRNideSNOEXUCVWP8cteL%2FVbDNRoSCGZQ2C8fIumBJKv8DCHkQABoMNjM3NDIzMTgzODA1IgznMfPymk0TA2Gx%2FXoq3ANxPWvkhFgagr5umlsO4ot5kMcb71GhDDajoUpxUf87aBL47wN01GZT%2BVy5alsNV3yD32z0dqu4f1Pv8aHo8UC0%2FyFEfaA4qGxvMqQQ1VfWV1lN3n8f6vgV6Yy2zJMUBfdSfLnOgr4bSUVGELrd1jCWoLH51B%2Bln2cxG8nhF7bMOsd2T0sX%2BW%2FVZs2xW0862neL4K7W8z8E3FY789e9NBOogcvUMhYB9BsOw1I4%2BOYxKyTIndd9VAtYXxWJ5hZfxn7bW3QrE3CyP0CMErU%2B84R46f4eTvtZulF%2FrqCpC06XLfaPWUfQKKdySgGmk7XL99h8K69rkog6Fag0XVVU4ZAal1%2BuvBzGRyPuzGGvHeqkC8x%2Bg3GnZats6Ko63Mfv8evO1Zq7i9zAw8J4OEQm5YXywWA6A4ZNqCBQSYSwXA%2F%2F3i0k9aGskjkTsjTBYibnU5%2FSfXSIpfTTzRS3bozSJNhWpiO5ng%2F0V3KdpyOfr9DJfV5oCmd8WGjiJOvfkD1LAaPCI%2FvBb%2FcaoJ6f6I6dmfsq91Z8lB4xKGOD%2B3mTrhxTfLKfurMjsZEyVgs%2B7F%2FgtWe7%2FZSIuPQvRtXBSfcsq0z2RT2nP0fzVw%2Bjif8cVSVSmIrKPSVNih7VmNQ5YTDcs%2FPABjqkAS0Hn%2BPsATm%2B71E4u2jWGoftYS14J2JXriqzTDLLuC6SbedWdUKCffqBCSO9AB4eZUQVdo%2BdwgLx5ox8lIfFPvRDWZVhtYI8EOx0aIDZa791WlnvVu2OChEPZmTOq7Cxq9gsExE5tfJoq3Eah4QNsbFN3C1NjypZvZ9n474Ex74nzoiIzvbGPlyOAsx1wthVNBsifof%2F2lY0tezJv%2FBO9pxGTeXH&X-Amz-Signature=7250b53a24a71abb75cd025d758e9895f077757f653fe5c0d6a3e1c216788f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
