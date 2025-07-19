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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDE2VDC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwhFSx8zPqnMoXexSFVP1SqjQCxg0COYihGZafAiXI8AiB1Fpe5jls417PDZ4U3u7m%2BqPr0CbMrJENAcYQoHEbf9iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCMPtteBctHyVEtl5KtwDIN%2Bu6shbYpGgmGHYbLT4PD0IheSik2dmoNUbo81FYccWyIVALYgrVL8hJHXM%2ByHTXXbV8JRvYAq9YMeWifR5E2xTB42ekzLknyFaVzRj4PvJR%2BwJK2lqMMvOYKu2kPSTS7OaXjJmI6GhwmolgLI5NT%2B8gaMKoCexO%2B%2Bu%2FokepXe20kW%2FmD%2FadSN3tiZgkA5EjSiV%2FgFGA%2BUutf%2FAe%2B6z%2F%2FG8yoOUcRzubrwsewM9FRWza9msQDEYh9c4RAphO0zEHg%2FBiMjuonEOovao%2Fh8KQGlSO5EL8axulmviVd28qBLGdSnjcw7LC96XUMrQmr2KPT7Q9brZeh8dCBjnQ8uNNKvZw56i84oGZnzKWRlD2WmKIzLxCGAh0XgrXIVnaMwQ9POeWih%2FW9zWrFfcZXT9BzWwOnVqoWkxOBabByCuEldgxB9douD9vkB1uc9d0bZSnrGMHHBoke39RUV%2BO6JksS%2Bxzh0ryTH273q1O3gfagUNbEfRGHAiM5it%2Bu%2BBklXY5G53unZ%2B3qLedHmeFWXHlVNCULREej9b24n4DTyS05Iy2YP9tbx8FcGr7rC99CZLZIxef0m25cIVXaqxLujQGv9U9gVqeSpR1a3WyTVNF6UFo2cNCiGVtW9zFhww3LjuwwY6pgEeI607PSradL2JjDxnXEPmNX%2FbwnC9xVCAKjzygLmuxbQvd2yWowHZS0CJUru1YsD%2Fy9TvJMgmrQqDez471j3VETgg%2BTV4rWpuhI8hEaKAwkrMSIScbDvxCec4hsRL1k7Te3cSk2m%2BfkJPf6DQutch9DqHI34dDobTVBjZuSZPxEYime5TRHdSldFsxf%2B3EajTkYCCMDAj26QTSysTr%2BZTTFCKgDwj&X-Amz-Signature=b2a57cb76adde5e2c0d29c68c2c85cd6e2f6a0d4b5806760afe4e5a39435cffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
