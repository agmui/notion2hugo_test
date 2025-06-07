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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGJL72H%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs8jCwtok3kp44jdc83cirm0GDxiyNCiYk73HlN5x4LAiEA4xIw23OAwZvliAcNGUhZpqx06UY9DZLL4M7Dw0Rsmggq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFyk%2B2UFDzUIbFvinircA5emMWLxOg1ptlhxa5phK0kEt2O9rIb1icGrKjQqkGML0kwqRB7IYq6%2FNEWiM68IP5rxh1TR8%2FEzbcsKCYY050PfatHZ4KUY%2FVPkWWb%2FyK%2BSsWTo4VrwAHRbwBFzUSxCi8p71R2FCm26n3tvCcxQUGS3H2ig7x3v1au4WyHtB%2F7V9u7mH%2BZi93mVrMlxuTjq%2BXyCgjzw%2FxwA1LiZFmPVJPusbEjZedgXojhfVn4mRnNAk%2Bg551vgZ2i4WzHnzRpzAn2skCUMBlhW359EZfoiDtGMLPO2XuqLepB6qpzRD7LDDdpcg62J3b%2BUNo1I%2FCOPoySFfcPqns5R%2FInlpBS2pjecfSpXuD2NajQ842siRWnB1fJDp%2BvNfDnCyOqEvFEUi7%2BnoxTNbjNnn5G7CD%2BCqbI95y73wNlg5kYl%2FVkfmWLS5hM4Z6kwFKNX0kLBPy%2BhyzT8eKi5hutHKGncGfwmDni2MN02eA5EyllpWr6In3YjFBJ2CKI5xhibU3eKaWJRobTGSEo7hRB3CGJhmNTd6smmTCNIeYcEjqPSETRt%2BGEL5HG6U%2FT4TI%2Fi25SXRhZoVtq%2FnJLG%2BFN7QAr06cR7JgpnzY5He913%2B%2BpAf6xqdSbU8AaqF0PR9rm7xONgMNbAjsIGOqUBt2uheHtaCB5pgRfOnISqSe3uPH34QeEuzq%2FBmBSFZFr1EcsLFWRkt%2Fzk2tEEBhMqZGbgnH9krq2IAGh%2FZAzD%2FXr7aFGV9r0hVEYa2cKwtGBfEHj27vaFKAu1mh%2BVSj3sC8TGC8fS%2FiJmrqK2fQNW7BQ8u%2BXcEUEE9%2FOZnoeeSFpNEHSWQC4q8xB1XH8vDKZMEJeRbhrD%2Fq9s9mZeIV%2BZskzcbb7T&X-Amz-Signature=9aa2a5f029ce2daa55a9fc822a63053b9e4b2f8c4cec74022f583defe458581f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
