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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FC5CI4J%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy0%2FviI2Uqd8Ge24yzEuZ5juplp0PzwHLln4NLmAR23AiAYehfHOyZFAQTdArKE0lT27OT%2FgAvuOACxEM%2FHd8qB6ir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMw3War55pcI5OoRnEKtwDlgq2Dv6xIGRz2eTa89e1kLMNuSVZaBjpwKDLO8fudhWfILBKi6lzMdVOWkKflxsPOOQBU6x%2FKZjMT305EpbKpw6LjQzsXec6aLg1x2uMHwY8n9nReZX2lpxpY6z21httlXOV%2BEO2hS%2BwacEuZeT84%2BMxykXnqlWI9PhXZcWrCFNzbSV56Ycn4tJ6k4XcKHjAqHDVwIXMiZsM3AUiWrQdbzSSbcUNuUBsLB9OBNVDG9larD%2FoTwzjqAl7449hRFYpqAhfaeT8l56GOseuX3RgrmHGnlO0uj%2ByCQa5ivB1g0vTGPdor0%2B7mMj52G8amv15AlvZjF2QWpsmdwnIF%2FbrcGitxDSQ%2BqDAQGtV5kJi7Ol7SQeiG9kgTl6Tw%2B%2BQwh28m8lt8%2FoafsjUCJ8N25bXRl6ehRMSojQ%2FAmtzesHTNGpN53G%2FzqsOW4xdsJpYUZRAYgMmBZv9w%2BqbELQyD9NAnJSAEa%2B%2Bha6s76dN%2BXWKjRVggWqBQn004npA45gHKNTahCdXxkmYBtdQFcJ4qgJmv7Phg1KlN6q1BIPRRtolTfylxgQ12xxqGYKkKl%2BW42OWYURaaLo%2BmV55%2BwxxCdU2t0QBMojt2czN34rD79MGyprTCCqV52XqEeEtVWQw3KbzvwY6pgEMRG%2FMjaZAV3md9hkcorS3N1mVhW35Ahinju2VTz8MQDp2Pg8uv6TA4HZ7DlDeZG1ZQV5sZRxqbuomuN%2FdhIjd4R%2FtCDUiF6SCLmV67l7QW4iZVjxDB9%2FChfdisO97Tvt38sNENBrJ4XEnpWwdwJwj2C62JRU%2FHxmFT290SBKp6U%2FTKcAdYo1%2FZUUZrsXZfHELaALX8oZmMumz%2FhKRJg61bKcg0fFd&X-Amz-Signature=448af0f4baa570292a0a049b17783c07e49cdcc8d9a548941b879b173d06e6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
