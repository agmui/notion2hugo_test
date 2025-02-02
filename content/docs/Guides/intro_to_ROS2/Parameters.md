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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKY2KJM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6Z%2FjP8y4jBy%2BTB%2FysT%2BgVYPkLC6FQW56s9DZ8oRulwIhAJ08Z9xBUANFocGuJ89CkZWCwRmVxUzsXWFn%2FvYy1mOnKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCPIpyvJj2viPd230q3AOK51VV3qj0b4EC2HaREBUcukMQLVYYh7YPTuNCDZr2shSt33RayOlep2xwp7XxnfnSwQOlcNR9nkyPQkM2ivhNDDvQ3hiIUCXAjSiWs%2Fgo8LxRyFVMqPBhnQJyXfPBN4Pq0pQ%2BtauOcR1rPtBmH4oqBRP4hTDtlsmviBeRbvkqJdIPyN0xcyYF08NAi30Xv7EKML1zKkj%2BYUOHqoOUQxwPvCSYSEq90nWDHeU9PI2oANERLCQIeGKNFyuK33gthR%2BQqLbFE4tAgz51u5Q3Bf%2BEsRIt9N9d0Cs3jc6Ol3x8XnUGhMnqL0K1v6tXd6PsTdvVocryVlfdKVLMfyswViPMfpjpv44Ym4327NF5cgIpk0xcJvzTgLGgW0mxGQHqWpfZ1P9ve7OB6zI73nKhxFLBhpaHGSTbet1tn%2BwuZmgTBIRXblLnhBdHgUHe%2BZxmRscWDDO8%2BUMZV6%2BBQtgQ2RwfXW5vdCVh2gQYz0cceluj0Ko%2FyEnF%2BBDZ6K63H3a%2FxWXzVVy8sjt%2F2QTtUu4ZjtNxgVDG3HSX6O%2BeXtFaRw2T1SeLReae3myXGCYddGHDBrzDp3yng9aEPZEs2jIoytCq6TwiQa1jz8H041lpE3kE7LiFIbUq3O6Nhi4DSTDB3v68BjqkAaxI7ldXVTFmQZpYO%2FwXxA0ZXAuKmEJcqrup06V6sIA1zvAlf77m0jToV4ZGxaJVmmOf0QfszW0VRZB63zok7Hbca05hB3TAGBcu6U2Fh%2BXi0mcyV3%2BemNcOjPpROjYdcKCotI1l2x3jOnKv0hSq2iK8Lof0IV2yprWK%2FBoRdKjeWNsE785411G35FBLdnD5ZQnC84bTjPJq06t9q7UbWuwYcZ1q&X-Amz-Signature=187dd7c67eb4d0932e76b1e2de7abaab950b8557c56f09acb30322ef10177a89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
