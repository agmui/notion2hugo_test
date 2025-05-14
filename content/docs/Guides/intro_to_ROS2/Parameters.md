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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXXRW4E%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDydEE0uB385dJIq7zEhGzIbmXbDNDs7MPMn8O9mLiBuAiEA6V%2F%2BgxkYNEY5Xv6SIZlO8N3R6eG4nsoOxru9dnBOPEAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4fycLozIo3I6IvoSrcAz0opBvBWpXm3orLQloGsndLNN9b6IsBjeT5gUSczDzr80aJyOKXhsmp977n6z9ZcGLg0E5I%2FXvAbSvQBkYdCVwIr%2BHqdH8o4%2B8Hxl%2Br3MT6XnRWLuUGY2Gy0iY%2FTuxqcNMRUsOH8PNN8PMRue553tQ%2BaRNyggpU3aNOZFS%2BSe%2FVNHgI7VceCtrM8%2BODXEh1teji6vVPy2nWyzdBUuV3QrWChsX%2BqeFZ8ngJ12cBt458TEgiBrNajiTqvfa3NrKECzxgSGL%2Bkk34%2BNoWmVzt5B5p0V%2Fq%2BP75wTkSgxZTxcr072V%2FVkymRG7rLUQpydbsDkcryre8%2FXtlrY7NIYVEsrv4KFAPaEUfvPItGnTrEjssWDCznM53yKsy7vezpcH6oidws96QPvyyNgTy3MwUJ03RURv3I3qVGvAGrugb08vIHshr8jMwSc7Aapmv6ZIj%2BpfLFQTc6oeuXj5K8IyVOY2yyY3mxrdpOarqv9Rofi5dy4drJGBbnTDBJjlPBKl5KaYqIEGAOBLERowi%2FwRwL9Z4%2Bur75a5WrH7W2n%2B1HSFCdbn%2BM6GO40FsrDas1luwUlW8SWP3Cemx9AP6kdKCtX9UpWqYco9gbQZklzKspfm1rdMsKzIPic8fqrPOMIDwj8EGOqUBSmgyj%2FV7YaKpYBxKaG5I3mlBdEExSkzw4uxibs0RWNjzIGnRpE%2Fy8RH42E%2Fil%2FeFknSftoEb0oQMiK69OvN5IcX7JrZQSb%2FeNcgubnr3V1eTx%2Bu1oNjGMqi1eh70x1o37zYWTBhc7IQ%2F9b%2BpvVXaRGkGwW8mnvzWETQh3NsEzFYMjIV9i6Fg107UCzklxOWbQr89UgP9raDRMdKtnP0%2BHWI%2BNrL8&X-Amz-Signature=b4dbcaaa884b25ba6d560bad6a53fce5aa05a2774fc05ae2fd9b3d382feeba81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
