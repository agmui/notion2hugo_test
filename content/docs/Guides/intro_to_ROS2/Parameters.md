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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVVE2TS%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCWlCrJ7kqrRrotZ0NjRq2vWpa0mMzCchuchwnFpBAuNQIhAP6e2s5Zeiq0Dx%2B%2Flw7%2FlT%2B734ZiVpZ25xpPXTLy73QnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq7n08DNm%2BBNPdUloq3AMvHBlaj8tclIjTKaz1AjSbuPczT2StLeeu1qTO4wTJDx4rNEYZLv5Bk2pWFgWomYo7Oq6yGcp1dsfMnHhR7uTf4T7Lyq8XlvoQM3A6i1PpDqAvuMxana9xH2yGumN2Z7jrfHxxTvR2TGPxrugnz2LV2%2F8gqqCub1qcRooIt4wfGAmdt3UvYLKbPVuMWUFvXalX%2F6BMw0O3gQsx%2BqGUqD4oZS2P59IST3k4KbP%2Fkaz6tYuF8sBS9Tnk0fMjgXsti8hpGhv4e6zYw5hDCOJa6lSKt1fDa8vZ3rtY4yULojhrq1RzwxwmSsakhTzMimPC6guuXLlCROE%2FX8vDtJkiIwNBLGmGAhYkzTYShN4Do09I11bkVEL%2F2US6RZ%2BUnCbrlOvsQbFhJ5lsRRlXqCJfjLHGF%2BLGk8pz00uMUa4aUsqLfTd%2BZEBVFw%2BO9IvQQ8FEPKkfjuY5bgXEUDpytUVIyJxn5FxOfi7w20oKj8rZrtW28xRlln1w%2Fw0SP6a5miEuCu8RDotYgxOKJjR%2BTRu9lI%2BnF769qO76X1nOBQUczw0Nl0TRvKx%2BJICiAztTHvqUfOcfRLrddMOENdKmHwK6ZH4DIHf6IZazno1tNdcaaBENjnNaSzRhDOzjcoVtBTCGotfKBjqkAdISKF2GDh19%2Bju9aK%2B2CFS7067jrKcMDqqBbWjJ6K1YSMaCkLkV1dNFnnqNkx5jQPIzPFm1mRlPkG%2B98m1VY0iFDcO2OJIBSNwq%2FFMl5QZHK5v4sQ4C62qruqOm0l3Gb%2BP5nqvjZT06L%2BSfA4oxouGB%2BJEmH%2Bt1h%2BvgtQe778OPMTKzGHMnkmcNTC8wXVAREbSap2g6W1%2Beg%2B74vDQ9Ckt1DsrA&X-Amz-Signature=9f5803cb60d1429345f00419a2f57a840d625efef9f4e4c7c0ff9c74ec74b2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
