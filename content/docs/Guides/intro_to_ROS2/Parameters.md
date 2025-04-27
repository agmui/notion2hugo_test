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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6ZC7RM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2qVg6NlS3cvix4%2BfaryDeM2fIjddra%2FXjQXcIJgz1gAiBUnmeB1wpERzhC%2FJfAK1F65tGQ%2BoMlP0y5vRYB0zBDcSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMMDPROIjketenCrheKtwD6yO9YVIKNKvKZbu8KXlD89%2F2%2Bss3cKt5fMaV3qofdR3kcPf3Re0HiKLGNcCy38MOnGe1d7nTFTk52w3%2FX8mSAIUmM1Dx1SoX3zeK2S%2B0wknzVXYebI3PUgNZa5FM1Ejed%2BewV0VQImLE5QJk1GH0spox2GpFdyggIMBrOM75UTDvN%2FMGW362RyX6TOnzr0RtMPAkCaLQ%2Fu2AeumXooix%2FbWNL8ZUjwqh7fRrnY6cBgwmFYYyVrqB1c0Qms6ySe6iJv9I0hpQ2Sn%2FOJ6%2FjnB%2FYKJhkii6o48mbEmOMOuFLeK7eUo1qztAmcMA9hsFv8CPv6mKEzplI9hGlgg4MtuN9gxQonGVpxy8NacCHOE015WUa7%2FBw1NRZ%2BvI7j%2FqvZ0oS5b292w4FiLi5pu9XR%2FlVegKAXCSpOAUR8ujflev%2FJI7VL5FxsH16To8hE%2FbFXIiVvLWA1gn7Hs6ejVLSPxOlte9q85tb227W9bRKkb7k1ChJo4oXGgRUncUSyOE1lDPe8XcrPaLqRAohvxDARpyadRdM%2BPmxN5WZGQav%2Fhj2ubi9Nj6luRcQ1hbGZQoUkEyhCkV%2BECxRCs4TChg0JqkyeNN1ncAXSRqcq8XjxneD9iytzFZC4MJzwAUB4Uwwde4wAY6pgFnshdx7pJj%2BHKc4mMLXWs3xVT1xv7pwNi6Ly1%2B4N0NGq8wrxgaWJMviXsUlfuIOe%2Bl6Owce7lDqW6eUufvJYcsnJzMUE1QndWD3Z5epREPwhZ8zfflC%2FhJVif3iuNUGqdkvxbkkN30HSvt%2Fj2H3xrilqMPz%2Bcf0ZnwkyH41CJKVdOuZ72u%2FVc%2Bq1ehZ4IeJYKuke8q5ew%2FNHPC7KFvh48m%2B2wlNHSK&X-Amz-Signature=ba7d7581fe4f63b475134c01508169788b66525ccff3b67dec0cbd64387745b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
