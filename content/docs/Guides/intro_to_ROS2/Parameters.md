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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDEDCH3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfKXGqoP2Kvm9rFq4fPsdmxM59C1dSv%2BHGPR0Z0RLV5wIgbYVrdr%2B%2F30HYnGpgzdyRixjirfgFoBQojtV9vFyztrsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiYJuWEWEQ7e9KHSrcA5RRlWlduCt8Ab0OF3lFboelWf8J1S0owO56u7%2BA9wEUQ%2BmpiAjFlyiYGPAMKqroxQ15zlBhlGDrBCm5E5XYe%2FDMEJMQqyP5SxxDgupX3lWR57deDSKhg5AzJ1hbuVlQq2Vg1TMc7n2o9yl3OZOkOBkxdrgvQEdm%2FyPDG9DMD4ZXJAG9NsQnnOg0XLcaVpl5%2FqjhYiGTPWJa9p4oODShjH3DFJ%2FPUUAKXs4pMCZm0OpBMRxQA9H0gO2EB9evDCWTKtCUNmbD0Rm%2FcChjr7ycPMxjnZYiHYpjGkmpmibuORYgiIe1pBiiDA8XPBm52Hfm%2BRVbu2%2B1s5DePXuE%2BU7p58xnHkiU9%2BbRVkBFu%2B6SxNvjwVBfge%2Bh4ntxNRLU55Xor2PyZEkEhGTG2L%2FlLzq9VDO0vNxdSOZXGWNf0Nby8kW78kI1vuAplAujdAyZg6eBFmd6Im2E2wvAAfz4xSbydCu6MMa1F5BhRTKLOhmaoci1tyMeSGqBT0HQRKSG7ZbpdeettP59ct7KV%2FU%2BRSNafOVzKmJoLZ123ksSvmHwDfq01z85sWguo1BRQpLl2%2FOr8haRH7Qg3ibr60cxAFXAzV7q9mcHN6yvJb8z26ZQkDYQQUqllna16eEucUSWMJ%2Bv%2FcAGOqUBlhkm6P33qGcKDb31lDinNVpkbZZRS3ulUBB%2BYzWefEBXXxSKcW%2B3DxveoB3x3E1vbLFjG2%2FQx5Vruf6Xj2WmMIu88%2BkpeMsrt4l7J2VCbZN4Zl31m0AOOFfXKUD6AvanmU7jeAw3Y4Y35SnkoiC50ihPB4Bf3PYFvexeFFdDqEJg2N7NXD%2BF3SbUdWcUmg4ls%2FlOyPVRz2MI9UJgvBV69kCYH19Z&X-Amz-Signature=502e465dfb6d11397a984de778654e8657720f4e6ade1419e86cb2355121a6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
