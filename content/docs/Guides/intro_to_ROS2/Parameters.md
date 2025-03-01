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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMD76EH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICciYyvOfPD%2Fiun1XsyWx%2BZB88J%2BI%2FdvKecZKhs5CPyDAiEAhdpaeT7Ef6HZt39OiUnNnnEhQOOxlRD%2F4d8eOIbPRdkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuyYgNGoHzxLoj%2BICrcA2lGPqMH24fYgfXrCIGqIRkr8piFfCyFR%2FE7sqYekZioHxQSatQgdwhYHuKoJS9xTEZUG4OBrl20Y4hfDMtRt5lh9yYJl%2FpnAmVKATozLD9p1UdMrumB1Ae%2Bc43Ow%2BS9nW2hCTdScC9%2FoO6hwQu%2Fp%2BPoE6LeDlt9jlt61duOLrGfdYICsuu6RzG3n3VxNWtFOlrAyNjbbgP1OG9g6%2Buzn9ly65GZilO0%2BNmtPXkAcuof7HOa43v0ZcaoLu5HAzRSGhV41QmGYTt3VRF2IGdp355Q1ljZIMdyVM1hnRaH9Q%2B3dhEUGyiTsWR0Kbr3tqNiKGN62ryvvtU9c7NLY%2FNSvL1X7BLvphoJXWl8prv5V%2Bx5m1taAnRIVxTQErcnYKQClRRIRVjLgk2bgaE7Ij%2BJvYBn75GB4tq8Gg%2FYzlL8sOHF%2F%2FSjVStnCU%2FNR8n416EAtrV3AAqky1ScmwczjvR7v%2BLYT%2Blb5RPgsNCBd08CaHw1yDO%2FiWDaTlH9vA0B8WnhuLWU5XJVh%2B0E01oSOIk%2BBEduTGVKd3dBKxccXzJVV913rlOCANOaORiiFPV8X8%2FxjSeLrqUbE%2BmVd3GnzCT7ZxwDOk8eHJAfjWw9yFiAKWScWPqJuyDCPlRYvmj4MOuQir4GOqUBK8eaDaknzlRsSNNeYswNlYmeUPq4inaJ3%2BSdbuc85YO9dk6PtUOarhJhDtg4P2cuYmgnZyuKbb%2BECjzlPSCZh7q98Kf3CrQZewN8OLerbYqbyAZMOzaHf5rXQXkAKn5WtxrUFsnPF%2BM6vhte0GQdUoMH97h6ghhNQrexqLjt%2Bbwekj%2FSD84W91V0d5qqgftrtIWnQt8dWjb7dUvoK4Bexxdx1UxS&X-Amz-Signature=0e7a3ad033438f4d0eeeff82886ad3abb38e43a8edf22b9584d12c4eff01a5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
