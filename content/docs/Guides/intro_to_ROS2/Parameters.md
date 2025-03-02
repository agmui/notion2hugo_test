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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJOANWC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6hfGa6Lpbqw5IIU0I%2F4sNy4ssRKn21sAmzKeC3MthhAiA1%2BlDaTwTMcxIUy4QpJQUsMrzn4BWxnMRrHQ0pTlBaVCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTR7GC9mllvnTG0NjKtwDrUE%2BH2GboPfroU6pIc4DY88uChp1Yd8PjMpzjUhLpxZUu46PdvgRlMMAXzC5gv6sCCaR%2FHWVQTaEjL1ZK32f1J%2BytvGAojP8p9OjqvUmqpbH8bZAAqoCq8dIItiL5ccZBFEjA4McwU5MvdJzg8MNCbaKgzbtAQi%2F2XCtJ9w0gbK4yXXN3ViiguGTgzY5gymHoz0GEZIR2GRzlb3rxjAmCHpFcrIUxz7%2FXI%2F2S7c0kb0597ERkziiCSfH4Gd6lu0gFncWFMA%2BbE042PL6T6KkunKXI%2Fj%2B6c3ymG2xBBHBQiaPy2LLj2v0h9Yk8dnrMWKzUwrSvAqkzWsV6fl6jmTbID07vGuzSksx9t2%2BM3lrJ5YUg4S8L8%2BqG4dzMvQmnlR%2F0XtRW3k1joBPs%2F5ipzVK6WGf42Dvh5MI%2B191rSdmONI9mf%2B%2Bi11h84v4f220E6Ow54l7hgLOy7VE2lyJY49RHze1qgkaMFtXM2WxCPW7TkhbSbUawlm%2BnAyPx0HtLN9t%2BJlLSEuZVyaEgA%2FIYKiWKFwujWuF0jaNx5XvFEGwZtiwWyTFfGSIsOsXoWZItP4efL58yzW%2BRPz2SMT1r7BinYgmLRSvWfPcsalMyR7kizA%2Bu0zbcY9QAvsEU68whPuQvgY6pgHkauQ9QIi9YHLsiDkgiBQKNm%2BF7jQVypAXrcuG6rEpDkWIdp3eNZQ%2BsS7QBJ3M%2B9Fcbuwgge8jfaKxowsaxZTQfwZZHpdOCeKQ54a96X8cGmErqDvWLaBLOwPO6g%2BKREAZDnGgNosUTe8Jldt3tjaDor6yK92Rch7ZIgaP9M5n8fxNsgOP%2FRiIG7muNOB%2FtEnurhoWUxW%2FnjEUk%2FmMpuo9JNJEGCY2&X-Amz-Signature=b87a80e9a6819e90f0eb705b4f27bc5c0076f79c4431188718b49e0de54c9fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
