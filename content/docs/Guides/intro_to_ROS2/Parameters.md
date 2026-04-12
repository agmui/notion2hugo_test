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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEC5U5AU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSTUjMBJZ9JCno1eak%2BCNXd48jfiRajXwdRQBzTwPqBAiAuImalYkn1B7rfU2t6wXtE7oEjIMfwbebz9Yax%2F0Qgkir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMPKU2OQIia5FCvpAgKtwDzFguxDCJPzMX34o%2BnL6fAD%2BXdXYTam4%2BuPmve1EWcZi2TxUJ6Hfw4ehjN5jNU%2Fxz%2BpEnb3RDySg4qyFJ%2BsE5lctADXokn4f6Yg%2BVcw8G39EcdY9JXLP1bLrOKXxBloUNfhMJ8eNpjSsJWkl41Eyomss4a5aMY1r1KLuqKOzZs1MuCgBYGKIFedOQrlymtMavfal27g9ux3By2QfdFDZqxzLnhX5pSHebTKMb6W03k67xRgcF2f7964Bb%2FlHG3LUiunZw1rmmZoLMnzTwavnJmc8bc%2B%2FwK2trPvvsHNaWR9E8yItS%2Bi1YhaGZDFWBLyHjZHh%2F%2BQJo7zdD7GqmW%2B16oFwW9eogdb83cjfWF4ObmVviJk9JLaoonks5zvRcGPTwtXefol2YcfeCsWzhqEPsL4FusDRcTFeUm3ZwHCRHdGMwLbTwod%2Ba9pv3dcIV%2Fx1uHAw77Ka8hi%2FUxWNP0SVOb23FQuXTpXSBvRancV%2F2yXqaxbrt28oNIpJhGaYOKnJDmaDzqyiv17N2XhST49tkYJ8GSQZsJyz%2BAsaK%2Bj425hH9q18oY5dClvLDUBQhHcOFaMzQgFD9Yr7zCw4vE9GNH3fEBse%2FLe8cQnDawBLvBYejcCp3aF36MTWiFw8whYnszgY6pgEZTUjPWdZ98nwCvnWRhM3d2EoVsA42Hu35ME1tI6qzZOaT%2FHrcdpecyNyr4BzsLDnUIWKFKtebYRLhLsHgtaukeQd08uCEF2V8s7U6D2Mjx%2F26GAxVeJDqm7nVkL9lOzUPchob6gO%2Blia3UIwEdMjZIz6ftxGO7lWwJyDReHDiDz9WkDDwqvslSOhUCkrq%2BiLxxUFerVMFJmoRPJgOir6%2ByCytyBPE&X-Amz-Signature=6a557efba5a8a8048b0dc13e812dca0796fd905b3a46044b0c5c01e82ff4f209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
