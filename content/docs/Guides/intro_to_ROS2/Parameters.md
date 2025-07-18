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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C5BLPHW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDC4uhQRJfu8isuznXOjBd%2FWduRUYH%2BFsYhV8mUHuaCHQIgGmA71tWyED4kdEkBBh6sDNhTzv8bRv0qyMn7VrcyquAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW%2B8X3t5Vv6208iVCrcA%2Bfrd2AdwPsHSsNYY2KRIbcN8cavRnSLfgwEmooSPhnHXxcXDTxJzLG0zw3my2ndYd7v9OSv3qaNU0rveEEMsIfMA13U7uvK9cdWXrPnFQNIMsEK46fz%2Fo4MV1%2Btqz4lRv3coaauBertwYj1Efk9vk6tjPpYavlLFjwT2INj1VXEKJxYyNKHvH6rE4U8m%2BSQAFVbGurafz%2FJ0Nn9eg8XrpYRjfD3%2FE7q6%2FzA2bN5SYdLWOLeUtr96wEQaYOWBjZcFz8WY4TZgTUdlXn6KS0oh%2FTu83U%2BqOF3mEmFkwy13xlF%2BkL37OB9ZbIYzdL60kEQeuxQOsfVHCIPuzSr9I6DKXYHkt6mrUo%2FF8y3Hb9%2B021Dva89bH%2BmtZb%2BKxMSrMsdWUNbDQAF6oBVqAof59C1t1LLTmLGBmUgebSYbLHPBtZNV5jX5t82Nv8aHVSvpm5eWc02l5ihbPn%2BrCSvA5W8s1HVN%2FE8G4nSH5tfPj7gOFFVZo7kfrBjwyeLdmSQic4EBcM3QMnm6ybYuVLGsDwgU4hje29IgjLw%2BXSg7iBfRYWUfiivPv2UE2SaRESHH9EIe1xcZVZDfRnKICjXac%2F9G7R5alF4sz%2BqE%2BwfjUBOSzKsmvr%2Ff5wWaJOv7uGhMMqZ6sMGOqUBM3K4%2FusJAxx0fHuABAO81vRsfwfm0TpWmgHBYi%2Fii%2B%2FdTs7qbeDEe%2FuJMyAYQMJNnKT0RtLSLzGSP4ga0CIdg68U2KRDCE0BgAGTBeBkTskKKb6lANeyjGzgZHnKHJRGf%2BxcmWoHu6cjTGHh711XrSro%2FjJnOqp1oa34F9m9MDxM%2FW2ibdxNc7vHeDpaEjrRejlOnJozIeAhbw54eiIHut%2BVnAIx&X-Amz-Signature=8fe267419a63eb11d355441fa383df8427654bd0ca16b26a363da3762a563347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
