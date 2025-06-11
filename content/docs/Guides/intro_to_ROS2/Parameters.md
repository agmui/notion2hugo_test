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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMPHNVL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVP8mofnGQ6gTW1WIPWqOEID%2BrcH1MjHa2DYlwLCWh7AIhAO6OKCl0xPvSVTP6fN%2FgTFFFb6kImKAWrsQ8S99yIZdVKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIrhrpoATEB%2FPjxoq3AP81iUBPAeQwwjB%2FoFpfCygqSXm4vCal2IRIkko%2BuvCGnph1u8X0CpYKtiWQ9DJNH6dqlCb1SVUB3ap7YLBTiw%2B%2BAExaYill%2F1Q3gSMQUuISI5TrBuoRpbp26v88enE6ptlM7rKWcH0UEcW8MBsDLSJ6W%2BR9CIDAQv7EOyP5kU4DxduS5DfrxqIuezz5s59hFVzw%2B6J7bCobOZzJFOJzAM5mZ1o2XWuaYvbqd2StYmzAfyPIZuBfa9O3GriGEqGebGd7%2FZV7SKVNI2uSRfjKzNJhZgTdGk%2FCjH0WGQ%2FTqqMBHvj4JMW6WlP7m65EXXyFbDGnzN%2Fwy9W92Q8g0fvP49bOhXh%2B%2FOueLFhRV7%2B1DLBCX1cm%2BCfBIsF8vL3RZHxWMcT%2FsbqEWuFrMQo%2FqNWfIijDXiwv1jXSuWBL1rE0bN0vj9dGEW23cKcQSjwJVNd3hjngfP3NZ3jPi491j%2BIAVixpWnjlembaEHAAP14ymuPFBeCvGV6Im3Nl84du3v1TdoIro3d16EJVZCL5apxfjkkKpdIO4ZFWGsxMk104cPdunl27here2oHnHSOyOQYFrNydWz5YKGq6LHZgEzouJRGPmjvjR7%2BaTJUNtwIfALIvs9hZzDUDQH7bZPuIDC33qPCBjqkAaM9ktn1A4J0NggN1cEAKk%2FZQsxBMNyBF4V85Da%2FbUrDV8lKmUinSdw0GYgw%2FBTJ6C0tdzTsGbd34uG5bW3bXvHRM8MN6cMTiOqW%2FrznuyuDW3i4K3TA0tHEO9wbY97AURb2m1LA6dY84692rAR9LIK7OC7D%2BpH54yZLv1Rjctej9DQDqljK8ahr7Ug3KDkLex7AZIY6HFI8zjl4Ghbsmoz1rUjE&X-Amz-Signature=a7a44c9c69504dc334346461cf1b0c952bbf3a82ae9a3bfaf806428b0516faac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
