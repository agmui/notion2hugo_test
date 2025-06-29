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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXHIIIRA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF73OHU99rtA5JuKNaKcT1cEWD5NyaVjObfV%2BBRN6omAiEAxL18Qq7iDSa3DUdvMH3XmUT591cOiZuU1cMl1Kys2AUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFceajBDig4nWNp9CrcA%2BV0Nw5oqGySbLgO8YQ6Lspj%2FVTP%2Fnzzyn7a48gvqks5r0k2SLWNeM6OrYDhqWMmn%2FSBv9nsFOvachMUlvqM%2BEy5nxvhK3%2FViNlqG4G8dJTfnW8SmrPuRo2L60Cj8FyjYe4SQnv3dsMkjZ9gG4H%2FsHgUK%2Fd%2Fij%2Fp%2FkpsqUtQg1JdXCmxTR4oqsLXEOSh9rP0rbuVWGdfaHt%2FIDBU30yqGJP%2B19hnO9sM4ZMor7Z%2BRIr8xklxbvIilT7bwZe7RBLtvcueHKy%2FplzDWPWAeIHKlrdEAfs9Yeeb7jn1q7y%2BDWQW4wWT7%2BSV6nU6nZ5VGDtbX7V2jNajW3AmO8f2HqD%2BQvLrp2%2BSRbB%2BkmYtIlKtFqOCvf9eFXewH6uNk86mqJvbvskTkUBttboTVeEduhmEauAZ3SXAmN%2FXopsq5rnJ7YYmjwGCMJe66b4wVmPHR3pwrBK6rr7PQdx3HXZTnrdJAbyHQV1LcBmZFqejUMeM%2Fvk%2B7Fh3hNDwhyaQ0E1PSoEEiWjfHiRJy6I9zNkyqhlpv%2FPrWkHaNOrst7mfBFAVuAAqra6JcEHiyagyBr92Bnv20CMVGqBOzffqMma7FzldlQA0bIebLqeI2%2BmFtWd%2F8is09%2Be4ma7JHFHkMpeZMKu7hMMGOqUBlYOo0MhfGMdjsHCsiliXc7iettdzfWECusjHtGdj%2FiVM8e5YGEtKDFipm6zaV%2BoFVd8c2EZplRrVXChXHi4Tzk5XuAp5OXWJBt17sBrBzlLh%2Fxe5y%2B2B%2BHmK9Vm1NugbeJECfk8Py2wgfb6qcVkN%2FPc0pBkpImlqqAN7s6hdydphJSA%2BIFXId89BBj652dnMz1s%2FMmxZsvmidrH5JXA513uD4H03&X-Amz-Signature=1984528485acfca4c4310a408e97aaa103b33e80f2544eb3670ca16b211ac79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
