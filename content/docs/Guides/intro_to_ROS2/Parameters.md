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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7L7QOPW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLEoBlx6otOR3qHPyxbHISLlKdmy5JgoMOa7lkvQEGfQIhAIMVaa4DrYUF3gNRCv%2BFgikBFULQw6ZVzDrRpDlAKhmLKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC%2FN6dYn7wWxYvnTcq3AP%2F7Ec2Ud6BVnBF2L5uMjdfPZkOXrgl9mpA5Cm6dsMe2FalXE3GEOjKSG%2B1zBSSYh64dJ6R62mikqdApcQmU2M6OjqdKnRNl9UH8IuWLXB8crdNLY%2BFHDYbtP62upSDXBrolb5fMJUEGvjlPm%2BARw0ftYoN%2B%2BSQp2Dywg8BXyWhrYNxWk9Aea0rHann3QyjmsmaJ6KZ19YR4h2I1S5%2F20nR1vg8Ge4cD44PwcUcHqVUAIxHob%2F251QI%2BUx0H%2B%2FOwUo5QisLRweI1tB9%2FhRh6Drx70gkHKChk%2BidTx4SwC4cjXQ35CWZkB7PBwI3MQG23xPqrpqKPI9u5soW1Y8gpbuCH8QwF7JKLJwWych9orcaLd3szbKDMjQrc195nGuMUlpNXxlqM0DZDcwgJE4hbmupX2gtF5EhOT783KpECpDqv6cpVFYLck2vWy%2Bmr%2B32YvQbD2DtysydNBPm%2Fop%2FjDTboqv4pmOPN9vbPy3moFzg%2FSVYJDrXaKfTK2lLpCwgC7VJwcWnS61PiG9rqYYXbx1dJH0op7n%2FxWXkhILNNdT%2FWT3xp4FuNNaeRkbHjauUan43Toavtv2IXhu%2BqhOGeu5uOlrux2pJoF5zq9onsUf%2BfP4RFR2lNjwUSNIajTCT5PXABjqkAV34RY3EnnSzZPTEpq5HDtyKKk1VQArauWN3qL6Us7BSQST0tPXmyQw2cwZa%2FWiNn6nEGGVIWDu3DsOJr5JVl4wdD%2BZWvRnun%2BLEzdqOfGUxwe574giysU6rb1dHummidqyz%2FHjZpl1%2ByaPFsyh%2BKSY3mqy2deJkALvFLQprvO2aHR%2BWYBLWV02WV2gkqoppKO5nn9urqxBBrDd2IcXh4sw3mnag&X-Amz-Signature=4ff59eaa8d56df8642972af3764eae633b308903626213a83025463c22e9e109&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
