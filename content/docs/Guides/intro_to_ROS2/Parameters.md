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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRERFQ72%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKol43Ik4weVic3fyYc%2BOI508XUpGF4xhjezrLb8WOhAiEA0a5Y6x3ZxS4mQo4PBqlxGgzpWZcZd3XfdGko9YPQUYIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAUoAic05n4wq1R6fSrcA%2Be2nltJSaW9xPzR02hdIWcsBWrqIWAJR%2FOxx4rygnnwtETdfcljvVV2ZQqHIHk3NTvY36NWSFLruarh6CcRCOgeA8Zus6GmXOTjeZ20oUSEcMkO8NHrC%2F00AKoe4IooppA31G6%2F1NJSLXzlI0bib3Obw2eN%2FEv4w2n0HvYVGpN3QHMqB0St%2FQVT2LepYF5sfRExMAHXjZQStG7cggjqkIKxsrAGTv3IY1rcheimmNSVFJtGw7YQ16WWYfR1eQ68M4mzH8gKIj%2BE8kIm70gDtVSsxYvxiuXO9e2iKecSpoHu7GKkBzmffl8jtop%2F9xlpQWXrvfOLW%2FfybUY28hNd6cLu%2FWmm7aLwfkv1eFkG5nBS4%2BKFIaroAngp2utfXfHbMDOxAqXwNUbfk%2FupzgUErj3XG9K4hOVlLE%2BWN0O4Xsq0bE035YAGnHTVBTe%2Bjrrurdo7sXSdu9BNIZwFci6FpE7obZP1DCeuWKOXRCixu9uD2s8sGzlGTOFqnubin4pCZV81ttNiXIXctokWU8brOjB5E4b8o7mxKQl5wdWOHlbn4QdBK2oGJ49u4ExG6bvCWA0s3m%2B4pwQAanrGZADLdeePNJb8InJlyphUYCp0GkiBUh8kIhz7rMjkoxL0MMHWjMIGOqUBxX1G0nU9n4ialK7rsqaLyLQjasLxDz%2FKhbnjLWnWjJ1QLbwzIH3%2FYSFGcL8Nq%2BE78IWeBLY9x3NbgwvcrVDcdPwR0XK0zgtGIAT4QMzlp0vN0fW1Qhsq9F%2BNLuDmeP5CKpGc2CjYLCAWGlD6MYHd2W%2FXwPMDy8tDRT4qPBItRy6bJ%2FAeZmqh2jz36LFynzaKBN1UI6gsmlxcHMsv2BEd1ZIAxe7d&X-Amz-Signature=b5019ae7f944e08eaac357d8bfce8a40e30f8e2b926460abea80254882e16ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
