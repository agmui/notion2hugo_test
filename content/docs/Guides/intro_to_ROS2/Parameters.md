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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34HLNBG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDqCNH9ThNQX%2FOnnYsPcm5pooYPDUpnA54vlNobftMsSgIgK6Co%2FhzqjofmD3avvz9%2B2aJgDc7bRXscbtVt9wPTtz4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIu1KY2%2FZZhq1F9ICrcA94QtBQIX2Bt07LpC2sBiCD9n2LYKjlHQf1thcr%2FFIXeYPoJxTFbnLB7CQaakk4hTnOvEsCh8UjE9BPxxlJ69I1k14iD8fvnHgJzNbbFz5L6MgXrKBq%2FNAVEkK3Zq%2BplL4lChIsdcHZTnhrDCoDyqht9TFvaMrVc3W8qIcycqVVz%2Bcu9MZ6X2vKPG2ZEIWtVZGihhGkYILu%2F7nfoe3V5HqrUH3mNirZjF4KXUnCud0bv5fQbFgHCRtx2RDaYHfxpELay4HCp7bLOBQr4DzSOq7uXUULVoho%2B6rKauYxuGfxAnZs47LqDp%2B1eoDNpW6OPeJOY8vUsammuFHRcSv6W8SE%2F8fsokrScPsXKvgyAb7NbQb%2BqbA0Z1qWAMfjFZX5no4yErcoBuO8HA5I%2F%2FQBGmWxzdZBj4jZ0SLQBpJVfK6CpOhF3%2BPoZCuJCNS%2FEMtilW%2FFZsL89vRceASlJ1pF12wRZzezwXk09Y7EPW0RhJ0LLx3KImTLbiX3ScbqdDdvzfY2mFBaAz8VunwejDO7dc0BUNOHQhf7Xjsfe2oXS8fuQapY9S1uFybcSdYPq%2FOfHoi6D5MasTKnR9RD73MXCU%2BwJe8l%2FNa3CuvsVLRc5HLFbQEr%2FCgSUAkdyJC84MNTXj74GOqUByA5DSdRbSdH%2FIeWRkLBjoG2G6KygM9DzfAr%2FMicOpcmvZKOqYGKlAZ7CSDMW5GwrNprx%2FltOqko%2Br6Jh0bIkTgH4QMWXeo0oAp9hsn4eB9%2B4SikGVkwz4Ei4hAarOv9J6Upv5fw8N5EhIsjnGTXO%2FbZzTjd4Kq6pV95EI%2BAvgzhyUY6xoAjshHkA%2BS0RBQWdYuc1s%2BC4%2B1EIZsX9ZSu9DMagAAsx&X-Amz-Signature=06f964b1e89ae3077bb5e1ba058ae2c86375ec36f35a3253538fa8c6ae676c06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
