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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFXEKTC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANgcgKpWXzNO1243tzY8%2FR3YHeMqXEhNZfgB0Qy7d6OAiAek50t4xRfr8fj%2Fw1AdWZTQ2oBibbAw%2F6SYu183wAmJir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMCo6CAGPjtYvEPGnUKtwDNSGGQJYrtbOIrflhJ7nVhgy5CeEvRmm3PGJkInX360sFPIBZyUK8GNgsvepia7QiX4F9HriFEk3iQkDbDhjStkqEkgFCvIxpV9PZXJYA9BZKbx1JAC6MqG3fS2n6apQJwSnReq%2B%2B0M51c0eMD2dQPsnXuwEBAnaY8O%2FEtliSowAYrPsrGylI9roVJNwX4yiljlp9IfikNgJ3Os4mi%2FZ7B3ejDHkPnbqJxdWqFlWwHGtaUZhX1nWnekpyUUgxJ3uCiPPnZn9EUA72TkAfCiT2CvpICcqcHe1S89ZvLSsIizfLcTag6So5QQeGiV86BoKdJurJwYlJkYVUB8Q5Yk8ZG1lgq9NCj5r1le30IS0TAN7DCoUgRexFdN4IVCiFJYw9Z3xdx2QBI9ap36qp%2BS%2BQKzkEyjHJzzVUfPpgAx3hYfO3YuWPCBz816nbEiLVmbmgBuIsBjyziNbjxCg6poDqSPR3vaFhDxE8mEhzyPRJB02HPu%2BxONhJdB6v5yTD9R6YLMruii%2BeDx4v3a9%2F%2F6CNfliFP09dRpxsTGgo0ox4g1PunDKVjyUFaKnG3wXys0IoYIZGXsddektdXr%2BI6m5OVpzAv3smnVRxaHnKXuuHCtl%2BlNhZ4YltOSPzHhQwwqaPvwY6pgHZJFwfjP43jHVSBbSq6HhURmKRZnMqsrd%2BgNmqrMxJWg%2FAEp%2FAK5twXQnvSXPxiPv6hmIciqffwLAuaI1dcmSk6Na%2Brju6dGE%2B5r0mVP19A7Z9r%2BCFRhvdgUYybPMJ1k8u0wZGJBoyGgRorvrm3Io7tm4H2YG2oDXklWRELmeGdUit%2BkeRJTY0JXIJjGi%2FuVShFOtJxH79rthpxBVzpYR9okrOGc%2Fw&X-Amz-Signature=eed11460fef82a4cfcd7200cdacc899b60f4526f6b0f981c573edfdc6393d9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
