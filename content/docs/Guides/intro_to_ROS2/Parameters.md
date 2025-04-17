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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJWMFW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK401jwxuh3FYrhdL90326Wmxtc0W6ymGOjMyi2f7r8wIhANnynkBKt8wOGa2OJZDBINIcZ%2F96b2Gm6X%2FvO3hbGNJ1Kv8DCF4QABoMNjM3NDIzMTgzODA1IgzII201aPAT19%2BJKHcq3AOWHYt0M%2FNZehFOpYiZvcOfsXk23dM3tW%2B0M0HGiBsH%2B%2FmkRMdMeQahe2xAfTcVbj8PVGFilqEUsxcb%2BNLYQbcVFxOLhsDNJtsGZpk%2Fgo7de1tondx5LgJ06mfM7OYrRK9XpAONfTDTUuuFn19XyBfyPbWhjGK%2BzsXoBPHQo8QJKZgbAk4VVK21D5ACu%2FsnKG6DY4G6kjxCHSGr4LYKFQ9shAsLEpGunmeSCHBzB%2FNocwcUO5rs%2B5JBoTkrblh4nbj2uldwyg2ab6iLWpDrAKSCGnc4m1fqBq5%2FDmxjmAc6P1%2Bp0SqHT1qmkJtguOVngueHTVzXzGIR1qOqqkS3M2CiLk2itLip%2B3eujj7j2Mwgcs0BeLoYN1c9SbpbnREpIhk7t9XGdLWIbzEXVvhPwrS4CJfLvOsHiYjZ3yD%2Fjf4450U%2BWPIKb6YBuwsaFfmnuydFqS35iL806tWkiB7JzG0zh8EdUsKghIX3564Mlayp8URGwqGlnGFcZD4u64lJ9vtbvX07GXif2TL7A8xGUEvXRTM8y0PCpQwCdyoGdcmiFfaKqJztJqVP5GAacKwZ1O1lS5CThs1R6vftcdTxZE7Im41qnHGDVlU1PXHpuU3Xyf5IY%2Fqw%2Bhax%2BzzhwjDl%2B4PABjqkAcVrYHOHpQWBSwBWlwB5rTzEf1IMNeWQrN0bF%2FIgmFEVa5YpcQz7JFFyOd4JNxB7VZvBkI90o3aaz5clb2reSbw5Q5WJIRqnH7Z7XXRkmOynNpdzjyzUUGGm1w047n5D6wm4nDxCi7%2FlvYozKpcbSV1OhsVf0XxMv9bYI1P%2FN96smQJh5zdKTcwNBSVgoWwPwN1kbHpso7aJVxvuOrGhSQNhBO%2BL&X-Amz-Signature=569399a382e938da8228b8e5b7e96147bef1c2f298d8ae7a772d45b521420e87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
