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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FCLMMM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc%2B8T%2BEMEvlsRWH3vH9dS6OUwVQzopKS1ik7%2BBDi7DkAiEAr%2B8yEM%2B8BpoYvrp%2BVntr8CDEt%2BBh9Gf3nEsPFvGH8kkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM0lDys%2FXcGfhCSfHCrcA1zKFl2Uqh%2BaQ3Mk9ji9ZXjus0xxZ6iq4KuCiAEGFkw7WnIFZLwVXUmgI8BN3pKwaI%2Bm1c2WWwLkhXFJpQMw1Z4XAutJqCCtc8sAWGssN0H2j21aPJwt%2B7RLm5on8TtIGzUB1doBpzK51J8d0kWVw5ZHjP0naaYW1NGbe8Ss7IUDbQC9WUT3C4msCDpYcoHzlQhmLoS2QamHW8fDIXIxYdozh51MLHAQtIzo7CLyB0M1LQIZI72FrB5MuNKveePcvH2XjIHrYW29NLekPSu3GCdPSU3d18lNCwD%2FjfBNuTFFjMl%2BMiGWIrIBO0JktxGDlVWRi%2FMJ58yGBBR425JnQYjaOie1A%2BjLT9KWmYe%2Blb3To1gQ9qgDZf%2FdkERzyRFQvz%2Fw%2FDpIUBBpslpXqFMKPAq8SgoJ3LdAl9SEc8nkXwoy5p3IjS%2BXMhzqb1aJTFB29VCgnOvtcSgURy25Ah7buJdPl8exri%2FPF01yWJ%2BG8GcCFvdjF%2FA1Ln0RnoqEzCwjMqro5UYNbQ%2Fl0sAQeVdBaOtffK6aqI8PjFRal1so4Pm853P0bJLW4B2EqsOIc0EFeBBSHtXyfTycq8LnD3oxLTmv%2FOIpKPAzGFTe15FsIPg2C5cOJg821uhBwtucMJ%2FdtMAGOqUBkva%2BO2CvZ94b4L2PfmtfUpy2QPwjE1erQZXF9tMMYO7ZK%2B8tgiGyy7612hLy%2BmEpck3%2BuuhI2P2xxbXOCI66cab5Xad5nR5wa4NdbqA4NLUTjRADsArFVPz2frc0iJ3QXBTn3Yo%2B4sp7QMCNyZ%2B3WxH%2BUWaDeBSYHyUMclcqLB1sm%2BGX1Q2SIrtJ22q5DslnwIVPMlBu8gvdke%2FNd05tJ%2FPAAxoX&X-Amz-Signature=3889bf7b25ef1231a1cf552033c7b62a5e5287d134788fb2c069b035905987d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
