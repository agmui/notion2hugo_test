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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=2215a78ec19659639c917cd933d735d3b00209d1e550d1ff3a3e0f31cc2ab30f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
