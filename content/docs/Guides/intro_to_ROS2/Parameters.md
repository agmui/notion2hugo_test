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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLT2ZFT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhZqPyeuCHxUiuLPiHYaVqoXVrANuYayGTVbkbCKkZxwIhAJTvvyZzn0fbXiVDPt%2BV0%2FffjIz9BUObUhKQ90wHtZkfKv8DCHIQABoMNjM3NDIzMTgzODA1IgzftsvHIwJTaiqvsBcq3AMMZ%2BKSahZejuS6NFNr7gD7j78jFD7BCDOn1XHu%2BVRjEa8ER%2FKckf5yLNr1jAPlIkGLdJiVllkMn9ay5TAQJaNoSRyy3Q4M0VGgpkbHcnzsVYcd6CgRBuuIFni%2BrAIqmYfQk4WajFrYqzXYjwDt%2FL8Ouu%2Flo82WOBNqygvtgXMCOe3ezywyHzGUU1cQrcNTATtt13mQ0u6hK71ykyJoNrDA7%2B%2B1gb%2FNT%2BPPBmlElqjHo4o34ZmiavsW7qf%2FUFilLvnAKgK2bPcexz2EBYMQjISvKvDkowgStd%2F8vJR1e%2Bk%2FKUtZuKRGGKFISV7AVFiIOwBJRLHRQ5L%2F30D0n4m%2FdauAaySVcMUZWXK3OmpNZ9UmFWWPb64SMhA0fbj099LWjDPeIyJSUMGryenOiAAJsgVsnhOfJxDuR30Y4mh0Y9Q5%2F7Ywxmborvt422URTTZ3Fy%2FVvDteCiKjlZc25fgp7AHe7JVIvND8hT6jqmrH0fE6%2FbDFwgBWIUc2CpOl3wOB3a8G2HGQ%2FkoAeyR1ctdwH0%2BQKI8g1cTve1gXE9lxlDxn%2BOiiZgy1hz8zQ44GK1pWq05t00M8bw0Aq5XXQZLAEa%2BflzyKJji7Yjzd4Pkq%2Bph0FqTIq%2FwOU6w3gPv52zCKrYjABjqkAV8TTTk%2BJzbEWFZICAYFQB61B2ISud6NWo2XqYJHVUi%2Fzjeio2qBXScQvebeS2VsuUXCVanhztG7XyuT0chQdliYOlLRs0mDmgegPF1hRMAp0aezIe3G4v5JhuGfUtzb%2Bo9vvAqhoCtIJfed2ZGumvsSHRnE8iMYbfWCK%2BicBYL2yC4qk7UScShcc0Io9aHQQpjDsUoITbYfCCA2Pydl9V61%2BNgi&X-Amz-Signature=d7a2c6cc128f17f3f5b84033bf0e09023d25e6c768edf9c69a250fd99914efb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
