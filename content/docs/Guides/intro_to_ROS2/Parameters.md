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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JN4NA3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFMkNGI43EBNkL4iKYPu8EITK3ZMl5wXQZwu01Rh8yQIgX6LVEKoW2e%2FbUap2Ku4JrblbplIZzctdE8SvaEx6i1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx7LJqxsEzYIl4KTyrcA4gu8SZZs7yGs24K%2BfIN1sS03ISYLzwaJCxyewBzGd%2B8fuE5Duje%2Bd3U6VfkQTQD8Vjwa%2BdrcR2UaaTpOaL1Q34z2C4NN53yOPfs3vcGMX4r%2FFfq21BHzgphapRxWv%2Bjc1dz%2FVNhvqt6SecHdsYOSMMltBsbubUDA4MOchZF34Y6r%2B5LyeobWBjJXXfTUhjawOruNeyrMwu5Ek2s0eGSk11HvPiNkYfQmQBFIpW81qS0E3mQ%2BMVle6qeX9b53Rsdc3q0FESJCuTP7EMnToP0fXDLblLNygS482L7c9pdL4CCHrVXzqaO9yt2EbOP6GmsR7HiuHDs%2Byjd91gSRBBZjalMOvCLEZJVc8ee%2BU2P3Y3BpFkarmFYGocG%2FlKuSJKYUVmpEwe9Orrio5ho%2B8VPQnF5O0qfYUmZ2RAFPjWIXJxdMjZ4W1Lr4Olvk0v4QYX5l6aiCxMJl88%2Ffcvffdk9qbej1C8Uf56LehnK%2BUGesBQmnNRvZ%2Bng%2Ft%2F9L%2Bi586gknNWBbk5tjTevzLdzlnhVEWkZhYW6aVjCb%2FFR6GedIJgZkcWLyB%2FcOIN53be7fp7bk429HtUFgY7a5h01qgKAxe849xWELBa2JjYpa4bnFjWYbYQCE%2F6ZK7nyMpZPMNTaw8AGOqUB15c1byuliLN2nKf2peDM85Ww7FreyfsA9TOQrdHVo8zyB%2BCt%2Fbn48sHVzPUiP9hQAoBnj%2BGaA%2FnL3lqD2%2FRcnWdDsZj4JBtznhZTumChLBGk%2BY6dMZd%2FUceSwYAjgS9OqbmAzwSrnBoestL5142XhlI3FRILHte0v3oJchTEHsXBXdXzw%2BJd8NeacVINO%2BR9VXXW0XdxOus5IvMRe%2FhwQzwDjQVZ&X-Amz-Signature=52b57be468876a13ca6347b604f82c6be49d95c232bb7a7a083ef3b51eab931d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
