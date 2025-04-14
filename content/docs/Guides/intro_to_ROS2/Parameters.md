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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZXO7OA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAgUfJr4mpvoAgcSUvnTALLDZ0HmFWWBSOy24xG57QQRAiEA%2FgWC5V%2FDi2A5cDQ9kXZI8SmJNZ9H2brwpAmkokcJyyIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4m6VxP3I3G8J7YLSrcA6K%2FIVGMKQXwXKXiUt5K4%2BAsjtCiV9V18UjMEAvKw2onJG8K1i7O%2FwI0AaySFbWCO7zWhYoXt6A%2BlbKXOCA5YoIG9ZhGnszH%2FeE3cv%2B63tgeYdy0hgzSp%2FOWgOZesD%2Fhnqqo2ShaBcj1MEyLrA68j%2BZw%2FDsle1CdGYVXTKZmqahfbg818Z3Z02BWZYr98TJD9giJfTof1usRVwRIJogb35DfdXjyuvE%2Fp3D3HMNlRI4dvlGqbDboEr%2BQ1n2QpWYmjD03kaz%2Fki1mWPiCOTwUYyEsZ%2BNf9YlEWGKaO6Te9xmMyoXVMIeQ9%2FA15QZQfvXq4NuZV%2B4yzT95rIqtmv2%2BagRcr8qAPoUqmmiXxVzz6aLW0UI8mTq%2FgtgvFyk0yxHN%2BZbVKZOQhpY42D%2FFJ3s1BSz0YNwvgvg6OZnMLqlKpJ8jsO3KTdzYCyt5bo4SJOpLvr1nhsDhUCJfSUAaYFTxA8g1%2FyMVZERn0jSfO33aXmw4%2F%2FlmbCt45VzMHnuIPFAIJ9bvZkgbwWZUPxr0Uz0SUUx5VKSqx%2BeDOL3ma%2BrjaI73y9MGpCml2LNt5cZVxGr7CSX3IlGFwJFk%2FYmoQy%2FLDgasm2A8AgkZ5fUbj5rzy4kXFGhvjq7gfF1PKEIOMLqC8b8GOqUBHF4Otla%2BCOBGzZj%2F6g%2B%2FEgfmrEWVYSNOc9mgN4cLpmw1TiAzefjSmKRVcF%2FbwhuNhaEJWzjnrNDrWEknNMiNc5A%2FekxrLAnkkNb2NENSYhwFe5QPJIraPq%2FX2jOgDcHI97t12GofYZxtf5jqAvOE4iFDyPfrVttiNS82plyUqWf3KNEJb5vqD9wG457aRyjHXbXAyI%2FjOF4idzhoPcuG3b7KuNDV&X-Amz-Signature=7a31cd6468e138117216fadeee089e8e75cdc377c17b374db6b034f177a13c74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
