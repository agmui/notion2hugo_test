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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGGRTQ5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIG4xno1GLtyODi39adITA5piKHmmlggkP99SWqfy4bABAiEAuwC2UrZNkPJCaxhftUo6uf1CtHJkQS2gbre50i2tVkQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBO3p%2BWmIzJ%2BkJ%2FyDircA3YAX4wVjWC0pxQ3IC26btM4TH2GieW29SCUGmkpjJf8tHFAHJoUy40dog4FatJb4t7bBMDnelQoUJUQCL3Sm%2FcmACBc3lI%2F6lzjCJZXIVICxvlV%2FVt%2BaJvh6%2BJ%2FCGfF%2F33g%2BK%2B6LjfJYhdmFijhMmtuIDs0Z2q%2BU2aOSN1ZD7iWFBE3OTWSPYMrx0Py4uPjTXQ77%2FQN8PYh4TWK%2B83Y2OU3TSY%2BbH%2BGDUH5ysUD63MZgAisudMsFptPhnW%2F%2B881G8c5cZ1ePOx6byeSHSHw0V4GzCPzCPpgmAYUpOQY%2FEbtX4lvIVfBU5G2G00X8W2tPKyn7Wal8DF54Ri4fNtE63hevzUJjuj%2Bq3dQp8snmK0AQNjdAiYgXucW2lfBkUEB2DbymQrcUPGR55EjWQojOI5192FaBYe9YjPah3c2nJWV%2Be%2BxD0lhoMIYw4mdwqrTz1wUCapRaCr%2BlSCuKlTdWyGsjhBfs%2Bmn51UHfCRjzL69vux1x01jCFQkKIfbA36yOm0lk88ViVLOkWHs9Gq4HNGSLUta%2FfrQdgiUPm9EE1iIo9zBrcwcDh2NWAZFIcK8MWT0fzwUNsJPbGW2T6qDOdEb8ZEs%2FFVFcqLgS8T3NbLocZ%2B%2BFJQvBVB1DB%2FeMI2tm88GOqUBitkmoB0nWlzKK%2BziNlRbupMl97w63FXBQztakLeZApdFvGZ2VK4FavN6wjghR7n%2FpxLWCexbV%2F1GKwMezM6EPynYi%2F8kkLRpyyCy%2B9698MyNiyzSxmgEQ7Ax76WoAC1rWf%2BhCQEJ4WvvDrAAKgfNl1DlHtDJ17CkcftKELa6%2By404LNhVsHR2b0Ly6hr0m%2FXp1N7FlnG0bwQ00qvVpcU%2FNhjR4XH&X-Amz-Signature=b0ed10c9e8557895f82219bf7028d439a6a87fc08002dd7b50e8efa8b4f8d0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
