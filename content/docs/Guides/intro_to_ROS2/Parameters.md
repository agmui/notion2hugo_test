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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKZFJU7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFemccB7bAC6GdpxEEd%2Btscwve%2FsqOMY2%2BerykgZI5dUAiAkWatACX%2BOB%2BDBNGRTZfI%2F9JcrUVvSEELpkkSRfbfA1yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMCYbfuGbA81m3TR3UKtwD4NNkPItpLCssB60qih1U2BQ3qDFhFqgbeLwz2MjZP1cSPACBfBF%2FB2DEHVZu1i0bDndxjbrcigEGtAqal2S6L8GUPtmuwreLEokhP6%2FI5B6svDrbz3Z6iekwOwBDLhm7qw4WNdSUzpvDQOvdBpxQAZgXgspwRsDQj9m9taSumP4MTmJzBk7BO7XyqkgKazw1hfFKgbbOAdvpAy%2BeFR%2F8CsU7YYZO0e%2FapaKpuU3qZpNXtFiWxcrPvlaRpGF01JjtTGAGlksyFTzgp%2FFxEi21s5QKrGb6IJFt6Yk4lEZr1WlcNxjRGswYVsJfQVTiB66%2BwmZvlDL1LLg20WsRtPUGOt8pdBNHmSEi%2FQiY88NJSxu%2B3WDgmoFsv9RJnN9UDnm%2BH16bpxnIpQjpoXCA0vhoD7zG2Q0KvhgExJrk9UTLb6UWgSW0STe8GI6umCySDoU8fioZH7jFXkJnUo%2BIVUfpZR7RgNYM21tT0WYEuDRoE9IbsFhO04EFAcyVrXjZaIrlIJTOgviIK1R55H5Ma%2ByWoZKqcamgrlP4ko4uhIcQu2QAJZBcYjvM%2Fm0jcy8BPkdxushmFqba2a3yZDyNHVD8%2BVcB5GwvfE6963WTpvJQNQXKeKDzLXWW3wSrkwowjcbCvQY6pgHOZ2MrePRm7Ct8GT0kXzLPOTJV5udN7WlZHXx8OKe60PVKCokYW3aUIcIH%2F5HBGZYP8kcunLYtpMMs9dp8ClGn1WMezV1XXskRLEyL6dXD3JAV6QT6wctWAnFDgCKb0gtD3w1nJpP5YhCO0dRQwiqWZybG%2FNwBOhs5CLFswRNYL%2Fyra2HyHRLOP6mpKmDu9nSf3sA6VNi2ZECiZ4z1ib%2Fzj0sTqqQf&X-Amz-Signature=e4747341c682a1aaaa66353fa68f87e6e251118ed13be0b90ea2eea39b99b6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
