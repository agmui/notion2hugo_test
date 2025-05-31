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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VME36I5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaMcytWvQnTG%2FNdC1rzvL5QBYxapoh0LAHzF1XfPtiWAiEAmET1Fu8ZPsejU6uULPlNw6iiiXICA3HzQJtd6SRsSiQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByVuaaxlj61EGArNircA55a8vE4K5ziiybYcRwRgCOIVqwnMPMOmlDZBH6bw82OFEbbJXitZpAgo0QNQ5mF%2BTF78CMt31tb4%2FXRkWnLQoKfq7ZBkvGpU7j%2BX92MRzP9VVLIJIM9%2FZV7J1WjhmGKWae8i0c46Dp1VyoRxk5JtXBDbxeezoZJzp%2FY6U4FBtH%2BKwG4sBdzvQz5fV2Lu9kNZzXCAcys7NBq9vA1i1%2Fv9fWv%2FGYfGyrCFfbM5mULG95LqOnnHEe5IUE%2BXnkYXb0fINfTSz3y5zuCaR0Q89CbgJ%2Fsmym1dZmx5PwKi9Bd0FCtldIjaGbIIt%2Bw5aJFomuYpdaw4t3BcRXLSV%2BsrUF8QtP9BxhQAU7qWPE%2FhycRNVmkMnRYqy3gHoceXafPa4k44hTmq53rSpiW5uRR8GC4JIe0tU6Kj42kaIHKhStYPPma6k6qw7Z9kcfI%2BlB4N83Nmq8cf4TLVE4ucAzppopAIi3mwmuoi%2F1Nj9hTuSwICoox0dQqTL8Omw2jqvO3V1vdAEb9PqKakwDmqIXVkF5fDWF1vVr3ADgXPv9T37K%2B2SiqTyOZsHPZ55sphqOROen1Ba1w9PMSVHIAntjuKulmSjwM3DcgzG59sWCVdW%2F3XyLHR0wiaCOXGG9kPIt6MLK168EGOqUB6dUlNMiG8CFAubrxXYXJPOje5XEitpmswaY2Twc6i%2Bpd4PxjgKwDnTv%2BoC42bnrCfTvcZpi%2FKmGixwxwn9qNSBTGnoKzGPdyfSLbmW42%2BUdNAR2rS0ABZrN13PGLMmbOvwX2qVXMhXf2SHdqJs8bsSNTh97js9bIq21OjUtSn4Vq79tjWFpFwbrQw7r3AKxD%2FOwRs33NxVeJCRBAHtgWECezgF41&X-Amz-Signature=86465d87e66e0d9acd5059c2ae2debe7f2e6a2e18d7fa4c5d8ac768720f3a0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
