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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWN6E7A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG71l%2BJnPosz7G60eeD8EICpcJdUQ0mFI6%2BPHZdv7g6iAiAskOWHdai7czd4cAiiO%2FB%2Bx4hFWUhaZcMRPj4fOKjmQCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKBMey6f1Ype8XMyKtwD%2FFQ8dIZfiwmVrEkMfeKHvlpF5w0bfSR1sK6WH9eA43xbPwdAFiHNlTvODiph%2F8xa7lmoiq8sZzqc8suN7JxEHSZ5uQHxCyDhJV%2BkUvS8zEFGYDPdnkSDllG8zM3hI635uNGGHIgnACKJpi76XucI71Y5AjAhTIK5OIGiHLZZaiASEXttvlK9QV%2Fi%2BXBJB2CJQHmaioKtX5cX%2BS2bA%2Bfo4C1u6QwBkQvfslTlcncy8zY1goSNL7Yhvt2b8Qsi3GnC7zRfabDe%2FL9dw1wo6JTPvCNwD6nhRWA5EqCI3zvnvBWeHPAfjvO%2BKgVQtTAGO5hYdtlHC3o%2Bfox2exNerEGjAPfwrTncqj%2BUlklBDjX70bNTFrpOK2MKnxjlKGpMISUYi8A5p1L4oqZAipfupTUomMNwW%2FD%2FkUzFbzkXr3G4gzcY2H9KYMzmk76OCncQw1hEq49eJQ5yOZw4BIImelWFeOpI%2BvmW6P%2FpXC3%2FjF0bewnevSMfCr8Ed59B1PTmWtiN5g4qX945H8Ic5qqqfrMeTrBraUo8KPkR%2FGuBqp3ub%2BL9ckQEaR6w7Mwct35sH7Zb%2BY6nwhXsE8vXfJP6MJAUxTbZHwyuor5lmq49Xwa%2BFF8CESr%2F0kd9GUEQLxAw9cfQvQY6pgGUDLXhJyx7ie62%2F%2FUxgjOEm48EkB0AUEigr8BKqj9WD0fr41eEEes3gwfI16cu%2FvXwu2EaePnLoyn30IKNegXyVWNAsf2IIQWu59MURz1jqdcV2F7Vw8nq7VBmo3ZZQEzEv%2B8fbuKfu5UkbmQNfyTtRNRQfcsjieK%2BGWaDbOrECxtqINYbxxia13u8sL9vGAXhZyd8aEK9krkPWUEL3%2BVjGDylQ0dx&X-Amz-Signature=937c91c914432c0dffc68b5c04e17d3e092fe500800f769e7fb921ade6da19a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
