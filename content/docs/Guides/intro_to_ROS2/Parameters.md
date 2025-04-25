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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FV7R5J4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5WwosKGC9cNaa9Q7AJ%2BSirMNxbFFfrFRNjHDDzO71wIgFKsmzWyM2a068F1IMfkmYBeaJZSXT7v1dXg36vVnsVwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPmMzpVHHPEeq4yyMircA91gKp3xYVF2d3%2Fh77VXxDED9UMEXPKc7e%2BpyRpR5fzdp66DKrqemaauyUCsCh8%2B72ufep0mF%2F5d2%2BGAjU0dZHeo5b0BalDIJGiRmvT1s0SSRwNllWu1yjAuk7rtQMKztqAkfBpDcGYCOnYJfrhrEIW7K7q6l9omP5NIe4ZblvuSjNKECgcEb6FroH7kkTkYwllaVi52FbGvFiOuthwQ6lBbisiwrIGm6E4LNCjSb7I%2Br28SNh85n2VRpNcnd%2FuszATTgJIZNTvKlxRj7zYuI%2B4GQNeqfvQQN0b514t88Zznf5Rx%2BQvxB%2FwGcCKYf4sT%2BhH1WM19bgNpOehMdOq51p9SFgYz4gevsnvmX6VGdONFRNR6l2Pl1YfQAbrZoapGzd8%2BqhhQPWDtc711mx1ZiM3irU%2FYnIDd%2F5PoGFA6y%2BAHjscf9sSlP7Md%2FwtwzXnvAbijlwPiAMZKG1EteEgu7BXmtgt5J%2F8rfDsmC7fmKubhUpBG8Y7ltQZmrlk7PYtOMx4sOXv1b2vxfJvWwXC3VEzYg6e0QoCHSvdEO4wIYM%2BltywyJ3BoEtLKjr8u6yLrL0DegwelM57ncDzoU0E0YXhklONcfJbp%2BIDOPkG7v2ynZozeXbc5NuNpwtXgMKD6q8AGOqUBj2SH5nNwLRd9QcQkCyaUNSwIXc2x99gD8j%2BFk0NczZtIaqoEAjHDP6QRHwsPEOdLbQiRs%2BXxJXAMCtl9zS3fOi3w89PiZF5Y7uARYYnrOyP4FMO9ORkjynZJqHhNmJ5FFVqcYC2HotQjLB4DOpNljQ8Ym%2B9%2BTFTael5KTyPzAJKhTE6sjMP%2B6GhzQzeZyQQsq%2BWoyT0hclyeGQMvkBIAOqBCQvU2&X-Amz-Signature=de3af982f7e1cfff1ed4e1f51aa593f4e797ff5cd43e204554257bd73cd12ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
