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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GFHMMH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCehJXhU%2BCoBIh6UWIMQlsUqu%2F8Awt9B4vQYZ670wPuNgIgL5fWS7HJZKuB3j62t%2FDcnXrQZMeYBNYmkSrUop57%2BcgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsTw828Fdp2qr9DgircAybzxxjYscjEZmHAccwJV9Iq8RRPeKoZt8lRt76JhWvqaXw243kXCGgCvIMKMSOuSJAce%2BYBQARnbqChRmIME%2F%2Fi9oFNczSeHuV5fJpOqhz%2FqsxhY3fXmEt0LbVuFevBBXJuwEB%2FJ1ZyrQkHBa%2BaYG%2FdnneQ0QLhOIsFxQDRX%2FD6fNsrxi%2B90NsCVWyy7eviHxBoEYOYkv1XdLWebhvaOd3mMhM%2BKHzeOcuaPJgcpIO%2FvDf3X2MdhnCSOgETCLYKMDEndhD1yqWyOCUjGDak%2FlRemqySYgovSKLJZ7lr5Gp6njgNXAPeOzNKcqx5QW1p1cWHLOzwxffDQje8WJttFCV81YeeMGULsP6%2BBx810vfJVPO5mib904V%2BhNxiKDA3XvHQSYwVP09UEHS4cd9juMFgNIzalbTgfyg1oPeRj6zv5Mmt%2BMCR12ijw4PZnLn7PQg1Bdx%2FPvU5EDGQccJszVZINHlB0Lh13Z%2FeqEhy6mtQUdMOIw3%2FxxNBVtcGJpdXmaVJgO3qAYgsXgAb9YVXsKP6IZtcoEz7EVhE9V5CPevstGPGTwGWeo8MSwhL2rK0NG57Xycg6aq2Gnv9u4sL7eqLpBZhSESTSBOKce7o91VRODpHDM2B19wtgu7CMPTFsMEGOqUB8xP7auSCyVKjxgEsvxM27EXAhE0BsIJTplC0JHVMKC6VgOhkFxeVWGfdR5ib4hLM8CdqnD%2Bb9Me0Fh5gKA33%2B7PyOxJbeuNXzJrgkVc904bZRs9N0vSWhOyeb2Wsx6Dq3TRDawK26IE0w7nQgUIXhgzJGBf8Ji5c93eQPBbbIv44VxQ6Tt5cz99eIIJ7gXmjFoE9C2SphG5EXJIzgnf1YMpseGeP&X-Amz-Signature=a3b2d9771c2663b8e95334d593387e7ef2bbc275fe1fc0735ee64ad2c7794c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
