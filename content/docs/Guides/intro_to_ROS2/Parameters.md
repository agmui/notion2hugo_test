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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBJGIU63%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD%2F3WgilGOowi723VDBNmUM6dk9iDk%2FFTupiOqtDg7efAIhAOFnTD8SECuWp5vxE%2FtNGSmpizqqKfd%2Bdg1Zl0NAZu99Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz%2BcEa%2B%2BPAeWrf9E9sq3APD1YN%2Bg7mS1qWgGnub3w3eMhm7TQUmU7u%2BADyGJq6y7Wn2daeuC0p7vWdcgTj8D2sM6sApJjgsg4PyV90olD2d9SIqIxSBJg2k8Crx%2BP%2B9rnObHzOT48%2Bsn%2BWhFLkbTfHuU57lYeefQ37RVAQWXZejo0mAK8HQ7p2PSIyYQx0VfWby%2Fj%2FRaT3K2M7UT%2F5Awlv6cHrGntHSAvab4w8XCCE1fNfAJ1RMCjeP1LvMqA704DNxSEtJ0greotJeEC4MWCSEYb8ocHGoqD%2F3U%2FejuFNzU6dURPE8FoM6IAOBCkoD1Jnb7a6t%2BWfKxcUAkQbFInvw95gdrmbqPegcUgO4KVGpNkA26KKVHSRLdP1cID82QdovZS7JP6qWEAYIgAmB7cT5swe%2FDa%2Fu%2FgduvelSNwLhw0trIuAF0BWb0LECmfjYamMr%2F%2B5K2DhU%2FZhgCwF5Q4oXUFRIfsQMKWMkfMws3BSySH%2BROGuxZdFKXRAneIEa3kfgRB7luSx%2Bdc9DX%2FuvjEMt5zmaVb%2BGxSiRDFsIHNMD9yX0FcK2bP1JLjYwmuVoBsUsev48DeGQ741tmaaLhDsABcWq3GYGFMP1bIzIu2JVyEeLJkOB7ky9fDECv7f1fNjmR0HlqXPOG9AgZjC28vTCBjqkAVm54wxrb58cWXRdh0sNb%2B%2FMce6fXNkiDXyVJ28LMzENa8lwgtd9SIAMvy9hl2yaScE0odqLgW6qrVq48L0LhruI6l6rnQdg8smPYIPcGEMGrh1L%2B12csiJ5pfWw5SchzHKTBU3RaaNplwNE1sITlHSd9GRn1I2YA4ZPmAV%2BxlnLBtwt6SXNu1aLtkZP80L2lbykmiZ%2FAOUmrt%2FT5VFRQrpiw4%2FT&X-Amz-Signature=b74d0dea3d3158114e732a6a1fc7ed03b478faa3d93f08bafb60f58171393a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
