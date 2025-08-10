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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7KOTQC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdIFqrse0ZdrAErslN1BMeyGjrwQ3Snpq67pO9PbVYigIhAKwowDrv6tARrvNBArfIijQaIijhCc8EZzw%2B3jkRNtUoKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH%2BvrI5h4DyH6m2%2FMq3AP7Veh7WRXAIRrKUroxMlTt8OdU4XzGTJjCd8WDmL9IySfIy10%2FDo1ROl8MBRwYb%2FlvvOjJE2dWLLZug%2FUXVo5kzXSfiub%2BX6WXDTzP%2BYu0YpEtiRgIkX967x%2FJxNhGE0NQ1%2FmCCkKbOmCPXJEr5bNSfMHViLr%2Fz1mwFXvhFcHTYgWkN0Utib3%2BU63pt8rA3hhbdWArwDVAU%2B43UC%2FgtOZOC7UX0dQR4YQd3Gj34ToPZnILxQj9B6OwaiwXwl4%2BX0SfoWIHeRRzJ4pB%2F1iCS6i2%2Bp29qbqpfpYwUuGKeG0a9%2FDXXi88TXCGQgJOyWysymYjHXMTxe700PH14WS9HEDCqdfzgaZW3khCMv%2FFf1bXX9JHxljRTrz129vLNrQgwXhnFx2vDuxyIcOA9o4DT%2Fs36YxCSTdvl65EZX0K93fIfyjtnn3n4shDBl73EU0ArMrRqibvmyupFJuyyGNRD%2Ff6awBBPre0D3Wq4796SAypPo5BToDFf3Ebyo0eCzyZIfSlxGfTeGK1seRssbd7ryZGwFbbicjaJf3vgFFDA8YBhcPqoPgHSOvVd%2FSyKDTfdCDD4Z9oWYbkePsszqBenkKA7EdXjowzIEMS0TmVrmNRZRING84UquW5EeNpBDDust%2FEBjqkATxSkPK9BOakCgbR6zqWMseBsxQUpm%2BI3E4abJka8NM%2BvmfU8%2FJZyYXOlV2VHrWL%2F4tbamHYG5XU3AQQZs23FL%2FPn8d3CXIVm4URZn5TQ6e5DpIeTCjqNe5Y1VKtIstmllHYTJXRADWvnU81cN6dkUXEhADT5JX35HSi2TDbi2zfwS%2BMU4YC5dkkr0zv99%2BdHhFY%2BVN4Er31DTJEWMytXZV%2Fkt5E&X-Amz-Signature=5b23bac99688afb230305d2d506225e02bc7757dd94a4ae4fdf214b53b4cfd3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
