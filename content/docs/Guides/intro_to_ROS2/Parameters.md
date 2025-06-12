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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLDLTACS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICiGwXWSBo9PZyq2T94uyRwvjWGCZFzILCvumfpR73kJAiBddht%2F6j4Sd9hvUhfaUrOBVI5ThawgwmGyOD6ET1StwiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7O7xzxvymxBAqBcKtwDHr323M9gTGCm7GePWr4ZeidvPyPU8OTRkhAxZVqeQjVQ6v%2B9ZybGyvOVeccLG84KlN7mqA24PAQyernuc9GQk%2FtJCp4y2mLvhmZvzAj5siUxgDJ9D%2B%2B8T6jlZn494BEYpFsOMBzu17WOH0kpUTszL3%2B7sq5PDDQElNt9NLYMUPbTg6QZFLlM%2Fq7S6r%2BR1G3jMjNFzKwJQpJXguFnsmzYUrLv%2B0%2Bm5u0TAMcXAwH%2BRlpI43b96T11MY8FWWMfLNrvz%2F4MkxvSdvbGfGTtZCRmU3HXH2%2B1DKoFIaUSRDHo%2BH7lFudiDtPOQs5FzKaL8zpb%2Fs0gXqsnRvb41pwRAtDypOOKLyao2GDRZMC1RuL1EbhvAegI7KBbwjMpdS6amyPEW832nw2PSha9f4A2t0HE3lXTA59fU3E9aAQI%2B7JAXWeJwcpoxYs2UUpFzGKOry%2FQQL8GIUgZj8I38VqkmEshAiazvCCmW%2FIAXPq2EETmMigGIUWiR%2FTNr4dY9K1SAcOyCvYot0EtEs37gqOntlgmLcMNac7HAtbtR0DakrWPIBIjxU6ORMdYGfA6HVR8JctTpynRvdLwydvWLRMBU6lluvDJYseaoe4wFVJhzGNN%2FU4WJ0FpPF5C7ZOnC2IwzZOpwgY6pgGzDEXh%2FsI5WFMb5Bl5ElkUkNZCDw4m7rw9v6a7rcP6JJCOTcI%2BUq4rSZ0U1H7ReO5lfgS5viXH3uD2GWafE%2FXoTTqEUB5pRwDPqERs96TdgIiWBrrYlyx737KRNSqt9yf4endQO9Njss%2Fq%2Bb1%2BId%2BIE%2FS30pQ3Lm%2FBp4i4eadwx3l2LKvDrlRP2bJ4u9kpGG1tQh7IrpDyQCFVBf0q4tEnmY0bGkh%2F&X-Amz-Signature=da524ca66600a8d9e17c0b04cade99c2c4f06ac6e4708649b1a5e397ffbd6c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
