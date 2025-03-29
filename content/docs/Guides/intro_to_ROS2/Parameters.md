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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNUCGWW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDj9vd%2FnCxaQQ4mVyifcqzL5cbEVe2qYa8bSfzshH54IwIgQnVRvUtTbC7a03jjIVC4XUGD2GH%2BZgdWh9MdeTCJM1Mq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLFmbPFJw30MtsNh1CrcA9AQhTlFYGsu3%2BUG9pXAwsP18VbrChB4ClKJQbEN3j%2BH0%2FOFQw%2Bpq0E0ReF%2F7FqR5K3OBVOYnXdQpcU5QT3N0cKYZJHJ7BKd8oHXWYq7uWHsBcDP0CsPahNZelwHK%2BHXS53LSfBPDlitlkmZRgvY74ekSEsX4e%2Fo%2FeYUtnx%2B62%2Bkpqx0ugXVdJL4JHmihgk964HhV69GC5Qpkf2OnK5OWFb%2FKfBrQuiZSWnMjWV6nuXQ84pHHIlkvfqGr%2FuqV8cJDyPrCnms%2Fk%2FXhHuNRqw7p0LEg%2BjwhDsz6hhVQ2%2BhzSSWjThoDHTgbFQ3CBsWxpRd4zQtMANFE6Ntu1aDXG6gNV%2BvGKucSOOIu6vnBk4W5rSllGxlMlPo0U8AUHnEd%2BOJ59P%2BoaV4GWZlsiR02SxWTBxsOnyYCmRj%2FgwYKEtH%2BqN3q%2BGi9RehdjeRGb7HUarU%2BikdULFO6VcCPGO01sAYBf3Q1EbZW3Yn7CMkmvDdxSYDf7zRN%2FGTfpY397njVhvx98YpTUWy598DHZhYoCkwmBDKcMSqge%2BtjSYwGiG5K1p9hntpdZm33r8ndFbNaGEMEiry%2FKVGjaUbciGj5c7ZYjscZ67ZhvUv6yRx8sDwuZunxI88iMKNXyVjsd6dMMSMn78GOqUBGcKQu1G6so0XZkdstszJbqk1hNGdt%2Bm%2BWStLlTm2C1%2Fi51efXTp7v4vsHaRj9H%2Bvj8Ux%2FRLS%2FuzCY3qnYhsE6kjCNTPJcmDkfvMEmAGvsO%2FXvkJeDyHFmJM3vYmffYQfqmijrQu7ePIp4wvWf%2FBI6sTCq%2FhitIdlDXnXOwYqFl771gJiNUkO6nh1vHoMECgVQL5Akl7OpmE2kdCuZWn66RZsmNzz&X-Amz-Signature=63dc57281d70c3473c207520abb582417cc71446c34514a8e171bd42ea8f9133&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
