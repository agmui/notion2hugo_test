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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IR453Q2%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBqnrWpG37DBY8tpigTJyA3Phkyy9YBTpKjQFGPKwhdAIhAJE2QU8nJOm4Mu7%2B22Mpp%2FH32%2BfA3MOR5AbFiYTzaxF8Kv8DCHQQABoMNjM3NDIzMTgzODA1Igxm5%2BQHRspASJdN2Csq3ANWNKWq3AvrUzLb1Ep53Xixgtw2dmLAx7zPLCW%2BcDs7OqQZH7uXYLlSMpkvNU8pCqyUvMIegNY8fIEdpugUc%2BJEhODjZ6Fxaa8QKiNq58JNjeEMWHYj1QuhvCTbWrTpTQk7qm%2B6F5jum60lpXeT4iutWkzB%2BkKAoPG0AwIf%2FApa4jp8%2FqRGOCztLSgzW6q1daGhBKAiwbO9rjkxILQrDZsZ46pVHlEpY9GuoXtH%2FcbK8hWExCaW%2B8FJVSmYw019rVkZi3Lhgxz4NDQTONP8K4nXqcegfqumMGcGZlLarXPIvjErmQD78XUeCjOftx%2BeNbvPcsRZyJP09FqkjlwYuCWkwhdip6kUAWezopLMt2Q7yT21lFrzEuMHJN4ToPDeymef6kt%2FXFJ6MAdJCdtWMjGrXMhWDdZo%2FgyqaDHyNxtUnRTTR01eBZ%2BQSdGMM2lA%2BgMDI4yng7%2B6LmOIPJxHU8%2FQlx01Ici%2BqUvvoxt5DK4ZCoZ99EI4wYrPo18Mu7qRkD2PUqhjregmup6kX3tYLERCJ70XD8wl45Wmm82QWwnHJt5rZwYyYUq3NszrtYDIHuu99QMhSgKUe%2BIiNCCX5j8KCdkw2eC9QqrPkQhFpE4Qr2XRDXS5FMglUx7HfjDHrKvPBjqkAaFye4eGetni%2FO3rAVrAshsT0d5osLO8XVsau8lDoijGWACL%2FwEo%2FCMMbkw6usMRTlBPEY1yOOMxMi34zwtyGajGBpNzk2XLbsa0wlKNMgbRv7j33ACHikgST9BWgosA109JQX1B1hI9xG4Bp%2FXk1gTXUK1biKUnpnmDQPBysBX0gjDf3%2BofTTJG4G0RAlFcxq%2FQy7VNe%2Fu6235K8AbzN2QI8toM&X-Amz-Signature=7d96050c4b0d78b5384bb809cf3b82398367cb33db672d8a313c8047c4c57086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
