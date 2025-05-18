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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LHWSDZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEjqoAY7Z7vE4dBt6jOsBT34YgnnNBVFpW3yZo%2FbjqQgIhAIi4XYdbl5gsz%2FYPXfaIdigPzHqWPTRAIFJHll60ZWyqKv8DCG8QABoMNjM3NDIzMTgzODA1IgzK%2FHvKYg0f2zu6Fjkq3ANnPDSFv%2BDYdkyuFY8eCdTjVx89jAICGec9Z%2BgY9pS6rwu38r1NSqZgOsiR8Uvi0mNcFR0j2hQv07DIq0h7pbRU4amPQxvBCaGRwmAN%2B71vpgOmMFXc%2F%2FJa5%2FzMeBa9uCsRYzvDXHGNDy2OBVSw%2BHkBr0PUja78kz2kDKSdXFLmaoVjfiTZvavh90tiu3Yb2g334FTzsl3p1W80f8bLMzRVOe2YM6ZLCsYpF0wEIJPDIO%2FcdZDexN23P3cdnrR9IMvUxVUJeEHb1XUmx1SGxXcQwDfOFOSh6K5%2F7xYI55Ea1KSvmE33KLvmJtTZokSKeVVPgz%2BjBfIxyuiG38hFtGvrZMttpUIyOyYC1XbIycknlOqITIoTvAceTJ0mW8XofIglHkbl2LO%2FirBpFTjOVd25QecVL0g48KfQnm3WGMPpY9s1hepM4XbXrRrcdrrD9p%2B2upnwWZrm44MUh32b0OQEyg5K4ONE%2Bms0ZiEimpiebdT1ZbO5A9z6pISOBCZenmiAYN864%2F5U1s5wpkGuU%2Fbf%2BXv1mlYwYQdP28t0pJxXYnvZ%2FTT%2BjGEkzdNCpKO99FJvtODmMVHIXw76Tckz2TsVCjjrH6LRUfPM3f2VVg6Pa6uVeUNoqMU5hXnI6TCI9qXBBjqkAUibNTBqZ0RD8A%2BWqKWA6oL0kV4hrfvB%2F00K7dXnaCEOvr8Goiuo%2FxBZB4VoROGXdV1V1QCrhvDqrwRoiVBsS%2B9cPi9DybfSPIWEf0M1uZpbi0FX6QLKtDxjFz1K7Kk%2BVbByasSTflxnTTDzY9Z%2BWbFxQcxzg3BeRkbGVeF3tnukvB%2FoUacXRt%2FV4egMsn0empq2T4030yWm12OA4LHnwqNxocN5&X-Amz-Signature=224a1d6e11321e2b129b27068a6587a035c14339909d6c12c1c2146a4f64f9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
