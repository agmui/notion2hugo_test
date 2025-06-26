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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ZH25YB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA1D%2BH9tbb9FZXc3vEMpWsT9j6AUvExdN4D7E1iXtrXwAiEA%2BKlxuA1vE8pFDp3YD6CiGNlQMSFXQ4tKCucw6tMjp3Iq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHqvIOjaLXHF4b%2FLLCrcA5nn%2FCdG3XE5agH5vSMMZxTUGw0REExoMofb%2BsQdxi3zidNm5lJus3P%2BZFT3OLLfFJbO3EmVIOdC6as2qffpclp%2BbG8LedBY0cCdTlTZ3psmb68ctG6gIancrmkkZCdISjQ7GWtBaIVtr7w%2FSQ40N80llEB%2B9rd3XRWIKJSwccmvZjb1JHwTVVk9Gy%2Bi1H6%2BUeLJdh3jrverS1i3r5j2YEykyIweWKo76f%2FnFjpwHjIHvmkbHJj5gUrcRR85V%2Fb1QcxIfknTKWwuK%2B7Lb8FiUuhps%2Bh8Oa8ydKRGou9qfB2tEf8uqkz3CNeNuDHMsBmpqsjC1G0vAmKWQl4GkkkCjg2ZDtXomcQRSey11DEEKlPpgGgBLcjxGaOQ9FqAEW%2Bmtu%2FMHZTYBeRuwU3L5ZyfrpU3pN7o5VF0PYg0LFzsJ3UXUmKbsDUSM8l5%2F4nqt2rDgKuEFeNwoVSa%2B69rOGulIblQUPVQQZ5q7xnRqrDL9NMEHSqkU8NCzgOLEH6A4%2FOK9pFm%2FopRV3fRXdnISDELmVdZGQAvJlxTe5OwoIpm7TKXBt3VYyvG9m7TgK46CQrgYr6G6gHRCCMwwvxCeRqJitt%2B4%2BGwISGDNgUNA%2BnQw5hho3NYj5b3WqP7LmHmMNic9cIGOqUBeIkx93eOsrH6KPLFABYpnr7b7xpop0aFTWBW8F1Deg%2B%2FqiJJm10aMHMx%2FfUFhOGHNAuq%2BY8VsUrdaqyfuuT2B2RBq9FzTXNcRI%2Fx%2Bz%2FhcgTnkZZJjom6cNkkFPJ4IZB1AFQlgvWrXc3ZFn81YVhfN%2FAlYNtA4QxVa3XibnH2DaYa06pZd%2FAMMUUIu3NJZqZi6%2F5r3Bb9XqXng3Ju5aIVfBCPbuiP&X-Amz-Signature=b2cdb1584949b6c70bb809ec69d771687cd808bbbd35e7d8f144c6ca96772fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
