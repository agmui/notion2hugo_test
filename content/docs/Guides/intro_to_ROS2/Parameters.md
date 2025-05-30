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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZ5WMO5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjaF1RnN5Qs2BgB%2F4uXyZ9P%2BIQwiZi%2ByC52uWoknz3QAIgIhOo5Mq29jG1ISvF8LlHY8DlosAQ173Vh9Y8KtpvS3EqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGFbv9JGvoKbTtKZCrcAxU%2B%2B7qBgEjMmbBjXlpC5ycikCWDkddk%2F8%2B47bW28O8Ni%2FJ7cl4kkuEVak5cQ8uiBmRs%2ByemDgT9PSRYsIRPxBUZfde9teEbbbjvO%2F58zmlzflaH9ANPXCaLmzdgwDCmJNwog4RB2lSEOlmd32tGDkGaVGKLNza6TCYeEEarTe%2Brk5%2FhrMbEu91OZ1dJkgeFn8mEvTK07Eifo2VWVcK9rH5QZAP59ltpFVUcxqmLn2lrIIgUPHM06oc%2B3fIS5pc7%2BdvHCKww9GERMRKu1qgydKIz7yOT%2FOumeFOUyDYg219O940sm8aMfcZVh%2F2eIKDX%2BXzC04De0IAAwZt4KnoU7atUC5Otkx3xPxmZ0%2BhxV%2FRfXuMekVVyjmn21rZtW2jWqG1oOyhD%2FvXC3A6RMQxzOODZcqv0hNowYOx6KTvQe%2FPcHYyNe3aJu9OKUjJnl4Tsc925M6naxgCcg6J%2FfJE9fBHkIKRrB91xwSJE%2Bf7lLSmFIG9BiDHK8P%2FmB58X%2F7jFaHghOCiA9OzuN05X46yzXu22pjqCB3tiWs4sn5XHUbqiJmwfmmcaD1I%2BKWEhyjHlTn6ZH7ZjxM2U9HR9IpsReUZnXbVcvabPJpFqgKihPKyoqW6rmb4ujRAnOAU1MOqO5sEGOqUBKQqY%2Fhgd6tBYDMOVuaZ%2FivNbZuL9tNp44RR0w3paOokrg4QTaGC2feMv1YQs22EchKhmgjtG4LQ1vxGnNagZ9GLX9jUpKxHT7CpHBzwXBhDrdbSsVJzpwqo7nhSNJe5HHUctr7mfx3OeJHcu8xR7EOfzfmAtWw%2FstL2ikRdc%2BETLBf9We9PXjvvaa6SDjmbRguI5zu65vWRd8HNPLczWt1ibILp%2F&X-Amz-Signature=74ec598cc13d0a7e20b7a1a16d4c699700b2f4ff19a6dc1f1a5aff11a9271618&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
