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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDD6V7W6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCw0kbC5o0on89KuxbAMKmPxmWzzV7BzWpLWwcf%2BskLqQIgXCpwDhMUrGAAmqVhTc%2FrHfazD%2FFTkhT5L9ynA9Ih7SMqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNwOGYtdWkuA01keircA6C3drCP5xkXsBG9gT2W8qDYL7%2B8R3OztUHHcgkOnv%2BN2yvOc%2BzXlitv6gWfooy8RnU5LAv5PqbxacnW9Tpr%2FC%2BrU2Bqi5H%2B%2BqTe9SLNKOmy6%2B5U8iatMrTsUJRq7wjzbjY7PzBze5DsSQrP1QWtvAzrbGbMiy%2FytrtOWUDFDOYgKJv%2FeO%2FYe15r%2BsQYhU7NvtQC%2BwUBmuFrK7cAzbGAk1KPBkvJOMk3cvTQVpLGXsDDq74p59w12A2DgVYKO%2BCmpbIiwwF2KgTlxPsSAQWgqk5pIIIz0BGgXJMQAOz%2F4TA0yf1jou%2FOo8JeSscKCzmwEVwcOlhYWp53SXQ73%2BZ7AjQqc9S5ay2uFkmPPVRG9rd%2FjzNgdEj8WgbgAeLqZx%2BIcaSi%2BxC5kukHIznBVFW1wuLPNMfKFPR1xAwJRp4j3qkACE6A6JZY9Kzg4LLSYQYXddk98No7vFNE3gZKCqj45OJWdsiwQSXWxHjbE2o2nPDOa9NARPUUn7MHjr0MO5WRsqK7RomDtkqM9FIbGqgCW44QyOWKb4tElD7PX4F%2BqPe0ZwR3sg%2FvTlO%2F4KoWb9TVwCVFN4KkP0ktIBeaiMU04ss8o4QYESZz5tHhURJ8TbtIBBc7pGyJrCYJCPUTMKChzsAGOqUB%2BCdpqr4Nh%2FLpajOahEbBeVWNkV%2Bfoo%2BIpp%2B1eno9Ne7tt86tFVfRzoOVNDcdzT7HSFRkzbJF6nJoX1esDpAMJWWPSRSZpWxJjBKShQdOBeOjWBMsEXKxW85qU8BWCWHp3ce%2Fk4pYDchlZ2153nIHEQ7gEPDtsD33F5Lc8qF9mCccbAXvFF1yEnYVg243qc5DMyOr9NL4yongzJRVOsw9VPYjUPdP&X-Amz-Signature=323f61dbb1a56280ff671624775c8a20c976acff223396975f5118c13aac0dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
