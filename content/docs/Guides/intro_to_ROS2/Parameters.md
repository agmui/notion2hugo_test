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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVKUQEG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9rfQgWdsLEQIgrBMGOOSUH5QVdeoftKuxSY0Urkur2AiEA10LjY2tKBCIzZRJl0QEAunKyqUBxBLh9yIUS1mgHUIEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1fwI7LcBQZomCMPCrcA3RXC%2FRQb2gRi22M6Cd5COrOmSkoq32cCn71I%2BamwWlV2GUc12wzmLdkun%2FuqWO%2BQqF%2B2aqXq2JWihaub3jYyu2UtXsU4Dmyt2z0JTc3XanQTNgowi18A6HRQGqwKvZ7TY%2Fko9BKTcEIi%2B9h9IgxsUumqYUUzh%2BYK%2BHBCaa1PNEtZFZYKcZgPkoj80JbRF9FGyMQXezRAsCLBF1mvOeNDaDol7BrkDls2%2FN%2BZ22PymLmvPDnHD89XTxFyIjW2YvK7TSV%2F0U94AMozvnHocIKnzBaKi%2FN3rWeLkoFQag6FBMrddohKOu3E70RjY4q36K296DDuGIomzDq48MeHxZZ5WWObvERGj%2Bt9s%2FCghd2phQiB%2BIljptKp3%2Bll5SKVi7A8Q6Y%2Fya1wl4DkxXDxylmcnLfKpWSHZaSlPdUJqv5t27qkui3XEfQ6AX80iX7usl6TPRzyOEzNb1TAVxtkY2QLyTj%2BNEfFMANjGZFSsCysQxSNaHvUNEI%2BXJxyixhBKRNQy7UNlfTJn5MnsH3PkUt4VcJMXMwbUt6%2Bk9614DfNZHf2F6JBKBnTVoFKo3Yc8LM2duhRjmqrs96Gv5befDSn1Pe1r3f%2BVkt2OSr3yJppWKdszDgNQYLcTEWHVnXML%2FPhMMGOqUBv%2BxGc5GDUd9YHQLlN4JTMoviwQDjmmK6AyES1rZAnh0S1J8b5HPKnSUnNFwgEJGAAk38CoeYxdKPo%2BJrgljQKYxYclRlQOyG3QYukS79z84Xzkb1RV4CrHyZAPStGOkHbIWUArl9kSSJmlZ%2FsY%2BL9eNoZpjCnXJxKE1kNHUKCAmKzeFA%2Bx1cTQVyyri%2BWYBK1woamsXSVu%2BUArEOIIAkgAEXqiYM&X-Amz-Signature=de2e927c0c03015a788ada212d0f285e9bfcf48fcfc970e2b96023049b2a3cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
