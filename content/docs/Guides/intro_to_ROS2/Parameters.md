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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAQ6YFM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEJldPn0iQhtMPMIMnnONYkblObFzJML7wdurjUANA5dAiEAkvQlnCZp4PKZhrNsS%2BmMUiaWKnPJXWPFdTTwSktr598qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRo7yfL2vr7VOxdwircA3rN0%2Fnp1CA5bn%2BxxLxupSwXK9FJeKqLd%2BqpOBwTJFUMIdpQa7ch5hyMXO9YPbXqZ1aNgTdQiNZ1MlAFb8TGj4r2fl8s5ODX2Tb3x3B9TCKyvf%2BbeiiYUJkU9ZFO%2FtXrxOg2pN5%2BTghTVGDcoxv0VItb4G982CKCA%2BYMU8srCX3SJizZhx6eBZejOEGsKgPYE1UfKiLpa9s4i4S7Q3GDewK%2BgP%2BWg22Jy1MoRmlHYNHzLa%2B6jEDCHwVjApJCo7%2Byp%2F4K0SDXArpTQhiDhxPJRrprq21QHTj7F2xtf4dl%2FegQ224bxeyE%2FuAzt5fZbQB9NtCwz%2Fj%2FL6m4HFq3JEOgjLnYzoftHRfYnawintwE7Id1o0hD08jIIXxphvQwtDvzP%2BzjOQs3LHqydHCAVFr2bDTlaJcHFEuqQ8FwrvqHH%2B80JK8kbvTdivq%2FnA3bZ3uW3rMeCGyiq8%2B6dZkzM1Tg8bGVD%2Bii1LhCbl4JuU%2FKAmko8DurNoriG4orjEeTlMSjX%2BTcJ%2FfEbBYgldllv6t2NzKlDEEFZYUjmLmMRLZfTfg3UvNdvEpr5papSJI6jYDqtueAEWlNH8FZTAa%2FO1uw%2F3ydt8KR3jmOgo7U5po8ydKBZgaI9iizyhhiymBsMMjIzcAGOqUBdIdDvDe3TXsMKBn1Wh7DslwhNC8V1B2X2apK0A9KhmZ7hTrZODP%2BMMDeTfEYnLRZQ9Nz6LVEpdeAPcHxf%2FU1crWstq8UFQfBjLCCsAXegVu8enNy52Jcq64SDsinyE%2BWlTi%2FJlN2GBpYJLqsI3vOcruaRNcv%2FI55Ogzm%2F0bb9SqI8SOSUQP7Mku4I%2BrVGXFt%2BqNFN%2Frm200Aths7qREStSooTUpl&X-Amz-Signature=dfba88efb8dc55495a1f35ebecbdb7e53af3fc5157b5b0b1091f19bd8e039f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
