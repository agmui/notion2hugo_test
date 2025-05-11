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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQO5RDF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDNlUuTSVjj880gSdZiEQgQGtuPmPjVvv3%2BGmdOAXs1VAiAMSBAG%2BT3LSiGu%2F3yTwSjwZOi%2B4xar60htv65%2BJ9kDVyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj3q1KGzCKj9Pv7gKtwDTKdGe9TUGkyS0VZMop8a3MkRmeJV65ENRtLvbYz1WHfOB%2Fk9DsN7gh1%2ByVv%2FWMJZJ6Js%2B2%2BsVL1MFbGbmiMVigjIp7aOkwF9zVQlq0nEzIkQrg0jEKz9sZD7hI38sqjcrSRxM%2F6a9mCEyCvSPdajthFXMQvmXEMj7oIDIFsm9cpQ%2Bkfge3t2LhSYxFrNLSnqVTQT%2FLTOiPLJh1%2FKXBJIQ%2FjNQsmcFIt2yuBxZWQnrpgeOQpnRICNKWF2CoJh4tPzPyXTSkmG390z11zN6fq08iqNOK%2BJAR5EBFrU51AeANS3Ftu%2FSGB5NxIhm4EXTTP1SCn%2F07ywGLuYVlT8I0D24qZK%2BGtd8%2Bv1DwhFrKOi57gK8fp76P25HiSWYZk1UvMmKgvnYKlx4%2B1uq72ECqc3wKGKtCfmjDn2HlfLBB0xKQnsgIzjYobKpWxdYeOeMmQSpklvoJaTsn6fVdyBfPsRvbdt%2BFkkPH9X5eKwtlpGDJoy8yJ2Fh25sxZZVE0Pe8QY3QSVngLn11vyQxqa62%2FEGTSeOlII2ZFvbkks6pzopWdAmSJcq2kY3lkIdM0KtwIJuw%2FW6AqZYcKQAVzqWJaFXpzjuSFDOzb5uVXyLkUw%2BKgzmaHcVLjmuNbjVNUwzJaEwQY6pgHAFjcqBva3Yv6ihjrbJU53embq6O961BY9A153dWiND6ZCr%2Fx0HaKt8zDEwH%2Fvsr4KRveP6a3VKPdOG3GVAqkjvo0Vit0kTNj52ZksnTC3SlXJtDI6jD9Qpaz5C9hFAnPn4Tk8VUAbpIt3iLv08aG9anhuDedfAmgX0Bw5FepFd6gimuEk9aqDsTA6P1u%2BV8IqEg%2BbuQy86pe5G%2FnPTUCNMLQzkX1E&X-Amz-Signature=18fab5e18c0c62f96420734391584bc9feece632dd26463e31020c6137d62000&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
