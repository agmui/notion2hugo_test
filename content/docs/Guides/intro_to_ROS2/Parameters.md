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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLBOT3I%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB3ZDsytLAMy2Vw%2FbpQigWLF7nEruPEqxpgbrPxQOOOZAiEAmwJokIFbxFR7FHmWwUR3vE7tV9rOhjYM0mcepXPfCWYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNZhDG6ZK4TBThoXwSrcAzflnbms89WXJX5WN3wbAZddkhBZ1DG7Ji7%2FsnmYJj4nhWYIz6ysBICh8VyP3n6XuHq91%2BEpWbven7KY32mlyeML2%2FWlYzNqP7pzdz8CF6KoIeFLImbqUOWY%2FKzUdg54oKNzPLpd4SOmP30OvrNq6qXY0qfG3%2BIZIkxkIPZl35dPQ3OwUR0WBRgkH2rluD3503lpO33fXGvLDHEFI8ob7nN8I5Bg%2F%2FwerbRyTdzEXyIfub2F7l2%2Bs76Rh9Ok%2FsbAEccS28XARvhQf017gnkYHvznFa5sOJTqn33G%2B4%2Fkz2OzOhQEw7mGHQRH63WsS2qTjdERjBMiZntDsI7KG088wczAldtBc%2BM2AT5meGRXI0RRwo8LmutzSalKd2m1prv9EzhNqh4S25mxnsLQsxR2YsKBzdxpXIo4gB%2Bzx9iMQFLLu2Gl6ZQeXGPaHiUroTW9eBgy1wq4br%2BKn05SEdIwlJESFVALnmAW3L55SdPPx9qJ%2Fd6XFvhX%2F5RpY%2Fk9q%2BJd%2Fz7HGbrMxWY4SGWCQAkmJnMmPNMed%2BSAudKLtg4YXrIbKgWeh2rKThiPmTyogkQCT%2F%2FlZlVWAlWYsGiIJi0MJKw3y6S%2BP0AX464ysma%2FR7YdBDQdNvWawBn01XCsMNiz38MGOqUBDer%2BnMU6VA6pYbmo8nio2%2FfGEorPpnp07i1s6hL1NssPcy2tJJGMiqGCHhwOunOpotkvoNysVg7RsAALr8hTtdncpY%2Fu1A5zVqf1S3hOFpnze885UQWY5dCJ3Xdqm3%2FCbB4MKiPqEOxRWIgAkPBA7h9Ck5tvjcWY7ienMVkvBa1113hvLptQFc8AKhcZ2BZMRTM1couJkWB0dmXDSozKtFgdoRXf&X-Amz-Signature=e615aef5b81f341d41feb81a09f8f0665a1e91e06747f7461bd472493cab37e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
