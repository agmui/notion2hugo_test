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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKGGOIO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOy3DsbYUyiAo2ZFqLA7MKUd%2BQX675YbRrI5%2B85NCkDAiA0z5iSnKP%2B3t68aWhErTIspbDy9xAzEikFpv23xxXd2ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMglWNNPEUsvFkGRWyKtwDEB10oLNLWq3ntga%2F9P9j8oiEx2%2FIfoEOX55YjIFx3gXhajgs9HvjOMnhD%2FbcJyZYi6L%2BF0aSRcPJcssmUlEr5Qj%2BmU2Td1606aec08A6c2koEsjgRmykZlIMcKdBrwzMXghDfOLFsZrub08Y3dBUXBVzEqycJoaTGLpBfDHpzC9nxSnS%2BewnTB%2FTe0BKbKLUYI0NU%2B3%2F%2FMme9FfOaH199w0cXCoIWVJUClOmbIrQBNn8VoS9uSwE%2BmRKBc15H%2Beh3l3vNqd%2BB%2BI%2F20LEhnivZn3zw%2B0ms4qOPjSGP9tKVEUYeZqeGClG5JIUT59kDqDDOppLZrqiW0mD5%2BfOjplMN9PdH%2Ba%2FMNiTRnzm3ylxvGekwc%2BjilhChVjYBXTjC%2BD1nY2aYEilnlTbO%2BOGBqr1%2F4lPQZQDpmNgDbdFhxjPLPUKe63U0kOXGb5xNODVCycLZLw1BzqyfE6QW3Q0BniRa7IEGe2dhJ%2B%2F%2BPnaP%2FkaWY9RVdp7arwpqpvLrXSLGRwWxPain7P%2BaGLSScS2udD9uZzY%2BIe4vQ%2FGT2hhqCT05vw55RkKxE04MAg2r%2FV8zIvJzxh1GcWc6XuzPTrKGX8g2I3Z39aDyLy7OcMzmaPkMqvhDWLH5mr196t65ZMwlu3SvwY6pgEcVAOT1rN%2FM9Sbzqndqw8UCN0NjHxowzLzBZh03vppKMd9ZLLyENfeo0htgBDamM6Us1jWWzxhR%2BrfkXeoBVh8OkmpF8XLgB8W6PwbHEnI4DOL6brFr0Bqp834jqHd12bogw%2FRF5VY4ZR8h7NX3u0AzJsR2Z0wPB%2BLKyRyOXGzQlbTnsZ3mv8S9r02pr2A8aAqWikg0gRz9iR2Ko4oh2W%2Begzgnzri&X-Amz-Signature=a03b7d85fc66dd33310f9cd16a37af53bf6f4d97d09c49a267a029f52fb39645&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
