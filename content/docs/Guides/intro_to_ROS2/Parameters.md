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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNDE7ZV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDUXrQnoiJ%2BKln23faZtTx9hCkrbzQTCexVX9olAt%2BfVQIhAOFbHphbOMsFqcmQeK9d9L5VW%2F%2F0Ma0ZVFN3usj1YU9tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxOiOOxEVzngyfF9LYq3AOxPdiLaak1ryn6lHyc7IMi2ZKJ33HLIR7jQnQakDks7tIIay%2FLLnKJRYMNmSq56SHC6EYwB%2BO6SXlSW4FIqCLHTy9g7V9dZIb4LVkyItCWTnErbac4knGoaKexbo6SgQ4ldAiVVrmXSTlOz27%2FwOsrLxsYue7Vo0rEAsM%2BJzohb07zn6%2BVrZdBGsbHOS0el3H1id%2B6hYlMbyhBmh3q2l9fVOQ%2FOT2%2FfqbeizPdDBOtqXBbUjqAoIN4Bq0aTNlxUDrRrUG1%2BjnvO%2BVrq%2FRCgDtz0AJ1yLHwnqwcJvk5xHIihfuZjezK12HsmroeurRhUcaJYk8ktnYBFMA%2FQZXQzxgS8lvjHQf1egqG9GSZBm%2BCpYJh%2B%2B4DmCoOGMxqtUs3xQpLb4hnEUl9gx2t3PPba1VPtImts4DyWmRPATlHcJ9YMlo7OOOdU8ojdhVcIZ2YiaCk70K8MuxqYFjc56FSU9txKjMQt0MTf8aEvzfHxFV0%2BAIpcWatffqkmqFuoNhU2W2JfWuDYXQ6BvccGhPAb1blXM%2B3Ke2DF1s7wqyuaff16O%2BvyWLcaTzBHa8tH3OcajZDy3B5huPVimcnICS6gfwxzFJKNQKx5HWVDdTS5k%2Fk8%2BsjNcpyPCYLrZSBTTD%2F5ZrDBjqkARTg8bRKk8hgPV3uE5NK2Rcw1H5byET5GxSvPXNsN4p6IZjG4ysSQ7RJSOyuL6L1HKkmAdYLijxlT3PpYqNOk7P%2Beo9yFx5wjd2YoTVtWpLjyjlQg2ewOTplJRtZyL4Kq0KXJsacEYFhO0YYGwgK5lwDyWZQzbpUSy3dEdb8q4gWDZmCt7%2BGsZhJ8YwxP5GLjft1a2igFQUBgFOsV0N%2FFPcIwDXw&X-Amz-Signature=a3f8c59e42c3d98c87e4b3de8523217419a581178f1d3ecf00fe07a267fcbd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
