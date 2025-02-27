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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM3YPBJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHEzJQOSpWV3Dz%2FsUslc5MzCuTUPnLzwgfhVvn2d1mHiAiBsUWgA%2BkcVBUkdfSgLwEAF8A53WExuVy7ASk9sTpAtnSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM2VcoFUE17VC4dPVuKtwD9CvunUyENjf2LImSDYMj74gr4qi1yAUzmPL0zlSG6u2EbEgFrb5Cy%2BbCdYUlv5xpYOCDp37msXoZ6GCKec2qJrN9f16nEKCgu4b1MNHJgMBHOKb3J5EFDgbXbtKRwM41%2FfY1%2F2ZQqEAkgkBJeZbE81cxe%2Bm3wmYKQnqzu5VjkIbRsgeYMMLtQ4Dm05eTDJm0bUb%2BJgOUBFjaXazWVvCuij%2FlclYMmiiJvq7LT7ViYkJ77MKp1EWngpUrtA0le9aJ5wq9UXVEju%2FKL55xTyQgG4E9gwN1MJ6kauKyZmeLzt8wglqNLfNJUyr9%2FyhqjwbEJKJhxJGDLA5FPHaCKJsYEYWlKRT14fP9RQ%2FRDOG5yykPnKxP1DOJrDPMyMmuaRFYI37nQoXn7ylzX%2BdyEELBd142j0dhqhXqO7wb5XALsG68FmGiFhmm%2BVSBLJ%2BIPXSWM4dWigafcyuuXQEGNmXj8nVN6l3TBAt%2BK3JK%2FUi%2BRcgLKhdidsscE34K73kUrXFgbb62ji9J0VISpoFWB%2BHCT4VYEY7U2qRhZMzIFoLzIxDi9nGkpFmgx%2FAL9ZDt6gZ7hsbTLXKUNDVpHLjIL2JnuQBlU%2FKbZKepJbwnrqZnAF%2FMyvNf%2BuHYfyCUSncwv7uDvgY6pgHAjBdTIqsHmvZ3dbqBRSw1x%2FA0GBDtdo5PyqIUymppD1wspqI86HBppWqh%2B62GMOJVRIfofHx812DNftadHdZnTXVN8nAF2YZ1YX96qSryoBi0LvKBtGCx710rMnP7XvhnQYczmROUPePtZk%2Bb4dcZeEuiTTq7RTR9RQ083ExH6Fue0FoCXBrVZN%2FJABf1k339Hw3kWthbHA6u3Lsa9g0Eoz5HapZp&X-Amz-Signature=053b3e6f4662964f8349741730f557a84c7f28c5f42a6babd5af34233a4d08ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
