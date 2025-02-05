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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7M4MNN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDPXLJ%2FL2kjHUUWiOpFyYevqFayrcOnkxynoojYNRV5MAiEA%2F5GThXbBC0UMFBRBFxlrD6GBjItCoLxu9jaLK4NNNDYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDJE%2FIWjWF7jBGqqKyrcA%2BzYij5bQRcLcMHSRVzpj47BSnFLsRb3D1jqhbN7U45l67hmIwLJOnZvxanj9SDBxsriDKeV9E5luFKWnBIAlB5h27nAYhNJZPGIxHjnU6Q2rsM0fhmze9pGV7%2BfpbY66zBTxKZ47OG%2B0aUpgxIF0zAnUMl2a6DULbELj0JFt2YeWAn%2FnnUcJ39GjGsu7%2BheNTdnFjw1d3FgMPmPY4bee%2Bjfl4ExZuVLs7%2FuAdOY%2FrbOvuT8cX%2FWbiuwLaQGYqk9I%2BywLTWiZq3dZu0AeaB3uRSVTSxH1tEbBoVyG1d5BJj3CkQJ7c072twlVHWoUZ9d0RumU9pBc0Krl8aPfU00fJ4Z0hX%2B6Kui2EQyVqkdslA7WYjNa8Wgw1J2xO0KU3DntJwj1XmzqiVHwqiPcGprAkBq7gup5H91oXJfKgl0%2FndJ7OYJUt5kOqBEBMsR36FsTyNuYN%2FlwLi1M9Mh%2BuBCb5ROISJ4y9pt5UH2eCo1A7044cSkLfdHpGXbSUW8QbBsnvSgh92BshxUBikRA7vNAD8koOvRUXMOMfNTQzp08NAlExAyrkriJOjqRHu%2F7bwmOs5umb92BtxVOgbp8tTlsiMAZyWoF%2Ff61wPR3Ja%2FwdNLTEHVboIC0bHWSqRyMOGLjb0GOqUB3%2BYPNqY%2Bu07lBHa0RQzzkOSC7U05UOcEDUHwVFbHW2wwxcXm%2BtcnFw1hzqvKRsGvLvTvHGkPWFANt9TpQ3Te0SUTpfbVdRCOvInwJceOKuHnkbiaRLfurY%2FdTeR1NkoWEy3HA0Y8yiNMIOpzfsOcIvzaOSG0cAQyDrzf6RQhW%2BXE8rrZvxH6LRBRlXpdcxqgYKggvWrshMfOwPtBrHcYSzV4vJzk&X-Amz-Signature=295793e2b9cd34c16d49a1924917085d9361cc11ff9ee046dc14dde70ef2c6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
