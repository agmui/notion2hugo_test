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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6FO62K%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBS77F2O81ReQ7CqN1HfQiCxFrJf0Ylsov6pu%2B3D%2FaxEAiEAlDPbkjm4WBB3CcWqiL1yxHlO4gNJpgdEC1ZKCFuTM7YqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSyS4smn3hkGQnmCrcAzSPrkF92S5rBmzBU95USuWeozbuWg%2F6epZS9dCwLW2Fl66Mmsmd1phGyL2uoMDOxXPwst6qK9gkn7Xh%2FTFHQdXSbfWJXr%2FYSmJ0fan%2BeVwr7HV%2FpCkPEgu%2BQ%2FAnINdszuOiOkg3zWy7%2Fy56AUtJioptpOqAJcG2X7IISgc09kqSNx5mU7lh92ZeVCs3kFGFqfCThD%2BHYSS8PJ9sD%2BWRHWV7ARdNufkQ0IJREfo3h8%2B0W6BYdI52tn8bt3g8JDTw1YmU8ZoZiB4SSNK2y8dF7T2lNlxo2FGWPYPfHyUF%2FmjBPgTBqb7HfU5RpmiByrBz169T97OnnjI7v%2FalwqsgWGPmLnMH7psQflcDVByMRSTXJJ9Hxp84RqQTzBzclYFbgDQi7%2FAplZ2ZlmBjbl3m0HPes9Blnx0Q9p028UJutNc%2F%2FZ5xL4JhIkvpfIVemmhK2EmumXvBH4waR2A1zYDPK4%2FPjlPW1b0PxP3bQBM2Wg3yDx%2FjFxQUUZUZsNjbapLuv2HA2wyfhrmvRfTOTaG%2B33bbhOFfsJhRR8a08KXprxVA1YIBfSy%2FSJUJNODVKpA3R7CwC%2FrE3yq9Ne4JAKGSN%2Fa4l2%2BlIh9NYLhnZ7VDXKvsBIVl1ThXf3Tk7WQnMIS5gcEGOqUBW0HTVY7n%2BY3ftXcfFcILtpU9m%2F1L1DR8PcB5l3xKQ%2BccB%2ByXqIEEi1%2B%2BiezylPi3hiObOz3FXeNl6RFAwLQHXUCuv3OY6kFKjuyrZwzEFRfIHf6EgW6JZUpua%2B5JdXvbVBmLtCUDcilOouaGj8WybR%2FKW49dZyQz4xDguJ%2FZJxLJZTj3gSU%2FNXy1fdRxwA%2F2FLIOINFPyn7kwQ%2BpjhxFoR1UaGLH&X-Amz-Signature=8d7eda1a4e87b391733368736a5ccf0b225790b8adb452ca1c013235b37688be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
