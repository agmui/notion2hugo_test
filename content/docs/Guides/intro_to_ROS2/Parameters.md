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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EES5E5E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeqoHqSaiTpwCS%2B9Yu8%2BqmEvggYizkPbB%2B%2Fmwr%2BO67eAiAVEVNCauBGM6Cp8A5wrif2%2Bw2LC7LIjBJ9ldULAMbXvSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCOrVAWl4QAnYM%2FNJKtwDQvnw0F1zexwdEvyaCQmVCLC11oCSJfNJWaEhFkWms%2BwePH0BKGC%2FgAx%2BRNpOMzPaK4V9pgLdxe6CCRpOVul3SG49UU4Ucll%2FsQsg5z6tXC76LSrIsexenI9wAcYwTIQxgKkaQKESaU3b2wMj2guxFbKBUn5g%2ByG5LXS5w5bSvBmYEqF%2Fqv9TCmdJpFn8ppLgiaORgemht5ddIP8jKPATdPzCFeyBI9Q1%2FtoPfxaxhmf%2FG09SqBTIJLsND%2FIYCPcLlBGdtXRVi3DrCeWzn2TeVXje4rkMTgP5lfshHF1vlnqjn1GhcrdOL5QbaK%2FB24XjdZ2%2F%2BFsEq9t%2FDIR3IEB1md4zRwSL%2B%2BwxfpPmBddd4MJppLBb2gaxFXDbKShUfe4BkiLUU6I0uGZuBM3Y3zJTaljXFC%2FhWTKk%2FCy9LcHm99pgnrGzPtPeAV6GJ3WYeFbzknJLVUo1j%2FxPcZnjZEaV6wUbW6NPF0F0UkrtOO6faEKMfa8tn0nKsukdE9rIM694EglHsj2%2BLRhGjEZ2tNw1i7%2BDRRQFy18EcH%2BpRNUswWx9e2yGSL5MGVUSpslo42dhC%2B1uIS0VXNshvCaPlZKOVqaBs1aoL1vbZMHRq6QCC9o5Nme70QHemSmSDm0wquLvvAY6pgF2OF76yxAfaJvInSiV7A2ts0bm0npGHono4lfqUMoQerOZ9ez2QM5hBDUsJgprWa51N1J3%2B6z35P4e4ZDs%2FQ8egKkVuzvP2YmdQ%2Fkpry9MDFgeHVt6wrsk%2FggtblOn%2BwJ9TmkvyRyU1IRpF%2BVd3Nijqrg9DEs8LoJZV9SIVaB2%2BIk%2FMUCz2TDz6sMU3U8Gubaa69Z7TOjMKYwB8ngyZ958KCPgtGTp&X-Amz-Signature=06485ec6fc31886b1ae95180f54accbe7af721c38b3d2f039377941a1a5b7a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
