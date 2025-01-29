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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ACQT5O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDUt1HDNeubcXhgPXIVqQVZxf2KKzynIGO2UzzlZiRmUQIgPeaJsuCM2g046nA4u9w8JlDrr%2B%2BvWda%2FJtoxQ%2Ft4P0UqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3eAhMIm7ITsiI5kyrcA2B1kecN9%2BdevUwGF4caM92YQe3d4dd%2B%2BgtqQzKNqEOAh%2F59BQYu%2FBvTfYd2iqp%2Fh8bMvBzvYNZ8mhB7edp9I6zFtb%2BbDTw5BwKzok2sXicFAs%2FqR7rvj9Mv%2B9uIIQvd8Ad6rp%2FsRRu9WCgcJrLpC80nI%2FbxY3UTMaa%2BX9xjSNUWB%2Bf186Qizz%2BCrHO%2FE8kU2oVjlWPl4zV2V7r3PfjPgfb8ziU4A1jwY4O8XS%2FkOZg4WPai2xBnX%2BuWVOKIcXWFK0vApcfWNC6jDTc1J1T6mEANV1oyPZjZF1Kp1a4Bdvq8m3mZ14T4JDMW0TVd8rDvwhr4p5UUrKQqb1u0q%2F0LFwtdHNAynGzj6RUJVfj3eN0fsLd26%2Fb1o1OIg9AqbzsBEjg7VfmK1Y%2Bo0sELicTc4cFOhWnEAeXxTjvoMewVCpB7A0Z2MfUO4EJxAwc%2BgvntBfLKg9DiCZfADyAIXvxy6DIMhRZ1BoKN%2B3bIGxnwiC55fWl%2FD2W1RFGnPUbSGElZnLbifxOz4h1ob09zrqGK0E4ehoibgO%2B1ex5Mu0zvbiEvt56a0ZZJfSty6Kz8bFJzsEB%2Bgv623pSbWmZcq2d7sIYbpxkXUfgKoXPT8J9P4EcqWGBxUhWvyRxjmL4WMKCh5rwGOqUBWTPc2LUUeSdCVyvk27%2BB9QCdGwcQbZGSzgskeqjLv3XfItnJSE6IY4505H1T2Y3w0n0UZwkA9flN6KiYg6q7kqzNxyj9bWkyjKNUD1MZsbmrI0dLwWbBngZHn23SquoSM4Qi2POYOFLU32rPrTvtmvtVMikNkfEHal5rj7CvKK%2B%2F6rx%2BG%2FkM9G8ZO7y9HBlM%2Fzt9fNbTMGUrMZOGFFtDL%2BaEiHav&X-Amz-Signature=821143e1d075baca61f5f9909204894a095c152e64cd9a35aa79fc4e8edb2172&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
