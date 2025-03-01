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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FVXYR7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFsSLcKT4V1tFxEvroHhhIH1Md%2Fpxqu8AGpnnmMZtYRyAiAonroHD4UP%2FJ0nGCKKtDZWWm7kSjAZWtYknf%2FWcf5LRyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1XZOte7WnxvEGdcKtwD7b6OKFC6lCST5%2BTciRz7v4lQkYfVSv9R4rsBlSpMhXcOTGpwCiFi8ekAFtG0mOcTbqsj8%2F1wr4Im%2BrpaSsM2fB%2BWOTFfWlyHM%2F161oE%2Fy81qFOhotrFDZvMJK4wFTibCJCkYS0dtAhOycWT4CNPxGl4gLfvytLQn3os02ccSJYYq9yE9xY7X3TMKWK3ZWe8QxaIZNAUExwZdcWMeXRLEdGJzd%2FCXOaryg2wdE%2BumHyp%2FShT8xDxw4m%2FKO5fdFwyQTxtZ6h6HN99pFPaOIYYjPzf4H2fZEpqnW%2BXA6%2BJEkiyGwoe77sWdJACZGWfxOF1R3kSiWmu7jcJ9Z5xOn0e1Ktm9H9UqxEc5iIGrsECP7GfLieUt7o2%2BNPdpVu1xYtcxo9SbUTHPB6DFuyP5VaZwNjb%2FciSvbl95H79YWZSr91bj8YANiORwG%2B5tMZdioHfKAG2JeYO%2Fd%2FoX2qhbofh1hHTQ%2FH0lbHSjVJh1VGeXvObaTo2YRodTjHtzCK2NEI%2BpcO2sIZDvlQwLAlu4aiLasWc8DCFvNzFWu7yy0NGn9Z9tFroqaWL%2BFl04Z9AHSCnsVyWcF%2BKx7DX7idOiDAi51f3DA0RTExtIE2PhuDJcc4gf6v6RKFBO3ckMUlEwnMeNvgY6pgHLMP939XoAOsPXe7jzbZacACGJmE2Ml%2B1qik6GeUf8HiNCnG%2BjtqX%2FgIMhxbzqlaDRMNXYlF3lyKCOa%2BJfaWzP3jQu34pi4ejpcjEr2wwbrMBRwtRCMsZUnr0HXXzi5X01Dag73hA4Njb%2FS9A%2B1qe7A2BcdT6qeqDZO0uCZGq%2BuJzn2AVPE6XIuBPLC%2BgbAw5KfkIMV4wz7peY9tdtqlimojVkoz60&X-Amz-Signature=1c410aac6e0e77a6d79c3300d764fa8ea2a669f113d75fc223a8b2fea21961a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
