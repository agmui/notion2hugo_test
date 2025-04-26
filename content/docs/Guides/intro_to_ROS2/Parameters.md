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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MJ2KEA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmXsZyhSj5su2EiuOh2r1pvJNHOjnRDPjDBCXCHvVkAgIgN%2FmCEXCONHJ55RatmqayCpNo%2FoR6ZtqwQCUWNmJmh%2Bgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMX4IZyybHCQb0DksSrcA0UrG3ROcBkmt6OlLRHqiHGcAfeK3lmlzHe6oBjNvHrsEqy2yxLWloLAjgJrtUa5A6TPMm2SPLHnVIk1tDzJh%2BsF5HEh85MKCw4EmrlBrkA%2BEgqnR2ggziiZ7eP0r4A0oktaYlS4B%2BmYTASl7TvUOFIe5%2Bsbq61zWiyFtgJ3%2Bh702zvLlFPmWANNWQEdmzwTG5gxAMPYPCWvUswC97avluBzb2Aq6ift6x3OG7wgjaCJgwJ7rm69lI5HmCEFkdg3nb3rzQxSbeklx%2BDKCFnPD0%2BkYDMs88MhB9dNPkGuD5kdIfeujg%2B0YxjCfD9DcihtM%2BqeHOWxdQJfrASrKsCu6Qxn6GHh7F5X5IdA0VnKFf7Da8DDz1Zuy00EVw6nZBDSr3ISqredUky%2FgR1NrDkHNUO8KdoitZlvsvFvg94wtwB7iBfvY4mxA9KHdUAqZoxnzsLxPH9xfi1%2F5e10yIrN5wnQGevTrxksJVEjTHXcwy0aARp2mDsPPjWURb0J8NOM8S%2FX4ecBaKXStcmUIAy4aDzbEu9ntitMD2qUGm%2Bm1YVC06Ry88mq%2FUEqNwAvyW5fQ%2FXgM3J8iqd42vVyojLgyoPw3%2FHY9rSi%2Fy0aekyvPQTz3zdRGLkpJ1IcQ4a6MKCEssAGOqUBdyWfwCGFot7SvxY6weVFH5aT2uEQk%2F%2Fh3C6%2FAdhJkhSWbGWDicmGeSnaLwdseooB0Jf7eEUeqXrAXjHCriy43EBa3HoKxHWleKpc6ONY01635ZW4E7Kmhb3p515yQ3JbFAu8aG6Jad3S7hAhFk%2F2bX7RoO%2FV3nqxOLlv%2FDTm%2FE3JWxlwMsh4ygSdAsCsUsfDLQlygHZX74b9ZCb4NvOO8SEM20LG&X-Amz-Signature=0797de2998488188f9ee84cd68e9efa1c5735608bd48757b3e7b8de4d25f0ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
