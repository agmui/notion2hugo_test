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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA23TJGP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIE4QLSBGT4e7otjhXgLQWiI9zlrRo0EeGiUpVGUDp%2FDvAiEAuwX6M5FfeLakE%2BaEA9kKvSq%2BuuHfPFTFEoVMrjZctQ8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGj9MoT0EGFypKmm%2FircA7e5Yg8gtPEAXv5wb1UN%2BPW3Qs%2FFM1Bw6s%2FwbDEX%2Bk7Y6aE4r%2FmfpRwxsKMRtCElOTnJWS1LvIQUdfJi5%2BUZCbuD5CyYs6sIUWVt7Lf5zZ09kgBlTq9shcekSnjAewTKPm0yBLULvZ6W5OKqtCl1CrCahuwZt7R3Gk0nykI4h9x8W0y8SVmCtJs5KhsJM8tGI5kxLNYYvuimlKbiLGUAjYQEwSN3dKulZbRdSRWbAuv%2Fp97yY8J7eEzfyZ0bmZH3x9lH%2FEoDYemEfo3ACDE8XjVrR3mkKSRVkHLb0P3EcIfZvk%2BKZUPIEh7dIKrhARUrYsiaK83VQ%2BhTgd5mEO1OTtDUDPOaqCert6lZULgxc21ahjKrJt%2FxzUUNFtWB9xu6WrTYXnD1rFGDK%2FgVHPV9L2P3qMoNNJ7WqkPF6W0zYNJkMJEwbbI5mc%2FWyFMutSgfoqPriOWIiLG3Jr9Ggm2iXqawIO17XpMz3eqQiVi3xRa7iIdfXelUqgBNjQz8bkQYS5wVjczfDXdq0m6fHeMczYjEI5AirEv5O%2FAW5320kW%2Fmq6BOuBrO48UsCiEfAUiNPnEoeAibL655MjjI1lLERSCD7KMG%2FIKfMfLSxky2dqy2oZvAegP3d74QcpF3MKCkmsQGOqUBkUZfc9vNW%2B%2FsA32eP84XNpWCmoUvjkloqPLiyCXXUfEa83VKF8Np8dosk7oMWfg%2FTadId3uXjp98vzuoKfrT76Hepwz1piMK5K0%2Bu5rgNXcoHWwx%2BdsA2ylSWxSAllbqxdoBZ57fQEyIBRG1Ok9HQ4BkKh4D9CzJQ86WowrkuqGzOj%2FBH%2BqmwM4T%2BCYzINic4%2F7jYca%2F0sGKvm0GE2tjX1zBxeuj&X-Amz-Signature=9c6455d4a74e44c07decd02a429317964ff1070cc2d5e7bc373201624181bc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
