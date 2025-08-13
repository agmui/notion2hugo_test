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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHFT3UHQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5e6%2Bd%2BiYnoGdYpZCS8MWvmlVTyKgCX7N5EEs3iyCDrQIgA3VylAbTBSUQJbjCwU9vQZLWbrJCnzt6QSBbsWQVQdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIYVRbBZfP8M7bW%2FuCrcA199DX3O8okv%2FyeQfwwY7%2B7RDl7ZXsBBt%2FXTPR18jG0Hda%2Fi0XRFrccWF%2FBpva%2FjovhNIfv4fRhtVgGcUswncIZDHmy1FRtEUUGoqKZZPJzuPaaxVVAXWsI2DlMcp%2BagY5Cp1CwnSBgmto9MnwzNwGETn%2FYWnTFl1RO%2F3Bvwb8qzJlJhvZia4H5Lx5UI9lZEkGt5qaApiWJ5HEqARa%2BxUbmwfayTk09on0v0YY31TLXmX%2BO9XMfyPYY6rF2svJa0v0cgHX32OsOTUvqdLbwRw7YNM3k3wfl6BJrfS5otbb5w33Piq1Ro%2B6sa7adicAyXq6jCL3U3BvC4su%2B%2BjikhZqvGbBISqcvDTaXzRpuSxxXNfGeE02hyFv%2FPdC29QPval1DxjO08IwbOTJvFwBSHaAN3pixjhWQhC7MAfsMxmRcMQl%2BYwiYe8s4gX3xXnEkzSk2V0dbyEX%2B5Pj83%2BzPrNb3hZkH9kXahufx%2B5NvzWi0qedMxQl1IeLWKdL%2FNY0Yk1FqbU2N1P4PlEcVpazrHoTPbqkNyAX76rZRKdiq2mQjqiwYtRPKiBfwfPSxbSwjUziWMadcrPRQHOq1ZFUDYF9FdkBauA7afAj9GznjtQSv3TQFWFEk5DbkCsQx0MMKG8MQGOqUBEysdPdkV8Ok%2BHlL%2B3QldwkSZR5PbMIdkVNZ4FxM9mc0R10thcOwYcZiBIckSqy8xI55gaVDhyf8Tf3urruzYOwlX37tpHnOGB29MvD4ouC6nXXwdkgqqK%2Felu1nQZnQVUtcJGjNcHIQXpYLcbfqMYGi83g1c6gwChBuCHaD8y9XvADgGA19FyxQeUxO9l8q0otEzIXw1ScFKcvW9W8moAa2e%2BS9d&X-Amz-Signature=0c7cbd6a36ff4586616c1a3caec8fb2af4a400c6ba9d4fb9f0015a79ec0cf49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
