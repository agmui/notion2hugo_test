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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQF2OZZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDJpcC9KzHMWNf0iOFpXOfXrXWSGkIseo0INB5WodLVnAIger98aynmpDlzImgLDEUU5OUx1BW1grARBTZw8HY2zNsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAezbhspxKIUXbFlACrcA9MgfSjXOkUS6A6U2BIqmTXtNJ4n8LP7mrGbzmicPYnR2veaYvZG48WBBaRLtryCkJ2Ov7UwYpFp0JaCT4X%2FgNrUuIFHiotZHh3D96RqTdjTJ6vhxG1rAXimuvgBo%2BlkJjbQoUXoST9p35xC3D4hlcC%2FiOAUFbWb4gaAySpPHe85cX%2FqLQqo4Kunr5QbMBU1%2FjnHxoF96jbJnjFE1WnHDHK%2F77OvlOmZvXw0q7y5joe1LffggXYtvsFJwCkzAC%2BGWuY5HS1ebp09F32Rjf2zZ0Wd3kpcpHJV8580%2BRQPVcqPKG1E81597fcCy2wYSFQp5jx5tgXkzHX%2BnVYwAXpgTL3I5OA7%2BqQJFfxnJQhM2gmVMKqJtMigc1daPc1VuMjkopLQj5sYSlhjJk8IZ5KMCal1umiiIN2bRfyzR5ZzS1cljAeTgEaCQqQX%2Fw8tYdc5ou%2Bo7DU940T%2Frz7cQIvgYt54I0Sv2vjDiS7fkPqAtE8On%2FI0H6RaPoFBqKCApxNPEmJaaKOk4S6A34PI1walgQRobZ1i%2FB43L83kYtG3Zaz02iytc%2B9sWyq6RhdVmkQEKp0pQDQqJePlSkua5M8Sq7GCHQHpPeOBOrig9z0fyRV9x5l02u5N%2Bk%2BVudc0MLCQnL0GOqUBzZIPeWXAVfDRcsPLsl4ETWf3wpTDeN9mL6ZP7E9SugjE5gXn5t%2Ft5N8mnV9I%2FwI3BkiF8ecjbO1s%2FUxp8Mzl6JTSFB4jUpjTS3qIIhcMfFt3tZJfNp4aXWviptRUYARxJIUl5TOXvFNZN%2BAupa79X9fTRVVi%2FLV1zHzCGOIj2CCAt42RRTYDIIjr28rnuqg25PXQkMkUT8LcLoM7y9uPeB24f64d&X-Amz-Signature=fe503e2405e0766e94765d81d140f5172b305b218f4dbb4f88748dc443fc8643&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
