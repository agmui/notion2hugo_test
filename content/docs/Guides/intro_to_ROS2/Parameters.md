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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJ3XD77%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3TdiA7MLrJLm86kh2mjHMfH434R9F52JGJ9MMIs9IgAiEAm9TOKD9ZZI8aUYMpEXY3By83LfEW2ZfUDRS2vxh%2BiOYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGHsMawjHJwUW1FXSrcA5EtBWNR3YbDJQ77Ux3cliu34Qz8cfPRZYfoNGwUQHJoqW%2BjKVraVdH7CACskXEUzjARzt%2F9ruMGkxue03G%2BMWW0G4mp0%2BWRPVpgRXU1%2FwJbchJtMVNK5QPUluL4BAbg0pBOUxmr0z7%2BL%2Fl3KCInu5jSOCg6EmqvZg2z6LqixeB1N9jv%2FByNsrVFwMRUbJXp9B3mc%2FzykG%2B06X7xsmQPUobD%2BQti9IZiEK1jic7%2B1VtYPOm9DrHCLMCtawDL3B3hG0dOYLwLOWyTNfNbZv8yFGs%2FOqQvzKzZnee%2F5Nz%2FzR8qe0JR9izIW060kTIXpyp7evGZSbD9SFAE86GGlSRb1vXFsfc9nivQCodw097oU9EGpqbhPZyjwctnEQmFZR03WdBib3is0zR%2FrwnFkvTiQtQ0YLMd2ZGhA0h7Py%2FFUS9wSJbaqGfj3FS23s2DeVdwW4ZPQb7JmP72Mhqajx8GSbzQTaS%2Bh7vnrFUuaZSMjg67H%2Fo8vhZpssFnJA%2BhUe%2FzEaRFQomYBp%2Fac2nLl6glG4tUVPlkaXNVud%2BTaCaAIL6wkxolMBa7BVg4tsd8%2BMMAV5iuh2vnyAl8skSY5gvBqjQMCaZ5cmS7pXMKMWehO8LJFpYKfpyv8slUAmLrMNav2MIGOqUB%2FE4itRkObcBfTStSI%2BvqKQ8DKRlrwO%2BRnNbpIQgAFk05JwtYl6BTnBJoZ3e9xWuxR5txZdiofQH5p7bD5L2dunn5FkntNFocKRHGcz2nemsV5SIKVgPuZ%2F6965VjzdKfvY2E3yVBrogxUpkqTMh5C0g0s%2BqOS5IZ%2B%2F88bMRqwj4v%2FJVBbuWc87yQYQ%2FfUSKz2HmbZ%2BBLkdwqaeL8djh7Og3wKwOC&X-Amz-Signature=0f058158857c158b3548a36a9a13fbb151b83641a0439526dc8e26ac90dd2f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
