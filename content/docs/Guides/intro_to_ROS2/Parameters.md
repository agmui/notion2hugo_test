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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFFBAXU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD3oAQ9BqisdELSyHf%2BC28R1VeFZ9eXzEoaRTm7nDJSIgIgaM1fQrhHz99e5McXQ%2BL%2BLiOJlOyO46GyAVomBvr9ciUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRLWvZa8bony9KakircAyMaowvzuqVW0oAeNHRWrlS1xtAZoo0IEFd1BwY3CeXk6j8PLIZly8jXZZZs1Ybi37YiIeMwUdATL9fS2odjH6wihh%2F0fFb3C0Vo6Cbw5W34WnqFJGu%2FqHRk0gkY4Z6WRws2tnXtxfcFLe77Q4WmtDu8ifvSEnyUy%2FTqk%2F0UTcc2vJVRf%2FzeSpB4uOSNBg4V9GEAqxcFFLiX3MRw2GVTmeUbDGOEvt1WcnlBIKNFcvd7Gh7IC40Wsvz0wXbg2OtOfEgf1rI4g4Amds9riKcIIa3sYvPYLJ5YZV6a1ozmIWCq7oRO%2Bidz%2BEGQCvumQmBCzi2muXukMUdjjqomPoI8hvGxNJY099n7X7SgGOuhVBgCb7JprCqZBEdvdyjxx%2FO0zO3nEBvykv6gpaK7n%2Fvx65Ouj7BluRGNNsFXaTrTE015vSid1O7hOhaW2DhSg99E6K1dymHD0ruIhLhsvasmMX2hFXYlXWnPzsIXRLakMPXnf4JvNeMyibchmjjScq9htDgiITpuvlJs9prKQatPc9eZFlxKkogyIeIJYgDVZNrzXBQpZgmLz3dPdjA0oywgQBv5IoX%2B9tI8E4D%2BafLamvZm48aX7IIBKuqO5BeaiVhPxkhHEozfeeXrmr%2FPMJ7sh74GOqUBmbCoRFjKthtIVHm1xjbhRbjrq%2BPlSqVmbgq8VSLTvoBIp0ZfB8KltPnCmsnWucM2vqdv5FOa72RssSwwKdRYClopgg8B385xul6edcugmI4a9oX8rZHb3xWmWU0ScFVkgShjvTUmrP%2FbEAcTS38GoXIlvZs%2B6QcPvrFflGtBXTTpwnMpuwyNGmqnqkjzOj0VOQea7Pq8r9okfLF4xY%2BL9FNQ0AK%2F&X-Amz-Signature=3ee32c047d825a1cfdaa8ec4a4e66eba30d177c387a8d70f2151495c0733c22f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
