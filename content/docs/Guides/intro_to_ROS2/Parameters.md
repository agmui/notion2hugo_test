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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFEDFLV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkL8vrQ1YXNJ%2FO110TyuQwWX1wisxix%2BrtVxN1hGuFeAiA4S%2BH18XPEkqBppU5r5sJftJKJ6SbllGE%2F%2FI%2FOlBwQfSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxcr29QCeen6%2BcnDKtwDbN8128kvYEc6Fd7mmd0BIAhtqFth8w3CkCxTwEiGFCSWSO4n%2FrYE702OzWRgUvMu6Zn%2BpG45%2FCsReLokVQnuST1JXxmQaqU6tKBW%2BIlqgIx12Lrsp8Srg3Hm%2FeK7Lcw4V%2BRuY1xtmDqnqAZszP99M2ri2taHBG%2F99fwnXhFN4rpAxBDNYtRu7SAIzktUl5ucnsJ9al8sVf5SotP%2FiOC%2BZ9cBbkjjv582%2FD%2BK7dmm4xDq7vjSm9Vgbxm9UQCpNpN%2F%2F0YzDBE7feHm%2FChWLL5EDbGJDC%2BK7v4J9Q%2B%2F2abenN%2BQfPySzGW02Y%2FccXpkOPKhvLiCwLlYLYCTlI%2FyAO72XLCXD40GmqvNRmn4SD7fVJyzn1p%2BSjwDqF4QX2CdwPUrcd8TaAmfqTKqNths1q6psdGlCcg2%2Fj358SxcFIO%2FJYnEQp9lpKPQTK9V5aNfU%2BYZ2pGP9EcDmEefHxbK9Cklzp0OhS4Y7capRMnPB064M031TU6Y4Q1fsIzZ8Vj4UhoQK0Rn%2BYN8cvvxa8GJrS877%2B%2Bz887vmXZrg2bPvJg1OcDK6u6Kvll00kKWp%2FjFpZpGz%2FImZBRdJq9yjDV9%2Fu2T%2FML6hkV2uTBpuENeSrbO%2FIobNsOGBQbskQW%2BwbYwgb%2FAwAY6pgHFx6DxgPcMC1Oq8rcrIfytwM%2F8RgeRMniZdHqHIGAmnL%2FRvpNT1hItayisar6THyF1%2FZlHF3nH6bq7f1n9WfFYt8EkF15gzqb6TamnX0Q3tyK7I82sgZZ5Hx2RuSdhveXMmEkgLQ6rC0I9Plke4DIYJUWu2RxvqH1NJWIWLuR6Ws9Hq0VZ2Q0RvRpfz0CFUsEOK0V0nZ8UFiXO0%2B7mpRS65xE8y%2Bxv&X-Amz-Signature=8709d7a8bf39312472bd7269f304f88e6309fcc25844dd41d4ee471ceae24290&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
