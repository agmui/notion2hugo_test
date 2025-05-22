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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STAAP7X4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFO9sYxuLTaxEFQKno9It7EssXOhXF28wWN3GiV8GIe4AiEAggJclTQF2Fq8ouFYCh%2BzKmlj3AC3S0JuHR7xyC6XOkUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdMgyZR2sVO%2F1NncircA35TD8LHg%2BVYoyAvi8uQxqSOh7fr932JpHWV5QXj9RcTq%2F6NBDC6YleTkgXnRY8efsaja6ucbI%2BVqS2sx0NVgvfQlfE5qRzyRPKTZvx4L%2F9DbmrxdQQlR5R7drU87bMyUhpa6%2F8ELg4NvHeA4MWQWVlvHRYaFEAFNSczL8MoDX2FQtyRr6AQOAD92GWFmkFgfnv10LIDUpX0hesfPhn9tqwtRMOb5CGGpO%2Bci2S0SKshIoWuogJ2L2EYqrpyhsgxlSJndhtLg1hHPiBxUOsvT4vv22cANeVFfVqQ1dWAlGpHljegFS6lvpRolFtIod2kdJnAorC533REm4231VBmtFavpzz50DmJ7s8hCzb9cQIXHbW9AxPZoBjj%2BVfg2%2BR%2FaIqrzl6GKTIFyWNi2sBphdyC8k8QYbqUS4zXMPIFYzThil4%2FLZparTYmB9ZQZY0UBoqv3oMHKJA0rEJNSfWOonGv%2Bn%2B5dsSTBgxFBdaS5%2BxO7FKqGeuc%2Bwj7GDIuxu05ROyJaMzZ6E72De4Tak5RJ0K3l%2FQbry61MD1BSm42yUsabnft6nTmn%2BVCVwO%2BjuGTCgZAiH997hUbBwWSjKoKFpJQFAuS5jCrzFwXkHILo0k21b%2Be%2F%2BwqDTszWVv9MPCwu8EGOqUB711Vea%2FlEqt8BKDSQIWbg%2BIEo0ApqxE6sZtcIyjjkgz17cN211Rbyg8Uh5L8ODNsj%2BPcxpJMEzmKP2koNGSfpOtw3MeloZJhAngFEpT7IRR7gYfu3Pcz6jIYNq3ZJMTRd4vv7triTcS4vZs0iDomM3vJWqq1HbLuzf1hvtbafbIPGAg93pjQ2N8uLtmsjYPNL3jjsJGdlU5Vj0txVbVEC0zDHNYO&X-Amz-Signature=527393634f1aa7a99ccc87113245822b6d7ce593b6040cc821ee7c1d3a0976e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
