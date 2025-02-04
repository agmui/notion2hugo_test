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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MEYOKY5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCb0iHhZyJXePXtoN8cBmgq%2B4lJIjEOXe8nlxHYHZ0VpQIgfpQjF%2BCQkgskDTZHOItvz%2BdRBBibVYzaKo0bKUZRuMAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDES%2BSjrvkzT5hWTeTCrcA%2FCo66skc6dW8hEebyZTCEqxCUMjU%2Fn1Xnhe9%2Fz8px4cQnZ1oNnQWyaG3ZK%2FbQFV2%2BL3BsvrIq2N0GIodon2PshCgqZTLHB1A0GhosS46ZTBMm57FKmBs5W%2Fz9CptWdPA7eJdDfZvOQPi84IloZKWlwa7l1yS8fr2rd%2B16od6PBrFjVm%2BdSCT5oQ4plrWTZR2uaQubQl7JQnyZnGA3egw%2FT3CTZFHhJKv2o28S6aucn4ZAVHoa6RZNnEVYB9zV1uuShYwFAETbPCoyKRCdisAjtDasXDWZ5D4k3229PysIgZhC4K4Nsv6RWjGOdHY%2BfxlTGSqayf5kGZnxOWMb7Bdeq1ndfWi%2Bm9k6YkKRjwkQ7H5vUlUaLUmvd2MgVSshekQc1QL6FPhv%2BIcSLlYJN91ulg7HMKY39hnIBBB8UsLW6EC6K3oodtgWDDLwJtwQNCSw84eHBk4Wl2UEpW99KRuy%2BT%2F4Gdz0SXhMoZlSIEZdyG55n619xokxWuvv9xgL8%2BRPa5NPhce3Lzih5rdmFuEwoeh9SlObEahUSFPEPUyZn8M6myFQCbSxb%2Bdc6NS2LYtZlyYfXLiMrfc2CiRVR2lbd9dU3czWRgvQWuYv5BSJiCARg3te5W1tOVsquTML3oiL0GOqUBdWdNYlQwtHeE4Z3MfRlY4Vwskz%2FdnDBTz%2BXqn3srIeexbDOyX7PIbMhFtxRLzY83RUVR3hDlzMrJBTB0w2WqP3cjBEslWBBQb9n0wB6pehJ0hsa59SG0s3%2F0OK2%2BqDckhEu1QSC6qfCfciKeRAtxN5VgWUhupr3fPfwA6MIChElVhSIv5dtyOj1l5nVT8IkAZiVl%2BueLHpCOE8NnCnbk%2Fncfh2ik&X-Amz-Signature=96f5193e22d4a64697b4f3866937b3cbc05ac1a473d428779f243a4d1dc6f0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
