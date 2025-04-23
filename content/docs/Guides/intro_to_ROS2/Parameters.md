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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW35XQME%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDRHG%2FcHPN8%2FF0clT1c347cTh6Fnc%2FIGTzCw1LZ3jpQmQIgfavXzWVsIvNzJ25XJDgJAbpBS%2F2rN7ZTdis5w%2BmjWWwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrM22n8jUKeUMgOjyrcA81Q4C1cGEq4Ga8V7XDMihOSjD9qJDBRF9s7%2BPuPa1Z0WAF25w6qHQGrv8bMEh5Wr4wWVyHYWMSrlnTt6ThXZO%2BI8kL%2BSykGTYBNL%2B%2FgqVvaLuS6sTx0JVe%2BM8kKA%2BSzGaLJf%2FGAOmZzBWnczgdCllAb6hHQ%2B36toTqkcOw567AyZg58NYPXAOsEtVD%2B%2BOQ7vDSvCr8H8dQ%2FvtKKCcHKhtYvgdzWY9Xg8K4W8TC1weiyRQETW0XiblwLBMz99oTHkzSz2M1yoKS9ejiL3WTY5rFo5TtAK3LIYp%2FNr6K761BYX%2FjItmL8F0Ox5dgX54bX3M2kNG3d8WfXbGmMWqe6Uyhn40RMJ612p%2BDep370RAHU2zyKEQnxAJEghnfoFTGf9z39FUtRsjokdIkPoJ%2F280s9bgkr9eSZG%2BGYFh6MuUGSKIG%2Bw0SFPxJfjZwwjAhKgbYA3MepKBZ2GnDHKisKl1YzuIsOrEXvF9gOUe7ICh7nRDmhNwOwziqua8AD8lH6kDHYlDbYfU2wtxVbvj%2Fx1CM8YFvLtmIUO5%2B5mS67EXU7GV7bcjqqCoOr5LNYrz25Gry5CS4Pqaf%2BcqtyrFHb5j23rVt7umptUUQuUjM8R76amfturKL28hq5vTZHMLqIpMAGOqUBkNhbBffsjVrYtn5Wcn19h5uNsoWuDOLi4VBbJmaUiKt2%2BL0qCXj%2BL9Q5ef2YupCWqvub59lUid92C1zaBaD4EDKFFPe6MtsTL%2FpJvoH8qHjMH%2B9EMzjDTb4Em0cq5erO0v9kSf15NaYS%2B3ElAxRT24rx1g3UQW5prjAvVPB6LbLpX2sUbJbzIxhW24J4Tb0BzyvhzLDgZV6zp0rjMhP8BJOFDDnM&X-Amz-Signature=c517d0cbd4c95f765069449061bb8c75260aeff4dccbe0a479d8bee894833f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
