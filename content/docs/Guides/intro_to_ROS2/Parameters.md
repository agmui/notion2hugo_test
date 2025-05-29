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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZJFNV5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPzgS8oQbjviU5j60WMlLUT25IBfSgjKTQvFlHRxJzvAiBmgYATLTVtq4giMPuVyl8smh5P4p5qoPifpJuiWy93zyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW55EIPHk2TM4AkDnKtwD0w%2FbwXcRiwO5e7Cf9v6s%2BmGGXzFlZZ0T0YE5mWVCXeRE78NofChRj%2BRMqUjXbVoyh%2FtgT5C9oh5IVCa93D5o95qBt6ZPIN9VhirFh7J5NdJEKmqn0qWNHFYhPSzlvDzrcohW8bDCLJm%2Fw2Lfvo9wYXu8pVbxTWFDdnfFsXwY1C%2BVNA98h%2BnJEAaSASOi1%2Ffp37F48u%2BeM4GsbDgRerzRlQ4jVbRlHejxjLgFX%2BbqhzMkuxkVHOiciqeo9RLZNmXEUZ8JK8yBU9fm6myDyq9L3XuqqtR7nFB0%2FopfMq45HLdv5BydpWZlJF1T8aQyzXuX44xXiQ0wsQpVEVq3YPbcQT%2BMklYIZvF%2F%2B2V8OvmL0IJqwqiKMr8nJU1WxNVIBlqxV0Nb31otyccAt85qminKGhIQQj5NwRzW97HrSs8t7gKEQWOXrrfVtGTjnpUo4w7Kyec63qtT4egycH0j%2Fq%2FVOlY4ezLN0fFhcC3bSc2Xdt7YgIf8N2qem3pKBN1379KlQFFyIDWzy%2FsTAwYQFS6EvsbPfUx%2F7TFNC1UZiBI%2Byq31NzlR%2BO5z9X9GKuggvCUAUJOBbnZPlMDPOQIeBM1JFa2YzjUhPwZUxbLgUYyBdiHERfSPhcWb3vFWTyow0IffwQY6pgGiadhbcx5pAa1St%2FtBP1uWsKxQ57Hdv%2FKzMjQmm6HrRlb2V9KfI1LEFSRXamrU%2FAJbz8ARFyUs0yQMXRWr0fLJFvjE9XJfKajhKIMNxv8PVUXfXbU7WLiQ9TCN4%2BdNQykPlfBaDbAc5Gs8j54i7qt4t5b8J7jw2LD3tY0eBJpYtG3Z%2BE3eVdhT%2F1bpmKvjn%2Bi3oKY%2FnrifqDD8tpAfsalrTgl7hFhK&X-Amz-Signature=97f6979169571f20c07c1d0b240487281a055e4f47252a55a8cd7ca166a207eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
