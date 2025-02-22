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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAIX7K6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh849j6cAPpBhp1xjdINRV%2F6eInGN7u7av50jwb%2BJ7AAiB4vI%2F2i6nSDc3dLatUIa88t0TrRNtf6NlDSQ27rrtR0yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfDY1cWdGK%2FBX0FxHKtwDrcrEiggQ4z4VmCRAupp5THgG83ltGj3jcuBchHt2B9sBKDETjXmEiHOWZqzZaTJCfO1jvAeK7YUJ3phBVYVwLhchP%2F8%2FCmeDFJ7QwW7jZP1%2BJAjN5VQjJ1B5ARi211Rc63ZIER1OWO4zZvAgn4Jfta2ZJMPj8KO%2BXvaW6JpHY8qdMzCID7NXL8Gcf7hHxcn48x%2BpxOMJAkoRIn53E1kmYLTrQfbIc5DLzETBxVuP9M1NDXX23izz88QCyA8ZyTUno3lkUhjTok5OuW5fr0pLfOC4g7JqAdiV0lrkWbZoD1Ch3Q4Ncw3%2BeJl%2Bh1k2Uv0S97ocPRRFiISA9H0WNMpusRtnjVCBNdSVpC2S7UN4WA0IpaYcRZPNaNhztqRBvNtb60sI22cBrLHwRgp85PGQo%2FTwrqFlaoAin9irdkI%2FI6oz0HAKz80dZIuFG2Lo8RxvqJuNVh2Y8Dt9Vke%2FXNMwcxuV3icXnzS44iTpxs%2BZDxvZIZKtCVc5EIEXuKNURitp6BtKOUxYLHd4x%2FveRFh0YBBjsLfgvIkQChGGsbie9hHwrXT7kdmD5OfGqf0rYxe5dr7yXCFYwudIUrh68K21miOH9xJMBoN%2BF8ZjSxbRY9GxtlZ%2BAU1olMxo6GAwh%2BfmvQY6pgHehX5DgQXthys6%2FCpsK%2F1SgTWyhCSilrChTM6K%2BrgfUYuUdH3XtPYxxy6m4Pi%2BrDF0KCHklCDyGyK8J%2BNsD2E7QMHumchFq%2B3uHWtkm6b001kShvhRdKdiN3t9k68rQ11EAgep58ZGlzAHBYIe10058SLFMt6WKN98sdZxMwMo5mobZHSUi05bWp2eQ1CcdMKgRKnGAbxkOUCj1s6TV6bCSSyYvCfq&X-Amz-Signature=f8b26676976de80488f2db7ccfc090a91d90c68e77ea59586464acba63866e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
