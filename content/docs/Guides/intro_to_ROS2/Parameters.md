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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB4YFYX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHWQ7uBGG3KDM6weOVhJ90vhX4GsrQQuWqqKbLzFaMHoAiBgYmOJVU2EMKd%2BcWtsdm3UXAobwRdr4tfGr8uiQsAdZir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMuG2f9Wc%2B3lIAqapcKtwDTwCJMthZKJpT5AXZ6U8RaMMDRVI%2FdNOezgSXjIJpNI%2FhvaRNGtS4Bo6%2BMa47%2BUygrNblv%2BSfdSqucm%2B%2BAg6bkKqI9fl7xorSSRdWetdRR%2F0PuVYavyWEeQe%2BEQPQzGL4y3h2xIoBhuzBPyew%2Bm9wpnkEPlvEpKGSYsmkf%2BfX67ihXF7KOOBId9AwQdnJ6drhMNWOtH7hRyJushGVBMYENykNzt0bsy51y1vl2O9VRMjZ6Y7P4GCrjG7KQ519U%2FSfJoIwnCpej%2BDBnLXjdQ3iifB6Qso1lwVVAXoo03pM4v3lBtmS0VdT2Yqyly23%2F6ktPvi3Oo0AmNJx5Xd6at7%2Fse13toldNDK6Rexd%2Bj3bg6T1UWOxIWobzMXGup6RuGo%2Fzh%2FIRJVQFj8TjTfAEeVKoBjHcQQXTLA%2B3amnl9j1nna4kgJdkIsHH4XXaI5zp7KdsJ1B9s8EQergICrtfmf2%2FZVmdD%2FzqHtPPYsVX1BPhf37f%2Fgsnx5Qb%2ForMPqptuFQzNX8O8LlBaGNSjVvOE2MShqh%2FZC3zaOMj2HWNSL7eoy2909CCZaXiKB7VGYQkYYdPmuiy%2FiMMqnrcfa95idI1yhI4n9q0PxXhp4vRuhQEpSCFiyV4MFp7eqBzpIwzNmIxAY6pgF6sCJ88zaq8FnS7htXClWcKwJoEBi8tlPxrn3YU9RKyqJG5%2B6vJHyWpiO88J6Mo8Ga1%2BWHBJnb0Dxk2KCnMTdSkfWotCEpE%2BrzsHHFUmea%2BkQmrQVYiUK1GPlQ0l4bKMGFYsout1dcuxpXv20H5RjG%2FLI%2FhXWmf7VVu5pZj%2FRJy1nDjMsYIAvDx96X%2BPrGrMPglfQazfVGiAdLfoscjeU%2BYoKLRlHA&X-Amz-Signature=e74b1950e57434bd2d89849738a22f335c44964c7120e5011035dab5df460e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
