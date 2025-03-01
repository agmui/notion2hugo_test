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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7XVTU3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDmMrUbbUpAJpacN1DW73DB3cnKJK2VF%2B96bqF7NCFGiAiBo5Xvtw7bmk0W24%2B2Q8dIRa%2BYT9lp%2BXovw1sebzNhxgiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBEUKhv3TmZXtTfsKtwDqvvyqthOsZtJhVCTdqHMrc%2Fo%2BFMYXZmO0%2B5RO9Nr5R2rivYuyBiCo4MaICzhgZlgw8D%2FubGMMhnb79zTM7gdNhPo2oPsDzJp2ADK3XE3lgmd5Wjii0SEDPpWktjTluU%2BQGYn0EY2beTxw1cRr5OuQ5Uk6fPKaWmYS%2BjZ5dVIhNeiEOgd16YcwkGuXM767jXsmzbezAlhwSJuEmRzBpuiQdX3J4itYSJa471dCNCE9xkzMi4noSy5L1TVBbd1KfhqBw0J1grW0drwlfuvyeEEuVqc%2FTFKmbu%2BQcTKDAc7YRKfFA9nDb2gXa28GZcBG8I56xsYaOATCQmnTQfPLSB2AFlwfj2dDdcz%2FbC%2BJFZwWqezoQysuBq%2FkwEKzrXRz2M2npg%2FCgQlv78Q23B3%2BKR2IH2f9hCJUn%2B1151%2BEigRjm%2FUovWeGpR5fjcPECu1iX1FMVdNgVX9a5RKqPfnuwwRy5YTEAd2m4PXG0vv2%2BFHpIRTN7J%2FjSVEqy301UGoxKLSZcNKRFpwF5lmarLBvWH%2B3slqF3kjmnTfnqewZCYGoIJdyvBhgkechc2czf3B6syI%2BkTZDAED1ry7HSxASdoXla7CIFbz%2BCtj4hjDuMXHO8I38o11%2BcoChRKiE1Ew6JCKvgY6pgFHTgs58gMkEGdtIrql10fb7%2Fcmzmf4pMZKMX3ZKjrSDazEh2UtTCeiTXEkcjsshMjja7yoxqZxS9ogxkCkM1NJat5sE3eGIW8CCYbgM6JGa6bT2cTiRk0R%2F%2Be1%2B8myWxjTjQdKa2QT4bL2tBlZJ6pg4RekP4bnZABBwFHnxOsn1KycMnSGO4AU%2BgIsU3j6KRi%2FRqApT5I6zuHY%2FN77WvZPe6evDW4k&X-Amz-Signature=8d19701bd8719e751ff1eae9114e1fe23550eb6dd663577d53ba27cfa554d299&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
