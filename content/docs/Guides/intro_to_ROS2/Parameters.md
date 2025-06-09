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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TSVPHKZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5HcyMLKzKMskIT0BTaO6%2FumiECfJM4minV7B2EvLvZAIhAMP5A54tCN26cc1E87kGCP8smvvKxYAw4IvWo0ZELdESKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsHbBjVDPxyrgZ5zQq3ANdY3tLSxiFgwP8l5AVQEJWU4I2mhoRvoojvFN37AhAz3IFbORZF9lS%2FdNW%2FUEedMlIIDWyhhED8MjhX8i%2BsvBbupjRXcrNqt5OZDVTdFAOdHEjueFATeBD%2BbU67Ada%2B%2Bs2wZhTFU6n1Fui4xQDBgsMYvyEZi4%2FyZkRntfQQDR1UKrEVzuAGUR%2FmEgvsrmpxWUvAK2lI7GfqN5mGlfZH1aoBgFqnQIGdov6LutuNtjq6F%2FKcDQFfOfHvxzKthX7DN001Zq2fMy4tDbhUl6ChMVTjuPWM0LiEOXo5yERVRxbJzYUoVqRF%2F%2FS07b2C3Gn38MLRpi3JP13WK5Q3lJynnV0luVf%2BTFiwKbwolT2ib4tE7XbD14G8A%2Fs%2FIyqzs79prke918V9Xwtzz2gn7KD7a4rtd0TFnFy%2BQQki28JNMHXZNsmxITDfzINybaX8cBytSCFe4BPitcpHzABC8KWPeIT1IVtXbt2tScSQ6DeuSYU7Ft%2BGJSLTxjewh%2FX%2BiyYfNMsSOWmBgZzhGhMfHZxmmgVrQqmqvBGIgINztRPqJ%2Bv1fIycR1wLW%2B%2BWG%2Bqf%2B6rEHGZPwG2i2zkdO%2FfsFvTQ9qrT7BxYJw4hOsmcixlSulispPl5JoPSTsLyV0d2DCl7pjCBjqkAQLhCIR5cVilDTyu2K3haZTRB4SeLL8F1FqnaPjiS7DhmbTf6AHrPzLS9ksygIOEDJ6B3eBBbLfHX%2F8aXGYcsGhmWKDxilvMbI1KWd00EKqoMWJSh1dZxVmv%2F0uIGty%2BcNDk%2FymIP6e5akuR5gwnsacDXkAYTq%2FyoUvXSfykT%2FpbM0etuYu%2FoyefTWnkKmtyGGrNvtmysZ1Odn048TUcdDoe1C%2FO&X-Amz-Signature=32464301f80e4a6296897051e51e9ff1faf61348a0a31df648460453eecb495a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
