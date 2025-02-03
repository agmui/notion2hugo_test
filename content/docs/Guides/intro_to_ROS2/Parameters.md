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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5AJK4FR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxycyFc2ee0ya5cCYpR6dqKkhVSa4DuC9dzC9IXMMwDAiEA6vqEvWJbF5nl93ciX7b169jPEIXfCQI52QWsBLap%2Bukq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDF6z%2FKjJDFWo1y2aEyrcA9jAKLF%2FXspifOv2tP5Lxq6yflAuTQUlt1p7hAp1wO1Pd%2B6ugzXRejbdIiJCtx5ACcYM9k02Ic57boV31eS71ZG7795iIKxYPCsQYNc%2FZN8VOd5voXzGmuff67nXYyg1U%2FSLZS5wvh%2BjWg%2BhutuCqvBW70QUldVIeYVbf3W0nko2SlBx7dEIcBpsX9vWqgfjxJNNzcisoPZhlvkG0HRQZ%2BO0WjBHZXumEWS9f1rcVsHY9ES%2BcSoDTzde0T9xtWJVaxE89UTAy7ahjbJqsBoOkYcVmoeNp%2B1IH3wGp8f0p7qCy%2B1o0tShuQz5qKePXB%2BcZpeDy0BloAjKWkLdLMaXmcizhnAs5g8xwq%2BxDewJg6HYRL2iIVSv4uq5zpQeuy9yq%2FTQby1jR3UMJb9eWTiZID0JGdaFI2hE%2FVgbcN82Mxk1O2gNVEcJfnkS22jBBwX%2F3tvVEAVyYFQAQ9mbfS4%2BHkWwOb6wEfdcizQxNOFJ%2BIsBYrtqjoBZIDNiS8%2BKcYMZ83%2BsZtEnxr2J9dLna8JeiCOL79aQqOBIl9qAGUX61JncZHbKGzF%2BuALwsMggX%2B97D64pqRUZNUOKallKX9lc1qRKxTNWH83zNWx%2FI2dcsfq3THCA0lwXZCJ9%2BFV3MKmPg70GOqUBoA6JsTfeD5C%2FBXgzQDD9RAnXkwiBa6YRM3ZTeD7FTQGCSbFuNbzuYXKVgSxowWV8m%2B%2FmaQqaOjv0WM%2B9A4g1YqKWfdsCREk%2FEiEUl8%2FUSJ5sfGHBinvHeDKJuxSoEZb4SEquxyxS6EsB%2Fboys%2FMV47O%2FS1k6DYKReIvRvCtJeLjAjIuuvuZHKomPia8YrltbWsdcIfbP2ezmHhmNJwNIaVQCG%2BHE&X-Amz-Signature=5a4c1c16cefc9e0c7578daa4c2b09fa96fe91ac9cd26a14491926fc2ba4d15a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
