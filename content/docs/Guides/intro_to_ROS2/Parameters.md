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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZSIS6G%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEHJy5vFXAs8j69OgK9%2Fghq0Tf21hlZ1SM2Ov%2FiFKSHOAiA1k6BbqlXzmg5zDF1qxVNXU%2FOzGnJtjNCLn%2FNZo3el4SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAr1jA8jKBclDOUOKtwDpOk0VUfhYiiA75Eyy815xv9af9JxURK73btn%2BxR%2FT7g%2F%2BKwICpKI0AXUuYju9yV7rmOYke1Vdx1wm3uT%2BY3s1sSxPUqD%2Fb%2FSiY3V9CGW7qYclHSfum8Z3lw9BvLQaJXK0I5cskIu%2BpgHk8Zrokj8uMb8NUBXZdjSjNoxp8ftJimWLw7iM00gR%2Bn6Q9SRmfQ%2FeuNr%2FhBbUzUf2hGxxcZ9YxAcUir8Gf2m%2F%2BgKcLfU1Ibeh7aEDxonJBnrga%2ByhATyiIx8JpamoCI1BQA11OyTJHbek9d4POZq7buXzVnX5ztuGU%2FeJ%2F2LsdFVSBdJD1rwyLatila04qvvnGR4%2BzFlaz5mzqQwvp6p%2FzW%2BvHDMIIbguZC3TikBxhEFs9wwZ68rW8yU%2FDKD2lP7kjsqxwuC9ysfi1s7nfNZQ6w7zy%2FZwfpjSJMubiPSBvRbwFre4s85aAeah2aDfckqhIUkJDA15UNCnwtTrffXyPngMscvJZ9fNMZf0hbS7wJvb9hOid6vDHNrZNSSrmwPoyuQ0WtrT2JqwG7kzbSBK7aJlCzxlRpIAPBUcGWtTGEK3MNOSJhfvj42IbmjrBjHYmYIoc9X0QVLLB6fDn5VfxVaqD7KQiX%2FRewBfnIW4nCTomAwo%2BWovwY6pgF81GqhxJlPXaQ3qvTJ5z9FJZ55c3%2BBCo9pqBEJfOj8ZUiuj%2BE2zODUHTLvHBRzZbTEE7YHjHlXnOedHuZABO68W0MXI7R8EujiiViykkXK7YZdC3I347lfd4CDekDNGktx9DzB5JLB5ya3OQ8XrG%2FbgSNsBMMyOY%2BPZ7JsmHlfprRIZoT5vW2eTq3hFxQ2EF4x1Nmw6VMI2LlJsZdIamYDpluCF3NW&X-Amz-Signature=d9ce0c6ebfdd53ede5a41997e987087fc41e4e131277befe6073527db56970d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
