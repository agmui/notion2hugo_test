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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRSO5FY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh4qwchrMFkWMxciZ8ONzZYPQrZXKG4eQvrCi4apstMAiEAp%2BobkBxtkpmpmx88kxxrIuJkHU%2BO1Pv1WB5NRDaAZjcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeColIlmPnTpLP0pCrcA4he%2BvYEeq5siTi5HAH2RNyFi5z3cfesbtER0o9oRBjJqoASbBjBO21L3cUl3sBGWWatPrHPV19yFRNLVkBgf26IRap5xv6n3MJ%2BQ712dgOIE%2BHsXxTCRYdiLJtnsoOUvC%2BcsiwWUWEbcNKe6x%2Fv3zJn5lqBkV3pCbcrQoNdNJARfZbLk%2Fbxl1b2ML2%2BcCcapGDRuOETMf1SuLBNojh7kBm2wWZqLSXYLQH3Scia%2B1%2BMIYtOsXXKpU6VzsSOoReu9flF1LgwP0WnPV0tgi7BSnOaSBxTMG7%2BMfmb9AFhs94KK%2BB4tYmx8Uw53rkwRxdwwq6NhWbDuz%2Foeghk06%2FeH6NmFeaOz7tRWgkWEGe%2FNrzfNOsCIlgdVGsXTGtzyqGeKNpzKoB4tWZ5umnoq89KCOadQ%2FDOIAAdcP4qoPlLKtJo9cGOX5FhTsonXnWs9O6LcNypYq6JOlaaNgh2o7bEGQr%2F7BrXo3n2VkUw5n73Sgq5HHsfOxmiefu4fepkC%2FbQm43t4h2FrauQVKXZg3JluzwHXdzV3SB91OVMgJx0In%2BKfK1he2je97pYSTlmPPcQeVUc3XvDg8JLxsB%2BEXj%2BgD66cjhTaJKxqKAWPNh1qn6QClX5RU4v5sCBeVHFMJev2MIGOqUByfQGIqDe0YUZqWWTB3r%2BO9%2BTC3HsHEkjo1fPVxcuGwNtty3XXnQ7BV7JKNYo3h7ibq13mwYDewB9VyGV%2FIrQjxCwkjqTXK%2FZszqgody884%2BAU4ShUC0MWO4bR0wrEzZNwf5vnA9ZfvvwTwSl6LXQz8txd%2F4mZI6l9cs6NGWo%2F1lrKCXcL5fJ%2FGmSPnHiQ3zyQB9tbehhH3sTjreZb0nLL6OLOi%2BL&X-Amz-Signature=be58ac6be88407f2f34f8dd6b76827eedb855319c2ec51d1fbd00442576954b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
