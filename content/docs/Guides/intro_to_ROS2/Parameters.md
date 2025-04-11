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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX53O6ZB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC5wf18Awgb4Hkbd8wgowQjczNf9D8kEwws624CcqCnQgIgGLthOTpjz3Jh1xfeDr1TuOntv78U0DgYcZe%2FgtyhjwwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVk9yfEsqQhGWBykCrcA7p2Mcbx5%2FwXWUZmcNtODMtzDzv%2BTZ%2FR2lpWzelU4S44fubQ%2FyBjRjLmI6t%2B97L2frCbYuJYlN4ut3E5Q6qXaLHgqay%2BfNkPkAHSazdVsKfc3AyQu4e6Avx1k1DEa6nKzdKo0cFDrSjyK7js6Xt13zPHZtClgLPPWQESsuE%2BOeyhzhOefcIEjIsekI2H%2FB1vImwGE2Zw8bTV65TeRcyXh%2FvBs41b367DixGi5h8b2I5CMmfn%2B3yfDD93zpU8Da77c7xTye5KF2QyJpjgjKxAxdQvluFWRaIqgqagwxxkhgu8DXwk5pgKCIsx3eniTiQvXJ8U%2FkB9tyyWWpbZc0k%2FVNoskJH7FAncPQ8jd7h%2BNyeNrNighKvK6Uw%2FZWDTqYMUvbIJzgTu1GkRuAPGT50zlWFPwllUWqsBHiJo99T3R%2Bw8m1U1zqw0O94aowkk7eDp%2BXAsk%2BhZWRFrB13%2B%2FpvczoA49PPqV7qzdNxNlLwamf5N3a3hTZtut%2FfYGl5Q9bOA6Kzi7gOhk4cnLlFTmZprf%2Bg5Pl4vxsq%2Fm8vKF7Ew9RfFwgzuQ8Sb7NVL%2ByS9%2BswM2Nudm9AN5J8qr2QZim%2FlLcWp0qBiQs%2BDpXSjj%2BWbGDnlfYk7cn4mftBBm8keMKDe4b8GOqUBjwaYYue69LwojKv78qCBUJG9VA6lSpLYURlVANrDnORbLXANGPhScfrN2E0wrfL0MMuRglSh1AsiSKIfjQYdupFfUI0Vbq2LYkctKKOm%2F%2FCR%2F%2BG5SvB1TQk2fmT9eeg2xBWYxpmTJDLAey77qJQVVJ7yD9EnZt7dyz8NU2FYxeFlFc2cvGHFcVco92win2IxRA221Mkwx5r1FnNjH%2FiZRpLzRvca&X-Amz-Signature=78ab908a671c0444f4c33e322e1407d7134199f0729cb7880312b3ea4c1948bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
