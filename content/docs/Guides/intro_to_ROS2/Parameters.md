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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJPDAYA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDdSQAarD%2BZfu4DYWwTH7%2FC6NlbcA%2Bf49vliuMuQNjxuAiEAxNGjU6y5vOE%2FBnKZ1BwZrGOxN48h3Xe%2BukOpYwm5jTMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq8JX2dkBXq%2B%2Bda9yrcA2B5QbU3TpG9lblgkb56VHyn%2FRlppiCwbcuPE03EK94AIJcvoQyduk5wz%2BvZbnADoWSFE5o5kaDZlx0WwBhjgcXcL5rCsJptmOID53c8fZ%2BUxMWs6efzeJ4bHfntK5qezWBqm%2F3ySmS530fR5%2Bb3deUOVQsMJ%2BN6irt5D42dO2SACvA%2FrI4P%2BuAOXqhmbSL4WrFbpCq3u0GknUhHQbbyp0P%2BfuqB0LwWbQn16PYqnEQvbLy4AXY%2F9c0tgLrFdLWQjjU%2F%2BycwGHGdqd0XK%2FDa%2F%2FW84tFlYGqeBc3wirya2tCe3KZIWiLkV%2B4EAfm2ScyZogVYNPrsU3tBZ0fqtbxN7uLWYhceeMgMAx0YjSFNDPyFqastrBfe8JR4UFyYHNwbE8OwQo7YgRDWZSqKGXqKb2z2mUu0llPyT4ePs0P%2Beg00Y8MeUsbrtu9Na5%2FpDaflWw308SL9aFAm7l%2FGwk5qV8PkuTlw4NiPnmqDGH1JJhOWhrc5%2F0jez2575uKJKcgHr5LnbZFJJn2yh1uwKvN3Gwwy0KHlkp2MzINCjY%2BS16jmhRE%2FOjo1IbZupPuJjRAj2Y0XxPmDKWhWucp%2Bw0brd8DrDE9hG6wy8m5FLbUbUnVseDKN0S6jHN8VTs1qMJi10cQGOqUBNwo55NhMo37FTcbw1Nk4LOtY9szL5ehppzbmtXYHo7%2FTf0pUBKMB6opeZCMhrvbki0px8x1zazSHRT6ZiZyZy56E1lJy0V5dp9UcevzEOCFGo5jUHaL%2BPj6pjYnqgK9aYqKuJKU%2Bu8EgZQhRaYbtAHnkcaq99k%2FD9b%2BzZ9IaPn18lkDOC4w7e1y55mgBHhpfchd1nHtt4x4PGqiJIcM8Egl8de90&X-Amz-Signature=fd0361798b0c351b11c44f94ebee4334b73f20626937f19377cc5df212dc2cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
