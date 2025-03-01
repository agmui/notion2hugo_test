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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MEPXGB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIH2qpNLIMtjKfA2oQ4u4FxyqFhAQal9uALWVsHEagU00AiAzYz1qkacv3PMN%2FW5%2FBi8Ieb4YAgGFBDno9fAneKEC%2FSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgzwJ1TC0RzGxKShKtwD7FvzIpRCK6IAOEhw6mABWie78oxYY3IjICusAyJP9uAqteV37z6ubvnyDa4uR2wH8wmdJWZMxEAXXiGfiDe17woWrSCu01jsmu9%2F6kegMnRjahGRuL5UWsIxK6q%2BZOtPKUHPLGr7I0kOpD8wOH23ak2OfCmTQ9PUuosLvf2XMCfgSWptPtSuNoll44iOXloEEoAtT%2F0NJ6A0USaBQ3aRkDlv3GcR8QmnTA9WFVOcSMJ0Vam6LkS53X9O%2BsUyUCWPzaC9ML%2Fbv3oYQ7%2B3d8bQ9DxgHRCYu6sCufylfR7B7zssy8145sTO9RffixBHkpPVSvuzsjsjdIVNREQgC33JwVlslroBiaCVxSoJCXUN1%2BP%2BVHCRWeZawysNlBLESR8jPOQrSCBZuoCpM0627Y%2FDyVVUw5Ptr%2BycPssWVZn4lX2GaQkdZ7pCvOX5vDClaw%2FOZz17AP5KAw3euS8%2BQdJ4xiesg42GRkA5SdOWcoMhrKBJ%2BPyz6Tf5FeCSqV7sPd9zl2NX38j5X9Noa5iyK4ejNEN3wkoPsnhiOxlMcYCCUpkE4M869fh5m78aOEwU0qxWCnX7MS%2B0iBSfeTJEYAkuDmSriw8l81kyg6RLrUkVTmEzojsm8HzwuGJUPWUwurqLvgY6pgEAGvm0aF4tu5Qw2JkliS%2F4t8OiCirq1cjqx%2BvVWmRaD6i%2BhssfoEbGWPxvWIzG817r9qHe%2BpL8enAeqSh4yZpq3KNurZyjvUF4FybpOMkxhWuVOnkndStn%2FnVhLZiHrsR0jYSG56LS%2FExcxZUknrrLN7M8xtFRcwamzTq5tCfQzIgOMYsU2tj3AeA%2Bzf5UuPye3pW1cw5g45ZlL%2FWOvQ4SHNKZ0yCi&X-Amz-Signature=ddf446457f732e46f6909b9c43497ff3f53066e585b446d4f2bd17f29a70f695&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
