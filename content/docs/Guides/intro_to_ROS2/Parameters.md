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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666YYCBFD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu1ujD1rIOOz4bBC61O62ITLj%2F2MF48R%2Fs5xbcEjc7lAiBAVPqHabLOG%2BLgD91fCJ28SqLyr4RXCVdaePEXf0rX2CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAD%2B8Wn2n9QvBWD%2BjKtwD9BHsmZwc6cDQ5pOjW6XuL%2B9H43t9%2FjOyjAlnT4qHRQ8tAblaYwjZinDuf2dUYT1mUJ%2BaYt7j8DbEp0lC66%2FwxnyMMSPBpx4%2FnffIQcugzMFmRmYCfuOPUcfibCDCBXEGU7%2BnWCBoM25sxNgJgfLNO5mcPAylPY2UlNulU9WFd%2BrN2C4jSbx3YHmAwIAVx7WEfEQL7OJwV%2FC1EIyjeUGELWysA%2Fd8KY6I483HsIQX%2Balb8HOuAyZCXDbG4jcisoOhojKsQC0g1aZ2mAul5dJ5mDODH9wD7NdM4YUdB9mXHyC7HhLr2LlhT6fdZY7%2BfL6sOAve1%2FNGouqwuGmrmicoIsxnNn%2Fj%2BEDpatucg0dir9oO6FR2tlPkUkOV9qOaeHEj%2FnnfWHDYAxXt4glPZVwREcLx497gRNkyDbJG0Gcn58vQw3ZbHmFUN5DPgWh7PRSlSZ%2BW5RQGXcgtbMz94ZLRtlytnsD085x3hkcVHrnhcXNiV1Bgp%2FC6y%2FtdB3U1N3%2BUBlUpBwTZVydrY%2Bl%2BkqKG0z5Ivw8e%2B%2FbV0A%2BOn9JBS83xkBmRywE9XDYQoSzvrRjuiK77kefV8wc5Hi5qm3H8kdVAqh4%2Fykaz9zwLcTKtQ9OQ%2Bu1RzaHJBSsnzbQwmJX6vAY6pgEIhpbfCRud287EJJVRf%2FLTpdkGqK5RHctEVCmObmOMi7LY6xYkBoc%2Bk3XeEV4T3EAEQoK4M9NEtyhD18UaScJBX7iBJ6PrVBwjuLpHe6e7ATi7Ily6TAcd42l5B%2FaUVhHCBdGsW2AqfHMQbfvhVIzgbygM83NKdtKw42huzdVRisjfZKXtiDVsXIuE5AioxOAl%2BYLh%2BuIxJCWieOp%2FOnI4RtEFYODU&X-Amz-Signature=4ab386275879d43c20baabbd1ba18bae41afa298d9749498ac10f55af85d6ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
