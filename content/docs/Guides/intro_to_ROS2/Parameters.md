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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAQAPDA7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID2U5U4t%2FE3G9gVRLO0Ex6zBCjb1%2BJITOTTcOtUYMNSCAiATty24eH3V%2BuA7Vz8j%2BZ1dh1jNtNerEBDhwYyoZW%2Fjvir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8rPoIQRVn3ju%2FedpKtwDccyBTyIecT%2BGKuBcS%2BkpIrKiz27yhhasw42JoHrTFUhYaFjiaGxDiw%2BjqGXdBHzjzpmdYhDGm9TXjis6fECPiicoervEVBwXCrHfkolr7ue2NVR0R%2Feupjxgblg%2BPjBdhct7mJudpG1H9o1QeiBvZU8FzKOuDlIy2KHY2L18IODeUbARSRUfnZKpcqSPGgYCJ9TPcO1iZfcrN3zalM8Rx7IyfGksRbfmV6MwB6oJS6nWaS2yN6X7dEvZyx87w5bypE9I5rISwJldfll24yuYClm618gLlO53%2BLupAlG2y9PKYqhNLQxvm%2BzbxZEWGy1Vi6VI1mgq%2F25Clzfu1wqh3EAhZM2Sjnepx0Bqhs3r7xIL9mBlTQ2ANlVBpn5vG46ES9AdPkCLHaFYgSn14LaH6HMIpnrD2PLJNn4qV75Hrif%2B9hgVM382n9MUNxMRDrV9wh45D%2F9b8QgSkmlxX7PbqN%2BeVF%2BoYOHOjElHvxjx3Px8N%2FXvqaEF7eHAa2pG89npS1uxycOJsaW6gwOSlNh2bLHHJOPLrFuDmVPKpYHhzajDCB9iT%2FAAG1u7J2X7aS4DA2UIjmMqwXK2cHjReXzTJxE7%2FflqrfoDu8zPFFxhBsfZ%2FwH09VbhSGDFiF0w%2B4fTwwY6pgEZnPplgIvmHOm7AA1akKABMPjrS2U4n%2FjayEFF2BHngWHm4pGtHr9qkBNB7fil1xP3dTF8wjXKw7qpk3i4aU3StabexyW61SAs8Zcoagwh6Bcl%2Brcq3gxdPJGi4QNlt%2BLRRNJq5PuxyrAxIi2AiwGjpIS2tSLtTsTrQRIGCfXE7ze8AFKtoZcw8hdyXE0gEGBJ0OyymyRdt0wvRWCMj2AdPldAyoOz&X-Amz-Signature=84e21d32370f1d22f903ddab05e298dab4e6c296352a58dcdc7e212590cc88ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
