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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CYDRSL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCID0nzCus0Jcj9cC7nJxwKcN0fgeFipe46RDeROfOwf4yAiAZjWi%2FQpbHneh9Tk1%2FHuzYoROjz6iZ22FcgFJeP1B47Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMwb0Y3FYZXJ25D6LeKtwDYvocdArGo0cVcchO7r686yVQJBjctILJRWc3KxttrjMxMa8s3GAH69OCUJDzzjevoAIXfBmQFzXD8M96C3U%2FvfM6egScCFDog%2FKzkvO7fSxtM8AccqIeCYAlfxeJQIqSbPxtS6wM9WzKyPaVNiV%2Fi5YhoE9zexl9fo69eT4bJr7dZnAZiDLICG%2BhBgx8tkCVD%2BmIyv%2FgiHspvGIDgiXg1GLHecuMfC%2BKZFtTp0DZaYPbvbPePxZy6xCp2lB%2FCalBcWRvFZeakyNDUrpHYRsEfqmKL5yuh2WXi69OlNloEIjB5ojt095Xfqr6ZjibP4toKv1gnBIhr1%2BNzj%2FrNqftt%2Ftp7a3g5fpkPEziQsL6ROIIirFOX4IJhi8njk9vYF1GqPZUSUNOtkG0zptekQEMd7Xqw12E%2FEsnzTW57i6wwyDF3tf8SuUrHLEYx5RW4EAZ9PJRHgKbWSI%2BRlX6MuvqvBP4k%2BR5BmJCqLhiK3JOy7fC5tlUMfmwZSQYVLmo1%2FrbXWOskFBrwCyi%2BvLsjy0XxP2t6kJz%2Bw6x9Ga23nFFlND9RqNMqgn8kxoZWe0fhKDT%2Bfdb2aPOUY5OKHcKV3imbabzx%2Blr43nJVmn%2FtWIVmQbsZ%2BMECEbJIpCYx2Iw0M7owgY6pgF3q25Nf6fxnokvrEWY1U7FDj2XuvsKLFjuPItJv1ZZjxb1bzl%2BnuIOa8o03cZCbWtJ9kkFyd%2F6V%2FolsqAkF%2Bx18hZM7TiMAIFejBmpik6Tg0VWWZbo2wzZp5WsVMQvD2XDLvQ65Zwdt4xdWdauRwVkedslPvqYm4Ey4VXDTDcOedioekfbkdsSib%2FIODOjx1iasBqaB3jcxLSPlrqwtYDOcPLPNZkG&X-Amz-Signature=4a7f14a28b35e41a94d6aa09dcc19a4b8068ba7febc30830a7fc25544b9c808d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
