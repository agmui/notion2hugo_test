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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJGG4PI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXEIQV1EI5iZuAv5IpMBeqLzzTnyrgl8AZprHGV2uFwAIgYcrTFawxuszLcb1RJiDRB7zfj%2FN7b2skpeT0CyNXlUYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDMHVLCQetuKPBFNtYyrcA05wBs7BxRxO7buFjcMbo%2FQHOnZlWry225zKY26Jsl2NXuOYSTY8Z1wfvNiJV8s3z25EEK1U7SGiGLz%2F7WTyi4GyIrR0Qhix5KR2TrtrqoUnvHhpwbsILe0f7V7lzitdEamVCN6lr%2FYI5n%2Bz3KvLibhlP2CkD1lekzE3mc2Z2Rb%2B5fZhm8DGBNCUBz2Lo0CtZKK%2B8joGBPpqSKo2bYwWtsfSZ%2BQMzWvZjk7eGHFzlN4vK2QsncEMIBaY2gAnAnBPcWee5zf8CnP6xaSCYxFAA4dX9Lw2wfkBv0SAkQZT8wPN%2BpbNO92Zt%2BeIvjokj4f1obJoiNgnpZi%2FXgO1CWlDQCGIvJE9ChL5umqE%2BAkm0sIaznAllv4vhamQcU7dPIJxpEqwZnLSZEkiOk3T%2FH0bFQGfvtIPGcZX8p9EfGhvPAUYzT%2BrL38ybYWjli7W%2FDHMP9xNxPzZ122aWuL6w991L348PSJ2dKZD8M4YgfmJFi5F9%2Bp%2BfDjETGZAytlBIuWIayaSrd80Y%2BcVpVphyT%2FcOJJP4O%2F4S3kzT3LSOqccrjyjFOzElOq8kKaFifuHKb0Vnpw4jDh0MsSvCcY7%2BlKrgIT4JmV44SXSwYXE6mHbpkpW8h99Hltf2m3WdZI9MLr378AGOqUBRvslf10smYTnNcA12skqauY0GJ10Ob7qfpBPma7wLQRkAg4p%2BjPHYO2CXJ1kQ%2FA5F04hc2PdTrwz%2Buc63kRVwJTtlPZScMiYkvLEr6eY2og4iptkV8MLlctZSCc2vBkdkPxdWcsQHJlUMQ5Z85%2Fe3UQ%2Bb9F9cMe2BQfbfC0ldWz%2Bb%2FjX5UVK91IflFOygr7UiEJ4O7GvtswwI4v01lKEDwlnw6HB&X-Amz-Signature=eb3ccf1b16063d67ec1faf0cff18408bca0f3b0cbc97619b5e278d98d3c11188&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
