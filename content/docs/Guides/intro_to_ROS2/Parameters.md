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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNQNAKM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxhFPxBW5AM4Ap8fdXNIe2IHiSm8speT5AWbrLiaFOCQIgTulYt5d%2BJzR90I3rE70vRAK5H0fx4vmxK2L2%2FLI8zHwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJCOXoo%2ByKeO6ldfyrcAwreTUiIf7Sk%2BjirrY6jb8r3LcadCCl1P%2FdttcD4e0fQASR3tOP002yWbxp37K5PrYh6U%2Bz4DlwU8zPQAWjPBniHk5ABJYtUKAhAgvpYxh%2FFynmgbU9nrTjvfGnZMZcBUaeloiDDVO6w2yyM7eINyXmXMpF7pgrBIS%2BZXNbmZKbQYm3TqQ%2B1kbflfEwphtIDEqAZlCgBDqOaLUkZkRkgCwJALoNd3v5PAXle%2B4DlzNhi2xXoRIqAJ0ivxTIsfw08cmOzVo0rqXMDF4XRSsr%2FlmTxfEKMsVb4zlYsbLb%2BMo2c6MX8S%2FuWSTXqhURPTMDbrT2BCL8Yvb2fD1yGPoYrwEa2EdRRN46wZXMGyc0Rp%2FTZ9bQhNOPFAZvSPYpwb82xn04tJvbAHQASLBYiffQxMf%2FUt2R%2FY%2FpPtFW0HEbY8VxeIEtD1MuCqmRQzt5ko45selk97FAzsExeRtOIS3VKjeJH7y1aUk3XKV%2Fb70KzrEQXOmaqVTdEOERNrmm95Of4PW9RLXDcZxjJC%2FgDG%2BU6LJeJAmJiRBkmL4Uy1PPtZuHrGPyvEr2xNRm%2Bq9LfwBpriiC9Yx%2B4eUIH3L%2BkBJsAMFkhiz3JIgNN%2BslhJbkIHzlGVYskJkY5QVM5yLK4MKfzoMAGOqUBk7slBN1u%2BlNctn26FdTnylWli%2BFyRoWg9uaGzkM7ZW%2FcszsYKhNkOet%2BJGjl9ERiU3LoCveqYAklDbOvQryS%2B0gsfLmzFulGOVJzl290ka1tNyRFEY4XYMZYpKeOeyR5xH1b1%2FxH8%2BWGxV8QMA1RlyDQjK8At8Np9xaM%2FloJ8sYVeRUJ4Y03NdC1ekaBVb7Bg%2FM0k%2BgnfqioMxJEW%2B0Y3jzMJm6p&X-Amz-Signature=e8264dff68345e17f96422953d068c3573e8d0ef3a6c393e6e233026e75e02e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
