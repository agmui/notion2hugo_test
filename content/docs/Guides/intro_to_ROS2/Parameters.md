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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3PSFSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnXT%2Fmufhefs1tCYmLSiK9tLs6NZy6pR9KS%2BqEgT25%2BAiEAhwTnKBY9tlSfESQZ5Yekv%2FsIyltA1S6LRjA8V6lHC8YqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0d60MeiybImy2iiSrcA8RYLVjNJmwRQxdV4Jh6XNDPdWcWCbHfyChM5Q9EA5MB5NVTGSHlok6HydYBIxodAPygNRK8vmTnuJph50bOtY0blJ747BlNWo3%2BhCfObf7d2o8eAC4xpInFGJcKZAEd1dE0AFK8jnbztSnbJkvrK18nik%2FCw8KrpHxpTUvKGHqkItU27qdV7%2FeV53PpoIqtl7GzZiot2fiZpjY63L5KdFthB7LkcBDMCAhbbmVG%2FY6T%2BysMzFD0ZFFIHqPHBKRKWE8oxxekY6BGec5MU%2FM5%2FQIKtJb1PEVfl5Su4buTY0tkBriLl3137lfi86bOdg6trA8zsRzcaPolw%2FTcDnEBtS%2BBSd89zk3UgJe8sJNG4mqsBNx%2BAB7hAJnCsuZmtiCvDJBdg8MYC7xDQSuEmVAiwk%2BNxLcSttLpynWoUwCFBwYZ%2BboXtvPywU%2F9R6QGImQOqmfwKO6ScoVutOd8CMMTGGY4sz1Az5uD1%2FHUwjgg096rLz8mTXg7oP2ZhK3CXPhzktexIazDZcJwOMsIBIdWVRMiS8BtFmUMYdpwB50YgRUzVO%2BWZcrnZlkXy5QMyEQ3RiO2JZh48Wshi6ShRq5vETbRHzq0ER9xidq%2FK8LNlCc%2F1M2K82jzCHaDFeGXMKCTrsEGOqUBAGzgexOoiTmEboLUwgv7dtFfrOXL6DqsUYBqtxF26%2BEQwOKcHz2vXrUcpJoDo1pTQIv%2B5waJtkE7NVkQt%2BuT3FMwI8s2Vu0cvLMwZZNnI%2B9azRzey8dnnEqXoaHkgJ2Vd8fjxpFF5ycj95Edp%2Fw96%2Fq49b8owmMA4nRe%2BPt0jPLpQdB7U53XvSJjztB0l5hHAMV4pvBfX3Vif%2B9yYrgy3KOtpliu&X-Amz-Signature=9b101b0e101c5da01ae6317af8ba3d88e057395595e83c910384e54dd8847492&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
