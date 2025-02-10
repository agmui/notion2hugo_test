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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CAWFRGU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE2F0SfC%2BIdwlv2igCKcEk2%2BRf0WpwgYC8ec5HXJ3A%2FAiEA5eelzTvLKo3vN%2F8wSaCJ8d%2FDedSIIJ6LcQ75q%2BozqQEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6tCO4YmDd054eYaSrcA33zZNQecAhaZ3qiPoM%2Fqixq8XHFD0fRgcBcofY968QN9LryczjddsYrwrKTkZzebNZhZdgJ7fzBU4xN5gFn7nV3VGp6OXuFpI6sqD3T9cIeOeQ2P9Irb%2BAKsNl940TLvDNm2r8brV9eGbM2zR33ChIstbx1Ygbx9HHYlL4l4pcmmgoznGRHVEOxEsnp18PohVFNAp5HBSZJ3V%2Bxw8BbZgUsYrHLlz7dwZqo80Zgf77dpqmQCzX9nXLO80KNEN8bteYjDN2mIoV3BKCb62E7ZwCGXLGhWAXaVCw5GZ03CrjgMEAon2JMBBPjbkA%2BmaOY9NaMODIcDIbsGfVQKaY%2BOm0niMWNQk1Ey9UabkNkvp4FPcAKc0x8xQhxDtKk6eQRpx0s9vfUe06PyGnuASEk2b6wIA24CPg2%2FEtgoEsk1Ao5Q0gr%2FmJQtTX1ORw%2Fun%2BZNl6cqO2y7gHZMR4bD7ZJ9WILH7Y9z2SFfuHwqDfYDmwLcZpaYUaroR8575uJesjtBC7GvnIfA8SsYA8tvo44Eqr7gwIec31fo8rtQg8HDumU7HTuaJ7TGasp0U0HMGxo5LJxD%2BkdX%2Bctd8fmN1pTVLpnqB0T8AHXnwcXVbbdtg1F26yqBkbApqvAU%2FMCMMDgpL0GOqUBCrAxbecRiwfYZc3ETQibNiAPGgyJ6pLPwn2If9qiIhZl5REL0Py%2Fzl4aNYmLF9cILyX8dG8GHwwrNVnFj5DQywdTB9kuw68TdTIqyGhrzzVAtAZiwAcBC2sLzTQ0VU2aYC2H3Z8IFN0QIsjtu%2Bis%2BM%2FWesk1tOLgADQmAq1lqZYhNWTC7lLR1x4UyW5PlxIHzFo%2B7PezuprBY%2BayDR%2FaKaKACeXy&X-Amz-Signature=f1e91c3e033f50fcdeb558af35e9ac72dadeafea1cf84d015be1ce5c3c1ddfc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
