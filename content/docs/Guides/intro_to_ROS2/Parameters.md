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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7MIROIQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCTHCyf%2BsrZ1mVCrBmNaDtXYxNmQtmFuJ1Adla79nFSEAIgWfMxwTfez5EIHWdliTK%2FHC%2FwbGauD134IR%2BSOgFCLiMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu3MunWhCLBcJPTjircA88WjHM%2FPZs%2FNK3tX15KlXn5eoy1HZJ6x2rQuGfMvOquDjXEvv4VOoQuMd%2FJy4pjbP5x1z9zcOPgm8gHUz5SQAZb8gZJoOSpFnZ440dCPPtz8nImdjXv23h0IguAu6ZLN5KQzU61koDcvSNKMhq1uewG03%2FqNy9boimupErdVGYe4LR2XUno0jfWrFh9yX%2BkvcNb3BnEU3vipmN599gPbe%2BLkZ9sGeX6gk243EkSqH%2FOZw7DWK2qM%2BBMFqrsaBmZt%2FtmnGZVI%2BBGdSFaSdwDLGr5YUVRl3CyXtofArWCrD86z7ufOFNeriITz9xcUGKfe0X3NW7p97ag%2FcF6HU1WO2lDDK3V%2BxN6RXL4myW2Visgcw%2FW2sHFMTqjxhhc1N9Ju8OiS9bCObSKze4n6XdzOHP8l3%2B%2BOuAWKzWv1vJ7KoSHNGPWA3jNaGx3328ibmxNLT4XWy%2FGVciSaUXyAzQZ7nc94pmZvRa39eR98NZhrgCxzCB%2FgdE%2BlIk5OyP9XFLUHIloRLylVIAiGsb6fAsXAbcyIQRAvEUhso02Gem5hRxVjNlqndSgnBfdTuKBtQ3Km2JW5Y%2FJhNAZ4jMbTruR%2FMC0SEJtw6ItNEAevQ0V9xvJtw9azP%2Bf2kOgZz12MPzoosAGOqUB%2FtRGV0ULtN65j5HpEkP0odShPlEZKMADr1LDW2i7BBDRCWQyBipEUME0%2FJ%2BNTXEl5NYGVIURZGGIU787ehj%2F3OlTq30ERM6pq%2FQdsQ7FM%2F87KIfzOb%2F6433oL1LaoANFVQqO8coKc2Xkc70AYcfTt6wc%2FeBZC6fjzww4Jwu4ZcFd95whm%2B827c1Ba67LhizK8gkk8EHzAwddkUI%2FpFSSIgQKvkLW&X-Amz-Signature=16a56ffc3e8f75af6a5368469ec95d834d40111e721d57a2994b1ed515fe0314&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
