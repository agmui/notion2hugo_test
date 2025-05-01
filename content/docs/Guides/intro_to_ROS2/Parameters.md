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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6WRYHK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIE3GTZvEcwaLfBcMbTlTXYK5SgAVOZjMOqnxf8Df61H%2FAiEAsLTxMFFZz8kp0VDxa%2BgjWpwwOeYnAygMnG%2FaryAAT%2BoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3erBKiMA%2F6EUEMNyrcA25SEHEIpovfpY1dx0YWaRRIR5T692lVU6AlKNxePt9ZocUrbJ8m41Mf6Z8Y%2Fqg%2BfmyndWXIU0MTIt6GMZAegATbqigzx4cmLmt7T%2FPMVLq7Hd3oPlQKhcD1gkrUqDox7JEFXMN7AnbiZ7tXr7cmUinm6590kU%2BcgSumAUFA4H4zZ8elHlRqOTFQsZlDPmMdBSW41iCZUnGym91NDhWEKMOQDycIL9%2FgMkO4O0T142mG31HXrJkIL2JvpGkww5HON3yEYsWRVDUAcKhuQi34ppyxmcjzEJPEkcDdpzliDSALkgv3ov4yeendV0bGx%2BRRCxtYh%2F0FtEx9yvh46BKOagbmFIGKrD2lb981obiagPelBBllRczkWhAYutFz6jw92LfgFWMTqz%2B1vthyRNjCeK5p%2FdGmg1%2BFZktHpRiv3rLMH6FanAEcZvsDzbX%2FjahJX1aPiS1%2Fwoqf6ZbZrpFO83Tvk%2B3LfGsXFfMbD7ok7rn5%2BZF4nJNotyMJBcbgC1YTOtEleZrDl9IfVOvpaurhcbJARChuRpTZBHmBvWWjyezYO9cEG1Ots%2F4CmXpU5ETH%2FESlsjHRcbXanmofwOFGzvfdYEMR9rlirdvRCnVWdgafWhGA%2Bn8s1zgf3gyjMJ7qzMAGOqUBoMMFZWJhiFO%2FjDEejTcmL5rc6dIA9Acgchjiycouvs%2FZS%2BblAfgnucnEailO6pAqPgIfaSJ6owyKsmhw87W0z0k1rrsJW4DlRR6JlJyTiRb38kOriAMC4zX%2F3eQ5rdVi5%2BKJYwgObhZvD1NhEKrWfI9RtVnKq9N1s59LidI2NiHuG%2Fs2r%2FvGpWWL4raPXm%2FsSKQs4oI%2Bqmm%2FV7opXklIW96zmGrv&X-Amz-Signature=5ae743eab36f35f2f184eadbff87fc98d3c5fc77c0414aebeb718b6b3f9d01a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
