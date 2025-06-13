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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5S5E5I%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFokN5GsFnZikfBeYnIYzTm4RX9qampgA8%2BUVlUXEP67AiBruQaqVJYk2gtF5uKBU6xUhaJ3LaN%2Fpvbc6J4m0Q2DvCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMSvoEY0huTOJFyX%2FBKtwDaE6arlxLjRDH2yFEzAURGTWGW5WKynCHtIgQI3cexFDgygGlsCNi3dcI8qAn5o0l7kzovcHz9%2BejmG7TTwOeENCUJelRNOfB8v41aF9fjyk0OE6FlHOcU7tVVKlrFOjIbbBL8C91lOAUWJVBUX5xNkWn92ZFfzMtBQKlVZSNKSkFGjdSPPW9ekSHiQ5iXk1CdS4c%2FyRdBRedAxEnrIvKFjAW303a9iN5hoftcVsJ0Pp8pBfjZrS17m9zxMVjYzGgdunMtwStGeFTb7Ymx1FFR82Ktte4FPqqrGiqddiv5WO2SxM5H1yvwsKfBnW%2FBvUDakp2lKNoz9PM8HKTyD60BRcWaug50%2FRbp8cGSFtlW%2BTywlE%2B0OToo297YjCaJc2FXm8HCcAF2vR955N4Psys1%2FbzD%2FdQyUWQmz0jBOrAh7Un9cAq27EkAlegGvnKEadjHbeOKU6gg6gTIgg9xkiCTzmkWgl%2FH7TjXq6qRwytjMQ74p%2BHk3nVX1%2BZLbvkbT2s6yfCQ%2BsGI4l6neJElbHX3nRJPX1uekm%2Faq2aYg%2FFHJYuJIg3AYgEnBPCPxIYUJi7RfsHlGpkoDuU6YQl%2BAn8MJ1sCEwBZ%2Bw4U2nAkGFBET4JFhH937KVlUnKw6ww89KxwgY6pgH8fLINYOTIzjoyFR066vVZWrm6KBLD%2FIZyKZXp2VqIRbtE7x0zSgaN9vcmHZ2nlwx2v%2Byaca9Wb2gxSWnV7I88vrkJRovx20ZoduCb%2BSGXfFOcXxDZTFD0eduIGYz4wzfs6rpgq5goIk6uZALDz7G6Z5cz1bfFpv%2BWPrpzRfXcQVjHmZeKXkx0DAzT%2Fuh2xWNf3kYeqajEe0Vikrc%2BYrFJJgtoRMNq&X-Amz-Signature=ba2b2e176b8cbf3e0a9f42c6ad52261648d1e0e957c675a9bcfe1b846de0de9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
