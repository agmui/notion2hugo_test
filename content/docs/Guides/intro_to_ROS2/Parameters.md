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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWA52UWW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWUZJTae1Z%2BjTErOdwYWTo15hNhhTXYXyPI%2B4IhysQoQIgfdbKxtjvEqR1SCs9Z8LenYTQFuje69gHuqKyc9IIZLcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvUHl7ehGVypvkbGircAwGhEmohiQST8n%2BETVb6U4d4CL0%2FuCd79P7Pudu3k63zZCoCqqAowdizTiaSVIsvFtCqqYUSNl9MlHbOklWQbVaaT6P78bX5uFB%2BSZ1xmNQRYfPyNZb%2BTh9Ix1006rfXRQCFzS%2BmKzeeoXlmLn%2FRnub4tYLtIHrBMOeiUoKFOLPPoJyQRtqGrl%2Bxxf7vhOXjs0B3bDc4v%2Fb9nv6zx4ACdr4xr7mTyUNE2vHrKUmARyaf1yqiguDzgPyIbzFSrdUvokO6V97DKO18VwGNDXRyWl0dm9QVDJsAvR4jJYmCBGVyvYACstRjKnD0B1i4DY9nj4tXX9HZYy5sw0cGkk9dc2zk6sW189Ffy0Vh4SexuITHmaY%2FDruVAUZK%2F1%2Fpds%2FQ71TgHsVOz1VJfB18HqFDoqqk%2BRx8v6VqTK8oabZTPn0Clgcs%2BrMo5BXu0xDL96v5MfT5%2FqnajPXvqCLavl1xhPd9VFVkb2IDDnixRb2Buwhh5dWVtUFV8RTP9vGwRr1Xz2AmNrbsEPeGequXg0oBAujJcdrLKlRNU7FWKckkcUqXMLm4pknq%2BjWH5lDcTK%2F4blnsEn0EtUp7m6EIgquzpjGZbAkaJL8u2qE3z4hAhPfbimWDoe%2F4VkeU%2BIhsMPau5MEGOqUBrE2StNAEDD5ExOPjXTwks04WcWFTWMeqV33jbll%2FsxCLzEIN1hzzuOgZuFVyb8QIBtvUN2bt71IpCEmQXWcfqJGA6JRg2U5xFHPzqsI223krvgvSLrtZYGk3BLM9Gk0676Lnq8y23LT1AavsyzFw6hVOBXbykMUIrgcLhnGQJosnLAhMwa0C88NS2AHuC%2FUj%2FSue233mdubgGT9g582W0T9YXqeY&X-Amz-Signature=77b814070d249a02864404c7f9ed07a4a6a4b1db24b9e0c17e7948ef0d20b7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
