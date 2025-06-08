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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEQTLC5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHXMqM%2FnCx1%2BMJzP77FIvMnCR1rAmA1gcU4dllFQ5r1AiA4kXDPLGG53S%2Fyfr5P4f87%2Fv5ikwQt%2FsTp18DSLMumfSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxmpthTeIrVEOEmtKtwDMAyOKrPhPvX64FBa%2BhxR9eCB4fydNR5yqdThirsb03NaENbYEDSPjOd%2B4Nl6zpPqOao9uraaddaIpd6kVJXfuPe0BUxfeqW%2FnruiuL%2BBkh7fF%2BOz4Di1WiM%2BXxnAsDKNHcW%2FV01ZZwphBPYs4SMEZpRFImaz%2Bn9RX6OzOfGDGxYY388DfyZQK9d77Gng9A54%2FhbeJMNR0tAlDa0WcWFM6dJ53jVX0i0Z86bQxpAaepxU8d0SesMF4qDbK2KIEnsoUS%2FYkXtY463EHZfVz9vb1TdSTGFK9FryjS9Qcmv3WAKYUq7VrI3TVvJ4%2BAzqEiXQJtUkLnKmPhmQY%2BHijGwObh91sMyNBHd%2FfqQR4QkoRn3yAzntRNBJWDuMFMZO805OSdcUSve%2BZF9NC4r4b3T6mVy8Ua9fRe5mqUzYw8WhL2Jg%2BxsRcevmMWjM%2FvGBVt7UeK8YFf%2BnSi3C%2FGaPrww0%2F9Dnd5AgxXqZTOkTXSu2OvA2IIWfT1edKrPQWkilV9Y1XDX7ioRLF7f4SjN6TpRZ278f4UO07%2FHzKLxD6cthrQpJDap%2FWnZFf9Y%2F7PILlsm1G7pHajWepq9q5GCzFQ5ygzUnPOUBMRBfKwiDHo%2BQiPq5QyIBeQcPQ403O0YwrcyWwgY6pgFo%2BN7IxPSAK2WmYtpbwf2%2FPVdQJlGmSvaNYm8fpyVJaFG%2FodSAFjLfHb6E4fETDAOp3SYEpcK%2BcBm1ufn9Ii0YJalARPTFBkw4X0tDi9oe6Cp%2Fyn3rD552Q8EJJ%2BLZ0jqaD8fHsYUsKcECaN5GpgHq72xrgtn5%2Ba4Pgq2EPatBtw4yXBih9Jwq81cHni0VOCyZr4SZsrl4Ooip83%2FTC24K1onCam98&X-Amz-Signature=885ef4e70b87a24f260ecbbd3d8593cc41dbeb5a0c33b9358db6ec84bdaef298&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
