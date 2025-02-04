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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6V7HDV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGhD43nWDIxl%2BOQpmMX84%2Faj9ycIUhNspTJXi1u79sFxAiEAgTzgsypSs%2BNzwHsqCQHXBg4sph0eTlFi06w%2FLqBfodwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIIafPxxJT%2BemXn%2FKircA%2BWQ5QclZ%2Fe1ji7cqQqKZh11Vs%2FzHqZZwTdqf7SZL%2BUHkWyXKvak3%2B2Ezm36VsfXbzbuItctF%2B7dMYyN%2BYl0z1F6VhCcTLp20LQUzHbbkDIiinZ9ycoXiNVf99unlIIEWyQIdK8%2BesxLAAypBGnfJMJHvhBOHYkLWX0CkvNunWpUoIWNUXogvMlOw9X11tgh%2FBtclL6CR9T%2Feo2oRrhJAggny9%2FnUQDs9sMQAvuRnRUlb4hm1CHoERWxXiGyOLmIe1%2F1wl%2FV3%2BjecnVhYkKLVT7vCAvH7B9XEi7aWADebN1t%2BhBhPEH2%2FR%2BI0lSQigE3dq%2FDILPSeg2f5apBezlybp4yvU54iHiEydHJFkM4x4jKKGWALqkYlO55bndop4sa6EaZn5Jq72SGPQ%2FwWuEo75VIb99IGSFmIfDW9XVzgohFNTfBg%2Broy%2FGPuoCTHXT7P3wNzGVDCLteBfGKpiCC4cwj0cWXxVR6TqbjjOLpU2aB6CC3J4seJJYHg%2BFpJ5taCuD97Muy%2FU3YJ3bfD%2F0yEdo8zBeKoDe2fhlD9HZabcASOSeabY87MdVT%2BpXqB%2Bd68%2BXFo%2F9xbVBlXwW8I9TtxYGPR%2BkwwtQG4SunsMustwEW1McvW5qygqXEFEsoMLajhr0GOqUB%2BsjUCcAYus6e7P2s0LmH17snrp2u3Z3JIGwxs5%2B%2FKnuXdqM3xNteMgJo6Oo7QGazO%2BHHOYf3rxtXwLnKPR1P5ia90Yf5QQcyRpGORcjjQ6197K%2F%2F123XtNy6poRA2XaI61dSuWsClJb25FXGvUhR%2BcQ0FpQ304K3atWnwUYSMZ7685%2BUT1Z%2B4xqyhqiKCyWDKlZZDR5gNTF09%2FjavbwJzQDamB6n&X-Amz-Signature=8094e37e93f40075bfe4c95115f7d30f4e648846cb7c9ddde79d1e5cf85d2f92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
