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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IO3PZU4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmijQb1W9ftG4ZehYcflwigbBwdSFeU4e4gJbCfVCBbAiA%2FRp6%2FB4wAAzZPShtqMClQ4LGM1jBNrZN4jZ5uFH5OVSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHC1AsOeozzd72a9KtwDB5qor7CmxRIXwH8lyTZcg6umRup2PH0KPcClvzYKpcnzNMJFICbwRmZhpQMNMsDPyfeB0FoCV0QnWvKu0Lfcd9L0UPmJ09iVybFdn38ldal4ryntN5Ox99aY5C9WfV0JJrbUFFsJRW1Y%2FKbpHwCfwSF%2FSj6zH5jHPaknbX0%2BJq0B4Rw9GbkNZWaMspGW%2FuslC9S9Oi2KRSl0IJnIxmDYs3GVo2SpzHzoXnfToA16R0VD8MwxW%2BzQNTb3HANQFAYZeptTNUOCK5XNluBxwhMjw9IzIOVm7d0VxURTVs%2Fr9oVTgw0K2XjGPGeOhgsdd5S7oq14JFJUCywoN%2BDGO1nefI4tasQwWcCRSNu1z%2Bv4QEh7ojsQbb8Cp0wIOKu%2Ftcsd2ccvh0zrsojvzCq%2BCSgC5lb93ewytZDBqRTKYTNjWAhcT%2BdGyj%2FKct%2BXbRouJiGMWgs35zeyMn2bY0HRbW6fFBUd84sodjA3oeoyeCJ%2BReTigMU6Z9GBuS4l6LnvZTGLzkikeqfw7RRZFSxMAmSSRZl%2BnhrBT3eLfxr%2FQHJCr7uUjedftmgGtIAJKRyqeKdQeUeKPpii%2FCbet90e4qWimo8oz2y8TVLTl6uLfVWXoUxWCW35aXN34B0rZJAw1ozTvgY6pgEj9tFyhqlsLTLJ4qZgRYw6PH9BQbdu8P1Nwj%2B%2B8cAeau4aRymW5Q1ntaAuMJn2JhdRL%2FOkcK3MI6JT8KkH5EZWzeD0OvnNaHNvglga4g1R%2FSsYT6U2ckZG0E4c5efOV4Yc9j0Mnpcrin9k9J3oO%2FsRoFxUExSoltDaDBZiqoLCD3nZ1HtSyW4lLWdu49boTGmwVWVVzHtG2hAiN8nIXFW1I5rI48J3&X-Amz-Signature=4fe8f87dc7807a6b0404995e0f02ade55cbfd3e1da0f8b0fc8ee757ebb42a692&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
