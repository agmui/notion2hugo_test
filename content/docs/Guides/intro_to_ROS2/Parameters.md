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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFE6SLN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zn0TCX3%2Fb2A%2BBs2YhAMUWzlpLKc7Y0DuqPblb6t27wIgcLXP3qtzA5PbbNdIdzKfBvnZKl7GGhOulTe91X5RioIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkFRtBGoSuO2%2FY8GyrcAw%2FHRgJ9iYBWnxLCGk0ORAr5sOoCjYgnx553nSX0Xvz32rgxv5GG%2B8Fy4mZN7oVXtPQgLdFNuZWOnR5BktAs8rRN%2BmXnuCAbDZq%2FgLRi0c76wYK3NysU5anvUte9AdpZh99TfA2vojKGIusNUYP1rBbqziQquv%2F%2BG2%2BbT2Zqr4tefW2%2FgOD%2F92aHrHLd8TVs1CaRaMsvrFLfFnZtrXYe0hu%2FbNOdzg%2Fd74Y%2BrDctD4KH2ItVnjrAkk2fDH60UgJf0fL2fHP2c4BeI6JZAddf%2FRZHGmXRrQPRnQ88JmfKui18krxaifEcXF1LQ9KE%2FlkRP4NtMJJvwzLlg4GKtmoe7%2FYnmB41Ow1pDiR98eXbbVGYYASlSpzTceZG3NySmUU3DkcwXcGfM8ILH6M49YQt92KQKiZddxor3PLItka3pu9k9SgGws6ARC4btxCHqTpyc6X4tfRzATVfq1RjNeNX0HVXeG3rcPz4CMvCy3c5qHXlbOCz1aShRJwqWFKp4%2B9QZzq8XGu%2BriQ5Dig6ffi0PLxObtDEkc6LTDwtDxn6ExPicmV6ezKMs%2ByWzAaJm6JBz2f4XL6jWdKJ8O1fIBxgXvs57SRM2yvjUXGlD81sm0DONg1TBWnl9jmYdyKEMOvFu8EGOqUBUlULDriKcSnxg1P5hc9fOL32kGRlGyn2wIMVddhSvfsM72faNYgxxATOOGhflj9gK5vi2RHM0%2BOPk1kwk2V0%2B9CzDFTHEmWPbs1OXq%2F4Y7dPYdGfdlkE9aHVwxq4KoAcs%2BTDJJecx2AtEtXFgic1NfSNKgy60v9OKIC2LsFvIUZEZtzo9pizzrBc5HRFLoKascxYhE%2BvTu%2Bq3zOB4SW3EciepEDG&X-Amz-Signature=3771eab1155bd310ec7b2a72f0ef7320712f9bbab1b4699c1e3e3f497cd13d14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
