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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TL3ETA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDXA749zcGIxTwlqNOxAFSMjqWLVr%2BugbZCWtw71QXNPAIgYBRar%2BRaWJdLqBm8uuIgPiAODO6jpPP4X6N17otHLIQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAhNGeZ1ZhGoqpfOCrcA4G3om1drkkCFvbQRnBismSFP%2BjenUnWh0yYznMXzQlyc8uMeLP8LPfeD%2BgJaMFG8Jkacv1OYOM%2FORXTIT4BpYsjbjX09SLHRoxgUfabWfVEszI2V45LAc4m81AWVJ3tGWXei0ECMT6vA1PBhuNzW%2BPc9CDjMBJhuRlcwKcr7SdL3BDiuDky6jmsaPHFREZJdMtytBBEmJnfTYO5Rf2hF2gEEoRPWy%2BJ2PkKqkFc2LMUIAErF%2BVhblgA47C0pKbeghF4TyzKiKsZ0a2Y0EZ0T7dddc6FXdXtmYIys1Hk4z4RrFuOstedFl%2FDaSvXbdI5yJ4wLIO7Akd8zgpnxRcqyNxFsl0k7MfpxWU8FJm%2BgI2X%2BbLo4J%2FSmPL5u8b6MKmfMKzjpv8R0UYRLSNtbeAB%2F92%2FYntYlwTQ92TL3oIGXd4Bs1htg9dYBepA6Zz%2Fuy5gJdn5dUd8mDDt%2FluKdBT%2F4SNcYmsk5mdvo6Gts50Pfi%2Fpc%2FZS8QKyOGCXDM4%2FtNCEt7Jyms041R6aSZwGm9pNxMItKaMtQZlSW7PdOEC69ehbtEYw%2BDDmuvGHwuc5lcjs01fUdV7bba3ipODb79RRqXAd5kvRtWBylKVzvbzd3mLFbxHBXVSptEAY3GWjMJfEx74GOqUBKx1FzXW1OQzFAjXUiTtKAja2toj68BrGrxu%2FznJca4EQzR19WYpUoP2yJasC1pP5Z%2BfXeGi5anISswplPULACPNihcSZdGrwZ84notS7tW1cBi48z5xqY6BkowEm2zUjAdOs5KLtC8ErlxTemDF2Qg%2FS2nF3jknJUmHHD30B1D1V%2FSlZeyXETzMvJOOmOByTbgfdp8slUHorzG3Z4KRIB7Vb74jd&X-Amz-Signature=f180c2da16cd13636d9edb04a1e2d323a604811c9c013d32b1c76f1778e3fae5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
