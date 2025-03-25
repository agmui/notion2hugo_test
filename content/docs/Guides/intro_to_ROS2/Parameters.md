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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=80c2ef6a165792b0d048a57de2720ec167c54923fefcef3e8d6b4799783564a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
