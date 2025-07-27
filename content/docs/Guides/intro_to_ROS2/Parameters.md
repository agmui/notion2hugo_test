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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFFJHY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpeZeQSIpSv9Yfu44%2B%2FCBZtNdQkH2CpOY8SjMHEdJZtAIhAL02P9U0TE9Stsr2uDLpefYcozWL0urBJBNJWQ%2FVulhLKv8DCHgQABoMNjM3NDIzMTgzODA1IgwxETUjZoN3xpKlx88q3ANO89X33lNppsgEqhxjubte0PtV7t0oNaUeWwadu4r4vKYANtgm%2BvItvXL5Oczjx7RmXluBuBYcam%2Fe94AneP4TTA3l7ehG80GJSWamhCxgs3VIo1g4ESIs98EzvVUysMqqzxZ0FKpT%2BcpXd3xmAH4HyWzEN%2Ft%2FnheoV%2FuE6AFAid8yAIdiojbIi5%2BymM66GFUdLr5u6QmrlGtTXn003%2BnDiPTixNHn%2FUlO%2F4ldp8ex7vx9zV6%2FpnMmWReHMKcgugaenjapxNmU7XV5SMGIWsC1egNnyMEIWTT6jtA6A6D0h50plDYPKYI5KV97kEgbcFLOoeWgMFknZBWg8ielk2UExu3zFYn6HcQ6A4SRkwd7GA5ZXcXWtxlXzRms4KjXwqC3osPbTneA2gYxBbmNA6lWxZrMf4tXbH2Q%2BG62Dl%2BRyPpKY6q8CYuNHFulmNF6z0RF0KhtanrAfUvCrDuq9EAl96CGeVAz9XoauuqJdaeSSR49sRC1P68hBsT9%2FZAnTyrNw6I%2Bjeu0RtfAZMIYIRe0lH9nUQdqLJI45FLBOUorgL0prPKrGF0FdYsSc1bUUHGagAhajdV6AWCbk1QrU02B4vMNbF6wegSW%2BJqf0hVeJv9ms90O1jpSAraiGjCOgpnEBjqkASeOloqeWve7u9spcemnR5AzzsbeGByZIV2mflrGT0S4DUAKoz3eTQRSk%2FMxmDHTSu37kJ2XJ45dMVz%2FyOC%2BpEe6pi4qoRVxOPygsN1HFDtLx1Z%2BM%2BaPbgjkRX85xjBQ0rpCwX2LCNxfo6dBjqCnNEywZzYrJsXIipoQ%2F3gZOccrTvMVd9naavwYLWE0DxlkqTS1LeuZ7aQONAlD3UMLTZQcOdAF&X-Amz-Signature=b032dd231e658151027cf0a49986f3d540ab76a7b5105a4367c9b4f3c25064da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
