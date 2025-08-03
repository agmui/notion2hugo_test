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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NMOZZD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2mI6QnkXJu64cWdIlXQA65LJ4A4gJbg6Wrw%2B5jb11%2BAIgKrWnT%2FAhjsgUzcQ2sxi%2BcZIHOsiIvl4ku%2BYVsVI0yA4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNEBXjOxWOVAOA1QuircA%2BdFvf%2Ffctkhuw0mRFlCACltTBwglAUmYvvlML14uW4b7bPeXReEjIGl3z9mAxV%2FLD%2BjaXa0dJmf0pfVV3x9481EqpL1KQoxxv6gO0jY%2BMsaLPeqjQUKtFn9c%2BUXz3LBOYwImcIbu3itY5I5u8TNOmnC%2Bj8QVU77IoI9TcCkj0iGRunHzSE85naxXgvvjvj3fgOM1DdiuN8KJ%2BLMKixu1E7nuiRjLkXtWEJosPbt4Aqf%2FUX9de3lmHo9AgTWnwBRGb5mCn%2FHDuWXtVezis73RGIRc7DsaYYlRkRy8NCwqT2yHGVyQurW6f9TU2wO42NCzJZYO89hzaL%2BKylIUqHYKYFtGdTEC37vZwgg7%2B9thch%2BYPhXyHbT0n58kidaFdFCldPDfHwENpTPRXpPoI%2F4ub%2B%2BJay4nE1VaSHRaf8JT9fjua2cwDSo%2F7SA1jc8%2Fts%2FNrKzPHN5f%2Bo7768%2FB6j31y%2BHtwPI8wubK0hUT7%2Fc1aZZZG%2BR6%2FqD%2FwjxU48vyltKnm646rkpLXQcfoYV08TmBmkCVyyn7HXY3SYI5FfRb%2FLtygkX1x386mmo2WR1A2B1rP0g%2BCQ3S48SYQifkddw0e31RZEl1wI2KUndtJs2BWaVVbCren0nyQ73f6avMNjZvsQGOqUBzBpCfYItcfR%2BtHhFSPeO03sE4FtWuPt%2BBqD5LwhktK6g0udxApV2z6rREFvWMtJsmBSer6iIiJsgAwO7bXkXlHrOYaBtkJ3bc%2Bw9h81fO%2BBlqb456UyuwVzngF434dOjAW7dKn0WvTJwwD4W10yof0wduE7FfNM3LiCmV18lyhAehP57zwutOu1HWZznlbMCAOY1pH4iWk%2FFTzWPTKMHP1CMMgf0&X-Amz-Signature=5440b1bc13cf1d958ecd8e8dd8989e9169b4cfa35fd6b9f697e4a68e5115d915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
