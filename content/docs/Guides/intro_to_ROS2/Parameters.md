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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGHQBJJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCQ80up0v4SrZV9XwrMcMRCZg2zrSBbelo1sEI7x%2BPlewIgE08sGLtnfCdc6DEAlMq4r%2BLKzS2zNJ5hYG4cl3Vo2xEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7glMfHYyvFFF9HPyrcA6My7C494wZs0yoDgXif1IFv%2BZ0f%2F%2FyJjXe7O1oNuLyy0jUqup3K6zlqLK6fv%2BDG3DDDUBcDN5sRlQzuo2GZ9ayuqr4X4fsNEqSdrdJR5m3b2Ey5UI1mmnmpbUuVfV3EklUTBZUMXAGKTj5z%2Bv18lUyesPOvK%2FBuQaUHM8VMjJAfTqGtLulPNsQtNPjId97t%2BQtSzmhlcHckriAJuXP8ojkn0IivwbN1pIFkuHHn5S7gnTQxzjiHT5Cs4xIFl4%2BceQ%2BmWwEq9hLZicb5DG%2Bgbmidz37H0l1I66EQP5JJn7I8UTNJF4ScScJenAnRqw7zP1GSjzyYQJ1UNlmxJbmvpP9787u5puX2EIYRlM4Patg2l%2F%2BurctztE6v%2FMzuChHaW7mxdZl0%2B6RfalwEJxonxFEb3HTqo6Rl3VvH36dbgIy0iKdVVM6oJYaKOIHgcCiUQgoT%2B1PBR6XwspOpnObH6M8ypmL%2BuUoBfeswTKYPhnACPCbg5BBMEFuDASADWwphnav3CokmYoyRe24oXYv4F2ycwuDamVAczWCtNgRxpCqB%2FkX1ywe0wgvfqbyyYUdPheSq%2Fwjul6DQg2I1aYdufAQdSu6FKLPj7SFmumrkGQzTa%2FAJX%2Bn0exR26iDoMOnSscIGOqUBmDEFj8W6%2Flf8xu6FSglgrAnMOtuRSUkOuqJtABJfezpxEzfulOko%2F95ln22BestfvIiX%2BfwS1sjNpcso%2BeyEG%2FaogVdQ%2BHBW6Fndav7%2FlZjW5h4l6Js2ujMSEJ%2F1LQZhzc5PHieMcTFFnP5zKIRR7ktrPj9jwvoryjS5KUY9fTQofgEyXE%2FeBtDdf0SuqmXlERvh9k30Hk8%2BEC8seAL5Tg5N7wGi&X-Amz-Signature=65759cbc82675baf205fc3cae53faeb275087a84d18bae9fce7881653442410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
