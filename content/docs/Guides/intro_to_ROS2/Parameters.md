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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCJLUCR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeghSn5J9N%2BcXW99k8JYkY31qRaN5dTSD2bWuSVv1cuAiEA7MNbwpkJgjZL8p2Zb8x2bW4KgN7dbu7I5Rwi7iq9di8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlQ2Jzkm8t4bLg9LircAwleLlw2nU2Bu5bPcAgflVf5jPghDOzxEHvLkt4NETkoMUGGs1mbKXbES7q%2BEtk9vUBIiPTQwgd2QkZ0GIA6Z6pU5wAEUFr0Umy%2B5bGP%2FYFKLRRwS3QEIbwSHAFKnyBQPo%2FM4EbhDlJRsEpW9UnHfin9MmFDRIOZlx26tNkWI45N57XmkYp6XB7D6%2F%2F9NhNQxyFKGj%2Fvc2tuBkR4W4HKA%2BwYvXa%2B9KuD%2FEN2wiCNyZIcQcftOc%2FOjlREipOBvOUGJ2wgPQ5XVVEUbQq1OsJ5UgdCJUhyCsCtZ181jXicdrb5H7SNrTQxdLDapT%2F8Aw4j9EvEGOWEm9eykGyCWmLC%2BR%2FygzBQR%2FllsiXYIhlIvDIU7LByKMI%2B8iT553%2BCP9bPVQeJrpoyvJpAUHV7w2bppNkxUvEi%2FuwcC4ms3csgcYTjYtlQ9RPlGbZvg7mqKTMr5PpfndGlzF7BCF%2FgBmDvLopLU%2B4OpcmqeITIBScUWYr283f7PACBNmWRtsWF8I%2FrT5J%2BmDE2w3m8TUz8nupOnqceDGeD7Z8th3b5R8HbzUxz%2B8uI6eb8MtG2OZg3G8WtCiBAfFYP3oi174iBkIoNeIII4lN7YQtArl7KRTzSiIubDqwv3qMu%2BEicA8VPMLKu57wGOqUBzyXv%2F5tWlSXK0A4ca4YhrFSQql%2BhwZzuTUFIfimvQulMvm2VjS2v2J2oQYOBukqyJdm5IBttSHGc7ebfEarfH3hIqDbx9pyxW0oSrKlmlvvfpOJbu%2FB6GfAAyjoCMbaUkS6hO%2FL00rMzOp751JBGMVkHZVEDfm9%2BeOiq%2BkoZV7dw4yxYvypfodv9OSGCSweQh7bmaOJ1V6A0alOGTBEPdPA0%2F66D&X-Amz-Signature=416e6731bea33156065b1f82dd1d9b4170e771419ef470f9f4c177367f8f2327&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
