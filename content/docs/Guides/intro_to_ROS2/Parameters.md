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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONU5JKY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8lzNlAed45%2B08Hje6szlRgqC%2BV6%2B6q1ujVIzMjWpfKAiBQ2ciKqZ0McBlHPKwtiPupSjVtWYxFI%2FeQjzixAKcVVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMRDMg9xsYZbvB3dlSKtwDTHa8s1vToHx4lpYbIYjGKJbaXJLK5jkmvd8Zt0tpfep6xXg%2FIxT9lNi1z24Dk%2FkE%2BDVJI2Gfp6i16h5Y7mRtPk7B9AKEC3jqMw9a%2F%2F77ZNow1p92eRU1Z0l%2FZbJz82ujrRZVLHyfus82PpvEGd9F9bRq%2F4t9CcxUjpotcA37BzxVMu%2BZxUGLWSupSw65tAT3IgRrFIIFtLcNP207cWoJ9YfhlzWPpZLWTrytYCFUGtjsqkyLO29EpBC%2BhDGjk6y%2Bl99poK5Ea%2BcdykPIBOo2hGBiP65HmddgfgO3DKvbVyjj8wzXcj%2Bw0Si%2B3%2FAFfbGgRimG1qJXzLLtWyCYTKwi%2BXi9EIt4rw%2Fh6GUmNJ4MqRrfX83Msu16jjGbVhEe7LFRF3BYQb9TMc%2FwNKL%2BVAS5%2FX8H5nuV0tnPTXh06M6pjyupT%2Fr9QTh4GSQUxuhJC0cgv9ZVtSewMn8Yn4ECKYsTNilQ8C3jfQ350mOxBvZvIqMONmpxva0%2BOAWFa26hW%2BDhYR%2BN1kU2NOmG3W4BdWFj%2BmQQC4C%2FEoZ%2FqLE2MtNf1ab0xYG5DDRtjhDJdI08hr2QYV4tCOFZFVuNW08D5uIVry0IF9tNR8yASESUO7kiIw05bssFIBlnXFQ5Od4wrvbnwAY6pgHwD7fmlqtw5F3PPoLPrl1cDxYp6MFUSnROS0pNp7kCs7cdJKoba0C8sracghcN%2Fy%2FOKK0yJkBy9AvauNV0PqFUTOV0fp%2Bz9KVkZuWyQGcoje3xA4ZWx1C9GgchRTYEDPglR%2F6s5Wnj7NgP76abPK3%2FjnOiE9wbhw%2FdOhsubeFbxxtFkRWbiFTadBR0Qa7mhkfQIPVTY3jjdx4LRkTyI%2FlPysOSTJ1y&X-Amz-Signature=161775d7f5e96022f7803c9e8ca7c082009cf4cc4f27280dd76ae2f892631c64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
