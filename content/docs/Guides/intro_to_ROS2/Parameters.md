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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646X5SBXE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMh9xMH9AdDtL%2BkCoXBgPGMaMxvkiLdCDIcZBFYNt1oQIhAMdfD4xy9PuAFu79hPBDL%2FlrtX6EpurR9XNSGsntZQyjKv8DCH8QABoMNjM3NDIzMTgzODA1Igx8f7%2FzS15%2BmRWjlZIq3AM6VnMWWFE7heHfCmASMZIoOH5IaRgWuorUcuUEibhPg89%2BVBVS9pusrAM6oGLGQ3onx9bJUT41wsLul%2BeCmOASyHCxjr38ZM%2Fa8SYZltSBUbkWmNeIKxSIxcGi%2BtZVdE7EpQckoewKmaPH2plSbi1vQs164Gzt6Ygn3VI0MUiN5LxoqIZJLM88Lbd%2Bp0IcTRJwuh3eNwmhushvNduEOkH%2BAh7QLr7SmhKk1ohov1HbzqTeZiKp3mDzGo2ncixjAu9xNmrHZKiEBgiJvMEXQn6%2BHSOmCEUsB66zbxhhuMZRn295Z%2BAV8%2FUNgP2c6teJFJ%2Bfc2YgCCaDA49M8lrMjlRLplE7tpogaCtQyc8sCPQBQ0YdQF1rMTlZn%2BTFJKdtGpEiqVlf6nlQoIA7NNonma3XVi9ySt1eFz%2BxyZJ8yXvyKeZiZG9pjZ9Y84NGPQKOf88iC4CqIS2MRGQEBsnoJSe3oKw5%2BLTffw2AreLxTScP9F7edWNJOwE53dqJUxvmgX4Nw5lc9%2BQE6CbS5VL8VDmY34mIPeSNrtO%2BZfnzg4fjdI4y069cXFAsus6CsSGGsIbqMJ4TkzqZSPvlMQ%2B8%2BCnQVHvoE9Ap9t%2BhYl0CvuC8jqaaPBxQ%2FKKwkw1FwTDf%2F5m9BjqkAdTcbepr8UIWYCBpG0pOkvNodCfCt2Zl9Ej54Pz0umXNdGv%2B0%2F%2F8swKIItj2Oisn632RlvmGTWNcSkK9XLypq%2BCTZ5OvOc2c%2FHwiSLdxAlVjRFFtzkB3sjtTAUXySS2VsmhzPDIe8c8YUbIp%2B398P30w7Z%2B9%2F6E9mbcx0erEIHjOR2cSDJRr7%2FfhpgaqwBEQBaY%2B0k5FxK0mhIKkk0bif2RcC8y4&X-Amz-Signature=8d3b9dd3671c32499bb944fb1c3dd502193f110051b6269e95bdb25e60c623a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
