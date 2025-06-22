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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRV7II6R%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD80h5YtJw4ZeLuxThfkSd5dvj1bRIvoUqIVC5N1vHgaAIhAKsm5FScl%2BdunbHD6JLzqzh5rNhtoItpnqka2IAfnx52KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyPhtYHqah3SH2JLUq3AP3kb8XQX%2FkNOtKHxsXYwy68X7QGcEMwH9P7k17%2Fz9GiTNuA6L%2FZeCvtm53oCyC2l6YYgMXBysPxjoYMtiMgFb34%2BmQbB53%2BWcKxo8wBxdX2lU%2F2WsDGZON6ZK5213lNy%2B2D7gFc9jA14oYF%2Ft5qZqQz0JsNjONzMHvaBMFWQfE0sVVIY036ZC9pu7A52BH9lun7kpXRDznDiBg9befm2OaNITdsC6ZuyyXlOMw4tmvLjRlbrlggNbINMyWSDrkjR4rGPSoLki5QL51pgVh9O31WHNSch3xw2MuYc2GveqopmJR13VX6%2Fd80tV0h1dHsC6ksAluOdLy1A5u4sCqe0WQexpbsgdBTHh6LFFJ7xvxfJ5Yk1dUSoVEVWPzkec56HsVlAthgeQNzowxnp8YGSeqNV3ppTM7x5zBplJN8oPj0%2FWJCTzUyxOKaGhWpvOcOmljE3RMBSltIhLr97CCKjK6rrk7yldDAc1JR4SqxZu6ddX0mEoJVVVP28Lv1l4fFEtdWtjUq12HmKmQAQeoq0MV0k8GcY5j1Rn8IDFAh3x%2Fdp%2B6AEGLhO1TXiTPg7nK5WaKfAHX2c%2Fpni4URyZcdCrqFDk0kjBfT1znaaOeGpB86EjHDqHkzz%2BBQsuGbjDZjd%2FCBjqkAW7ioVYLOma6%2F7c075v7q50Dryr83qKla6bICW49jnsixvCbZGDh5tIf0vefVEfZoaXnbc%2BP51iyrlyCgUKOUEY1DXGGJh8naFltEebTaeqhi3DNlYMOMrGq4B4ALwYFN6U9ZX7iVmAYJrdaaqLmZubwd88VJ51XmBIzVGXyvI9SqPifoXrwYj2NGmbtJtJA59RojQyfJgHI6TMACQTdB2tdcQIP&X-Amz-Signature=b8651601fc7ff992e98ac0e212f156c4f4a51b5dab05113a37e0f59da9c77400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
