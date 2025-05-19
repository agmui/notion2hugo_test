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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOL3V767%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmVi9A93yjdT4qnkGtBFh%2BsmB8Vp2qtbHVnK2lSR%2BQJgIhAML%2FMv6EcE5iGPZcdL8N2AhY%2B5dzfKPZN3b5ewx4GQdZKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgY9omoFvaMsOWItIq3AMeRrcTs2VFM2Ecmd8ux7LPO1ZCXJOz4tKyHCwfUPBSZ9E0hLXF%2BPut%2FXJOncxJlVVxdFV4soBV3hi3TI5o3q7Ecr6ejbqdrDKj%2FGmst8%2FrtxWFxQl3UzlAkIsHKm5EgVs%2BT5bUUojHCPcrWTdqzNkTvROxJWEURe2nbh%2FRme2fjDOuV%2ByPzKJZNIgwfIzANm7kcnh6kr7zWsXbdMjnIoI3YnUKuWmpzh1ayw%2FNA9NwRTxwGz0LEld%2F5gnt0ZbQenUovunHAoh9ElsUz3uoxFvq9wbI1QWx%2BriO3Q1vHyqmvQ3wWiyr04SJzCToKLF3UB5C4DDP8QVenWqpmlibUXy7b1aaLmEagfO8jFKMjQV668TAQfUsK0FRyR4PRrYKkp86iRBojkkZZO6qwOlmUHWfJzkqzY7eIC5KAUXTjRTmbood1%2Bwk36qIEjcb6Wtf16G8BKbeQF5%2BLq%2BBcxAk0jbRwR9LE5TbVJVJcDTw9CDevolQlw%2FdbVCrQS3RnEK4KdKg3jLXY3BBx7xmOfpLPAPMLPJLp%2FWu1U5cyINoNoqFSHSh3zPnWIaVuvU0%2BYCW5x6uMK9kvd%2B15yumw4EgXSjHnFu89EAWs4ywpCCIHW%2Bije%2Fzr6UdlKILAZyKGDDX7KnBBjqkAefY9n0Y4zqRrO3IDdhw8ZMNR7vLNzpXNSasFmzu7JffTtfEJuwiisDcwZ1osXHM3qfhs%2FEKJOBzTdbLWl1Vkhsrv7EmOHZcD6XVxORnm5VPnyknsoewH8qWEdrmodrmqi5ARbvuxkfK9fjMV5X%2FUYZDQxDYj1T1w2tSvRfVowPxGz9I2JAd7bMZPTWg39Ms1Pfsa0WhmWq9WTTogZOpA9VfC%2Fw7&X-Amz-Signature=5c7f9ba0e86d0a94df6d3a8638a85c70d699bb039211fd2fe67cab8ff7a9b6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
