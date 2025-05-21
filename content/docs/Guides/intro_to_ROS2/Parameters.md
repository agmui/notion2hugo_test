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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2IWA4B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAtMqK2JYjM1YoNgPe6Szv3g2WfqSlb6un8JIiU7ICqZAiEAlqgtqfJ04dhLp%2B0a8LV7tHR7LQCODaJafi%2BpR6VWSOEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhz5HEZP8Y8xFQL0CrcA4TIhOYNkLBWBkDHcxD726Xbw5Gok9T127i7nRNPw6YkG5FRnt%2FNM4kTO0vorIWDo0QxcyT3yfzdctZlV%2F4eczluFfDQwHGya2aHndXBi41cr0asltF%2BwgUmgGDUFbzoKCtnU5PmK1ZNRqZNC6sw4hd5H0xaJdtGJZCM3yDcQS33vo3FkcnDL0yZmxp7ppxncMmkchv3WmBrbqwl9Wn9C1TpBpQe7pjfh%2FElKzN63JPKZkX9xLQCsCDEHv5zw3fxLPNcU4Iwn1L88fRLAigghL7GNEXu155ymlzwU8b51Lm5qj%2FkBeWH9Mhz0bl7rCVuCl1dd%2FoNdJh8t5uyDGscOPwJn9G9tj%2FClHIrWHLGlc7TKPgJBvakw0e7QMhjTYOkXaqPlreQY6yZmjzgRvqXb%2Bbwtw53XWqa2aqPhfDAfkTNOZ2AdTxZNv%2BKGjvrfrV31Ew8shmDnvQIOL0WPixKav1GqB%2F%2BPsoxbAnPX7X%2FRnWnBuzXkdA0%2B6p1BpS7R0GvAwDHhjv8eMTGp1upUInZqAeccvYKyoGJhdFaGC7a%2F9W6p9Cozhh99SbjeOgOE01WeoycVK9dUYAT1NBLcuQD8JkmJE%2FtGbXEo6nxCerloLnxuGK4m4ijSs3ULCdGMInvtsEGOqUBgCDAzH0l4VoC8Arir6uISlbTO14MG5aapMD31J5EdDuCfaCezIrDnI%2B6nyZokQzajvgVe7BbOyg4aPhSTuKLj9pFDzLCvP5N%2FUniMCeImiTwB2umLskuQkNYfABbGMRJzbbFkvye8Mo5dLayEq%2Bz2nl2j5eYZWAchj%2BsqCHRh2U1o%2BUoeHTqFPhsxIle36I6EfIjPOek%2FXIFx3gWn4M82Y3yw6jL&X-Amz-Signature=59228163d7e2d3475831d55e40ead546b02e20f7e24fa2357116e95f6fd9ccef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
