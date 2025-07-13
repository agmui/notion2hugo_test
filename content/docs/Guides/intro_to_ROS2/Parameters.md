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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEQRHCF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrNfdHyfBk20b9wo5e3Oo5Cv4tfJwG%2BhyK5OJBm4tZSwIhAKZ9ch1lGhM3GMSd6bYZz2NA7rnjIJhNK6H%2BYS3uwjxAKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gFs6B2k6rp5BzbQq3APECZML%2FqHhYa0w5Fzc1xmFMVTnzFWENtNpuOCnRuN1lW6CAijz%2BdbBZqw9p%2BLQsT1%2FQ7OsIW8KwM%2FEZzayk3SnYTsYpWr5AYoYpuB0s7PnBn2DWLo1Bb3WOuCKEPkL3G9ErFpad5460K5oXYmIaxwTSt5w6S30UE9IOFd%2BUIxxI2DxDLLmFAFktU6IGdDUqWaZP%2Bd0Ly2C3t2lnZNhgpo%2BmN%2BtLjq2qt1wryqqBoxagiz2IZ1jWeK6EGZdSPSOsLeBn9mGBSw31TLkR2J7rE6O4bHHRMSDgM6Uk7HBfS9H9Zz%2FyFL8lgX0eXmz%2FtzQKtEuk0gBjND5cv3YkDo5G9RPTeJhDsSGvSRqaJE4WqF3XtGBDsLaF2jJpMUDcIJ36pcjQHOxW1MqUmgrD%2FWDYsVm5J2kJGvJ4bUdYc4BxaQO3gcmgaq0mhuDCQF3onUpKm8wVN4DjEZ2SsG3wIcj77XtEwm2ILZRoIdV0Mg5t9m848UFLNPnj%2FhcC1faUwwROJmIZ57zCTy2WRJEJhToiDscU5BIXxnjo9KEL5a9tak1XuLwqVaEP5%2F8pIQnK%2FgyIckwFEadX%2Bh7KVrv7D2cEZdrfkbkPhQdjz13alTnZpritXTbr%2B%2BbVmQEDR8EyDDe2MzDBjqkAWVDtT412Uayjg0EBkxgtuN8oFObKHJ%2BIdgXTSPsddDiFKtUjE80squDd59NeD6eSIKU0GjGogRHt9nnhlZ7gNaRyhQJF33g14wkk5mrW8k3jcZHqbye5dFkeSb1k1pXjoiY2w3mWmpH5F22QwrlL%2B%2BxZQGD1ETLIMRrn%2B1Nwf7ohQNqoumbq5FAJAQiRiuf4zwFMNqlgrxgwdPixdCRA9SWpHov&X-Amz-Signature=3c022338758ff2449d902523351f36d92df4a4e91449aa5d7ceef0e447feadb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
