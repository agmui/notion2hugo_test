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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHOGQ44%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD5%2Bm4rxuoZPgupBCsgJmejGPNLtua%2Fv0MXtYejCBQELQIhAN5Q%2FJzHrTNEZ5flj8zsycrZQDXID8ZQ5ab0JJwfiI1eKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxkJ9iqgHbpLypPIMq3APrRGHLb60AMtFibvciQUvMOXwveMb%2FbbeKyw9RNsZyjlHqntA5IsT3KR40IS2OE9dp%2Bg9kogq4gWhFLbkLgBkmxDEF6C7z4DNQDBYDWWM6GRVoLUhL5raKPS%2FYh45xAWswHVPUdqa1kC%2B9MbVrtTq%2FkLkc9qnyxAzllC24FZAFGsXumUSLV0aXGsdQIBdtOPzXGCXvjebxSIYVzqIhKge96VZC5YKv4TMG2F3FawxA6NbKby2oXjg%2BHMlXU9gpsQbG%2BYe9v5iLFDHCgc1Pzjxhh%2FBs4aLwOBzcNB8LESezw7eodLfOEmqatQKaNx1cC%2BjF%2FXUf0BzIE1Xt5t2ktcirm%2Fj%2FKp%2BBadX2ZGGROo0LNIgrr%2F%2FJ%2BKrVTQtq0L4lmBTnVINVX4UGlTm17%2BZzGsIGFAh1WoKvN4T1ehjSs%2FoQYIRUytws1SqCvJlnhD9bt2uHahSzIWeT7CIVio%2B7mqs2N81lrmfX%2FihsvkzQzr0ReJdDnoJbS3DTqj3vHrIwUfPq4vcRqdXSHhWovl2P0Ei96C2eodO3iHrkW0hQsiACbVuzTeS08FBP%2FmLJaSa9W%2FRAcGiFT14GXLaHDWuYmSNZ17smt%2BU%2BORJa8BW9zsHfPgtZVI7TyXJQXOeJYjCJwozBBjqkATjZbkSgWFFw%2BZZo%2F58l7FM%2B1YuoU69OJZ7ak7%2FLenfuiTtfuNroJIaftNzRyjs%2B1d%2B1CCsCJMp4dKUlnyE3ugqCzY9ddxbyi5njEjTgKksVGTg2WEHAsJihZ%2BTwPTHw%2F9t77MvHYIYOtYHpkmHwPfZpXbxDad%2B%2FVXTQoDx2v%2FMDHFvvSu1aAIAeYXE4Nh8hTDlZxBZB5%2BYqqW9mjHi5ImCRW5o0&X-Amz-Signature=718cc469fd9115f9dd48138f3f02c49499e99e98368850dffd79f0749747ecba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
