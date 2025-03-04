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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZFXAADT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPDivICK%2FeYPN2ft8VjzAlj9Kim9nH9LAAgwXJEynfQIgKTlIWBmLsTgHBcI0pQgOXe%2FBz4LwTsjdElFAelsdUQoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyt4gtcsnurvb8MtircA1xpIxtGzUWGeNER8QcS91YtyEA%2BYmXdScD44Hh2o%2BmZeci%2BBKNsCEu1GNB0aWAq1oKrcK5ExcHa1J%2Bue6Za1B6VigpWw%2FYaOBRMTaGRGarlgbLILf71SelO7QKd%2F2Y844pHJXPg4m8ZxnYjGXCWn6ykMdVuBQmRHF7AQTsSlR7E2pHaQd1v4ZDgKxWP%2B6UD0d0P0weF1TK6qeO8rFN1ai0%2FfH2rtPT9paPxIxG%2BtKrpIHjYbc1PG7x1mEh2Pi1M2FO7t9yEl8WY6iKCmWr6ovXlhsKEhoCdi%2F5dLV1IphwhlY%2BEk7uafzjkE7S4Yl7Dh6B1jg5tA1nJ5HK6UVVVSuqrqF8jCG6zHn7QAE3eyQE%2FFeSIE%2FQvDgQbaJqXP3oSoxQNmgRyYoe5GizgvJuvm6ZVscz%2BZ%2F79YDVm3DZbHTaiJjUEti53PkpiiCtXACRHA6eU0pbs9hKAcGRpi7vI3XmyJYDfkwosE73iIazBMu2N64qLh52ntUECrFcRTC58sociMQsMk1tlokkhPdWd4mHkaBQuL43ReL0FKxXBP%2FNGvqjbBSAskVvsTK2wkw3Oo%2F7lXqlzfJN5NlrvJK5%2FJwr6AfR1RLplzQVcvqFmEEU6lNxw%2BqEi%2Fc5SaV9FMLmunL4GOqUBSDoWVt7Z9Y6kWLb34Us7xgVQM8IgMpsxtPdvWL3frNte5O1ND63wbZz5aSexTr2T%2FS8tPl4IgFT%2FYKphmauJVALuO9JQLbx0TJHkBrSftHt1DmJy1GRh6cm%2BozMLUQAWSkEIhz8qBgRRkxoLPbcsylzN0ULY%2FbGddQ6g8XK9kStVAEqN9hI6DbWAXiZ2VKrtDV94et9xAJHr9rC0Hr%2F0ZxcYxX9r&X-Amz-Signature=8cc24b99ab41371ec64412d14ca4ef8b5ede49fcf414582a44c2f622abbe534a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
