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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFEK7O5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr63%2BlkMn%2FR7UjWncB8NXRnsbNJ7WlZzrBpaJzdfFRZAiBY5ho%2Ft3LhdGuGQmxJSyEyxo41sa8kzwIvQLsvKTZ%2FMir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMyho5ShGvS7VK6nwSKtwDulFfCqLcV0Wgypfw3OwasPlP5KGvQTcbgLM3lW1Rr3T8mKjbtgtyCY%2BjYzZXsQi6om45WPnKronOi1D%2B8XDXargqehQStOxbeY4VUFTqGMZbiKQ7sqsylnJ9YfSSQBk6EtFfINeLtL6JmQx1TN0XGnObhzAjHZgYOkiDxUxdz%2B%2B5Uu2MybqAcsEGya4hK4F7QeYgfPu0oTeKFMzTmYXknabqCDDAKdaaqCI7KGXRDM8Mbrc1pIW2Kmcccxg%2FyHx5d6%2BxqNBc0pzXBo41sIbDibPeswRekswbFs2TzVNMsVFS1J2l3OtvwbaJZReXRDgtbW%2BzHGybzJpVrbEjfGheuKL%2FENM4h7z6YQZB4olvD0lxlBuayhMWbBPNbbAfEasIcFUuQeoSr6pVwtHRgz45HkQfmfm9kbOKMp20M%2BoalXK3Cb6jPs96XTcq1Jq1xewNc3zDS5WpMRdXlHFn6ONuh96imKTVWblqiIdJ9mjpkQwrB9q5e4G7833BNBKoew2OvHCiLVTI3u0i4Sx%2FjPPyOMeVmIPyrKHhd9ONMDXFSc8It1xf62%2Bk3%2B55tzVc7vHncmKbU77h17nxWlrLb%2FOp970pyDu4NTJRSKG2YQ7Kx1XmUAVVogWKkF5%2Fgzgwp%2BnuwAY6pgE02ub7r2hUbQrWAYhy4FNmtbz9QEfePlHmgOwjTu0fgAoM13Cs0u4RZZgivM4jipd%2Fo%2BLOWBXakBvyhTNDxnYF0A0HV1MWWDRagVh%2F1q71r%2BheIDMwVy1jIQOqWPSausTBrOVtDT9TlQ5Gx0UPs4Cf0HHx0JbHeSZ%2BFIcsanC7eEZLp0qjpDV7eSyDAxl%2BzPjg4Q%2BZ9Jgy2lCp%2Fji0LjqqQjHIeVIe&X-Amz-Signature=18f72ccdbc7efbfaadb84caf6e28c311b613a5bce94329c6c8ee7428c3e37c38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
