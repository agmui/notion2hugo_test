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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRKMGLE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDMnMvcm6LlmoxEVJRDmISsKNWjawz2GHIfhjG4S%2F8CwIhAMlKVqobbP8bu1siv9MZXtsTMsz%2FngBQrvsiVctcfBFeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFfGVLZ5RPoIY8%2BEgq3AOt5YFREiqpIjHWO2hG9D5zQIO7FWUUSh1HelI%2BesgseIsr%2FKq5YzeDD7WbYQApghIBTttQKWa6OcM2ukJ34%2FXMX%2Br0OFMwviHUazCJEOF5jynVubLc8IwvFAjLf1F3%2B6tac90AeKa9ii2epI67ThlQoM0BHcZe9od9L70rEdSm6kFY9l1ktGnEF6lKWKC5FAE04D5fLtX3rSq4A1XbHlIvR51QrJqdsqWWVcCm4E5Za7Q6x2owT1q5s1Wsc3yn%2F73%2B7Wdi8dTc2S8HLHlrBXhbglL05VKBTUXlR0cmgE5VVi%2FpThpeimt5EUEtb%2FQsRMN3x3I%2FEsfaORdXuRcipRdjzdbfTB3nstZY7dmegk163%2BlK9QadFYW1m3dXZ4C5CAWvKZQ3xNnNPoPWa8e13s74hSx%2BvDyNc7V0qarBeSpRnsos4HdlnxKRzs%2F4VsdeZbOHpt1cRTGVxJVp3uHqZExETzUq8jF%2F54ZC2jLhz%2FTcJUOxzbeeqJ89xfIyP6x32XV1UeHBQLvRhJ7%2BlBdnhtRCcuKc5WJ7Bg2CONTTdLzBhsl1j0jweF7mCF8jX8hHjRyqSO5wg6FBOzHObxWoc9OGkY4HyBrxtVa6WEd2HUvunCskNOdVas6aJYb3xjCBhM7CBjqkAa4YRiSGvpr5bVGh6455AbfCrgGJLA5BlfZ4MRXrjhkqDliQ79IUzkkUaMVvXcncsMyFF3Szx5WSkgUIANEPnlHPG%2B4AOVM0khF9vwZCoZPwUZY%2B0y%2BqYqR3QmOsQUXU869NMa1zXFwkBAwt0rYYY%2BeqTUchU3q9FABVU6fUFvw1g3ZYgqCFhL4ENxAwOgUzLODuAhPO33xHet2UKOK1NCfttEvp&X-Amz-Signature=315ad54224d5a2a3ce713a9739202cad4a3373046df94830ebe73f98648a76b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
