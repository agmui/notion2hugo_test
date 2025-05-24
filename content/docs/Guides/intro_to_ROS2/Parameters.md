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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6FTDTK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCBnhCEf1DAHKfCmMZikoGEEUGxWnGmv44pEYYvw%2FwE0gIhANxcBvo8h09as%2FHRCqMYEXRq2LW1nfl6zQtIv7MtGuswKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5UBPqO9j8kk3Ox4kq3AMRs0n%2F%2FBbDTAPZqT%2BSbvrlPcN8TtoMolfAxUS66mKXFLzVY650%2BgVsKDj130Zs7j8qoKGVg9tjwHiQmbzaVZ8ZexkrfBBqqKPM2tQc%2FkqumbCLcLzu6ftpiG%2BPtir4SB9Uen6bWL9Bp5sFHdOzmaH5Ts%2Fv6zBUlUmxF733m47PUJdCjQuKBSIQqFX1zGLmzyrPqbd6wipwlHHySpm1EYRYKvfZ%2Bw6K2ugjSsEiNj%2BmosEfNQ%2F%2BMpcvxgo%2BJKOoFgK8JnEyStXlfDQi5akHzluvGTdnICwPie8WDHx4a4HKE1WU939z1u6ZbBZAxhkO3PMX%2Faf0x%2FK%2BqQ%2FM77Kw%2Fd1Pxx5yJXqxjUMWwGozktovdlLK2g4P%2FXX1RWTO8c%2BbzZsTjNhoUB8eI1McO81hElhks3j2p6dypPhZpqqv6ZkL4aEyzcpNj10j2YAqZjSLqUru3GmZ7UaxTYozgIAK5kbhhPsMldxo1b7f%2BVQY54k11jdWjCHiwS8QSrAJ%2BUHfN4JPDMIxdkKbptgr4LURJg16pPMBkAb9Qto1bm%2BC5cZGQ1TjVMdo%2BiH1xfvuc5JbSfkHTfoqYDcWWJU1rfzPNLoJc3UOHs1VY4dMytl0mkoP3Rk6hnKOgrV4XqBG2DCmncXBBjqkAdOnwUxcDSg9TVN1v7A4OFMvHyNBxNSnUExaOr1o%2FXaoGdA5HKF%2Bbx4FSS1VIxN6D51mWd1yBUQpFypIdUignq8T%2FS6rqNMmFGcfHQlzDl6H6jriRwbNj2BAaX6Kd7W4rsnWlGot235UVITmitltipf7VNlyAqeRkJNxRHF7pz5aMiSUm90h8T6FRJkg%2BMOwYy8dr2d0HyzvYNUZ7TYYs75RPe0b&X-Amz-Signature=aa885eb2b7a5b980178d6e21c2c0ff3c8e3682e7608777db5675ed934baa190f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
