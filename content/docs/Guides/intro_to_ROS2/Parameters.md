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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4H5ZXA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIESv%2FpMmKjlNVU3NbyMkIgK8G7QTskRTIndOqGJ6LKoSAiA%2FbA2JXlbe9Qk9PAPycIi0g1IvmZdWgdC%2Fzh9de8tJ%2FCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMjNoKP8eY7uAkeu%2BuKtwDRqErev%2FNZT%2F5A0x0%2FcpxnGhRfu4mOggB1wCHwX9yY%2FXmmfhU5uMshQc43LgqfDQ7UYonXPAakJa1eEyWF8BxyK2Tj7iTjufZOTwJFDmuyCmLHmg21CFh2UJFb47%2BwVnjFe2hyJlxBAjct%2BMbGdM0JKHz46wfUyWB%2BELY559VEgtvzcbrrmmUk9ibFoGIwSxt3p8DzTkOFJp7Jx80U5cF7S0sXkMDKx7%2BVRYwdzM%2FpUcDRahoMPinVkL%2FOvR2I96wS836W3BNHka%2BJLgD9F7SDxkeZzJCn6lws9%2FYo%2Bq5l1SvOLhWJRYXM4hac8fX%2FGmChj%2F8G3arFI3UruL%2B1CiiwhJx%2FFcUVVvyrjoaefQQqHwUP7cWlTN1%2FM2Uf0lHUHJu4KLQcyz5NhHvR1%2B8LKbuV3E70vZKQGdV8rTEl3kCrfkWtd4ZhdklraC3j1lv45jJRSjMTR2NST59JuZuDpKe2dADJ0cOh212HD36tcJ4kSnr4Itex8Ayk0kEhiqmbQ2JG0NE25%2FVSvHiZ%2B0%2FK447w%2Fastu5IJHi3fsW48t4XAX2uCaDh6UGS%2F1PIw072cMXNe23s9lB%2FvofbVeAh6uknjMlneSPtNaBha8O7iNLi4gB%2FAfm%2FSim%2BqGVs0aEwmoPhwAY6pgF%2F2kY3KDw5UFnKPpUtxbkI7ZnVtNJdeXVOFTUaoThnWStg%2FzHQNhs1kZRZiXbEUpajDL5jPMMXKae4tNGJbaKJA%2BuJseeLv82Uq8nBjKeJA%2FKgVWHFkiMxRO77LjJxlO%2FKq%2FVXs7l6CpoLSlEpIGt1Sb8Zulv2yYIgqitB58gVamvYTSDkjGGm%2FLEfV7GR2Oa%2FeiRcukEMdT2k9ZnBXMPelOs%2BLoMw&X-Amz-Signature=aa1428783cdb0698fce2daee7cf09944aa256058f4e81c77da010ebb000a409f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
