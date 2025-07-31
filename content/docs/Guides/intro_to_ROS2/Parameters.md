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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54CNN5R%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXxocHBdkxVTjB0M18ycz%2FMCyWs5ULrMqYkNFfs6nGAwIgNRaqC5If3JxVoi19ecl%2FwRBwZXxOOyDzyhen2uWlbSkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNalUnAgWN7rQplVoyrcA4ogjMhS6wAGoeFWZYsWnGo6SONEYLROVujjyU6MpJwfiR%2BsJzzFSN9AfXE49gSaL9Kp%2BmBXEBji9OWyzU2d72LJu48iDZiXFEr3h7jITGL48UVsWeuzezuk7Vs7cWXt7uMl6tioUjFckb0PUZKXy9gfo9cKScAlgAibUPVmIyPCtKoJq%2BDyKgi%2F60DU9TIGu7Z2zvmdbNtEaEuzi76Q2jJVHC9brzvRczI0wKRtFBiHtTWd4gbatoLcDUtcNzpAdJdddtiHMgJTmn%2BY2LLYWH6m4jXh%2FZzUyHd3JNPiHyEFGY5vDU14pmSv9rsEvCLqCNBAvDlLlN9IaYWuncRXSEJxPE7e2jnW1W%2FB4djCMdiAxYeB%2FFWd03cWi2oAwiwFaj28qMMCxadzgMs2iZXfIAZvoj57FxGQJTw48r0sxrZjKRDoT1XMUZjWJL4YhOpiTqlN1ZTtgVgMdpmRJPId5B86WwsaOcaW7YUn2bEdFPEhQMoClu9SWsuUNwCS9V7CdF1hFFjL63a8RvH3o%2FuenJ%2BExneqJv9%2FQzFWzfICHd65OaDuM6HvHynwROmDlze%2FHLgVoHcJPaoPH1iNQ6Qs1H%2BBE9WzyiESTWRMoGtQMynMWtFcV19Szat118bPMKelqsQGOqUBciiI%2FdiPfl8fexyUuxAmvIcpxSaEj5i7WidKLCZs%2BCDk%2BUyevrsLM03WPgjHD1w49ARof2AP4FFZYrmfqqlnoTD1cq%2F%2B0qnwW7lc6G0ylbvqO8%2Fjxx%2F%2BoR3duMpl%2Fe7lWKfmKXmQLHpxUVS%2Fm%2F86OiiluTrTSiCXK9wIBs9Y766FeEQFiRj72VzYDEQPsJlrvd0JMZRIqv7Rh73Co76%2FJJEfZVC6&X-Amz-Signature=7741b71f1ed7319938a92f61f7958fc5d672c79b6549e4be5f45356e2452e2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
