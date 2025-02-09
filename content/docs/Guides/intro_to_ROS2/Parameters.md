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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7TMSWV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhdfQ3qTdkyGvlIVzdnTLd4%2Fs%2FjGhgWK5dH77D9WyywAiBQg9d105943HcCiEcB%2B9zE9%2BsKwQmchXnzw%2FwTLGdPuiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuifbEVXVxgzl6acqKtwDsDILv6GsVEzDNT3BPUPTq1mQU71p1qwF6NVV4xngTJ99C1buRg7k2qnTTQ02FC31sDEJ1fgu8IlfY7tRzNg3HGohYthbzMnjvnDSMsFyGJyttp%2B0A2jNxOifLnv%2F2pWMiXaccGi%2F5w57m8EW%2F9Ph9zfe7ka279F6kC6LxfQBx8KBBP5Zq08MWnJDG4BXRyDH4WmMcW7XdYYJxWUzyzi7FRzRZxnGvLJbGEsyr9mFznvSo%2Fn5VBVHK5IMO46PQOgBzV0QoUOYcmmCaGAoBu28IJ4LfajxoU%2F1xMkAdtm5rMv00pfrrG74UtmiFm%2BtQzy45tFe9CigbEQoLg4%2BtuHA40GgZDNj4KIG1uREnZEVT4bw6pG4ToUPtnecI1vkAfGZQdba5wVBiHZ0YhP7wf%2BkNcXbPX0ZgXBGSu68SNIbpErnBGEFIka%2FTJ5GhH0MclsZg0Q4qx68nRoiGmvdlSbh4mwq6gh0Zl96JkdPl7wCxcNSUTWZ6XWrfY9kcOeE%2Frdm1YLOARD%2BkiDHTHJOqbhFqph%2BNtWIDdMBMtk9%2FYHRHSU3oA%2FOdpTQQ7rMZ%2BrHV0mQ%2FoIfADkPriQhXOmnumDFVYvTQlbRsMkcKqaR84mteJUHPvCYod9ifldhtIQwzuCkvQY6pgEthmw%2BnDrs5BZrFGDu2h8kJ9d%2FZnDS4J3bkfLIawNbgX4Ia5lBVOw%2FVRmV5Q4fnEJsZx5tSvwoAw3%2BoOUkYMjdXWS%2Br8J7FXKBEQUY2VGknVw8zSEOOUEzZldIrDFRZoQnZzb73BwQxO%2FJmi3KNj%2Fe56DqtX9Rvgqc29LCh0sOS91MYJbcPZZDLvmjXtiHzZSL94PiaNKcwCOFgPJv5jmO0MfLbD6J&X-Amz-Signature=991b1a54cbd10b6d15820e7d57e3926a47d198983784adb86e62fac350a5c20c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
