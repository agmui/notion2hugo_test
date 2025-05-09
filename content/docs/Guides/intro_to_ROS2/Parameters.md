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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6MPHZCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCrgIux2pwcSoah1ZJLanOwtLFB8LXByD08tOZZx9ZsAiACQxyKkT2eqKnhR8ToXRjmisfOpikiUCqBw3qE4BCl2iqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9c9y8kiR%2BWjgNUcKtwD%2B5yel4ipOPEcCgG0Al7aXVbTjoHEfBZyP2tORvMgm%2BqIn1dPp4dPogsnu2bDoOXpQaL8%2FwWY5erFaQjU4c%2FdhKLNXS6KbH0MlzRlT%2BFyQFBxLqrZ04w7vwi2i8Enh8oPzAzPu1Rx3rbadq9uBT784%2ByvlvuTbAczDo3JxMp7Suoqknbco%2B5RTO9bFb13Lf9ab09BD0A9YCIzRmLxrXpfMoqFGbvGWv%2B0nlqXUyHP%2Fra83o8LYS%2B3GccHgKyQ4NMl%2FTYYpZwHXwOdYmpqfcTJjNTkAtbfDtLq%2Btm3oPRvMv0gHxsg6b1btdo392XU4Xor2xR8BGsxgj2jc2zgOhYBW6YOy8r%2B5%2BlIUSxTGxT622oZiXtFUeKAJtVuggpSq%2BkJfIsM7OVDWeA9ooNix64SHhQfsWEpKAEjYiHkrVAHf%2FEU%2BlRIiXG8kYH0Rwimgs0FvRmLFUBj7CamvItkHUevYCFHGqI4aanvqjsWXobl6j3AWROpzaRU%2FuKhejA35g6J5I6GpT0uqGhTSOKz%2FkzQLXLH9O8HkfN%2Fj4tiCxhRHLNa6jzsbU%2BYY%2BLWLHN8LyRPFSq1BZxQxG%2F2uLuTfiJz9E2OYRXXPonlawsGV2Ju999arlV5WaKeqftltgowwsj2wAY6pgGnuCOGa8CZVN9a39bJHBIazU7X23pu8RkrwWTvMMcjdGPDDYLalWoSVJf7ohUllCdKDR1UmdPAiAPANRfjBapB4VBeJdsZVOjXhivUB9Qa0m%2Br%2BzPY064pIETTDTOb%2Fh%2FEg5QMRX3dFi%2BmtSh6cXzNjF2mdZ1UYtM6bqpsLSSg7YZe1PcVoWzRN3EwoEXdMF2g321HrZjpm83REiX7E31Cf2Nk1%2F09&X-Amz-Signature=d75308470362c90ac35de11d9a8892894212834fd8dc217f62dd46c833f31df8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
