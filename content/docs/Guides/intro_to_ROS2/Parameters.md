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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LNICAHD%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDQ88Erp%2FIkRCb1XjNUfIlTHAyhwinkDNueIQkxSJ%2FIQAiBBaxA6BN2fY56DdG5EmYy21oNfiRb8RCGqqhBEKP%2BGByqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGhFUhIfbH2vz3xcKtwDBpL2vLE8vp%2Fr7p2qoqR9EZgKI%2FU82ecrSqtktuny6GlXi4l8iMQvFKhJCylojgfb6POBy24Bji7wdMMWzKeDWyDmBb50Z%2FTzf%2FQJu%2FOhsKDHw%2BnkY%2BPk3JZyicwIY7LgOsM2idn%2BGJW15yMueKp%2BlolCVyqb3859Tgj6pDQuGcREY9A9bNEYTX00TuZ5LtSj4Gk0OHqb0BMlzjUJVCr8der8BGGD1Hri5tbfarzrc401szxvzUCBOhVCRFGdkQW0lVQId8DeFRsAlToaX9HiDiJhC03ICIwkBXemI39SK8n%2BE15eel6XYRQ7l5dijU118fQzKhcMKnmKKITtqRObfl4XATvOOSMECO202MZj3qx87upuUVDyqeWvWu2Mw8hgrcEGAv3SFdF88IAe0HNT8rP3U%2BXJxqr2b%2F7D2vMIKaU6pCE%2Bdu0lJ5GQPHQqyt9Q660pqij9LG33%2FMmMzKOpcdNAE0i2NmPXBjbKDVCD%2F%2F1jJeJdJwhgxa6GYai1Z0IwOOsUfH0Raw2eds1duC98hkgdgu1CPTatAGdCBX6BGxPJnAXBBtapCXM8ublFKxYlF%2BedRb2GM%2FWTBhwImPhEMEpFJJOSS4hU560Z5aruzM64bv%2Bj%2FKYcv3HVH%2BAwtrmZwAY6pgGM4QVaOIpiyKCcN%2BvJoP02WTa5ZOBpgCA6gQ93jSMf5JHeiawlctUBEkLCph4y28LJ1d2YnkCTvf31ywp1YCHQgX9L0uz2XHtin81cb%2FsADUyicXI8IVWPu6nHii6TTxXM0jzW%2F5tXxs%2BCo%2F7dSGTrTTaJCAeGwQf345cashoF91V7y9t26PqQi7VazePMX6ruvyvFMd%2F6PcgGId4Ne7p7g7DiiV%2B3&X-Amz-Signature=89088c1ffc96030a8f66f3a99a0f59acf859c120516149bc4ee0994440716e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
