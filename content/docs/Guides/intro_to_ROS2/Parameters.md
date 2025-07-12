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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFGEHLI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHiUrKKYDO5j%2B176xWfYetIFt%2BYotv22nTh7NCZRuouAiEA6QHYakWO2vEn2y0j8D7NWf1tm0d46Eade263zrKOSxsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVVeFZse6mUm%2B9GASrcA38Pkh%2B7vKACZQiWGSq1TsEVQAK1foJb8HVRt6m8dnMRis%2FjEbAPEeAN8VhWlcjqWFlajf46fattYJjoTN9P1CDfDLDfhYX1LA8j2S4zTrCQOfaeJbBAh2jXpjkjer%2FDizbNeUVAh8Uea6pVeSKHldWd2txvcYc8toQMbyjIX%2BlkxJ%2FOx2cZbrcW3AZQ3G%2BwwZQ5VKDeh%2BHmOm9q4smu0UQ%2Fk%2FIfG022WdOsTOyY0sS8g5eEEfMmIa8T3MyCyMhwXselZMxI8kwF1SFQyVa4qlSTyCeXnZOaiUl1tCaw1EU7G1r2e2dSJUmF2DjfrkE81facIOAOmsNn%2FkhxBZkq8WbtRmXh0I8Mv3S1d5Y393oKgvWulux6cm4XVhVKoYp0j8wOH1W8hMHJUBprN%2B5gWfgpO2v6Y6RrNehqr7UaiVpcylXRBs1qYHbCCyTSSoCrfl7UjJ0UcAyKKONFmAm1DIN2PjZBwGbz53CRya59WrnFdgC%2F426qTeghWhWHZ32KZizpZi1YivzcvdNnfFWv1tf9cmSaesjlv1l28iWxYA20Y3gLbLhXu2IXpBkH7tryUDVL0%2Bp6tqSkTkBR9rMI4a0YlwCkHhPVNTzIsG41yRH3qVn4yNp%2BeOb72O0KMMK1xsMGOqUBayjeW%2B3PmL3lQz3os93Cgiv8tJNo%2BFb%2BYqGuniAFUMtSzRPJ19js4ReWTWW39dcmebeA4yBZlQsFS0%2BKq1TwKrtk0vivMOOqnzt32mBSQF8WrO9PNzexqDdHLI3bmqpxbqyDGBBncnlOS%2BsMQ4lrPHyJ2lTmt8Y%2BWJu6zWIEEqX2VLuA5Fo4dcB1s%2BEZt4OOQqzyQrPjYyDYNZ0ePG3Q78QDPS8y&X-Amz-Signature=22053282065c1169c489a07d6dd97d83774fdde624dd98d56870c1ab8e10887a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
