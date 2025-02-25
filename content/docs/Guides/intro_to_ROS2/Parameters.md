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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRGXU6J%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBX%2BV2lsQF5fN6S4lgr04JQBFuVrP1jJH5C3oz%2F7yHtJAiBzWmxi9cTd%2Fqn5UkWMsdkZAPlLy5WRuvGR0RuqlBR0Lir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMCzp41DhSp2n2NgD4KtwDqLxUyUaRZYXU7yR39DI3ksvtHMuQ3vsAg4Fr4g67IZ0dvgI05%2FxWEGyy77JvJ634CvlvET%2BB7P1VHeE4MQ7upR33BWoHtw6vv%2BB2nJX8LBD6m7fzIxBH6X4JXJDw8VCURJvQLjdQf%2Bt8bpPO4DI8heHATgw7EiA%2FMjNBEYMXIYwD7uO%2FTuebe%2BhaXr6TeOLbrdFILz0BOAKd0AeBcUy0NEM4erE5AKAUhsfnFhXaZVLq07Z0SkgltfaHvBAuY8xLgwfThWNnC2RcnCZW4f8KfvVNcj6TWNKWQAX6fgDl8SCf36jvsPAAnFCxTfun%2FW3SOtwzOFOqKutEv1zyof5YawLpUqJVs5PpluvEM0ely1dud21J4PJ7gVuHi6L%2FZP3BAtmVHTHO%2Fira4dtSoU4ZLvMPyfX68t2Z05UsEEY5Sl2b25icZNbWxsDKcPehhIjYklsLScT4EuP6rQ1RPHbz2XQ6sBMbuI1a1KhpJ7VZiqzHXbthkexL91nAwnbutRUq2PIvAlWuDFn%2BVozN1mr%2Fxnzy5Qw9Sn%2B7CB3iZibnhMvq0eExMxZFaPSfs10sRPTQWAGh77nB0Q%2B%2B3MY6l6%2BfpJdhiPZL1a5uKSZsMYAjhSCotLY3wmya8sMOrI8w5YL0vQY6pgEn1xzRLBpfcl%2BYbG9Aol4uTGYY13padtyrABuaIYXbElIplWqe6FOYVpwscxJ%2B2na3mWvAXy%2BwYJx%2BEkSHoQ4VkrzH1Q2az0n4nIBhWcn7hEWtG5Hr2mywukMHJzMFaL8U2%2FhoRRCUjp37FAGFff6Vh3nyG1aPaxqkw9GCTlk5dm6NOIsDl1ej7NJR2KDmVpfNnaykh%2BnT983m%2B39S7bEcVUWVmfwf&X-Amz-Signature=c8e0c97e3f395c888decbf0eaf0f1afc369406ddbadfad6c45410c9aa7c39c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
