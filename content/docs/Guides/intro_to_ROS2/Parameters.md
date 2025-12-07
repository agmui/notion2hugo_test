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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYHKKBP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcnw0ckNSvYdQtsWvjM7CTFATO7z5lMaYdejvRHBjaTAiEAl5HhpGuqBV7P4w87xE5nNCP1Rm%2FAUsGE1JcwaqClbKYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwFl7tzHV68kdxefyrcAwBauwldKAg2jLdybaAJh5BcgATr6Eqld7%2B59mvwPRMpgZUywvf4ldqAokU4VDIXu7cRMyCjff%2BUdnbTpnDbuLJkEsSxxSHnQIsy6HD0uxzmHELI4%2BOqRUIl3A50KyZ1slUcP%2BZAA4SsvLQm29opuszP4ttzcQZnRUc44qmotcGMUWb5dpo118Ztpgcfn1vkTNCjIdMoafJqf395hbkvieIsHL8NKKtCsaRebOJ2tkAwsAVKnYv9Ty7eYLZdSyF05mmc%2FjyOAIl3ZNu%2B3YSb785Aq0QjRw80Mn3XLflaDyM0urLOOqFnWNvE%2Ft0p%2Bhk%2BCdKLiNhJzJmcHiZGF9jj%2B%2BhjuxaAmkAzUNb9Q%2FEgGZFf5uEhh1Ps8VclGLZvATZP5E3kp1oBh9L2n67r%2FD%2FqX%2FhlN9%2F%2FSmeK51rOQCaLrpUTEZw%2Bg%2F0gSXIJGyqS8sGR8yAOYrBkad1%2FmRrR6qerVBXtyOVghdKisLlzmz3cxxt0XWV2cwCYdlp9JgvdjlrZZwqU3pnG3Q3O%2Bw0BSw25mu%2BJV%2BO8f1GQ%2FVFc4DiouCPw10hHfIh6lPXpxnZHszn%2FHZHR1UMtR1rPH%2B2Jbsz%2FdEYBZ7i1yV4GqZIch8078U13T5z%2FoVCbbPVHgBAwMPP90skGOqUBo6TvzdDHlPxxS7uT83yMUoWgIht0U841NGH%2F0ccLU%2BD1vc0TFjY7eRgiFOMfgvhosFaDcpj8n%2BaO5oKCnlk2ib5N3WR%2FD%2B5P8vF%2FyfpAqdnCIIUqsPJorxxSOZdnoXh02%2BnGj%2Bg2R1P6pBiiGcj0ihi3fw12P5wwFULovrjNAFdN6XADXwsbcLNdXBJuf6lt%2BoqP3j9PWdrkfHaryTijClYsverK&X-Amz-Signature=8e56e8afdc53019a74ab2526ad9a590c88f33bac3cf3fa88bd83fe8f11217e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
