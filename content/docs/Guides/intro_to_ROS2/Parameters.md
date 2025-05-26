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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5ZYBOR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAroQ0g3lLySaDEfTKtBkoLwsfbKpnEMTV4ZVR3hd47BAiA68E22DpuMZ%2B%2BnCa3hLbOVNaZQeT2j1PQco%2FBBH7Q0eCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMRJpD1xwGPiFO9rCuKtwDh%2BCp3xIStSBJPth%2Fj%2FQb4sD5enfslrKO4Nguy6iytPgGS2Gb%2FKGWriKuFaL3%2BqM60%2FTVk7SFpSk%2FiliRltKSl71DYlINt483duwtpior5jtgCQJcYxhCKZBgkHg1V4XTay9PToubcoKIfCVsQqHh%2FE901G87xwWJOd1%2BdtSyQxkXKyuIwB93dv9sxX%2BE0By8ReGtvf838gOjnRQ7DPAsZlzmwLF5xVkm9mZP3XzlsAfV2qyONJgNFnB%2FVsCLBip8WWL9UaiZlFoD2cY96NfGGWwPjlZxMz0TDRO4j%2BJBsUdLr39Uq7g2HJgf6PPfbsgLv62B9Fb3sD%2B%2FgpAEAnf%2B3dbzVpc0aB9nKrIp96yWVatL7oVc9t1goRdYvuHMh8FVgQZaiMe3Z%2BDQ0dW%2F07gy99bd5VfYJTZVDv0bSvfkTOSALY3sTd2EkD9DGSKMdfjTNosvXmWq0u9mKXCIAbmMMs8Uj38KuW8NFv8mlUDfHR1Z1fx%2F5Ys%2BnCgh%2FFifqFThS4yDLDECZh2T7gJdtfOu5kMKcpEZuemvdrYTabacuBCZmFPDcWJ7IT02Id6AMpQqAVN%2FVe8T0ClSSRbpefbKqjPpVuviI8WD%2FqqO6EMMY%2F7Gp%2FpgBTPsqHKjn9kw853PwQY6pgHHdZsAV68InjLhpeV7QXQniHKndTXguoFVvZIRzBudq%2FXsPapE%2FOkqmmOYFIOi1bluyTIJj2xO39wfYBOj%2Fi2n7GMggIYsrNznSvQ4%2FVYNg1UGMJG0nCr60j1bNkAgyTg1ZH6uwJR6CQtLg%2FOjXRk94Hk%2BeKwauLQEKr9n8frn%2FdGyM3rJjbzxLOu3JAAHp1RVWxijWbL1xV7VzzUp36BZwuXBQLqJ&X-Amz-Signature=5e52d4f90b9ada06e4b9eca8c261975e7614cd1d720d92dc7e1dc82da5394777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
