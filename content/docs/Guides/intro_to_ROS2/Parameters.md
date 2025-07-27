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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMELIHYO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD6RVL0Z1gxnLWcBrD9yTa2jOrhul2Up3013WVToNUg8wIhAOkuE9sICjjsIuglRlRVxCnSM0amHJ3sqqi2ciggf1TJKv8DCHgQABoMNjM3NDIzMTgzODA1IgzEXAbZr%2FX2wRbFlyEq3APOKNBZQL6Hha%2BnOKu8RcTDqgVbZvt0%2FHNZnoGP%2BKqdvJY4Gvl7ju6exAkj%2BAlbLJLXhJUdK7IiEGi5hqZdYMth%2BzIeP1HAYZ%2BkLOAWvuYNEEB%2F562qxe3fZX9yemjabxPLBFnr0FoVXOnE4i7psdG1gpUf2oukj4jwk2%2BxAwuUsraECmKz3NmsUijDh%2FTGq%2BW%2BLbfkEkkNaAxX3KcWG7xklaWfQWiMvKku9Zras7VDJxxn6ysw7MGOTNv9y8yFaGHhWlM%2BsxQBr2zZwAlpCCYgwLbdrbu%2BTyDDqPf%2BddCwabScpEll1a%2FCtmxooEqsPKjk0a0VJL%2FmTR4oxcAWSEqt9bT3jm%2Bk%2FkOWLzd2GLfWxTGYVlRNfGOuljKvWhP4sW1YNBOxoAuTR%2B14%2B%2FO62zAsKPew9UlVOvLmVAQCYjrXXfJ54X3FD6S%2Ffk9CJXgFXKa%2BPOX97rVtwpkdbZElhBrAqhtUEKS8Hd2ijxv2pvjXHR5m563NexuTE7wepFDPqNh%2B86TEoLCvAk5qXCF1cpJEIg5v7AiQ0IlcI1DL0dD0IDRGp29f%2Fo%2FPQY2yrgtxiGze1EGTXh7kcAUfb6cv7lmdmSrJ2c13OUoY%2F3bfuWg4ZkpZ1M1ERJANZalGmDCw9pjEBjqkARQFuO%2BUZLRvF6e5uqasstzvuuWluFBiOVuR71%2FmjCLoOUwsP6w5Vo17pCLOV7K6k9CTkCm4psQKbUVAEZ9N4GoWqVfQQXr0f%2BYY8U93tyUNt9nieLs9sNKOxseJ9dqUtIZ4JVmwACpBaDe036Qbd0Zcxf%2BHWtpht0qV3YkUX%2FeZNaqGs0Awz6xhdAvuoYrEmsAfUhBZ%2BQgD8mq9IxdZhiOXpwgr&X-Amz-Signature=c06b993510a10355d38c5e3b043a0fe8fe813ee208c040f46a8f92825b81994b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
