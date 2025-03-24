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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGCAC3IC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg7Ag%2BJiQ5G35Y%2FEno%2FKpveWG9d16%2FFumP6fjLillvWAIhANj5NOGqqtc3bJVv7gh8QwDEQeqFLiIN3vQu1j0WoLmgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYSFjMtj0XJ1BgyfYq3ANzuyjxqc1S6fZ8P7B5q30zHEnjAeN89S01RhmkxOTxumDukm2KOv2BVFVmycI6%2FokdjfgAexha0MXIZmeQgZBAsprvOpjHYXS36C1Gp0m%2BLlkoazBrX2eNIB1PPgsWQ4nG%2FqCnklgUk9%2FO2Gxpbdt6Sa2v7okfE6XOWmfHtm2vzCII0AVYZYXrnBBR1GV%2BJKTMrDjXllOteVOAdwMiQoH2yr0x6qwhi8idUj68I7fW22RxvK9g1dUDR1pbjBPUnSBn9YJXIFfZ%2BNthz%2BCwo5jhctIl0OshgAsOP82I5TeQH05g0xnZAPF7jYmFQNLT38AfP2D80FJfVX0NPACRrjmHgJ8g9Wa13km9paMH0yBYL%2BkV4grg0IsgSbun7KN0FGUl7IofFicqItCfHvkSFhVtN4ewhmdk26wcSnsKH3vrfOLtbD9Vei1ZfKykY8tDCx4zZxocfQLq7GYYaTrjZwi8aShcw%2Fz2hr1uW8m%2BnAmd6xyxUQB9cc2wJdJps4lbPVGnJuDgbO1PBWxbV0cD7Mqsf6zumZqW54ZtQAb%2FCYavXv3oviLTNT%2BCKNtdbpNja50zBTM9a4qqkCtBjv66F838GUQpKVQwLqg7T8zxckcl4FeyOT0eFqYIRKHhbzDL%2FYW%2FBjqkAd5BZ5Jt073T44SiyPYXIS3IWXFDddjOsWb7lwaF%2FjsVm6AxKg62vUsFQWQnAIGDs%2B6xkXa2xKqUPuaNmCSDMaTJUhwVRmVK8a31RvANKTrK0U5gYE%2BCtfl9fSYAbdRfs9olnuMXdQ8mDyPyxEwlJiVlr5hrEAL%2FPLT9zI7sYgUY56fYPI6hVo83VWJowDPyOlsqqICDFqxmWui5qzLyrBPWBBeH&X-Amz-Signature=7a532e03ad0196c044e9b2933c5bad11e5fe87da6608d1920ac3decdc33ed2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
