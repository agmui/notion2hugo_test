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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIN6SLTV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWDZB0ZKysBZXAeuV2sUUEIoabVPDyIunfpVyuZxDWlwIhAJTqn0tsTz9EV0pvDGvVXFkafEfupexy8nRO%2BJf39kDZKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKLYDzgFXWOVuWA%2FMq3AOsxw0muj%2BGY57%2Fkaq%2F05SOlLCuxOsw7A4jlSpNvpvoBgyUh14JTzmhSzjGXbqqVuG5i4CLrxHq8xsjdhLZSnq1VmYNkJrqCy7%2B24XT697kkQMjY4T2F%2F5HEIDPfafRWto088XMxG%2FnLAHchcKBdqV7SA%2FSXhVD4O1lPQoQTrx32CHsXnG6XEUgCgFtCf%2BTLlTpKh8GSq3wRrhdTHS4%2Bs306uSpxuU6YFNE0CghhimhGt5XvWAwdEVJnDmFwKW2%2BtUZVne6aABAnkOey9VcvzSzvnX4Pky5scMMoN%2FQB50i3bQUIeR4ZDvY3PHGu5nSAK3hc6RF7lVIHUJ22YEtFT8Witj9eqdweweARr46OfsVQYoLC%2BL%2BnnkeGC58N2kCmzHg8YgiB89XbjCPavwOYs5GucERGnQ4MpZeVa5o84bQTASVGTMiGXg7nGtA3NOc2Lt8zDr2Kz4dYAN5qGaXzSB74JaDEnqRJfq9Ki%2BK4bSRCb0sW1qGzOLATAwlUNUgDSGsMrFE0AV1SCTz3wqjkFfuCLZfAVqx5paHrPyeoJv5TjDKsS%2FIwz8xNbx3L9HZutRnF3FL3oUNjWOhSitXjPaimKBy7WBJiMKIVyvnYg0KrPZmnKrM85%2F4KnDW0jC9j%2FzABjqkAWeJ3lu2OHTA%2FCGAL7Ob1nIbSNBCmBDRHjxDHImgRYGWGnPCjQ9KPJuccHem7aK%2BIn8WmTYFBHgUj5ggvCfANuFfoP5wfOD613JhcwpZyFUdD6SKsW7dQOQh7rfqOISD0PHgAPw6EmQM2P02y4Z5j4xQgMp18i2wyykFhtR9lk8C%2FICQ2xhyT5IXue0ijS4U%2BLVitpoCBkDWcTjTqtPt6Z4TnxJH&X-Amz-Signature=77461ff136f589f2b59463c6a1ae8afdf973f96bc806015a2719a2d670ac439d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
