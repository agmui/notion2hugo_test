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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU2VNWYG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSvHil3kouUIyL%2FngbQi3a1nlgM7wvUXdgJyrgmxy7wIhAKCrxXQ8YP%2BK67cz2Pkym7W038jwbBJclPUEOD2acXRoKv8DCBkQABoMNjM3NDIzMTgzODA1Igxc0ZXR%2BxjsujhDT%2Foq3AMLc595Mj61cw3D7jCDT6AaMssObJfZ7jUtDnWB1nynhPEoi4CbNtb0mjMkzKCGlYFrYRRr1mDV6L%2FYx8nsEU4Z3iXG96hecVyHvdLNwDdQemXGKFA0mS0Pz2%2B95I%2BlhpXYE%2FrNa4iMRrjIDDM8nkaP0A%2Fv8ChGyBqSs%2Fh5Gse4PIbBXBez7YoDcw%2BsFQi9yA3qH57eHoyc2Rpif7jMWpLZBL5H3cVLplX%2FEwDI98GZ%2BeYB8r4981uiwSOLeyVsQ5WqGY3%2BEoF%2BCEnYNSdrzh5oqal5wVDs3Az002NdWyWsAaandBU%2BiT27SC6s6bR%2BVcc8zDIdqMLc0W8zp8OXJqpxtdF1BXDspXhxryEdiqy6OlqWaN1cGqXZOF2bAa1bJx7q91w4wRD2w2RVuTNzli2NmXiHXjktoAr%2FkXmG0WY6sCtQHdIpiKZI1Sq15%2FZmpU69z4NC%2FNYs%2BZhT6q1OUUWVtGaKc2%2BGwtvd6DSRJz0GUVmtJn%2FUpNdDHPWeAgjGMrMuD8HKMPvGUE7rgAuJFCHs%2Fy8PPTzwiCvHVJ04v2mDGytkk51k1Hk1mjB3707ZS8QkIcPhN%2FEKu0Rfi0RHYKQ70B%2BAnYBnkxxQyPM85jJWcbgL4X84Qb74aSSfUzCqie29BjqkAfFI5%2FFqm%2Bs%2FvJnEeaR187Zuhp2%2FEuruKYR8EKHLGUHbt9MhTQuK%2BJVaLgWdkIcBzB4rlAcYVl2H1G157rAz7Wm4WDqtL%2Bz%2F%2BYqOut8%2FjTLRzV9PjevUKDJxjkLrifiCIWjRs4vj5jzJKOKAhTmurMM6ZK8FoZJ3LHqvFGHoABRucn0WfU4lIgNzvPpMhiiS29fHl%2B0G762mJDVBtSL%2BYKCYxZIv&X-Amz-Signature=0f785dbe25b52602e39e2b5519f4415dd4ec24ae8d1c9ea055b95ef871bdc947&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
