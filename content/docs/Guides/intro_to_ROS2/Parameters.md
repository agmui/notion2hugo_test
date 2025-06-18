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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBYMX56%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEOBfL6R3rjHTCeeuCjan%2BihZzNJBdHCki%2Bg8nOHxCAgIhAIi2XkrwPxNW0WjB9IdwWaOXSoUaE7nQcO0n8DhUET0BKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmbg9CbMnI36AoG%2Bgq3ANkSD6qr8QHJmBaY%2BspTc7OOcib2VWR9PAGwNEyqtLmTLTiFXGV%2FL3F%2Bkd9Qa2XIXFhj6NYk%2B3n3s0LzCkgfshslz8SNkMbByLK0siIzxbIjo7p62BlJSjkHEuVMpAB4pMu%2BpZrm4bJHVK18BHao6TbeVNX4%2BbU6zm8PasHksVk05iR7Qz45g2xSWHb3Uz1dFiO7mQpOpWquLQ9%2BbBkRAIui6QZPAPNXrs8iQeu9XhY%2F2mjO23MGsjU2bi4hIZIx7ZSuLByFkIg0MglzyvNfBRYg%2BhFccnHq%2F7cq5ShUw7gB9lVFbD8DqO1EcfYmWMvsvFipp29QISnIqoNnaGgrcztp3BgYsFF%2BR9VGWuWIzepXlWK9IUqVmZDD%2FhHNGippxHdmgEZWYRGzZq80YOtrrcyrEAXRqUf81ThnwA4hAix02MVqC4kboSXqKQftomr3OhqLeZGJKM%2Fz0%2BDv83gMFQRdUR51swLECQsvZFagWW7WDj5UY6QNDdB4eIfAN7CqttEOFH2COgP0%2FKAfWsp0B8fu76oT7iQCDO83czwmbXcmAU%2BOh3q86CSCbqG6UCgf3WqWPtYOzzMzx88gBAmZeJsrDO1Msg2TfMUj9pnWIDdY%2FgjoJlams42tbDE6DDF9MrCBjqkAQHga1p60Ao6RlLWPh%2FpaG5u3pFVbn3%2B28XZrgxvCs9WRPbVWww5wZb%2F8Qk5K%2FNYXboeWQyYIQoM6gQlAGsYbV4kuBkFgD3KxdxBlwl1KRKEN7xXFJAGEoMOLvyOdU678tGUreFojj3TbjmzAJu5y77jsmuunIbCQruFo8Kw88PHEWFeCvKTUpzuwst1JXlUKwJzc7TsE5Y0m3zpIZRn3uOhX3fG&X-Amz-Signature=ea417534acc94e6345a7bfdb4c49b4e9b9a4fc3b3209ba7dc46a65f3918340bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
