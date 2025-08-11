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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CR6Y22K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwJkHrbM7cZ2vFZbpqCAQfmskNtF1LacCqnLAUoAhHwAiEAqPl6stU9kKsjMtiAwkd5anO50wDcrZB2Jj3cvZXJlckqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRAnrC6bY8qN3pTmSrcAzDeby7BHY1VkLpORLCfWZK8m1qNLMvtRNDhcY0IbeW4gjlBMnOte1olTUWnubxyEN5Q%2FG7cukSvbWdRFHAHSAq%2FnKOz3PdEbU09v7xIdj8BVJ1%2BE6cP2Ua%2BL9yQnrUsCM1cfkj7tBxb7jeCKTI1gRqWFAPlXHB713dPZp1VfocG%2FxB%2BhXx2KHcDF5lcl%2FdQkIQnOJu4GHVElY6W2kJ6dN3SBZ0uoKJIghmjsNfXfTRPn6AncL9FUHDa0AiXjXhf2AHEK0fd5K94cbOFb9g%2FQsYpx194z23ZM7TAInPOdmgI4r5ZwQgp4Yw%2FeFY6E5ZgNtuq9wARhh3VXnA8uM8w396TogmXow9Xgj0m%2B2js1%2B07GqI7D%2Bwdg1xbaVZsQq1zvZu%2FqS9D5lGinzDQ1nvIvOI8ArqXW3HrhO2aC20Vg84VoA%2FwOTayxG9e2Cr%2BlxD3MmAdzXtaYe51qiyeYl5C%2Bk3%2BTamNhBlBaao5wbcBVRI%2Fj%2BEeXxqoXrbyanPcIqhLfmjwuY1wfGdn8ZuTVxLAQ2dD6U92vGN32C56z4U1qVeDUBV6nLBnRDEE4KSEZVSuJwqwHkLpKA93phYbDLUcDxxTl59BxKXREzVOsE9TOvXc5teTNZAlZkH4Br%2FkMOv35sQGOqUBgHfn2Yzu5UxhbbZg1UTLCX%2B7AKwsBtCcmHoO1NtWSQCyFs1%2FuIXMFbqGi54OHT8eBwkyXuXK97RArUGjDe50Mbx52wvFksBgHV5qfy4C7keJeL%2FwI9qvR76w%2BhEvjEWWR9QWVSsC6k%2B%2F0KQBlZHqwMggrkz4dCL6R0o5%2BuUz4GKMWHuuk%2FhopsLsU%2BS8vywhPJqZvevs5DypLuxFGouYIpusVJRg&X-Amz-Signature=dbafb2d082fd4ffcb83a4939b1ff956b1f8c4e9b5a305effe9b3490e2e5ac3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
