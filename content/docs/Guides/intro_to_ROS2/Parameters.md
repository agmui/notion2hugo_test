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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQCA5FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDH2NzvEKZuQ7jsepavO97eVxQmb6eA9jeuGvdIM7vfGwIhAN%2BCJQrg3%2BGXVbsAM5OetC7LYedBG7BjMEsoMkARjxwhKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHSRyOtp1WlyJUMcQq3ANAGJtj53SbaMU0oFCREaVD7%2BenFX2D7hNF0FmuOJG3IsBWsoHRejFhnU8KLBmtYTYb80dseX5mEZeyT7UljUTy1dWW9l2w6iHw%2B0rAw%2FLIAa9l%2Fb23E2deoywXzDjvTOx3JhstlysbcvX%2BhEbh22snTyZ2dCDze6TQVtTrOWLhDL5PSZkYM0%2FEP3MzPtQ%2B0RKaGsqDlrVvzp2Rnp8bFTi3jU5TTnduOAEAY%2Bu66a4iVZ81MC3MyYi%2Bor51B%2F5n3llDsU9lacQ5%2BQW8V5VFOuEz%2F%2FnSjq4lfyiq2LOZ5KxbhCyLfJ%2FaYIZp3gBp%2Ffoakia2NfnZaKWY1ILAkqmKs7CFJnxuwteyI5kkk9QDlPjh3cycq9EHonOG%2FvP5dNbSHbX0I55XRbM4AEn7Cg%2BmVSR9RDWmmc24biB55cnIraYYE6E21LrNXr7QB5hCYFDVPWyGcjtvTwMn8%2B2JkVp0wqMricWbCi2%2FNV6S%2FijTp2XX33d67Odc2DZ8%2FXylWmHkzP%2BRWwb6ktEdGbzMg3Q7TYz%2FO3XdGxBuN0PVGlPxBx9OutJhqlQspwDfba2El7H8ceHNLBRSkTOAG3FYoAr2EHr69yOiFeL%2FoJ9cU8FT3kglfeGDEELCDxZHGzA6pTCQn%2FjBBjqkAfn5fHHnyA8ppyg0SGi5i5XI3%2BwP0oYs1FSp8o5zvCOqbVgPDJiwB%2F3Vs935nMin%2BKK4lTLahHCus6BhLIy1MwVh2e%2FZyhPjOipNXpkACv07KO6jcSflPX7qSNpbVqUlmzBtDSlVkQhwippALxyGrzYM%2BzqElarxwDqOV3L%2BrRmmeAuGSH2Yv9Uk5Gh%2BQEP0XUPpLP4SE32QBT2cW2a6lQJS2R12&X-Amz-Signature=d94de92b76893409262120f6b51e0481c30acb50017dd22bdc1caae43379f47f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
