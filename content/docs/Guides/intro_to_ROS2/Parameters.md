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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAKHCQ3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk0hTjxvkK72m4epBeE4nNQj9ycEl506Lio3WvoR5%2B8AIhANHo%2Fre4Xoreb0n2khzwNQTWE0VTRF%2FfrMhM%2FcS1IgUyKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwVVdIXGmwbfyKB%2FQq3ANfvWeB%2FYOIDNCPQSWccIjVSNpH%2BE8N1yqgho%2F05TBZHGhnTcc%2Fg%2Fff7y2%2F6%2FG8vPyo3XsU1VFiVKPPXYRJVO8Muc6PUuajzsdoInhB5uxuMyHT5yjF4WTuYVSgurD02eWQZX03XoExZHUHABaHFSgfL5sS%2BGGjr3Jly9rouZSOol43cF05qw97pG3%2FR6Cf4QTqf0KfuHcAz7U%2Ft%2B32RNIT3XxhFQkjQsRsBqqWG09ogVZY7aFn%2FqU4e%2FOQS0BJiazJIIdCLS3R0Xxitjr6pm%2FbN1bGj2zqcLMSnuiiOtEBSjIdpRRz1wzf7mjmxXLdJxVlUoYSu9%2FnEEOowDcjyAcic6aFdU9geym%2FwcaNffUgFqAs2ZxLy%2F3Brn5SZwG51eti4X94jY2vzS06BQU9nX59x6NYKVa8LRBtAnVjMXOj9X7dK%2FFhUU72dogo%2F2PLGwy7%2FaWO3XBBOYltLo9PUBkyaPMBOLMkAhrV8t6U1Cobe%2FWg0vD1uzb3YHyo5zE2PrWQyKpFZVRYV%2FonMOjMAz3w6Uo8vjsyIdzr7Tk6Pg%2FId2Ml%2FhBFluZZJa75LUPlLreD4p4o%2BK7V7SsJTB5FbAdi6v0TNj%2Br9xQ%2BrZs%2Be57IfPsypon3XajMhsp%2FSzC5rbHBBjqkAbJvszp7kr6r8V5UZaxCwhXQcHzw%2B6Hnuf7qGN6A6WMyAW43JAOGW%2FCUu%2BTDb0lGLvvuEDzJBj2bg%2BAJy6oBaOlUZW4S9QAdJ06eW12KUqf16PkBLrolLHSbqQwRotyaV4mVKA9cCZOPUmi9yPybeNl5cdiMY3vLJarTO8ZE2JZhQVG3Ab9lfjHOkCu%2Bo3qRSqsotryQizSqC7ARplbCdjUFON66&X-Amz-Signature=58bc3cf2db08c96902b918f417d854fc7ca514b2716895d678a7cfc007764826&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
