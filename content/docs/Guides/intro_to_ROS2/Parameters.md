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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZXNEZO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9MBH80eMgtQVw3op7Oc6eZ4AQXjTcR9q80omm5N6ulAiANtGgiHAEBs4eIumGMhYgYVZUabhz%2BvDgEuZmncoV28CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbu%2FcvWeRQqgo2euqKtwDQd4K%2BV3cov255nBTpzpfoIJvACrVAMq%2B54dlILp8B0Fsiu5GT59CQ9Rtl96koTRMsHbZUhZTLzUN7wjRfrYx8frPEKF7L3G%2F5j2YBN04N5xn0qvrQKdjoVaK8EH2mDIGxdefapUinElytego%2BkSjTw1uOAvOGMxgTuILuAXC1oA4HxIwd6giIXfFYaJ2YHeRmCHGiqvMnEQoLCTZ4I81xSg%2Bagglbh1Rt%2F0yerT7n9RTp9YwL1zhGxqeB5TfeuCfjayuSI7D3gRWJshv%2ByHWnAGKVoZ1sQzq4%2B0qjiTRWE6R17UtX2a2P30LO5ce8DVta%2BV4ULP1%2BNslNuim2Kg0Se3ur15Bn8o1GA4bkUtoZJfPGgZMlwnISbiAVdPoNkr%2FCnAC%2BIGQ2qKHdgfpcnpxkNz3M3h0XJK0ViGRwOAFbHeictqmAULMIP4vcpcG0%2FppN1ywoWy8u1VPSSZ7sICY3KWYzFFjA6%2FU%2Bqnzkf32fqSWi40JbfP3dFI1R%2BcQHsEwjB7gnL7z1Z8iYZyDEmQe1RmcUTkoZB9uxNdWXT1HwW3GvTVi5Duf9nLf%2B2TF2qtJPU5ztRiyUgi%2BqIP0LbqpL8nLCfZsm%2FghVMae8NY8KgV6Z7w3rAAJJ38u5BgwtrbBwAY6pgF2KL1ZTwpGYGNsG3N0lWMt7plf%2FwYXtkSU%2Bz6v6R5n3r0hG2prgCpq5f7QYvyFALHjIjY9EeEakIKKIc%2Bz0CF09mwgFK3BAPqdJ%2BXnp371tG02S7x4todIa5nh0mmMHDYgYIWO%2BTIn5srQG%2FJazIg6a6qGwZWxu90I5G05KIPElatbjyuTnnWITn7cQX5RiYP2ryr9%2BS4YHXWRcBmHVB4LM8mRHD9N&X-Amz-Signature=3a327b7ec29006476b9a4a416c652fa1f256663c0e22f156f0f8d225d3cc17f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
