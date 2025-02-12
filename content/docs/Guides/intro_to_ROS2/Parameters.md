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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWEFQF5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa0%2FJMiwWzW4wwadkaxvvB%2BC0aDTkP03bEWHvxaN%2F8WwIhAJYhAVqrkLC8G0%2BIF8I7oOyiVsRBwofkHpiL1kVelWrmKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN9gxEl96P7oLkY6Uq3AO2y7YXyJKeT%2B%2F7ZMN3Jy%2BXLcEQvjYyQvQr4FEkl7lbZnFUjQ4xTx1R7PJoRJr7SlhEq%2BY%2B96sw1zcn2WDESgKnatFGuXmNIJRtUXAhd3ZwA7U0oxw2EoIYDn%2BYxDm5Ujh59332yy3T1KGsk0cWw8rftf7oXhs7KWFKOR9cN9yUZVP9xKa7oiCafSyRvPhe%2FC%2FhPx6dk1DY%2BND%2BHzcLdvb7m7AJGO7gmTMKWbOG54qpHEBKoG3CKniVGn9wCVNZCU3VnszFVgKz%2FI6Z3qIdztCMriHLiR%2FRygl1IIeLlR%2B2Wxky1zL14agMkgp549manuJz65Np7%2F2SC1t9%2F4bb0pvShd7A6vHch%2Fg6R63RuEVjFLJl4AsNKGNzu%2FJAWyo5iPBt3X54tSUqQ5MO2pp41xKjWMXvXgMPAgIItUAY%2FC2oVSSBWv%2BUQwBmPXO2qBAOVSAXbORefsY60q74Huw661PgwR4vNqX6hh5MUZWlbZmaSQFv8WxC9dc6%2B8ac%2Fx1S8udjo2KwlQKyL%2Bei7WEatXc98mRvUzqno%2F8349DJs1hyJnH3KGHdE68YM0UEh%2BMGrAxFRbf%2FznxkRuLLaPPCUhL1sDK8CnrS59smgvEmi%2B0j2qCukYCGNfpQ%2FJb8qzCirLK9BjqkAWK4B5XfaoUKBkqPr4tpv%2FyClIc5S0KBIXl09Fx5if0lSKQZwp7757Ac1ZU3rxilD%2BZQ7ceWhziOzFzR99ISfEPinlJpgAm0T%2BSEz4bVjrEC6cirNB3eyKaPlZ%2FET4%2BVuQRJcZMOsi%2FvAvrPD6ylY5rro22wrAs879NnPMljEouDeRD0S1lJGt%2F91h8x%2Bk9ZLQ34kLAjkAOFMP6%2FvmcNguS87ah1&X-Amz-Signature=e56768bfee48b5eb226ee6f91c6ab51c19cbc1713c25c18ebce2b71d5483dab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
