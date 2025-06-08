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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIGOZJZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8fQabDsTp3OKbnNZU6pv%2BPZjABNn7emqrOGOumYicAiEA1mgMlsCKPLbcd5Iw0o4pWZ5%2F4on2DLSkTgh3lQtnN%2BMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO7uiJiZMQnz%2BfhSircA2pkT60O3g6fhTWNyawqcVuulMUWgFETvo2buc7TcNcC2Wc5engkpkPDykNIGnqbNAMaWCzTIBnhKGcdwUZf%2Bi%2FxNQXi1wYWqK5T6oPH3YuIKZK%2BpPDU29vtJUqn5ABEQ74ZfERjajP%2BgbjX0VWg1jhEPX5yVx%2Fu0ly5prIjW0grw16T7RoJTkyi0FvQfcHuPNVu3sqMwzNWxUSjHE4lthR42WIBSeWWH7s7yflJQRYRMO1NOY8aVVUxkvhkjXkQA%2Fg7DskBYGhFeaU12QnGumzKWqJ%2BGgqqxUwdrOk65liJ1v1bWM8Hi53aLOMhB7vrFFQkzWWpEd6GQoIxtyHv%2F6kROPibOHhss960%2BAb%2B5lnrsQYd0ceD6q4YAEoXSSHV3aC8hswUb3b6v%2FWKz4W4JMW%2BUD7fbmXjlhA%2FHinHV8fSa4x0oHuPPgGuDM%2BqZIHTXKLQ1w9%2B%2FwhaQDpHVd0P7zbsf4WwqcovvQ0PlX2OF%2FiQSkyy%2F1mQlEfHv2aUVpVD%2B6sGwrLqIZLmi%2Fau5AkZnfTyqPPAkwZ3KTl344MjAYnppZ3OVd5sbAODYVjALIjg3fBxTcX53nHiMZnlPq1lp%2F7CkLVBEc3PCHWv6QbGNQEvBj71ATtwQXaLvdRiMLOylsIGOqUBegtWeuax5a4bJP1iidU4%2FU7xsfo4nwKwJ6aqvPFXy0gpPkkXT9UTXb8FfLe2I9Lqd3QEzfAaavz7vDM6qoaa4GkgV5Z8oLr4vJ0jvsm%2BpiQ1Jn%2Fsrp9eTG7BZfir%2B0fqfx8rMxRR093zogZZqfuMNp7z9SwMD55jAye60jCQUgPuLb4rUi54JleLG3n%2B5dynR3H%2Fn3ypNHCRF4ijBewMYsfQhmWp&X-Amz-Signature=1e273cd9e8d9b27a461f66feed7cde900f32a81dc4752ec148b1d82376ec0565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
