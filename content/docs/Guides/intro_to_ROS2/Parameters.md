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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOTSSC5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFKS8zaA3ZsJ4CCIiin7sFG2msVxJ75JYqJv0PUfP3iHAiADhXM2gPrmMRD66RgvvOYlvzf5BROgGlgonl2e8N949SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI1DgNEcOny23vjCaKtwDtyEmyGi6rSJrdGqElhVj26Hv2PublFJvRn9BEATYqSb2jep0JpgPPboQAAMabQD7E20yHhDbLJXQvReQNZkGnh6TrTdrypzxcla6kZ0ThcWLwstvYabS9GVTJNhzDVK%2FP84c4OQbUrMxZ8DGzMWx47RS1A1TAQN06FrmIXVZHS%2BYPZX2gl8LkLG4fzcZIb2tHn2yc6uTk3JTUXPmnva95NmQCi1SoUSAMTsC7%2FaGSEdmS9RmXLdzPB5s4KOX71YRf%2FT9xlUERXGljtVSN3p0nNJvZb06fVkgGNCzO71VLLFTceLoDImbbFadMSEpklK8KoISg62T7OpMmHOL0YtUKtmMmj6dzVlon0laBINEr7FubZ4%2BJ0ZmUnSeWVHH%2F659r1M2YEtN0UJ%2Fdh%2B5vy9KM6hWz3nEBbTVdJCkigmsWF7vPyM0snj8TWG18jDYA7ui4vg1duqdaJ%2Folb3gYtj0KLbgvZIez62nFp9utfwQjVJmkDGk6S5ZPMvOQoJ%2BEcGhAh9pkdPmljPp5jXeVxffG1uUl6l5rMmJj6P5IQpompspGC%2FDO%2FXqvUAUZjCdm3DfLN5wX%2F00w1%2BO%2BlwEDOxtT8lkdqoSwtT%2FEEYbngGk37i2X1Fx7JJOoyUS3bMw2LiuwgY6pgG%2BNG0mrILZIHrZuJq6TghbEjVhSqN3zUox8HQS11irFBav30h%2Boy4QO8lmWsf9uJvDZoBP0N95IHLPTrFMUoqXcL1EeGW7A3iLgFqj%2BhWwDov6%2BTwIu8bY67vwwlJsGvuy5CHKEweiqfNymloUQLHVClLvwKeb5oRguhckgIRssEQiv9EmMpToOxD1HLEDFNOigGe%2FS%2F%2Bjfjxhf%2BuViEorjrtkG7Qa&X-Amz-Signature=02b7c3e6ee2445ffb5b8799f1b1c9ccce00e7c0ac301214af588dec0daefe057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
