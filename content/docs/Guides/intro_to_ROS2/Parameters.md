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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU4S6FMA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtgt57YbpuVdXIZRuQGI%2BFC%2BiaM1iGfFqE7Z98xynwhAIhAJxuAar0aSjvD0pU2O71ksS44Ry7Ul%2F%2F9DWaw60EzoonKv8DCEYQABoMNjM3NDIzMTgzODA1Igz9vtjIb3njIOx8pY4q3ANj2TahBObS5IyVFuG6%2Fgs075wfgGHNqYpgAwNKs1UntWOrsoGCgRqpInjQsHEuQ2XpZRofTUcfGrQglEUdJkbO0%2BIGyJy1%2BnnDS7UsVy5enVMjVlAYD7e4rZhRdL8cAjWskJJyzU1bQV0JGHsUtOOswkrx0IuCPRmEufj44HUqJvnSJCdBlvtJTLJ9SS2evuw04WN4txUb%2BgVg4scM3RUBm2aBv3r%2BHcvWFbC8iNvtBaXDDCwS1SaRuh7J7FxK%2BoBdGNhmtCdBvvxurm50njstGj0DADi%2BWINd%2FCCVCn0%2BTDyc4YNJOUL4Dmk1Ha1i0vruaxSLWiIg9kKMRi93LC0IrIgi1FtJx00bzoO%2FpmsY%2B3k9M8MaU%2BsDq%2FutLxNuJYLKxY%2F8P88Jzhm3M4lHUrvUEd9XaULaCVz9kemk56OB9Awr0O9nEEZPNpHaaX7bMopG3F0%2B59fy2KR167aT%2BK6quug0%2F5rjPu5yAox%2FCkAjbxMPlVN6O%2F%2FmE9KUbi3vWBegyPvG3U1Po7ADvbvycnjIaxv9W6ctaU8Uxy9LtDI4DpUt13ngU2ITPapynaGqwPubJX%2F6IFE0MeL6UQo3atJT5g4%2BtXdwfx8mRsuWaCXa7N6L3PE9bHPfHEkXIDCNlZW%2FBjqkAd0dL%2FIWI9Q53o7uBPzePlcumJgJ4%2BuAsSZQ%2F6RbTxep2llkm30N6UU2ZVnHel156QtckaR6y2VH5XU39gscXj%2BZHsklmPqOriiEOgFoG1TG806nZB1cLkfUJ9Wxzw1%2FqzIWgXDgaI0tEY9Eh%2FGzw4eTPQHQD0yTLWbp2QLKmfH1nO9P70plldPAU9bAZ68nrMWG5CbEqzvK1jy%2BVuUoDBA048%2FH&X-Amz-Signature=da83e1063f5f1bdc46b73e4264bda974bebb5b167cd4c3cb96b64e8674836f24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
