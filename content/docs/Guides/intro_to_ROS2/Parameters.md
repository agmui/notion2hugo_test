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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VRC7MN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD9PEQq2bKAN0q09B3DKipTAX6WgMUEFAuh%2Bu3IgElHcgIgCYGnTpmDhdZihNXIK%2F1aU97heao9Z2pEH97WW0SxxuAq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNGbX6F4ekO9gmK5PyrcA9ABJlASBV0PTMwxk1O1Lb99VmepY29CPFiiGPajLYxy82Z0nCwb7AKBBT5eqjvrOexmp2tsm9f%2BLrhahraOoqyc2hS5jKZ6EIJh2OPwFe8IrRqGFlo3pw7OoX1TSwyDcu0cLtCiOF%2B5x6GEwKGQ3i7mVYuGjZLdmBpcf9MJGFvvARBUGrce2UZWnWWY7mRbX7FWt1ie95472fd4Cmhlzv2FxQ1xXl5Uym5j1Gjpryr5%2FjIOAqFWuaLCmgFtePjrtilCJT0gGYmCItWwmSkeG2fqm68dIlq11oplzoFEeQ1chvN0oakO9pLIqaPrkAvsR74QLU2Uw86D997q%2BujeG264XKjzfqcxR638rqjn7zlTiwpBIhcXW270lqNPxZ3dWiAGzhTefCh92%2F18kqeSbZXACEsyhX0JaRW9W7u5OtfbZJi%2Bi%2BT29zEoAXKYD11Tjm8QGI5hhSNhNQW2bdxhuQ5P5BmiIz9feIysq8%2BeGE2IU1eat24E6L1aziwHf0A59KXuoKGaKqTi2q98hw%2BJ%2FqKPwBGip7Hq3uGcyYItHuC1DiAUddRlMG%2BwvCo5xgN77JkZ7jDABkp%2FLFKQPFRUyS2YJWLVu4XPHXx79wEFZAQXpkC6nZsRNiPZ7VySMLPps74GOqUBvpdE5wnfx7qvDPsJLWcf%2BA%2BdE6%2FCZr2fteeEbhKKNiuvVdaBmBcuHfGKmSv5B7Tw66o7Lzk8OE37tmHhIWep%2F65ARKyoISXSHmcmXpFVz9MAF%2FW9eRShVbUZqtQaNempoo8zkU1yYRPHnqFxH9yCVByhJHo0doPDKQx8V5mRVmZCSkbSLnqvhXM7Fobv6iqJBCh5NqBi%2F1EdZd7bTDyJhNha6Yg%2B&X-Amz-Signature=170f8bcd98df8e5b3dd080fe443185dc01bf18dc8dea29701630676579b6b5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
