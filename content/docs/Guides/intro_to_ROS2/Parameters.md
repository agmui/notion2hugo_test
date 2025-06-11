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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYP6AZR%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFVaB5gQX9h1gftBru3WbMOnKyMB6vLpTBfDEWPSyrjwIgW7QN1Oq0EUn5W%2FJyCE93avkxO9kv9U8HihbGKWfMm8YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDblvnKfEWop%2FyRGNyrcA8823L3TI6DvGwrssKqJJEO%2F5dTWof%2FZzYwLIpHMZjLYiob00evZtOvQyDMmvrOvKaj3rFFq9y%2B5s8YpSJ0xfiym0rNFXgB7ysKPmPS9houMeE%2FE4460am5ZNemj2csAwwCFwB8Wdxu7Aev0pwISGSzS1UkvYltt%2B51lenf8CnIRtGGpuA64Lt4pBw%2BmdY7Nwu7Cs1kCrRwY4MbMA4GHmLXxgXSsBiwIPZZ1aZSgbgAG8ltIR7uHxw6dkgbUSUcUPR%2BueawIOZy9YWfMT6CpYuzfwT4KbtgVXfWN1AkGEhMjvYG2Z1XkVHfKbP9awFQduV5ndejgsOuSTze7VsR%2FhCGabnJ4m%2BIE57EgVSnKDTduzHSO7wMuMed6Z75E8vT%2BT%2FHaFU5vX6UIrEjj2eSubezPWzsnzHf8AcS4OwCuQrjTyqxuipokNtI6jsRSs0gNNpHPAzNSES1cfqT%2FLJqx%2BaCBaMy%2FRvkpuW4gjUfMSj9I%2BsATM9lpcTFSCtg11c64UgzWvtrieO1KvWuyW3zkD0oPqHbCzu%2FC6dREB%2By08K5rkW7S1M7ZGLEXde2pQhqx7dbdUqis8XWIKBqKW5zDhLXlM%2Folw8KWHG5Ikgk8VVARY1a1IB%2FjTF1MsZ9SMITlosIGOqUBYfdcee1%2BARRby1O9jEJxNyZsdrLqO107g%2FclwESX5i%2Bb6AhB2jd4l%2BYXNmRK4m0aQr1xGf7f5ZmYghKh9Rcz6804ctdmWbGUrPWGg3LT7YXrHTU71emr%2BbF5wS7T6wiCD0IXCHLwKiW4zcorw%2FG3VQshRaziszzcqaIzl%2BxT9OmmYtoJcMsvOBVLbToPeX1UO3kUi0yMXsbX2rpo%2FB7g9NqD5ifF&X-Amz-Signature=97d3c40c6a3a930f6e79ff3fee89d72c295409b53d67523b4db10a71ddefce63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
