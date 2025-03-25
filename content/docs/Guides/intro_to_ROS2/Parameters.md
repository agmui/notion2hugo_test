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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J22N6RQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSOf2htdCRDGUZkP5Y8K2Qeu1u1k%2FlT6eoW9aRHwwqBQIhAN%2FZ%2BqyRWoOPqGAFgS2corzO%2BVYrT7J3q04pFguyi74VKv8DCBQQABoMNjM3NDIzMTgzODA1IgyQACInLfRk9stqQ%2B8q3AOsopfnE79MAY8E4st3ie%2BpUTSBX3dRvrONaJQh7Leesvtp782oChJcns12IkcwVtRe7XuSS1wsndB1MNbgJboiD3BHua9N0hCXwlMHjhAXqscFV6e3FGRoK94ahlgTtotUDWlkJWvb6vUK0KNS5OTFlPCbb21LvGEA98r9g0poWnp4%2FCwibpnYxHJ1HPESVBZDDZ4v%2FUysFZZjFaIReqV5%2FJ1jvDmRL5xba1Id7v0eyHgHqcThvzhi%2Biuy2d7pbRDWKt8QTRW9uNk2Uw8r6uBbJyPcf9JVu8ySQ9E4iARKWlhu1rPbYvZGX%2BvkPE6Uf43pbdQbIZL675GAG12v8V0eArQQg%2FgxWeqCaeEI4IIgR7sHoHhwHvQrOjUwJsUlWnFAm3VKNBidFCqZnJZbg04E1sR4x%2BygPOtpxFtrbxf1Q2RCoVFHlT6iz5d2uVnZFYStmWw5EuRJ%2FXM61i2YRyJivYysaf59cteY%2BBKYqqTMZCAtvN5rG%2FZJBlUSQlvI20bUE5METLunD914LXRG9K8yJftlxf5%2BT8F7pvAxsyUMYunIVNALibeM%2BNaovtCzTLypzf%2B2aTWMMsWa4vL20JGOFthof65BQvIFCiWGV8T7Ka0F5OBDpKjZl0sF%2FjCui4q%2FBjqkAbxJSLkWopSxa38HtWG2ARuGpvTgDtSZuXTQFIhMo%2F%2FRGA%2FGkSJY3L3kuMkA7EeBhnmWrAe93ftgtxXRd9k8FEYfZx0k9cF3505gaMTmo%2B25mn7FKd8prBrYDRQaXjcwFMhO89P0%2BCl%2F5mkvoQJ2zUSvMztMqgqfzgpZZ5uM8z1VprX1%2BF5x3GSBrzCY94hS3KzQcdiEXeO8x8bMyKHbScguqmuM&X-Amz-Signature=4debbedeb9b2cde3e61a1a6b468438c877f9efdfd095016d59fad469c75ea0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
