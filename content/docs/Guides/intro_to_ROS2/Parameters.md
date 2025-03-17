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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZSAJA5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2F494s0JW%2Fd%2BPOyrazkDFfSeneGoAUTiIRPlOb6sHnAIhAOBPZHJKNaCYz%2F4g5SZGmaB79MYyFnlOVbqyr87gwQO8Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzR7zrXa1JlGP03ZuIq3AN2FBNDyiuzdtG2h8wXgBvEE9QMOdm3bwYJ9IG7eJK9xm%2BLtt2WfQlJD9TqSmMKx5hEH1wpe606pOL%2BuEaBmDZogLSCVMOh0GEOa3tRMTIEX%2Bh01cjSv2n4eTKl2ItYoyosMPLMKOYPWb17EmxQHTg9kJCgcjr9YyfLLbuHq1oPooxXj5ekUonF4R0%2BiwmH25QgkzpjwgWkU7izBzsJzKMQW8uvDsYPjOp1UCgMdN8IIXu4tXCws0H9%2BOz3rkae5Od2DlA9WdwZoJVSLujRQzNarSCkeKqdcz5bzRUWqTac8AIthQOKPc9%2Fo43CZLM%2BzLAIOYL%2BSnUqoPVUKqAOa6vQOUj7uzrZAF9TTleK0PjgI6pfsNE2JC8Fcvx0IGpLP5Nvie%2FX%2F%2FV967OSxiRqoq0OLE%2F8SFe8Lhn1%2BY7FUn807CLHNryIuTXcAd68zv2xaciLNTM2vEBUxo4%2Fddde0MWKTb9DWAFJ3rGmazORVDnrfEAx3YabIXiZ6M%2Bz01%2BvzLCq4%2FDK7s47gzYhKpu1gnoWlxJL0hPUUweglKwV38TvICwLbb3yMme9UE%2B5N1B2A0wpQY7VEhLP7gf%2BmcObOYkwSNg0dH3VG3oStbA5cW%2B%2FneMoi6QPfhKPd%2FB22TCfkt%2B%2BBjqkAUJYwUIqPXI%2FVjhzTM%2B6SKRx19bHc3CmQrD8DeMhWMUYcbLqvIy4iaplJdRqQSytQD%2BxNAmf3iHXoefXWz0fY3wv2u76keIZJYiBYC5hVXLu6VzmTU6hbkv0R%2BhkOhCcMLqTbMUigzjOjXHkWsDvTUsVzXGCw%2BAsXWLD9JBFIcZdjL1UiGSGYWR5FD%2FoKYogwe8DG9PS0P2i5Y8uTr1oVOrP18j9&X-Amz-Signature=a577678cf6ca8bd71997f4abe3be311348e7d910f169e40434b4c692b3e6af49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
