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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEIESKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBomDDMt1D97cxgl%2BSJYs27qxuAkuiHzKYJ8W4X0zsnsAiAmWdQ2UiLp9i%2FGYIO6oF0wJSsdi%2BxRM0Saedt6tg8RASr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM7NFo18IjYrjS1SALKtwDy56Qm37swVoeQIvAdyW7uCKT1bHwiWqSpKaIOg74pW%2B%2FkudTzbkMm%2FdlWDo8VAi8LyKv7Xza2dhf%2BlirHNaPjWwS4ZmCeU6cML0a39AFa0SlMZPwdHnNpO4gr7%2B7IVN1haPpXKp2MemwnbAKaCPtUttdEJhJzvia4CTYS%2FBgqamEez9GTvt3RmFllegB6yQnO%2BV4QdiDIeWFnCR9UlG19rR3enZZO%2FHrycZLSxcNmWtA4Xzb5KC1%2F%2BRtm164fbpXt6OoYKfzd1RMRFaw8lbz3tcjGpzZgkUxD8ukHq5tILJuK4hIjOZROxHAlOzeGaZ6coQ%2BjFolAWX3a7bBujrigflOPoSenig648VY1mQpJOfLIamKG53f9ZfWIakCJhy7WHhurX91e498aaEo%2BQ5bWFQjPoZSjbi2H42g1s9dz6aqjjd8P2x4zOR2q%2Fx8bJqwaU9f%2BktXidvjYU1JeB%2B2aTTbiDlTWbXPSQ48yheFyC4Dnmaht9GXCnq%2B2paNlxtDvWr9aLX6fVZa1bVhInCuqJd9rPjS5QmzKfvDY2jCV2M0w15UhmK506qVwqql5Ql1r8k5U%2BpHudtsPBN2HaCYUYtl9WZQ3Ic8%2BQMwRYmi1pSP6EJx5pBgIbZvR6QwrMXOxAY6pgHnp8V8fIvzbjXtY9SSUAOrOZ2K8gRvzUaeUMajwCXyi0E273TiTv%2B2uLscn7f6YyufKRdTLaGdo8hguaJhQ5r3hLYoQtyB4nTSIMWpB6aTV6vZmeMy0dMb57ezJoeDJdHs%2BCbeQqddoyCtu9BNRZi9RjnLYDJSlWfm%2FxS4B8mmM9TfIALw21Mm893t2SsgfJVUOIYzsy5cdxOTKODpR9Jn26uoTFSJ&X-Amz-Signature=3cbaa7a6dc43f0b29d9896363b920f1cd765f28df7b167d298fd8f0c85ee7217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
