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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSPOGGZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCBohIL7l0p3fZB2WDE%2F3dTcYGgxCRBhHVCmoNODCKXoAIhANUNic%2FTSoNoJQcse9JuMIELPAXy1bnj84ZxnNqudFKGKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tDttttaqsbfV53wq3AOoJBy3%2FDGTA5YGaEb3e8TCQglvKyVm0DiH7xmlDwOpo4Usar8eoE1BLWgqeU%2FhzwxJJZXbFPW4oFJ3ry%2Fi%2B8qK31p%2FrZyz2kkhrRR7%2FzrRDauw9tskV4AW0Rb0ZmlRf5nXvLSIO%2Fm9cXxmqtW1mF2YZyPwPI4fOzLxej4%2FEU2JCTDA8lUIWljWwTh0LJcPWnam6VP7s2pNz1qbHTcOxv6mZmo7PqSVmbpHV1ktsrHMnYtUrwEtkkeUHBY2E4yuTbnKnoNHFl9Laaq4%2F2nw7DPFLCUsQilJ%2BdtVzGWq4Tg4fBHqFdn16H4aDDW3X4I%2BuZfYQKwD2m6pqyC62amNqg2hE%2FqRgqA2%2FUHLN%2BGyl6wWf2JvYfOATXVDp3fupaWK2AgyiuVUQFmtGUyu8AkgdXAWxcqd%2Bs%2BahANgatqej%2FbEHUs8FJQT0fRgpNs%2BJECGgMwyNJpB1ff3fep7ldJIekB6A69NTz5uY8Ntp72u5fFsLk33jo83u7HRuStKw9DEcU4CeVWjf5AQ5SZKG%2FkG1uCUinqcYL7TOA9%2FUKDjDyb0vmwa4V%2Bg6PHUnCWCuxr4bnXbLzaXcpoE36NIhL3RqJZqIaFl1tHlIN3YJHK8W4YIx7TvyBw1H3D1P7LOUjCc7rbBBjqkAR7RjF0GCZ9Htdhniluz%2F5ZwMw1rV%2BnALWKsEzxRsduj4iH6UjOP%2BMZRRDzfMDo7oC%2BWd2SHOYrng51sCprRvhtdqJYJVjqwvmIbwGBKm8ZA%2Fb7C89JmqPYt%2FdwsShOzxZLGLEWfCElS3linnixWRQQnvNKXEe3pUoY2TihbEwUfYXpH1AKO1KBIJ8Lm%2B8htolw%2BkjxFJCDsQnvt7ZZQJYUAx8a6&X-Amz-Signature=1aa646a82078fbc121a7252c744cc5de3ce68a96ce6991b5cd187889e55d8388&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
