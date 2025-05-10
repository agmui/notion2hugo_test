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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2Q2KIC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeAJf7P4OUSnP3JpPKT3ne73xtCo49IZ6gVKW%2BB%2BnrtAiBT7gxuBXRR9OBK5LuvkNZuNaTd8q1kG6ozn3FNMe%2BeAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fbc8odF%2Ftg1LcEDKtwDarB2w9TGkjcZ0E%2BFxSJr2YYDdO7ZYhOtM0fqw5FyDqa5VlhP05a0Y5Ycfgjn9zDmAra6%2Fcm4Ux4xJbD5fUB4xZdMEutd1iJuJIcpfwxejL23Gu4z6BA9adM9kZE46CslBV5O8DU%2FO6xSS4oM2r9Q2UuGy6AUiLDcLSys4GF0AO9tuOn8BqcWEuoRSBY3%2FhYvTAZPkZzjBXPZE81%2BQ0jU9DuR6CAGGVziQYwC%2Bm4zfQ6fBjXAidTiohQKdMLvrDohVckbjb4bIMV6%2FLlJ%2FwYO4FnLuvM57nQ1dFBHyNxtoMyYPeamMqK1Sg8XAkuc7pwZOOm9jl0r%2Fv8lyGvfaTi8aL8dvkGohdUj8EbKdAfyXKjucrRIn%2BFN472%2FaX2tPm%2BTbCdFWMRni%2FJzmwW3BcGEmVeeMNCjc9sZD1qGzPLZ%2Bf2%2FrjdD0swLOigQXrKxUykO26RC70SUI2q8zN0BzDtPnPxPKsLY1YqZ9OkQpm53a5EKspMApi0f6gGlTif2QBxViMPclNcM%2FAVDmgMBFI6PvPINpY1VBo4rgeHWQTOBCED3koE1KjY33hEOilDwC%2FwxvF2nyUeB741km9cMdoPOHkfHDzcNeLHb%2FFvLXaqo7Cu2P7yofBVZsLvulO0w2bX9wAY6pgGpMuDSxGQMwxU7AJhDxxvAUrwsde5WUES5o6qqqPkJUmBL%2FjqXDR8jjifhBvZ7CvCwhQxIUpURfPqhCdKSn4%2FKOo5gSTqxhmkHnCIQI8XMMpLhH3PIrkeX9GFWPXjYXO9Df9pmbDxokWrvLCP7ARDPKJko%2FzeWbqnt5jkMFi2i2SHn%2Ba60oJYvs%2FBSQLGpenqJPq4uXjlRJXETq%2FdtmTlQL3mrg%2Fb9&X-Amz-Signature=310473e6b3cf01bc7308c58cf4069d5db75e4ce8f2bd746d421678dd23a80540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
