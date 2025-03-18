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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOFVQAW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZkxDDDAdbid1H1npt66Jrls2%2ByHpso2kNeSh20b1OAIhALiRNUxXSntUu%2BpT0ucv4Iql6BLlDgqWMFY4F9o0WLSfKv8DCFMQABoMNjM3NDIzMTgzODA1Igw8SSxPzsKZHmiXwkcq3AMahZdwgxwgvd3tuPp2svISL8TtQrm5Y%2FK0%2F3POsXIKi3GekHwkUF2FLYBA5k2UxMT1QjOlCy6UJRJ%2Fa8b1WFD%2Bg%2Bbder6HEUbhkbKYcCuFMOEHnmR1JEWPsiJBojpKIFZ6slWWvmL9R9ZKsnry9fS7ihPHr8xETQit2okxh5m8E7uttkh%2FKVGPIRFfJdeBoASakIAA1Sc%2FJNg1wDz2ZDArb%2F%2FejgJTvj%2FbA5D3QhbFK05YMvOFHdJK%2BcVWoAeQdckJyrKYOw8pvRAwTyNYHm09FeBB4N7pJStb3hIG0QyZrJkGtnIBE8aqGyyGdobe5xTQ3gD97iPKA%2BeRlD7ck9r1DwKIgEAiHnnYl49zIWhfhdgm9UlskX2QwZf0g3cZsJB4mJk7mdMptBz8wgZP0r%2FaK1idogVrC77Iu12DrcWGXDIA8INxXtD%2Ff8osq7l7XEFpoAWYUpTHcT9bud2fD3TBBP2mywARoChI8JquGkieOVbOMwrRqhxbAlJZb7WPcsC9VvOOK4OQ1TxLgZZr9kykp77Tn7FJsOx3Lxk7p6s%2FHOpiSvGbOwFo5DuUZ0TwpGX9Y62vAmz3hGgaEN5uH9TxTEZIEyHdF31wEivsbiOWQhipt%2FVCWSTJa8zOhzCaq%2BO%2BBjqkARyaw%2BG1OsrpE0HhQ1EzPbppAav0HgcY7qCmtkn05dlYDgoGXkTeHT7HEylrUYjKKH7GH1lkbwwLnCmhrro6R1T3vGuXvgOQu7jnmf8%2ByIxL1G%2BTGz397PpafWRdBC%2FjuS2Gf6ct%2F%2F%2BgvKtp78z3%2FFWbYd8NDCo8g5vT2Ikx51jAAezI5wBynHV4zhDZZC7Ndqgs%2F0%2FO0KEzbrHnDayn1AqtCbuV&X-Amz-Signature=7742ec1acd84366dd53b73bc94a37b3adc821592b7a8d9895d36686cf41fa347&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
