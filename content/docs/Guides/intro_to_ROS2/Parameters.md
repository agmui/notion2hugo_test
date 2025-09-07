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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644J62MIH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDiSBzIXAhKsk3H%2FZKW8u0o8MPjC71VIB6KTAPTpOF4kwIgYFyzu%2Fk7eEvu50hxo8sCEwnwNWhvdRxrmVCJv7sUBZIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMs6jZkv6WA%2Bc76j0SrcAzTM7A98LzeXa4GeR%2BaQdD16QIEagN%2Bt6zDGD5zZ3xu8E%2BL4e6gvBRpdQoQWOr%2FsHp%2BTPOAzEQRFjMrZNLfA8f7mTjgyIShHUNS71DT8PWU8zrBL9n%2BCS7PVwcJh%2BjCqGoEz%2FRh92h5G0YcujfSVfV527F2qzh%2BaYlVjSZSwMAFQBnGkD7gHFSYmqcD5zs2ptjC56pxy2lkx2OrL%2Fb1jF1axE7n5AzMsGtdZ%2FzyIsp0MuIKqZSX34YmSfiyENmAsiieU%2B0C3OI2RARst6Wnr44dRvyZM1aY9z2ZHlkpFYGLd7uvQOzow45W8owf7EHZ%2BXx%2FqazOobiJflB054H5Gn2GuDXm93FjALPfMxAjUpN7zVmMmwLYWEz4VWdxIKQLAa9Bbe07yEA0rUF3ieWOu0YCBfSXURhM3e6rf1HMyiaorKSx69dty2Dqu58c%2Favj%2FSQpSNxfnsiDEWgTERq3bjWlg7utzG610GdUqHi4kJQ7P9tQqFJSc9wkmtYe32sACciq%2FWCn4JmoeYvMxsUp5NZAcaLCaqQYFWMwe9V6YDIsxY5pFzxVe4rO5Uh0rXZdsUhlQ6rYDG2ksJyl3nnOWgoCml87dJ5388MGlB1Sg6GrPXPcqC%2BNxig%2FpnizsMJLE8sUGOqUBQFkdT5uc0ilf81S0Kso5zqI0p18Xr%2FS7kOWpMTakRLQzLFg90uFXJy3SA8L%2BvfH1pvJHT5pazworbYNIa%2FesW9SXpVcgRigGwAYPxgTZt6Iax7u0zzIycRGnnbwOOKBjuW%2BjuaTPo5yyKQJuHWC5jQbfKDbSJZGW8Hzc%2FMaO8G8fL6ZEizlR%2F5T8hsJIH6e9QRjGtpU6LTpXZVYDB2rYwTlsDpQF&X-Amz-Signature=f09542e226fa01cd7b2856b56655a782cd500e4bbdb4034e3a5fa11dd8326000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
