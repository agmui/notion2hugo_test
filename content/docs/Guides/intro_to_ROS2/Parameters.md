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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FUCUGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGdoOSAEc2w3FK0HY7b3eNQ%2FoDhszUhCylEEWhV2htoEAiEAuzLB%2BvQ9la2hR%2BZpRxcD64V7ldwBLjCyEJeSKb4dQp8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExNdU4NzjN3WY25GSrcAxys%2Fi%2Fm3p0syI0VTXvtSs4dOgXXLvCIbtxB8%2ByXSG8pwSneRfdSv94Yte7cSH1BxrM%2FOjkOwFGPVqk%2BwhVkDSEIptJHViRFVK0%2Bo97ryErxQDrygxspXQqtkYuNkx%2FpGkExJmMaO2YZXY3sGBwfRnvSu4NVVAQYBnMhhpSgT3%2F%2BoEB0Pc7KM69kHiz8TMa%2Biv7qaG4YYRH%2FNlMM9gCPes73C%2FeltGd0nUpCL7ukpU8t8hTAxINjPllMVvBPErTOumPEY41Ent7MYVDB56oOUAO0hByFvgwYyIolAjeaeEkEvf95lVgS%2B42P40gbRGhXhTvtJtHWP0hnCETdUbBlqTvwvbPtj5HRJiUBhaM858yHtqa81wXn8d%2BRHzkBOnmJpjffuA%2F7gU9DUqiBcc3%2F8lo7dTM8GN7jZgjwf997dIBDkxYzw249esDPQb5%2FJUgxmNWe6e4vAl7OuLg%2BJ1rSKEfbmmZSg2oTmG6vwEOi95oet9mpViSGzwSBq4rCe7MRb%2BhJ2vhcfJTopCRf%2B%2FcQzmrrYFPtFV6wKHSTWdU6BAuj2ooqH7AuvGjCV05kMpR1JzF%2BF7nj4anK4roGj6jYHmQ71MSGfkgC32WfmW%2FzRYDYSpLKgQmIvTSScaJ7MNPCncAGOqUBKzUyRBK3ps8EsEarzbLCdmPQPU9%2FNjFRe4fs%2B%2FmswODeeR%2BSFipfMK0IcFOAlyDGkpWvAu4yTniGgITlegNAjI5U2MloSYNiuWlkA3itK3Y4aYi2aeVHXWs43AXT5a%2FOgCIY3g7UcjUNgYTMiXyUC%2FWgGAEFOrklmpAK1RcpicNbjW0jrDMksPbjdhfE3g7WWEIyaLCfxcc6T8%2FXsgfulwe4xwO1&X-Amz-Signature=3222254a8253a93ac03714062f912050f4aa98319d1d877eed8adaca567074e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
