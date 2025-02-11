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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQAJPFN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmM4nYi%2FI8VEV2Lm9UU1mMRvG9ztVy6F47cj8AQKQXAiBtIHofkfOU1cI3D0BJzxYdUtTcDf0M%2B7b6ujf5S3P%2FXiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LZffOdT1c0A4ErTKtwD1d9akiaTZdcGMvQOUHVooYx6HOVvgv0QJkqs0fWShQNPn6%2FKf0kCB%2BxWpo2vhoKvn%2F2hz8oe1SP%2Bct8lNiQviMQaNc7R%2BPJtX6zed4KsZbDcerWPnAAY6IH0jfJ0R8BuFrmLAmZRW%2Bek19ibKyPoLqkAx0blmu6YUga4zLdwvN%2BlV%2Fma8x%2FAd0w0LJ78TvuC%2FEvLW1MQ7DMeggAUZSuI8qOMW%2BFREzoPPXt6WuzfrpO66MzvFJTjEFKTAXvKTH01GQnoYuFQ6JkTFxmuvpL2tmN6vmp4t1zbdWkItNiMPhUHrkyfJkH3fbnJM7e4bL3%2F%2Fm%2F%2BoovUBleVNGD1YSKY5BUqwOhzuVOxvxXYpPo1yEcJYdjUtnsRCN3vc1KMZCJrHtRgTp9O3BS%2FQofEoiaZY30w9PrxGSgi%2FJikmJ%2FxTCGU2VtsdimVDRNF%2BtKQu7Tbvbu26JkL9KqU8sPIS6XRQiUkJAqFPuID41ShsRz5oj8WHUdJdfHI%2FvUSgsxdmSWCC68U%2Bwkc2Pri%2FfwFeX%2B6Gm3I13cRBvUo4eXpT4iiwSC95C%2FF4%2FKk%2FFVolPU%2B21Yn1PGeo6iGmfthZvzM0TGqLGxAObXx75tjcKTXAsN9Ju4Nw%2FfJdDg%2FFrcr5WMwsMiuvQY6pgHv8zyiCA9yxsDJTEQcq63uN1s0imYTD1SwhInm0MSs1HuwTJpJifoxvJHTPH1oklbyvnqIY3gY5Oc5LQxzoXjGTnfuF2fV6pQGSxFhlA4OhTiTtE552R94fQy3HCIxnPASIvwpAKg2OSltrfPxPYYmPbJIXpDgm81kC6HZvdftgSeqCr4yFjmBhqngsCUUBuPmzwEOxcq3%2B2obX2qtYtGKFu5isQTq&X-Amz-Signature=1a627c2b6829507344744950c0e4fc48314ff367321d1080d9cd537855e6d689&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
