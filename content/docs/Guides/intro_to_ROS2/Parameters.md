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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BSC2DW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDkBDpLAF6xebLs%2FTWO6H6OiJ1K%2Bnvk8Q%2FiIuXOlJMsAIhAPxFCfqh99BudStd5ODqERhwcdUikRa7hTe%2BZiHejg35Kv8DCDUQABoMNjM3NDIzMTgzODA1IgyoqEMRKQipjqLJi30q3APpOlZUHLFQRFrPt7pzekYDBGYMd9xFvTS1EnbEH%2F973Bx%2B6ewP1uu%2B9ubUPW83LG%2FGjKhgYxdXSr7Pam3SoAa5p5TSWYKyqYOs8%2Br6HdlXuRuxy%2BeUjXiTRb9Fc%2FFSunFISGmOvtyDrFWM7cXLQTbA3812BJbaj%2FhE%2FWl1UcfyERosbgEI8wmrktBuK4wB50%2BPh1GBysl9aLfLc7sYsbIueWGohN7R%2B5tb1%2F5sJBxnxIMiKxR4%2FNilMycJrPKJnvhRZPTBUc2qPpHf%2BlzFaIJqXyLONoMOLKHrtYo1W7j6dwGyZr2%2F6nzwqTAk7CazKFAIS70dDIf8x46WYD2wqwop1Rou5%2FRbUgL2sK%2Fx7IlyshJdfTCbX%2FrWeeFK6T%2BMRxes8xoe7dH40U73AktpLpOZtSt%2BJQvLB0cVUqbW3v09Ezx3QLYdaNrVXL20d2xRwgpCqpCcR0IUj659dSfma8LptoeIqcZBFqwYrloSkiruTXfAAJxHRdKFpQwxERN3BMFSQYXYvQqIertPh63XVz1vYFC2T214KXPjZteh6j6BsfDLN4YUG28DTyW%2FKcAu4WVtdUA8t%2F36mqdiyLOgGyfSQ4lFUMzGaDHDBeAzuP7sOzNYbS%2B%2B0MBrbn2dljC03Ny%2BBjqkAZvNm0DWeXzlZwuXB81T58ltLQyxYTBiarysfCimYDGjuLe4PzImAJtYDRWZYwp8LNZl4o9vUc7E1JdyPUlhNdh6I6KIwR9HwzZkhYnc07IQ%2FCvnopz39hKXgMDDJfJGpH3cz0ZC9afM1Fb6ISy7J8q1BklSiNovbGtXntF%2BtfUVIRr5obrXEwXcTugbvPR7Nu6sVcpzJlJ8yMIbdPEJht9jhXP5&X-Amz-Signature=2a31f123a49f500498b46aa1e06cb5a8dee6f4747c2ccf24ae75b1ce490ebc27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
