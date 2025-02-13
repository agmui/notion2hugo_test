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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JP7EVV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK48QRm51D2AZ8Duky06Liz2PPv87kJL4aR8IuJtAQqQIhAM%2BSQCBJhb6GN46vPWLy5VQcLhqHd2Bis4v27l7ml9kjKv8DCBMQABoMNjM3NDIzMTgzODA1IgxpLg669BGZyzxZdvIq3AM0K2LY3wMG9Xvjwj70J8MBko9F1n6MY9e2%2BhzqvDUdfZpXmd2cyYw2nj0EyFidJKZmeaAy%2BoRlKF4UYAN9z05W3%2Fh4r1esB1xOTsJwW49YGXiD5E56HC4FxeBpXK2q%2BQAwpt2yfyN5DoA%2FcHNd%2B9DYpcgIRZUzD34b36CMTMSSdiRtKPjRMOW%2BoXLfo4UF%2B9S52%2Brluze3j6gMlN0yKR5jZauINmYj0LGXpNBt5myi20MpbGXyutwGveCCpVrvZoLpdrISEo7cQ7VP4l5NO%2B3JoHHMCXecbLZM%2B1L7mBsozTrQxkCwGoEBBXg98TrOm6AYIk9j1j4Af5%2FUgf5DkmVoCy82H8vTwNoLzxVo0HN5Swtn0t4zFmvnp%2FCWnzscLoTw0S%2BilHNhULAWkk0ThE%2FSTTiRaxodTKrO2qf4l5p088WhZAOY2Q%2Fq2q%2FE6fQNp%2BrYwOHtQbmdr%2FAwwv1s9tP4CfPL4vcBVkpfciRZF1wyVq0Uu%2Bo%2FS5%2FS4APl30Tb29lkrqpaY6%2B%2BFdiWGXh7%2FNBkZI3tILcYrjzD30tBXqMabgWabiargQXMEQcGo4CQFL2d7XDEtm9x%2F2HHYJSZvZj6DLpbfdxqISEXvYnQkhTRax3jDBFUJY5SxR5rfzDfh7e9BjqkAaB9QacXseMzUK5nQTWcriJw%2BEl%2B7BRkLgiAq7fpFE8qBZiE%2Bzjqg%2F8shr9owS%2FSaWX0wptKWGVujXADni41eFCeedTXinRBJq0i4v3Xfnvr6MoDsJ%2FCSMpWz0SVwySNeOLUiE0R%2B8oM9IxbG9wlRv8SVbl7e5Q3ToXmOdxReZT1szuBdkl9G1mASjXhdtC%2FYwM87vIFWnx%2FWArraN1bH%2BQtOI5s&X-Amz-Signature=53e0f4d98e61b2522c9659dcb99f7621bbb94a423a88f5741341908fc665428e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
