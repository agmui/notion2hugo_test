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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWCYMZD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATiVZWBj3s9cSuOzbXgUo0S6HgShyMA2kFONthu7TrOAiB%2FBbE0uRKtwOj03%2F%2FBik8VDzJhi4eQNNSyBI7ZMcaCRir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjRUCt7493CovZq5MKtwD0aJiHyAFSR6BGa5vjJDHpY7Bk36w0D4OKF4j4%2BoJ1EhnIig3CO3R14PKlqFiOeB14NXJEP8bsecX1diuWHCrARux6v29jrCW6ZUh57QZPc%2BuxiXSNg8sDCAe0iT1%2F4TGMahyRXbTJkd9InC%2FbtVcLA0OxHROadBmOiHdHqpFxP13RmXSg57IIuRyzL%2FDbfnsjhBZpDJQVbAnDXB%2BKvrH8oJGoVlfYWE4CFEL3gdpjE5bjrc8YIvzb2nnomCGJx52W9p%2FLy6uXZF1TyCrPu681mR956p%2BcCVpa2rjB4oqiq3%2Fg2XUz8dcPGNImbZ%2F%2FLkRcNhBNwKCkLBjTcucgWgbWaSvLG%2FVKNO7Ix4n%2Bw2SthyEoh%2BYDPkRaZwDEs2DnhQKQob0KRBB0wGp7QNXfPxNiT9xbCX7ZM3PglgAeEIREDQC4iiRLqvASpoBkV9Q9d7CdqHmG9k%2Fe9qI9t58oscukKjC1H0p%2FHX6eVb5gfl%2FbEs24kejqFqwli69204FwqzmnD7U9QOAqyJXpSHrwKkUPGGURQDR%2F60JUdFYfr8rs%2F9n38%2BNkEcS9vELWcq6yzn69s9DNt%2FJn93KwdO45z2sZG9BILHldF7XbjUw37FaeZl%2BQLn9dHouOGTs05MwkJX1vwY6pgEGH%2BljRVLf28OujBum5pQRbuWQxs2MjnqwOS4AFJt2NwvOWHhdTB%2FgQMv22kkuTc1OFdYF59OX65FZsXr8lXjKu37cArN7MDJeGDgLQfCSYh78kZKr2AlV1aFQ10hkJekZqRKmA9oyNZLWGIdJxvWkgKqdZRMKMJf46VANQjsct1nqUQqjVxy2K2qupcP2NbedOP%2FLHCnQ5tpCyZ5%2BtP%2F2ZeN2PQZR&X-Amz-Signature=c64da6b6f57be69ce088a21264e79ee2dd58cf0f6b1d428b0b413eb04fa27428&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
