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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6HCQE5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCGeo%2FzG5MHXoriZjo8UNGVIFoZX0lGhuPYG9YPhSm6aQIhAPn9NzKjvEPMLiQabVRbuuUww%2B5yFJ99a5fVavtGMJx%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2ZRAdjxARQPtjepcq3ANcf8%2Bl9jUIB31z9BgcIeYiOJBqY02lFoGsTmloYJAtmi9sDCKGq5Mgc%2FlQi2v6LVpT32TKA9QIKjcAZSPMoITODunPSLid%2BN%2F6TK48NCJw4npWvgb%2B2agKQ8%2FjIhEKEwyw5pTFKxFxr9c8wNQJbrHO7sotaEao4uAAKopmFtFKS6fLKI2Dkprwpg0SUodncN%2BrcNE%2Bb4%2BwRA9WdW2kYh3eMRXojz1ZQN6rID2xXXuAXXozrJKdmNY%2B8XM%2BQS0L8RgAcuXmNv9KXX8kLwUtSaSmu6FdU5yc23VcRfBOyoVRqhqtb6gw%2BB8RCWtNGaEic%2FSTStLh3mVG1iCDXfnbmv3D5uCfCvzD8bK5vtHe7stIt2tTTVrWT5XW8pH0xjUzf0gZy4r09S7TRgDCeNpueEJwo9t6w7%2Fhx5%2BIkbTgb3rDmC4kx8K4AnpR4jFnYhg%2B16C1GIgSsiHOjAPIAZqnJeBfe1GhXpHxc9Ej25807yS3SIRjRMRqhyJY4cPRbVRG1k2ZO1OpYGYhR2T81NSDfD8ftuafGasMPCs%2BlsQkWq9VFE%2FoB9QqQxNFn22GVPWw9LYxJ6iSG47vvLETvi7D3MC6UXrAfAHLQu4%2Fw4pKOaaz8bO2jYJ2HpEOMXIQnzDTn9a9BjqkAbLIrD2RUQN5z%2Ff4BqvrWMoTzGFqWTUkXBwmDEUS4%2BVpCfaLPEjkHJJm8Iz1tCzLSB98Vpyo4hu4em%2FHRpBFOO2yWERsW7SBKx%2BQUKy5rqvd%2FfBNZaN3pja0byRQQINauqEcNi5lxDaJIfA9qMjNDHO%2FA%2FKUzRThp6jVGXaGg%2FO8lEDfyME1lAVAKC8NDBXDWqx07JnpHqaO9W3Rpe3iK7DesM30&X-Amz-Signature=3d2984af643cec1047be033134b3785ec56e4dd8e4460a999c68d8d531ca068c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
