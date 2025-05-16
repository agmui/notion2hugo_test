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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OUED66B%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSC8Rpyu7SsuMdXQ8%2F0co2PwOxcvI0TTQ73bZlF7j3SAIgN8pFwq1xuH1at4IfmO15ggLI9cm%2B%2BHmJF3%2FLegtxcbAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG%2BqeD8x0u6aIE0J9ircA%2BgiiAItoKY3kRsFktZG5CrYb0Lxs8sA989aePo9M1SxjqyRZ%2FRc0v4J4EMUwz4VJV9yxAj2Lk4ShaiXLPLb4sOKQqMBkeyFtrFW30itVxppidD%2Bw06qU6L1nUe1LhzWaDSC76%2FpD3JDjjwnC2%2BK3WDRB8ju%2BIs5hYVbHDVQK3sUV6s7tRAwSOUVGBmL6yvJcZdav4wa8D0eKgANqigHiEuVNBCxgB3T7UFdomCcZOCW8Pe%2Bz03OY88A8xfPqyK9HZyqc1MoctDsZAHp6rJHsI8io6TqYaTLHA7s307sIPdMl5T44HgUXCBN0mdlYhhVZGl7a6JcWsfNm63wOaZXQWvfJaq%2BElLZQ8r%2FONaH0h8YjmL8Z%2F3wfaQR2dmqlGUfBqbyI5R86rCNWv7U5uLHjN9O0y2CT31cSwi%2FtorHIFj0aDlVlNFJkVBzPF6sKQLmUUWgboZAW%2BwxNtKRSitVyPTunmAZ%2BSatMFEPLpARZFHy1fBvB3g0vuw262GZj%2FEgNkt1Gcc2%2F%2ByXqkpe2H1uYFSBmHLDShsXjrt0RLyLWhLZbyZ9RwPrMIs%2BHuadYY5%2BmtSsXwtLYj6DR9GWqRmT8%2BbZjb6Yx%2BEVI4MsVwrXV%2FfN3QIoCeEqtGovqvhbMIv2ncEGOqUBypjraYSL0imJnMtV1nMoMAXidPWNebMnU2mMSgh7cGIvxXnwA%2F1hlKJQRU5OhvWMxXPksUJ2X4w8CuADjue0S1XtEYB%2BZooKUD4HMP6eEseMKTedV4VsdTlchukCE9AVFHo6n07d5ZPB4kobkMU0Tkz2Ux%2B7CXuQ7uIsvIewbY4uYR6ftPy73F85GnPd%2F%2FJn8Ik7liJKcERnUgUnTxjzCL4Q3ZCQ&X-Amz-Signature=fbd42c5af1201b42aa3050aa15a29da37be71b60ff77e17447ae5d80c006dac0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
