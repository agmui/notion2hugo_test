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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCBMBCH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBE50hStX8Yl88OmGiNrjhCT7IFyqgG77ftsyjE4OzpyAiEAt%2FY7I%2FLMhrYkko7GxYnFS%2FpygEYA58CD%2FDA25Lz8ndIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPWkxIOKtT8HmS0vfyrcA3CRWC2rGGDWFlD%2FO1MfObQ%2FUvJ8UPVlOuaoAypIyd%2BJRj7ZRR3aALuDc77qV3uugLQfuVzpMzZyD54eMo%2BPmIUfPW%2BjHKgonN7%2Bce76NsF0x8K02aYOuLkJO%2FHlQU%2BYnTU1pa6YiolTcxwq0t6gS5lluDfVKj37xQP3e43w%2FK%2Ffz8M%2BANORwyImzBJGobXoX21IZu%2BCc3vItYuBkwyv5ZH4sZVn4l4F%2FGtaA%2FayWPAJ9dRHCvCqOfczoOrmuBDmR9kPBVQ8Wvm7zsiH0mbcSi38oJ1uk0zMwmPintQD2QWZv7MnKV8Jbw%2FoUCjDMPA1gofTvUGaRhbY6dFOOTs%2B9gIrtDlt8rVmzxMR0c4lD2xqp0W4LnHd4Xl7uOqJx83f0cF0idqL8CfQ9zRhVPYEAhfNQPTiiTnQJFeP1GFF7azALNv%2FdCFTydz%2BEWrA99JE6JiCtp%2FJTKsVLbzb6frPoQZkGloyazfGC9I%2BYFoPQ3Tku09UBGCLIQTNErJYhGq0%2BHh0an8%2B8NNfN0KSy9K8voAlCu09xjcWn4PAOKlEsCWDIwOBW0CCR4g4g5JOllR2cQ6jRdGC%2BJtCmZgxnTBJ2F3EcIMbZsNqdwYiRstvbVJ%2BvKtn67wbd8WBKrPNMPKl%2BsIGOqUBbLzQ%2BDxXuERNd36nh6L%2FL%2FXp43pTkmoK0o1Wjhjqhy1lYonoAOIhWpMEmaq1%2BuhSX2b4NPgzHUYazeFwPjrDvdfSR7LFlWbZ7hM%2BY8bw%2B7ipBDSiz2xqqyq12TUD23v2qvp3R%2F5OgvodeMthT5c507Ter5%2Ffd%2FRKY1SMvyLY7NLdPW3zJ4jVnUjrbsFvJdHyRVx5FD6J6dZIYC4KXWuaYcw2ba5h&X-Amz-Signature=9b8537a7f8611e2eb4508529e149ed872533492c1f847ca285e7012f42ea97b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
