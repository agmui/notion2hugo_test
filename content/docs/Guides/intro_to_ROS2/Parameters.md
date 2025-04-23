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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTURMBH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDs8%2BCUhJJ8L4ytGvF65ETQlNWP86ohVYzNTT3yQX9MQQIgVucw3g4OLsMDVL6PUzbwXmqbcQT6LukRaVIZ9EaSJEkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0LWYetGU4jm7zEMircA%2BaUeh6QCfU8MLxFUTLmx6gPpp2ZyodqaTrxguw2hdSWnvvCr4xIJWHg6mB1LucLnuLZnL36lS4oHfKGTSEny9IRUfzwsWrPSPLUfQxTvMU3P4VQR1MD4l2J7NE9qpA9dKhUInvhZbslNqivfPsmZgfaZs17ZvB0N3NAR1QjTHTMyWgWR7pgJxf9xGSPNCBJgpRpGUMJYgECjV5owsf9S6ejUIUBH9SdhPWjbqY9zdpnqDb2%2Fe7GDen9rQYA0lk%2Btxh8EkhRZUoFijlQYTaHXP4pVGbU3tcizeL5dYdh2witqYFjNVmoH7CCnBaTWBVXwuF%2FUiPg5P%2Fj%2BKF58SIxkkczuoHCBd4f1yxM8DcxXDW5wVZ0gN2VIJm0w3EGfD%2FdIRyNnmiw1Xp8Cy4O8ZPI28HgEB09eD%2BOyUCMFe3KZpxUGPqloCWtuC%2FZUI2jAqagO8uqr71NmgJwTx%2BCrFptPiAiUKFbmZG65O%2BBUqQ7HW940xA2hpG%2BAe1RSmwapLZ8wXlB22bnzQhEFXg0QBqULhI6W32QB55jT%2BlDAoCn%2B5zoVqeXKEpbaCsXwKnnNwxKz0FdvnJGJvHsEQnPOVZMxN1PfraBO51e7tPLiOyNtxV1jHmp4VVPVQ85ckKMMPuDo8AGOqUBW%2BOqqCkFCz32oufCV8o1nuwbQFOdie9RL70OXpA%2BrKS7xajdv88wG6hNq%2BgvrYEIBJKCcfdnhx029bJxy%2FzZZ1hyezAwHUJyziSJ%2BrenSNRHD9XEih9gArTzLiIszghh9YzRVUTMMMo%2BXT4j9%2Bht9Wn%2FuBaGchaGHy3xOEYkreJph2NHbUbAQAH0zcDIqXzObJe8bknjQgoLYhs6M%2F18P3r8FqVd&X-Amz-Signature=3326b809dc9d677fc10e52dc9f914e973ca93e5f9e56043a37a2ef11b8e7ea5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
