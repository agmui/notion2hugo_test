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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXQAYOA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICp%2FDYJ%2F1zvt1iBDSCNHYbzeb6%2BMyAKbij1ZK4hhb%2F1BAiAE5kFjnl53onoPH9qr3bC7sVf%2Bhm0Xv4cmqR72UBzxoiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgJE1J2LpsUVAVa8KtwDAppRnqVUZ7BM1%2BCC8C7qReLO416MJh0MuDVxmGzrrWrdwQY3dko9FIT6zJ%2FPbRlt8mQr7z67hIsG2FftM5ubJ5Hc1RsBoq6ufGLLiCX74EGPMAkBWagKligK2ksYYEoFBCJpb3MRHejH1WB50%2Frkld%2BDDOyf9vDcBWVxaVjkzyRLtQ7AFPwp%2Batzg9Si9hoBdZ%2F7MOsv8M2yGIFRse%2B5XVRpnxTZ6RhbZPmesDNoyReq%2FNhLOCznL%2FaiLr%2BY63jAX9bvBNSxeGluVF2j9nb6bN8QM7wYr9%2FOBTC9GyFR1hulBAUd7ZCb29C6eG8y1dxZwoC%2Fb2592ZbdYHfBwZWqA6JR7uPYCPuf1IL2wC%2FssaiEPgLBGK9fPY1%2BlgqHZG%2BnP5MVkToUSX4YCpzlvn1TodOPly5YUWXaAGLYVtMh2eVHt5mMs4yrapHNkyf7z4Nng0FieJyLYd065tB0TkrQB%2FRsnGAQbS7736HSIPWgIYe2G4nfJdhJp0c34vYnHgIGQbie9zlZ9zWpAer5K6P2Tmzx8xNWx3zpx17gxuPC8Q092vllOmcHFYeZ9R59TxtjcB%2FWwfKm7GTXUaS6Xe9Gj%2FlhKKJbnyNhuZ5jvsI4oFOou6IjJ5DU9huDPccwx6%2FjwgY6pgEaiMKIux9MDyNAZS4phhlCYrimGS6ZUFaOTXKZsbYFEpqf3Vv%2Bakfrj0nS1io13dIKnJilDpgW5OAYN7iGGeswEF3hA6qW3UpdMm676wBjQFnGd0p0Np0rad5qPh2cCtPz0JQrnAByOyeF78Kro%2B0RCuLxl6spVuORcuVnFPTV%2BphuQwjCYx9iUBtIpCSBcnbd0CzNLt%2FhPssd9rXaFyD9YgiZbOIv&X-Amz-Signature=28cd08a053ed5c5463d5633804e7b6d85d079ccc6b0565567f0ca922ae7752a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
