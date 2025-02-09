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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY2TLSKS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXOTttvMusGqp8BAiGueCLaeEq4NptP4R6R4Ct8u9X7AiAak6mfalqO2y1TCNiH6PiC7e%2Fi9NEsOEYa5aaqCOS76iqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgns02slKi6n6HUNKtwDqdjtR%2BoQXAeKor1wG9xWDUAg%2BIBeGRrMqraPSIPuupTa8V8DRCAK6jr70pgr4Ej4em%2Fo%2FCn2a66DnumXYG6T2oH36D0OnZUf6jG9L%2BnaglcoeNvoRQd5YadIMrf33oBOZsCr4Yn8WqrFXwxb0B0YCEd1xHvPWw2hJZ73AgNpAn8FJBxfQJ0xOCx1zjr%2FQKoYgLK%2Fg1Nww%2Fvm6i6fAsboNB7yVnXgPUvderhpgzB3%2BU4FpZdqtzNcCQC8DaYomPnknTROFsTJsrE52uIVCMc3nWwwVraniAf3DxYPCAX4hs8qFUKX8ogaCuR%2BAvTOihBsb8lQTwdS%2FbOvELFOY3Ut2P%2FUSz46SHXVovE0QNB9DLkvIqAMzkhGVrCpKdYOTfn3rY%2F1z9UtemuhTt7%2BU9%2FLS8RePtG4eKhPgKI1Vu1qojKMP0nQPL9hS2m72xm0dobarDcPm5RAKYMBTe7UDTjuZ5lvT8hcBgcOGmNxVeWXEBJE7qbAEGyxli7szBJ5R1NG618OZOeq6SMbTjcGvtn0Ws5oVkPr8oNpi2JJ6QECJo5XkYYh7e%2F17eUf9Dl9%2FhP51JV5quqELYStTHbaI%2BPQJbdnL%2B%2F3Wdck9UKhqYXV%2BIxYYvqOdTeqwsp69N8w04ajvQY6pgEjj7eW%2FVO%2B03MPel7or249iEhwDGKIlsyPEyoefik%2Bd8FT%2BIP4OoaDVQQDLGmppkdJ%2FNhZGIHbKA1GFBHk14Ehfn2GxUrIg500NBDwNlqelaXve7fo1QlKoyPyHgPp%2Fby%2BEtPApryM%2BzDYkz9KMIm6%2F%2BqHaweDyCeQXLSFs2tex4kn2GfcxlgMz1UM%2F8xSje4JOkfbUFdfJeR8jdt%2F%2FGIKIRlwjuCU&X-Amz-Signature=c28e0b73b971833901fa66412ac648a7d189fc96ee793c2f41234953e6210827&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
