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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5DHANW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC7AARTU%2FmO%2BD%2B8xhmP82Ow3q4EF6xjadLitTty0X13pAiEArxkPujyBBvasGYmfXp7u8rxMoXM%2BrjCNcg33sVFFo88qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORqqF7l1Pywu1wWsSrcA0gh0UwXuJTA1dRjtnhbWM4dqg9oOPz6pod8Y%2FdWYD%2FnYPhBOI%2BcGsJjStH7neMV3Cz7oXrAo%2BYTKh8J4w3GAJ7Q%2FMOBuASczk%2BkrLwK0anQuVL84UicUIN2qC5iqb%2FiYX%2Fq7lDIAsj3FNnrNSPwocw1eiCpWa%2FRF18gOrlHclEvXlEcl0FtDfwZuPySBxw0Hcsa3RCpzHcH1nvJWACbWgumrGh5YJnTjeuezfEZyJUMd1%2BMESailluiR5qUFdF78pSdYWXzQ2kKtZZBkWRbfPg4fGM5%2BaWz9GATi%2FXy3u1Z0rWvaYm2Y3oUdnD62C2rbUhgDOGP9Ejy96343%2FCXklggLuhk2v9%2BNEdNoIsgVEwUItLmVB1Gn%2B9v7u2jqMOnrv49r2k%2BMat8uqHvpSegaZrT075VsjL5ew39RHPBMQkaGgKnYWH8CV7I%2BLyeEbqlN4kBIC3oJ6q4c6afsREpan%2F7k1iZ%2BsBKn6Sfpb1%2BQf8q2apl4KdK5x6ByoACvc29DG3MXMz%2FoEKcKTKQ7uO3khQbiYuvwTYDuRpLM7FQvUHatW7ogMrDN2tBanpLhRzs5jBalnLdcXZncEMY4xIdbWHlBWwReWS39EJKN79gkdUtzMh7z0CdKB0K1YCrMIDQosAGOqUBiFe9nTFs6cwIk%2F96J3AmBNOuvNgcP5EVbk1TnnYhCDTlqz97KiW%2B3%2FQN1m8lHp0Ghs13AsjP1eOfk9E2LX5nqrnL2gE5l1LuxjbplyOPFOpDZR%2B4OYiG4SZ9hoYElUVu7ESsg1NwZtuhvED14Ghqb2yv9ajNunvK4Yamjq7nNb6FAYsz2X6LExPAjJO5Er0PNNq2THODsUypP2jzf3KQe9%2F5VMzL&X-Amz-Signature=9ba70b794efaefb968cb1edd311eacd264e90dfd609af6e102208e8856948210&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
