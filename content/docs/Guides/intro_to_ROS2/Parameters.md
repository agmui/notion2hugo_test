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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6ZB5KF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Mo6z1xAsk5Nm3%2BkQzBWmyGf9569HFTlHVxK%2FkylLbAiEAtQlfM8M2E6FG4Gwd7WZRsyEGCJQpQcv7XM9KqqD1XD4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6Zlht2lglLjfWUUSrcA8tLSO6ybiOBefpsJF7uHh08YUaIKB8cU3SvhFNXNcIVVT9vDn%2FIy5z2tQGIqVdU3L0vn8NqPy8KB%2BE07jYtOsYk%2Bof369cKdrjegX5abRo7m%2BXckcb2gmq5GmGxQWqMRGQ2dTbk0wlb%2FL7nn9VyRDZ8VH%2FsDrgdWG99OaHQqcV07Eih6nN2UQf7BuUQImVXxKfPOtfVmH%2BdzEZwokhMToKw4v%2FKpToyuPwlzMbjUMN0bdXlf5bP3tvKlCHJVG%2F3KHqx78ZvpLJ2OGeDsWkZWvdkCDNY3sPvGKe9Th89Wt8CzYa4d3dfAJIUV7iFPKV6z2Q7xnUxV4j3bQoihTqJxyxr%2FTILbAK4odo5zEdxmnEQDGRIayumsPqApa37Bb%2F2UlQq8KHDkQepT%2FGcODii91pBJvh2wqSGJV4fzCKBetwI9dgbGGzq%2B2RYNXpGTL3lqCyPLbpfAbS0Ro69k8tITPS08F9mlWH848bqSutqAJngV%2FrlF4CoHMWIhGmJn%2FYcyo5SkloR9H18W7aCPSYdOnlfv4m1UZF4H4iP8iuqu4w7UAHfRYo5IPja%2BsPTLotYZZD89SfaBZ67ZesZ03i019L%2FUchKJaySGNiivk8%2BJ9ujBKeEL3JX8PKzcOiIMIr6gsAGOqUB5EOV1dOVj8o0yNBQwGTR6jKDsIHkU1Vue9C9%2FinNT4c16%2B5HJKkyqEX2WndbJU%2B8A3CxcuiMTTB5wCrs3CHdgvfE5onN%2BszhQPvYrRNjifUgz%2BhWm4PbZmMxZIbyiLw8XnsLNXANRvQ5zFd%2FKaoHJ9e1ITxJ%2Bnl48W2j5Tvo0OlreANwYLuuJJ6xXltyplEX7sx5%2BBoSw97O9R7pWTfeYluJaDEe&X-Amz-Signature=bc44f8aad8bad1265d863c1ebfc51a776a5af6b5960b7131e80737ffe79bfc52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
