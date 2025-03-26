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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRS42XD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaTWCrBbQrPuH9E4OpTYRc5iff0daPnDLpAPLskvll6AiEA1hbRg3Sav3dIQJz6%2FRWR4XfJICurg2eOH7QaM7yNnx0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLFc1ykbQOY4mexOqyrcA%2FV09kGjcBTzM8ZKd5uJb%2F4O9gN3GU6EdYCp%2BWVzrFlG9PbxNUQojxCR4RtTNGQzIZOBZV8WpRnYHrI5%2F1umsUP5kbKaE6k3jdZtWy7zhfMxpsTWDVqOWhi%2BiO2%2BCUSGTwS8tQfC3p9jeF%2Bh9s414QVrCma%2B3uqKfeKNGfnpGPxVduwquM7RtJCME5sICrWoNXKJErozRkUDMKhr3aUUFAFs0ceCWXQN3CFTG1UEPjEus8UHW8lKeu7QGgxYUfKgz48ty2x65NqUjxXpZFnxyttsUDQ%2BMHMTGRXYwRrbacVyjPXAo8ncHU2mjECaE9Z9K4L%2Bm6yAYOii04LrnqNbx8xN7fAJkfn7txOQIf4ZTu54SUpSbHq0vWbBnggkFgfOj6M8x7nIKY3bodgfGrGiPXQ4mf18P%2FDHA8MTUlhDy6EAK44apFZOE%2BmnS8CQTLwh2aNgSfRhLLpMFqu5dqh%2BDkZHHfS%2Bme80VS8E73TIcp3SgPt8TUn8edx6ltXyKRHO2UXhTaJ95LjFrTFE8KWMye%2BySbxFwi0KJyW3z4iBJS4pcnI2D7ZF5o2F2fw%2FmqAoogblBjhsy7psKk7RCENjxx%2BMZse%2FwQsS7ng3xXscaqVsHhwGWbiVRXnP651pMKr2kL8GOqUBIVFOf88pkC9boL3WNU464%2F3TpliotnXGJz4efNy7P2iJOlL12RSPHqs%2FfiMuHba2wbZMnp2qaeiB%2B%2F5zGkxA5%2FCp1p%2FtGQcRXGY0mudKrE2Geqvdd%2FFbxmKyZ4nd7GBNwuunsRMV55FXIAxDy2jU8qph8ZaLlQS4lJkKcA36srSpIqpNHRfbkMbeT0IO04rSo9EfjhDmbDZOGZw1iX0N8fwjxoXs&X-Amz-Signature=54ec60a39b682b2d4dcad2384e9d4f4c80a7f2932a3262214b0484ede850ad3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
