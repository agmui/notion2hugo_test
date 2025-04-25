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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WXX3JB%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs2lrpJFPgJqO5pZdd4PePirHEmnPeMtwU6TDdo5vMAAIhAK6hsYobf4OiVVKAuWOjnBK26wCk%2BVudAiEszs17Y3nDKv8DCDEQABoMNjM3NDIzMTgzODA1IgwhbMVj0Fg1J2nuxmEq3AM8%2B7CGyuz0mXgzxffLUdQDi2YpxHt3bQx1%2FY%2FEVIxFgob0N7uTk4IpjbsNahRFxjpc%2FUcBtN7KfSNwy6PZlVU0%2FPUKBVNcXI3SA6PAoYs%2FwnZVCsFPoHRda%2BEbkcyCLkkds39Lze30jAMbWXHq1xg6G7lDZqj1r3LVhibW6UTeEf1baiIitAHQEzzDzdjCj61Yi7OlDTZgSIgSZiZ24aYvltDcf1faEAJriVg9hNtfe4Ua6qc3q2md0u7H0TesXFqHwtRq2KomZ33qOZtsVJrdEz6v0lVP3H1DpjZ7vJoXUe2I5UkT9aXlkVryyCamOofcmT7Jv1ztBPDXzJUBvdcprEQCqw9RGII%2BHwAb%2F8gXQQvwfzj0hz6sD8OMr9CUtXfbliXdy8wby9PwYzr4%2FxXV2%2BTvMQfSfvsNwqPEwLU4TRnZpzlQ49Y1nFo2EBv4PAnEDApxyzljYjMjDAPGpi4xSIbbtu15sP3EPTSkn5RghbJcNUZhDrY%2Fo3PwX%2BEz%2F7ynrFxQ6OU2dgRSvutuOaNC7%2BKbB4POJaKl7QCYaLk7p0kKG5pPIqaeEoqRLcD80bRq%2BNdoTrOo2SQ2OVTFpG9r5rsTA%2Btuh0lII7K941BHdiyveKUo8fBM2Iaa3TD%2B567ABjqkAYXkqdtc9kNgMLBgw85xwGCHhTblFK8PCdjXpZKLzJdIAGNK1mmx6cgUwmdklpFhVNoB71TrZ4C9yo71YCw%2FGjIUgIX1LWi32Rwh3ft4maj29YfAaxz1%2B634YIDmnbb7O8wwcp%2FX8VwNi5E%2BRPCKxjxvjGHcDV8z%2Fke%2Fa3u7s46aqk1HW2yzwi2vvudWzODlzKFkxF%2FQHF12JVYekPIv%2B6UQ94ER&X-Amz-Signature=5c46c9280c6b17d163ca5cc94ba6913d154a0a96e4ac820f3a5dfe3b3d934796&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
