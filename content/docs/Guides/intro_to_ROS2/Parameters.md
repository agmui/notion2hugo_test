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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJK4WXN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHrw3u7NjPF4lBcZlf%2BVK2if2IlYxVLrtmORmGOsu38AiAQIdpgMFSvUJqcnyJ6yJM4%2Bf1sK3Efj1KupDfkBY62cir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9HYSROx4k2Dkk04hKtwD8M8o0ouZzSgjv7ni3B7wsTQ4L61XjYdbast8IrJiih%2Fvb18NC%2FWHdxhz49bnAdv1Pr7vJmbv13MJyMFBdwqOS%2BZwzU7vHMUqYRQ6H0hIDpi4p0W8c126Dzx4wDkhBqREMEx4tnjNBZqwN9%2FqR%2FRoudzVd8SCEd7m3PCoJlEi%2FOgIfyMPaOKfhYTymyRC%2BV%2F68SBqmJQIlDHuy1Q7xVDmosWggLJZG9xsDUoKspKhi%2FfnKZV5%2B379%2Bz9oHD75ymgTfjvgHtfVz%2FFAZ8axlDABXLWDKQ7KsugUASsa1XSvF2cSQjbclwApgU7kVIHvFpEsJ0lOzu5HFrnHxZV4FuPsFk9BZqzeHt5AGvw9pIPWAcPH%2BA1Eci1YMdPUIhBFyGwU3EOKePl6VFwsZIyADt2nXrZ3MPynPpn9v7SAlDX%2F8GOEKdN4eggF1XEDvFMYhcLxG2I2zWUaK8g5qFNevwA0BMdrmIkyl4ZUOSzC7Tx8N4LDe9uimQ0ApUsWtpagNgmpgvDjJp83Y0wS5VeummgKUrfAKFBwf0cgd2K8D2Qupy4PtCLzUrjPq3uh69LHC2BjPF%2BiFsfXQYloAzVRpKyLv24Cq9CHxJY87PDmU%2BiuNBIIJXJPuEv63B1mKF8wkYbTvwY6pgHCHXRNgAbljtSjAa9RytpGVUPh8yCflOJirpGO21Vm5g9K1%2BEsv6Yc9agb4mVd26dC4Cie1V62ni9jxrlNglcyv%2FlniYLAoBMvIMAm%2FE1W%2BiVB5fZV40av9pbszv0vGQPbBPO%2FXS66qqbyF00VHGnxPmCkuT2coS205QsAts89ERmq6UyF06T8PvaCHdSFLifx7UK0zAPGNFmjvE2Msvx14FWeeLDK&X-Amz-Signature=3da2832a3e9243af8a0de36b1023e8237b264cf59efbbab0cf7c52d06c151637&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
