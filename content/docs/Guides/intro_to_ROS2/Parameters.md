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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVLS3GRL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2FNTFxTzyxdn%2FGIKD4P4HqMcQZi%2Bijx4SapL0i7pYugIgRTqACcck3ZVy2L21AIqo2ISoPs1eFIHd67TDJG86dpEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwMq0D56MOGP%2BzutCrcA1prNZm%2FqcFJghq%2B%2B4mWmDlb7o6Y%2BlES43nFMvXFbOjwwQVFrU%2Bq336SMA324o9licgwo7M5BkS6pds7HKESVmsA9jdv5DPfP50uObbdMMc1U7SSUQTjUf8XZ8MJsmUSpJ8Rdhx2TTcOEVPxTxG1ofTQW9GXpdrnJKtIYGj13%2BSCb2%2BVMOM%2Fs6oSexIp0l6vbjdcZkyMalSp9eUI%2BjuUpYxuBF38%2BHEm4vpbBwO9E6MiwdOhLAWxMGV0%2BrcMVvUdBAby61NWffl5EU7dPdr6Ad49C%2BRwP3Nzv2ED3Co4Y3gfuM0ZKIV0yIVEigILlllLVMh4D3Gzdh%2FTYD8XkFw11Pfg8HGSFIGdu4GmUWmkPnB4nBJp1pHgrbOUFOfUzNncx5qeovxOhmeG44SGaHu9EPq%2B1mashiS2EoEZcFAhMncrRW5ZN%2FNVB65hsYz76j7atmwkG1Zv0OdUVHyvMN9L8q8%2Bb3W3mRC6LBhiAftMebfvNJ01%2FONk%2FuTBxaeiDXkDajGGVUxrIubjU1WE5VzzXh7QWdFINtPNS2M9exEyaVo6KjPnMPs7ooatVPEZfYmKhV0%2BM0rN21Ur%2BusuC1bzZC%2BmbA2IjmscmWgAAm870S3ldJ5e1YWdFLOZyhIGMKOnlcIGOqUBJV%2FI%2F4%2BD7sJRilbK2bRgzu4K9tuZ9VbcbcIwUtFpvS0rtp%2FdONU%2FPG7Z2XgYu7ejhAS68C7dc05jqvcBWWl26plX0XJ7M6YTQqjX%2FMswdlhazfQGAqgRxhsgVaiE4uZ4kTuBbK5fWgjevWjGi8iDPzgrczoKoneF8QGCHpMDE27Hq7qjvRkdNoC%2BCZiWNwc6QfgleXPE6XbDyF5Er1UTPj7Qf%2FLx&X-Amz-Signature=44e23ed1773f55db4ee29cd4604d16ec7ad3c57b0bdbcd4e013c37a8e4ec772d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
