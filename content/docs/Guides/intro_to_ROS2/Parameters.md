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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2R7PJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDM8CgTdLD3BLW0cbdvQSBTfYDTjlPFSWXRv%2Bpm2Xq8FAIgDcdFVRI1Mq%2FMngwVatszi4NQauLSGEqDr9LIvYDuQ3EqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD%2BAnnHBJ2tveX9ICrcA7mBhQbrCYzxVcYOQrcbmON9pH3cI7GPIM92oj4F4HF1gFIr6ZhntIJ0fdJmIoGG5zFOWLcBUVsGS5obxfaIPSv5Rzw3MXNR%2BbrRlm%2FNZ7FN7DMBz9Van8fCiyqmQEz58%2FYzz2VbgLB2VwyqKGCHxmPqUyPjBeg2gtfq%2Bngsc0AmXCJCQVI86P6hwPNNjAepvvgrblNV1lWCcddhtuaQ1Ypciv5C15S0d4hJt3kdW6imJc8RkWB6Bdo%2BI%2BPAkddtySDwjM0IsrEcROuUFnGbY%2BT1hKWNi3bA9EPKpk1UtRCtj0JF5E6fGUeGequrpNsODk1%2BhwUt7uyEKeIol%2Bz93OD5pG43c1Ilu8tRr%2Fk7%2FGGOeh2gTNCOAHb1cQSFVyt4LRI1n0c8d3aywrb2Cv%2FHq3hQmahKm2defW6w9a1tqCijMpoqdu%2BJNvV2xzIfe5c5VtlGEBiiRGKXiYvBQXSVbGaPzXdLhkkbCtN1X%2FpHbhDBC1uRitV30c2XG1FJ5PHAC%2Fq8wdtUgH5JfjgsrcG%2BPSZwv2Brzsx48YUeUJJ3JB4ilOBtWFjJhfENi0Fd8enI29w05OMLkS11ooAA9gQN3EuEmRToRHx5hCDZKPrbX8cVNA%2BVbbYH3YO48Ny%2FMJDopsIGOqUBLs0BokIGekSKt%2BKWwIkyW3%2FLC5UXpm1Cccwm1HqTeFPv493d08XcXJ9sDF5trHlGc1i3qx5ntNXKfBly6q%2B2uLpKpv6XaaTc0fmsbJZ5gbino1ho2HYfBh8kgppgzKVwt2apx1riPTqdWfY%2BPdvR4XaTLGhzUZ3hq86xbsMIjMqG5DlArhlkCT%2FFPYfmkmUTkVxUP11CV0v55zfBd7rzq96cqcfF&X-Amz-Signature=bb09150585fb638411d5babcdc5e1e292fc5ae782f9598992474fa56be304bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
