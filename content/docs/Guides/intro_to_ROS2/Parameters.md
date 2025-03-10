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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWZ24UI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCrx0ZdSuyq9eboLP%2Fbyg%2FFV9YFLrXLc2fkKveQWKal%2BgIgKLPi2KX0K4PvsGCr6g64cH%2Ft9dP%2BfOfGkegX6mCYbWYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAkq8K%2FRKO2yRZ5pircA9wk56AvRpOQgXM74jOs5iZhC26PYJECV1oReA5rsZ150nYta1xH6q4OLBHeh%2Bivdn7WTVwv8VxFDPvIRgf7INtFnssqq%2FuXgLpEnX%2FHhCOBAYqGVMBMl0ChqnISiCTtC6JwixlZ0KfxQUvZYPPvB4KpiElTyJ0Zk7R1EtWIXbOvY7PtmxceFQZftxVnu40G4MnBsYxZnUo4p6Loi1eAbgcTKdhgUDrk0zVc6fK8eNJWayce1D2DpWJAFINJdkGDo4nzrGpTNIbTKyN0A4g5oXEBiTCgdqc6sqWU24lYVSosGXFL40jSJD%2BY%2FA9GA6rLLUfLngSFiSHjoRTRW%2B%2F%2FVADHSpxng9L4lMorpY%2Ba9AMcH5k5jzeYZb20I%2F2z3xksR2x5lkfUJlXToBm5hX2Yci80qn0V4JNKQkpvXAeg8DaduBzaJX6QL1iLp13BNm7hnVVuKXURd8uIFbYvzQbO8Wo%2BFF0e9oF9zAIemqVDtWpHgJtprbf4%2BD9k%2BmyXjnLPk%2ButBm4Qi%2BLFMajkpQ4DrEBdyQszn3XmaP2YhG1iTWyRIAIY9bl%2BfLWNTlCT5RuPmkTYIxrT0M1s1kgYL72Bjwr1OXKZUwVunZxMtuPoVe3o1lN1%2FRwN3Oh2YqPlML3LvL4GOqUBXuTw%2Bzey5IntxqwYyPdGkpQCY6cll3Xl7ghaW5VLS%2B2A8BY8CDyR42PQylAA6g9njICVvqdQGdGBga5inbr3vpjVvqG0GOEbb%2B76iSpOATFT84Ljs%2F8huCqh%2FCw396KfJWKTUp96dUdGoIkNd2hEo3WUMBL3D7qSrgW37oqJjCJBu7OGsurWivJGnBMxSePH79S%2F0uQ466AZP36fIsp6zqBCwfRS&X-Amz-Signature=1da8a7a7015076eb9380ac597b8bc52cc79a53360026c5ccfa672f8989ac0d54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
