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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26I64GE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHWPQxThKw0h358OJm5p45y18uoTfLzfK1AT7cxKDs2pAiEAxJPeho574Ozh1%2Fs1MKAtbgcBykQXkLzBHVCYFtYls4cq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNPe6kfWrcVl0JJzAyrcAzHuiDX%2BRUAmJt34LnGTTTrrOuKjiH56yea2imAe%2Bhrm88iuxi3Q7JiQ7ACLDk4njd11t8%2B5sCDiYrizRsUOxh0MUfWaMsvTOad6aGxOOwg8ttbQw7%2BVTgjy%2B2ch1pRu8U8MTdWK2dIuDQMmNxv3%2FhFcjMo7quAw%2FlIkz5IxJ10I88fPT7W9fSKB1UPzvJ7KyEvHx31ciClhVc154zpeA2j7W%2FY37dTA2CPcI7kfmR67iQ4TqJPWLb1Uiy2oReHtssuplOOOPg6uFeNaUyw014xYnqctwSZc89T9BoI%2FqHP678TAYrJ%2BuY4%2FQ8lrnTHDbOCy2bcIvs5j%2FLi9CGtv%2FIahvcxjpYbCNcaClHULr%2Fs%2BMHtfQIJvnSgcd7LR92QRTEikxv5I9oyd9d5yb3cvngJ2iUOLv%2FDAmfcqYPhbHqt%2FYcHCEWxUiUZqif5ve%2BAI9yrBV%2BnEERq%2B6CcI44pNPWsr1jqWBK0ju%2BTdrEk%2F%2Buo16KM%2Bgbb4%2F3tCTDNsrOKwwit5dlUCKFRXVoFQThlpsz00HiClccc%2FjOrxWATX1DcXcHZLydX8ofIGXV0gkELzJqGpoFKCaDoQDKcBu3t2O4wZuYPBElg03TmXQmhuzpY5x%2B3NdPnO46fit4V5MNSek70GOqUBaH%2FO1Sh6sD3hg8QiO3Ejdgfi6rC%2B76KNVeZPrBNBgrETCH4Ua5AoqPvUkBtoJeEDn1X2RA4KxdSPtj0Psy9etOrAfD5JxqyQ9LOSShfM5uuRVlQkWGwjKz%2FeDPYmfprs6RMANv0epUVtGyjuNOqiyGi23P97c9NjWa%2FL2mQnSl8UWK7gk5HxadrTvd3yUn7qOx%2FBIc0E1eq28mY7Ijn7bWAIu02u&X-Amz-Signature=af4b9ede26f34c5d777ec6b2b21e9c08d9f80d3dfbdbbf3d2f3446a854b387b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
