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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVBQHUX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE%2BTzM02b%2BzU9czC56F%2BvDiP%2BFkoIaFlLX0iuYRqgJoVAiA2hIOlaAPJenLczu7Uek9my7sQex503YBN1f77%2FNcJtSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcDQhy%2F2sUeAo037LKtwDCefm3VLm%2FHpAtBTWpqj6Q5fa2Z5TqSg7RosS8tA1N0Wy0doUpn4tLtLwoMcjSOVAg6r8hdiG%2BtvBLECcgZPjM738BIO9NcnU7ByMyzepjLhGYUkB0dcuo4dahlFabkLc561ToLRI8iu3Y4yzvpUgNlxSN3ER0dAxRnQL12hZZTZo%2BSwwsRA7lqRFrL4UXH%2FIBqVvjZgtY7UEcs7P%2FBAyK6pjRI84p1FOLZtIE7WdLI0A6vfeTIF8rpDl5v7g9HQFLdoRXoEd31aR3SvZ%2F%2F1vpKjI%2BWC5jmooCQirgS5uO0f59U8q88easWWYbdBxLk1OKscmFyRI5Zg5olM7hhHTUGTkc4KPEUF8Wg6E5gwPRnN%2BkDYfat4fr4yh8XZcrUnmyyyUVpVRY2Cm49fNj1fJHpgzkZ953sbxsOkwfYo5JcHf6pQe3kTmagdlUyG%2Bgq57WFBqToNkx9ZiEUXERGi6%2Fz67cK4k92LXEDmZJ05mERAascju4r5Sp%2BLq03ICbam7n3knxwk0bIR97Y%2FstAq7PUIiqrChcZVNq72uv%2FHPCTE6ouZHHD4U5V5ctAnyhwOhEWHNegmtNbi85XflYpFH3m%2BTq1PPykHFdLVhDI0WkjH%2FV0dFCO8qhzEil2IwjdnRwAY6pgHL6mXW8Z1isxbIHD7LZgzE6oy1li8rOr%2FYkxP5Yd7JsyxpQ4j5f5dC30oOXFfS%2BSm4hq1GvbLw7%2FWOWRTRgEGGyaiaPBl25pfkZTXO50LuuGoZnzPwrBCN1DbAWa5ygGg1QXqV2y80ACjBwuTs%2Fcv6l3cC17aawkByUFJDLnk%2FTV6%2FCFv1V4Yp0vW7dleh%2BpumItM79oJoXbeShJlIDWoaznhZoRtD&X-Amz-Signature=704761fbd53522cc9523bf16cae7895ebacdbdf10f9296ecd963b03f5a46df92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
