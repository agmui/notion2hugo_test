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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7E2PV42%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCWFBGpKzPUXS2FLi1U2pTtv0VcmAAqPBVK0Y0gmbRFuAIgVy3hesDo89EHR%2Bty3ywNgbQwdLiXR5UTyqTi%2FNFCS0Mq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPexExXAldhqzAnwJircA%2Bg%2B7ZKJ8JgAuFDrjTrU4FcAU639V5%2BIhullFhr5lDBrwMyNdRkJzrAEX2yHEs%2FoJncnpTP6CRtsS%2B3Xz04llfumEUwDz72MzrBZGYgeQQhhl0mo1mZXqLFf3ZCL4hheez6XOw%2FQLyuX220AL%2BXeoHzkFoTYwgtk4KmoRo4kBX3TJ78RtoFBMYda65NEyjFyxSBvjO%2FeMf%2B1XcJIJ2a7e5FeAPNDb05BrCNVqnShiArMH5%2BTkEWjc1Y7Ffw2kalaad5sqGshqK76T9NEHzhdkS1F3kBTXYZ27XAoOzEJjkWfB2yMQ18Cd6rz34a7MnAi5H9eKywYr2GJkWS4eKoDyfHlMgL1SWr48FRPn%2BlU8bWw2WR50%2B6UbdAA5o71gL0ARsSoe%2BmlmcU32nu0AgwUAc3ltUznCS%2F6pPdopx0hfuKqkSPeH6ZcoRZAeRavaiycSXKml50dn6btgaNtQBukJ4bgyYAM96%2FkQRpwSRYRbqZZy9sbmhYcMdP9wmwca5XEIDpHhX6Lr%2Bnt5MRnReRQgB7lps0ALA53Jsag6oPJ1LcO7arfPt3C4InxW9ZvyLWBz%2F0XHnQyEhb2Nxv3Vf8xRDZzP9mrMe%2Fkk9J2uQKcNAgpKgBd1No6xVDtOJmBMJrtkcEGOqUBLC11z4ejPn6ZKGme%2FKydiX8yDEUnLqYWiIwZ02KgX0xZlZshwNHIzGzRAG1%2Fy6dm18RQmYmwiqQLMHazWmuQyMihp%2B%2BQVhTDf8lXpnDgdaoUPoGSPbYrGFacUY56VRaPXqtNy6MFYmzAXhFhJinJlWtZYtbbiXz3482yTk1x%2B5gKdv%2Bj7NPQxpLPnvcFVL8dqX4hCe7Yg8R%2BVU%2Bw5mL5YSl3kqB3&X-Amz-Signature=49bd98063b9d41e1029ec7d389d986eb2c65d9ed78caae110e793228757beafa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
