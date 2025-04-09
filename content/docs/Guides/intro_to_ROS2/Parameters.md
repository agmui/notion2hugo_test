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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXVK2GP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDbwdWmzUUt09gyxeUp47uN4yAA7cA7c3KYEe9AQz5k1gIgStN7hsEbEQyDeEeb8Ae24bZlQ9vau0U5w1kSmxNbO7wqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3jiBVVPs3Ei7i53SrcAzjSg%2FDnM3mp%2FSWT%2BiOuHfqslm56hLzEDryE9D2JORKU4EVoRLnouSn%2BD0rRRpmj5PE3dLyVp1RL7z4bii1a5eCMC0y1LnXFovFDy0DK3tu1%2BxPaMt7jkQuocQyV6K36g8zs3e7GiHs0FN9%2F%2FCmo2USZd6htxB%2FxTxRA6fE6CG8nx5xDnQYhPGxc2XwjanFT2MV1cfu1SkK9CjhIw%2FBDCiz2r3GVOF%2BxDv37OZbEYpPS%2Ba9qp4oO4lXvXCc%2FS6ErBXomGfdTwyXkporvbsm2nxQZLiCcjmkahV%2BQH1ebV8exuVjBM%2BTa%2BrsxfloJQ9JuEqFuUYYSIydLEnLNPBLIv0A0JETBkGbWhK4CIeN%2FJxiBq1qFJcxopgi%2FA4XAXx%2BHGXIz7vCjcg40XaANWphdL8U6tb5LLRJ7UIqjE7rP0EyVzMoV%2BaQX%2BmExaIruOUlz4hcaDQ8FCqGjtTR2hxeQMYMXIG7jl1Dqnur1AkQrkJMbNTGkE92I1gu3S7c6EDFu6aZsFKMHcn1ZV5naFYCm0BS8rBPQky1253DGEGCI4wUYakurL%2BGH%2BVU%2FJA9knYxfVPakH%2FpJ%2Fb1KpXUBcH7j6sMD%2BOEZpimO73779HXZrsC9wnvezIEnSQKA98YOMOmX2b8GOqUBCS7TGJ%2Fch%2ByIWNDfm5Mt2QqbjkSA5bHGbcYUMohTTgTqy%2F%2FLGIsEWJbSLHNNI%2BsQ6sungKknA2GLHI%2FNhLTk1irqeFsci75kr7GBRREH38qmjIaRiXPdBetGRgf05TTp%2Bw0fXS%2BUkNpo%2F5pjO99nRV4OuheikpUImLGO5Va2qbUXVFXyRniRmGNkHB81vIRnmNjSCNRPYt8F9gO%2Fb%2BmSyymQ8wkH&X-Amz-Signature=4ca0b8a7216ae13dcb98ac45edfa425b683e80473776e53784777213ce7aa51f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
