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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAKSBCV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDRbaTLJ%2BvbUz1G7dhFT9Qu40O%2FEdxkwpw5DClZhdRVhAiEAxSDHcj8XFlDePoOSp%2FQ6Oh6GJCDs%2B8izCsoVDln%2BpKsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP%2Fbwitzp6P6DMZQircA7ZQSwlmQc9y20AsR%2Fj8N1U3leXySD9hXcwTjamTmlcI3T2ROsUb2tO%2Bc2NAe4Oi41X6eMVxYaMYaEOxr93nLmviUAAADYz%2FWwROA%2BJexXHpaB3W4nkh8%2FRr48FIfAqUErilMHSZzBnA6bOfmpn3ehjdaO01XBPaG2LTo05UfbZnpH1G2eh4Zs2aO7yh7hPs%2FH66tqH4RGJRvW7LyYX%2BRczLOpSSn1xCl5gFz9Ym0l6Wwh%2B8AMr47EDIRW3lYDdB90WI6j8l%2Fx%2Fy12y2Xtydad7zT%2BN9MdJX%2BWJZz8Vkmhgd%2FC39inqaYBSWhA4md9x7cwM%2BThERzMVoWfVPgrFSeiUFYsqFS%2F66z6qiC6xh1wscCz9vCEwVlV1RPunH%2FX33aIzzWa%2By5hjW0VHEDZFXT1Izv%2FUO5LXpFes8a4eArhwSVr60Kxw9n0Z5wOm8ven7MheA605CWwfbpY2%2FfY%2BLnA%2BMehj4KuDQjQTBvhK5UTNMWQsXKaDuvKtXznIQ3qFAmvH5CxKhw3gUyMQ7GbmUMVOHUfUezznpkKc7iu3amqc5XRbGd9HZRPb4mAc2JmDGYFdwjTxO8NY%2BPluJTZCNiCUudaTXHjxu3ggFAw4w4zMRWknZx3hg68i0QHUbMPbM%2F74GOqUB52zSIoG4Z6xcSbjWRUGze8ioKQgfLYgpK15tvu1e69IApPN2WDivJDl3XMvmWp7KW2yrqj6DQCPqQ35qguYT4fcrqWTAGvSw7IbYRdcnn%2BlPTZ2dFfX0XTfNneDT3UFIziTWqS8WUxthX5s0zFRbiPoiyFHTSLKSWf%2BQtKCuAZLX9FDi%2BUlZqVSienVsAMXelfbNYgo7pIvtQjsEYIvKledP5giO&X-Amz-Signature=37daa0cfa9dfd511c2f22f6fe61e143d8079df833819471bdbb4aa470cb375df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
