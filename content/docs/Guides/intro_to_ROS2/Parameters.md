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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676XLS2MQ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCEeQdKQz7Ibx55JsU1D7bim2%2FcqAk4VRzmYg97CVkmlAIgFl1TwVWkhdOrQQcFmuoYCx5omOwoS1HKGOHCx%2B%2FfaB4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjTPiBZ9WuT1v41YircAx54oGAvBoUMT5Fc1Wmo32qXl9n8mhex6A8T6AJnBKTAB%2FeiL%2F%2F%2FpH92b3fl82kPqlH%2FevWjdIr7vldZhw6lJbS3ys4Rt8S2ubnUhgrbpz4tJjUrL6Zb8H6bkHroDI8SxfPEllxa99WXlQjXX6LGvHgIiYEPmKJJgkWBE28t2c4YECJVV4PgVdo57APZdumir6oIU%2FD%2FUahjAUCTwoOjt6%2F4DhOQs%2Bk984eU1grTAXU3n%2FmIgglxgUPo8K58vP1ApzuiXwlLf6Z0bFo4gvRBjhOoJxGTqr%2BNM4AOPABeHPUxo9qrxgoZnkvMO3%2Fscg25SIwBigubkZV%2BnqLmtTiHwwKTGP%2BsCnPzzJP64%2FRpRmzRN3X%2B6KvAK0fhA%2BxBXwmBUxVvI5k5Rwoh1FmZvRAM5i%2FVW3o1jlpDtutCWjfUYtSIzBqtxrgGSllasclokDR0SHoofPHgel6oNHaWaz82UwFIYR9xI3gLi2fja7a5KTxM4rW50CAcasIvvEYSNEkpY3Lx%2BZkqt5PfpVHs9skv%2B6wjZwUz%2BOdyRN0YOGsTyiMx2etE77Rc4em3UwYP77usP19hDUp1bpqwtGkCC%2BKkezTukpmO3TI2LLzQMLhBT3g5EpIn1lcjzd%2BGcWI0MJynqNEGOqUBZfmXzYt%2FMp9lX%2FOfDsuYeuSxdTApsIHhgHaquZtOLqEH94NFXZJUrNVPR3KcY6iVUe9WR6gPZD6Ig2k4xR7x2KK51VdewEURGT9FnNG2zEIGfvaa38jw23Rw64%2F1z8n%2BZ4my1EhuBEpwI2LwhZ4lPD5GeFyh1MPBE8atOJUxWt6MvWTSZ4k9CDQO%2Fq0rrgLEBk13VRM1OpQEeTAIo12%2FKIkYatJ0&X-Amz-Signature=e7370bfb185fafcaa07250546fbba4e69c290dc3819749a79f53904ce379335d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
