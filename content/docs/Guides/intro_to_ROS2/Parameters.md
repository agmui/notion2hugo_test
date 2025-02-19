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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZBIYIV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEbMo8TK%2FTOHz6JRFwtlu3jEX49proZNAnaOslEUYioOAiB8VHnPg0lcvRjmbqRDtW7u4TKRjjN70hGa4MGji7gdOyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C%2Fn%2FWMbOM8Bfph9KtwDFGJ3Xlmq%2FVPDhFSa2uYZy9Zsw0Y9n89pP2s%2BxBzYsn0nyXSoUhclatluiIA1ejS8Avh2saM1YXH5p0845pPfCPFbnwLf3yTYzjNGuCNU2%2F3vesbZaeLSkf8JxOr9qdD7f%2BlBjHITZTb9ovFM%2BDXorwtNbyQmWAADKoqlD2pSUr5UqxuAC7t%2Fdt18jGpVqZxoqneHna8HtqTiBTsBl8YY%2F9vSIBRGKJIJMOxtqvAam23cUdHFN3LtStMKiaYrXdHflPOYxSJdTjJ80Em8SiPWvbaXBfPZmbhIx2b%2F%2FnQp5EzukT7Mz5BZd%2F9PnWDVYn4%2BHBryzL8n1BGKybGsWhOyGeF1G5SILtt7KtZqEeTlow%2BhX1dawEOMEx8sxH7T%2BBj9VYL%2FV3ocvrZ%2BWZrGotZriUlWeIUbEi%2FzwJQs85rZExvIqNlE0eim78tmay0cxRhib5OyfkKNho98nHQn1sj7tDUxOAr9WUtiNa5kCHSPkCZ9dJdt8yIyNBaDiq0l45XmuC8B%2B4u7dNLnNS8s%2B6SEfuSYaZnWCa7w4fvUMycEG7rvNV04c3GzhV84QaVi1HvaN2M%2BJugujYneeb9J%2BwtmIp9LmLnpJuMMuHNjn%2BGMGk5%2B9KjZfYfz4Tfszlww5%2FrWvQY6pgF0TuSnIkp8qnvYqRee2E50wdHY1f%2FcurZHFgLDH%2Be1G37uSFCOcvpzUCLWrjxnB1Z6uH7xx1TCVo%2BfT3S0DdBjtm7dKUM%2Bi%2FzJv4zpnNHedhUxcVsdC9lN2aF4sbPr2PakTYq94I1p8J0o34mZ%2Fth8nUrbOaRvInE%2FFpt0yPdcnzAZof3doYUI2yCVzehfEyQPmVE5koiFpt47aBBaIl1KJjygJ0TX&X-Amz-Signature=ea537e3501f7bda2252b99e2cec2195134ecbc513c3c80cd90f250649d79c650&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
