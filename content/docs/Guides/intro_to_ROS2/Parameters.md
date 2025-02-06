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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSHWHIT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDUD80xwGqsINTuZezT3XN2gq%2BgPsYgvEgZ6SMb5Q3eAwIgW9o%2BrI2SqKu11rksvf091ZQ8B7MkqUHhiyO7%2B4rcbDUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL7xTaE8QdKb7P3aUircA%2BNLL9lGtN%2FezAKajVEIsjk09v4Fs1rqllGQ4Oxcw%2FfiBK4bRsm5%2F8kAJZ2llS4ULK9N8I15SzVKWrAASARYr9bUsgSBkXbSOrslDJhrwo89bZIBvIZV%2BXDul%2FvGcIhia%2B2pJ13F6XZJIrqHvfsZRej0hTICUCTdyCHylZmiFijxZI5K07CuqAChGVjw7xfV2PYqgFzEuCUWsdtzieiZvNm3nQoJqfK9EMm9OVjzmUfK%2BWuchR%2BVFU6a5me%2BQi9YqFor0VqxO0qv2bbV7Dmrn%2BUNddw9aBfNztB9MRYNMamKzFC0aVjo6PQyeTowTI060pbeWrkMz99SO1wobskqxv3LZ02fhBkhpcpjDWX8o4qrR1eyKM2eiNjPFuHlyNMvM07bhFBZhDPzCzoNJ%2FaQXQccHDZsKevDMSTdBCZxL%2BBk037SsGFIjHd5u9Px9XOLjtZzUFxjL6DBbRcECn%2FD8QLoAva3k9vC8pxDFM3vf7bxG8ytplZ9B4R%2F4HjqChTq18XFMhPXIQBoDHuM4okS0RGsihWzlsOyIXycRqc85LryyNNaBHYz8R%2F%2BqYg2BZifP1Y0C%2FqFtsXoEV0DVKufvrFb2rAmfgFuDLJRxXivkQByEw8wWDDCgh5cqqfqMOPgkL0GOqUBVTZJZJuJt2vWJvishXM5DDYGoknDywi5h43JidMmx4JfjGQO4pP%2BUvrZM1G%2BYwvJ3NTMzUoGdp2zepCt8wxwHyfPAe%2BxzO2UpFA9WPRLKLEW5939qhhHCsL4W91bQ3cLsd8gPASPCZdN7fkVlNjOZjNaJKBP2q71SYEPhsbJ9mu03G6fu8bmb%2FjR902SaAR6qsn%2BH6Dvhlgmkl%2BQBl2lp1swVdJK&X-Amz-Signature=e29fcbc9d5ffbce5b430493a5aabce4371ce64eb24506b8a50962f2318932002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
