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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFTOUGX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIBxTRa3tXKu5iQLn7CalmhfP3yqn49IB6yfYz%2BOQtiLDAiEAyvYveABbKYE4qsbX4o3rdcABJLWC86pTRbbmOW%2BdXnsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEM%2F0urEC8ESO06CdircA8aZeJpo%2FUIKQNg6m3xFuQAMsBiKUl0racdv9hHiOsz4%2FpfYAJQ6LvpYnyFdkZRXixM%2F6m2oa6hd1%2F40f6mmqmeNwuMVyR4K8kFnUHyV99vWxUN%2FApBG8Wf%2Fgzw%2Frs4bFjGey4HSlGMUa%2BMkcim8E5dQeVDFjjRrGEwNZ6oJzl4AGjxej6q578bCgYTUu5UZ1Zc%2B%2FOj9GO%2B0XMJFsiqVOdFGkO5oZx5RkEKANmbv4rbztc7GxA2wI%2BqBSg2CZted2xldUL1rQOaYcTiCsHrKmGhnpoTCxhfU502%2B9NgbZZXpR6RDHTsGoSkSoBUc9dKjYs6BgKlCzjHicRwcXclTRa8OpJXDtmDWCdzSoeqydYs5CwcQCvpddYAbNjaXbMwViDt6Clb0Ws4qTLDLupAxIkgE9NGXHQOum6fN1hZ5YTyEHtyOhcXiJLurikkyRLT2ynSXuORGqSiS2qLLcQlbdXA0%2BYDmU8izPN7C%2Fjirnw3yQLye500TfF%2FX%2BrZtmUzA5m3Yw38Q61YZxZln46FTWMjiAMyiexSt7r9SEDsktniVOaT9uL%2BoAQga53NI2pjEPdGPLH8tZ6XtYkLgWaWE3VanO%2BtaJnbOuxt9rzPoQ05J5En8seaqIanix4T5MOi69L4GOqUBUqoSxOlcgXG7KeKgz%2F6D8YtyDgroO7KJY4NjmB1in%2ByYCwAPtVgjYTGmDU9yAjcONtzTaPc9yyA3PADLySKkC0YXiQEjBZzkc80YIjcMsDoaD068jIRjI6mAtuj%2Fgvkxn6t%2BaqvKY6uM%2Bbruw%2B7%2FTSbFJiJCYQRUAYjnd%2BHeJ9TfILcnXlUZNuhdAU%2Fk2ZBxXvfein8AcTZI6sXtDHNEobdnRyHd&X-Amz-Signature=bca17be1e3642537d341b777bfef008880105e7a1ad7079d2714f39f0d0a615a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
