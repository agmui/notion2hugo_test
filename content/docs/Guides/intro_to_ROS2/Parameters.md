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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THOGI3B%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDfEtxg2Edh1QPmM4GaONz4kei8zSECUuXqgqCcRy%2FUDgIgb7ZywqPR%2B%2Bj5BOX%2FsYGSefxzmSwD7ZrIeljLd9lEOFgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5mbUm5hshBKDRGtircA4K2x320jscn2ssWnmn2buWEktEMlTgfcbyq6REUG8rGg2OiLhcrCzWsIKL0TrjrIW6%2FdnX7INFkP3ckqdlIVEdhej1GvTfN2oYXv%2BaMEfcYI1NHlmoUBRVekCLgep4Rwo6SawJ7X3S%2BwyRO5ZkYuVID43DOXSpr%2BFKKTZVW4J5n7s%2Fz%2B%2B41xgUYS8U5LKUW7%2Bw2CfwMVqq7X4NYskPyWDXEabUhKg5iNXFIiw7dlMgIBYn45z1G3F4icx1JZgbUYbz83N2Scp1DRXSfbz2BjzswqvzJY7Sr8Rb48T%2BDur7IkaKH1gyI6OC0ffdsVhSG0dmOoB38u2%2Fg%2BiIHCajIdc8SfTVxA12mxWj98y%2ByDvgHyLUVJYefSIzAGV8%2BbILCudORz9%2BEz0K2h7sny914NZh6%2Fz7W%2FS%2Fz2Uly0tW%2BxIeqMWul%2FUL0%2BGVUDx7N7z3IGF0ASl6Q02IUE3IHjDy5j1PPlEtf5E%2F9ekhkdO4YwmfxYRjNfeKJNcRpUtOhbYwRWwEvkGDlL4IvsC1H0G%2B4a3K7tpvhjOiawfMR0O4Bc1dz89QWMXDBHB55wUa1HYhVkzwXTtVK46gNO467UrFBceee07ZXvnVozIiAFgWpoGiRNBdmwKCBMKwunf5vMLv2jr4GOqUBQ9k7X%2BoBBweS3DSA2t7QU9jUmwgpqBOdQPL3ChBBdo9Pt%2BtusXSXn%2FovbQZxMWle9kbxWeJHmw8kA8n%2BMNp116fAHj07d%2BGupGAJsnXJaOPHnVlaVbof6QF%2B37B%2FzH38IiIMD3aQ%2FQKemcWng%2BsBwQWCQerOi9iwnU0SfsX49jmt%2BvKQQ7G%2F0l7qWJlKaBynqcTUMZWxp%2FZtnCkJvy4oKm66SI6a&X-Amz-Signature=113ca39fcf1ba0ad4130eb46b03f2ee52191cd01fda62fa15d49be0b672b6c91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
