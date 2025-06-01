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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVOW4RG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFoavL%2FDlQ6vtyUYwukraCWwovH6AOm9b6E%2FoOeulkFsAiB0GVtwcCMaYo164rL9FDFBou1xpp8rffyWCKnBOYWRWCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLS4wDl%2BWdsNNNif1KtwD%2FOkTVsg7FJ8eWXnVAzS9ykpb4%2Fqg5%2BTKnqN3PEDvc8uy2k1ckYCD9ZLSMqUYgeHl%2BMVn4cG8E9bYfIrLcLdQgIcq9gD%2Fv%2B%2BJLoioQ7PTWfKjOLuGDLK4rE8tmrS55pslApojknVKJYr1vacxAj9gxkuwage%2B8luJWUKgGjDg23%2FKYxva8KJsrQW1marr0Q2%2Bt65dNUM9sWNIBmMew6kGlyX1%2BrLTpTLPiIQa86cNRhc8Xbj8Rcn0f%2FclLAdqmVL3yxhOyRYjNMKatUMreIifwtyvvx7xj4bySIsY9f4MK4Oxfv06asAxlzPji%2Bf1mLsitqUq1qtRn9aZiIYg4tR%2Bs24nQJR5owML0PdE%2B3kfRdw8%2FPAkct%2Fei1OAb3SPoSU51L8E4MViyqYzNy2UOwla0%2BQrKrqJxBFPKVI1pgV2T%2FeSXqNkKxd29kGVnVGpvFIjipiPZbd9st%2FhCdoRkyJfpwIepABST8100Hg6wrHdSThR1hIrL7pfqgtZ2%2B5aya%2BaeQXBcK6IdZm0Z13YrB6LYTewU9ii92RfI7%2FM%2FANxqjrZpZVrvdciQ3NhF6gkJksnXw%2F0m4p1Kkm2mLDZCVzdeiX1CJAHcrgI3rGD8LyosbXvPwZd45%2B5a2JK7mcwv9%2FwwQY6pgH57S4u4FVQHbes6X0xVcTI186qD4UDVf4vuOP3%2BUSFYYJtPQTwOIbyIC00NFLujFsfHE2xybt7i3WSg80WEX6LWPSqobLTU6CtjYQVO71dlgtF7wNaDUzR2PClU6AFpS07viPj5kNg340MUUy7ELL2jXO6%2Fgp5IntMV%2FWBw%2F5pzeyeNBo2ex5Tte9hat46r6ZM6JKoxjJqdvUHlqhVrmanrDUWaIax&X-Amz-Signature=4640e548d7d13320cbc6ed4ad95dcac17c6fbfe2121f5c69078f51cc781920af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
