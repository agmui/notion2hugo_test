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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCHOG6H%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCzvfaVPb8ilg7x4MnCnfGRjsT9tqzDMpooqVgPD%2BmrcgIhAJ8R0lCfpt%2BSudG8iWxWZ74PckhX2hUATlf%2B2eQrTtmaKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1zMbn7rY5ml2%2FzYQq3AOdB0%2B5167JfoWNWHHsMdFFZldQpNjC0nQKzIJrEkvt42BWtNcF4XTyZKw%2FQaJNoZMTrAVktA1l%2FitbvTHFKqSL4rtFP5F4Z%2FEA%2FLRH%2FGc5ZHmeRnsHOzVlZl%2B6DDk5JJ5wZ5mPU8jU23hOYcT%2FCiQKiexFf%2BSzzm%2FGqX1zflBwEpphPeLC4VC9WUD1d%2BgVc9GTk1TpBHgPxF1kAVeDQaoTl6SeIUtmf9EDWztaSU9u%2F7cN9NVBAbwOSjvSPRxJy716cLECKFxKcHHpmD43OdyVFBL8oPeQp7ccjgGjdQ%2BH80dZlw3o0FD7TmRwS1dUkJL44%2FY6tDXicU8ucU9m86td2WTXir5IcZQQe5M9UWWe27aI1ZpfKdQ1sKHROF8XFOIUQWszLJTKkNMxN1IGSQHLLokjtFGnCJyBGtCWNopfIviYAvJke8WX9VCIXukTGukOrq7FCwUQRSDqGwlCsHkbIaLqAtWf9PJKSQaaY5Pg1BnWobQEpDeQugWfWJkE%2BiYCivA30%2BTaAknLDv%2FSqIgF8n4VJN4kaIB3y4FUOP0RznBqlyJgPxYfTiW%2F2METUH80dFV5Ufq%2FvMO5Q9vZ8TgFSKFR9KmZL83mQmHHxbHLRARfQIiq7S1DHXQM0zCbtvy%2BBjqkAT99szID3cEnzi3anrDyADnkCSrL9lrUY49g7J71l2HIbgMNgUiSZ3Vs%2FsVTZEI2vYf0Au9OYe8t72EddjQpM6fVPSaXSH0Tgg4zTR5%2F591Qi3K5hLepBUVfMMM2ZCugv5SBUSrKjvSGJvPIcKzbOOL2Q5h6djb%2B3rPmPddgw2AnpkfOiUrbMcFZ%2FfYTaWcV7xgIIFFrOkvrDZ8xnn3WngSbco1g&X-Amz-Signature=5e923efe85352c9613cde28738e2c6040749ddb2f5dbb6916684a71f912cd375&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
