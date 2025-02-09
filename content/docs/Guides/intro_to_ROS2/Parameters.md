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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTOERTO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkhLjwvT3cLT179Hc6GxJ4sAnU3eU33Q7Q%2FE7EhlySQAiEA38oa7ZC%2FkA4KSASTUdOi0aGumFlUAkptq6pEt8eCef0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpl5Dz%2BoTRHL798UCrcA1Oo0SFiEN0TupJCGLt82aLt2pMyo4oM16vtVMxrTXUKIqg0Uh0m%2FD8OvnyR1ECT7BLodOK%2FgqwwfvjxzB%2BGLD6VEIfk7pofDOWanBy%2BfUBfee2SRiIUybVeKdMGOLQFSJb4MhY0vhI5qhF532qAKJaTw%2Bptr4VwgtuIbxhJ54jEJCTXdNUZerlPkyWksDZDaKmqmjF%2FiLcAKLdR8G5KJuIeHA9MsWvlnRvDf%2FtExRSamumeD9oWL2z9LpzuY3%2B2I5aUeBhMD0TNYj%2FHPEYTG3D4QJkkMd3GmEiQTnRq1eSa1VaVuPyW4flleXQ%2FN5L2HZDRs%2BvTBUtTRspRIxtTFtJyAPmyQqL6dMSd0tPow9%2FqxdSmSFKo%2FoP65XiOlG3bxQRkijrsZiL7y155KXCMAkywcqFK%2Fv%2BNKCpBLolTCfMhUJZ0sthKT4zEuMuXFsXPGsYWjl08nWjgGYw0i1NqA6MHnxn204Sw0wruER81WWs4nrAg9HVjUwxL%2BTS6mWwXvBtNhnIsTaG2nkKLGbe%2Fm%2BXD8SqgPezY%2BsrvOT%2Bu98bXMHXPJfVOt6lDb8Uk4cKUGoe7TQKAa%2BWPEuNoGcjGNRlL8fZyXXpzwwnUHgmlc%2FABrWOEZMgcsLf87hX1MILkob0GOqUBlgLRcBlHk6kXRqYRKXtk%2F0Gipl%2BrJo0vlhlE0Ccv8snkR5qhW45fTtCGvT4fH9IyQKtmgXS96i97EY23pKxyrbm7NPD03ugfoGirFalrbNiF8xKg3nBGnRAOB26dagW9abXI9o9nGAATlxKeVphX3%2BwvrkAX464GmnLy3HiK7J%2F6e%2F3thi7c8LcJ%2Fx2G9RPyBY6Bu0CiONKs7jF0GO1EPecXn6YP&X-Amz-Signature=d6571f066ff0822cfd7cfd8f6977b95859a2e8b57f0e2bee4d0257ee249d86fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
