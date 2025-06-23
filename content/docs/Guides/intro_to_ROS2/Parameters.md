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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BR62GFT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5FWm4ZFsCgVlz6qfYStAWL4LJwqYGcinEVMPrdI4SJAIgY8pKVQTRJWRsrNTrXuehbp52%2FZl1kukazS5Q9IWmDbMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkIzkDMgeYpaIH3RSrcAxBJimaPXDtvqg%2F4zAtxJTBhFUU%2FRa%2B2IB0qg5xnpOMfE0aRFT%2FWf6D9MJw2EoMKrv6Bb8powmOvwNqER%2FbgTNESu29oSa13c%2FKX0oUsVUwR%2BEfLMlV8BBl73wthzH3kFrSwVMs0GKLeF8EY%2F%2FegLpTIGpt4uhxvMGa6gSUktELu7W%2BWiHqAXpeQJR8P6w2wxwynmdtZcgIU8hAmBr9CT1UzYFEK5cUAA9%2BMeo8wfmImJaqcLK70grk4%2BdnfKvsEtHSaekV9QyDV4ZNfx6Km9ULq3kiLxTXUuwMfH4Q%2FU36mXzNna2XyM0bqsIBQi%2FjDSjX3PmOHqse%2B%2F505mKgtdgY%2B5ZA9UkYFjkiYvPq3sF63tU4nen8%2B2b6suSkx6E8Y8GCYuXM2S8Jijy8n000TZpwC5IBDYJWEE2dqqS6xLD2wVDgggdbmxhrz%2FcJFjSdYTqIMbaSNH7TLvJKh3MCwzRUSab%2FU743rs5NgMlU%2FcuNCAhSZvWFjnSanXHaKqJxga%2Fy2Xdfp6umpu3BcsrFKyJA1jX6mFO8Gjc4zbwXnCIninS5JekXeFQ5k%2F90FNS1tMNaoQRMaSB0Q6MFbAD%2FKOl6VNv3HrP%2Be%2BG2QGyYb40l3gUfhPZ1mSHvcebErMLqn4sIGOqUBV5XwcoUUTirJl5qV0z2a4QwfRxcXODr5AJXK8k%2BmHEp4TwrgWjrhKgFb%2BP5sQgRLn5ruU%2BKMwpa61Oxhzpdvkj1LsB72guFC4Vjzkht1txqBNMvSMFeNI1cVpYOoUaC5YswzPwFxAgHq7DgkQnejMbdaXp7d2xMp2Hla%2B7qri2oGeroNjc9jINUSQoQj827btCkLXgYb77TD1waOV9G3GtPwLnRG&X-Amz-Signature=271948af28cca90a8102c4e0b0ad4ed0b4b21a0f307cfe7ff7bd502831da5d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
