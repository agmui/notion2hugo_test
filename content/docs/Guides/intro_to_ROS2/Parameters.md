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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7ORD5W%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF4gNG3%2B6YpddTYfTfGCHpidZ70NshvDPonJaXt3C%2FUKAiEA%2FTUGSDEv5Zpfk8OxqhTnBhbG%2BCuR4a%2F5GFt8nIy4suEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2F4%2B5pQpYV0MwT33SrcA5vwUITbEIFwEqEOXh4HQxVi3Vs1bKBouB00v9BXxvsErcW5gedTJsRwRI16s8aaW8cHgmXU5XicKH2hpaaS%2BN8RUu%2FFsV9BH45EDdupHHm%2FR5eFtbyzcM%2Fl1YuPKR%2BBckHoFUIUhYDqTYmnBnX3L88FmwmBjkyU0J9xoNfT7TKwjMmIbWPWxlWSyFPAx7Y9KdqTKaIfLU%2BKzUEXj1SZS3JN80thQxwLDCnk6WqU1o9US3b3%2FLHKE%2BefFHUDLL5HIaFt5XTHu0SAFVfccp04DPk8RiFt84BF3PccSG2a%2F9Yj4iVFT%2FsYzjpDPa3qG9Eet7gcGff%2B%2BFpeV%2BLlUVxnXgMKz9DBJ0rVaTO%2FiPhaY1GAX7qTiKom60n66kdMgHQ2n1shMRfBSjbhr0lOrkMQlbWdZ3%2Bcf4o8CKL%2FteVvaNwD8Ml0gu1XuSlB3a7Swb6Z7nfohCIMDIIy04xb6HhGrfl1LlT0J8ffOUsVU5sre%2BTvWrJ7jMwIB%2Bp0d54jI1fHVzriMi8FaV9%2BxnaTcYCQJKWNSuIYT%2B0aU%2B3wKQVztZajAfOLWsNM7m8zGCHSPKV7%2BipVCh5OhB4QriUPWh5gm73a2VdncgitYHfUFop8P%2B9698ZPoqHgauZDvqrOMKS81r0GOqUBV0pMWlVNpID2Q3sCmbKaHLLwu8pva12fYIwWyyp54ObefP2hSFSgJ%2B4scCwPi1V28XxiaC8h26QCo3VuP1tgdXw%2B48aElcCgzwwiznwKJ%2BswMLALtLgIQByJut16DNUNsBooiWSO5uSb9NHL3rhTcVXVg5QBYCovAK7IgNLC1WAy3BlR045pleNhwXx043NFo9Z1auG4Sr7vjFc47Laz0RLsKPOm&X-Amz-Signature=1ebd3a8de02c7d81da9fead689c6deadc7105dff9245756e622361ef21cf630f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
