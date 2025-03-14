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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN4CJGV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLoANZtv9yXpfhR0nxCxIQ23KTiTPnO0P8HqWhChQ3tAIhAOg%2BV0CYeKR5%2BhzbCrYUxz7e7bJo7Lp68OvJzK41YUSuKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxztjqNjsh1crWxp7cq3APqnBHhetHXoieasYeyaWjeLMrR%2F1b5PgEF8GutivGZzRkaXVsbrXeePlwuvaWpiKRXyejMJ7ucMqQfipRV7ATtN6dedpDzVObnUY0lowp6n4zbsUr0ouSgpG%2FT7Hr5EihnquOuzASpEHT7%2BHEwdX%2BVyYhVbMz3BMe4aL5camroIaiI1aC6LnxVX4pQvnB%2F13LRTotuL77ARDQ4TmEB2RQfEoUO5ocKAwpJ4ShEaOeyaXwmp6cvrK1VF%2FHVij%2BQtS68ovoJf5sz%2FSrWF%2B5FPJLDtxUrn1U49B9wSRMySTHSoyuiqBgQxa8DXwgcK6M%2Fpz5Q4KRDZ%2Floz0uKLl988G3agH%2B5zVTWBXmXTRUCpO6sRtH64a7d4G%2BU7SgK%2B4lN46OQk7UCwT4Vk7y9v4DTWaxCjZL25gaoRV4RUI8wEYjTrjRnoewVOvfX4zBM7BJGdES32PY%2BxwHGbYQHcMY%2BQ6URUwM313tyQjoQybcw%2BQBjiqB2kD3gQJ%2FS6FTmdPpmgYrE4P4%2BhWfWqPBlNnUiDKhin77F3p9KDiCznmo18lV2OA%2Fem5NjBfhb3aAdDBXmc1BEIHyx0hGy3dy%2FEm3uIKU50LUocv41RiugmhOyD%2F%2FZwGIgVghDKSnk607IdTDQhtC%2BBjqkAcjbcr8Kbb4%2B%2BGbS8XXwR4msB%2BeC9xrUdBuSfyZOr1UE6zZp6zfTFmwAFxc7sEJTDa4c8ubLddN0%2BduJlaAVBzIYjPnHQWdcFRTr%2BppA2IFWZ303Y89p6hUVkeBFXa3BtSVAf6A2diAZSQRpzTzEMRauy%2FYZBi4wIcV7zdttnWuH0X34QIxaoO5XpZv3C7Gb1cH%2Bz0WPbNmH6WlsCH4DtB4t26NX&X-Amz-Signature=c666ebaa5cc6bee6405ed0a6f9004c25c3bec58ad3308262f9fdb23ca4c2b2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
