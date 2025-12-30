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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CSSVNX2%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkRv2CjYZQ5cA%2FUJpF5GrAu6vGADSoxPXIVjR6LSdzdAiAsl9b5rpQmg5hDdtv%2BCqCiYSrIFiqMuit6limYmV%2BprCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM89EU4guaghPh1jelKtwDh3naPDUH9TLd63%2BDNkpWZX0u5Fii4Fmh6e5bVZzgsznKtQAZcW305Wv2WxIZ911Blhez1766SKjB7W%2BYzybBNYinqztw4qX8D0uCVKlskrlDX1s0Am5xbDoyEEi%2BIrsk473iK9K6DYQyet20kRd%2F7BQI9cRLjhRIcV2S2zqEdhvNwWwyBgOzuUQVkcIeJfUPmx2eIIqOzdcGUgT1uqYV8ZNheSF4CAaJZxuflSmgRfPCqbVcyps4C4P6y6nE25zKOkt%2FQ7wlzCK6eMU3fP34Kwrjl47T8cLYUVvoxX1%2FX7ahmRBt3yNnkB2EZeWjO36bbH4bRMfKAq23CKnOEY4yvP1gTy5JdaQydGfyv0liTR8cAWOKyasIxZCt2AKXtlxYnRxZuVi%2F2yVr%2Bb9zZ4f0jCHGvWP10b51F9aai1JdAF6Syilh6Rd3ErhJwsGR%2F3vVpoA4QsAZ%2Fwhxh7zW20dntqrB%2BeYNn7W1LXEmU%2BlJ3EDqiF0rgeclPwSC6INY4yffl6Etq5V2rkuUnygH1JBLaGOd2XtePXy3Xd4iCiDxfDU4sHwkkcP12pXvdQ0rd%2BRfOQxZyXbZTpLRAb3P1PpKiJwDIMhuiwroFHkKYIuxFntlIj9KAmH%2Bo8aQN94wr7fLygY6pgHhSLC9QaIlGhqOXkiWojqUWsjTBmP54VoMQrlGsz8QEPz6RYpM%2BVowz%2FKyq7lb7h5VlygJbd9S6uW0p5z0LoNSJakWFUNx11M0%2FS%2F3BgwmNEFllPjPGjiXhUcQI114gYIFlyj8EP6MhnKGA0EG7pAA0TiQRW0BdxXJ3%2F22r7n4hyqS0iV4Bs4VbBWOcBLOJmbIIWxe%2Fw84KtyIN3Axfc2N1SvFPjHQ&X-Amz-Signature=4986e21814c981830fe36c2d85f773e95d01aec4c30faaba9d1cdeda0f42122d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
