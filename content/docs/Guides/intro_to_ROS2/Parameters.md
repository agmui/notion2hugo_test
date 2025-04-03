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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765VPH52%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHujjWjh0TvA8UY%2FBXWyvK1cMkBhbqI842RnWhyBcK0aAiEAksLcTMHGH9Ru5%2FS8i%2Bq7sZ9zx9LN%2FPqwYLNuQhAS0ZgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc%2F4nAiegap3PeZOircA52Trje0gpYyslBLojvn4irmrKxMA7wHlfE0Ak0kdhPsCCQKN9ansKBWKtgvRaDRygjGlv1wXtl0b0pdvIg1%2FLfPj5SNiqHvcpMmsDnAbLAwOTnJeoMyYjzMyeEpaPxeAcNCEluwwX6pL55tRtVWyggmirAhOL6y1cSo0CXhJoUQ5i46uumSfdA3OIO4Rk%2B6mx1CzxKYQoif27qxOtfQfjnWo%2FGx9O%2BkZCw5xC%2FOME8McA%2FLlyY5kDJR9nev0T8fEg4viwMODiIvPnUPffCo4h27QNBRTFXQQxVFx0ssDd%2F5SeUa3uKk9kGsuxL5ULMGk8ciweUXRL%2BRoH2Ap2hNQhM6zBLJT%2F%2FuKZsaQIeTirAv4YFYZyRNwei586Iz1AehMFgC3b4JQ6l24Dgm7uMh3cApX0t83PEmuZAdMOHExUz9xaeshwSXwLD6JNQ6m82RxYEj0XCeqaurOksTtRwCsj3vN72Tw1nA45cp%2BeCXN12jMCguRHKUqXrMtCn63GChoffbkOmjmeByNVFaxuMsVn1hzzK4%2F2qhF3gf2qvDGd3Q58Jgi0seqzkmye6RSTDWjWQtjJfxDawB5zSQ%2FR%2Fg5l2omVuS46VwFOC1BOJc4KJcxC%2BiJYelR8SOVhaUMKOXur8GOqUB9xmbY0WMmboVN50TCakPaiCIBaa75UTUnD26oTYae94LpM7R7465dMW027dALU7Zj2DaszPPqhb0xYAkOf4Qe9TKLL9Exhh%2Bz0C9Tycj86kXg%2BtXIVc426XVCx74T3yolVuAiByFxE3ZvoVj%2BIRecyBIMeQXP4N8bmPYe34blwVEJkmC2i%2FawA%2FoM21RX%2BSEP%2B48q4%2FPIJ49hcmui9aJZOHdQ0hs&X-Amz-Signature=d895e28aa763149f74577789ac754ae3aa30d9173a2fd2cd5a63ab69ccf8e921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
