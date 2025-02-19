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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YG4BVH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZlQswcHXTLjWVkUhMMdXNFBew1KIoybnw246aq%2BY3jQIhAIjOf2vPVlJxKYks%2FSO1HWnliSDrKERBDDgdRjD3ALZ4KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzByFrNjEqm5PJ5V1wq3ANt6uMVRZTmFSO18K%2F2l4WOug5tx%2FzUyVERBz2kf8tdA%2FjaPgc7128I55b6mkGgBS%2FiLJCOZeyUrMD8mY%2BTH7oCE5tG2ICiuFI9jtKkAKRGK9qwtDR3YYY7f6cFblJJBm3zfJJhryv9SlO3ol31V9YZV4Br1s6GYhyUQToJ8K5ABEBxF3OewAq7l%2Bgq8DWVAbP%2FxXOm9SwoyF3fvsn8rjiv1CdCMND1%2B6%2FlZA4wtCC44M%2B9jp1mpDG7NMh%2Bxlex6oAd7jWLIO5seZ3A%2FeQ0kpLD%2BU4%2BcoTGl1uRJyelBsex9avgpTkbwTDUs7v%2FXt2O3dfieRh1f9VKdpXJHObPyXJFPpe3%2BnSwK1Wg5mV%2By1FfRkdwVyv%2FLZ1JULl4nMXuHYVZawPnqaPv53TZK%2FeuEzU%2FE6S7vfR8L65VHwCIEpE1ozokn1jwoStELJQuCr4KfGwV9Kdy3%2BBvPki0xcX4nf2XKLkkrQ7SNaLC%2F7FG9b5sRhd4FN3R1j9dwMu4ztDs4pBwW4qpXX1UVNyp2HYJA3vZ0diujclA8CtEiRvwC0FABztCg9%2FQSteGOD%2BqyD2Q8cQCZy%2F17t9PdcFkYhYBLOhpC2zg4zgwGI79iHJ9qebmDg55T31pVhr3LwMhnTDu7ti9BjqkAUJHin57IkPMlcAmnJSdv4RneJVJZ21lbdWR%2FWCKD0uTyxv3YDXZH6Bx7ZpMVhGU8O6WiX8bIKa07fPnkLKfTqbN99%2BSSE7j5LrMAxuBIHtbjKP3Hx6EpBHR0dCjhs%2BjFJL42tsfbNACbUmkmF5Ny9VMpkfxSVJ8FenFIDqjJ4YhMP27ooMZaYO02ERr%2BqRO35HfdIjLEHpXNf8cLuSG%2F92X%2B4%2FV&X-Amz-Signature=f97fa184a0da5bf7b113451fffa857744333004a17ba303c534387d40de0e003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
