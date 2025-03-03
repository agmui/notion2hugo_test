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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSR3BH2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3SBQbfCyj4iWAC3TsdI%2BPVjTTOEX8xE3DqrLzoRz31AiEA546g6QN1TzdIZCPEhC7%2F91DNqsoR6Ixn7EUqQ7N4nvkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqGnVqUOg2zM9D65yrcAx99LNttuVNNGHIbq8peXODeBBa%2Bg4uMklTOWTJ6ucbo4kW6uagVPmFfj3ENu0OggR024%2BrUC704WuPk5s%2F%2BYkkLYifieYt6NozYjfClcSmP9447g06DHW0OkRgd8ryjC0JKPmhfmEPtDhXOkX4l8YPT04toQ9yW3gVsQpZ%2FLJ9QxpGTsYQuJb0RtpZYSS8kErWpT1PtsILDdY1guNHNgoWP0yIQ9f28F6UbDoGWXZ7FlKxGfb6gHu2xUlhDrYApseg03gCVUqiolQAfr%2BEawQD7RuiKqlpQc6lQiKiA3%2BXi5hIoGe9djR7WdNi4HdNiBVtC5S2eZ8ssq3txDh%2F5o9wUIJE6AXWl3I%2FDmsJB%2B5FDLcwD7Kuzszb%2FkJDDpzpxCm%2FpHbEXCOjEon0qRPRCgQNQRIwdWHqg5e8fbk4YiLQgZkwXvMsU4MnL4Ce4KxjShaM%2BCxozE1U97GPGGl5KB9S9BrhpTonNbjlw1RJowBDjwmu9LHmHWRnd517k0Wy0EbSP8%2BnW37N6cQ2Bawc3JKVzKTSeQ2AE1U53ORL%2FXc2RNOBBDmWEnPfwiTdfx7TWAOz1771M5e4sJCQeu4K3RYdwdchHFT7jz7ll7ECajvzeEuzE%2FNPSrc9FOq0OMNq8l74GOqUBhZxSXTPvdjfxIHyf1nUGI2Nf6HOfBBXcHfnK5EczCL7WO87ey3U1uLxWG%2BxFz8McnDpaJTQx%2FJq0m%2BRxmzGuQtWB7Sbso%2FVF2ke%2FfKQwff1LdXSGcPI9Y6JnOapDfXT28H4MFwNjHYDBiJ0qMsdG51IaJEGh7kWsLKhPOroCkZn1x%2FO7YUIpLJLX2Jj7ymK5Xq%2B3np2aR5rs9FewRoKJBksyT3il&X-Amz-Signature=bb5d4a6988a04a41fd29e54d43f0cc011f286f3a566de40352bbe1ab2d8f0487&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
