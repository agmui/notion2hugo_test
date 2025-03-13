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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRWKL4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpQWgqNZE7yWsmwcfdSXr3Y2Uer3WwU3jp9%2Fwi98qAeAiEAqyzs3v48AH9iSgPLObd4Nv9cvoKjXarJWuEqLgWG8DcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBChdqyCS%2BwN8VgGDircA9SgJr2p6Fk79mMGOFY7Cq5gNyLkoSf1WEtVh1UxzoH6lxUpt41dbKlXz%2FfOl9qw4ys%2FZCHy%2F%2BAjsrwZuijGYwKPUXI4vPkZvnptW0JXVPwS317uno%2Bo21RXHwwZ1wiK0WxWyBBQTd8DekgHan0IJ8inR5VLKrUNwrtKjEZDA%2BO2y0d1OC2RJim7pIoHjJcy2c52AkzKa%2BZIxdPxgGem1JmPJGq6rpc4I%2BIUvPA%2Bd5JbpBDSg02x%2FWtKMl9p%2Buir3k3UvLCl76AlS8wRONWgpcUyqOX6y%2BaUykR8AVqrMpdgrXQN4odHYu1I9IV7lQkO5OiEw9gHp96kPy7ySokiCbYFlsIxDIiTOQj99NVqH5wJV3KwHNJwmNQCHpp%2FUEA%2BnhVqAvniT1JTJv8BrYsn%2Bi0tXIbPG666J55WXsEUsZ6LZmy5%2FZLO9ej8l6GzDRK4xPR0zKnsvwRK8DMpb8Va9lKUZ6isv1vguQYtF6yjVlLCSbU3Sacy5wgrUjTbLNe4QWYxIJthFkqkdHPE8WqsvwvahODEj1Jxcp5arg%2F3trSEGZA7qlJEXVL5IsBVtgVvXOhAC%2F53Cdk0nnxj4idkzcZ58qGf6FaeknTo5mXXjrugQpe%2FFRwC1Nv3aiQ9MKakyr4GOqUBQMifYlFHYvB%2BfRZb8e6UtAPDqD7EywZJbBM4RLqEehbIsEq9E7TrV37cB48YFvq8MXmCEFf2gHC%2FL33iVvXi3NKstFnEMY%2FWXss73tDNRsDRC8IHmQIhPiiZ71aMRRWSfrK24VCziTtt%2Fha8CFgVzh7uhxpNUUj3a6wPMs56yxTVw%2FF66PFadcC4mGkhZjoBWwHnzeGPhtUFuyhcr%2FtHa%2BIV2qdO&X-Amz-Signature=8ed36f17b719728a4f1bd670210f79c3b874155213ad07b764d09f291edf466d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
