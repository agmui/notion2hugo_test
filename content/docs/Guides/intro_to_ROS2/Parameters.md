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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDGNHYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDpHvJO5r2yvsVt%2FhrZqUEEEzC07bCU3QIc4u4aowNjKQIgQmALOIuHWU7yYN%2FVGgTgJRRnv35Pazzho4n1QS8%2F62Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDD1R50ZimChftPKS7ircA642DlZSa2VuBulll5GEgpr7Bn%2F5rUBAhoybUFVsV10kXrilArPkFdfy6ttUHZ6cq38KqnnycVEniSXME%2FSb1P8hm%2F95H8iuImkp0w%2B9k76xQoXAs%2B6SBVBOO1%2FsDSm5hqa3XeGWDYCJw7El1N8Gb%2BMllJ1BbBPX6FYgJ01zOEjghFTcETAXSka9RkZHU2bIIHu6smXgea0ROfusG%2FcwgYHg9SU8dX7ULrgnXl1l91SCodtDjuD7rAy072bcwD1ZpzUmoIJGtlJZofDXy39NlJNBlWijAuIF5vZxKbOT6ccgnMwfjk52yZmoQ8dDoo%2FfMr%2B%2BGAH3pBXVbDx0JY6d5sOzbAwNharp5mNrJwlGnOJU1oytZEsQp0PG9Iv8weI8QEfckdpMFEgr71raZKnVaatrHTczXXJbVboQVO8kz7P0uOHSgVuBPoDpRO0vB0vl8lIvV8MJQjukmSxYxBC6Lttu32lSieCblSsrahMFV9B3ZgLlNX38xxeidd5FPnxMTnbhRmw6e8oPc%2FojsecAVAJ0DDmBLYyRWdTrId7bIer6K8Jbd4wtc5t7apdigcfYMFNgZOMdsnZ9bvQnQ078NCSpLoW%2FXwyr9MLkUeR1Tm0cjt935EHB8f9RiB%2B0MITKyr0GOqUBA%2BGuGbhk4WRGNT7noJlNbr5iajoFh5zAyQLYzA6WJ6X68B0qCo84NFU8SDJOXZCLvrlER5Ta23IkStWR96CypfxejZwd51dk%2B%2FPVNWHaA6kWSnbq2rvR%2FMqGludOOt7L%2FdgMxBZm8jX0oWYvfCFZg%2BhjXpSoOv3jTmyu27qsxYM6If788ggAsAW%2F%2F7JSPINFZ8ZK%2FBzKOnNPjS%2FZlFirOWvvh6D6&X-Amz-Signature=78f228af7bf899c07139889cd69c3d683775377d69e4257ca75db7f31655e6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
