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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BE5VU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi7xZiES8%2FNGvuFNkI0odMeKNSarAwrOMLX18EH%2BsFiAiEA92pJzGXCby2MBhtH7%2FdMJuHeI55eDLLIKXzYglrv3scq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBNBbxXkxu5QUhYJyyrcA7CknaypBMABcMib%2FaolkfyQYgmBybpr7OcIZRX%2FDDgPxOGWOnLFJJjyo%2FeAqCEhVvANQzzKmGRd1zqKL%2F0E%2Fx9rqKsw758BQEaY%2BGZ8AXQv69UodQSPJ%2B35D3G3HIY1qCecbM7WGJVYPjYAfk%2F9OGmigYBpv1Z2ySHs3RgeAwX6SH8Xa7AAob8kVGWsQUXm5goMEGqHIJd%2BTMe7EBDjH%2B8vzB%2FOB2KKfWAjhL1Mr4ywpTahiLITaipGMfkNMs%2BlQ%2FNz5Re2thzo5w2uYKOGLz%2F41yuHt6lloP89wT3rvx6gMjEdFhZcFSlHodXTgCUvaxrtY4zVhao979DxjFL4gSWA9VoK6yM6caSZGFYVZ%2FtkguwDbf300L4vP%2FGuqIpP7HxSG%2Bk1JcrSjwd2p%2B1NMeP2niDgsfPG%2ByYRmgYdcgF%2ByP6X5t5KRjZHbsVpV2afoyVBNumOgifWPM%2FJHuxW7pQPVPz79fAA61VLog4KTX%2Fu8aKYDvOR1O2LOSiCChDNiwQVgshPku9P0HppR%2B2MeiGGxF2eH5Wakj3yofGiwtgdZxgTB8%2BgsNb%2FADjlY29Fm%2BXL%2BzgBFCSKwQdf3l88ZrtP5XTZFADKxSW2fduvi9eeW2L2jFBmngtge84%2BMPDe274GOqUBsEVXfkhoVsCulRip4bitoHU1%2Bqd%2BL9ewbfoWNIc12M6JgluBXrLrZ0U1jTfUuoxdKugtO8fcxHbLSjllFNqNDEHZ0sIjwkyh5xhG6%2FO8%2BeGgU50NiRALgYCyAwMQddvnRZxL5r3sP0fM5PDH%2BvuHj%2B3j%2FY6I3K60NG%2BLVIL1UzKzKfj45HlxCc81mO9fUR2tGufkrbg9G6IPzP7k%2F9fgCFBcZDv7&X-Amz-Signature=222602fdecde81b9549b5b68c5ef7a727faf63cf93aeb6ddfac43f17f2119771&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
