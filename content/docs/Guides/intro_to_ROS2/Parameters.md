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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHMIGJC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaDxQydwwKaURelIQTMEhKWwY%2BUyJaw4THfr9Fcf95WwIgbp4EmY0LKHDGO%2FMTlL%2F1n%2FwDYagmb2mq78m84j80N4EqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq3ezW6CHcKb5OQ6CrcA9xjKILobZHnLlc%2BvTT50W7HEzAJM0k9iWs1OM4CVSVYTVSaWt7rSHXFRGT3UGatyIBsOAPJ%2Fn0IOad62Xyn7eX2LRtm2OwXAAqjFa42ucP41nuyhsZ1HAmjAj9JGccZfIJD4Zk%2Ba6Hbn4sinrFCFv1rgQyRprF7fPMn%2FwccbsNLaVEorzFnd%2FkOfr5gGX0tD%2FgGqY%2BoOuTNjNpeVSmydWk7quf0iV735jQUPd%2BUIzXWExYgaud4miFzHajWs3b5pfZOoTT%2FzMPZs%2FnFoZ%2FGnhzjsG2CRMP74Ik2A1cUOFGg7nKh1r81ik%2FJheLW69f0c47WaiPLbWs8xb3HHAbfp31uxPqSuNa5ieynrC%2FBTSR3Rcmy63qm6Mpwd9j77x1CkSX6nQSxbbeqinOuO%2BYmI3dLsIrnysWkDINqId3HhI2slOyZqUtCnN6JfjcPaLQllVTnc9Url%2FfATvzCsoUfh2lAyBSWtpZjx1it6QmiEzt4X%2B%2BnDJO3YaV43eCAMoaq5YhomZOLc%2FaQQ3nWwfC8rn1Qy5qZV8ChWuznZsb9UbX4T5sssDzScWlWGo6yXEWTCplnPOHzutT4HnTxuwVQNXMQh46MQCeiqY0JBBeoOIZ%2FDjwNFB9lXPAxoIbZMPb6r8EGOqUBiHgyw7o%2BUYcISrX%2Fic4hiq2kKHGQUbkGP8rN2d0utG%2FQqi4J6mePSW6F4EpfmLIK48NsJ8q80l0salBe4E0xU%2B%2BBRn0N10ngTHLC0CRN%2FCRm6aNZYS472gDQW4ctGyYlgzGQEFF1uf9Hz8lPmHvkzcwdpFnberNlxCWOaKFRrGtIRoIRy5INcc0FF9J7fbEwQ6%2FP%2FGbXV9lW3pPwjPGj5DTnwajG&X-Amz-Signature=7327b9a5954a934ab84a41ce9fdbf20c26f7befa05acc26186ae19dd11b07ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
