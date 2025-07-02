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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4OBQZB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcsvyxKh7i9nAUbC%2BPa%2Bbv8GQKbTAatSosZB0Eii96VAiAxtOrc2bryIGbKR%2FSquwkwvF4S9rKujg%2FUP4dpWf8RoSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP99c4j82MJl%2B5RhCKtwD0BRvRDHGb8hPgvY5w%2FYlK92jnGXPqlseY8bQgbu54PfNW9ibV3cvqHzvF1vB%2F2iIYOCtGJD69csnE20w8TfQ4rMdmS60z4HC%2F1aVtCvVlhO0W61QZgtTxPOe4gUF4DLb8Lc8HpmLlETQFaOYN%2BEJTPp4N5WO2Kwr1Hm8U9IzWipyPsKEQC8lsbUylEd5ajBpE76%2FcdGe3IdkB63LeQInqf7YrxTRGbYgY2xPSQyMLCfTvOCSxxZf8dQwPybu5tj4%2BWKjBMIh25iNJMas5q0yHk4LnmMeRhwySYrYMcYBBOt797LmciY%2BJ60OjWGLzs7eVU3y70fJcM7Vh9r96jDHjjIEix23thISu8%2Bf0PVe3Qt%2FPqXWFdJHQAOmgkNdyoyjXl38Fu906jz82%2BXozK0L2Om4DthbA19e%2FN1qVtPVWucMllY3HsWHbPgpWKJA4XG1TIJlSTmBUoOTDajcf7TSsJxPTnoi26nU2%2BwkGtz3JI3F3kzX%2BJKIYmZDLXzqnqWSxr4yLXNJSPa6tZsKuqwoa8fMOe81va9EuxxGKTnD3cFGw6cLai0oqmzScPOFfHRQAo6c3ZB1tAoz9y0v5jbey8puF7gtj%2B7KgyoRkIDjXZdw4GcZVGAhhH0C09Qwjp6SwwY6pgHxoAw3uEX5oTW7v%2BiNpVY8MqkWcxMzfNZtOTYEepC0v8IBFtHfwfbqv9c%2Fk05TEszB3ZJaq2ZpctapHpfDPip%2Fu9xJ%2BHE3JPPzFSbhwwaZq%2Br7iQ8sftr77C6NAI5s2tKAF5eUc2Dogjwxaaxmb46CBWIdFUXtUHNxqVbeQpi5rrYqzxwe0QNCTH9YguVRI8Vofchtliid995WLz9suS3QIpl%2Fwa0J&X-Amz-Signature=344e269a20b8128fa3d56f19a90bbadb41817f6abd3dae114a47b9ae9b533e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
