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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6GRB4M%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQChpkmo0CMXEm6jdJtP7MCB2g%2Fy0H69eB%2B4XF2Vq93XCQIgcPm2ESaUJXR1eLkG4aPdUv%2BUo7fmyuT9GFjzVaUP1W8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCvmf%2FjxyxwHp9Sm4SrcA5hduJxR4ZWagkyxh2U1Tknfc50M1atCXYJwjGxbUoTAiEC6h2ET9YxoCkOTwFsGRnVqdRKZ0zgl7Zvv1ULyI0fCKK1HCqjlhlKGIeJVpvA8huPgFzzbNiSaS731uERdb7lpVxjhh7mEl0ky8%2BMqGZDlqk4bqNO7bAPI6r03f%2F495fBBC2ZqdBC4b8N9Jdw%2BCBmpB2lj4l0Lu2uJ5Dk47%2FO67M1lzviRxwoM1RzJ9uZC8UqfVNieOPFBmlnwNK80Sy%2FnmW4DIt%2B1398BbCVRSxkEaO15NV3NQsP%2BJPlGvnGyDtRfpW2rGAAnyZd49844PCTqaRvID%2B95C0%2BXG5xHel%2BhSm6L5iNOfVv5yC4aanPbPm6rc0fQyPksBkq4dEx8%2B0L5HcoDwz1q%2FcKAZOFhtf%2FzvYGo3RCa%2FpcVnIzOXLavog90RuLRiOm3UNNlSvToqLQ%2FZk8EpESgaabpRpI4CaHSK8Yn9NvRysaui6FvXKdRd9%2FQ0FbY70NR4jsINVhRjgWxoYYoCq19dfqySYxO%2FH8h5pEV1d0pPvxAbpy07cZRGoMgryo8Tw55nhmjbFOru3G0FN31NuKFMYVHWE8hKqhv13JlJZYL1zHMT62Y4rD%2BfEDKcnPcr9M%2FJsMHMIP9qMMGOqUBAtfWwBRna%2FpgF%2Bq00jd4w1ZoQ5sbQBjVv2w1VUAlqHghDobVgFf0FqdSzcuW11Kv3LrwmNFdPlu8QR4R6BWDog%2FyIbGNNmtxSI0JauwUYMHEE6nsKmhdWyxnTBeWlFtMrVPV%2BT9Jml8CVAvaXtKqkro0QfQybTzK4uSeCXPIju9eyizrx7ovjqhWDkmFwUUjVK%2BtT8AuWg%2BPpr7Ihi147AAitGJZ&X-Amz-Signature=bb622b16b8e83b464f33a32e520cc106b7e00003c97ac6b080586caf7ec1b597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
