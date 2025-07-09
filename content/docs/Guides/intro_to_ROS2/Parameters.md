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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXTNJAP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD88sNRFKhJ4ZRis6YCP49yiZhCMwFF%2BQreAsSYgTV0SgIhAPccLCWf76h%2FaD9y7YRVtbjvpYTc7Psy7E78ILJ1ZhWuKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzENm%2Bap4B2qcHm%2BUgq3AMPN0aBo1mh6DgWLd0L9QQrkqLPGhhNa0qLLDaIIhTYVM70eyvojbL1RuOd03KQoWN35gZNyDem9eSf6AZEUFKN6tikTtgIy3%2FtqnQxJMhOgYo%2F1GZsKdE3OMrs%2FxxvsyXXdD3s7ClzQVKAb%2FFFKghs%2BPPHip%2FfaX08cq%2FQltdxq1wfULaJ9V%2FTv652uSsCOwmy2IoCKrmIxAnkntBwQS5Va98e2M1qUOQ2JqB0eXSCN3I%2Bj7aPE33gDtQmaKXcYvEOx6k4wz92Qh9qIBujH0luso1SnAMxYxa4BcWNPW22rwd7sRUoxP8rASVZ0bc%2BxJOwvTepYQWZSysARndib2DkAYblwq%2FvC60FgPAQ44m2nK0Gn4h7IPACXjOn%2BPLebmo7M4J2OM26eeAhHHFajssYrlF7oI%2F2dgTW%2F8fw9JKZXpLOa4X2jxztZq1JRfLIiiNEckd4qguVBTtPfRmgoGQt3q%2BFHKHs0UJSkCCFlKXnTjZN1LWyKVDy0dn2tGWzgu3ikc%2BY684CS6thopG%2Fi4ID4vdp1e9QjgPB%2BnWDXYuJhnPUPu8ge7cgFnFS4Wywil3S93RstmZP5f%2FU9QiTZpHxwXKgS7gjqgpjLvGM6hQX6v2Mpz5H0pkcjsP6KDCKpLjDBjqkAVig1TYEM35wuxM%2BD4KDSez0IoOOlLYWFGrAuvOT1pPzyUXyJW7VfJKVz1QgG8iehwKKhip6m7PMRZAzxPPogzGO1eCZ%2BarlH7u85UgsxoLs6LIzx6BZslIZfP216iFyHxM94Zp4IeJqCwuhwaFT5EJEQdG0i0eAtAEbhsf6vKGPAW3GexLevW14HKkTZZlXulPrXOBW9jWWwrS8ona8zDPdu%2Feo&X-Amz-Signature=43d7b7c5d4d7294d4adc579f4346f8781a62675bf2aadbac2971a6e560d11e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
