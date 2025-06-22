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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLO7RRGJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAvFyBo2eCF8Dhn%2FwSCp0RSrJhho6UGwLWEClB9rKhkCAiEAk64qoI%2FR0NvmBQjh%2F6tFvEga1oFeA%2FRHLrI7fb7n6ZgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiU9Er8YohXnXP8uyrcA8Zu9ncKGCgKFVCtSiM8GuvJS6awLQYPtSKjDwCqX72IDYaWZIvYwjy93x9Xa8RWPBOuUxyMDOmZ2YO26tEfyI1Ar2ZlQly5C9kgHxA8WamFtnniVtbrmS73V3I%2BYl8LmFiiWEffQLHwPk%2Fa%2B4njxF0huzWK%2BmIxx3Mu2kFgYp%2BZmpACS6akuctYgy7Ja9QMYMtRSWLHmH3yXpS4q62TOA2D%2FRrX781vSK7LodCE%2FUs%2FnxddsUJHZITUXRaC%2BeWYW0mmtHLsSZgiLlgcNEEeagZuqI7jP0MUtAra3fiIi8zODBgzit3TlO72aldw9HN7Enhkg7vSS5A30gJD%2FDZl782UbdBtIyutUj3WlMWLSLrJunLw2czxCeEnOf3byLCOJLEcbMoPxdLtkOsLzY3QETNMiySWEagYIWnJ3S3G4APlF4JsXecVr9RuIqjBYQMHKSMAt3cygwblPpNNRsvUlW%2BYiAjj9PGx4hCp4sSB6d%2FxtYf6GvWO3DkOrevGKAPlRfXoDqfrp37ZX8kxFUFjoLse0PSHCewijGYKhIIOuTtjywEPnYVyG5wjHZDp8H5ot50w0PYr688%2FQl%2FtqYYRtL9JPYDS6rzlWUhgoRofIbWk8gXTiNaxggn2vDdJMKPi3sIGOqUBcJHb0wNXRkliNl%2FUk97Zm6XlaWS9XRbsu3W58MXqsISYtt%2FuAl7RQZtc7z0mC8TOItzbjmpqBKe5M8DjyB5w7wzXIeYgOz9yDjIPGcR1rGgwbDFYpidvLAPXtWe%2Fpx0WHpkyOzD0LJvXAWQOr6%2BBPvWPLxxajUuO1pmLAzSWbMU5nCW5cm13btTsNGmORzB6yfaqOysY883ikTekA5sfn4f4wOPh&X-Amz-Signature=986ff2e1eed3cf6487cf76dadfd7c7881a2b028b1984cb35a8e3edd60efacb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
