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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4AES3D%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDLSnMTgReCMRiJU%2Bcq%2BVbsl8BKZPgDcTqZwOdiPswZsAiB%2BeFopeMLOzhi1sX%2B8GBQ5nCm3F5NoOQYq2b7MjVj9Qyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMbDUzszQqmy9EhwwwKtwDbXRk%2BInlgqB2ma9K7V7d5ko%2F5foL2RAalZpwsjSf9orlHSTYnxW7fVwsBKJz1lr8Iuw2K1QtnYso3ASvGqvUPLAqt%2Fo11rPlka6guCAJD4o7TKbdTaF02k6rs%2FZXbhIgvXVlpd2JPB0f3gPsrNJjchTTVPMQGPjB9JAomtQOspdWpZesCJN5KsajeZuMLSy%2FE28WYeqwEoUy53oL6buj9J3Yl89aMabsb2puQYhkyf11JXZW%2F8J4Pz4ci%2FcdouAQdVwcWCiaJXK6EYj7r8%2BsEVhjJxAPjF%2FnwELebZwnJyl2swqMJeG3mFrYgdIpV%2FltqlpXnjlsEyAkAoDUxjNBbXQCvtKtQcpCzr3Vgx6JflLNxgVXnFpY9QtBB%2BKQN%2BWtpaxJO5qWAICwo9sTm8BS9X1i45yEP3RR0XRHaNxSXsWAW6t9%2FHI1fiT63YpyJf973uloJWikzyLUOWLTk1eH2gNuL%2FqXC4i2WUdGQa9DNe3SW1NxuKHdqvl7qJQOPslkTIpECzg9l%2F%2FlX0hapA6XtbIVe6b7LGNsQJogsFLmLGMhEpwCvlAVfmEWwTRUkSDumP9EDMNp9kdEqT2e7W15xKHi0RQcW2zQ1xnGXLP4kOV%2BGvsmh0KLT2U9L4Uw%2BP69wgY6pgH2xXzDun%2BootQnzMvJM85UFkdJLWxQ%2Fcwpj9M%2BoH6TGzfICVxFFrjm6Ld1onjnIUeHfLTijH6Fozqh83ffG59hZ1NQsmLt%2BtfZI0E7XsEERxF6seAXO4GrOQJq6ACb2dadehDccfd8tPKOb2%2B5Ng1IqlOv36Y4ZloxlrGLk7LnE%2BSeLRSH81ZTJsvKacu8xmgI8x5fH54B6ZqttPpDT9M2mut04WHS&X-Amz-Signature=d7c3f4812356c600b9fb8bbca6907022fd140eac48825a9fee19b3525a685efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
