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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPWGMCGH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIE6hDEo0AG0pFI4RcRHGfqXU0cRWjuhpBiQhKyly%2BwAiEAupfwvHEEw%2FMvRkqJyixARqLYm7mH2ByvyGQktaaphpkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPohXH%2BYayEJq4spByrcA6m8BhiCML4wWOX0Cvf9lVYF8%2BsflHBTmzQL1O3PCL%2BU0WexKRrcxkYOfH4tbEeeF4tQApBYobhDEjgHkVU%2FN%2Fvar311GizlkEaEEXnUKskYHD0%2Bn3K%2FKRR%2B4nkp6Rv%2Bwtz1DlJ2Hwejpkl7RG%2B5gVTu3NvY5y93u7k%2BlQd9REC4QnWY2Y%2BxtcqDXqnjHx7Euq%2BUojw7AUrnvrBjfSCeJhhjzWi3PYH2mCDyxifW0BDc6hEQ9tzvCLL795n1OriJnqkgqskluSLA%2BXDuh7L7%2FluwcvEoyNdT65bBOH6aLL6%2BXuwiSBxiSfKMrURp1x2ykc15YtMp4PJGa5GvEMxp3tEaNG%2BOyB25eJfo4KtWPrmbtFD2tpEFcYe1zoNyklVqYiFt%2FbH%2FjEcD5mXBQ%2BU9Coi40E8A8CtYIfVopp0XuHjBb2Z36AQXr%2BVzV7ur7RTOU%2B7GLQbjHXLIVleLanzy6Y%2Fl%2Fqy0Lh4M52PP5O2Hs4W23%2BNM8%2BqkdjxoN6HtVaIhmRr%2FMz09atg6rnY0A7rUMInanAp9Hm0ojM1tgnusE5WKN%2BfY9xu2fw3MKY1VELv71J%2BYNfTbinjoHjMTTmg%2BbJuyU5qlkNAEBFhkCQKFPzDkF3dg%2Bj8pa4Xk8UvRMMPDxr8GOqUBBcTclEhrdtDkflrNffbc3uf7807CbaLg25P2NGhThVvtqdONzXkPMK5Nujnzx0EMuef4zfMrlMr9RCn36KHj9w8HxP%2Fmy%2FA1NdR%2FEtMj2182Xs4208kxX64jrvPPTbD4nZwZCDqIEbglpedWQoXLRFFr86RI3NfS2pi%2FO9c09AYPNurfqEI3G9hWpcRSD17RdvLklkgCKhQQ%2FVf7KsxPaDgNJ8b%2B&X-Amz-Signature=d8d2b2db199b72a2d7065e3167b6e62df263473111abcd413f53bb6a5a06d828&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
