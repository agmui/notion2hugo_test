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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPUNECXS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTIxM4mwFlyu7DOclI7z4Icsa3f7MvngbAKx33y%2BNtNAiEAsfXvSYXb%2FLXF69PdBuvbM5mNrjgnPJRov2Isy2LZCtwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5KofVcg6UXiSb%2BICrcA47iKuSbaeHWgRTVCpA%2FQP4vnG11jcSFiA9xtvtU0y%2F2paTzibhofuVX0apbjsYSPC9IGP4hLbs1V17%2FXgRtXpBZdBR0HZXNmUu2wm3ACdMHurCi2O2Y%2FgeiFPKtQoLfc6myp7PHR9nkpM2Q702%2BDTxRnMBzlfEXPX%2FFYwc9jNzpQr0scW3NQ%2FmfKfD%2BI8m34r0xh4ayeL3vnF0c8KuCbj90NZKh1fkXMPI0FFfQi1Ol%2BzkpP2ju2Pr4oSYkZiAZpEEfaMb6S6EiqsZCMsO0Qo9tVdrs8EfcMezvn%2B7HqeR5PHl%2F9qe034pI76LMwmNyms4V1s15FJsePnCwsm5cLnOVq%2B1OV%2BYsbv21aJml7Qnp2p94HrRU7Fmli4tj22CiXzTLyMyWkYSDThecH6iBV36peYPIMPbaue2j8cm9Gwl6m94bQ43RO5miH84O%2FTDLdXnNw%2FjTrSbJvysHvyA6ao35uaYA%2BlN%2BPS9tS2gohtXZsYMfGD1A9QgCxGokzSWzb2PT4wlG04Px7xVH%2FzN6%2BO8%2BBCSgxdz3YfZWzTY25Q7z126rBOrwiV3fdx7N6cbcyFdHfbm8LnCvpp909oDDDmsHpDhVa8jSkdFPq7awv%2BWJdAHAnloUBiRyj2OJMN2648QGOqUBtZ0Lt%2Fua8WCt5WR0yVgL6b%2BY7ZSqmUpidcTHqfJcsqbInc9RszMnoB%2BS%2BCKxjiDLEmkP1edS2xUGn1qxp6pFDj1HACdCRJbTw8ablz%2BB0LqJ%2FWjgFFWcINfYCxa%2FQMEfSoKpF%2Bdr9hrXCOdvGySXEGZ3raxi0Me7VGfrkcdGwiD9FVRWTIEx7NwHRwlZfWmNfzLEgnW%2BlcFFsO571rfDyHTwAcxS&X-Amz-Signature=f080259a0f6c9d5e3faed1d4eb1280b0b6bd57fb4256206ec1d6e3b11bdc0945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
