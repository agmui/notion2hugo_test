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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFKABS7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE2Pz3vmETtIHp2VYURlzwTf%2BO%2FtZOBp90MZ1Gqw1MqOAiBhZtHFWjRG1%2FJgCKDdXACivHP%2Fcc%2BvYB8Z2GsZBT7%2BSSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr6H1LVc%2FfVyEAGh%2FKtwD6UrVzjqD9MVjPh%2FTwwW685XLVz7mjLZkXcAq78UPivK7VSBQkBB9fYdss0kAXQyKptJkjpjfJiw3%2BTqlzIq3rvXl9dHJLPDwCqgBg3HAwrNeVdYdjL8f1JrR5RFz1yUnKly2%2BhzizMS8gY6JfNAdU6PIsGQKVZG%2Byyvyf0kIf0lpSvulnqnRT7%2FZ3HRy0hRMMhWClof6sxtyeT9s7OU%2BbVVc17S5K%2BI%2Bgw0yo%2BV0hOMIrNoDJV1mvQ02SpEqMSxNKOwyM67xZih3v7sDPF8Y2O6VvFys%2FFFAT7%2F4YrVgHK4L3w%2FEV0OB%2Bw6TFyMj5srYjlHfQOUC9YF%2FiUzurbabYmy%2F%2BNXW%2FTghLZJGiQTESgF7aSPuKEdaG3NN3GWoc1MAhiy0oi%2FqN49FqmSKPIZCxj6jWZa%2FkHE1dAnk%2Fqwn5sGo%2BwEQD1RbkeSz6HOQ%2B5KlI3JfFlpQfH0XEY%2FfTzFrfdqPgaucYYNjNLLSHKIux4zOVNI86rB5TZaxU9dpuQYa8E9D7cvPfxFBaaRUxkzSLdOJ0QO5YODQHbkp90L8A4kyf1k7iN4DaUZEDS3LrHYSMo0x9YsmnqkHIzOMLVZtqeINkfKzZAt5PeEZj8O5i53e5WpBCn33QCOmtn8wkJDRxAY6pgHHJQomocJqXTLacSnoFYh0rtp5PFspleOsdl8d0h11MP5Qcw6DEz18WSHBBhAmKUcf1Eig47HvM0mj7QCEhWklGyGPgemTg1qtr5DxgiCKLaUsToKakZHkC8Pozmxa5Ri8pqeOdRaLqdYOatVbYnNrX9APib6b97EcQPLM833fW5udreIZYXYCIgKEOfkqm%2BR%2BaLzNEsJ%2FLks6oSOR9X97bamQe7oh&X-Amz-Signature=1bd059cd521bad1ec1ed8e1e4b98a8c412fc3b2810f7923f344c14c907ffcdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
