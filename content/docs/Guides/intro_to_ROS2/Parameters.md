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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS32DK6T%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFrhRqic14ggOfF%2F%2BS%2BIMH8mS5EuWuOcLNbdTuVSYA0pAiEA68%2BIu%2BiOdIWhQyBOtk14VwZ9JnslAhKQ4mO%2FFn4EesAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5tHSJ3yReHxHbc8ircA5S1ornJkAmcRE9sSOrlnztHbbA9liut5fPU4euLg8vQJB4ocyhzvWMc1qmV821UW0K8S09vjl2ofLSoXWbAxec4MU9yLHAlsnDOe8C886ClB80BC8sGJCnlJ6QwLmo4At0PVW3SYRz3a616hp8A8MvgZEDA01Jx4nbfXkt3euyT%2B8VMXlEmn2TIxG640nw804SpJ3isYUech5hOELucAoYNGO%2FU92Fr21y4QlYTe3%2F6FkmuF%2BniEDEG%2B773j0OO5K98Z4Dt%2F6vLNKGJE%2FPh9sD1lNNEDxqJYTLmtRs%2BjQVhSRoNfFRvfQiupTs%2FFrDlC%2BxenpGQHLwsiYHbtxvyhss2WjlAp8L%2FcMfumcb17%2BoaZdqH4NG8VheaWAqS9YD%2BrxCWYixLXEKf9I8hzYPm3avom3%2FD9pYMjUo%2F7UTkHz0YPk%2BUdg16F2Mpx%2Ff6Xsm996lJvvlfJFiibk%2BOCiX3sJUJqnVyJq52rGoOKQkDTyA9p2lJ%2F4y95XjC3yAoXtUpYEQCRFR1k%2Brb3m9W%2FZJLdQxthK7jWXKCJLobyYblugM41QI5BgjpGqClBtUih7Lgn87KQbvOczcjBzQku8YibPwfFwYr6IFTSENhqmySpLOpLabIlkwS56TtPMhaMKLD4b8GOqUBPgxFnjmAQ%2F1Y23KJ0l6J9DJD0D%2BAgpVF8Yv6KKe8SwT4ZxAlW2fmxGCYLNgu%2FVIBD5oUB6Nlw%2F7YmS8MsrwRSjdUamteJOnxCGlXlG2YqBcnzKU9o0PS5GvVp4JJCSS8jpopJlmMx9ByroxR1kCNmdkIjHhHUQvqYKGOknUDh2ib3BhX7TrpzQnb7cUz1PwOvCel1nJSzEDCI7FrsEXihXnHRLvA&X-Amz-Signature=bf1c3cc8d07a4709ab29e3127807a505fb4ac40f26061c7b377e369c8a17633a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
