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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFOQXRC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeOJxiuViigcgCHkzFbuXO9766AFPPQpe78Pn2tl24WAiEAtqRlgBdTzmFl2tOH%2FSOzn0S51sKS5URoCCYKMi7lITAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF%2B0mqsH0qQ899Zs0ircA%2BkBHXN%2Ffe4HcoZrvyRxlyFDSld40dBk1ZBGLJX8Lkf6o3Pv7DcJtpmH0QwNAzPMZ%2BnKUCex0xh4ZQIz4d8vVaBwrKqFvsF6mA7cRDxvB0CWnXlWHWn8RY8d1PW5LsTqdstUmaz6cKYfLY3ZhFbergniSMP5GDF5vj0cA6QPWRcxKYym%2FkZjZYHvQkI5PP2ckhoSl7llc7jVh46SUrDeA4BkwpdNx3lK%2B1%2FzHRWu4FdDX%2FxfaInV2e3sFu07g4NXDPhBKR28Wmi8pLmVONFUyFSYaqDUm6vuUdys%2BbjOvDAo05gxi5qrX1xlrjk21nEIUBQNv7kUC3v%2FWVfH%2FUp3B2UfiPLS1T3tHlKfnngSTYusETh219Z551SdhEgruvdHOzg6nOC4PKhT0ewx%2FWVHkD7IXH4mLuXJHIEsuCxZmFFQihNgWTgisaEIdlzH8zGUFK3n%2Fw%2BXs%2BUlXK0LWQNlpnY%2B0Lf4t%2BJMS03JARM29sNG%2BproO8b6ZdscD0UA4NR8j9CY5EEvoy3w%2B2dyUikYrWo9VnfKdr8bKUE65UvpRGdZFP2f4jfMcFntjOW01JcOpeoS%2FYi1yq8jbU0a6x727J2UT1AeQ2Qrnk1Jc6GZdPrXZTrvwWBLrSRFo%2FnVMJnK%2B8IGOqUBZJyDDzIFGMmuBA5yCZqyDEr4CP3SljvFP8ps41y%2FLD22VY7B1t1f9xIdUV0rY3WPBotx1WVtBqcd8f3DUrccctV7Pbs2scLYGNaUJfSmpBzHHmbr%2FnFavMJmsMlnK0%2F83gHI15Idu6uUmbiV%2FyX05DU7rW%2B18e2YbuWOClzTRMTf2fix7WvjE0RFhR5ezLoRli5QPOS6%2Bmr7l1Rif1kmvdFDSc6%2B&X-Amz-Signature=80f178642943ba45b3c8e48dca0dce3339276d64fba43719ecd2761567697482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
