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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N66QPUG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9TCRrIUx93ol8jk6fCHlHlZjNTa6Wmj4g7qCpVfV%2BnAiEA2L9fmUyoWmBkuJEOgWSW5MpD2VzJNUWxk%2BbHCJOt6fYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEYPKTE1rmRWUyg3%2BCrcA0erxMbD%2Fz%2FMkrm9WjCCAzhmFSyEgBxTyGMOV6bdfc8NzTKBdhhhRZ9jCVbWsveJ27ChkZVLy91oC0dWnGDz5QWk49qbzAvquSkBH6npW8f%2BksklW7cqCqfpPQh2a3eWQhPSkojlUbbrefBbQpc3qk84UfDYSCLZqQzkaXSim19byZannO4%2BYHUVDC%2BPSk9Z3LvrMPlwCDalSlo4LRGX2TEnnE6QS4tWNkLdom3xguyGqoR2iDqAG1LXy5brp0ivu9BA4aztTNuUj9RJ7TPEvLlPNE34uoz0g7LlCV8O%2BEQwqE7RTwxk43gbsgSf62vtBZg%2Fu62pGgaXkgJfZLxT%2BOcnzf84vzNN2U6LHFC99XOJ0yBneh2e1q3OQ2Aws%2Fr%2FsRWASy3SNtXW7N2tX0QPX6YVSFaV65vCb2l6MoBsfJmIjKHtrZZauQqYkyOAq%2BWAMbpCDp4T4NfUtsa2XiWBM8QnNLzhwf%2BKK%2BMH%2FPomiRsWH2oaMwhg%2FAoAg5s%2BPP7tKEWqmIuK6SS88Mq2VhHNg%2B1NVFvV0BS3MxiMWnPt6souzWGtEoyVe15rQ2qi0XNg6sev%2BpiYYOiYAoF%2FM0Kap9BDj1nWDrpCCbiAs0NmXgNTRwsSZc2ef%2FAzCVlfMJLLo8EGOqUBGRGrvzWeoKW1SDi44P53mIiHQCSjAIXTjnETs9KWYQ%2BjqF5Ot638IW%2FmgQgYyC07UFIt5d0BHeVh47hrmK5MSrGevMe98oNngi%2BrRIxgzno%2FqUagissFeiGz2o5jw4EtgGTXKhHB57FweRCu0o5aqBIAqsQ3MtwY%2FyGd1xJLu%2BAFZgYlnG%2BYXVDIeoZSBkjf332vUvLPgbP0%2BBTU3e7mzlOzmEHg&X-Amz-Signature=d1803159efccbe6bcef20db0d9c63780ff4a8228281d6fd9989d416a91261d23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
