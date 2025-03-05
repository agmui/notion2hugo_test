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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMZJTE3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoV4mqVXN%2F0H0H6Z9cD3k%2F%2Foe9JDYVZ7gQ5qvWzYPG%2FAiAFR6Kp15%2FNfPavMnpjtlx8H0BlcKB9Ow12PRc3YMyojir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7pSstr855lddS96xKtwDBMsjbTY5Z4mMUhmtOjL%2BE425cm8LO4jJZiH5v7ByVixXD0MaaLhRlhpwl4ncbjgQ9xq2iQ9Gi3GKQvsYfark%2FXu3u3ceTe%2Fe82qqJrOSPU2DSOi1dZ9pnE3T3mOBM2bNFwdH5u8E234aovVIw%2F1%2BCyjK7fvKIHkv3yBCWVMm3iizLut2d4ZxCdv33QJdlyucy4fsrdUN72UarJnIou0inKNR1mnGyI4YJOqU9agAUC9EGsWQpLO%2F3oluYR%2F%2Fl3fy6iyCmTPHGYCzMrC1byRdYecFBxzSJPqzVXRkEamDVUMt7rxPbZPTgmSGhZOYCZDR3rvhXQ7kH%2Bpxyk2PT283tks2D%2FJQYNL%2BdovoT4aPZFDpC7VCoaBWL2GfLq6hwgs7Wpsw51K0LuXDSv6u%2F2ZJLQzjm1u0ZvqGKam3y9RsDhSy5uQfEKVKk8%2FydkN4BpnwnkIsJXH3EG%2FQgt3HD4rRLPuJU2GuMVgJYsbW110mmhqDy48y4Atl8M7HKzpkp701YckYBx1Ms8m3un4QTkkrkQj3QBT2u2K%2FzJKijn6FxYbjsC0OrXTGtsIyg%2BcGuU%2F4QfOH89Fo8HwFvER7dGRGeQWIfgl0U73Ga%2BNXdRdYD4adHP25Q8arTj4PIp4whISivgY6pgEznZcW0Tay0w%2BinlvrtFf8q2%2F%2F%2Bmz3JJNwVbSmC6qhpcgYz3AQKS5%2BRidD%2B0JSlM7nP2Gy%2FpuL4lj61Ltg7v7iVrz8iNfkJH9iJEwAmG4%2FQkd%2FA9h3d2s%2BQfH%2B3QjbHOqq7oh5GcJhXNB1jrt74FLMtbm8Res8fMr34QNu5w1QZmmE1A8MpgDh8dvmhRIE4jEarMnFHRvoQFe7Kg9eC51U8n6la%2F9d&X-Amz-Signature=7c190230cd5c251fe96b43a4d51d40060956c8c5b5d9b1c89056514c67e13423&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
