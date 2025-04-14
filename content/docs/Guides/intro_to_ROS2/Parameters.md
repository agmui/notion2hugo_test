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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDELVXIE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAAjuhcuhfaSfulaPRgZySTkQZzU91BmJdi2eFSVKG8AiBQ3otx0XYI5AbfC3%2F5Pv%2BsdfQAv0lChKL45SdmmjDt0Sr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMHgFotLIHdWNtjwBLKtwDpDBXDq%2FBUe2NgpW7w4bukocHnz1kuJbJ%2FgU9WzHaKc4dja9VpODU01pmY%2B6%2FaRYlPbi7n5AnvT9Ire3dBTV15vyBz4uvOV5bbgk8RWF0o3HyAmIbVrAahaWVc%2BbkvOgiE5ETwAOpCv7YoFboyLo03G4TukCldgAZ7GerndD4%2FUp1pW2BsDxHascdLzMbYqdrOxqulhS%2FreU4Z5FjW57foe13vAo5PzgH0pEekl2E64vgdHkq%2Fwb%2Bp0hQfNNTzqP31wgZgELc9RxcbzUJfICyo5Yj%2Bbh1Z98sOwKJSxtP3t8wSdY67gqX%2FXEIVnabRF%2FBLVDQdm86Qb1AXenlFi6yevNlankQU79Rgvo%2FxsnNQYA1gps3C84dWsad7B95qwtmmvsnJktU8%2FS2UCBu%2FdanM8oNwDlPhXiSD1qd5S1HKow8S9AbPSnPfzm8KQmZn6m8wXH%2BTRvtXd0iCNW2TdU5pQnKFdO5Tnbt%2Fc7YA1r9rjt8fsIykuZDRMkYf5PHFgH0%2FFbGEx%2B3ep%2BSF8CP8%2FzX1wrpR%2BjuFRPPzYEOMmsh0rOrRDUzcgEYKC6k5%2FbB4Wp5w0aj6dNmEH%2F7e4Uk32whWHlYpYVq6%2BYB0vT5WUvV9dFS4UozvoNZF2h0fLEw7ZT1vwY6pgEDg1wDwKRB%2F0zL%2B6Qw4yJyXGA141RL973tcM1GT7WlTnFx1vpCsmMBwhssch5gE4oe7W0LfrsCKLpovxf2pAijuVMTGXp%2B%2B2koE5jV81omgcBmgaMlme%2FYukaiiP7sFlUm2MVwobEUE3dkJBG2TXR%2BKSjjZ2FcLwOwRZOfTOIuHHvcQ%2Bl45uAj%2Bfy3%2BnObCcCZDj346LtA9UaKBf%2BG%2BY1sVNhG%2B1vn&X-Amz-Signature=0134d8f8ea22d72b894c5a5f510987685e051c7fda9a5fa7e3a8bc70f9643f60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
