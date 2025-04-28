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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5EKQ7X%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTW6m6c2wDcfDs5RHJLhSMMqnSoXRyvbXzLte5W0%2BFBwIhANCL6xtEFIZ%2FKxVLfxerPv9tpsF68LIAehlTMWIQKdX7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwX6VX1HbyoOaYjfzUq3ANOKNB0Cf%2FWerp2EeSx6793Dl35vq%2BMKYs%2B7GumMVX7Q320QoZB3FQrkxMNJJu0pUZPSY1MlI2%2Fe5CsQG1KV5msWRfgKuYj2wXCusd5MNfZcsPn7DmVdgTG8JDGGwum%2F4NczJT2MQuo0hv5jvNc8hgusVFE7R9jCPdcAWXnPpwvpELa3n3Dh2Z7EyS%2Fyv0N2aS9%2FtYu6LYHiaFj0OLo3n9OvE08INhHZwYTUyG4rb3lRFUdr4PKVa9sxs26QYcB5cRl2BullVAZ2eU7K%2Bauzgdk8WD38dRQepvgNNoRhTInA3xH3ct70uYvxWZbPZYw5Po36McKXwqYIPa%2FRGWzkV%2B4XtVAodGQQ2ohg%2FVLL8ySN2iqWhTdyNZ%2F%2FLDVzI4O0sJwX8LADTZ8j%2Fh4OcwWR3rDDuMKzYRuYIB%2BGHHMlRjVba2iFG83DLtzldEvuq3nQN3%2Ba4TfhYu%2B0NST0SfeduKgehMym%2B7XIFBXbNM0CTbHh96NfQsg7xfWnqNmFmsQW%2F7Zj52o5owT%2BQCNWGK%2FAotCKEvrEKApH9s6%2ByAcfC5k9dG1M3jLp69lV0x9Dd0OSx%2BIHGt%2FV12WqP00QRUEOwWjaoLatgJzdYVjFxgQhxY3Mg6sBQjv5g%2BfFmMjdDDh5rzABjqkAaZHnsRodJG8EbFTprC2eVWOTv3Nt14vPVfycPqPiznoyE8avci4aFKEoeuraFdRF1MUHY1wvY6oaV0U8YlD28%2Bng3J40zd4aj8ECuMDVFofjBRhEMkEmAm5v5zjgbwdFALiDOXjnHy3GcxZoXsQEntsAjqILAtlkvy5xtiB41Qn5oasVWVTAVL0pR4KEvXYVHfHWp5xdYvETUnjfqqdA9U6FiHp&X-Amz-Signature=7cd7daec9555c9e1a8ce651e7fea5fde316fa5b8516b70144e1fcf3bc5367f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
