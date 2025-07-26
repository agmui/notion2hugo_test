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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWY6FKGU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHaiMZdtgj3PT5EQGXvkdrcw6ufO13jWJ9TkImgk%2Bg7cAiAaDn37gLDLjlq%2B5LVCRnBlq9c37zOx3budYtmLaJUuoir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMPhRBJf7M8hlyq8pBKtwDn3E%2F5BV3p%2BjnqCGBDT4HzmslNTR21mJtwKLT%2B1QzmpGXre0jZJEVJet8jQpMeqm%2FHQ%2FbHPnmkgue4nV7dkJT3CdJ6IfETpuNjz6PCaFVmc3GvJ5RxRyrZbKcZYJAZe0qM%2FdG4Qu12MOr0I4%2FOh9o5b8tupQuNMccZGDnwQ8UQT4nkZMxZOHsph7qMoTiUDE5WOHtH3%2FXISQH3jaX%2BHH%2Ff2OHUmGZQVlcalT1vufC%2F%2BCBmI3AyJehmiRGLZmGBYqYfSjIgo4Ebsmjx4iMgiQ6v4fVNUJFk4TQlTGGcUud%2FWmLESonUjVLViDhkXyNDOKCUR1ls4l%2Flf7Qh1wm6LI4aQfl7Wp8QtnxLkOfuS4j69Yn%2F0%2B%2Fj%2FlJW6dEVG0VMyOWxy7WtjxvMXZKGM%2BSaot6IbqpUjxPW741%2FvGjCTKjV1L1cXBZ343rbsyYwxqB1n2XnrrIEmfcFW2O%2ByLcXbMA%2FzAZ7QeXQNbvq1HNLbLTSQ4izqFlfdmB2QJU7%2BLYiTk1yBQKy3wM%2BE2h0GxgoH66T%2B7C5JMzBcxPL79D5eSG5px%2FI7AjKqZjWvNfblHNWyr8slevP8aRyBXpTSnNWV%2B5qEkfFfKQMMVsD1bRn1gb%2FZ0490oBqasi5d469Z8w0%2FCQxAY6pgGAzoQZFplkegnpy%2BVGV1ldKNc10zZLKT2iL%2BB8u90AWZigLu2Kb03uTAsVwMSrNefhyNdLRh4YB7OQHErfx3Z4WWvugDjJSNahLn6oTjyeMSP1SP5CHMuHdZb2QirR6YMEX7NPxpmCi8q2tYIeMglHJwVAS002hIscMbhXpVlMEi43GhmcKZb494fQVLBbo2qiGDirUlPIhvF%2BI1HPKfXu40MODEQb&X-Amz-Signature=c8d4d39853239c6c2ebacefec4bb6b9bcc4f2f1f107fe3d0df79fa61cc0733b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
