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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSI5DYMJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8WqoRjEwGfV8almicE4mllfu7k%2FoOdtvWKvIZRaF0FAIhAPiwNrz%2BB9iErV%2FjISTuSNK6nMDJzyYsneuvvbyf%2FLewKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnS6oEUXL6l80J3aUq3AP2lDWqnMqFzsRB9CoQ1TRenrp%2B2uyGeQkB3yT%2Bd9Y6NuoRqS5ym5TqiLm2%2BVOOMxCmmkYurydX8NutrV9cJrzEtOcgFAX%2F9zB%2BQDij2ZrEdtnjcl1AoOaQj9UjMAOC80gFimaFEoAkMfBQ2k%2F%2FUYUNkXN7ldNUezu%2Bm5lylZx1lHFbt%2BO7utK0FEDxS9yQMQRGLni6UYJXTuTPnOegY0r7O%2Ff1fRTo%2FJb0wU8hglw%2BhHyP%2BWH1i8Puevgco39f2cjqqZ97QDWAh6EXZg6TWPihpQvSpZ4AKfo84xO93Lrx1whKVZ%2FVpA4AViJemVoDf0lHCrJiaNWFufaKzp2Ks5ByOTJ9QpnS8PkNOtxm%2B8NwQzhitvRpZr6iNf33kr8%2BNGulpCkCUBEq0Iz6%2BfezFIXL%2Fl4Wti6FiFJM%2B11BKS6zjBveD%2F8VT9utGnyRbMdqvATM6%2BT4mRLMYaOGSqLzGwD8BPm%2B%2FsjrWLB9YOu4ENy3rbTMsbqqXyEpZk0WqSfT83JuH9W2RFKHbYjtWF2OBiuM7ZDD4TQkJyh2HLZk%2Ba5en5OxzdtfmJu0ML9BROuHTeB5t2TZOVcT5ccgz1Bylj9nJ%2BJ6S6OQRPFS3EO%2BTLvNDDEFSJgAitFgVCvWkTCdstbCBjqkAVrGahf4wit28Fzn6XT1z4sv6ZV8A%2BBBSEZrDf9axT7tWcfus99IDEUKrChK9OGVyK%2BGxWjXnGjpSwhRMFgaMObWx0DBl13Ycuf0%2BHhA7aWb9%2F0GGLpOFR29BlmZOlKR3OeicwNJNhICw2jl%2BDEyN7eEZ3DAWvb19eXa20yK0P9xURt5AZmK8b4%2Bq87BVP1TnfhM69prK7C1mREywyRd49DwIEpM&X-Amz-Signature=531d6e45599ac82392a6efe6a3bf371ca6f9afd460481b6ea87c4ebcc2c65364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
