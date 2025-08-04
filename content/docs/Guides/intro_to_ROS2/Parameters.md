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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBG53UA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC%2B80t5QgCBVkUh5KeeOCV6ZGQEk4jjPQskoGbJDzw%2FzAIhANiuYF4eLxxyLcWRpzoOZOa14DPhGHV2eVSnAEfIVVGcKv8DCFAQABoMNjM3NDIzMTgzODA1Igy9jDheUMu%2BNn%2FkusEq3AP%2Bfo9hfTYmkbwnVVQNPygSwph75bcQg5tGsMMCMroBjo%2FshCeaqZJqDqOLlpecd8vQS8Q3GiB3bGLcd838T%2FJSBKbfuk5TA456cSd5c5517eNdXkOnG0LLoHlXFLB4Y8JyTvj0HWkh%2BNFXurmFb0Uwo8ZQ5blTzit%2Fan3SyB7bBwPN3fPSbMNg8jFvGNSOy6tcjxQGAb%2BKTkH1vLz3Rht6tfzuMCX7RXYd%2BQGgqpYlP8poeV%2FU6T31ulFXyiNM3dTOtsPiqaN5LGLPo65ShMMgX0cb%2FJ%2BOXppZe757u3aO6sqqa%2FyqpDnRWUC7KCtz9kjThjJS7%2FIKhjfest4Rksw2TSYhBM5VZDvG%2BJj%2F2FsBtL6QlIl%2Bjpsumtu%2FUTNqsYD0odGmoEeY%2Bgsb4OLx%2FEH7VOpbOecyaqhqVm5VX03auAkn5JjRM2Cpb2tnCljfnqp9l1aBh58atLQgJpC0Yx%2B4ASaZsvFk1O9PTgBlSeaOzBPMk7PNyqqbe8V%2FWz1pE0OQWvbQQFLlhdO0hSLSXmJQoOUMZ1MLuNiCU5rauNGRsQmFBAkm2Ttmz%2FsDDveoYHBFlyZEB8vXvH3g3rYENPwRBI2iWBi7YDtjDjXryeCueqd%2BMGypeb3tOwJI2TCM9MTEBjqkAV9xg9IS2S4Ajlu1QJL4JDEyA9beVUBdf5UhCyFCbbWwfA6aqUaZv3H4xYcncyrKQ8imlju3OSMBy6kD6yQgZjM1poFKkQLEahkD55CDNLE9i7%2Fc%2FunjXQXB0%2BQihUgSWgLTNePzjJ6zFuQH%2BbVFWj0yUaJfFA0HxV%2BG7V6IzfLjxqBdJN8XMBeBzkBc%2Bp2U5HLyRhSJGuPDLcDt%2B1a6tQVKgljV&X-Amz-Signature=d7baffdb45c942f9cd7f4effccebdfdf7950d0459bf1388885f984d4f1ff9841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
