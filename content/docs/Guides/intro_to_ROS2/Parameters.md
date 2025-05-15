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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF5UAMJC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH98FCFIahtP2MryqOhyeqrRTZlHTaTP8NyrJFifXhpWAiEAiP0vV6B8lW0rCnEETEEmbYSreQJEry7Qie4epgXkc3kq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNAV%2BoUbT6%2B9c2vXlircA%2Fu8DKG6eFJmspVoc5JCG4siP0ere6u22p9OvuLWpPuZ1B2fTMeUCpxGrHlhRkgQ7JMFnhj%2BA%2BFomOZ2lQExmWc5MISJhr08s%2BAVLDDi1pjCsn%2B7aWpvDuucPWqDBboWlWMDpEh808KALmlBQmwU6%2FOCK%2BSDDLECI0OCF%2Bmh5Fu6zuk4p6Xytl7Hlj5w1s472yOmXKoc3MG5lh99YCXimpi2HbbFFD0FfTQw67%2F6e%2FiM4LLfSvOMShXYhJS81kEyj%2F9sy9DHMftQ7DcdN0Hyl95O6TYZ9PByUItKy4mTzh7xboHMcZPpuz3fqcPdXfgCYQJQrCgBFf7O8dYqrnIbq3gga8I%2FG7N4oA9NwumWrrpY9qNUT1ssZY0kD2AeEXOJMfC%2BCHihQxThCD5LBzF0VZwpVltmAISWsbzw6tiPQ9FHg1Isv5oHahF6wgECaVEhm7oEsTjdhuZCXCF2VwDmxKhJhXwUEi2N25rE7CnB456rHYo0awEVb5NgB2a9fsVM0xmvZ159S81C45z0w%2BP3GgoLfn1AMIeJUFPnqXJjcp3g%2F5giY6OqLLS4Ysd84VS9UU23Cn1VxxgOdmRwuv9btFvLR6RX2tZqBzbw1HyuWt1yNGmqJePXHpIJZD%2BZMLf1lsEGOqUBfsA6ZuMGKhkcqytptLGLaf9fbZRWfyLw695EJUM%2FicfeGW%2F63JYTQGaRbxJ%2FCbmP%2BlrhMviWgYfMFdnu4hX6Mcu%2FBlqRUjrTbwJVu%2BJlY1g4ssRAIwQm30kzizdK1FuIgJ%2FJOXlvdUWIExz%2F8DTD0fp%2B6rXdhxmyQru4S46jW0mWQNcT0r1q4LQhSYFhln6Uid2nOfuKnoFObqVvmSfgqY2l7NXy&X-Amz-Signature=ea7d81bd2b900a166325ef2b2ada4d24107a1a28998c3d79912c00890732bbc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
