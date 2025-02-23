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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56AKMHP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9O1V%2F8rDtm8yDY0b7V%2BxeRc5FQ4X5jih7W3rMYBcsRwIgPH62BKiLSjSgjtqBKyu8bYOkQXQ9llmjAiezrqA3ZM8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJqpP1qder2qQbN96yrcAzbfIeHdr2vlkM%2FWEj4gdQFqXdwp0po2k6FZ775aNYjJb97mSq6SQM%2FKJZJCRBbnNciRgL%2FKHDeg3n%2FKCIaPNQLUgjmFxXcf%2B%2F0Iua%2BDfRw7GAL8kIHhyT%2FTNL3Lu9mAeEY3LtvSV6cUxPi9PRKWFXUv7%2BCfTfo1VpGlTPTJ3uf831ahLzudy9roL%2BB5%2B2vLVWtjLjMkj6EE5VnoKYPTocZVab8lKPcG9wVcm8Z2XTOYqkykolaIXu9gPGL5%2BqTerXlKczPDFdeT%2FmWwaK02yMGsL%2FMIiRHJ%2F4OG3xwrylWGtzg6Tg9EuzRc6tuq5pN%2B9jf55ineX%2FhBcsWPgG8V%2FUoRuaXhy%2BDcrwrR3SnsxVTu%2BZWgQBMOqrYhmRx1arPtPIIt%2FR8vBIZ2FvoJXoevHMDaqN%2F9RHzztI%2Ft74S1maxXSpAUYxVKsHkhLmBne6eUzA9AosC7ISbSc8cGmS2P9AFfJNPZc9gjZ7ufX6fOwsO1Nh%2FLVY7kkA9t4isSIHerAwYffyHTuex3x1VxXJVfCOXZLLV7I8a7%2BISCskzSHOzhCWl1m16imL5fI8vCXYYCbRBEwdaFCQjYysuEmDmTY2Pl4Lx%2FPm3UKiIpPxpCrN%2FvSmdUquLP8QDcez29MKjs670GOqUBFyCkLZqqGG9v8oIcZgWdWrPPdzhNp5iXMyMab4W4ExZX%2BDg32IiOODLG4mHqbHYdY8pTLaxWN%2F47WabJKkCoa6WcIQNePa2z2H133pB3KhVha1DRBI8zRJWDQR63frzeT1xIXtdJclCrzKb3tGpjOenSglYKnRPyULcazg5RUtIwf5mWZ1dEokKkfIS9iHUOOaWNZLL0JGWdkhAzymvL2l2%2BTyfa&X-Amz-Signature=f0bb05cdbd4be816f317d10adb77b4d1b6b736770501925f63d432508b794bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
