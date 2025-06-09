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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUHOCAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxV%2BwT7Nt%2FvDwnyhQ78PSFSWbDi09Ye9Fjz9nRaU%2FYcgIgYjobYvLZtILE7f1W4FnDJSEkMa4QhwMJRJHdMRmbbzsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbRJBZcj5cAGEeDgircA%2Bd4WPR66Kqvio39Qq5aZ%2BYuxxjx712dIculKVErZhxreN65dfZb3W%2FhxyuKX3DWZbpjMOFVdDE5QgC8CRepmhIy8C9vHkDAw4k7HmZSQ1ptyAWl3XeEFWxxwJpjZY9oE6ZR%2Bk1QmzmfWTcxp8WjsYmOwm0m5sUYRUJ2d4CCwI57d%2Fut2nm10%2FL%2BR9SQERDcIIZbG7SkOO16xFZ6gnTKXgMu4k1mnGaoKLgrgd%2Fb9dkt8PheC%2FWccd2r8M89XHZERtIDIKsnwMu3Qnel%2BMXXU5fWQQ84Gjgu4%2F8md92o8lGDklfW3uBmw07SmMxhE0SEuMqiV9067cp6LgOpfFiyJ66dlTEwvsDtQTdlrvQPDp%2BgrsymVc21mdx7coZlZWmq9dh3Ub24vIZiOeMB1TIp3eAtRaSqXiF0Gpje%2B3aAFXDtS0JEDGQOEpa0KPnB0UpYRpsQyMQ%2FzSsfXJUgEgWwT9UpX99WdGSZX%2BrouZbapwiz3pejdLt6tijmYBcsfvbOimZkumLGlD8PPLh5mGkE8O4ZzC0m3qMHcy0gJ%2FGBgnfnDZCkHxEvrD18xMhr%2FQfYCz%2F7dwe%2FMQC%2BMfIW4QbUbWFHOhhbKYal5AWBsKUG8RS4N3%2FuJg%2BulfVlffgiMM6imMIGOqUBJhIhCOfsK1yUuzNP1Y6oDC3i4ZHvn55AkJSZn5kOfo8adofoZTMlPtTYIvpZ%2FOvNRv1ZMJ70eXpeqo4NMp%2B3rBJ0zGLy6AohPpL%2B7uubzjmyksPnwhqnbauL%2FDQ4om1LzckupZs8Tqo2vwtMPobraIQ%2FY43z22GMKdY8FEgYfxQVcwaE%2BUXhETV5uZDViNgT09lD83dAhOtnuNkE1J9gIWGT3vNj&X-Amz-Signature=137bcd9b4f2f9a3a5eff099b4a373bec2050fd84f004bda9115c6a2c7b99fb76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
