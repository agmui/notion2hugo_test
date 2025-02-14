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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOOJAY4O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ1MuOv3SL%2BMOfnSl7YGoI83BWJzbjQe0I6bHme3lKiwIhAPQx%2FxfMt4UzrV27RQ6KoJICO5%2FEdTIk1POH%2BYZh%2Bjm2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyvgHclTnP42Sp06RAq3AMkTLfMZuPMmz08r8dAnYW7utWKbwZiPzWeA9eb9LMikm%2BFr9x4qGtL4%2BlyBvjElrHxREMHuqlqaET2%2Fj1c3wI3NfyA14HnFWv9oSJQt%2BAwNNO0yw4tXJ4RTWSOuRx2SAMmRqvfdZ7ssWW%2Fk8Rcf18LgryVZCrBkMJgMxq8fdF%2B8Jt%2F%2BFdu8QPzNrhKFnZ6R1MTxgaN8E5FDtiOgFh%2BGg8h4Qd8S0%2FyEFRt0BoA%2BUnj0M5RSLFJHxxqw%2BIj1XXyLy1GFm3gsw1kAA13p1yfG%2BXmHNtDZsM8gEKEaMu4SJZ5vZqsNiW2YyExr5uh32yO8AVNVZG52bu8cGiqsdcceD6JvoSOcw2fKpseG7U%2FI50AaTtRZ2O6xaXKf5aQy93yMsQ7zVxCKXVDUONdLWRwmQM8FJ4T1g%2FdBBg31GLRXxRpwh5F0J%2BU4ZpX01Mcp%2BG9Y%2BvDrt%2B8TDUiYLDdbEBJHC7idXMq9sZNO6KSVs%2BGZIzNJrTHfalwLHsQPQdCW7ySlEwmsHOQt9KPzCtCnGJ7JD9Shp%2Bguqw1WCNOTn9qlzUMJWqB9OxEhGLlGWjzSOZZACXAzkuJ2Ps%2FD0jLYSeb8YorSHcGd68CM2Lmmuufh3W7fShFrlOmBFgYiCJfuTDcwbu9BjqkAQBXDwtOpyAOHpOsJYZPl2kE3WgThG8V7wx8wRu0zBic6PdUXZeu4t2n89F03aKm6xCFt%2B5xgvVihYXvWExWzBRVhsPHUMg6l%2FsIFiI%2B9Jmc74yfKJ9%2FVl6qCYrxEO%2F9ggwMxpn%2FPHMbPV2UzFrHLKPijX24Jy%2BdUQvaRLDz%2BtXfTkwLfx8b6zeKR54kGd4t3UMiC8HjrIT33h6BN7YfwsJa3mtt&X-Amz-Signature=b2879af064ad4d077b5a55f664ad126249b19d24d1081c87edb4001815918b76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
