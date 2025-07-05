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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQUTXTG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDEwcuOLxbqTSsggQzTGLOWsH8T%2BDIPvJHXYo5qj4TNyAiEA2BslnNulj%2BMk3l%2Fyr13POTDW78gpKo9NBuGYhMfJaH8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFxMLoU9OyIGwLIJWircA6IAGBRxvfOXlPKCyhZarQ5tVONET%2FSvgeEZo8s1jFlIFBoW7Lo5fkVbEkuzbomTtL%2Fuwomz3mCK%2FtA%2FwSeoQKB9PZ2MCFvNucin%2BeSDpEvoHHK5PYv90XlhVrXug81jyT989qkyTqoJZiZ0T1O%2B7zRuowahZJRruWLf66oa78i9S%2BBP0D%2Bh%2Bw66a8gN9qyYX%2FF9arMc9R%2BIoS9WvSY29KVxQdH1bWVpTH1Pyb3SHepeU4aeeWcouWudvxYq2a4laHnMYJe4aLlPgXojOBjreQ0QJx%2BsoA9%2FHYB%2BJwigUxdHnP5tgGH%2FwZLkmtROlHsijqUKdj52tB9DqC8AEmlXaehZw41cPKzI7GwwzvHhjjoFH91idyo%2FrSBFJ7TrKxWNch6CyOyXyyM9HKmF5FyTDkAiJETLZqbtNXGQSYQq%2BgqS%2FvxSSV3yNZ0IZj9I1iMFmPUSb6wlYTJCPXUIyqjZcB%2FI2eG%2FoXsolK7l0dVh1QgXJc62N1OF7XqYfuGFcWNgtKKgJTlESX64esHQWWw4tP8il%2FZvaPGFFB%2Bid%2FV89WjUAA0DCxL1Tq8%2BmmOC%2BEpJ1Wv4F%2B%2FwL6izhKSMq1pt5oWj4%2BkBg7%2FT9bQmFuB7zLoDYXtGjvOsSE4fcXHhMJuFosMGOqUBzNacXYzNGyBzf3acvv3PHzM0%2BXzhJZ0LxIOmlzId59zXyKnsxUVZnI2QuBxyAbbhBFVjWj%2F2DBoJOMeD26IM6LkyeRCbkNtxo9rmqzRT74P3FJTSB%2FxxljHDMkfmtdwIDn2gf5CH3MYkr%2BIWID3RdJd%2FwaIg6wIgKRM%2FNdmi1LgapvlT363Cajp4Bix1RD3qya8oUllUhAA7z6hii1Y0U8TJWGbv&X-Amz-Signature=14456e696019c472e19b1166ff546e8d4fd28709ae654daff17f2e03b2a03647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
