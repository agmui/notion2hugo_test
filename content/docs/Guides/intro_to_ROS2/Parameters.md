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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUKYRVW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBAe3ND85b5J9mjrZBX89%2BssFkmiy79Gbm182p05VLO%2BAiBdt7FbxhFT2NuYCgRlRzUDXJJjUgAsIDs6F4awfvpWPSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMdd6k1vnFwqV6vwnqKtwDoGvme%2F0eCUHxdQ3tmVUIgVghIImjUlBN4JSJ1O98xCAcM%2BuWrODmqYOVCAWxX56FenS7rC4eKUdpkdxqSS47jNqd8m%2Bkb9kaGkNq03u340GDQHuUeZB0uP6K5GZXXRNBOZIEg%2FZX3kV4MWd1yH5mPKuP7Oe3UXwPoGAlMs8SwnWydpWKEf6iGzE1bP5w1K56D%2FqXaQHboqz6HCDdfjuZG6fCvHK54fnQ%2FoNXupjZxTbI5DXjrysj5LgH3sDVkHXIGgaKTm7sJEF0JF0Tlm4lCxVLY0pV14ph6sk68pRJhE7huzCau5f9mLDlzsOjrs9J%2FGWwqHQtsAn6ItORXSezC2%2BHO6INC1RPEK%2FHlbpEQ%2FvW%2BQr2h56f3iVdSa9%2Fke4%2BO6gmwGPuQU6CnHfsHBTjkedZEv8nl9HZaVKzkUxKdrYJJ5uEWmoLQZ1Ek92maaiS5L9l8QKnSgVBFVsA7ifb3qXX02t5Ovl4WNrnpIjzJnK5Zh5G0jqXRVyjeq9uI5e%2BlPjYGDlGVKpl%2FNcd4fFQ44QQTLPaVKaGUyr7BP3SfSvArM6eXQhZwZAa%2BBQ5PmeONPOOz6tAiBPfzHjyUncvqZVg0SUoehovVvgUgwJBpeyxWjdcjWQRK%2FlOlM0wtraIxAY6pgFbnis03P5HksGMr4Fl8AbPLHmeFlC%2FPgD3f5yhN0Gl9bEoWiwrxp1HVVoDAxpSuMjpSMu%2FQAFGShweBdbpboU5kX0kSeBXhOEc8Pmzjz7XOB%2Bhr92jpDD2Vd2nX6rBE%2Fcdg6RqrQ1hA0HTT%2FBW6%2Fpl%2FaZfmkskbly9MbWqSlvP3gbsy3PhOf8iEPqpQH1idibxUQdNZsY2k4T8OA1H3ngAhremd1LD&X-Amz-Signature=2bb775375a9ad80c075ced9330bc75e45b049609719e727ac93ff8535fb47146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
