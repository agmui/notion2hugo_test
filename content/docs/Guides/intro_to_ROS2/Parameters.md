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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PG7A7WY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR7i5frQhOKNzvD5LdWKNwaftCDtGwq3Iaw2XfOfswPAiEA%2FRqugNPZ2gKL2Z7iq%2BQtT6q9nhG5YcvQ1z5QT8BXOggqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhzAVHQYFA%2BN6ITlCrcAwheu7bO3Y%2BQ5AQ85b7plabxJAHGuSGmj0Yzueen3scr%2FuUSdmB5L%2B3acc3yqyo6%2Fx%2FMKfnxCIKQlL6rTD%2FFCAqUg7i5nF3fKBz0eh2WxnGs28FNkPgbOfu%2Bmsx5lVP4oKo2L9YWzu5%2BlDD0ayx2YhGkMFLx0LnnO%2BcdpTB0KbObntthXN7e%2FL4iz1rbUP%2FXfBXy9fN6QkEpcgaFD8TWSZBA1DB6RfGSjd5FzRcG7HJAwCIgSwDTN1k3mWvOQrkLUfXQjvSLmL7aOAxEbRWkm%2BIFhI7VFSxNh1JSdq8KrZwCW65JAil7oxAbLkTYeeDQRWMyi3wXzQIdGLHPMsH6G8Xx4a4C3wmlpnN8V708L8k1n9UN4LvTFrxLvpb0lj3es55ujw917qo627zT7uOb%2F2mRoBbFPGAR%2BNzOm15cW4YB%2BjsQ7ULVNKG1fUZs3qwSo6%2BzBSbhOKdPRC8v64wkl%2FI193QgVUUxeRU6JNRBw4JNwwa39QvwlK%2BlK2UlbYaHtWzYlKJRzBEtmPohN1P%2FiCwPAi01qvLS9jkanmng%2FUb268k4310DNi4K6GlayylscZAlr10QOeyo0toHiMpZeBos18CCqIyLoSNkrFByhyMoziywiqKoDy%2BNMDVcMKj14MQGOqUBwwjsx%2B0DadnTL0rZwDk5Zq%2B6fqvbzSIYYHGEfc6EZKNewJU1xx4MKeMiophrfV9RukiOd%2Fufs%2B4mtPaKGjbCWBjdjJc4rDHmp%2BGRUEq9NCRUquXNim0YD8cbjgI5mqFFKOEgqna54ewXSEr%2BaAyGP70pnilwrNJBSwFpC25K0ftC6%2FXBx9Z%2BrIxAJ4PfOmQEsfA85MOxMHtzsFJzklXu8A2ifg96&X-Amz-Signature=be85432903caf4e7a76ba88853ba866ec3d2a46eec9297c460453c78d10022e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
