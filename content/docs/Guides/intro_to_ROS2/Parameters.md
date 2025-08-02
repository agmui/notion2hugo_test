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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DKDSZI2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFZpwJ4t%2BhngRf%2B5kTv3PVHkiQsmwf4DqZ6deyodtTyAiEA10RlabxXZe14EpsqF1GoMiGHV9xcdIMlEIBbGG7cvtsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDN8qlw7iC6gv%2B5ONHircA0Hby1M%2F%2BjoOyZTXS4rPsl4KSC4iaJ1ldGXIizARBkBHZvL%2FKgs6TmbcKInTnGFKVOGcUPf1HeF7r9psGYyEeXvTerQkwVYooVK5EW7yY4mHvDWvzIqjVmzD8gL4hX6%2Fa0k%2F7Yd6X0lnnsdxkcKxaSvQqUyqu%2F%2Ba%2BmadjpcEJIdwov%2BNHXJ52hcjr%2F95k%2FKTbuKv7s6eGOkHSopN0KdsMVZxGIp7SDkx%2FGQ2tHRxtZ8Oh6mp3yhVrpxbUfcMqUCiG09ow%2F3EmTMdcyJ6jNq86uVwYoBY7ES2poJT%2BfV2S4o%2F4Lf7LJRZIUfv1ShgStV9KHW9%2FiMUQEiAY21T%2B6IuCSePduBVisQA2qQfgBBLnW9QuBvp5Ic93O3KkQrHwZXS%2BqMJ05%2Bm2fYOXWflsbVqnE3k16KrnpI2dr798ItgySx90whLQI7Aw%2FD67wTUuUHedGcAAUr%2BhSPO%2B7KUQhtAzDR466dIh114NTF27U8f7IgHrFkat4cEAv5%2F7mNo%2F9yrAKGkwEJN42gfmKxP44xQ1VaN%2FbH2%2FD7irIB%2BurFR3Waz1GWV6jJSiUV6hEp3W6dZxmSyFXmycgV7nzNPUy6H61%2FgOZMqoRgSM28LSsvsHTHASRNQ0jcy7p4iOTsqMNSQuMQGOqUBAXI%2BS9%2B8tTKzoxnQUfWpk1pYiwulmg0OTk3EjFBI3ox7M9bGeYcZ4brBEDriV3KEz2%2BekvbtdtAgIzE18E5%2BHQG%2FVeBDs0OPVdvCB4cz2PJteXzANfmeRsIo6mG2lN0MkubYOFLeBihyD6IXEP2F1j00mvNQYH%2FSi%2B4AOYgg%2F3jNtTtPTs%2FR1Wqp9QvkCoCOhvwdOGpOPk91b4l9nVwdB7No18A7&X-Amz-Signature=c9529c647649bfc9e46df4cbc38953f0ab6e7760db662664b7f2ba8ffa8dc482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
