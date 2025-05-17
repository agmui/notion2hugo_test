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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXNDK7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS54FXF4DWDHvox0p9v7LSk4ylb5knDQkfOm%2FhRTwnMgIhAP5OEvmVbdWV2vBKQ7lOpbe73Tx%2BafR%2BX9m%2BbIlPTqScKv8DCFgQABoMNjM3NDIzMTgzODA1IgxJAsmzC3iZiKgwKeAq3AM9BuwMtlLO54ynWLVOgLy93l7B1Ygt993BCQ0xb4MjUj%2BVWfElpk97qfQ83Y%2FHgA91OpnFdJSfppZpFJmXBBQ4ewkUz1pRWgqWN%2BSRKCnKyEbHjL2cSYQgZgzMDuEUa2t2in7%2BJNdxTfhBro%2F551wYzvcuBvOteQUiKRLhwPvYjTJperQKQfT59jU70Ms%2BLvlOk8c6N%2BMx2RtxkcKPZrw6r4YteSmX8GTaSJAvAS7bkf4J9mq%2FanHmfhABaiaTydI6xmFDPvTr6bkNY46lY%2FoGgSdiyn48c6esvcAhJRX86OAy3IV%2BQXRCPM4CY%2F%2FWFj%2FFI4Q9vX3DBRRFewewByjH6TIal9gXR7EJ77gGLwpu%2Bb%2FrZmfd1uP2FkW4AtzMd%2B2NkhCCvUyOQzbwKJ08hfov1mqZhXkeHwGqab1typfym7UtCIRG49VKlWOfEixxZ0u6slh%2BxI1fwvTW32Vq8%2Bpk5E71oclHBUN9n5nteMpuIWpLoEYkB4M662tagk%2Btiu0ka98OtUw1NZc2Z4HKM%2BG4wfHCJ8qovaeCB4Sp8xGCNztyAM7g9ih%2BD%2B4f5mH4kYDjmwBSblSCkJMGPJ9G%2FKSqwoyONOK8pzDSs9i7Vxn4rafWCLjuBH3Etw7NdjDX4KDBBjqkAQAlhvDGm%2BOeZ6%2FSLgcmT%2BITqYju%2BSXCsNAGB8X2ijTkQP7Jd1Zd28AkXqQFgFiCNa3noFV6SAaFWAvzE7ss6hmpU5pGlpzQbpGQtGaOAez25lbLBkcNEFBdG6VQ0Uf3oP%2BA6TUf6KrarioGngQX57wo8lVnm5iyC3Zz8%2Bk86FvBZvocXqk6oEfAr1Cw3SdNb8eENWSBcYFtf2lPKMGiMLpwg6hK&X-Amz-Signature=56c1d8822add0f1fa197777739a3cc51714a1ba86a7cb0b8fc328da15769acce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
