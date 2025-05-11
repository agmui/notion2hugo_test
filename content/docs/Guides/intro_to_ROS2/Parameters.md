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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCJHZTTT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCUY%2Fdrzx0jbZKJH7UCjM9Q8xKniixUOAw5fgg0dwYriAIhANtV68YaV4J8sYfdNxzkW%2F%2BEu%2B9B%2F1iqiBbzY9CQaQ1HKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygTfNbEfmWCD03hnsq3APdi1M4LzdrgGjdwUT5wMBfbjyOVygtkr7F0myGYS23%2BBf0lwyBh95bJBtwLItOLiBzzrMFlSmfeHGdIaSouh%2BiEqlcDcgghLd5sDM9DZmR5JAXW6DB7eGi1Fk0QxpBvPdYTG8sqP5WX%2B1vDvUm9Sb0NBgrkfg3MlAd8ZdPQKphjuXS5dzo9G9qUuageq%2FQG0bgZ%2BstTI1grbGmdwQMaLOUD0gtKtkErQIJ%2Fwba8hANp8d5t9LNc2E7yqAY2SZMDsrYu8NMArhdF9Dmc7FsFFZ%2BAIcgRJf7yJyIWByB5DaVRGj4ed7i8ht1T8y3xcTp3m7FYWDOHSTVRDcqC1DHiAE7ojnbTGDCRSpKZFN9%2Futc%2Fm8fyuafepYLea3o%2B70gZQKqwWaIvAMxTli5F7btvoO8IYx0ReEmx3OsBcsXo18QZnIjafCYG%2FLhEwm1SRHM4DeI%2B5j900ZdGpW9H0mDxiBIaacH7tQu2%2BVBMDmtj2HswHQn9TdxYHw1YGngXJBNFI%2B5%2B%2FdY7a%2B%2BSSSqJoIw1bgYM5AsebzGQ5WWFbJFL9BQKOs7ggsS4IdJvd65bTbUoJUb7fCFqiLhJookH17WDWMAiTdAIuqcm5DFAtZMyKBqrmMDbsWlJNVko74LijCs3oDBBjqkAQKmg7m7yj9hsoIuyq%2FAK57acbyjjJHuWFpQ2s9zV4aPOFVFut9V%2FtU2uGT8A%2Ff6aNTCOlGGESiSPsNCinBJ%2FTKAtUzskqbQ65amBJDDPAVFZgzg3%2BCdvWre14TNnOZKUcCA8DwwWaAY0lEcg3ZDrYoca25TbPP2hlrH4rPoXtQ9FAQGBzFWeZ7KhTM25mCArxlSLyVCiDLKxyiZpd%2FvsT0t2GTb&X-Amz-Signature=2a83c8363f0936fc8b7ffa2fec027f3cdc17159b63981cdcab05339956cdfae3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
