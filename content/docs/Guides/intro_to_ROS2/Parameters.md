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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTEHZJD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBDLZPoZH5P2v8e75EZ%2Bn55t4h%2F3RoJT4xbxeubD4CBDAiAhhh2cbNzpUWX2kqzNHKLZHm0oiDyjuckelOiEJPGIyyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgp6CNDVqnZgIqzTuKtwD2e4mkVxBf4U23ZCiDQYp58WZgMg0i0a0JI70UllFhteb7xX1jPPQFMSMDvavgprAhdu9UQkFJgSUIpwcYoAGlkoccuvAZ8fvQBaKN13BCY6OoHvlPgDJCtJQnRZjVuDgKhmEMrzrd1%2B49BriCDeGJ3ziURzNdjERhGfj90CFIf6DMAMX1f9g%2FzMWnPQxokOjT9BtYNznROCLWuEHHLcYzjk%2BINMihrFEFKf7vq27RgAx0PyHAdA41LOAjV583LcDQl%2FZCp7%2FG5GBgZKzEBmB05jvY99CTzzFfE2loo8cPMDdtMNMTNMOvRvwkaUDY633O0eX6Mtcb2eZ%2BoMlBoI1ifnZD3raJTSQIkIdT35vHp4Fnml1wUiMdTl0OsHHn7xxbg5v5wIGFMu2d5Y9CbBhw6JmX23pxdMHlNXj%2F8YeoDzA6yHBeT9Wp4zi6idYdtVuukckm%2BPnkYIZwNUdQQbjnF1ezmWPpcrGGGnEef7nu300WtajuYkTrOzK6N07uiBgCTBGY0Jn%2FEqVKHCsL3MXntGfQDYdm66AQVQV1HyqTlSybONqjt6S44jOs3LSCbtPNyUgBornBEIF7%2Bnul7j4OablTQK8tzFymva9DohqC83vI2MpIypeBHn8qBIw0aatwwY6pgHtd0TbeMefRDfRUdD14inOmnvia48zaN6rHiPNCj%2FzwiE70sYnogkpMwx%2BR28P9YoUpenZf95IT%2FhTl%2FO6CMcB9%2Furz9p0kxK1nwVjbp9ehHSsRBqs%2B3bOwGi8EgFA1n34hATLtsNocgF40yrKlc%2FrHZTCt0cURPIP7juZMKakKdy0t0D2Nc%2Bg%2BzTTq1uFRtA4xYbHxQaan0ACKvzz8rPVgGdMs4Jm&X-Amz-Signature=5a866864c30c2ad5a466075db3b3dca43dc296e2db2fffbba5d4d556533b4bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
