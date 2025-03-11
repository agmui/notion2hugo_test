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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYAVPB2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmaKwbUpQacNfZSeNpUzcbnR8f4HJWbuBpcW0sykm5hgIhALPM7MG0EdfhiyyeAsNFWRcoE3kUJ69DXsJxDZsb5TmTKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKtSNZnjEsh3BDnpQq3ANncXYkThL4ry2TzYJiU2cA%2FeZJSt%2Fv%2BMkd02%2F162zGx%2B%2FkPGj3zjKPf4olKxdJPR3vJfrcKWED5yzNXHxtFwgJ8LzTyL%2FR5s%2Baq8vNiQlmArfQGQif5YTFtMHUdJQ%2FYowsWkRaKCXLplVvUko6IYD1XKsAzKJWezXJ2JKrmx89W4Rms5%2F3UI8feLB8gPddVXMnBNs8xHKNdum%2BDbNjiRRmienZjvCfReTjz%2F7VgCBhqYvSp6Fy5cWG9zU%2BxBXFTKyYHlwynKZMx5z7BTJH1XY689ZhhJLEHWrSUaHwtrfiFyIl0tD3RlszPYp%2FS3g6PKqSsqdJuvYI04DKESLjgGgMb%2BbCeCPfYdyibbfaJOxtdaLWsJ2%2FlfwJrWAOxYlzh3guZvJUECWNJdQ5LIEojP73x73%2FdbKZfHCUy68iPUzz3APpWjtLdVOF%2Bjy0XFO4NacyBOz%2BTOvH8aLL1Ts48Gp%2BEeqJ%2ByQbQS%2FBn7ha2GLu8vZO4p35mt7te%2FTRhlkoE6pcmWmbC2vN3FUEqdOHgkNkZBJiTTnjU3PqTs3g8oT4ILAWzN9EVgM5MMrgd0Z9JkFE2%2BDpr9azT08F8LyNoaHFvRyO%2Bgd2vEpKKY%2BDonEx8okPu54eD6jr5mf4KjDU68C%2BBjqkAVhHjNmr0eSGV8qh5LDXABE59tvyU1X8RiHp3DZEsP9P%2BN1ZeeRbHvRZ0mhQ0tTxqNiLDYRaYl%2BqNagGycizNH1O9jhFDuDwMMqBt3EFmw2gcseIkC4qFdotLEFV%2FclYIj%2FrqxwCIunqFscQ3n%2FFxB%2FhkOOamf3oM9r3qkWWbr070F%2By4IMdl1d0QW3TptC10lPBZdV9cIFXzfQtppmS2B31lnvH&X-Amz-Signature=54d9ea334005acc7da969bbfa22fa230874f1f47a0080d1ab6ba1c153a959d18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
