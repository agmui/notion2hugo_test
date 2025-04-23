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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664VR4Q4I%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMi2oQXWJkHhfwctV9%2F8rtg1xMRY%2BQ%2B60Q90%2BqY6s6XQIgGFkWy6jCbdnYJnfUqGVk8JLDq7Dow9qI77T3XTWrBYoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2TWF73awyeD7WXpyrcA23dtFIxZNDP1%2FKkfyj7gQ1RnKmxXZWlfNJ%2BnLtigO1%2FEo66Ynk45%2FaPiNo7qTu%2BiWLSx3NqOC27VkPkROK6WquEvpHTdTkZu%2Fw23VgwlG2nAEr%2B0gKl47p5pN9RynM2hF1CxepnnRifm2cVQZYoHOTBqjerWHhiQAtp8Yx9vgfmDPqHibn1PZLKgQlGAYBHMdMhEtZudjaev6jhARAV1sPJSWqHqlRSC3rec%2FknVPA9NyY9lLFLUz0pOX1SUqqNzKizsfu0lgOAHo%2BMCm069AP5BdgyUq6OEPE15eS0tGmYOjzgHYj%2BAOBwOO%2FApY7Qbu6J2yHMLmTwgMEMQK4CvQPPujY5VwramAtgJTJbBNjFW6cunmiO5CaIFV01QMIvxcfGd%2FsgKyAuPUDQUawxDg0%2BP2RVdvB1Nn%2B%2FsRGkS6E9VVh5sz9mncuwOGqAhnmJcuR2Bg1XDyCbpfXks91RW7KG9VTS8QzD4f6KEmNvJK5Xgu%2F0BjQCPSdWDxNxFFc926DNEYejfh6q5GE%2FVhJ5mH666tyEuTwVMpLDgwE7ukDeTJlsJFwKUa%2BttNl1uFqfR7y9StMPp7AlykPQEC5CJRJ8m6zPwSXqF0MxgCocbalLRJV1iJuzdWJmLBmpMPDyoMAGOqUBoq9NKLIT%2B0LQAq8au1DELzUkXgQf0ep08J2Vr5%2BLuRMz7gsx3JUl2V%2FEud8VLyS9jRQW5wR7FDZ%2B%2BGM7n34QOWGClHEit9QigovOBVKNpv9AMo5RDc6%2FO1BOFmPc5%2FLAQ%2BNmfil%2FqGTOnsgUO5TRO%2FCV7w2E3%2BM2lfunxGXvG%2BQvC2VMig8wZuzZ1EvTEjiPM1biFPS1WvtOt%2FxzZF1kMl3qxRiF&X-Amz-Signature=34869a074435f22f19617c5ccd8886c2bcb1f095678183fb02f2272bbbef7721&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
