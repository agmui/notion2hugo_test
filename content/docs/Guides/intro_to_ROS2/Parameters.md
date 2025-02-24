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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URA44KC6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcQArfkC9PFIwGjXpBoASbCnhZZC2NsSsK5nOd74Nr1QIhAI72xGHoIHP1k4H5BVJmYHWXnxkR7yPxh0bf3KNwjKjtKv8DCDAQABoMNjM3NDIzMTgzODA1Igz0XPE6VzUxhpDtR2Iq3APfbSWE6XjDupp2ZrXqHEcV4cjisGV%2FN66wICSuD0V6ukv3XPxXG5DTVfO8rQaX5NfvmUZJDnE%2BHGEnNAB9m8VJKlhBctx1YEMEGOI%2BLrwiLtQ5gT5HGmx08fb48yKALut5h5CJhwMEu6DLiIdRHv5IQbuxkQTdEygz9z0AQb%2FJ1ojrPQkN0gG54yJe7xbD%2FXT3odTg1BKd8VLy5%2Bc5E12%2BkQIlOUZjsDO2pgpaxganyR7zFyrnCOgp8cdnFfPxJKMA%2Fze0QENtkgf8qzNxEO18rUt1mZhQz%2BovQMrUFLSdAk%2FmRTzfEw0cx6K2udYX%2Fu9i9x2EWqPtVwYMgrNHK7aTVo0prU1ltbpPTHLMxJcdZFH6p2tWKl7KP3p2Z5XU6GnJIKUmIErNJVxQB9wKrwy1DdrtFUD2ZYZJ3xcghQt636E5Lw%2BdVuFjf4hU5WWtSx5koohZ0jx34%2BDhe2CEmDbQNDENSoR6K8VNh7mb1WzgC8u7kQFx%2Fz%2FcX29DFbU1RshE%2B6T1SR5GRUx29G09B7PYLYt6aztU1vnOVs9EBISrdK0fHFRgfW1u%2BgZgXLEqvoQPnvvMZXlRhQjdSNGHsI2t0Pi5FITh5RNBPrEC0cX4VWbBBw5Me5UAAloVyDDNnPK9BjqkAbJrM9EWMvUggQu34h09EOLj0MBy6HfYT0%2BodSTCfICmT0JtI%2BVrvi%2FH0%2B%2BNOiKwGFz%2BB0SWel5rSZOGTHVeDu2f2IvPJsNMjfzNKb8fi5ZMTxyelsAXUTZZBGHCKwEGrKOsqTF1rIdXUSIGhVCCfijNk49tCeN0P17YYPctd6O7Us0HVM%2F7jGFMaWEcTcChHEqgFADvZ2ugu%2BC2WGhmdVV7rKsd&X-Amz-Signature=60f5001cde6350a89c520f310d0f28b531d68a57df349664a10ba810dc9c8329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
