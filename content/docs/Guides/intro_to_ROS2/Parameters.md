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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2SOFPY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqnU%2BgBvAYgLWXIfn%2BIUQQaSktNYd%2BAXrWsofX3eoKtAiB0Qy2GHABaNe7VPG2M%2FrXhiQYvu%2B9bHIJ7Eha1zQeugSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMeKZgrLimHMDv8qH0KtwDYllFpgeiQhhfOW50aefPFu54yM94v8roDTJtqygK5ycFJ7iiGG11AkLfsuXIz6dFAG3rHkeD0kPJzlMFsvTtDBsg3yovK0qF3xUbmQpgrdFvTGR8O5ZqY6kcm5iHHGlfZxd%2FmqkxNs%2B88%2FX0bCIw2sKsORjOGiYc6HkNskIwOIoQbR9RKwkIzcKRnS61vcqb7i%2FVpfN6DRFklqvHu76fEc4RMKM12qMFUL709H%2FJJ65CeftXWrMScE6YvygIkjrMjWeX%2FOuikEG57yRH16py29o69g8UZ1jUZr7cEALGB4CQWrkMXE%2Bai1aXsSHurFScmJT6HkTi32kYi6XcydWsZcKy5rqLE3nEl%2Buibzb0FHQSMOm8%2FnFyWIS4dvWG7mvVKj3gGRKsc%2Fl17hrqIFmYWMPFvZM%2F884t0XxgHDks1BN6jVdbXf%2Bm3uXES%2FXniGcXNNTP6YHjCPx8pp3jTiWTnI8TuCPW5h%2BPRltHvdlD06XAJxyyJnDZ7mcrjHoMOXAcNrWIVZdsjdrUFNGFYKrlC3XXRXi0BNxuNgO4vWJdXo%2FNR12j8tny99VEgy3A7oS9PRaglP2h2xCAXi3kpePxLuRPUJVuPoIMieqj%2BBWpa%2FvPp4uQg4%2BaTs0Ps5kwn470vwY6pgHevv%2F9aYJ%2FvP5Q9zlRf6qGnCRSsqb8aCMWc04M6a1xHhg49IEwut1S%2FEOkvwCy0Sbrt12nohHPkHUr8iOY7Pxzxf3ypnxRPju2th%2F674zxe705%2BK5m2R1X8s7Rc0HQAqthoHOySD0z4o4kcpG1RuX6eENBF%2FNe3VGA0qQBgA0%2BeYb4iCGhPHYgdhmPPlg49GxUs0GBr76ApK%2Bououh4dXZYYfcHrs9&X-Amz-Signature=653a29dab916c08ee5b7603c56ab1144d1c25f66feb3894cd3ed9929e146fd81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
