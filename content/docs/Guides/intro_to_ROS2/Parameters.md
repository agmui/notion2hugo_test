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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIURFXU4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDCj%2BiZlPKVhIEEYpfCoqkxaAzdPmK7yOzkCtFjD1gOGQIgUyf1MDOjXomZlpezbGD%2B%2F57TsyfJ4qrpJ059HPYnDYcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI%2BC5lKuTVaijOOa%2ByrcAybe%2FiqPsCIdOFfEpT9D3bL9z7rK0ELY7LUUFMTUT%2FgzzWfHDaLp2Qif2OUZugxxhgpiYXfEcRl8%2BfgfsKyyh6H0gaJAtk3fxr7IBOnTdW8pcKtmworEDz22KDMIwTsNg6G%2FT33EoUr5maM7qP1HxzHKAaqeVZ3h8OGJgzxxn4pVFAPYvFBM2Wmwos5UV%2B2ZO1%2F9eDniZ6vD%2BgHeRWOvQzoj%2FSZGFFro7ljjfZYCC0UmuKPlOv77zpa%2BTHs7q2sG%2BrSpVDi09AwmKePl0OGtIe6dgV7h7MiLW%2BP3h%2Bp0co88LQO9e41o4dLNU%2Ff7W0D9YTJSN6ZvmIUKLB9I1dgbRoN6d3dSq0pMUVHJuptLhmGA6%2F58KHUCqqwcgs3XxcwyLP7wEGdRse7r1upLwnAdwWYIMtYalClvZmOrKUcW4bqzlaRO6%2FUIb3k6UvXNdAEu8IphwmD38IXBlr51pODDQ%2Bkon2ojQYRzsHQEWrF41PQnvxw89kF1EHnxZxGAVoFS%2BVAAtzj1nN9mzbXk4wctqq5vjFSFgtGCqcZyBdGsSjSQ8%2FATny5TkhTEbmo73VC18%2BJJ1oVPaAtTb1CKbW1nGz%2BeKHNIzanSlZ0l6kIzWQiHCC4aWhHHglwqDP5HMJXbl8QGOqUBdudilEDgaLxLlyUGF0NZCGMG3dfS17oQTSL2GL9msWrD9cKmJFDLFtTEZDa2yw6qE8PpbDDxIaPQG%2FPDa%2FaPrHWp5AN5k2xFCw7yj487HPFmyv5K%2B%2F1sM2flW27wpkZBU%2F1rphEoorS0M55uHWtK1Kyzexkusyny7d3x2Pae4o71%2FW0XHP4U8KK9ZOL8MafYFCjY4P9x4Dcnjz1tBOJ3q5fImsZd&X-Amz-Signature=d178b8e0d880ce072c6ebfdbd69c2e8ec2811e59f27bb8b451ea4726f79bf4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
