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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP6JTNTN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDUS0G8J%2FPJ%2BmsTuKcICh5I6vA7RZagqU4zeh08X%2FZSmgIgahI4cB98I0FgOxVAWDsyKJHJKMyXPa5S3g7gDzHhFRkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLVp6cJ3sVADjGVuvircA%2BKvAKzZDzdXGoJON1xMDDFaE3WPTZb6OIjcHNG3r79dS00oh7jJkh%2Bwq1tegpLiy20ZGvxY3ubyFGMxZ6snXyDBdpzH91LvY1SSkrevSJk1W9crobTr8xPINCI%2BG8uLZEHENXcc8hlVUiQGdicQ5HSai8KL%2FM4WiWmNa2EJaNSgnmAsx6jHyaKT4lwR5WY%2FMG68JPyrwRtTTnrP48P6OlVDcL1C9ywjjG2LEgoYpjdheeO%2F%2BPnNG9PAJyf8%2FEsmBUMJ%2FUXHVHTU%2BXc%2Bx5oUDVxsQGgs9CoCYVUmODHc0eSSSbtau5Voy8XCbZeRdtgy5D8bPvWWYmdcwq9JVAZhXTdgo1X7ggJSeNUDPu9j8gy%2BWJhXP0%2B12U2gEsC7BG2g%2BgUvu4Pb7rB3RtfHPI1QmsxRQ1UwdwqHy85tmuY%2FFyfGBp28lpdeuF%2FLyH2hRKUZaQlopnWSKqFWigwTu0BL4CMtf2t0BFxJK50ROSGYbPEpDzzHg7haRYlUw71eeAxZ4ZznovbRDLJBAz2fj9kga6akBdC4tiahgsoupoEshvU9FXlYLiO9GXHLg0vVNyCrr7u6zLN0HIQZUOazHgiewJhFvs%2F%2FnrB2sWJcgCjEwGTm%2BDkCV3LU8IkZOdEUMP205b4GOqUB58ADcFxmpGfP05w0jiCDlzXKc8%2BiMxOg1v78HVyAWHHrHLGaqhDNLPMFCFM3aebPUs1iHAwprwvQNrsidZFNBzfmkkah9opXQ7J84Tseme%2FaOw6FcdyKcROdlr86j%2BgDATESb5NRijxqd6M%2B2W0D1yh2O7cdzAfVegqrPp0nbIgg6XwKzLEB1AyahP0MRVZSKgmO0J9jS%2B5nqpmrGmHCbctP5bRA&X-Amz-Signature=ac8eba36c043f8df7e551f5f108d4ccdec345b6e83c8294ba6f3c92099a989fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
