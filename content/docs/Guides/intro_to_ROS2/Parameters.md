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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YMGF65%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDUMLssKbBIKNXyaUwPUWAs%2FD%2BZbWpMzf%2Fpautskr0WqgIgRXruTf2W%2BgMKCvwtZbYqg4a5JDRYV%2Bres1BddIo4kmgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHOQ2SfEEMFPmAPGvircA0jV%2FM9I7YkgKCpv1oZVwKZz9b8k4E0lb0wWddl9q69jb02DoOd2eu6h6vMyv09mbc6F0%2F9bnh1e8DCS1zxvOR5GKsVlVZLh377XIYgIiaqOuCWz1m%2FPVBdxBpuWeagbBNIpG8MsIvcMyD2iZk4K7ZBnRwvsrmdo1y2xneyIKqWVchnUhKGrUAdy%2Byay9FWlvJCerWk4jy9Y7tQ8CDEh8ByT0C3AV%2FTfVhgxT%2B0MBa2%2FtVAmPxDq3W1SpOv12%2FJHmOYmHZkfNZF2wr4DaFXUMiAH9qH9snbnlEyTwgo8l7gBfNqmAS4zrvNxbesZBq24MnaSqxQHz5IQ5za4RZlaj%2F0W9ei7c0AG04Hc4kQXgK5sdUe9WccgXPmyUDiiNokaUlcgNZiKqPMohsznYr8eIdMz0NIbs2iJbf0ISZeT8jQWcKjAJOfRvICHgA8J4RT6b7V01i%2FM4cqzlM7SaR4O7NjYnE%2FmSema%2Fncr6W5x4XR6gFZDq2Qh2cn4nt7VfaZ6iitJMuwTfiVasUV9PXjGppfuRC5h9N838d2fWr4CxaGW3TMHN07kPm6zB4MoRCWPO8%2F6w2wujteK%2BF7yS8yWz3qzJuRhSwquHiah4Rr8PrgLp2TdZiYjJAyEb4aYMNOi6sIGOqUBy%2ByzGLCy9y5Wfqn6REvNU3Krbt%2FiDFq1Tg0LeTNJ5PBlK4%2BG84I6A3rYns2YRzmAZFrQm4SKK4Bw8kapG8HIDJM8Of7q7aC4HZuPhYX%2B7A9Whaine6TKZeLxOhDO2B9ucS%2BITIQ7HEGORgK37cAPPHeiSomCPsMdnBCRelupDvhTDqCSv4waNGvLUPQylp6Obm5WTyKVCKm%2B0ZPjzEYtlil8ybIg&X-Amz-Signature=29a3fc9c27ad9da67a1c78e54138e1d21a42c79542de8d8a2ed665fdfe473ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
