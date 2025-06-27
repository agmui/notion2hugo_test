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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQQJWHM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDqRExCx1dX%2BtSst3PcePcMuWwV8biNEKQhYVXVJg0IYAIgSZIwl1rK9zPAoiTHtCZpoVWeg6FwgNWLiKFDq5Nz5qMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKbvsRASieL2EsGW0ircAxAGLu7EjBE9v5Oal297RVC7E0m1AUIRl6g%2FwE9u7pnDG%2BNaxpbPxaiVh%2BNoVAu7yaXtBZqDQ4UBBLlGMd%2Fzn8B5JdFxJZWl9hKJebeK%2FEgIi1MBFRH2rpo3UBBfjerc2EuRC5mFx9k2k1NpZ7Ms%2Fsdfhc7ZYAiACjJ5WlGWGBZkIAkmHMXFPzUrYMgq8DwPEi028L46qaFGzo6nlM552xFo0yvX5ycSHbl8OerrUe13QgZNp9MrC9o7Dk19gh9GZhZE0ghAr0XWqDETXr9HYuOcVA3wHwgX8r%2Bqq8uoj6N2n032goNuvcnnV8VlaOkCd3ZZ96tC2Rz4Bq73c5NGqRVu0nGekLD1ilP38RlW8hYj58vU%2FR3Oj0U1J41yxgEhL32%2FJmvTCKqHJcmhwc6ouibmozIaJsE9dLyB8US%2F%2BKl1S5EYcwCeusYifDGte%2B5eUMI2tULfU1rx7NgCpIs2oK%2FY7etd1QcfwinFoBjnojJesHPKb95LCDd6RGhKmnIlZIwROA0qurYTY4aX4em1HJf18vVUdYsSuy0KfeW%2FrgK9W8ZoPYDlF5Ftj0%2FZcflINqV3Pax%2BxDejKzrBM0fOk3JOYjveCpnkeu4xuT4ul0GNSq%2F6mluhPJOajJFnMJvU%2BcIGOqUBKmp8MJR2RHRo%2Fh4Xlfd5sA3VsXUA6bnDVEYLsINeh9rTbcmtCZs7STsDrK6dsFr6FgC1hFOlK4QKVqKwMYt4DN62nnorcHGHZ5lDlm%2FNhi%2FlklTdzb8kf8YKJrMFljWgC9weOyNSdjGVMDzDmECV5guHty9jpQd541GnDDxBT9xZ5dPJY9KWjspbmjMS%2Fkfc6gbDDvMp%2FCZ3LDtMnxvLIR0TI7Nh&X-Amz-Signature=321ca0a4382c23ae6b7d93c7a6c1bd8fd500af25d4ba2ec426a0c06b4ed2f927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
