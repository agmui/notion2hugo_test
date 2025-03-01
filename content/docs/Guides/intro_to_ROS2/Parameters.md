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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WYTJO2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDZ9mEJgAWhm2TH8OvXlNnrjhy0u0lcR%2BJFqV64QHZzQAiAHIXJLH4HrOpJM2wZYFTM0gacsUm9dfnMXq95JDawlcCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGPDx7mI9dcPpEUAGKtwDzBTtosQhtrz6vY%2FQAIc7ggx9gmVYEm%2BbR9awUItJCHJ8NT6577i1iGfn29s61EMGvgW60Dl9OFT0c0adzoVCBgofLGFFNHogfwy1yFUw%2FwvbTF%2F2Rl%2FqaCRdOE%2F1vHcq4n6JmRQqenMntY3dMbOBNTF2oVZvxBuuYbuYuE0RV%2BXOtcTeGhiPHaqAx7AhhjlOMr2DhOcHwJhq4Midq%2FKzg8aamijfNybbcovfti3KhkaJt8PoQ3VHEyR5KoVl9dUyOnHGC6SbklKuRJaqh%2FURhLA%2BShN92AaRLmfgwbQSSk%2B8dLI7fdWDFGXd8rvz3Sy36v5ezCm%2F7L7ijG7JOfZTqvcb0dGK%2F8gbrus07FgMNl2%2BE7VtaN8pfyzJ%2F2ZXTK%2B1M305%2Ff61AjmkPCTpp4NvSvDUWE72EqqYeqPMMCUfgWuSOUxNXEc42A2X5f8Ggv2Cb3c0cYz0USrlE0rYaMXg%2B6Aegm5IJWCaIPNgIaseY3CiBAho3hexyQEhHM4ABq6z%2Bab0GWTIGnWLWZUVlIiBo0LpMwHtORfEwWqfpDjhdqnNyRYffTzYRpeTWP6XJm%2BksFwbalY0eDFS8rZmHc2AuQu7IJNoHOSGHV8zKr%2F%2FynYZmmxw2lJx8raXpjYwgZWMvgY6pgFVtXCvks8RsmMvZuxNmdwcHUlvpZap2EJGZ7AwwZE8X8zaMr%2BnVhnFORF1SQ7sEcdh9pyFyFVYOY5Df699zKvwBe0lEipNJdzF70nJIxRofK0rabfYutttBww0xQer7I6BMMaq4bGzNnicVI6HERvWPJ%2BDnQiHkCfGsn5VqzLAWlDcRiAOy6WBgjAdu4yNrMRb%2FXwv%2FkWxKUNO8g%2FiOrSgco44kIoT&X-Amz-Signature=f0459cc5ac594d44566313a0765097cf30d2d09e02389fd17a96e6f350def154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
