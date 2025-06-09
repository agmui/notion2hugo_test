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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CDQDYLR%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uzfNLDW0fHCG9pfkOOp%2F4eB5oeCnXXCBX%2FxBRFwdlwIhAOVkhgFbJ4%2BCz6E61xABNQbGd2abuRgo3mriilS%2F764HKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKsxaQtUOr1CJFY3Yq3AOfqO9Bwd7dyUasxGVb8Pd6FmJTGa0DyuEUmRDsgtta4iRJPkSUYaOAtl6%2FjQQICd2di4%2Bo3AUJSxWhcpzlBs5ydCT72ILt5pS%2B1OOmbbjuElLw01x0DVPe41oPNFM4OzLtxaS53fWz42y0SW2ipeeeRmJFC6heqqNka4%2FnCTy2RagFeXZXCSDFKm2OYMTzu2AvYVvF1YB3D0tZYS3IAHOXbpdlRsRN3TojYe5Jmqwt9rOEOLuTauJTOVQ10bmk29uoaD8JTAlbHTrF0hdRxVfFYjANjy1c87J4rl%2B4MTnRGge2VGJAomjFfnaxRWRGCSPvFqOZV7zhbaaJrxT8RsIYQI66zaeQG%2F0yonGBjddUyuONl7yIF5Omlxaxv3JdIPdoHsySLLkd5iPak6alYcwVqF98ZW1Wd5X4g70sMuTK7ElT42yBJZ%2BAvj8ZIbpOiivEV2B%2FOgaBWrNa6j2ZwIUi9gCvtgWMEi6gJ1fwWiMJXZZaENOtj004z9nwPRR4tsCCfKCzH0cdm6VWqYuwwpRjKAlw8H1WtwwMl7Fh0%2BkHkB14k9OO4etxcLWXoqdUGxyEDMJRucd0FwNzhUMvNRj3ERm%2BaUHn15Av9%2Bl2iF%2Fna5Tf1%2F0%2Brexp5b1SjzCknpvCBjqkAcQTBFe29m5yjXmNABCnai7cmyECgKMfdOnmQP12gjvFhV4g5ld97ddRdUfIeoFTx%2BJqhNIR5lLYR4Z1XysP6xVO5zY5WttB%2FcovFa8dKcMa5bbLWcthpRtREMAwLo4K8LR6RB2ZjT2krCJkENMj4RHbKZC8RzGDXwfqRa5xCVZfSyTYwW8%2FT1X8utYcBKOmnoP7uSFC7Rrj9QLcVKJnRB%2BPdsM0&X-Amz-Signature=ae76a49a80cdab23783acbb1bf688ecbec9c055c51e15ed7d1a14a1000e67760&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
