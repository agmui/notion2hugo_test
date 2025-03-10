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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABWBIGA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCY56GIlySR96A5ksDx7tc9MQpz6L1xb0c5%2Bn%2FhJ%2Bhb%2FgIgFUuhsDvWLPZr%2BQoxzK87xUHHI5ule4p4%2F7JlVMS4eNUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6bLh7ZaKYRKAVmCSrcAwuprjJsl1HGk%2B0HUwDgjCD%2FrRSgPqyRc6EmhcsQOGJt9B%2BW7kRWaIX6JWK8an0f6QP9VgxqLBrTVeYOX%2FnGzcfYSphBF%2BQyv%2BexklzhuA7hJzvIlHJ0t%2FfrttY0uOdaotwzDqVprrySeYcCQ7Jcv4LXWmr5bKL%2F0qgg%2FqaNWOJ1wAvVv4rWavlhwrv1b16vb34aPVjZScXku%2BF4MZ180LjbNzF6THHdp96rl3GBZH3Zk8v4XJikJ17OjS9uFGrsqR1o63p1YGOQikUyOsu8peqEDu%2BYJX0UBehOHB%2FW%2BElb9wXiXEMyjxtr850t6CwlE3U9aDLA67YkC8z%2BwAbHkNO8ePqHqV2q75j0T%2FEp8ybUSO50oHRXmce7mxieDjh7f8c5JbNuNbmcE1zTtI7I7ptNhfCGLWLfjXgidZaoAQ4kSPUGcPGsngAGgh26mjOB2qT5jL00pRujgj7sksU3RFgvfg6DatbHJpOd%2BzPxHctvfDH%2F%2FGsNI%2BPF48tGWWaSWqouzPD4vPA1hK3TNqQNPZLszIH0i%2F8cBc5jLY5ba339MvLPLovrWEpkRQ7kql6b35nhYPkUF%2FDiLAMh2%2B1KgMsWVOOZBPyX2vxj3vAARh9rlX%2F5NpxrSQ3hFCy0MND6uL4GOqUB1wZCSofBFT66EJGyq5kqg86ILpbL7tB9MI%2F%2Fz2qL0zmrw%2FYRMxNlmgqli0kM1WY4deGQq7YIrxbISgAn%2FFhNrH7jKLFXLdozdfH1fFWqew4IUH1ni95%2FrVBUvY10hdSHtor%2FMsOMnIsfjsobFz%2FfGSgAy49UEmBg1ZyLiDifxBjcWzSCzD%2Flk09ybYu0CSCZ2gIQmLkrs0Q8SLSogdWnfChfNHxT&X-Amz-Signature=3311eb7867a5c526390a0d4a70cd84fd5ddc6cf5afe2d5df8881cee592105227&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
