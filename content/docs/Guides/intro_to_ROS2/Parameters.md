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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPLPK5Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC5i0EOlhcOkEZ8PRtJYhZO75C5lTYdGl9sxNRSKkv2NwIgYA8SVsBsYcNFmMPzyY6JTGkLsxUyhpXztnBRKU%2FcFUcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXyus2eA2HwQx2A9SrcA%2FU%2BFKVbDKB3LUJOGI%2BUS%2F3i1SS5GXskOPWR9HDqe73LK6MfjixQl37A4SNbquNdPYoD196PF9bNofnN0zWSeLM93jlibRvAyVYG0G0Ahzx2BqqRU4iauYnsF%2FL6LkjexWkMlVs2qEPX9rHuSmqUOx7DCQqDYjcrrC5SwQ8ykSVByuqEeOJce%2F7imRwPr20%2F3PxDn3TIiQXoJKv559TJ3cWcWOKT0TZTF0i4JUwxNk2etzIBl%2Be7oin1X2YrpJuAsuzJ1hjo3NILBoocWTE8wa3kuVABIKngxa%2F6enKLj0LyBb0z8nk9TSMlBIGpRcfdGtY%2FHRZKFvUFM%2BTKUgYNjR4z6GPOynENhBmKMWHyG5NhNyFmBuVsiajF2pqogjHxcwNbAesd%2BZI3kvxXEWD75phbUig8xHkZwch5XoeGUEMjw4vAzDFyNd6XsiS1LdhqS1yoF4mhdvxyav%2FS35ZUZO6fsE%2FDHVtNuUCYUF8cwL2fCdN2eGf9vDe8MHG%2F5O2DQJfbgkuwICDRGLfgKZP%2FHgOl%2FmZMPQNwDT1oW8KCDCTrhqXKVChj543JLb1N3Td9%2FhqIvopQ9fB%2F7s7ohxUDB50B9m%2F5FXQPVaomdGfYRtq3Rd82W3tdBAY5U4FiMM%2FivMEGOqUBlUqDPAILnRL71gekYCf2Qfj8UKmwuVHhNmufJs%2BrtU8M9IBz6qOq8%2F4ab4VVITlm7WvPCRr6Bl736BHibamhNvs%2BOhWZ0KXWGq7KaNaQm8wT6%2FF8Ssk9oyQqJ1je9p86BfLzZFshGOtcsMh51itp3%2FA6rhEk3GZ2nqG80eMjIa9THvp%2Bw47gNcxpnOBubq0qtz%2B1k%2BNdgx0N8jT7XydGI%2BdqKYga&X-Amz-Signature=90736106d9a54e6f27ff56d5ee958eb20cbeba8fc519d3ad409caed7f41d0ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
