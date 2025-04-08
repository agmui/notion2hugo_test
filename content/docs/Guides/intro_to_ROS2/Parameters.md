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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624P2BBWP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCi%2FPZG5qHWuUMmEWH1g1GolGTvwGFN2rxYV2AYHFQxxQIgEOlekUdfDMKH2BOzhY8VnHXmxKMwur5R5TvvN6V5N%2BUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEF2ua9wg3YBq6n8UCrcA0WnAezdcvqJHkG3mEb4MxBsTiCsdqRv%2BFMaQX3lFc14rbNIH%2BN0TqucO0aoTuLBAdMU%2FY%2FRAlKbpN3y0qrNAO%2FF2pWhyjPWJJipQesgsFdLonEMSAukV%2BFJvqqX8Drjj297WP5sq1wZTTC%2Bg3xm28vTzpraU7U%2B5%2BdgGFVCW93D2Wfc5mNCzdl7Emvk46EXh3%2BQLU6lDIuxnPbhvgPkwM7jyokkZCgvbsBXeLwr1PYQqQLgNlNZzBmGyvNZ1R1h2gBhaqbzxW3OqdcXKZHJcKGJiDx4nRK%2Bcy51%2FhWqGH0H6AqFZOLKXEM8dGop8Gogm%2FaVsyt%2Bo1a8mo5qhI812C%2BFMINSNVHmtYZdbi8njIorGJsDqjdxVJ6CSDAITGgdnmSpvuutCd%2FdDGMMxlgSGJ3ZOCvqy5GgvtCZUwdNtF%2BwJfFZQVWKjzLe0u66go3gPoV6Ar%2Fa%2F6%2Bl%2B6cjnE9VIGS%2FpllkF4aZGJogPIWCuN8ZB3eLm4%2BQ%2BCpVRa9qxOkN78tGt9HmUP2Qno5QX0ChJNBD%2Bihe%2BIVBd7xK%2FPa5bkrcVOgafKDqUOnqfvT3ZoVPdhXYC9hHjkzzsRUpUuQnsmV7BTDHe%2Bvgc%2BipCu7%2ByQ3xhii1Pczf830%2BxUeMMO7A1r8GOqUByX7xF%2F3YBAsJWxZVpVI2lEB5DAoqaetM%2B%2BwnZvT9U9Wpy6lAwLB31RRiIFaM9WqJWswgXi%2BrT7A78txAb3dkF%2BUCwizkYz6RUcWcLjkzxOYy9suj0PAOhJw2blgY%2F0Fe%2BDWWLmyrFlAxhveQxo%2B%2BWeg7zlgOijmuUljOKuJDnnxH186Lcm5VDJ3ccqrxBcd%2BBWR3i8XKSjaZDW8Da8QzMRH9kHd7&X-Amz-Signature=1e8a242f5bd169f6d5b38e207a3a1347f2f0bc82575534426ce472b114baa76c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
