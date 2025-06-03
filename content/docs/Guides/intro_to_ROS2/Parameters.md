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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURPMGYX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIASaJ24Olnp%2B%2FPq8a0D9xaPkUW7I9ciLqGvdo1OTkPXFAiAOOT1bEwSexgUERgZqC%2FQgnZDy%2B8h7M%2FFALJEM5Ad7Rir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BA%2FKp%2FoET056s3KqKtwD5YqzbwEV%2B%2FZ1%2FEW1Hz0g0uUv7kZyaGh9gVXwmVZu2qIhlVxwCwJK4OVkTijbfvyjXJzog8Oir%2FPSdaMnEnfFeMHuj%2FFu6g3YP%2F26OgJ1TkwgHG021uhWxX35%2BM0YUOXv9ng7TbX9qOofwd6M18TnIxjjDAW8RkMTiyljZ906r%2FpPrg9NEmDsS6%2F7pKAcfIUg0Or8Z7lX2anbN%2B%2BiFNJHsrNTSvW6W4p7raGfAL2mPy7Ag361VxYSY5Gp4ftn%2FGKNaI29uvgDj7UzuAIgaXSoTY0%2BwaCwO8NB%2BLy7KPbPkul3l1wx%2BLQUTyefey%2BiWKO%2F8UnVFwkzKFNpn4sp9I%2FHEfV3Vcu2qOu2f7N%2FqvGehQGoyiZP%2BdeXuXQVQXEZ555fyIqiFEqg2YEkTsjfh6hU6bG8xkC6Kv0Rmrwni8jV3dbxG0k1AeAD1iw%2Fbyu7%2B1xOySQCHJZbp%2Bo90fQaEAVfOIJxodh40s7sCNVhgCaGVjpy5UtOFVd0UINy5omwN2XDNSP5dT02xPrVR57lv9uSWhzCCy1AqbvKYaDJIXzQSaYHieQN%2FnCBX5zbhDlU6GBtG%2BuLZibspiLtZSatUbgTj%2FRcjMOMJK8caRQxsyfzTqTSGeDSSaAuwFFEoQowiOf7wQY6pgG3ikm3pirmG%2B9NdkiPQDsx7IbbGgK3joWr4%2B3ZpeOD7WYU3JGJ8REeeP4R4MGI4tTEWAdBwBYq%2BHv5zOTB33FqV%2F677lUBSVpRq0PYfRHPgRTA98otGyZmIzJvd6ZwcTKjUrycw6vnfS%2B5aApZzVUH1NoafY%2B6CPmZfW9EX92C9Hh4Mxe9IlJU1Ozr%2Fvey%2F869%2BEsqrNsf4RWnxeznkdRKzlGlTWOV&X-Amz-Signature=0d250904b97d849986ff24f6969d656f4d61397c7ea8407fb9cdd293acd6c53a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
