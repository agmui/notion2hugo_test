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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6Q2OSJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDZqwCqHcVG46Bq55Saqw13BPS%2Fb0Ht%2BxKNT0VvHolDBwIgZAMVbV6djPXrBod7fssLhJDlbk2V%2BRHQpqLKmNdzZGYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh9PNSoUD1M365L2SrcA1Nw%2BEOohM8yGL%2FjZ4%2FWV7zvicq%2FfzH0IUquHcgGGDpj0beD0pvvVpgHYcheo79wJE8dGcLupP4Pnhe5kjwT6DLJohM0KTHk7aaCxLixhXg4s6Qxv6BKquGmLxz2i1xlxEsL%2BEJfSsMrYXgE9DP5BVKutFbg5a4dPa8VvFsMNDgJbzOwhY%2F2VH0XosPtHhrS56o%2Brqy051RY4ndicwgFJWYGXinoNn7XQQXGo%2Fg54MThtbFfj3pLC8nNxkvoN5FNVTSb%2BGc3X3f9ozdczMtDMc%2BqbWI5VTfwDDuRXjZCJG2inkUXM3%2Fu0pFNLXP3En3HzOyRA6XHI6WWe9Cc9P1RrdIfja2HAVq2bD%2BMBP3fqqdQOs39EAvCvkYcvScFKcMPXZQxKJKGA8OaokIc4vXPEVlfce%2FbVoujZtm8sTtj7Voe7xr0oxxGll6Te3lmwWUNADmdYWjXX4V%2F%2FACEooT5piPvJh%2BmWGBwnzBjcLGYuOPrHsNp7oldje%2FFkT477GoyeClsz6y7hbVpGLoMxOBBMLZ3Eh0X9Wlll37D%2FNIVaJUXM7B6V2AKhnUxsas9w1MYItQFK2ebWEaZ1DvfWIjZrzrSGFP9yeJj4SDi9WLvbE94CoDAybIbSjPLPPbfMMy25L8GOqUBtaFeaC3lYQwF0dvUe2iUCUmt%2FyxS9Y7EE5p8OvpqPXJ6eGJAJpVv5LOC%2FPCop5iMScSfCs3K0rYv0Qd8PLPj5NrxgMtT6XPL2ovBy4eKodMSCwJp8IINcY%2BsIenpP8GrES2g3YzOiEe62xiB7hI5y%2FmUZTlkRFJnbKv7EnXyM6QPizf8yCbP%2Fel4zZnZFhoTW7t2WRXxa091L9YyZzFKJb8TyIIa&X-Amz-Signature=6b08ee4b657fae2a7516ada4b9c48456adcfac6e7a458bf5441cec77a13bf5ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
