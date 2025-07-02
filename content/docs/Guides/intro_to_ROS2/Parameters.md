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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5A6AX6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMXTpYUuG5F0gkWzAe9IM9LPU69ZrpfmtLKEm9VYhOtAiEA7os%2B8bPIB6Xq5D6BQx%2BHc5OcKp8q%2FtHj6Cwd7sc2G0YqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi4VTcQbnQZYoLNsSrcA4AfVdCQwVRGHNOdkPliXzUbEKKJDcfHywZJBy0QHDVDguxCjnFezLFYPM9sV5H%2BjGpF7jOqU3K%2BgDNAtoCkZoQ%2B53l7Umtxxc0FpCVFxiGDJOF2hu1nn4EiCAdsU3RL6rbD8qVoHFu2%2FWKj47weFipo4cGsxxbTJPcCvd0OU7SZaTcMkIoVydbL69PXsM5boqctejkeBcN3C9JUMKXXZHBfez8kXSitUgRB6ZoakCwQxe55LiKKS0Eqhfk75KZq6Ujejp2jqSpA3MUiYvgzkPYg3ItqdDGz7svxhb13clnrxgcaHPh%2BM9gllrY%2Be1TeSKh1M76rH9h%2BmG2DdxjVEQauzZabP9BvXJKmn%2F07hcQaywcHNNbLomBrSzG6E4beXQj%2BgbmtWyaZ40ayxmWwFluXACYSsLBtv6Dc33%2Fv57GTuAGUr1SPhYdu3ktTuB1ysHEOzhwqd1RlNkP2kwsTRE7xkqew1t5K4gcVZGUJRVgpX3zcbash3wgaL86lBUKQfAUHENnwjhFG8QGTP0yDqkfW9TAM2sLs95u7u2E4%2BfLIGTEGsB8gv%2FYHcdOz%2BSOJQUf6fS1%2B2qrCUvfiDimlNx%2BM6KMj2FnC4iego0D%2Bj%2BVgDhQb6LpxN9w9n2u0MOGeksMGOqUBA9vrEi%2F5hJ7XANioc4EHBSPnqjkLZT4qe%2Fl819ZVdxA%2BphyF73tLcw2bexNPjNlbQZ0rModglGri2LRDGveSPlwiD3p7nk%2FsDBy6Dm3BiOLAJMbhOQBwYIkhfFkZZbQYBOjL0iHA1KURmPNH5%2F0oWQjXsGR935Nmho3PsBsNIgHeZyjUZojMQHvfpG8XsA9Ngbvf%2F0ttehErG2H0qifpC%2FNwlmnf&X-Amz-Signature=5a9bd922677e9bc68d657704d5b68db13144ee3da8771020183f7e2eeb9b0b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
