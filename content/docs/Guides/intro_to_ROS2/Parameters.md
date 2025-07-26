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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6M55AL7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHKlffjXnLfeEXjuu3xYcjmgX0oQOHHfYIkQtKctJvkxAiEAvcU6Ez8ze%2FahcID4Rge%2Byllb6d7Rl9l4RTL1inHXigwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOzXPl3%2FISKKjF%2F11CrcA1eW%2ByWtBQXOVdjYsWBy1DRuziv0%2FIxpYJTSLgUZTIv%2FTE1mKXF%2FCfCJSYjE%2FmHg6panbC1tfkD%2Bj4vKl1YKTe70PgUfjpTkRQgMnmS6i1m9Zi%2Fr%2B7tMUmtSI2FH5XoHu5l8ceuu9OKj95v12ui2J%2FQAwm4GP7uMSDI3zu58rx8XjH7I6ir5qnNceKX%2FGNk7%2BtlgnW1eXMj7cQNJYcluzEchin6iG5UPLYnPrn8oLI8J3scL2JNZAhv7BMTCbViBHMueyKJnSVFeXNNXQClAi2Ck26S4JKx9LSWtiIl160aSo59LFigi5Y9ZHLiwo1ikfe6BKczGpV0CwsJ8d9OtUM9H%2BsGCTmftqQNbGPG0RXA7KGkzlWqTszq6HuuHZsBoCyVDmYknYhWYdJYp%2FuffvXaXflsJ1hy%2BtIOMkLrjMlmL4IOBxDGr0HeccjEmQAeLn80XdvgfCefts1LV5Bz4OJyTyvd6b3WrM6FiN2vRRiFQRgqWBhccSeCbbUpiYY62agmz9lykmDblRhkgAbJZHliQn6u5cmrSmIEDonp1xVpnxNM8vwjNOwdepC1t4Cn7A9uZOVWmvDaGWtu5oqrHJyHFVPiXYkgw%2BQDdo2HamO2ZBaHHlSv%2FU2Gs0toMMNf5ksQGOqUBPOOSskg%2BD%2FGl9ukDyVTQf%2BVQUvLRWzkC8ImrbEkPXx3hG2fcQIH9EgJ1EIaSVnoOt6fm64LsEaOVTkGz4H0K3b53XVOUjVtE85GyWorXmXw7eZbmA997wVKzVqiKLmWEVU%2FmcOd5rZKZxZerZkX3oomqAZDhFe0BCNR5N8jfYnIH%2B7lJZLLfv0kx3qh0jV2BQKUMfUJWsCP9Gh98DF4lWDyeC4O%2B&X-Amz-Signature=27f2e9b9230e7136a2132d14f02d032b0b3dd9985f6c898ac8689a710e99b61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
