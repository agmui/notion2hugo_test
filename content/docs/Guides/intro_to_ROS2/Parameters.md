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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7O4G23U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDuZnRW4ob8XLLcA4j8RxIRVPgJMjoJnxFaLT%2FiN0zudwIhAJ4M%2Bew07OZB4ZNjwwR0SrcO3OmIWajTij%2B8ddA26sMTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWN3lZ7bz8K%2FUD6o4q3AOE32I%2F%2Fyb%2Fn6vAVixs8Z0e9ajcS7nPZmuIYQ0%2Bot00bjyERfYIPnKi3tqQPYYTbKIiwBuPeH4v5Xm0r%2FmtqdiOdVVSvsjIZcO8XTCvuIF8naScGBNT5RaAJUmNJjo5B7pBW7dyhQYP9XR%2BC09Se04B4A7JiNbN5cJOgk9P7CLRKQM18QyJfoSsSaV4DOJvK3wTeTCsSwrmN4FJmMFgUvjYGeMqGmIW68U3XlNk%2F8nm02brZRESzHGPjugsg5MgYiRlvYlTbreQ12V0RIPvG6iLGn%2BbleKa8%2B2dYmmPJzeEUOBHlOceuDK5Hygmx%2FzS3rN0rZ7gssb%2BXVjaCDau1NszYnrzoeDKFlOg8PydcKad5VIBP%2BCErmKJJ2Tqan0Al4gQ8jDzuwdOnWYsrnIwU6pJ%2BOfUgp0TeyysWM5HQDjDUtKmA%2F5A4SHfjd68H4zqUJCNeyGWSVKDu1yOhcGF3m5%2BmUJe0rlX8vNiqZqstjuPGEVWs%2FeiFBEaEb7xLJ%2F%2BeAcoZjc6PRDexSPgOT8%2BuJYHrIr60qT2Gf2A8I4rYuaNAcXZhx%2BqHPmMuY%2B%2BQmV%2FUD7lInZnztiymIMwIKCiZdVO%2BXV%2FXxkVLInZv1ebdeKY8LSlVqQmDB19gQ2ydDDDv9G9BjqkAaroKcZYkNgIshH0ApnHrD65zWky4J8Z9kzxQ6n6Vcvlb0bllc7sbBycfnbjFB4E4X3aHJM6T26lIIlApheS%2FmiLEio0mV%2B4Rm9gZUWYtdTuqacO2ElU%2BaS6c4meGZ%2F60yc6M8tgrh1fvs1vu45Ivu0m7LP6k%2Bd9R8r29PbTOaycYRTEOqyfQ8JbuPAt4Vr%2FtODRIkv1KOj7A9Ur9Nh1%2FWA1xMW0&X-Amz-Signature=23e67fdb74ebd7cd5bae0f7815d3b6e9ff7c58b4d990729b9fc1476df53c1f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
