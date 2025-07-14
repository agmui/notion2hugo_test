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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=84169590809e46810bf78b129594bf1dc8229d5f4f88015904cb0b7b3cd04b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
