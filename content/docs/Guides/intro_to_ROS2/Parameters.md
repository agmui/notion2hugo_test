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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTV5RHHM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjFFkfZ6v0lhcLcuvWY6Yn3Pxfh6DYlKebh884YHZ8oAiEA38C0vSPjjfKYTDewdK7F6Am9xiSTkAex4zr%2B%2FV7%2FGukqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmFrks%2BChHzNrs%2BNyrcAxXL0my%2FQQ4DuU2tkoB7HYASmG3D7VZpstTZbwxnbXyeUdl8LyB4ypyx0ZSLblznXokGOL0niPg%2B8z2lkT6i2wEIVuZRq3qKVeXVhhFqaqfCxj7Q5pHH6%2BBAzJ27IPXSOY98v0CeaV5uh524HOFFx17Dy5o3%2FcfvdMRFKhT0aVdQX1gewmWNTN8qFtAAqOpWujgEIDi20JgMl%2FJ2OiPy9A%2B7gQEtkHBsmxeziDOZ%2BgsXgYFdhK7%2FbVl9p8kWpvrOzZLqV6eUw6pP0sE0cQRM2HrlU2rJ1EuSqLQFLywWesuFWEaYMFgcO6ZZFKcpVuFBHWfMO%2BvuhfaGyDTa9joEGRFFWD1y4hRcQ9uC44zvEutFak9WvLpUFkqZNHohS9lc9mVqOIgUOBbCE3U%2BC2m2AVMfTNhLYqLECCarAF92oHaMuHijXZIhtDvt3ZTGwIzmYytX3CWHsJiNIefGpaAdggXlh6T8mswjQXKMOGEdtmps0JPy%2BShBRPPxBm3UGRSxUkI8%2F%2FLevQPO0siMbyrMQNREHM1iiHANihlHy%2FOqIWoCNO9jH3UZXC%2FjDGdo4A31gZ1zQjS41YPxkj9vz6WY5Z5nyZd2S1x2E99WjmMlzGd7QfqeEzvrdjG1nLFAMKuI3cIGOqUBWXRsNMmegkF8iTqiyuOGMPb018lJzIDu8wNWnaJhwboCiHyJqI3iUExvYvPcKO7hiZCJCTOosiIw2NMhWhUr95U8FifRd%2FOU5%2BW0075GXilXfqi0F6FTjqmfQeldG%2F7xUX0dWFzb%2BVLIojgYiS0ygtGH7If%2B%2BN0vymsb6ewhiyTvVbglxlV1djNfJd81cd2JATPct6kmNAKzb6M6h3uVU84fEKDU&X-Amz-Signature=1ff233b491509b54d2963b14bf92d289a940a9543680ee9085266ee983721d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
