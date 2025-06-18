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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7CTLNS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XIzOQyIRiiXKeB4Xp2WZZzduekup2t%2FlDx6bDAWisAIhANadHaEpOupCjY2moVPpS%2BCmpXkQlyreONCX4Wjy62IMKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ0giPnfGvqAdOW84q3AO9OoVWO0hN1jpBxNqMxdEpV5t6kghgI%2B30bSNjVTynaScIZdSdQh3p13jl5DWcsTMzxO4cFfMmdnZYe9bGvse8KTT%2FPl0HJRovE2f1QaOZDVXIUpm0DWyo02rVOSZts2IXP2jFL9iPGPL6rJGKLkvC6b7%2FyvLjamcc7rLizfr9lme7qmZ9DeqJC5LhTQw%2BAcrLTv%2BycbdciobRtGrZ5oKXWOSj8i2U7rMpJ%2FGlK1dSuoH6A3YhcJFihBBKkoxl4zBYoxHwARsKxQiegipkoWy%2Fc7w4fjlH5mKHjQTpFB8T89Bltz4zkVJSZthgGIpe60YAtzhYsPF0smOsn0Wkrw%2BAlVRRJ42ovX2fXmlN2J9tQCgW1WfuwodiKoJ6NdFbN3L0mYOX2tSOUip4TjEZkAOQGraJPUk2cT0X5wJLn1raEL9s9tymQoupNC0EhQObDS7fCK9bb%2FK5D81TgRsCBJRubY%2FUuTJi0w1mP79Wsds8slTY6YbQqqjqu5rlA9rXBavkQgqtOAb3dBF49RrrHDKR8rWsRukxNckczy8EFiS7mOonD0wdxcYXbUykCv8jBxA0vOoIuoAl%2Bsitk9E5RSgLUhegtH4cSGLAyMqbqJKzeh0nD7dJ6b3nq7yBizCk%2B8vCBjqkAYTuTLrsKjPmDKr21gfwaDlVTUIXeqtkxQbO76NdUUGvs3XdZOT6WHHaagrRDf%2BGniUk1k0VIAOUBi7f49iSQpohjywYMxF4Zgg%2F0uRg%2BGc%2F3k2291ficMHQffMGqiGz6zJss8skA2Ba85FHIonn%2FWeV4aBl99LfMYi5Fd1cvTu1BF%2FgNOCgFCNi8ptBCFQQYCoPTep6KrcPEZk6jf3gFkfbjmlE&X-Amz-Signature=9c664c0fa4ebe6f215f9fb1e41ae0c2665f8b024894d145aad2ed7b16b91b52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
