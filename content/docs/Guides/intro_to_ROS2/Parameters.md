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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26WV4BP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC4P4nuFCrIJSiNRkxs1JX88dHQmRoNuM4eR%2Flm6c2aAiEA1A7JfnDRZZ5gi%2B6fJFKwqCsWcSfxZXwAJZpuBr4Gx7UqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW0bbJqbvTYqktX6ircAxnTpb22O6jMN5Ths5Pdz12KurTkZ0jMlypp3YMpheQYtbdm%2F2gbk165p9Q2QFdVDfWynsoUV7%2Bt6%2BKKhxcUrPGP2hCWhYDUHay0Qdk5KK4r2XBbLQLljT1sx2TuPVHW0xMyv5cle8oaSUsNs5pjJctNnCu6gI0%2F1OvA2xuvrn7LiP%2FL7kVFc4dxsnGjHTuX9KW2hE1cfABF7Ok81IO2lcdyXJ6SqEyZkXFNmaGF7EvkM9EwISOum7%2B34K%2F7qvu9RjXpWUi%2BgvOdmKkRaxv048FwDks6QGnyRI1UbV9AZ8tXP%2Fvcrbxo3OeEImoStT0bsCUU0RVK%2FdXDDRQRQ3XsvNpEPxsCaBi9bNECXnJrCGvcsyqjV653wYcvdKk78xp2PiYdSem4DlqXlybKzsOOmCaBwfDDYEnRDeuGXX6M08pzRjOzzvqQQ%2BUw5MxiwhxSLoZvdl5ZvcrA%2FTYBpC9AtajtAIjhO56nGsBRMDOk%2Btygh7g1vq289tLGp4uODyWeTvkz0BLGJQmFgbzzzPIuBUIXqVw6aShGlgutmuDqd2fHONczNNsJXm4TLGYNgGuQ2GHLLL7J3Ui9%2FydwyOM59Zngwmd7gw8MIkFDQUEa%2B4bcDmB4V9hDuYsdhIl9MM%2B8270GOqUB5MQ8f1OJ0KoOIZdnK1Ro%2FgK8zOECr27lZ6JpKM1p2HvuEojBnw%2FymEwSJuLog90GRk%2Bldz6gZxm60rNJjan3jyE3VynSCAu4VpFPe2nr29PIlJuWmNxdfnwLGvK3ECymVWir3rk6abMiXCz8Y6w2t7xE0CscJUEeymhMjkVmBuDyJZgD6ogRqxrd%2F55oH8hPNVDueGg4W4lvShUWPA6TKoCNqun6&X-Amz-Signature=77e8752ee358f8da6517456243c116c7718b43c37f926e2699ff8957f63bbd90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
