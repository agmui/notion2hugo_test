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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJCAYEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCG4OYkMOxF%2FxJak3w%2FzsnHn2wG%2Fws56BfH%2FPzfR6wi6QIgSIbO5TAhwPjg0cJTC7kN6AKVnbx9E%2BvW%2FbqbDCFEeL0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwMTle%2Bhd3HcU3YjyrcA6%2FeWTz4Jjsjf2mR%2B0GLaIWc2sTaVQFrrEIY6MBx%2BI8%2BhBtntXS1WD4F6aDi6PbvWcTzWt0tOFwHmhCbFFShwZYfRIE%2Bvm9IPsmcFjBFGzv5a6MKhQAWGMuHpPusKAL2tNvnbsaPGbvRXZV3KdzVmuE0SUHF0A9CjSlRCC0r5ZU0btn5vmNeRDHVknK%2BLrnnf6dCI5vjVnDZxxLgickw%2FeUAJyUH0KC3E5jSmCZr6LeQBml6gMYvSJaP6qQ03PFXZkIFpuxppKBk6wj%2Fnvf9x8rx6yf4CQZTbXtqCZ7HJp2NUhQomoMLEFj8Ldncq2Dh42SN4YcTxtDvi9Jax5iDC0UxB%2FRABXERQrBAI7Vdh9yW2HyiqlBBnbWr%2BxUwsmjCPLKAsSaOvtbksXagv922uDh8ykMDYT0j682ssFC7kUJt4POKYXflrGocVjIgzKiw3B%2B3sEJEZfSeIPjz7XV988xNefUpZPaOuJVlpbkHU2RnwlVreUK8tocVtAeW9aHV9jwNOwyf0yMzoU0fwBzJH9aJlbcvjXMxVLCAPqtmO8bZpfc5VbLUrRc9PdFnbGqZAwVMheysNTWZ3wk28LEwT3%2FBRjDvQ%2FMspNruUCcOsQZixh1DcEHeickGqnp0MIGHp78GOqUBdHkre5r4lYX7OoIzzyuO16PNnBdoUC4QFU3RGsZcgVFwz%2FjSj0tzARQC1jDN4%2BEytvqk85JfuNwdE%2BgBwrb24gG%2BwOkvnMPVxp6ZJpVNxKzVpkbDSKInFpYQ6%2BEuAzRe8i6LNkMiQAfobVmCG5mW%2Bnc6vO8zpoH%2B4VQYJmx7vRm6Y%2BcWx%2FBDHwSNw%2BYQgjN%2Bkx6%2BbXnDSer36TWtYAS%2BMO9baeR4&X-Amz-Signature=40ed3e5393c6a58a218c4c3006800286cb6ad3f96648dd0a2d27068663a7ff54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
