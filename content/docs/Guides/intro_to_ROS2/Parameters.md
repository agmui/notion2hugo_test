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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635L2ABMA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa%2BSiO5Fl1%2F4Tn9gXBkJuR9kSG30oBga6fb2E8PpnXSAiEA%2BxEAwgHyno4btJD0Qboyf08wvBuiV4n1tfaT7HvNp%2BgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh7j4Df48IC4Lei%2FyrcA6WuQ2BFPHldSja%2FrTWdu%2FSMPBdWyLeCMwvtzeSyNgP1HHQ2OoqJinwUc%2B3xx3fhXwzR%2FFpvJXF17sWYCj4kJDRGNbeAGOwnNg7OQRgwBkWCScGLEM4D%2FxU2XQl8ENbNoaXP6zOMu0u9S7CTLx0HmOVQYUftH1BMlC9pEI6fzeYzbwUU4dkv6VAvmOoFVLK0JJOS3gtIWxz4S4KZLd%2F0nw%2B1uT3VnoDcgeEZRq597mjU4iU3FpeH2RLj4XGIN94r8wQ19Zv3viUElSGRqkwsZZYVoJAaPFWQGvUmmsGjvyAzCOCq%2FUYyccutBWu%2Bvop7MK4b0lttPTi7zN3mqKUxRlIaR7vaIA5jWkvOmt1THK6VhO65kmnI3UBDoBmO4zTpuWoreRzhUg7FBB6uCX1hWJHhozyFyDFNNWzkBSHUxziKjKdJfU5SerBpIDb4a%2BqtV%2FNy5KeTc6Drs6tWKxdKRFhCR7OsF5EM3lkY7RDuBNlIzzNXG30zvu9ISEWKkKhbq%2FOQJjVHoW9ZkZ18%2FQ%2BzRHakb%2FLWK6DRNLCBsMgQprJ8BCgpkvi%2Bkx8JA2nigmmW5kHxavR4yaJjQTCMmY1dbtWd9ZB%2BHE8jZke2kUQKMLoZjbse8v%2BDzGFXyMo3MKCtq70GOqUBvDc8SCysfO2I3lNKuXys53mlIob%2BJDhrtT1J9%2BCUo8s1zfRrCp6MD1ji%2FcICLf%2BfMWnnOocbAVeHfEsmvWcf4IrIhyfFv0%2Bebf2DJALx28y%2FxI7mnoP4svgva9IQAgu2DkF3TRfZzDIKucb%2FiNO2h5Jtr6m1bQu5pYabXvnSz8dKZWq%2Fsn16kE6qyyKosbEC4cbTYmtaBKa37zk9uj3LKG0NjEiF&X-Amz-Signature=2818031dbedfa855217586b8a50925139ae65a6fcdb1eefdadfa4feb0ffb5dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
