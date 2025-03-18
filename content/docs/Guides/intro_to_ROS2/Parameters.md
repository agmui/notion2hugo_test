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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635S2ZNN5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3jEpwQzrVtPYbQjVZrHLlhpSFD1u3KeIx3d9OhNZA5AIhAPGdm1SfKSpfN1Tp%2BmMgfqEmlhTH19HDmAfwUTBrqrwWKv8DCFgQABoMNjM3NDIzMTgzODA1IgzAHqN1vbD6fMGFoUMq3ANu1sCG6GebndNclbBCqZnDKmgP6EO%2BE3k7WYdM7xOuoGixzvRH6oG4Q2O%2FPMXIW1xDTFp0LW8JdF7p70XKc7zrbU8Jf0gDgbOsr5O64%2F%2FQPsJ35I1Orqgdq6iW8u7%2B77sdA8S0HGHuklzcMcdsp1yFcLLS1b5169MHJ5W%2BlXbqh3OVi0axODw7OXlY%2FGanxSzzG3Xg%2FuF4E%2BtKIt%2FbqeKexndg0mxvMRWpt1JfVjcPCj0My%2Fr%2BglUiSQcQCjsp6QthA83y3CUuLRpn0ePSv%2Bx2SepsMEizZ7YaVH2l7QU3n8qA3KvHJ43jVAPn7IQiz6uaxK9URDJkehu9qUzpiCR22MX3Xzc%2BFyL56%2FUSjBienaFiolY5O%2BAkXSS6eJhHYi1lS%2B8AR5XqkovtrxRMT1Qu%2F7SiNFA2qLE%2BljKNG4tgVl9GI3vDLOyfjJyQFRNquQMSzP56iAeXRQBhgEKkp8KIfvOCyBtGOVPEICuRUUMlWykwQm%2B8w6W77wyudw00SWwLG45wrBLW3BJVdD72MJyjWgzATP3nrZ6uBheEhC35mq27qblQw0Ul4DVVsJbCeeP%2By7D6%2FzAQ5OzRDS78GYjQC9Wlf688sxpetvAj%2BTijOrBD5L%2FKJ07R2uSjiTCvtuS%2BBjqkAUUeSVk%2BHDXIr6nDAbrUhCrkQUOc1l2%2BKMr3mBzlLjBiSBxn8yvDq8dfnVbI8qQKVlCObkV7yGv4g6SVj9fVAHI2Op19D%2FTiMaq7VetgTSkyhrkwBc6kffMuk79cubO0xPAcbbFWvAQIJVEigtavOSC6mSj8qc6JmnjkN78JLY4AC0HCt3GIlBuF0cxneHACD7Doro3LC3EPY31OoW0FTlQ6k9L5&X-Amz-Signature=c3c3ce29807b69cf0673331fae1b84a2e3fe0899864d66455d55eb248a161b79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
