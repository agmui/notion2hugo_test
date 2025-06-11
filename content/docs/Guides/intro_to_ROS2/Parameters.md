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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6W24OP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIDJttLrtTDCsVsEs%2Fyl1JYn4t7dGaQSp%2F6LnpAT%2Bkuo5AiEA8%2F0HfGbGsAMJ1zfZksml1irJ5bMQnZA0%2F6xHVtqmBY4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo42mn%2BD0tl2MOtPyrcA5z3me4Pe%2F8Mioj9HPx%2F6YFmlezjX6HLQrbikblGOllaOSQl%2B85uqSwot228gewAfjLYi3ucHh1DQQgWy4N1RnRQcb1oS7XVthtdixdoJN6cMB2mNGUwNhtD0an0%2FgPGnIGqkbRDFuMUwxjRbRSzvTBx7jwNt10z4k0bkr36IkRU6%2BqYgnHvBj9MgCBWCyy8rtvCV4jsbtTnnCNPXH5vWu%2F5gtwZVSzBcXDf2QvJbg9aWYuUuc3NMsoQ7TC09tBISMpBaiWI7Bx2qm9hn2eqW7JWhb%2B%2FJMvEBGqKZncC1saUaQrp7%2BK1XOxrzkrxk5F0XR4Z0SxHM2gN6M9laXKEB1EZhPutVT%2BGPMPHxf9pNAcoBfUhniUEO5GCK2TyW3miL9LP6DAcJbbcny4hi7%2BRBMfkQQjf6GI%2FfpFmu6SDoQQmHK6QRKJjPM9ETHactGvjkiDRCNAvsMP%2B02vKsj25vUOmuwauMZZ%2FGvsImtwolfXY7q06%2FI%2FJJq6tRQfuz0UHTYLQ%2BYXKYf%2BH7GQ9lOhc%2Btxk91NOVhVp0tZDrXvdALu0R6%2BBV9VAhXjUTaBece%2F1xrtNsDbEdB%2Bxa1a%2FDVIoe19dC0mAtX5wWG9tABOSzeqBr4RKxGDVia7xjlW0MMjopsIGOqUBGtwQU0Nkh1rbU6N%2BWtq1pWtKbzOd1Hj8P1ee5fOdvX6oLgiAszCvnVRn%2B4YxcU5ywkEnpjf%2FJdg480llP5cb6T1I%2BZ7xk%2FUON9sho2SK246xHYEXYgv37CEvyvA5%2F%2BG7WEZUpWN7lCP6Qx7CyFMNm%2FWoHnDsx5Btj2FH%2Fn9Rakfo53XAj5OMraMd09a3RDVCzTxIpYA%2FMldvubRz8jPi13vCtm3U&X-Amz-Signature=ac234b49def22f1a2029de3ab9c840541269b30ccb29e4094e8d96a3bdbddf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
