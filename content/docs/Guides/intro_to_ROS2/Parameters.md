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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4JZXVR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECIbiFFlg8PXxH0kYgYZmnHqFxCJ6wGA1AJ2Jn0lhoIAiBedHGI692mTJWpoOAIyQ3Tu38MyU9JANz9jc%2BB9oYlTyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMycdF0r7lwcPd3fj0KtwDQ8NhCPnzZb5z2C9Fd3Xpt0mJGyMDM5iaE4yIlLVbrGScyc%2BMrjF8XJrlDKA2afJ9I2p8RbR7cIFMLzNTWsvvHYE%2BqlpUvTGC%2F6KBu3B2h6pdaz5F0vunwyT3iFye9BTkzswQ9xwRYZn2RL4lRwlJqcrhvBVneVNcFXYvWEhemdq1W02xS6c7PhvpFplHe81FTb0sxeGNZ5KFh2zWgjBrnaYipNJdAYLWVjJkPhmgshv6J5TTqEQGNX3rV4suHQCcxQ5TcdvLnjyU99gob2%2FMJsrepnbvYArNPA2LbOOQXfoI%2FFdOWhPQtPbMbFNIdj398Hc1VjB5zkP8lNA5AsIMvb%2FbwS8B0Y%2FhUMZ6eZtzrLXeLwy1V5YJOd5lYOeDMQMTUSVekVbIKY5zWEPf5yw80fv8g3bfXRLVhBJrHZoF4B1DzINuAEckPj18%2FuvbCkSM2oxlkwyfE%2Be%2FJkpv7MYK%2BE%2BEo9oNh7qePtvfhW7fCHkJU%2FgAWg2R%2F4n9VXIu23dQrGCG%2F3uMQ6XNhD95wj%2FOmRd9he01CbHW69XpL2cwn0AsA247GN98KE7pjQlPDBrTCozrOHRxTAmPZCxu9h0hP%2Bo6%2BNQFcT9NJcJAcm2qb3OrmO2JIeLU%2BXDozPowqd23vQY6pgH27rPVAAOp9W0OXss6qynhL6BzoqH7fkfCfMs9ylzgmhZH5ijgHOGZ8QXp7%2BfFIhzQXN3D8oCLuLzULuZwk%2BCDlpJ8TGxLfPNjovjIpeVSbqlI4g2%2Femh4BA5tWgnfjM2btwkli2x%2FplHAtYrnsLzV%2BA9JlLx2DMzFzxpJj1fu24hhzIXjiLCZ4EY19A4w0wfw34wxcl2ickG4CFhDg76aIyp7%2F0Wt&X-Amz-Signature=8837073aafe5707d1cf45932270b88eea76eaaa0c42fd7aaceebc57438992e72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
