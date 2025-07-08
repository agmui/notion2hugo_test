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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYE7NLLS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfZVcfjvTqMeKgPks%2Bm3PcrFvX7KUSaMpIAu8oslx1xAiEA2GgnPENNa6EjHnO3UKmWzubAB2GfqDOFvMeuGDw8lRMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrVcFuHeGan%2Bwu9vCrcA4xob0M4z36IYF1A0w8rL9zXup7%2F%2F9xd1ABiZQSR8fGObX0Odkr3QNlAgZgPiHyCFJVWsfRV7dh6hGedkiWAw23RL7BgJTGn9w7xz4mpviZplBtZQFHQnsu67Wg1dxVqQYa4erycboGb089M4MGuJHhR5mCYde3yr3dAMShpKKpIhcC0k%2Bl4db7qlgZ7GQImqcFw%2FG8kGSxrLxJxX0af%2BzCLEovcdBRAfIBJ%2BedJY%2F%2B7aLlL%2FxWIT%2FzmFm5c4m3RflVcp%2F%2BK6p%2FUDuvmQ8hRTQs4lG%2Bz7APwhLDdSoG5ExKZbqO8zLD%2F2dMnQOi6IP4oJMdWQKQrd0PMTSgOUpFM%2B412GEvNWNkpp1gwy%2BZOFJ8pxIVKVmXrCr3RLERNL2j8N9%2B08JW%2Flk5Bn4PRnDqq5xH8oUVb7C9UFD5WtfUpqwl2ouKYZhTZCZCP54Z2%2FnjbguNNlCBceJgMNqqGuNzUsFD07i%2FR4VEFxyzvUekGqEGuC6M0O2xe7mckB4669IdREJvfG7c31BBXFBI5fRm5smwCkzSVxn60mIMghvtcMfSAiGRWNzJ6kgWCLpfBdeKK5jyTfhwO%2BxW0Vhiul2Dr8zCNmWuzVxdGHsWi0FRLrV2eHy6OKoC%2Fql2P0PDWMMDIs8MGOqUByMWxSmiUGKfxAjAnZ3xg%2F1BpaBdFTSyccBoQahHCz7PH0p4R1VA2wu4HXGpP8V%2F9GRnQiOkgmMc20vq2iorFQONHYRNo9Zv2oMaxLHJS9fUFQvcB3FbvhUbo0HQdhrs3Koc2OAS%2B2yIx6wS22ofSSiBgb0%2B6fDccPZuDPtnNN8pNpmoDdkm8rvMVJ3NbBK1QtYdyQf%2FLZMu7UhtVbEJT99tRyGX0&X-Amz-Signature=a887a53ab525b166c12f3462e3acbb7f7dd159606b8ec9b958feac42a99c221a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
