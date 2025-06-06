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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6XOTXHQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCds9rK%2BhBDMLl9kHtrLqUZgYW5uAiptF90YG4k7O7XrQIhAKX%2Bdu%2BIW01wJWy1n23bQC0C185amykrMzaMwNgx9kADKv8DCFMQABoMNjM3NDIzMTgzODA1Igyf5Yvsc96kj3zgWKMq3AMxgL%2Ft8sOoMi%2FlEHPZCHGmuCvqYRPc0yiEb%2FCCtSJBKR5%2ByDOv1gJK71O%2BS4omo3ADqKGrEmjBDK3UnCTYJ1XJEWOKbixW34gPyk1rtedMervlc3jjDGGpzoWot5FXOP4nF9t3rBXR78m19n9NK8xk8j%2FHllGVidkBwLcEryAyrr5S2tHXFvs9TnYOpYFaJgGSaPiS31L7%2B4IAzOb%2BV4RYbojUB7Hc%2FNCNBCK64I%2FqC7ijdqYdCytrL%2BAjiB8q5AzSZjhY0lOv4yY4URB1e7rGcVykg%2F5MTOZ3kWw0nI76uzM1DtlsdrdLRGkbS4OhlelThw9UkuoXk98oSTIFlZoxUz20lPGEFJuNlFx4BPthCgu%2BFPWsY5Hx4fQWgWjmitKI4YHQVulgkEiczgO3rilZChJVnzBfi6jCbxUoiG0r19GdnoEg1Ho7%2FoAGJpdCUOB%2BtCUlcRVG4sb8lIbvkccASY1KolHbuLnITwvn1KQNH4F%2Bfm5lzEuo%2FmQq7m6ZN26l96WU9UQQ%2FgHu%2Bvk%2BMf09QGYqxIe44qXKgppaSsYt3BYFNmazBP5ngl3jqWX08z0xidJG1EqYniz%2FLqzBHHpcHW3qxXjYv2bbp9AEUAqmbeAJViyOYquGAfKBeDDwn4nCBjqkAbaGkVqmD1zdhefp9JrXZ4R7ltx5w5PuAG2iwRacv31wZFYgyzEN%2FtnE38kGV%2FkvBwfq80Vghzzwm1bbVEBUsvccR1A9xacoYYepYeC4HWACqDDoQNLbw4yiNO4mllUtKUh4%2BHsGhtol%2FWwiJwFoJA%2BNKXUnJri0PJhbJ2E1yUfgIXSaFOPn7H6c6DB93OmlUgwJ2cRSIrUXigCKDXdQ%2FZQfojcN&X-Amz-Signature=f7810eae845ddaf6089462a7d1d561eba012454bf97106d242e8af60f8bc3763&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
