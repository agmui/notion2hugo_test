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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NOKZBR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIGudaLQJ%2BNBOLXvTl%2BrdpCqBdwRn69%2B%2FyEgPZDCK6gIgfu6J0IUfzUoMzxCHka5iDfpZvlYFuwi0M3bZZnG173sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwYZHu965ZvaT%2BC3yrcA2x%2Br3bUCoFKsfDJ8Ee0L1J7lRbuetvHQesnabsdQZ4SwbzH%2FndTVlxbkLx8Th188XTGI0ywYPi%2B1yJGCfMffMRXoEpbpvq7X9xQb%2FKG3LbEhSy6hO5iEc5oLs7h%2FaJSYUAGrgc7elMRyr3dBW4%2F%2BnUaq6sHHncBkLtJfQf0uq%2Fcb22TpbSjq3krhjdnpo8TC5SIKuhgYNwFrGvgwCJhZO3fo00mDNB1G8Ifc3oQ6DjpGcGohimOu19yFfDeAr9pvSSDZTVAEd9mn7m0gC4hSqT0lQY%2BwuG7S%2BLazEnISgRMjpUSmSgsE91j9sXL8J1nOqCNWFltlFqVotKU9yZtdWv2Jlrg0M9KBg2BKakxueXpDc2VnX8fy%2BuqgAm%2FYAgkfhPQNXlsatZk6NJJYeJbGWoar15ZJ5QcYVwIqs0tSWn7nA5OjGWh5WC%2BRtWJIqAhj9Y75saU%2FUT3DqRisw%2FL%2BrqQlRkTlS41VuPReaiwppAPQCHiDy2PLi9NHaDDzTz53gGO8hzNcncj0rpV1z0rlshf448DuZIbcVH2ZPBrgt0MsHkIjwODnpoEe74zAxqWI8yAhyD9%2Bxy3xSgrEsQLAZ1jaLsU0AEu0baq4Q81hiogihljZsNOZhBzbnC3MPWO28IGOqUBJjjQxJ%2B6vU16QPyq0l%2BiPC1hCdu%2FarJfnW21ZwNu%2Bg7PjrXrJdkjLIkVMxydFS612r9jRI4iTh1wjAr%2Bwws05vf%2FltsDN1LoROb%2FQee%2FXIH0sxfoPp4N0%2Bss1BRNxEI3q60cEkrdx0bSM0dhYyr4cgTOcdRlq0twoT90fHBkELrK4Lp0eOhhIppVKkv56aQ8I99WRHSyAXcm3J9Cfk7JWkhRzZ8G&X-Amz-Signature=5f3f6e236e308fbaeec918a38a8daf0a981d8c055204f5c7e7009ac01a0911c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
