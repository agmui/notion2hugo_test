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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HI4KZ4R%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYBV%2B7Jz5qDjKLHfhAOzx7GL5Ja6LUgfnamoox4SoMuQIhAJ%2BSVehEW29MMr7aI8HYTg2Z2jQdT%2BWA4JDgc7HFFxgPKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3JzZnyexRWeInzpkq3ANE9K6YdmfJPCCBnnpIg1M3XwNfzzlTKo5edWCuldmFClcclHHGMiOOWXHWH8U1yXr7V1J59lFn2XXiIJuP3M04xyZ8IqkppatCBOM0T4kMpUGEJlBQFc4HAjZ%2BkBZEHDP%2BQeGZzT%2FakCfnNNtL13NNLjSmMMugh0qRwSRDI8dGOoVEEwS%2FJQ5Z6fsWYzT16DHK%2BaAHA7X%2BvHTJJ6EtfnlcYAhnn%2FHqAULi4d1%2BpCZg28QLX87gfn4Spo%2BN1FPdqDYJ2%2FOyGOs0wz2JcKWiwRvw8g92ZWoCZgCzZGUCqJJFSgQt0wZP%2Bv6qZKR98NCuzdIRRBrWpuUn0j1n1%2B5HiKDk7u1Ju6UgoeBjIhmmZ2ueWDQc6lvaWIaxP4et9Ox7PFxSXMviJCPKz3lLSomBAD7I0EDJ9u57xu0Sha2Ho4ZhAfDNMtWCl3mBF1%2B%2BlLMuN4iJ5K3uTSZg7d18lSC3N4JzYICZmUcn21abnLlXoCMhjffGrfV0OwX3SUee2xbIgl8VdF1C5%2BMG6hjWk2saVw19wsgjaYTXO2E8JbWclYEYI9fdEFqXb5CwUGfxFRT6SxRWcPjwIcsnL5BZVGf8iCBujTwf6kcy1eXU6xxVV952V%2B7bd8w0XCMxbUXJujDojra9BjqkAYnx3hRddyjZXKTlkkXsfCj1NlFBk2vcFsbkOlUxUkdlk0LbwmM0xHrvgIvSo8S%2FNDM3iuEUymPyh1KWyq7Peko%2BFK8MUohlLm5r1RUnDDMdJi3o8ogp6wWIJmpQmKGKg9YRV5WPPbAqib9GdQwV%2BhSpbIyiwpVjMMqUtqNPEAentlV1WaWRbCV0ddhkoTIGlVir3tpIOV%2Fe9yauf14QMUSGKMLS&X-Amz-Signature=af6f53c5482b7d7335b23d8a24b35181d34eb2ede578aef9654b67a2c4fb00d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
