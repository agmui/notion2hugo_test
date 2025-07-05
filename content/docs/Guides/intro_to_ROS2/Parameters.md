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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNCAVHO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCjKaNy9SQUfyoqysLMsCkVpAiHMnHuXa5rR%2Btl8YvT5wIgUHqbJpflWPHhzz4N1tRgKn%2Bd82extBW9fzEqrNaXsugq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDD%2FfSyZ0a3vI6PaVQCrcAwjY%2BoNbQJ2BPCc9bImcdEqwJPQmEdfPbQsDFTTRW212X5xp331ZkAEicAGWs%2BskoXBFw47UHkTLYGjDmqhSMX2wkVEQWf36pF6nes9JG9t3Rv%2BlnKSBjyOm7gnzFrNWxmbQ30jCH13RZgQWUhUmmpUodMIzeQDh%2BIxx7Jj37wA9CgNLpoIw9o9yp3NY8ksSkA5QmTbHheJvTJfFUElAh%2BgAr5HgP%2B2TXydKMRNfizMVPYclxfB7siNqWLSd6w5aje2M1w1lDCKG%2BsCS0LrPlUTz4FUK3TQMdiYJwRXiIIE4U8kN8RQHBC2UFMEGS5RaBHuwfTyy%2BDRQ5rJaGb9i7kHqVrVoOa6HVNYhz7Oo%2BxWfvL3j06KV4R0MhBO1LPxLXer3GOeOjgdTttgHy0N70Hy98OQibuvsrB2bSHu8zaPVGf9ZgUaxzNInMQlYLd9rq0y5IW9lZwBNqtORdnNddwPzzF0Sj63fI9EqVIAahz3s7%2F6u3Px8nAal1eA6iFMLn7wnEyctUvfgtg%2Ft93bn4a85UjBdAmSZ2RInhSxWV%2FsZJ5Q8XHr01Qin8tg5z6XeePaXI9oIwAGrGzBiMNV5FWPN0GVGPNj1SA6NkahrNIWl%2FfVTXb4M3PawmkIDMPmEpMMGOqUBFaPiVczVBda1WUpyCjJWpn5Ojymrllgi2ukV%2B0%2BmGUfBXa5Nj%2BczwAonJ3heMbR5sFqr420a3HLHxHCKVFZ6oML2i9uQdW0CX3G4ctJNqBZiGDg%2FpfJodZTbovshzwMhEse1VgpfcbaO5utko3lbsEAl1OtQAY8H4U6tU5SCi66OvIgFzFxYc%2F0DXzg2S0ai3Dw4NJ1ovg2Mvw0fRUamOkZg2yXb&X-Amz-Signature=e051ace9ff817043505a1f26fc893e26186d5ea4887dc6c417d0951aff56d602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
