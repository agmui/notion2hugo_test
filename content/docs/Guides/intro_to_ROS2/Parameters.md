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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYFF57S%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaRhRMMBfu5KJSrjHXl7mPTQaag%2BgDjMkVehi6Sc%2FsSAiEAqzi1acr19LPOoNOMA816Cc8xGgHmzp2f%2F8tMxvTowroq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFs39NRvUQELqjnEBCrcA%2BhUq8yGB%2FwmgDwnB0j8l%2FdEKB4FoCXGLhN5jVT4S1CeiEbnuE3cthRnFTx9Yw%2FJBcMYQFqwoKQ5VjMu2V6GjjS%2FK77K5RkMub4gr7t5hgHvzB%2BL8CIMglByDObqjkT4u5lhmy610fwHZvPMSvdDzzJI0VCADuWurtrTrzHtW2Raym%2BYPoGDakydaqrO1yWVZyj15OKlyxhwazX3VVroW2oquGIQzdP9yDiBL118cRpHL088b82vw5pdBgcswS4Dj9%2BMNPkvst8aJ6Q3CQOn3zCbY%2BZCdvz3ak1%2FAwdrRPErHWTcofW%2F7mhYGiNe1hdtV3S7tYTH4cH8A2LUBATSA8C7Ux8dbWsNVUeSKnwJEK1xrzYmKco1rmyl4HuV4b8DKzKmYZd4QUNvVkImXD%2FfTHUnyi8YB9jALZdiwSHGSZvlF2I3kQ6hBYmEDkgX9LCuQ%2BpdwFSPVR5DXCTMLIrv%2FmFxDqn7L0ag87M0mHQ3OUzRXcioyCxK90kLF7sKCVOGP9lX18GgvN8RwNLWm85VaJ4twKkByOIC2o21cMXIMKgt%2BbVDU0s7FCjuQRHlE38fEs1eUVWeoMT1CitTgnVzMokpVnFxYnz3JIIMnk6rKFWe7PM7lcC%2Fq3ZmLl5uMIfx078GOqUB1RXp6cJxCjcJhGbja9ZxkOrCn6Lv6NoTRndHLKy5mAMoV%2BplEP10zRuLcX%2FHOrypXZ6kGuMC4J%2FaVeVfMZOzcyeusYLTqeFbFKmkizwkRuI6nQbrbfg9bc%2FeZOFIIUx8XKtPoWW1KgRU8NRwkWuOawYTumnCtYUXQHzWtIvmpmcPs1v%2B6B6QdD9J0bpYRNUi4rDz3a90ENdW1tkMk7tBeAR3BOaz&X-Amz-Signature=ec51c21407e777b2647f92d597fe19a0f913cf0a08a03181bf54e502d93e0449&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
