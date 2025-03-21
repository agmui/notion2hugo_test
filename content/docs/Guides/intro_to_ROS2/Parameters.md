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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG75X2T%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE%2BQdhlLhF8NXEQkOW7HqlFvsvIImo3LEg%2FSsJfTsMUzAiB4MA21nfg53p0G8boPKHo%2BUMV%2FXbpiAZfgeSB3fWGfgSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjw%2BjsU67e3hjxvGBKtwDFLCRX4CQ8TIbHiDfjaaBuaRDRuDWP4k%2FUS0avf07QRVwLijmBH%2FbFajxnz8uxeUjjWs5E9okHfL4BuU3sokNQLPIwJF7AgBAM%2B%2BeN5Ow31GsRJLdyVUbKwOxSaLzS6sVS1tWGcMDmxQN93SGj0c3gzZxUZjHZSGqO9n%2BPdu0iGVqNgU6lE9okFQydST5E%2Bj%2BLQWGHJavgeUFugWLakZCESocOw6iDr6hYxuCotj3l6eTPl5T2LwJvR4AiJ6LUZ8uRkqQP3VS%2FZIa49RjAFH6jLk1rISqsj319g%2BDA%2BgX8ykq3ezpyS%2BK9jz%2Fx13iSJ3S20ZbLATyoYBi15H4C1TqpLm%2Ff5bUgtagIJoBQ3BGRKmFf3DiWnKyR%2F%2FzzJUp%2F1sWoB8CoSyHBNc0RQ8c4CbZsLxYFwOYZDhd6ZOK%2F9Er9ryTNAw0bVI32A7v3PtAbGE4qxxS5YNpdU9WGLhXW4VnmD9%2B9usMFT6ukFwxVV%2BejTEUSCb8Bp4yGBVhCQ0oBj%2FhD%2BNUAFxNUKDDl71meVVn1lbjISt4pTSlMsuQQbTDODTXgHAtA%2FTf0rgNflz%2BWdJcxpBQuqg%2BZki5XZov2%2BJBPdYwhASV0nU8QQNsbtTTnk5G31jx4ioh7d72rg4ww9z2vgY6pgGzstSTPufFh6MC7qMMeRZQFVaA3DqqfiVMH%2B8zYsK84vAckN%2FmjFGm8mm49%2Beitun8gASpI2IbDu%2FeTCHylgLAzk1GPZPLb4FR6rbgbB9A4rtt%2FYRT%2Fgd92v8K9bhAIz2b%2BRnrlSU4y1V1vc3hAiS1btlZMWqeMdu1eij0cJe3PaV9gHOcrA4CIFXaQHYg5oPA3W2S5eviHaGV8AigE%2FKrqQAIXJBw&X-Amz-Signature=28e1536784a0dfa5be74f36f26133d4e4158e710665fd0ad074087a9e382aac2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
