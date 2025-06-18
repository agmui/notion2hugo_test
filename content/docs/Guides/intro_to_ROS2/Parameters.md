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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNTAWPK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2CHzyVAJw%2B4dtSLKmrkcIyzF%2F4BK%2BUSGFnjkf7MVKUQIhAOpKHG8geKj2CNuT7OEWDhh7FWkAuevkdvs140juic4JKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWprnBgQF0stgQw0wq3APigvmyvWlyz7DR4W%2F5k22MGHLXKe22mWvgJy6JgnQFiHykM6FMBtf1bQjbGALmXKnvqlIEkbSSulW1J%2BEcPQo7oyoWI8jLmiQG8e380ckWDTk22pvE40Y0pIOpGGROptuv59fy77dhZJGMDj2aAUwwN4MrXQAtCh%2BN9cUOQExXS8HmX93KTiTEppxII%2BlUZ2atJpEjPlGS6%2B8PnXWFyWAokA6EmEUOuXgrTU0j%2B5y39s5mDJXeksyFW9%2Ffy3bekEkMXK45h67GPBNjTkFJAcRq2g0ST0Mico0L94LyOCpda66ba3IUxLfAHvH6%2BRaE3nMn5YlRvbWKJNyI%2BdLa6xgD6TWj9GyeVofBQNudeVUeIi2hBV%2Fvp0iqcw7s9LMQCkBTJ41YkSJAy1ONdRF4IX%2BqjzThhqbmA27O0am2gtov1wmYxFhEAUwC%2FWpBfxtzDevWp3XqCkj8wI%2Bf1jcHXW%2BjX%2Fl2e6sSxrQynWLVJbKmbZCX9aPHEkQqE3ZuvtE0AQ%2BMEIV%2B1EIgdV5yZz%2FtNb6LPGKRQHAB9M6ozgVa0vn2lwgfZ36U8srhHucwCcQGiHTxSP5X%2BtbKbY77HTGQx2uu5Pc%2BphcedNiwm4jC2AArP7m9PBQCs4Z1tqiaGTC6oMjCBjqkAXc0w6uqQMzlClqfo6adotI4bqZxb1UDRVqehj5I355XTnQGB9RE1W0Frz3%2BusSwXA8mGRpPy5b0jwFwdaN7u54tQWHa9uPkLr1Pk7m%2FFy76yvVP4rdhaUqwYtgAghEv14TkNHduIlPSpg7eTZkzoV2CKXsdPfrsFiRu6QG%2Fo%2FqTSlt3Pqm1z0w33ZMYYpqxbY9q7lfOEaSs99VoQ7zzyS6N1bWM&X-Amz-Signature=b9e899c6bb765f5aa095dc820c57d7df21202e89b66f15b93597f0e6d7205e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
