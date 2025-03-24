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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDWJ7GE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzMAqvwI7MRCSHefUcsXLYXo4IMVH2AtSY22y4mVTPJgIgKDQ01AmTGHW27XZa1ZFxfFnOAOgya7rYpc%2FS3si2x%2FwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZa1%2B5jOF8t7onhmyrcA%2BQoAhSlSvsViT838Tluz1g44Qc3S24icncrHqazGwzp2NbN1pl94FByupSbrUpYsFftoHGvlZ3BdqPHwkyxt2%2Fk3VrvATPpldjjzUpx2KlSj0RqNtqHsgcgu%2BbscyWcq425jBgqsxvLwwtwjRkoVzsD7LAqYlyYRgy8j9d1DwTMUDBNxlr0RRes34K%2BthNNak6VXtEQRr%2F6ErvNNJJnZur%2BFTbxuFa7JfacpzmST8Hn5Mg45jQcMR6KEgPecTP7Sl1xlBZ7vjYRLHs1fja9%2BHzxvsRjbHoINoZDFapFOYboirlWANiMr%2FoVthH3x4hvazfNy9o6G2aBPeA72wuY1nQlhIv63eWTdCEFzUzNxuaTr3LofHPSry34jgxTUKkKH9kwSiNtxguEvf5DqtLha37X1JviZO7bKcni4r%2FhZp6NAyutNZiywDx8yCcRPF%2BDnDrtPBLZE0MH7URW6%2FLXcyspKDlXJCJzZxk%2BmYqfCCoSA%2BtTm9%2BpGxiVZToPqRMKJuhFnOMwyjsdMBB5EqH%2FdiYjFtDO0LsVnMIjkWWL9eUj2L2GzNW%2BO1%2BHf5nUjVEL7uSsSgHSd%2FX9zGAjtYFc5449SdJ5sHUkOyqxndyOAPH1lloEE0ao021tskFkMMDxhL8GOqUBOblEpUp4KOZAx7dlQwl05WdickQiFictDX%2FvGN%2BNNaPsEDqbuxKis9vRbVn%2BmmNENx9s%2FfqtA6X5%2BLZ8RzwLEIeOKs7XTiKC2x9cStB4D7ZdqMNOn0eqFko0AIyA0PQJo%2Bsr%2B5DdnoGhBULkaIw4RfikwsmLQ%2B1TwCHg%2Bmao1W84Djh%2FbTzh5WP%2F%2BluGXQxlksT9Uh%2BDXnk60Ptke908mmhU46Y7&X-Amz-Signature=ce0e0e354ce255c0a487a8d48b529a8bb51cea1c55123d23334553f12936f01a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
