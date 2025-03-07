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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUH2HHJN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ue0NoeJAsZ45RqMYiLncG6gFCZooQE0e60Xl6xoTFgIhAJ3m9jW5zOegcOJaV2LRfoTUkrCvEc%2Bmh1bmtA481PBHKv8DCEAQABoMNjM3NDIzMTgzODA1IgytK7GQBryCUg9fw%2BUq3AMaxfdIgSJE9ddDIeibGiB4JTNtX%2Bym9OH6HJ3Zy91ECWiZt60V4bgqMRZbQ7axkSQzxCTdw87AAu94gXt9MTuRlvFziYJRXC52Ir28UKvCwT5l4V1pNgBOVHm%2FzFvrGuUwMeky3GhMb9Lu8i3xVBQ5dqfIX2dfqVnnL40N4Vz8KO8j2faSYPUKeibtdDQw8ZZQ2fBTwwREl%2BKJS1Wx7CDgj942ayFFlr2SzLbpZQAD570lFdT8gHb%2FY6ZTM5vGZpRBp2PJFs0ExuAoXngnkTZZVhqrlHoYcPbEzhAoIU%2B7OaP%2BMA%2BxanUU3J1uvML4NdzxRXQsXwK4c2oYNsHuyOHA3yvsgFncJab1E4YvOIwyZbgfmlpoidWCXSnS1iMFvmuLAZGGDNbf9ssCr78wzT2gKjcXfn0stPL%2FaksUQpOVBF7Inlxoa51av5naYfm%2Fr2mKFOsIhdA0rrjgRS9RsVffBrdWy5K6m3wTSsDtfPcesW1QIQvLscxihy0go%2FVYvVIZsNr3uBnQIOG4XM7auiPm76LmWLJUffrGmJV%2FpeozI7uTEhNs0tjUGO9MnEwLt3d%2F58IqFKm%2Bop%2BCvN1QWtD0vx7zejhkmAri6aq4GYKvFpedi0KYjluRhPo%2BnjDsp6q%2BBjqkAXKKpDaZIrxIw%2Bv3u8cDYuKopXEbx7kCGRbTkDFfVQoETp%2FnZBlZ9zouy%2F9Hpwl0OjOpdDQvFiTkvfwNCgdpnp7DMucmR%2F%2F%2BMUa1%2B%2F%2BCFEy6TRYE20clvrpJF27VjLqYIzMn5k45JCnOI5nzKz0bb3oYM6Karb8TI1tbVjOO1CmJmyVzSEdFn7bvjJVZ2pa5Ukve%2Fon9y51WNXKPS4soKZUK0%2BQp&X-Amz-Signature=5bb3caf030fb3c16d1b8db1199e13bd9cc5554a384fb4c1cc9a30caca05c139f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
