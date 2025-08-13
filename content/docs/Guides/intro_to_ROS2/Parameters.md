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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3QHEE3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK%2BE%2B4ocTOzI7j2efep3y8%2FilQb4j5XvJLMcefyz4QKAiEArI9DdIUdOEp%2F0BNPsxAVwGt3DxFfGkeU3Tt9EUsQB98q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIuvcRZjteHDT4X%2FlSrcA6fvRpzUSLKsWYywjOZqrkJGsBpSDPJL5tJUB2S9%2FR1f3iQbhUomXTbR8bgXD419vHspLMzlW2edPJBSQTu7nrZ6x9%2B0sZ2vxR0y%2F4kQiRJZsyPwLQg8l%2BCd3cIz0FEvDVEbO0GGlOLtDcEpHTWPMzUODeeWH8ovm4OX0NCLKY%2B3Zfzi9LXSq%2FGtwaBUlFkqlUIEOf7CbbU5g0WGJGL2JiH7UkHG%2BTGZ6QJcOJ3cl4W0gQjkgIL2mQGyc75zOz3bDFzb0hyE%2FT1XMjxDENG2222efPUYhEQYFNlCXueLWmzISVm6KQi7chy7maryTS2L%2FxIAXB8Ya8OH3o879bmeHekgUOihxwr%2BqG2sIYCiozOKt1nqRyrTFObqrL%2FtYp9t5A7fQxBYdqk8ZtC01YUiAHUVGp3ctVpx%2Fsk%2BPJouABx9ijoqz9qXR3QiVQLO2SPtDEim09Dbt%2BZCNT89rBdECTZ9E6DBnCEJNnym7Yllb3iaJ6cPgvW1pjZbVBvJTwjuBd7eivEBhIap9jNnV3eitAO%2FAoHUvFu92gJams5ZcKpOLVn8GC4aUDx9alaC6nIU6lcH9QsoGQyq0jcBBqNAgI7nMLY%2BQ%2F7CPK8ZmQLF06cMJbvxW3YT%2F2amDDDsMOWP9MQGOqUBbLWJessSngKS4C2l9dg3Dj%2BOtmNwH2y3VNAE9YbokfreAmfEU2skz0qYzp81fd192Yea5wp5qdfOOxXH84gKi3wGUFY2fKaSZcDqVsIG6zxQxa%2FkPxw3WX%2BI3On0g2q%2BaarS2lGzjz22p8RQC%2Bt6%2Bb7C3amdV8079PhtJhsSU%2FFDzeZnapTULKiNSrHvyz%2B0MqOfzMdaXBJQgloWUwAkwNpexy1g&X-Amz-Signature=eea9656ccb237e367ab782ccc41d11fd6049bc30d2b8b7438bd2bb11b40dcf89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
