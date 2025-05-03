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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5UTZPXD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC%2BxzkvSsFM8D3VObtFRa7UUu%2FVcQd5wogd8ydrTnkTngIhAL7XJUZYdy6TFEXsFGg%2BIfyvGaBxvoKoTKCCA7CZo884KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjM44p%2FHOO8t0L6nMq3APNgpUfbkvdi3mdbW1bl6qd2LIArNlFKyuUiPsw1b55cIvlByoYMznGAqJf0wh3pwPdUN5L01Wl%2F30kyff2V2pr4iBTmC9pmlh5JGq5Q4gx04jugFymJ9zzYXGtm80NAkslFIiVkg83AvZ%2BjsJO4Mx9As8uqpbBTgE%2F%2BZBQaQVDqLM4WxuKBI7qdLr2evJ%2F6Fz57QrtbwQX6MQRboJ6ys85Ci%2BdwW%2BbOnJe0pekF1WIaSBFsiqhFi%2FDuEmHD%2Bcr4n0mENRQsabIvOL%2F6YFkN%2F%2FYJlWDiLOhNAiOKa2xjpfhu00rpU5Hjn83nJS%2BKCyjIqRYEqKB2YR6JMr50itG%2BLk1g%2B38oVfnB2LXPhytBhDgRueTRwj%2BEa9zX9JN4HnDQdJxqsIQsbYXu%2F7A7uwPEhGpozVZ0%2FAC9Bp7wsSBsbf0lz%2Fuj%2B%2BIkVqsCZlfg1aqBfwSrPj3%2BC3oMEODTrcph%2FZftuJ6TvTYmR%2FCfpAtL8oJPxpcokpraGJAgpIo92L1l0VOK9uRaeUKemCNcR4%2BMXZe0lShHT8FwicljWxlIIZJvRMpSiKkG0rEebDkdGWLh4%2BR8xJQZolAYrLcFGlazKnL3elPMVi85YFtE0vouwstrCVr6a5aYKlKVigXXjDmmtrABjqkAdNaMHb8mxTeHLvJJuDJQWbxx9j8Z76sfuPtJyV4v621qchDhrQcz4TWSUuOO2%2FfOa%2BgYYSQsgxD3Gl6fTXjJaQrMQhRIiuYZb0AIu6ttEd8rjoG1xlZhTOuXl5%2FDDtzfVrp0TBCnG3AQXocM5qpOSPJQWchg%2BxcsPWSjICObm17SmBH0TI09x7VieuadSU5fWvTI%2F4MiJ1ZEfLJqAR3BJ9QbvRh&X-Amz-Signature=9d7a0bebde80d64d17a62dedc7a1c6902e2e372bfe716c69603c9e885ef7d196&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
