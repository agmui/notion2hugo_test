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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OILLRUZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEQ6at6D5xbmTO%2BC%2BDz8IN69J1jPTAtb4I0UHdL6sWYfAiB0%2FYAgmInSPi8959G95tPTvLUmbZ90rzMR73bbGVfAgCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDQk2MuALLP3kngR3KtwD%2FOMIzTem5zk3GH0XXkZZ8XvxzOP32Bx8Zow50YLxAkNjAHJcfpD4dWG01bh1t3w6Xwc5yx7uKypPF%2FKZsoOK9Ywi%2FC%2Ba4G1BSHEG8q%2FAH7PukmFahJc19e129zgA5xXrmokmkiBhWG1d0ebhYkYNoUmUrDiQFKUzcB5SRGHZCIYdL7pyDRUVuDoWXpByUXGJR3WcVc%2B%2FcQsdK7uJpwOqxbLQsuH0E4EOLroCDxSpYSsgSam5tobHiqCNC63xpSbR8nrqOzUd%2Fp7hRofS05LOdT1hbR8%2B1ofwkhRms82TaqNJa90Umk354DUsGyhpWbt3aY2SXskTBCuthcXOmReGUmF1TrD37nGh8R7IWyloP8rfqCNXGOX1H3ebZNO81nqatqgGQK3n4HwuWuPsSssZ2kFJ4MDG5l2dO6mgtzjdHvxEsCA61tquprdHmSqa%2Fi7V993waiSm5uINtGjlzkOtI%2F%2BM8ngAc9PU%2Fxn6Q7wEHCsxpS1GXsBzBcun4QOfL3yIsYVb7%2Bb2yd0NzzAYB%2B7pzR0rY82BLMj7Ekhb42C5W8mj358toI3nU6skjo4glyoNBXPnhGXzKPShOzqARFKLm%2FemyIK8ozzkIMSym9m0cMH5GKm9TUklH9xoV1kw%2BMG1wgY6pgFZedDT0qxBPx%2Bfo174zdxBqbb14Rf8%2BoAwGee1dmpnrYAKlRuLt54aoqg0fgewW2p%2FAHPW%2FigYW0OrMsHwpMRlsyeJWhQ2p5o%2Bi5OZLjt5ZlCIZ2yIv2VZAA5t8zdATj6%2F4emf8WVOAxR1B6afdPn5sPV%2BFldc%2BJ3LsG69BBsdc22wzlaQVlCNNVO%2BWbY2ebcaW9i8tCW8d1iGrVteFT51vUxWMn%2Fx&X-Amz-Signature=3d8f8949af9eca20c393979e879d441b9e8dec5193226e6568de09fa4593a0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
