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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574OOCYV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWDyxXEr9amvOLZHzpEk2%2FRCs7LEN8JZp6lHD3E7Xl7wIhAOcNvwCJsQd9CYjN%2BGyoroMbNEuyzUHfOgDss6MIJdO5KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypgfya3ZLMelvLsCoq3AMoGcH9tJKTmCNxB3Gg6K7%2BiDe%2Ff5gHpCXRj%2FdPpIglrKErmUd63Q2U2moB3tgkzszU1BeoI5yC0DjcfmOlwgc0dyujoNFIybJS8xWwDUHjhBv%2FC7VI0sFHIZeb4jI4RAs8yaiTR7oY2gbSru4csJWzoUEf0i4TFUWcNakys3gPn%2FQuapHyF6Lo7wuZMSZxWcJCsqyO4MdfZJBrKTuGFATteyx7cxX%2F3Xw34c1XOrQV5%2FVT6mYOraEFewpg4%2BV%2BYNJbkANPdg7TfWqfmY0vlX6psgEmBxeRJ6iUj048IFHvo3SYfIcSiaTReVQa8fsQoAwdWTRXdefFKMuNEMSmvAuq6qQ1uoCzVX1js1s95Wz8dCSv6asvfQUcP7AJcNdLX8OKFHnHhjkm67nYDA5J9t%2FTnH6iTshvilbXoV4Ue2EG2rIS8XMSc0ck21Oe69OcAihTHVcIeAhrzNghFTiAJlqRH7qOgOeQZPhYOgI34bkdU%2B5bYh9kuHUg%2BgNBFTRHfnjKs1s3j2u7ALXnWbcRJtZvPGVL3bCyFB3kN67aKu9OJeVa1tzsLdAZdQ52IC9xA88sJ%2FARzNLa10BnSjbthweYXIX984susATqM3LXCyHT1S%2Bn6S0cHplBowsAajCgu4TDBjqkATIocidLZ7eVUNqX7FA7LZV6v7M%2BGWG4n%2FZx%2FVs4Dm3QJqYblNNuoz3bXLy%2B5nUXZWWvjkQbJ497PjPGxCqbQBjQdqsrYJpwirNFynDwd%2FHsbXWRCLTXuTlXiB1AetzceKQkXVEikpbn8ejr4U5hRo%2F5Q6YMWiqw2N971IBF9kzbo5k5lBx1bs0D0HulDM%2Bu8F5Py63SfaBo6S1n60vwYm3GsWrP&X-Amz-Signature=ec3d7a9d1a7c835f80a78f206dd61302d04fc8053bac4c98cc6d8ac208026529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
