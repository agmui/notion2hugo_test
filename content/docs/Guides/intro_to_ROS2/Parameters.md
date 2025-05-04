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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRVRORH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCVrmsVmp%2BXXUcpQhF8%2FICNDdN4EcWChLus25x8%2Fq08PwIhAMp%2BrTzBw6lOceiIQtUHbqipx0ZDzYM7gClST7VLDNGWKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4W9spZKVFBgJ4rFAq3ANcJzeJOUt3l2Wv%2Bb9yIAheIjkG%2FYTV7J5eiiHJdRnLyXWfgV1%2F9HHJ0BIybg8DTVLUGsWfDk%2BP7T%2FoZqZYb8P944PDGSlW1vQNmO%2F9Nd8X4PAQ6IYuV4pRM8eSJ0VHT2pwTooYo7BHQSxptJ2%2FES8jcVpgVaOua%2BTua7jmAOXtR%2FfFtp%2BnvpmSxXCV%2Bzex9m9kCTsPaaLbKtL73mEnIArxFsCf5h6ctu%2BsY58Stgm7MBv%2FQHeg5eLt4FkTHDX6Vnj%2Fwg%2FCpwOyB3zIZ4j%2FRRvAM%2BqzpufuT8GNvhHu2ZP0ArqxAdSqZ0funTJi6zqIbAMaGiiwnZLZcZtLXDYTnVZ3IZem%2BAifvm3VIVTBbHB4Gz%2FjOxY6zb1DnIZhnAv5851yDyE%2B351VVrjdxRzT3cfNFgMZT1PD%2BoVWM1veWUWXwBsHQ5A2yuQXo9cRBYt7%2FEmX4p1TtVCMFw9TBFwE5luOWZpvk80OnQjSvkjdCuLDsxONn5uzwYSjgK9qNBOVeZm7%2F6sjSSQEdlKZeZJP6lJop2HLR47OZLa67TyZ26oWnJGHLyqfiLZOI%2FEw9AjShdX10ivrHMXwIpfrRZV5%2FCYUY%2Fjb%2FQ%2BQjOQ7MbLHW8ro6x%2BAqKax8cCenJ%2Ft9jChltvABjqkATZaxSUL5uSbFwt9EJFsZphA%2FnLzsl6EGRCtmhk8etvGqDM9MdFQn4s59ByHbFxB5UwvMAlxEEmej3DGWFrM7Tr7oIaUqWKjhD6ikmxTT51rCF4N9e2KKuDLkvAfKdFJDGJpQ8oAgVCYxNCYN%2Bid2lAGc80h0VzdYAr1I9YF2N5kxVDSfrVi86LOikdTBjkR6BVlcvc3KWYLUqYxGm4TXzBPuGnM&X-Amz-Signature=8bb7cf6d05331aeeb5b3db5119f576902c88dd58b3059d76ade539e4e378fee9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
