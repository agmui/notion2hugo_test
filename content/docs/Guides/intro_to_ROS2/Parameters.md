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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLYRPCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSkx9MSavV%2FZqHmzs3KdNFqDfleTJLENcAVQKoMeurVAiEAptGeiVMYLIwE2baO9xeH9U2dwN1PXoYo1U1qMrHB53gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN9SzJMmbsFiRknvyrcA6ekuV%2BYdb2rdQnZN4PmjzvP%2FjN6e3mXZjA8EtkZE0GgDSWYEMgFB1CV9TqMlW50VV9QLK3wpDb0LEOfj%2BgijcgTybj0056sj1ASHHXPeu7SNSRGJos5d23zebTKEvu6BaR9Kydc9sLngtHCJZ1Ixk9Ix1Y5R8h8f4S%2FFl4nWxcpLxxE5poFAijWCewik8UdseAXw%2FK3ZPIPpAqwZGhG0NYc4ZfcU7hXe84oQlSaSRP%2Bu4CIi1KUOvFAgV8Ma5KqNlYFj2g48eowNSZ4rNI5dN3h3z%2BCVxPZJMbKr54eElG0GFJwIoO7azMHzJmjCqd%2BqPe%2FTbWGituI%2BNqj3huow%2Bqxw%2FnrZXF95GeBumS6q%2BXPGnO9yEq7BB3hdAIgIA1TcJgsLEoQb2AEybSsDwCjCN7cZsLiU053lvDoG9%2F1q%2B0D%2FWLnsYOEFiOYDBh8zL9N9iop648cnPakExiId7XucQL0j3QCP83vxS84YgpUjS1b1WPLCbNWCTELRaWuND08MXxLoJUIf3uylaNRCeKl%2B8VAlV2N7%2F2z%2BGP%2BgvoALoIO00flOFN7GW2Egs3X9iZOUgfCHqy16Q7l5ZH%2BaD2z7F4udCkVP7HvVEVa9Rb9F%2FJdEt07S%2BfxCOzfJCOkMNfqrcQGOqUBgFIiOo6vnwTknYlHhYGPwMg4ICKhZt7dn3OZaw2p62nFa9tTA%2FlPNQeDMM9LLzVfmivTn9jJJl%2FGmVAjRrxZ6MztbpN1F6wkCmkHgZ9tNzNsh44S%2FlUsPhPwubZbrzfJZiD%2Bo64%2FHrAQDHQpkaqFgFVA0Q8cNVUUiCzxDl1PkzKMcs%2BA0mwoSgurMFutARzGkRYqwxkhUgAoXwHYLMwhNuBBLJZY&X-Amz-Signature=4a53564de40d6aff35843dcd21bfe48c46d7bcbe30f9a869eef571edf13fc93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
